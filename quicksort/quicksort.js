
	// partition pseudo code
	// linear time --> means that the running time increases as the element in the array increases O(n)
	// pseudocode adopt from ABDUL BARI algorithm youtube
/*	
	partition(low, high) {
		pivot = arr[low];
		let i = low;
		let j = high;

		while(i<j) {
			do {
				i++;
			} while(arr[i] <= pivot);
			do {
				j--;
			} while(arr[j] > pivot);

			if(i < j) {
				swap(arr[i], arr[j])
			}
		}
		swap(arr[l], arr[j]);
		return j;
	}

	Quicksort(low, high) {
		if (low, high) {
			if(low < high) {
				j = partition(low, high);
				Quicksort(low, j);
				Quicksort(j+1, high);
			}
		}
	}
*/

/*
// From GeekForGeeks --> pseudocode adopt from CLRS algorithm book
function partition(arr, low, high) {

	let pivot = arr[high];// high: arr.length-1
	let i =  low-1; // low: 0;

	let j;
		// [8,7,6,5,4,3,2,1];
		for (j=low; j<=high-1; j++) { // -1 <= 6

			if (arr[j] <= pivot) { //
				i++;
				
				[arr[i], arr[j]] = [arr[j], arr[i]];
				
				
			}
		}

		[arr[i+1], arr[high]] = [arr[high], arr[i+1]];
		return (i+1);
		

}



function quickSort(arr, low, high) {
	let i=0;
	console.log(arr);
	if (low < high) {
		let partita = partition(arr, low, high);
		i++;
		console.log('i: ', i);
		console.log('partita: ', partita);
		quickSort(arr, low, partita-1);// decrease the highest index, to keep sorting the remaining value
		quickSort(arr, partita + 1, high);

	}

	// return arr;
}

*/




function partition(arr, low, high) {
	let pivot = arr[high]; // set pivot as last element in index
	let i = low-1; // keep track less value;

	// traverse element till before pivot
	for (let j=low; j<=high-1; j++) {
		if (arr[j] < pivot) {
			i++;
			[arr[i],arr[j]]
		}
	}
}

// let arr = [10, , 30, 90, 40, 50, 70]
// 					j:2				
// 				i:1
// 		j		
// 		0 arr[j]: 10 < 70:pivot - true, i++= 0 --> swap: arr[i:0]10 & arr[j:0]10
// 		1 arr[j]: 80 < 70 false
// 		2 arr[j]: 30 < 70:pivot - true, i++= 1 --> swap: arr[i:1]80 & arr[j:2]30
// 		3 arr[j]: 
// function quickSort(arr, low, high) {
	
// }



// let arr = [7,5,4,3,2];
let arr = [10, 80, 30, 90, 40, 50, 70]
			i
quickSort(arr, 0, arr.length-1);
console.log('last arr: ', arr);




