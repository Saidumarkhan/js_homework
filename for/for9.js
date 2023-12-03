let a = 5;
let b = 8;
let c = 0;
for(let i = a; i <= b; i++){
    console.log(i);
    c = i;
    for(let j = c; j <= c; j++){
        let s = j ** j;
        console.log(s);
    }
}