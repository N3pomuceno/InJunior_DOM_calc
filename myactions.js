function adicao(){
    let dado = document.querySelector("input")
    if (dado.value == ""){
        alert("Por favor, insira uma nota.");
    } else if(isNaN(dado.value)){
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
    }else if (dado.value < 0 || dado.value > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
    } else {
        contagem++;
        soma += parseFloat(dado.value);
        document.getElementsById("historico_de_notas").innerHTML = mensagem(contagem, dado.value)
    }
    // Falta adicionar o dado na parte central que mostra os valores adicionados
}

function mensagem(cont, valor){
    return "A nota "+cont+" é "+valor
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