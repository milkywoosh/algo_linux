/*
	reference: 
		- https://visualgo.net/en/sorting
		- https://stackabuse.com/selection-sort-in-javascript

*/

function selection_sort(arr) {
	let cArr = arr.slice();
	let i;
	let count=0;
	for (i=0; i<cArr.length-1; i++) {
		let leastValue = i;//cArr[1]
		let j;
		for (j=i+1; j<cArr.length; j++) {
			// console.log('leastValue: ', leastValue, '\nvalue: ', cArr[leastValue])
			if (cArr[j] < cArr[leastValue]) { 
				leastValue = j;//2
			}
			[cArr[i], cArr[leastValue]] = [cArr[leastValue], cArr[i]]
			count++
			console.log(cArr, count);
		}
	}
	return cArr;
}

let input = [5,4,3,2,1];
let result = selection_sort(input);
console.log(result);