import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCa1peunGlb2kc-a37wYbdx3qd7T_JCV3Q",
  authDomain: "atmos-bphc.firebaseapp.com",
  projectId: "atmos-bphc",
  storageBucket: "atmos-bphc.appspot.com",
  messagingSenderId: "522462985483",
  appId: "1:522462985483:web:c6a65e1796cf0c7e1eb60e"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export const sheetLinks = {
  "competitions": "",
  "workshops": ""
}

export const urlEndpoint = "https://ucarecdn.com/"


export default firebase