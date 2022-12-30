let points = [];
let pointscount = 10
let counter = 0;
let quantscalex = 10
let quantscaley = 5;
let bgcolor = Math.random()*127+127;
let shapecolor = Math.random()*127;

function setup() {
  frameRate(random(20)+2);
	iterate(windowWidth,windowHeight);
	
}

function iterate(x,y) {
	createCanvas(x, y);
	
	for (let i = 0; i < pointscount; i++) {
		
		points[i] = [
			int(random(quantscalex+1))*(x)/quantscalex,
			int(random(quantscaley+1))*(y)/quantscaley
		];
  	}
	print(points);
}

function drawshape(bgcolor, shapecolor) {
	background(bgcolor);
	
	for (let i = 1; i < points.length-1; i++) {
		//strokeWeight(25);
		//point(points[i-1][0],points[i-1][1]);
		//point(points[i][0],points[i][1]);
		//point(points[i+1][0],points[i+1][1]);
		fill(shapecolor);
		strokeWeight(1);
		stroke(shapecolor);
		beginShape();
		vertex(points[i+1][0],points[i+1][1]);
		vertex(points[i][0],points[i][1]);
		vertex(points[i-1][0],points[i-1][1]);
		bezierVertex(points[i][0],points[i][1],points[i][0],points[i][1],points[i+1][0],points[i+1][1]);
		endShape();
  	}
	
	//refresh points
	points[int(random(points.length))] = [
			int(random(quantscalex+1))*(windowWidth)/quantscalex,
			int(random(quantscaley+1))*(windowHeight)/quantscaley];
	
	

}

function draw() {
	drawshape(bgcolor,shapecolor);
	counter++;
}
