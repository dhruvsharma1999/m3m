import React from "react";
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
export default class MhcProgressBar extends React.Component{
    render(){
        return(
            <React.Fragment>
         <StepProgressBar
  startingStep={0}
//   onSubmit={onFormSubmit}
wrapperClass="Mhc-progressbar"
progressClass="progressbar"
stepClass="step"
contentClass="content"
labelClass="tittle"
subtitleClass="sub-tittle"
buttonWrapperClass="bth-wrapper"
  steps={[
    {
      label: 'Test Scheduled',
      subtitle: ' 9:20 AM, 7 Apr',
    //   name: 'step 1',
    //   content: step1Content
    },
    {
        label: 'Lab Technician Enroute',
        subtitle: ' 9:20 AM, 7 Apr',
    //   name: 'step 2',
    //   content: step2Content,
    //   validator: step2Validator
    },
    {
        label: 'Sample Collected',
        subtitle: ' 9:50 AM, 7 Apr',
    //   name: 'step 3',
    //   content: step3Content,
    //   validator: step3Validator
    },
    {
        label: 'Report Updated',
        subtitle: '1:50 PM, 8 Apr',
    //   name: 'step 3',
    //   content: step3Content,
    //   validator: step3Validator
    },
    {
      label: 'Report Updated',
      subtitle: '1:50 PM, 8 Apr',
  //   name: 'step 3',
  //   content: step3Content,
  //   validator: step3Validator
  }
  ]}
/>
            </React.Fragment>
        )
    }
}