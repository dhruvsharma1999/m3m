import React from "react";
import { Link } from "react-router-dom";
const IProps={
    url:'',
    chlidrenUrl:'',
    text:''
}
class Breadcrumb extends React.Component{
    constructor(props=IProps){
        super(props)
    }
render(){
    return(
        <React.Fragment>
         <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item <Link to={this.props.url}>Home</Link>" ><Link to={this.props.url}> Home</Link></li>
    {/* <li className="breadcrumb-item " aria-current="page"><Link to={this.props.url}>Book Consult</Link></li> */}
    <li className="breadcrumb-item active" aria-current="page">{this.props.text}</li>
  </ol>
</nav>
        </React.Fragment>
    )
}
}

export default Breadcrumb