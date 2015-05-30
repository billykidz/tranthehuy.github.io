var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SimpleGameTest;
(function (SimpleGameTest) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 480, 320, Phaser.CANVAS, "game");
            this.state.add("Boot", SimpleGameTest.boot);
            this.state.add("Main", SimpleGameTest.main);
            this.state.start("Boot");
        }
        return Game;
    })(Phaser.Game);
    SimpleGameTest.Game = Game;
})(SimpleGameTest || (SimpleGameTest = {}));
window.onload = function () {
    var game = new SimpleGameTest.Game();
};
