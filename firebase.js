import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_9BNFGdF48aBs8JBHEJQutC2C20PM6tQ",
    authDomain: "whatsapp-2-b844d.firebaseapp.com",
    projectId: "whatsapp-2-b844d",
    storageBucket: "whatsapp-2-b844d.appspot.com",
    messagingSenderId: "219782049192",
    appId: "1:219782049192:web:751d6c93f4d80899e2019d"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };