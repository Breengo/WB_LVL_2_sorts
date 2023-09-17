import sleep from "./sleep";
import drawVisual from "./drawVisual";
import { stopSort } from "./data";
import endSort from "./endSort";

const combSort = async (...args) => {
  const factor = 1.247;

  console.log(args);

  let arr = args[0];
  let step = args[1];
  let i = args[2];
  if (!i) i = 0;
  if (!step) step = arr.length - 1;

  while (step >= 1) {
    for (i = 0; i + step < arr.length; ++i) {
      if (!stopSort) {
        if (arr[i] > arr[i + step]) {
          const temp = arr[i];
          arr[i] = arr[i + step];
          arr[i + step] = temp;
          drawVisual(arr);
          await sleep(500);
        }
      } else {
        return [arr, step, i];
      }
    }
    step = Math.floor(step / factor);
  }
  endSort();
};

export default combSort;
