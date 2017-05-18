class Game {

    private static instance: Game;

    constructor() {

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