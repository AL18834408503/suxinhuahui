window.onload = function(){
	//参数1：盒子
	//参数2：图片
	//参数3：遮罩
	//参数4：文字盒子
	let img1 = document.querySelector('.first .f img');
	let first = document.querySelector('.first');
	let cover = document.querySelector('.first .f .cover');
	let middle = document.querySelector('.first .f .middle');
	scale(first,img1,cover,middle);
	let img2 = document.querySelector('.second .f img');
	let second = document.querySelector('.second');
	let cover1 = document.querySelector('.second .f .cover');
	let middle1 = document.querySelector('.second .f .middle');
	scale(second,img2,cover1,middle1);
	let img3 = document.querySelector('.third .f img');
	let third = document.querySelector('.third');
	let cover2 = document.querySelector('.third .f .cover');
	let middle2 = document.querySelector('.third .f .middle');
	scale(third,img3,cover2,middle2);
	let img4 = document.querySelector('.fourth .f img');
	let fourth = document.querySelector('.fourth');
	let cover3 = document.querySelector('.fourth .f .cover');
	let middle3 = document.querySelector('.fourth .f .middle');
	scale(fourth,img4,cover3,middle3);
	function scale(first,img1,cover,middle){
		first.onmouseover = function(){
			img1.style.transform = 'scale(1,1)';
			// cover.style.opacity = 1;
			cover.style.backgroundColor = '#4D3E3B';
			middle.style.opacity = 1;
		};
		first.onmouseout = function(){
			img1.style.transform = 'scale(0,0)';
			cover.style.opacity = 0.4;
            // cover.style.backgroundColor = '#938C87';
			middle.style.opacity = 0.8;
		}
	}
}
