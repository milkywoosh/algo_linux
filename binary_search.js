function binary_search(arr, start, end, n) {

	
		let mid = 0;
		while (start <= end) {
			mid = start+(end-start)/2 | 0;
			console.log(mid)
			if (arr[mid] === n) {
				return mid;
			}	
			else if (n > arr[mid]) {
				start = mid + 1;
			}
			else if (n < arr[mid]) {
				end = mid - 1;
			} else {
				return -1
			}
		}
}


data = [1,2,3,4,5,6,7,8];
let result  = binary_search(data, 0, data.length, 1);
console.log(result);