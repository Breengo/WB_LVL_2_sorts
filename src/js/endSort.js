import { changeStopSort, changeToggle } from "./data";

const endSort = () => {
  const sortController = document.querySelector("#sortController");
  changeToggle(false);
  changeStopSort(true);
  sortController.innerText = "Начать сортировку";
};

export default endSort;
