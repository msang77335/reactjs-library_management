import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({
   component: Component,
   layout: Layout,
   role: Role = [],
   ...rest
}) {
   const user = useSelector((state) => state.userReducer.currentUser);
   return (
      <Route
         {...rest}
         render={(props) =>
            user ? (
               Role.includes(user.role.label) ? (
                  <Layout {...props}>
                     <Component {...props} />
                  </Layout>
               ) : (
                  <Redirect to="/not-found" />
               )
            ) : (
               <Redirect to="/login" />
            )
         }
      />
   );
}

export default PrivateRoute;
