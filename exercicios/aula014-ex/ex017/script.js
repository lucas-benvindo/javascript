// Aguarda o DOM carregar antes de vincular eventos
const botao = document.getElementById("btn-gerar") 
botao.addEventListener("click", gerar)

function gerar(){
    const numRaw = document.getElementById("inum").value //INPUT 
    
    // .value sempre retorna string, então length == 0 detecta campo vazio
    if (numRaw.length == 0) {
        alert("Digite um número!")
        return
    } 

    const num = Number(numRaw) // Converte string para número
    const rstd = document.getElementById("res") 
    let tabuada = "" 

    for (let c = 1; c <= 10; c++) {
        const conta = num * c 
        tabuada += `<p>${num} * ${c} = ${conta}</p>` // Monta HTML
    }

    // Substitui todo o conteúdo anterior ao invés de acumular
    rstd.innerHTML = tabuada  
}