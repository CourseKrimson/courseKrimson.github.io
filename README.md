<h1>CourseKrimson</h1>

<p>Welcome to <strong>CourseKrimson</strong>! This project provides a simple platform to showcase various tech-related courses. Contributors can add or modify courses in the <code>courseData.js</code> file, following a consistent structure.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#project-overview">Project Overview</a></li>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#how-to-add-courses">How to Add Courses</a></li>
  <li><a href="#running-the-project">Running the Project</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="project-overview">Project Overview</h2>
<p>CourseKrimson allows you to view a dashboard of tech courses and detailed pages for each course. The courses are added in the <code>courseData.js</code> file, and this is where you can add your own courses as well.</p>

<h2 id="prerequisites">Prerequisites</h2>
<ul>
  <li>Node.js (v12+)</li>
  <li>NPM or Yarn</li>
  <li>Basic knowledge of React and Vite</li>
</ul>

<h2 id="installation">Installation</h2>
<pre><code># Clone the repo
git clone https://github.com/CourseKrimson/courseKrimson.github.io.git

# Navigate to project folder
cd courseKrimson.github.io

# Install dependencies
npm install
</code></pre>

<h2 id="how-to-add-courses">How to Add Courses</h2>
<p>Courses are stored in the <code>courseData.js</code> file. Follow the format below to add a new course:</p>
<pre><code>const courses = {
  'course index number: course-title': {
    title: 'Course Index Number: Course Title',
    image: 'https://dummyimage.com/600x400/000/fff.jpg&text=Course+Image',
    description: 'Brief description of the course content.',
    content: `
      - Bullet point for course topic 1.
      - Bullet point for course topic 2.
      - Detailed explanation of course content.
    `,
  },
  // Add more courses in the same structure
};
</code></pre>

<h2 id="running-the-project">Running the Project</h2>
<p>After installation, you can run the project locally:</p>
<pre><code># Start the development server
npm run dev
</code></pre>

<h2 id="contributing">Contributing</h2>
<p>Feel free to submit pull requests or issues for any improvements or suggestions.</p>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License.</p>
