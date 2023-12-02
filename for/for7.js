let a = 5;
let b = 8;

for(let i = a; i <= b; i++){
    console.log(i);
    let c = i;
    for(let j = c; j <= c; j++){
        let s = j + j;
        console.log(s);
    }
}