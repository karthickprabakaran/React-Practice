import React from 'react'
import { useState } from 'react';
import data from "./data.js"
import './style.css';
const Accordian = () => {


  const [selected, setSelected] = useState(null);
  const [multiselection, setmultiSelection] = useState(false);

  function handleSelected(clickedId){

    if(clickedId === selected){
      setSelected(null);
    }else{
      setSelected(clickedId);
    }
  }

  function handleMultiselection(){
    setmultiSelection((prev) => {
      return !prev;
    })
  }

  return (
    <div className='wrapper'>
      <div className="accordian">
      <button onClick={()=> handleMultiselection}>Enable MultiSelection</button>
        {
        data && data.length > 0 ?
          data.map((dat)=> {
            return (
              <div className='item' key={dat.id}>
                <div onClick={()=> handleSelected(dat.id)} className="title">{dat.question}
                <span onClick={()=> {handleSelected(dat.id)}}>+</span>
                </div>
                {dat.id === selected ? 
                <div className="answer">{dat.answer}</div>
              : null}
              </div>
            )
          })
          : 
          <h1>there is no data to preview</h1>
        }
      </div>
    </div>
  )
}

export default Accordian;
