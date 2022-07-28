function adicao(){
    let dado = document.querySelector("input")
    contagem++;
    soma += parseFloat(dado.value);
    // Falta adicionar o dado na parte central que mostra os valores adicionados
}

function calculoMedia() {
    let med
    if (contagem == 0) {
        med = 0
    } else {
        med = soma/contagem
    }
    // usar innerHTML para colocar na pagina o resultado
    console.log(contagem, soma, med)
}


let contagem = 0
let soma = 0

var btn1 = document.querySelector("#button1")
btn1.addEventListener("click", adicao)


var btn2 = document.querySelector("#button2")
btn2.addEventListener("click", calculoMedia)