//    /*鼠标放在第一个ol 的 li 的样式*/
//     $(".tab ol li:first-of-type").mouseover(function(){
//        $(".tab ol li:last-of-type").css({"background":"#efefef",
//            "border-left":"1px solid #cccccc",
//            "border-bottom":"1px solid #ccc",
//            "width":"118px"
//        });
//        $(this).css({"width":"119px",
//            "background":"#ffffff",
//            "border":"none"
//        });
//        $(".tab ul:first-of-type").show();
//        $(".tab ul:last-of-type").hide();
//    });
// /*鼠标放在第er个ol 的 li 的样式*/
//    $(".tab ol li:last-of-type").mouseover(function(){
//        $(".tab ol li:first-of-type").css({"background":"#efefef",
//            "border-right":"1px solid #cccccc",
//            "border-bottom":"1px solid #ccc",
//            "width":"118px"
//        });
//        $(this).css({"width":"119px",
//            "background":"#ffffff",
//            "border":"none"
//        });
//        $(".tab ul:first-of-type").hide();
//        $(".tab ul:last-of-type").show();
//    });
//    $(".tab ul li p").mouseenter(function(){
//        $(this).next().show();
//        $(this).hide();
//        $(this).parent().siblings().children("p").show().end().children("dl").hide();
//    })

/*电子书鼠标放上会变大变小*/
/*	$(".books ul img").mouseover(function() {
		$(this).animate({width: "100%"}, "slow");
	});
	$(".books ul img").mouseout(function() {
		$(this).animate({width: "80%"}, "slow");
	});*/
/*电子书右侧*/
	/*鼠标放在第一个ol的li*/
	/*$(".tab ol li:first-of-type").mouseover(function() {
		$(".tab ol li:first-of-type").css('background', '#efefef');
		$(".tab ul:first-of-type").show();
		$(".tab ul:last-of-type").hide();
	});*/
	/*鼠标离开*/
	/*$(".tab ol li:first-of-type").mouseout(function() {
		$(".tab ol li:first-of-type").css('background', 'white');
	});*/
	/*鼠标放在第二个ol的li*/
	/*$(".tab ol li:last-of-type").mouseover(function() {
		$(".tab ol li:last-of-type").css('background', '#efefef');
		$(".tab ul:first-of-type").hide();
		$(".tab ul:last-of-type").show();
	});*/
	/*鼠标离开*/
	/*$(".tab ol li:last-of-type").mouseout(function() {
		$(".tab ol li:last-of-type").css('background', 'white');
	});*/

	/*下边详细鼠标移动显示*/
/*	$(".tab ul li p").mouseenter(function() {
		$(this).next().show();
		$(this).hide();
		$(this).parent().siblings().children('p').show().end().children("dl").hide();
	});*/
/*轮播图*/
    	var num=1;
    	var lb;
    	var img_src;
	function scrollimg(){
		if (num>4) 
		{
			num=1;
		}
		var imgsrc="img/"+num+".jpg" ;
		$("#scroll_img").find('img').attr('src',imgsrc);
		num++;
		lb=window.setTimeout("scrollimg()",3000);
	}
	scrollimg();
	$("#scroll_number li").mouseover(function() {
		window.clearTimeout(lb);
		var a=$(this).text();
		$(this).css("background","red");
		img_src="img/"+a+".jpg";
		$("#scroll_img").find("img").attr("src",img_src);
	}).mouseout(function() {
		scrollimg();
		$(this).css("background","gray");
	});
/*书讯快递*/
