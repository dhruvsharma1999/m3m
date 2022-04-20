
import React, { Component } from "react";
import Location from "../../assets/images/mhc-location.svg"
const Iprops = {
    isNavbar: true || false
}
export default class MHCLocation extends React.Component {
    constructor(props = Iprops) {
        super(props)
    }
    render() {
        return (
            <div className={`input-group ${this.props.isNavbar === true ? 'navlocation' : ''}`}>

                <span className="input-group-text bg-white border-0"><img className="" src={Location} alt="Location" style={{ height: '20px' }} /></span>
                <select className="form-select border-0" aria-label="Default select example">
                    <option defaultValue="0">Delhi</option>
                    <option defaultValue="1">Mumbai</option>
                </select>
            </div>
        )
    }
}
