let canvas = document.getElementById("spel");
let ctx = canvas.getContext("2d");
let imgX = 0;

function draw(){

	let fgImg = document.getElementById("fg-gfx");

	ctx.clearRect(0,0,640,480);
	ctx.drawImage(fgImg, imgX, 0, 640, 480);
	ctx.drawImage(fgImg, (imgX+640), 0, 640, 480);

	imgX = imgX - 2;
	if(imgX <= -640) imgX=0;

	window.requestAnimationFrame(draw);
}


window.requestAnimationFrame(draw);