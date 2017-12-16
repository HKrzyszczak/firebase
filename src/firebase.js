import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDWm7VItNLqDCaWYDyq2yPPzXdkB33ARVk",
    authDomain: "sandbox-c4d82.firebaseapp.com",
    databaseURL: "https://sandbox-c4d82.firebaseio.com",
    projectId: "sandbox-c4d82",
    storageBucket: "sandbox-c4d82.appspot.com",
    messagingSenderId: "899040876307"
};

firebase.initializeApp(config);

export const database = firebase.database();
