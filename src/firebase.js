import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZieQ_mczBaKLhz9Hg7X_OntvYteJW7IU",
    authDomain: "linkedin-clone-ac682.firebaseapp.com",
    projectId: "linkedin-clone-ac682",
    storageBucket: "linkedin-clone-ac682.appspot.com",
    messagingSenderId: "918565067447",
    appId: "1:918565067447:web:b6564c32832d7fb7ef0b32"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;