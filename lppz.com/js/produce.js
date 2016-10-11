
$(".small-box").hover(function(){
	$(".tool").show();
	$(".big-box").show();
},function(){
	$(".tool").hide();
	$(".big-box").hide();
})
$(".small-box").mousemove(function(e){
	var x=e.pageX-$(this).offset().left-100;
	var y=e.pageY-$(this).offset().top-100;
	//console.log(x,y);
	if(x<0){
		x=0;
	}
	if(x>200){
		x=200;
	}
	if(y<0){
		y=0;
	}
	if(y>200){
		y=200;
	}
	$(".tool").css({
		left:x,
		top:y
	})
	$(".big-box img").css({
		left:-2*x,
		top:-2*y
	})
	
})
$(".list>li").click(function(){
	var id=$(this).index();
	$(".small-box>div").hide().eq(id).show();
		$(".big-box>div").hide().eq(id).show();
})

/*----------------------------------放大镜-----------------------------------------------*/

var index=0;
$(".add-cart").click(function(e){
	if($(e.target).is("a")){
		var target=$(e.target);
		var id=target.attr("pid");
		
		console.log(id);
		var str="1#奶香巴旦木（120g）电商专供新包装#img/c1.jpg#12.90#1";
		var shopcart=$.cookie("shopcart");
		if(!shopcart){
			//console.log(3);
			$.cookie("shopcart",str,{
				expries:7
			})
		}else{
			var result=strOper.add(shopcart,str);
			$.cookie("shopcart",result);
			console.log($.cookie("shopcart"));
		}
	
	}
	
	index++;
	$("#num").html(index);
	$(".count b").html(index);
	$(".quanitiy").val(index);
})
