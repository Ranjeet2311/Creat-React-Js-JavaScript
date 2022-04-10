import React from "react";
import SwiftSlider from "react-swift-slider";

const data = [
  {
    id: "1",
    src: "./images/slider1.jpg",
  },
  {
    id: "2",
    src: "./images/slider2.jpg",
  },
  {
    id: "3",
    src: "./images/slider3.png",
  },
];

function Sliders() {
  return (
    <div className="slider-wrap">
      <SwiftSlider
        data={data}
        height={500}
        showDots={true}
        enableNextAndPrev={true}
        style={{ overflow: "hidden" }}
      />
    </div>
  );
}

export default Sliders;
