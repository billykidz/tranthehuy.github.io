var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MatchingGame;
(function (MatchingGame) {
    var clsAbout = (function (_super) {
        __extends(clsAbout, _super);
        function clsAbout() {
            _super.call(this);
        }
        clsAbout.prototype.create = function () {
            var tg = this.game;
            tg.stage.backgroundColor = '#FFFFFF';
            var btnAuthor = tg.add.button(tg.world.centerX, tg.world.centerY, 'pngAuthor', this.fooClose, this, 0, 0, 0, 0);
            btnAuthor.anchor.setTo(0.5, 0.5);
        };
        clsAbout.prototype.fooClose = function () {
            this.game.state.start("Boot");
        };
        return clsAbout;
    })(Phaser.State);
    MatchingGame.clsAbout = clsAbout;
})(MatchingGame || (MatchingGame = {}));
