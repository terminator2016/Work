var price=0;
var getShop = function() {
	var $shop = $.cookie("shopcart");
	if(!$shop) {
		$(".go-shopping").show();
		$(".cart-area").hide();
		
	} else {
		$(".go-shopping").hide();
		var json=strOper.get($shop);
		//console.log(json.pid);
		var html="";
		$.each(json,function(i,o){
			price=o.price;
				html+="<tr>"
					+ "<td><input type=\"checkbox\" checked=\"checked\" /></td>"
					+ "<td>"
					+ "<a href=\"#\">"
					+ "<img src=\""+o.img+"\"/>"
					+ "</a>"
					+ "</td>"
					+ "<td class=\"commodity\">"
					+ "<a href=\"#\">"+o.name+"</a>"
					+ "</td>"
					+ "<td >"+o.price+"</td>"
					+ "<td>"
					+ "<span class=\"count\">"
					+ "<a href=\"javascript:;\" class=\"decrease\" data-pid=\""+o.id+"\">-</a>"
					+ "<p>"+o.count+"</p>"
					+ "<a href=\"javascript:;\" class=\"add\" data-pid=\""+o.id+"\">+</a>"
					+ "</span>"
					+ "</td>"
					+ "<td>"
					+ "<span class=\"sub-total\">"
					+ "<b class=\"totAls\">"+o.price+"</b>"
					+ "</span>"
					+ "</td>"
					+ "<td>"
					+ "<a href=\"#\" class=\"deletes\" data-pid=\""+o.id+"\" del=\"del\">删除</a>"
					+ "</td>"
					+ "</tr>"
		});
		
		$("#tbody").html(html);
		
	}
}
getShop();

var counter=function(element,type){
	var count = type === true? 1:-1 ;
	var $b = type === true? $(element).prev() : $(element).next();
	if($b.html()=="1" && type==false){
		count=0;
	}
	else{
		var $shop=$.cookie("shopcart");
		var id = $(element).data("pid");
		var result=strOper.counter($shop,id,type);
		$.cookie("shopcart",result);
		
	}
	$b.html(parseInt($b.html())+count);
}

$("#tbody").click(function(e){
	var target=$(e.target);
	//console.log(target.data("id"));
	
	if(target.attr("del")=="del"){
		//console.log(3);
		var $shop=$.cookie("shopcart");
		var id=target.data("pid");
		var result=strOper.del($shop,id);
		$.cookie("shopcart",result);
		getShop();
		
	}
	else if($(e.target).attr("class") == "decrease"){

		counter(e.target,false);
		var count=$(".add").prev().html();
			$(".num").html(count);
		var Ntotal=parseFloat(price)*parseFloat(count).toFixed(2);
		//console.log(total)
		$(".totAls").html(Ntotal);
//		$(".pro-total i").html(total);
	}
	else if(target.attr("class")=="add"){
		counter(e.target,true);
		var count=$(".add").prev().html();
		$(".num").html(count);
		var Ntotal=parseFloat(price)*parseFloat(count).toFixed(2);
		//console.log(total)
		$(".totAls").html(Ntotal);
//		$(".pro-total i").html(total);
		
	}
})
var count=$(".add").prev().html();
$(".num").html(count);
var total=parseFloat(price*count);
$(".submit").click(function(){
	var count=$(".add").prev().html();

	var total=parseFloat(price*count);
	$(".pro-total i").html(total);
})
