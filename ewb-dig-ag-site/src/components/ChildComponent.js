import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler(props.name)}>
        Greet Parent
      </button>
    </div>
  );
}
