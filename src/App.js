import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import MainLayout from "./layout/MainLayout/MainLayout";
import PrivateRoute from "./component/Routes/PrivateRoute/PrivateRoute";
import Home from "./component/Home/Home";

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <PrivateRoute
                  exact
                  path="/"
                  component={Home}
                  layout={MainLayout}
               />
               <Route path="/login" component={Login} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
