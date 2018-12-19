
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');







function draw() {

  canvas.width  = window.innerWidth-9;
  canvas.height = window.innerHeight-10;

  let bgImg = document.getElementById("bg-gfx");
 
  ctx.font = '48px serif';
  ctx.fillStyle = '#00FF00';
  ctx.fillText('JulQuizen!',650,50);


  drawOutline(463,163,602,102);
  drawquestion(464,164,600,100, "Klicka här för att starta!!!!");
  



  //window.requestAnimationFrame(draw);

//
//
//
//   Läs nu!!!!!!!         https://lavrton.com/hit-region-detection-for-html5-canvas-and-how-to-listen-to-click-events-on-canvas-shapes-815034d7e9f8/
//
//
//



/*
  drawOutline(463,163,602,102);
  drawquestion(464,164,600,100, "Klicka här för att starta!!!!");
  drawOutline(622,299,252,77);
  drawButton(623,300,250,75,"INTE här!");
  drawOutline(622,399,252,77);
  drawButton(623,400,250,75,"INTE här!");
  drawOutline(622,499,252,77);
  drawButton(623,500,250,75,"INTE här!");
  */





}


function drawButton(x, y, sizeX, sizeY, question) {
  ctx.fillStyle = "black"
  ctx.fillRect(x,y,sizeX,sizeY);
  ctx.fillStyle = "green";
  ctx.fillRect(x,y,sizeX,sizeY);
  ctx.font = "25px serif";
  ctx.fillStyle = "black";
  ctx.fillText(question ,x+10,y+45);
}
function drawquestion(x, y, sizeX, sizeY, question) {
  ctx.fillStyle = "black"
  ctx.fillRect(x,y,sizeX,sizeY);
  ctx.fillStyle = "green";
  ctx.fillRect(x,y,sizeX,sizeY);
  ctx.font = "30px serif";
  ctx.fillStyle = "black";
  ctx.fillText(question ,x+10,y+55);
}
function drawOutline(x, y, sizeX, sizeY) {
  ctx.fillStyle = "black"
  ctx.fillRect(x,y,sizeX,sizeY);
}


 function drawstuff() {
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
}
  


canvas.addEventListener('click', (e) => {
   console.log(e.offsetX,e.offsetY);
   if
      (e.offsetY >=164 &&
    e.offsetY <=264 &&
    e.offsetX >= 464 &&
    e.offsetX <= 1063) 
   {
    
    console.log("Nu har Spelet börjat!");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    

    drawOutline(463,163,602,102);
    drawquestion(464,164,600,100, "Varför använder tomten äldre AMD processorer?");
    drawOutline(622,299,252,77);
    drawButton(623,300,250,75,"prisvärt.");
    drawOutline(622,399,252,77);
    drawButton(623,400,250,75,"Bra prestanda.");
    drawOutline(622,499,252,77);
    drawButton(623,500,250,75,"Kallt på nordpolen.");

    


   }
});

window.requestAnimationFrame(draw);