/* exported RoundDisplay */
/* globals IngredientSelectorDisplay, allRecipes */

'use strict';

const roundDisplayTemplate = document.getElementById('round-display-template');

class RoundDisplay {
    constructor(roundNumber, score, playerName, onSubmit) {
        this.recipeList = allRecipes;
        this.roundNumber = roundNumber;
        this.score = score;
        this.playerName = playerName;
        this.onSubmit = onSubmit;
    }

    hideIngredients() {
        const itemSelector = this.itemSelectorSection;
        while(itemSelector.lastElementChild) {
            itemSelector.lastElementChild.remove();
        }
    }

    update(roundNumber){
        this.roundNumber = roundNumber;

        

        const recipe = pickRandomRecipe(this.recipeList, this.roundNumber);
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe, this.onSubmit);
  
        this.itemSelectorSection.appendChild(itemSelectorComponent.render());
        
        if(this.roundNumber === 2) {
            document.getElementById('root').style.backgroundImage = 'url(./images/Round-bg.jpg)';
        } else if(this.roundNumber === 3) {
            document.getElementById('root').style.backgroundImage = 'url(./images/Round-bg.jpg)';
        }
    }


    render() {
        const dom = roundDisplayTemplate.content.cloneNode(true);
        const recipe = pickRandomRecipe(this.recipeList, this.roundNumber);
        const tableImage = dom.querySelector('img');
        tableImage.src = 'images/Table.jpg';

        this.itemSelectorSection = dom.getElementById('ingredient-selector');
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe, this.onSubmit);
        this.itemSelectorSection.appendChild(itemSelectorComponent.render());

        return dom;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickRandomRecipe(allRecipes, roundNumber) {
    const prefix = roundNumber === 1 ? 'D_' :
                   roundNumber === 2 ? 'F_' :
                   roundNumber === 3 ? 'I_' : '';

    const filteredRecipes = allRecipes.filter(recipe => 
        recipe.ingredients.every(ingredient => ingredient.image.startsWith(prefix))
    );

    const index = getRandomInt(filteredRecipes.length);
    return filteredRecipes[index];
}