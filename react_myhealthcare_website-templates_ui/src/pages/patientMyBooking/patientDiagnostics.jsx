import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import hospitalLogo from '../../assets/dust/metropolislogo.png'
import MhcProgressBar from "../../component/progressbar/progressBar";
import Pickadate from 'pickadate/builds/react-dom'
export default class PatientDiagnostics extends Component{
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
            <p className="mb-0 tittle ">Advance Thyroid Profile <i class="mhc-icon icon-mhc-info cursor-pointer text-primary"></i></p>
            <p className="mb-0 ">Metropolis</p>
            <p className="mb-0 ">Bookign Code: <span>BHHAJSUABBS654</span></p>
        </div>
        <div className="col-md-3 col-lg-3  mt-3 mt-md-0 text-start text-md-end "> 
        <p className="mb-1 tittle">Pending</p>
            <p className="mb-0 ">INR 600</p>  

        </div>
    
    </div>
    <div className="row mt-3">
        <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Test Instructions</button>
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Cancel</button>
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspe()}   aria-controls="trackorder"    aria-expanded={this.state.open}>Track Order</button>
        </div>
        <div className="col-lg-6 text-start order-1 border-lg-2 text-md-end">
        <img src={hospitalLogo} className="hopsital-logo" alt="hospitalLogo" />
            </div>
    </div>
    </div>
<Collapse in={this.state.open}>
        <div id="trackorder" className="mhc-collapse">
        <MhcProgressBar />

       
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
            <p className="mb-0 tittle ">Advance Thyroid Profile <i class="mhc-icon icon-mhc-info cursor-pointer text-primary"></i></p>
            <p className="mb-0 ">Metropolis</p>
            <p className="mb-0 ">Bookign Code: <span>BHHAJSUABBS654</span></p>
        </div>
        <div className="col-md-3 col-lg-3  mt-3 mt-md-0 text-start text-md-end "> 
        <p className="mb-1 tittle">Pending</p>
            <p className="mb-0 ">INR 600</p>  

        </div>
    
    </div>
    <div className="row mt-3">
        <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Test Instructions</button>
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 ">Cancel</button>
        <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspe()}   aria-controls="trackorder"    aria-expanded={this.state.open}>Track Order</button>
        </div>
        <div className="col-lg-6 text-start order-1 border-lg-2 text-md-end">
        <img src={hospitalLogo} className="hopsital-logo" alt="hospitalLogo" />
            </div>
    </div>
    </div>
<Collapse in={this.state.open}>
        <div id="trackorder" className="mhc-collapse">
        <MhcProgressBar />

       
        </div>
      </Collapse>
</div>
            </React.Fragment>
        )
    }
}