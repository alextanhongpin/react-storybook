import { isArray, isBoolean, isObject, isDefined } from "types";
import classes from "./index.module.css";

export function DiffTable({ curr, next }) {
  const diffs = useDiff(curr, next);

  return (
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Old</th>
          <th>New</th>
        </tr>
      </thead>
      <tbody>
        {diffs.map((diff) => {
          if (diff.isModified) {
            return (
              <tr>
                <td>{diff.key}</td>
                <td className={classes.isRemoved}>-{diff.curr}</td>
                <td className={classes.isAdded}>+{diff.next}</td>
              </tr>
            );
          }

          if (diff.isAdded) {
            return (
              <tr>
                <td>{diff.key}</td>
                <td>{diff.curr}</td>
                <td className={classes.isAdded}>+{diff.next}</td>
              </tr>
            );
          }

          if (diff.isRemoved) {
            return (
              <tr>
                <td>{diff.key}</td>
                <td>{diff.curr}</td>
                <td className={classes.isRemoved}>-{diff.next}</td>
              </tr>
            );
          }

          // Unchanged.
          return (
            <tr>
              <td>{diff.key}</td>
              <td>{diff.curr}</td>
              <td>{diff.next}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function useDiff(curr = {}, next = {}) {
  const currKeys = Object.keys(curr);
  const nextKeys = Object.keys(next);
  const allKeys = Array.from(new Set([...currKeys, ...nextKeys]));

  return allKeys.map((key) => {
    const currValue = curr[key];
    const nextValue = next[key];
    const hasCurr = isDefined(currValue);
    const hasNext = isDefined(nextValue);
    const isAdded = !hasCurr && hasNext;
    const isRemoved = hasCurr && !hasNext;
    const isModified = !isAdded && !isRemoved && currValue !== nextValue;
    return {
      key,
      curr: `${currValue}`,
      next: `${nextValue}`,
      isModified,
      isRemoved,
      isAdded,
    };
  });
}
