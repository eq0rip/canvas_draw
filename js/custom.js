var flag = 0;
var logg=$('#log').text();
var board = document.getElementById('draw');
var context = board.getContext('2d');
var circleX;
var circleY;

var radius = 10;
var left_add;
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
	context.beginPath();
	context.arc(circleX, circleY, radius, 0 , 360);
	context.fillStyle = color;
	context.fill();



});
$('#draw').mouseenter(function(event){
	$('#cursor').show();
	$('#cursor').css({'top':event.clientY,'left':event.clientX});
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
		context.beginPath();
		context.arc(circleX, circleY, radius, 0 , 360);
		context.fillStyle = color;
		context.fill();

	}

});
$('#draw').mouseup(function(){
	flag=0;

});

$("#select_color").spectrum({
	color: "#f00"
});
