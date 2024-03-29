import React from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
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
import ReadersNew from "./pages/Readers/ReadersNew/ReadersNew";
import ReadersDetail from "./pages/Readers/ReadersDetail/ReadersDetail";
import ReadersPage from "./pages/Readers/ReadersPage";
import StaffDetail from "./pages/Staff/StaffDetail/StaffDetail";
import StaffEdit from "./pages/Staff/StaffEdit/StaffEdit";
import StaffNew from "./pages/Staff/StaffNew/StaffNew";
import StaffPage from "./pages/Staff/StaffPage";
import ReadersEdit from "./pages/Readers/ReadersEdit/ReadersEdit";
import ProfilePage from "./pages/Profile/ProfilePage";
import ChangePassword from "./pages/Profile/ChangePassword/ChangePassword";
import ChangeImage from "./pages/Profile/ChangeImage/ChangeImage";
import FinePage from "./pages/Fine/FinePage";
import FineDetail from "./pages/Fine/FineDetail/FineDetail";
import FineNew from "./pages/Fine/FineNew/FineNew";
import FineEdit from "./pages/Fine/FineEdit/FineEdit";
import BorrowPage from "./pages/Borrow/BorrowPage";
import BorrowNew from "./pages/Borrow/BorrowNew/BorrowNew";
import BorrowDetail from "./pages/Borrow/BorrowDetail/BorrowDetail";
import BorrowEdit from "./pages/Borrow/BorrowEdit/BorrowEdit";
import ReturnsPage from "./pages/Returns/ReturnsPage";
import ReturnsDetail from "./pages/Returns/ReturnsDetail/ReturnsDetail";
import ReturnsNew from "./pages/Returns/ReturnsNew/ReturnsNew";
import ReturnsEdit from "./pages/Returns/ReturnsEdit/ReturnsEdit";
import EmtpyLayout from "./layouts/EmtpyLayout/EmtpyLayout";
import LoginPage from "./pages/Login/LoginPage";
import ResetPassPage from "./pages/ResetPass/ResetPassPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ChatPage from "./pages/Chat/ChatPage";

const AppRoutes = () => {
   const element = useRoutes([
      {
         path: "",
         element: <MainLayout />,
         children: [{ path: "/", element: <DashBoradPage /> }],
      },
      {
         path: "/login",
         element: <EmtpyLayout />,
         children: [{ path: "/", element: <LoginPage /> }],
      },
      {
         path: "/reset-password",
         element: <EmtpyLayout />,
         children: [{ path: "/", element: <ResetPassPage /> }],
      },
      {
         path: "/404",
         element: <EmtpyLayout />,
         children: [{ path: "/", element: <NotFoundPage /> }],
      },
      {
         path: "book-manage/book",
         element: <MainLayout />,
         children: [
            { path: "/", element: <BookPage /> },
            { path: "/new", element: <BookNew /> },
            { path: "/:id", element: <BookDetail /> },
            { path: "/:id/edit", element: <BookEdit /> },
         ],
      },
      {
         path: "book-manage/category",
         element: <MainLayout />,
         children: [
            { path: "/", element: <CategoryPage /> },
            { path: "/new", element: <CategoryNew /> },
            { path: "/:id", element: <CategoryDetail /> },
            { path: "/:id/edit", element: <CategoryEdit /> },
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
      {
         path: "readers",
         element: <MainLayout />,
         children: [
            { path: "/", element: <ReadersPage /> },
            { path: "/new", element: <ReadersNew /> },
            { path: "/:id", element: <ReadersDetail /> },
            { path: "/:id/edit", element: <ReadersEdit /> },
         ],
      },
      {
         path: "chat",
         element: <MainLayout />,
         children: [{ path: "/", element: <ChatPage /> }],
      },
      {
         path: "profile",
         element: <MainLayout />,
         children: [
            { path: "/", element: <ProfilePage /> },
            { path: "/password", element: <ChangePassword /> },
            { path: "/image", element: <ChangeImage /> },
         ],
      },
      {
         path: "receipt-manage/fine",
         element: <MainLayout />,
         children: [
            { path: "/", element: <FinePage /> },
            { path: "/new", element: <FineNew /> },
            { path: "/:id", element: <FineDetail /> },
            { path: "/:id/edit", element: <FineEdit /> },
         ],
      },
      {
         path: "receipt-manage/borrow",
         element: <MainLayout />,
         children: [
            { path: "/", element: <BorrowPage /> },
            { path: "/new", element: <BorrowNew /> },
            { path: "/:id", element: <BorrowDetail /> },
            { path: "/:id/edit", element: <BorrowEdit /> },
            { path: "/:id/returns", element: <ReturnsNew /> },
         ],
      },
      {
         path: "receipt-manage/returns",
         element: <MainLayout />,
         children: [
            { path: "/", element: <ReturnsPage /> },
            { path: "/:id", element: <ReturnsDetail /> },
            { path: "/:id/edit", element: <ReturnsEdit /> },
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
