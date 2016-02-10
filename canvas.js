// Sets variable "c" to element "c" in HTML (the canvas)
var c = document.getElementById("ftb2maga");

// Gets the 2d surface of the canvas and sets it to the variable
var ctx = c.getContext("2d");

// Sets the color of the fill
ctx.fillStyle = "#0000FF";

// Sets size of filled rectangle using dimensions
// (X-position, Y-position, Length, Width)
//ctx.fillRect(100,100,100,100);

// Sets color of stroke (not filled)
ctx.strokeStyle = "#FF0000";

// Sets size and dimensions of stroke rectangle
// (X-position, Y-position, Length, Width)
//ctx.strokeRect(140,100,140,130);

// Starts the creation of a shape
ctx.beginPath();

// Sets the origin point for the shape
ctx.moveTo(0,0);

// Draws a line from the last point to the new coordinate
ctx.lineTo(250,200);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,200);
ctx.stroke();

//ctx.lineTo(300,300);

ctx.closePath();

//ctx.stroke();

//ctx.fill();


// .arc(a,b,c,d,e);
// .font = "30px arial";
// .fillText(txt,a,b);
