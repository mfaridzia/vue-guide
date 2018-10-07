import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAj9HFYr8aYxCYhJV_xe3ER1n47UqKpNiI",
  authDomain: "turnout-3e1e5.firebaseapp.com",
  databaseURL: "https://turnout-3e1e5.firebaseio.com",
  projectId: "turnout-3e1e5",
  storageBucket: "turnout-3e1e5.appspot.com",
  messagingSenderId: "230260758712"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')