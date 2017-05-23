class gameObject implements iDrawable {

    protected div : HTMLElement;
    protected body : HTMLElement;
    protected x : number;
    protected y : number;
    protected height : number;
    protected width : number;
    protected health : number;
    protected power : number;
    protected defense : number;
    protected game : Game;
    protected healthbar : Healthbar;

    constructor(tag : string) {
        this.createDiv(tag);
    }

    public createDiv(tag : string) {
        //Maakt het element aan
        let container : HTMLElement = document.getElementById("container");
        this.div = document.createElement(tag);
        container.appendChild(this.div);
        this.draw();
    }

    public draw() {
        // 'tekend' de div
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    }
}
