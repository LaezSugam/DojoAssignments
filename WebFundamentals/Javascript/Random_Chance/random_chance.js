var quarters = 0;

function addQuarter(){
	quarters++;
}

function slotMachine(){
	if(quarters > 0){
		quarters--;
		console.log("You have added a quarter.  You now have " + quarters + " quarters.");
	}
	else{
		console.log("Out of quarters.");
		return;
	}

	if(Math.trunc(Math.random() * 100) < 99){
		console.log("Sorry, you didn't win.")
	}
	else{
		var winnings = Math.trunc(Math.random()*50)+51;
		quarters += winnings;
		console.log("Contragulations, you have won " + winnings + " quarters!");
	}
}