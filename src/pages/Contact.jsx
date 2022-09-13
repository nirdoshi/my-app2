import React from "react";
import BlueButton from "../components/BlueButton";
import Heading from "../components/Heading";
import Content from "../components/Content";
import SocialIcons from "../components/SocialIcons";


import { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
  const [toSend, setToSend] = useState({
     user_name: '',
     user_email: '',
     user_phone: '',
     message: '',
   });
   const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


   const form = useRef();
  const sendEmail = (e) => {
     e.preventDefault();
     setToSend({
       user_name: '',
       user_email: '',
       user_phone: '',
       message: '',
     });

     emailjs.sendForm('service_78imj9l', 'contact_form', form.current, 'HRMr629gRKaTE8SGm')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
   };


  return(
    <div className="container mt-5">
      <Heading text="Connect with us" color="#364F6B"/>

      <div className="row mt-4">
        <div className="col-sm-6 div-clr rounded p-5">
          <h5 className="text-light">Tell us about your project</h5>
          <Content text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum lobortis mi vulputate potenti orci." color="#F0F0F0" />

          <form ref={form} onSubmit={sendEmail} autocomplete="off">
          <div class="form-group mt-4">
           <label for="exampleFormControlInput1" className="text-light mb-2">Your name</label>
           <input type="text" class="form-control" id="formGroupExampleInput" name="user_name" onChange={handleChange} value={toSend.user_name}/>
         </div>
              <div class="row mt-3">
                  <div class="col">
                      <label for="formGroupExampleInput" className="text-light mb-2" name="user_email">Your Email</label>
                      <input type="email" class="form-control" name="user_email" onChange={handleChange} value={toSend.user_email}/>
                  </div>
                  <div class="col">
                    <label for="formGroupExampleInput" className="text-light mb-2">Your phone Number</label>
                    <input type="tel" class="form-control" name="user_phone" onChange={handleChange} value={toSend.user_phone}/>
                  </div>
              </div>
              <div class="form-group mt-3 mb-3">
              <label for="exampleFormControlTextarea1" className="text-light mb-2">Your Message</label>
              <textarea class="form-control only_one_textarea" onChange={handleChange} id="exampleFormControlTextarea1" rows="3" name="message" value={toSend.message}></textarea>
            </div>
            <button type="button" class="btn btn-lg b_btn" type="submit">Submit</button>
        </form>
        </div>

        <div className="col-sm-6 p-5">
              <h5 className="text-dark">Address</h5>
              <Content text="0199 Taylor Park, North Dakota, USA" color="#333333"/>
              <hr style={{backgroundColor:"#333333", width:"60%", opacity:"0.5"}} />
              <h5 className="text-dark">Call us on</h5>
              <Content text="+1 98723 42023" color="#333333"/>
              <Content text="info@logoipsum.com" color="#333333"/>
              <hr style={{backgroundColor:"#333333", width:"60%", opacity:"0.5"}} />
              <h5 className="text-dark" style={{margin:"0"}}>Social Media</h5>
              <SocialIcons class="fa-brands fa-instagram fa-lg" bgcolor="#43DDE6" margin="2% 2%"/>
              <SocialIcons class="fa-brands fa-twitter fa-lg" bgcolor="#43DDE6"  margin="2% 2%"/>
              <SocialIcons class="fa-brands fa-facebook fa-lg" bgcolor="#43DDE6"  margin="2% 2%"/>
        </div>

      </div>

    </div>
  )
}

export default Contact;
