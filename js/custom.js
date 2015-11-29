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
	var generated_ball_data;

$(window).load(function(){
	left_add=$('#left_control').width();
	  $('#ball_radius_log').text(radiuss);
	  	  $('#control_radius').val(radiuss);




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
		
		generated_ball_data='[['+circleX+','+circleY+','+radiuss+',0,0,'+color+']],';
		
		$('#ball_data').append('<br/>'+generated_ball_data);

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
		generated_ball_data='[['+circleX+','+circleY+',0,0,'+color+']],';
		
		$('#ball_data').append('<br/>'+generated_ball_data);
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



////radius value slider change
$("#control_radius").bind("slider:changed", function (event, data) {
  // The currently selected value of the slider
  radiuss=$('#control_radius').val();
  ballRadius=radiuss;
  $('#ball_radius_log').text(ballRadius);
  $('#cursor').width(2*radiuss);
  $('#cursor').height(2*radiuss);
  //alert radiuss;
  

  // The value as a ratio of the slider (between 0 and 1)
 // alert(data.ratio);
});
