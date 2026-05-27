// استدعاء مكتبات فايربيز المتوافقة مع المتصفح وجيت هب بيجز مباشرة
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// مفاتيح مشروعك الخاصة بـ KORA KDM
const firebaseConfig = {
  apiKey: "AIzaSyBEZLBEEWH_CLc69RQlemG0UBVU6ym0yIc",
  authDomain: "football-4fed6.firebaseapp.com",
  databaseURL: "https://football-4fed6-default-rtdb.firebaseio.com",
  projectId: "football-4fed6",
  storageBucket: "football-4fed6.firebasestorage.app",
  messagingSenderId: "605473270039",
  appId: "1:605473270039:web:8d6f74cfc8c9a46279ef52",
  measurementId: "G-NZF76V3KK5"
};

// تهيئة الخدمات
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// تصدير المتغيرات لاستخدامها في ملفات الـ HTML
export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set, get, child };
