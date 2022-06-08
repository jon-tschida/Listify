import React from "react";
import Header from "./Header";

export default function Meals(props) {
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleClick = () => props.setIsAddMealsOpen((prevState) => !prevState);

  const handleMealClick = (index) => {
    if (isDeleting === false) {
      props.setTotalGroceryList((prevList) =>
        [...prevList, props.createdMeals[index].ingredients].flat(2)
      );
    }
  };

  const handleMealDelete = (index) => {
    console.log(index);
    props.setCreatedMeals((prevMeal) => prevMeal.filter((_, i) => i !== index));
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
              <h1>
                {el.mealTitle}
                <span
                  className="material-symbols-outlined remove-ingredient"
                  onClick={() => handleMealDelete(i)}
                  onMouseEnter={() => setIsDeleting(true)}
                  onMouseLeave={() => setIsDeleting(false)}
                >
                  delete
                </span>
              </h1>
              <hr />
              {el.ingredients.map((ingredient, index) => {
                return (
                  <ul key={index}>
                    <li className="cap">{ingredient}</li>
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
