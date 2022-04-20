import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import whatappRegister from '../../assets/images/whatsapp.svg'
import print from '../../assets/dust/print.svg'
export default class BookingSummaryPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,

        }
        this.handleClose.bind(this)
        this.handleShow.bind(this)


    }
    handleShow() {
        console.log(this.state.modal)
        this.setState({ modal: true })
    };
    handleClose() {
        this.setState({ modal: false })
    };

    render() {
        return (
            <React.Fragment>
                <div className="mhc-patient-details ">
                    <div className="row">
                        <div className="col-5">Patient </div>
                        <div className="col-auto">     <span >:</span>   </div>
                        <div className="col-6"><span className="fw-bold">Rajesh Mishra</span></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-5">Mobile No. </div>
                        <div className="col-auto">     <span >:</span>   </div>
                        <div className="col-6"><span className="fw-bold">+91 9281128112</span></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-5">Consult Type </div>
                        <div className="col-auto">     <span >:</span>   </div>
                        <div className="col-6"><span className="fw-bold">At Hospital <img src={print} className="hospitallog" /></span></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-5">Appointment Date & Time </div>
                        <div className="col-auto">     <span >:</span>   </div>
                        <div className="col-6"><span className="fw-bold text-primary">Fri, 1 Nov 2021 | 8:30 AM</span></div>
                    </div>
                </div>
                <div className="mhc-payment-details mt-4">
                    <div className="row mt-2">
                        <div className="col-md-9 col-lg-9 col-xl-10">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="CouponCode" placeholder="Coupon Code" />
                                <label htmlFor="name">Coupon Code </label>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
                            <a href="" className="btn btn-outline-secondary w-100 rounded-1 bg-white">Apply</a>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-6">Consultation Fee </div>
                        <div className="col-6 text-end"><span className="me-1">:</span><span className="fw-bold">INR 700 </span></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">Registration  Fee </div>
                        <div className="col-6 text-end"><span className="me-1">:</span><span className="fw-bold">INR 700</span></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">                         <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="MyWallet" checked />
                            <label className="form-check-label d-block d-sm-inline " htmlFor="MyWallet">
                                Use MyWallet for Payment
                            </label>
                        </div></div>
                        <div className="col-6 text-end"><span className="me-1">:</span><span className="fw-bold">INR 700</span></div>
                    </div>
                    <div className="border-bottom border-light w-100 transition mt-3"></div>
                    <div className="row mt-2">
                        <div className="col-6"><span className="fw-bold">Total to be Paid</span></div>
                        <div className="col-6 text-end"><span className="fw-bold ">INR 800</span></div>
                    </div>


                </div>
                <div className="mhc-register-form mt-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  d-block d-sm-inline" htmlFor="flexCheckDefault">
                            I have read and agree to the <a href="" className="text-primary text-decoration-none">Terms and Conditions.</a>
                        </label>
                    </div>


                    <div className="d-flex flex-column flex-sm-row mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label  d-block d-sm-inline" htmlFor="flexCheckDefault">
                                I agree to receive updates on
                            </label>
                        </div>
                        <div className="ms-2 mt-2 mt-sm-0">
                            <a href="" className="text-primary text-decoration-none d-flex align-items-center"><img src={whatappRegister} alt="" className="whatapp" /> WhatApp</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center text-md-end">

                        <button className="btn btn-outline-primary rounded-1 " onClick={() => this.handleShow()}>Pay Later</button>
                        <Link to="/Booking-confirmed" className="btn btn-primary ms-3 rounded-1">Pay Now</Link>
                    </div>
                </div>


                <Modal show={this.state.modal} onHide={this.handleClose} size="md" >

                    <Modal.Body>
                        <p className="fs-6 text-center fw-bold"> Using “Pay Now” option is more rewarding
                            As you can earn/redeem wallet points.</p>
                        <div className="row mt-4">
                            <div className="col-12 text-center ">
                                <button href="" className="btn btn-outline-primary rounded-1" >Pay Later</button>
                                <button href="" className="btn btn-primary ms-3 rounded-1" onClick={() => this.handleClose()}>Pay Now</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </React.Fragment>
        )
    }
}