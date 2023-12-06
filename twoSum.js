
// TWO SUM (PAIRS OF 6 BY ADDING 2 ELEMENT IN AN ARRAY)
const arr = [1, 5, 7, 1];
const sum = 6;
let count = 0;

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] + arr[j] === sum){
            count++;
        }
    }
}
console.log(count);