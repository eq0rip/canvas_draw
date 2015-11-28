// animation globals
var t=0; 
var frameInterval = 25; // in ms
var canvas = null; // canvas DOM object
var context = null; // canvas context
 
// ball globals
var ballRadius = 10;
 
// physics globals
var collisionDamper = 0.3;
var floorFriction = 0.0005 * frameInterval;
var mouseForceMultiplier = 1 * frameInterval;
var restoreForce =0.002 * frameInterval;
 
var mouseX = 99999;
var mouseY = 99999;
 
var balls = null;
 
function Ball(x,y,vx,vy,color) {
	this.x=x;
	this.y=y;
	this.vx=vx;
	this.vy=vy;
	this.color=color;
 
	this.origX = x;
	this.origY = y;
}
 
function init() {
	// canvas=document.getElementById("myCanvas");
	// context=canvas.getContext("2d");
	//initStageObjects();
	setInterval(updateStage, frameInterval);
}
 
function updateStage() {
	t+=frameInterval; 
	clearCanvas();
	updateStageObjects();
	drawStageObjects();	
}
 
function initStageObjects() {
	balls = new Array();
 
	var blue = "#3A5BCD";
	var red="#EF2B36";
	var yellow = "#FFC636";
	var green="#02A817";
 
	// G
	balls.push(new Ball(173,63,0,0,blue));
	balls.push(new Ball(158,53,0,0,blue));
	balls.push(new Ball(143,52,0,0,blue));
	// balls.push(new Ball(130,53,0,0,blue));
	// balls.push(new Ball(117,58,0,0,blue));
	// balls.push(new Ball(110,70,0,0,blue));
	// balls.push(new Ball(102,82,0,0,blue));
	// balls.push(new Ball(104,96,0,0,blue));
	// balls.push(new Ball(105,107,0,0,blue));
	// balls.push(new Ball(110,120,0,0,blue));
	// balls.push(new Ball(124,130,0,0,blue));
	// balls.push(new Ball(139,136,0,0,blue));
	// balls.push(new Ball(152,136,0,0,blue));
	// balls.push(new Ball(166,136,0,0,blue));
	// balls.push(new Ball(174,127,0,0,blue));
	// balls.push(new Ball(179,110,0,0,blue));
	// balls.push(new Ball(166,109,0,0,blue));
	// balls.push(new Ball(156,110,0,0,blue));
 
	// // O
	// balls.push(new Ball(210,81,0,0,red));
	// balls.push(new Ball(197,91,0,0,red));
	// balls.push(new Ball(196,103,0,0,red));
	// balls.push(new Ball(200,116,0,0,red));
	// balls.push(new Ball(209,127,0,0,red));
	// balls.push(new Ball(223,130,0,0,red));
	// balls.push(new Ball(237,127,0,0,red));
	// balls.push(new Ball(244,114,0,0,red));
	// balls.push(new Ball(242,98,0,0,red));
	// balls.push(new Ball(237,86,0,0,red));
	// balls.push(new Ball(225,81,0,0,red));
 
	// // O
	// var oOffset = 67;
	// balls.push(new Ball(oOffset + 210,81,0,0,yellow));
	// balls.push(new Ball(oOffset + 197,91,0,0,yellow));
	// balls.push(new Ball(oOffset + 196,103,0,0,yellow));
	// balls.push(new Ball(oOffset + 200,116,0,0,yellow));
	// balls.push(new Ball(oOffset + 209,127,0,0,yellow));
	// balls.push(new Ball(oOffset + 223,130,0,0,yellow));
	// balls.push(new Ball(oOffset + 237,127,0,0,yellow));
	// balls.push(new Ball(oOffset + 244,114,0,0,yellow));
	// balls.push(new Ball(oOffset + 242,98,0,0,yellow));
	// balls.push(new Ball(oOffset + 237,86,0,0,yellow));
	// balls.push(new Ball(oOffset + 225,81,0,0,yellow));
 
	// // G
	// balls.push(new Ball(370,80,0,0,blue));
	// balls.push(new Ball(358,79,0,0,blue));
	// balls.push(new Ball(346,79,0,0,blue));
	// balls.push(new Ball(335,84,0,0,blue));
	// balls.push(new Ball(330,98,0,0,blue));
	// balls.push(new Ball(334,111,0,0,blue));
	// balls.push(new Ball(348,116,0,0,blue));
	// balls.push(new Ball(362,109,0,0,blue));
	// balls.push(new Ball(362,94,0,0,blue));
	// balls.push(new Ball(355,128,0,0,blue));
	// balls.push(new Ball(340,135,0,0,blue));
	// balls.push(new Ball(327,142,0,0,blue));
	// balls.push(new Ball(325,155,0,0,blue));
	// balls.push(new Ball(339,165,0,0,blue));
	// balls.push(new Ball(352,166,0,0,blue));
	// balls.push(new Ball(367,161,0,0,blue));
	// balls.push(new Ball(371,149,0,0,blue));
	// balls.push(new Ball(366,137,0,0,blue));
 
	// // L
	// balls.push(new Ball(394,49,0,0,green));
	// balls.push(new Ball(381,50,0,0,green));
	// balls.push(new Ball(391,61,0,0,green));
	// balls.push(new Ball(390,73,0,0,green));
	// balls.push(new Ball(392,89,0,0,green));
	// balls.push(new Ball(390,105,0,0,green));
	// balls.push(new Ball(390,118,0,0,green));
	// balls.push(new Ball(388,128,0,0,green));
	// balls.push(new Ball(400,128,0,0,green));
 
	// // E
	// balls.push(new Ball(426,101,0,0,red));
	// balls.push(new Ball(436,98,0,0,red));
	// balls.push(new Ball(451,95,0,0,red));
	// balls.push(new Ball(449,83,0,0,red));
	// balls.push(new Ball(443,78,0,0,red));
	// balls.push(new Ball(430,77,0,0,red));
	// balls.push(new Ball(418,82,0,0,red));
	// balls.push(new Ball(414,93,0,0,red));
	// balls.push(new Ball(412,108,0,0,red));
	// balls.push(new Ball(420,120,0,0,red));
	// balls.push(new Ball(430,127,0,0,red));
	// balls.push(new Ball(442,130,0,0,red));
	// balls.push(new Ball(450,125,0,0,red));
 
}
 
