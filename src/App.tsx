import {  useState } from "react";
import { upLoadFile } from "./firebase/firebase";

function App() {
  const [image, setImage] = useState<File | null>(null);
 

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   try {
    const {url,snapshot} = await upLoadFile(image as File)
    console.log(url,snapshot.metadata);
   } catch (error) {
    console.log(error);
   }

  };


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setImage(e.target.files![0])
}

  return (
    <form onSubmit={handleUpload}>
      <input type="file" name="image" accept="image/*" onChange={handleChange} />
      <button type="submit" >Upload </button>
    </form>

  );
}

export default App;
