export function appendingElements(innerObj) {
  let appendedElement = document.createElement("div");

  for (let i = 0; i < innerObj.length; i++) {
    appendedElement.appendChild(innerObj[i]);
  }

  return appendedElement;
}
