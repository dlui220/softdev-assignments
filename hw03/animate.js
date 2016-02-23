var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";

var radius = 0;
var growing = true;
var requestId;

// Note:
// Speed increases when button is clicked more than once in succession,
// and to stop animation in this case, the stop button also needs to be clicked
// multiple times
var drawDot = function() {

		ctx.clearRect(0,0,500,500);

		if (growing){
				radius = radius + 2;
		} else {
				radius = radius - 2;
		}
		
		if (radius == canvas.width/2){
				ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
				growing = false;
		} else if ( radius == 0 ){
				ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
				growing = true;
		}

		ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();

};

var animateDot = function() {
		drawDot();
		requestId = window.requestAnimationFrame(animateDot);
		var msg = document.getElementById("message").innerHTML = "Press STOP to pause animation.";
};

var stopDot = function() {
				window.cancelAnimationFrame(requestId);
		};

		var b = document.getElementById("button").addEventListener("click",animateDot);
		var s = document.getElementById("stop").addEventListener("click",stopDot);
