export default function Work({ work, index }) {
  switch(index % 3) {
    case 0:
      var order = ["order-2 order-sm-2 order-lg-2", "order-1 order-sm-1 order-lg-1", "order-3 order-sm-3 order-lg-3"];
      break;
    case 1:
      var order = ["order-1 order-sm-1 order-lg-1", "order-3 order-sm-3 order-lg-3", "order-2 order-sm-2 order-lg-2"];
      break;
    case 2:
      var order = ["order-3 order-sm-3 order-lg-3", "order-2 order-sm-2 order-lg-2", "order-1 order-sm-1 order-lg-1"];
      break;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={ `section-col col-lg-6 ${ order[0] } border-style bg-tan fg-white py-3` } id="main-col-carousel" >
          <div className="carousel slide h-100" id={ `main-carousel-${ index }`} dataRide="false" dataInterval="false" dataKeyboard="true">
            <div className="carousel-inner h-100">
              {work.gallery.map((image, index) =>
                <div className={ index === 0 ? "portfolio-image carousel-item active" : "portfolio-image carousel-item" }>
                  <div className="d-flex flex-column align-items-center h-100 w-100">
                    <img className="d-block h-100" src={ image.fields.file.url } alt={ image.label } />
                  </div>
                </div>
              )}
            </div>
            <a className="carousel-control-prev" href={ `#main-carousel-${ index }`} role="button" dataSlide="prev">
            <span className="carousel-control-prev-icon" ariaHidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={ `#main-carousel-${ index }`} role="button" dataSlide="next">
              <span className="carousel-control-next-icon" ariaHidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className={ `section-col col-lg-5 ${ order[1] } border-style bg-white fg-black py-3` }>
          <div className="d-flex flex-column justify-content-center text-wrap h-75 w-100 px-2">
            <h2 className="text-center mt-5 mb-3">Project { work.title }</h2>
            <h6 className="text-center mt-5 mb-3">{ work.description }</h6>
          </div>
          <div className="d-flex flex-column justify-content-end h-25 w-100">
            <h5 className="text-center text-truncate h-25 w-100">0{ work.order }_{ work.label }</h5>
          </div>
        </div>
        <div className={ `barricade section-col col-lg-1 ${ order[2] } border-style bg-gray fg-white py-3` }>
        </div>
      </div>
    </div>
  )
}
