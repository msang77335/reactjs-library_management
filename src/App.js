import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../src/actions/index";
import { useEffect, useState } from "react";
import userApi from "../src/api/userApi";
import Login from "./component/Login/Login";
import MainLayout from "./layout/MainLayout/MainLayout";
import PrivateRoute from "./component/Routes/PrivateRoute/PrivateRoute";
import CategoryManage from "./container/Category/CategoryManage";
import BookManage from "./container/Book/BookManage";
import NewBook from "./container/Book/NewBook/NewBook";
import EditBook from "./container/Book/EditBook/EditBook";
import ReaderAwaiting from "./container/Reader/Awaiting/ReaderAwaiting";
import ReaderManage from "./container/Reader/ReaderManage";
import DetailReaders from "./container/Reader/DetailReaders/DetailReaders";
import EmployeeManage from "./container/Employee/EmployeeManage";
import EmployeeInfo from "./container/Employee/EmployeeInfo/EmployeeInfo";
import Home from "./container/Home/Home";
import Error from "./container/Error/Error";
import BookView from "./container/Book/BookView/BookView";
import BookInfo from "./container/Book/BookView/BookInfo/BookInfo";
import CartManage from "./container/Cart/CartManage";

function App() {
   const [isLoad, setIsLoad] = useState(false);
   const dispatch = useDispatch();
   const { getMe } = userApi;
   useEffect(() => {
      getMe()
         .then((res) => {
            //dispatch(saveUser(res));
         })
         .catch(() => {
            //localStorage.removeItem("accessToken");
         })
         .finally(() => {
            setIsLoad(true);
         });
   });
   return (
      <div className="App">
         {isLoad && (
            <Router>
               <Switch>
                  <PrivateRoute
                     exact
                     path="/"
                     role={["Admin", "Thủ thư", "Thủ kho", "User"]}
                     component={Home}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/book-categories/"
                     role={["Admin"]}
                     component={CategoryManage}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     exact
                     path="/books/"
                     role={["Admin"]}
                     component={BookManage}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/books/new"
                     role={["Admin"]}
                     component={NewBook}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/books/:id"
                     role={["Admin"]}
                     component={EditBook}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/reader-awaiting"
                     role={["Admin"]}
                     component={ReaderAwaiting}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     exact
                     path="/readers/"
                     role={["Admin"]}
                     component={ReaderManage}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/readers/:id/"
                     role={["Admin"]}
                     component={DetailReaders}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     exact
                     path="/employee/"
                     role={["Admin"]}
                     component={EmployeeManage}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/employee/:id/"
                     role={["Admin"]}
                     component={EmployeeInfo}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     exact
                     path="/book/"
                     role={["Admin"]}
                     component={BookView}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/book/:id"
                     role={["Admin"]}
                     component={BookInfo}
                     layout={MainLayout}
                  />
                  <PrivateRoute
                     path="/cart/"
                     role={["Admin"]}
                     component={CartManage}
                     layout={MainLayout}
                  />
                  <Route path="/login" component={Login} />
                  <Route path="/not-found" component={Error} />
               </Switch>
            </Router>
         )}
      </div>
   );
}

export default App;
