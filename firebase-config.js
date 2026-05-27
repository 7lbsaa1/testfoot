// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// حط البيانات اللي هتنسخها من الصفحة هنا بالظبط:
const firebaseConfig = {
    apiKey: "AIzaSy...", 
    authDomain: "football-4fed6.firebaseapp.com",
    databaseURL: "https://football-4fed6-default-rtdb.firebaseio.com",
    projectId: "football-4fed6",
    storageBucket: "football-4fed6.appspot.com",
    messagingSenderId: "605473270039",
    appId: "1:605473270039:web:8d6f74cfc8c9a46279ef52"
};

// تشغيل فايربيز
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, signInWithEmailAndPassword, createUserWithEmailAndPassword, ref, set };
