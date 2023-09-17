import { stopSort } from "./data";
import drawVisual from "./drawVisual";
import endSort from "./endSort";
import sleep from "./sleep";

const insertSort = async (...args) => {
  let arr = args[0];
  let i = args[1];
  if (!i) i = 1;

  for (i; i < arr.length; i++) {
    if (!stopSort) {
      const x = arr[i];
      let j = i;
      while (j > 0 && arr[j - 1] > x) {
        arr[j] = arr[j - 1];
        --j;
      }
      arr[j] = x;
      drawVisual(arr);
      await sleep(500);
    } else {
      return [arr, i];
    }
  }
  endSort();
};

export default insertSort;
