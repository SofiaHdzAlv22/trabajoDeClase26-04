let placa1,pasajeros1, valor1,dinero1
let placa2, pasajeros2, valor2, dinero2

dinero1 = (pasajeros1 * valor1)
dinero2 = (pasajeros2 * valor2)

placa1 = prompt('Ingrese el número de placa 1')
pasajeros1 = Number(prompt('Ingrese le número de pasajeros que tuvo el bus 1'))
valor1 = Number(prompt('Ingrese el valor del pasaje 1'))

placa2 = prompt('Ingrese el número de placa 2')
pasajeros2 = Number(prompt('Ingrese le número de pasajeros que tuvo el bus 2'))
valor2= Number(prompt('Ingrese el valor del pasaje 2'))

if(dinero1 > dinero2){
    alert('El bus que más recolectó fue el de la placa ' + placa1 )
}else{
    alert('El bus que más recolectó fue ' + placa2 ) 
}