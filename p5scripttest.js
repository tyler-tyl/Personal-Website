let points = [];
let pointscount = random(20)+5;
let counter = 0;
let quantscalex = random(20)+2;
let quantscaley = random(20)+2;


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

function draw() {
	background(127);
	
	

	
	for (let i = 0; i < points.length; i++) {
		//var noisex = (noise(counter+i,0)-0.5)*50;
		//var noisey = (noise(0,counter+i)-0.5)*50;
		//points[i] = [points[i][0]+ noisex,points[i][1]+ noisey];
  	}
	print(points);
	
	let shapecolor= random(127)+127;
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
	
	counter++;

}
