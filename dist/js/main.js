var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        var _this = this;
        var heroes = new Array();
        heroes.push(new Hero(this, 900, 650, 67, 67, 10, 3, 2));
        var enemies = new Array();
        enemies.push(new Enemy(this, 200, 650, 20, 200, 10, 3, 2));
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
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(game, x, y, health, power, defense) {
        var _this = _super.call(this, 'enemy') || this;
        _this.speed = 0;
        _this.currentFrame = 0;
        _this.game = game;
        _this.x = x;
        _this.y = y;
        _this.health = health;
        _this.power = power;
        _this.defense = defense;
        _this.speed = 3;
        _this.draw();
        _this.div.addEventListener("click", function (e) { return _this.Hit(); });
        return _this;
    }
    Enemy.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Enemy.prototype.Hit = function () {
        var audio = new Audio('./sounds/punch.mp3');
        audio.play();
        this.health -= 1;
    };
    return Enemy;
}(gameObject));
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(game, x, y, health, power, defense) {
        var _this = _super.call(this, 'hero') || this;
        _this.speed = 0;
        _this.currentFrame = 0;
        _this.game = game;
        _this.x = x;
        _this.y = y;
        _this.health = health;
        _this.power = power;
        _this.defense = defense;
        _this.speed = 3;
        _this.showHealth();
        _this.draw();
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        _this.div.addEventListener("click", function (e) { return _this.Hit(); });
        return _this;
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
                this.div.style.background = "url(./images/hero-front.png)";
                break;
            case 39:
                this.x += 10;
                this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero.png) -66px -134px";
                break;
            case 40:
                this.y += 10;
                this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero-front.png)";
                break;
            case 37:
                this.x -= 10;
                this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
                this.div.style.background = "url(./images/hero.png) -66px -68px";
                break;
            case 32:
                this.Attack();
                break;
        }
    };
    Hero.prototype.showHealth = function () {
        var healthBar = document.getElementById('healthBar');
        if (this.health == 0) {
            healthBar.innerHTML = this.health;
            alert("GAME OVER");
        }
        healthBar.innerHTML = this.health;
    };
    Hero.prototype.Attack = function () {
        var audio = new Audio('./sounds/punch.mp3');
        audio.play();
    };
    Hero.prototype.Hit = function () {
        var audio = new Audio('./sounds/punch.mp3');
        audio.play();
        this.health -= 1;
        this.showHealth();
    };
    return Hero;
}(gameObject));
//# sourceMappingURL=main.js.map