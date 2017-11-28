export default function randomNumber(min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw new Error('invalid min and max values')
  }
}
