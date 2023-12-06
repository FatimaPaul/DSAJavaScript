//stack reverse a string and array
let data = [];
let currSize = data.length;

function push(newVal){
    data[currSize] = newVal;
    currSize++;
}

function pop(){
    let poppedElement = data[currSize -1];
    currSize--;
    data.length = currSize;
    return poppedElement;
}

let str = "abcd";
str = str.split(""); //["a", "n", "i", "l"]
// console.log(str);

function ReverseStr(item){
    for(let i=0; i< item.length;i++){
        push(item[i]);
    }
    for(let i=0; i< item.length; i++){
        item[i] = pop();
        console.log(item[i]);
    }
}
ReverseStr(str);

str = str.join("")
console.log(str); //["l", "i", "n", "a"]