var pic = document.getElementById("csvg");
// var c = Document.createElementNS('http://www.w3.org/2000/svg','image');

var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
c.setAttribute("cx", 250);
c.setAttribute("cy", 250);
c.setAttribute("r", 0);
c.setAttribute("fill","red");
c.setAttribute("stroke","black");

var intervalID;

var grow = function() {
		var growing = true;
		// var c = document.createElementNS(svgNSID,"circle");
		var animateCode = function(){
				//increment/decrement code
				radius = parseInt(c.getAttribute("r"));
				if (growing) {
						radius = radius + 1;
				} else {
						radius = radius - 1;
				}
				
				if (radius == 250){
						growing = false;
				} else if (radius == 0){
						growing = true;
				}

				//
				// c = document.getElementByTagName("circle")[0];
				radius = parseInt(c.getAttribute("r"));
				c.setAttribute("r",radius.toString());
				pic.appendChild(c);
		};
		intervalID = window.setInterval(animateCode,16);
};

var cbutton = document.getElementById("cbutton");
var dbutton = document.getElementById("dbutton");

cbutton.addEventListener("click", function(){
    if (grow_true == true){
				circle_grow();
				grow_true = false;
    }
    else{
				window.clearInterval(intervalID);
				grow_true = false;
    }
});

// var clicked = function(e){
// 		if ( e.toElement == this ) {
// 				drawDot ( e.offsetX, e.offsetY );
// 		}
// };

// var stop = function(){
// 		window.clearInterval(intervalID);
// };
// pic.addEventListener( "click", clicked );
// pic.appendChild( c );

