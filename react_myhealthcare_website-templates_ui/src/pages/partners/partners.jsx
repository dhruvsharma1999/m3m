import React from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb";
import DownloadApp from '../../component/download-app/downloadApp'
import workflowmanagement  from "../../assets/images/workflow-management.svg"
import careContinuum  from "../../assets/images/care-continuum.svg"
import dataDriven  from "../../assets/images/data-driven.svg"
import compliantMiddleware  from "../../assets/images/compliant-middleware.svg"
import partnerone  from "../../assets/images/partner-one.webp"
import partnerTwo  from "../../assets/images/partner-two.webp"
import partnerthree  from "../../assets/images/partner-three.webp"
import hospitalInformation  from "../../assets/images/hospital-information.svg"
import patientEngagement  from "../../assets/images/patient-engagement.svg"
import queueManagement  from "../../assets/images/queue-management.svg"
import doctorNurses from "../../assets/images/doctor-nurses.svg"
import remoteHealth  from "../../assets/images/remote-health.svg"
import electronicMedical  from "../../assets/images/electronic-medical.svg"
import experienceFeedback  from "../../assets/images/experience-feedback.svg"
import registerFamilyMembers  from "../../assets/images/register-family-members.svg"
import shareDocuments  from "../../assets/images/share-documents.svg"
import orderMedicines  from "../../assets/images/order-medicines-icon.svg"
import easyAndSecure  from "../../assets/images/easy-and-secure.svg"
import telemedicine  from "../../assets/images/telemedicine.svg"
import manageAppointments  from "../../assets/images/manage-appointments.svg"
import homehealthCare  from "../../assets/images/homehealth-care.svg"

export default class Partners extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className="mhc-partner-banner">
                    <div className="container">
                    <Breadcrumb url="" chlidrenUrl="" text="For Partners" />
                    <div className="row">
                        <div className="col-sm-7 col-md-5">
                        <h1 className="mb-1">Your partners in your <br className="d-block d-sm-none d-xl-block" />
