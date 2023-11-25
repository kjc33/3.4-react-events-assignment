import React from "react";

export default function PlusMinusButtons({ btnInput, btnClass, onClick }) {
  return (
    <button className={btnClass} onClick={onClick}>
      {btnInput}
    </button>
  );
}
