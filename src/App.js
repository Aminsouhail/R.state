import React from "react";
import { Button,Modal } from "react-bootstrap";
import {useState} from 'react';

function Child({handleClick}) {
  return (
    <div>
      <Button variant="primary" onClick={event => handleClick(event, 1)}>
        Click
      </Button>
    </div>
  );
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = (event, num) => {
    console.log(event.target);

    setCount(current => current + num);
  };

  return (
    <div>
      <Child handleClick={handleClick} />

      <h2>Count: {count}</h2>
    </div>
  );
}