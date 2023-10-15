import React from "react";
import { Outlet } from "react-router-dom";
import "./Page.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Page() {
  return (
    <>
      <Header isLogin={
        true
      } />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Page;
