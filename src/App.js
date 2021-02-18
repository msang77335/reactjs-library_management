import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import MainLayout from "./layout/MainLayout/MainLayout";
import PrivateRoute from "./component/Routes/PrivateRoute/PrivateRoute";
import Home from "./component/Home/Home";
import CategoryManage from "./container/Category/CategoryManage";
import BookManage from "./container/Book/BookManage";
import NewBook from "./container/Book/NewBook/NewBook";
import EditBook from "./container/Book/EditBook/EditBook";
import ReaderAwaiting from "./container/Reader/Awaiting/ReaderAwaiting";
import ReaderManage from "./container/Reader/ReaderManage";

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
               <PrivateRoute
                  path="/book-categories/"
                  component={CategoryManage}
                  layout={MainLayout}
               />
               <PrivateRoute
                  exact
                  path="/books/"
                  component={BookManage}
                  layout={MainLayout}
               />
               <PrivateRoute
                  path="/books/new"
                  component={NewBook}
                  layout={MainLayout}
               />
               <PrivateRoute
                  path="/books/:id"
                  component={EditBook}
                  layout={MainLayout}
               />
               <PrivateRoute
                  path="/reader-awaiting"
                  component={ReaderAwaiting}
                  layout={MainLayout}
               />
               <PrivateRoute
                  exact
                  path="/reader/"
                  component={ReaderManage}
                  layout={MainLayout}
               />
               <Route path="/login" component={Login} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
