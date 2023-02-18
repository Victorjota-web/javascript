var num =[5, 8, 2, 9, 3]
num[2]=6
num.push(7)
num.length
num.sort()
console.log(`Nosso vetor é composto por ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(4)
if(pos == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor 4 está na posição ${pos}`)
}


