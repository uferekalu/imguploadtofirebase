import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBGJnxF8skj3AXdieVF9mpUsTBHf0eU8Gw",
    authDomain: "image-upload-b87f1.firebaseapp.com",
    projectId: "image-upload-b87f1",
    storageBucket: "image-upload-b87f1.appspot.com",
    messagingSenderId: "777411500422",
    appId: "1:777411500422:web:29085764177ff421867407"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };