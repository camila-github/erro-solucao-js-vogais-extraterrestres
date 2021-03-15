//SOLUCAO 1
const validadorCaracter = (caracter) => (!(/^(?=(?:.*?[]){0})[]*$/).exec(caracter) ? false : true);
const imprimirResultado = (resultado) => console.log(resultado);
const compararStrings = (a, b) => {
    let textoUm = a.split('');
    let textoDois = b.split('');
    let contador = 0;
    textoUm.forEach((element1) => {
        textoDois.forEach((element2) => {
            if (element2 != '' && element1 == element2) contador++;
        })
    });
    return contador;
}

(function entradaDeDados(textoUm){
  let textoDois, resultadoTextoUm, resultadoTextoDois;
  while (textoUm !== '') {
    resultadoTextoUm = validadorCaracter(textoUm);
    textoDois = gets();
    if (textoDois !== "") resultadoTextoDois = validadorCaracter(textoDois);
    if (resultadoTextoUm == false && resultadoTextoDois == false) imprimirResultado(compararStrings(textoUm, textoDois));
    textoUm = gets();
  }
})(gets());



//SOLUCAO 2 
textoUm = gets();
do {
    textoDois = gets();
    if (textoUm !== "") valorA = validadorCaracter(textoUm);
    if (textoDois !== "") valorB = validadorCaracter(textoDois);
    if (valorA == false && valorB == false) comparar(textoUm, textoDois);
    textoUm = gets();
} while (textoUm !== '')

function comparar(a, b) {
    let textoUm = a.split('');
    let textoDois = b.split('');
    let contador = 0;
    for (i in textoUm)
        for (x in textoDois)
            if (textoDois[x] != '' && textoUm[i] == textoDois[x]) contador++;
    console.log(contador);
}

function validadorCaracter(caracter) {
    var regex = /^(?=(?:.*?[]){0})[]*$/;
    return (!regex.exec(caracter) ? false : true);
}