import { useState } from "react";
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


  return (
    <form onSubmit={handleUpload}>
      <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files![0])} />
      <button type="submit">Upload </button>
    </form>

  );
}

export default App;
