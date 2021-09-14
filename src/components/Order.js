import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {

    const value = order.data.amount

    return (
        <div className=" bg-white m-4 p-3 rounded-md ">
             <h2>Order</h2>
             <div className=" flex justify-between ">
                <p >{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
                <p className=" hidden md:flex">
                    <small>{order.id}</small>
                </p>
             </div>
             <p className=" flex md:hidden">
                <small>{order.id}</small>
            </p>

             <div className="  ">
                {order.data.cart?.map(item => (
                    <  CheckoutProduct   
                    id= {item.id}
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    hideButton
                />
                ))}
             </div>

            <div className=" flex justify-end ">
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
            </div>
             
        </div>
    )
}

export default Order
