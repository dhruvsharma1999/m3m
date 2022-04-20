import React from "react";
const Iprops={   
    position:true||false
    }
export default class Serviceavailability extends React.Component{
    constructor(props=Iprops){
super(props)
    }
    render(){
        return(
            <React.Fragment>
               <div className={`${this.props.position===true ? "mhc-check-service" :""}`}>
                   <div className="d-flex flex-column flex-lg-row">
                       <div><p className="m-0 pt-0 pt-lg-2">Check Serviceavailability</p></div>
                       <div className="ms-0 ms-lg-3 my-3 my-lg-0">             <div className="form-floating mb-0">
  <input type="text" className="form-control" id="" placeholder="Pincode" defaultValue="121102" />
  <label htmlFor="name">Pin Code  <sup>*</sup></label>
</div>
<p className="mt-1 m-0 text-primary">Your Location is Serviceable</p>
</div>
                       </div>
                       
                   </div>
            </React.Fragment>
        )
    }
}