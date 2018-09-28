window.onload = function(){
	let text = document.querySelector('.body-right textarea');
	let num = document.querySelector('.body-right .text span');
	let  btn = document.querySelector('.body-right button');
	let ul = document.querySelector('.body-left ul');
	let input = document.querySelector('.body-right .input');
	//随着输入的内容，字数实时变化(1.实时监测texteara中的字数变化)
	text.oninput = function(){
		let textnum = this.value.length;
		num.innerHTML = textnum;
	}
	// function getTime(){
    //     let date = new Date();
    //     let year = date.getFullYear();
    //     let month = date.getMonth()+1;
    //     let da = date.getDate();
    //     let hour = date.getHours()<10 ? "0"+date.getHours() : date.getHours() ;
    //     let minute = date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes() ;
    //     let second = date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds() ;
    //     let week = date.getDay();
    //     let time = year+"年"+month+"月"+da+"日 "+hour+":"+minute+":"+second +" ";
    //     return time;
    // }
	//2.当点提交时,将右侧内容添加到左侧列表中
	btn.onclick = function(){
		if(input.value !=='' && text.value !== ''){
			let name = input.value;//姓名
			let con = text.value;//电话
			let time = getTime();
			//模板字符串
			let  str = `<li>
				<div class="body-left-first">
					<div class="img">
						<img src="./images/tou.png">
					</div>
					<p class="up">${name}</p>
					<p class="right">${time}</p>
					<p class="down">${con}</p>
				</div>
				</li>`;
			//innerHTML---可识别标签
			ul.innerHTML+=str;
			//清空右侧
			input.value = '';
			text.value = '';
			num.innerHTML = 0;
		}else{
			alert('不能为空');
		}
	}
	//事件委派
	//鼠标移入每个li进行样式变化
	ul.onmouseover = function(e){
		let event = e.target;
		//判断节点名称和类名列表（判断是否移入的是li标签）event.nodeName==='LI'&& event.classList.contains('list')
		if(event.nodeName==='LI'){
			event.style.background = '#ccc';
		}
	}
	ul.onmouseout = function(e){
		let event = e.target;
		if(event.nodeName==='LI'){
			event.style.background = '#fff';
		}
	}




	自动检测输入内容的长度
	$('textarea').blur(function () {
		$('#num').html($('textarea').val().length);
    });
	$('button').click(function () {
		let name = $('input').val();
		let con = $('textarea').val();
		let str = `<li>
				<div class="body-left-first">
					<div class="img">
						<img src="./images/tou.png">
					</div>
					<p class="up">${name}</p>

					<p class="down">${con}</p>
				</div>
				</li>`;
		console.log(str);
		$('.body-left ul').append(str);
		$('input').val('');
		$('textarea').val('');
		$('#num').html('0');
    })
	$('.img img').click(function () {
		$(this).parents('ul li').remove();
    })
	$('textarea').blur(function () {
		$('#num').html($('textarea').val().length);
    });
	$('button').click(function () {
		let name = $('input').val();
		let con = $('textarea').val();
		let str = `<li>
				<div class="body-left-first">
					<div class="img">
						<img src="./images/tou.png">
					</div>
					<p class="up">${name}</p>

					<p class="down">${con}</p>
				</div>
				</li>`;
		if($('input').value !== '' && $('textarea').value !== ''){
            $('.body-left ul').append(str);
            $('input').val('');
            $('textarea').val('');
            $('#num').html(0);
            $('.img img').click(function () {
                $(this).parentsUntil('.body-left ul li').remove();
            });
		}else{
			alert('不能为空');
		}
    });



	// $('textarea').blur(function () {
	// 	$('#num').html($('textarea').val().length);
    // });
	// $('button').click(function () {
	// 	let name = $('input').val();
	// 	let con = $('textarea').val();
	// 	let str = `<li>
	// 			<div class="body-left-first">
	// 				<div class="img">
	// 					<img src="./images/tou.png">
	// 				</div>
	// 				<p class="up">${name}</p>
	//
	// 				<p class="down">${con}</p>
	// 			</div>
	// 			</li>`;
	// 	if($('input').value !== '' && $('textarea').value !== ''){
	// 		$('.body-left ul').append(str);
	// 		$('input').val('');
	// 		$('textarea').val('');
	// 		$('#num').html(0);
    //         $('.img img').click(function () {
    //             $(this).parentsUntil('body-left ul li').remove();
    //         });
	// 	}else{
	// 		alert('不能为空')
	// 	}
	//
    // });
}
