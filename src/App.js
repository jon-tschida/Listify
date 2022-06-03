import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import GroceryList from "./components/GroceryList";
import AddMeal from "./components/AddMeal";

export default function App() {
  const [isAddMealsOpen, setIsAddMealsOpen] = React.useState(false);

  const [formData, setFormData] = React.useState({
    text: "",
  });

  return (
    <div className="area">
      <div>
        <Header content={"Lst."} css={"main-header"} />
      </div>

      <div className="main">
        <Meals setIsAddMealsOpen={setIsAddMealsOpen} />
        {isAddMealsOpen && (
          <AddMeal formData={formData} setFormData={setFormData} />
        )}
        <GroceryList />
      </div>
      {/* Needed for animation  */}
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
