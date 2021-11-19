/*
// converting integer into binary number
// numberInt.toString(2)  result binary number
// let num = 10;

for (let i=1; i<50; i*=2) {
	if (i%10 === 0) {
		console.log(`${i}: `, i.toString(2))
	} else {
		console.log(` ${i} no % 10`, i.toString(2))
	}
	
	
}
*/


const isPalindrome = x => {
    if (x < 0) return false

    let reversed = 0, y = x
	let zero = 0;

    while (y > 0) {
    	console.log(y)
        const lastDigit = y % 10 // 121 % 10 --> 1,2,3
        console.log('lastDigit: ', lastDigit)
        reversed = (reversed * 10) + lastDigit // --> [1, ]
        console.log('reversed: ', reversed)
        //y = (y / 10) | 0 // y ==> 121/10 | 0  ---> check with bitwise operator
        y = Math.floor(y/10)
        console.log('y integer: ', y)
        console.log('y binary: ', y.toString(2));
    }
    // return x === reversed
    if ((x === reversed) === true) {
    	return true;
    } else {
    	return false;
    }
}

console.log(isPalindrome(12321))


// 1221

let numb = 123;
let init = 0;

function rev(n) {
		
}
// 
// rev(numb)

function manyDigit_recursion(count, n) {
	if (n === 0) {
		return 0
	} else {
		return 1 + manyDigit_recursion(count, (n/10)|0)
	}
}


function manyDigitLoop(n) {
	let count=0;
	while(n > 0) {
		// n = (n/10) | 0 
		// --> function bitwise utk omit dibelakang comma, or bisa juga Math.floor(n)
		n = Math.floor(n/10)
		count+=1;
	}
	return count
}

// console.log(manyDigitLoop(123456))



let value=123;

console.log( Math.floor(value/10) === ((value/10) | 0)) // true, because omit value behind comma!










