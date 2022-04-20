import React, { useEffect, useState } from 'react';
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import linkdin from "../../assets/images/linkdin.png"
import twitter from "../../assets/images/twitter.png"
import googlePlay from "../../assets/images/google-play.png"
import appStore from "../../assets/images/app-store.png"
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom'
function Footer () {
     const location = useLocation();
//  useEffect(() => {
//     const url=window.location.href;
//     // console.log("urlasxcasdzxcasdzx", url)
//   }, []);
    
        return(
            <React.Fragment>
                   <section className="mhc-mobile-menu d-block d-lg-none">
               <div className="dd">
               <ul className="list-inline d-flex justify-content-between mb-0">
                          <li className={`list-inline-item ${(location.pathname==="/booking-consult") ? "active" :(location.pathname==="/booking-consult/consult-doctor") ? "active" :(location.pathname==="/dector-profile") ? "active" :(location.pathname==="/Booking-confirmed") ? "active" :""}`} >
                              <Link className="d-flex align-items-center flex-column justify-content-center" to="/booking-consult">
                              <div className="image-holder">
                              <i className="mhc-icon icon-book-consult" ></i>
                              </div>
                              <span>Book <br /> Consult</span>
                              </Link>
                            
                          </li>
                          <li className={`list-inline-item ${(location.pathname==="/Book-test") ? "active" :(location.pathname==="/package-comparison") ? "active" :(location.pathname==="/package-login") ? "active" :(location.pathname==="/package-booking-confirm") ? "active" :""}`} >
                          <Link className="d-flex align-items-center flex-column justify-content-center" to="/Book-test">
                          <div className="image-holder">
                              <i className="mhc-icon icon-book-tests" ></i>
                              </div>
                              <span>Book <br /> Tests</span>
                              </Link>
                          </li>
                          <li className={`list-inline-item ${location.pathname==="/order-medicine" ? "active":""}`}>
                          <Link className="d-flex align-items-center flex-column justify-content-center" to="/order-medicine">
                          <div className="image-holder">
                              <i className="mhc-icon icon-order-medicines" ></i>
                              </div>
                              <span>Order <br /> Medicines</span>
                              </Link>
                          </li>
                          {/* <li className={`list-inline-item ${(location.pathname==="/homecare-services") ? "active" :(location.pathname==="/homecare-service-category") ? "active" :(location.pathname==="/homecare-service-category-compare") ? "active" :(location.pathname==="/home-care-login") ? "active" :(location.pathname==="/care-booking-confirmed") ? "active"  :""}`} > */}
                          <li className="list-inline-item">
                          <Link className="d-flex align-items-center flex-column justify-content-center" to="/homecare-services">
                          <div className="image-holder">
                              <i className="mhc-icon icon-homecare-services" ></i>
                              </div>
                              <span>Homecare <br /> Services</span>
                              </Link>
                          </li>
                          {/* <li className={`list-inline-item ${(location.pathname==="/care-package") ? "active" :(location.pathname==="/care-package-comparison") ? "active" :(location.pathname==="/care-package-login") ? "active" :(location.pathname==="/care-booking-confirmedd") ? "active" :""}`} > */}
                         <li className="list-inline-item">
                          <Link className="d-flex align-items-center flex-column justify-content-center" to="/care-package">
                          <div className="image-holder">
                              <i className="mhc-icon icon-care-packages" ></i>
                              </div>
                              <span>Care <br />  Packages</span>
                              </Link>
                          </li>
                     
                          </ul>
                          </div>
               </section>
             <footer className={`py-4 py-md-5 `}> 
              <div className="container">
                 <div className="row">
                     <div className="col-sm-6 col-md-6 col-lg-3">
                          <h2>MyHealthcare</h2>
                        <ul className="list-unstyled mt-3 mb-0">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Insights</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Terms of use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms and Conditions</a></li>
                        </ul>
                     </div>
                     {/* end col */}
                     <div className="col-sm-6  col-md-6 col-lg-3">
                          <h2>Our Services</h2>
                        <ul className="list-unstyled mt-3 mb-0">
                            <li><a href="">Book Appointment</a></li>
                            <li><a href="">Order Lab Test</a></li>
                            <li><a href="">Order Medicine</a></li>
                            <li><a href="">Special Heart Packages</a></li>
                            <li><a href="">Book Homecare</a></li>                       
                        </ul>
                     </div>
                     {/* end col */}
                     <div className="col-sm-6  col-md-6 col-lg-3 mt-4 mt-lg-0">
                          <h2>Partner Hospitals</h2>
                        <ul className="list-unstyled mt-3 mb-0">
                            <li><a href="">PSRI Hospital</a></li>
                            <li><a href="">Artemis Hospitals</a></li>
                            <li><a href="">Breach candy Hospitals trust</a></li>
                            <li><a href="">Primus Super Speciality Hospital</a></li>
                            <li><a href="">Aakash Healthcare Super Speciality</a></li>
                            <li><a href="">Woodlands Multispeciality Hospital</a></li>
                            <li><a href="">Vimhans Nayati Super Speciality</a></li>
                            <li><a href="">More...</a></li>
                        </ul>
                     </div>
                     {/* end col */}
                     <div className="col-sm-6  col-md-6 col-lg-3 mt-4 mt-lg-0">
                          <h2>Contact Us</h2>
                        <ul className="list-unstyled mt-3 mb-0">
                            <li><a href="">I'm a Patient</a></li>
                            <li><a href="">I'm a Doctor</a></li>
                            <li><a href="">I'm a Organisation</a></li>
                       
                        </ul>
                     </div>
                     {/* end col */}
                 </div>

                 <div className="row mt-3 mt-md-5 align-items-center">
                     <div className="col-md-5 col-lg-6 ">
                     <ul className="list-inline mb-0">
                     <li className="list-inline-item me-3"><span>Follow Us</span></li>
                     <li className="list-inline-item me-3 mt-2 mt-md-0"><a href="#" className="icon"><img src={facebook} /></a> <a href="#" className="icon"><img src={instagram} /></a> <a href="#" className="icon"><img src={linkdin} /></a> <a href="#" className="icon"><img src={twitter} /></a></li>
                     
                     </ul>
                     </div>
                     <div className="col-md-7 col-lg-6 text-start text-md-end mt-4 mt-md-0">
                     <ul className="list-inline mb-0">
                     <li className="list-inline-item me-3"><span>Download Our App</span></li>
                     <li className="list-inline-item me-3 mt-2 mt-md-0"><a href="https://play.google.com/store/apps/details?id=com.innocirc.vcpatient" target="_blank" className="download"><img src={googlePlay} /></a> <a href="https://apps.apple.com/in/app/myhealthcare/id1506349869" target="_blank" className="download"><img src={appStore} /></a></li>
                 
               
                     </ul>
                     </div>
                 </div>
              </div>              
            </footer>
            <div className="copy-right">
                    <p>Copyright &copy;  2022 · All Rights Reserved · MyHealthcare Technologies Private Limited</p>
                </div>
            </React.Fragment>
         )  
 
}

export  default Footer