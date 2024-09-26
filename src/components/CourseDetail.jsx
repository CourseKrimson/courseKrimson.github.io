import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courseData from './courseData'; // Ensure correct path
import YouTubeEmbed from './YouTubeEmbed';

function CourseDetail() {
  const { courseName } = useParams();
  const courseKey = courseName.toLowerCase(); // Ensure proper formatting
  const [course, setCourse] = useState(null); // Store course data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const loadCourseData = async () => {
      try {
        const courses = await courseData(); // Fetch courses from Firestore
        setCourse(courses[courseKey]); // Set the specific course
      } catch (error) {
        console.error("Error fetching course:", error);
      }
      setLoading(false); // Stop loading once data is fetched
    };

    loadCourseData();
  }, [courseKey]);

  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (!course) {
    console.log(course);
    return <h2 className="text-center">Course not found</h2>;
  }

  // Function to convert newlines to <br />
  const formatContent = (content) => {
    return content ? content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    )) : '';
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
