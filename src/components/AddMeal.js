import React from "react";

export default function AddMeal(props) {
  const [clicked, setClicked] = React.useState(false);

  let { text, ingredients } = props.formData;
  let {
    setIngredients,
    setFormData,
    setCreatedMeals,
    setMealTitle,
    mealTitle,
  } = props;

  React.useEffect(() => {
    if (text.length > 0) setMealTitle(text);
    if (ingredients.length > 0)
      setIngredients((prevIngredients) => [...prevIngredients, ingredients]);
    setFormData({ text: "", ingredients: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  const handleClick = (e) => {
    setClicked((prevState) => !prevState);
    handleSubmit(e);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleDelete = (index) => {
    setIngredients((prevIngred) => prevIngred.filter((_, i) => i !== index));
  };

  const handleAddMeal = () => {
    setCreatedMeals((prevCreatedMeal) => [
      ...prevCreatedMeal,
      { mealTitle: mealTitle, ingredients: props.ingredients },
    ]);
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleClose = () => props.setIsAddMealsOpen((prevState) => !prevState);

  return (
    <>
      <div className="add-meal-modol">
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
            <p onClick={handleAddMeal}>Add Meal</p>
            <span
              className="material-symbols-outlined plus-sign"
              onClick={handleAddMeal}
            >
              add_circle
            </span>
          </div>
          <hr className="add-close-hr" />
          <div className="add-meal-close">
            <p onClick={handleClose}>Close</p>
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
