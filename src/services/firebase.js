import firebase from "firebase/app"
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAwDxNwMmJDajyQnjH1BzViRoggwC3baRg",
  authDomain: "react-crm-27302.firebaseapp.com",
  projectId: "react-crm-27302",
  storageBucket: "react-crm-27302.appspot.com",
  messagingSenderId: "97576807748",
  appId: "1:97576807748:web:b627637225887b52b0bb11",
  measurementId: "G-6MNYVS9YLG"
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const signIn = () => {
    return auth.signInWithPopup(provider)
}
const logOut = () => {
    return auth.signOut
    
}


export {
    auth,
    signIn,
    logOut
}