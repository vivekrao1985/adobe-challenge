import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import PDFLoader from "./viewer/PDFLoader";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/viewer" exact component={PDFLoader} />
                </Switch>
            </Router>
        )
    }
}