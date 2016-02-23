var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";

var logo = new Image();
logo.src = "logo_dvd.jpg";

var xcor = 100;
var ycor = 300;
var xreverse = 1;
var yreverse = 1;

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
};

var drawDvd = function() {
		ctx.clearRect(0,0,500,500);
		ctx.drawImage(logo,xcor,ycor,75,50);
		
		xcor = xcor + (2 * xreverse);
		ycor = ycor + (2 * yreverse);

		if (xcor == (canvas.width-50) || xcor == 0){
				xreverse = xreverse * -1;
		};

		if (ycor == (canvas.height-50) || ycor == 0){
				yreverse = yreverse * -1;
		};
};

var animateDvd = function() {
		drawDvd();
		requestId = window.requestAnimationFrame(animateDvd);
};

var stopAnimation = function() {
		window.cancelAnimationFrame(requestId);
};


var b = document.getElementById("cbutton").addEventListener("click",animateDot);
var s = document.getElementById("stop").addEventListener("click",stopAnimation);
var d = document.getElementById("dbutton").addEventListener("click",animateDvd);
