// Swap with temp
let a = 10 ; 
let b = 23 ;
let temp = a ;
a = b; 
b = temp ;
console.log(a); // a = 23
console.log(b); // b = 10


//Swap without temp
let first = 'Shakil Babu' ;
let second = 'Torikus Morshed' ;

[first, second] = [second, first];
console.log(first);
console.log(second);


// swap with (+,-)
let f = 10 ; 
let s = 20 ;

f = f+s ;
s = f-s ;
f = f-s ;

console.log(f);
console.log(s);


// swap with bitwise operator
let firstNumber = 100;
let secondNumber = 200 ;

firstNumber = firstNumber ^ secondNumber ;
secondNumber = firstNumber ^ secondNumber ;
firstNumber = firstNumber ^ secondNumber ;

console.log(firstNumber);
console.log(secondNumber);