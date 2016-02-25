//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "cbutton" );
var dvdButton = document.getElementById( "dbutton" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";


var requestID;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
};

var radius = 0;
var growing = true;


var drawDot = function() {
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
				radius = radius + 1;
    }    
    else {
				radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
				growing = false;
    else if ( radius == 0 ) {
				growing = true;
    }
    
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {
    
    //Q: What good might this do?
    //window.cancelAnimationFrame( requestID );
		
    var logo = new Image();
		logo.src = "logo_dvd.jpg";

		var xcor = 100;
		var ycor = 400;
		var xreverse = 1;
		var yreverse = 1;

    //a function defined within a function, oh my!
    var dvdLogo = function() {
				
				ctx.drawImage(logo,xcor,ycor,75,50);
				
				xcor = xcor + (3 * xreverse);
				ycor = ycor + (1 * yreverse);

				if (xcor > (canvas.width-75) || xcor < 0){
						xreverse = xreverse * -1;
				};

				if (ycor > (canvas.height-50) || ycor < 0){
						yreverse = yreverse * -1;
				};

				requestID = window.requestAnimationFrame( dvdLogo );		
    };

    dvdLogo();
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );
