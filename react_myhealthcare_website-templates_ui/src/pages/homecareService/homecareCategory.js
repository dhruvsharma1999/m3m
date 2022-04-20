import React, { Component } from 'react';
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import healthianImg from "../../assets/dust/homecare-service-healthian.webp"
import onemg from "../../assets/dust/homecare-modal-1mg.webp"

import Breadcrumb from '../../component/breadcrumb'

export default class HomecareCategory extends Component {
 

    render() {
        return (
            <React.Fragment>
                <section className="homecare-category">
                    <div className="container">
                        <Breadcrumb url="" chlidrenUrl="" />
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h1 className="fs-4 mb-1">Nursing</h1>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-category-card">
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between">
                                                <div className="w-75">
                                                    <h6>Covid Homecare</h6>
                                                    <p className="text-secondary">Starting at INR 500</p>
                                                </div>
                                                <div className="w-25">
                                                    <Card.Img variant="top" className="image" src={healthianImg} alt={"healthian"} />
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-12 d-flex justify-content-start">
                                                    <Link to="/homecare-service-compare" className="btn btn-primary rounded-1  px-4" >Details</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                        

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-category-card">
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between">
                                                <div className="w-75">
                                                    <h6>Covid Homecare</h6>
                                                    <p className="text-secondary">Starting at INR 500</p>
                                                </div>
                                                <div className="w-25">
                                                    <Card.Img variant="top" className="image" src={healthianImg} alt={"healthian"} />
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-12 d-flex justify-content-start">
                                                <Link to="/homecare-service-compare" className="btn btn-primary rounded-1  px-4" >Details</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-category-card">
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between">
                                                <div className="w-75">
                                                    <h6>Covid Homecare</h6>
                                                    <p className="text-secondary">Starting at INR 500</p>
                                                </div>
                                                <div className="w-25">
                                                    <Card.Img variant="top" className="image" src={healthianImg} alt={"healthian"} />
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-12 d-flex justify-content-start">
                                                <Link to="/homecare-service-compare" className="btn btn-primary rounded-1  px-4" >Details</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-category-card">
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between">
                                                <div className="w-75">
                                                    <h6>Covid Homecare</h6>
                                                    <p className="text-secondary">Starting at INR 500</p>
                                                </div>
                                                <div className="w-25">
                                                    <Card.Img variant="top" className="image" src={healthianImg} alt={"healthian"} />
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-12 d-flex justify-content-start">
                                                <Link to="/homecare-service-compare" className="btn btn-primary rounded-1  px-4" >Details</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-category-card">
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between">
                                                <div className="w-75">
                                                    <h6>Covid Homecare</h6>
                                                    <p className="text-secondary">Starting at INR 500</p>
                                                </div>
                                                <div className="w-25">
                                                    <Card.Img variant="top" className="image" src={healthianImg} alt={"healthian"} />
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-12 d-flex justify-content-start">
                                                <Link to="/homecare-service-compare" className="btn btn-primary rounded-1  px-4" >Details</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                                <Card className="homecare-category-card">
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between">
                                                <div className="w-75">
                                                    <h6>Covid Homecare</h6>
                                                    <p className="text-secondary">Starting at INR 500</p>
                                                </div>
                                                <div className="w-25">
                                                    <Card.Img variant="top" className="image" src={healthianImg} alt={"healthian"} />
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-12 d-flex justify-content-start">
                                                <Link to="/homecare-service-compare" className="btn btn-primary rounded-1  px-4" >Details</Link>

                                                </div>
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
