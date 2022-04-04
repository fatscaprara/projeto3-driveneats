let verificaPrato;
let verificaBebida;
let verificaSobremesa;
let nome;
let endereco;
let nomePrato;
let precoPrato;
let nomeBebida;
let precoBebida;
let nomeSobremesa;
let precoSobremesa;
let total;


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

function verificarPedido() {
    if (verificaPrato && verificaBebida && verificaSobremesa) {
        document.querySelector("button").classList.add("botaoSelecionado");
        document.querySelector(".botaoSelecionado").innerHTML = "Fechar Pedido";
    }
}

function fecharPedido() {
    nome = prompt("Qual é o seu nome?");
    endereco = prompt("Qual o endereço para a entrega?");
    document.querySelector(".containerConfirmarPedido").classList.remove("escondido");

    nomePrato = document.querySelector(".pratos .selecionado h5").innerHTML;
    precoPrato = Number(document.querySelector(".pratos .selecionado h6 span").innerHTML.replace(",", ".")).toFixed(2);

    nomeBebida = document.querySelector(".bebidas .selecionado h5").innerHTML;
    precoBebida = Number(document.querySelector(".bebidas .selecionado h6 span").innerHTML.replace(",", ".")).toFixed(2);

    nomeSobremesa = document.querySelector(".sobremesas .selecionado h5").innerHTML;
    precoSobremesa = Number(document.querySelector(".sobremesas .selecionado h6 span").innerHTML.replace(",", ".")).toFixed(2);

    total = (Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2);

    document.querySelector(".nomePrato").innerHTML = nomePrato;
    document.querySelector(".precoPrato").innerHTML = precoPrato;

    document.querySelector(".nomeBebida").innerHTML = nomeBebida;
    document.querySelector(".precoBebida").innerHTML = precoBebida;

    document.querySelector(".nomeSobremesa").innerHTML = nomeSobremesa;
    document.querySelector(".precoSobremesa").innerHTML = precoSobremesa;

    document.querySelector(".total").innerHTML += total;
}

function confirmarPedido() {
    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$${total}
    Nome: ${nome}
    Endereço: ${endereco}`);
    window.location.href = `https://wa.me/5567996599103?text=${mensagem}`;
}

function cancelarConfirmacao() {
    document.querySelector(".containerConfirmarPedido").classList.add("escondido");
    document.location.reload(true);
}



