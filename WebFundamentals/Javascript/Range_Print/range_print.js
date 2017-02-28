//Print range from start to end incrementing by skip
function rangePrint(start,end,skip){
	//Check if there is an end, if not set it to start and set start to 0
	if(!end){
		end = start;
		start = 0;
	}
	//Check if there is a skip, if there is not it sets it to 1 if the end is greater than the start and -1 if the start is greater than the end. This goes after the check for the end to ensure that start and end can be compared.
	if(!skip){
		if(end > start){
			skip = 1;
		}
		else if(start > end){
			skip = -1;
		}
	}
	//The first part is for incrementing through positives, the second through negatives.
	if(end > start && skip > 0){
		while(start < end){
			console.log(start);
			start += skip;
		}
	}
	else if(end < start && skip < 0){
		while(start > end){
			console.log(start);
			start += skip;
		}
	}
}