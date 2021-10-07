import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSejsYm1D0BYlWhY9MHk6hgBylBmM8_r8",
  authDomain: "ecoden-ecommerce.firebaseapp.com",
  projectId: "ecoden-ecommerce",
  storageBucket: "ecoden-ecommerce.appspot.com",
  messagingSenderId: "961142990258",
  appId: "1:961142990258:web:7ece779e2cddebdb8870ab"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)