var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MatchingGame;
(function (MatchingGame) {
    var clsBoot = (function (_super) {
        __extends(clsBoot, _super);
        function clsBoot() {
            _super.call(this);
        }
        clsBoot.prototype.preload = function () {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
            var tgl = this.game.load;
            tgl.spritesheet('pngPlay', 'assets/PLAY.png', 300, 100);
            tgl.spritesheet('pngRank', 'assets/RANK.png', 300, 100);
            tgl.spritesheet('pngHelp', 'assets/HELP.png', 300, 100);
            tgl.spritesheet('pngAbout', 'assets/ABOUT.png', 300, 100);
            tgl.spritesheet('pngClose', 'assets/CLOSE.png', 300, 100);
            tgl.spritesheet('pngAuthor', 'assets/AUTHOR.png', 400, 400);
            tgl.spritesheet('pngRule', 'assets/RULE.png', 400, 600);
            tgl.spritesheet('pngOk', 'assets/OK.png', 150, 150);
            tgl.spritesheet('pngNo', 'assets/NO.png', 150, 150);
            tgl.image("pngTitle", "assets/TITLE.png");
            tgl.image("pngOver", "assets/OVER.png");
            tgl.atlas('pngData', 'assets/data.png', 'assets/data.json');
        };
        clsBoot.prototype.playfoo = function () {
        };
        clsBoot.prototype.create = function () {
            var tg = this.game;
            tg.stage.backgroundColor = '#FFFFFF';
            var btnPlay = tg.add.button(tg.world.centerX, tg.world.height - 350, 'pngPlay', this.fooPlay, this, 0, 0, 1, 0);
            btnPlay.anchor.setTo(0.5, 0.5);
            var btnRank = tg.add.button(tg.world.centerX, tg.world.height - 250, 'pngRank', this.fooRank, this, 0, 0, 1, 0);
            btnRank.anchor.setTo(0.5, 0.5);
            var btnHelp = tg.add.button(tg.world.centerX, tg.world.height - 150, 'pngHelp', this.fooHelp, this, 0, 0, 1, 0);
            btnHelp.anchor.setTo(0.5, 0.5);
            var btnAbout = tg.add.button(tg.world.centerX, tg.world.height - 50, 'pngAbout', this.fooAbout, this, 0, 0, 1, 0);
            btnAbout.anchor.setTo(0.5, 0.5);
            var lblTitle = this.game.add.sprite(tg.world.centerX, 70, 'pngTitle');
            lblTitle.anchor.setTo(0.5, 0.5);
        };
        clsBoot.prototype.fooPlay = function () {
            this.game.state.start('Play');
        };
        clsBoot.prototype.fooRank = function () {
            this.game.state.start('Rank');
        };
        clsBoot.prototype.fooHelp = function () {
            this.game.state.start('Help');
        };
        clsBoot.prototype.fooAbout = function () {
            this.game.state.start('About');
        };
        return clsBoot;
    })(Phaser.State);
    MatchingGame.clsBoot = clsBoot;
})(MatchingGame || (MatchingGame = {}));
