import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb";
import User from '../../assets/dust/doctor-3.svg'
import patientWallet from '../../assets/images/patientWallet.svg'
import dashboard from '../../assets/images/dashboard.svg'


import { Link } from "react-router-dom";
import PatientMyDocumentExternalDocument from "../patientMyDocument/patientMyDocumentExternalDocument";
import PatientMyDocumentMyAppointments from "../patientMyDocument/patientMyDocumentMyAppointments";

export default class PatientMyDocument extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container >
               
             <div className="row  align-items-center ">
                 <div className="col-md-6"> <Breadcrumb url="" chlidrenUrl="" text=" My Documents" />       </div>
                 <div className="col-md-6">
                     <Link to="/patient-dashboard" className="mhc-patient-back">
                     <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                <div><img src={dashboard} alt="" /></div>
                         <div className="fw-bolder ms-2">Dashboard</div>
                         </div>
                     </Link>
              
                 </div>
      
                </div>
                <div className="mhc-dashboard-card mt-3 mt-md-">
                <div className="mhc-tabs mhc-tabs-borderless">
                <div className="wallet-balance d-flex align-items-center">
                         <div><img src={patientWallet} alt="" /></div>
                         <div>Wallet Balance : <span className="fw-bolder">800</span></div>
                     </div>
        <Tabs defaultActiveKey="RupendraPatel" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="RupendraPatel" title="Rupendra  Patel">
<div className="row">
    <div className="col-md-6 col-lg-3">
    <div className="mhc-patient-card d-flex align-items-center active">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Self</p>
        <span>Male, 35</span>
    </div>
</div>
    </div>
    <div className="col-md-6 col-lg-3 mt-3 mt-md-0">
    <div className="mhc-patient-card d-flex align-items-center">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Sumit Kumar</p>
        <span>Male, 14 ( Son )</span>
    </div>
</div>
    </div>
    <div className="col-md-6 col-lg-3 mt-3 mt-lg-0">
    <div className="mhc-patient-card d-flex align-items-center">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Parul Kumari</p>
        <span>Female, 10 ( Daughter )</span>
    </div>
</div>
    </div>
    <div className="col-md-6 col-lg-3 mt-3 mt-lg-0">
    <div className="mhc-patient-card d-flex align-items-center">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Amit Kumar</p>
        <span>Male, 9 ( Son )</span>
    </div>
</div>
    </div>
</div>


  </Tab>
  <Tab eventKey="VinodKumar" title="Vinod Kumar">
  <div className="row">
    <div className="col-md-6 col-lg-3">
    <div className="mhc-patient-card d-flex align-items-center active">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Self</p>
        <span>Male, 35</span>
    </div>
</div>
    </div>
    <div className="col-md-6 col-lg-3 mt-3 mt-md-0">
    <div className="mhc-patient-card d-flex align-items-center">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Sumit Kumar</p>
        <span>Male, 14 ( Son )</span>
    </div>
</div>
    </div>
    <div className="col-md-6 col-lg-3 mt-3 mt-lg-0">
    <div className="mhc-patient-card d-flex align-items-center">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Parul Kumari</p>
        <span>Female, 10 ( Daughter )</span>
    </div>
</div>
    </div>
    <div className="col-md-6 col-lg-3 mt-3 mt-lg-0">
    <div className="mhc-patient-card d-flex align-items-center">
    <div className="img-holder"><img src={User} alt="" /></div>
    <div className="ms-3">
        <p>Amit Kumar</p>
        <span>Male, 9 ( Son )</span>
    </div>
</div>
    </div>
</div>


  </Tab>
</Tabs>
</div>



</div>

<div className="row mt-4">
    <div className="col-12">
    <h1 className="fs-4 mb-1">My Documents</h1>
              <p className="m-0 fs-6">Self-upload your health documents</p>
    </div>
</div>
<div className="mhc-tabs position-relative mt-4">
 
        <Tabs defaultActiveKey="ExternalDocuments" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="ExternalDocuments" title="External Documents">
<PatientMyDocumentExternalDocument />
  </Tab>
  <Tab eventKey="MyAppointments" title="My Appointments">
 <PatientMyDocumentMyAppointments /> 
  </Tab>
 
</Tabs>


</div>
 
                </Container>
            </React.Fragment>
        )
    }
}