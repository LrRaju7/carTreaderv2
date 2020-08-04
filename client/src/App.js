import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/Routing/Routes';
import {Container} from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
library.add(fal);
const App = () => {
  return (
      <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routes} />
          </Switch>     
        </Fragment>
      </Router>

    </Provider>
  );
};

export default App;
