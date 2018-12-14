function draw() {
	var canvas = document.getElementById('tutorial');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

    ctx.font = '48px serif';
    ctx.textBaseline = '';
    ctx.strokeText('Hello World', 10, 50);



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