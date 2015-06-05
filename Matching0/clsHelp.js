var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MatchingGame;
(function (MatchingGame) {
    var clsHelp = (function (_super) {
        __extends(clsHelp, _super);
        function clsHelp() {
            _super.call(this);
        }
        clsHelp.prototype.create = function () {
            var tg = this.game;
            tg.stage.backgroundColor = '#FFFFFF';
            var btnRule = tg.add.button(tg.world.centerX, tg.world.centerY, 'pngRule', this.fooClose, this, 0, 0, 0, 0);
            btnRule.anchor.setTo(0.5, 0.5);
        };
        clsHelp.prototype.fooClose = function () {
            this.game.state.start("Boot");
        };
        return clsHelp;
    })(Phaser.State);
    MatchingGame.clsHelp = clsHelp;
})(MatchingGame || (MatchingGame = {}));
