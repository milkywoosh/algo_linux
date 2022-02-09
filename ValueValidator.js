// ========= > FIRST CHECKING
const dataX =(x) => x > 5 // need x argument
const dataY = (y) => y < 10 // need y argument

let cek = [dataX, dataY] //===> accumulate value TRUE OR FALSE, depends on value input whether or not meet dataX and dataY
let flag = true
for (const validator of cek) { // ----> loop thru cek array
    console.log(validator(4)) // ----> logging each result
    flag = flag && validator(4) // ----> last result
}
console.log(flag)



// ========= > ANOTHER CHECKING
const length = config => value => {
  let isValid = true;
  if (config.min) {
    isValid = isValid && value.trim().length >= config.min;
  }
  if (config.max) {
    isValid = isValid && value.trim().length <= config.max;
  }
  return isValid;
};

// how to use the method?????
let result = length({min: 5})("asdasd")
console.log(result)
