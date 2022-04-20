import React from "react";
import { Button, Modal } from "react-bootstrap";
const Iprops={   
    position:true||false
    }
export default class RequestCallback extends React.Component{
    constructor(props=Iprops){
        super(props);
        this.state={
            modal:false,
         
        }
        this.handleShow=this.handleShow.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }
    handleShow(){
        console.log(this.state.modal)
          this.setState({modal:true})   
      };
       handleClose (){
          this.setState({modal:false})
      };
    render(){
        return(
            <React.Fragment>
                <p className={`fs-6 text-secondary ${this.props.position===true ? "callback" :""} `}>Couldn’t find what you are looking for? <span onClick={this.handleShow}  className="text-primary cursor-pointer"> Request a Callback</span></p>
               <Modal show={this.state.modal} onHide={this.handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">Request a Callback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row ">
        <div className="col-lg-6">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="Mobile" placeholder="" value="Rupendra" />
  <label htmlFor="name">Full Name  <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-lg-6">
                 <div className="form-floating mb-4">
  <input type="text" className="form-control" id="Mobile" placeholder="Mobile" />
  <label htmlFor="name">Mobile <sup>*</sup></label>
</div>
                 </div>
                 <div className="col-12">
                 <div className="form-floating mb-4">
  <textarea className="form-control" placeholder="Leave a comment here" id="" />
  <label htmlFor="floatingTextarea2">Query</label>
</div>
                     </div>
                     <div className="col-12 text-center">
                           <button className="btn btn-primary rounded-1 " onClick={this.handleClose}>Submit</button>
                           <p className="text-primary  mt-4">  Thank you for your query. Our Patient Services team 
will get back to you shortly.</p>
                         </div>

            </div>
       
        </Modal.Body>
   
      </Modal>
            </React.Fragment>
        )
    }
}