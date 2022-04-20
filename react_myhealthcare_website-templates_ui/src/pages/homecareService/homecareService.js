import React, { Component } from 'react'
import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from '../../component/breadcrumb'
import nurseIcon from "../../assets/dust/homecare-nurse.webp"
import rehabIcon from "../../assets/dust/homecare-rehab.webp"
import remoteIcon from "../../assets/dust/homecare-remote.webp"
import medicalIcon from "../../assets/dust/homecare-medical.webp"

export default class HomecareService extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="container mb-2 homecare-services">
                        <Breadcrumb url="" chlidrenUrl="" />
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h1 className="fs-4 mb-1">Homecare Services</h1>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-service-card">
                                    <div className="row pt-3">
                                        <div className="col-12 img-holder">
                                            <Card.Img variant="top" className="image" src={nurseIcon} alt={"nurse"} />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                               
                                                    <div className="d-flex justify-content-center text-center">
                                                        <span className='text-dark'>Nursing</span>
                                                    </div>
                                              
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12 d-flex justify-content-center">
                                                <Link className="nav-link " aria-current="page" to="/homecare-service-category">
                                                    <button className="btn btn-primary  rounded-1  px-4">Book</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-service-card">
                                    <div className="row pt-3">
                                        <div className="col-12 img-holder">
                                            <Card.Img variant="top" className="image" src={rehabIcon} alt={"rehab"} />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                         
                                                    <div className="d-flex justify-content-center text-center">
                                                        <span className='text-dark'>Rehab</span>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button className="btn btn-primary rounded-1  px-4">Book</button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-service-card">
                                    <div className="row pt-3">
                                        <div className="col-12 img-holder">
                                            <Card.Img variant="top" className="image" src={remoteIcon} alt={"nurse"} />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                           
                                                    <div className="d-flex justify-content-center text-center">
                                                        <span className='text-dark'>Remote Monitoring</span>
                                                    </div>
                                              
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button className="btn btn-primary rounded-1  px-4">Book</button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-service-card">
                                    <div className="row pt-3">
                                        <div className="col-12 img-holder">
                                            <Card.Img variant="top" className="image" src={medicalIcon} alt={"nurse"} />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                              
                                                    <div className="d-flex justify-content-center text-center">
                                                        <span className='text-dark'>Medical Equipment</span>
                                                    </div>
                                               
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button className="btn btn-primary rounded-1  px-4">Book</button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
