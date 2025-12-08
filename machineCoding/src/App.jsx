import { useState } from "react";
import "./App.css";
import Accordian from "./components/acordian";
import { RandomColour } from "./components/randomColour";
import { StarRating } from "./components/StarRating";
import { ImageSlider } from "./components/imageSlider/ImageSlider.jsx";
import { Image } from "./components/imgSliderguided/Image.jsx";
import { LoadMore } from "./components/loadMore/LoadMore.jsx";
import Todo from "./components/TodoApp/Todo.jsx";
import Otp from "./components/OTP/Otp.jsx";

function App() {
  return (
    <>
      <Otp />
    </>
  );
}

export default App;
