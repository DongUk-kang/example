import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Movie from "../View/Movie";
import Tv from "../View/Tv";
import Search from "../View/Search";
import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
            <Route path={"/"} exact component={Movie} />
            <Route path={"/tv"} exact component={Tv} />
            <Route path={"/search"} exact component={Search} />
            <Redirect from={"*"} to={"/"} />

            </Switch>
        </>
    </Router>
)
