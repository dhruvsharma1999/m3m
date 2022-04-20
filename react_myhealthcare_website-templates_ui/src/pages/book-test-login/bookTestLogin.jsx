
import React from "react";
import { Container, Accordion, Modal  } from "react-bootstrap";
import Breadcrumb from '../../component/breadcrumb'
import LoginUser from '../../component/login-register/login'
import FamilyMember from '../../component/family-member/familyMember'
import PatientDetails from '../../component/login-register/patientDetails'
import SelectDateTime from '../../component/select-date-time/selectDateTime'
import thyrocare from "../../assets/images/logo-thyrocare.webp"
import whatappRegister from '../../assets/images/whatsapp.svg'
import print from '../../assets/dust/print.svg'
import hospitalLogo from '../../assets/images/logo-myhealthcare.svg'
import { Link } from "react-router-dom";
import doctor from '../../assets/dust/user-profile.jpg'
const Familymember=[
  {
    name:"self ",
    gender:'male, 35', 
    id:'self'   

    
  },
  {
      name:"Vikas Innocircc ",
      gender:'male, 35',      
      id:'Vikas'  
      
    },
    {
      name:"Vikas Innocircc ",
      gender:'male, 35',      
      id:'Innocircc'  
      
    },
    {
      name:"Vikas Innocircc ",
      gender:'male, 35',      
      id:'Vikass'  
      
    },
]
export default class BookTestLogin extends React.Component{
  constructor(props){
    super(props);
    this.state={
        modal:false,
        packgModal:false
    
    }
    this.handleClose.bind(this)
    this.handleShow.bind(this)
    this.handlePackgClose.bind(this)
    this.handlePackgShow.bind(this)
    
}
handleShow(){
  console.log(this.state.modal)
    this.setState({modal:true})   
};
handlePackgShow(){
  this.setState({packgModal:true})   
}
 handleClose (){
    this.setState({modal:false})
};
handlePackgClose (){
  this.setState({packgModal:false})
};
    render(){
return(
    <React.Fragment>
     <Container>
     <Breadcrumb url="" chlidrenUrl="" text="Test" />  
     <div className="row">
       <div className="col-lg-6">
       <Accordion defaultActiveKey="0" className="mt-4 mhc-profile-tabs">
       <Accordion.Item eventKey="0">
       <Accordion.Header>1. Select Vendor</Accordion.Header>
       <Accordion.Body className="p-3 pt-0">
       <div class="form-check mhc-vender-checkbox mt-3">
      <input className="form-check-input" type="radio" name="familty" id="parmeasy" />
      <label className="form-check-label w-100" for="parmeasy">
        <div className="d-flex align-items-center justify-content-between w-100 ms-4">
          <div className="imgholder">    <img src={thyrocare} className="brand-name" />        
          </div>
         <div>
            <p className="m-0 text-primary rates">INR 1,508</p>
         </div>
        </div> 
      </label>
    </div>
    <div class="form-check mhc-vender-checkbox mt-3">
      <input className="form-check-input" type="radio" name="familty" id="parmeasy" />
      <label className="form-check-label w-100" for="parmeasy">
        <div className="d-flex align-items-center justify-content-between w-100 ms-4">
          <div className="imgholder">    <img src={thyrocare} className="brand-name" />        
          </div>
         <div>
            <p className="m-0 text-primary rates">INR 1,508</p>
         </div>
        </div> 
      </label>
    </div>
           </Accordion.Body>
           </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>1. Login/ Register</Accordion.Header>
    <Accordion.Body className="p-3">
       
                <LoginUser />
     
        {/* <FamilyMember btnDisplay={true} /> */}
         

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>2. Patient Details & Address</Accordion.Header>
    <Accordion.Body className="p-3">
   
    <PatientDetails /> 
       

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>3. Pick your date & Time</Accordion.Header>
    <Accordion.Body className="p-3">
   
  
       <SelectDateTime />

    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
           </div>
           <div className="col-lg-6">
       <div className="mhc-patient-details ">
              
                    <div className="row mt-2">
                    <div className="col-5">Mobile No. </div> 
                    <div className="col-auto">     <span >:</span>   </div>                             
                    <div  className="col-6"><span className="fw-bold">+91 9281128112</span></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-5">Address</div> 
                    <div className="col-auto">     <span >:</span>   </div>                    
                    <div  className="col-6"><span className="fw-bold">A-133, Near Mother Dairy, Katwaria 
Sarai, New Delhi, 110016</span></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-5">Appointment  </div> 
                    <div className="col-auto">     <span >:</span>   </div>              
                    <div className="col-6"><span className="fw-bold text-primary">Fri, 1 Nov 2021 | 8:30 AM</span></div>
                    </div>
              </div>

              <div className="mhc-package-details mt-4">
                <div className="row border-bottom">
                  <div className="col-6">
                  <h4 class="fs-7 text-secondary mb-1">MyHealthcare</h4>
                  <span className="fs-13 mb-0">4 Tests</span>
                    </div>
                    <div className="col-6 text-end">
                      <img src={hospitalLogo} alt=""  className="hospital-icon"/>
                      </div>
                  </div>
              <div className="row border-bottom mt-3">
                    <div className="col-5">Patient Name </div> 
                    <div className="col-auto">     <span >:</span>   </div>                             
                    <div  className="col-6"><span className="">Sunita 35 Yrs, F, Wife</span></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-6"><span className="">Covid home collection charges</span></div>           
                    <div className="col-6 text-end"><span className="me-2">:</span><span >INR 1500</span><i className="mhc-icon icon-trash-empty"></i></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-6"><span>5-aminolevulinic acid (5 -ala)</span></div>           
                    <div className="col-6 text-end"><span className="me-2">:</span><span >INR 1500</span><i className="mhc-icon icon-trash-empty"></i></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-6"><span >Abortion panel</span></div>           
                    <div className="col-6 text-end"><span className="me-2">:</span><span >INR 1500</span><i className="mhc-icon icon-trash-empty"></i></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-6"><span >Alcohol (ethanol) screen, serum</span></div>           
                    <div className="col-6 text-end"><span className="me-2">:</span><span >INR 1500</span><i className="mhc-icon icon-trash-empty"></i></div>
                    </div>
              </div>
              <div className="mhc-payment-details mt-4">
                  <div className="row mt-2">
                      <div className="col-md-9 col-lg-9 col-xl-10">
                      <div class="form-floating">
  <input type="text" class="form-control" id="CouponCode" placeholder="Coupon Code"  />
  <label for="name">Coupon Code </label>
</div>
</div>
<div className="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
    <a href="" className="btn btn-outline-secondary w-100 rounded-1 bg-white">Apply</a>
</div>
                        
                      </div>
                <div className="row mt-2">
                    <div className="col-6">Package Fee </div>                  
                    <div  className="col-6 text-end"><span className="me-1">:</span><span className="fw-bold">INR 700 </span></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-6">Convenience Fee </div>                  
                    <div  className="col-6 text-end"><span className="me-1">:</span><span className="fw-bold">INR 700</span></div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-6">                         <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="MyWallet"  />
  <label class="form-check-label d-block d-sm-inline " for="MyWallet">
  Use MyWallet for Payment 
  </label>
</div></div>                  
                    <div  className="col-6 text-end"><span className="me-1">:</span><span className="fw-bold">INR 700</span></div>
                    </div>
                    <div class="border-bottom border-light w-100 transition mt-3"></div>
                    <div className="row mt-2">
                    <div className="col-6"><span className="fw-bold">Total to be Paid</span></div>           
                    <div className="col-6 text-end"><span className="fw-bold ">INR 800</span></div>
                    </div>
                 
              
        </div>
        <div className="mhc-register-form mt-4">
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label  d-block d-sm-inline" for="flexCheckDefault">
  I have read and agree to the <a href="" className="text-primary text-decoration-none">Terms and Conditions.</a>
  </label>
</div>
                        
                       
                             <div className="d-flex flex-column flex-sm-row mt-4">
                             <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label  d-block d-sm-inline" for="flexCheckDefault">
  I agree to receive updates on
  </label>
</div>
<div className="ms-2 mt-2 mt-sm-0">
    <a href="" className="text-primary text-decoration-none d-flex align-items-center"><img src={whatappRegister} alt="" className="whatapp" /> WhatApp</a>
</div>
                             </div> 
            </div>
            <div className="row mt-4">  
    <div className="col-12 text-center text-md-end">
    <button  className="btn btn-outline-secondary rounded-1 mb-4 "  onClick={()=>this.handlePackgShow()}>Add More Test</button>
    <button  className="btn btn-outline-primary ms-3 rounded-1 mb-4" onClick={()=>this.handleShow()}>Pay Later</button>
    <Link to="/package-booking-confirm"  className="btn btn-primary ms-3 rounded-1 mb-4">Pay Now</Link>
        </div>
    </div>

         </div>
           </div>
         </Container>
         <Modal show={this.state.packgModal} onHide={()=>this.handlePackgClose()} size="lg" >
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fs-6">Book Package for family member :</Modal.Title>
        </Modal.Header>
       <Modal.Body className="pt-2">
 <p className="fs-6 mb-2">Select Patient</p>
<div className="row">
{
    Familymember.map((item)=>(
      <div className="col-lg-6 mb-4">
    
      <div class="form-check mhc-bordered-checkbox">
      <input className="form-check-input" type="radio" name="familty" id={item.id} />
      <label className="form-check-label" for={item.id}>
        <div className="d-flex align-items-center conent">
          <div className="imgholder">    <img src={doctor} /></div>
          <p className="m-0"> <span className="fw-bold">{item.name}</span><br />
      <small>{item.gender}</small></p>
        </div> 
      </label>
    </div>
      </div>
    ))
  }
  </div>
  <p className="fs-13 text-center">Note: Add on bookings will be for the same address and time slot.</p>
<div className="row mt-4">  
   <div className="col-12 text-center ">
   <button href="" className="btn btn-outline-secondary rounded-1 mb-3 mb-sm-0" >Add Family Member</button>
   <button href="" className="btn btn-primary ms-3 rounded-1" onClick={()=>this.handlePackgClose()}>Continue</button>
       </div>
   </div>
       </Modal.Body>
       </Modal>

        <Modal show={this.state.modal} onHide={this.handleClose} size="md" >
       
       <Modal.Body >
<p className="fs-6 text-center fw-bold">Using “Pay Now” option is more rewarding
As you can earn/redeem wallet points.</p>
<div className="row mt-4">  
   <div className="col-12 text-center ">
   <button href="" className="btn btn-outline-primary rounded-1" >Pay Later</button>
   <button href="" className="btn btn-primary ms-3 rounded-1" onClick={()=>this.handleClose()}>Pay Now</button>
       </div>
   </div>
       </Modal.Body>
       </Modal>
    </React.Fragment>
)
    }
}