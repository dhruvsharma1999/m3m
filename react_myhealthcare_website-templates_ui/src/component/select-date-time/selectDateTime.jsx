import React from "react";
import Pickadate from 'pickadate/builds/react-dom'
export default class SelectDateTime extends React.Component{
    render(){
        return(
            <React.Fragment>
                       <ul className="list-unstyled d-flex flex-wrap mb-0 mt-3">
<li>
    <div className="mhc-slot-avability d-flex justify-content-center">
        <div className="mhc-bg Available"></div>
        <div className="mhc-text">Available</div>
    </div>
</li>
<li>
    <div className="mhc-slot-avability d-flex justify-content-center ms-3">
        <div className="mhc-bg Booked"></div>
        <div className="mhc-text">Booked</div>
    </div>
</li>
<li>
    <div className="mhc-slot-avability d-flex justify-content-center ms-3">
        <div className="mhc-bg Selected"></div>
        <div className="mhc-text">Selected</div>
         </div>
              </li>
           </ul>
           <div className="mhc-calendar mt-4">
           <Pickadate.DatePicker />
           </div>

         

   
           
            </React.Fragment>
        )
    }
}