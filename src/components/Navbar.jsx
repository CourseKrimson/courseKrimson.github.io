import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

function Navbar({ loggedin }) {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const navigate = useNavigate(); // useNavigate for navigation

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (searchTerm) {
      // Redirect to the search results page with the search term
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Clear the input after submission
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
            <form className="me-2 mb-2 mb-lg-0" onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Search" 
                value={searchTerm} 
                onChange={handleSearchChange} 
              />
            </form>
            {loggedin === 'true' ? (
              <Link className="btn btn-primary clk" to="/profile">Profile </Link>
            ) : (
              <Link className="btn btn-primary clk" to="/login">Sign up </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
