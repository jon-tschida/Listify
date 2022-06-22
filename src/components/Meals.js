import React from "react";
import Header from "./Header";

export default function Meals(props) {
  const handleClick = () => props.setIsAddMealsOpen((prevState) => !prevState);

  const handleMealClick = (index) => {
    props.setTotalGroceryList((prevList) =>
      [...prevList, props.createdMeals[index].ingredients].flat(2)
    );
  };

  const handleMealDelete = (index) => {
    props.setCreatedMeals((prevMeal) => prevMeal.filter((_, i) => i !== index));
  };

  return (
    <div className="meals">
      <Header content={"Meals"} css={"boxes-header"} />
      <div className="add-subtract">
        <p onClick={handleClick}>Add a meal </p>
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
            <div className="test" key={i}>
              <div
                className="created-meals"
                onClick={() => handleMealClick(i)}
                key={i}
              >
                <p className="cap">{el.mealTitle}</p>
                <hr />
                {el.ingredients.map((ingredient, index) => {
                  return (
                    <ul key={index}>
                      <li className="cap">{ingredient}</li>
                    </ul>
                  );
                })}
              </div>
              <span
                className="material-symbols-outlined remove-ingredient"
                onClick={() => handleMealDelete(i)}
              >
                delete
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
