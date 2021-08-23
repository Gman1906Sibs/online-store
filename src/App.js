import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Store from "./components/Store";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className=" max-w-[1500px] ">
        <Header />
        <Switch>
          <Route path="/store">
            <Store />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
