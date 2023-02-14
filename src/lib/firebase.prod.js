import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const API_KEY = process.env.REACT_APP_API_KEY
const APP_AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN
const APP_PROJECT_ID = process.env.REACT_APP_PROJECT_ID
const APP_STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET
const APP_MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID
const APP_APP_ID = process.env.REACT_APP_APP_ID

const config = {
    apiKey: API_KEY,
    authDomain: APP_AUTHDOMAIN,
    projectId: APP_PROJECT_ID,
    storageBucket: APP_STORAGE_BUCKET,
    messagingSenderId: APP_MESSAGING_SENDER_ID,
    appId: APP_APP_ID
};

const firebase = initializeApp(config);

seedDatabase(firebase);

export { firebase };






