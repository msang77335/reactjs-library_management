import React, { useState } from "react";
import Header from "../../component/Header/Header";
import SideBar from "../../component/SideBar/SideBar";
import "./MainLayout.scss";
import classNames from "classnames";
import Content from "../../component/Content/Content";

function MainLayout(props) {
   const { children } = props;
   const [isSideBar, setIsSideBar] = useState(true);
   function handleClick() {
      setIsSideBar(!isSideBar);
   }
   return (
      <div className="main-layout">
         <Header handleClick={handleClick} />
         <SideBar className={classNames({ open: isSideBar })} />
         <Content
            className={classNames({ full: !isSideBar })}
            children={children}
         />
      </div>
   );
}

export default MainLayout;
