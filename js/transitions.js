/* exported highScoreList Transition  */
/* globals userArrayParse */


'use strict';


const highScoreData = window.localStorage.getItem('highScore');
let highScore = JSON.parse(highScoreData);

if(!highScore) {
    highScore = [];
}

const transitionTemplate = document.getElementById('transition-template');

class Transition {
    constructor(roundNumber, score, playerName, roundScore, chosenIngredients) {
        this.roundNumber = roundNumber;
        this.playerName = playerName;
        this.score = score;
        this.message = '';
        this.chosenIngredients = chosenIngredients;  // Access the global array here
        this.roundScore = roundScore;
    

        this.randomMessages = {
            1: [//Drought
                'Wist je dat? Sommige planten overleven in de woestijn omdat hun wortels water efficiënt opslaan!',
                'Wist je dat? Bodembacteriën kunnen planten helpen droogte te overleven door hun wortels gezonder te maken!',
                'Wist je dat? Wetenschappers onderzoeken hoe ze gewassen beter bestand kunnen maken tegen hitte en weinig water!',
            ],
            2: [//Flooding
                'Wist je dat? Sommige planten hebben luchtzakjes in hun stengels waardoor ze onder water kunnen overleven!',
                'Wist je dat? De juiste mix van bodembacteriën kan gewassen helpen groeien, zelfs als de grond te nat is!',
                'Wist je dat? Sommige rijstsoorten kunnen overleven onder water doordat ze tijdelijk stoppen met groeien!',
            ],
            3: [//Insects
                'Wist je dat? Boeren laten soms lieveheersbeestjes los om schadelijke insecten op te eten!',
                'Wist je dat? Sommige planten weren van nature insecten af met speciale geuren!',
                'Wist je dat? Wetenschappers onderzoeken hoe we gewassen sterker kunnen maken zonder pesticiden!',
            ]
        };  
    }

    render() {
        

        //if statement selects proper transition message based on score and round
        const dom = transitionTemplate.content.cloneNode(true);
        this.messageContainer = dom.getElementById('transition-message-container');
        this.messageSection = dom.querySelector('section');

        // Special messages for chemical and CRISPR choices
        if (this.chosenIngredients.includes('I_Pesticide')) {
            this.message = 'Chemische pesticiden zullen ook nuttige insecten zoals bijen en vlinders schaden! Biologische oplossingen zijn vaak beter!';
        } else if (this.chosenIngredients.includes('D_CRISPR')) {
            this.message = 'Super! Dankzij CRISPR kunnen we planten verbeteren zonder schadelijke stoffen te gebruiken. Hierdoor kunnen we de planten beter tegen droogte beschermen!';
        } else if (this.chosenIngredients.includes('D_Chemical')) {
            this.message = 'Dit middel helpt de grond om langer water vast te houden, maar door die chemische stoffen raakt jouw bodem wel uitgeput en ziek, wat niet goed is voor planten en dieren.';
        } else if (this.chosenIngredients.includes('D_Fertilizer')) {
            this.message = 'Mest is goed voor planten, maar te veel ervan zal jouw grond en water vervuilen...';
        } else if (this.chosenIngredients.includes('D_Microbial')) {
            this.message = 'Dit is een goede oplossing! Sommige bodembacteriën kunnen planten via de wortelen helpen om in droogte beter te groeien, helemaal natuurlijk!';
        } else if (this.chosenIngredients.includes('D_Wild_Relatives')) {
            this.message = 'Sommige familieleden van jouw planten kunnen van nature goed tegen droogte door bijvoorbeeld hun grote wortels, maar dit zijn niet degene die wij hier groeien om op te eten.';
        } else if (this.chosenIngredients.includes('D_Mulch')) {
            this.message = 'Een laagje bladeren of stro helpt een beetje, maar dat zal jouw oogst niet redden!';
        } else if (this.chosenIngredients.includes('F_Chemical')) {
            this.message = 'Dit middel helpt om water sneller af te voeren uit de bodem, maar door die chemische stoffen raakt jouw bodem uitgeput en ziek, wat niet goed is voor planten en dieren. ';
        } else if (this.chosenIngredients.includes('F_CRISPR')) {
            this.message = 'Super! Dankzij CRISPR kunnen we planten verbeteren zonder schadelijke stoffen te gebruiken. Hierdoor kunnen we de planten beter tegen overstromingen beschermen!';
        } else if (this.chosenIngredients.includes('F_Microbial')) {
            this.message = 'Dit is een goede oplossing! Sommige bodembacteriën kunnen planten via de wortelen helpen om goed te groeien wanneer er teveel water is, helemaal natuurlijk!';
        } else if (this.chosenIngredients.includes('F_Raised_Soil')) {
            this.message = 'Opgehoogde akkers helpen soms om de planten te beschermen van het water, maar werken niet altijd als het veel regent en kost veel werk.';
        } else if (this.chosenIngredients.includes('F_Wild_Relatives')) {
            this.message = 'Sommige familieleden van jouw planten kunnen van nature goed tegen teveel water, maar dit zijn niet degene die wij hier groeien om op te eten.';
        } else if (this.chosenIngredients.includes('F_Fertilizer')) {
            this.message = 'Mest is goed voor planten, maar te veel ervan zal jouw grond en water vervuilen...';
        } else if (this.chosenIngredients.includes('I_CRISPR')) {
            this.message = 'Super! Dankzij CRISPR kunnen we planten verbeteren zonder schadelijke stoffen te gebruiken. Hierdoor kunnen we de planten beter tegen schadelijke insecten beschermen!';
        } else if (this.chosenIngredients.includes('I_Burning')) {
            this.message = 'Je kan de zieke planten verbranden terwijl je de insecten wegjaagt, maar dan vervuil je de lucht en ben je waarschijnlijk ook een deel van jouw gezonde planten kwijt!';
        } else if (this.chosenIngredients.includes('I_Insects')) {
            this.message = 'Deze goede insecten zullen je helpen door de schadelijke insecten op te eten, maar dit lost vaak het probleem niet volledig op!';
        } else if (this.chosenIngredients.includes('I_Microbial')) {
            this.message = 'Dit werkt goed! Jouw planten zullen beschermd zijn tegen de insecten dankzij een natuurlijk middeltje van een bacterie dat rupsen weghoudt.';
        } else {
            this.message = 'Sommige planten zoals lavendel, munt en basilicum kunnen van zichzelf insecten afschrikken met speciale geuren, dit zal natuurlijk niet alle rupsen wegjagen en als je deze ook in je akker zet heb je wel minder plaats voor jouw planten!';
        } 
        this.transitionMessage = dom.querySelector('h2');
        this.transitionMessage.textContent = this.message;
        return dom;
    }
    clearTransitionMessage() {

        
        while(this.messageSection.lastElementChild) {
            this.messageSection.lastElementChild.remove();
        }
        this.transitionMessage.textContent = '';
    }
}