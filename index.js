
vitorias = 1065
derrotas = 2
let nivel

function saldoVitorias () {
console.log(vitorias - derrotas)
}
switch (true) {
    case saldoVitorias < 10:
        nivel = "Ferro";
        console.log("O herói tem saldo de " + "saldoVitorias()" + " e está no nível " + nivel + "!");
        break;
    case saldoVitorias <= 20:
        nivel = "Bronze";
        console.log("O herói tem saldo de " + "saldoVitorias()" + " e está no nível " + nivel + "!");
        break;
    case saldoVitorias <= 50:
        nivel = "Prata";
        console.log("O herói tem saldo de " + saldoVitorias() + " e está no nível " + nivel + "!");
        break;
    case saldoVitorias <= 80:
        nivel = "Ouro";
        console.log("O herói tem saldo de " + saldoVitorias() + " e está no nível " + nivel + "!");
        break;
    case saldoVitorias <= 90:
        nivel = "Diamante";
        console.log("O herói tem saldo de " + saldoVitorias() + " e está no nível " + nivel + "!");
        break;
    case saldoVitorias <= 100:
        nivel = "Lendário";
        console.log("O herói tem saldo de " + saldoVitorias() + " e está no nível " + nivel + "!");
        break;
    default:
        nivel = "Imortal";
        console.log("O herói tem saldo de " + saldoVitorias() + " e está no nível " + nivel + "!");
        break;
    
}