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

        var p = document.createElement('p');
        p.textContent = "A nota "+contagem+" é "+dado.value+".";
        var place = document.getElementsByClassName("container");
        place[0].appendChild(p);
    }
}

function resultado(med){
    return "A média aritmética das notas é "+med.toFixed(2);
}


function calculoMedia() {
    let med
    if (contagem == 0) {
        med = 0
    } else {
        med = soma/contagem
    }
    document.getElementById("resultado").innerHTML = resultado(med)
}


let contagem = 0
let soma = 0

var btn1 = document.querySelector("#button1")
btn1.addEventListener("click", adicao)


var btn2 = document.querySelector("#button2")
btn2.addEventListener("click", calculoMedia)