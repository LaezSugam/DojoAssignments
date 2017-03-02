var users = [];
var identifier = 0;

/*function cardFlipHandler(){
	$(".card").click(function(){
		var tempID = $(this).attr("identifier");
		if($(this).attr("state") === "front"){
			$(this).html("<p>" + users[tempID].description + "</p>");
			$(this).attr("state", "back");
		}
		else {
			$(this).html("<h1>" + users[tempID].first_name + " " + users[tempID].last_name + "</h1><p>Click for description</p>");
			$(this).attr("state", "front");
		}
	});
}*/

$(document).ready(function(){
	/*cardFlipHandler();*/
	$("#addUser").click(function(){
		var fname = $("form").find("input[name='first_name']").val();
		var lname = $("form").find("input[name='last_name']").val();
		var desc = $("form").find("input[name='description']").val();
		users.push({first_name: fname, last_name: lname, description: desc});
		$("#rightSide").append("<div class='card' identifier='" + identifier + "' state='front'><h1>" +fname + " " + lname + "</h1><p>Click for description</p></div>");
		identifier++;
		/*cardFlipHandler();*/
	});

	$(document).on("click", ".card", function(){
		var tempID = $(this).attr("identifier");
		if($(this).attr("state") === "front"){
			$(this).html("<p>" + users[tempID].description + "</p>");
			$(this).attr("state", "back");
		}
		else {
			$(this).html("<h1>" + users[tempID].first_name + " " + users[tempID].last_name + "</h1><p>Click for description</p>");
			$(this).attr("state", "front");
		}
	});
});