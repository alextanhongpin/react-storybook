import { isDefined } from "./assertion";

export function deepClone(data) {
  if (!isDefined(data)) return data;

  return JSON.parse(JSON.stringify(data));
}
