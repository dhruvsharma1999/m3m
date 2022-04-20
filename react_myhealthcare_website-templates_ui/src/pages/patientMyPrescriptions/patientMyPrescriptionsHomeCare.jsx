import React from "react";
import DownloadIcon from '../../assets/images/download-btn.svg'
import PdfIcon from '../../assets/dust/mhc-pdf.svg'
export default class PatientMyPrescriptionsHomeCare extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div className="predcription-dector-card">
                 <div  className="card-body">
                     <div className="row mb-4">
                         <div className="col-lg-6">
                             <p className="mb-0 fs-5">ReLiva Silver Package <i class="mhc-icon icon-mhc-info cursor-pointer text-primary"></i></p>
                         </div>
                         <div className="col-lg-6 text-start text-lg-end mt-2 mt-lg-0">
                             <p className="mb-0 text-primary">Day 15/15</p>
                         </div>
                     </div>
                      <div className="row">
                      <div className="col-11" >
                 <div className="d-flex align-items-center">
                     <div><img src={PdfIcon} alt="PdfIcon" className="pdf-icon" /></div>
                     <div className="ms-3">
                         <h4 className="mhc-tittle m-0">Case Summary</h4>
                         <p className="m-0 text-primary">Fri, 13 Feb 2021 | 2:00 PM </p>
                     </div>
                  
                 </div>
               
                </div>
                <div className="col-1 text-end ">
                    <img src={DownloadIcon} alt="DownloadIcon" className="download-icon" />
                    </div>
                      </div>
                      <div class="border-bottom border-light w-100 transition my-3 my-lg-4"></div>
                      <div className="row">
                      <div className="col-11" >
                 <div className="d-flex align-items-center">
                     <div><img src={PdfIcon} alt="PdfIcon" className="pdf-icon" /></div>
                     <div className="ms-3">
                         <h4 className="mhc-tittle m-0">Prescription</h4>
                         <p className="m-0 text-primary">Fri, 13 Feb 2021 | 2:00 PM </p>
                     </div>
                  
                 </div>
               
                </div>
                <div className="col-1 text-end ">
                    <img src={DownloadIcon} alt="DownloadIcon" className="download-icon" />
                    </div>
                      </div>
                     </div>
                     </div>
                     <div className="predcription-dector-card">
                 <div  className="card-body">
                     <div className="row mb-4">
                         <div className="col-lg-6">
                             <p className="mb-0 fs-5">ReLiva Silver Package <i class="mhc-icon icon-mhc-info cursor-pointer text-primary"></i></p>
                         </div>
                         <div className="col-lg-6 text-start text-lg-end mt-2 mt-lg-0">
                             <p className="mb-0 text-primary">Day 15/15</p>
                         </div>
                     </div>
                      <div className="row">
                      <div className="col-11" >
                 <div className="d-flex align-items-center">
                     <div><img src={PdfIcon} alt="PdfIcon" className="pdf-icon" /></div>
                     <div className="ms-3">
                         <h4 className="mhc-tittle m-0">Case Summary</h4>
                         <p className="m-0 text-primary">Fri, 13 Feb 2021 | 2:00 PM </p>
                     </div>
                  
                 </div>
               
                </div>
                <div className="col-1 text-end ">
                    <img src={DownloadIcon} alt="DownloadIcon" className="download-icon" />
                    </div>
                      </div>
                      <div class="border-bottom border-light w-100 transition my-3 my-lg-4"></div>
                      <div className="row">
                      <div className="col-11" >
                 <div className="d-flex align-items-center">
                     <div><img src={PdfIcon} alt="PdfIcon" className="pdf-icon" /></div>
                     <div className="ms-3">
                         <h4 className="mhc-tittle m-0">Prescription</h4>
                         <p className="m-0 text-primary">Fri, 13 Feb 2021 | 2:00 PM </p>
                     </div>
                  
                 </div>
               
                </div>
                <div className="col-1 text-end ">
                    <img src={DownloadIcon} alt="DownloadIcon" className="download-icon" />
                    </div>
                      </div>
                     </div>
                     </div>
            </React.Fragment>
        )
    }
}