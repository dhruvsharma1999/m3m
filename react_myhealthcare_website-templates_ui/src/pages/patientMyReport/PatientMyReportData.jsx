import React from "react";
import bloodTest from '../../assets/dust/Blood Test CBC.svg'
import UltrasoundWholeAbdomen from '../../assets/dust/Ultrasound Whole Abdomen.svg'
import DownloadIcon from '../../assets/images/download-btn.svg'
import Pickadate from 'pickadate/builds/react-dom'

const tabled=[
    {
        icon:bloodTest,
        DocumentType:'Haemoglobin HPLC,EDTA',
        Documents:'Lab',
        date:'Wed, 10 Mar 2021 | 8:00AM'
    },
    {
        icon:bloodTest,
        DocumentType:'HCV IgG,Serum',
        Documents:'Lab',
        date:'Wed, 10 Mar 2021 | 8:00AM'
    },
    {
        icon:bloodTest,
        DocumentType:'Toxoplasma Antibody (IgG)',
        Documents:'Lab',
        date:'Wed, 10 Mar 2021 | 8:00AM'
    },
    {
        icon:UltrasoundWholeAbdomen,
        DocumentType:'FM USG Growth Scan Single',
        Documents:'Radiology',
        date:'Fri, 1 Nov 2021 | 9:00AM'
    },
    {
        icon:UltrasoundWholeAbdomen,
        DocumentType:'USG Pregnancy',
        Documents:'Radiology',
        date:'Fri, 1 Nov 2021 | 9:00AM'
    },
    {
        icon:bloodTest,
        DocumentType:'Toxoplasma Antibody (IgG)',
        Documents:'Lab',
        date:'Wed, 10 Mar 2021 | 8:00AM'
    },

]
export default class PatientMyReportData extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8">
                 <div className="d-flex flex-column flex-md-row">
                 <div className="form-floating mhc-dob date">
              <Pickadate.InputPicker  required    readOnly={false} />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">Start Date</label>
                    </div>
                    <div className="form-floating mhc-dob date mt-3 mt-md-0  ms-0 ms-md-3">
              <Pickadate.InputPicker  required    readOnly={false} />
              <i className="mhc-icon icon-calendar"></i>
             <label htmlFor="Dob">End Date</label>
</div>
                 </div>
                 </div>
                 </div>
                <div class="table-responsive">
           <table class="table mhc-document-table">
  <thead>
    <tr>
      <th>Description</th>
      <th>Type</th>
      <th>Order Date & Time</th>
      <th className="text-center">Download Report</th>
    </tr>
  </thead>
  <tbody>
      {
          tabled.map((item)=>(
            <tr>
            <td ><img src={item.icon}  alt={item.DocumentType} className="test-icon" /> {item.DocumentType}</td>
            <td>{item.Documents}</td>
            <td>{item.date}</td>
            <td className="text-center"><img src={DownloadIcon} alt={DownloadIcon} className="downloadbtn"/></td>
          </tr>
          ))
      }
   

  </tbody>
</table>
</div>
            </React.Fragment>
        )
    }
}