import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";


function Product({ id, title, text, price, rating, image }) {

    const cart = useSelector((state) => state);

    // console.log(cart)



    const dispatch = useDispatch();

    const {addToCart, emptyCart, removeFromCart} = bindActionCreators(actionCreators, dispatch);


    return (
        <div className=" bg-white w-full mx-[10px] my-[10px] px-3 py-3 rounded-lg " key={id}>
            <p className=" text-sm " >
                <span><strong>{title}</strong></span>{text}
            </p>

            <strong>${price}</strong>

            <div className=" flex ">
                {Array(rating).fill().map((_, i) =>(
                    <p>⭐️</p>
                ))}
            </div>

            <img 
                className=""
                src={image}
                alt="" 
            />

            <div className=" w-full flex justify-center ">
                <button 
                    className=" bg-[#ff4d00] px-3 py-1 text-white rounded-lg "
                    onClick= {()=> addToCart({ id, title, text, price, rating, image })}
                >
                    Add to Cart
                </button>
            </div>

            
            
        </div>
    )
}

export default Product
