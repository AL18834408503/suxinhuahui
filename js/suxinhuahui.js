 window.onload = function(){
 	let Top = document.querySelector('.Top');
	let res = document.body.scrollTop||document.documentElement.scrollTop;
	let backTop = document.querySelector('.backTop');
	backTop.onclick = function() {
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}
	window.onscroll = function(){
		//实时获取页面滚动条的距离
		let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
		if(bodytop >= 300){
			Top.style.top = 0;
		}
		if(bodytop < 50){
			Top.style.top = '-90px';
		}
	
		if(bodytop >= 300){
			backTop.style.bottom = '20px';
		}
		if(bodytop < 50){
			backTop.style.bottom = '-80px';
		}
	}
 	//轮播图
   	let left = document.querySelector('.head .left');
   	let right = document.querySelector('.head .right');
   	let circles = document.querySelectorAll('.circle .first ');
   	let imgs = document.querySelectorAll('.head .pic img');
   	let con = document.querySelector('.head .con');
// 	let span = document.querySelectorAll('.bottom span');
// 	let top = document.querySelector('.top');
// 	console.log(top,circles);
   	imgs[0].style.opacity = 1;
   	circles[0].style.background = '#fff';
// 	span[0].style.opacity = 2;
   	for(let i = 0;i < circles.length;i++){
   		circles[i].onmouseover = function(){
   			for(let j = 0;j < imgs.length;j++){
   				imgs[j].style.opacity = 0;
   				circles[j].style.background = '#757575';
// 				span[j].style.opacity = 0;
   			}
   		imgs[i].style.opacity = 1;
   		circles[i].style.background = '#fff';
// 		span[i].style.opacity = 1;
   		}  		
   	}
 	//自动轮播
   	let num = 0;
   	let t = setInterval(move,1500);
   	function move(){
   		num++;
   		if(num == 2){
   			num = 0;
   		}
   		for(let j = 0;j < imgs.length;j++){
   				imgs[j].style.zIndex = 1;
   				circles[j].style.background = '#757575';
// 				span[j].style.zIndex = 1;
   			}
   		imgs[num].style.zIndex = 2;
   		circles[num].style.background = '#fff';
// 		span[num].style.zIndex = 3;
   	}
   	con.onmouseover = function(){
   		clearInterval(t);
   		left.style.opacity = 0.5;
   		right.style.opacity = 0.5;
   	}
   	con.onmouseout = function(){
   		t = setInterval(move,1500);
   		left.style.opacity = 0;
   		right.style.opacity = 0;
   	}
 	//点击左箭头
   	left.onclick = function(){
   		moveL();
   	}
   	function moveL(){
   		num--;
   		if(num < 0){
   			num = 1;
   		}
   		for(let j = 0;j < imgs.length;j++){
   			imgs[j].style.zIndex = 1;
   			circles[j].style.background = '#757575';
// 			span[j].style.zIndex = 1;
   		}
   		imgs[num].style.zIndex = 2;
   		circles[num].style.backgroundColor = '#fff';
// 		span[num].style.zIndex = 3;
   	}
   	//点击右箭头
   	right.onclick = function(){
   		move();
   	}
   	//窗口失去焦点暂停时间函数
   	window.onblur = function(){
   		clearInterval(t);
   	}
   	window.onfocus = function(){
   		t=setInterval(move,1500);
   	}
//素馨花艺平移
// 	let btnleft = document.querySelector('.btn .btnleft');
// 	let btnright = document.querySelector('.btn .btnright');
//    	let cons = document.querySelector('.containerinfo');
//    	let width = parseInt(getComputedStyle(cons,null).width)/3;
//    	let Num = 0;
//    	btnright.onclick = function(){
//    		Num++;
//    		if(Num==3){
//    			Num = 2;
//    			return;
//    		}
//    		cons.style.transform='translateX('+(-width*Num)+'px)';
//    	}
//    	btnleft.onclick = function(){
//    		Num--;
//    		if(Num == -1){
//    			Num = 0;
//    			return;
//    		}
//    		console.log(Num);
//    		cons.style.transform='translateX('+(-width*Num)+'px)';
//    	}
}