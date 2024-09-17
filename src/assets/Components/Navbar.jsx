import logo from '../images/logo.png';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#"><img src={logo} width="36" /></a>
          <div className="collapse navbar-collapse" id="navbarExample">
            <ul className="navbar-nav me-auto mb-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Events</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Programming Languages</a></li>
                  <li><a className="dropdown-item" href="#">Frameworks</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Roadmaps</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <form className="me-2 mb-2 mb-lg-0">
                <input type="text" className="form-control form-control-sm" placeholder="Search" />
              </form>
              <a className="btn btn-primary" href="/login">Sign up</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  