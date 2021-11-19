// learn something
// understand the flow
// ...... leave it for sometime
// then ...... try to recall the memory that i had

// ascending sort using bubble sort
/*
function bubsort1(arr) {
		
	let notSorted = true;

	while(notSorted) {
		let i;
		notSorted = false;

		for (i=0; i<arr.length; i++) {
			if (arr[i] > arr[i+1]) {
				// switch 
				let tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
				notSorted = true;  
			}
		}
	}
	return arr;
}
*/

/*
function bubsort2(arr) {
	
	// let notSorted = true;
	do{
		notSorted = false;
		for (i=0; i<arr.length; i++) {
			if (arr[i] > arr[i+1]) {
				// switch 
				let tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
				notSorted = true;  
			}
		}
	}while( notSorted == true);

	return arr;
}
*/
// console.log(bubsort2([5,4,3,2,1]));
// expected value [1,2,3,4,5] 

/*
let i=0
do {
	console.log('b4 increment', i)
	i++; // 5
	console.log('after increment', i) // 4
}
// as long as i < 5 so it still increment
while (i < 5)
*/


// let i = 0;
// while (i < 5) {
// 	console.log('b4 incre: ', i)
// 	if (i == 3) break;
// 	i++;
// 	console.log('aftr incre: ', i)
// }



