let nomeDoAluno = document.querySelector('#aluno');
let duasNotas = document.querySelector('.duas-notas');
let tresNotas = document.querySelector('.tres-notas');
let primeiraNota = document.querySelector('#primeira-nota');
let segundaNota = document.querySelector('#segunda-nota');
let terceiraNota = document.querySelector('.terceira-nota');
let btMediaSituacao = document.querySelector('.media-situacao');
let btLimpar = document.querySelector('.limpar');
let resultado = document.querySelector('.resultado');
let nota3;

// Função para calcular a média
function calcularMedia() {
    // Obtenha os valores das notas e converta para número
    let nota1 = parseFloat(primeiraNota.value);
    let nota2 = parseFloat(segundaNota.value);
    let media;

    // Verificar se existe a terceira nota e calcular a média
    if (nota3 && nota3.value) {
        let nota3Valor = parseFloat(nota3.value);
        if (nota1 >= 0 && nota2 >= 0 && nota3Valor >= 0) {
            media = (nota1 + nota2 + nota3Valor) / 3;
        }
    } else {
        if (nota1 >= 0 && nota2 >= 0) {
            media = (nota1 + nota2) / 2;
        }
    }

    // Verifica a situação do aluno
    if (media !== undefined) {
        let nome = nomeDoAluno.value; // Obter o nome do aluno
        if (media >= 7 && media <= 10) {
            resultado.textContent = `Excelente trabalho! O(a) aluno(a) ${nome} foi aprovado(a) com uma média de ${media.toFixed(1)}.`;
        }
        else if (media >= 4 && media <= 6.9) {
            resultado.textContent = `O(a) aluno(a) ${nome} está na final com uma média de ${media.toFixed(1)}.`;
        }
        else if (media < 4) {
            resultado.textContent = `Infelizmente, o(a) aluno(a) ${nome} não alcançou a média necessária e foi reprovado(a) com uma média de ${media.toFixed(1)}.`;
        }
        else {
            resultado.textContent = `ATENÇÃO! Os valores das notas devem ser entre 0 e 10.`;
        }
    }
    else {
        resultado.textContent = `Por favor, insira valores válidos para calcular a média.`;
    }
}

// Adiciona um event listener ao botão de "Adicionar Três Notas"
tresNotas.addEventListener('click', () => {
    nomeDoAluno.value = "";
    primeiraNota.value = "";
    segundaNota.value = "";
    resultado.textContent = "";

    // Verifica se o campo da terceira nota já foi criado
    if (!nota3) {
        // Cria um rótulo (label) para a terceira nota
        let nota3Label = document.createElement("label");
        nota3Label.setAttribute("for", "terceira-nota");
        nota3Label.textContent = "3ª nota:";

        // Cria o input para a terceira nota
        nota3 = document.createElement("input");
        nota3.setAttribute("type", "number");
        nota3.setAttribute("name", "terceira-nota");
        nota3.setAttribute("id", "terceira-nota");

        // Adiciona o label e o input dentro da `div` terceira-nota no HTML
        terceiraNota.appendChild(nota3Label);
        terceiraNota.appendChild(nota3);
    }
});

// Adiciona um event listener ao botão de "Adicionar Duas Notas"
duasNotas.addEventListener('click', () => {
    nomeDoAluno.value = "";
    primeiraNota.value = "";
    segundaNota.value = "";
    resultado.textContent = "";

    // Remove o campo da terceira nota se ele existir
    if (nota3) {
        terceiraNota.innerHTML = ''; // Limpa o conteúdo da `div`
        nota3 = null; // Reseta a variável
    }
});

// Adiciona um event listener ao botão de "Limpar"
btLimpar.addEventListener('click', () => {
    nomeDoAluno.value = "";
    primeiraNota.value = "";
    segundaNota.value = "";
    if (nota3) {
        nota3.value = ""; // Limpa o valor da terceira nota, se existir
    }
    resultado.textContent = ""; // Limpa o resultado
});

// Adiciona um event listener ao botão de "Calcular Média"
btMediaSituacao.addEventListener('click', calcularMedia);
