import sleep from "./sleep";
import { stopSort } from "./data";
import drawVisual from "./drawVisual";
import endSort from "./endSort";

const shakeSort = async (...args) => {
  let arr = args[0];
  let left = args[1];
  let right = args[2];
  if (!left) left = 0;
  if (!right) right = arr.length - 1;

  while (left <= right) {
    for (let i = right; i > left; --i) {
      if (!stopSort) {
        if (arr[i - 1] > arr[i]) {
          const temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          drawVisual(arr);
          await sleep(500);
        }
      } else {
        return [arr, left, right];
      }
    }
    ++left;
    for (let i = left; i < right; ++i) {
      if (!stopSort) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          drawVisual(arr);
          await sleep(500);
        }
      } else {
        return [arr, left, right];
      }
    }
    --right;
  }
  endSort();
};

export default shakeSort;
