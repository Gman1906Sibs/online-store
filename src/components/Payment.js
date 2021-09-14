import { useState,useEffect } from "react";
import axios from "./axios";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";
import { db } from "../firebase";


function Payment() {

    const dispatch = useDispatch();

    const { emptyCart } = bindActionCreators(actionCreators, dispatch)

    const history = useHistory();
    const cartState = useSelector((state) => state);
    const cart = cartState.cart.cart
    const user = cartState.cart.user
    // console.log("user id >>>", user.uid)

    const amounts = cart.map((amount) => {
        return amount.price
    })

    const value = amounts.reduce((acc, val) => acc + val, 0);

    const items = cart.length;

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate stripe secret that willallow usto charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${value * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])

    console.log("THE CLIENT SECRET IS >>>", clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceded(true);
            setError(null)
            setProcessing(false)

            emptyCart([])

            history.replace("/orders") })        
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.Message : "")
    }

    return (
        <div>
            <div className=" flex justify-center bg-gray-100 p-1 w-[100vw] border-b-[1px] border-gray-200 ">
                <h1 className="  "> 
                    Checkout ({items} items) 
                </h1>
            </div>

            <div>
                <div className=" flex-col md:flex-row pb-3 border-b-[3px] border-gray-200 ">
                    <h4 className="  mr-2 py-2">
                        Delivery Details
                    </h4>

                    <div className=" w-[100vw] ">
                        <form className=" flex-col "> 
                            <input type="text" className=" w-[80vw] border-[1px] px-2 rounded-md m-1 " placeholder="Full Name" />
                        </form>
                        <form className=" flex-col "> 
                            <input type="text" className=" w-[80vw] border-[1px] px-2 rounded-md m-1 " placeholder="Contact Number" />
                        </form>
                        <form className=" flex-col "> 
                            <input type="text" className=" w-[80vw] border-[1px] px-2 rounded-md m-1 " placeholder="Street Address" />
                        </form>
                        <form className=" flex-col "> 
                            <input type="text" className=" w-[80vw] border-[1px] px-2 rounded-md m-1 " placeholder="City, Country" />
                        </form>
                    </div>
                </div>

                <div className = " pb-3 border-b-[3px] border-gray-200 ">
                    <h4 className=" py-2 ">Review Items For Delivery</h4>

                    <div className=" w-[80vw] md:max-w-[300px] ">
                        { cart.map((product) => {
                            return( <  CheckoutProduct 
                                id= {product.id}
                                title={product.title}
                                text={product.text}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            /> )
                        })}
                    </div>
                </div>

                <div className = " p-3 border-b-[3px] border-gray-200 ">
                    <h4 className=" py-2 ">Payment Method</h4>

                    <form onSubmit= {handleSubmit}>
                        <CardElement onChange= {handleChange}/>

                        <div>
                            <CurrencyFormat 
                                value={value}
                                renderText = {(value) => (
                                    <>
                                        <p>
                                            Order Total:
                                            <strong> {value} </strong>
                                        </p>
                                       
                                    </>
                                )}
                                decimalScale={2}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                
                            />

                            <button disabled={processing || disabled || succeded} className=" bg-[#ff4d00] max-w-[300px] w-full px-3 py-[1px] text-white text-md rounded-lg ">
                                <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                            </button>

                            {/* Errors */}
                            {error && <div>{error}</div>}

                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
