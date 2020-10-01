import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { loadUser } from '../../actions/auth';
import { connect } from 'react-redux';
import BuyBidAuctionLayout from '../Layouts/BuyBidAuctionLayout';
import Login from '../Auth/LoginPage';
import AdminLogin from '../Auth/Admin/AdminLoginPage';
import AdminSignup from '../Auth/Admin/AdminRegisterPage';
import LoginTab from '../Auth/LoginTabPage';
import RegisterTab from '../Auth/RegisterTabPage';
import ListingsPage from '../Listings/ListingsPage';
import ListingPage from '../Listing/ListingPage';
import EditListingPage from '../Listing/EditListingPage';
import CreateListingPage from '../Listing/CreateListingPage';
import PrivateRoute from '../Routing/PrivateRoute';
import ProfilePage from '../Profile/ProfilePage';
import Dashboard from '../Dashboard/Dashboard';
import AdminDashboard from '../Dashboard/AdminDashboard';
import EditProfilePage from '../Profile/EditProfilePage';
import HomePage from '../Homepage/HomePage';
import AboutCartrader from '../Homepage/AboutCartrader';
import Details from '../Homepage/common/detailsPage';
import Contact from '../Homepage/Contact';
import YourListingsPage from '../Dashboard/YourListingsPage';
import BiddingHistoryPage from '../Dashboard/BiddingHistoryPage';
import YourReviewsPage from '../Dashboard/YourReviewsPage';
import PageNotFound from '../Layouts/Components/PageNotFound';
import EntryFee from '../Forms/EntryFeeForm';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const Routes = ({ loadUser, dispatch }) => {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
      <Switch>
        <AppRoute exact path='/' layout={BuyBidAuctionLayout} component={HomePage} />
        <AppRoute exact path='/auctions/:id/details' layout={BuyBidAuctionLayout} component={Details} />
        <AppRoute exact path='/ct-panel' layout={BuyBidAuctionLayout} component={AdminLogin} />
        <AppRoute exact path='/ct-panel/admin-reg' layout={BuyBidAuctionLayout} component={AdminSignup} />
        <AppRoute exact path='/login' layout={BuyBidAuctionLayout} component={Login} />
        <AppRoute exact path='/about' layout={BuyBidAuctionLayout} component={AboutCartrader} />
        <AppRoute exact path='/contact' layout={BuyBidAuctionLayout} component={Contact} />
        <AppRoute exact path='/register' layout={BuyBidAuctionLayout} component={RegisterTab} />
        <AppRoute exact path='/listings' layout={BuyBidAuctionLayout} component={ListingsPage} />
        <AppRoute exact path='/listings/:slug' layout={BuyBidAuctionLayout} component={ListingPage} />
        <AppRoute exact path='/auction/entryfee' layout={BuyBidAuctionLayout} component={EntryFee} />
        <PrivateRoute exact path='/create' layout={BuyBidAuctionLayout} component={CreateListingPage} />
        <PrivateRoute
          exact
          path='/listings/:slug/edit'
          layout={BuyBidAuctionLayout} component={(EditListingPage)}
        />
        <AppRoute 
          exact 
          path='/profile/:id' 
          layout={BuyBidAuctionLayout} component={ProfilePage}
        />
        <PrivateRoute exact path='/dashboard' layout={BuyBidAuctionLayout} component={(Dashboard)} />
        <PrivateRoute exact path='/ct-panel/dashboard' layout={BuyBidAuctionLayout} component={(AdminDashboard)} />
        <PrivateRoute
          exact
          path='/dashboard/edit'
          layout={BuyBidAuctionLayout} component={(EditProfilePage)}
        />
        <PrivateRoute
          exact
          path='/dashboard/listings'
          layout={BuyBidAuctionLayout} component={(YourListingsPage)}
        />
        <PrivateRoute
          exact
          path='/dashboard/reviews'
          layout={BuyBidAuctionLayout} component={(YourReviewsPage)}
        />
        <PrivateRoute
          exact
          path='/dashboard/bids'
          layout={BuyBidAuctionLayout} component={(BiddingHistoryPage)}
        />
        <AppRoute layout={BuyBidAuctionLayout} component={(PageNotFound)} />
      </Switch>
    </div>
  );
};

export default connect(null, { loadUser })(Routes);
