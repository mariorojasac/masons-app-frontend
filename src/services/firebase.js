import firebase from "firebase/app"
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCPP0ttJcvdae881oUP45XmLROy7xIvhDk",
  authDomain: "masons-app.firebaseapp.com",
  projectId: "masons-app",
  storageBucket: "masons-app.appspot.com",
  messagingSenderId: "1078369632565",
  appId: "1:1078369632565:web:cf379c63872618e8df4c7c",
  measurementId: "G-MB442526CW",
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

function signIn() {
  return auth.signInWithPopup(provider);
}

function logOut() {
  return auth.signOut();
}

export { auth, signIn, logOut };