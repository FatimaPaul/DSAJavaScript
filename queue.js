//Queue FIFO
let data= [];
let currSize = data.length;

function enqueue(newVal){
    data[currSize] = newVal;
    currSize++;
}

function dequeue(){
    for(let i=0; i<data.length; i++){
        data[i] = data[i+1];
    }
    
    currSize--;
    data.length = currSize;
}

enqueue(56);
enqueue(34);
dequeue();
dequeue();
console.log(data)