import React from "react";
import Breadcrumb from '../../component/breadcrumb/index'
import SearchForm from '../../component/search/index'
import Serviceavailability from '../../component/serviceavailability/index'
import { Tabs, Tab } from "react-bootstrap";
import BookPackage from '../book-package/bookPackage'
import RequestCallback from '../../component/request-callback/requestCallback'
import BookTest from '../../pages/book-test/bookTest'
export default class BookTestPackages extends React.Component{
    render(){
        return(
            <React.Fragment>
            <React.Fragment>
        <section>
    <div className="container">
        <Breadcrumb url="" chlidrenUrl="" text="Book Consult" />
    
        <div className="row">
            <div className="col-lg-6 ">
              <h1 className="fs-4 mb-1">Diagnostics</h1>
              <p className="m-0 fs-6">Book Package & Test</p>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
            <SearchForm placeholder="Search Packages /Tests" btnDisplay={true} />
            </div>
        </div>
        <div className="mhc-tabs  position-relative mt-3 mt-lg-4">
<Serviceavailability position={true} />

        <Tabs defaultActiveKey="Package" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Package" title="Package">
  <RequestCallback position={true} />
  <BookPackage />
    </Tab>
  <Tab eventKey="Tests" title="Tests">
  <div className="mt-0 mt-lg-3">
  <RequestCallback position={false} />
<BookTest />
    </div>

    

  </Tab>

</Tabs>


</div>

</div>

        </section>
         </React.Fragment>
            </React.Fragment>
        )
    }
}