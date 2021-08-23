import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

function Subtotal() {

    const cartState = useSelector((state) => state)
    const cart = cartState.cart.cart
    const items = cart.length


    const amounts = cart.map((amount) => {
        return amount.price
    })

    const value = amounts.reduce((acc, val) => acc + val, 0)


    return (
        <div className=" p-3 h-[150px] bg-gray-50 border-[1px] border-gray-100 rounded-md ">
            {/* <p>Subtotal (0 items): $0</p>
            <div className=" flex ">
                <input type="checkbox" className=" mt-[2px] mr-2 " />
                <p className=" text-[12px] ">Get Spares Nation discount card</p>
            </div>
            <button className=" py-1 px-3 rounded-lg bg-[#ff4d00] w-full text-[12px] text-white " >Proceed to checkout</button>
 */}

            <CurrencyFormat 
                value={value}
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({items} items):
                            <strong> {value} </strong>
                        </p>
                        <small>
                            <input type='checkbox' className=" mt-[2px] mr-2 "/> 
                            <span className='text-[12px]'>Get Spares Nation discount card</span>
                        </small>
                    </>
                )}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                
            />

<button className=" py-1 px-3 rounded-lg bg-[#ff4d00] w-full text-[12px] text-white " >Proceed to checkout</button>
        </div>

        
    )
}

export default Subtotal
