import { render } from "@testing-library/react";
import React from "react";
import antiClock from "../../assets/images/anticlock.png";
export default class LoginUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOtp: false,
    };
  }
  handleOtp() {
    console.log(this.state.showOtp);
    this.setState({ showOtp: !this.state.showOtp });
  }
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled d-flex flex-wrap list-login mb-0">
          <li>
            {" "}
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                defaultValue=""
                id="Mobile"
                placeholder="Mobile"
              />
              <label htmlFor="name">
                Mobile <sup>*</sup>
              </label>
            </div>
          </li>
          <li
            className={`${this.state.showOtp == false ? "d-none" : "d-block"}`}
          >
            <div className="form-floating ms-0 ms-md-2 mt-4 mt-md-0">
              <input
                type="text"
                className="form-control"
                defaultValue="2345"
                id="OTP"
                placeholder="OTP"
              />
              <label htmlFor="name">
                OTP <sup>*</sup>
              </label>
            </div>
          </li>
          <li>
            <div className="ms-0 ms-md-2 mt-3 mb-2 mt-md-0">
              {" "}
              <button
                className="btn btn-outline-primary  rounded-1"
                type="submit"
                onClick={() => this.handleOtp()}
              >
                {this.state.showOtp == false ? (
                  <span>Continue</span>
                ) : (
                  <span>Verify OTP</span>
                )}
              </button>
            </div>
          </li>
        </ul>
        {this.state.showOtp == false ? (
          ""
        ) : (
          <div className="row  mt-4">
            <div className="col-md-6 col-lg-6">
              {" "}
              <p className="m-0">
                An OTP has been sent to your mobile number, please enter to
                verify.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mt-3 mt-md-0">
              <div className="d-flex   align-items-center justify-content-start justify-content-md-end">
                <div>
                  <a
                    href=""
                    className="text-primary  fs-6 text-decoration-none text-nowrap"
                  >
                    Resend OTP{" "}
                  </a>
                </div>
                <div class="anitClock">
                  {" "}
                  <img src={antiClock} className="anti-img" />
                  <p className="otp-time">30</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
