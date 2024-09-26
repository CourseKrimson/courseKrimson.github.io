import { db } from './firebase'; // Ensure correct path to your firebase config
import { collection, getDocs } from 'firebase/firestore';

// Function to fetch courses from Firestore
const courseData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Courses"));
    const courses = {};
    
    querySnapshot.forEach((doc) => {
      courses[doc.id] = doc.data();
    });
    console.table(courses);

    return courses;
  } catch (error) {
    console.error("Error fetching courses: ", error);
    console.log("error")
    return {}; // Return an empty object in case of error
  }
};

export default courseData;
