import { isArray, isBoolean, isObject } from "types";

export function CSVTable({ value = [] }) {
  if (!value?.length) {
    console.error("DiffTable: cannot compare two arrays of different length.");
    return null;
  }

  function render(value) {
    if (isBoolean(value) || isArray(value) || isObject(value)) {
      return JSON.stringify(value);
    }

    return value;
  }

  const head = Object.keys(value[0]);
  const body = value.map(Object.values);

  return (
    <table>
      <thead>
        <tr>
          {head.map((col, index) => (
            <th key={`${col}-${index}`}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, rowIndex) => (
          <tr>
            {row.map((col, colIndex) => (
              <td>{render(col)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
