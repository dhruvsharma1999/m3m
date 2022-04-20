import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import patient from '../../assets/dust/Scroll Group 28.webp'
import patientblog from '../../assets/dust/rounded-rectangle.webp'
import Breadcrumb from "../../component/breadcrumb";
import DownloadApp from "../../component/download-app/downloadApp";
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
export default class BlogDetails extends React.Component{
    render(){
        return(
            <React.Fragment>
             <Container>
             <Breadcrumb url="" chlidrenUrl="" text="blog" />
              <h5 className="">Health Blogs</h5>
              <p>Stay updated with MyHealthcare</p>
                 <div className="row">
                     <div className="col-lg-8">
                         <div className="mhc-blog-details">
                         <figure className="figure">
  <img src={patient} className="figure-img img-fluid rounded" alt="..." />
  <figcaption className="figure-caption">Beware of non-infectious <br />
fever in high spinal cord injuries </figcaption>
</figure>
<div className="blog-details-body">
<h4 className="fs-4 text-secondary">By Rachna</h4>
<ul className="list-unstyled mb-0">
<li><Link className="btn btn-outline-secondary rounded-1  mb-3 me-3" to="">Neurosciences</Link></li>
</ul>

<p>A case of cervical spinal cord injury and quadriparesis with prolonged fever is being described. Initially, the patient received treatment for well-documented catheter-related bloodstream infection. High spiking fever returned and persisted with no obvious evidence of infection. The usual non-infectious causes too were carefully excluded. QUAD fever or fever dueto spinal cord injury itself was considered. The pathogenetic basis of QUAD fever is unclear but could be attributed to autonomic dysfunction and temperature dysregulation.

Awareness of this little known condition could help in avoiding unnecessary antimicrobial therapy and in more accurate prognostication. Unlike several previous reported cases that ended fatally, the present case ran a relatively benign course. The spectrum of presentations may therefore be broader than hitherto appreciated.</p>
<h4 className="fs-4 text-secondary">Background</h4>
<p>The reasons to submit this case report are three:</p>
<ul className="">
    <li className="py-2">To inform clinicians of this potentially fatal complication of spinal cord injury.</li>

    <li className="py-2">To highlight the occurrence of fever attributable to the spinal cord injury itself so as to avoid injudicious antimicrobial therapy.</li>

    <li className="py-2">To stimulate interest into possible mechanisms of this poorly understood condition that could generate improved preventive or therapeutic options.</li>
</ul>
<h4 className="fs-4 text-secondary">Case Presentation</h4>
<p>A previously healthy male aged 46 years presented to the emergency room with a history of fall from a bike followed by inability to move both lower limbs and marked weakness in both upper limbs. When seen 4–5 hours after injury, he was fully conscious and oriented with Glasgow Coma Scale (GCS) of 15/15. His vitals were stable with blood pressure 130/90 mm Hg, heart rate 98 beats per minute regular, respiratory rate 16 breaths per minute, oxygen saturation by pulse oximetry of 98% on room air and afebrile. Motor power in the proximal and distal muscles of the upper limbs was 3/5 and in the lower limbs was 0/5. Deep tendon reflexes were decreased in upper limbs and absent in lower limbs. Plantar reflexes were non-responsive bilaterally. His peripheral neurological examination confirmed quadriparxsis with level of injury at C6 vertebral level and C7 spinal cord segmental level with loss of pin prick sensation and preservation of sweating below this level. His extent of spinal cord injury as described by American Spinal Injury Association Impairment Scale is C (ie, incomplete).</p>
<div className="d-flex flex-wrap mt-2">
                       <Link className="btn btn-outline-primary rounded-1  px-5 me-3 mb-3" to="">Quad Fever</Link>
                       <Link className="btn btn-outline-primary rounded-1  px-5 me-3 mb-3" to="">Spinal Cord</Link>
                       <Link className="btn btn-outline-primary rounded-1  px-5 mb-3" to="">Spinal Cord Injury</Link>
                   </div>
                   <div className="border-bottom border-light w-100 transition mt-3"></div>
                    <div className="row row-cols-1 row-cols-sm-2 align-items-center my-4">
                     <div className="col"><h4 className="fs-6 text-secondary">Case Presentation</h4></div>
                     <div className="col">
                    <div className="d-flex flex-column flex-sm-row justify-content-start justify-content-sm-end align-items-start align-items-sm-center">
                    <h4 className="fs-6 text-secondary mb-0">Sort by</h4>
                    <div className="mhc-selectbox blog-search mt-3 mt-sm-0 ms-0 ms-sm-3">
<select className="form-select" required={true}>

    <option defaultValue="1">Oldest</option>
    <option defaultValue="2">Oldest</option>
  </select>
  <label htmlFor="floatingSelect">Oldest</label>
</div>
                    </div>
                    </div>
                    </div>
                   <div className="border-bottom border-light w-100 transition "></div>
</div>

                         </div>
  
                     </div>
                     <div className="col-lg-4 mt-4 mt-md-0">
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