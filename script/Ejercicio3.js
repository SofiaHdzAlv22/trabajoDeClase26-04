let trabajador1, trabajador2
let deducciones1, bonificaciones1, bruto1, neto1
let deducciones2, bonificaciones2, bruto2, neto2

trabajador1 = prompt('Ingrese el nombre del trabajador 1')
deducciones1 = Number (prompt('Ingrese las deducciones del trabajador 1'))
bonificaciones1 = Number(prompt('Ingrese las bonificaciones del trabajador 1'))
bruto1 = Number(prompt('Ingrese el salario del trabajador 1'))


trabajador2 = prompt('Ingrese el nombre del trabajador 2')
deducciones2 = Number (prompt('Ingrese las deducciones del trabajador 2'))
bonificaciones2 = Number(prompt('Ingrese las bonificaciones del trabajador 2'))
bruto2 = Number(prompt('Ingrese el salario del trabajador 2'))


neto1 = (bruto1 - deducciones1) + bonificaciones1
neto2 = (bruto2 - deducciones2) + bonificaciones2

if (neto1 > neto2){
    alert('El empleado ' + nombre1 + 'tiene salario más alto')
} else{
    alert('El empleado ' + nombre2+ 'tiene salario más alto')
}


