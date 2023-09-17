const drawVisual = (arr) => {
  const max = Math.max(...arr);
  const sortVisualizer = document.querySelector("#sortVisualizer");
  sortVisualizer.innerHTML = "";
  arr.forEach((num) => {
    const div = document.createElement("div");
    sortVisualizer.appendChild(div);
    div.style.height = `${(num / (max * 1.1)) * 100}%`;
    div.innerText = num;
  });
};

export default drawVisual;
