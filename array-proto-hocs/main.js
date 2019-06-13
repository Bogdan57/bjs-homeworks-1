'use strict';

function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length) {
		return arr1.every((element, index) => {
			return element === arr2[index]; 
		});
	}
}



function memoize(fn, limit) {
	const results = [];
	return (a, b) => {
		let result = results.find( (memory) => compareArrays(memory.args, [a, b]) );

		if (result) {
			console.log('результат берётся из памяти');
			return result;
		} else {
			result = fn(a, b);
			results.push({args: [a, b], result: result});
		}

		if (results.length >= limit) {
			results.shift();
		}

		console.log('результат берётся не из памяти');
		return result;
	}

}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 10);
mSum( 3, 4 );
mSum( 8, 9 );
mSum( 83, 38 );
mSum( 777, 777 );
mSum( 1, 29 );
mSum( 11, 11 );
mSum( 15, 23 );
mSum( 123, 987 );
mSum( 15, 25 );
mSum( 83, 38 );
mSum( 878, 32 );
mSum( 3, 4 );