function resultage(){
    const wert= document.querySelector("#age");
    let output= 2023 - Number(wert.value) ;
    const print= document.querySelector("#result");
    print.innerHTML= output;
}