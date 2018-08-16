function Fibonacci(limit){
	var fibArray = [0,1];
	var count = 0;
	var lastNumber = 0;
	var beforeLastNumber = 0;

	while(count < limit){
		lastNumber = fibArray[fibArray.length-1];
		beforeLastNumber = fibArray[fibArray.length-2];
		var sum = lastNumber + beforeLastNumber;
		fibArray.push(sum);
		count++;
	}

	return fibArray;
}