//SOLUÇAO 1 - for..in
textoUm = gets();
do {
    textoDois = gets();
    //leitura de duas entradas e validação para nao permitir caracter alfanumerico.
    if (textoUm !== "") valorA = validadorCaracter(textoUm);
    if (textoDois !== "") valorB = validadorCaracter(textoDois);
    //comparar as duas strings
    if (valorA == false && valorB == false) comparar(textoUm, textoDois);
    textoUm = gets();
} while (textoUm !== '')

//compara as duas strings.
function comparar(a, b) {
    let textoUm = a.split('');
    let textoDois = b.split('');
    let contador = 0;

    for (i in textoUm)
        for (x in textoDois)
            if (textoDois[x] != '' && textoUm[i] == textoDois[x]) contador++;
    console.log(contador);
}
//função nao permite caracter alfanumericos
function validadorCaracter(caracter) {
    var regex = /^(?=(?:.*?[]){0})[]*$/;
    return (!regex.exec(caracter) ? false : true);
}


//SOLUCAO 2 - forEach
textoUm = gets();
do {
    if (textoUm !== "") valorA = validadorCaracter(textoUm);
    if ((textoDois = gets()) !== "") valorB = validadorCaracter(textoDois);
    if (valorA == false && valorB == false) comparar(textoUm, textoDois);
    textoUm = gets();
} while (textoUm !== '')

//compara as duas strings.
function comparar(a, b) {
    textoUm = a.split('');
    textoDois = b.split('');
    contador = 0;

    textoUm.forEach((element1) => {
        textoDois.forEach((element2) => {
            if (element2 != '' && element1 == element2) contador++;
        })
    });
    console.log(contador);
}
//função nao permite caracter alfanumericos
function validadorCaracter(caracter) {
    return (!(/^(?=(?:.*?[]){0})[]*$/).exec(caracter) ? false : true);
}