

function diagonalDifference(arr) {
	// let result = a-b;
	// return Math.abs(result);
	let left = 0;
	let right = 0;
	let i;
	let len = arr.length-1;
	for (i=0; i<arr.length; i++) { 
			left += arr[i][i];
			right += arr[i][len--];		
	}
	let result = left-right;
	return Math.abs(result);
}
let arr = [[11, 2, 4], 
		   [4, 5, 6], 
		   [10, 8, -12]];
console.log(diagonalDifference(arr));