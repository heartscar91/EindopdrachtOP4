var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gameObject = (function () {
    function gameObject(tag) {
        this.createDiv(tag);
    }
    gameObject.prototype.createDiv = function (tag) {
        var container = document.getElementById("container");
        this.div = document.createElement(tag);
        container.appendChild(this.div);
    };
    return gameObject;
}());
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(game, x, y) {
        var _this = this;
        _super.call(this, 'hero');
        this.directionX = 0;
        this.directionY = 0;
        this.speed = 0;
        this.animationSpeed = 0;
        this.currentFrame = 0;
        this.animationY = 0;
        this.game = game;
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.animationSpeed = 10;
        this.draw();
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Hero.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Hero.prototype.onKeyDown = function (event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 38:
                this.y -= 10;
                this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
                this.animationY = 3;
                break;
            case 39:
                this.x += 10;
                this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
                this.animationY = 2;
                break;
            case 40:
                this.y += 10;
                this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
                this.animationY = 0;
                break;
            case 37:
                this.x -= 10;
                this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
                this.animationY = 1;
                break;
        }
    };
    Hero.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = 0;
                break;
            case 39:
                this.directionX = 0;
                break;
            case 40:
                this.directionY = 0;
                break;
            case 37:
                this.directionX = 0;
                break;
        }
    };
    return Hero;
}(gameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        var heros = new Array();
        heros.push(new Hero(this, 900, 650));
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
//# sourceMappingURL=main.js.map