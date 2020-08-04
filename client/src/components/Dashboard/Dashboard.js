import React, { Fragment,useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/_dashboard.scss';

const DashboardTab = (props) => {
	const [activeTab, setActiveTab] = useState('1');
  
	const toggle = tab => {
	  if (activeTab !== tab) setActiveTab(tab);
	}

	return (
		<Fragment>

			<section className='section-home container-fluid'>
			<div className='shadow p-3 mb-5 bg-white rounded'>
      <Nav tabs className="nav-justified">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Bids
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Auctions
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">

            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </div>
			</section>
		</Fragment>
	);
};

DashboardTab.propTypes = {};

export default DashboardTab;
