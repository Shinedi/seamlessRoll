window.onload=function(){
	var obox=document.getElementById("box");
	var oul=obox.getElementsByTagName("ul")[0];
	var oimg=obox.getElementsByTagName("img");
	var obtn1=document.getElementById("btn1");
	var obtn2=document.getElementById("btn2");
	var timer=null;
	//��4��ͼƬ��Ϊ8��ͼƬ����Ȼ�����ƶ�����ʾ������ɫ
	oul.innerHTML=oul.innerHTML+oul.innerHTML;
	oul.style.width=oimg[0].offsetWidth*oimg.length+'px';
	//oul.style.width����ַ�����������px��oul.offsetWidth�����֡���Ҫ���㣬��oul.offsetWidth
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
		//��ΪĬ�������ߣ���˵�������߰�ťʱ�������ͣ���뿪��������涨���onmouseover��onmouseout�¼�������������ĺ������Է�������ĺ�����
		};
	obtn2.onclick=function(){
		clearInterval(timer);
		timer=setInterval(changeImg2,30);
		//���������ʱ�����������ʱֹͣ���뿪�����������
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
	