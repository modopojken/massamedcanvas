let colorsHash = [];
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
colorsHash["255000000"] = "red";

function draw() {

  canvas.width  = window.innerWidth-9;
  canvas.height = window.innerHeight-10;

  let bgImg = document.getElementById("bg-gfx");
 
  ctx.font = '48px serif';
  ctx.fillStyle = '#00FF00';
  ctx.fillText('JulQuizen!',650,50);

//
//
//
//   Läs nu!!!!!!!         https://lavrton.com/hit-region-detection-for-html5-canvas-and-how-to-listen-to-click-events-on-canvas-shapes-815034d7e9f8/
//
//
//






  ctx.fillStyle = "black"
  ctx.fillRect(463,164,602,102);
  ctx.fillRect(622,299,252,77);
  ctx.fillRect(622,399,252,77);
  ctx.fillRect(622,499,252,77);
  ctx.fillStyle = "green";
  ctx.fillRect(464,165,600,100);
  ctx.fillRect(623,300,250,75);
  ctx.fillRect(623,400,250,75);
  ctx.fillRect(623,500,250,75);
  ctx.fillStyle = "red";
  ctx.font = "30px serif";
  ctx.fillStyle = "black";
  ctx.fillText("Här kommer frågorna att visas!",480,225);
  ctx.font = "25px serif";
  ctx.fillText("Här är ett Alternativ!",630,345);
  ctx.fillText("Här är ett Alternativ!",630,445);
  ctx.fillText("Här är ett Alternativ!",630,545);




  window.requestAnimationFrame(draw);
}
document.getElementById("canvas").addEventListener("click", function(e) {
    let pixel = ctx.getImageData(e.x, e.y, 1, 1).data;
    let color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    let shape = colorsHash[color];
    if (shape) {
        console.log('click on: ' + shape);
    }
    console.log(e.x, e.y, pixel);
}, false);



window.requestAnimationFrame(draw);