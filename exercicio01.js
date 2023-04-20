let numberOne = prompt('Digite o primeiro numero: ')
let numberTwo = prompt('Digite o segundo numero: ')
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const soma = numberOne + numberTwo
alert(`A soma é igual a ${soma}`)

const subtracao = numberOne - numberTwo
alert(`A subtração é igual a ${subtracao}`)

const multiplicacao = numberOne * numberTwo
alert(`A multiplicação é igual a ${multiplicacao}`)

const divisao = numberOne / numberTwo
alert(`A divisão é igual a ${divisao}`)

const resto = numberOne % numberTwo
alert(`O resto da divisão é igual a ${resto}`)

if (numberOne / numberTwo == 1) {
  alert('A soma dos dois numeros é par!!!')
} else {
  alert('A soma dos dois numeros é impar')
}

if (numberOne / numberTwo == 1) {
  alert('Os numeros inseridos são iguais')
} else {
  alert('Os numeros inseridos são diferentes')
}