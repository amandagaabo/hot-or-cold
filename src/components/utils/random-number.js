export default function randomNumber(min, max, rand=Math.random) {
  if (min < max) {
    return Math.floor(rand() * (max - min + 1)) + min;
  } else {
    throw new Error('invalid min and max values')
  }
}
