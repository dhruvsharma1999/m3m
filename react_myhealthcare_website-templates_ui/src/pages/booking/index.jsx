import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb/index";
import SearchForm from "../../component/search/index";
import Specialities from "../specialities/index";
import HospitalTab from "../hospitals/hospitalTab";
import ClinicsTab from "../clinics/clinicsTab";
import DoctorsTabs from "../DoctorsTab/doctorsTab";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";
function BookingConsult() {
  const location = useLocation();
  const locationData = useSelector((state) => state.location.value);
  console.log("llll", locationData.lat);
  console.log("gulan", location);
  const [hospital, setHospital] = useState();
  console.log("hostpital", hospital);
  useEffect(() => {
    // window.location.reload();
    const getHospital = async () => {
      let res = await axios.get(
        `https://mhappapis.vc.myhealthcare.co//api/patients/web/v2/hospitals-by-city?lat=${locationData.lat}&lng=${locationData.long}`
      );
      let resData = res.data;
      setHospital(resData.cities);
    };
    getHospital();
  }, []);
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <Breadcrumb url="" chlidrenUrl="" text="Book Consult" />

          <div className="row">
            <div className="col-lg-6 ">
              <h1 className="fs-4 mb-1">Book Consult</h1>
              <p className="m-0 fs-6">
                Consult with top doctors across specialities
              </p>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <SearchForm
                placeholder="Search Specialities/Doctors"
                btnDisplay={true}
              />
            </div>
          </div>
          <div className="mhc-tabs my-4">
            <Tabs
              defaultActiveKey={`${
                location.pathname === "/booking-consult"
                  ? "Specialities"
                  : location.pathname === "/booking-consult/hopsital"
                  ? "Hospitals"
                  : location.pathname === "/booking-consult/Clinics"
                  ? "Clinics"
                  : location.pathname === "/booking-consult/Doctors"
                  ? "Doctors"
                  : ""
              }`}
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Specialities" title="Specialities">
                <Specialities />
              </Tab>
              <Tab eventKey="Hospitals" title="Hospitals">
                <div className="mt-2">
                  <HospitalTab hospitalList={hospital} />
                </div>
              </Tab>
              <Tab eventKey="Clinics" title="Clinics">
                <div className="mt-2">
                  <ClinicsTab />
                </div>
              </Tab>
              <Tab eventKey="Doctors" title="Doctors">
                <DoctorsTabs />
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default BookingConsult;
