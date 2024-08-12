// ELEMENTOS HTML REFERENCIADOS AO DOM
const textArea = document.querySelector('.input-text');
const message = document.querySelector('.output-text');
const copyButton = document.getElementById('btn-copiar');
const noMessageElements = document.querySelector(
  '.main_container_message'
).children;
const outputSection = document.querySelector('.output');
const mainContainerMessage = document.querySelector('.main_container_message');
const img = document.querySelector('.img');
const h2 = document.querySelector('.area_msg h2');
const paragraph = document.querySelector('.text_message');

const encryptionMatrix = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
];

// Função para validar a string (sem acentos ou caracteres especiais)
function isValidString(string) {
  const regex = /^[a-z\s]+$/;
  return regex.test(string);
}

function encrypt(string) {
  string = string.toLowerCase();
  encryptionMatrix.forEach((pair) => {
    string = string.replaceAll(pair[0], pair[1]);
  });
  return string;
}

function decrypt(string) {
  string = string.toLowerCase();
  encryptionMatrix.forEach((pair) => {
    string = string.replaceAll(pair[1], pair[0]);
  });
  return string;
}

// Função para criptografar a string
function btnEncrypt() {
  const inputText = textArea.value;
  if (isValidString(inputText)) {
    const encryptedText = encrypt(inputText);
    message.value = encryptedText;
    textArea.value = '';
    toggleVisibility(true);
  } else {
    alert(
      'Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.'
    );
  }
}

// Função para descriptografar a string
function btnDecrypt() {
  const inputText = textArea.value;
  if (isValidString(inputText)) {
    const decryptedText = decrypt(inputText);
    message.value = decryptedText;
    textArea.value = '';
    toggleVisibility(true);
  } else {
    alert(
      'Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.'
    );
  }
}
// Função para esconder a imagem e o texto fixo na direita
function toggleVisibility(isOutputVisible) {
  if (isOutputVisible) {
    outputSection.style.display = 'flex';
    img.style.display = 'none';
    h2.style.display = 'none';
    paragraph.style.display = 'none';
  } else {
    outputSection.style.display = 'none';
    img.style.display = 'block';
    h2.style.display = 'block';
    paragraph.style.display = 'block';
  }
}

// Função para dar funcionalidade ao botão "Copiar"
document.getElementById('btn-copiar').addEventListener('click', () => {
  const textToCopy = message.value;
  if (textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        message.value = '';
        toggleVisibility(false);
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto: ', err);
      });
  }
});
// Inicializa a visibilidade correta ao carregar a página
toggleVisibility(false);
