
// Reverse a string

// ========= advanced way
// let a = 'shakil babu';
// let result = a.split('').reverse().join('');
// console.log(result);


// ========== another one
let b = 'hello world';
let result = '';
for(let i = 0 ; i<b.length ; i++){
    result = b[i] + result ;
}
console.log(result);