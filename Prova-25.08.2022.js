// #PROVA DE PROGRAMAÇÃO JAVASCRIPT. 08/25. //
// PROVA AINDA NÃO CORRIGIDA. PROFESSOR DANIEL, ESCOLA ESTADUAL MAGALI ALONSO. SP //



// Faça um codigo em JavaScipt que determine a geração de acordo com a data de nascimento "ano"  //


var geracao = 1995;


if (geracao <= 1945) {
    console.log("Geração silenciosa");
}  else if (geracao <= 1964) {
    console.log("Geração boomers");
    } else if (geracao <= 1980) {
  console.log("Geração X")
    }  else if (geracao <= 1996) {
        console.log("Geração milleniais");
    } else if (geracao => 1996) {
        console.log("Geração Z")
    }


    //faça um programa em JavaScript que calcule a media de duas notas, sendo n1 + n2 / 2 = media //
    

    var n1 = 30;
    var n2 = 10;
    var media = n1 + n2
    
    console.log((media)/2);


    // Faça um programa que imprima a Voltagem de acordo com a corrente eletrica e a potencia, sendo a formula P/I = V //


    var corrente = 220;
    var potencia = 40 ;
    var voltagem = potencia /  corrente

    console.log(voltagem)

    // Faça um programa em JavaScript  que determine  o IMC de uma pessoa sendo a formula  imc = kg / altura². Imprima o imc//


    var kg = 60
    var altura = 1.80
    var imc = kg/(altura * altura)

    console.log("o imc é", imc)

    // Faça um programa em JavaScript receba 3 numeros e determine qual o maior numero. //


 var n1 = 10;
 var n2 = 95;
 var n3 = 80;

 if (n1 > n2 && n1 > n3) {
    console.log(n1, "é o maior")
 }
 if (n2 > n3 && n2 > n1) {
    console.log(n2, "é o maior")
 } else {
   console.log(n3, "é o maior ")
 }
