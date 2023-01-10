let floatypos = [];
let numpoints = Math.random()*20+2
let counter = 0;
let quantscalex = Math.random()*10+2
let quantscaley = Math.random()*10+2;
if (Math.random()>0.5) {
	var bgcolor = Math.random()*127+12;
	var shapecolor = Math.random()*127;
}
else {
	var bgcolor = Math.random()*127;
	var shapecolor = Math.random()*127+127;
}


function setup() {
  frameRate(30);
	iterate(windowWidth,windowHeight);
	
}

function iterate(x,y) {
	createCanvas(x, y);
	
	for (let i = 0; i < numpoints; i++) {
		
		floatypos[i] = [
			int(random(quantscalex+1))*(x)/quantscalex,
			int(random(quantscaley+1))*(y)/quantscaley
		];
  	}
	print(floatypos);
}

function drawshape(bgcolor, shapecolor) {
	background(bgcolor,bgcolor, bgcolor, 50);
	
	for (let i = 1; i < numpoints; i++) {
		fill(shapecolor);
		strokeWeight(1);
		stroke(shapecolor);
		beginShape();
		vertex(floatypos[i+1][0],floatypos[i+1][1]);
		vertex(floatypos[i][0],floatypos[i][1]);
		vertex(floatypos[i-1][0],floatypos[i-1][1]);
		bezierVertex(floatypos[i][0],floatypos[i][1],floatypos[i][0],floatypos[i][1],floatypos[i+1][0],floatypos[i+1][1]);
		endShape();
  	}
	
	//refresh floatypos
	floatypos[int(random(floatypos.length))] = [
			int(random(quantscalex+1))*(windowWidth)/quantscalex,
			int(random(quantscaley+1))*(windowHeight)/quantscaley];
	
	

}

function draw() {
	drawshape(bgcolor,shapecolor);
	counter++;
	textAlign(CENTER);
	textSize(windowWidth/random(50));
	text('work in progress, come back later :)', windowWidth*random(1), windowHeight*random(1));
}