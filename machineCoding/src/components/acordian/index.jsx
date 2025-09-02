import { useState } from "react"
import data from "./data";
import "./styles.css";


export default function Accordian() {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelect(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }


  function handleMultiSelection(getCurrentId) {
    let cpyMul = [...multiple];

    let index = cpyMul.indexOf(getCurrentId);

    if (index === -1) {
      cpyMul.push(getCurrentId);
    } else {
      cpyMul.splice(index, 1);
    }

    setMultiple(cpyMul);

  }

  console.log(selected, multiple);

  return <div className="wrapper">
    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}> Enable Multi Selection</button>
    <div className="accordian">
      {
        data.length > 0 ?
          data.map(item =>
            <div className="item">
              <div onClick={

                enableMultiSelection
                  ?
                  () => handleMultiSelection(item.id)
                  :
                  () => handleSingleSelect(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ?
                  multiple.indexOf(item.id) !== -1 &&
                  <div className="content">{item.answer}</div>
                  : selected === item.id && <div className="content">{item.answer}</div>
              }
            </div>
          )
          : <h2>No Data is Found </h2>
      }
    </div>
  </div >


}
