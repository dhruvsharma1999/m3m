import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoVendor from "../../assets/dust/lalpathlabs.webp"
import Breadcrumb from '../../component/breadcrumb'
export default class PackageComparison extends React.Component{
    render(){
        return(
            <React.Fragment>
              
                    <div className='container'>
                        <Breadcrumb url="" chlidrenUrl="" text="Package Comparison" />
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h1 className="fs-4 mb-1">Package Comparison</h1>
                            </div>
                        </div>
                        <div className='mhc-compare'>
                        <div className='table-compare table-responsive mt-2 mb-4' >
                            <Table bordered className='table-width'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>
                                            <div className='row'>
                                                <div className='col-8 col-sm-7 d-flex align-items-center'>
                                                    <h6>Aarogyam 1.2    </h6>
                                                </div>
                                                <div className='col-4 col-sm-5 d-flex justify-content-end'>
                                                    <span className='img-holder'><img src={logoVendor} alt="1mg" className='vendor-image'></img></span>
                                                </div>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='col-8 d-flex align-items-center'>
                                                <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
                                                </div>
                                                <div className='col-4 d-flex justify-content-end'>
                                                    <Link to="/package-login" className="btn btn-primary px-4" >Book</Link>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className='row'>
                                                <div className='col-8 col-sm-7 d-flex align-items-center'>
                                                    <h6>Swasthfit</h6>
                                                </div>
                                                <div className='col-4 col-sm-5 d-flex justify-content-end'>
                                                    <span className='img-holder'><img src={logoVendor} alt="1mg" className='vendor-image'></img></span>
                                                </div>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='col-8 d-flex align-items-center'>
                                                <span><del>INR 999</del></span> <span className="text-primary ms-3">INR 699</span>
                                                </div>
                                                <div className='col-4 d-flex justify-content-end'>
                                                <Link to="/package-login" className="btn btn-primary px-4" >Book</Link>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                          <tr>
                              <td className="bg-cell">Heart</td>
                              <td>High sensitivity  c-Reactive protein (hs-crp), 
lipoprotein(a) [lp(a), apo b / apoA1 ratio (apo b/a1), Apolipoprotein - B (apo-b), Apolipoprotein - A1 (apo-a1)</td>
                              <td> Lipoprotein(a) [lp(a), apo b / apo A1 ratio (apo b/a1), Apolipoprotein - B (apo-b), Apolipoprotein - A1 (apo-a1)</td>
                          </tr>
                          <tr>
                              <td className="bg-cell">Liver</td>
                              <td>Serum alb/globulin Ratio, Alkaline Phosphatase, 
Bilirubin-direct, Bilirubin (indirect) Bilirubin - total, Gamma glutamyl Transferase (ggt), Protein - total, Albumin - serum, Serum globulin, Aspartate Aminotransferase (sgot ), Alanine Transaminase (sgpt),Protein - total, Albumin -  serum, Serum globulin, Aspartat Aminotransferase (sgot ), Alanine
Transaminase (sgpt)</td>
                              <td>Alkaline Phosphatase, Bilirubin direct, Bilirubin (indirect) Bilirubin - total, Gamma glutamyl Transferase (ggt), Protein - total, Albumin - serum, Serum globulin, Aspartate Aminotransferase (sgot ), Alanine Transaminase (sgpt), Protein - total, Albumin - serum, Serum globulin, Alanine Transaminase (sgpt)</td>
                          </tr>
                          <tr>
                              <td className="bg-cell">Thyroid</td>
                              <td>Total Triiodothyronine (t3), Total thyroxine (t4),
Thyroid stimulating Hormone (tsh), Total Triiodothyronine (t3), Total thyroxine (t4), Thyroid stimulating Hormone
(tsh)</td>
                              <td>Total thyroxine (t4), Thyroid stimulating Hormone (tsh), Total Triiodothyronine (t3), Thyroid stimulating Hormone (tsh)</td>
                          </tr>
                          <tr>
                              <td className="bg-cell">Diabetes</td>
                              <td>Average blood Glucose (abg), HbA1c</td>
                              <td>Average blood Glucose (abg), HbA1c</td>
                          </tr>
                          <tr>
                              <td className="bg-cell-last">Renal</td>
                              <td>Bun / sr. Creatinine Ratio, Blood urea nitrogen
(bun), Calcium, Creatinine - serum, Uric acid, Creatinine -  serum, Uric acid</td>
                              <td>Bun / sr. Creatinine Ratio, Blood urea nitrogen
(bun), Creatinine - serum, Uric acid,
Creatinine - serum</td>
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