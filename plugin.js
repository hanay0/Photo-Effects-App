const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// creating a new image
const canvasImg = new Image();
canvasImg.src = 'town.jpg';

canvasImg.onload = () => {
    canvas.width = canvasImg.width;
    canvas.height = canvasImg.height;
  ctx.drawImage(canvasImg, 0, 0);  
}