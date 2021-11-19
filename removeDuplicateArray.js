
/*
function removeDuplicateArray(nums) {
	let track = 0;
	for (let i=1; i<nums.length; i++) {
		if (nums[i] !== nums[track]) {
			track++;
			let tmp = nums[i];
			nums[i] = nums[track];
			nums[track] = tmp
		}
	}
	nums.splice(track+1, nums.length)
}
*/

function  removeDuplicateArray(nums) {
	
	nums.forEach((currValue, index, arr) => {
		let track = 0;
		if (arr[index] !== arr[track]) {
			track++;
			let tmp = arr[index]
			arr[index] = arr[track];
			arr[track] = tmp;
		}
	})
	return nums;
}

let arr = [1,1,1,2,2,3,3,4,4,5,5,5,5,6,6,6];
removeDuplicateArray(arr)
console.log(arr);