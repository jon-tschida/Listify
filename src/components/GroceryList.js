import React from "react";
import Header from "./Header";

export default function GroceryList(props) {
  const [strikeThroughItem, setStrikeThroughItem] = React.useState(false);

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
                  {item.map((list, i) => {
                    return (
                      <li key={i}>
                        {list}
                        <span className="material-symbols-outlined remove-ingredient">
                          delete
                        </span>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
