let NomeHeroi = "Batman";
let QuantidadeXp = 9001;
let categoria;

if (QuantidadeXp < 1000) {
    categoria = "Ferro";
    console.log("o herói de nome " + NomeHeroi + " está no nível " + QuantidadeXp);
} else if (QuantidadeXp >= 1001 && QuantidadeXp <= 2000) {
    categoria = "Bronze";

}
else if (QuantidadeXp >= 2001 && QuantidadeXp <= 5000) {
    categoria = "Prata"
}

else if (QuantidadeXp >= 6001 && QuantidadeXp <= 7000) {
    categoria = "Ouro"
}

else if (QuantidadeXp >= 7001 && QuantidadeXp <= 8000) {
    categoria = "Platina"
}

else if (QuantidadeXp >= 8001 && QuantidadeXp <= 9000) {
    categoria = "Ascendente"
}

else if (QuantidadeXp >= 9001 && QuantidadeXp <= 10000) {
    categoria = "Imortal"
}

else if (QuantidadeXp >= 10001)
    categoria = "Radiante"
else {
    categoria = "Outra categoria";
}

console.log("O herói de nome: " + NomeHeroi + " está no nivel de " + categoria);
