function adicao(){
    let dado = document.querySelector("input")
    contagem++;
    soma += dado.value;
}



let contagem = 0
let soma = 0

var btn1 = document.querySelector("#button1")
btn1.addEventListener("click", adicao)


var btn2 = document.querySelector("#button2")
