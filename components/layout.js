import $ from "jquery";
import React, { useEffect } from "react";


import Header from "./proto/header";
import Navigation from "./proto/navigation";
import Footer from "./proto/footer";


export default function Layout({ home, children, index }) {
  useEffect(() => {
    $(".layout-container").css("margin-top", $("nav").outerHeight().toString() + "px");
  });

  return (
    <>
      <Header title={ home.name } greeting={ home.greeting } role={ home.role } />
      <Navigation name={ home.name } index={ index } />
      <div className="layout-container">{ children }</div>
      <Footer />
    </>
  )
}
