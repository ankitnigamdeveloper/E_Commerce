

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";
import Contact from "../views/Contact";

var routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/" />,
  },
  {
    path: "/fashion-shop/contact",
    exact: true,
    layout: BaseLayout,
    component: Contact,
  },
  {
    path: "/fashion-shop/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/fashion-shop/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
];

export default routes;
