const containerWord = document.querySelector('#ctnWord');
const btnGame = document.querySelector('#btnGame');
const input = document.querySelector('#input');
const play = document.querySelector('#play');

String.prototype.replaceAt = function (index, character) { return this.substring(0, index) + character + this.substring(index + character.length); }

let word = words[Math.floor((Math.random() * words.length))];
let wordUnderline = word.replace(/./g, "_ ");
let strike = true;
let strikeHits;

containerWord.innerHTML = wordUnderline;

const createWord = () => {
    letter = input.value
    for (const i in word) {
        if (letter == word[i]) {
            wordUnderline = wordUnderline.replaceAt(i * 2, letter);
            strike = false;
        }
    }
    containerWord.innerHTML = wordUnderline;

    if (strike) {
        strikeHits++;
        document.querySelector('#img-Hangman').style.backgroundPosition = -(204*strikeHits) + 'px 0';
        if (strikeHits == 4) {
            alert("Perdió papapapapapa");
            endGame();
        }
    } else {
        if(wordUnderline.indexOf('_') < 0){
            alert('Pólvora Papalindooo');
            endGame();
        }
    }
}

const endGame = () => {
    play.style.display = 'block';
}

const checkGame = btnGame.addEventListener('click', () => {
    createWord()
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
});

const startGame = () => {
    strikeHits = 0;
    play.style.display = 'none';
    document.querySelector('#img-Hangman').style.display = 'block';
    document.querySelector('#img-Hangman').style.backgroundPosition = '0px';
    input.style.display = 'block';
    containerWord.style.display = 'block';
    btnGame.style.display = 'block';
    checkGame;
}

play.addEventListener('click', startGame);