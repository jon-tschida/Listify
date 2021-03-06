import React from "react";

export default function HowTo(props) {
  return (
    <div className="howTo ">
      <span
        className="material-symbols-outlined close"
        onClick={props.openHelp}
      >
        close
      </span>
      <h1>How to use Listify</h1>
      <hr />
      <p>
        Listify is here to make creating grocery lists easier. Listify does this
        by adding the ingredients from your meals directly into the grocery
        list!
        <br />
        <br />
        To get started, create a new a new meal by clicking the "+" sign in left
        box with the "Meals" title. <br /> <br />
        This will open another section for you to create your meal. In this
        area, you can give your meal a title and ingredients. Once you have your
        meal titled and ingredients added, click "Complete Meal" to add it to
        your meal lists.
        <br />
        <br />
        Once you have some meals created, just click or tap any of the
        meals, and the ingredients will be added to your grocery list! No more
        thinking through your meals for the week and what you need to shop for,
        just Listify them!
        <br />
        <br />
        Need to add just a few, individual items to the list? Just click the "Add an item" button in the "Grocery list" menu to add individual items.
        <br />
        <br />
        All of your meals save from session to session, you only have to create
        your meals once.
        <br />
        <br />
        (This can be opened anytime from the "?" icon in the top left)
      </p>
    </div>
  );
}
