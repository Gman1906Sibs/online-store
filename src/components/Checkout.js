import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

    const cartState = useSelector((state) => state)

    const cart = cartState.cart.cart

    const user = cartState.cart.user?.email


    return (
        <div className=" md:flex p-3  w-[100vw]">
            <div className=" w-[75vw] my-3 ">
                <div className=" flex justify-center w-[100vw] "> 
                    <img
                        className="hidden md:flex max-w-[500px] " 
                        src="https://image.shutterstock.com/image-photo/big-collection-auto-spare-parts-260nw-1758243971.jpg" 
                        alt="" 
                    />
                </div>

                <div className=" border-b-[1px] border-[#ff4d00] pt-[10px] md:pt-[0px] ">
                    <h3 className=" font-light text-[22px] ">
                        { user ? `Welcome ${user}` : "Please Sign Into Continue" }
                        
                    </h3>

                    <h1>
                        Your Shopping Cart
                    </h1>
                </div>

                <div className=" w-[80vw] md:max-w-[300px] ">
                    { cart.map((product) => {
                        return( <CheckoutProduct 
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
            <div className=" md:w-[25vw] sm:w-[100vw]" >
                <Subtotal />

                <div className=" w-full flex justify-center ">
                    <img 
                        src="https://i.pinimg.com/originals/64/ec/83/64ec832691a8c23790e675fbc8a9142e.gif" 
                        alt="" 
                        className=" hidden lg:flex max-w-[250px] p-3 "
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout
