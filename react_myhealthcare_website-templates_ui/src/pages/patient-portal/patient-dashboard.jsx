import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb";
import User from '../../assets/dust/doctor-3.svg'
import patientWallet from '../../assets/images/patientWallet.svg'
import patientmybookings from '../../assets/images/patientmybookings.svg'
import patientmyprescriptions from '../../assets/images/patientmyprescriptions.svg'
import patientMyDocuments from '../../assets/images/patientMyDocuments.svg'
import patientMyReports from '../../assets/images/patientMyReports.svg'
import patientBookConsult from '../../assets/images/patientBookConsult.svg'
import patientBookTests from '../../assets/images/patientBookTests.svg'
import patientOrderMedicine from '../../assets/images/patientOrderMedicine.svg'
import { Link } from "react-router-dom";
export default class PatientDashBoard extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                <Breadcrumb url="" chlidrenUrl="" text="Dashboard" />
                <div className="mhc-dashboard-card">
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

<div className="mhc-patient-dashboard mt-4" >

    <div className="row ">
        <div className="col-lg-3 mb-4">
            <Link to="/patient-my-booking">
          <div className="mhc-card ">
            <img src={patientmybookings} alt="patientmybookings" />
            <h4>My Bookings</h4>
            <p className="m-0">View, reschedule and 
manage all your booked 
appointments</p>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4">
            <Link to="/patient-my-prescription">
          <div className="mhc-card">
            <img src={patientmyprescriptions} alt="patientmybookings" />
            <h4>My Prescriptions</h4>
            <p className="m-0">My Prescriptions helps 
save time and manage 
your health</p>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4">
            <Link to="/patient-my-document">
          <div className="mhc-card">
            <img src={patientMyDocuments} alt="patientmybookings" />
            <h4>My Documents</h4>
            <p className="m-0">Self-upload your health 
documents</p>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4">
            <Link to="/patient-my-report">
          <div className="mhc-card">
            <img src={patientMyReports} alt="patientmybookings" />
            <h4>My Reports</h4>
            <p className="m-0">Search for Lab and 
Radiology reports</p>
          </div>
          </Link>
        </div>
        <div className="col-lg-6 mb-4">
            <Link to="/booking-consult">
          <div className="mhc-card">
            <img src={patientBookConsult} alt="patientmybookings" />
            <h4>Book Consult</h4>
            <p className="m-0">Book consults with the most trusted doctors in your city 
from the comfort of your homes and get prescriptions online.</p>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4">
            <Link to="/Book-test">
          <div className="mhc-card">
            <img src={patientBookTests} alt="patientmybookings" />
            <h4>Book Tests</h4>
            <p className="m-0">Book lab tests for all 
diagnostics procedures and 
get reports online</p>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 mb-4">
            <Link to="/order-medicine">
          <div className="mhc-card">
            <img src={patientOrderMedicine} alt="patientmybookings" />
            <h4>Order Medicine</h4>
            <p className="m-0">Upload prescription and 
order online medicine with 
doorstep delivery</p>
          </div>
          </Link>
        </div>
    </div>
</div>
            
                </Container>
            </React.Fragment>
        )
    }
}