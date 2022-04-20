import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import logo from '../../assets/images/logo-myhealthcare.svg'
import materialClose from '../../assets/images/material-close.svg'
import materialMenu from '../../assets/images/material-menu.svg'
import phoneCall from '../../assets/images/phone-call.svg'
import loginUser from '../../assets/images/login-User.png'
import MHCLocation from '../mhc-location';
import { Collapse } from 'react-bootstrap';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavCollapsed: true,
      isSubMunu: true,
      IsLoginSubMenu: true,
      isAfterLoginSubmenu: true,
      open: false
    }

    this.closeNaveBar.bind(this)
    this.handlecollspe.bind(this)
  }

  handlenavbar() {

    this.setState({ isNavCollapsed: !this.state.isNavCollapsed });
  }

  closeNaveBar() {
    this.setState({ isNavCollapsed: true })
    this.setState({ IsLoginSubMenu: true })
    this.setState({ isAfterLoginSubmenu: true })
    this.setState({ isSubMunu: true })

  }
  handlesubmune() {
    this.setState({ isSubMunu: !this.state.isSubMunu });
    this.setState({ IsLoginSubMenu: true })
    this.setState({ isAfterLoginSubmenu: true })
  }
  handleLoginSubMenu() {
    this.setState({ IsLoginSubMenu: !this.state.IsLoginSubMenu });
    this.setState({ isSubMunu: true })
    this.setState({ isAfterLoginSubmenu: true })
  }

  handleAfterLoginSubmenu() {
    this.setState({ isAfterLoginSubmenu: !this.state.isAfterLoginSubmenu });
    this.setState({ isSubMunu: true })
    this.setState({ IsLoginSubMenu: true })
  }
  handlecollspe() {
    console.log("open ", this.state.open)
    this.setState({ open: !this.state.open });
  }

  render() {





    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container position-relative">
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>





          <img src={phoneCall} className="mob-phone-call d-block d-lg-none" />
          <div className={`menu-toggle d-lg-none ${this.state.isNavCollapsed ? '' : 'on'}`} onClick={() => this.handlenavbar()}>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
          </div>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>this.handlenavbar()}>
              {
                this.state.isNavCollapsed===true ? <img src={materialMenu} /> :<img src={materialClose} />
              }
              </button> */}
          <div className={`${this.state.isNavCollapsed ? '' : 'mob-submenu'} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto  mb-2 mb-lg-0">

              <li className="nav-item ">
                <Link className="nav-link " onClick={() => this.closeNaveBar()} aria-current="page" to="/booking-consult">Specialities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " onClick={() => this.closeNaveBar()} aria-current="page" to="/booking-consult/hopsital">Hospitals</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " onClick={() => this.closeNaveBar()} aria-current="page" to="/booking-consult/Clinics">Clinics</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " onClick={() => this.closeNaveBar()} aria-current="page" to="/booking-consult/Doctors">Doctors</Link>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-none d-lg-block" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <span className="nav-link d-flex d-lg-none justify-content-between align-items-center nav-service" onClick={() => this.handlesubmune()} >   Services
                  {
                    this.state.isSubMunu === true ? <i className="mhc-icon icon-plus"></i> : <i className="mhc-icon  icon-minus"></i>
                  }
                </span>
                <ul className={`${this.state.isSubMunu ? 'mobsubnone' : 'mobsublock'} dropdown-menu`} aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" onClick={() => this.closeNaveBar()} aria-current="page" to="/booking-consult">Book Consult</Link>
                  <Link className="dropdown-item" onClick={() => this.closeNaveBar()} aria-current="page" to="/Book-test">Book Tests</Link>
                  <Link className="dropdown-item" onClick={() => this.closeNaveBar()} aria-current="page" to="/order-medicine">Order Medicines</Link>
                  <Link className="dropdown-item" onClick={() => this.closeNaveBar()} aria-current="page" to="/homecare-services">Homecare Services</Link>
                  <Link className="dropdown-item" onClick={() => this.closeNaveBar()} aria-current="page" to="/care-package">Care Programs</Link>
                  <Link className="dropdown-item" onClick={() => this.closeNaveBar()} aria-current="page" to="">Purchase device</Link>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link " onClick={() => this.closeNaveBar()} aria-current="page" to="/blog">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " onClick={() => this.closeNaveBar()} aria-current="page" to="/partners">For Partners</Link>
              </li>

              <li className="nav-item dropdown order-first order-lg-last">
                <a className="nav-link dropdown-toggle d-none d-lg-block" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="icon-user-_1_ "></span> <span className='ms-1'>Login | Register</span>
                </a>
                <span className="nav-link d-flex d-lg-none justify-content-between align-items-center nav-service" onClick={() => this.handleLoginSubMenu()} >   Login | Register
                  {
                    this.state.IsLoginSubMenu === true ? <i className="mhc-icon  icon-plus"></i> : <i className="mhc-icon  icon-minus"></i>
                  }
                </span>
                <ul className={`${this.state.IsLoginSubMenu ? 'mobsubnone' : 'mobsublock'} dropdown-menu dropdown-right`} aria-labelledby="navbarDropdown">
                  <li>
                    <div className="nav-reigster-form">
                      <div className="d-flex">
                        <div className="w-25">
                          <select className="form-select" aria-label="Default select example">
                            <option defaultValue="">+91</option>
                            <option defaultValue="">+91</option>
                          </select>
                        </div>
                        <div className="w-75">
                          <input type="text" className="form-control border-start-0" id="exampleFormControlInput1" placeholder="Mobile Number" />
                        </div>
                      </div>
                      <p className="m-0 fs-7 text-primary mt-2">Please enter a valid mobile number.</p>
                      <div className="input-group enter-otp mt-3">
                        <input type="text" className="form-control rounded-start" placeholder="Enter OTP" maxLength="4" aria-label="Enter OTP" aria-describedby="basic-addon1" />
                        <button type="submit" className="input-group-text rounded-end text-primary" id="basic-addon1">Resend OTP</button>
                      </div>

                      <p className="mb-2 mt-2">By logging in, you agree to our <a href="" className="text-primary">Privacy Policy</a> </p>
                      {/* <button className="btn btn-primary" type="submit">Submit</button> */}
                      <Link className="btn btn-primary rounded-1 " to="/r">Submit</Link>
                      <p className="mt-2 mb-0">Don't have an account yet?  <Link to="/user-register" onClick={() => this.closeNaveBar()} className="text-primary">Register</Link> </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown order-first order-lg-last ">
                <a className="nav-link dropdown-toggle d-none d-lg-block" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={loginUser} className="loginUser" /> <span className='ms-1'>Rupendra Patel</span>
                </a>
                <span className="nav-link d-flex d-lg-none justify-content-between align-items-center nav-service" onClick={() => this.handleAfterLoginSubmenu()} >   Rupendra Patel
                  {
                    this.state.isAfterLoginSubmenu === true ? <i className="mhc-icon  icon-plus"></i> : <i className="mhc-icon  icon-minus"></i>
                  }
                </span>
                <ul className={`${this.state.isAfterLoginSubmenu ? 'mobsubnone' : 'mobsublock'} dropdown-menu dropdown-right`} aria-labelledby="navbarDropdown">
                  {/* <ul className={`${this.state.IsLoginSubMenu ? 'mobsubnone' : 'mobsublock'} dropdown-menu`} aria-labelledby="navbarDropdown"> */}
                  <li className="dropdown-item pb-2  cursor-pointer border-bottom" onClick={() => this.handlecollspe()} aria-expanded={this.state.open}>
                    <span className="mhc-icon icon-exchange me-2" ></span> Switch Profile

                  </li>
                  <li className="p-0">
                    <div className={`collapse collapse-switch ${this.state.open === true ? "show" : ''}`}>
                      <ul className="list-unstyled">

                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check ">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault1">
                              Rupendra  Patel<br />
                              <small>Male, 35</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault2">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault3">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault4">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault5">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault6">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault6">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault6">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item py-2 border-bottom">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                            <label className="form-check-label ms-2" htmlFor="flexRadioDefault7">
                              Vinod Kumar<br />
                              <small>Male, 40</small>
                            </label>
                          </div>
                        </li>
                      </ul>

                    </div>
                  </li>

                  <li className="dropdown-item  py-2 border-bottom">
                    <Link onClick={() => this.closeNaveBar()} className="" to="/patient-dashboard"> <span className="mhc-icon icon-dashboard me-2"></span> Dashboard</Link>
                  </li>
                  <li className="dropdown-item pt-2">
                    <Link onClick={() => this.closeNaveBar()} className="" to="">   <span className="mhc-icon icon-log-out me-2"></span> Logout</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-none d-lg-flex">
              {/* {
                   pathname==="/" ? '':  <MHCLocation isNavbar={true} />
                 } */}

              <MHCLocation isNavbar={true} />
            </form>
          </div>
        </div>

      </nav>
    )

  }
}

export default NavBar
