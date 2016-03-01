var pic = document.getElementById("vimage");
var intervalID;

var grow = function() {
		//init stuff
		var c = document.createElementNS(svgNSID,"circle");
		var radius;
		var animateCode = function(){
				//increment/decrement code
				c = document.getElementByTagName("circle")[0];
				radius = parseInt(c.getAttribute("r"));
				c.setAttribute("r",radius.toString());
		};

		intervalID = window.setInterval(animateCode,16);
};

var c = document.createElementNS(
		"http://www.w3.org/2000/svg", "circle"
);
c.setAttribute( "cx", 0 );
c.setAttribute( "cy", 0 );
c.setAttribute( "r", "100" );
c.setAttribute( "fill", "red" );
c.setAttribute( "stroke", "black");

var clicked = function(e){
		if ( e.toElement == this ) {
				drawDot ( e.offsetX, e.offsetY );
		}
};

var stop = function(){
		window.clearInterval(intervalID);
};
pic.addEventListener( "click", clicked );
pic.appendChild( c );

