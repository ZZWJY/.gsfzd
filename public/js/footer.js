$.ajax({
	url:'../html/footer.html',
	type:'get',
	success:function(res){
		$(res).replaceAll('footer')
		$('<link rel="stylesheet" href="../css/footer.css">').appendTo('head')
	}
})