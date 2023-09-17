import "./style.css";
import shakeSort from "./js/shakeSort";
import bubbleSort from "./js/bubbleSort";
import { changeStopSort, changeToggle } from "./js/data";
import drawVisual from "./js/drawVisual";
import combSort from "./js/combSort";
import insertSort from "./js/insertSort";
import selectionSort from "./js/selectionSort";
import endSort from "./js/endSort";
import { toggle } from "./js/data";

const sortList = [bubbleSort, shakeSort, combSort, insertSort, selectionSort];

const arr = [];
let choiced = 0;
let changedSort = false;

const input = document.querySelector("input");
const addBtn = document.querySelector("#addNumber");
const arrayElem = document.querySelector("#array");
addBtn.addEventListener("click", () => {
  const value = Number(input.value);
  if (!isNaN(value)) {
    arr.push(value);
  }
  input.value = "";
  arrayElem.innerText = `[${arr}]`;
  drawVisual(arr);
});

const sortOptions = document
  .querySelector("#sortOptions")
  .querySelectorAll("button");
sortOptions.forEach((option, index) =>
  option.addEventListener("click", () => {
    sortOptions.forEach((option) => option.classList.remove("active"));
    option.classList.add("active");
    choiced = index;
    changeStopSort(true);
    changeToggle(false);
    sortController.innerText = "Начать сортировку";
    drawVisual(arr);
    stopMoment = null;
    changedSort = true;
  })
);

drawVisual(arr);

let stopMoment;

const sortController = document.querySelector("#sortController");
sortController.addEventListener("click", async () => {
  if (changedSort) {
    stopMoment = null;
    changedSort = false;
  }
  if (!toggle) {
    changeStopSort(false);
    changeToggle(true);
    sortController.innerText = "Остановить сортировку";
    if (stopMoment) {
      sortList[choiced](...stopMoment);
    } else {
      stopMoment = await sortList[choiced]([...arr]);
    }
  } else endSort();
});
