/* exported JudgeDisplay */
/* globals */

'use strict';

const judgeDisplayTemplate = document.getElementById('judge-display-template');

class JudgeDisplay {
    constructor(score) {
        this.score = score;
        this.judgeState = './images/Farmer_Stressed.png';

    }

    update(score) {
        this.judgeState = './images/Farmer_Stressed.png'; // Reset to stressed every round
        this.judgeImage.src = this.judgeState; // Immediately update the image

        const roundScore = Math.abs(this.score - score);
        this.score = score;

        if(roundScore < 60) {
            this.judgeState = './images/Farmer_Stressed.png';
        }
        else if(roundScore < 100) {
            this.judgeState = './images/Farmer_Uncertain.png';
        }
        else {
            this.judgeState = './images/Farmer_Happy.png';
        }

        this.judgeImage.src = this.judgeState;

    }

    render() {
        const dom = judgeDisplayTemplate.content.cloneNode(true);
        this.judgeImage = dom.querySelector('img');
        this.judgeImage.src = this.judgeState;
        return dom;
    }
}