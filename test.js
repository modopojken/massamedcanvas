function draw() {
	var canvas = document.getElementById('tutorial');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');



    ctx.beginPath();
    ctx.arc(175, 175, 150, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(39, 175);
    ctx.arc(175, 175, 135, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(615, 165);
    ctx.arc(160, 150, 15, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(195, 165);
    ctx.arc(190, 140, 15, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();



		/*ctx.beginPath();
    	ctx.moveTo(75, 50);
   		ctx.lineTo(100, 75);
    	ctx.lineTo(100, 25);
  		ctx.fill(); */

		//ctx.fillRect(25,25,100,100);
		//ctx.clearRect(45,45,60,60);
		//ctx.strokeRect(50,50,50,50);
	}
}

document.onload = draw();