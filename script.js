// Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);
    
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
     // current0El.textContent = currentScore;
    }
    else{
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        
        

        playerActive0.classList.toggle('player--active');
        playerActive1.classList.toggle('player--active');

    }
});


