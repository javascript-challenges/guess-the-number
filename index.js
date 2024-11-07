let randomSystemGenerated = Math.floor(Math.random()*101);
let form = document.querySelector('.game-form');
let input = document.querySelector('.guess-input');
let submitBtn = document.querySelector('.submit-btn');
let startGameBtn = document.querySelector('.start-game-btn');
let guessSuggestion = document.querySelector('.guess-suggestion');
let userGuess = document.querySelector('.user-guess');
let guessHistory = [];


form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form submission (no page refresh)
    guessHistory.push(input.value)
    userGuess.innerText = guessHistory.join(',');
    randomSystemGenerated = Math.floor(Math.random()*101);

    let correctedUserInput = parseInt(input.value);
    if (correctedUserInput > randomSystemGenerated) {
        guessSuggestion.innerText = 'Too high!';
    } else if (correctedUserInput < randomSystemGenerated) {
        guessSuggestion.innerText = 'Too Low!';
    } else if (correctedUserInput == randomSystemGenerated){
        guessSuggestion.innerText = `You got it! Congrats. It took you ${guessHistory.length} tries to crack the game!`;
        startGameBtn.removeAttribute('disabled');

    }
    input.value = '';
})

startGameBtn.addEventListener('click', (event) => {
    guessHistory = [];
    userGuess.innerText = '--'
})
