import React from "react";
import { Collapse } from "react-bootstrap";
import tataOneMg from "../../assets/dust/tata-onemg.webp"
import Pickadate from 'pickadate/builds/react-dom'
export default class PatientMedicines extends React.Component{

    constructor(props){
        super(props);
        this.state={
            open:false
        }
        this.handlecollspe.bind(this)
    }

     handlecollspe(){
    console.log("open ",this.state.open)
        this.setState({open:!this.state.open});
    }
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
                       <div className="mhc-medicines">
                           <div className="card-body">
    <div className="row">
        <div className="col-md-3 col-lg-3">
            <p className="mb-1 text-primary fw-bold">Fri, 25 May 2021 | 04:15 PM</p>
            <p className="mb-0 tittle ">Vinod Kumar</p>
        </div>
        <div className="col-md-6 col-lg-6 mt-3 mt-md-0 text-start ">       
            <p className="mb-0 tittle ">Order No</p>
            <p className="mb-0 ">234152331334</p>
        </div>
        <div className="col-md-3 col-lg-3  mt-3 mt-md-0 text-start text-md-end ">   
          <img src={tataOneMg} className="lab-logo" alt="hospitalLogo" />
        </div>
    
    </div>
    <div className="row mt-3">
        <div className="col-12">
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Prescription</button>
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspe()}   aria-controls="trackorder"    aria-expanded={this.state.open}>Track Order</button>
        </div>
    </div>
    </div>
<Collapse in={this.state.open}>
        <div id="trackorder" className="mhc-collapse">
          <p className="order-delivered"><span>Medicines delivered</span></p>
        </div>
      </Collapse>
</div>
<div className="mhc-medicines">
                           <div className="card-body">
    <div className="row">
        <div className="col-md-3 col-lg-3">
            <p className="mb-1 text-primary fw-bold">Fri, 25 May 2021 | 04:15 PM</p>
            <p className="mb-0 tittle ">Vinod Kumar</p>
        </div>
        <div className="col-md-6 col-lg-6 mt-3 mt-md-0 text-start ">       
            <p className="mb-0 tittle ">Order No</p>
            <p className="mb-0 ">234152331334</p>
        </div>
        <div className="col-md-3 col-lg-3  mt-3 mt-md-0 text-start text-md-end ">   
          <img src={tataOneMg} className="lab-logo" alt="hospitalLogo" />
        </div>
    
    </div>
    <div className="row mt-3">
        <div className="col-12">
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Prescription</button>
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspe()}   aria-controls="trackorder"    aria-expanded={this.state.open}>Track Order</button>
        </div>
    </div>
    </div>
<Collapse in={this.state.open}>
        <div id="trackorder" className="mhc-collapse">
          <p className="order-delivered"><span>Medicines delivered</span></p>
        </div>
      </Collapse>
</div>
            </React.Fragment>
        )
    }
}