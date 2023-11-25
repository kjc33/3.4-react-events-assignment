import React from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  return (
    <main>
      <section className="counter-app">
        <div className="inner-container ">
          <h1>Price Input</h1>
          <Counter />
        </div>
      </section>
    </main>
  );
}
