function sayTime(hour,minute,period){
	var msg1 = "";
	var msg2 = "";
	if(minute < 30)
	{
		msg1 = "It's just after " + hour;
	}
	else if(minute > 30){
		msg1 = "It's almost " + (hour + 1);
	}

	if(period === "am"){
		msg2 = " in the morning.";
	}
	else{
		msg2 = " in the evening."
	}
	console.log(msg1 + msg2);
}