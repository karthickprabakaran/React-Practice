import { useState } from 'react';

import './styles.css';


export function ImageSlider() {



  let imgArray = [{
    id: 1,
    name: "car",
    url: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg'
  },
  {
    id: 2,
    name: "bike",
    url: 'https://images.pexels.com/photos/33798195/pexels-photo-33798195.jpeg'

  },
  {
    id: 3,
    name: "Truck",
    url: 'https://images.pexels.com/photos/992069/pexels-photo-992069.jpeg'
  }]



  const [current, setCurrent] = useState(0);



  function handlePrev() {


    if (current >= 1) {
      setCurrent((prev) => prev - 1);
      console.log(current);
    }
  }

  function handleNext() {
    if (current < imgArray.length - 1) {
      setCurrent((prev) => prev + 1);
      console.log(current);

    }

  }

  return (

    <>


      <div className="container">
        <h2>Image Slider</h2>

        <a href={imgArray[current].url} target='_blank'><img className="img" src={imgArray[current].url} alt="" /></a>


        <div className="marker">        {
          imgArray.map((item, index) => <h4
            className={index == current ? 'active' : null}>0</h4>)
        }
        </div>


        <div className="inner-container">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>next</button>

        </div>



      </div>




    </>


  )
}
