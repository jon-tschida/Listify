import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import GroceryList from "./components/GroceryList";
import AddMeal from "./components/AddMeal";

export default function App() {
  const [isAddMealsOpen, setIsAddMealsOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);

  const [formData, setFormData] = React.useState({
    text: "",
    ingredients: "",
  });

  // remove Ingredients from the addMeal Modal when the Modal is closed
  React.useEffect(() => {
    setIngredients([]);
  }, [isAddMealsOpen]);

  return (
    <div className="area">
      <div>
        <Header content={"List."} css={"main-header"} />
      </div>

      <div className="main">
        <Meals
          setIsAddMealsOpen={setIsAddMealsOpen}
          isAddMealsOpen={isAddMealsOpen}
        />
        {isAddMealsOpen && (
          <AddMeal
            formData={formData}
            setFormData={setFormData}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
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
