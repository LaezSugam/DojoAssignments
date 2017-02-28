function numbersOnly(arr){
	var arrNew = [];
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			arrNew.push(arr[i]);
		}
	}
	return arrNew;
}