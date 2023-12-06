// Palindrome
// level ----> level

let str = "level";
let start = 0;
let end = str.length - 1;
let result = true;

while(end > start){
    if(str[start] !== str[end]){
        result = false;
    }

    console.log()
    start++;
    end--;
}

if(result){
    console.log("string is palindrome");
}