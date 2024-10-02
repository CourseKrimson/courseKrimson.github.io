import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCYeWoa0iKtDr9VV2iSZ9tZQqyWuBHWXnU',
  authDomain: 'opencourses-6a478.firebaseapp.com',
  projectId: 'opencourses-6a478',
  storageBucket: 'opencourses-6a478.appspot.com',
  messagingSenderId: '139996396922',
  appId: '1:139996396922:web:5e0aec9a81d6aa30182ac3',
  measurementId: 'G-1T13ESR8EJ',
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
