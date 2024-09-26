import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import courseData from './courseData'; // Ensure correct path

function Dashboard() {
  const [courses, setCourses] = useState(null); // Store courses data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const fetchedCourses = await courseData(); // Fetch courses from Firestore
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
      setLoading(false); // Stop loading once data is fetched
    };

    loadCourses();
  }, []);

  // Function to generate a random dark color
  const getRandomDarkColor = () => {
    // Generate random values for R, G, B in the range of 0-127 for darker colors
    const r = Math.floor(Math.random() * 128);
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 128);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  if (loading) {
    return (
      <div className='container' style={{ height: '100vh' }}>
        <h1 className="text-center my-4">Dashboard</h1>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

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
                <Link to={`/courses/${key}`} className='lnk'>
                  {/* Use random dark color for the image */}
                  <img
                    src={`https://dummyimage.com/600x400/${getRandomDarkColor().slice(1)}/fff&text=${course.title}`}
                    className="card-img-top"
                    alt={course.title}
                  />
                  <div className="card-body text-center">
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
