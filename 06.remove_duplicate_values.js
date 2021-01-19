
// Remove duplicate item from an array

// =================advanced way
// let mixedArray = [1,1,2,2,3,3,4,4,5];
// let result =[...new Set(mixedArray)];
// console.log(result);

// =============== another one
// let mixedArray = [1,1,2,2,3,3,4,4,5];
// let result = mixedArray.filter((item, index, arr) => {
//     return arr.indexOf(item)==index ;
// })
// console.log(result);

// ============ Another one

let mixedArray = [1,1,2,2,3,3,4,4,5];
let uniqueArr = [];

for(let i = 0; i<mixedArray.length; i++){
    let index = uniqueArr.indexOf(mixedArray[i]);
    if(index == -1){
        uniqueArr.push(mixedArray[i])
    }
}
console.log(uniqueArr);