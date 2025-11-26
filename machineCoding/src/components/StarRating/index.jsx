import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export function StarRating({ numberOfStars }) {
  let starArray = Array.from({ length: numberOfStars || 10 });

  return (
    <>
      <h1>this is the heading</h1>
      {starArray.map((star, index) => {
        return <FaStar key={index} />;
      })}
    </>
  );
}
