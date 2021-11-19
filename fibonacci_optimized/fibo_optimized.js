


// penjelasan fibo ada di meetup FD6 binar menit 2:39-an


// function fibCache(num, cache = {}) {
//     // cache di javascript -> object
//     // cache ini akan sementara perbantuan dlm 'mengingat'
//     // kalo bahasa lain -> HashMap/HashTable
//     let _cache = cache
    
//     if (_cache[num] !== undefined) {
//       return _cache[num]
//     }
//     if (num === 2 || num === 1) {
//       return 1
//     }
//     let res = fibCache(num - 1, _cache) + fibCache(num - 2, _cache)
//     _cache[num] = res
//     console.log(_cache);
//     return res
//   }

  function fibCache_lkm(num, cache = {}) {
    // cache di javascript -> object
    // cache ini akan sementara perbantuan dlm 'mengingat'
    // kalo bahasa lain -> HashMap/HashTable
    // let _cache = cache
    
        if (cache[num] !== undefined) {
            console.log('num: ', num);
            return cache[num];
        }
        if (num === 2 || num === 1) {
            return 1
        }
        if (num === 0) {
            return 0
        }
        let res = fibCache_lkm(num - 1, cache) + fibCache_lkm(num - 2, cache)
        cache[num] = res
        console.log(cache);
        return res

  }


// function fibCache(n) {
//     if (n == 2 || n == 1) {
//         return 1;
//     } else {
//         return fibCache(n-1) + fibCache(n-2);
//     }
// }
  

// console.log(fibCache(1));
// console.log(`${t1-t0} ms`, t1, t0);
// console.log(fibCache(2));
// console.log(`${t1-t0} ms`, t1, t0);
// console.log(fibCache(3));
// console.log(`${t1-t0} ms`, t1, t0);
// console.log(fibCache(4));
// console.log(`${t1-t0} ms`, t1, t0);
// console.log(fibCache(5));
// console.log(`${t1-t0} ms`, t1, t0);
// console.log(fibCache(6));
// console.log(`${t1-t0} ms`, t1, t0);
// console.log(fibCache(3));
// console.log(`${t1-t0} ms`, t1, t0);
let t0 = new Date().getTime();

console.log(fibCache_lkm(20));
let t1 = new Date().getTime();
console.log(`${t1-t0} ms`, t1, t0);
