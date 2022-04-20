import React from "react";
import { Container } from "react-bootstrap";
import hospital from '../../assets/dust/logo-medanta.webp'
import googlePlay from "../../assets/images/google-play.png"

export default class PackageBookingConfirmed extends React.Component{

    render(){
        return(
            <React.Fragment>
            
            <Container>
            <h1 className="fs-4 text-primary text-center mt-4">Booking Confirmed</h1>
            <p className="fs-6 text-center m-0">Thank you, Rajesh Mishra for entrusting your health in our hands. Your appointment details are below.</p>
          <p className="fs-6 text-center fw-bold text-primary mt-4">Please pay the due amount at the time of sample collection.</p>

           <div className="mhc-patient-details">
             <div className="row justify-content-start justify-content-lg-around">
                 <div className="col-md-6 col-lg-3">
              
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Appointment</p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold text-primary">Fri 12 Mar, 5:30 AM - 6:30 AM</p></div>
                         </div>
             
                                 
                     </div>
                     <div className="col-md-6 col-lg-3 mt-2 mt-md-0">
              
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Package Price</p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold">INR 2,099</p></div>
                         </div>
             
                         </div>                   
                     
                         <div className="col-md-6 col-lg-3 mt-2 mt-md-0">
             
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Booking Ref. No.</p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold">BA2U651XN8IKDE2</p></div>
                         </div>
             
                         </div>                   
                  
                         <div className="col-md-6 col-lg-3 mt-2 mt-md-0 text-center">
               
                             <img src={hospital} alt="" className="hospital-img" />
             
                         </div>                   
                    
                    
                 </div>
               </div>
           <div className="row mt-4 mb-4">
               <div className="col-12">
                   <div className="mhc-package-details-confirm">                
                     <div className="mhc-test-details">
                         <div className="left-column"><p className="mb-0">Rupendra Patel 35 Yrs, M</p></div>
                         <div className="right-column">
                             <ul className="mb-0">
                                 <li>Aarogyam 1.2 <i className="mhc-icon icon-mhc-info cursor-pointer text-primary"></i></li>
                                 <li>Aarogyam 1.2</li>
                                 <li>Aarogyam 1.2</li>
                                 <li>Aarogyam 1.2</li>
                                 <li>Aarogyam 1.2</li>
                                 <li>Aarogyam 1.2</li>
                                 <li>Aarogyam 1.2</li>
                             </ul>
                             </div>
                         </div>
                         <div className="mhc-test-details">
                         <div className="left-column"><p className="mb-0">Rupendra Patel 35 Yrs, M</p></div>
                         <div className="right-column">
                             <ul className="mb-0">
                                 <li>Aarogyam 1.2</li>
                             </ul>
                             </div>
                         </div>
                         <div className="mhc-test-details">
                         <div className="left-column"><p className="mb-0">Rupendra Patel 35 Yrs, M</p></div>
                         <div className="right-column">
                             <ul className="mb-0">
                                 <li>Aarogyam 1.2</li>
                             </ul>
                             </div>
                         </div>
                       
                       </div>

                   
                   </div>
               </div>

               
              
            </Container>
            <section className="mhc-download py-4 py-md-5 ">
<div className="container">
    <p className="fs-6 text-center m-0">Download MyHealthcare app to view and modify your booking and more...</p>
    <div className="d-flex justify-content-center mt-4">
    <div>   <img src={googlePlay} className="icon-downlod"/></div>
    <div className="ms-3 ms-sm-4">   <img src={googlePlay} className="icon-downlod"/></div>
</div>
    </div>
            </section>
            </React.Fragment>
        )
    }
}