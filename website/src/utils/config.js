export function cardWidth() {
  let width = getWidth();
  let cardWidth = width * 0.7;
  if (cardWidth > 900) {
    return 900;
  }
  return cardWidth;
}
// common functions
export function getHeight() {
  //Returns Browser inner height
  return window.innerHeight;
}

export function getWidth() {
  //Returns Browser innerWidth
  return window.innerWidth;
}

export const OpenSans = "'Open Sans', sans-serif";
