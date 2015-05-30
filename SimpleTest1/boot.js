var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SimpleGameTest;
(function (SimpleGameTest) {
    var boot = (function (_super) {
        __extends(boot, _super);
        function boot() {
            _super.call(this);
        }
        boot.prototype.preload = function () {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
            this.style = { font: "25px Arial", fill: "#ffffff", align: "center" };
            this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Loading 0%", this.style);
            this.text.anchor.set(0.5, 0.5);
            this.game.load.image("hinh1", "hinh1.jpg");
            this.text.setText("Loading 30%");
            this.game.load.image("hinh2", "hinh2.jpg");
            this.text.setText("Loading 60%");
            this.game.load.image("hinh3", "hinh3.jpg");
            this.text.setText("Loading 100%");
        };
        boot.prototype.playfoo = function () {
            console.log("That now end");
            this.game.state.start('Main');
        };
        boot.prototype.create = function () {
            this.text2 = this.game.add.text(this.game.world.centerX, 25, "Welcome to my new test simple game", this.style);
            this.text2.addColor("#FF0000", 0);
            this.text2.anchor.set(0.5, 0.5);
            var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'hinh1');
            bg.anchor.set(0.5);
            bg.alpha = 0.5;
            bg.rotation = -3.14 / 180 * 90;
            this.text.setText("Play");
            this.text.inputEnabled = true;
            this.text.events.onInputUp.add(this.playfoo, this);
            var animation = this.game.add.tween(this.text);
            this.text.x = 0;
            this.text.y = 0;
            this.text.bringToTop();
            animation.to({ x: this.game.world.centerX, y: this.game.world.centerY }, 500, Phaser.Easing.Linear.None);
            animation.start();
            var animation2 = this.game.add.tween(bg);
            animation2.to({ rotation: 0, alpha: 1 }, 500, Phaser.Easing.Linear.None);
            animation2.start();
        };
        return boot;
    })(Phaser.State);
    SimpleGameTest.boot = boot;
})(SimpleGameTest || (SimpleGameTest = {}));
