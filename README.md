## Exercicio - Vogais Extraterrestres (Comparar Strings)

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Solução de problemas com JavaScript.(https://digitalinnovation.one)


#### Descrição do Desafio:

Desde o Gerador de Improbabilidade Infinita, muitos nem questionam sobre vidas extraterrestres, e se aprofundam em questionamentos mais improváveis, como, por exemplo, será que seres de outros planetas usam os mesmos caracteres que nós para se comunicarem? E se isso for verdade, será que usam as mesmas letras vogais que a gente? Pensando nisso, vários cientistas criaram inúmeros tipos de alfabetos alienígenas, usando as letras do nosso alfabeto, além dos dígitos, de 0 a 9, com as suas respectivas vogais. Baseados nisto, eles querem a sua ajuda para identificar vogais em alfabetos alienígenas e realizar a contagem.
Escreva um programa que, dado uma sequência de vogais, em um determinado alfabeto alienígena, contabilize, em um texto escrito com o mesmo alfabeto, quantas vogais o mesmo possui.


#### Entrada:

Haverá diversos casos de teste. Cada caso de teste é formado por duas linhas. A primeira linha informa uma palavra, formada por todas as vogais alienígenas de um determinado planeta. A segunda linha contém uma frase formada por letras do mesmo alfabeto. A entrada termina com fim de arquivo.


#### Saída:

Para cada caso de teste, imprima a quantidade de vogais alienígenas correspondente.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
aeiou | 16
" " | 8
o rato roeu a roupa do rei de roma | 3
" " |
4310 |
" " |
t3st3 p4r4 c0d1f1c4r |
" " |
kwy |
" " |
the quick brown fox jumps over the lazy dog |


#### Update:
14-03-2021 Utilizado ForEach. Criado funções utilizando constantes (const). Ajustado nomenclatura das constantes (Uso de conceitos CleanCode). Limitado o acesso de variaveis apenas para função que esta utilizando a variavel (utilizar dentro do escopo da função).


```javascript
//SOLUCAO 1
/* Utilizado ForEach. Criado funções utilizando constantes (const). Ajustado nomenclatura das constantes (Uso de conceitos CleanCode). Limitado o acesso de variaveis apenas para função que esta utilizando a variavel.*/

/*função nao permite caracter alfanumericos*/
const validadorCaracter = (caracter) => (!(/^(?=(?:.*?[]){0})[]*$/).exec(caracter) ? false : true);

/*imprime resultado*/
const imprimirResultado = (resultado) => console.log(resultado);

/*compara duas strings, um caracter por vez*/
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

/*Utilizado funcao anonima, para entrada dos dados e chamada das funcoes.*/
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
/*Utilizado For..in*/
textoUm = gets();
do {
    textoDois = gets();
    /*leitura de duas entradas e validacao para nao permitir caracter alfanumerico.*/
    if (textoUm !== "") valorA = validadorCaracter(textoUm);
    if (textoDois !== "") valorB = validadorCaracter(textoDois);
    /*comparar as duas strings*/
    if (valorA == false && valorB == false) comparar(textoUm, textoDois);
    textoUm = gets();
} while (textoUm !== '')

/*compara as duas strings.*/
function comparar(a, b) {
    let textoUm = a.split('');
    let textoDois = b.split('');
    let contador = 0;

    for (i in textoUm)
        for (x in textoDois)
            if (textoDois[x] != '' && textoUm[i] == textoDois[x]) contador++;
    console.log(contador);
}
/*funcao nao permite caracter alfanumericos*/
function validadorCaracter(caracter) {
    var regex = /^(?=(?:.*?[]){0})[]*$/;
    return (!regex.exec(caracter) ? false : true);
}
```
