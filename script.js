function mediaAluno() {


// logica de programação
// problema: obter 3 notas de um aluno, calcular a média,
// exibir a média e exibir a situação do aluno: aprovado
// em exame ou reprovado.

console.log('inicio do programa');

// declaração das variáveis
const nota1 = parseInt(document.getElementById('nota1').value);
const nota2 = parseInt(document.getElementById('nota2').value);
const nota3 = parseInt(document.getElementById('nota3').value);
// tipo de variavel com o valor constante, inalterável, imutável 

// calculo da media
const media = (nota1 + nota2 + nota3) / 3;

console.log("A nota 1 é:', nota1");
console.log("A nota 2 é:', nota2");
console.log("A nota 3 é:', nota3");

document.getElementById('resultado').innerHTML = 'A média do aluno é: ' + media + '<br>';

if (media >=7) {
    document.getElementById('resultado').innerHTML += 'situação APROVADO';
    console.log ('APROVADO');
} else {

    if (media >=5) {
        document.getElementById('resultado').innerHTML += 'situação EXAME';
        console.log('EXAME');

    }else 
    {
        document.getElementById('resultado').innerHTML += 'situação REPROVADO';
        console.log('REPROVADO');
    }
}



console.log('Fim do programa');

}