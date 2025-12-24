
import React, {useState} from 'react'
import { CiStar } from "react-icons/ci";
import './styles.css'


export default function StarRating({numberOfStars}) {
  let starCount = numberOfStars || 5;

  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);

    let starArr = new Array(starCount).fill(0);

  function handleHover(index){
    setSelected(0);
    setHovered(index);
    console.log(index);
  }

  function handleClick(index) {
    setSelected(index);
    console.log("selected index" + index);
    
  }

  return (
    <div>

        <h1>this is the Star Rating </h1>
        {starArr.map((star,i)=> {
          let index = i + 1;
            return (
                <span key={i} 
                onMouseEnter={()=> handleHover(index)}
                onClick={()=> handleClick(index)}
                onMouseLeave={()=> setHovered(0)}
                ><CiStar className= {index <= selected || index <= hovered ? "active" : ""} /></span>
            )
        })}

      
    </div>
  )
}
