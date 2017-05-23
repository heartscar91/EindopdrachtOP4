var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Healthbar = (function () {
    function Healthbar(parent, health) {
        this.div = document.createElement("healthbar");
        parent.appendChild(this.div);
        this.p = document.createElement('p');
        this.div.appendChild(this.p);
        this.p.innerHTML = health;
    }
    Healthbar.prototype.change = function () {
        this.div.style.width = '90%';
    };
    return Healthbar;
}());
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(game, x, y, height, width, health, power, defense) {
        var _this = this;
        _super.call(this, 'enemy');
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
        this.div.addEventListener("click", function (e) { return _this.hit(); });
    }
    Enemy.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Enemy.prototype.hit = function () {
        var audio = new Audio('./sounds/punch.mp3');
        audio.play();
        this.health -= 1;
        this.showHealth();
    };
    Enemy.prototype.showHealth = function () {
        var healthBar = new Healthbar(this.div, this.health);
        if (this.health == 0) {
            this.div.remove();
            healthBar.innerHTML = this.health;
        }
        healthBar.innerHTML = this.health;
    };
    return Enemy;
}(gameObject));
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(game, x, y, height, width, health, power, defense) {
        var _this = this;
        _super.call(this, 'hero');
        this.equipped = false;
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
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.div.addEventListener("click", function (e) { return _this.hit(); });
    }
    Hero.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Hero.prototype.onKeyDown = function (event) {
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
                this.attack();
                break;
            case 73:
                this.inventory();
                break;
        }
    };
    Hero.prototype.showHealth = function () {
        var healthBar = new Healthbar(this.div, this.health);
        if (this.health == 0) {
            healthBar.innerHTML = this.health;
            alert("GAME OVER");
            location.reload();
        }
        healthBar.innerHTML = this.health;
    };
    Hero.prototype.attack = function () {
        var audio = new Audio('./sounds/punch.mp3');
        audio.play();
    };
    Hero.prototype.hit = function () {
        var audio = new Audio('./sounds/punch.mp3');
        var percent = document.getElementById('percent');
        audio.play();
        this.health -= 1;
        this.showHealth();
    };
    Hero.prototype.inventory = function () {
        var inventory = document.getElementById('inventory');
        if (inventory.className == 'closed') {
            inventory.className = 'open';
        }
        else if (inventory.className == 'open') {
            inventory.className = 'closed';
        }
    };
    return Hero;
}(gameObject));
var Inventory = (function () {
    function Inventory() {
    }
    return Inventory;
}());
//# sourceMappingURL=main.js.map