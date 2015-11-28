var flag = 0;
var logg=$('#log').text();
var board = document.getElementById('draw');
var draw_context = board.getContext('2d');
var circleX;
var circleY;

var radiuss = 10;
var left_add;

// bacll
var canvas=document.getElementById("myCanvas");
var	context=canvas.getContext("2d");
balls = new Array();
 
	var blue = "#3A5BCD";
	var red="#EF2B36";
	var yellow = "#FFC636";
	var green="#02A817";


$(window).load(function(){
	left_add=$('#left_control').width();
});
$(window).resize(function(){
	left_add=$('#left_control').width();
});


$('#draw').mousedown(function (event){
	flag = 1;

	circleX=event.clientX-left_add;
	circleY=-60+event.clientY;
	console.log(circleX);
	console.log(circleY);
	var	color=$('.sp-preview-inner').css("background-color"); 
		balls.push(new Ball(circleX,circleY,0,0,color));

	draw_context.beginPath();
	draw_context.arc(circleX, circleY, radiuss, 0 , 360);
	draw_context.fillStyle = color;
	draw_context.fill();




});
$('#draw').mouseenter(function(event){
	$('#cursor').show();
	var	color=$('.sp-preview-inner').css("background-color"); 

	$('#cursor').css({'top':event.clientY,'left':event.clientX,'background-color':color});
});
$('#draw').mouseout(function(){
	$('#cursor').hide();
});
$('#draw').mousemove(function (event){

	$('#cursor').css({'top':event.clientY,'left':event.clientX});
	if(flag==1){

		
		circleX=event.clientX-left_add;
		circleY=-60+event.clientY;
		console.log(circleX);
		console.log(circleY);
		var color=$('.sp-preview-inner').css("background-color"); 
		balls.push(new Ball(circleX,circleY,0,0,color));
		draw_context.beginPath();
		draw_context.arc(circleX, circleY, radiuss, 0 , 360);
		draw_context.fillStyle = color;
		draw_context.fill();

	}

});
$('#draw').mouseup(function(){
	flag=0;

});

$("#select_color").spectrum({
	color: "#f00"
});
