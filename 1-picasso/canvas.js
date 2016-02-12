// Sets variable "c" to element "c" in HTML (the canvas)
var c = document.getElementById("ftb2maga");

// Gets the 2d surface of the canvas and sets it to the variable
var ctx = c.getContext("2d");

// Sets the color of the fill
ctx.fillStyle = "#0000FF";

// Draws a filled rectangle
// (x-position, y-position, Width, Height)
ctx.fillRect(0,0,100,100);

// Sets color of stroke (not filled)
ctx.strokeStyle = "#FF0000";

// Sets size and dimensions of stroke rectangle
// (x-position, y-position, Width, Height)
ctx.strokeRect(100,100,150,150);

// Starts the creation of a shape/path
ctx.beginPath();

// Sets a new coordinate for the shape/path, doesn't create line
ctx.moveTo(100,100);

// Creates a line from the last point to the new coordinate, doesn't draw line
ctx.lineTo(250,200);
ctx.lineTo(200,250);

// Creates a path from the current point back to the origin point
ctx.closePath();

ctx.fillStyle = "green";

// Fills current path on canvas
ctx.fill();

ctx.beginPath();
ctx.moveTo(100,250);
ctx.lineTo(0,250);
ctx.lineTo(0,100);
ctx.moveTo(100,100);
ctx.closePath();
ctx.fillStyle = "#00FFFF";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250,100);
ctx.lineTo(250,0);
ctx.lineTo(100,0);
ctx.moveTo(100,100);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(0,250);
ctx.lineTo(250,250);
ctx.lineTo(300,500);
ctx.closePath();
ctx.fillStyle = "#000FFF";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250,0);
ctx.lineTo(250,250);
ctx.lineTo(500,300);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(300,500);
ctx.lineTo(500,300);
ctx.closePath();
ctx.fillStyle = "magenta";
ctx.fill();

// Draws path on canvas
ctx.stroke();

// Creates an arc on canvas
// (x-coordinate, y-coordinate, radius, starting angle, ending angle)
ctx.arc(0,0,95,0,90);

ctx.fill();

// Sets font size and type
ctx.font="20px helvetica";

ctx.fillStyle = "orange";

// Creates text, (text, x-coordinate, y-coordinate)
ctx.fillText("Hello World!",105,95);
