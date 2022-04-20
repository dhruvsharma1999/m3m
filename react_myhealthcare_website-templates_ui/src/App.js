import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/index";

import Footer from "./component/footer/index";
import Home from "./pages/home";
import About from "./pages/about";
import BookingConsult from "./pages/booking/index";
import UserRegister from "./pages/register/index";
import ConsultDoctor from "./pages/consult-doctor/consultDoctor";
import DectorProfile from "./pages/dector-profile/dectorProfile";
import HopistalDectorProfile from "./pages/dector-profile/hospitalDoctorprofile";
import ClinicsDectorProfile from "./pages/dector-profile/clinicsDectorProfile";
import HomecareService from "./pages/homecareService/homecareService";
import HomecareCategory from "./pages/homecareService/homecareCategory";
import HomecareCategoryCompare from "./pages/homecareService/homecareCategoryCompare";
import HomecareCompare from "./pages/homecareService/homecareCompare";
import HomeServiceCareLogin from "./pages/package-login/HomeServiceCare";
import ConsultDectorEarlistSlot from "./pages/consult-dector-earlist-slot/consultDectorEarlistSlot";
import BookingConfirmed from "./pages/Booking-Confirmed/BookingConfirmed";
import ConsultHospital from "./pages/consult-hopsital/consultHopsital";
import ConsultHopsitalDector from "./pages/consult-hopsital/consultHopsitalDector";
import ConsultClinicsDector from "./pages/consult-clinics/consultClinicsDector";
import BookTestPackages from "./pages/Book-test-packages/bookTestPackages";
import PackageComparison from "./pages/package-comparison/packageComparison";
import PackageLogin from "./pages/package-login/packageLogin";
import PackageBookingConfirmed from "./pages/Booking-Confirmed/packageBookingConfirmed";
import OrderMedicine from "./pages/order-medicine/OrderMedicine";
import BookTestLogin from "./pages/book-test-login/bookTestLogin";
import CarePackage from "./pages/care-package/carePackage";
import CarePackageCompare from "./pages/care-package/carePackageCompare";
import CarePackageComparison from "./pages/care-package/carePackageComparison";
import CarePackageLogin from "./pages/care-package/carePackageLogin";
import CareBookingConfirmed from "./pages/care-package/careBookingConfirmed";
import Blog from "./pages/blog/blog";
import BlogDetails from "./pages/blog/blog-details";
import Partners from "./pages/partners/partners";
import PatientDashBoard from "./pages/patient-portal/patient-dashboard";
import PatientMyBooking from "./pages/patient-portal/patientMyBooking";
import PatientMyprescriptions from "./pages/patient-portal/patientMyprescriptions";
import PatientMyDocument from "./pages/patient-portal/patientMyDocument";
import PatientMyReport from "./pages/patient-portal/patientMyReport";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { locationReducer } from "./redux/slice/location-slice";
import Geocode from "react-geocode";
// Geocode.setLanguage("en");
// Geocode.setApiKey("AIzaSyAKmCP_YSNIV6ckvVdjuia0pf7fIu05GhU");
// Geocode.setLocationType("ROOFTOP");
function App() {
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          dispatch(
            locationReducer({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            })
          );
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  console.log("lat", lat);
  console.log("lng", lng);
  return (
    <React.Fragment>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking-consult" element={<BookingConsult />} />
          <Route
            path="/booking-consult/hopsital"
            element={<BookingConsult />}
          />
          <Route path="/booking-consult/Clinics" element={<BookingConsult />} />
          <Route path="/booking-consult/Doctors" element={<BookingConsult />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route
            path="/booking-consult/consult-doctor"
            element={<ConsultDoctor />}
          />
          <Route
            path="/booking-consult/consult-doctor-earlist-slot"
            element={<ConsultDectorEarlistSlot />}
          />
          <Route path="/dector-profile" element={<DectorProfile />} />
          <Route
            path="/hospital-dector-profile"
            element={<HopistalDectorProfile />}
          />
          <Route
            path="/clinics-dector-profile"
            element={<ClinicsDectorProfile />}
          />
          <Route path="/homecare-services" element={<HomecareService />} />
          <Route
            path="/homecare-service-category"
            element={<HomecareCategory />}
          />
          <Route
            path="/homecare-service-compare"
            element={<HomecareCategoryCompare />}
          />
          <Route
            path="/homecare-service-category-compare"
            element={<HomecareCompare />}
          />
          <Route path="/home-care-login" element={<HomeServiceCareLogin />} />
          <Route path="/Booking-confirmed" element={<BookingConfirmed />} />
          <Route path="/hopsital-consult" element={<ConsultHospital />} />
          <Route
            path="/consult-hopsital-dector"
            element={<ConsultHopsitalDector />}
          />
          <Route
            path="/consult-clinics-dector"
            element={<ConsultClinicsDector />}
          />

          <Route path="/Book-test" element={<BookTestPackages />} />
          <Route path="/package-comparison" element={<PackageComparison />} />
          <Route path="/package-login" element={<PackageLogin />} />
          <Route
            path="/package-booking-confirm"
            element={<PackageBookingConfirmed />}
          />
          <Route path="/order-medicine" element={<OrderMedicine />} />
          <Route path="/book-test-login" element={<BookTestLogin />} />

          <Route path="/care-package" element={<CarePackage />} />
          <Route
            path="/care-package-campare"
            element={<CarePackageCompare />}
          />
          <Route
            path="/care-package-comparison"
            element={<CarePackageComparison />}
          />
          <Route path="/care-package-login" element={<CarePackageLogin />} />
          <Route
            path="/care-booking-confirmed"
            element={<CareBookingConfirmed />}
          />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/partners" element={<Partners />} />

          <Route path="/patient-dashboard" element={<PatientDashBoard />} />
          <Route path="/patient-my-booking" element={<PatientMyBooking />} />
          <Route
            path="/patient-my-prescription"
            element={<PatientMyprescriptions />}
          />
          <Route path="/patient-my-document" element={<PatientMyDocument />} />
          <Route path="/patient-my-report" element={<PatientMyReport />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
