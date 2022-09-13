export function isBoolean(unknown) {
  return typeof unknown === "boolean";
}

export function isArray(unknown) {
  return Array.isArray(unknown);
}

export function isObject(unknown) {
  return unknown === Object(unknown) && !isArray(unknown);
}

export function isDefined(unknown) {
  return unknown !== undefined && unknown !== null;
}
