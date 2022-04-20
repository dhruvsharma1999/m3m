import React from "react";
import DownloadIcon from '../../assets/images/download-btn.svg'
import PdfIcon from '../../assets/dust/mhc-pdf.svg'
import { Collapse, Modal } from "react-bootstrap";
import MhcProgressBar from "../../component/progressbar/progressBar";
import { Link } from "react-router-dom";
import MultiImageUploader from "../../component/multi-image-uploader";
export default class PatientMyPrescriptionsDectorConsult extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            opendelivered:false,
            modal:false,
        }
        this.handlecollspe.bind(this)
        this.handlecollspedDevlivered.bind(this)
        this.handleShow=this.handleShow.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

     handlecollspe(){
        this.setState({open:!this.state.open});
    }
    handlecollspedDevlivered(){
        this.setState({opendelivered:!this.state.opendelivered});
    }
    handleShow(){    
        this.setState({modal:true})   
    };
     handleClose (){
        this.setState({modal:false})
    };
    render(){
        return(
            <React.Fragment>
             <div className=" predcription-dector-card">
                 <div  className="card-body">
               <div className="row">
                <div className="col-11 col-sm-11 col-md-11 col-lg-4 order-1 order-lg-1" >
                 <div className="d-flex align-items-center">
                     <div><img src={PdfIcon} alt="PdfIcon" className="pdf-icon" /></div>
                     <div className="ms-3">
                         <h4 className="mhc-tittle m-0">Dr Vijay Kumar</h4>
                         <p className="m-0">Sr. Consultant, Cardiology </p>
                     </div>
                  
                 </div>
                 <div className="mt-3 mt-lg-2">
                 <Link class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " to="/order-medicine">Order Medicines</Link>
                 <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspedDevlivered()}   aria-controls="trackorder"    aria-expanded={this.state.opendelivered}>Track Order</button>
                 </div>
                
                <p className="mb-0 mt-2 mt-lg-3">Order ID : <span className="fw-bolder">TS87623536272</span></p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 order-3 order-lg-2 mt-3 mt-lg-0">
                <p className="m-0">Appointment </p>
                    <p className="text-primary mb-0">Fri, 13 Feb 2021 | 9:00AM</p>
                    <div className="mt-3 mt-lg-2">
                    <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " onClick={()=>this.handleShow()}>Order Tests</button>
                    <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspe()}   aria-controls="trackorder"    aria-expanded={this.state.open}>Track Order</button>
                   </div>
                    <p className="mb-0 mt-2 mt-lg-3">Order ID : <span className="fw-bolder"> PO12983737272</span></p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 order-4 order-lg-3 mt-3 mt-lg-0">
                    <p className="m-0">Prescription updated at </p>
                    <p className="text-primary mb-0">Fri, 14 Feb 2021 | 9:00AM</p>
                    </div>
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 order-2 order-lg-4 text-end ">
                    <img src={DownloadIcon} alt="DownloadIcon" className="download-icon" />
                    </div>
               </div>
               </div>
               <Collapse in={this.state.open}>
        <div id="trackorder" className="mhc-collapse">
        <MhcProgressBar />

       
        </div>
      </Collapse>
      <Collapse in={this.state.opendelivered}>
        <div id="trackorder" className="mhc-collapse">
          <p className="order-delivered"><span>Medicines delivered</span></p>
        </div>
      </Collapse>
             </div>
             <div className="predcription-dector-card">
                 <div  className="card-body">
               <div className="row">
                <div className="col-11 col-sm-11 col-md-11 col-lg-4 order-1 order-lg-1" >
                 <div className="d-flex align-items-center">
                     <div><img src={PdfIcon} alt="PdfIcon" className="pdf-icon" /></div>
                     <div className="ms-3">
                         <h4 className="mhc-tittle m-0">Dr Vijay Kumar</h4>
                         <p className="m-0">Sr. Consultant, Cardiology </p>
                     </div>
                  
                 </div>
                 <div className="mt-3 mt-lg-2">
                 <Link class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " to="/order-medicine">Order Medicines</Link>
                 <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspedDevlivered()}   aria-controls="trackorder"    aria-expanded={this.state.opendelivered}>Track Order</button>
                 </div>
                
                <p className="mb-0 mt-2 mt-lg-3">Order ID : <span className="fw-bolder">TS87623536272</span></p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 order-3 order-lg-2 mt-3 mt-lg-0">
                <p className="m-0">Appointment </p>
                    <p className="text-primary mb-0">Fri, 13 Feb 2021 | 9:00AM</p>
                    <div className="mt-3 mt-lg-2">
                    <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " onClick={()=>this.handleShow()}>Order Tests</button>
                    <button class="btn btn-outline btn-outline-secondary  py-0 mt-2 rounded-1 me-2 " type="button" onClick={() => this.handlecollspe()}   aria-controls="trackorder"    aria-expanded={this.state.open}>Track Order</button>
                   </div>
                    <p className="mb-0 mt-2 mt-lg-3">Order ID : <span className="fw-bolder"> PO12983737272</span></p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 order-4 order-lg-3 mt-3 mt-lg-0">
                    <p className="m-0">Prescription updated at </p>
                    <p className="text-primary mb-0">Fri, 14 Feb 2021 | 9:00AM</p>
                    </div>
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 order-2 order-lg-4 text-end ">
                    <img src={DownloadIcon} alt="DownloadIcon" className="download-icon" />
                    </div>
               </div>
               </div>
               <Collapse in={this.state.open}>
        <div id="trackorder" className="mhc-collapse">
        <MhcProgressBar />

       
        </div>
      </Collapse>
      <Collapse in={this.state.opendelivered}>
        <div id="trackorder" className="mhc-collapse">
          <p className="order-delivered"><span>Medicines delivered</span></p>
        </div>
      </Collapse>
             </div>
             <Modal show={this.state.modal} onHide={this.handleClose} >
             <Modal.Header closeButton>
          <Modal.Title className="fs-6">Book Test</Modal.Title>
        </Modal.Header>
        <Modal.Body cl>
            <div className="d-flex align-items-start align-items-md-center flex-column flex-md-row">
            <div className="fs-7">Call our patient care team </div>
            <div className="mhc-phone-call ms-0 ms-md-3 mt-2 mt-md-0">
        <span className="mhc-icon icon-icon-phone"></span>
        <span>011 41179678</span>
    </div>
            </div>
            <p className="fs-7 text-primary fw-bolder mb-0"> OR</p>
         <p className="fs-7  fw-bolder mb-0 mt-2 mt-md-3">Upload Prescription</p>
            <div className="mt-3">
                   <MultiImageUploader />

                       </div>
                       <p className="fs-7  fw-bolder mb-0 mt-3">Patient Consent</p>
                       <p>By confirming the order i consent to my prescription being shared with MyHealthcare pharmacies for home delivery of medicines.</p>
                       <div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault1"  />
  <label className="form-check-label d-block d-sm-inline " htmlFor="flexCheckDefault1">
  I Agree
  </label>
</div>
                   <button className="btn btn-primary rounded-1  mt-3">Confirm Order</button>
        </Modal.Body>
             </Modal>
            </React.Fragment>
        )
    }
}