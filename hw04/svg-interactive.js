var pic = document.getElementById("csvg");
var cbutton = document.getElementById("cbutton");
var dbutton = document.getElementById("dbutton");
var cbutton_clicked = false;
var dbutton_clicked = false;
var intervalID, intervalID2;

var xcor = 100;
var ycor = 300;

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

// var pic2 = document.getElementById("dsvg");
var c2 = document.createElementNS('http://www.w3.org/2000/svg','image');
c2.setAttributeNS(null,'height','100');
c2.setAttributeNS(null,'width','100');
c2.setAttributeNS('http://www.w3.org/1999/xlink','href', 'logo_dvd.jpg');
c2.setAttributeNS(null,'x',250);
c2.setAttributeNS(null,'y',250);

var animateDvd = function animateDvd(){
		var xreverse = 1;
		var yreverse = 1;
		
		var dvdDraw = function dvdDraw(){
				// moving code
				xcor = parseInt(c2.getAttribute("x"));
				ycor = parseInt(c2.getAttribute("y"));

				xcor = xcor + 3*xreverse;
				ycor = ycor + 2*yreverse;
				
				if (( xcor < 0) || ( xcor > 425)) {
						xreverse = xreverse * -1;
				}
				
				if (( ycor < 0) || ( ycor > 425)) {
						yreverse = yreverse * -1;
				}
				
				c2.setAttributeNS(null,'x',xcor);
				c2.setAttributeNS(null,'y',ycor);

				pic.appendChild(c2);
		};

		intervalID = window.setInterval(dvdDraw, 16);
		
};


cbutton.addEventListener("click", function(){
    if (cbutton_clicked == false){
				animateCircle();
				cbutton_clicked = true;
    }
    else{
				window.clearInterval(intervalID);
				cbutton_clicked = false;
    }
});

dbutton.addEventListener("click", function(){
    if (dbutton_clicked == false){
				animateDvd();
				dbutton_clicked = true;
    }
    else{
				window.clearInterval(intervalID);
				dbutton_clicked = false;
    }
});
