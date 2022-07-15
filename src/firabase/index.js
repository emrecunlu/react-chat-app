import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCX5gHWAHTw4H1r9XmVXd8dSEKHkMAP0Gs",
    authDomain: "message-app-be39a.firebaseapp.com",
    databaseURL: "https://message-app-be39a-default-rtdb.firebaseio.com",
    projectId: "message-app-be39a",
    storageBucket: "message-app-be39a.appspot.com",
    messagingSenderId: "470408732747",
    appId: "1:470408732747:web:bddb203f19e09daf622dce"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)