import React from "react";
import { Tabs, Tab, Modal } from "react-bootstrap";
import doctor from '../../assets/dust/user-profile.jpg'
import Pickadate from 'pickadate/builds/react-dom'
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
const diaTabs={
  FamilyMemberY:"Yes",
  FamilyMemberN:"No"
}
const Iprops={
  btnDisplay:true||false
  }
export default class FamilyMember extends React.Component{
  constructor(props=Iprops){
    super(props);
    this.state={
        modal:false,
        fmailytab:diaTabs.FamilyMemberY,
        Search:false
    }
    this.handleClose.bind(this)
    this.handleShow.bind(this)
    this.handletabs=this.handletabs.bind(this)
    this.handleSearch=this.handleSearch.bind(this)
}
handleShow(){
  console.log(this.state.modal)
    this.setState({modal:true})   
};
 handleClose (){
    this.setState({modal:false})
};
handletabs(e){
  this.setState({fmailytab:e.target.value})
}
handleSearch(){
  this.setState({Search:true})
}
 
    render(){
        return(
            <React.Fragment>
                <div className="mhc-tabs">
                   <Tabs defaultActiveKey="Rupendra" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Rupendra" title="Rupendra  Patel">
<div className="row">
  {
    Familymember.map((item)=>(
      <div className="col-lg-6 mb-4" key={item.id}>
    
      <div className="form-check mhc-bordered-checkbox">
      <input className="form-check-input" type="radio" name="familty" id={item.id} />
      <label className="form-check-label" htmlFor={item.id}>
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

<div className="col-12 d-flex justify-content-end">
<button className="btn btn-outline-secondary rounded-1" onClick={()=>this.handleShow()}>Add Family Member</button>
<button className={`btn btn-outline-primary rounded-1 ms-2 ${this.props.btnDisplay===true ?"d-block":"d-none"}`} >Continue</button>
</div>
</div>
           


  </Tab>
  <Tab eventKey="Vinod" title="Vinod Kumar">
  <div className="row">
  {
    Familymember.map((item)=>(
      <div className="col-lg-6 mb-4" key={item.id+1}>
    
      <div className="form-check mhc-bordered-checkbox">
      <input className="form-check-input" type="radio" name="familty" id="familty1" />
      <label className="form-check-label" htmlFor="familty1">
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

<div className="col-12 d-flex justify-content-end">
<button className="btn btn-outline-secondary rounded-1" onClick={()=>this.handleShow()}>Add Family Member</button>
<button className={`btn btn-outline-primary rounded-1 ms-2 ${this.props.btnDisplay===true ?"d-block":"d-none"}`} >Continue</button>
</div>
</div>
  </Tab>
 
</Tabs>
</div>

<Modal show={this.state.modal} onHide={this.handleClose} size="lg">
       
        <Modal.Body>
        <h4 className="fs-7 text-secondary">Add New Family Member</h4>
        <div className="d-flex">
          <p className="m-0 fs-6 text-secondary fw-bold">Is this an existing MyHealthcare  patient? </p>
          <div className="form-check ms-3">
          <input className="form-check-input" name="fmaily" type="radio" value={diaTabs.FamilyMemberY} id="yes" onClick={this.handletabs} checked={diaTabs.FamilyMemberY===this.state.fmailytab} />
  <label className="form-check-label" htmlFor="yes">
  {diaTabs.FamilyMemberY}
  </label>
</div>
<div className="form-check ms-3">
<input className="form-check-input" name="fmaily" type="radio" value={diaTabs.FamilyMemberN} id="no" onClick={this.handletabs} checked={diaTabs.FamilyMemberN===this.state.fmailytab} />
 
  <label className="form-check-label" htmlFor="no">
  {diaTabs.FamilyMemberN}
  </label>
</div>
        </div>
        {
   
          diaTabs.FamilyMemberY===this.state.fmailytab && <div>
          
          <div className={`row mt-4 ${this.state.Search===false ? 'd-block':'d-none'}`}>
            <div className="col-md-7 col-lg-6 col-xl-5 " >
            <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="9992067022"  />
  <button className="input-group-text btn btn-primary" onClick={this.handleSearch}>Search</button>
</div>
</div>
</div>
<div className={`row mt-4 ${this.state.Search===false ? 'd-none':'d-block'}`}>
<div className="col-md-12 col-lg-12 col-xl-6">
<p className="fs-6 fw-bold"> The OTP has been sent to you mobile no. XXXXXX737</p>

<div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
<div className="input-group mb-0">
  <input type="text" className="form-control" placeholder="2568"  />
  <button className="input-group-text btn btn-primary">Verify OTP</button>
</div>
<div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
  <a href="" className="text-secondary fs-6 text-decoration-none text-nowrap">Resend OTP </a>
  </div>
  </div>
  <p className="fs-6 fw-bold mt-3 mb-0"> Search results</p>
  <p className="fs-6"> Select a user to add as your patient.</p>
  <div className="row">
    <div className="col-md-8">
    <div className="form-check mhc-bordered-checkbox ">
      <input className="form-check-input" type="radio" name="familty" id="familty2" />
      <label className="form-check-label" htmlFor="familty2">
        <div className="d-flex align-items-center conent">
          <div className="imgholder">    <img src={doctor} /></div>
          <p className="m-0"> <span className="fw-bold">Vinod Kumar</span><br />
      <small>Male, 40</small></p>
        </div> 
      </label>
    </div>
      </div>
    </div>

</div>

          </div>
          </div>
        }
          {
          diaTabs.FamilyMemberN===this.state.fmailytab &&   <div className="mhc-register-form">
             
          <div className="row">
              <div className="col-12">
              <h1 className="fs-5 mb-3 mt-4 text-center text-lg-start">Patient Details</h1>
              </div>
              <div className="col-lg-6">
              <div className="form-floating mb-4">
<input type="text" className="form-control" id="name" autoComplete="off" placeholder="name" />
<label htmlFor="name">Full Name <sup>*</sup></label>
</div>
              </div>
              <div className="col-lg-6">
              <div className="form-floating mb-4">
<input type="text" className="form-control" id="name" autoComplete="off" placeholder="last Name" />
<label htmlFor="name">Last Name <sup>*</sup></label>
</div>
              </div>
              <div className="col-lg-6">
              <div className="form-floating mb-4">
<input type="text" className="form-control" id="Mobile" placeholder="Mobile" />
<label htmlFor="name">Mobile <sup>*</sup></label>
</div>
              </div>
              <div className="col-lg-6">
              <div className="form-floating mb-4">
<input type="text" className="form-control" id="Email" placeholder="Email" value="ravi@myhealthcare.life" />
<label htmlFor="name">Email <sup>*</sup></label>
</div>
              </div>
              <div className="col-lg-3">
              <div className="form-floating mhc-dob date mb-4">
              <Pickadate.InputPicker  required    readOnly={false} />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">Dob <sup>*</sup></label>
</div>
              </div>
           
              <div className="col-lg-3">
<div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
 <option defaultValue="1">Male</option>
 <option defaultValue="2">Female</option>
</select>
<label htmlFor="floatingSelect">Gender</label>
</div>
                  </div>
                  <div className="col-lg-3">
                  <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
 <option defaultValue="1">son</option>
 <option defaultValue="2">son</option>
</select>
<label htmlFor="floatingSelect">Relation*</label>
</div>
                  </div>
                  <div className="col-lg-3">
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
              <div className="col-lg-6">
              <div className=" mb-3 mhc-upload">              
              <input type="file" className="form-control" id="" />
  <label htmlFor="upload" className="profile-pic">Profile Picture <sup>*</sup></label>
 

</div>
              </div>
              <div className="col-12">
              <h1 className="fs-5 mb-3 text-center text-lg-start">Address</h1>
              </div>
              <div className="col-lg-12">
              <div className="form-floating mb-4">
<input type="text" className="form-control" id="AddressLine" placeholder="AddressLine" defaultValue="" />
<label htmlFor="AddressLine">Address Line 1  <sup>*</sup></label>
</div>
              </div>
              <div className="col-lg-12">
              <div className="form-floating mb-4">
<input type="text" className="form-control" id=""  placeholder="AddressLine" defaultValue="dsxzcadsFZc" />
<label htmlFor="AddressLine">Address Line 2  <sup>*</sup></label>
</div>
              </div>
              <div className="col-lg-6">
              <div className="mhc-selectbox mb-4">
<select className="form-select" required={true}>
<option defaultValue="" disabled="" ></option>
 <option valdefaultValueue="1">india</option>
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
            
                      <div className="row mt-3">
                          <div className="col-12 text-center">
                          <button className="btn btn-primary rounded-1 " type="submit" onClick={()=>this.handleClose} >Confirm</button>
                          </div>
                      </div>

              </div>
          </div>
        }
        </Modal.Body>
 
        </Modal>
            </React.Fragment>
        )
    }
}