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
export default class HopistalDectorProfile extends React.Component{
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
              <Breadcrumb url="" chlidrenUrl="" text="Doctors-profile" />
              <div className="row ">
                  <div className="col-lg-6">
                      <div className="mhc-dector-profile-card">
                     <div className="img-holder">
                         <img src={doctor} />
                     </div>
                     <div className="ms-3"><p className="m-0 fw-bold  text-secondary text-tittle">Dr Vijay Kumar</p>
                     <p className="sub-text m-0"><span className="fw-bold">Sr. Consultant, Cardiology</span><br /> Exp. 40+ Yrs</p>
                     <p className="mb-0 mt-2 fw-bold">Artemis Hospitals, Gurugram </p>
                     <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="pe-1"><span className="text-secondary">Available</span></li>
                                        <li className="px-1"><span className="text-secondary">mon,</span></li>
                                        <li className="px-1"><span className="text-secondary">thu,</span></li>
                                        <li className="px-1"><span className="text-secondary">wed,</span></li>
                                        <li className="px-1"><span className="text-secondary">wed,</span></li>
                                        <li className="px-1"><span className="text-secondary">wed,</span></li>
                                        <li className="px-1"><span className="text-secondary">wed,</span></li>
                                        
                                      
                                    </ul>
                     </div>
                      </div>
                      {/* end card */}
                      <ul className="list-unstyled d-flex mt-3 mb-0">
                           <li>
                               <div className="mhc-profile-dector-card active">
                                   <img src={artemisLogo} />
                                   <p>Artemis Hospitals <br />
Gurugram</p>
                               </div>
                           </li>
                           <li>
                               <div className="mhc-profile-dector-card">
                                   <img src={artemisLogo} />
                                   <p>Artemis Hospitals <br />
Gurugram</p>
                               </div>
                           </li>
                           <li>
                               <div className="mhc-profile-dector-card">
                                   <img src={artemisLogo} />
                                   <p>Artemis Hospitals <br />
Gurugram</p>
                               </div>
                           </li>
                           
                          </ul>
                  </div>
                  <div className="col-lg-6 mt-4 mt-lg-0">
                      <h4 className="fs-7 text-secondary">Profile</h4>
                      <p className="mhc-dector-profile-text">Dr Vijay Kumar  provides dedicated round-the-clock services to all patients with heart ailments. The Centre Has Received The Prestigious Lumen Global Award For The Best Response In Acute Heart Attacks for its effective practices to treat heart attacks during the Golden Hour: first hour after the onset of a heart attack, he can expect near-complete recovery.  </p>
                          

                          
                         

                              <Accordion defaultActiveKey="" className="more-details-tab">
  <Accordion.Item eventKey="0">

    <Accordion.Body>
    <h4 className="fs-7 text-secondary mt-3 mb-0">Qualification</h4>
                          <p className="mhc-dector-profile-text">MBBS, MD; DNB Cardiology</p>
                          <h4 className="fs-7 text-secondary mt-3 mb-3">Specialties</h4>
                          <ul className="list-unstyled d-flex flex-wrap mb-0">
                              <li>
                                  <span className="btn btn-outline-secondary rounded-1 me-3 mb-3">Cardiology</span>
                              </li>
                              <li>
                                  <span className="btn btn-outline-secondary rounded-1 me-3 mb-3">Heart Transplant</span>
                              </li>
                              
