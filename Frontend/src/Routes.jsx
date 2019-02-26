import React, {Fragment} from 'react';
import {Route, Switch, withRouter } from 'react-router-dom';

import Home from './pages/Home';
import Todos from './pages/Todos';
import Error from './pages/Error';

import Header from "./components/Header";

const Routes = (location) => {
    const {pathname} = location;

    return(
        <Fragment>
            {pathname !== '/' &&<Header/>}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/todos" component={Todos} />
                <Route path="/error" component={Error} />
            </Switch>
        </Fragment>
    );
};

export default withRouter(Routes);