import React from 'react';

function Content(props){
  return(
    <p style={{color:props.color,fontSize:"14px"}} className={props.className}>{props.text}</p>
  );
}

export default Content;
