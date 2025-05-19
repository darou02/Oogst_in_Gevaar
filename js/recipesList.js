/* exported allRecipes, allIngredients */
'use strict';


// Ingredient Construction

class D_CRISPR {
    constructor(pointValue) {
        this.image = 'D_CRISPR.png';
        this.pointValue = pointValue;
        this.name = 'D_CRISPR';
    }
}

class D_Chemical {
    constructor(pointValue) {
        this.image = 'D_Chemical.png';
        this.pointValue = pointValue;
        this.name = 'D_Chemical';
    }
}

class D_Fertilizer {
    constructor(pointValue) {
        this.image = 'D_Fertilizer.png';
        this.pointValue = pointValue;
        this.name = 'D_Fertilizer';
    }
}

class D_Microbial {
    constructor(pointValue) {
        this.image = 'D_Microbial.png';
        this.pointValue = pointValue;
        this.name = 'D_Microbial';
    }
}

class D_Mulch {
    constructor(pointValue) {
        this.image = 'D_Mulch.png';
        this.pointValue = pointValue;
        this.name = 'D_Mulch';
    }
}

class D_Wild_Relatives {
    constructor(pointValue) {
        this.image = 'D_Wild_Relatives.png';
        this.pointValue = pointValue;
        this.name = 'D_Wild_Relatives';
    }
}

class F_Chemical {
    constructor(pointValue) {
        this.image = 'F_Chemical.png';
        this.pointValue = pointValue;
        this.name = 'F_Chemical';
    }
}

class F_Fertilizer {
    constructor(pointValue) {
        this.image = 'F_Fertilizer.png';
        this.pointValue = pointValue;
        this.name = 'F_Fertilizer';
    }
}

class F_CRISPR {
    constructor(pointValue) {
        this.image = 'F_CRISPR.png';
        this.pointValue = pointValue;
        this.name = 'F_CRISPR';
    }
}

class F_Microbial {
    constructor(pointValue) {
        this.image = 'F_Microbial.png';
        this.pointValue = pointValue;
        this.name = 'F_Microbial';
    }
}

class F_Raised_Soil {
    constructor(pointValue) {
        this.image = 'F_Raised_Soil.png';
        this.pointValue = pointValue;
        this.name = 'F_Raised_Soil';
    }
}

class F_Wild_Relatives {
    constructor(pointValue) {
        this.image = 'F_Wild_Relatives.png';
        this.pointValue = pointValue;
        this.name = 'F_Wild_Relatives';
    }
}

class I_Burning {
    constructor(pointValue) {
        this.image = 'I_Burning.png';
        this.pointValue = pointValue;
        this.name = 'I_Burning';
    }
}

class I_Insects {
    constructor(pointValue) {
        this.image = 'I_Insects.png';
        this.pointValue = pointValue;
        this.name = 'I_Insects';
    }
}

class I_Microbial {
    constructor(pointValue) {
        this.image = 'I_Microbial.png';
        this.pointValue = pointValue;
        this.name = 'I_Microbial';
    }
}

class I_Pesticide {
    constructor(pointValue) {
        this.image = 'I_Pesticide.png';
        this.pointValue = pointValue;
        this.name = 'I_Pesticide';
    }
}

class I_CRISPR {
    constructor(pointValue) {
        this.image = 'I_CRISPR.png';
        this.pointValue = pointValue;
        this.name = 'I_CRISPR';
    }
}

class I_Plants {
    constructor(pointValue) {
        this.image = 'I_Plants.png';
        this.pointValue = pointValue;
        this.name = 'I_Plants';
    }
}




//Recipe Construction 
class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}


const allIngredients = [
    new D_Chemical(0),
    new D_CRISPR(0),
    new D_Fertilizer(0),
    new D_Microbial(0),
    new D_Mulch(0),
    new D_Wild_Relatives(0),
    new F_Chemical(0),
    new F_CRISPR(0),
    new F_Microbial(0),
    new F_Fertilizer(0),
    new F_Raised_Soil(0),
    new F_Wild_Relatives(0),
    new I_Burning(0),
    new I_Insects(0),
    new I_Microbial(0),
    new I_Pesticide(0),
    new I_CRISPR(0),
    new I_Plants(0),
   
];





const Drought = new Recipe('Het heeft al weken niet geregend! Wat kan ik doen om er voor te zorgen dat mijn planten opnieuw water kunnen opnemen?',
    [
        new D_Chemical(10),
        new D_CRISPR(60),
        new D_Fertilizer(20),
        new D_Microbial(50),
        new D_Mulch(30),
        new D_Wild_Relatives(30),
    ]);











const Flooding = new Recipe('Het is al weken aan het regenen! Wat kan ik doen om er voor te zorgen dat mijn planten niet verdrinken?',
    [
        new F_Chemical(10),
        new F_CRISPR(60),
        new F_Microbial(50),
        new F_Raised_Soil(30),
        new F_Wild_Relatives(30),
        new F_Fertilizer(20),
    
    ]);
    
    




const Pest = new Recipe('Mijn planten worden opgegeten door rupsen! Hoe red ik mijn planten en stop ik de rupsen?',
    [
        new I_Insects(30),
        new I_Microbial(50),
        new I_Pesticide(10),
        new I_Burning(20),
        new I_CRISPR(60),
        new I_Plants(20),

    ]);

const allRecipes = [Drought, Flooding, Pest];