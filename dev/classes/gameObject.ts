class gameObject {

    protected div : HTMLElement;
    protected body : HTMLElement;
    protected x : number;
    protected y : number;
    protected health : number
    protected power : number
    protected defense : number

    constructor(tag : string) {
        this.createDiv(tag);
    }

    public createDiv(tag : string) {
        let container : HTMLElement = document.getElementById("container");
        this.div = document.createElement(tag);
        container.appendChild(this.div);
    }
}
