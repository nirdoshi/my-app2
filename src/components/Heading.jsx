import React from 'react';

function Heading(props){
  return(
    <h1 style={{color:props.color}} className={props.className} >{props.text}</h1>
  );
}

export default Heading;
