import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export function StarRating({ numberOfStars }) {
  let starCount = numberOfStars ? numberOfStars : 10;
  let starArray = new Array(starCount).fill(0);

  const [selected, setSelected] = useState(-1);
  const [hovered, setHovered] = useState(-1);

  function handleHover(index) {
    setHovered(index);
  }
  function handleLeave(index) {
    setHovered(index);
  }

  function handleSelected(index) {
    setSelected(index);
  }

  return (
    <div className="star-rating">
      {starArray.map((_, index) => {
        return (
          <>
            <FaStar
              className={index <= (hovered || selected) ? "active" : "inactive"}
              onMouseOver={() => handleHover(index)}
              onClick={() => handleSelected(index)}
              onMouseLeave={() => handleLeave(index)}
            />
          </>
        );
      })}
    </div>
  );
}
