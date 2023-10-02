import ReactDOM from 'react-dom/client'
import '@/styles/globals.css'
import App from './App.tsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuW5d72RZVjOiIQuex2pwNz-XN4y4nxn0",
  authDomain: "setup-notification.firebaseapp.com",
  projectId: "setup-notification",
  storageBucket: "setup-notification.appspot.com",
  messagingSenderId: "234924759497",
  appId: "1:234924759497:web:5ea2f8997499f3b553f018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(`app`, app)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
