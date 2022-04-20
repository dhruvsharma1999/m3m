import React from "react";
import { Link } from "react-router-dom";
import { Container,Accordion, Modal, Button } from "react-bootstrap";
import Breadcrumb from '../../component/breadcrumb/index'
import SearchForm from '../../component/search/index'
import Fliter from '../../assets/dust/fliter.svg'
import videoCall from '../../assets/dust/video-call.svg'
import print from '../../assets/dust/print.svg'
import doctor from '../../assets/dust/doctor-3.svg'
import Pickadate from 'pickadate/builds/react-dom'
export default class ConsultDoctor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filtermodal:false
        }
        this.handleClose.bind(this)
        this.handleShow.bind(this)
    }
    handleShow(){
        this.setState({filtermodal:true})   
    };
     handleClose (){
        this.setState({filtermodal:false})
    };
 
    render(){
        return(
            <React.Fragment>
          <section >
              <Container>
              <Breadcrumb url="" chlidrenUrl="" text="Doctors" />
              <Accordion defaultActiveKey="" className="mhc-mobile-tabs">
              <Accordion.Item eventKey="0">
    <Accordion.Header >Cardiology</Accordion.Header>
    <Accordion.Body >
        <h3>Cardiology</h3>
 <p>MyHealthcare is credited to be pioneer in the field of Cardiac Surgery and Cardiology in southern India with initiation of heart care program in mid 80’s. This department offers comprehensive cardiac care having flat panel Philips catheterisation lab, dedicated coronary Care unit (ICCU), finest modular OTs, CTVS ICU, top of the line Non Invasive Technology including high end Echo cardiogrphy, stress test (TMT) and Doppler and CT. A team of senior interventional Cardiologists with round the clock (365x24) availability of interventional Cardiologists, CAG and angioplasty.</p>
    </Accordion.Body>
  </Accordion.Item>
                  </Accordion>

                  <div className="d-flex align-items-center mt-4">                     
                      <SearchForm placeholder="Search Specialities/Doctors" btnDisplay={false} />
                      <span className="mhc-filter-btn" onClick={()=>this.handleShow()}><img src={Fliter} /></span>
                   
                  </div>

                 <div className="mhc-consult-type d-flex bd-highlight flex-column flex-lg-row align-items-start  align-items-lg-center mt-4 position-relative ">
                  
                <div className="order-0 order-lg-0">
                <span className="fw-bold ">Consult Type</span>
                </div>
                  <div className="order-2 order-lg-0">
                  <ul className="list-unstyled mb-0 mt-4 mt-lg-0 d-flex align-items-center">
                          <li>         <div className="form-check mt-1 ms-0 ms-lg-4" >
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="All" />
  <label className="form-check-label" htmlFor="All">
  All
  </label>
</div></li>
<li>            <div className="form-check mt-1 ms-3 ms-sm-4">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="Virtual" />
  <label className="form-check-label" htmlFor="Virtual">
  Virtual
  </label>
</div></li>
<li>            <div className="form-check mt-1 ms-3 ms-sm-4">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="Hospital" />
  <label className="form-check-label" htmlFor="Hospital">
  At Hospital/ Clinic
  </label>
</div></li>
                      </ul>
                  </div>
                     
                    
                   <div className="ms-lg-auto order-1 order-lg-0">  <Link to="/booking-consult/consult-doctor-earlist-slot" className="btn btn-outline-primary rounded-1">Earliest Slots</Link></div>
                       
                  
                     </div>

                     <div className="row mt-4">
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                          <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
               
                     
                     </div>
              </Container>
 
          </section>

<section className="bg-light py-4">
    <Container>
    <h1 className="fs-5 text-secondary">Heart Transplant</h1>
    <div className="row mt-4">
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
               
                     
                     </div>
    </Container>
</section>
<section className=" py-4">
    <Container>
    <h1 className="fs-5 text-secondary">Interventional Cardiology</h1>
    <div className="row mt-4">
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
                         <div className="col-md-6 col-lg-6 col-xl-4 mb-4">
                         <div className="mhc-dector-card">
                            <div className="row">
                                <div className="col-9">
                                    <div className="d-flex     align-items-center">
                                        <div className="img-holder">
                                            <img src={doctor}></img>
                                        </div>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bolder  text-secondary text-tittle">Dr Vijay Kumar</p>
                                            <p className="text-secondary sub-text">Sr. Consultant, Cardiology <br />
Exp. 40+ Yrs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-end">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><img src={videoCall} className="icon me-3" /></li>
                                        <li><img src={print} className="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ul className="list-unstyled d-flex flex-wrap mb-0 text-capitalize fs-6">
                                        <li className="px-1"><span className="text-secondary  me-2">Available</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">mon,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">thu,</span></li>
                                        <li className="px-1"><span className="text-primary fw-bolder">wed</span></li>
                                      
                                    </ul>
                                </div>
                                <div><Link to="/dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
                         {/* end row */}
               
                     
                     </div>
    </Container>
</section>

          <Modal show={this.state.filtermodal} onHide={()=>this.handleClose()} size="xl" >
       
        <Modal.Body closeButton>
        <Accordion defaultActiveKey="0" className="mhc-mobile-tabs bg-white">
              <div className="row mhc-fliter-border-bottom">
                  <div className="col-lg-3 mhc-fliter-border-right">
                  <Accordion.Item eventKey="0">
    <Accordion.Header >City</Accordion.Header>
    <Accordion.Body className="bg-white border-top-0" >
        <h3>City</h3>
    
        <SearchForm placeholder="Search Specialities/Doctors" btnDisplay={false} />
        <div className="mhc-filter mt-4">
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Abhayapuri
  </label>
</div>
            </div> 
    </Accordion.Body>
  </Accordion.Item>
                
                  </div>
                  {/* end row */}
                  <div className="col-lg-3 mt-3 mt-lg-0 mhc-fliter-border-right">
                  <Accordion.Item eventKey="1">
    <Accordion.Header >Distance</Accordion.Header>
    <Accordion.Body className="bg-white border-top-0" >
        <h3>Distance</h3>
        <div className="mhc-filter">      
        <div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Up to 10 km
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Up to 20 km
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Up to 30 km
  </label>
</div>
<div className="form-check py-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Up to 50 km
  </label>
</div>
            </div> 
    </Accordion.Body>
  </Accordion.Item>
                
                  </div>
                  {/* end row */}
                  <div className="col-lg-3 mt-3 mt-lg-0 mhc-fliter-border-right">
                  <Accordion.Item eventKey="2">
    <Accordion.Header >Availability</Accordion.Header>
    <Accordion.Body className="bg-white border-top-0" >
        <h3>Availability</h3>
        <div className="">      
        <div className="form-check py-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" htmlFor="flexCheckDefault">
Now
  </label>
</div>
<div className="form-check py-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" htmlFor="flexCheckDefault">
Today
  </label>
</div>
<div className="form-check py-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" htmlFor="flexCheckDefault">
  Tomorrow
  </label>
</div>
<div className="form-check py-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" htmlFor="flexCheckDefault">
  Next 2 days
  </label>
</div>
<div className="form-floating mhc-dob date mt-3">
              <Pickadate.InputPicker  required    readOnly={false} />
             <label htmlFor="Dob">Custom Date</label>
</div>
            </div> 
    </Accordion.Body>
  </Accordion.Item>
                
                  </div>
                  {/* end row */}
                  <div className="col-lg-3 mt-3 mt-lg-0">
                  <Accordion.Item eventKey="3">
    <Accordion.Header >Doctor’s Gender</Accordion.Header>
    <Accordion.Body className="bg-white border-top-0" >
        <h3>Doctor’s Gender</h3>
        <div className="mhc-filter">      
        <div className="form-check py-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" htmlFor="flexCheckDefault">
Male
  </label>
</div>
<div className="form-check py-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" htmlFor="flexCheckDefault">
Female
  </label>
</div>

            </div> 
    </Accordion.Body>
  </Accordion.Item>
                
                  </div>
                  {/* end row */}
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-end mt-3">
              <button className="btn btn-outline-secondary rounded-1 fliter-btn" onClick={()=>this.handleClose()}>Cancel</button>
                  <button className="btn btn-outline-primary rounded-1 fliter-btn ms-0 ms-sm-3 mt-3 mt-sm-0">Reset</button>
                  <button className="btn btn-primary fliter-btn rounded-1 ms-0 ms-sm-3 mt-3 mt-sm-0">Apply Filter</button>
              </div>
            </Accordion>
        </Modal.Body>
     
      </Modal>
        </React.Fragment>
        )
    
    }
}