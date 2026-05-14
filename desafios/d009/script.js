var cont = document.getElementById("btn-clicar")
var zero = document.getElementById("btn-zerar")    
var elemento = document.getElementById("n")
var n = 0 
cont.addEventListener("click", contar)
zero.addEventListener("click", zerar)

function contar(){
    n += 1
    elemento.innerText = n
}

function zerar(){
    n = 0
    elemento.innerText = n
}

