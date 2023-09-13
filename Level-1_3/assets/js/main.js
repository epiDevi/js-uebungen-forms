function resultDiff(){
    const age1= document.querySelector("#age1");
    const age2= document.querySelector("#age2");
    let output= Number(age2.value) - Number(age1.value) ;
    const print= document.querySelector("#result");
    print.innerHTML= output;
}