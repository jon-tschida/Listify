import React from "react";
import Header from "./Header";

export default function Meals(props) {
  const handleClick = () => props.setIsAddMealsOpen((prevState) => !prevState);

  const handleMealClick = (index) => {
    props.setTotalGroceryList((prevList) =>
      [...prevList, props.createdMeals[index].ingredients].flat(2)
    );
  };
  return (
    <div className="meals">
      <Header content={"Meals"} css={"boxes-header"} />
      <div className="add-subtract">
        <p>Add a meal </p>
        <span
          className="material-symbols-outlined plus-sign"
          onClick={handleClick}
        >
          {props.isAddMealsOpen ? `remove` : `add_circle`}
        </span>
      </div>

      <div className="created-meals-list-container">
        {props.createdMeals.map((el, i) => {
          return (
            <div
              className="created-meals"
              onClick={() => handleMealClick(i)}
              key={i}
            >
              <h1>{el.mealTitle}</h1>
              <hr />
              {el.ingredients.map((ingredient, index) => {
                return (
                  <ul key={index}>
                    <li>{ingredient}</li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
