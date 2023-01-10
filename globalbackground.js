let floatyposold = [];
let floatyposnew = [];
let floatypos = [];
let divisions = 800;
let numpoints = 12;
let j = 0;
let coin = Math.random();

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent('p5globalbackground');
	frameRate(30);
	for (let i = 0; i < numpoints; i++) {
		floatypos[i] = [random(windowWidth),random(windowHeight),random(10)];
	}
	floatyposold = floatypos.slice(0,numpoints);
	for (let i = 0; i < numpoints; i++) {
			floatyposnew[i] = [random(windowWidth),random(windowHeight),floatypos[i][2]];
	}
		noiseSeed(random(999))
}

function draw() {
	if (j <= divisions) {
		generateshape();
		j++;
		iteratepoints();
	} else {
		j = 0;
		floatyposold = floatypos.slice(0,numpoints);
		//floatyposold = floatypos;
		for (let i = 0; i < numpoints; i++) {
			//if (random(1)>0.8) {
			//noiseSeed(mouseX*mouseY)
//			floatyposnew[i] = [noise(i+mouseX/3000,0)*(windowWidth),noise(0,i+mouseY/3000)*(windowHeight)];
			floatyposnew[i] = [random(windowWidth),random(windowHeight),floatypos[i][2]];
			//}
			
		}
		
	}
}

function iteratepoints() {
    for (let i = 0; i < numpoints; i++) {
        var floatyposx = (floatyposnew[i][0]-floatyposold[i][0])*(j/divisions)+floatyposold[i][0];
		
        var floatyposy = (floatyposnew[i][1]-floatyposold[i][1])*(j/divisions)+floatyposold[i][1];
        floatypos[i] = [floatyposx,floatyposy, floatypos[i][2]];
	}
}

function generateshape() {
	let backgroundcolor = color(201, 201, 201);
	let shapecolor = color(0,coin*60+80,coin*60+80);
	clear();

	if (floor(coin*3)==0) {
		for (let i = 0; i < numpoints; i++) {
			stroke(shapecolor)
			strokeWeight(noise(floatypos[i][0]/200,floatypos[i][1]/200)*600)
			point(floatypos[i][0],floatypos[i][1]);
		}
	} 
	if (floor(coin*3)==1){
		for (let i = 0; i < numpoints; i=i+4) {
			noFill();
			stroke(shapecolor);
			strokeWeight(windowWidth/15);
			beginShape();
			for (let i = 0; i < numpoints; i++) {
				curveVertex(floatypos[i][0],floatypos[i][1],0,0);
			}
			endShape();
		}
	} 
	
	if (floor(coin*3)==2) {

		fill(shapecolor);
			strokeWeight(1);
			stroke(shapecolor);
		for (let i = 1; i < numpoints-1; i++) {

			beginShape();
			vertex(floatypos[i+1][0],floatypos[i+1][1]);
			vertex(floatypos[i][0],floatypos[i][1]);
			vertex(floatypos[i-1][0],floatypos[i-1][1]);
			bezierVertex(floatypos[i][0],floatypos[i][1],floatypos[i][0],floatypos[i][1],floatypos[i+1][0],floatypos[i+1][1]);
			endShape();
		}
	}
}