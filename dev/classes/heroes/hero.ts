class Hero extends gameObject {

    private equipped: boolean = false;

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

        this.showHealth();
        this.draw();
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        this.div.addEventListener("click", (e) => this.hit());
    }

    public draw() : void {
        // 'tekend' de div
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    } 

    // keyboard input zorgt dat de snelheid wordt aangepast
    protected onKeyDown(event:KeyboardEvent) : void {
        // console.log(event.keyCode); (Om key te checken)
        switch(event.keyCode){
            case 38: //Omhoog (pijltijestoetsen)
                this.y -= 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero-front.png)";
                break;
            case 39: //Rechts
                this.x += 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero.png) -66px -134px";
                break;
            case 40: //Naar beneden
                this.y += 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero-front.png)";
                break;
            case 37: //Links
                this.x -= 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero.png) -66px -68px";
                break;
            case 32:
                //Valt aan met Spatie
                this.attack();
                break;
            case 73:
                //Opent/sluit inventory
                this.inventory();
                break;
        }
    }

    private showHealth() : void {
        let healthBar = new Healthbar(this.div, this.health);
        
        if (this.health == 0) {
            healthBar.innerHTML = this.health;
            alert("GAME OVER");
            location.reload();
        }
        healthBar.innerHTML = this.health;
    }

    private attack() : void {
        let audio = new Audio('./sounds/punch.mp3');
        audio.play();
    }

    private hit() : void {
        let audio = new Audio('./sounds/punch.mp3');
        let percent = document.getElementById('percent');

        audio.play();
        this.health -= 1;
        this.showHealth();
    }

    public hasCollision(enemy : Enemy) : boolean {
        return (this.x < enemy.x + enemy.width &&
                this.x + this.width > enemy.x &&
                this.y < enemy.y + enemy.height &&
                this.y + this.height > enemy.y);
    }

    // private Equip() {
    //     let sword = document.getElementById('sword');
    //     sword.addEventListener("click", (e) => this.Check());
    // }

    // private Check() {
    //     let sword = document.getElementById('sword');
    //     if(sword.className == 'unequipped') {
    //         sword.className = 'equipped';
    //     } else if(sword.className == 'equipped') {
    //         sword.className = 'unequipped';
    //     }
    // }

    private inventory() : void {
        //Opent de inventory d.m.v. classes toe te voegen/te verwijderen
        let inventory = document.getElementById('inventory');
        if(inventory.className == 'closed') {
            inventory.className = 'open';
        } else if (inventory.className == 'open') {
            inventory.className = 'closed';
        }
    }
}