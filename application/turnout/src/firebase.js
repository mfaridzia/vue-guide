import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "api-key",
  authDomain: "auth-domain",
  databaseURL: "db-url",
  projectId: "project-id",
  storageBucket: "storage-bucket",
  messagingSenderId: "mess-send-id"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
