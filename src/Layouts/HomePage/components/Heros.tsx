export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Explore new Skills</h1>
              <p className="lead">The Library has many books</p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-4 vol-md-4 container d-flex 
           justify-content-center align-item-center"
          >
            <div className="ml-2">
              <h1>Our Collections keeps changing</h1>
              <p className="lead">Try to check in daily</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>
      {/* */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image left"></div>
            <div className="mt-2">
              <h1>Explore new Skills</h1>
              <p className="lead">The Library has many books</p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
          <div className="m-2">
              <div className="col-image-right"></div>
              <div className="mt-2">
              <h1>Our Collections keeps changing</h1>
              <p className="lead">Try to check in daily</p>
              </div>
             </div>
        </div>
      </div>
    </div>
  );
};
