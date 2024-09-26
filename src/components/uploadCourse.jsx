import { useState } from 'react';
import { setDoc, doc } from "firebase/firestore"; // Import Firestore methods
import { db } from './firebase'; // Ensure correct import of Firestore config
import { toast } from "react-toastify";

function UploadCourse() {
    const [course, setCourse] = useState({
        title: '',
        author: '',
        description: '',
        content: '',
        ytb_vid: '',
        sendCopy: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleCheckboxChange = () => {
        setCourse({ ...course, sendCopy: !course.sendCopy });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const courseId = course.title.replace(/\s+/g, '-').toLowerCase(); // Create an ID based on title
            await setDoc(doc(db, "Courses", courseId), {
                title: course.title,
                author: course.author,
                description: course.description,
                content: course.content,
                ytb_vid: course.ytb_vid,
                sendCopy: course.sendCopy,
                timestamp: new Date(),
            });

            toast.success("Course uploaded successfully!", { position: "top-center" });
            setCourse({
                title: '',
                author: '',
                description: '',
                content: '',
                ytb_vid: '',
                sendCopy: true,
            });
        } catch (error) {
            console.error("Error uploading course:", error.message);
            toast.error("Error uploading course: " + error.message, { position: "bottom-center" });
        }
    };

    return (
        <form style={{ width: '26rem' }} className="text-center container" onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="courseTitle">Course Title</label>
                <input
                    type="text"
                    id="courseTitle"
                    name="title"
                    className="form-control"
                    value={course.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="courseAuthor">Author</label>
                <input
                    type="text"
                    id="courseAuthor"
                    name="author"
                    className="form-control"
                    value={course.author}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="courseDescription">Description</label>
                <textarea
                    id="courseDescription"
                    name="description"
                    className="form-control"
                    rows="3"
                    value={course.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="courseContent">Course Content (Markdown)</label>
                <textarea
                    id="courseContent"
                    name="content"
                    className="form-control"
                    rows="6"
                    value={course.content}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="courseVideo">YouTube Video ID</label>
                <input
                    type="text"
                    id="courseVideo"
                    name="ytb_vid"
                    className="form-control"
                    value={course.ytb_vid}
                    onChange={handleChange}
                />
            </div>

          
            
            <button type="submit" className="btn btn-primary btn-block mb-4">
                Upload Course
            </button>
        </form>
    );
}

export default UploadCourse;
