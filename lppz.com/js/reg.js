var flag=0;
$("form :input").blur(function(){
	var $parent=$(this).parent();
	//console.log(parent);
	 $parent.find(".formtips").remove();
	 
	 if($(this).is(".username")){
	 	//console.log(9);
	 	if(this.value==""|| this.value.length<6){
	 		//console.log(9);
	 		var error="请输入至少六位的用户名!";
	 		$parent.append("<span class=\'error\'>"+error+"</span>");
	 	}else{
	 		$parent.children().children().hide();
	 		$(".error").remove();
	 		$(this).attr("pid","ok");
	 		console.log($(this).attr("pid"));
	 		
	 	}
	
	 }
	 if($(this).is(".psd")){
	 	//console.log(9);
	 	if(this.value==""|| this.value.length<8){
	 		//console.log(9);
	 		var error="密码不能小于八位数!";
	 		$parent.append("<span class=\'error\'>"+error+"</span>");
	 	}else{
	 		$parent.children().children().hide();
	 		$(".error").remove();
	 		$(this).attr("pid","ok");
	 		console.log($(this).attr("pid"));
	 	}
	 }
	 if($(this).is(".qrm")){
	 	if($(".psd").val()==$(".qrm").val()){
	 			$parent.children().children().hide();
	 				$(".error").remove();
	 				$(this).attr("pid","ok");
	 				console.log($(this).attr("pid"));
	 		}else{
	 			var error="两次输入的不一致！";
	 			$parent.append("<span class=\'error\'>"+error+"</span>");
	 			
	 	}
	 }
	 if($(this).is(".number")){
	 	 if( this.value=="" || ( this.value!="" && !/.\[1][358][0-9]{9}$/.test(this.value) ) ){
	 		var error="请输入正确的手机号码!";
	 		$parent.append("<span class=\'error\'>"+error+"</span>");
	 	}else{
	 		$parent.children().children().hide();
	 		$(".error").remove();
	 		$(this).attr("pid","ok");
	 		console.log($(this).attr("pid"));
	 	}
	 }
	 if($(this).is("#code")){
	 	if(this.value=="" || this.value.length!="5"){
	 		var error="验证码错误!";
	 		$parent.append("<span class=\'error\'>"+error+"</span>");
	 	}else{
	 		if(this.value=="iufa8"){
	 			$parent.children().children().hide();
	 			$(".error").remove();
	 			$(this).attr("pid","ok");
	 			console.log($(this).attr("pid"));
	 		}else{
	 			var error="验证码错误!";
	 			$parent.append("<span class=\'error\'>"+error+"</span>");

	 	}
	 	}
	 }
	 if($(this).is(".code-btn")){
	 	//console.log(9);
	 	if(this.value==""|| this.value.length>6){
	 		//console.log(9);
	 		var error="验证码格式错误!";
	 		$parent.append("<span class=\'error\'>"+error+"</span>");
	 	}else{
	 		$parent.children().children().hide();
	 		$(".error").remove();
	 		$(this).attr("pid","ok");
	 		console.log($(this).attr("pid"));
	 		
	 	}
	
	 }

}).keyup(function(){
	$(this).triggerHandler("blur");
}).focus(function(){
	$(this).triggerHandler("blur");
})


$(".sub-btn").click(function(){
	var $parent=$(this).parent();
	
	var $f1=$(".username").attr("pid");
	var $f2=$(".psd").attr("pid");
	var $f3=$(".qrm").attr("pid");
	var $f4=$("#code").attr("pid");
	var $f5=$(".number").attr("pid");
	var $f6=$(".code-btn").attr("pid");
	console.log($f1,$f2,$f3,$f4);
	
	if($(".ck").is(":checked")){
		$parent.children().children().hide();
	 	$(".error").hide();
	 	if($f1=="ok"&&$f2=="ok"&&$f3=="ok"&&$f4=="ok"){
	 			var txt=$(".username").val();
	var psd=$(".psd").val();
	
	$.ajax({
		type:"get",
		url:"http://10.9.158.170:8080/API/user/add.aspx",
		async:true,
		dataType:"jsonp",
		data:{username:txt,password:psd},
		success:function(data){
			console.log(data);
			if(data.result == "ok"){
				alert("注册成功");
				window.open("Login.html");
				
			}else{
				alert("注册失败");
			}
		}
	});
	 	}else{
	 		var error="请完整填写";
	 	$parent.append("<span class=\'error\'>"+error+"</span>");
	 	}
	 
	}else{
		var error="请同意注册协议";
	 	$parent.append("<span class=\'error\'>"+error+"</span>");
	}
})
/*-------------------------------------------------------------------------------------------------*/



$(".sub-btn").click(function(){
	
})
    
 
