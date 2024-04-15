let nome = "Guilherme";

let rank;

//Nome do monstro
let lutar = "Dragão"; 

//Mude para determinar quantas vezes irá lutar com o monstro
let quantidadeDeLutas = 10; 

let experiencia = 0;


// Seleciona o monstro é aquantidade de vezes que vai lutar
for (let i = 0; i < quantidadeDeLutas; i++) {
    switch (lutar) {
        case "Slime":
            experiencia += 100;
            break;
        case "Lobo":
            experiencia += 500;
            break;
        case "Abelha Rainha":
            experiencia += 1000;
            break
        case "Dragão":
            experiencia += 5000;
            break
        default:
            console.log("Monstro não existe")
            break

    }
}

// verifica qual rank o Herói pertence
if (experiencia < 1000) {
    rank = "Ferro";
} else if (experiencia > 1001 && experiencia < 2000) {
    rank = "Bronze";
} else if (experiencia > 2001 && experiencia < 5000) {
    rank = "Prata";
} else if (experiencia > 6001 && experiencia < 7000) {
    rank = "Ouro";
} else if (experiencia > 7001 && experiencia < 8000) {
    rank = "Platina";
} else if (experiencia > 8001 && experiencia < 9000) {
    rank = "Ascendente";
} else if (experiencia > 9001 && experiencia < 10000) {
    rank = "Imortal";
} else if (experiencia >= 10001) {
    rank = "Radiante";
}
console.log("O Herói de nome " + nome + " está no rank " + rank)