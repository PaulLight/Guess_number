//Game values

let min = 1,
    max = 10,
    winNumber = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements

const game = document.querySelector('#game'), 
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assing UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//Listen for guess

guessBtn.addEventListener('click', function(){
    
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number beetwen ${min} and ${max}`, 'red');
    }

    //Check if wom
    if (guess === winNumber){
        //Game over - won

        // //Disable input
        // guessInput.disable = true;
        // //Change border color
        // guessInput.style.borderColor = 'green';
        // //Set message
        // setMessage(`${winNumber} is correct, You Won!`, 'green');

        gameOver(true, `${winNumber} is correct, You Won!`);

        
    }else{
        //Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0 ){
            
        //      //Disable input
        //      guessInput.disable = true;
        //      //Change border color
        //      guessInput.style.borderColor = 'red';
        //       //Set message
        //    setMessage(`Game over, you lost. The correct number was ${winNumber}`, 'red');
            gameOver(false, `Game over, you lost. The correct number was ${winNumber}`);

            //Game over -lost
        }else{
            //Game continues - answer wrong
            //Change border color
            guessInput.style.borderColor = 'red';

            //Clear the Input
            guessInput.value = '';

            //Tell user it`s wrong number
           setMessage(`${guess} isn't correct, ${guessesLeft} guesses left`, "red");
        }
    }
})


// Game over
function gameOver(won, msg){
     
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input
     guessInput.disable = true;
     //Change border color
     guessInput.style.borderColor = color;
     guessInput.style.color = color;
     //Set message
     setMessage(msg);

     //Play again?
     guessBtn.value = 'Play Again';
     guessBtn.className += 'play-again'; 
}

//Get Winning Number

function getRandomNum(min, max){
    
    const a = Math.floor(Math.random()*(max - min + 1)+min);
    return a;
};

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

