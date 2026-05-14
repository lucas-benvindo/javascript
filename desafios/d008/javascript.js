var button = document.getElementById("btn")
button.addEventListener("click", calcular)
var result = document.getElementById("res")

function calcular(){
    var n = Number(prompt("Digite um número:"))
    result.innerHTML = `O número a ser analisado aqui será o ${n} <hr>` 
    result.innerHTML += `<p>O seu valor absoluto é ${Math.abs(n)} </p>`
    result.innerHTML += `<p>A sua parte inteira é ${Math.trunc(n)} </p>`
    result.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(n)} </p>`
    result.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(n)} </p>`
    result.innerHTML += `<p>A sua raiz raiz cúbica é ${Math.cbrt(n)} </p>`
    result.innerHTML += `<p>O valor de ${n}² é ${n ** 2} </p>`
    result.innerHTML += `<p>O valor de ${n}³ é ${n ** 3} </p>`
}