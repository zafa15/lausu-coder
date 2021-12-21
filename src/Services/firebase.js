import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyB10Lke1xecr1swaqsDOFjqxGE1jdBNbtU",
        authDomain: "coderhouser-lausutec.firebaseapp.com",
        projectId: "coderhouser-lausutec",
        storageBucket: "coderhouser-lausutec.appspot.com",
        messagingSenderId: "745356102170",
        appId: "1:745356102170:web:5d3be679c04f72e015dfa3"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);