$(function(){
$.ajax({
	url:'../html/header.html',
	type:'get',
	success:function(res){
		$(res).replaceAll('header')
		$('<link rel="stylesheet" href="../css/header.css">').appendTo('head')
	}
})

})
    window.onload=function(){
        var headerbar=document.getElementsByClassName('header-bar')[0];
        headerbar.style.height='136px';
		var span1=document.getElementById('span1')
			console.log(span1)
		span1.onclick= function (){
        var opens=document.getElementsByClassName('header-bar')[0];
        var ss=document.getElementsByClassName('bar-span')[1];
        if(getComputedStyle(opens).height=='136px'){
            opens.style.background="url('../img/index/2.jpg')";
			setTimeout(function(){
            opens.style.height='250px';
            ss.innerHTML='收缩';
		},100)
        }else{
            opens.style.background="url('../img/index/1.jpg') ";
            opens.style.height='136px';
            ss.innerHTML='展开';
        }
    }


    }
 