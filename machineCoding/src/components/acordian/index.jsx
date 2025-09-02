import { useState } from "react"
import data from "./data";


export default function Accordian() {

  const [selected, setSelected] = useState(null);


  function handleSingleSelect(getCurrentId) {

    setSelected(getCurrentId === selected ? null : getCurrentId);

  }

  return <div className="wrapper">

    <div className="accordian">

      {
        data.length > 0 ?

          data.map(item =>
            <div className="item">
              <div onClick={() => handleSingleSelect(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                selected === item.id ?
                  <div className="content">{item.answer}</div>
                  : null
              }

            </div>
          )


          : <h2>No Data is Found </h2>
      }

    </div>

  </div>


}
