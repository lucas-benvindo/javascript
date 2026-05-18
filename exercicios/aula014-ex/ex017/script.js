const botao = document.getElementById("btn-gerar") //BOTÃO GERAR
botao.addEventListener("click", gerar)

function gerar(){
    const numRaw = document.getElementById("inum").value //INPUT 
    
    if (numRaw.length == 0) {
        alert("Digite um número!")
        return
    } 

    const num = Number(numRaw) //NÚMERO DE REFERÊNCIA
    const rstd = document.getElementById("res") //RESULTADO
    let tabuada = "" //TABUADA

    for (let c = 1; c <= 10; c++) {
        const conta = num * c //MULTIPLICAÇÃO
        tabuada += `<p>${num} * ${c} = ${conta}</p>`
    }

    rstd.innerHTML = tabuada 
}