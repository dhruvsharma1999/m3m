import React from "react";
import Pickadate from 'pickadate/builds/react-dom'
import { Accordion } from "react-bootstrap";
import PdfIcon from '../../assets/dust/mhc-pdf.svg'
export default class PatientMyDocumentMyAppointments extends React.Component{
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
                 <Accordion className="mhc-appoinment-tabs mb-4">
  <Accordion.Item eventKey="0">
    <Accordion.Header><span>Dr Amarendra Kumar Singh, Cardiology</span> <span className="text-primary">4 May 2021</span></Accordion.Header>
    <Accordion.Body>
    <div className="row">
      <div className="col-10">
        <p className="fw-bolder mb-2">Patient Notes & Documents</p>
        <p className="mb-0">Fever, Fatigue</p>
        <div className="d-flex mt-3">
          <div >
            <img src={PdfIcon} alt="PdfIcon" className="img-icon" />
          </div>
          <div >
            <img src={PdfIcon} alt="PdfIcon"  className="img-icon" />
          </div>
        </div>
      </div>
      <div className="col-2 text-end">
        <p className="mb-0 text-primary fw-bolder">11:05 AM</p>
      </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><span>Dr Amarendra Kumar Singh, Cardiology</span> <span className="text-primary">4 May 2021</span></Accordion.Header>
    <Accordion.Body>
    <div className="row">
      <div className="col-10">
        <p className="fw-bolder mb-2">Patient Notes & Documents</p>
        <p className="mb-0">Fever, Fatigue</p>
        <div className="d-flex mt-3">
          <div >
            <img src={PdfIcon} alt="PdfIcon" className="img-icon" />
          </div>
          <div >
            <img src={PdfIcon} alt="PdfIcon"  className="img-icon" />
          </div>
        </div>
      </div>
      <div className="col-2 text-end">
        <p className="mb-0 text-primary fw-bolder">11:05 AM</p>
      </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </React.Fragment>
        )
    }
}