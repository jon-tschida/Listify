import React from "react";
import Header from "./Header";

export default function Meals(props) {
  const handleClick = () => props.setIsAddMealsOpen((prevState) => !prevState);
  return (
    <div className="meals">
      <Header content={"meals"} css={"boxes-header"} />
      <div className="add-subtract">
        <p>Add a meal </p>
        <span
          className="material-symbols-outlined plus-sign"
          onClick={handleClick}
        >
          add
        </span>
      </div>
    </div>
  );
}
