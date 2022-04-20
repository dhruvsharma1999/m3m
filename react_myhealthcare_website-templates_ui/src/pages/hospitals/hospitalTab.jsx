import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import artemisLogo from "../../assets/dust/hospital-artemis.webp";
import JivakaHealthcare from "../../assets/dust/Jivaka-Healthcare.webp";
import BhagirathiNeotiaurugram from "../../assets/dust/BhagirathiNeotiaurugram .webp";
import ARTFertilitylinicGurugram from "../../assets/dust/ARTFertilitylinicGurugram.webp";
export default class HospitalTab extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row mb-4 hospital-tab">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
            <Link className="text-decoration-none" to="/hopsital-consult">
              <Card className="hospital-card">
                <div className="row pt-3">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      className="hospital-img"
                      src={artemisLogo}
                      alt={"artemis logo"}
                    />
                  </div>
                </div>
                <Card.Body>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <Card.Text>
                        <div className="d-flex justify-content-center text-center">
                          <span className="text-dark">
                            Artemis Hospital <br />{" "}
                            <span className="text-secondary">Gurugram</span>
                          </span>
                        </div>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
            <Link className="text-decoration-none" to="/hopsital-consult">
              <Card className="hospital-card">
                <div className="row pt-3">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      className="hospital-img"
                      src={JivakaHealthcare}
                      alt={"JivakaHealthcare"}
                    />
                  </div>
                </div>
                <Card.Body>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <Card.Text>
                        <div className="d-flex justify-content-center text-center">
                          <span className="text-dark">
                            Jivaka Healthcare Clinic, <br />
                            <span className="text-secondary">Gurugram</span>
                          </span>
                        </div>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
            <Link className="text-decoration-none" to="/hopsital-consult">
              <Card className="hospital-card">
                <div className="row pt-3">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      className="hospital-img"
                      src={BhagirathiNeotiaurugram}
                      alt={"BhagirathiNeotiaurugram"}
                    />
                  </div>
                </div>
                <Card.Body>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <Card.Text>
                        <div className="d-flex justify-content-center text-center">
                          <span className="text-dark">
                            Bhagirathi Neotia, <br />{" "}
                            <span className="text-secondary">Gurugram</span>
                          </span>
                        </div>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
            <Link className="text-decoration-none" to="/hopsital-consult">
              <Card className="hospital-card">
                <div className="row pt-3">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      className="hospital-img"
                      src={ARTFertilitylinicGurugram}
                      alt={"ARTFertilitylinicGurugram"}
                    />
                  </div>
                </div>
                <Card.Body>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <Card.Text>
                        <div className="d-flex justify-content-center text-center">
                          <span className="text-dark">
                            ART Fertility Clinic, <br />{" "}
                            <span className="text-secondary">Gurugram</span>
                          </span>
                        </div>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
            <Link className="text-decoration-none" to="/hopsital-consult">
              <Card className="hospital-card">
                <div className="row pt-3">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      className="hospital-img"
                      src={artemisLogo}
                      alt={"artemis logo"}
                    />
                  </div>
                </div>
                <Card.Body>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <Card.Text>
                        <div className="d-flex justify-content-center text-center">
                          <span className="text-dark">
                            Artemis Hospital <br />{" "}
                            <span className="text-secondary">Gurugram</span>
                          </span>
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
    );
  }
}
