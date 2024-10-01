import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courses from "@/data/courseData";
import { marked } from "marked";
import YouTubeEmbed from "@/components/YouTubeEmbed";

function CourseDetail() {
  const { courseName } = useParams();
  const courseKey = courseName.toLowerCase();
  const course = courses[courseKey];

  const [content, setContent] = useState("");

  if (!course) {
    return <h2 className="text-center">Course not found</h2>;
  }

  useEffect(() => {
    fetch(course.contentFile)
      .then((response) => response.text())
      .then((text) => setContent(marked(text)))
      .catch((error) =>
        console.error("Error fetching the markdown file:", error),
      );
  }, [course.contentFile]);

  return (
    <div className="container mt-5">
      <h1>{course.title}</h1>
      <YouTubeEmbed videoId={course.ytb_vid}></YouTubeEmbed>
      <p>{course.description}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default CourseDetail;
