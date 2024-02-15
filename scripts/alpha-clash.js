// function play (){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen.classList);

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround.classList);
// }

function handleKeyboardKeyupEvent (event){
    const playerPassed = event.key;
    console.log('player passed', playerPassed);

    // stop the game if pressed 'esc'
    if(playerPassed === 'Escape'){
        gameOver();
    }


    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPassed, expectedAlphabet);

    // check matched or not
    if(playerPassed === expectedAlphabet){
        console.log('you got a point');
        console.log('you have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);




        // --------------------------
        // // update score
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed lost a life');
        const lifeScore = getTextElementValueById('life-score');
        const updatedLife = lifeScore - 1;
        setTextElementValueById('life-score', updatedLife);


        if(updatedLife === 0){
            gameOver();
        }


        // --------------------------
        // 1. get the current life number
        // const lifeScoreElement = document.getElementById('life-score');
        // const lifeScoreText = lifeScoreElement.innerText;
        // const lifeScore = parseInt(lifeScoreText);
        // console.log(lifeScore);

        // // 2. reduce the life count
        // const newLife = lifeScore - 1;

        // // display the updated life count
        // lifeScoreElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent);


function continueGame (){
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


function play (){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('life-score', 5);
    setTextElementValueById('current-score', 0);



    continueGame()
}

function gameOver (){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}