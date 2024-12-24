
vitorias = 10
derrotas = 2
let nivel
console.log("O herói tem saldo de " + saldo + " e está no nível " + nivel + "!");
        
function calcularSaldo (vitorias, derrotas) {

   let saldo = vitorias - derrotas;
   
   switch (true) {
    case vitorias < 10:
        nivel = "Ferro";
        break;
    case vitorias <= 20:
        nivel = "Bronze";
        break;
    case vitorias <= 50:
        nivel = "Prata";
        break;
    case vitorias <= 80:
        nivel = "Ouro";
        break;
    case vitorias <= 90:
        nivel = "Diamante";
        break;
    case vitorias <= 100:
        nivel = "Lendário";
        break;
    default:
        nivel = "Imortal";
        break;
   }
}
return saldo()