import React from "react";
import "../Content.scss";

function ContentContainer(props) {
   return <div className="content__container">{props.children}</div>;
}

export default ContentContainer;
