const rootEl = document.querySelector("#root");
const canvasOne = document.querySelector("#canvas-one");
const canvasTwo = document.querySelector("#canvas-two");
const canvasThree = document.querySelector("#canvas-three");

const startEl = document.querySelector("#start");

const contextOne = canvasOne.getContext("2d");
const contextTwo = canvasTwo.getContext("2d");
const contextThree = canvasThree.getContext("2d");

const randomInRange = function (max) {
  return Math.floor(Math.random() * max);
};

const drawNewImage = function (imageData) {
  contextThree.putImageData(imageData, 0, 0);
};

const processImage = function () {
  const imageData = contextOne.getImageData(0, 0, 500, 500);
  const imageData2 = contextTwo.getImageData(0, 0, 500, 500);

  const data = imageData.data;
  const data2 = imageData2.data;

  const start = new Date().getTime();
  console.log("starting");

  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc2 * rPerc;
    const gOut = gPerc2 * gPerc;
    const bOut = bPerc2 * bPerc;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }

  const finish = new Date().getTime();
  const elapsed = finish - start;
  console.log("done", elapsed);

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
    processImage();
  };
  img2.src = "img/test2.png";
};

const startDemo = function () {
  loadImage();
};

startEl.addEventListener("click", startDemo);
