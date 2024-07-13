/// COMO EU FIZ FUNCIONAR ///


let nome = String(prompt ("Qual o seu nome? "))
let idade = parseInt(prompt ("Qual sua idade? "))
let cartaMotorista = prompt( "Você tem carta de motorista? (sim ou não)")
let carro = prompt("Você tem algum carro? (sim ou não) ")

if ( idade <= 17 && cartaMotorista === "não"){
    console.log(nome + ", você não pode dirigir");
}else if (idade >= 18 && cartaMotorista === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir mas não tem um carro");
   }else if (idade >= 18 && cartaMotorista === "sim" && carro === "sim ") {
    console.log(nome + "você será o motorista!")
}else {
    console.log( nome + ",situação não identificada");
}



//// CORREÇÃO DO EXERCICIO ///


let nome1
let idade1 
let temCarta = Boolean
let temCarro = Boolean

nome1 = prompt("Digite seu nome")
idade1 = parseInt(prompt("Digite sua idade"))
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if (opcaoCarta == "s") {
    temCarta = true
}
let opcaoCarro = prompt("Você tem carro? (s/n)")
if (opcaoCarro == "s") {
    temCarro = true
}

if (idade1 < 18 || !temCarta) {
    console.log(nome1 + ", você não pode dirigir")
} else if (idade1 >= 18 && temCarta && !temCarro) {
    console.log(nome1 + ", você pode dirigir mas não tem carro")
} else {
    console.log(nome1 + ", você será o motorista!")
}