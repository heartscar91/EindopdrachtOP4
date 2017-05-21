class Enemy extends gameObject {

    private game : Game;
    private speed: number = 0;
    private currentFrame: number = 0;

    constructor(game : Game, x : number, y : number, height : number, width : number, health : number, power : number, defense : number) {
        super('enemy');
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = health;
        this.power = power;
        this.defense = defense;
        this.speed = 3;
        
        this.draw();
        this.div.addEventListener("click", (e) => this.Hit());
    }

    public draw() : void {
        // tekenen
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    } 

    private Hit() : void {
        let audio = new Audio('./sounds/punch.mp3');
        audio.play();
        this.health -= 1;
    }
}