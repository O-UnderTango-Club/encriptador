const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const outputMessage = document.getElementById('output-message');

const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encrypt(text) {
    return text.replace(/[aeiou]/g, letter => encryptionRules[letter]);
}

function decrypt(text) {
    let decryptedText = text;
    for (let [key, value] of Object.entries(encryptionRules)) {
        decryptedText = decryptedText.replace(new RegExp(value, 'g'), key);
    }
    return decryptedText;
}

function updateOutput(text) {
    if (text.trim() === '') {
        outputMessage.style.display = 'block';
        outputText.style.display = 'none';
        copyBtn.style.display = 'none';
    } else {
        outputMessage.style.display = 'none';
        outputText.style.display = 'block';
        outputText.value = text;
        copyBtn.style.display = 'block';
    }
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    const encryptedText = encrypt(text);
    updateOutput(encryptedText);
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    const decryptedText = decrypt(text);
    updateOutput(decryptedText);
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
});

inputText.addEventListener('input', () => {
    if (inputText.value.trim() === '') {
        updateOutput('');
    }
});