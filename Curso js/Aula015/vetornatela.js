var valores = [23, 39, 41, 73, 60, 18]
valores.sort()
/*
valores.sort()
valores.push(3)
for(var pos=0; pos < valores.length; pos++){
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}
*/
valores.push(4)
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores [pos]}`)
}
