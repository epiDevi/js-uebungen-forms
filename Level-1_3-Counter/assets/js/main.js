const result= document.querySelector("#result");

function plus1(){
    result.innerHTML= Number(result.innerHTML)+1;
}
function minus1(){
    result.innerHTML= Number(result.innerHTML)-1;
}
function plus10(){
    result.innerHTML= Number(result.innerHTML)+10;
}
function minus10(){
    result.innerHTML= Number(result.innerHTML)-10;
}
function plus100(){
    result.innerHTML= Number(result.innerHTML)+100;
}
function minus100(){
    result.innerHTML= Number(result.innerHTML)-100;
}
function multi2(){
    result.innerHTML= Number(result.innerHTML)* 2;
}
function reset(){
    result.innerHTML= 0;
}