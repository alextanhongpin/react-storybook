import { useState, useRef } from "react";
import { swap, deepClone, removeAtIndex, insertAtIndex } from "types";
import classes from "./index.module.css";

// https://ux.stackexchange.com/questions/112415/best-way-to-reorder-long-list-of-items
// How to perform sorting in a long list.
export function Layer({ data = [] }) {
  const ref = useRef(data);
  const [list, setList] = useState(data);

  const min = 0;
  const max = list.length - 1;

  function handleReset() {
    setList(ref.current);
  }

  function handleIncrement(index) {
    const data = deepClone(list);
    swap(data, index, index + 1);
    setList(data);
  }

  function handleDecrement(index) {
    const data = deepClone(list);
    swap(data, index, index - 1);
    setList(data);
  }

  function handleChange(evt, originalIndex) {
    const index = Math.min(
      Math.max(0, evt.currentTarget.valueAsNumber - 1),
      list.length
    );
    const data = deepClone(list);
    const value = removeAtIndex(data, originalIndex);
    insertAtIndex(data, index, value);
    setList(data);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      {list.map((value, index) => (
        <div key={value}>
          {index + 1} {value}
          <button
            onClick={(evt) => handleDecrement(index)}
            disabled={index === min}
          >
            Up
          </button>
          <input
            type="number"
            className={classes.input}
            value={index + 1}
            onChange={(evt) => handleChange(evt, index)}
          />
          <button
            onClick={(evt) => handleIncrement(index)}
            disabled={index === max}
          >
            Down
          </button>
        </div>
      ))}
    </div>
  );
}
