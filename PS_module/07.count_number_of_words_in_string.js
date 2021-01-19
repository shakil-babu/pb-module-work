// Count the number of words in a string

let sentence = "I am shakil babu  from  bogura " ;
let spliting = sentence.split(' ');
let wordNumber = spliting.length ;
for(let i = 0 ; i<spliting.length ;i++){
    if(spliting[i] == ''){
        wordNumber -= 1 ;
    }
}
console.log(wordNumber);