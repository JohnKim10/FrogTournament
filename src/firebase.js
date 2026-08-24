import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYomXe6gD96hWYPMz_qUrfW974GIftK_M",
  authDomain: "frogtournament-99fa7.firebaseapp.com",
  projectId: "frogtournament-99fa7",
  storageBucket: "frogtournament-99fa7.firebasestorage.app",
  messagingSenderId: "375811870505",
  appId: "1:375811870505:web:3213099097543385dab138",
  measurementId: "G-WHTNDC35N3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
