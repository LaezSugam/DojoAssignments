var amount = .01;
var day = 1;

while(amount < Infinity){
	if(day === 30){
		console.log("You made $" + amount + " after 30 days.")
	}
	if(amount > 10000 && amount < 20000){
		console.log("It took " + day + " days to reach $10,000.");
	}
	if(amount > 1000000000 && amount < 2000000000){
		console.log("It took " + day + " days to reach $1 Billion.");
	}
	amount += amount;
	day++;
}

console.log("You have reach infite money after " + day + " days.")