import React from "react";
import BlueButton from "./BlueButton";
import Heading from "./Heading";
import Content from "./Content";


function Intro(){
return (
  <div class="container">
<div class="row ">
  <div class="col-sm-6 p-5">

  <div className="heading mb-4 mt-2">
    <Heading text="Let’s create" color="#364F6B" />
    <Heading text="something great" color="#364F6B" />
    <Heading text="together" color="#364F6B" />
  </div>
<Content text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae." color="#333333" />

  <BlueButton text="Let's Talk" />

  </div>
  <div class="col-sm-6 p-5">
  <img src ="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    className="rounded intro-image" />
  </div>

  </div>
</div>
);
}

export default Intro;
