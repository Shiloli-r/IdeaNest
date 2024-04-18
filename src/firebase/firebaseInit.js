import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDSuwQFBHDNLuTNkq1ZDZWrA4M9pmUSqCc",
    authDomain: "idea-nest-136d1.firebaseapp.com",
    projectId: "idea-nest-136d1",
    storageBucket: "idea-nest-136d1.appspot.com",
    messagingSenderId: "309995490104",
    appId: "1:309995490104:web:3343118505bb15dff34fcd",
    measurementId: "G-JLEC0JWJMC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()