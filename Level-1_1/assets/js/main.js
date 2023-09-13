function verdoppeln (){
    const wert= document.querySelector("#num");
    let output= Number(wert.value) *2;
    const print= document.querySelector("#result");
    print.innerHTML= output;
}