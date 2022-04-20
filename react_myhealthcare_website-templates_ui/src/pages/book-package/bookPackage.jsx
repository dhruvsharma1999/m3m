import React from "react";
import { Tabs, Tab, Modal, Accordion } from "react-bootstrap";

import { Link } from "react-router-dom";
import lalpath from "../../assets/dust/lalpathlabs.webp"
const Package=[
    {
        pacgTittle:"Advanced Dengue Panel",
        packgparms:"35 Parameters Included",
        img:'https://dev.admin.desktop.myhealthcare.co/uploads//diagnosis/metropolislogo.png'
    },
    {
        pacgTittle:"Aarogyam 1.2",
        packgparms:"Includes 61 Tests",
        img:'https://dev.admin.desktop.myhealthcare.co/uploads//diagnosis/metropolislogo.png'
    },
    {
        pacgTittle:"Tax Saver Health Check",
        packgparms:"35 Parameters Included",
        img:'https://dev.admin.desktop.myhealthcare.co/uploads//diagnosis/metropolislogo.png'
    },
    {
        pacgTittle:"Healthy India 2021 FullBody Checkup",
        packgparms:"35 Parameters Included",
        img:'https://dev.admin.desktop.myhealthcare.co/uploads//diagnosis/metropolislogo.png'
    },
    {
        pacgTittle:"Gut Health Package",
        packgparms:"35 Parameters Included",
        img:'https://dev.admin.desktop.myhealthcare.co/uploads//diagnosis/metropolislogo.png'
    },
    {
        pacgTittle:"Paras Whole Body Check",
        packgparms:"35 Parameters Included",
        img:'https://dev.admin.desktop.myhealthcare.co/uploads//diagnosis/metropolislogo.png'
    },

]
export default class BookPackage extends React.Component{
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
                <div className="Package-btn-tabs mt-0  mt-lg-3">
                  
             <Tabs defaultActiveKey="Popular" id="uncontrolled-tab-example" className="">
  <Tab eventKey="Popular" title="Popular">
      <div className="row mt-2 mb-4">
          {
              Package.map((item)=>(
                <div className="col-lg-6 col-xl-4 mb-4" >
                <div className="mhc-package-tab ">
      <div className="d-flex justify-content-between align-items-start ">
          <div><p className="m-0 packg-tittle">{item.pacgTittle}</p>
          <span className="packg-parm">{item.packgparms} <i onClick={this.handleShow} className="mhc-icon icon-mhc-info cursor-pointer"></i></span>
          </div>
          <div>
      <span className="text-primary">20% OFF</span>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                  <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
              </div>
              <div>
                  <img src={item.img} className="pacg-icon" />
              </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue="" id={item.pacgTittle}  />
        <label className="form-check-label d-block d-sm-inline" htmlFor={item.pacgTittle}>
        Compare Now
        </label>
      </div>
      <Link to="/package-comparison" className="btn btn-primary rounded-1">Book</Link>
                  </div>
      </div>
                    
                    </div>
                
              ))
          }
        <div className="col-12 text-center">
            <Link to="/package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
          </div>

