var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var rgst = document.getElementById("res")

button1.addEventListener("click", click1)
button2.addEventListener("click", click2)
button3.addEventListener("click", click3)
button4.addEventListener("click", click4)

function click1(){
    rgst.innerHTML += "<p> Clicou no primeiro botão </p>"
}

function click2(){
    rgst.innerHTML += "<p> Clicou no segundo botão </p>"
}

function click3(){
    rgst.innerHTML += "<p> Clicou no terceiro botão </p>"
}

function click4(){
    rgst.innerHTML += "<p> Clicou no quarto botão </p>"
}
