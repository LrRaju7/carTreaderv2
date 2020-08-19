import React, { Component } from 'react';
import ClassNames from 'classnames'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SearchBar from '../../Forms/SearchBar';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { Container, NavLink, Collapse, Navbar as BootstrapNavbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap';
import { setAuthToken } from '../../../utils/setAuthToken';


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navBarOpen: false,
      modalOpen: true
    }
  }

  compomentDidUpdate() {
    this.setState({ navBarOpen: false })
  }

  tabClass(tab) {
    console.log(this.props)
    return ClassNames({
      active: this.props.location.pathname === tab
    })
  }

  tabClassIncludes(tab) {
    let check = this.props.location.pathname.includes(tab)
    return ClassNames({
      active: check
    })
  }

  toggleMenu() {
    this.setState({ navBarOpen: !this.state.navBarOpen })
  }


  render() {
    let roleElement = []
    let roleLinkElement = <NavLink href='/dashboard/edit' ><span><i className='fa fa-pencil' /></span><span className="ml-3">Edit Account</span></NavLink>
    let signupElement = []

    if (this.props.role === 'admin') {
      roleLinkElement = <NavLink href='/admin' ><span><i className='fa fa-user' /></span><spsn>Account</spsn></NavLink>
    }

    if (this.props.auth.isAuthenticated === true) {
      const id = this.props.auth.user._id
      roleElement = <Nav navbar style={{ justifyContent: 'flex-end' }}>
        <NavItem className={this.tabClass('/dashboard')}>

          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret>
              {this.props.user}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href={`/profile/${id}`} ><i className='fa fa-user' /><span className="ml-3">Profile</span></NavLink>
              </DropdownItem>
              <DropdownItem>
                {roleLinkElement}
              </DropdownItem>
              <DropdownItem>
                <NavLink href={`/dashboard`} ><i className='fa fa-dashboard' /><span className="ml-3">Dashboard</span></NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href='/logout'><i className='fa fa-sign-out' /><span className="ml-3">Log Out</span></NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
      </Nav>
    } else {
      roleElement = <Nav navbar style={{ justifyContent: 'flex-end' }}>
        <NavItem className={this.tabClass('/login')}>
          <NavLink href='/login'>Login
          </NavLink>
        </NavItem>
        <NavItem className={this.tabClass('/register')}>
          <NavLink href='/register'>SignUp
        </NavLink>
        </NavItem>
      </Nav>
    }
    const navBarCollapse = ClassNames({
      'navbar-collapse': true,
      collapse: !this.state.navBarOpen
    })

    return (
      <Container fluid>
        <BootstrapNavbar color="white" fixed="top" expand="lg" className='pad80lr marg15lr' style={{zIndex:'10'}}>
          <Container fluid>

            <NavbarBrand className='navbar-brand' href='/'>
              <img className='navbar-logo' src='/media/autotrade_logo.png' alt='' />
            </NavbarBrand>
            <NavbarToggler  onClick={this.toggleMenu.bind(this)} className="mr-2"><span className="fa fa-bars"></span></NavbarToggler>

            <Collapse isOpen={this.state.navBarOpen} navbar>
              <Nav navbar style={{ width: '100%' }}>
                <NavItem className={this.tabClass('/')} >
                  <NavLink href='/'> Auctions
                  </NavLink>
                </NavItem>
                <NavItem className={this.tabClass('/about')}>
                  <NavLink href='/about'> What's Cartrader
                  </NavLink>
                </NavItem>
                <NavItem className={this.tabClass('/contact')}>
                  <NavLink href='/contact'> Contact
                  </NavLink>
                </NavItem>
              </Nav>
                <SearchBar />
              {roleElement}
            </Collapse>

          </Container>
        </BootstrapNavbar>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
