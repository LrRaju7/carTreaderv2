import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import Grid from './common/grid.js'
import '../../styles/components/_grid.scss';
import '../../styles/components/_auction.scss';
import AdvancedSearch from './common/advancedSearch';
class HomePage extends Component {
  render() {
    return (
      <section className='section-home container-fluid'>
        <div className="main p-3 mb-5 bg-white rounded">
          <Row>
            <Col lg={10}>
              <Tabs>
                <TabList>

                  <Tab>Ending Soon</Tab>
                  <Tab>Newly Listed</Tab>
                  <Tab>Newest Cars</Tab>
                  <Tab>Oldest Cars</Tab>
                </TabList>
                <TabPanel>
                  <Grid paginate list_order='ending soon' />
                </TabPanel>
                <TabPanel>
                  <Grid paginate list_order='newly listed' />
                </TabPanel>
                <TabPanel>
                  <Grid paginate list_order='newest cars' />
                </TabPanel>
                <TabPanel>
                  <Grid paginate list_order='oldest cars' />
                </TabPanel>
                <TabPanel>
                  <Grid paginate list_order='found' />
                </TabPanel>
              </Tabs>
            </Col>
            <Col lg={2}>
              <AdvancedSearch />
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}

export default HomePage
