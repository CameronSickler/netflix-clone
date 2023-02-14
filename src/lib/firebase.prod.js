import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const db = firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// seedDatabase(db);

export default firebase;






