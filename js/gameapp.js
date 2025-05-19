/* exported GameApp */
/* globals PlayerDisplay, highScore, JudgeDisplay, RoundDisplay, Transition, ScoreDisplay */
'use strict';

window.onbeforeunload = () => {
    //window.localStorage.setItem('highScore', JSON.stringify(highScore));
    window.localStorage.setItem('userData', JSON.stringify(userArrayParse));
    
};



const userArray = window.localStorage.getItem('userData');
const userArrayParse = JSON.parse(userArray);
const chefSelect = userArrayParse[0];
const playerName = userArrayParse[1];
const roundNumber = userArrayParse[2];
const score = userArrayParse[3];
console.log('user array info:', userArrayParse);

const appTemplate = document.getElementById('app-template');


class GameApp {
    constructor() {
        this.roundNumber = roundNumber;
        this.score = score;
        this.playerName = playerName;
        this.chefSelect = chefSelect;
        
    }
    
    render() {

        userArrayParse[2] = this.roundNumber;
        userArrayParse[3] = this.score;
        const dom = appTemplate.content;
        document.getElementById('root').style.backgroundImage = 'url(./images/Round-bg.jpg)';
        

        const playerDisplaySection = dom.getElementById('player-display');
        const playerDisplayComponent = new PlayerDisplay(this.playerName, this.chefSelect);
        playerDisplaySection.appendChild(playerDisplayComponent.render());
        
        const judgeDisplaySection = dom.getElementById('judge-display');
        this.judgeDisplayComponent = new JudgeDisplay(this.score);
        judgeDisplaySection.appendChild(this.judgeDisplayComponent.render());

        const transitionSection = dom.getElementById('transition');
        
        const roundDisplaySection = dom.getElementById('round-display');
        this.roundDisplayComponent = new RoundDisplay(this.roundNumber, this.score, this.playerName, (roundScore) => {
            
            this.score += roundScore;
            this.scoreDisplayComponent.update(this.score);
            this.judgeDisplayComponent.update(this.score);
            this.roundDisplayComponent.hideIngredients();
            this.transitionComponent = new Transition(this.roundNumber, this.score, this.playerName, roundScore, chosenIngredients);
            transitionSection.appendChild(this.transitionComponent.render());
            
            window.setTimeout(() => {
                this.transitionComponent.clearTransitionMessage();
                if(this.roundNumber === 3){
                    // Save player score to highScore array
                    let storedScores = JSON.parse(window.localStorage.getItem('highScore')) || [];

                    storedScores.push({
                        playerName: this.playerName,
                        score: this.score
                        });

                    window.localStorage.setItem('highScore', JSON.stringify(storedScores));

                    // Save latest user state
                    window.localStorage.setItem('userData', JSON.stringify(userArrayParse));

                    // Redirect to high scores page
                    window.location.replace('hiscores.html');
                }
                else {
                    this.roundNumber++;
                    userArrayParse[2] = this.roundNumber;
                    userArrayParse[3] = this.score;

                    // **Clear chosenIngredients array before starting new round**
                    chosenIngredients = []; 
                    
                    // Reset judge to "stressed" before the new round
                    this.judgeDisplayComponent = new JudgeDisplay(this.score); // Recreate the JudgeDisplay
                    judgeDisplaySection.innerHTML = ''; // Clear previous judge display
                    judgeDisplaySection.appendChild(this.judgeDisplayComponent.render()); // Re-render the judge display

                    this.roundDisplayComponent.update(this.roundNumber);
                }
            }, 7500);
        });
        roundDisplaySection.appendChild(this.roundDisplayComponent.render());
        
        const scoreDisplaySection = dom.getElementById('score-display');
        this.scoreDisplayComponent = new ScoreDisplay(this.score);
        scoreDisplaySection.appendChild(this.scoreDisplayComponent.render());
        
        const exitButton = dom.getElementById('exit-button');
        exitButton.addEventListener('click', () => {
            window.location.replace('index.html');
        });
        
        return dom;
    }
}