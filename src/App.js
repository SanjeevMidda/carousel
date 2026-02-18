import "./index.css";

import one from "./imgs/one.jpg";
import two from "./imgs/two.jpg";
import three from "./imgs/three.jpg";
import four from "./imgs/four.jpg";
import five from "./imgs/five.jpg";
import six from "./imgs/six.jpg";
import seven from "./imgs/seven.jpg";
import { useState } from "react";

function App() {
  // arrows
  // get imgs
  // container to hold our images
  // smaller and bigger when in focus

  const [images, setImage] = useState([
    {
      img: one,
      no: 1,
    },
    {
      img: two,
      no: 2,
    },
    {
      img: three,
      no: 3,
    },
    {
      img: three,
      no: 3,
    },
    {
      img: four,
      no: 4,
    },
    {
      img: five,
      no: 5,
    },
    {
      img: six,
      no: 6,
    },
    {
      img: seven,
      no: 7,
    },
  ]);

  const [currentImg, setCurrentImg] = useState(1);

  const moveImg = (direction) => {
    console.log(direction);

    if (direction === "left") {
      if (currentImg === 1) {
        setCurrentImg(1);
      } else {
        setCurrentImg(currentImg - 1);
      }
    } else if (direction === "right") {
      setCurrentImg(currentImg + 1);
    }
  };

  console.log(currentImg);

  return (
    <div className="App">
      <div
        className="arrow leftArrow"
        onClick={() => moveImg("left")}
      >{`<--`}</div>
      <div className="mainImageContainer">
        {images.map((image) => {
          return <img src={image.img} key={image.key} />;
        })}
      </div>
      <div
        className="arrow rightArrow"
        onClick={() => moveImg("right")}
      >{`-->`}</div>
    </div>
  );
}

export default App;
