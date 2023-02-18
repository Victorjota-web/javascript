function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 5 // = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background  = '#D5BC85'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#BF5B45'
    } else{
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#022326'
    }
}
