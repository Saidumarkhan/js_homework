// let a = 50;
// let b = 89;
// let c = 1;
let a = 40;
let b = -20;
let c = 23;

let  max , min, middle;

if (a > b && a > c) {
    max = a;
    if (b > c) {
        middle = b;
        min = c;
    }else{
        middle = c;
        min = b;
    }
    
}else if(b > a && b > c){
    max = b;
    if(a > c){
        middle = a;
        min = c;

    }else{
        middle = c;
        min = a;
    }
} else{
    max = c;
    if(a > b){
        middle = a;
        min = b;
    }else{
        middle = b;
        min = a;
    }
}

console.log(middle);