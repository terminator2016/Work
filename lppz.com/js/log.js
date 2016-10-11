var flag=true;
$("form :input").blur(function(){
	var $parent=$(this).parent();
	
	 if($(this).is(".user")){
	 	//console.log(9);
	 	if(this.value==""|| this.value.length<6){
	 		//console.log(9);
	 		$(".fill-error").html("请输入邮箱/用户名/已验证手机");
	 		flag=false;
	 	}else{
	 		
	 		$(".fill-error").html("");
	 		$(this).attr("pid","ok");
	 		console.log($(this).attr("pid"));
	 	}
	
	 }
	 if($(this).is(".fpsd")){
	 	if(this.value==""|| this.value.length<6){
	 		//console.log(9);
	 		$(".fill-error1").html("请输入密码");
	 		flag=false;
	 	}else{
	 		
	 		$(".fill-error1").html("");
	 		$(this).attr("pid","ok");
	 		console.log($(this).attr("pid"));
	 	}
	 }
}).keyup(function(){
	$(this).triggerHandler("blur");
}).focus(function(){
	$(this).triggerHandler("blur");
})

$(".fn-sub").click(function(){

	if($(".user").attr("pid")==$(".fpsd").attr("pid")){
		var $uname = $(".txt").val();
		var $pwd = $(".pwd").val();
		$.ajax({
			type:"POST",
			dataType:"jsonp",
			async:true,
			url:"http://10.9.158.170:8080/API/user/login.aspx",
			data:{username:$uname,password:$pwd},
			success:function(data){
				console.log(data);
				if(data.result == "ok"){
					alert("可以登录");
					window.open("index.html");
				
				}else{
					alert("用户名不存在或密码错误");
				}
			}
		});
		
	}else{
		alert("请完整填写信息");
	}
	
})
