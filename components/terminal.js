import { useEffect } from "react";
import Typed from "typed.js";
import $ from "jquery";

function datetime() {
  var d = new Date();
  var days = ["Sun ", "Mon ", "Tue ", "Wed ", "Thur ", "Fri ", "Sat "];
  var months = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
  return (
    `${ days[d.getDay()] }${ months[d.getMonth()] }${ d.getDate() }
     ${ d.getHours() }:${ d.getMinutes() }:${ d.getSeconds() }`
   );
}

export default function Terminal({ nouns }) {
  useEffect(() => {
    let options = {
        strings: nouns,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 750,
        shuffle: true,
        cursorChar: "&#9611;",
        smartBackspace: true,
        loop: true,
        loopCount: Infinity
    };

    let typed = new Typed(".typed", options);

    $(".main-col").innerHeight(72 + $("nav").outerHeight());
  })

  return (
    <main className="container-fluid" id="terminal">
      <div className="row">
        <div className="main-col col-lg-12 border-style py-3" id="terminal-container">
          <div className="h-75" id="terminal-div">
            <div id="terminal-bar">
              <div className="faux-button" id="close"></div>
              <div className="faux-button" id="minimize"></div>
              <div className="faux-button" id="expand"></div>
              <div className="text-truncate" id="title">bentd &#8212;&#8212; -bash &#8212;&#8212; 80x24</div>
            </div>
            <div className="w-100 px-1" id="terminal-body">
              <span>&nbsp;Last login: </span><span id="datetime">{ datetime() }</span><span> on ttys000</span>
              <br/>
              <p>&nbsp;mbp:~ bentd$&nbsp;<span className="typed"></span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
