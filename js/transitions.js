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
            this.message = 'Sommige pesticiden doden niet alleen schadelijke insecten, maar ook nuttige zoals bijen en vlinders. Biologische oplossingen zijn beter, omdat ze de goede insecten niet beschadigen en daardoor de natuur beschermen';
        } else if (this.chosenIngredients.includes('D_CRISPR')) {
            this.message = 'Super!Dankzij CRISPR kunnen we het DNA van planten heel precies aanpassen. Hierdoor kunnen we planten maken die zich beter aanpassen aan droogte, zonder schadelijke stoffen te gebruiken!';
        } else if (this.chosenIngredients.includes('D_Chemical')) {
            this.message = 'Dit middel helpt de grond om langer water vast te houden, maar door die chemische stoffen raakt jouw bodem wel uitgeput en ziek, wat schadelijk is voor planten en dieren.';
        } else if (this.chosenIngredients.includes('D_Fertilizer')) {
            this.message = 'Mest helpt planten groeien, omdat het vol voeding zit. Maar als je te veel mest gebruikt, spoelen de extra stoffen weg naar de grond en het water. Dat kan rivieren en meren vervuilen en het leven daar verstoren.';
        } else if (this.chosenIngredients.includes('D_Microbial')) {
            this.message = 'Dit is een slimme en natuurlijke oplossing! Sommige bacteriën die in de bodem leven, helpen planten via hun wortels om beter te groeien, zelfs als het droog is door bijvoorbeeld planten meer water te laten opnemen. Zo hoeven we geen chemische producten te gebruiken!';
        } else if (this.chosenIngredients.includes('D_Wild_Relatives')) {
            this.message = 'Sommige plantensoorten uit dezelfde familie van jouw planten kunnen van nature goed tegen droogte, bijvoorbeeld omdat ze diepe of grote wortels hebben en daardoor goed water kunnen vinden. Maar dat zijn meestal niet de soorten die wij hier gebruiken als voedsel.';
        } else if (this.chosenIngredients.includes('D_Mulch')) {
            this.message = 'Een laagje bladeren of stro op de grond helpt om het water vast te houden en de bodem koel te houden. Maar bij lange periodes van droogte is dat niet genoeg: planten hebben dan extra hulp nodig, zoals aangepaste rassen of slimme technieken om water te voorzien.';
        } else if (this.chosenIngredients.includes('F_Chemical')) {
            this.message = 'Dit middel helpt om water sneller af te voeren uit de bodem, maar door die chemische stoffen raakt jouw bodem uitgeput en ziek, wat schadelijk is voor planten en dieren.';
        } else if (this.chosenIngredients.includes('F_CRISPR')) {
            this.message = 'Super! Met CRISPR kunnen we planten sterker maken zonder chemische middelen te gebruiken. Zo kunnen we ze beter laten overleven bij overstromingen, bijvoorbeeld door ze te helpen tegen te veel water in de grond!';
        } else if (this.chosenIngredients.includes('F_Microbial')) {
            this.message = 'Dit is een slimme en natuurlijke oplossing! Sommige bodembacteriën helpen planten via hun wortels om beter te groeien, zelfs als de grond te nat is. Ze beschermen de wortels en helpen de plant hiermee om te gaan door meer zuurstof te voorzien rond de wortels.';
        } else if (this.chosenIngredients.includes('F_Raised_Soil')) {
            this.message = 'Opgehoogde akkers kunnen planten beschermen tegen teveel water, omdat ze iets hoger liggen dan de rest van het land. Maar als het heel veel regent werken ze niet altijd goed, en het kost veel tijd en moeite om ze aan te leggen.';
        } else if (this.chosenIngredients.includes('F_Wild_Relatives')) {
            this.message = 'Sommige plantensoorten uit dezelfde familie van jouw planten kunnen van nature goed tegen te natte bodems, omdat ze bijvoorbeeld sterke wortels hebben of meer plek voor zuurstof voorzien. Maar dit zijn meestal niet degene die wij hier groeien om op te eten.';
        } else if (this.chosenIngredients.includes('F_Fertilizer')) {
            this.message = 'Mest is goed voor planten, omdat het vol voedingsstoffen zit. Maar als je te veel gebruikt (vooral bij veel regen) spoelt het weg en vervuilt het de bodem en het water om ons heen.';
        } else if (this.chosenIngredients.includes('I_CRISPR')) {
            this.message = 'Super! CRISPR is een speciale techniek waarmee wetenschappers het DNA van planten precies kunnen aanpassen. Met CRISPR kunnen we planten sterker maken, zodat ze beter tegen schadelijke insecten kunnen, zonder schadelijke stoffen te gebruiken!.';
        } else if (this.chosenIngredients.includes('I_Burning')) {
            this.message = 'Je kan de zieke planten verbranden om de insecten weg te krijgen, maar dan maak je schadelijke stoffen voor de natuur en ben je ook een deel van jouw gezonde planten kwijt!';
        } else if (this.chosenIngredients.includes('I_Insects')) {
            this.message = 'Sommige insecten zijn heel nuttig: ze kunnen de rupsen opeten die je planten aantasten. Maar vaak is dit alleen niet genoeg om het probleem helemaal op te lossen!';
        } else if (this.chosenIngredients.includes('I_Microbial')) {
            this.message = 'Dit werkt goed! De planten worden beschermd tegen schadelijke insecten dankzij een natuurlijk middeltje dat afkomstig is van een bacterie. Deze bacterie maakt een stofje aan dat giftig is voor bepaalde insecten, zoals rupsen. Voor mensen, dieren en de planten zelf is dit veilig.';
        } else {
            this.message = 'Sommige planten zoals lavendel, munt en basilicum kunnen van zichzelf insecten afschrikken door hun sterke geur. Maar ze houden niet alle rupsen tegen en als je deze planten ook gebruikt heb je minder plaats voor jouw andere planten!';
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