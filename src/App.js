import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import GroceryList from "./components/GroceryList";
import AddMeal from "./components/AddMeal";
import HowTo from "./components/HowTo";

export default function App() {
  //=================================
  //======== Setting state =========
  const [isHelpOpen, setIsHelpOpen] = React.useState(() => {
    let init;
    if (JSON.parse(localStorage.getItem("isHelpOpen")) === null) init = true;
    else init = JSON.parse(localStorage.getItem("isHelpOpen"));
    return init;
  });

  const [isAddMealsOpen, setIsAddMealsOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);
  const [mealTitle, setMealTitle] = React.useState("");

  const [createdMeals, setCreatedMeals] = React.useState(() => {
    let init =
      localStorage.getItem("createdMeals") === ""
        ? ""
        : JSON.parse(localStorage.getItem("createdMeals"));
    return init || [];
  });

  const [totalGroceryList, setTotalGroceryList] = React.useState(() => {
    let init;
    if (localStorage.getItem(`totalGroceryList`)) {
      init = localStorage.getItem(`totalGroceryList`).split(",");
    } else init = [];
    return init[0] === "" ? [] : init;
  });

  const [formData, setFormData] = React.useState({
    text: "",
    ingredients: "",
  });

  const [newItemForm, setNewItemForm] = React.useState({
    newItem: "",
  });

  //============================
  // saving state to local storage

  React.useEffect(() => {
    localStorage.setItem(`createdMeals`, JSON.stringify(createdMeals));
  }, [createdMeals]);

  React.useEffect(() => {
    localStorage.setItem(`totalGroceryList`, totalGroceryList);
  }, [totalGroceryList]);

  React.useEffect(() => {
    localStorage.setItem(`isHelpOpen`, isHelpOpen);
  }, [isHelpOpen]);
  //=============================

  // remove Ingredients from the addMeal Modal when the Modal is closed
  React.useEffect(() => {
    setIngredients([]);
    setMealTitle(``);
  }, [isAddMealsOpen, createdMeals]);

  // ============================
  // Open help
  const openHelp = () => setIsHelpOpen((prevState) => !prevState);

  return (
    <div className="area">
      <span className="material-symbols-outlined question" onClick={openHelp}>
        help
      </span>
      {isHelpOpen && <HowTo openHelp={openHelp} />}
      <div>
        <Header content={"Listify"} css={"main-header"} />
      </div>
      <div className="main">
        <Meals
          setIsAddMealsOpen={setIsAddMealsOpen}
          isAddMealsOpen={isAddMealsOpen}
          createdMeals={createdMeals}
          setCreatedMeals={setCreatedMeals}
          setTotalGroceryList={setTotalGroceryList}
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
            setIsAddMealsOpen={setIsAddMealsOpen}
          />
        )}
        <GroceryList
          totalGroceryList={totalGroceryList}
          setTotalGroceryList={setTotalGroceryList}
          newItemForm={newItemForm}
          setNewItemForm={setNewItemForm}
        />
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
