$.get("Json/list.json",function(data){
	var html="";
	$.each(data, function(i,o) {
		html +="<li class=\"item\">"
			+ "<div class=\"pt\">"
			+ "<a href=\"#\" class=\"pic\">"
			+ "<img src=\""+o.imgSrc+"\"  />"
			+ "</a>"
			+ "<a href=\"#\" class=\"tit\">"+o.name+"</a>"
			+ "<p class=\"prom\">"+o.pname+"</p>"
			+ "</div>"
			+ "<div class=\"price\">"
			+ "<span>￥<i>"+o.price1+"</i>"+o.price2+"</span>"
			+ "</div>"
			+ "<div class=\"part\">"
			+ "<div class=\"cart\">"
			+ "<a href=\"produce.html\" class=\"add\">加购物车</a>"
			+ "<a href=\"#\" class=\"atte\">加关注</a>"
			+ "</div>"
			+ "</div>"
			+ "</li>"
	});
	$(".content ul").html(html);
})

