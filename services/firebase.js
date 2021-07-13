import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC9WwlMleibGsQN7t-otS5F8jmDBxWwj8A",
  authDomain: "nextjs-with-firebaseauth-9a783.firebaseapp.com",
  projectId: "nextjs-with-firebaseauth-9a783",
  storageBucket: "nextjs-with-firebaseauth-9a783.appspot.com",
  messagingSenderId: "595636184612",
  appId: "1:595636184612:web:26ce3c28da96add2a71ab1",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const auth = firebase.auth();
  console.log(auth);
}
