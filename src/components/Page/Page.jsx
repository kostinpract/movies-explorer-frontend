import React from "react";
import { Outlet } from "react-router-dom";
import "./Page.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Page() {
  return (
    <>
      <div className="page">
        <Header isLogin={false}/>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Page;
