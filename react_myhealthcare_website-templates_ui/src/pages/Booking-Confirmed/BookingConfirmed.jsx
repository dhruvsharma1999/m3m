import React from "react";
import { Container } from "react-bootstrap";
import MultiImageUploader from "../../component/multi-image-uploader";


export default class BookingConfirmed extends React.Component{

    render(){
        return(
            <React.Fragment>
            
            <Container>
            <h1 className="fs-4 text-primary text-center mt-4">Booking Confirmed</h1>
            <p className="fs-6 text-center m-0">Thank you, Rajesh Mishra for entrusting your health in our hands. Your appointment details are below.</p>
          <p className="fs-6 text-center fw-bold text-primary">Please pay the due amount at the time of appointment at hospital.</p>
           <h4 className="fs-6 text-center mt-4">Artemis Hospitals, Gurugram</h4>
           <div className="mhc-patient-details">
             <div className="row justify-content-start justify-content-lg-around">
                 <div className="col-md-6 col-lg-2">
              
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Doctor Name</p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold">Dr Vijay Kumar</p></div>
                         </div>
             
                                 
                     </div>
                     <div className="col-md-6 col-lg-2 mt-2 mt-md-0">
              
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Consultation Fee</p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold">INR 700</p></div>
                         </div>
             
                         </div>                   
                     
                         <div className="col-md-6 col-lg-2 mt-2 mt-md-0">
             
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Patient Name </p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold">Rajesh Mishra</p></div>
                         </div>
             
                         </div>                   
                  
                         <div className="col-md-6 col-lg-2 mt-2 mt-md-0">
               
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Appointment Date & Time</p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold text-primary">Fri, 1 Nov | 8:30 AM</p></div>
                         </div>
             
                         </div>                   
                    
                         <div className="col-md-6 col-lg-2 mt-2 mt-md-0">
              
                     <div className="row">
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0">Consult Type</p></div>
                         <div className="col-6 col-sm-6 col-md-6 col-lg-12"> <p className="m-0 fw-bold">At Hospital</p></div>
                         </div>
             
                                    
                     </div>
                 </div>
               </div>
           
               <p className="fs-6 mt-4">Any notes that you would like to share with the doctor prior to your appointment.</p>
               <div className="row">
                   <div className="col-12">
                       <textarea className="form-control"></textarea>
                       </div>
                   </div>
                   <div className="mt-4">
                   <MultiImageUploader />

                   <button className="btn btn-outline-primary rounded-1  mt-4">Submit</button>
                       </div>
                   <h1 className="fs-5 text-secondary  mt-4">Instructions</h1>
                   <ul className="mhc-instruction-list">
                       <li>Keep your MyHealthcare Virtual Consult App active 15 minutes before your appointment time.</li>
                       <li>The doctor will call you on your MyHealthcare mobile app at the time of your appointment. Please do allow for a delay in case the doctor is attending to an emergency.</li>
                       <li>In case you have booked an appointment for your family member, please ensure that they are using the MyHealthcare Virtual Consult App from your registered mobile number.</li>
                       <li> You can cancel your appointment only up to 1 hour prior to your appointment time.</li>
                   </ul>
            </Container>
            </React.Fragment>
        )
    }
}