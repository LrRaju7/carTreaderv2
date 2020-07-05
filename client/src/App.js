import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/Routing/Routes';
import {Container} from 'reactstrap'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import Notification from './components/Layout/Notification';
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
          <Navbar />
        <div className='toppad80 pad120lr'>
          <Container fluid>
                      <Switch>
            <Route component={Routes} />
          </Switch>
          </Container>
        </div>          
        </Fragment>
      </Router>
      <Notification />
    </Provider>
  );
};

export default App;
