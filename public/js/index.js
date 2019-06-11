(function(){
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
})();