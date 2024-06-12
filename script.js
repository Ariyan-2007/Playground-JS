const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 813);
const CANVAS_HEIGHT = (canvas.height = 1673);

const playerImage = new Image();
playerImage.src = "Davis.png";
const imageWidth = 813;
const imageHeight = 1673;
const spriteWidth = 80;
const spriteHeight = 80;

let frameX = 4;
let frameY = 140;
let gameFrame = 0;
const constant = 10;
let flag = 0;
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );

  if (gameFrame % constant == 0) {
    if (frameX < 7 && flag == 0) {
      frameX++;
    } else if (frameX > 4 && flag == 1) {
      frameX--;
    } else {
      if (flag == 1) {
        flag = 0;
      } else flag = 1;
    }
  }
  gameFrame++;

  requestAnimationFrame(animate);
}

playerImage.onload = () => {
  animate();
};

// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");
// const CANVAS_WIDTH = (canvas.width = 813);
// const CANVAS_HEIGHT = (canvas.height = 1673);

// const playerImage = new Image();
// playerImage.src = "Davis.png";
// const imageWidth = 813;
// const imageHeight = 1673;
// const spriteWidth = 80;
// const spriteHeight = 80;

// let frameX = 4;
// let frameY = 140;
// let gameFrame = 0;
// const constant = 10;
// let flag = 0;

// // Off-screen canvas for image manipulation
// const offCanvas = document.createElement("canvas");
// const offCtx = offCanvas.getContext("2d");
// offCanvas.width = imageWidth;
// offCanvas.height = imageHeight;

// // Function to make brown background transparent
// function makeTransparent(img) {
//   offCtx.drawImage(img, 0, 0);
//   let imageData = offCtx.getImageData(0, 0, imageWidth, imageHeight);
//   let data = imageData.data;

//   // Define the brown color (you may need to adjust this based on the actual color)
//   const brownColor = { r: 93, g: 73, b: 73 };

//   for (let i = 0; i < data.length; i += 4) {
//     let r = data[i];
//     let g = data[i + 1];
//     let b = data[i + 2];
//     if (r === brownColor.r && g === brownColor.g && b === brownColor.b) {
//       data[i + 3] = 0; // Set alpha to 0 (transparent)
//     }
//   }

//   offCtx.putImageData(imageData, 0, 0);
// }

// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

//   ctx.drawImage(
//     offCanvas,
//     frameX * spriteWidth,
//     frameY,
//     spriteWidth,
//     spriteHeight,
//     0,
//     0,
//     spriteWidth,
//     spriteHeight
//   );

//   if (gameFrame % constant == 0) {
//     if (frameX < 7 && flag == 0) {
//       frameX++;
//     } else if (frameX > 4 && flag == 1) {
//       frameX--;
//     } else {
//       flag = !flag;
//     }
//   }
//   gameFrame++;

//   requestAnimationFrame(animate);
// }
// animate();
// playerImage.onload = () => {
//   //   makeTransparent(playerImage);

// };
