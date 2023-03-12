const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const width = canvas.width = 500;
const height = canvas.height = 500;

let coinPosition = { x: 100, y: 100, coinSize: 1 };

const image = new Image();
image.src = 'coin.png';

const coinData = [
  { x1: 0, y1: 330, x2: 200, y2: 200 },
  { x1: 240, y1: 330, x2: 200, y2: 200 },
  { x1: 480, y1: 330, x2: 200, y2: 200 },
  { x1: 720, y1: 330, x2: 200, y2: 200 },
  { x1: -50, y1: 90, x2: 200, y2: 200 },
  { x1: 180, y1: 90, x2: 200, y2: 200 }
];

let gameFrame = 0;
let renderFrame = 0;
const missingFrames = 10;
const coinSize = 50 * coinPosition.coinSize;

function animation() {
  if (gameFrame % 5 === 0) {
    if (renderFrame > 4) renderFrame = 0;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      image,
      coinData[renderFrame].x1,
      coinData[renderFrame].y1,
      coinData[renderFrame].x2,
      coinData[renderFrame].y2, //cutStartX, cutStartY
      coinPosition.x, coinPosition.y, coinSize, coinSize //positionX, positionY, sizeX, sizeY
    );
    renderFrame++;
  }
  gameFrame++;
  requestAnimationFrame(animation);
}

animation();