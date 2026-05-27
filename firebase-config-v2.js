// 1. استدعاء المكتبات الرسمية بالإصدار المستقر المتوافق مع المتصفحات مباشرة
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 2. الكونفيج المظبوط والخاص بمشروعك
const firebaseConfig = {
    apiKey: "AIzaSyBEZLBEEWH_CLc69RQLemG0UBVU6ym0yIc",
    authDomain: "football-4fed6.firebaseapp.com",
    databaseURL: "https://football-4fed6-default-rtdb.firebaseio.com",
    projectId: "football-4fed6",
    storageBucket: "football-4fed6.firebasestorage.app",
    messagingSenderId: "605473270039",
    appId: "1:605473270039:web:8d6f74cfc8c9a46279ef52",
    measurementId: "G-NZF76V3KK5"
};

// 3. تهيئة خدمات الفايربيز الأساسية
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// 4. تصدير الأدوات عشان الصفحات التانية (login و register) تقدر تعمل لها import وتشتغل فوري
export { auth, database, signInWithEmailAndPassword, createUserWithEmailAndPassword, ref, set };
