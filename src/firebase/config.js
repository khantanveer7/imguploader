// import firebase from "firebase";
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";;

const firebaseConfig = {
    // config
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp } 