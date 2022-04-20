import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Cardiology from '../../assets/dust/cardiology.svg'
import Dental from '../../assets/dust/Dental.svg'
import DiabetologyEndocrinology from '../../assets/dust/Diabetology-Endocrinology.svg'
import ObstetricsGynaecology from '../../assets/dust/Obstetrics-Gynaecology.svg'
const accordian=[
    {
        tittle:"Cardiology",
        eventKey:'0',
        img:Cardiology
    },
    {
        tittle:"Dental",
        eventKey:'1',
        img:Dental
    },
    {
        tittle:"Diabetology & Endocrinology",
        eventKey:'2',
        img:DiabetologyEndocrinology
    },
    {
        tittle:"Obstetrics & Gynaecology",
        eventKey:'3',
        img:ObstetricsGynaecology
    },
   
]
class Specialities extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Accordion defaultActiveKey="" className="specialitiestabs">
                    <div className="row ">
                        <div className="col-lg-4">
                        {
                    accordian.map((item)=>(
                        <Accordion.Item eventKey={item.eventKey} className="mb-4">
                        <Accordion.Header><Link to="consult-doctor"><img src={item.img} />{item.tittle}</Link></Accordion.Header>
                        <Accordion.Body>
                         <ul className="list-unstyled">
                             <li><a href="#">Interventional Cardiology</a></li>
                             <li><a href="#">Invasive Cardiology</a></li>
                             <li><a href="#">Non Invasive Cardiology</a></li>
                             <li><a href="#">Paediatrics CTVS</a></li>
                             <li><a href="#">Paediatrics Cardiac Sciences</a></li>
                             <li><a href="#">Vascular Surgery</a></li>
                         </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))
                }
                        </div>
                        <div className="col-lg-4">
                        {
                    accordian.map((item)=>(
                        <Accordion.Item eventKey={item.eventKey +1} className="mb-4">
                        <Accordion.Header><Link to="consult-doctor"><img src={item.img} />{item.tittle}</Link></Accordion.Header>
                        <Accordion.Body>
                         <ul className="list-unstyled">
                             <li><a href="#">Interventional Cardiology</a></li>
                             <li><a href="#">Invasive Cardiology</a></li>
                             <li><a href="#">Non Invasive Cardiology</a></li>
                             <li><a href="#">Paediatrics CTVS</a></li>
                             <li><a href="#">Paediatrics Cardiac Sciences</a></li>
                             <li><a href="#">Vascular Surgery</a></li>
                         </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))
                }
                        </div>
                        <div className="col-lg-4">
                        {
                    accordian.map((item)=>(
                        <Accordion.Item eventKey={item.eventKey+2} className="mb-4">
                        <Accordion.Header><Link to="consult-doctor"><img src={item.img} />{item.tittle}</Link></Accordion.Header>
                        <Accordion.Body>
                         <ul className="list-unstyled">
                             <li><a href="#">Interventional Cardiology</a></li>
                             <li><a href="#">Invasive Cardiology</a></li>
                             <li><a href="#">Non Invasive Cardiology</a></li>
                             <li><a href="#">Paediatrics CTVS</a></li>
                             <li><a href="#">Paediatrics Cardiac Sciences</a></li>
                             <li><a href="#">Vascular Surgery</a></li>
                         </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))
                }
                        </div>
                    </div>
               
   


</Accordion>
            </React.Fragment>
        )
    }
}

export default Specialities