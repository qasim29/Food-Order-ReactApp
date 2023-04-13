
import React, { useState } from 'react'

function MealCard(props) {
    
    const [amount, setAmount] = useState(0)
    
    const dataHandle = () =>{
      setAmount((prevState) => prevState+1)
    }

    return (
    <>
      {" "}
      <div className="flex justify-between p-5 w-full ">
        <div className="">
          <h1 className="font-bold text-lg">{props.item}</h1>
          <i>{props.description}</i>
          <h1 className="font-bold text-table-orange">
            <span>$</span>
            {props.price}
          </h1>
        </div>
        <div className="grid gap-1">
          <div className="font-bold">
            Amount <span>{amount}</span>
          </div>
          <button className="normal-case text-white bg-table-orange hover:bg-button-gray rounded-xl px-5 py-1 text-sm font-bold" onClick={dataHandle}>
            + Add
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default MealCard;