import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import clinics from "../../assets/dust/clinics.svg"

export default class ClinicsTab extends Component {
  render() {
    return (
      <React.Fragment>
 
       
            <div className="row mb-4 hospital-tab">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                <Link className="text-decoration-none" to="/consult-clinics-dector">
                <Card className="hospital-card">
                  <div className="row pt-3">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                      <Card.Img variant="top" className="hospital-img" src={clinics} alt={"clinics"} />
                    </div>
                  </div>
                  <Card.Body>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <Card.Text>
                          <div className="d-flex justify-content-center text-center">
                          <span className='text-dark'>Reliable Health Care,<br /> <span className="text-secondary">Gurugram</span></span>
                          </div>
                          
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </Link>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
              <Link className="text-decoration-none" to="/consult-clinics-dector">
                <Card className="hospital-card">
                  <div className="row pt-3">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" className="hospital-img" src={clinics} alt={"clinics"} />
                    </div>
                  </div>
                  <Card.Body>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <Card.Text>
                          <div className="d-flex justify-content-center text-center">
                          <span className='text-dark'>Jivaka Healthcare Clinic, <br/><span className="text-secondary">Gurugram</span></span>
                          </div>
                          
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </Link>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
              <Link className="text-decoration-none" to="/consult-clinics-dector">
                <Card className="hospital-card">
                  <div className="row pt-3">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" className="hospital-img" src={clinics} alt={"clinics"} />
                    </div>
                  </div>
                  <Card.Body>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <Card.Text>
                          <div className="d-flex justify-content-center text-center">
                          <span className='text-dark'>Reliable Health Care, <br />  <span className="text-secondary">Gurugram</span></span>
                          </div>
                          
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </Link>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
              <Link className="text-decoration-none" to="/consult-clinics-dector">
                <Card className="hospital-card">
                  <div className="row pt-3">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" className="hospital-img" src={clinics} alt={"clinics"} />
                    </div>
                  </div>
                  <Card.Body>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <Card.Text>
                          <div className="d-flex justify-content-center text-center">
                          <span className='text-dark'>Reliable Health Care, <br />  <span className="text-secondary">Gurugram</span></span>
                          </div>
                          
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </Link>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
              <Link className="text-decoration-none" to="/consult-clinics-dector">
                <Card className="hospital-card">
                  <div className="row pt-3">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" className="hospital-img" src={clinics} alt={"clinics"} />
                    </div>
                  </div>
                  <Card.Body>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <Card.Text>
                          <div className="d-flex justify-content-center text-center">
                          <span className='text-dark'>Reliable Health Care, <br />  <span className="text-secondary">Gurugram</span></span>
                          </div>
                          
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </Link>
              </div>

            </div>

          
      </React.Fragment>
    )
  }
}
