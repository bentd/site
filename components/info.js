import { Component } from "react";

export default class extends Component {

  render() {
    return (
      <div>
        <section className="container-fluid">
          <div className="row">
            <div className="section-col col-lg-4 border-style bg-tan fg-white py-3">
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
                <h1 className="text-center w-100 mb-3 pt-5">Hi, I'm Dylan</h1>
                <h4 className="text-center w-100 pt-2">software developer and future engineer</h4>
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate h-25 w-100">00_ABOUT_ME</h5>
              </div>
            </div>
            <div className="section-col col-lg-3 border-style py-3" id="main-col-mugshot">
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate fg-white h-25 w-100">01_ME</h5>
              </div>
            </div>
            <div className="section-col col-lg-5 border-style bg-gray fg-white py-3">
              <div className="d-flex flex-column justify-content-center align-items-center h-75 w-100 px-2">
                <div className="mt-5">
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;React Native</span>
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;React</span>
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;Bootstrap</span>
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;Flask (Backend)</span>
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;Google Cloud</span>
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;Heroku</span>
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;Firebase</span>
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle fg-white"></i>
                    <span>&nbsp;Solidity (Blockchain)</span>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate h-25 w-100">02_SKILLS</h5>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="about">
          <div className="row">
            <div className="section-col col-lg-5 border-style bg-white fg-black py-3">
              <div className="d-flex flex-column justify-content-center text-wrap h-75 w-100 px-2">
                <h1 className="text-center mt-5 mb-3">Florida Agricultural and Mechanical University 🐍</h1>
                <h3 className="text-center mb-3">A.S. Electrical Engineering</h3>
                <h4 className="text-center mb-3">2018</h4>
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate h-25 w-100">03_EDUCATION</h5>
              </div>
            </div>
            <div className="section-col col-lg-4 border-style fg-white py-3" id="main-col-wheels">
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate white h-25 w-100">04_WHEELS</h5>
              </div>
            </div>
            <div className="section-col col-lg-3 border-style bg-tan fg-white py-3">
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
                <h3 className="text-center mb-4">My professional DMs are always open!</h3>
                <h4 className="text-center mt-1">bentd@outlook.com</h4>
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate h-25 w-100">05_CONTACT</h5>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="contact">
          <div className="row">
            <div className="contact-col col-lg-4 border-style py-3">
              <div className="d-flex flex-column justify-content-center h-100 w-100">
                <a href="https://www.linkedin.com/in/dylan-bent-40b396b5/" className="text-center text-truncate fg-black w-100">LINKEDIN</a>
              </div>
            </div>
            <div className="contact-col col-lg-4 border-style py-3">
              <div className="d-flex flex-column justify-content-center h-100 w-100">
                <a href="https://twitter.com/dylnbnt" className="text-center text-truncate fg-black w-100">TWITTER</a>
              </div>
            </div>
            <div className="contact-col col-lg-4 border-style fg-white py-3">
              <div className="d-flex flex-column justify-content-center h-100 w-100">
                <a href="https://github.com/bentd" className="text-center text-truncate fg-black w-100">GITHUB</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
