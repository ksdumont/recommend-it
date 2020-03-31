import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
require("dotenv").config()

const config = {
  apiKey: process.env.apiKey,
  authDomain: "recommendit-2464c.firebaseapp.com",
  databaseURL: "https://recommendit-2464c.firebaseio.com",
  projectId: "recommendit-2464c",
  storageBucket: "recommendit-2464c.appspot.com",
  messagingSenderId: "339369906661",
  appId: "1:339369906661:web:16ecbfef4ff5a78c78df0c",
  measurementId: "G-TV8F9KSRN8"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }
  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}
export default new Firebase();
