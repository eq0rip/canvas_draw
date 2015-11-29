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
			balls[n].y=ballRadius*2;
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
			balls[n].x=ballRadius*2;
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
