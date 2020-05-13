import React from "react";
import { useEffect } from "react";
import $ from "jquery"
import Header from "./proto/header";
import Navigation from "./proto/navigation";
import Footer from "./proto/footer";

export default function Layout({ info, children, index }) {
  useEffect(() => {
    $(".layout-container").css("margin-top", $("nav").outerHeight().toString() + "px");
  });

  return (
    <>
      <Header title={ info.name } greeting={ info.greeting } role={ info.role } />
      <Navigation name={ info.name } index={ index } />
      <div className="layout-container">{ children }</div>
      <Footer />
    </>
  )
}
