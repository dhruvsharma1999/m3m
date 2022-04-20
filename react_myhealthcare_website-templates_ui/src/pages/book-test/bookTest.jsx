import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
const Tests=[
    {
    tittle:"Covid home collection charges"
    },
     {
    tittle:"5 - hiaa (5-hydroxy indole "
    },
    {
        tittle:"Adenosine deaminase ; ada"
     },
    
     {
        tittle:"Covid-19 virus qualitative pcr"
     },
     {
        tittle:"5-alpha-dihydrotestosterone; "
     },
     {
        tittle:"Adenovirus, qualitative pcr"
     },
     {
        tittle:"Sars cov-2 (covid-19) total antibodies"
     },
     {
        tittle:"5-aminolevulinic acid (5 -ala)"
     },
     {
        tittle:"Afp (alpha fetoprotein), maternal"
     },

]
export default class BookTest extends React.Component{
    render(){
        return(
            <React.Fragment>
              <div className="row">
                  {
                      Tests.map((item)=>(
                        <div className="col-md-6 col-lg-4 mb-4">
                        <div className="form-check mhc-test-bordered-checkbox">
                        <input className="form-check-input" type="checkbox" defaultValue="" id={item.tittle} />
                        <label className="form-check-label d-block d-sm-inline " htmlFor={item.tittle}>
                       {item.tittle}
                        </label>
                        </div>
                                       
                                            </div>
                      ))
                  }
                 
                  
           
                  </div>

                  <div className="row">
                      <div className="col-12 text-center mb-4">
                          <Link to="/book-test-login" className="btn btn-primary rounded-1">Go to Cart (4)</Link>
                          </div>
                      </div>
            </React.Fragment>
        )
    }
} 