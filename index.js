
vitorias = 10
derrotas = 2
let nivel

function calcularSaldo () {
console.log(vitorias - derrotas)
}

function concatenar () {
switch (true) {
    case calcularSaldo() < 10:
        nivel = "Ferro";
        console.log("O herói tem saldo de " + calcularSaldo() + " e está no nível " + nivel + "!");
        break;
    case calcularSaldo() <= 20:
        nivel = "Bronze";
        console.log("O herói tem saldo de " + calcularSaldo() + " e está no nível " + nivel + "!");
        break;
    case calcularSaldo() <= 50:
        nivel = "Prata";
        console.log("O herói tem saldo de " + calcularSaldo() + " e está no nível " + nivel + "!");
        break;
    case calcularSaldo() <= 80:
        nivel = "Ouro";
        console.log("O herói tem saldo de " + calcularSaldo() + " e está no nível " + nivel + "!");
        break;
    case calcularSaldo() <= 90:
        nivel = "Diamante";
        console.log("O herói tem saldo de " + calcularSaldo() + " e está no nível " + nivel + "!");
        break;
    case calcularSaldo() <= 100:
        nivel = "Lendário";
        console.log("O herói tem saldo de " + calcularSaldo() + " e está no nível " + nivel + "!");
        break;
    default:
        nivel = "Imortal";
        console.log("O herói tem saldo de " + calcularSaldo() + " e está no nível " + nivel + "!");
        break;
 }
}
concatenar()