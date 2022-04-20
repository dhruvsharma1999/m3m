import React, { Component } from 'react'
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import logoVendor from "../../assets/dust/lalpathlabs.webp"
import Breadcrumb from '../../component/breadcrumb'

export default class HomecareCompare extends Component {
    render() {
        return (
            <React.Fragment>
              
                    <div className='container'>
                        <Breadcrumb url="" chlidrenUrl="" text="Home Care Compare" />
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h1 className="fs-4 mb-1">Compare</h1>
                            </div>
                        </div>
                        <div className='mhc-compare'>
                        <div className='table-compare table-responsive mt-2 mb-4' >
                            <Table bordered className='table-width'>
                                <thead>
                                    <tr>
                                        <th>
                                            <div className='row'>
                                                <div className='col-8 col-sm-7 d-flex align-items-center'>
                                                    <h6>Covid Care 15 Days</h6>
                                                </div>
                                                <div className='col-4 col-sm-5 d-flex justify-content-end'>
                                                    <span className='img-holder'><img src={logoVendor} alt="1mg" className='vendor-image'></img></span>
                                                </div>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='col-8 d-flex align-items-center'>
                                                    <h6 className='text-danger'>INR 500/Day</h6>
                                                </div>
                                                <div className='col-4 d-flex justify-content-end'>
                                                    <Link to="/home-care-login  " className="btn btn-primary rounded-1 px-4" >Book</Link>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className='row'>
                                                <div className='col-8 col-sm-7 d-flex align-items-center'>
                                                    <h6>Covid Care 15 Days</h6>
                                                </div>
                                                <div className='col-4 col-sm-5 d-flex justify-content-end'>
                                                    <span className='img-holder'><img src={logoVendor} alt="1mg" className='vendor-image'></img></span>
                                                </div>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='col-8 d-flex align-items-center'>
                                                    <h6 className='text-danger'>INR 500/Day</h6>
                                                </div>
                                                <div className='col-4 d-flex justify-content-end'>
                                                    <button className="btn btn-primary rounded-1  px-4" >Book</button>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <div className='row mt-2'>
                                                <div className='col-12'>
                                                    <h6 >Package Inclusions</h6>
                                                        <li>Essential medical kit</li>
                                                        <li>Trained nurses for vital monitoring</li>
                                                        <li>Doctors Review</li>
                                                        <li>Self Monitoring Guidelines</li>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='row mt-2'>
                                                <div className='col-12'>
                                                    <h6 >Package Inclusions</h6>
                                                        <li>Essential medical kit</li>
                                                        <li>Trained nurses for vital monitoring</li>
                                                        <li>Doctors Review</li>
                                                        <li>Self Monitoring Guidelines</li>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='row mt-2'>
                                                <div className='col-12'>
                                                    <h6 >Add On Components</h6>
                                                        <li>Covid 19 testing home fumigation support</li>
                                                        <li>Ambulance and Paramedics in case of emergency</li>
                                                        <li>Consultation by specialist doctors</li>
                                                        <li>Advanced pakcages available</li>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <div className='row mt-2'>
                                                <div className='col-12'>
                                                    <h6 >Add On Components</h6>
                                                        <li>Covid 19 testing home fumigation support</li>
                                                        <li>Ambulance and Paramedics in case of emergency</li>
                                                        <li>Consultation by specialist doctors</li>
                                                        <li>Advanced pakcages available</li>
                                                        <li>Advanced pakcages available</li>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        </div>
                    </div>
             
            </React.Fragment>
        )
    }
}
