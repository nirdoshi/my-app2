import React from 'react';

import Intro from "../components/Intro";
import Service from "../components/Service";
import Work from "../components/Work";


const Home = () => {
  return (
    <div className="App">
        <Intro />
        <Service />
        <Work />
    </div>
  );
};

export default Home;
