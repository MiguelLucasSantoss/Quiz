let elementoPergunta1 = document.getElementById('pergunta1')
let elementoPergunta2 = document.getElementById('pergunta2')
let elementoPergunta3 = document.getElementById('pergunta3')
let elementoResposta = document.getElementById('resposta')
let elementoInputResultado = document.getElementById('inputResultado')

function MostraValorDaSelect(){
    elementoInputResultado.value = Number(elementoPergunta1.value) + Number(elementoPergunta2.value) + Number(elementoPergunta3.value)

    if (elementoInputResultado.value == 3) {
        alert("Parabéns você acertou todas as perguntas! realmente um gênio do futebol")
    }
    else if(elementoInputResultado.value == 2){
        alert("Você errou uma das perguntas!")
    }
    else if(elementoInputResultado.value == 1){
        alert("BAAAAAHHHHH acertou só uma, que abalo...")
    }
    else if(elementoInputResultado.value == 0){
        alert("Bem do bagre, errou tudo!")
    }
    else if(elementoResposta == elementoPergunta1, elementoPergunta2, elementoPergunta3){
        alert("E responder não quer...")
    }
}