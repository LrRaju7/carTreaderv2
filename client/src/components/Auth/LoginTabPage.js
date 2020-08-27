import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BuyerLogin from './LoginPage';

const LoginTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <section className='section-home container-fluid'>
    <div className='p-3 mb-5 bg-white rounded'>
      <Nav tabs className="nav-justified">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1'} )}
            onClick={() => { toggle('1'); }}
          >
            Buyer Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Bidder Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Auctioneer Login
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <BuyerLogin/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <BuyerLogin/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <BuyerLogin/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </div>
    </section>
  );
}

export default LoginTab;