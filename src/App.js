import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import GroceryList from "./components/GroceryList";
import AddMeal from "./components/AddMeal";

export default function App() {
  const [isAddMealsOpen, setIsAddMealsOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);
  const [mealTitle, setMealTitle] = React.useState("");
  const [createdMeals, setCreatedMeals] = React.useState([]);

  const [formData, setFormData] = React.useState({
    text: "",
    ingredients: "",
  });

  // remove Ingredients from the addMeal Modal when the Modal is closed
  React.useEffect(() => {
    setIngredients([]);
    setMealTitle(``);
  }, [isAddMealsOpen, createdMeals]);

  return (
    <div className="area">
      <div>
        <Header content={"List."} css={"main-header"} />
      </div>

      <div className="main">
        <Meals
          setIsAddMealsOpen={setIsAddMealsOpen}
          isAddMealsOpen={isAddMealsOpen}
          createdMeals={createdMeals}
          setCreatedMeals={setCreatedMeals}
        />
        {isAddMealsOpen && (
          <AddMeal
            formData={formData}
            setFormData={setFormData}
            ingredients={ingredients}
            setIngredients={setIngredients}
            mealTitle={mealTitle}
            setMealTitle={setMealTitle}
            setCreatedMeals={setCreatedMeals}
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
