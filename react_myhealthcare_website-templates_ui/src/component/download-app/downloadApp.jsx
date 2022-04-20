import React from "react";
import homeWalletSliderPic from "../../assets/images/home_wallet_slider_pic.webp"
import googlePlay from "../../assets/images/google-play.png"
import appstore from "../../assets/images/app-store.png"
import { Link } from "react-router-dom";

export default class DownloadApp extends React.Component{
 
    render(){
        return(
            <React.Fragment>
                      <section className={`mhc-download-mobile Home-footer-margin `}>
                   <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-xl-5">
                           <p className="mt-5">Download MyHealthcare </p>
                            <h3>For Better Health
Download Mobile App</h3>
Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor 
incididunt labore dolore magna.

<div className="d-flex mt-4">
<div ><a href="https://play.google.com/store/apps/details?id=com.innocirc.vcpatient" target="_blank"><img src={googlePlay} className="icon-downlod"/></a>   </div>
    <div className="ms-4"> <a href="https://apps.apple.com/in/app/myhealthcare/id1506349869"  target="_blank"><img src={appstore} className="icon-downlod"/></a>  </div>
    
</div>
                            </div>
                            <div className="col-lg-6 col-xl-5 d-none d-lg-block">
                            <img src={homeWalletSliderPic} className="icon "/>
                            </div>
                        </div>
                   </div>
               </section>
            </React.Fragment>
        )
    }
}