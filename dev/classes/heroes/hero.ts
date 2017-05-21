class Hero extends gameObject {

    private game : Game;
    private speed: number = 0;
    private currentFrame: number = 0;

    constructor(game : Game, x : number, y : number, height : number, width : number, health : number, power : number, defense : number) {
        super('hero');
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = health;
        this.power = power;
        this.defense = defense;
        this.speed = 3;
        
        this.showHealth();
        this.draw();
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        this.div.addEventListener("click", (e) => this.Hit());
    }

    public draw() : void {
        // tekenen
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    } 

    // keyboard input zorgt dat de snelheid wordt aangepast
    protected onKeyDown(event:KeyboardEvent):void {
        console.log(event.keyCode);
        switch(event.keyCode){
            case 38: //UP
                this.y -= 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero-front.png)";
                break;
            case 39: //RIGHT
                this.x += 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero.png) -66px -134px";
                break;
            case 40: //DOWN
                this.y += 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero-front.png)";
                break;
            case 37: //LEFT
                this.x -= 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero.png) -66px -68px";
                break;
            case 32:
                this.Attack();
                break;
        }
    }

    private showHealth() {
        let healthBar = document.getElementById('healthBar');
        
        if (this.health == 0) {
            healthBar.innerHTML = this.health;
            alert("GAME OVER");
        }

        healthBar.innerHTML = this.health;
    }

    private Attack() {
        let audio = new Audio('./sounds/punch.mp3');
        audio.play();
    }

    private Hit() : void {
        let audio = new Audio('./sounds/punch.mp3');
        audio.play();
        this.health -= 1;
        this.showHealth();
    }
}