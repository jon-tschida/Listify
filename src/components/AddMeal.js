import React from "react";

export default function AddMeal(props) {
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if (props.formData.text.length > 0) props.setMealTitle(props.formData.text);
    if (props.formData.ingredients.length > 0)
      props.setIngredients((prevIngredients) => [
        ...prevIngredients,
        props.formData.ingredients,
      ]);
    props.setFormData({ text: "", ingredients: "" });
  }, [clicked]);

  const handleClick = (e) => {
    setClicked((prevState) => !prevState);
    handleSubmit(e);
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

  const handleAddMeal = () => {
    props.setCreatedMeals((prevCreatedMeal) => [
      ...prevCreatedMeal,
      { mealTitle: props.mealTitle, ingredients: props.ingredients },
    ]);
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleClose = () => props.setIsAddMealsOpen((prevState) => !prevState);

  return (
    <>
      <form className="add-meal-form" onSubmit={handleClick}>
        {props.mealTitle.length === 0 ? (
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
          <p>{props.mealTitle}</p>
          {props.mealTitle && <hr />}
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
        <div>
          <div className="add-meal">
            <p>Add Meal</p>
            <span
              className="material-symbols-outlined plus-sign"
              onClick={handleAddMeal}
            >
              add_circle
            </span>
          </div>
          <hr />
          <div className="add-meal-close">
            <p>Close</p>
            <span
              className="material-symbols-outlined plus-sign"
              onClick={handleClose}
            >
              remove
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
