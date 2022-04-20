import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BookConsult from "../../assets/images/book-consult.svg";
import bookTests from "../../assets/images/book-tests.svg";
import orderMedicines from "../../assets/images/order-medicines.svg";
import homecareServices from "../../assets/images/homecare-services.svg";
import carePckages from "../../assets/images/care-packages.svg";
import logoBLK from "../../assets/dust/logo-BLK.webp";
import logoMax from "../../assets/dust/logo-max.webp";
import logoMedanta from "../../assets/dust/logo-medanta.webp";
import logoNanavati from "../../assets/dust/logo-nanavati.webp";
import breachCandyHospital from "../../assets/dust/breach-candy-hospital.webp";
import dentist from "../../assets/dust/dentist.svg";
import cardiology from "../../assets/dust/cardiology.svg";
import gynaecology from "../../assets/dust/gynaecology.svg";
import gastrology from "../../assets/dust/gastrology.svg";
import orthopedic from "../../assets/dust/orthopedic.svg";
import neurology from "../../assets/dust/neurology.svg";
import partnersDigitalJourney from "../../assets/images/digital-journey.webp";
import myhealthcareforDoctors from "../../assets/images/myhealthcare-for-doctors.svg";
import myHealthcareorPatients from "../../assets/images/myHealthcare-for-patients.svg";
import myHealthcareforHospitals from "../../assets/images/myHealthcare-for-hospitals.svg";
import hospitalIcon from "../../assets/images/hospital-icon.svg";
import paitentIcon from "../../assets/images/paitent-icon.svg";
import doctorsIcon from "../../assets/images/doctors-icon.svg";
import businesswoman from "../../assets/dust/businesswoman-using-tablet-analysis-graph-company.webp";
import SearchForm from "../../component/search/index";
import DownloadApp from "../../component/download-app/downloadApp";
import MHCLocation from "../../component/mhc-location";
class Home extends React.Component {
  render() {
    console.log(window.location);
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ],
    };
    return (
      <React.Fragment>
        <section className="mhc-home-banner">
          <div className="mhc-banner-text">
            <div className="container">
              <h1>
                Speciality Healthcare <br className="d-block d-lg-none" />{" "}
                Services
              </h1>
              <div className="row justify-content-start justify-content-lg-center mt-4 mb-4">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
                  <MHCLocation isNavbar={false} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-6 col-xxl-6 position-relative mt-4 mt-lg-0">
                  <SearchForm
                    placeholder="Search Specialities/Doctors"
                    btnDisplay={true}
                  />
                  {/* <div className="input-group ">
                          <span className="input-group-text border-0"><i className="mhc-icon  icon-search-icon"></i></span>
                          <input type="search" className="form-control border-0" id="" placeholder="Search"></input>
                       
                              </div>
                              <button className="btn btn-primary rounded-1  btn-search">Search</button> */}
                </div>
              </div>
              {/* end row */}
              <div className="row justify-content-center mt-4 d-none d-lg-flex">
                <div className="col-lg-12 col-xl-9 col-xxl-8">
                  <div className="bg-white rounded-3">
                    <ul className="list-inline d-flex mb-0">
                      <li className="list-inline-item">
                        <Link
                          className="d-flex align-items-center"
                          to="/booking-consult"
                        >
                          <div className="image-holder">
                            <img src={BookConsult} />
                          </div>
                          <span>Book Consult</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className="d-flex align-items-center"
                          to="/Book-test"
                        >
                          <div className="image-holder">
                            <img src={bookTests} />
                          </div>
                          <span>Book Tests</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className="d-flex align-items-center"
                          to="/order-medicine"
                        >
                          <div className="image-holder">
                            <img src={orderMedicines} />
                          </div>
                          <span>Order Medicines</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className="d-flex align-items-center"
                          to="/homecare-services"
                        >
                          <div className="image-holder">
                            <img src={homecareServices} />
                          </div>
                          <span>Homecare Services</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className="d-flex align-items-center"
                          to="/care-package"
                        >
                          <div className="image-holder">
                            <img src={carePckages} />
                          </div>
                          <span>Care Packages</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5 d-none d-lg-flex">
              <div className="col-md-12 call-assistance">
                <p className="m-0 d-flex justify-content-center align-items-center">
                  <span>For assistance call patient services</span>{" "}
                  <span className="fs-2 text-primary ms-3">011 41179678</span>
                </p>
              </div>
            </div>

            {/* end container                      */}
          </div>
        </section>

        <section className="our-partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 d-none d-lg-block">
                <p className="m-0">Our Partner's</p>
              </div>
              <div className="col-lg-10">
                <Slider {...settings}>
                  <div>
                    <img src={logoBLK} />
                  </div>
                  <div>
                    <img src={logoMax} />
                  </div>
                  <div>
                    <img src={logoMedanta} />
                  </div>
                  <div>
                    <img src={logoNanavati} />
                  </div>
                  <div>
                    <img src={breachCandyHospital} />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className="specialized-categories">
          <div className="container">
            <h1 className="text-left text-lg-center">
              Specialized Doctors Categories
            </h1>
            <p className="text-left text-lg-center mb-0">
              With Super specialist doctors and state-of-the-art technology, we
              cover the complete spectrum of medical specialties
            </p>

            <div className="row justify-content-center mt-4">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="spicialize-card">
                  <div className="img-holder">
                    <img src={dentist} />
                  </div>
                  <p className="mb-0 mt-2">Dentist</p>
                  <a href="" className="btn rounded-1  btn-light mt-2 ">
                    Consult Now{" "}
                  </a>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="spicialize-card">
                  <div className="img-holder">
                    <img src={cardiology} />
                  </div>
                  <p className="mb-0 mt-2">Cardiology</p>
                  <a href="" className="btn btn-light rounded-1  mt-2 ">
                    Consult Now{" "}
                  </a>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-4 mt-sm-0">
                <div className="spicialize-card">
                  <div className="img-holder">
                    <img src={gynaecology} />
                  </div>
                  <p className="mb-0 mt-2">Gynaecology</p>
                  <a href="" className="btn btn-light rounded-1  mt-2 ">
                    Consult Now{" "}
                  </a>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-4 mt-lg-0">
                <div className="spicialize-card">
                  <div className="img-holder">
                    <img src={gastrology} />
                  </div>
                  <p className="mb-0 mt-2">Gastrology</p>
                  <a href="" className="btn btn-light rounded-1  mt-2 ">
                    Consult Now{" "}
                  </a>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-4 mt-lg-0">
                <div className="spicialize-card">
                  <div className="img-holder">
                    <img src={orthopedic} />
                  </div>
                  <p className="mb-0 mt-2">Orthopedic</p>
                  <a href="" className="btn btn-light rounded-1  mt-2 ">
                    Consult Now{" "}
                  </a>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-4 mt-lg-0">
                <div className="spicialize-card">
                  <div className="img-holder">
                    <img src={neurology} />
                  </div>
                  <p className="mb-0 mt-2">Neurology</p>
                  <a href="" className="btn btn-light rounded-1  mt-2 ">
                    Consult Now{" "}
                  </a>
                </div>
              </div>
              {/* end col */}
            </div>
            <div className="row">
              <div className=" col-md-11 text-center ">
                <a href="#" className="btn btn-primary rounded-1  ">
                  All Specialities
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mhc-partners-digital-journey">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 col-xl-4 d-none d-lg-block">
                <img src={partnersDigitalJourney} className="mob-img" />
              </div>
              <div className="col-lg-7 col-xl-7 ">
                <h1>
                  Your partners in your <br />
                  digital journey
                </h1>

                <div className="content">
                  <div>
                    <img src={myhealthcareforDoctors} className="icon" />
                  </div>
                  <div>
                    <h4>MyHealthcare For Doctors</h4>
                    <p>
                      MyHealthcare provides a digital care ecosystem, across all
                      OPD and IPD workflows for a doctor. Available over Web,
                      iOS, and Android.
                    </p>
                  </div>
                </div>
                <div className="content ">
                  <div>
                    <img src={myHealthcareorPatients} className="icon" />
                  </div>
                  <div>
                    <h4>MyHealthcare For Patients</h4>
                    <p>
                      A one stop solution for all your healthcare needs,
                      MyHealthcare offers you a platform to book appointments,
                      consult over a video call, order your medicines, track
                      your health parameters, and do a lot more.
                    </p>
                  </div>
                </div>
                <div className="content ">
                  <div>
                    <img src={myHealthcareforHospitals} className="icon" />
                  </div>
                  <div>
                    <h4>MyHealthcare For Hospitals</h4>
                    <p>
                      From doctors to nurses, patients to paramedics, the
                      MyHealthcare platform caters to the entire spectrum of
                      hospital operations
                    </p>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
          </div>
        </section>

        <section className="mhc-our-journey">
          <div className="container">
            <h1 className="text-left text-lg-center">Our Journey</h1>
            <p className="text-left text-lg-center">
              At MyHealthcare, we focus on complete healthcare ecosystem
              solutions. Our numbers are just a reflection of the same!
            </p>

            <div className="row justify-content-start justify-content-lg-center mt-4">
              <div className="col-md-12 col-lg-4 col-xl-3">
                <div className="mhc-journey-card">
                  <div>
                    <div>
                      <img src={hospitalIcon} className="icon" />
                    </div>
                  </div>
                  <div className="d-flex flex-row flex-lg-column justify-content-between justify-content-lg-start w-100">
                    <span>
                      Hospitals <br />
                      Partnered With
                    </span>
                    <span className="fs-2 fw-bolder">90</span>
                  </div>
                </div>
              </div>
              {/* end col */}

              <div className="col-md-12 col-lg-4 col-xl-3 mt-4 mt-lg-0">
                <div className="mhc-journey-card">
                  <div>
                    <div>
                      <img src={paitentIcon} className="icon" />
                    </div>
                  </div>
                  <div className="d-flex flex-row flex-lg-column justify-content-between justify-content-lg-start w-100">
                    <span>
                      Patients Managed <br /> through us
                    </span>
                    <span className="fs-2 fw-bolder">24M</span>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-12 col-lg-4 col-xl-3 mt-4 mt-lg-0">
                <div className="mhc-journey-card">
                  <div>
                    <div>
                      <img src={doctorsIcon} className="icon" />
                    </div>
                  </div>
                  <div className="d-flex flex-row flex-lg-column justify-content-between justify-content-lg-start w-100">
                    <span>
                      Doctors using <br />
                      our platform
                    </span>
                    <span className="fs-2 fw-bolder">7,500</span>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>

            <div className="row mt-4">
              <div className="col-12 text-center">
                <a href="#" className="btn btn-primary rounded-1  ">
                  About us{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mhc-latest-news">
          <div className="container">
            <h1 className="text-left text-lg-center">Our Journey</h1>
            <p className="text-left text-lg-center">
              At MyHealthcare, we focus on complete healthcare ecosystem
              solutions. Our numbers are just a reflection of the same!
            </p>

            <div className="row justify-content-center mt-4">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="mhc-latest-new-card">
                  <figure className="m-0">
                    <img src={businesswoman} className="icon" />
                  </figure>
                  <div className="card-body">
                    <h2>
                      InnoCirc-Backed MyHealthcare Raises $2Mn Series A Funding
                    </h2>
                    <p>
                      Gurugram-based healthtech startup MyHealthcare has raised
                      $2 Mn in a Series A funding round led by Delhi-based...
                    </p>
                    <a href="#" className="btn btn-outline-primary rounded-1  ">
                      All Specialities{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="mhc-latest-new-card">
                  <figure className="m-0">
                    <img src={businesswoman} className="icon" />
                  </figure>
                  <div className="card-body">
                    <h2>
                      InnoCirc-Backed MyHealthcare Raises $2Mn Series A Funding
                    </h2>
                    <p>
                      Gurugram-based healthtech startup MyHealthcare has raised
                      $2 Mn in a Series A funding round led by Delhi-based...
                    </p>
                    <a href="#" className="btn btn-outline-primary rounded-1  ">
                      All Specialities{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-lg-6 col-xl-3 mt-4 mt-xl-0 ">
                <div className="mhc-latest-new-card">
                  <figure className="m-0">
                    <img src={businesswoman} className="icon" />
                  </figure>
                  <div className="card-body">
                    <h2>
                      InnoCirc-Backed MyHealthcare Raises $2Mn Series A Funding
                    </h2>
                    <p>
                      Gurugram-based healthtech startup MyHealthcare has raised
                      $2 Mn in a Series A funding round led by Delhi-based...
                    </p>
                    <a href="#" className="btn btn-outline-primary rounded-1  ">
                      All Specialities{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-lg-6 col-xl-3 mt-4 mt-xl-0">
                <div className="mhc-latest-new-card">
                  <figure className="m-0">
                    <img src={businesswoman} className="icon" />
                  </figure>
                  <div className="card-body">
                    <h2>
                      InnoCirc-Backed MyHealthcare Raises $2Mn Series A Funding
                    </h2>
                    <p>
                      Gurugram-based healthtech startup MyHealthcare has raised
                      $2 Mn in a Series A funding round led by Delhi-based...
                    </p>
                    <a href="#" className="btn btn-outline-primary rounded-1  ">
                      All Specialities
                    </a>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
          </div>
        </section>

        <DownloadApp />
      </React.Fragment>
    );
  }
}

export default Home;
