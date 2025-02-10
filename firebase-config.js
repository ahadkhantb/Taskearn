// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPY3UMjxg-Zdbb0M-049qY3lqQd8X6DIM",
    authDomain: "https://follow-shop-bd-default-rtdb.firebaseio.com",
    projectId: "follow-shop-bd",
    storageBucket: "follow-shop-bd.appspot.com",
    messagingSenderId: "269467699842",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
