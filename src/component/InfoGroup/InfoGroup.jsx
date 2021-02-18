import React from "react";
import "./InfoGroup.scss";

function InforGroup(props) {
   return (
      <div className="info-group">
         <p>
            <span className="info-group__name">{props.name}:</span>
            <span className="info-group__value">{props.value}</span>
         </p>
      </div>
   );
}

export default InforGroup;
