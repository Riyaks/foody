
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
export const firebaseConfig = {
  apiKey: "AIzaSyBvqmBfRaMHZ4Od9QRk1__Jreqq7GZKXrw",
  authDomain: "foody-53c17.firebaseapp.com",
  projectId: "foody-53c17",
  storageBucket: "foody-53c17.appspot.com",
  messagingSenderId: "343082102268",
  appId: "1:343082102268:web:7fff3094a472df0eb15679"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app

