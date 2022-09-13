import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import BlueButton from "./BlueButton";
import SocialIcons from "./SocialIcons";

function Connect(){
  return (
    <div className="div-clr container mt-5 pt-5 ps-5 pe-5 pb-2" style={{borderRadius:"0.375rem 0.375rem 0 0"}}>
      <div className="row ">
        <div className="col-sm-6">
          <Heading text="Let's work" color="white" />
          <Heading text="together" color="white" />
        </div>
        <div className="col-sm-6">
          <Content text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu." color="white" />
          <BlueButton text="Let's talk" />
        </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-sm">
          <img src="https://cryptologos.cc/logos/aave-aave-logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
          <span style={{paddingLeft :"0.6em"}} class="text-light">Logiopsum</span>
          <br />
          <SocialIcons class="fa-brands fa-instagram fa-lg" bgcolor="white" margin="8% 2%"/>
          <SocialIcons class="fa-brands fa-twitter fa-lg" bgcolor="white"  margin="8% 2%"/>
          <SocialIcons class="fa-brands fa-facebook fa-lg" bgcolor="white"  margin="8% 2%"/>


          </div>
          <div className="col-sm">
          <h5 className="text-light">Address</h5>
          <Content text="0199 Taylor Park, North Dakota, USA" color="#F0F0F0" />

          </div>
          <div className="col-sm">
          <h5 className="text-light">Call us on</h5>
          <Content text="+1 98723 42023" color="#F0F0F0" />
          <Content text="info@logoipsum.com" color="#F0F0F0" />

          </div>
          <div className="col-sm">
          <h5 className="text-light">Our policies</h5>
          <Content text="Privacy Policy" color="#F0F0F0" />
          <Content text="Terms of Use" color="#F0F0F0" />
          <Content text="Refund Policy" color="#F0F0F0" />

          </div>

        </div>
        <hr />
        <Content text="Copyright © Webalar. All Rights Reserved" color="white" className="text-center"/>
    </div>
  );
}

export default Connect;
