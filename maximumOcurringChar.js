//maximum occuring character

const objstr ={};
let maxkey = "";

function MaximumOccuringChar(str){
    for(let i=0; i<str.length; i++){
        const key = str[i];
        if(!objstr[key]){
            objstr[key] = 0
        }

        objstr[key]++;
        if(maxkey === "" || objstr[key] > objstr[maxkey]){
            maxkey = key;
        }

    }

    console.log(`maximum occuring character is ${maxkey}`)
}

MaximumOccuringChar("fatima")