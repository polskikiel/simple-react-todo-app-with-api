import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from "./Login";
import Add from "./Add";
import List from "./List";
import Registration from "./Registration";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Registration}/>
            <Route path="/add" component={Add}/>
            <Route path="/show" component={List}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;