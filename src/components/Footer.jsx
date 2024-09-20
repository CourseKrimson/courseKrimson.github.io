export default function Footer() {
    return (
      <footer className="bg-body-tertiary text-center text-lg-start align-items-center">
        {/* Grid container */}
        <div className="container p-4 pb-0">
          <form action="">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-auto mb-4 mb-md-0">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* Grid column */}
  
              {/* Grid column */}
              <div className="col-md-5 col-12 mb-4 mb-md-0">
                {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form5Example22" className="form-control" placeholder="Email Address"/>
                </div>
              </div>
              {/* Grid column */}
  
              {/* Grid column */}
              <div className="col-auto mb-4 mb-md-0">
                {/* Submit button */}
                <button data-mdb-ripple-init type="button" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </form>
        </div>
        {/* Grid container */}
  
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          ©
          <a className="text-body" href="https://krimsonsquad.tech/">Krimsonsquad.tech</a> 2024
        </div>
        {/* Copyright */}
      </footer>
    );
  }
  