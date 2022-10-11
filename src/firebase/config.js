import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC3Wprd1TgzUtGYqgW5tZguTS3BtORTIaE",
  authDomain: "tienda-react-83315.firebaseapp.com",
  projectId: "tienda-react-83315",
  storageBucket: "tienda-react-83315.appspot.com",
  messagingSenderId: "337867673742",
  appId: "1:337867673742:web:9072fe739069ff510039df"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)