function drawStageObjects() {
	for (var n=0; n<balls.length; n++) {	
		context.beginPath();
		context.arc(balls[n].x,balls[n].y,ballRadius,
			0,2*Math.PI,false);
		context.fillStyle=balls[n].color;
		context.fill();
	}
 
 
}
 
function updateStageObjects() {
 
	for (var n=0; n<balls.length; n++) {
 
		// set ball position based on velocity
		balls[n].y+=balls[n].vy;
		balls[n].x+=balls[n].vx;
 
		// restore forces
 
 
 
		if (balls[n].x > balls[n].origX) {
			balls[n].vx -= restoreForce;
		}
		else {
			balls[n].vx += restoreForce;
		}
		if (balls[n].y > balls[n].origY) {
			balls[n].vy -= restoreForce;
		}
		else {
			balls[n].vy += restoreForce;
		}
 
 
 
		// mouse forces
		var distX = balls[n].x - mouseX;
		var distY = balls[n].y - mouseY;
 
		var radius = Math.sqrt(Math.pow(distX,2) + 
			Math.pow(distY,2));
 
		var totalDist = Math.abs(distX) + Math.abs(distY);
 
		var forceX = (Math.abs(distX) / totalDist) * 
			(1/radius) * mouseForceMultiplier;
		var forceY = (Math.abs(distY) / totalDist) * 
			(1/radius) * mouseForceMultiplier;
 
		if (distX>0) { // mouse is left of ball
			balls[n].vx += forceX;
		}
		else {
			balls[n].vx -= forceX;
		}
		if (distY>0) { // mouse is on top of ball
			balls[n].vy += forceY;
		}
		else {
			balls[n].vy -= forceY;
		}
 
 
		// floor friction
		if (balls[n].vx>0) {
			balls[n].vx-=floorFriction;
		}
		else if (balls[n].vx<0) {
			balls[n].vx+=floorFriction;
		}
		if (balls[n].vy>0) {
			balls[n].vy-=floorFriction;
		}
		else if (balls[n].vy<0) {
			balls[n].vy+=floorFriction;
		}
 
		// floor condition
		if (balls[n].y > (canvas.height-ballRadius)) {
			balls[n].y=canvas.height-ballRadius-2;
			balls[n].vy*=-1; 
			balls[n].vy*=(1-collisionDamper);
		}
 
		// ceiling condition
		if (balls[n].y < (ballRadius)) {
			balls[n].y=ballRadius+2;
			balls[n].vy*=-1; 
			balls[n].vy*=(1-collisionDamper);
		}
 
		// right wall condition
		if (balls[n].x > (canvas.width-ballRadius)) {
			balls[n].x=canvas.width-ballRadius-2;
			balls[n].vx*=-1;
			balls[n].vx*=(1-collisionDamper);
		}
 
		// left wall condition
		if (balls[n].x < (ballRadius)) {
			balls[n].x=ballRadius+2;
			balls[n].vx*=-1;
			balls[n].vx*=(1-collisionDamper);
		}	
	}
}
 
function clearCanvas() {
	context.clearRect(0,0,canvas.width, canvas.height);
}
 
function handleMouseMove(evt) {
	mouseX = evt.clientX - canvas.offsetLeft;
	mouseY = evt.clientY - canvas.offsetTop;	
}
 
function handleMouseOut() {
	mouseX = 99999;
	mouseY = 99999;
}
