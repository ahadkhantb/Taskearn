// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPY3UMjxg-Zdbb0M-049qY3lqQd8X6DIM",
    authDomain: "https://follow-shop-bd-default-rtdb.firebaseio.com",
    projectId: "follow-shop-bd",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
