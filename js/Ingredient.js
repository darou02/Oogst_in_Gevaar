/* exported Ingredient */
/* globals */

'use strict';

const ingredientTemplate = document.getElementById('ingredient-template');

let chosenIngredients = [];

class Ingredient {
    constructor(ingredient, onClick) {
        this.ingredient = ingredient;
        this.onClick = onClick;
    }

    render() {
        this.ingredient.selected = false;
        const dom = ingredientTemplate.content.cloneNode(true);

        const image = dom.querySelector('img');
        image.src = 'images/' + this.ingredient.image;

        const input = dom.querySelector('input');
        input.addEventListener('change', () => {
            this.onClick(this.ingredient, input.checked);
            if(input.checked){
                image.classList.add('selected-ingredient');
                if (!chosenIngredients.includes(this.ingredient.name)) {
                    chosenIngredients.push(this.ingredient.name);}
            } else {image.classList.remove('selected-ingredient');
                const index = chosenIngredients.indexOf(this.ingredient.name);
                if (index > -1) {
                    chosenIngredients.splice(index, 1);
                }
            }
        });
        
        return dom;
    }
}