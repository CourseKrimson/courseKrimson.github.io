import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ courses }) {
  if (!courses || Object.keys(courses).length === 0) {
    return <h2 className="text-center">No courses available!</h2>;
  }

  return (
    <div>
      <h1 className="text-center my-4">Dashboard</h1>
      <div className="container my-4">
        <h2 className="text-center mb-4">Course Home</h2>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {Object.entries(courses).map(([key, course], index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <Link to={`/courses/${key}`}>
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
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

export default Dashboard;
