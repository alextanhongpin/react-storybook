import { isDefined } from "types";
import classes from "./index.module.css";

function beforeClassName({ isModified }) {
  if (isModified) return classes.isRemoved;

  return;
}

function afterClassName({ isModified, isRemoved, isAdded }) {
  if (isRemoved) return classes.isRemoved;
  if (isAdded || isModified) return classes.isAdded;

  return;
}
// DiffTable displays the difference between two data to allow users to visualize the changes better.
// Reference: https://www.pcworld.com/article/403066/can-excel-track-changes-how-to-add-track-changes-to-the-ribbon-menu.html
export function DiffTable({ curr, next }) {
  const diffs = useDiff(curr, next);

  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className={classes.tr}>
          <th className={classes.th}>Field</th>
          <th className={classes.th}>Old</th>
          <th className={classes.th}>New</th>
        </tr>
      </thead>
      <tbody>
        {diffs.map((diff) => {
          return (
            <tr key={diff.key} className={classes.tr}>
              <td className={classes.td}>{diff.key}</td>
              <td className={[classes.td, beforeClassName(diff)].join(" ")}>
                {diff.curr}
              </td>
              <td className={[classes.td, afterClassName(diff)].join(" ")}>
                {diff.next}
              </td>
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
      curr: hasCurr ? `${currValue}` : "-",
      next: hasNext ? `${nextValue}` : "-",
      isModified,
      isRemoved,
      isAdded,
    };
  });
}
