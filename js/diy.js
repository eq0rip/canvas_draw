$(window).load(function(){
	// var object,x,y,flag=0;
	// $('body').on('mousedown','.object',function (){
	// 	flag=1;
	// 	object=$(this);
	// 	type=$(this).attr('class').split(' ');
	// 	object_type=type[1];
	// 	//object_top=$(this).css('top');
	// 	//console.log(object_top);
	// 	//console.log(flag);

	// });
	// $('body').mouseup(function(){
	// 	flag=0;
	// 	//console.log(flag);
	// 	//$('.toolbar_wrapper').append('<div class="object '+object_type+' red"></div>');
		
	// });

	// $('body').mousemove(function(event){
	// 	if(flag==1){
	// 		object.css({'left':event.pageX,'top':event.pageY});
	// 		//console.log(event.pageX);
	// 	}
	// });
var canvas=document.getElementById('counter_canvas');
context=canvas.getContext('2d');
context.font="40px Arial";
context.fillText("000",10,50);


});
$(window).resize(function(){
});
    
$( ".draggable" ).draggable();


 $('.droppable').droppable({
    drop: function(event, ui) {
   $(ui.draggable).css('top', $(this).position().top);
   $(ui.draggable).css('left', $(this).position().left);
    
}

});
