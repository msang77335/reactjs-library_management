import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, layout: Layout, ...rest }) {
   const [isLogin, setIsLogin] = useState(true);
   return (
      <Route
         {...rest}
         render={(props) =>
            isLogin ? (
               <Layout {...props}>
                  <Component {...props} />
               </Layout>
            ) : (
               <Redirect to="/login" />
            )
         }
      />
   );
}

export default PrivateRoute;