  </Tab>
  <Tab eventKey="COVID" title="COVID">
  <div className="row mt-2 mb-4">
          {
              Package.map((item)=>(
                <div className="col-lg-4 mb-4">
                <div className="mhc-package-tab ">
      <div className="d-flex justify-content-between align-items-start align-items-md-center">
          <div><p className="m-0 packg-tittle">{item.pacgTittle}</p>
          <span className="packg-parm">{item.packgparms} <i className="mhc-icon icon-mhc-info"></i></span>
          </div>
          <div>
      <span className="text-primary">20% OFF</span>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                  <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
              </div>
              <div>
                  <img src={item.img} className="pacg-icon" />
              </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id={item.pacgTittle + 1}  />
        <label className="form-check-label d-block d-sm-inline" htmlFor={item.pacgTittle + 1}>
        Compare Now
        </label>
      </div>
      <Link to="/package-comparison" className="btn btn-primary rounded-1">Book</Link>
                  </div>
      </div>
                    
                    </div>
                
              ))
          }
         <div className="col-12 text-center">
            <Link to="/package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
          </div>
  </Tab>
  <Tab eventKey="Diabetes" title="Diabetes" >
  <div className="row mt-2 mb-4">
          {
              Package.map((item)=>(
                <div className="col-lg-4 mb-4">
                <div className="mhc-package-tab ">
      <div className="d-flex justify-content-between align-items-start align-items-md-center">
          <div><p className="m-0 packg-tittle">{item.pacgTittle}</p>
          <span className="packg-parm">{item.packgparms} <i className="mhc-icon icon-mhc-info"></i></span>
          </div>
          <div>
      <span className="text-primary">20% OFF</span>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                  <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
              </div>
              <div>
                  <img src={item.img} className="pacg-icon" />
              </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id={item.pacgTittle + 2}  />
        <label className="form-check-label d-block d-sm-inline" htmlFor={item.pacgTittle + 2 }>
        Compare Now
        </label>
      </div>
      <Link to="/package-comparison" className="btn btn-primary rounded-1">Book</Link>
                  </div>
      </div>
                    
                    </div>
                
              ))
          }
         <div className="col-12 text-center">
            <Link to="/package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
          </div>
  </Tab>
  <Tab eventKey="Full Body" title="Full Body" >
  <div className="row mt-2 mb-4">
          {
              Package.map((item)=>(
                <div className="col-lg-4 mb-4">
                <div className="mhc-package-tab ">
      <div className="d-flex justify-content-between align-items-start align-items-md-center">
          <div><p className="m-0 packg-tittle">{item.pacgTittle}</p>
          <span className="packg-parm">{item.packgparms} <i className="mhc-icon icon-mhc-info"></i></span>
          </div>
          <div>
      <span className="text-primary">20% OFF</span>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                  <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
              </div>
              <div>
                  <img src={item.img} className="pacg-icon" />
              </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id={item.pacgTittle + 3}  />
        <label className="form-check-label d-block d-sm-inline" htmlFor={item.pacgTittle +3 }>
        Compare Now
        </label>
      </div>
      <Link to="/package-comparison" className="btn btn-primary rounded-1">Book</Link>
                  </div>
      </div>
                    
                    </div>
                
              ))
          }
         <div className="col-12 text-center">
            <Link to="/package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
          </div>
  </Tab>
  <Tab eventKey="Heart" title="Heart" >
  <div className="row mt-2 mb-4">
          {
              Package.map((item)=>(
                <div className="col-lg-4 mb-4">
                <div className="mhc-package-tab ">
      <div className="d-flex justify-content-between align-items-start align-items-md-center">
          <div><p className="m-0 packg-tittle">{item.pacgTittle}</p>
          <span className="packg-parm">{item.packgparms} <i className="mhc-icon icon-mhc-info"></i></span>
          </div>
          <div>
      <span className="text-primary">20% OFF</span>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                  <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
              </div>
              <div>
                  <img src={item.img} className="pacg-icon" />
              </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id={item.pacgTittle + 4}  />
        <label className="form-check-label d-block d-sm-inline" htmlFor={item.pacgTittle + 4}>
        Compare Now
        </label>
      </div>
      <Link to="/package-comparison" className="btn btn-primary rounded-1">Book</Link>
                  </div>
      </div>
                    
                    </div>
                
              ))
          }
         <div className="col-12 text-center">
            <Link to="/package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
          </div>
  </Tab>
  <Tab eventKey="Men" title="Men" >
  <div className="row mt-2 mb-4">
          {
              Package.map((item)=>(
                <div className="col-lg-4 mb-4">
                <div className="mhc-package-tab ">
      <div className="d-flex justify-content-between align-items-start align-items-md-center">
          <div><p className="m-0 packg-tittle">{item.pacgTittle}</p>
          <span className="packg-parm">{item.packgparms} <i className="mhc-icon icon-mhc-info"></i></span>
          </div>
          <div>
      <span className="text-primary">20% OFF</span>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                  <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
              </div>
              <div>
                  <img src={item.img} className="pacg-icon" />
              </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id={item.pacgTittle + 5}  />
        <label className="form-check-label d-block d-sm-inline" htmlFor={item.pacgTittle + 5}>
        Compare Now
        </label>
      </div>
      <Link to="/package-comparison" className="btn btn-primary rounded-1">Book</Link>
                  </div>
      </div>
                    
                    </div>
                
              ))
          }
         <div className="col-12 text-center">
            <Link to="/package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
          </div>
  </Tab>
  <Tab eventKey="Women" title="Women" >
  <div className="row mt-2 mb-4">
          {
              Package.map((item)=>(
                <div className="col-lg-4 mb-4">
                <div className="mhc-package-tab ">
      <div className="d-flex justify-content-between align-items-start align-items-md-center">
          <div><p className="m-0 packg-tittle">{item.pacgTittle}</p>
          <span className="packg-parm">{item.packgparms} <i className="mhc-icon icon-mhc-info"></i></span>
          </div>
          <div>
      <span className="text-primary">20% OFF</span>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                  <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
              </div>
              <div>
                  <img src={item.img} className="pacg-icon" />
              </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id={item.pacgTittle + 6}  />
        <label className="form-check-label d-block d-sm-inline" htmlFor={item.pacgTittle + 6}>
        Compare Now
        </label>
      </div>
      <Link to="/package-comparison" className="btn btn-primary rounded-1">Book</Link>
                  </div>
      </div>
                    
                    </div>
                
              ))
          }
         <div className="col-12 text-center">
            <Link to="/package-comparison" className="btn btn-primary rounded-1">Compare</Link>
            </div>
          </div>
  </Tab>

</Tabs>
</div>
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
         <li >Thyroid Stimulating Hormone</li>
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