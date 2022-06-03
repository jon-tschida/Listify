import React from "react";

export default function AddMeal(props) {
  function handleChange(event) {
    const { name, value } = event.target;

    props.setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

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
        <span className="material-symbols-outlined plus-sign">add</span>
      </form>
      <div className="add-meal-modol">
        <div className="meal-section">
          <h1>{props.formData.text}</h1>
          <hr />
        </div>
      </div>
    </>
  );
}