                          </ul>
    </Accordion.Body>
    <Accordion.Header onClick={()=>this.handleLoad()}>{
                                  this.state.loadmore==false ? <span>More...</span> : <span>less</span>
                              }</Accordion.Header>
    </Accordion.Item>
    </Accordion>
                  </div>
              </div>
<div className="border-bottom border-light w-100 transition mt-3 mt-lg-4"></div>

<div className="row mt-4">
    <div className="col-lg-6">
        <div className="d-flex flex-column flex-lg-row justify-content-start align-items-lg-center">
        <span className="fw-bold ">Consult Type</span>
        <ul className="list-unstyled mb-0 mt-4 mt-lg-0 d-flex align-items-center">
                          <li>            <div className="form-check mt-1 ms-0 ms-lg-4" >
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="All" />
  <label className="form-check-label" htmlFor="All">
  All
  </label>
</div></li>
<li>            <div className="form-check mt-1 ms-3 ms-sm-4">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="Virtual" />
  <label className="form-check-label" htmlFor="Virtual">
  Virtual
  </label>
</div></li>
<li>            <div className="form-check mt-1 ms-3 ms-sm-4">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="Hospital" />
  <label className="form-check-label" htmlFor="Hospital">
  At Hospital/ Clinic
  </label>
</div></li>
                      </ul>
        </div>
   
    </div>
    <div className="col-lg-6 mt-4 mt-lg-0">
    <h6 className="fs-6 mb-0 date-time">Select Date & Time</h6>
    </div>
</div>

   <div className="row">
       <div className="col-lg-6 order-1 order-lg-0">
       <Accordion defaultActiveKey="0" className="mt-4 mhc-profile-tabs">
  <Accordion.Item eventKey="0">
    <Accordion.Header>1. Login/ Register</Accordion.Header>
    <Accordion.Body className="p-3">
       
                {/* <LoginUser /> */}
        <NewUserRegister /> 
        {/* <FamilyMember btnDisplay={false} /> */}
         

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>2. Booking Summary & Payment</Accordion.Header>
    <Accordion.Body className="py-3">
   
    <BookingSummaryPayment />
       

    </Accordion.Body>
  </Accordion.Item>
</Accordion>
       </div>
       <div className="col-lg-6 order-0 order-lg-1">
       <ul className="list-unstyled d-flex flex-wrap mb-0 mt-3">
<li>
    <div className="mhc-slot-avability d-flex justify-content-center">
        <div className="mhc-bg Available"></div>
        <div className="mhc-text">Available</div>
    </div>
</li>
<li>
    <div className="mhc-slot-avability d-flex justify-content-center ms-3">
        <div className="mhc-bg Booked"></div>
        <div className="mhc-text">Booked</div>
    </div>
</li>
<li>
    <div className="mhc-slot-avability d-flex justify-content-center ms-3">
        <div className="mhc-bg Selected"></div>
        <div className="mhc-text">Selected</div>
         </div>
              </li>
           </ul>
           <div className="mhc-calendar mt-4">
           <Pickadate.DatePicker />
           </div>

           <h6 className="fs-6 mb-0 mt-0 mt-2 date-time">Select Time Slot</h6>
           <ul className="list-unstyled d-flex flex-wrap mb-0 mt-3">
                <li>
                    <button className="btn time-slot-btn rounded-1">
                        8:00 AM
                    </button>
                </li>
                <li>
                    <button className="btn time-slot-btn rounded-1 selected">
                        8:00 AM
                    </button>
                </li>
                <li>
                    <button className="btn time-slot-btn rounded-1">
                        8:00 AM
                    </button>
                </li>
                <li>
                    <button className="btn time-slot-btn rounded-1">
                        8:00 AM
                    </button>
                </li>
                <li>
                    <button className="btn time-slot-btn rounded-1 selected">
                        8:00 AM
                    </button>
                </li>
                <li>
                    <button className="btn time-slot-btn rounded-1">
                        8:00 AM
                    </button>
                </li>
                <li>
                    <button className="btn time-slot-btn rounded-1">
                        8:00 AM
                    </button>
                </li>
                <li>
                    <button className="btn time-slot-btn rounded-1 selected">
                        8:00 AM
                    </button>
                </li>
               </ul>
               <div className="w-100 text-left mt-3 mt-md-4">               <button className="btn btn-outline-primary rounded-1 mb-3">Continue</button></div>

           </div>

         
   </div>
              </Container>

       
            </React.Fragment>
        )
    }
}