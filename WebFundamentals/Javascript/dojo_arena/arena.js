

$(document).ready(function(){
	$(".selectButton").hover(function(){
		var background = $(this).attr("alt");
		$("#wrapper").css("background-image", "url('image/" + background + ".jpg')");
	},
	function(){
		$("#wrapper").css("background-image", "url('image/default.jpg')");
	});

	$(".selectButton").click(function(){
		var background = $(this).attr("alt");
		$("#wrapper").css("background-image", "url('image/" + background + ".jpg')");
		$("#selectBox").html("<h2>Choose Your Fighter</h2><form id='pick1'><select name='fighters'><option value='choose your fighter' selected>choose your fighter</option><option value='leo'>Leonardo</option><option value='donny'>Donatello</option><option value='mikey'>Michaelangelo</option><option value='raphael'>Raphael</option></select></form><form id='pick2'><select name='fighters'><option value='choose your fighter' selected>choose your fighter</option><option value='leo'>Leonardo</option><option value='donny'>Donatello</option><option value='mikey'>Michaelangelo</option><option value='raphael'>Raphael</option></select></form>");
	});


	$(document).on("change", "#pick1", function(){
		var turtle = $("#pick1 option:selected").attr("value");
		if(turtle === 'choose your fighter'){
			return;
		}
		else {
			$("#fighter1").html("<img src='image/" + turtle + ".png'>");
		};
	});

	$(document).on("change", "#pick2", function(){
		var turtle = $("#pick2 option:selected").attr("value");
		if(turtle === 'choose your fighter'){
			return;
		}
		else {
			$("#fighter2").html("<img src='image/" + turtle + ".png'>");
		};
	});
});