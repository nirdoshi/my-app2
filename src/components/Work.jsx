import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import BlueButton from "./BlueButton";

function Work(){
  return (
<div className="container mt-5 ">
<Heading text="Our Work" color="#364F6B" className="text-center mb-5" />
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 shadow">
      <img src="http://res-3.cloudinary.com/fieldfisher/image/upload/f_jpg,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Project-1</h5>
        <p><small class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small></p>
        <a href="#" class="btn btn-primary">Go To Project</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 shadow">
      <img src="http://res-3.cloudinary.com/fieldfisher/image/upload/f_jpg,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Project-2</h5>
        <p><small class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small></p>
        <a href="#" class="btn btn-primary">Go To Project</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 shadow">
      <img src="http://res-3.cloudinary.com/fieldfisher/image/upload/f_jpg,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project-3</h5>
        <p><small class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small></p>
        <a href="#" class="btn btn-primary">Go To Project</a>
      </div>
    </div>
  </div>
</div>
<div className="text-center">
    <BlueButton text="View more"/>
</div>
</div>
  );
}
export default Work;
