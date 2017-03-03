

$(document).ready(function(){
	for(var i = 1; i <= 151; i++){
		$(".pokeSelect").append("<img src='http://pokeapi.co/media/img/" + i + ".png' alt='"+i+"'>");
	};

	$(document).on("click", ".pokeSelect img", function(){
		var tempID = $(this).attr("alt");
		$.get("http://pokeapi.co/api/v1/pokemon/" + tempID, function(currentPoke){
			console.log(currentPoke.name);
			var newHTML = "<h2>" + currentPoke.name + "</h2><img src='http://pokeapi.co/media/img/" + tempID + ".png'><h3>Types</h3><ul>";
			var moreHTML = ""
			for(var i = 0; i < currentPoke.types.length; i++){
				moreHTML += "<li>"+currentPoke.types[i].name+"</li>";
			};
			newHTML += moreHTML;
			newHTML += "</ul><h3>Height</h3><p>" + currentPoke.height + "</p><h3>Weight</h3><p>" + currentPoke.weight + "</p>";
			$(".pokeDisplay").html(newHTML);
			console.log(newHTML);
		}, "json");
	});
});