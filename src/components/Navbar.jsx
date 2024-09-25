import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ loggedin }) {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const navigate = useNavigate(); // useNavigate for navigation

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search submission when "Enter" is pressed
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission default behavior
    if (searchTerm.trim()) {
      // Navigate to search page with the query
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      // setSearchTerm(''); // Optionally reset the search input after navigating
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/"><img src={logo} width="36" alt="Logo" /></Link>
        <div className="collapse navbar-collapse" id="navbarExample">
          <ul className="navbar-nav me-auto mb-0">
            {loggedin === 'true' ? (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/events">Events</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/programming-languages">Programming Languages</Link></li>
                <li><Link className="dropdown-item" to="/frameworks">Frameworks</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/roadmaps">Roadmaps</Link></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex align-items-center flex-column flex-lg-row">
            <div className="me-2 mb-2 mb-lg-0">
              <form className="input-group" onSubmit={handleSearchSubmit}>
                <span className="input-group-text" id="basic-addon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </form>
            </div>
            {loggedin === 'true' ? (
               <span><Link className="btn btn-primary clk rounded-circle" to="/profile"><i className="fa-regular fa-user"></i></Link> Profile</span>
            ) : (
              <Link className="btn btn-primary clk" to="/login">Sign up</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
