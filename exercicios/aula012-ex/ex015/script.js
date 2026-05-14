function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(document.getElementById("ano").value)
    var res = document.getElementById("res")

    if (fano == 0 || fano > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("sexo")
        var idade = ano - fano
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.height = "300px"
        img.style.width = "300px"
        img.style.borderRadius = "50%"
        img.style.margin = "20px"
        if (fsex[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute("src", "bebe-homem.jpg")
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute("src", "jovem-homem.jpg")
            } else if (idade < 50){
                //ADULTO
                img.setAttribute("src", "adulto-homem.jpg")
            } else {
                //IDOSO
                img.setAttribute("src", "idoso-homem.jpg")
            }
        } else {
            genero = "mulher"
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute("src", "bebe-mulher.jpg")
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute("src", "jovem-mulher.jpg")
            } else if (idade < 50){
                //ADULTO
                img.setAttribute("src", "adulta-mulher.jpg")
            } else {
                //IDOSO
                img.setAttribute("src", "idosa-mulher.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}

