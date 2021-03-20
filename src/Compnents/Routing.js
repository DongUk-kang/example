import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Movie from "../Screens/Movie"
import Tv from "../Screens/TV"
import Search from "../Screens/Search"
import Detail from "../Screens/Detail"
import Header from "./Header";

// export default () => (
const Routing = () => (
    <Router>

        <>
            <Header />
            <Switch>
            <Route path={"/"} exact component={Movie} />
            <Route path={"/tv"} exact component={Tv} />
            <Route path={"/search"} exact component={Search} />
            <Route path={"/movie/:id"} exact component={Detail} />
            <Route path={"/tv/:id"} exact component={Detail} />
            <Redirect from={"*"} to={"/"} />

            </Switch>
        </>
    </Router>
)

export default Routing;
