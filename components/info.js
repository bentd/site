import { Component } from "react";

export default class extends Component {

  render() {
    return (
      <div>
        <section className="container-fluid">
          <div className="row">
            <div className="section-col col-lg-4 border-style bg-tan fg-white py-3">
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
                <h1 className="text-center w-100 mb-3 pt-5">{ this.props.info.greeting }</h1>
                <h4 className="text-center w-100 pt-2">{ this.props.info.role }</h4>
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate h-25 w-100">00_ABOUT_ME</h5>
              </div>
            </div>
            <div className="section-col col-lg-3 border-style py-3" id="main-col-mugshot" style={{ backgroundImage: `url(https:${this.props.info.headshotPhoto.fields.file.url})` }}>
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate fg-white h-25 w-100">01_ME</h5>
              </div>
            </div>
            <div className="section-col col-lg-5 border-style bg-gray fg-white py-3">
              <div className="d-flex flex-column justify-content-center align-items-center h-75 w-100 px-2">
                <div className="mt-5">
                { this.props.info.skills.map(skill => {
                    return (
                      <h6 className="mb-3">
                        <i className="fas fa-check-circle fg-white"></i>
                        <span>&nbsp;{ skill }</span>
                      </h6>
                    )
                })}
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
                <h1 className="text-center mt-5 mb-3">{ this.props.info.university }</h1>
                <h3 className="text-center mb-3">{ this.props.info.degree }</h3>
                <h4 className="text-center mb-3">{ this.props.info.graduationDate.slice(0, 4) }</h4>
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate h-25 w-100">03_EDUCATION</h5>
              </div>
            </div>
            <div className="section-col col-lg-4 border-style fg-white py-3" id="main-col-wheels" style={{ backgroundImage: `url(https:${this.props.info.hobbyPhoto.fields.file.url})` }}>
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
              </div>
              <div className="d-flex flex-column justify-content-end h-25 w-100">
                <h5 className="text-center text-truncate white h-25 w-100">04_WHEELS</h5>
              </div>
            </div>
            <div className="section-col col-lg-3 border-style bg-tan fg-white py-3">
              <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
                <h3 className="text-center mb-4">{ this.props.info.contactMessage }</h3>
                <h4 className="text-center mt-1">{ this.props.info.contactEmail }</h4>
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
                <a href={`${ this.props.info.contactLink1 }`} className="text-center text-truncate text-uppercase fg-black w-100">{ this.props.info.contactLabel1 }</a>
              </div>
            </div>
            <div className="contact-col col-lg-4 border-style py-3">
              <div className="d-flex flex-column justify-content-center h-100 w-100">
                <a href={`${ this.props.info.contactLink2 }`} className="text-center text-truncate text-uppercase fg-black w-100">{ this.props.info.contactLabel2 }</a>
              </div>
            </div>
            <div className="contact-col col-lg-4 border-style fg-white py-3">
              <div className="d-flex flex-column justify-content-center h-100 w-100">
                <a href={`${ this.props.info.contactLink3 }`} className="text-center text-truncate text-uppercase fg-black w-100">{ this.props.info.contactLabel3 }</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
