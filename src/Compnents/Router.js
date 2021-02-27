import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import MovieContainer from "../Screens/Movie/MovieContainer";
import TvContainer from "../Screens/TV/TvContainer";
import SearchContainer from "../Screens/Search/SearchContainer";
import Header from "./Header";

export default () => (
    <Router>

        <>
            <Header />
            <Switch>
            <Route path={"/"} exact component={MovieContainer} />
            <Route path={"/tv"} exact component={TvContainer} />
            <Route path={"/search"} exact component={SearchContainer} />
            <Redirect from={"*"} to={"/"} />

            </Switch>
        </>
    </Router>
)
