import React, { useState, useEffect } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Loading from "./component/Loading";
import ProductDetail from "./component/ProductDetail";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { RouteWithLayout } from "./layout/common/";
import LandingLayout from "./layout/LandingLayout";
import MainLayout from "./layout/MainLayout";
import MainLayoutSidebar from "./layout/MainLayoutSidebar";
import {
  Home as HomePage,
  Houses as HousesPages,
  Hosted as HostedPages,
  CardUser as CardUserPages,
  Dashboard as DashboardPage,
  PagesNotFount as NotFound,
  Hosted,
  User,
} from "./pages";
import index from "./pages/houses/index";
import Orders from "./pages/orders/Orders";
import { useSelector } from "react-redux";
import OrderDetail from "./pages/orders/OrderDetail";
import Cart from "./component/addToCart/Cart";
import OrderPages from "./pages/orders/OrderPages";

export default function Routes() {
  const { authUser } = useSelector((state) => state.userState);

  const [isLoading, SetIsLoading] = useState(true);

  if (isLoading) {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2600);
    return (
      <>
        <div className="max-h-screen">{isLoading && <Loading />}</div>
      </>
    );
  }

  return (
    <Switch>
      <Redirect exact from="/" to="/hosted/signin" />

      <Route exact path="/detail/houses/:id" component={ProductDetail} />

      <Route exact path="/hosted/cart/:id" component={Cart} />

      <Route exact path="/hosted/cart/" component={Cart} />

      <Route exact path="/hosteed/order/detail" component={OrderPages} />

      <Route exact path="/hosted/users" component={User} />

      <RouteWithLayout
        component={SignUp}
        exact
        layout={LandingLayout}
        pageTitle=""
        path="/hosted/signup"
      />

      <RouteWithLayout
        component={SignIn}
        exact
        layout={LandingLayout}
        pageTitle=""
        path="/hosted/signin"
      />

      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=""
        path="/hosted/home"
      />

      <RouteWithLayout
        component={NotFound}
        exact
        pageTitle="404"
        layout={MainLayoutSidebar}
        path="/hosteed/not-found"
      />

      <RouteWithLayout
        component={DashboardPage}
        exact
        pageTitle="Dashboard"
        layout={MainLayoutSidebar}
        path="/hosteed/dashboard"
      />

      <RouteWithLayout
        component={DashboardPage}
        exact
        pageTitle="Dashboard"
        layout={MainLayoutSidebar}
        path="/hosteed/seller"
      />

      <RouteWithLayout
        component={index}
        exact
        pageTitle="Houses Product"
        layout={MainLayoutSidebar}
        path="/hosteed/houses"
      />

      <RouteWithLayout
        component={Hosted}
        exact
        pageTitle="Hosteed"
        layout={MainLayoutSidebar}
        path="/hosteed/hosted"
      />

      <RouteWithLayout
        component={Orders}
        exact
        pageTitle="Order"
        layout={MainLayoutSidebar}
        path="/hosteed/order"
      />

      <RouteWithLayout
        component={OrderDetail}
        exact
        pageTitle="Order"
        layout={MainLayoutSidebar}
        path="/hosteed/order/detail"
      />

      <RouteWithLayout
        component={CardUserPages}
        exact
        pageTitle="Users"
        layout={MainLayoutSidebar}
        path="/setting/users"
      />

      <RouteWithLayout
        component={User}
        exact
        pageTitle="Users Info"
        layout={MainLayoutSidebar}
        path="/detail/users"
      />
    </Switch>
  );
}
