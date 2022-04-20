import React from "react";
import { Container, Accordion } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb";
import artemisLogo from "../../assets/dust/hospital-artemis.webp"
import BhagirathiNeotiaurugram  from "../../assets/dust/BhagirathiNeotiaurugram .webp"
import { Link } from "react-router-dom";
import SearchForm from '../../component/search/index'
import Fliter from '../../assets/dust/fliter.svg'
import videoCall from '../../assets/dust/video-call.svg'
import print from '../../assets/dust/print.svg'
import doctor from '../../assets/dust/doctor-3.svg'
import Cardiology from '../../assets/dust/cardiology.svg'
export default class ConsultHopsitalDector extends React.Component{
    render(){
        return(
            <React.Fragment>
              <Container>
              <Breadcrumb url="" chlidrenUrl="" text="Hospital-profile" />
              <div className="row">
                  <div className="col-12">
                      <div className="d-flex align-items-center mhc-partner">
                          <div className="logo"><img src={BhagirathiNeotiaurugram} alt={""} /></div>
                          <div><p className="fs-6 fw-bold partner-hopsitalName">Artemis Hospitals, Gurugram</p> </div>
                          </div>
                         
                      </div>
                  </div>
                  <Accordion defaultActiveKey="" className="mhc-mobile-tabs mt-4">
              <Accordion.Item eventKey="0">
    <Accordion.Header >Artemis Hospitals, Gurugram</Accordion.Header>
    <Accordion.Body >
        <h3>Artemis Hospitals, Gurugram</h3>
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
                          <li>            <div className="form-check mt-1 ms-0 ms-lg-4" >
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
                     
                    
                   <div className="ms-lg-auto order-1 order-lg-0">  <Link to="/consult-hopsital-dector" className="btn btn-outline-primary rounded-1">Earliest Slots</Link></div>
                       
                  
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
                                <div><Link to="/hospital-dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
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
                                <div><Link to="/hospital-dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
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
                                <div><Link to="/hospital-dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
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
                                <div><Link to="/hospital-dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
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
                                <div><Link to="/hospital-dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                         </div>
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
                                <div><Link to="/hospital-dector-profile" className="btn btn-outline-primary rounded-1">Book</Link></div>
                            </div>
                          </div>
                          </div>
                         </div>


              </Container>
            </React.Fragment>
        )
    }
}