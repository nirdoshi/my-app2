import React from "react";

function SocialIcons(props){
  return(
    <a href="#" className="icon-link"><i class={props.class} style={{backgroundColor:props.bgcolor, margin:props.margin}}></i> </a>
  );
}

export default SocialIcons;
