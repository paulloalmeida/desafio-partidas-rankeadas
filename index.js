function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;

   switch (true) {
    case (saldo < 10) :
        nivel = "Ferro";
        break;
    case (saldo <= 20) :
        nivel = "Bronze";
        break;
    case (saldo <= 50) :
        nivel = "Prata";
        break;
    case (saldo <= 80) :
        nivel = "Ouro";
        break;
    case (saldo <= 90) :
        nivel = "Diamante";
        break;
    case (saldo <= 100) :
        nivel = "Lendário";
        break;
    default:
        nivel = "Imortal";
    }

    return  {
       saldo: saldo,
       nivel: nivel
    };
}

// Exemplo:
const resultado = calcularNivel(100, 10);
//console.log("O Herói tem saldo de" ${resultado.saldo} "e está no nível de "$ {resultado.nivel}");
console.log(`O Herói tem saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);