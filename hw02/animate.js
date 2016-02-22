var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var radius = 0;
var growing = true;

var drawDot = function() {

		if (growing){
				radius = radius + 1;
		} else {
				radius = radius - 1;
		}
		
		if (radius == 50){
				growing = false;
		} else if ( radius == 0 ){
				growing = true;
		}

		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();

		window.requestAnimationFrame( drawDot );
};

var b = document.getElementById("button").addEventListener("click",drawDot);

// var b = document.getElementById("button").addEventListener("click",function(e) {
// 		e.preventDefault();
// 		ctx.clearRect(0,0,1000,1000);
// });
