let wordToGuess = '';
let guessedLetters = [];
let attemptsLeft = 6;
let gameEnded = false; 

function startGame() {
    gameEnded = false;
    fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(response => response.json())
        .then(data => {
            wordToGuess = data[0];
            guessedLetters = [];
            attemptsLeft = 6;
            document.getElementById('message').innerText = '';
            document.getElementById('letterInput').value = '';
            updateDisplay();
        })
        .catch(error => {
            console.error('Error al obtener la palabra:', error);
            alert('No se pudo obtener una palabra. Intenta de nuevo.');
        });
}

function updateDisplay() {
    let displayWord = '';
    for (let letter of wordToGuess) {
        if (guessedLetters.includes(letter)) {
            displayWord += letter + ' ';
        } else {
            displayWord += '_ ';
        }
    }

    document.getElementById('wordDisplay').innerText = displayWord.trim();

    document.getElementById('attemptsLeft').innerText = attemptsLeft;
    document.getElementById('guessedLetters').innerText = guessedLetters.join(', ');

    if (displayWord.replace(/ /g, '') === wordToGuess) {
        gameEnded = true;
        document.getElementById('message').innerText = '¡Felicidades! Has ganado.';
        alert('¡Felicidades! Has ganado.');
    }

    if (attemptsLeft <= 0) {
        gameEnded = true;
        document.getElementById('message').innerText = '¡Perdiste! La palabra era: ' + wordToGuess;
        alert('¡Perdiste! La palabra era: ' + wordToGuess);
    }
}

function guessLetter() {
    if (gameEnded) {
        alert('El juego ha terminado. Inicia uno nuevo para jugar otra vez.');
        return; 
    }

    const inputLetter = document.getElementById('letterInput').value.toLowerCase();
    
    if (!inputLetter || inputLetter.length !== 1 || !/^[a-zA-Z]$/.test(inputLetter)) {
        alert('Por favor, ingresa una letra válida.');
        return;
    }

    if (guessedLetters.includes(inputLetter)) {
        alert('Ya has adivinado esta letra.');
        return;
    }

    guessedLetters.push(inputLetter);

    if (wordToGuess.includes(inputLetter)) {
        updateDisplay();
    } else {
        attemptsLeft--;
        updateDisplay();
    }

    document.getElementById('letterInput').value = ''; 
}
