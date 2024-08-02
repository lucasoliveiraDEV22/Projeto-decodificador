let cont = 0;

function criptografar(){
    let texto = document.querySelector(".texto-de-entrada").value;
    let letras = texto.split('');

    letras.forEach(function(letra, index){
        if(letra === 'a'){
            letras[index] = 'ai';
        }else if(letra === 'e'){
            letras[index] = 'enter';
        }else if(letra === 'i'){
            letras[index] = 'imes';
        }else if(letra === 'o'){
            letras[index] = 'ober';
        }else if(letra === 'u'){
            letras[index] = 'ufat';
        }
    })
    limparTextoInput(texto);
    gerarOutput(letras.join(''));
    
}

function descriptografar(){
    let texto = document.querySelector(".texto-de-entrada").value;
    
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('enter', 'e');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ufat', 'u');

    limparTextoInput(texto);
    gerarOutput(texto);
}

function gerarOutput(frase) {
    let output = document.querySelector('.area-output');
    let imagem = document.querySelector('.pessoa');
    let textoPadrao = document.querySelector('.texto-padrao');
    let textoOutput;

    if (cont === 0) {
        imagem.style.display = 'none';
        textoPadrao.style.display = 'none';
        output.style.justifyContent = 'space-between';

        textoOutput = document.createElement('p');
        textoOutput.classList.add('texto-output');
        output.appendChild(textoOutput);

        botaoCopiar = document.createElement('button');
        botaoCopiar.classList.add('botao-copiar');
        botaoCopiar.innerHTML = 'Copiar';
        botaoCopiar.addEventListener('click', copiarTexto);
        output.appendChild(botaoCopiar);

        cont++; 
    } else {
        limparTextoOutput();
        textoOutput = document.querySelector('.texto-output');
    }
    
    textoOutput.textContent = frase;
}

function limparTextoInput(){
    let input = document.querySelector(".texto-de-entrada");
    input.value = '';
}

function limparTextoOutput(){
    let output = document.querySelector('.texto-output');
    output.textContent = '';
}

function copiarTexto(){
    let output = document.querySelector('.texto-output').textContent;

    navigator.clipboard.writeText(output);

    limparTextoOutput();
}
