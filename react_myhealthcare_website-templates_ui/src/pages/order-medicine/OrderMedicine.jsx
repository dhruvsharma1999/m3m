import { render } from "@testing-library/react";
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb";
import doctor from '../../assets/dust/user-profile.jpg'
import artemisLogo from "../../assets/dust/hospital-artemis.webp"
import ReactDOM from 'react-dom'
import Pickadate from 'pickadate/builds/react-dom'
import LoginUser from '../../component/login-register/login'
import NewUserRegister from '../../component/login-register/register'
import FamilyMember from '../../component/family-member/familyMember'
import BookingSummaryPayment from "../../component/booking-summary-payment/bookinSummaryPayment";
import whatappRegister from '../../assets/images/whatsapp.svg'
import MultiImageUploader from "../../component/multi-image-uploader";
import tataOneMg from "../../assets/dust/tata-onemg.webp"
import Pharmeasy from "../../assets/dust/pharmeasy.webp"
import dicount from "../../assets/dust/tenOff.svg"
export default class OrderMedicine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loadmore:false
        }
    }
    
    handleLoad(){
        console.log(this.state.loadmore)
        this.setState({loadmore:!this.state.loadmore});
    }
    render(){
        return(
            <React.Fragment>
              <Container>
              <Breadcrumb url="" chlidrenUrl="" text="ORDER MEDICINES" />
              <h5 className="fs-7 text-secondary">Order Medicine</h5>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" autocomplete="off" placeholder="name" />
                            <label htmlFor="name">Pin Code <sup>*</sup></label>
                        </div>                        
                        <p className="mb-0 mt-1 text-primary">Your Location is Serviceable</p>
                     
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                    <div className="mhc-selectbox">
                        <select className="form-select" required={true}>                         
                            <option defaultValue="1">Delhi</option>
                        </select>
                        <label htmlFor="floatingSelect">State</label>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                    <div className="mhc-selectbox ">
                        <select className="form-select" required={true}>                            
                            <option defaultValue="1">New Delhi</option>
                        </select>
                        <label htmlFor="floatingSelect">City</label>
                    </div>
                    </div>
                </div>
                    {/* accordion starts */}
                    <div className="row accordion_orderMed">
                    
                      
                        <div className="col-12">
                            <Accordion defaultActiveKey="0" className="mt-4 mhc-profile-tabs">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Delivery Address</Accordion.Header>
                                    <Accordion.Body className="p-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-floating mb-4">
                                                    <input type="text" className="form-control" id="name" autocomplete="off" placeholder="name" />
                                                    <label htmlFor="name">Pin Code <sup>*</sup></label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                            <div className="form-floating mb-4">
                                                <input type="text" className="form-control" id="Mobile" autocomplete="off" placeholder="Mobile" />
                                                <label htmlFor="name">Mobile <sup>*</sup></label>
                                            </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-floating mb-4">
                                                    <input type="text" className="form-control" id="Email" autocomplete="off" placeholder="Email" defaultValue="" />
                                                    <label htmlFor="name">Email <sup>*</sup></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-floating mb-4">
                                                    <input type="text" className="form-control" id="AddressLine" autocomplete="off" placeholder="AddressLine" defaultValue="" />
                                                    <label htmlFor="AddressLine">Address Line 1  <sup>*</sup></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-floating mb-4">
                                                    <input type="text" className="form-control" id="AddressLine" autocomplete="off" placeholder="AddressLine" defaultValue="" />
                                                    <label htmlFor="AddressLine">Address Line 2  <sup>*</sup></label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" autocomplete="off" id="flexCheckDefault"  />
                                                    <label className="form-check-label  d-block d-sm-inline" htmlFor="flexCheckDefault">
                                                    I have read and agree to the <a href="" className="text-primary text-decoration-none">Terms and Conditions.</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="d-flex flex-column flex-sm-row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault1"  />
                                                        <label className="form-check-label  d-block d-sm-inline" htmlFor="flexCheckDefault1">
                                                        I agree to receive updates on
                                                        </label>
                                                    </div>
                                                    <div className="ms-2 mt-2 mt-sm-0">
    <a href="" className="text-primary text-decoration-none d-flex align-items-center"><img src={whatappRegister} alt="" className="whatapp" /> WhatApp</a>
</div>
                                                </div>
                            
                                            </div>
                                          
                                                <div className="col-12 mt-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" autocomplete="off" defaultValue="" id="flexCheckDefault2"  />
                                                        <label className="form-check-label  d-block d-sm-inline" htmlFor="flexCheckDefault2">
                                                        Save For Future Deliveries
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-3 text-end">
                                                    <button className="btn btn-outline-primary rounded-1 " type="submit" >Continue</button>
                                                </div>
                                           
                                           
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Select Vendor</Accordion.Header>
                                    <Accordion.Body className="p-3">
                                        <div className="row">
                                          <div className="col-md-6 mb-3">
                                          <div className="form-check mhc-vender-checkbox">
      <input className="form-check-input" type="radio" name="familty" id="tata" />
      <label className="form-check-label w-100" htmlFor="tata">
        <div className="d-flex align-items-center justify-content-between w-100 ms-4">
          <div className="imgholder">    <img src={tataOneMg} className="brand-name" />
          <p className="fs-13 m-0">Supported files type: jpeg , jpg , png, pdf. File size 1mb</p>
          </div>
         <div>
             <img src={dicount} alt="" className="discount-icon" />
         </div>
        </div> 
      </label>
    </div>
                                              </div>
                                              <div className="col-md-6 mb-3">
                                              <div className="form-check mhc-vender-checkbox">
      <input className="form-check-input" type="radio" name="familty" id="parmeasy" />
      <label className="form-check-label w-100" htmlFor="parmeasy">
        <div className="d-flex align-items-center justify-content-between w-100 ms-4">
          <div className="imgholder">    <img src={Pharmeasy} className="brand-name" />
          <p className="m-0">Supported files type: jpeg , jpg , png, pdf. File size 1mb</p>
          </div>
         <div>
             <img src={dicount} alt="" className="discount-icon" />
         </div>
        </div> 
      </label>
    </div>
                                              </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Upload Prescription</Accordion.Header>
                                    <Accordion.Body className="p-3">
                                        <div className="row">
                                            
                                            
                                            <div className= " col-md-6 mhc-multiImage">
                                                <div className="mb-3">
                                                 <MultiImageUploader />
                                                </div>
                                               
                                                <div>
                                                <h6>Patient Consent</h6>
                                                    <p>By Confirming the order i consent to my prescription being shared with MyHealthcare Pharmacy patners for home delivery of medicines</p>

                                                </div>                   
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault3"  />
                                                    <label className="form-check-label " htmlFor="flexCheckDefault3">
                                                        I Agree
                                                    </label>
                                                </div>
                                                <div className="mt-3">
                                                    <button className="btn btn-primary rounded-1 " type="submit" >Confirm Order</button>
                                                </div>
                                            </div>           
                                                            
                                            
                                            
                                            <div className="col-md-6 mt-4 mt-md-0 ">
                                                <div className="bg-white mhc-payment-details div_ul_name">
                                                <div className="details_prescription">
                                                       <h6>Prescription should contain</h6>
                                                       <ul className="ul_name">
                                                           <li className="li_name">Government regulation require a prescription for ordering some medicines</li>
                                                           <li className="li_name">Order will confirmed only after receiving the prescription</li>
                                                           <li className="li_name">Don't crop out any part of the image</li>
                                                           <li className="li_name">Include doctor & patient name as well as clinic/hospital visit date</li>
                                                           <li className="li_name">Medicines will be dispensed as per prescription</li>
                                                           <li className="li_name">Supported files type: jpeg , jpg , png</li>
                                                       </ul>
                                                       </div>       
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Order Confirmation</Accordion.Header>
                                    <Accordion.Body className="p-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h1 className="fs-5 text-primary">Order Confirmed</h1>
                                                <p className="mhc-dector-profile-text">Thank you, Amarendra Singh for entrusting your health in our hands. Your Order Details are below.</p>
                                            </div>
                                            </div>
                                            <div className="row order_confirmed_details mt-4">
                                                <div className="col-md-6 d-flex mt-3">
                                                    <p className="mhc-dector-profile-text">Order ID</p>
                                                    <h4 className="fs-7 text-secondary ms-4 ">BA2U651XN8IKDE2</h4>
                                                </div>
                                                <div className="col-md-6 mt-3 mt-lg-0 text-start text-md-end">
                                                    <img src={tataOneMg} alt="" className="lab-icon" />
                                                </div>
                                            </div>
                                            <div className="mhc-patient-details mt-4 p-0">
                                                <div className="row">
                                                    
                                                    <div className="col-lg-4 text-center text-lg-start ">
                                                        <div className="mhc-details-border p-3">
                                                        <p className="mhc-dector-profile-text">AMARENDRA SINGH</p>
                                                        <p className="mhc-dector-profile-text">9810681199</p>
                                                        <p className="mhc-dector-profile-text">amarendra@myhealthcare.life</p>
                                                        <p className="mhc-dector-profile-text">Khanpur, New Delhi</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-8 text-center">
                                                        <div className="p-3">
                                                        <p>Your order id PO21542740042 has been submitted successfully</p>
                                                        <p className="m-0">Our pharmacy patner PharmEasy will call you back to process your order</p>
                                                    
                                                            </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
     
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        
                        
                   
               </div>
              
              </Container>

             
            </React.Fragment>
        )
    }
}