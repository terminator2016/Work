
$(function(){
	var $desc=$("<div class=\'desc\'></div>").prependTo("body");
	
	$(".r-list li:not(.shopcart)").hover(function(){
		var $tool=$(this).attr("tool");
		$desc.html($tool);
		$desc.css({
			left:$(this).offset().left-$desc.width()-20,
			top:$(this).offset().top,
			opacity:0
		}).show().stop().animate(
			{
			left:$(this).offset().left-$desc.width(),
			opacity:1
		},400)
	},function(){
		$desc.stop().animate({
			left:$(this).offset().left-$desc.width()-20,
			opacity:0
		},400)
	})
	
	$(".r-link .yh").hover(function(){
		$(".cust").show();
	},function(){
		$(".cust").hide();
	})
	$(".r-link .gotop").hover(function(){
		$(".gotop span").show();
	},function(){
		$(".gotop span").hide();
	});

})
