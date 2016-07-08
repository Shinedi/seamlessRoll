window.onload=function(){
	var obox=document.getElementById("box");
	var oul=obox.getElementsByTagName("ul")[0];
	var oimg=obox.getElementsByTagName("img");
	var obtn1=document.getElementById("btn1");
	var obtn2=document.getElementById("btn2");
	var timer=null;
	//将4张图片变为8张图片，不然往左移动会显示出背景色
	oul.innerHTML=oul.innerHTML+oul.innerHTML;
	oul.style.width=oimg[0].offsetWidth*oimg.length+'px';
	//oul.style.width输出字符串，后面有px，oul.offsetWidth是数字。若要计算，用oul.offsetWidth
	//alert(oul.style.width);
	//alert(oul.offsetWidth);
	function changeImg1(){
		if(oul.offsetLeft>-(oul.offsetWidth/2))
		{
			oul.style.left=oul.offsetLeft-2+'px';
		}
		else
		{
			oul.style.left='0px';
		}
		
		}
	function changeImg2(){
		if(oul.offsetLeft>0)
		{
			oul.style.left=-oul.offsetWidth/2+'px';
		}
		else
		{
			oul.style.left=oul.offsetLeft+2+'px';
		}
		}
	timer=setInterval(changeImg1,30);
	/*timer=setInterval(function(){
		if(oul.offsetLeft>-(oul.offsetWidth/2))
		{
			oul.style.left=oul.offsetLeft-2+'px';
		}
		else
		{
			oul.style.left='0px';
		}
		},30);*/
	oul.onmouseover=function(){
		clearInterval(timer);
		};
	oul.onmouseout=function(){
		timer=setInterval(changeImg1,30);
		};
	obtn1.onclick=function(){
		clearInterval(timer);
		timer=setInterval(changeImg1,30);
		//因为默认向左走，因此点击向左走按钮时，鼠标悬停或离开会调用上面定义的onmouseover或onmouseout事件（作用域，里面的函数可以访问外面的函数）
		};
	obtn2.onclick=function(){
		clearInterval(timer);
		timer=setInterval(changeImg2,30);
		//点击向右走时，让鼠标悬放时停止，离开后继续向右走
		oul.onmouseout=function(){
		timer=setInterval(changeImg2,30);
		};
		};
	/*oul.onmouseout=function(){
		timer=setInterval(function(){
		if(oul.offsetLeft>-(oul.offsetWidth/2))
		{
			oul.style.left=oul.offsetLeft-2+'px';
		}
		else
		{
			oul.style.left='0px';
		}
		},30);
		};*/
	};
	