import React, { Component } from "react";
import hospitalLogo from '../../assets/dust/woodland.webp'
import Pickadate from 'pickadate/builds/react-dom'
export default class PatientHomeCare extends Component{

    render(){
        return(
            <React.Fragment>
                 <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8">
                 <div className="d-flex flex-column flex-md-row">
                 <div className="form-floating mhc-dob date mb-4">
              <Pickadate.InputPicker  required    readOnly={false} />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">Start Date</label>
                    </div>
                    <div className="form-floating mhc-dob date mb-4 ms-0 ms-md-3">
              <Pickadate.InputPicker  required    readOnly={false} />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">End Date</label>
</div>
                 </div>
                 </div>
                 </div>
                <div className="mhc-patient-details-card mhc-homecare">
    <div className="row">
        <div className="col-md-3 col-lg-3">
            <p className="mb-1 text-primary fw-bold">Fri, 25 May 2021 | 04:15 PM</p>
            <p className="mb-0 tittle ">Vinod Kumar</p>
        </div>
        <div className="col-md-3 col-lg-3 mt-3 mt-md-0 text-start ">       
            <p className="mb-0 tittle ">Covid Care 15 Days <i class="mhc-icon icon-mhc-info cursor-pointer text-primary"></i></p>
            <p className="mb-0 ">Woodlands Hospital</p>
        </div>
        <div className="col-md-3 col-lg-3  mt-3 mt-md-0 text-start text-md-center ">   
          <img src={hospitalLogo} className="hopsital-logo" alt="hospitalLogo" />
        </div>
        <div className="col-md-3  col-lg-3  mt-3 mt-md-0 text-start text-md-end">
            <p className="mb-1 tittle">Pending</p>
            <p className="mb-0 ">INR 600</p>
        </div>
    </div>
  
</div>
<div className="mhc-patient-details-card mhc-homecare">
    <div className="row">
        <div className="col-md-3 col-lg-3">
            <p className="mb-1 text-primary fw-bold">Fri, 25 May 2021 | 04:15 PM</p>
            <p className="mb-0 tittle ">Vinod Kumar</p>
        </div>
        <div className="col-md-3 col-lg-3 mt-3 mt-md-0 text-start ">       
            <p className="mb-0 tittle ">Covid Care 15 Days <i class="mhc-icon icon-mhc-info cursor-pointer text-primary"></i></p>
            <p className="mb-0 ">Woodlands Hospital</p>
        </div>
        <div className="col-md-3 col-lg-3  mt-3 mt-md-0 text-start text-md-center ">   
          <img src={hospitalLogo} className="hopsital-logo" alt="hospitalLogo" />
        </div>
        <div className="col-md-3  col-lg-3  mt-3 mt-md-0 text-start text-md-end">
            <p className="mb-1 tittle">Pending</p>
            <p className="mb-0 ">INR 600</p>
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-12 text-start text-md-end">
            <button className="btn btn-primary rounded-1" >Pay Now</button>
        </div>
    </div>
  
</div>



            </React.Fragment>
        )
    }
}