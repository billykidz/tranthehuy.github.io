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
        Game.keygamescore = "tranthehuy";
        return Game;
    })(Phaser.Game);
    MatchingGame.Game = Game;
})(MatchingGame || (MatchingGame = {}));
window.onload = function () {
    var game = new MatchingGame.Game();
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
            var btnAuthor = tg.add.button(tg.world.centerX, tg.world.centerY, 'jpgBackground', this.fooClose, this, 1, 1, 1, 1);
            btnAuthor.anchor.setTo(0.5, 0.5);
            var aniAuthor = this.game.add.tween(btnAuthor);
            aniAuthor.from({ angle: 45, alpha: 0 }, 500, Phaser.Easing.Linear.None);
            aniAuthor.start();
        };
        clsAbout.prototype.fooClose = function () {
            this.game.state.start("Boot");
        };
        return clsAbout;
    })(Phaser.State);
    MatchingGame.clsAbout = clsAbout;
})(MatchingGame || (MatchingGame = {}));
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
            tgl.spritesheet('pngOk', 'assets/OK.png', 100, 100);
            tgl.spritesheet('pngNo', 'assets/NO.png', 100, 100);
            tgl.image("pngOver", "assets/OVER.png");
            tgl.atlas('jpgBackground', 'assets/GROUND.jpg', 'assets/GROUND.json');
            tgl.atlas('pngButton', 'assets/BUTTON.png', 'assets/BUTTON.json');
            tgl.atlas('pngData', 'assets/data.png', 'assets/data.json');
            tgl.bitmapFont('myfont', 'assets/font.png', 'assets/font.fnt');
        };
        clsBoot.prototype.create = function () {
            var tg = this.game;
            var bg = tg.add.sprite(0, 0, "jpgBackground");
            var btnPlay = tg.add.button(tg.world.centerX, tg.world.height - 230, 'pngButton', this.fooPlay, this, 1, 0, 2, 1);
            btnPlay.anchor.setTo(0.5, 0.5);
            var btnRank = tg.add.button(tg.world.centerX, tg.world.height - 170, 'pngButton', this.fooRank, this, 4, 3, 5, 4);
            btnRank.anchor.setTo(0.5, 0.5);
            var btnHelp = tg.add.button(tg.world.centerX, tg.world.height - 110, 'pngButton', this.fooHelp, this, 7, 6, 8, 7);
            btnHelp.anchor.setTo(0.5, 0.5);
            var btnAbout = tg.add.button(tg.world.centerX, tg.world.height - 50, 'pngButton', this.fooAbout, this, 10, 9, 11, 10);
            btnAbout.anchor.setTo(0.5, 0.5);
            var aniPlay = this.game.add.tween(btnPlay);
            aniPlay.from({ x: 0, y: tg.world.height - 230, alpha: 0 }, 500, Phaser.Easing.Linear.None);
            aniPlay.start();
            var aniRank = this.game.add.tween(btnRank);
            aniRank.from({ x: tg.world.width, y: tg.world.height - 170, alpha: 0 }, 500, Phaser.Easing.Linear.None);
            aniRank.start();
            var aniHelp = this.game.add.tween(btnHelp);
            aniHelp.from({ x: 0, y: tg.world.height - 110, alpha: 0 }, 500, Phaser.Easing.Linear.None);
            aniHelp.start();
            var aniAbout = this.game.add.tween(btnAbout);
            aniAbout.from({ x: tg.world.width, y: tg.world.height - 50, alpha: 0 }, 500, Phaser.Easing.Linear.None);
            aniAbout.start();
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
            var btnRule = tg.add.button(tg.world.centerX, tg.world.centerY, 'jpgBackground', this.fooClose, this, 2, 2, 2, 2);
            btnRule.anchor.setTo(0.5, 0.5);
            var aniAbout = this.game.add.tween(btnRule);
            aniAbout.from({ alpha: 0 }, 500, Phaser.Easing.Linear.None);
            aniAbout.start();
        };
        clsHelp.prototype.fooClose = function () {
            this.game.state.start("Boot");
        };
        return clsHelp;
    })(Phaser.State);
    MatchingGame.clsHelp = clsHelp;
})(MatchingGame || (MatchingGame = {}));
var MatchingGame;
(function (MatchingGame) {
    var clsPlay = (function (_super) {
        __extends(clsPlay, _super);
        function clsPlay() {
            _super.call(this);
            this.level = 1;
            this.currentscore = 0;
        }
        clsPlay.prototype.create = function () {
            var tg = this.game;
            var bg = this.game.add.sprite(0, 0, "jpgBackground");
            bg.frame = 4;
            this.currentscore = 0;
            var style = { font: "30px Arial", fill: "#ff0000", align: "center" };
            this.lbllevel = tg.add.bitmapText(100, 30, "myfont", "Level: 1", 40);
            this.lblscore = tg.add.bitmapText(100, 60, "myfont", "Score: 0", 40);
            this.lblTimer = tg.add.bitmapText(50, 150, "myfont", "0 second", 60);
            this.lastupdate = tg.time.time;
            this.btnOk = tg.add.button(tg.world.centerX - 75, tg.world.height - 95, 'pngOk', this.fooOk, this, 1, 0, 2, 1);
            this.btnOk.anchor.setTo(0.5, 0.5);
            this.btnNo = tg.add.button(tg.world.centerX + 75, tg.world.height - 95, 'pngNo', this.fooNo, this, 1, 0, 2, 1);
            this.btnNo.anchor.setTo(0.5, 0.5);
            this.btnClose = this.game.add.button(tg.world.centerX, tg.world.height - 95, 'pngButton', this.fooClose, this, 13, 12, 14, 13);
            this.btnClose.anchor.setTo(0.5, 0.5);
            this.btnClose.kill();
            this.lblOver = this.game.add.sprite(tg.world.centerX, tg.world.centerY, 'pngOver');
            this.lblOver.anchor.setTo(0.5, 0.5);
            this.lblOver.kill();
            var y1 = 250;
            this.h1 = tg.add.sprite(40, y1, "pngData");
            this.h2 = tg.add.sprite(120, y1, "pngData");
            this.h3 = tg.add.sprite(200, y1, "pngData");
            this.h4 = tg.add.sprite(280, y1, "pngData");
            this.h5 = tg.add.sprite(360, y1, "pngData");
            y1 = 350;
            this.h6 = tg.add.sprite(40, y1, "pngData");
            this.h7 = tg.add.sprite(120, y1, "pngData");
            this.h8 = tg.add.sprite(200, y1, "pngData");
            this.h9 = tg.add.sprite(280, y1, "pngData");
            this.h10 = tg.add.sprite(360, y1, "pngData");
            this.h1.anchor.set(0.5, 0.5);
            this.h2.anchor.set(0.5, 0.5);
            this.h3.anchor.set(0.5, 0.5);
            this.h4.anchor.set(0.5, 0.5);
            this.h5.anchor.set(0.5, 0.5);
            this.h6.anchor.set(0.5, 0.5);
            this.h7.anchor.set(0.5, 0.5);
            this.h8.anchor.set(0.5, 0.5);
            this.h9.anchor.set(0.5, 0.5);
            this.h10.anchor.set(0.5, 0.5);
            this.countdown = true;
            this.countdowntime = 1000;
            this.makeLevel();
        };
        clsPlay.prototype.update = function () {
            if (this.countdown) {
                var elapsedTime = this.game.time.elapsedSince(this.lastupdate);
                if (this.answer == -1) {
                    if (elapsedTime > this.countdowntime) {
                        this.countdownremain--;
                        if (this.countdownremain == 0) {
                            this.fooGameOver();
                        }
                        var s = this.countdownremain + " seconds";
                        if (this.countdownremain < 2)
                            s = this.countdownremain + " second";
                        if (this.countdownremain == 0)
                            s = "Zero";
                        this.lblTimer.setText(s);
                        this.lastupdate = this.game.time.time;
                        var ani3 = this.game.add.tween(this.lblTimer);
                        ani3.from({ alpha: 0 }, 500, Phaser.Easing.Linear.None);
                        ani3.start();
                    }
                }
                else {
                    if (this.answer == 1) {
                        this.makeLevel();
                    }
                    else {
                        this.fooGameOver();
                    }
                }
            }
        };
        clsPlay.prototype.makeLevel = function () {
            if (this.answer == 1) {
                this.currentscore += this.countdownremain * 9;
                this.countdowntime -= 40;
                this.level += 1;
                this.lbllevel.setText("Level: " + this.level);
                this.lblscore.setText("Score: " + this.currentscore);
                var ani1 = this.game.add.tween(this.lbllevel);
                ani1.from({ height: 0, alpha: 0 }, 500, Phaser.Easing.Linear.None);
                ani1.start();
                var ani2 = this.game.add.tween(this.lblscore);
                ani2.from({ height: 0, alpha: 0 }, 500, Phaser.Easing.Linear.None);
                ani2.start();
            }
            this.countdownremain = 5;
            this.lblTimer.setText(this.countdownremain + " seconds");
            this.lastupdate = this.game.time.time;
            this.answer = -1;
            var mya = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
            mya.sort(function () {
                return .5 - Math.random();
            });
            var mya2 = [0, 1, 2, 3, 4];
            mya2.sort(function () {
                return .5 - Math.random();
            });
            this.h1.frame = mya[mya2[0]];
            this.h2.frame = mya[mya2[1]];
            this.h3.frame = mya[mya2[2]];
            this.h4.frame = mya[mya2[3]];
            this.h5.frame = mya[mya2[4]];
            if (Math.floor((Math.random() * 2)) == 1) {
                this.solution = 1;
                var mya2 = [0, 1, 2, 3, 4];
                mya2.sort(function () {
                    return .5 - Math.random();
                });
                this.h6.frame = mya[mya2[0]];
                this.h7.frame = mya[mya2[1]];
                this.h8.frame = mya[mya2[2]];
                this.h9.frame = mya[mya2[3]];
                this.h10.frame = mya[mya2[4]];
            }
            else {
                this.solution = 0;
                var mya2 = [1, 2, 3, 4, 5];
                mya2.sort(function () {
                    return .5 - Math.random();
                });
                this.h6.frame = mya[mya2[0]];
                this.h7.frame = mya[mya2[1]];
                this.h8.frame = mya[mya2[2]];
                this.h9.frame = mya[mya2[3]];
                this.h10.frame = mya[mya2[4]];
            }
            var a1 = this.game.add.tween(this.h1);
            a1.from({ angle: 90 }, 200, Phaser.Easing.Linear.None);
            a1.start();
            var a2 = this.game.add.tween(this.h2);
            a2.from({ angle: 90 }, 200, Phaser.Easing.Linear.None);
            a2.start();
            var a3 = this.game.add.tween(this.h3);
            a3.from({ angle: 90 }, 200, Phaser.Easing.Linear.None);
            a3.start();
            var a4 = this.game.add.tween(this.h4);
            a4.from({ angle: 90 }, 200, Phaser.Easing.Linear.None);
            a4.start();
            var a5 = this.game.add.tween(this.h5);
            a5.from({ angle: 90 }, 200, Phaser.Easing.Linear.None);
            a5.start();
            var a6 = this.game.add.tween(this.h6);
            a6.from({ angle: -90 }, 200, Phaser.Easing.Linear.None);
            a6.start();
            var a7 = this.game.add.tween(this.h7);
            a7.from({ angle: -90 }, 200, Phaser.Easing.Linear.None);
            a7.start();
            var a8 = this.game.add.tween(this.h8);
            a8.from({ angle: -90 }, 200, Phaser.Easing.Linear.None);
            a8.start();
            var a9 = this.game.add.tween(this.h9);
            a9.from({ angle: -90 }, 200, Phaser.Easing.Linear.None);
            a9.start();
            var a10 = this.game.add.tween(this.h10);
            a10.from({ angle: -90 }, 200, Phaser.Easing.Linear.None);
            a10.start();
        };
        clsPlay.prototype.fooOk = function () {
            if (this.solution == 1) {
                this.answer = 1;
            }
            else {
                this.answer = 0;
            }
        };
        clsPlay.prototype.fooNo = function () {
            if (this.solution == 0) {
                this.answer = 1;
            }
            else {
                this.answer = 0;
            }
        };
        clsPlay.prototype.fooGameOver = function () {
            this.countdown = false;
            this.btnOk.kill();
            this.btnNo.kill();
            this.btnClose.reset(this.game.world.centerX, this.game.world.height - 95);
            this.lblOver.reset(this.game.world.centerX, this.game.world.centerY);
            this.lblOver.alpha = 0.8;
            this.lblOver.bringToTop();
            if (this.currentscore > localStorage.getItem(MatchingGame.Game.keygamescore)) {
                localStorage.setItem(MatchingGame.Game.keygamescore, this.currentscore.toString());
            }
        };
        clsPlay.prototype.fooClose = function () {
            this.game.state.start("Boot");
        };
        return clsPlay;
    })(Phaser.State);
    MatchingGame.clsPlay = clsPlay;
})(MatchingGame || (MatchingGame = {}));
var MatchingGame;
(function (MatchingGame) {
    var clsRank = (function (_super) {
        __extends(clsRank, _super);
        function clsRank() {
            _super.call(this);
        }
        clsRank.prototype.create = function () {
            var bg = this.game.add.sprite(0, 0, "jpgBackground");
            bg.frame = 3;
            var style = { font: "80px myfont", fill: "#000000", align: "center" };
            var score = localStorage.getItem(MatchingGame.Game.keygamescore);
            var text2 = this.game.add.bitmapText(100, this.game.world.centerY - 60, "myfont", score, 80);
            var btnClose = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'pngButton', this.fooClose, this, 13, 12, 14, 13);
            btnClose.anchor.setTo(0.5, 0.5);
            var aniAbout = this.game.add.tween(bg);
            aniAbout.from({ height: 50, width: 50, x: this.game.world.centerX, y: this.game.world.centerY }, 500, Phaser.Easing.Linear.None);
            aniAbout.start();
        };
        clsRank.prototype.fooClose = function () {
            this.game.state.start("Boot");
        };
        return clsRank;
    })(Phaser.State);
    MatchingGame.clsRank = clsRank;
})(MatchingGame || (MatchingGame = {}));
//# sourceMappingURL=output.js.map