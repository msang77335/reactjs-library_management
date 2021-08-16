import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import BookDetail from "./pages/Book/BookDetail/BookDetail";
import BookEdit from "./pages/Book/BookEdit/BookEdit";
import BookNew from "./pages/Book/BookNew/BookNew";
import BookPage from "./pages/Book/BookPage";
import CategoryDetail from "./pages/Category/CategoryDetail/CategoryDetail";
import CategoryEdit from "./pages/Category/CategoryEdit/CategoryEdit";
import CategoryNew from "./pages/Category/CategoryNew/CategoryNew";
import CategoryPage from "./pages/Category/CategoryPage";
import DashBoradPage from "./pages/DashBorad/DashBoradPage";
import StaffDetail from "./pages/Staff/StaffDetail/StaffDetail";
import StaffEdit from "./pages/Staff/StaffEdit/StaffEdit";
import StaffNew from "./pages/Staff/StaffNew/StaffNew";
import StaffPage from "./pages/Staff/StaffPage";

const AppRoutes = () => {
   const element = useRoutes([
      {
         path: "",
         element: <MainLayout />,
         children: [{ path: "/", element: <DashBoradPage /> }],
      },
      {
         path: "book-manage",
         element: <MainLayout />,
         children: [
            { path: "/book", element: <BookPage /> },
            { path: "/book/new", element: <BookNew /> },
            { path: "/book/:id", element: <BookDetail /> },
            { path: "/book/:id/edit", element: <BookEdit /> },
            { path: "/category", element: <CategoryPage /> },
            { path: "/category/new", element: <CategoryNew /> },
            { path: "/category/:id", element: <CategoryDetail /> },
            { path: "/category/:id/edit", element: <CategoryEdit /> },
         ],
      },
      {
         path: "staff",
         element: <MainLayout />,
         children: [
            { path: "/", element: <StaffPage /> },
            { path: "/new", element: <StaffNew /> },
            { path: "/:id", element: <StaffDetail /> },
            { path: "/:id/edit", element: <StaffEdit /> },
         ],
      },
   ]);
   return element;
};

const App: React.FC = () => {
   return (
      <div className="App">
         <Router>
            <AppRoutes />
         </Router>
      </div>
   );
};

export default App;
