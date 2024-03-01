        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
        import {
          getFirestore,
          collection,
          getDocs,
          onSnapshot,
          addDoc,
          deleteDoc,
          doc,
          getDoc,
          updateDoc,
        } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyB2uyQF-81WpeMkciwA7iJyEP2gcL_nDcI",
          authDomain: "el-tumba-cucas.firebaseapp.com",
          projectId: "el-tumba-cucas",
          storageBucket: "el-tumba-cucas.appspot.com",
          messagingSenderId: "18744295080",
          appId: "1:18744295080:web:15420145900c8d8e8e8c9d",
          measurementId: "G-MBJ997TQSY"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const db = getFirestore(app);

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));