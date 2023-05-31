export default function wait(milliseconds = 500) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}