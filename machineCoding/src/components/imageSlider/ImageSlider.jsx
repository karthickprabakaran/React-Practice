import { useState } from 'react';

import './styles.css';


export function ImageSlider() {

  const [current, setCurrent] = useState(0);

  function handleNext(){

    if(current < imgArray.length -1){
      setCurrent((prev) => prev +1);
    }else{
       setCurrent(0)
    }

  }

  function handlePrev(){
    if(current > 0){
      setCurrent((prev) => prev -1);
    }else{
      setCurrent(0)
    }
  }


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

  return (
    <>
      <div className="container">
        <img className='img' src={imgArray[current].url} index={imgArray[current].id} alt={imgArray[current].name} />
        <div className="inner-container">
        <button onClick={()=> handlePrev()}> prev</button>
        <button onClick={()=> handleNext()}> next </button>
        </div>
      </div>
    
    
    </>
  )



}
