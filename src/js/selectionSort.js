import { stopSort } from "./data";
import drawVisual from "./drawVisual";
import endSort from "./endSort";
import sleep from "./sleep";

const selectionSort = async (...args) => {
  let arr = args[0];
  let i = args[1];
  if (!i) i = 0;
  for (i; i < arr.length; i++) {
    if (!stopSort) {
      let min = arr[i];
      let minInd = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < min) {
          min = arr[j];
          minInd = j;
        }
      }
      const temp = arr[minInd];
      arr[minInd] = arr[i];
      arr[i] = temp;
      drawVisual(arr);
      await sleep(500);
    } else {
      return [arr, i];
    }
  }
  endSort();
};

export default selectionSort;
