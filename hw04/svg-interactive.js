var pic = document.getElementById("vimage");

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
pic.addEventListener( "click", clicked );
pic.appendChild( c );
