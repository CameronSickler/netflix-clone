import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCcaSY9o4Nwupf0Pfse-HhwQm4HjhgJzDE",
    authDomain: "netflix-clone-38a3f.firebaseapp.com",
    projectId: "netflix-clone-38a3f",
    storageBucket: "netflix-clone-38a3f.appspot.com",
    messagingSenderId: "1047486154470",
    appId: "1:1047486154470:web:89ede848250d4eb2a0dd27",
};

const firebase = initializeApp(config);

seedDatabase(firebase);

export { firebase };






