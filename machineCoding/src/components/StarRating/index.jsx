import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';


export function StarRating({ numberOfStars }) {
  let arr = new Array(numberOfStars ? numberOfStars : 10).fill(0);


  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {


    setRating(currentIndex);

  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);

  }

  function handleMouseLeave() {
    setHover(rating);

  }


  return <div className="star-rating">


    {
      arr.map((star, index) => {
        let starIndex = index + 1
        return (< FaStar
          key={starIndex}
          className={(starIndex <= hover || rating) ? 'active' : 'inactive'}
          onClick={() => handleClick(starIndex)}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={() => handleMouseLeave()}

        />)
      })

    }

  </div>

}
