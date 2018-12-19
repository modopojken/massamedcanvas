let colorsHash = [];
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
colorsHash["255000000"] = "red";





function drawquestion(){
	ctx.fillStyle = "black";
	ctx.fillRect(463,164,602,102);
	ctx.fillStyle = "green";
	ctx.fillRect(464,165,600,100);
}
function drawbutton1(){
	ctx.fillStyle = "black";
	ctx.fillRect(622,299,252,77);
	ctx.fillStyle = "green";
	ctx.fillRect(623,300,250,75);
}
function drawbutton2(){
	ctx.fillStyle = "black";
	ctx.fillRect(622,399,252,77);
	ctx.fillStyle = "green";
	ctx.fillRect(623,400,250,75);
}
function drawbutton3(){
	ctx.fillStyle = "black";
	ctx.fillRect(622,499,252,77);
	ctx.fillStyle = "green";
	ctx.fillRect(623,500,250,75);
}

function draw() {

  canvas.width  = window.innerWidth-9;
  canvas.height = window.innerHeight-10;

  let bgImg = document.getElementById("bg-gfx");
 
  ctx.font = '48px serif';
  ctx.fillStyle = '#00FF00';
  ctx.fillText('JulQuizen!',650,50);

  drawquestion(0,0);

}

canvas.addEventListener('click', (e) => {
   console.log(e.offsetX,e.offsetY);
   if 
      (e.offsetY >=164 &&
    e.offsetY <=264 &&
    e.offsetX >= 464 &&
    e.offsetX <= 1063) 
   {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    console.log("Hejsan Svejsan");


   }