import React from "react";
import bloodTest from '../../assets/dust/Blood Test CBC.svg'
import UltrasoundWholeAbdomen from '../../assets/dust/Ultrasound Whole Abdomen.svg'
import DischargeSummary from '../../assets/dust/Discharge Summary.svg'

const tabled=[
    {
        icon:bloodTest,
        DocumentType:'Blood Test CBC',
        Documents:'3 Documents',
        date:'Fri, 1 Nov 2021 | 9:00AM'
    },
    {
        icon:UltrasoundWholeAbdomen,
        DocumentType:'Ultrasound Whole Abdomen',
        Documents:'2 Documents',
        date:'Fri, 1 Nov 2021 | 9:00AM'
    },
    {
        icon:UltrasoundWholeAbdomen,
        DocumentType:'CT Scan ImagesC',
        Documents:'Documents',
        date:'Fri, 1 Nov 2021 | 9:00AM'
    },
    {
        icon:DischargeSummary,
        DocumentType:'Discharge Summary',
        Documents:'3 Documents',
        date:'Fri, 1 Nov 2021 | 9:00AM'
    },

]
export default class PatientMyDocumentExternalDocument extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div class="table-responsive">
           <table class="table mhc-document-table">
  <thead>
    <tr>
      <th>Document Type</th>
      <th>Documents</th>
      <th>Date & Time</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {
          tabled.map((item)=>(
            <tr>
            <td ><img src={item.icon}  alt={item.DocumentType} className="test-icon" /> {item.DocumentType}</td>
            <td>{item.Documents}</td>
            <td>{item.date}</td>
            <td><i class="mhc-icon icon-trash-empty text-primary fs-4 cursor-pointer"></i></td>
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