import { Component } from "react";

export default class extends Component {

  render() {
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
                <span>&nbsp;Last login: </span><span id="datetime"></span><span> on ttys000</span>
                <br/>
                <p>&nbsp;mbp:~ bentd$&nbsp;<span className="typed"></span></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

}