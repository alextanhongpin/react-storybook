import classes from "./index.module.css";
import { isDefined, isArray, isObject, isBoolean } from "types";

// DictTable is a component to allow easy display of key-value dictionary.
export function DictTable({ value, renderer }) {
  if (!isObject(value)) {
    return JSON.stringify(value);
  }

  const entries = Object.entries(value);
  if (!entries.length) return "No entries";

  function render(key, value) {
    const result = renderer?.(key, value);
    if (isDefined(result)) return result;
    if (isBoolean(value)) return JSON.stringify(value);
    if (isArray(value)) return JSON.stringify(value);

    return value;
  }

  return (
    <table className={classes.table}>
      <tbody className={classes.tbody}>
        {entries.map((row, rowIndex) => (
          <tr className={classes.tr}>
            <td key={`${rowIndex}-${row[0]}-key`} className={classes.td}>
              {row[0]}
            </td>
            {isObject(row[1]) ? (
              <DictTable key={`${rowIndex}-${row[0]}-value`} value={row[1]} />
            ) : (
              <td key={`${rowIndex}-${row[0]}-value`} className={classes.td}>
                {render(...row)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
