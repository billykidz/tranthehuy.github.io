var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
            var style = { font: "30px Arial", fill: "#ff0000", align: "center" };
            this.lbllevel = tg.add.text(this.game.world.centerX, 30, "Level: 1", style);
            this.lbllevel.anchor.set(0.5, 0.5);
            style = { font: "30px Arial", fill: "#0000ff", align: "center" };
            this.lblscore = tg.add.text(this.game.world.centerX, 60, "Score: 0", style);
            this.lblscore.anchor.set(0.5, 0.5);
            style = { font: "60px Arial", fill: "#00ffff", align: "center" };
            this.lblTimer = tg.add.text(this.game.world.centerX, 150, "0 seconds", style);
            this.lblTimer.anchor.set(0.5, 0.5);
            this.lastupdate = tg.time.time;
            this.btnOk = tg.add.button(tg.world.centerX - 75, tg.world.height - 95, 'pngOk', this.fooOk, this, 0, 0, 1, 0);
            this.btnOk.anchor.setTo(0.5, 0.5);
            this.btnNo = tg.add.button(tg.world.centerX + 75, tg.world.height - 95, 'pngNo', this.fooNo, this, 0, 0, 1, 0);
            this.btnNo.anchor.setTo(0.5, 0.5);
            this.btnClose = this.game.add.button(tg.world.centerX, tg.world.height - 95, 'pngClose', this.fooClose, this, 0, 0, 1, 0);
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
                        this.lblTimer.setText(this.countdownremain + " seconds");
                        this.lastupdate = this.game.time.time;
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
                this.currentscore += this.countdownremain * 10;
                this.countdowntime -= 3;
                this.level += 1;
                this.lbllevel.setText("Level: " + this.level);
                this.lblscore.setText("Score: " + this.currentscore);
            }
            this.countdownremain = 5;
            this.lblTimer.setText(this.countdownremain + " seconds");
            this.lastupdate = this.game.time.time;
            this.answer = -1;
            var mya = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
            var mya2 = [0, 1, 2, 3, 4];
            mya.sort(function () {
                return .5 - Math.random();
            });
            mya2.sort(function () {
                return .5 - Math.random();
            });
            this.h1.frame = mya[0];
            this.h2.frame = mya[1];
            this.h3.frame = mya[2];
            this.h4.frame = mya[3];
            this.h5.frame = mya[4];
            if (Math.floor((Math.random() * 2)) == 1) {
                this.solution = 1;
                this.h6.frame = mya[mya2[0]];
                this.h7.frame = mya[mya2[1]];
                this.h8.frame = mya[mya2[2]];
                this.h9.frame = mya[mya2[3]];
                this.h10.frame = mya[mya2[4]];
            }
            else {
                this.solution = 0;
                this.h6.frame = mya[mya2[0]];
                this.h7.frame = mya[mya2[1]];
                this.h8.frame = mya[mya2[2]];
                this.h9.frame = mya[mya2[3]];
                this.h10.frame = mya[5];
            }
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
            this.h1.kill();
            this.h2.kill();
            this.h3.kill();
            this.h4.kill();
            this.h5.kill();
            this.h6.kill();
            this.h7.kill();
            this.h8.kill();
            this.h9.kill();
            this.h10.kill();
            this.btnClose.reset(this.game.world.centerX, this.game.world.height - 95);
            this.lblOver.reset(this.game.world.centerX, this.game.world.centerY);
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
