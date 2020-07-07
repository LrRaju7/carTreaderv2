import React, {Component} from 'react';
import ClassNames from 'classnames'
import PropTypes from 'prop-types';
import {  withRouter} from 'react-router-dom';
import SearchBar from '../../Forms/SearchBar';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { Container, NavLink, Collapse, Navbar as BootstrapNavbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';



class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navBarOpen: false,
      modalOpen: false
    }
  }

  compomentDidUpdate () {
    this.setState({ navBarOpen: false })
  }

  tabClass (tab) {
    console.log(this.props)
    return ClassNames({
      active: this.props.location.pathname === tab
    })
  }

  tabClassIncludes (tab) {
    let check = this.props.location.pathname.includes(tab)
    return ClassNames({
      active: check
    })
  }  

  toggleMenu () {
    this.setState({ navBarOpen: !this.state.navBarOpen })
  }

  render () {
    let roleElement = []
    let roleLinkElement = <NavLink href='/account' ><i className='fa fa-user' />Account</NavLink>
    let signupElement = []

    if (this.props.role === 'admin') {
      roleLinkElement = <NavLink href='/admin' ><i className='fa fa-user' />Account</NavLink>
    }

    if (this.props.auth.authenticated === true) {
      roleElement = <Nav navbar style={{justifyContent: 'flex-end'}}>
        <NavItem className={this.tabClass('/account')}>
         
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.props.user}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  {roleLinkElement}
                </DropdownItem>
                <DropdownItem>
                   <NavLink href='/logout' ><i className='fa fa-user' />Log Out</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>          
        </NavItem>
      </Nav>
    } else {
      signupElement =<Nav navbar style={{justifyContent: 'flex-end'}}>
      <NavItem className={this.tabClass('/register')}>
        <NavLink href='/register'>SignUp
        </NavLink>
      </NavItem>
      </Nav>

      roleElement = <Nav navbar style={{justifyContent: 'flex-end'}}>
        <NavItem className={this.tabClass('/login')}>
          <NavLink href='/login'>Login
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
        <BootstrapNavbar color="white" fixed="top" expand="lg" className='pad80lr marg15lr nopadtb'>
          <Container fluid>

              <NavbarBrand className='navbar-brand' href='/'>
                <img className='navbar-logo' src='/media/autotrade_logo.png' alt='' />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleMenu.bind(this)} className="mr-2"/>

            <Collapse isOpen={this.state.navBarOpen} navbar>
            <Nav navbar style={{width: '100%'}}>
                <NavItem className={this.tabClassIncludes('/auctions')}>
                  <NavLink href='/auctions'> Auctions
                  </NavLink>
                </NavItem>
                <NavItem className={this.tabClass('/about')}>
                  <NavLink href='/about'> For Sale
                  </NavLink>
                </NavItem>

                <NavItem className={this.tabClass('/contact')}>
                  <NavLink href='/contact'> Contact
                  </NavLink>
                </NavItem>    
                 </Nav>

                 {roleElement}
                 {signupElement}
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
