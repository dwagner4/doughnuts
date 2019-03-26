import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var config = {
    apiKey: "AIzaSyAddkZMozcJkcrOsjfAXWeI8rFOzVqk3-w",
    authDomain: "chalkers-donuts.firebaseapp.com",
    databaseURL: "https://chalkers-donuts.firebaseio.com",
    projectId: "chalkers-donuts",
    storageBucket: "chalkers-donuts.appspot.com",
    messagingSenderId: "1235417565"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const myauth = firebase.auth();
//   myauth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

  export { db, myauth, firebase }