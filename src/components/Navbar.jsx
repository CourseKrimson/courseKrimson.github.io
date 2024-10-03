import React, { useEffect, useState } from 'react';
import logo from '@/assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import courses from '@/data/courseData';

function Navbar({ loggedin }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-bs-theme', newTheme)
  };

  const handleSearchChange = (event) => {
    const searchInput = event.target.value;
    setSearchTerm(searchInput);

    const coursesArray = Object.values(courses);

    if (searchInput.trim()) {
      const filteredSuggestions = coursesArray.filter((course) =>
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    navigate(`/search?query=${encodeURIComponent(suggestion.title)}`);
    setSuggestions([]);
  };

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, []);


  return (
    <nav className={`navbar navbar-expand-lg sticky-top bg-body-tertiary navbar-${theme}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExample"
          aria-controls="navbarExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src={logo} width="36" alt="Logo" className="rounded-circle" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarExample">
          <ul className="navbar-nav me-auto mb-0">
            {loggedin === 'true' ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/programming-languages">
                    Programming Languages
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/frameworks">
                    Frameworks
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/roadmaps">
                    Roadmaps
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {loggedin === 'true' ? (
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <span className="me-3">
                <button
                  className="btn clk rounded-circle"
                  onClick={toggleTheme}
                  data-bs-toggle="tooltip"
                  title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                >
                  {theme === 'light' ? (
                    <i className="fa-solid fa-moon"></i>
                  ) : (
                    <i className="fa-solid fa-sun"></i>
                  )}
                </button>
              </span>
              <div className="me-2 mb-2 mb-lg-0 position-relative">
                <form className="input-group" onSubmit={handleSearchSubmit}>
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
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

                {suggestions.length > 0 && (
                  <ul
                    className="list-group position-absolute w-100 mt-1 z-index-1000"
                    style={{ zIndex: '1000' }}
                  >
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item"
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{ cursor: 'pointer' }}
                      >
                        {suggestion.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="me-3">
                <Link
                  className="btn clk rounded-circle"
                  to="/profile"
                  data-bs-toggle="tooltip"
                  title="Profile"
                >
                  <i className="fa-regular fa-user"></i>
                </Link>
              </span>
              <span className="me-3">
                <Link className="nav-link" to="/contributors">
                  Contributors✨
                </Link>
              </span>
            </div>
          ) : (
            <Link className="btn clk" to="/login">
              Sign up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
