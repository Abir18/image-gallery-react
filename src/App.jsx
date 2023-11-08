import {useState} from "react";
import "./App.css";
import ImageGallery from "./ImageGallery";

function App() {
  const [selectedItem, setSelectedItem] = useState([]);
  const [checked, fhecked] = useState(false);
  console.log(checked, "sel");
  return (
    <div className="app">
      <div className="header">
        {selectedItem.length > 0 ? (
          <h2>
            {selectedItem.length} {selectedItem.length === 1 ? "item" : "items"}{" "}
            selected
          </h2>
        ) : (
          <h1>Gallery</h1>
        )}
      </div>
      <hr />
      <ImageGallery setSelectedItem={setSelectedItem} />
    </div>
  );
}

export default App;
