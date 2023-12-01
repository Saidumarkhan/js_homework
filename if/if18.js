// let a = 5, b = 6, c = 9;
let a = 12, b = 5, c = 7;

if(a > b && a > c){
    let max = a;
    if(b < max && b > c){
        middle = b;
        min = c;
    }else{
        middle = c;
        min = b;
    }
}else if(b > a && b > c){
    max = b;
    if(a < max && a > c){
        middle = a;
        min = c;
    }else{
        middle = c;
        min = b;
    }

}else{
    max = c;
}
console.log(max);
