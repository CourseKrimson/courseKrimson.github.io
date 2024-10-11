import React from 'react';
import { Link } from 'react-router-dom';

function Programming({ courses }) {
  if (!courses || Object.keys(courses).length === 0) {
    return <h2 className="text-center">No cheatsheets available!</h2>;
  }

  return (
    <div>
      <h1 className="text-center my-4">Cheatsheets</h1>
      <div className="container my-4">
        {/* <h2 className="text-center mb-4">Cheatsheets</h2> */}
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {Object.entries(courses).map(([key, cheatsheet], index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <Link to={`/programming-languages/${key}`} className="lnk">
                  <img
                    src={cheatsheet.image}
                    className="card-img-top"
                    alt={cheatsheet.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cheatsheet.title}</h5>
                    <p className="card-text">{cheatsheet.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programming;