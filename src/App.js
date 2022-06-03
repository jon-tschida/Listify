import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import GroceryList from "./components/GroceryList";

export default function App() {
  return (
    <div className="area">
      <div>
        <Header content={"easy grocery"} css={"main-header"} />
      </div>

      <div className="main">
        <Meals />
        <GroceryList />
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
