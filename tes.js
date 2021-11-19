// params array[]
// 121
function isPalindrome(n) {
	let toStr = String(n)
	let start = 0
	let back = toStr.length-1;
	let result = false
	while(toStr[start] === toStr[back] && back >0) {
		start++;
		back--;
		console.log(toStr[start] , toStr[back])
		if (toStr[start] === toStr[back]) {
			result true;
		}
		
	}
	return result


}

console.log(isPalindrome(123421));