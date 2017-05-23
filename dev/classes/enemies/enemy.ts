class Enemy extends gameObject {

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
        
        this.showHealth();
        this.draw();
        this.div.addEventListener("click", (e) => this.hit());
    }

    public draw() : void {
        // tekenen
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    } 

    private hit() : void {
        let audio = new Audio('./sounds/punch.mp3');
        audio.play();
        this.health -= 1;
        this.showHealth();
    }

    private showHealth() : void {
        let healthBar = new Healthbar(this.div, this.health);

        if (this.health == 0) {
            this.div.remove();
            healthBar.innerHTML = this.health;
        }
        healthBar.innerHTML = this.health;
    }
}