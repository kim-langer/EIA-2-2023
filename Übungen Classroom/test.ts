let canvas: HTMLCanvasElement = document.querySelector("canvas");
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

// Dreieck zeichnen //
// Set the fill color
ctx.fillStyle = 'blue';

// Start the path and set the starting point
ctx.beginPath();
ctx.moveTo(50, 50);

// Draw the lines to complete the triangle
ctx.lineTo(100, 100);
ctx.lineTo(50, 100);

// Close the path to complete the triangle
ctx.closePath();

// Fill the triangle with the specified fill color
ctx.fill();

ctx.beginPath();

let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, 100);

gradient.addColorStop(0, "black");
gradient.addColorStop(.5, "red");
gradient.addColorStop(1, "gold");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 200, 100);