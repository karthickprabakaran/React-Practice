import { useState } from "react"
import data from "./data";
import "./styles.css";

export default function Accordian() {

  const [selected, setSelected] = useState(new Set());


  function handleSingleSelection(index) {
    setSelected((prev) => {
      let newSet = new Set(prev);

      if(!newSet.has(index)){
        newSet.add(index);
      }else{
        newSet.delete(index);
      }

      return newSet;


    });
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data.length === 0 ? (
          <h1>There is no Data to display</h1>
        ) : (
          data.map((item, index) => (
            <div className="item">
            <div onClick={ () => handleSingleSelection(item.id)} className="title" key={index}>
              <h3>{item.question}</h3>
              <span>+</span>
              {selected.has(item.id) ?
               <div className="content">{item.answer}</div>
              :  null
            }
            </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}