let verificaPrato;
let verificaBebida;
let verificaSobremesa;


function selecionaPrato(elemento) {
    const opcaoSelecionada = document.querySelector(".pratos .selecionado");
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    const elementoSelecionado = document.querySelector(".pratos .selecionado");

    if (elementoSelecionado !== null) {
        verificaPrato = true;
    }
    else {
        verificaPrato = false;
    }
}

function selecionaBebida(elemento) {
    const opcaoSelecionada = document.querySelector(".bebidas .selecionado");
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    const elementoSelecionado = document.querySelector(".bebidas .selecionado");

    if (elementoSelecionado !== null) {
        verificaBebida = true;
    }
    else {
        verificaBebida = false;
    }
}

function selecionaSobremesa(elemento) {
    const opcaoSelecionada = document.querySelector(".sobremesas .selecionado");
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    const elementoSelecionado = document.querySelector(".sobremesas .selecionado");

    if (elementoSelecionado !== null) {
        verificaSobremesa = true;
    }
    else {
        verificaSobremesa = false;
    }
}

function fazerPedido() {
    if (verificaPrato && verificaBebida && verificaSobremesa) {
        alert("passou");
        document.querySelector("button").classList.add("botaoSelecionado");
    }
}

fazerPedido()

while(verificaPrato && verificaBebida && verificaSobremesa){
    alert("passou");
    document.querySelector("button").classList.add("botaoSelecionado");
}
