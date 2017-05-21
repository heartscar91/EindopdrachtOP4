class Game {

    private static instance: Game;
    private hero : Hero;
    private container : HTMLElement;

    constructor() {
        let heroes : Array<Hero> = new Array<Hero>();
        heroes.push(
            new Hero(this, 900, 650, 67, 67, 10, 3, 2)
        );

        let enemies : Array<Enemy> = new Array<Enemy>();
        enemies.push(
            new Enemy(this, 200, 650, 20, 200, 10, 3, 2)
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