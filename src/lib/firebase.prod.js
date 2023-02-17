import { initializeApp } from 'firebase/app';
import "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { seedDatabase } from '../seed';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// const auth = getAuth(firebaseApp);
// onAuthStateChanged(auth, user => {
//     // Check for user status
// });

const firebase = initializeApp(config);

const db = getFirestore(firebase);

seedDatabase(db);

export { firebase };






