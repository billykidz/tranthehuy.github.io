var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MatchingGame;
(function (MatchingGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var key = Game.keygamescore;
            if (typeof (Storage) !== "undefined") {
                if (localStorage.getItem(key)) {
                }
                else {
                    localStorage.setItem(key, "0");
                }
            }
            else {
                alert("ERROR! Sorry for this error! So you can't play this game on this device!");
                return;
            }
            _super.call(this, 400, 600, Phaser.CANVAS, "game");
            var ts = this.state;
            ts.add("Boot", MatchingGame.clsBoot);
            ts.add("Play", MatchingGame.clsPlay);
            ts.add("Rank", MatchingGame.clsRank);
            ts.add("Help", MatchingGame.clsHelp);
            ts.add("About", MatchingGame.clsAbout);
            ts.start("Boot");
        }
        Game.keygamescore = "BestScoreMatchingGame1";
        return Game;
    })(Phaser.Game);
    MatchingGame.Game = Game;
})(MatchingGame || (MatchingGame = {}));
window.onload = function () {
    var game = new MatchingGame.Game();
};
