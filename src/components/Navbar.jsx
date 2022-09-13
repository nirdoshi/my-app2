import React from 'react';
import BlueButton from "./BlueButton";
function Navbar(){
  return(
    <div className="container mt-3">
    <nav class="navbar navbar-expand-lg rounded shadow">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
  <img src="https://cryptologos.cc/logos/aave-aave-logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
  <span style={{paddingLeft :"0.6em"}} class="text-dark">Logiopsum</span>
</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link text-dark" aria-current="page" href="/">Home</a>
          <a class="nav-link text-dark" href="#">About</a>
          <a class="nav-link text-dark" href="/contact">Contact</a>
          <button type="button" class="btn nb_btn">Get in Touch</button>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;
