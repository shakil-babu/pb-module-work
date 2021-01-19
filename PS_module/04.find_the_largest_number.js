
// Find the largest element of an array

// ================== 1st way

// let numbers = [12,34,299,4,44,5,33] ;
// let largeNumber = Math.max(...numbers);
// console.log(largeNumber);

// ============== 2nd way

// let numbers = [12,34,299,4,44,5,33] ;
// let large_number = numbers.sort((a,b) => a-b).pop();
// console.log(large_number);

// =========== 3rd way

// let numbers = [12,34,299,4,44,5,33] ;
// let largeNumber = numbers.reduce((acc,cur) => acc > cur ? acc : cur , 0);
// console.log(largeNumber);


// ================ beginner way

// let numbers = [12,34,299,4,44,5,33] ;
// let maxNumber=0;
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > maxNumber){
//         maxNumber = numbers[i];
//     }
// }
// console.log(maxNumber);