class Hero extends gameObject {

    private directionX: number = 0;
    private directionY: number = 0;
    private game : Game;
    private speed: number = 0;
    private animationSpeed: number = 0;
    private currentFrame: number = 0;
    private animationY: number = 0;

    constructor(game : Game, x : number, y : number) {
        super('hero');
        this.game = game;
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.animationSpeed = 10;
        
        this.draw();
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup"  , (e) => this.onKeyUp(e));
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
                this.animationY = 3;
                break;
            case 39: //RIGHT
                this.x += 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.animationY = 2
                break;
            case 40: //DOWN
                this.y += 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.animationY = 0;
                break;
            case 37: //LEFT
                this.x -= 10;
                this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
                this.animationY = 1;
                break;
        }
    }

        // speed op 0 alleen als de eigen keys zijn losgelaten
    protected onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = 0;
                break;
            case 39: //RIGHT
                this.directionX = 0;
                break;
            case 40: //DOWN
                this.directionY = 0;
                break;
            case 37: //LEFT
                this.directionX = 0;
                break;
        }
    }
}