import React from 'react';
import { useParams } from 'react-router-dom';
import courses from './courseData'; // Ensure the path is correct

function CourseDetail() {
  const { courseName } = useParams();

  // Convert the URL back to the sanitized course key
  const courseKey = courseName.toLowerCase(); // Ensures proper formatting

  const course = courses[courseKey]; // Lookup using the sanitized course key

  if (!course) {
    return <h2 className="text-center">Course not found</h2>;
  }

  return (
    <div className="container mt-5">
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} className="img-fluid" />
      <p>{course.description}</p>
      <h4>Course Content:</h4>
      <p>{course.content}</p>
    </div>
  );
}

export default CourseDetail;
