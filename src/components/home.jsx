import React from 'react';
import Dashboard from './dashboard';
import courses from './courseData';

function Home() {
  return (
    <Dashboard courses={courses} />  
  );
}

export default Home;
