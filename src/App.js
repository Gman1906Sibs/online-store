import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./store/index";
import { bindActionCreators } from "redux";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JUmgVGhVlcYCS8zFUotLskHrSgPWegaWdKRMvvLPvMHIl83QTAWo6P2XAnVlgOVL09jS73l2FT87LuZxfxzbMTr00haTq8Pla");

function App() {

  const userState = useSelector((state) => state)
  const dispatch = useDispatch();
  const { setUser } = bindActionCreators(actionCreators, dispatch);
  // console.log(setUser)
  

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        console.log("I AM >>>", authUser.email)
        // user is logged in
        setUser(authUser)
      } else {
        // user is logged out
        setUser(null)
        
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className=" max-w-[1500px] ">
        
        <Switch>
          <Route path="/store">
            <Header />
            <Store />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
               <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
