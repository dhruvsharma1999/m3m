import React from "react";
import Breadcrumb from '../../component/breadcrumb/index'
import SearchForm from '../../component/search/index'
import Serviceavailability from '../../component/serviceavailability/index'
import RequestCallback from '../../component/request-callback/requestCallback'
import { Card, Button, Modal } from "react-bootstrap";
import healthianImg from "../../assets/dust/homecare-service-healthian.webp"
import { Link } from "react-router-dom";
const tastes=[
    {
        tittle:'Cardiac Care Program'
    },
    {
        tittle:'Cardiac Care Program'
    },
    {
        tittle:'Cardiac Care Program'
    },
    {
        tittle:'Cardiac Care Program'
    },
    {
        tittle:'Cardiac Care Program'
    },

]
export default class CarePackage extends React.Component{
    render(){
        return(
            <React.Fragment>
                   <div className="container">
                   <Breadcrumb url="" chlidrenUrl="" text="Care Program" />
                   <div className="row">
            <div className="col-lg-6 ">
              <h1 className="fs-4 mb-1">Care Packages</h1>
             
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
            <SearchForm placeholder="Search Packages /Tests" btnDisplay={true} />
            </div>
        </div>

        <div className="row  align-items-center mt-4 ">
            <div className="col-lg-6">
            <Serviceavailability position={false} />
            </div>
            <div className="col-lg-6 text-left text-lg-end">
            <RequestCallback position={false} />
            </div>
        </div>

        <div className="row mt-2 mt-lg-4">
            {
                tastes.map((item)=>(
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
                                            <input className="form-check-input" type="checkbox" value="" id={item.tittle} />
                                            <label className="form-check-label" htmlFor={item.tittle}>
                                            </label>
                                        </div>

                                    </div>
                                    <div className="col-auto text-end">
                                        <div className="d-flex justify-content-end">
                                      
                                        <Link className="btn btn-primary rounded-1 "  to="/care-package-campare">Details</Link>
                                        </div>
                                      
                                    </div>
                                </div>
                          
                        </Card.Body>
                    </Card>
                </div>
                ))
            }
      
        </div>
        <div className="row">
            <div className="col-12 text-center mb-4">
                <Link to="/care-package-comparison" className="btn btn-primary rounded-1 ">Compare</Link>
            </div>
        </div>
                       </div>
            </React.Fragment>
        )
    }
}