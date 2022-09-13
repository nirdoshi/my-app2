import React from 'react';
import Heading from "./Heading";
import Content from "./Content";

function Service(){
  return (
    <div className="container rounded div-clr p-5">

    <div class="lines" data-text="Trusted Companies"></div>

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={require('./logo1.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
          <img src={require('./logo2.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
          <img src={require('./logo3.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
          <img src={require('./logo4.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        <img src={require('./logo5.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
        <img src={require('./logo6.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
        <img src={require('./logo7.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
        <img src={require('./logo8.png')}  height="50" width="50" className="company-logo"  alt="..." /><span className="text-light">Lopiopsum</span>
        </div>
        </div>
        <button class="carousel-control-prev cl-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next cr-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>


      <hr className="text-center"/>

      <div className="row mt-5 mb-5">
        <div className="col-sm-6">
          <Heading text = "Our services that we provide" color="#ffffff" />
        </div>
        <div className="col-sm-6">
          <Content text="Lorem ipsum dolor sit amet, consectetur
           adipiscing elit. Et ut nunc, libero dolor, gravida.
            In metus, tortor, nunc sed egestas erat diam arcu.
            Laoreet orci nisl etiam risus ut nec. Facilisi ipsum
            viverra diam arcu massa amet non metus ornare." color="#F0F0F0" />
        </div>

      </div>


      <div className="row">

        <div className="col-sm-4">
        <img src={require('./design.png')}  height="50" width="50" alt="..." className="mb-5"/>
        <h4 className="text-light">Design</h4>
        <Content text="Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Et ut nunc, libero dolor, gravida.
          In metus, tortor, nunc sed egestas erat diam arcu." color="#F0F0F0" />
        </div>

        <div className="col-sm-4">
        <img src={require('./development.png')}  height="50" width="50"  alt="..." className="mb-5"/>
        <h4 className="text-light">Development</h4>
        <Content text="Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Et ut nunc, libero dolor, gravida.
          In metus, tortor, nunc sed egestas erat diam arcu." color="#F0F0F0" />
        </div>

        <div className="col-sm-4">
        <img src={require('./marketing.png')}  height="50" width="60"   alt="..." className="mb-5"/>
        <h4 className="text-light">Marketing</h4>
        <Content text="Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Et ut nunc, libero dolor, gravida.
          In metus, tortor, nunc sed egestas erat diam arcu." color="#F0F0F0" />
        </div>
      </div>
    </div>
  )
}

export default Service;
