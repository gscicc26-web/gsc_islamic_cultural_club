const firebaseConfig = {
  apiKey: "AIzaSyBxOqxKvenjtfaiVy0k9PaEuDvvlmpbxDU",
  authDomain: "gscicc-5ea19.firebaseapp.com",
  projectId: "gscicc-5ea19",
  storageBucket: "gscicc-5ea19.firebasestorage.app",
  messagingSenderId: "365711298302",
  appId: "1:365711298302:web:1b1e951974f202aeaf1faf",
  measurementId: "G-BN3EGSSWF6"
};

// Firebase Initialize
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Force login to persist on this device until the user explicitly logs out —
// survives closing the browser/app, not just closing the tab.
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function(err) {
  console.log("Persistence setup error:", err);
});

console.log("✅ Firebase Connected Successfully!");
