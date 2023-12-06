let x=0;
let y=1;
let fn = x + y;

while(fn < 100){
    if(x===0){
        console.log(x)
    }
    console.log(fn);
    x=y;
    y=fn;
    fn = x + y
}
