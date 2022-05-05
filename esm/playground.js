const modes = [
  "image1",
  "image2",
  "add",
  "subtract",
  "inverse-subtract",
  "multiply",
  "divide",
  "inverse-divide",
  "lighten",
  "darken",
  "random",
  "0",
  "128",
  "255",
];

let rFunc = null;
let gFunc = null;
let bFunc = null;

const canvasOne = document.querySelector("#canvas-one");
const canvasTwo = document.querySelector("#canvas-two");
const canvasThree = document.querySelector("#canvas-three");

const contextOne = canvasOne.getContext("2d");
const contextTwo = canvasTwo.getContext("2d");
const contextThree = canvasThree.getContext("2d");

const startEl = document.querySelector("#run");

const setAll = document.querySelector("#setAll");
const rSelect = document.querySelector("#rSelect");
const gSelect = document.querySelector("#gSelect");
const bSelect = document.querySelector("#bSelect");

const randomInRange = function (max) {
  return Math.floor(Math.random() * max);
};

const applyMode = function (mode, data, data2) {
  const perc = data / 255;
  const perc2 = data2 / 255;

  switch (mode) {
    case "image1":
      return data;

    case "image2":
      return data2;

    case "add":
      return (perc + perc2) * 255;

    case "subtract":
      return (perc - perc2) * 255;

    case "inverse-subtract":
      return (perc2 - perc) * 255;

    case "multiply":
      return perc * perc2 * 255;

    case "divide":
      return (perc / perc2) * 255;

    case "inverse-divide":
      return (perc2 / perc) * 255;

    case "lighten":
      return data > data2 ? data : data2;

    case "darken":
      return data < data2 ? data : data2;

    case "random":
      return randomInRange(255);

    case "0":
      return 0;

    case "128":
      return 128;

    case "255":
      return 255;
  }
};

const drawNewImage = function (imageData) {
  contextThree.putImageData(imageData, 0, 0);
};

const processImage = function () {
  const imageData = contextOne.getImageData(0, 0, 500, 500);
  const imageData2 = contextTwo.getImageData(0, 0, 500, 500);

  const data = imageData.data;
  const data2 = imageData2.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = applyMode(rFunc, data[i], data2[i]);
    data[i + 1] = applyMode(gFunc, data[i + 1], data2[i + 1]);
    data[i + 2] = applyMode(bFunc, data[i + 2], data2[i + 2]);
  }

  drawNewImage(imageData);
};

const loadImage = function () {
  const img = new Image();
  img.onload = function () {
    contextOne.drawImage(img, 0, 0, 500, 500);
  };
  img.src = "img/test.png";

  const img2 = new Image();
  img2.onload = function () {
    contextTwo.drawImage(img2, 0, 0, 500, 500);
  };
  img2.src = "img/test2.png";

  setTimeout(() => {
    processImage();
  }, 100);
};

const startDemo = function (event) {
  rFunc = rSelect.value;
  gFunc = gSelect.value;
  bFunc = bSelect.value;

  loadImage();
};

startEl.addEventListener("click", startDemo);

setAll.addEventListener("change", function (event) {
  const optionValue = setAll.value;
  rSelect.value = optionValue;
  gSelect.value = optionValue;
  bSelect.value = optionValue;
});

const populateOptions = () => {
  modes.forEach((mode) => {
    const rOption = document.createElement("OPTION");
    rOption.value = mode;
    rOption.textContent = mode;
    rSelect.appendChild(rOption);

    const gOption = document.createElement("OPTION");
    gOption.value = mode;
    gOption.textContent = mode;
    gSelect.appendChild(gOption);

    const bOption = document.createElement("OPTION");
    bOption.value = mode;
    bOption.textContent = mode;
    bSelect.appendChild(bOption);

    const allOption = document.createElement("OPTION");
    allOption.value = mode;
    allOption.textContent = mode;
    setAll.appendChild(allOption);
  });
};

populateOptions();
