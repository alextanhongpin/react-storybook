import classes from "./index.module.css";

export function useValidate(curr = [], next = [], keyExtractor) {
  if (!Array.isArray(curr)) {
    return new Error("curr is not an array");
  }

  if (!Array.isArray(next)) {
    return new Error("next is not an array");
  }
  if (!next.length) {
    return new Error("Next is empty");
  }

  if (curr.length !== next.length) {
    return new Error("Inconsistent length for comparison");
  }

  if (keyExtractor) {
    const currKeys = curr.map(keyExtractor);
    const nextKeys = curr.map(keyExtractor);
    if (currKeys.length !== new Set(currKeys).size) {
      return new Error("Curr has duplicate keys");
    }
    if (nextKeys.length !== new Set(nextKeys).size) {
      return new Error("Next has duplicate keys");
    }
    if (JSON.stringify(currKeys) !== JSON.stringify(nextKeys)) {
      return new Error("Inconsistent key order for comparison");
    }
  }

  return null;
}

export function TrackChangesTable({ curr = [], next = [], keyExtractor }) {
  const error = useValidate(curr, next, keyExtractor);
  if (error) return <div>{error}</div>;

  const head = Object.keys(next[0]);
  const nextBody = next.map(Object.values);
  const currBody = curr.map(Object.values);

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {head.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {nextBody.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <TrackChangesTableCell
                value={currBody[rowIndex][colIndex]}
                nextValue={col}
                key={`${rowIndex}:${colIndex}`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function TrackChangesTableCell({ value, nextValue }) {
  if (value !== nextValue) {
    return (
      <td className={classes.tooltip}>
        {nextValue.toString()}
        <div className={classes.tooltipText}>
          {`Changed from "${value}" to "${nextValue}"`}
        </div>
      </td>
    );
  }
  return <td>{nextValue.toString()}</td>;
}
