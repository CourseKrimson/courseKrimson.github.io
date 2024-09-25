import React from 'react';
import { useParams } from 'react-router-dom';
import courses from './courseData'; // Ensure the path is correct
import YouTubeEmbed from './YouTubeEmbed';

function CourseDetail() {
  const { courseName } = useParams();
  const courseKey = courseName.toLowerCase(); // Ensure proper formatting
  const course = courses[courseKey]; // Lookup using the sanitized course key

  if (!course) {
    return <h2 className="text-center">Course not found</h2>;
  }

  // Function to convert newlines to <br />
  const formatContent = (content) => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="container mt-5">
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} className="img-fluid" />
      <p>{course.description}</p>
      <h4>Course Content:</h4>
      <YouTubeEmbed videoId={course.ytb_vid} />
      <p>{formatContent(course.content)}</p>
      <h6><span className="badge bg-primary"><i className="fa-solid fa-pen-nib"></i> {course.author}</span></h6>
    </div>
  );
}

export default CourseDetail;
