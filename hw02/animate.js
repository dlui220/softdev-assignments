var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var radius = 0;
var growing = true;


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
				growing = false;
		} else if ( radius == 0 ){
				growing = true;
		}

		if (radius % 20 == 0){
				ctx.fillStyle = getRandomColor();
		}

		ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();

		window.requestAnimationFrame( drawDot );
};

var b = document.getElementById("button").addEventListener("click",drawDot);

// var b = document.getElementById("button").addEventListener("click",function(e) {
// 		e.preventDefault();
// });
