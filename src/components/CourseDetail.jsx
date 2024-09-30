import React from 'react';
import { useParams } from 'react-router-dom';
import courses from './courseData'; 
import YouTubeEmbed from './YouTubeEmbed';
import { marked } from 'marked';  

function CourseDetail() {
  const { courseName } = useParams();
  const courseKey = courseName.toLowerCase(); 
  const course = courses[courseKey]; 

  if (!course) {
    return <h2 className="text-center">Course not found</h2>;
  }

  const renderMarkdown = (markdownText) => {
    return { __html: marked(markdownText) };
  };

  return (
    <div className="container mt-5">
      <h2 className='text-center'>{course.title}</h2>
      {/* <img src={course.image} alt={course.title} className="img-fluid" /> */}
      <p className='text-center'>{course.description}</p>
      <h4 className='text-center'>Course Content:</h4>
      <YouTubeEmbed videoId={course.ytb_vid} />
      <div dangerouslySetInnerHTML={renderMarkdown(course.content)} />

      <h6><span className="badge bg-primary"><i className="fa-solid fa-pen-nib"></i> {course.author}</span></h6>
    </div>
  );
}

export default CourseDetail;
