import React, { Component } from 'react';
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import healthianImg from "../../assets/dust/homecare-service-healthian.webp"
import onemg from "../../assets/dust/homecare-modal-1mg.webp"

import Breadcrumb from '../../component/breadcrumb'

const homecare=[
    {
        tittle:'Covid Homecare'
    },
    {
        tittle:'Covid Homecare'
    },
    {
        tittle:'Covid Homecare'
    },
    {
        tittle:'Covid Homecare'
    },
    {
        tittle:'Covid Homecare'
    },
    {
        tittle:'Covid Homecare'
    },
]
export default class HomecareCategoryCompare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtermodal: false
        }
        this.handleClose.bind(this)
        this.handleShow.bind(this)
    }

    handleShow() {
        this.setState({ filtermodal: true })
    };
    handleClose() {
        this.setState({ filtermodal: false })
    };

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
                       
                     {
                         homecare.map((item)=>(
                            <div className=" col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                            <Card className="homecare-category-card">
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-between">
                                            <div className="w-75">
                                                <h6>{item.tittle}</h6>
                                                <p className="text-secondary">Starting at INR 500</p>
                                            </div>
                                            <div className="w-25">
                                                <Card.Img variant="top" className="image" src={healthianImg} alt={"healthian"} />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row     align-items-center justify-content-between">
                                            <div className="col-auto ">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id={"flexCheckDefault"} />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="col-auto text-end">
                                                <div className="d-flex justify-content-end">
                                                <button className="btn btn-outline-secondary rounded-1   me-2" onClick={() => this.handleShow()} >Details</button>
                                                <button className="btn btn-primary rounded-1  rounded-1 " >Book</button>
                                                </div>
                                              
                                            </div>
                                        </div>
                                  
                                </Card.Body>
                            </Card>
                        </div>
                         ))
                     }
                          

                            

                        </div>
                        <div className="row my-4">
                            <div className='col-12 d-flex justify-content-center'>
                                <Link aria-current="page" to="/homecare-service-category-compare">
                                    <button className="btn btn-primary rounded-1  px-4">Compare</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Details Modal for Homecare Services */}

                <Modal show={this.state.filtermodal} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container homecare-details-modal'>
                            <div className='row'>
                                <div className='col-auto d-flex justify-content-start'>
                                    <h5 className='text-danger'>Covid HomeCare</h5>
                                </div>
                                <div className='col d-flex justify-content-end'>
                                    <span className='img-holder'><img src={onemg} alt="1mg" className='vendor-image'></img></span>
                                </div>
                            </div>
                            <div className='row mt-1'>
                                <div className='col-12'>
                                    <span className="text-dark">Starting at INR 500</span>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12'>
                                    <h6 >Package Inclusions</h6>
                                    <ul>
                                        <li className="fs-6">Essential medical kit</li>
                                        <li>Trained nurses for vital monitoring</li>
                                        <li>Doctors Review</li>
                                        <li>Self Monitoring Guidelines</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12'>
                                    <h6 >Package Inclusions</h6>
                                    <ul>
                                        <li className="fs-6">Essential medical kit</li>
                                        <li>Trained nurses for vital monitoring</li>
                                        <li>Doctors Review</li>
                                        <li>Self Monitoring Guidelines</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                </Modal>

            </React.Fragment>
        )
    }
}
