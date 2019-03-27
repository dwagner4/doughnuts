import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var config = {
        apiKey: "AIzaSyDD0R7MRnGk1aABW4KrIntx-FoTWTuBb_Y",
    authDomain: "this-codebase.firebaseapp.com",
    databaseURL: "https://this-codebase.firebaseio.com",
    projectId: "this-codebase",
    storageBucket: "this-codebase.appspot.com",
    messagingSenderId: "686550137052"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const myauth = firebase.auth();
//   myauth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

  export { db, myauth, firebase }