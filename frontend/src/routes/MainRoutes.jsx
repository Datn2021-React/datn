import React from "react";
import { Switch, Route } from "react-router-dom";
import CategorySearch from "../components/Header/Search/CategorySearch";
import ProductCart from "../components/ProductCart/ProductCart";
import Cart from "../pages/Cart/Cart";
import Category from "../pages/Category/Category";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import ProductDetail from "../pages/ProductDetail";
import LoginSignUp from "../pages/User/LoginSignUp/LoginSignUp";
import { loadUser } from "../Redux/actions/userAction";
import store from "../Redux/store";

const MainRoutes = () => {
  React.useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/category/:slug" component={Product} />
      <Route path="/category" component={Category} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/search" component={CategorySearch} />
      <Route path="/category/:keyword" component={Category} />
      <Route path="/product/:name/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" exact component={ProductCart} />
      <Route path="/login" exact component={LoginSignUp} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default MainRoutes;
