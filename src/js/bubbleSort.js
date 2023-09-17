import sleep from "./sleep";
import drawVisual from "./drawVisual";
import { stopSort } from "./data";
import endSort from "./endSort";

const bubbleSort = async (...args) => {
  let arr = args[0];
  let i = args[1];
  let j = args[2];
  if (!i) i = 0;
  if (!j) j = 1;
  for (i; i < arr.length; i++) {
    for (j; j < arr.length - i; j++) {
      if (!stopSort) {
        if (arr[j] < arr[j - 1]) {
          const temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          drawVisual(arr);
          await sleep(500);
        }
      } else {
        return [arr, i, j];
      }
    }
    j = 0;
  }
  endSort();
};

export default bubbleSort;
