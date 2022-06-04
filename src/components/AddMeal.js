import React, { useEffect } from "react";

export default function AddMeal(props) {
  const [mealTitle, setMealTitle] = React.useState("");
  // const [ingredients, setIngredients] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if (props.formData.text.length > 0) setMealTitle(props.formData.text);
    if (props.formData.ingredients.length > 0)
      props.setIngredients((prevIngredients) => [
        ...prevIngredients,
        props.formData.ingredients,
      ]);
    props.setFormData({ text: "", ingredients: "" });
  }, [clicked]);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    props.setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleDelete = (index) => {
    props.setIngredients((prevIngred) =>
      prevIngred.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = (e) => e.preventDefault();
  return (
    <>
      <form className="add-meal-form" onSubmit={handleSubmit}>
        {mealTitle.length === 0 ? (
          <input
            type="text"
            placeholder="Enter Meal Name"
            className="Add-meal-form-input"
            name="text"
            value={props.formData.text}
            onChange={handleChange}
          />
        ) : (
          <input
            type="text"
            placeholder="Enter Ingredient"
            className="Add-meal-form-input"
            name="ingredients"
            value={props.formData.ingredients}
            onChange={handleChange}
          />
        )}
        <span
          className="material-symbols-outlined plus-sign"
          onClick={handleClick}
        >
          add_circle
        </span>
      </form>

      <div className="add-meal-modol">
        <div className="meal-section">
          <h1>{mealTitle}</h1>
          <hr />
          <div className="ingredients-list-container">
            {props.ingredients.map((ingredient, index) => (
              <ul key={index} className="ingredients-list">
                <li>
                  - {ingredient}
                  <span
                    className="material-symbols-outlined remove-ingredient"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
