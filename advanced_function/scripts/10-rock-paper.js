let score = JSON.parse(localStorage.getItem('scores'))
            || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updatescoreElement();

        /*
        if(!score){
            score={
                wins:0,
                losses:0,
                Ties:0
            };
        }
        */
        let isAutoPlaying=false;

        let intervalId;
        function autoPlay(){
            if(!isAutoPlaying){
                intervalId= setInterval(function(){
                    const playerMove=pickComputermove();
                    playgame(playerMove);
                },1000);
                isAutoPlaying=true;
            }
           else{
                clearInterval(intervalId);
                isAutoPlaying=false;
           }
        }

        function pickComputermove() {
            const randomNumber = Math.random();
            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'Rock';

            }
            else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'Paper';
            }
            else if (randomNumber >= 2 / 3 & randomNumber < 1) {
                computerMove = 'Scissor';
            }
            return computerMove;
        }
        function playgame(playerMove) {
            const computerMove = pickComputermove();
            let result = ''

            if (playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'Tie.';
                }
                else if (computerMove === 'Paper') {
                    result = 'You lose.';
                }
                else if (computerMove === 'Scissor') {
                    result = 'You Win.';
                }
            }
            else if (playerMove === 'Paper') {

                if (computerMove === 'Rock') {
                    result = 'You Win.';
                }
                else if (computerMove === 'Paper') {
                    result = 'Tie.';
                }
                else if (computerMove === 'Scissors') {
                    result = 'You lose.';
                }

            }
            else if(playerMove==='Scissor'){
                if (computerMove === 'Rock') {
                    result = 'You lose.';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Win.';
                }
                else if (computerMove === 'Scissor') {
                    result = 'Tie.';
                }
            }

            if (result === 'You Win.') {
                score.wins++;
            }
            else if (result === 'You lose.') {
                score.losses++;
            }
            else if (result === 'Tie.') {
                score.ties++;
            }

            localStorage.setItem('scores', JSON.stringify(score));
            updatescoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML =`You <img src="images/${playerMove}-emoji.png" class="move-icon">
            <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
        }

        function updatescoreElement() {
            document.querySelector('.js-score').innerHTML =
                `Wins: ${score.wins},Losses: ${score.losses}, Ties: ${score.ties}`;
        }