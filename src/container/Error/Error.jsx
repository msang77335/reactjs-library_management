import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

function Error(props) {
   return (
      <div className="error-page">
         <div>
            <i class="fa fa-frown-o" aria-hidden="true"></i>
            <h1>404</h1>
            <h3>Page not found</h3>
            <p>
               The Page you are looking for doesn't exits or another error
               occurred.
            </p>
            <Link className="link" to="/">
               Go Home
            </Link>
         </div>
      </div>
   );
}

export default Error;
