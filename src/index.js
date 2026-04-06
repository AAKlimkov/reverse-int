export default function reverse(n) {
  return Math.sqrt(n * n)
    .toString()
    .split('')
    .reverse()
    .join('');
}
