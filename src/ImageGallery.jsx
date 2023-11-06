import {useState} from "react";
import {DndProvider, useDrag, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import "./ImageGallery.css";

import {
  image1,
  image10,
  image11,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
} from "./assets/images";

const ImageGallery = () => {
  const [images, setImages] = useState([
    {id: 1, src: image1},
    {id: 2, src: image2},
    {id: 3, src: image3},
    {id: 4, src: image4},
    {id: 5, src: image5},
    {id: 6, src: image6},
    {id: 7, src: image7},
    {id: 8, src: image8},
    {id: 9, src: image9},
    {id: 10, src: image10},
    {id: 11, src: image11}
  ]);

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="gallery">
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            index={index}
            id={image.id}
            src={image.src}
            moveImage={moveImage}
          />
        ))}
      </div>
    </DndProvider>
  );
};

const ImageItem = ({id, index, src, moveImage}) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: {id, index}
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: draggedImage => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    }
  });

  return (
    <div ref={node => ref(drop(node))} className=" gallery-item">
      <div>
        <img src={src} className="gallery_img" />
      </div>
    </div>
  );
};

export default ImageGallery;
