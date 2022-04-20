import React from "react";
import { Container, Accordion } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb";
import artemisLogo from "../../assets/dust/hospital-artemis.webp";
import BhagirathiNeotiaurugram from "../../assets/dust/BhagirathiNeotiaurugram .webp";
import { Link } from "react-router-dom";

import Cardiology from "../../assets/dust/cardiology.svg";
import Dental from "../../assets/dust/Dental.svg";
import DiabetologyEndocrinology from "../../assets/dust/Diabetology-Endocrinology.svg";
import ObstetricsGynaecology from "../../assets/dust/Obstetrics-Gynaecology.svg";
const accordian = [
  {
    tittle: "Cardiology",
    eventKey: "0",
    img: Cardiology,
  },
  {
    tittle: "Dental",
    eventKey: "1",
    img: Dental,
  },
  {
    tittle: "Diabetology & Endocrinology",
    eventKey: "2",
    img: DiabetologyEndocrinology,
  },
  {
    tittle: "Obstetrics & Gynaecology",
    eventKey: "3",
    img: ObstetricsGynaecology,
  },
];
export default class ConsultHospital extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Breadcrumb url="" chlidrenUrl="" text="Hospital-profile" />
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center mhc-partner">
                <div className="logo">
                  <img src={BhagirathiNeotiaurugram} alt={""} />
                </div>
                <div>
                  <p className="fs-6 fw-bold partner-hopsitalName">
                    Artemis Hospitals, Gurugram
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          <Accordion defaultActiveKey="" className="mhc-mobile-tabs mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Artemis Hospitals, Gurugram</Accordion.Header>
              <Accordion.Body>
                <h3>Artemis Hospitals, Gurugram</h3>
                <p>
                  MyHealthcare is credited to be pioneer in the field of Cardiac
                  Surgery and Cardiology in southern India with initiation of
                  heart care program in mid 80’s. This department offers
                  comprehensive cardiac care having flat panel Philips
                  catheterisation lab, dedicated coronary Care unit (ICCU),
                  finest modular OTs, CTVS ICU, top of the line Non Invasive
                  Technology including high end Echo cardiogrphy, stress test
                  (TMT) and Doppler and CT. A team of senior interventional
                  Cardiologists with round the clock (365x24) availability of
                  interventional Cardiologists, CAG and angioplasty.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <h1 className="fs-5 my-3 my-lg-4 ">Specialities </h1>
          <Accordion defaultActiveKey="" className="specialitiestabs">
            <div className="row ">
              <div className="col-lg-4">
                {accordian.map((item) => (
                  <Accordion.Item eventKey={item.eventKey} className="mb-4">
                    <Accordion.Header>
                      <Link to="/consult-hopsital-dector">
                        <img src={Cardiology} />
                        {item.tittle}
                      </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Interventional Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Invasive Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Non Invasive Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Paediatrics CTVS</a>
                        </li>
                        <li>
                          <a href="#">Paediatrics Cardiac Sciences</a>
                        </li>
                        <li>
                          <a href="#">Vascular Surgery</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </div>
              <div className="col-lg-4">
                {accordian.map((item) => (
                  <Accordion.Item eventKey={item.eventKey + 1} className="mb-4">
                    <Accordion.Header>
                      <Link to="/consult-hopsital-dector">
                        <img src={Cardiology} />
                        {item.tittle}
                      </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Interventional Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Invasive Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Non Invasive Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Paediatrics CTVS</a>
                        </li>
                        <li>
                          <a href="#">Paediatrics Cardiac Sciences</a>
                        </li>
                        <li>
                          <a href="#">Vascular Surgery</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </div>
              <div className="col-lg-4">
                {accordian.map((item) => (
                  <Accordion.Item eventKey={item.eventKey + 2} className="mb-4">
                    <Accordion.Header>
                      <Link to="/consult-hopsital-dector">
                        <img src={Cardiology} />
                        {item.tittle}
                      </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Interventional Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Invasive Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Non Invasive Cardiology</a>
                        </li>
                        <li>
                          <a href="#">Paediatrics CTVS</a>
                        </li>
                        <li>
                          <a href="#">Paediatrics Cardiac Sciences</a>
                        </li>
                        <li>
                          <a href="#">Vascular Surgery</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </div>
            </div>
          </Accordion>
          <h1 className="fs-6 my-3 my-lg-4 ">
            Fortis Hospital in other locations{" "}
          </h1>
          <ul className="list-unstyled d-flex flex-wrap mhc-hopistal-list mb-0 mt-3">
            <li className=" mb-3">
              <div className="mhc-hospital">
                <p className="m-0">Fortis Hospital, </p>
                <p className="m-0 text-primary">Bannerghatta Road</p>
              </div>
            </li>
            <li className=" mb-3">
              <div className="mhc-hospital">
                <p className="m-0">Fortis Hospital, </p>
                <p className="m-0 text-primary">Bannerghatta Road</p>
              </div>
            </li>
            <li className=" mb-3">
              <div className="mhc-hospital">
                <p className="m-0">Fortis Hospital, </p>
                <p className="m-0 text-primary">Bannerghatta Road</p>
              </div>
            </li>
            <li className="mb-3">
              <div className="mhc-hospital">
                <p className="m-0">Fortis Hospital, </p>
                <p className="m-0 text-primary">Bannerghatta Road</p>
              </div>
            </li>
            <li className="mb-3">
              <div className="mhc-hospital">
                <p className="m-0">Fortis Hospital, </p>
                <p className="m-0 text-primary">Bannerghatta Road</p>
              </div>
            </li>
          </ul>
        </Container>
      </React.Fragment>
    );
  }
}
