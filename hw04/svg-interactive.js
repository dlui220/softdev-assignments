var pic = document.getElementById("csvg");
var button = document.getElementById("cbutton");
var cbutton_clicked = false;
var intervalID;

var c = document.createElementNS("http://www.w3.org/2000/svg","circle");

c.setAttribute("cx", 250);
c.setAttribute("cy", 250);
c.setAttribute("r", 0);
c.setAttribute("fill","red");
c.setAttribute("stroke","black");

var animateCircle = function animateCircle(){
		var speed = 2;
    var growing = true;
    var drawCircle = function drawCircle(){
				radius = parseInt(c.getAttribute("r"));
				
				// Increment/decrement code
				if (growing == true) {
						radius = radius + speed;
				} else {
						radius = radius - speed;
				} 
				
				if (radius == 250){
						growing = false;
				} else if (radius == 0){
						growing = true;
				}

				c.setAttribute("r", radius);
				pic.appendChild(c);

		};
		intervalID = window.setInterval(drawCircle, 16);
};


button.addEventListener("click", function(){
    if (cbutton_clicked == false){
				animateCircle();
				cbutton_clicked = true;
    }
    else{
				window.clearInterval(intervalID);
				cbutton_clicked = false;
    }
});
