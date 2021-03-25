
import React, {Fragment} from 'react';
// import * as serviceWorker from '../src/serviceWorker';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import Client from  '../src/client'

 const Index = () => {

  function MainRoute (){
    return (
          <Switch>
              <Route path={"/"} component={Client}/>
          </Switch>
    )
  }

  return (<Provider store={store}>
            <React.StrictMode>
              <Router>
                <MainRoute />
            </Router>
            </React.StrictMode>
  </Provider>
 )}
 
// 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
export default Index
