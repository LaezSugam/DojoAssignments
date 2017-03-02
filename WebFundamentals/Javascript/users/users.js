
$(document).ready(function(){
	$("#addUser").click(function(){
		var newLine = "<tr><td>" + $("form").find("input[name='first_name']").val() + "</td><td>" + $("form").find("input[name='last_name']").val() + "</td><td>" + $("form").find("input[name='email']").val() + "</td><td>" + $("form").find("input[name='contact_number']").val() + "</td></tr>";
		$("#userTable tbody").append(newLine);
	});
});