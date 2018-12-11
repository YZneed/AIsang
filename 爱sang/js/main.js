function beigin()
	{
		alert("欢迎你来到爱sang!");
	}

    window.onload = function(){
        function slideNavs(slide){//    滑动门导航===========================start
            var slideId = -1;;
            slide.onmouseover = function(){//打开滑动门
                clearTimeout(slideId);//由于子元素会干扰事件，导致滑动抖动，当再次进入元素，停止隐藏滑动门的线程
                new animateManage({//播放显示元素的动画
                    "context" : slide,//被操作的元素
                    "effect":"linear",
                    "time": 1000,//持续时间
                    "starCss":{//元素的起始值偏移量
                        "left":slide.style.left
                    },
                    "css" :{//元素的结束值偏移量
                        "left":0
                    }
                }).init();
            }

            slide.onmouseout = function(){//关闭滑动门
                slideId = setTimeout(function(){
                    new animateManage({//播放隐藏元素的动画
                        "context" : slide,//被操作的元素
                        "effect":"linear",
                        "time": 1000,//持续时间
                        "starCss":{//元素的起始值偏移量
                            "left":slide.style.left
                        },
                        "css" :{//元素的结束值偏移量s
                            "left":-300
                        }
                    }).init();
                }, 300)

            }
        }
        slideNavs(document.getElementById("slide"));

        function ssdd(sd){//    滑动门导航===========================start
            var sdId = -1;;
            sd.onmouseover = function(){//打开滑动门
                clearTimeout(sdId);//由于子元素会干扰事件，导致滑动抖动，当再次进入元素，停止隐藏滑动门的线程
                new animateManage({//播放显示元素的动画
                    "context" : sd,//被操作的元素
                    "effect":"linear",
                    "time": 1000,//持续时间
                    "starCss":{//元素的起始值偏移量
                        "rigth":sd.style.right
                    },
                    "css" :{//元素的结束值偏移量
                        "right":0
                    }
                }).init();
            }

            sd.onmouseout = function(){//关闭滑动门
                sdId = setTimeout(function(){
                    new animateManage({//播放隐藏元素的动画
                        "context" : sd,//被操作的元素
                        "effect":"linear",
                        "time": 1000,//持续时间
                        "starCss":{//元素的起始值偏移量
                            "right":sd.style.right
                        },
                        "css" :{//元素的结束值偏移量s
                            "right":-300
                        }
                    }).init();
                }, 300)

            }
        }
        ssdd(document.getElementById("sd"));
    };
    function tiaoA()
    {
    	window.location.href="";
    }
    function tiaoB()
    {
    	window.location.href="";
    }


    /*
    文本框
     */
    function testjie(obj, maxlimit)
    {
      var len = byteLength(obj.value);

     if(len > maxlimit) {
     document.getElementById('maxlimitdiv').innerHTML = "已超出 <b style='color:red'>"+parseInt((len-maxlimit+1)/2)+"</b> 个字";

       } else {
     document.getElementById('maxlimitdiv').innerHTML = "还可输入 <b>"+parseInt((maxlimit-len)/2)+"</b> 个字";
     }
    }
    function byteLength (sStr) {
     aMatch = sStr.match(/[^\x00-\x80]/g);
     return (sStr.length + (! aMatch ? 0 : aMatch.length));
}