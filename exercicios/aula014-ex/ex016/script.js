const botao = document.getElementById("btn-contar")
botao.addEventListener("click", contar)

function contar(){
    const inicioRaw = document.getElementById("in1").value
    const finalRaw = document.getElementById("in2").value
    let passoRaw = document.getElementById("ipasso").value
    const rstd = document.getElementById("res")

    if (inicioRaw.length == 0 || finalRaw.length == 0) {
        rstd.innerText = "Impossível contar."
        return
    }

    const inicio = Number(inicioRaw)
    const final = Number(finalRaw)
    let passo = Number(passoRaw)

    if (inicio == final) {
        rstd.innerText = "Coloque valores diferentes."
        return
    } 
    
    if (passo == 0 || passoRaw.length == 0 ) {
        alert("Passo inválido! Considerando PASSO 1")
        passo = 1
    }

    let contagem = ""

    passo = Math.abs(passo)

    if (inicio < final) {
        for (let c = inicio; c <= final; c += passo) {
            contagem += `${c}  `
        }
    } else {
        for (let c = inicio; c >= final; c -= passo) {
            contagem += `${c}  `
        }
    }

    rstd.innerText = contagem
}
