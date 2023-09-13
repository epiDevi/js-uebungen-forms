function changecolor(){
    const red=Number(document.querySelector("#red").value);
    const green= Number(document.querySelector("#green").value);
    const blue=Number(document.querySelector("#blue").value);
    const wrap= document.querySelector(".wrap");

    //wrap.style.backgroundColor= "rgb(4, 128, 4)"
    wrap.style.backgroundColor= "rgb("+ red + "," +green +","+blue+")";
}
