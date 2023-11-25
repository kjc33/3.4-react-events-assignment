import React, { useState } from "react";
import PlusMinusButtons from "./PlusMinusButtons";
import PriceInput from "./PriceInput";

export default function Counter() {
  let [count, setCount] = useState(1);
  let [counterInfo, setCounterInfo] = useState({
    decrementCount: 0,
  });

  const [pricePerItem, setPricePerItem] = useState(0);
  const totalPrice = pricePerItem * count;

  const handlerChange = (value) => {
    setPricePerItem(value);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
      setCounterInfo({
        ...counterInfo,
        decrementCount: counterInfo.decrementCount + 1,
      });
    }
  };

  const resetBtn = () => {
    setCount(0);
    setCounterInfo({
      ...counterInfo,
      decrementCount: 0,
    });
    setPricePerItem(0);
  };

  return (
    <div className="order-details flex flex-column medium-gap">
      <div className="counter-controls flex flex-row align-items-center flex-wrap small-gap">
        <p className="quantity">
          Quantity: <span className="green">{count}</span>
        </p>
        <PlusMinusButtons className="counter-btn increment-btn" onClick={handlePlus} btnInput={"+"}></PlusMinusButtons>
        <PlusMinusButtons className="counter-btn decrement-btn" onClick={handleMinus} btnInput={"-"}></PlusMinusButtons>
      </div>
      <div className="price">
        <PriceInput label="Price: $" placeholder="Enter Price" value={pricePerItem} onChange={handlerChange} />
      </div>
      <div className="total-price">
        <p>Total: <span className="green">${totalPrice}</span></p>
      </div>
      <button className="reset-btn" onClick={resetBtn}>
        Reset
      </button>
    </div>
  );
}
