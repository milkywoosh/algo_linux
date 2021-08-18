// ascending
function bub_sort(arr) {
	let sorted = false;
	let tmp;
	let count = 0;
	while (!sorted) {
		let i;
		
		sorted = true;
		for (i=0; i<arr.length-1; i++) {

			if (arr[i] > arr[i+1]) {
				[arr[i], arr[i+1]] = [arr[i+1], arr[i]];
				sorted = false;
				count++;
				console.log(arr, count);
			}
		}
	}
	return arr;
}

let input = [5,4,3,2,1];
let result = bub_sort(input);
console.log(result);