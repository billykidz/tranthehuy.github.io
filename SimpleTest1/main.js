var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SimpleGameTest;
(function (SimpleGameTest) {
    var main = (function (_super) {
        __extends(main, _super);
        function main() {
            _super.call(this);
        }
        main.prototype.create = function () {
            this.style = { font: "25px Arial", fill: "#ffffff", align: "center" };
            var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'hinh2');
            bg.anchor.set(0.5);
            this.text1 = this.game.add.text(this.game.world.width, this.game.world.height, "Back", this.style);
            this.text1.addColor("#FF0000", 0);
            this.text1.anchor.set(0, 0.5);
        };
        return main;
    })(Phaser.State);
    SimpleGameTest.main = main;
})(SimpleGameTest || (SimpleGameTest = {}));
