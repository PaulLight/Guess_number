//Game values

let min = 1,
    max = 10,
    winNumber = 2,
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

//Listen for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number beetwen ${min} and ${max}`, 'red');
    }

    //Check if wom
    if (guess === winNumber){
        //Game over - von
        //Disable input
        guessInput.disable = true;
        //Change border color
        guessInput.style.borderColor = 'green';
        //Set message
        setMessage(`${winNumber} is correct, You Won!`, 'green');
    }else{
        //Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0 ){
            
             //Disable input
             guessInput.disable = true;
             //Change border color
             guessInput.style.borderColor = 'red';
              //Set message
           setMessage(`Game over, you lost. The correct number was ${winNumber}`, 'red');

            //Game over -lost
        }else{
            //Game continues - answer wrong
           
            //Set message
           setMessage(`${guess} isn't correct, try again, please`, 'black');
        }
    }
})

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

