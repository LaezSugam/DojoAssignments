
$(document).ready(function(){
	$("img").click(function(){
		var sourceNew = $(this).attr('data-alt-src');
		$(this).attr('data-alt-src', $(this).attr('src'));
		$(this).attr('src', sourceNew);
	})
	
});