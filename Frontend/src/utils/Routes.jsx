import React, {Fragment} from 'react';
import {Route, Switch, withRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Error from '../pages/Error';

import Header from "../components/Header";
import {routePaths} from './config';

const Routes = (router) => {
    const {location:{pathname}} = router;

    return(
        <Fragment>
            {pathname !== '/' &&<Header/>}
            <div className={pathname !== '/' ? 'main-layout-header':'main-layout'}>
                <Switch>
                    <Route exact path={routePaths.HOME} component={Home}/>
                    <Route path={routePaths.TASKS} component={Tasks} />
                    <Route path={routePaths.ERROR} component={Error} />
                </Switch>
            </div>
        </Fragment>
    );
};

export default withRouter(Routes);