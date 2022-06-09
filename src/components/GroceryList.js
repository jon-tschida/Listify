import React from "react";
import Header from "./Header";

export default function GroceryList(props) {
  const [openAddAnItem, setOpenAddAnItem] = React.useState(false);

  const handleDelete = (index) => {
    props.setTotalGroceryList((prevList) =>
      prevList.filter((_, i) => i !== index)
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    props.setNewItemForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleNewItem = (e) => {
    e.preventDefault();

    if (props.newItemForm.newItem)
      props.setTotalGroceryList((prevList) => [
        ...prevList,
        props.newItemForm.newItem,
      ]);
  };

  const handleEnableAddItem = () => setOpenAddAnItem((prevState) => !prevState);

  const handleClear = () => props.setTotalGroceryList([]);

  // Clears add an item field when we add a new item via the form
  React.useEffect(() => {
    props.setNewItemForm({ newItem: "" });
  }, [props.totalGroceryList]);

  return (
    <>
      <div className="grocery-list">
        <Header content={"Grocery list"} css={"boxes-header"} />
        <div className="add-subtract">
          <p>Add an item </p>
          <span
            className="material-symbols-outlined plus-sign"
            onClick={handleEnableAddItem}
          >
            {openAddAnItem ? `remove_circle` : `add_circle`}
          </span>
        </div>
        {/* Conditionally render the add-an-item form */}
        {openAddAnItem && (
          <div className="add-item">
            <form className="add-meal-form" onSubmit={handleNewItem}>
              {
                <input
                  type="text"
                  placeholder="Enter Item"
                  className="Add-meal-form-input"
                  name="newItem"
                  value={props.newItemForm.newItem}
                  onChange={handleChange}
                />
              }
              <span
                className="material-symbols-outlined plus-sign"
                onClick={handleNewItem}
              >
                add_circle
              </span>
            </form>
          </div>
        )}
        <div className="created-grocery-list-container">
          <div className="created-grocery-list">
            {props.totalGroceryList.map((item, index) => {
              return (
                <ul key={index} className="ingredients-list cap">
                  <li key={index}>
                    {item}
                    <span
                      className="material-symbols-outlined remove-ingredient"
                      onClick={() => handleDelete(index)}
                    >
                      delete
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        {props.totalGroceryList.length > 0 && (
          <div className="add-meal">
            <h4>Clear List</h4>
            <span
              className="material-symbols-outlined remove-ingredient"
              onClick={handleClear}
            >
              delete
            </span>
          </div>
        )}
      </div>
    </>
  );
}
