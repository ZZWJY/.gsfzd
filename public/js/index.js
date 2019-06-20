

		var i=0
		var count=5;
		var cimgs=$('.carousel-imgs')
			console.log(cimgs)
		function moveTO(to){
			if(to==undefined){
				to=i+1
			}
			if(i==0){
				if(i<to){
					cimgs.addClass('transition')
				}else{
					cimgs.removeClass('transition')
					cimgs.css('margin-left',-count*580+'px')
					setTimeout(function(){
						cimgs.addClass('transition')
						moveTO(count-1)
					},100)
					return
				}
			}
			i=to
			cimgs.css('margin-left',-i*580+'px')
			$('.caousel-nav li').removeClass('active')
			if(i==count){
				setTimeout(function(){
//					cimgs.attr("transition","");
					cimgs.removeClass("transition")
					cimgs.css('margin-left','0px');
					i=0;
				},1000)
			}
			$('.caousel-nav li:eq('+i+')').addClass('active')
		}
		var flag=true;
		console.log($('.caousel-nav li'))
		function move(n){
			if(flag){
				moveTO(i+n);
				flag=false;
				setTimeout(function(){
					flag=true
				},1000)
			}
		}
		$('.carouselleft').click(function(){
			move(-1)
		})
		$('.carouselright').click(function(){
			move(1)
		})
		var carouselstar=setInterval(function(){moveTO()},3000)
		$('.carousel-imgs').mouseover(function(){
			clearTimeout(carouselstar)
		})
		$('.carousel-imgs').mouseout(function(){
			carouselstar=setInterval(function(){
				moveTO()
			},3000)
		})
	
	
		span1.onclick= function (){
			var opens=document.getElementsByClassName('header-bar')[0];
			var ss=document.getElementsByClassName('bar-span')[1];
			if(getComputedStyle(opens).height=='136px'){
				opens.style.background="url('../img/index/2.jpg')"
				opens.style.height='250px';
				ss.innerHTML='收缩';

			}else{
				opens.style.background="url('../img/index/1.jpg')";
				opens.style.height='136px';
				ss.innerHTML='展开';
			}
		}