digital journey</h1>
<p>MyHealthcare is a digital healthcare ecosystem 
providing enhanced patient care outcomes 
by improving healthcare delivery services.</p>
                        </div>
                    </div>
            
                    </div>
             
                </section>
                <section className="mhc-partner-padding">
                    <div className="container">
                        <p>Working on patient centricity with a data driven philosophy, the firm offers a plethora of services such as consultation, telemedicine, diagnostics, health monitoring, preventive health and more.</p>

                        <p>With over 57 partner hospitals and more than 20 million patients being served over the platform, MyHealthcare remains the product of choice of all top health organizations for their digital journey.</p>

                        <p>With a focus to bridge the healthcare delivery gap, the company has been one of the first to launch a HIPAA compliant end to end solution for virtual consults and further increase patient and doctor engagement by powering it with AI and Speech to text functionality.</p>

                        <p>Backed by a technically sound team, clinicians, healthcare professionals and a strong leadership, MyHealthcare strives to be the one stop solution to all things Health and Care.</p>
                    </div>
                </section>

                <section className="mhc-partner-bg mhc-partner-padding">
                   <div className="container mhc-partner-tabs">
                   <Tab.Container id="left-tabs-example"  defaultActiveKey="Effective Workflow Management">
  <Row className="justify-content-between">
    <Col md={4} lg={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="Effective Workflow Management"> <img className="pils-icon" src={workflowmanagement} alt="workflowmanagement" /> Effective Workflow Management</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Care Continuum"> <img className="pils-icon" src={careContinuum} alt="careContinuum" /> Care Continuum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Data Driven Frameworks"><img className="pils-icon" src={dataDriven} alt="dataDriven" /> Data Driven Frameworks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="HIPAA Compliant Middleware"> <img className="pils-icon" src={compliantMiddleware} alt="compliantMiddleware" /> HIPAA Compliant Middleware</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col md={7} lg={8 }>
      <Tab.Content>
        <Tab.Pane eventKey="Effective Workflow Management">
          <h2>Effective Workflow <br />
Management</h2>
        <p>
        Systematically managed appointments and work schedules to ensure patient convenience and increased practitioner efficiency.</p>

        <p>Access across all platforms renders an uninterrupted workflow and reduces patient wait time.</p>

        <p>Easy on-the-go options for payments, prescriptions, and pharmacy.
        </p>
        </Tab.Pane>
        <Tab.Pane eventKey="Care Continuum">
        <h2>Effective Workflow <br />
Management</h2>
        <p>
        Systematically managed appointments and work schedules to ensure patient convenience and increased practitioner efficiency.</p>

        <p>Access across all platforms renders an uninterrupted workflow and reduces patient wait time.</p>

        <p>Easy on-the-go options for payments, prescriptions, and pharmacy.
        </p>
        </Tab.Pane>
        <Tab.Pane eventKey="Data Driven Frameworks">
        <h2>Effective Workflow <br />
Management</h2>
        <p>
        Systematically managed appointments and work schedules to ensure patient convenience and increased practitioner efficiency.</p>

        <p>Access across all platforms renders an uninterrupted workflow and reduces patient wait time.</p>

        <p>Easy on-the-go options for payments, prescriptions, and pharmacy.
        </p>
        </Tab.Pane>
        <Tab.Pane eventKey="HIPAA Compliant Middleware">
          <h2>Effective Workflow <br />
Management</h2>
        <p>
        Systematically managed appointments and work schedules to ensure patient convenience and increased practitioner efficiency.</p>

        <p>Access across all platforms renders an uninterrupted workflow and reduces patient wait time.</p>

        <p>Easy on-the-go options for payments, prescriptions, and pharmacy.
        </p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
                   </div>
                </section>
                <section className="mhc-partner-padding">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                    <p className="m-0 text-primary fw-bold">MyHealthcare for</p>
                    <h3 className="fs-3">Doctors</h3>
                    <p className="mt-2 mt-lg-4">MyHealthcare provides a digital care ecosystem, across all OPD and IPD workflows for a doctor. Available over Web, iOS, and Android the platform is integrated into Hospital Information System (HIS), Laboratory Information System (LIS), Radiology Information System (RIS) and Pharmacy Management Systems.</p>

                    <p>This allows a single point access to the doctor without having to switch systems or work with multiple clicks. </p>

                    <p>The Virtual Consult platform allows for connectivity with the patient even in unprecedented times like these or comes in handy when distance forbids the patient from visiting the hospital. The speech to text feature further adds to efficient utilization of the doctor’s time</p>
                    <a className="btn btn-primary mt-0 mt-md-4" href="">Frequently Asked Questions <i className="mhc-icon icon-right"></i></a>
                    </div>
                    <div className="col-lg-5 mt-4 mt-lg-0">
                      <img src={partnerone} alt="partnerone" className="img-fluid" />
                    </div>
                  </div>
                  </div>
                </section>
                <section className="mhc-partner-bg mhc-partner-padding">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5">
                      <img src={partnerTwo} alt="partnerone" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                    <p className="m-0 text-primary fw-bold">MyHealthcare for</p>
                    <h3 className="fs-3">Hospitals</h3>
                <p className="mt-2 mt-lg-4">
                From doctors to nurses, patients to paramedics, the MyHealthcare platform caters to the entire spectrum of hospital operations.</p>

                <p>MyHealthcare, partners with hospitals and healthcare institutions in digitising the healthcare delivery process, mapping best practices in clinical treatment, and integrating into the various technology platforms of a hospital to help deliver a 360-degree care to its patients.
                </p>
                    </div>
                  
                  </div>
                  </div>
                </section>
                <section className="mhc-partner-padding">
                      <div className="container">
                      <h3 className="fs-3 text-center">MyHealthcare services provided to the hospitals</h3>
                      <div className="row mt-4 mt-lg-5 justify-content-center">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
                          <div className="partner-services">
                          <img src={hospitalInformation} alt="hospitalInformation" />
                          <h6>Hospital Information <br />
                           System (HIS)</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
                          <div className="partner-services">
                          <img src={patientEngagement} alt="hospitalInformation" />
                          <h6>Patient Engagement<br />
App</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5 mt-md-0">
                          <div className="partner-services">
                          <img src={queueManagement} alt="hospitalInformation" />
                          <h6>Queue Management<br />
System (QMS)</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5 mt-lg-0">
                          <div className="partner-services">
                          <img src={doctorNurses} alt="hospitalInformation" />
                          <h6>Doctor, Nurses,<br />
Paramedics App</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5">
                          <div className="partner-services">
                          <img src={remoteHealth} alt="hospitalInformation" />
                          <h6>Remote Health<br />
Monitoring</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5">
                          <div className="partner-services">
                          <img src={electronicMedical} alt="hospitalInformation" />
                          <h6>Electronic Medical <br />
Records (EMR)</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5">
                          <div className="partner-services">
                          <img src={experienceFeedback} alt="hospitalInformation" />
                          <h6>Experience <br />
Feedback</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                      </div>
                      </div>
                  </section>
                  <section className="mhc-partner-bg mhc-partner-padding">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                   
                    <div className="col-lg-6 ">
                    <p className="m-0 text-primary fw-bold">MyHealthcare for</p>
                    <h3 className="fs-3">Patients</h3>
                <p className="mt-2 mt-lg-4">
                A one stop solution for all your healthcare needs, MyHealthcare offers you a platform to book appointments, consult over a video call, order your medicines, track your health parameters, and do a lot more.</p>

               <p>Strictly following the GOI telemedicine guidelines, the MyHealthcare app keeps your data secure while giving you access to the best of healthcare services across India. The MyHealthcare Virtual Consult Platform enables patients to connect with their doctors from the comfort and safety of their homes.
                </p>
                    </div>
                    <div className="col-lg-5 mt-4 mt-lg-0">
                      <img src={partnerthree} alt="partnerone" className="img-fluid" />
                    </div>
                  </div>
                  </div>
                </section>
                <section className="mhc-partner-padding ">
                      <div className="container">
                      <h3 className="fs-3 text-center">MyHealthcare services provided to the Patients</h3>
                      <div className="row mt-4 mt-lg-5 justify-content-center">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
                          <div className="partner-services">
                          <img src={registerFamilyMembers} alt="hospitalInformation" />
                          <h6>Register Family <br />
Members</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
                          <div className="partner-services">
                          <img src={shareDocuments} alt="hospitalInformation" />
                          <h6>Share Documents <br />
with Doctor</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5 mt-md-0">
                          <div className="partner-services">
                          <img src={orderMedicines} alt="hospitalInformation" />
                          <h6>Order Medicines for <br />
Home Delivery</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5 mt-lg-0">
                          <div className="partner-services">
                          <img src={easyAndSecure} alt="hospitalInformation" />
                          <h6>Easy and Secure
Payment Methods</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5">
                          <div className="partner-services">
                          <img src={telemedicine} alt="hospitalInformation" />
                          <h6>Telemedicine</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5">
                          <div className="partner-services">
                          <img src={manageAppointments} alt="hospitalInformation" />
                          <h6>Manage Appointments</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mt-sm-5">
                          <div className="partner-services">
                          <img src={homehealthCare} alt="hospitalInformation" />
                          <h6>Home Health Care</h6>
                          </div>
                          
                        </div>
                        {/* cnd col */}
                      </div>
                      </div>
                  </section>
                <DownloadApp />
            </React.Fragment>
        )
    }
}