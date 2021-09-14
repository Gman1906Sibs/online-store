import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";
import { db } from "../firebase";
import Order from "./Order";

function Orders() {

    const [orders, setOrders] = useState([]);

    const dispatch = useDispatch();
    const { emptyCart } = bindActionCreators(actionCreators, dispatch)
    const cartState = useSelector((state) => state);
    const cart = cartState.cart.cart
    const user = cartState.cart.user

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user?.uid).collection("orders").orderBy("created", "desc").onSnapshot(snapshot=> (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
        
    }, [user])

    return (
        <div className="  bg-gray-100 ">   
            <h1>Your Orders</h1>

            <div>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
