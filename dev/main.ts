class Game {

    private static instance: Game;
    private hero : Hero;
    private container : HTMLElement;

    constructor() {
        let heros : Array<Hero> = new Array<Hero>();
        heros.push(
            new Hero(this, 900, 650),
        );

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance() {
        if (! Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
} 


// load
window.addEventListener("load", function() {
    let g : Game = Game.getInstance();
});