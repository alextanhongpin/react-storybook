import Dinero from "dinero.js";
import { format, formatDistanceToNow } from "date-fns";
import classes from "./index.module.css";

// PriceHistory displays the product price history.
export default function PriceHistory({ data = [] }) {
  return (
    <div className={classes.container}>
      {data.map((item, index) => (
        <div
          key={index}
          className={[classes.row, classNameByStatus(item)].join(" ")}
        >
          <div className={classes.during}>
            {formatDate(item.from)} - {formatDate(item.to)}
          </div>
          <div className={classes.currency}>
            {formatCurrency(item)}
            {index > 0 && (
              <DeltaCurrency value={item} prevValue={data[index - 1]} />
            )}
            {item.status === "PENDING" && (
              <span>&nbsp;({formatDistanceToNow(item.from)}) </span>
            )}
          </div>
          <div>{item.status}</div>
        </div>
      ))}
    </div>
  );
}

function DeltaCurrency({ value, prevValue }) {
  if (!prevValue) return null;

  const delta = value.amount - prevValue.amount;
  if (delta === 0) {
    return null;
  }
  const isNegative = delta < 0;

  return (
    <span className={[classes.delta, isNegative && classes.negative].join(" ")}>
      {formatCurrencyNoUnit({
        currency: value.currency,
        amount: delta,
      })}
    </span>
  );
}

function formatDate(date) {
  return format(date, "dd MMM yyyy");
}

function formatCurrency({ amount, currency }) {
  return Dinero({ amount, currency }).toFormat();
}

function formatCurrencyNoUnit({ amount, currency }) {
  return Dinero({ amount, currency }).toFormat("0.00");
}

function classNameByStatus({ status }) {
  switch (status) {
    case "EXPIRED":
      return classes.isExpired;
    case "PENDING":
      return classes.isPending;
    case "ACTIVE":
      return classes.isActive;
    default:
      throw new Error(`unhandled status: ${status}`);
  }
}
