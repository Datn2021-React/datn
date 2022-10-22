import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductCart from "../components/ProductCart/ProductCart";
import Cart from "../pages/Cart/Cart";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import LoginSignUp from "../pages/User/LoginSignUp/LoginSignUp";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category/:slug" component={Product} />
      <Route path="/category" component={Category} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" exact component={ProductCart} />
      <Route path="/login" exact component={LoginSignUp} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default MainRoutes;
