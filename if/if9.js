let temp = 39;


if(temp < 0){
    console.log("freezing");

}else if (temp > 1 && temp <= 10){
    console.log("very cold");
}else if(temp > 10 && temp <= 20){
    console.log("cold");
}else if(temp > 20 && temp <= 30){
    console.log("normal");
}else if(temp > 30 && temp <= 40){
    console.log("hot");
}else{
    console.log("very hot");
}