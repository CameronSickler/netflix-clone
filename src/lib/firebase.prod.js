import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    //    API here
};

const firebase = initializeApp(config);

seedDatabase(firebase);

export { firebase };






