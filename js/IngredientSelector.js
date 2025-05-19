/* exported IngredientSelectorDisplay */
/* globals Ingredient, getRandomInt, allIngredients */

'use strict';

const ingredientSelectorTemplate = document.getElementById('ingredient-selector-template');

class IngredientSelectorDisplay {
    constructor(recipe, onSubmit) {
        this.recipe = recipe;
        this.allIngredients = allIngredients;
        this.onSubmit = onSubmit;
        this.roundScore = 0;
        this.checkedIngredients = 0;
    }

    render() {
        const dom = ingredientSelectorTemplate.content.cloneNode(true);
        const recipeName = dom.getElementById('recipe-name');
        recipeName.textContent = this.recipe.name;
        
         // Use only the recipe ingredients, no dummy ingredients or shuffling
        //const arrayOf10Ingredients = this.recipe.ingredients.slice();
        //Find out how many ingredients the recipe specifies, and add them to arrayOf10Ingredients
        const recipeIngredients = this.recipe.ingredients;

        // putting the chosen ingredients onto the page
        const ingredientSelectorSection = dom.getElementById('ingredient');
        for (let i = 0; i < recipeIngredients.length; i++) {
            const ingredientSelectorComponent = new Ingredient(recipeIngredients[i], (ingredient, statusChange) => {
                if (statusChange === true) {
                    this.roundScore += ingredient.pointValue;
                    this.checkedIngredients++;
                } else {
                    this.roundScore -= ingredient.pointValue;
                    this.checkedIngredients--;
                }
            });
            ingredientSelectorSection.appendChild(ingredientSelectorComponent.render());
        }

        this.submitButton = dom.querySelector('img');
        this.submitButton.src = 'images/Roundbutton.png';
        this.submitButton.addEventListener('click', () => {
            if(this.checkedIngredients > 1) {
                alert('Je hebt teveel opties geselecteerd, je mag maar één oplossing kiezen.');
            }
            else {
                this.onSubmit(this.roundScore);
                this.submitButton.style.display = 'none';
            }
        });
        return dom;
    }
}
