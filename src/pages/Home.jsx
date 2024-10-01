import React from "react";
import Dashboard from "./Dashboard";
import courses from "@/data/courseData";

function Home() {
  return <Dashboard courses={courses} />;
}

export default Home;
