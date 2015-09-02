var Problem3 = (function(){

	// The prime factors of 13195 are 5, 7, 13 and 29.
	// What is the largest prime factor of the number 600851475143 ?  12/2, 6/2 = 3

	var target = 600851475143;
	var result;
	var largestPrimeFactor;
	var first30Primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,];  


	for (var i = 0; i < first30Primes.length; i++){
		
		if ( target % first30Primes[i] === 0 ){
			
			result = target / first30Primes[i];
			
			if ( result % first30Primes[i] === 0  ){
				
				largestPrimeFactor = first30Primes[i];
				break;
			}
		}
	}

	return largestPrimeFactor;
}());