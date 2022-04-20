import React, { Component } from "react";
import dectorProfile from '../../assets/dust/user-profile.jpg'
import Pickadate from 'pickadate/builds/react-dom'
import hospital from '../../assets/dust/hospital.svg'
import {Modal } from "react-bootstrap";
import MultiImageUploader from "../../component/multi-image-uploader";
export default class DoctorConsult extends Component{
    constructor(props){
        super(props);
        this.state={
            modal:false,
            modalview:false
         
        }
        this.handleShow=this.handleShow.bind(this)
        this.handleClose=this.handleClose.bind(this)
        this.handleviewShow=this.handleviewShow.bind(this)
        this.handleviewClose=this.handleviewClose.bind(this)
    }
    handleShow(){    
          this.setState({modal:true})   
      };
       handleClose (){
          this.setState({modal:false})
      };
      handleviewShow(){
        this.setState({modalview:true})
      }
      handleviewClose(){
        this.setState({modalview:false})
      }
    render(){
        return(
            <React.Fragment>
                <div className="row">
                <div className="col-lg-3">
                 <div className="d-flex flex-column flex-lg-row">
                 <div className="form-floating mhc-dob date mb-4">
              <Pickadate.InputPicker  required    readOnly={false} />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">Start Date</label>
                    </div>
                    <div className="form-floating mhc-dob date mb-4 ms-0 ms-lg-3">
              <Pickadate.InputPicker  required    readOnly={false} />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">End Date</label>
</div>
                 </div>

                    </div>
                    <div className="col-lg-3">
                    <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="1"></option>
    <option defaultValue="1">Speciality</option>
    <option defaultValue="2">Speciality</option>
  </select>
  <label htmlFor="floatingSelect">Speciality</label>
</div>
                    </div>
                    <div className="col-lg-3">
                    <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="1"></option>
    <option defaultValue="1">Consult Type</option>
    <option defaultValue="2">Consult Type</option>
  </select>
  <label htmlFor="floatingSelect">Consult Type</label>
</div>
                    </div>
                    <div className="col-lg-3">
                    <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="1"></option>
    <option defaultValue="1">Consult Status</option>
    <option defaultValue="2">Consult Status</option>
  </select>
  <label htmlFor="floatingSelect">Consult Status</label>
</div>
                    </div>
                </div>
                <div className="mhc-patient-details-card mhc-booking">
    <div className="row">
        <div className="col-md-12 col-lg-4 order-3 order-lg-1 mt-3 mt-lg-0">
            <p className="mb-1 text-primary fw-bold">Fri, 25 May 2021 | 04:15 PM</p>
            <p className="mb-0 tittle ">Vinod Kumar</p>
        </div>
        <div className="col-8 col-sm-8 col-md-8 col-lg-5 order-1 order-lg-2">
            <div className="d-flex align-items-start align-items-md-center">
              <div className="dctor-img">
                <img src={dectorProfile} alt="dectorProfile" />
              </div>
<div>   <p className="mb-1 tittle ">Dr. Vijay Kumar</p>
            <p className="mb-0 ">Max Smart Super Speciality Hospital, Delhi</p></div>
            </div>     

        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-3 order-2 order-lg-3 text-end">
            <p className="mb-1 text-primary fw-bolder">Pending</p>
            <p className="mb-0 ">INR 600</p>
        </div>
    </div>
    <div className="row align-items-center">
        <div className="col-lg-8">
            <button className="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Pay Now</button>
            <button onClick={()=>this.handleShow()} className="btn btn-outline btn-outline-secondary py-0 mt-2 rounded-1 ">Add Notes/ Documents</button>
        </div>
        <div className="col-lg-4 text-start text-lg-end mt-2">
          <img className="hospital-icon" src={hospital} alt="hospital" />
          <span className="text-primary ms-2">At Hospital</span>
        </div>
    </div>
</div>
<div className="mhc-patient-details-card mhc-booking">
    <div className="row">
        <div className="col-md-12 col-lg-4 order-3 order-lg-1 mt-3 mt-lg-0">
            <p className="mb-1 text-primary fw-bold">Fri, 25 May 2021 | 04:15 PM</p>
            <p className="mb-0 tittle ">Vinod Kumar</p>
        </div>
        <div className="col-8 col-sm-8 col-md-8 col-lg-5 order-1 order-lg-2">
            <div className="d-flex align-items-start align-items-md-center">
              <div className="dctor-img">
                <img src={dectorProfile} alt="dectorProfile" />
              </div>
<div>   <p className="mb-1 tittle ">Dr. Vijay Kumar</p>
            <p className="mb-0 ">Max Smart Super Speciality Hospital, Delhi</p></div>
            </div>     

        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-3 order-2 order-lg-3 text-end">
            <p className="mb-1 text-primary fw-bolder">Pending</p>
            <p className="mb-0 ">INR 600</p>
        </div>
    </div>
    <div className="row align-items-center">
        <div className="col-lg-8">
            <button onClick={()=>this.handleviewShow()} className="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">View Details</button>   
        </div>
        <div className="col-lg-4 text-start text-lg-end mt-2">
          <img className="hospital-icon" src={hospital} alt="hospital" />
          <span className="text-primary ms-2">At Hospital</span>
        </div>
    </div>
</div>
<div className="mhc-patient-details-card mhc-booking">
    <div className="row">
        <div className="col-md-12 col-lg-4 order-3 order-lg-1 mt-3 mt-lg-0">
            <p className="mb-1 text-primary fw-bold">Fri, 25 May 2021 | 04:15 PM</p>
            <p className="mb-0 tittle ">Vinod Kumar</p>
        </div>
        <div className="col-8 col-sm-8 col-md-8 col-lg-5 order-1 order-lg-2">
            <div className="d-flex align-items-start align-items-md-center">
              <div className="dctor-img">
                <img src={dectorProfile} alt="dectorProfile" />
              </div>
<div>   <p className="mb-1 tittle ">Dr. Vijay Kumar</p>
            <p className="mb-0 ">Max Smart Super Speciality Hospital, Delhi</p></div>
            </div>     

        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-3 order-2 order-lg-3 text-end">
            <p className="mb-1 text-primary fw-bolder">Pending</p>
            <p className="mb-0 ">INR 600</p>
        </div>
    </div>
    <div className="row align-items-center">
        <div className="col-lg-8">
            <button className="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Pay Now</button>
            <button className="btn btn-outline btn-primary py-0 mt-2 rounded-1 ">Start Consult</button>
        </div>
        <div className="col-lg-4 text-start text-lg-end mt-2">
          <img className="hospital-icon" src={hospital} alt="hospital" />
          <span className="text-primary ms-2">At Hospital</span>
        </div>
    </div>
</div>

<Modal show={this.state.modal} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">Add Notes/ Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mhc-booking ">
            <div className="d-flex align-items-start align-items-md-center">
              <div className="dctor-img">
                <img src={dectorProfile} alt="dectorProfile" />
              </div>
<div>   <p className="mb-1 tittle ">Dr. Vijay Kumar</p>
            <p className="mb-0 ">Max Smart Super Speciality Hospital, Delhi</p></div>
            </div> 
            </div>
            <div className="patient-details  my-4">
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Booked For</p>
                    <p className="mb-0">Vinod Kumar</p>
                </div>
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Booking Code</p>
                    <p className="mb-0">BAAJQUOCOP</p>
                </div>
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Appointnent Type</p>
                    <p className="mb-0">   <img className="hospital-icon" src={hospital} alt="hospital" /> At Hospital</p>
                </div>
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Date and Time</p>
                    <p className="mb-0">Fri, 25 May 2021 | 04:15 PM</p>
                </div>
            </div>
            <p className="mb-2">Please upload any documents that you would like to share with the doctor prior to your appointment.</p>
            <h4 class="fs-6">Notes for Doctor: </h4>
            <div className="row">
                   <div className="col-12">
                       <textarea className="form-control"></textarea>
                       </div>
                   </div>
                   <div className="mt-4">
                   <MultiImageUploader />

                   <button className="btn btn-primary rounded-1  mt-4">Upload Document</button>
                       </div>
                       <h1 className="fs-5 text-secondary  mt-4">Instructions</h1>
                   <ul className="mhc-instruction-list">
                       <li>Keep your MyHealthcare Virtual Consult App active 15 minutes before your appointment time.</li>
                       <li> The doctor will call you on your MyHealthcare mobile app at the time of your appointment. Please do 
allow for a delay in case the doctor is attending to an emergency.</li>
<li> In case you have booked an appointment for your family member, please ensure that they are using 
the MyHealthcare Virtual Consult App from your registered mobile number.</li>
<li> You can cancel your appointment only up to 1 hour prior to your appointment time.
                       </li>
                   </ul>
        </Modal.Body>
        </Modal>

        <Modal show={this.state.modalview} onHide={this.handleviewClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">Add Notes/ Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mhc-booking ">
            <div className="d-flex align-items-start align-items-md-center">
              <div className="dctor-img">
                <img src={dectorProfile} alt="dectorProfile" />
              </div>
<div>   <p className="mb-1 tittle ">Dr. Vijay Kumar</p>
            <p className="mb-0 ">Max Smart Super Speciality Hospital, Delhi</p></div>
            </div> 
            </div>
            <div className="patient-details  my-4">
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Booked For</p>
                    <p className="mb-0">Vinod Kumar</p>
                </div>
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Booking Code</p>
                    <p className="mb-0">BAAJQUOCOP</p>
                </div>
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Appointnent Type</p>
                    <p className="mb-0">   <img className="hospital-icon" src={hospital} alt="hospital" /> At Hospital</p>
                </div>
                <div className="content">
                    <p className="text-primary fs-13 mb-0">Date and Time</p>
                    <p className="mb-0">Fri, 25 May 2021 | 04:15 PM</p>
                </div>
            </div>
            <p className="mb-2">Please upload any documents that you would like to share with the doctor prior to your appointment.</p>
            <h4 class="fs-6">Notes for Doctor: </h4>
            <div className="row">
                   <div className="col-12">
                       <textarea className="form-control"></textarea>
                       </div>
                   </div>
                   <div className="multiview mt-4">
                   <div className="image-item">
                       <img src={dectorProfile} alt="" />                  
                   </div>
                   <div className="image-item">
                       <img src={dectorProfile} alt="" />                    
                   </div>

                  
                       </div>
                       <h1 className="fs-5 text-secondary  mt-4">Instructions</h1>
                   <ul className="mhc-instruction-list">
                       <li>Keep your MyHealthcare Virtual Consult App active 15 minutes before your appointment time.</li>
                       <li> The doctor will call you on your MyHealthcare mobile app at the time of your appointment. Please do 
allow for a delay in case the doctor is attending to an emergency.</li>
<li> In case you have booked an appointment for your family member, please ensure that they are using 
the MyHealthcare Virtual Consult App from your registered mobile number.</li>
<li> You can cancel your appointment only up to 1 hour prior to your appointment time.
                       </li>
                   </ul>
        </Modal.Body>
        </Modal>
            </React.Fragment>
        )
    }
}