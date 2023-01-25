import { upLoadImage } from "./firebase/firebase";

function App() {
  return (
    <div>
      <input type="file" name="image" accept="image/*" onChange={e => upLoadImage(e.target.files![0])} />
    </div>
  );
}

export default App;
