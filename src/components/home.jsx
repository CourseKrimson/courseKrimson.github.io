// Home.jsx
import React from 'react';
import Dashboard from './dashboard';

const courses = [
  {
    title: "Course 1: Introduction to React",
    description: "Learn the fundamentals of React, one of the most popular JavaScript libraries for building user interfaces.",
    image: "https://ashokitech.com/uploads/course/react-js-online-training.png"
  },
  {
    title: "Course 2: Advanced JavaScript",
    description: "Dive deeper into JavaScript and learn advanced concepts like closures, async programming, and more.",
    image: "https://img-c.udemycdn.com/course/480x270/5450776_0385.jpg"
  },
  {
    title: "Course 3: Web Development with Node.js",
    description: "Build scalable web applications using Node.js, Express, and MongoDB.",
    image: "https://livetechindia.com/wp-content/uploads/2023/12/Nodejs-Application-Development-1024x683.jpg"
  },
  {
    title: "Course 4: Python for Data Science",
    description: "Master Python and its libraries to analyze data and build machine learning models.",
    image: "https://cdn.shopaccino.com/igmguru/products/data-science--with-python-igmguru_176161162_l.jpg?v=444p"
  },
  {
    title: "Course 5: UI/UX Design Fundamentals",
    description: "Learn the principles of UI/UX design and how to create intuitive user interfaces.",
    image: "https://www.tgcindia.com/wp-content/uploads/2020/09/UX-design-course-at-TGC.jpg"
  },
  {
    title: "Course 6: Cloud Computing with AWS",
    description: "Get started with cloud computing using Amazon Web Services (AWS) and learn how to build cloud infrastructure.",
    image: "https://codequotient.com/blog/wp-content/uploads/2022/09/Is-It-Worth-Doing-AWS-Cloud-Computing-Course.jpg"
  }
];

function Home() {
  return (
    <Dashboard courses={courses} />  // Pass the courses as props
  );
}

export default Home;
