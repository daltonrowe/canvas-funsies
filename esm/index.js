import {
  image1,
  image2,
  r2g1b1,
  r1g2b1,
  r1g1b2,
  r2g2b1,
  r2g1b2,
  r1g2b2,
  addition,
  subtract,
  inverseSubtract,
  difference,
  inverseDifference,
  multiply,
  divide,
  inverseDivide,
  screen,
  lighten,
  darken,
} from "./imageFunctions.js";

let funcToRun = null;

const canvasOne = document.querySelector("#canvas-one");
const canvasTwo = document.querySelector("#canvas-two");
const canvasThree = document.querySelector("#canvas-three");

const contextOne = canvasOne.getContext("2d");
const contextTwo = canvasTwo.getContext("2d");
const contextThree = canvasThree.getContext("2d");

const startEls = document.querySelectorAll(".start");

const drawNewImage = function (imageData) {
  contextThree.putImageData(imageData, 0, 0);
};

const processImage = function () {
  const imageData = contextOne.getImageData(0, 0, 500, 500);
  const imageData2 = contextTwo.getImageData(0, 0, 500, 500);

  const data = imageData.data;
  const data2 = imageData2.data;

  console.time(funcToRun);

  switch (funcToRun) {
    case "image1":
      image1(data, data2);
      break;

    case "image2":
      image2(data, data2);
      break;

    case "r2g1b1":
      r2g1b1(data, data2);
      break;

    case "r1g2b1":
      r1g2b1(data, data2);
      break;

    case "r1g1b2":
      r1g1b2(data, data2);
      break;

    case "r2g2b1":
      r2g2b1(data, data2);
      break;

    case "r1g2b2":
      r1g2b2(data, data2);
      break;

    case "r2g1b2":
      r2g1b2(data, data2);
      break;

    case "addition":
      addition(data, data2);
      break;

    case "subtract":
      subtract(data, data2);
      break;

    case "inverseSubtract":
      inverseSubtract(data, data2);
      break;

    case "difference":
      difference(data, data2);
      break;

    case "inverseDifference":
      inverseDifference(data, data2);
      break;

    case "multiply":
      multiply(data, data2);
      break;

    case "divide":
      divide(data, data2);
      break;

    case "inverseDivide":
      inverseDivide(data, data2);
      break;

    case "screen":
      screen(data, data2);
      break;

    case "lighten":
      lighten(data, data2);
      break;

    case "darken":
      darken(data, data2);
      break;

    default:
      alert("no function specified!");
      break;
  }

  console.timeEnd(funcToRun);

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
  funcToRun = event.target.dataset.imageFunction;
  loadImage();
};

startEls.forEach((el) => {
  el.addEventListener("click", startDemo);
});
