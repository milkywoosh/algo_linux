function partition(arr, low, high) {
	console.log('low: ', low, 'high: ', high)
	let pivot = arr[high];// high: arr.length-1
	let i =  low-1; // low: 0;
	let j;
		// [8,7,6,5,4,3,2,1];
		for (j=low; j<=high-1; j++) { // -1 <= 6
			console.log('j: ', j, 'arr[j]: ', arr[j])
			if (arr[j] <= pivot) { //
			console.log('arr[j] <= pivot: ', arr[j], pivot) 
				i++;
				console.log('i: ', i, ' j', j);
				if (i > j) {
					[arr[i], arr[j]] = [arr[j], arr[i]];
				}
				
			}
		}
		if (arr[i+1] === arr[high]) {
			return (i+1);
		} else {
			console.log('arr[i+1] ', arr[i+1]);
			console.log('swap: ' ,arr[i+1], 'and: ',arr[high]);
			[arr[i+1], arr[high]] = [arr[high], arr[i+1]];
			console.log('arr partition: ', arr);
			console.log('i+1', i+1)
			return (i+1);
		}
		

}

function quickSort(arr, low, high) {
	console.log('qs -->  low: ', low, 'high: ', high);
	if (low < high) {
		let partita = partition(arr, low, high);
		console.log('partita: ', partita);
		console.log('qs 1');
		quickSort(arr, low, partita-1);// decrease the highest index, to keep sorting the remaining value
		console.log('qs 2');
		quickSort(arr, partita + 1, high);
	}

	// return arr;
}

let arr = [8,7,6,5,4,3,2,1];
quickSort(arr, 0, arr.length-1);
console.log('last arr: ', arr);