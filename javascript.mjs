import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q, a => rs(a)))

let soma = 0
let count = 0
let media = 0

while (true) {
    let strNum = await question('Insira o valor ' + (count + 1) + ' ou (N) para realizar as médias: ')

    if (strNum.toUpperCase() == 'N') break

    let num = parseFloat(strNum)

    if (isNaN(num)) {
        console.log("digite apenas Numeros ou N.")
        continue
    }

    if (num < 0 || num > 10){
        console.log("digite apenas numeros de 0 até 10.")
        continue
    }

    soma = soma + num
    count++
}

if (count == 0) {
    console.log("JOW! cê nem digitou um numero")
    process.exit()
}

media = soma / count
console.log('A média dos valores é: ', media)
process.exit()