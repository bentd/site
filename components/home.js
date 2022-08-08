import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Home({ home }) {
  return (
    <div>
      <section className="container-fluid">
        <div className="row border-style">
          <div className="section-col col-lg-5 border-style bg-tan fg-white py-3">
            <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
              <h1 className="text-center w-100 mb-3 pt-5">{ home.greeting }</h1>
              <h4 className="text-center w-100 pt-2">{ home.role }</h4>
            </div>
            <div className="d-flex flex-column justify-content-end h-25 w-100">
              <h5 className="text-center text-truncate h-25 w-100">00_ABOUT_ME</h5>
            </div>
          </div>
          <div className="section-col col-lg-7 border-style bg-gray fg-white py-3">
            <div className="d-flex flex-column justify-content-center align-items-center h-75 w-100 px-2">
              <div className="mt-5">
              { home.skills.map(skill => {
                  return (
                    <div className="row align-items-center my-2" key={skill}>
                      <FontAwesomeIcon className="" icon={solid("square-check")} size="1x" />
                      <h5 className="mb-0">&nbsp;{ skill }</h5>
                    </div>
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
          <div className="section-col col-lg-7 border-style bg-white fg-black py-3">
            <div className="d-flex flex-column justify-content-center text-wrap h-75 w-100 px-2">
              <h1 className="text-center mt-5 mb-3">{ home.university }</h1>
              <h3 className="text-center mb-3">{ home.degree }</h3>
              <h4 className="text-center mb-3">{ home.graduationDate.slice(0, 4) }</h4>
            </div>
            <div className="d-flex flex-column justify-content-end h-25 w-100">
              <h5 className="text-center text-truncate h-25 w-100">03_EDUCATION</h5>
            </div>
          </div>
          <div className="section-col col-lg-5 border-style bg-tan fg-white py-3">
            <div className="d-flex flex-column justify-content-center h-75 w-100 px-2">
              <h3 className="text-center mb-4">{ home.contactMessage }</h3>
              <h4 className="text-center mt-1">{ home.contactEmail }</h4>
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
              <a href={`${ home.contactLink1 }`} className="text-center text-truncate text-uppercase fg-black w-100">{ home.contactLabel1 }</a>
            </div>
          </div>
          <div className="contact-col col-lg-4 border-style py-3">
            <div className="d-flex flex-column justify-content-center h-100 w-100">
              <a href={`${ home.contactLink2 }`} className="text-center text-truncate text-uppercase fg-black w-100">{ home.contactLabel2 }</a>
            </div>
          </div>
          <div className="contact-col col-lg-4 border-style fg-white py-3">
            <div className="d-flex flex-column justify-content-center h-100 w-100">
              <a href={`${ home.contactLink3 }`} className="text-center text-truncate text-uppercase fg-black w-100">{ home.contactLabel3 }</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
