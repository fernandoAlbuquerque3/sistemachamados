import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
   apiKey: "AIzaSyDqaZk8jQjdtB7Rf6RK7FlQLeSMKfSUz-Y",
   authDomain: "tickets-9be6f.firebaseapp.com",
   projectId: "tickets-9be6f",
   storageBucket: "tickets-9be6f.appspot.com",
   messagingSenderId: "393964306895",
   appId: "1:393964306895:web:628ebc22335c3c24ba52ba",
   measurementId: "G-JG5DNMEZ5N",
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }
