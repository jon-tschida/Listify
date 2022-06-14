import React from "react";

export default function Header(props) {
  return (
    <div className={props.css}>
      <p>{props.content}</p>
    </div>
  );
}
