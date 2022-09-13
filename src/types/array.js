export function swap(arr, i, j) {
  const value = arr[i];
  arr[i] = arr[j];
  arr[j] = value;
}

export function removeAtIndex(arr, i) {
  if (i < 0 || i > arr.length - 1) return;
  const value = arr[i];
  arr.splice(i, 1); // Remove only one item
  return value;
}

export function insertAtIndex(arr, i, value) {
  if (i < 0) return;
  arr.splice(i, 0, value); // Deleting 0 item
}
