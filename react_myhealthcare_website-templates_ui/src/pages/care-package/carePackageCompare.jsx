import React from "react";
import { Container, Modal, Accordion } from "react-bootstrap";
import Breadcrumb from '../../component/breadcrumb/index'
import { Link } from "react-router-dom";
import lalpath from "../../assets/dust/lalpathlabs.webp"
const Package=[
    {
        pacgTittle:"Preventive Heart Check Package -  Artemis",      
       
    },
    {
        pacgTittle:"Preventive Heart Check Package -  Artemis",      
       
    },
    {
        pacgTittle:"Preventive Heart Check Package -  Artemis",      
       
    },
]
export default class CarePackageCompare extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modal:false,
         
        }
        this.handleShow=this.handleShow.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }
    handleShow(){
        console.log(this.state.modal)
          this.setState({modal:true})   
      };
       handleClose (){
          this.setState({modal:false})
      };
    render(){
        return(
            <React.Fragment>
               <Container>
               <div className="container">
                   <Breadcrumb url="" chlidrenUrl="" text="Cardiac Care Program" />
                   <div className="row">
            <div className="col-12 ">
              <h1 className="fs-4 mb-1">Care Packages</h1>             
            </div>           
        </div>

        </div>
<div className="row mt-2 mt-lg-4">
    {
        Package.map((item)=>(
          <div className="col-lg-6 col-xl-4 mb-4">
          <div className="mhc-package-tab ">
<div className="d-flex justify-content-between align-items-start ">
        <div><p className="m-0 packg-tittle">{item.pacgTittle} <i onClick={this.handleShow} className="mhc-icon icon-mhc-info cursor-pointer"></i></p>

    </div>
  
    </div>
    <div className="d-flex justify-content-between align-items-center mt-2">
        <div>
            <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
        </div>
      
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id={item.pacgTittle}  />
  <label class="form-check-label d-block d-sm-inline" for={item.pacgTittle}>
  Compare Now
  </label>
</div>
<Link to="/care-package-comparison" className="btn btn-primary rounded-1">Book</Link>
            </div>
</div>
              
              </div>
          
        ))
    }


</div>
<div className="row">
            <div className="col-12 text-center mb-4">
                <Link to="/care-package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
        </div>

               </Container>
               <Modal show={this.state.modal} onHide={this.handleClose} size="xl" className="mhc-package-modal">
        <Modal.Header closeButton>
           <div className="d-flex justify-content-between align-items-center">
               <div>
                   <h6 className="m-0">Aarogyam 1.2</h6>
                   <p className="m-0">Profile Includes (61 Parameters)</p>
               </div>
               <div>
               <img src={lalpath} className="pacg-icon" />
               </div>
               </div>
        </Modal.Header>
        <Modal.Body>
      
        <Accordion defaultActiveKey="" className="">                    
                        <Accordion.Item eventKey="0">
    <Accordion.Header>Liver Function Test (includes 11 tests)</Accordion.Header>
    <Accordion.Body>
     <ul className=" m-0">
         <li>Thyroid Stimulating Hormone</li>
         <li>Thyroxine - Total</li>
         <li>Triiodothyronine Total</li>
     </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Liver Function Test (includes 11 tests)</Accordion.Header>
    <Accordion.Body>
     <ul className=" m-0">
         <li>Thyroid Stimulating Hormone</li>
         <li>Thyroxine - Total</li>
         <li>Triiodothyronine Total</li>
     </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Liver Function Test (includes 11 tests)</Accordion.Header>
    <Accordion.Body>
     <ul className=" m-0">
         <li>Thyroid Stimulating Hormone</li>
         <li>Thyroxine - Total</li>
         <li>Triiodothyronine Total</li>
     </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Liver Function Test (includes 11 tests)</Accordion.Header>
    <Accordion.Body>
     <ul className=" m-0">
         <li>Thyroid Stimulating Hormone</li>
         <li>Thyroxine - Total</li>
         <li>Triiodothyronine Total</li>
     </ul>
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
        </Modal.Body>
   
      </Modal>
            </React.Fragment>
        )
    }
}