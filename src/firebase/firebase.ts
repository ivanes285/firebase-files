
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
const firebaseConfig = {
  apiKey: "AIzaSyBqsz1n4gx4UMtCME79ODtPkMcVF_hlAFA",
  authDomain: "react-firebase-d31e1.firebaseapp.com",
  projectId: "react-firebase-d31e1",
  storageBucket: "react-firebase-d31e1.appspot.com",
  messagingSenderId: "1045687524576",
  appId: "1:1045687524576:web:19f1e6f40d82c014ba4485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const upLoadImage = async (file: File) => {
const storageRef = ref(storage,`images/${uuidv4()}`); //? images/ is a folder name in firebase storage and uuidv4() is a random string 
const snaptshot = await uploadBytes(storageRef, file);
console.log("snaptshot",snaptshot);
}
