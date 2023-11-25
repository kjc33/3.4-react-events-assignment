import React from "react";

export default function PriceInput({ label, value, onChange }) {
  
    const handlerChange = (event) => {
        onChange(event.target.value)
    }
  
    return (
    <>
      <label>{label}</label>
      <input className="price" value={value} onChange={handlerChange} />
    </>
  );
}
