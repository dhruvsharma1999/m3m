import { render } from "@testing-library/react";
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb";

import { Card, Button, Modal } from "react-bootstrap";
import patient from '../../assets/dust/Scroll Group 28.webp'
import patientblog from '../../assets/dust/rounded-rectangle.webp'
import { Link } from "react-router-dom";
import DownloadApp from '../../component/download-app/downloadApp'
const blog=[
    {
        tittle:'Beware of non-infectious fever in high spinal cord injuries'
    },
    {
        tittle:'Beware of non-infectious fever in high spinal cord injuries'
    },
    {
        tittle:'Beware of non-infectious fever in high spinal cord injuries'
    },
    {
        tittle:'Beware of non-infectious fever in high spinal cord injuries'
    },
    {
        tittle:'Beware of non-infectious fever in high spinal cord injuries'
    },
    {
        tittle:'Beware of non-infectious fever in high spinal cord injuries'
    },
]
 const blogtag=[
     {
         tag:'Aesthetic And Reconstructive Surgery'
     },
     {
        tag:'Anaesthesia'
    },
    {
        tag:'Dermatology'
    },
    {
        tag:'General Medicine'
    },
    {
        tag:'Fertility'
    },
    {
        tag:'Obstetrics & Gynaecology'
    },
    {
        tag:'Physiotherapy'
    },
    {
        tag:'Nephrology'
    },
    {
        tag:'Pulmonology'
    },
    {
        tag:'Dental'
    },
    {
        tag:'ENT'
    },
    {
        tag:'Neuro Surgery'
    },
    {
        tag:'Orthopaedics'
    },
    {
        tag:'Plastic Surgery'
    },
    {
        tag:'Rheumatology'
    },
    {
        tag:'Nutrition & Dietetics'
    },
    {
        tag:'Oncology'
    },
    {
        tag:'Diabetology & Endocrinology'
    },
    {
        tag:'Gastroenterology'
    },
    {
        tag:'Neurology'
    },
    {
        tag:'Paediatrics'
    },
    {
        tag:'General Surgery'
    },
    {
        tag:'Urology'
    },
    {
        tag:'Ophthalmology'
    },
    {
        tag:'Breast Surgery'
    },
    {
        tag:'Dental Care'
    },
    {
        tag:'Arthroscopic Surgery'
    },
    {
        tag:'Dietetics'
    },
    {
        tag:'Cardiac Sciences'
    },
    {
        tag:' Dermatology'
    },
    {
        tag:'Emergency Medicine'
    },
    
    ]

    const blogpost=[
        {
            tittle:"Understanding Cervical  Cancer and the benefits of vaccination..."
        },
        {
            tittle:"Understanding Cervical  Cancer and the benefits of vaccination..."
        },
        {
            tittle:"Understanding Cervical  Cancer and the benefits of vaccination..."
        },
        {
            tittle:"Understanding Cervical  Cancer and the benefits of vaccination..."
        },
        {
            tittle:"Understanding Cervical  Cancer and the benefits of vaccination..."
        },
        {
            tittle:"Understanding Cervical  Cancer and the benefits of vaccination..."
        },
    ]
export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loadmore:false
        }
    }
    
    handleLoad(){
        console.log(this.state.loadmore)
        this.setState({loadmore:!this.state.loadmore});
    }
    render(){
        return(
            <React.Fragment>
              <Container>
                  
              <Breadcrumb url="" chlidrenUrl="" text="blog" />
              <h5 className="">Health Blogs</h5>
              <p>Stay updated with MyHealthcare</p>
                <div className="row ">
                    <div className="col-lg-8">
                    <div className="row gy-4 row-cols-1 row-cols-md-2">
                        {
                            blog.map((item)=>(
                                <div className="col mb-4">
                                <Card className="mhc-blog-card">
                                    <Card.Img variant="top" src={patient} />
                                    
                                    <Card.Body>
                                        <Card.Title>     {item.tittle}</Card.Title>
                                        <Card.Text className="text-secondary">
                                        Gurugram-based healthtech startup MyHealthcare has raised $2 Mn in a Series A funding round led by Delhi-based...
                                        </Card.Text>
                                       
                                        <Link to="/blog-details" className="btn btn-outline-primary rounded-1  ">Read More</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            ))
                        }
               
                
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <h4 className="fs-4 text-secondary">By Specialities</h4> 
                        <ul className="list-unstyled d-flex flex-wrap mt-4">
                            {
                                blogtag.map((item)=>(
<li><Link className="btn btn-outline-secondary rounded-1  mb-3 me-3" to="">{item.tag}</Link></li>
                                ))
                            }
                            
                            
                        </ul>
     
               
<Card className="mhc-recent-post">
    <Card.Header>
    <h4 className="fs-4 text-secondary">Recent Posts</h4> 
                   <div className="d-flex mt-2">
                       <Link className="btn btn-primary rounded-1  px-5" to="">Latest</Link>
                       <Link className="btn btn-outline-primary rounded-1  px-5 ms-3" to="">Popular</Link>
                   </div>
    </Card.Header>
    <Card.Body>
        {
            blogpost.map((item)=>(
                <div className="blog-post">
                <div><img src={patientblog} alt="" /></div>
                <div className="ms-2"><Link to="">{item.tittle}</Link></div>
            </div>
            ))
        }
 
    </Card.Body>
</Card>


                    </div>
                </div>
              
               

            
              </Container>

<DownloadApp  />


            </React.Fragment>
        )
    }
}