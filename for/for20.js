let n = 5;
let s = 0;

for(let i = 1;i <= n;i++){
    let k = 1;
    for(let j = 1; j<= i;
        j++){
            k*= 1/j;
        }
        s += k;
}
console.log(s);