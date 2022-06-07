import React from "react";
import Header from "./Header";

export default function GroceryList(props) {
  const handleDelete = (index) => {
    props.setTotalGroceryList((prevList) =>
      prevList.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <div className="grocery-list">
        <Header content={"grocery list"} css={"boxes-header"} />
        <div className="add-subtract">
          <p>Add an item </p>
          <span className="material-symbols-outlined plus-sign">
            add_circle
          </span>
        </div>
        <div className="created-grocery-list-container">
          <div className="created-grocery-list">
            {props.totalGroceryList.map((item, index) => {
              return (
                <ul key={index} className="ingredients-list cap">
                  <li key={index}>
                    {item}{" "}
                    <span
                      className="material-symbols-outlined remove-ingredient"
                      onClick={() => handleDelete(index)}
                    >
                      delete
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
