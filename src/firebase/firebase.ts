import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyBqsz1n4gx4UMtCME79ODtPkMcVF_hlAFA",
  authDomain: "react-firebase-d31e1.firebaseapp.com",
  projectId: "react-firebase-d31e1",
  storageBucket: "react-firebase-d31e1.appspot.com",
  messagingSenderId: "1045687524576",
  appId: "1:1045687524576:web:19f1e6f40d82c014ba4485",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const upLoadFile = async (file: File) => {
const storageRef = ref(storage,`images/${uuidv4()}`); //? images/ is a folder name in firebase storage and uuidv4() is a random string
const snapshot= await uploadBytes(storageRef, file);
const url = await getDownloadURL(storageRef);
 return {url, snapshot}
}

// export const upLoadFile = async (file: File) => {
//   const storageRef = ref(storage, `images/${uuidv4()}`); //? images/ is a folder name in firebase storage and uuidv4() is a random string
//   const uploadTask = uploadBytesResumable(storageRef, file);

//   uploadTask.on("state_changed", (snapshot) => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("Upload is " + progress + "% done");

//       switch (snapshot.state) {
//         case "paused":
//           console.log("Upload is paused");
//           break;
//         case "running":
//           console.log("Upload is running");
//           break;
//       }
//     },
//     (error) => {
//       console.log("error", error);
//     },
//     async () => {
//       const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//       console.log("File available at", downloadURL);
//     }
//   );
// };
