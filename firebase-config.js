// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPY3UMjxg-Zdbb0M-049qY3lqQd8X6DIM",
    authDomain: "https://follow-shop-bd-default-rtdb.firebaseio.com",
    projectId: "follow-shop-bd",
    storageBucket: "follow-shop-bd.appspot.com",
    messagingSenderId: "269467699842",
    appId: "1:269467699842:web:3c62d803f964ad1b2d829b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
