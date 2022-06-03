import React, { useEffect } from "react";

export default function AddMeal(props) {
  const [mealTitle, setMealTitle] = React.useState("");
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if (props.formData.text.length > 0) setMealTitle(props.formData.text);
    props.setFormData({ text: "" });
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
  console.log(props.formData.text.length);

  return (
    <>
      <form className="add-meal-form">
        <input
          type="text"
          placeholder="Enter Meal Name"
          className="Add-meal-form-input"
          name="text"
          value={props.formData.text}
          onChange={handleChange}
        />
        <span
          className="material-symbols-outlined plus-sign"
          onClick={handleClick}
        >
          add
        </span>
      </form>

      <div className="add-meal-modol">
        <div className="meal-section">
          <h1>{mealTitle}</h1>
          <hr />
        </div>
      </div>
    </>
  );
}
