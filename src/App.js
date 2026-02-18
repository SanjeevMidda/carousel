import "./index.css";

import one from "./imgs/one.jpg";
import two from "./imgs/two.jpg";
import three from "./imgs/three.jpg";
import four from "./imgs/four.jpg";
import five from "./imgs/five.jpg";
import six from "./imgs/six.jpg";
import seven from "./imgs/seven.jpg";

function App() {
  // arrows
  // get imgs
  // container to hold our images
  // smaller and bigger when in focus

  return (
    <div className="App">
      <div className="leftArrow">{`<--`}</div>
      <div className="mainImageContainer">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
        <img src={six} alt="" />
        <img src={seven} alt="" />
      </div>
      <div className="rightArrow">{`-->`}</div>
    </div>
  );
}

export default App;
