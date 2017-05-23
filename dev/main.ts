class Game {

    private static instance: Game;
    private container : HTMLElement;
    private heroes  : Array<Hero>;
    private enemies : Array<Enemy>;

    constructor() {
        let heroes : Array<Hero> = new Array<Hero>();
        heroes.push(
            new Hero(this, 900, 650, 67, 67, 10, 3, 2)
        );

        let enemies : Array<Enemy> = new Array<Enemy>();
        enemies.push(
            new Enemy(this, 200, 650, 20, 200, 5, 3, 2)
        );

        this.checkCollision();

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

    private checkCollision() {
        for(let hero of this.heroes) {
            for(let enemy of this.enemies) {
                if(hero.hasCollision(enemy)) {

                }
            }
        }
    }
} 


// load
window.addEventListener("load", function() {
    let g : Game = Game.getInstance();
});