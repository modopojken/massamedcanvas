const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create circles to draw
const circles = [
  {
    x: 40,
    y: 40,
    radius: 10,
    color: 'rgb(255,0,0)'
  },
  {
    x: 70,
    y: 70,
    radius: 10,
    color: 'rgb(0,255,0)'
  }
];

// draw circles
circles.forEach(circle => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
});
canvas.addEventListener('click', (e) => {
   console.log(e.offsetX,e.offsetY);
});