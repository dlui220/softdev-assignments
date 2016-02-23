var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
var radius = 0;
var growing = true;
var animated = true;
var clicks = 0;

// Found this function on stack overflow for getting random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var drawDot = function() {

		ctx.clearRect(0,0,500,500);

		if (growing){
				radius = radius + 2;
		} else {
				radius = radius - 2;
		}
		
		if (radius == canvas.width/2){
				ctx.fillStyle = getRandomColor();
				growing = false;
		} else if ( radius == 0 ){
				ctx.fillStyle = getRandomColor();
				growing = true;
		}

		ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
		if (animated){
				window.requestAnimationFrame( drawDot );		
		}
};

var stopDot = function() {
		if (clicks == 0){
				animated = false;
		} else if (clicks == 1){
				ctx.clearRect(0,0,500,500);
				clicks = 0;
		}
};

var b = document.getElementById("button").addEventListener("click",drawDot);
var s = document.getElementById("stop").addEventListener("click",stopDot);
