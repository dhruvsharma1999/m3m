import React from "react";
import UserProfile from '../../assets/dust/user-profile.jpg'
import whatappRegister from '../../assets/images/whatsapp.svg'
import Pickadate from 'pickadate/builds/react-dom'
import { Link } from "react-router-dom";
class NewUserRegister extends React.Component{
    render(){
        return(
            <React.Fragment>          
                 <div className="mhc-register-form">
              <div className="row">
                <div className="col-lg-6">
                <div className="form-floating">
  <input type="text" className="form-control" defaultValue="" id="Mobile" placeholder="Mobile" />
  <label htmlFor="name">Mobile <sup>*</sup></label>
</div>
</div>
<div className="col-lg-6 mt-3 mt-lg-0">
<p className="fs-13 text-primary mb-0">Sorry, this number is not registered with us. Please register to continue</p>
</div>
                </div>
             
             

             <div className="row mt-4">
                 <div className="col-12">
                 <h1 className="fs-5 mb-4 text-center text-lg-start">Patient Details</h1>
                 </div>
                 <div className="col-lg-6">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="name" autoComplete="off" placeholder="name" />
  <label htmlFor="name">Full Name <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-6">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" maxLength="10" id="Mobile" placeholder="Mobile" />
  <label htmlFor="mobile">Mobile <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-6">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="Email" placeholder="Email" defaultValue="ravi@myhealthcare.life" />
  <label htmlFor="email">Email <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-6">
                 <div className="form-floating mhc-dob date mb-4">
              <Pickadate.InputPicker  required readOnly={false}  />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">Dob <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-6">
                  <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
 <option defaultValue="1">Unmarried</option>
 <option defaultValue="2">Mrried</option>
</select>
<label htmlFor="floatingSelect">Gender</label>
</div>
                     </div>
                     <div className="col-lg-6">
                     <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
    <option defaultValue="1">Unmarried</option>
    <option defaultValue="2">Mrried</option>
  </select>
  <label htmlFor="floatingSelect">Marital Status</label>
</div>
                     </div>
                     <div className="col-lg-6">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="EmergencyContact" placeholder="Emergency Contact" defaultValue="9876567654" />
  <label htmlFor="EmergencyContact">Emergency Contact <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-12">
                 <h1 className="fs-5 mb-4 text-center text-lg-start">Address</h1>
                 </div>
                 <div className="col-lg-12">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="AddressLine" placeholder="AddressLine" defaultValue="" />
  <label htmlFor="AddressLine">Address Line 1  <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-12">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="AddressLine" placeholder="AddressLine" defaultValue="" />
  <label htmlFor="AddressLine">Address Line 2  <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-6">
                 <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
    <option defaultValue="1">india</option>
    <option defaultValue="2">india</option>
  </select>
  <label htmlFor="floatingSelect">Country</label>
</div>
                     </div>
                     <div className="col-lg-6">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="PinCode" placeholder="PinCode" defaultValue="110016" />
  <label htmlFor="PinCode">Pin Code  <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-6">
                 <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
    <option defaultValue="1">State</option>
    <option defaultValue="2">State</option>
  </select>
  <label htmlFor="floatingSelect">State</label>
</div>
                     </div>
                     <div className="col-lg-6">
                     <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
    <option defaultValue="1">City</option>
    <option defaultValue="2">City</option>
  </select>
  <label htmlFor="floatingSelect">City</label>
</div>
                     </div>
                     <div className="col-12">
                     <div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"  />
  <label className="form-check-label d-block d-sm-inline" htmlFor="flexCheckDefault">
  I have read and agree to the <a href="" className="text-primary text-decoration-none">Terms and Conditions.</a>
  </label>
</div>
                         </div>
                         <div className="col-12 mt-3">
                             <div className="d-flex flex-column flex-sm-row">
                             <div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"  />
  <label className="form-check-label d-block d-sm-inline" htmlFor="flexCheckDefault">
  I agree to receive updates on
  </label>
</div>
<div className="ms-2 mt-2 mt-sm-0">
    <a href="" className="text-primary text-decoration-none d-flex align-items-center"><img src={whatappRegister} alt="" className="whatapp" /> WhatApp</a>
</div>
                             </div>
        
                         </div>
                       
                             <div className="col-12 text-end mt-3">
                             <button className="btn btn-outline-primary rounded-1 " type="submit" >Register</button>
                             </div>
                         

                 </div>
                 <div className="row mt-4">
                 <div className="col-lg-5">
<p className="fs-13 text-primary mb-0">Sorry, this number is not registered with us. Please register to continue</p>
</div>
                <div className="col-lg-7 mt-3 mt-lg-0">
                  <div className="d-flex justify-content-end flex-column flex-lg-row">
                  <div className="form-floating">
  <input type="text" className="form-control" defaultValue="" id="Mobile" placeholder="Mobile" />
  <label htmlFor="name">Mobile <sup>*</sup></label>
</div>
<div className="ms-0 ms-lg-3   mt-3 mt-lg-0">
<button className="btn btn-outline-primary  rounded-1" type="submit" >Verify OTP</button>
</div>
                  </div>

</div>

                </div>
             </div>
      
            </React.Fragment>
        )
    }
}

export default NewUserRegister