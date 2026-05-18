const botao = document.getElementById("btn-contar")
botao.addEventListener("click", contar)

function contar(){
    const inicio = document.getElementById("in1").value
    const final = document.getElementById("in2").value
    const passo = document.getElementById("ipasso").value
    const rstd = document.getElementById("res")

    if (inicio.length == 0 || final.length == 0) {
        rstd.innerText = "Impossível contar."
    } else if (Number(inicio) == Number(final)) {
        rstd.innerText = "Coloque valores diferentes."
    }
}
