import React from "react";
import Header from "./Header";

export default function GroceryList(props) {
  return (
    <>
      <div className="grocery-list">
        <Header content={"grocery list"} css={"boxes-header"} />
        <div className="created-grocery-list-container"></div>
      </div>
    </>
  );
}
