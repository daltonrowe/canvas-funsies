const rootEl = document.querySelector("#root");
const canvasOne = document.querySelector("#canvas-one");
const canvasTwo = document.querySelector("#canvas-two");
const startEl = document.querySelector("#start");

const contextOne = canvasOne.getContext("2d");
const contextTwo = canvasTwo.getContext("2d");

const randomInRange = function (max) {
  return Math.floor(Math.random() * max);
};

const drawNewImage = function (imageData) {
  contextTwo.putImageData(imageData, 0, 0);
};

const processImage = function () {
  const imageData = contextOne.getImageData(0, 0, 500, 500);
  const data = imageData.data;

  const start = new Date().getTime();
  console.log("starting");

  for (let i = 0; i < data.length; i += 4) {
    data[i] = randomInRange(data[i]); // r
    data[i + 1] = randomInRange(data[i + 1]); // g
    data[i + 2] = randomInRange(data[i + 2]); // b
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

    setInterval(() => {
      processImage();
    }, 100);
  };
  img.src = "img/test.png";
};

const startDemo = function () {
  loadImage();
};

startEl.addEventListener("click", startDemo);
