var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MatchingGame;
(function (MatchingGame) {
    var clsRank = (function (_super) {
        __extends(clsRank, _super);
        function clsRank() {
            _super.call(this);
        }
        clsRank.prototype.preload = function () {
            var tgl = this.game.load;
            tgl.spritesheet('pngClose', 'assets/CLOSE.png', 300, 100);
        };
        clsRank.prototype.create = function () {
            var style = { font: "40px Arial", fill: "#ff0000", align: "center" };
            var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 120, "Your best score", style);
            text.anchor.set(0.5, 0.5);
            style = { font: "60px Arial", fill: "#000000", align: "center" };
            var score = localStorage.getItem(MatchingGame.Game.keygamescore);
            var text2 = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 60, score, style);
            text2.anchor.set(0.5, 0.5);
            var btnClose = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'pngClose', this.fooClose, this, 0, 0, 1, 0);
            btnClose.anchor.setTo(0.5, 0.5);
        };
        clsRank.prototype.fooClose = function () {
            this.game.state.start("Boot");
        };
        return clsRank;
    })(Phaser.State);
    MatchingGame.clsRank = clsRank;
})(MatchingGame || (MatchingGame = {}));
