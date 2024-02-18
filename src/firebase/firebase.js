import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHTaU-kB4Q-9yp4wZ9ecRoArlEZc2roCw",
  authDomain: "somanshubhardwajportfolio.firebaseapp.com",
  projectId: "somanshubhardwajportfolio",
  storageBucket: "somanshubhardwajportfolio.appspot.com",
  messagingSenderId: "501289881054",
  appId: "1:501289881054:web:40305bdf4218577282214f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };