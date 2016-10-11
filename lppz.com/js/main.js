$(".user-info").hover(function(){
	$(".my-ly-layer").show();
},function(){
	$(".my-ly-layer").hide();
})
$(".top-flow").hover(function(){
	$(".flow-on").show();
},function(){
	$(".flow-on").hide();
})
	/*-------------------------------------头部--------------------------------------------------*/
//$.get("sideBar.json",function(data){
//	var html="";
//	$.each(data, function(i,o) {
//		html+="<li>"
//			+ "<div class=\"top-sort\">"
//			+ "<h3>"
//			+ "<a href=\"#\"><i></i>"+o.name1+"</a>"
//			+ "</h3>"
//			+ "</div>"
//			+ "<div class=\"sub-sort\">"
//			+ "<ul class=\"sub-sort-list\">"
//			+ "<li>"
//			+ "<a href=\"#\">"+o.name2+"</a>"
//			+ "</li>"
//			+ "<li>"
//			+ "<a href=\"#\">"+o.name3+"</a>"
//			+ "</li>"
//			+ "<li>"
//			+ "<a href=\"#\">"+o.name4+"</a>"
//			+ "</li>"
//			+ "<li>"
//			+ "<a href=\"#\">"+o.name5+"</a>"
//			+ "</li>"
//			+ "</ul>"
//			+ "</div>"
//		    + "</li>"
//	});
//	$(".nav-sort ul").html(html);
//})
//$("#nav-total .top-sort").hover(function(){
//	$(".sub-sort").show();
//},function(){
//	$("#nav-total .sub-sort").hide();
//})
$("#nav-total li").mouseenter(function(){
	//console.log(4);
	$(".sub-sort-list").show();
})
	/*-------------------------------------头部--------------------------------------------------*/
	var $index=0;
	var arrColor=["rgb(253, 232, 201)","rgb(163, 216, 225)"]
var term=setInterval(function(){
$index++;
$index%=2;
$(".lbt-item:not("+$index+")").hide();
$(".lbt-item").eq($index).fadeIn(400);
$(".dot>span").removeClass("on").eq($index).addClass("on");
$(".naver").css({backgroundColor:arrColor[$index]});
},2000)
$(".dot>span").click(function(){
	var $id=$(this).index();
	$(".lbt-item").hide().eq($id).fadeIn(400);
	$(".dot>span").removeClass("on").eq($id).addClass("on");
})


//var i=0;
//var naver=document.querySelector(".naver");
//setInterval(function(){
//	naver.style.backgroundColor=arrColor[i];
//	i++;
//	i%=2;
//},2000)
	/*-------------------------------------头部--------------------------------------------------*/
	
	$("#nav-total>li").hover(function(){
		var id=$(this).index();
		$(".sub-sort").eq(id).show();
	},function(){
		$(".sub-sort").hide();
	})
	$(".menu li").hover(function(){
		$(this).css({
			background:"red",
			borderRadius:"3px",
			color:"white",
		})
	},function(){
		$(this).css({
			background:"#fff",
		})
	})
	/*-------------------------------------头部--------------------------------------------------*/
$(".start-tab>li").hover(function(){
	var id=$(this).index();
	console.log(id);
	$(".start-tab>li").removeClass("active").eq(id).addClass("active");
	$(".start-list").hide().eq(id).show();
},function(){})
	
$(".sct-tab>li").hover(function(){
	var id=$(this).index();
	//console.log(id);
	var id=$(this).index();
	$(".sct-tab>li").removeClass("active").eq(id).addClass("active");
	$(".sc-list").hide().eq(id).show();
},function(){})


$(".fn-list>li").hover(function(){
	var id=$(this).index();
	$(".fn-list>li").removeClass("active").eq(id).addClass("active")
},function(){
	$(".fn-list>li").removeClass("active")
})

$(window).scroll(function(){
	if($(window).scrollTop() > $(window).height()){
		$(".floor-nav").show();
	}
	else{
		$(".floor-nav").hide();
	}
});
$(".fn-list>li").click(function(){
	var id=$(this).index();
	var top=1301+id*405;
	$("html,body").animate({
		scrollTop:top
	})
})
/*----------------------------------------左侧悬浮框----------------------------------------*/
$(".gotop").click(function(){
	$("html,body").animate({
		scrollTop:0
	})
})
/*----------------------------------------返回顶部事件----------------------------------------*/
$(".hd-user").hover(function(){
	$(".cart-list-body").show();
},function(){
	$(".cart-list-body").hide();
})

/*----------------------------------------购物车----------------------------------------*/
//$(".r-list>li").hover(function(){
//	var id=$(this).index();
//	$(".r-list>li").removeClass("active").eq(id).addClass("active");
//},function(){
//	$(".r-list>li").removeClass("active");
//})

/*----------------------------------------右侧边栏----------------------------------------*/


//$.get("1floor.json", function(data) {
//	var html = "";
//	$.each(data, function(i, o) {
//		html += "<li>"
//				+ "<div class=\"p-img\">"
//				+ "<a href=\"#\">"
//				+ "<img src=\""+o.imgSrc+"\"/>"
//				+ "</a>"
//				+ "</div>"
//				+ "<div class=\"p-bg\"></div>"
//				+ "<div class=\"p-info\">"
//				+ "<a href=\"#\">"+o.name+"</a>"
//				+ "<span class=\"price\">"
//				+ "<small>￥</small>"+o.price1+"<small>"+o.price2+"</small>"
//				+ "</span>"
//				+ "</div>"
//				+ "</li>";
//				
//	})
//	$(".food-fire .sc-list").html(html);
//})
$.get("Json/2floor.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<li>"
				+ "<div class=\"p-img\">"
				+ "<a href=\"produce.html\">"
				+ "<img src=\""+o.imgSrc+"\"/>"
				+ "</a>"
				+ "</div>"
				+ "<div class=\"p-bg\"></div>"
				+ "<div class=\"p-info\">"
				+ "<a href=\"#\">"+o.name+"</a>"
				+ "<span class=\"price\">"
				+ "<small>￥</small>"+o.price1+"<small>"+o.price2+"</small>"
				+ "</span>"
				+ "</div>"
				+ "</li>";
				
	})
	$(".meat .sc-list").html(html);
})

$.get("Json/3floor.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<li>"
				+ "<div class=\"p-img\">"
				+ "<a href=\"produce.html\">"
				+ "<img src=\""+o.imgSrc+"\"/>"
				+ "</a>"
				+ "</div>"
				+ "<div class=\"p-bg\"></div>"
				+ "<div class=\"p-info\">"
				+ "<a href=\"#\">"+o.name+"</a>"
				+ "<span class=\"price\">"
				+ "<small>￥</small>"+o.price1+"<small>"+o.price2+"</small>"
				+ "</span>"
				+ "</div>"
				+ "</li>";
				
	})
	$(".fruit .sc-list").html(html);
})
$.get("Json/4floor.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<li>"
				+ "<div class=\"p-img\">"
				+ "<a href=\"produce.html\">"
				+ "<img src=\""+o.imgSrc+"\"/>"
				+ "</a>"
				+ "</div>"
				+ "<div class=\"p-bg\"></div>"
				+ "<div class=\"p-info\">"
				+ "<a href=\"#\">"+o.name+"</a>"
				+ "<span class=\"price\">"
				+ "<small>￥</small>"+o.price1+"<small>"+o.price2+"</small>"
				+ "</span>"
				+ "</div>"
				+ "</li>";
				
	})
	$(".store .sc-list").html(html);
})
$.get("Json/5floor.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<li>"
				+ "<div class=\"p-img\">"
				+ "<a href=\"produce.html\">"
				+ "<img src=\""+o.imgSrc+"\"/>"
				+ "</a>"
				+ "</div>"
				+ "<div class=\"p-bg\"></div>"
				+ "<div class=\"p-info\">"
				+ "<a href=\"#\">"+o.name+"</a>"
				+ "<span class=\"price\">"
				+ "<small>￥</small>"+o.price1+"<small>"+o.price2+"</small>"
				+ "</span>"
				+ "</div>"
				+ "</li>";
				
	})
	$(".bread .sc-list").html(html);
})
$.get("Json/6floor.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<li>"
				+ "<div class=\"p-img\">"
				+ "<a href=\"produce.html\">"
				+ "<img src=\""+o.imgSrc+"\"/>"
				+ "</a>"
				+ "</div>"
				+ "<div class=\"p-bg\"></div>"
				+ "<div class=\"p-info\">"
				+ "<a href=\"#\">"+o.name+"</a>"
				+ "<span class=\"price\">"
				+ "<small>￥</small>"+o.price1+"<small>"+o.price2+"</small>"
				+ "</span>"
				+ "</div>"
				+ "</li>";
				
	})
	$(".sugar .sc-list").html(html);
})
$.get("Json/shopping.json",function(data){
	var html="";
	$.each(data, function(i ,o) {
		html+="<li>"
				+ "<h3>"+o.name+"</h3>"
				+ "<div>"
				+ "<a href=\"proList.html\"><img src=\""+o.imgSrc+"\" /></a>"
				+ "</div>"
				+ "</li>"
	});
	$(".actives ul").html(html);
})