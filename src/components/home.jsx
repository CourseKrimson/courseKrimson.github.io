function Home() {
    return (
      <div className="container my-4">
        <h2 className="text-center mb-4">Course home</h2>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://ashokitech.com/uploads/course/react-js-online-training.png"
                className="card-img-top"
                alt="Course 1"
              />
              <div className="card-body">
                <h5 className="card-title">Course 1: Introduction to React</h5>
                <p className="card-text">
                  Learn the fundamentals of React, one of the most popular JavaScript libraries for building user interfaces.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col">
            <div className="card h-100">
              <img
                src="https://img-c.udemycdn.com/course/480x270/5450776_0385.jpg"
                className="card-img-top"
                alt="Course 2"
              />
              <div className="card-body">
                <h5 className="card-title">Course 2: Advanced JavaScript</h5>
                <p className="card-text">
                  Dive deeper into JavaScript and learn advanced concepts like closures, async programming, and more.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col">
            <div className="card h-100">
              <img
                src="https://livetechindia.com/wp-content/uploads/2023/12/Nodejs-Application-Development-1024x683.jpg"
                className="card-img-top"
                alt="Course 3"
              />
              <div className="card-body">
                <h5 className="card-title">Course 3: Web Development with Node.js</h5>
                <p className="card-text">
                  Build scalable web applications using Node.js, Express, and MongoDB.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col">
            <div className="card h-100">
              <img
                src="https://cdn.shopaccino.com/igmguru/products/data-science--with-python-igmguru_176161162_l.jpg?v=444p"
                className="card-img-top"
                alt="Course 4"
              />
              <div className="card-body">
                <h5 className="card-title">Course 4: Python for Data Science</h5>
                <p className="card-text">
                  Master Python and its libraries to analyze data and build machine learning models.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col">
            <div className="card h-100">
              <img
                src="https://www.tgcindia.com/wp-content/uploads/2020/09/UX-design-course-at-TGC.jpg"
                className="card-img-top"
                alt="Course 5"
              />
              <div className="card-body">
                <h5 className="card-title">Course 5: UI/UX Design Fundamentals</h5>
                <p className="card-text">
                  Learn the principles of UI/UX design and how to create intuitive user interfaces.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col">
            <div className="card h-100">
              <img
                src="https://codequotient.com/blog/wp-content/uploads/2022/09/Is-It-Worth-Doing-AWS-Cloud-Computing-Course.jpg"
                className="card-img-top"
                alt="Course 6"
              />
              <div className="card-body">
                <h5 className="card-title">Course 6: Cloud Computing with AWS</h5>
                <p className="card-text">
                  Get started with cloud computing using Amazon Web Services (AWS) and learn how to build cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  