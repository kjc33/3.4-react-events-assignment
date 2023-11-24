import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let [counterInfo, setCounterInfo] = useState({
    incrementCount: 0,
    decrementCount: 0,
  });
  // const [validation, setValidation] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
    setCounterInfo({
      ...counterInfo,
      incrementCount: counterInfo.incrementCount + 1,
    });
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
      incrementCount: 0,
    });
  };

  return (
    <div className="counter flex flex-column medium-gap">
      <div className="counter-controls flex flex-row align-items-center flex-wrap small-gap">
        <button className="counter-btn increment-btn" onClick={handlePlus}>
          +
        </button>
        <span className="green">{count}</span>
        <button className="counter-btn decrement-btn" onClick={handleMinus}>
          -
        </button>
      </div>
      <div className="counter-increment-decrement flex flex-wrap medium-gap">
        <p>Increments: <span className="green">{counterInfo.incrementCount}</span></p>
        <p>Decrements: <span className="green">{counterInfo.decrementCount}</span></p>
      </div>
      <button className="reset-btn" onClick={resetBtn}>
        Reset
      </button>
    </div>
  );
}
