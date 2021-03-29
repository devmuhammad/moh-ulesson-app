import React, {Component,Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from '../layout'
import Dashboard from './views/dashboard'
import Chapters from './components/chapters'
import Lesson from './components/lesson'

const Client = () => {


    return (
        <Fragment>
            <Layout screens={

                <Router>
                    
                    <Route exact path={"/"}  exact component={Dashboard}/>
                    <Route exact path={"/chapter/:id"} component={Chapters}/>
                    <Route exact path={"/lesson/:id"} component={Lesson}/>
                    
                </Router>
            } >
                
            </Layout>
        </Fragment>
    );
}

export default Client;