var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var clicks = 0;
var lastX, lastY = -1;

canvas.addEventListener('click',function(e){
		
		var x = e.offsetX;
		var y = e.offsetY;

		if (lastX != -1) {
				ctx.beginPath();
				ctx.moveTo(lastX, lastY);
				ctx.lineTo(x, y, 6);
				ctx.strokeStyle = '#OOFFFF';
				ctx.stroke();
				ctx.closePath();
		}

		lastX = x;
		lastY = y;

		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(lastX,lastY,10,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();

		clicks++;

		if (clicks == 1){
				var num = document.getElementById("num").innerHTML = "You have created " + clicks + " dot!";
		} else {
				var num = document.getElementById("num").innerHTML = "You have created " + clicks + " dots!";
		}
		
});

var b = document.getElementById("button").addEventListener("click",function(e) {
		e.preventDefault();
		ctx.clearRect(0,0,1000,1000);
		lastX = -1;
		lastY = -1;
		var num = document.getElementById("num").innerHTML = "There are currently no dots."
		clicks = 0;
});
