let operacion= Number(prompt('Que operacion desea hacer: 1- Sumar || 2- Restar || 3- Multiplicar || 4- Dividir'));
let numero1=Number(prompt('Ingrese el primer numero'))
let numero2=Number(prompt('Ingrese el segundo numero'))
let total;

if (operacion == 1){
  total=numero1+numero2
  alert('El resultado de la suma es '+total)
} else if (operacion == 2){
  total=numero1-numero2
  alert('El resultado de la resta es '+total)
} else if(operacion == 3){
  total=numero1*numero2
  alert('El resultado de la multiplicación es '+total)
  }else if(operacion == 4){
    total=numero1/numero2
    alert('El resultado de la division es '+total)
  } else{
    alert('Opcion de operacion incorrecta')
  }