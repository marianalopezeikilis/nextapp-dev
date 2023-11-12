import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCafR5mKntxJrlHl55ozUz6MpQt4HBGcmM",
  authDomain: "eurofirms-project.firebaseapp.com",
  projectId: "eurofirms-project",
  storageBucket: "eurofirms-project.appspot.com",
  messagingSenderId: "534009735125",
  appId: "1:534009735125:web:efb1ea0a96ddbc7cdabf5c"
};

export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
