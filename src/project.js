window.__require = function e(t, n, o) {
    function c(i, r) {
        if (!n[i]) {
            if (!t[i]) {
                var s = i.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(s, !0);
                    if (a) return a(s, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
            }
            var u = n[i] = {
                exports: {}
            };
            t[i][0].call(u.exports, function(e) {
                return c(t[i][1][e] || e)
            }, u, u.exports, e, t, n, o)
        }
        return n[i].exports
    }
    for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) c(o[i]);
    return c
}({
    AddScore: [function(e, t, n) {}],
    AdjusWithHeight: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0fe07DOz8VMcYKlDM2VxHhQ", "AdjusWithHeight");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc.Enum({
                TOP: 0,
                BOTTOM: 1
            }),
            i = cc._decorator,
            r = i.ccclass,
            s = i.property,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.type = a.TOP, t.offset = 0, t
                }
                return o(t, e), t.prototype.onLoad = function() {
                    var e = 0;
                    e = this.type == a.TOP ? cc.winSize.height / 2 : -cc.winSize.height / 2, this.node.y = e + this.offset
                }, c([s({
                    type: cc.Enum(a),
                    displayName: "AdjustType"
                })], t.prototype, "type", void 0), c([s], t.prototype, "offset", void 0), t = c([r], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {}],
    AniTools: [function(e, t, n) { // 执行操作时动画控制
    }, {}],


    AudioManager: [function(e, t, n) { // 音频控制
        "use strict";
        cc._RF.push(t, "3db2d9MuTtO8JRQKnPm9kfu", "AudioManager");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            i = a.ccclass,
            r = a.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.audioClip = [], t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this
                }, t.prototype.Play = function(e, t, n) {
                    cc.audioEngine.play(this.audioClip[e], t, n)
                }, t.prototype.StopAll = function() {
                    cc.audioEngine.stopAllEffects()
                }, t.Instance = null, c([r({
                    type: cc.AudioClip
                })], t.prototype, "audioClip", void 0), t = n = c([i], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],


    AutoDestroy: [function(e, t, n) { // 自定义功能？
    }],


    DataManager: [function(e, t, n) { // 玩家游戏数据
        "use strict";
        cc._RF.push(t, "fd2c5sUJdNElqycZdmzNC7g", "DataManager");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            i = a.ccclass,
            r = a.property,
            s = function() {
                return function() {
                    this.isFirstPlay = !0, this.score = 0, this.highScore = 0, this.goldCount = 0, this.playLevel = 1, this.maxFruitId = 2, this.successful = !1, this.currentLevelInfo = null, this.playCount = 0, this.guideTime = 0
                }
            }(),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.gameName = "DefaultName", t.playerData = null, t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this, n.Instance.playerData = JSON.parse(cc.sys.localStorage.getItem(this.gameName + "playerData11")), null == this.playerData && (this.playerData = new s, this.playerData.isFirstPlay = !0, this.playerData.score = 0, this.playerData.highScore = 0, this.playerData.goldCount = 0, this.playerData.playCount = 0, n.Instance.Save())
                }, t.prototype.SetguideTime = function() {
                    this.playerData.guideTime += 1, this.Save
                }, t.prototype.GetguideTime = function() {
                    return this.playerData.guideTime
                }, t.prototype.SetLevel = function() {
                    this.playerData.playLevel += 1, this.Save()
                }, t.prototype.GetLevel = function() {
                    return this.playerData.playLevel
                }, t.prototype.GetCurrentLevelInfo = function() {
                    return this.playerData.currentLevelInfo
                }, t.prototype.SetCurrentLevelInfo = function(e) {
                    this.playerData.currentLevelInfo = e, this.Save()
                }, t.prototype.SetPlayerFirstPlay = function(e) {
                    this.playerData.isFirstPlay = e, this.Save()
                }, t.prototype.GetFirstPlay = function() {
                    return this.playerData.isFirstPlay
                }, t.prototype.SetPlayerGold = function(e) {
                    this.playerData.goldCount = e, this.Save()
                }, t.prototype.GetPlayerGold = function() {
                    return this.playerData.goldCount
                }, t.prototype.SetPlayerScore = function(e) {
                    this.playerData.score = e, this.Save()
                }, t.prototype.GetPlayerScore = function() {
                    return this.playerData.score
                }, t.prototype.SetPlayerHighScore = function(e) {
                    this.playerData.highScore = e, this.Save()
                }, t.prototype.GetPlayerHighScore = function() {
                    return this.playerData.highScore
                }, t.prototype.SetMaxFruitId = function(e) {
                    this.playerData.maxFruitId = e, this.Save()
                }, t.prototype.getMaxFruitId = function() {
                    return this.playerData.maxFruitId
                }, t.prototype.GetSuccessful = function() {
                    return this.playerData.successful
                }, t.prototype.SetSuccessful = function(e) {
                    this.playerData.successful = e, this.Save()
                }, t.prototype.GetPlayCount = function() {
                    return this.playerData.playCount
                }, t.prototype.SetPlayCount = function() {
                    this.playerData.playCount += 1, this.Save()
                }, t.prototype.ClearData = function() {
                    this.playerData.playLevel = 1, this.Save()
                }, t.prototype.Load = function() {
                    n.Instance.playerData = JSON.parse(cc.sys.localStorage.getItem(this.gameName + "playerData11"))
                }, t.prototype.Save = function() {
                    cc.sys.localStorage.setItem(this.gameName + "playerData11", JSON.stringify(n.Instance.playerData))
                }, t.Instance = null, c([r], t.prototype, "gameName", void 0), t = n = c([i], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {}],


    DynamicLoad: [function(e, t, n) { // 和广告相关？
        "use strict";
        cc._RF.push(t, "c6f04DncqhJIoWmE4UojNVj", "DynamicLoad");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            i = a.ccclass,
            r = a.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.adsbutton = [], t.adsbutton2 = [], t.caidia = [], t.fllows = [], t.fruit = [], t.guozhiZ = [], t.guozhiL = [], t.fruitL = [], t.TGColors = [], t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this
                }, t.prototype.start = function() {
                    this.TGColors.push("f43df7", "ef4126", "6ff814", "32cdf9", "fff02c", "f43df7", "fb4626", "6ff814", "50f7f0", "fff02c") // 此处为另一游戏
                }, t.Instance = null, c([r(cc.SpriteFrame)], t.prototype, "adsbutton", void 0), c([r(cc.SpriteFrame)], t.prototype, "adsbutton2", void 0), c([r(cc.SpriteFrame)], t.prototype, "caidia", void 0), c([r(cc.SpriteFrame)], t.prototype, "fllows", void 0), c([r(cc.SpriteFrame)], t.prototype, "fruit", void 0), c([r(cc.SpriteFrame)], t.prototype, "guozhiZ", void 0), c([r(cc.SpriteFrame)], t.prototype, "guozhiL", void 0), c([r(cc.SpriteFrame)], t.prototype, "fruitL", void 0), t = n = c([i], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],


    EffectCenter: [function(e, t, n) {}],
    EffectSprite: [function(e, t, n) { // 商标？
    }],


    FailedUi: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "78235dKIMdFVqcEjSP7q4OM", "FailedUi");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameManager"),
            i = e("../Common/Utils"),
            r = e("./MainGameUi"),
            s = e("../common/PlayerInfo"),
            l = cc._decorator,
            u = l.ccclass,
            d = l.property,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.clickMask = null, t.failedUiBox = null, t.di = null, t.levelTxt = null, t.guan = null, t.continueTip = null, t.scoreLabel = null, t.highScoreNode = null, t.highScore = null, t.highScoreLabel = null, t.resultTxt = null, t.overTxt = null, t.moreGameBtn = null, t.reStartBtn = null, t.failedBoxPos = cc.v2(0, -500), t.standardScore = 0, t.canClick = !1, t.bgMask = null, t.bencichengji = null, t.bencichengjiarr = [], t.gengduoyouxi = null, t.gengduoyouxiarr = [], t.adsButton2 = null, t.bannerButton = null, t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this, this.clickMask.setContentSize(cc.winSize.width, cc.winSize.height), this.bgMask.setContentSize(cc.winSize.width, cc.winSize.height), this.failedUiBox.y = cc.winSize.height / 2 + this.failedUiBox.height / 2
                }, t.prototype.start = function() {
                    var e = i.default.returnCurrentLanType();
                    1 != e && (this.bencichengji.getComponent(cc.Sprite).spriteFrame = this.bencichengjiarr[e - 1], this.gengduoyouxi.getComponent(cc.Sprite).spriteFrame = this.gengduoyouxiarr[e - 1]), this.continueTip.getComponent(cc.Label).string = 1 == e ? "\u70b9\u51fb\u7ee7\u7eed" : 2 == e ? "\u9ede\u64ca\u7e7c\u7e8c" : 4 == e ? "\ud074\ub9ad \ud558\uc5ec \uacc4\uc18d" : "Click Continue", this.reStartBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.55, 1), cc.delayTime(.5)))), cc.tween(this.moreGameBtn).to(.5, {
                        scale: 1.1
                    }).to(.5, {
                        scale: 1
                    }).union().repeatForever().start(), cc.tween(this.adsButton2).to(1, {
                        scale: .8
                    }).to(1, {
                        scale: .9
                    }).union().repeatForever().start()
                }, t.prototype.update = function(e) {}, t.prototype.adsButtonFunc2 = function() {
                    // window.location.href = "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png"
                }, t.prototype.bannerButtonFunc = function() {
                    // window.location.href = "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png"
                }, t.prototype.ShowFailedUi = function(e, t) {
                    var n = this;
                    this.scheduleOnce(function() {
                        r.default.Instance.HideScorePanel(), n.levelTxt.string = r.default.Instance.level.toString(), n.scoreLabel.string = s.default.score.toString(), n.highScoreLabel.string = t, n.resultTxt.string = n.GetContentByScore(e), n.overTxt.string = "\u5f53\u524d\u5173\u5361\u5df2\u5b8c\u6210" + Math.floor(r.default.Instance.nowYQ / r.default.Instance.passlevelYQ * 100) + "%", n.canClick = !1, n.levelTxt.string = e, n.bgMask.runAction(cc.fadeTo(.36, 150)), n.scheduleOnce(function() {
                            i.default.CenteredUi(10, this.di, this.levelTxt.node, this.guan), this.failedUiBox.y = cc.winSize.height / 2 + this.failedUiBox.height / 2, this.failedUiBox.runAction(cc.sequence(cc.moveTo(.36, this.failedBoxPos).easing(cc.easeBackOut()), cc.callFunc(function() {
                                this.clickMask.on(cc.Node.EventType.TOUCH_START, this.OnClickCloseMask, this), this.moreGameBtn.on(cc.Node.EventType.TOUCH_START, this.OnClickMoreGame, this), this.continueTip.opacity = 0, this.continueTip.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.5), cc.delayTime(.5), cc.fadeOut(.5)))), this.canClick = !0
                            }, this)))
                        }, 0)
                    }, .5)
                }, t.prototype.HideFailedUi = function() {
                    this.canClick = !1;
                    var e = cc.v2(0, cc.winSize.height / 2 + this.failedUiBox.height / 2);
                    this.failedUiBox.runAction(cc.moveTo(.3, e).easing(cc.easeBackIn()))
                }, t.prototype.OnClickCloseMask = function() {
                    this.canClick && 0 == cc.find("Canvas/uiEffectPanel").childrenCount && a.default.Instance.RestartGame()
                }, t.prototype.OnClickMoreGame = function() {
                    this.canClick && (this.moreGameBtn.off(cc.Node.EventType.TOUCH_START, this.OnClickMoreGame, this), this.canClick = !1, this.moreGameBtn.runAction(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1))), this.scheduleOnce(function() {
                        // window.location.href = "http://m.wesane.com/"
                    }, .15))
                }, t.prototype.GetContentByScore = function(e) {
                    var t = Math.ceil(e / 1500 * 94);
                    t > 94 && (t = 94);
                    var n = 5 + t;
                    return "\u51fb\u8d25\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6\uff01", ["\u51fb\u8d25\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6\uff01", "\u64ca\u6557\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6\uff01", "Beat " + n + " % of global players", "\uc804 \uc138\uacc4" + n + "% \uc758 \uc720 \uc800 \ub97c \uc774 \uacbc \uc2b5 \ub2c8 \ub2e4"][i.default.returnCurrentLanType() - 1]
                }, t.Instance = null, c([d(cc.Node)], t.prototype, "clickMask", void 0), c([d(cc.Node)], t.prototype, "failedUiBox", void 0), c([d(cc.Node)], t.prototype, "di", void 0), c([d(cc.Label)], t.prototype, "levelTxt", void 0), c([d(cc.Node)], t.prototype, "guan", void 0), c([d(cc.Node)], t.prototype, "continueTip", void 0), c([d(cc.Label)], t.prototype, "scoreLabel", void 0), c([d(cc.Node)], t.prototype, "highScoreNode", void 0), c([d(cc.Node)], t.prototype, "highScore", void 0), c([d(cc.Label)], t.prototype, "highScoreLabel", void 0), c([d(cc.Label)], t.prototype, "resultTxt", void 0), c([d(cc.Label)], t.prototype, "overTxt", void 0), c([d(cc.Node)], t.prototype, "moreGameBtn", void 0), c([d(cc.Node)], t.prototype, "reStartBtn", void 0), c([d(cc.Vec2)], t.prototype, "failedBoxPos", void 0), c([d], t.prototype, "standardScore", void 0), c([d(cc.Node)], t.prototype, "bgMask", void 0), c([d(cc.Node)], t.prototype, "bencichengji", void 0), c([d(cc.SpriteFrame)], t.prototype, "bencichengjiarr", void 0), c([d(cc.Node)], t.prototype, "gengduoyouxi", void 0), c([d(cc.SpriteFrame)], t.prototype, "gengduoyouxiarr", void 0), c([d(cc.Node)], t.prototype, "adsButton2", void 0), c([d(cc.Node)], t.prototype, "bannerButton", void 0), t = n = c([u], t)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../Common/Utils": "Utils",
        "../common/PlayerInfo": "PlayerInfo",
        "./GameManager": "GameManager",
        "./MainGameUi": "MainGameUi"
    }],


    GameConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f0663sWtfNKCKOL+Hvnt0cI", "GameConfig");
        var o = {};
        t.exports = o, cc._RF.pop()
    }, {}],
    GameFunction: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "922f3dsGCZCHbXJvwDr0rdF", "GameFunction");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../common/PlayerInfo"),
            i = e("./MainGameUi"),
            r = e("../Common/PoolManager"),
            s = e("../Common/Utils"),
            l = e("./GameManager"),
            u = e("./AudioManager"),
            d = e("../common/DynamicLoad"),
            p = cc._decorator,
            f = p.ccclass,
            h = p.property,
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bgLayer = null, t.bgCamera = null, t.mainCamera = null, t.fruitNode = null, t.lineNode = null, t.bazieffect = null, t.downEffect = null, t.fruitPre = null, t.fruitS = [], t.step = 0, t.guideTime = 0, t.targetFruit = null, t.fruitHeigth = -1200, t.endOne = 0, t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this, a.default.playerTouch = !0, a.default.score = 0, a.default.knifeStatic = "Idle", a.default.knifeLR = 1, a.default.GameUpdateCtrl = !0
                }, t.prototype.start = function() {
                    a.default.playNum, a.default.bgNumber >= 3 && (a.default.bgNumber = 0), a.default.bgNumber++, a.default.playNum++, cc.tween(this.lineNode.children[0]).to(.3, {
                        opacity: 255
                    }).to(.3, {
                        opacity: 0
                    }).union().repeatForever().start(), this.lineNode.children[0].active = !1, this.fruitS = ["PuTaoS", "YingTaoS", "JuZiS", "NingMengS", "MiHouTaoS", "XiHongShiS", "TaoS", "BoLuoS", "YeZiS", "XiGuaS"], this.createOneFruit(0)
                }, t.prototype.update = function(e) {
                    a.default.GameUpdateCtrl, this.lineNode.children[0].y - n.Instance.fruitHeigth < 100 && this.lineNode.children[0].y - n.Instance.fruitHeigth >= 0 && (this.lineNode.children[0].active = !0), this.lineNode.children[0].y - n.Instance.fruitHeigth > 100 && (this.lineNode.children[0].active = !1)
                }, t.prototype.end = function() {
                    var e = this;
                    if (0 == this.endOne) {
                        for (var t = 0, n = function(n) {
                                setTimeout(function() {
                                    e.createFruitL(e.fruitNode.children[n].getComponent("fruitData").fruitNumber, e.fruitNode.children[n].position, e.fruitNode.children[n].width), a.default.score += e.fruitNode.children[n].getComponent("fruitData").fruitNumber + 1, i.default.Instance.SetScoreTween(a.default.score), e.fruitNode.children[n].active = !1
                                }, 100 * ++t)
                            }, o = this.fruitNode.children.length - 1; o >= 0; o--) n(o);
                        this.lineNode.active = !0;
                        for (var c = 1; c < this.lineNode.children.length; c++) this.lineNode.children[c].active = !1;
                        a.default.GameUpdateCtrl = !1, this.scheduleOnce(function() {
                            l.default.Instance.ToEnd()
                        }, 4), this.endOne++
                    }
                }, t.prototype.testEnd = function() {
                    var e = this;
                    if (this.lineNode.children[0].y - n.Instance.fruitHeigth < -20 && 0 == this.endOne) {
                        for (var t = 0; t < this.fruitNode.children.length; t++) this.fruitNode.children[t].removeComponent(cc.PhysicsCircleCollider), this.fruitNode.children[t].removeComponent(cc.RigidBody);
                        for (var o = function(t) {
                                setTimeout(function() {
                                    e.createFruitL(e.fruitNode.children[t].getComponent("fruitData").fruitNumber, e.fruitNode.children[t].position, e.fruitNode.children[t].width), a.default.score += e.fruitNode.children[t].getComponent("fruitData").fruitNumber + 1, i.default.Instance.SetScoreTween(a.default.score), e.fruitNode.children[t].active = !1
                                }, 100 * t)
                            }, c = 0; c < this.fruitNode.children.length; c++) o(c);
                        this.lineNode.active = !0;
                        for (t = 1; t < this.lineNode.children.length; t++) this.lineNode.children[t].active = !1;
                        a.default.GameUpdateCtrl = !1, this.scheduleOnce(function() {
                            l.default.Instance.ToEnd()
                        }, 4), this.endOne++
                    }
                }, t.prototype.findHighestFruit = function() {
                    for (var e = this.fruitNode.children[0].y, t = 1; t < this.fruitNode.children.length; t++) {
                        var n = this.fruitNode.children[t].y + this.fruitNode.children[t].width / 2;
                        e < n && (e = n);
                    }
                    return e
                }, t.prototype.findLargestFruit = function() { // 自己加的，用于找到最大序号，以便判断是否是第一次生成
                    for (var e = this.fruitNode.children[0].getComponent("fruitData").fruitNumber, t = 1; t < this.fruitNode.children.length; t++) {
                        var n = this.fruitNode.children[t].getComponent("fruitData").fruitNumber;
                        e < n && (e = n)
                    }
                    return e;
                }, t.prototype.createOneFruit = function(e) {
                    var t = this,
                        n = cc.instantiate(this.fruitPre);
                    n.parent = this.lineNode, n.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e], n.children[0].getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e], n.getComponent("fruitData").fruitNumber = e, n.position = this.lineNode.children[1].position, n.scale = 0, n.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static, n.getComponent(cc.PhysicsCircleCollider).radius = 0, n.getComponent(cc.PhysicsCircleCollider).apply(), cc.tween(n).to(.5, {
                        scale: 1
                    }, {
                        easing: "backOut"
                    }).call(function() {
                        t.targetFruit = n
                    }).start();
                }, t.prototype.createLevelUpFruit = function(e, t, maxIndex) {
                    /////////////
                    if (e > maxIndex) {
                        var infoBox = document.getElementById("info");
                        var infoText = document.getElementById("text");
                        var comment = document.getElementById("comment");
                        var pic = document.getElementById("pic");
                        infoBox.style.display = "block";
                        pic.src = (maxIndex + ".png");
                        switch (maxIndex) {
                            case 0:
                                comment.innerHTML = "脱氧核苷酸";
                                infoText.innerHTML = "脱氧核苷酸是遗传物质中最最基本的单位，咱身体每一个细胞中的遗传物质都是由它构成的哦。脱氧核糖核酸由三个小部分组成，分别是胖胖的五边形战士——脱氧核糖、球状的连接骑兵——磷酸基团以及可以相互配对的方块尾巴——碱基。";
                                break;
                            case 1:
                                comment.innerHTML = "寡聚脱氧核苷酸";
                                infoText.innerHTML = "每个脱氧核苷酸的磷酸基团与另一个脱氧核苷酸的羟基能够形成磷酸二酯键，他们手拉手就得到了寡聚脱氧核苷酸；他们的碱基尾巴则并行排列在长链的另一边。我们平时所说的遗传信息就储存在他们碱基尾巴的排列顺序中哦！";
                                break;
                            case 2:
                                comment.innerHTML = "DNA长链";
                                infoText.innerHTML = "随着寡聚脱氧核苷酸继续变长，他们的碱基尾巴不断召唤互补的另一半，最终两条链拧成了一股双螺旋的线，也就是DNA。当然，我们的细胞合成DNA并不是简单的连接那么简单哦。在合成过程中，DNA往往还会被修剪、被检查是否合格，确保可以正常发挥作用。";
                                break;
                            case 3:
                                comment.innerHTML = "前体RNA";
                                infoText.innerHTML = "我们的身体不仅仅是DNA，还有蛋白质等其他生物大分子。想要合成蛋白质，就需要将信息从DNA中读取出来。在DNA双螺旋被解开之后，他们的碱基尾巴会吸引核糖核苷酸，慢慢形成了一条RNA长链，信息也由DNA转移到了RNA上。一般我们将这个过程称为“转录”";
                                break;
                            case 4:
                                comment.innerHTML = "成熟mRNA";
                                infoText.innerHTML = "要知道，我们的基因中有相当一部分是不被用于合成蛋白的（称之为内含子）。因此，刚刚合成出来的RNA是不能直接用来指导合成蛋白质的，他们还需要经过修饰和剪切才能更好地发挥作用。经过一系列反应，前体RNA终于成为了成熟mRNA，即将投入生产蛋白的第一线！";
                                break;
                            case 5:
                                comment.innerHTML = "寡肽";
                                infoText.innerHTML = "类似于早期谍战片中电报员发电报一样，mRNA中的连续三个碱基的排列顺序就像是密码，每一个密码分别对应着一种氨基酸。细胞中的核糖体认读着这些密码，找到对应的交通工具tRNA来将氨基酸送到指定位置并连接起来。这样，我们就得到了几个氨基酸连接的产物——寡肽。";
                                break;
                            case 6:
                                comment.innerHTML = "多肽";
                                infoText.innerHTML = "随着源自DNA的信息被不断读取，氨基酸不断连接，寡肽继续增长，蛋白质的雏形逐渐形成——这就是多肽。";
                                break;
                            case 7:
                                comment.innerHTML = "蛋白质";
                                infoText.innerHTML = "多肽仅仅是一条由氨基酸组成的长链，而我们的蛋白质能够发挥各种神奇的功能。这巨大的转变是如何发生的呢？原来，多肽会进入到细胞中的一些加工厂（细胞器）中，被弯曲、折叠、剪切、修饰，折腾出了一些有特定功能的区域。这样，蛋白质就成熟了，可以发挥它应有的作用了。";
                                break;
                            case 8:
                                comment.innerHTML = "细胞";
                                infoText.innerHTML = "在蛋白质的作用下，我们身体用难以想象的速度生产着各种零部件，然后将他们有序地组装。我们身体的每一个细胞都是这些零部件以特定方式结合的结果。";
                                break;
                            case 9:
                                comment.innerHTML = "人体";
                                infoText.innerHTML = "恭喜！你已经利用原子一步一步合成了你自己！";
                                break;

                        }
                    }
                    ////////////////
                    var o = cc.instantiate(this.fruitPre);
                    o.parent = this.fruitNode, o.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e], o.children[0].getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e], o.getComponent("fruitData").fruitNumber = e, o.position = t, o.scale = 0, o.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -100), o.getComponent(cc.PhysicsCircleCollider).radius = o.height / 2, o.getComponent(cc.PhysicsCircleCollider).apply(), cc.tween(o).to(.5, {
                        scale: 1
                    }, {
                        easing: "backOut"
                    }).call(function() {
                        null != o.getComponent(cc.PhysicsCircleCollider) && (o.getComponent(cc.PhysicsCircleCollider).radius = o.height / 2, o.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic, o.getComponent(cc.PhysicsCircleCollider).apply())
                    }).start(), n.Instance.fruitHeigth = n.Instance.findHighestFruit();
                    // alert(e);
                }, t.prototype.createFruitSui = function(e, t) {}, t.prototype.createFruitL = function(e, t, n) {
                    u.default.Instance.Play(3, !1, .5), u.default.Instance.Play(6, !1, .3);
                    for (var o = 0; o < 10; o++) {
                        var c = r.default.Spawn("juicePre", this.downEffect);
                        c.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruitL[e];
                        var a = 359 * Math.random(),
                            i = 30 * Math.random() + n / 2,
                            l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
                        c.scale = .5 * Math.random() + n / 100;
                        var p = .5 * Math.random();
                        c.position = t, c.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3), cc.rotateBy(p + .5, s.default.RandomInteger(-360, 360))), cc.fadeOut(.1), cc.callFunc(function() {
                            h.active = !1
                        }, this)))
                    }
                    for (var f = 0; f < 20; f++) {
                        var h = r.default.Spawn("juicePre", this.downEffect);
                        h.getComponent(cc.Sprite).spriteFrame = d.default.Instance.guozhiL[e], h.active = !0;
                        a = 359 * Math.random(), i = 30 * Math.random() + n / 2, l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
                        h.scale = .5 * Math.random() + n / 100;
                        p = .5 * Math.random();
                        h.position = t, h.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3)), cc.fadeOut(.1), cc.callFunc(function() {
                            h.active = !1
                        }, this)))
                    }
                    var m = r.default.Spawn("juicePre", this.downEffect);
                    m.getComponent(cc.Sprite).spriteFrame = d.default.Instance.guozhiZ[e], m.position = t, m.scale = 0, m.angle = s.default.RandomInteger(0, 360), m.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, n / 150), cc.fadeOut(1)), cc.callFunc(function() {
                        m.active = !1
                    })))
                }, t.prototype.conboHit = function(e) {}, t.prototype.getScore = function(e, t, n, o) {
                    var c = r.default.Spawn("score", this.bazieffect);
                    c.position = t, c.scale = .2, c.children[1].getComponent(cc.Label).string = e, c.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, n), cc.moveBy(.3, 0, 150), cc.rotateBy(.3, 720)), cc.fadeOut(o)))
                }, t.prototype.ribbonEffect = function(e) {}, t.prototype.ShowLandParti = function(e, t) {}, t.Instance = null, c([h(cc.Node)], t.prototype, "bgLayer", void 0), c([h(cc.Node)], t.prototype, "bgCamera", void 0), c([h(cc.Node)], t.prototype, "mainCamera", void 0), c([h(cc.Node)], t.prototype, "fruitNode", void 0), c([h(cc.Node)], t.prototype, "lineNode", void 0), c([h(cc.Node)], t.prototype, "bazieffect", void 0), c([h(cc.Node)], t.prototype, "downEffect", void 0), c([h(cc.Prefab)], t.prototype, "fruitPre", void 0), t = n = c([f], t)
            }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "../Common/PoolManager": "PoolManager",
        "../Common/Utils": "Utils",
        "../common/DynamicLoad": "DynamicLoad",
        "../common/PlayerInfo": "PlayerInfo",
        "./AudioManager": "AudioManager",
        "./GameManager": "GameManager",
        "./MainGameUi": "MainGameUi"
    }],


    GameManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e5ba8qbQSBBz6Xl6OzdDwcL", "GameManager");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./FailedUi"),
            i = e("./MainGameUi"),
            r = e("./DataManager"),
            s = e("../common/PlayerInfo"),
            l = cc._decorator,
            u = l.ccclass,
            d = (l.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isStart = !1, t.level = 0, t.score = 0, t.inGuide = !1, t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this, cc.find("Canvas/bgLayer").setContentSize(cc.winSize.width, cc.winSize.height)
                }, t.prototype.start = function() {
                    this.PhysicsSystemCtrl(!0, !1)
                }, t.prototype.update = function(e) {}, t.prototype.lateUpdate = function() {
                    this.score = s.default.score
                }, t.prototype.SetScore = function(e) {
                    this.score = e, i.default.Instance.SetScoreTween(this.score)
                }, t.prototype.GameOver = function() {
                    var e = cc.find("Canvas").getComponent("MainGameJS"),
                        t = r.default.Instance.GetPlayerHighScore();
                    this.score > t && (t = this.score, r.default.Instance.SetPlayerHighScore(t)), e.SetScore(this.score), e.SetGameEndScore(), a.default.Instance.ShowFailedUi(s.default.score, t)
                }, t.prototype.RestartGame = function() {
                    cc.find("Canvas").getComponent("MainGameJS").RestartGame()
                }, t.prototype.GetGameEndShowInfo = function() {
                    return cc.find("Canvas").getComponent("MainGameJS").GetGameEndInfo()
                }, t.prototype.ToEnd = function() {
                    if (confirm("观看我们项目的简介视频？")) window.location.href = "https://www.bilibili.com/video/BV13h411z7YZ";
                    else cc.find("Canvas").getComponent("MainGameJS").gameEnd1()
                }, t.prototype.PhysicsSystemCtrl = function(e, t) {
                    cc.director.getPhysicsManager().enabled = e, cc.director.getPhysicsManager().gravity = cc.v2(0, -300), t && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit), cc.director.getCollisionManager().enabled = e, cc.director.getCollisionManager().enabledDebugDraw = t
                }, t.Instance = null, t.isShowAd = !1, t = n = c([u], t)
            }(cc.Component));
        n.default = d, cc._RF.pop()
    }, {
        "../common/PlayerInfo": "PlayerInfo",
        "./DataManager": "DataManager",
        "./FailedUi": "FailedUi",
        "./MainGameUi": "MainGameUi"
    }],


    GameUiTools: [function(e, t, n) { // Ui：用户界面
        "use strict";
        cc._RF.push(t, "b21e8tF461OFalpptyeuAE2", "GameUiTools");
        e("GameConfig");
        var o = {
            newSprite: function(e, t) {
                var n = new cc.Node;
                return t ? (e = e.split(".")[0], n.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(e)) : n.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/resources/" + e), n
            },
            setNodeSpriteFrame: function(e, t) {
                e.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(t)
            },
            setButtonClickEvents: function(e, t, n, o, c) {
                var a = new Array;
                void 0 == t.length ? a[0] = t : a = t;
                for (var i = 0; i < a.length; i++) {
                    var r = new cc.Component.EventHandler;
                    r.target = e.node, r.component = e.node.name, r.handler = n, void 0 == t.length ? r.customEventData = o : r.customEventData = i;
                    var s = a[i].addComponent(cc.Button);
                    s.clickEvents.push(r), (void 0 == c || c) && (s.transition = cc.Button.Transition.SCALE, s.duration = .1, s.zoomScale = 1.2)
                }
            },
            scheduleOnce: function(e, t, n) {
                e.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(t, e)))
            },
            loadingScene: function(e, t) {
                t ? cc.loader.loadRes("panel/LoadingLayer", function(t, n) {
                    var o = cc.instantiate(n);
                    cc.director.getScene().children[0].addChild(o), cc.director.preloadScene(e, function() {
                        cc.director.loadScene(e)
                    })
                }) : cc.director.preloadScene(e, function() {
                    cc.director.loadScene(e)
                })
            },
            loadingLayer: function(e) {
                cc.loader.loadRes(e, function(e, t) {
                    if (!e) {
                        var n = cc.instantiate(t);
                        cc.director.getScene().children[0].addChild(n, 100)
                    }
                })
            }
        };
        t.exports = o, cc._RF.pop()
    }, {
        GameConfig: "GameConfig"
    }],


    HttpManagerJs: [function(e, t, n) {
        "use strict";
        var o;

        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        cc._RF.push(t, "197e1hfNnxIcJx73V3VhUxY", "HttpManagerJs");
        var a = e("GameConfig"),
            i = (c(o = {
                URL: "http://www.wesane.com/h5service.php/Interface/services",
                cacheList: null,
                isBusy: null,
                req: null,
                perform: null,
                retGameId: 0
            }, "cacheList", []), c(o, "ctor", function() {}), c(o, "checkHave", function() {
                this.isBusy || this.sendOne()
            }), c(o, "httpInitUrl", function(e) {
                console.log("data", this.URL), this.retGameId = e
            }), c(o, "send", function(e, t, n, o) {
                this.cacheList.push({
                    type: e,
                    data: t,
                    func: n,
                    target: o
                }), this.isBusy || this.sendOne()
            }), c(o, "sendOne", function() {
                if (0 != this.cacheList.length) {
                    this.isBusy = !0, this.perform = this.cacheList.shift(), this.req = cc.loader.getXMLHttpRequest(), this.req.onreadystatechange = this.onDataHandler.bind(this), this.req.onerror = this.onErrorHandler.bind(this), this.req.ontimeout = this.onTimeoutHandler.bind(this), this.req.timeout = 2e3, cc.log("pos", this.URL), this.req.open("POST", this.URL), this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                    var e = this.returnLanguage();
                    console.log("gameIdid", this.retGameId);
                    var t = this.retGameId,
                        n = {
                            type: this.perform.type,
                            gid: t,
                            mid: null,
                            data: this.perform.data,
                            languageType: e
                        },
                        o = "send=" + JSON.stringify(n);
                    this.req.send(o)
                }
            }), c(o, "onDataHandler", function() {
                if (404 != this.req.status) {
                    if (4 == this.req.readyState && this.req.status >= 200 && this.req.status <= 207 && this.req.responseText) {
                        var e = JSON.parse(this.req.responseText);
                        this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, e.error, e.data, e.commendGame, e.gameInfo) : this.perform.func(e)
                    }
                } else {
                    var t = a.launchScene,
                        n = a.Bros;
                    a.caS;
                    cc.director.loadScene(t, null, function() {
                        if (n) {
                            "";
                            var e = document.getElementById("GameDiv");
                            e && (e.style.backgroundImage = "")
                        }
                        cc.loader.onProgress = null, console.log("Success to load scene: " + t)
                    })
                }
            }), c(o, "returnLanguage", function() {
                return ("" + window.navigator.language).toLocaleLowerCase()
            }), c(o, "onErrorHandler", function() {
                cc.log("\u7f51\u7edc\u9519\u8bef"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
            }), c(o, "onTimeoutHandler", function() {
                cc.log("\u8bf7\u6c42\u8d85\u65f6"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
            }), c(o, "clearAll", function() {
                for (var e = this.cacheList.length, t = 0; t < e; t++) {
                    var n = this.cacheList[t];
                    n && (n.target ? n.func.call(n.target, -1) : n.func(-1))
                }
                this.cacheList.length = 0
            }), o);
        t.exports = i, cc._RF.pop()
    }, {
        GameConfig: "GameConfig"
    }],


    InputController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2fb79pURUZExoy/hAOtHdvz", "InputController");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameFunction"),
            i = e("../common/PlayerInfo"),
            r = e("../Common/PoolManager"),
            s = e("../Common/Utils"),
            l = cc._decorator,
            u = l.ccclass,
            d = l.property,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Rocker = null, t.stick = null, t.Max_r = 100, t.RockerJS = null, t.speed = 400, t.Arrow = null, t.knife = null, t.startPoint = null, t.touchPoint = null, t.endPoint = null, t.ddir = cc.v2(0, 0), t.isCut = !1, t.comboTime = 0, t.comboInterval = .4, t.comboNumber = 0, t.comboMaxNum = 7, t.touchNum = 0, t.createFruitCount = 0, t.istest = !1, t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this
                }, t.prototype.start = function() {
                    this.openTouch(), this.RockerJS = this.Rocker.getComponent("Rocker")
                }, t.prototype.update = function(e) {}, t.prototype.openTouch = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }, t.prototype.onTouchStart = function(e) {
                    if (i.default.playerTouch && null != a.default.Instance.targetFruit) {
                        this.touchNum = 1;
                        var t = this.node.convertToNodeSpaceAR(e.getLocation()).x,
                            n = a.default.Instance.targetFruit.y;
                        cc.tween(a.default.Instance.targetFruit).to(.1, {
                            position: cc.v2(t, n)
                        }).start()
                    }
                }, t.prototype.onTouchMove = function(e) {

                    i.default.playerTouch && null != a.default.Instance.targetFruit && (this.touchNum = 1, a.default.Instance.targetFruit.x = this.node.convertToNodeSpaceAR(e.getLocation()).x)
                }, t.prototype.onTouchEnd = function(e) {
                    //////////////////////////
                    var infoBox = document.getElementById("info");
                    if (infoBox.style.display = "block") infoBox.style.display = "none";

                    //////////////////////
                    var t = this;
                    var slider = document.getElementById("fontSizeSlider");
                    i.default.playerTouch && null != a.default.Instance.targetFruit && 1 == this.touchNum && (this.touchNum = 0, a.default.Instance.targetFruit.getComponent(cc.PhysicsCircleCollider).radius = a.default.Instance.targetFruit.height / 2, a.default.Instance.targetFruit.getComponent(cc.PhysicsCircleCollider).apply(), a.default.Instance.targetFruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic, a.default.Instance.targetFruit.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -800), a.default.Instance.targetFruit = null, this.scheduleOnce(function() {
                        i.default.GameUpdateCtrl && (0 == t.createFruitCount ? (a.default.Instance.createOneFruit(0), t.createFruitCount++) : 1 == t.createFruitCount ? (a.default.Instance.createOneFruit(0), t.createFruitCount++) : 2 == t.createFruitCount ? (a.default.Instance.createOneFruit(1), t.createFruitCount++) : 3 == t.createFruitCount ? (a.default.Instance.createOneFruit(2), t.createFruitCount++) : 4 == t.createFruitCount ? (a.default.Instance.createOneFruit(2), t.createFruitCount++) : 5 == t.createFruitCount ? (a.default.Instance.createOneFruit(3), t.createFruitCount++) : t.createFruitCount > 5 && (a.default.Instance.createOneFruit(s.default.RandomInteger(0.8 * slider.value - 0.4, 1.6 * slider.value + 2)), t.createFruitCount++))
                    }, .5))
                }, t.prototype.closeTouch = function() {

                    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }, t.prototype.addScore = function() {
                    var e = r.default.Spawn("addScore", cc.find("Canvas/downEffParent"));
                    e.position = cc.v2(0, 200), e.scale = 0, e.opacity = 255, e.children[1].getComponent(cc.Label).string = this.comboNumber.toString(), e.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 1), cc.moveBy(.5, 0, 200)), cc.fadeOut(.5), cc.callFunc(function() {
                        r.default.Despawn("addScore", e)
                    })))
                }, t.Instance = null, c([d(cc.Node)], t.prototype, "Rocker", void 0), c([d(cc.Node)], t.prototype, "stick", void 0), c([d], t.prototype, "Max_r", void 0), c([d(cc.Node)], t.prototype, "Arrow", void 0), c([d(cc.Node)], t.prototype, "knife", void 0), t = n = c([u], t)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../Common/PoolManager": "PoolManager",
        "../Common/Utils": "Utils",
        "../common/PlayerInfo": "PlayerInfo",
        "./GameFunction": "GameFunction"
    }],


    KnifeCollision: [function(e, t, n) {}],


    LanguageSetJs: [function(e, t, n) { // 这里有广告
        "use strict";
        cc._RF.push(t, "4754e8KuPZJCqklCNyKpG29", "LanguageSetJs");
        t.exports = {
            language_1: {
                game_name: "\u300c\u5c04\u82f9\u679c\u300d",
                game_name1: "\u5c04\u82f9\u679c",
                game_info: "\u628a\u63e1\u65f6\u673a\uff0c\u5c04\u4e2d\u82f9\u679c\u3002",
                txtStart: "\u5f00\u59cb",
                txtMore: "\u66f4\u591a\u6e38\u620f",
                txtAgain: "\u518d\u73a9\u4e00\u6b21",
                txtShare1: "\u5728\u6e38\u620f\u4e2d ",
                txtShare2: "\u5f97\u5206\u4e86\uff0c\u597d\u554a!\u4f60\u548c\u6211\u4e00\u8d77\u6765\u6bd4\u8d5b!",
                bgRgb: "#3698C5",
                gameT1: "\u5173\u6ce8\u6211\u4eec",
                gameT2: "\u7eb8\u724c\u63a5\u9f99",
                gameT3: "\u9526\u4e0a\u6dfb\u82b1",
                gameUrl1: "http://g.regogame.com/game/9/",
                gameUrl2: "http://g.regogame.com/game/3/",
                gameT11: "\u5173\u6ce8\u5fae\u4fe1",
                gameT12: "\u5173\u6ce8Kakao",
                gameT13: "\u5173\u6ce8Line",
                gameEndL: "\u6e38 \u620f \u7ed3 \u675f",
                gameEndL1: "\u7a0d \u5019 \u67e5 \u770b \u5206 \u6570"
            },
            language_2: {
                game_name: "\u300cShot Apples\u300d",
                game_name1: "Shot Apples",
                game_info: "Seize the opportunity and shoot the apple.",
                txtStart: "Start",
                txtMore: "More Game",
                txtAgain: "Play Again",
                txtShare1: "In Game ",
                txtShare2: " Let's play together!",
                bgRgb: "#3698C5",
                gameT1: "Follow Us",
                gameT2: "Thousand Flower",
                gameT3: "Eliminate Star",
                gameUrl1: "http://g.fromgame.com/game/53",
                gameUrl2: "http://g.fromgame.com/game/13",
                gameT11: "Focus WeChat",
                gameT12: "Focus Kakao",
                gameT13: "Focus Line",
                gameEndL: "Game OVer",
                gameEndL1: "View the score later"
            }
        }, cc._RF.pop()
    }, {}],
    LoadSceneJs: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3ef908fwfNIwJsOjET8tCh2", "LoadSceneJs");
        var o = {
            goToCover: function(e, t, n, o, c) {
                var a = e;
                a = null == a || void 0 == a || e, console.log("LoadBoolBeforeLoadS", a), this.needShow = !1, a && a ? (this.needShow = !0, showMyAds()) : this.needShow = !1, this.needShow ? (void 0 == preloader && this.startGoToGame(n, o, c), resCompleteFlag = !0, adCompleteFlag && resCompleteFlag && this.startGoToGame(n, o, c)) : this.startGoToGame(n, o, c)
            },
            startGoToGame: function(e, t, n) {
                console.log("goToScene"), noAdGoToScene()
            }
        };
        t.exports = o, cc._RF.pop()
    }, {}],


    MainGameJS: [function(e, t, n) { // 主要游戏逻辑入口
        "use strict";
        cc._RF.push(t, "0e7a8SkMLxEY7nCB1Bqi8WZ", "MainGameJS");
        var o = e("GameConfig"),
            c = e("GameUiTools"),
            a = e("MainManage");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameEndLay: cc.Node,
                startBgNode: cc.Node,
                sceneScore: cc.Label,
                gameOverT1: cc.Label,
                gameOverT2: cc.Label,
                gameOverToEnd: cc.Node
            },
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0, cc.director.getPhysicsManager().enabled = !0, this.gameOveEndBool = !1, this.gameOverNum = 0, this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, o.playNum, o.playNum++, c.loadingLayer("panel/LinkIconSpr"), o.mainGameJs = this, o.publicGameBool || this.play()
            },
            play: function() {
                console.log(1);
                var e = this;
                adBreak({
                    type: "next",
                    name: "restart-game",
                    beforeBreak: function() {
                        e.enableButtons()
                    },
                    afterBreak: function() {
                        e.enableButtons()
                    }
                })
            },
            enableButtons: function() {},
            addTouchEvents: function() {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                    if (o.GAME_OVER_BOOL && o.noTouchBool) return o.gameScore++, e.sceneScore.string = o.gameScore, console.log("ggoog", o.gameScore), o.gameScore >= 2 && (this.lastPos = t.getLocation(), e.gameEnd()), !0
                }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this)
            },
            on_touch_move: function() {
                console.log("touchMoved")
            },
            on_touch_end: function() {
                console.log("touchEnd")
            },
            gameEnd: function() {
                o.GAME_OVER_BOOL = !1, a.gameOverShowText(o.gameScore, 1), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.gameEnd1.bind(this))))
            },
            returnCurrentLanType: function() {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE:
                        "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
                        break;
                    case cc.sys.LANGUAGE_KOREAN:
                        e = 4;
                        break;
                    default:
                        e = 3
                }
                return e
            },
            gameEnd1: function() {
                var e = this,
                    t = this.returnCurrentLanType();
                1 == t ? (this.gameOverT1.string = "\u6e38 \u620f \u7ed3 \u675f", this.gameOverT2.string = "\u70b9 \u51fb \u67e5 \u770b \u5206 \u6570") : 2 == t ? (this.gameOverT1.string = "\u904a \u6232 \u7d50 \u675f", this.gameOverT2.string = "\u9ede \u64ca \u67e5 \u770b \u5206 \u6578") : 4 == t ? (this.gameOverT1.string = "\uac8c\uc784 \uc885\ub8cc", this.gameOverT2.string = "\ud074\ub9ad \ud558\uc5ec \uc810\uc218 \ubcf4\uae30") : (this.gameOverT1.string = "Game Over", this.gameOverT2.string = "Click to view the score"), this.gameOveEndBool = !0, this.gameOverT1.node.zIndex = 999, this.gameOverT2.node.zIndex = 999, this.gameOverToEnd.zIndex = 999, this.gameOverT1.node.opacity = 0, this.gameOverT1.node.y = 100, this.gameOverToEnd.y = 0, this.gameOverT1.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3))), this.gameOverToEnd.runAction(cc.sequence(cc.fadeTo(1, 100), cc.callFunc(function() {
                    e.gameOverToEnd.getComponent(cc.Button).enabled = !0
                }))), this.gameOverT2.node.opacity = 0, this.gameOverT2.node.y = this.gameOverT1.node.y - 100, this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3))), this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(2), cc.scaleTo(.3, 1.2).easing(cc.easeSineInOut()), cc.scaleTo(.3, 1).easing(cc.easeSineInOut()))).repeatForever()
                setTimeout(() => {
                    // if (confirm("前往我们项目的主页？")) window.location.href = "https://2021.igem.org/Team:Fudan";
                }, 2000);
            },
            initEndLayer: function() {
                this.gameOverT1.node.active = !1, this.gameOverT2.node.active = !1, this.gameOverToEnd.active = !1, o.publicGameBool || adBreak({
                    type: "next",
                    name: "restart-game"
                }), a.gotoEndLayer1()
            },
            start: function() {},
            update: function(e) {
                this.gameOverGoToOVer()
            },
            gameOverGoToOVer: function() {
                this.gameOveEndBool && (this.gameOverNum++, this.gameOverNum >= 900 && (this.gameOverNum = 0, this.gameOveEndBool = !1))
            },
            SetScore: function(e) {
                o.gameScore = e
            },
            RestartGame: function() {
                o.GAME_OVER_BOOL = !0, o.gameScore = 0, o.publicGameBool || adBreak({
                    type: "next",
                    name: "restart-game"
                }), c.loadingScene("MainGameScene")
            },
            SetGameEndScore: function() {
                a.gameOverShowText(o.gameScore, 1)
            },
            GetGameEndInfo: function() {
                return a.endHttpShowInfo
            }
        }), cc._RF.pop()
    }, {
        GameConfig: "GameConfig",
        GameUiTools: "GameUiTools",
        MainManage: "MainManage"
    }],

    MainGameUi: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "47901xGYuJBULv7U12/mbpk", "MainGameUi");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../common/PlayerInfo"),
            i = e("./EffectCenter"),
            r = e("./AudioManager"),
            s = e("./DataManager"),
            l = e("../commonJs/GameConfig"),
            u = e("../common/DynamicLoad"),
            d = cc._decorator,
            p = d.ccclass,
            f = d.property,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.mainCamera = null, t.bgLayer = null, t.scoreLabel = null, t.scorePanel = null, t.guidePanel = null, t.injuredPanel = null, t.levelPanel = null, t.levelProgress = null, t.heartPanel = null, t.congratulation = null, t.adsButton = null, t.player = null, t.basicsScore = 300, t.currentScore = 0, t.targetScore = 0, t.scoreChangeValue = 0, t.isScoreChange = !1, t.lerpCtrl = !1, t.relerpCtrl = !1, t.level = 1, t.nowYQ = 0, t.passlevelYQ = 1, t.congratulationTime = 0, t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this
                }, t.prototype.start = function() {
                    var e = this;
                    this.ShowScorePanel(), s.default.Instance.GetLevel() % 5 == 1 ? (this.passlevelYQ = .12, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 2 ? (this.passlevelYQ = .31, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 3 ? (this.passlevelYQ = .51, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 4 ? (this.passlevelYQ = .71, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 0 && (this.passlevelYQ = 1, this.lerpCtrl = !0), cc.tween(this.adsButton).call(function() {
                        e.adsButton.children[0].getComponent(cc.Sprite).spriteFrame = u.default.Instance.adsbutton[0]
                    }).delay(.5).call(function() {
                        e.adsButton.children[0].getComponent(cc.Sprite).spriteFrame = u.default.Instance.adsbutton[1]
                    }).delay(.5).union().repeatForever().start()
                }, t.prototype.update = function(e) {
                    this.UpdateScoreLabel(e), this.lerpCtrl && this.lerpNumFunc(this.passlevelYQ), this.levelPanel.children[1].getComponent(cc.Label).string = s.default.Instance.GetLevel().toString()
                }, t.prototype.adsButtonFunc = function() {
                    var jump = confirm("观看我们项目的简介视频？");
                    if (jump) window.open("https://www.bilibili.com/video/BV13h411z7YZ");
                    // window.location.href = "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png"; // 关注作者微信
                }, t.prototype.TestPasslevel = function() {
                    var e = this;
                    this.lerpCtrl = !0, this.nowYQ >= this.passlevelYQ && (this.levelPanel.children[2].runAction(cc.sequence(cc.delayTime(1.3), cc.callFunc(function() {
                        e.relerpCtrl = !0, e.lerpCtrl = !1
                    }), cc.callFunc(function() {
                        e.level += 1, e.nowYQ = 0, e.passlevelYQ = 50 * e.level
                    }))), r.default.Instance.Play(0, !1, 1), i.default.Instance.ShootFlower())
                }, t.prototype.showLevelProgressInfo = function() {
                    this.levelPanel.children[1].children[0].getComponent(cc.Label).string = this.level.toString(), this.levelPanel.children[2].children[0].getComponent(cc.Label).string = (this.level + 1).toString(), this.levelPanel.children[1].runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1))), this.levelPanel.children[2].runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1))), this.levelPanel.children[0].children[0].getComponent(cc.Sprite).fillRange = 0, this.lerpCtrl = !1
                }, t.prototype.lerpNumFunc = function(e) {
                    var t = this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange;
                    e > t ? (this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange += .005, (t = this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange) >= e && (this.lerpCtrl = !1)) : (this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange -= .015, (t = this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange) == e && (this.lerpCtrl = !1))
                }, t.prototype.lerpNumFunc1 = function() {
                    this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange -= .03, this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange <= 0 && (this.relerpCtrl = !1, this.showLevelProgressInfo())
                }, t.prototype.GuideArrawAction = function() {
                    this.guidePanel.children[0].active = !0, this.guidePanel.children[0].runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.1), cc.moveTo(1, 240, 190), cc.moveTo(.5, 120, 70), cc.fadeOut(.5), cc.moveTo(.01, -240, 190))))
                }, t.prototype.closeGuide = function() {
                    this.guidePanel.children[0].active = !1
                }, t.prototype.SetScoreTween = function(e) {
                    this.targetScore != e && (this.targetScore = e, this.scoreChangeValue = Math.abs(this.targetScore - this.currentScore), this.isScoreChange = !0)
                }, t.prototype.UpdateScoreLabel = function(e) {
                    if (this.isScoreChange) {
                        this.currentScore += e * this.scoreChangeValue * 5, this.currentScore >= this.targetScore && (this.currentScore = this.targetScore, this.isScoreChange = !1);
                        var t = Math.floor(this.currentScore);
                        this.scoreLabel.string = t.toString()
                    }
                }, t.prototype.SetScore = function(e) {
                    var t = e.toString().length - 1;
                    this.scoreLabel.node.children[1].x = 60 + 25 * t, e < 1e3 ? (this.scoreLabel.string = String(e), this.scorePanel.children[0].children[0].active = !1, this.scorePanel.children[0].children[1].active = !0) : (this.scoreLabel.string = String(e), this.scoreLabel.node.scale = .7, this.scorePanel.children[0].children[0].active = !1, this.scorePanel.children[0].children[1].active = !0), a.default.score = e
                }, t.prototype.InjuredEffect = function() {
                    this.injuredPanel.active = !0, this.injuredPanel.runAction(cc.sequence(cc.fadeTo(.1, 150), cc.fadeTo(.1, 0)))
                }, t.prototype.HideScorePanel = function() {
                    this.scorePanel.runAction(cc.moveBy(.5, 0, 250)), this.levelPanel.runAction(cc.moveBy(.5, 0, 250)), this.levelProgress.runAction(cc.moveBy(.5, 0, 250)), this.heartPanel.runAction(cc.moveBy(.5, 0, 250))
                }, t.prototype.ShowScorePanel = function() {
                    var e = this.node.children[0].position;
                    this.scorePanel.runAction(cc.moveTo(.5, cc.v2(this.scorePanel.x, e.y - 20)).easing(cc.easeBackOut())), this.levelPanel.runAction(cc.moveTo(.5, e).easing(cc.easeBackOut())), this.levelProgress.runAction(cc.moveTo(.5, cc.v2(-230, e.y - 50)).easing(cc.easeBackOut())), this.heartPanel.runAction(cc.moveTo(.5, cc.v2(270, e.y - 50)).easing(cc.easeBackOut()))
                }, t.prototype.showCongratulation = function() {
                    var e = this;
                    r.default.Instance.Play(1, !1, 1), a.default.GameUpdateCtrl = !1, this.congratulation.active = !0, this.player.getComponent(cc.PolygonCollider).enabled = !1, this.congratulation.children[1].children[2].getComponent(cc.Label).string = a.default.score.toString(), this.congratulation.children[1].runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.callFunc(function() {
                        e.congratulation.children[2].active = !0
                    })))
                }, t.prototype.closeCongratulation = function() {
                    var e = this;
                    this.congratulation.children[2].active = !1, this.congratulation.children[1].runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                        e.congratulation.active = !1, a.default.GameUpdateCtrl = !0
                    }))), l.publicGameBool || adBreak({
                        type: "next",
                        name: "restart-game"
                    }), this.scheduleOnce(function() {
                        e.player.getComponent(cc.PolygonCollider).enabled = !0
                    }, 1)
                }, t.Instance = null, c([f(cc.Node)], t.prototype, "mainCamera", void 0), c([f(cc.Node)], t.prototype, "bgLayer", void 0), c([f(cc.Label)], t.prototype, "scoreLabel", void 0), c([f(cc.Node)], t.prototype, "scorePanel", void 0), c([f(cc.Node)], t.prototype, "guidePanel", void 0), c([f(cc.Node)], t.prototype, "injuredPanel", void 0), c([f(cc.Node)], t.prototype, "levelPanel", void 0), c([f(cc.Node)], t.prototype, "levelProgress", void 0), c([f(cc.Node)], t.prototype, "heartPanel", void 0), c([f(cc.Node)], t.prototype, "congratulation", void 0), c([f(cc.Node)], t.prototype, "adsButton", void 0), c([f(cc.Node)], t.prototype, "player", void 0), t = n = c([p], t)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../common/DynamicLoad": "DynamicLoad",
        "../common/PlayerInfo": "PlayerInfo",
        "../commonJs/GameConfig": "GameConfig",
        "./AudioManager": "AudioManager",
        "./DataManager": "DataManager",
        "./EffectCenter": "EffectCenter"
    }],

    MainManage: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "946adGkxvdBmZXnlD952XtK", "MainManage");
        var o = e("HttpManagerJs"),
            c = e("LanguageSetJs"),
            a = e("GameConfig"),
            i = e("LoadSceneJs"),
            r = (e("GameUiTools"), {
                gameHttpId: 0,
                subScoreHttp: null,
                gameNameText: null,
                gameInfoText: null,
                txtStartText: null,
                txtMoreText: null,
                txtAgainText: null,
                gameEndLText: null,
                gameEndL1Text: null,
                bgLayRgb: null,
                gameEndName1: null,
                gameEndName2: null,
                gameEndUrl1: null,
                gameEndUrl2: null,
                langugeType: 1,
                ranLinkData: null,
                adShowBefore: !1,
                adShowAfter: !0,
                endLayCol: null,
                moreBtnBgCol: null,
                moreBtnTextCol: null,
                recGameData: null,
                recGameUrl: null,
                recGameDelPau: null,
                recGameDelPer: null,
                recGameimg1: null,
                recGameimg2: null,
                recGamePos: null,
                InfoData: null,
                endShow0: null,
                endShow1: null,
                endShow2: null,
                endShow3: null,
                infoGameName: null,
                showText: null,
                startText: null,
                moreGameText: null,
                playAgainText: null,
                endHttpShowInfo: null,
                moreGameUrl: null,
                init: function(e, t, n) {
                    if (!a.publicGameBool) {
                        if (a.playNum >= 1) return;
                        a.playNum++
                    }
                    a.launchScene = e, a.Bros = t, a.caS = n, this.curType = 1, this.getHttpGameId(), this.gamePV_load(), console.log("thisg", this.gameHttpId), o.httpInitUrl(this.gameHttpId);
                    var c = this.initLanguage();
                    this.gameNameText = c.game_name, this.gameInfoText = c.game_info, this.txtStartText = c.txtStart, this.txtMoreText = c.txtMore, this.txtAgainText = c.txtAgain, this.gameEndLText = c.gameEndL, this.gameEndL1Text = c.gameEndL1, this.bgLayRgb = c.bgRgb, this.gameEndName1 = c.gameT2, this.gameEndName2 = c.gameT3, this.gameEndUrl1 = c.gameUrl1, this.gameEndUrl2 = c.gameUrl2, this.langugeType = this.curType, i.goToCover(this.adShowBefore, this.adShowAfter, e, t, n)
                },
                getHttpGameId: function() {
                    var e = window.location.href,
                        t = e.substring(0, e.lastIndexOf("//") + 2),
                        n = window.location.host,
                        o = t + n + "/Service/Share/index";
                    this.gameAllHttp = o, cc.log("gameAll", this.gameAllHttp), this.subScoreHttp = t + n + "/Service/Score/index", this.gamePvHttp = t + n + "/Service/GamePv/index";
                    var c = document.URL,
                        a = 0,
                        i = c.substring(c.lastIndexOf("/game/") + 1, c.length).split("/");
                    i.length >= 2 && (a = i[1]), this.gameHttpId = a, cc.log("gameId", a);
                    e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3);
                    this.moreGameUrl = ""
                },
                gameOverShowText: function(e, t) {
                    this.ajaxLoad("http://www.wesane.com/admin.php/Gamescore/saveGamescore", "gameScore=" + e + "&gameId=" + this.gameHttpId + "&gameType=" + t, this.scoreResult)
                },
                gamePV_load: function() {
                    // alert("0");
                    // this.ajaxLoad("http://www.wesane.com/admin.php/Activityshow/gamelogo", "gameID=" + this.gameHttpId, this.ajaxOnLogoResult)
                },
                ajaxOnLogoResult: function() {},
                ajaxLoad: function(e, t, n) {
                    var o = cc.loader.getXMLHttpRequest();
                    o.onreadystatechange = n, o.open("POST", e), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(t)
                },
                scoreResult: function(e) {
                    if (null != e.currentTarget.response && "" != e.currentTarget.response) {
                        var t = JSON.parse(e.currentTarget.response);
                        cc.log("endshow", t.content), r.endHttpShowInfo = t.content
                    }
                },
                initLanguage: function() {
                    var e = null;
                    return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? (this.curType = 1, e = c.language_1) : (cc.log("\u82f1\u6587"), this.curType = 2, e = c.language_2), e
                },
                getLinkGameReturn: function(e, t, n, o) {
                    if (console.log("err0", e), console.log("err1", t), console.log("err2", n), console.log("err3", o), 0 == e) {
                        this.ranLinkData = t, console.log("LoadMainGameScnee");
                        var c = a.launchScene,
                            r = a.Bros,
                            s = a.caS;
                        i.goToCover(this.adShowBefore, this.adShowAfter, c, r, s)
                    }
                },
                ranRecGameData: function() {
                    if (null != this.recGameData && "" != this.recGameData) {
                        this.returnBool = !1;
                        var e = this.recGameData.length,
                            t = a.returnRanNum(1, e) - 1;
                        cc.log("ranNNN", t), this.recGameUrl = this.recGameData[t].data_link, this.recGameDelPer = this.recGameData[t].delay_per, this.recGameDelPau = this.recGameData[t].delay_pau, this.recGameimg1 = this.recGameData[t].img_1, this.recGameimg2 = this.recGameData[t].img_2, this.recGamePos = this.recGameData[t].poistion
                    }
                },
                ranLinkUrl: function() {
                    if (null != this.ranLinkData && this.ranLinkData.gameList && null != this.ranLinkData.gameList) {
                        var e = this.ranLinkData.gameList.length,
                            t = a.returnRanNum(1, e) - 1;
                        return cc.log("templ", t, this.ranLinkData.gameList), cc.log("url", this.ranLinkData.gameList[0].gameName, this.ranLinkData.gameList[0].gameUrl), t
                    }
                    return null
                },
                gotoEndLayer: function() {
                    if (a.publicGameBool) this.showGameEndLayer();
                    else {
                        if (adEndComplete = !1, resEndComplete = !1, this.needShow = null, 1 == window.navigator.onLine) {
                            var e = this.adShowAfter;
                            console.log("ad", e), (e = null == e || void 0 == e || this.adShowAfter) ? (this.needShow = !0, console.log("showMyad"), showMyAds()) : this.needShow = !1
                        } else console.log("showOver1"), this.showGameEndLayer(), this.needShow = null;
                        console.log("showMyad2", this.needShow), null != this.needShow && (console.log("showMyad3"), this.needShow ? (console.log("pre", preloader), void 0 == preloader && this.showGameEndLayer(), resEndComplete = !0, adEndComplete && resEndComplete && (console.log("showOver1"), this.showGameEndLayer())) : (console.log("gam"), this.showGameEndLayer()))
                    }
                },
                gotoEndLayer1: function() {
                    a.publicGameBool, this.showGameEndLayer()
                },
                showAd: function() {
                    showMyAds() // 广告
                },
                showGameEndLayer: function() {
                    cc.find("Canvas/gameManager").getComponent("GameManager").GameOver()
                }
            });
        t.exports = r, cc._RF.pop()
    }, {
        GameConfig: "GameConfig",
        GameUiTools: "GameUiTools",
        HttpManagerJs: "HttpManagerJs",
        LanguageSetJs: "LanguageSetJs",
        LoadSceneJs: "LoadSceneJs"
    }],

    NewAttribute: [function(e, t, n) { // 捐献榜？
    }, {}],


    PhysicsParticle: [function(e, t, n) { // 物理引擎
    }],

    PlayerInfo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ea489dPDU9OZYOr2dE1HqB7", "PlayerInfo"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.playerTouch = !0, e.score = 0, e.knifeStatic = "Idle", e.knifeLR = 1, e.GameUpdateCtrl = !0, e.playNum = 0, e.tuoweiCtrl = !1, e.bgNumber = 0, e
        }();
        n.default = o, cc._RF.pop()
    }, {}],


    PoolManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "42678O0bOREZKAMjCljpxI3", "PoolManager");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            i = a.ccclass,
            r = a.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.allPrefab = [], t.allPrefabMap = null, t.poolMap = null, t
                }
                var n;
                return o(t, e), n = t, t.prototype.onLoad = function() {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this, this.allPrefabMap = new Map, this.poolMap = new Map;
                    for (var e = 0; e < this.allPrefab.length; e++) {
                        this.allPrefabMap.set(this.allPrefab[e].name, this.allPrefab[e]), cc.log(this.allPrefab[e].name);
                        var t = new cc.NodePool;
                        this.poolMap.set(this.allPrefab[e].name, t)
                    }
                }, t.Spawn = function(e, t) {
                    if (void 0 === t && (t = null), !n.Instance.poolMap.has(e)) return cc.warn("no prefab named " + e), null;
                    var o = n.Instance.poolMap.get(e);
                    if (o.size() > 0) {
                        var c = o.get();
                        return null != t && (c.parent = t), c
                    }
                    var a = cc.instantiate(n.Instance.allPrefabMap.get(e));
                    return null != t && (a.parent = t), a
                }, t.Despawn = function(e, t) {
                    if (!n.Instance.poolMap.has(e)) return cc.log("\u56de\u6536\u5931\u8d25,\u8282\u70b9\u540d : " + e), null;
                    n.Instance.poolMap.get(e).put(t)
                }, t.GetPrefab = function(e) {
                    return n.Instance.allPrefabMap.has(e) ? n.Instance.allPrefabMap.get(e) : null
                }, t.Preload = function(e, t) {
                    if (!n.Instance.poolMap.has(e)) return null;
                    for (var o = n.Instance.poolMap.get(e), c = 0; c < t; c++) {
                        var a = cc.instantiate(n.Instance.allPrefabMap.get(e));
                        o.put(a)
                    }
                }, t.Instance = null, c([r([cc.Prefab])], t.prototype, "allPrefab", void 0), t = n = c([i], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],


    RandomFly: [function(e, t, n) { // 随机的小飞虫，广告？
    }],

    RenderWater: [function(e, t, n) { // 渲染水？
    }, {}],


    Rocker: [function(e, t, n) {}, {}],

    RotateAround: [function(e, t, n) {}, {}],


    Shake: [function(e, t, n) {}, {}],


    SpriteManager: [function(e, t, n) {}, {}],


    Stack: [function(e, t, n) {}, {}],


    Toast: [function(e, t, n) {}, {}],

    ToolsJs: [function(e, t, n) {}, {}],


    Utils: [function(e, t, n) { // 公用程序
        "use strict";
        cc._RF.push(t, "f3369tYECpPVJGWDo7sIHaO", "Utils"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.getBezierPos = function(e, t) {
                var n = new Array,
                    o = e.length;
                if (o < 2) return cc.log("\u63a7\u5236\u70b9\u6570\u4e0d\u80fd\u5c0f\u4e8e 2"), n;
                for (var c = this.getYangHuiTriangle(o), a = 0; a < t; a++) {
                    for (var i = a / t, r = 0, s = 0, l = 0; l < o; l++) r += Math.pow(1 - i, o - l - 1) * e[l].x * Math.pow(i, l) * c[l], s += Math.pow(1 - i, o - l - 1) * e[l].y * Math.pow(i, l) * c[l];
                    n[a] = new cc.Vec2(r, s)
                }
                return n
            }, e.getYangHuiTriangle = function(e) {
                var t = new Array;
                if (1 === e) t[0] = 1;
                else {
                    t[0] = t[1] = 1;
                    for (var n = 3; n <= e; n++) {
                        for (var o = new Array, c = 0; c < n - 1; c++) o[c] = t[c];
                        t[0] = t[n - 1] = 1;
                        for (c = 0; c < n - 2; c++) t[c + 1] = o[c] + o[c + 1]
                    }
                }
                return t
            }, e.ConvertPosition = function(e, t) {
                if (e.parent == t.parent) return e.position;
                var n = e.convertToWorldSpaceAR(cc.v2(0, 0));
                return t.convertToNodeSpaceAR(n)
            }, e.ConvertAngle = function(e, t) {
                for (var n = e.parent, o = e.angle; null != n;) o += n.angle, n = n.parent;
                for (var c = t.parent, a = t.angle; null != c;) a += c.angle, c = c.parent;
                return o - a
            }, e.ConvertAngleValue = function(e, t, n) {
                for (var o = e, c = t; null != o;) c += o.angle, o = o.parent;
                for (var a = n.parent, i = n.angle; null != a;) i += a.angle, a = a.parent;
                return c - i
            }, e.ConvertScale = function(e, t) {
                for (var n = e.parent, o = e.scaleX, c = e.scaleY; null != n;) o *= n.scaleX, c *= n.scaleY, n = n.parent;
                for (var a = t.parent, i = t.scaleX, r = t.scaleY; null != a;) i *= a.scaleX, r *= a.scaleY, a = a.parent;
                var s = o;
                0 != i && (s /= i);
                var l = c;
                return 0 != r && (l /= r), cc.v2(s, l)
            }, e.Random = function(e, t) {
                return Math.random() * (t - e) + e
            }, e.RandomInteger = function(e, t) {
                return Math.floor(Math.random() * (t - e) + e)
            }, e.AngleToRadian = function(e) {
                return e * Math.PI / 180
            }, e.CenteredUi = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var o = (t.length - 1) * e, c = 0; c < t.length; c++) {
                    t[c].getComponent(cc.Label);
                    o += t[c].width
                }
                var a = .5 * -o;
                for (c = 0; c < t.length; c++) 0 != c && (a += e), t[c].x = a + .5 * t[c].width, a += t[c].width
            }, e.CheckPolygonNodeCollision = function(t, n) {
                var o = t.getComponent(cc.PolygonCollider),
                    c = n.getComponent(cc.PolygonCollider);
                if (null == o || null == c) return !1;
                for (var a = new Array, i = 0; i < o.points.length; i++) {
                    var r = cc.v2(o.points[i].x, o.points[i].y);
                    a.push(r)
                }
                var s = new Array;
                for (i = 0; i < c.points.length; i++) {
                    r = cc.v2(c.points[i].x, c.points[i].y);
                    s.push(r)
                }
                var l = t.convertToWorldSpaceAR(cc.v2(0, 0));
                l = cc.find("Canvas").convertToNodeSpaceAR(l), l = t.position;
                for (i = 0; i < a.length; i++) a[i].rotateSelf(e.AngleToRadian(t.angle)), a[i] = l.add(a[i]);
                var u = n.convertToWorldSpaceAR(cc.v2(0, 0));
                u = cc.find("Canvas").convertToNodeSpaceAR(u), u = n.position;
                for (i = 0; i < s.length; i++) s[i].rotateSelf(e.AngleToRadian(n.angle)), s[i] = u.add(s[i]);
                return cc.Intersection.polygonPolygon(a, s)
            }, e.getRandomNum = function(e, t, n) {
                return void 0 === n && (n = !1), n ? Math.floor(Math.random() * (t - e + 1) + e) : Math.random() * (t - e) + e
            }, e.RandomIndexFromArr = function(e) {
                for (var t = new Array, n = new Array, o = 0, c = 0; c < e.length; c++) e[c] > 0 && (t.push(e[c]), n.push(c), o += e[c]);
                var a = 100 / o;
                for (c = 0; c < t.length; c++) t[c] *= a, t[c] = Math.round(t[c]);
                var i = Math.floor(100 * Math.random()),
                    r = -1;
                for (c = 0; c < t.length; c++) {
                    for (var s = 0, l = c; l >= 0; l--) s += t[l];
                    i >= s - t[c] && i < s && (r = c)
                }
                return -1 == r && (r = 0), n[r]
            }, e.ArrayHaveElement = function(e, t) {
                if (null == e || null == t) return !1;
                for (var n = !1, o = 0; o < e.length; o++)
                    if (e[o] == t) {
                        n = !0;
                        break
                    }
                return n
            }, e.DisruptionArray = function(t) {
                for (var n = 0; n < t.length; n++) {
                    var o = e.RandomInteger(0, t.length),
                        c = t[o];
                    t[o] = t[n], t[n] = c
                }
                return t
            }, e.localConvertWorldPointAR = function(e) {
                return e ? e.convertToWorldSpaceAR(cc.v2(0, 0)) : null
            }, e.worldConvertLocalPointAR = function(e, t) {
                return e ? e.convertToNodeSpaceAR(t) : null
            }, e.convetOtherNodeSpaceAR = function(e, t) {
                if (!e || !t) return null;
                var n = this.localConvertWorldPointAR(e);
                return this.worldConvertLocalPointAR(t, n)
            }, e.returnCurrentLanType = function() {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE:
                        "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
                        break;
                    case cc.sys.LANGUAGE_KOREAN:
                        e = 4;
                        break;
                    default:
                        e = 3
                }
                return e
            }, e.cbPosToWorldPos = function(e, t, n, o, c, a) {
                var i = n + (e.x - t.x / 2 + .5) * c,
                    r = o + (e.y + .5) * a;
                return cc.v2(i, r)
            }, e.worldPosToCbPos = function(e, t, n, o, c, a) {
                var i = (e.x - n) / c - .5 + t / 2,
                    r = (e.y - o) / a - .5;
                return i % 1 == 0 && r % 1 == 0 || (i = Math.round(i), r = Math.round(r)), cc.v2(i, r)
            }, e.judgeInArr = function(e, t) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e) return !0;
                return !1
            }, e.getAngle = function(e, t) {
                var n = t.x - e.x,
                    o = t.y - e.y;
                return 360 * Math.atan(o / n) / (2 * Math.PI)
            }, e.judgeIntersect = function(e, t, n, o, c, a, i, r) {
                return Math.min(e, n) <= Math.max(c, i) && Math.min(a, r) <= Math.max(t, o) && Math.min(c, i) <= Math.max(e, n) && Math.min(t, o) <= Math.max(a, r) && (((c - e) * (o - t) - (n - e) * (a - t)) * ((i - e) * (o - t) - (n - e) * (r - t)) <= 1e-8 && ((e - c) * (r - a) - (i - c) * (t - a)) * ((n - c) * (r - a) - (i - c) * (o - a)) <= 1e-8)
            }, e.getNormalizeVector = function(e, t) {
                return t.sub(e).normalize()
            }, e.judgeItemOverlapping = function(e, t, n, o, c, a, i, r) {
                return !(e + n < c || c + i < e || t + o < a || a + r < t)
            }, e.getCircumferencePos = function(e, t, n) {
                var o = cc.v2(0, 0);
                return o.x = e.x + Math.sin(2 * Math.PI / 360 * n) * t, o.y = e.y + Math.cos(2 * Math.PI / 360 * n) * t, o
            }, e.upsetArr = function(e) {
                return e.sort(function(e, t) {
                    return Math.random() > .5 ? -1 : 1
                })
            }, e.getAudio = function(e, t) {
                return cc.sys.os === cc.sys.OS_IOS ? e : t
            }, e.setLocalData = function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            }, e.getLocalData = function(e) {
                return cc.sys.localStorage.getItem(e)
            }, e.getNodePos = function(e, t, n) {
                return n ? e.convertToNodeSpaceAR(t.convertToWorldSpaceAR(n)) : e.convertToNodeSpaceAR(t.convertToWorldSpaceAR())
            }, e.findAllItemIndex = function(e, t) {
                for (var n = 0, o = [], c = n; c < t.length; c++) t[c] == e && (n = c, o.push(c));
                return o
            }, e.judgeArrSame = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    for (var o = 0; o < t.length; o++)
                        if (e[n] !== t[o]) return !1;
                return !0
            }, e.count = function(e, t) {
                return e.reduce(function(e, n) {
                    return n === t ? e + 1 : e
                }, 0)
            }, e.pDistance = function(e, t) {
                return e.sub(t).mag()
            }, e.getAngleByVector = function(e) {
                return e.y < 0 ? 360 - cc.v2(1, 0).angle(e) / Math.PI * 180 : cc.v2(1, 0).angle(e) / Math.PI * 180
            }, e.getBoundingBoxToNode = function(e, t) {
                var n = t.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(-e.anchorX * e.width * (e.scaleX / Math.abs(e.scaleX)), -e.anchorY * e.height * (e.scaleY / Math.abs(e.scaleY)))));
                return cc.rect(n.x, n.y, e.width * Math.abs(e.scaleX), e.height * Math.abs(e.scaleY))
            }, e.degreesToVectors = function(e) {
                var t = cc.misc.degreesToRadians(e);
                return cc.v2(0, 1).rotate(-t)
            }, e.VectorsdegreesToVectors = function(e, t) {
                var n = cc.misc.degreesToRadians(t);
                return e.rotate(-n)
            }, e.vectorsToDegress = function(e) {
                if (Math.abs(e.x) + Math.abs(e.y) !== 0) {
                    var t = cc.v2(0, 1),
                        n = cc.v2(e).signAngle(t);
                    return cc.misc.radiansToDegrees(n)
                }
                return 0
            }, e.judgeArrExist = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t) return !0;
                return !1
            }, e.deleteArrItem = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t) return void e.splice(n, 1)
            }, e.UpsetArr = function(e) {
                for (var t, n = e.length; n;) {
                    var o = Math.floor(Math.random() * n--);
                    t = [e[n], e[o]], e[o] = t[0], e[n] = t[1]
                }
                return e
            }, e.sortArr = function(e, t) {
                for (var n = 0; n < e.length - 1; n++)
                    for (var o = 0; o < e.length - 1; o++) {
                        switch (t) {
                            case 0:
                                var c = e[o] > e[o + 1];
                                break;
                            case 1:
                                c = e[o].x > e[o + 1].x;
                                break;
                            case 2:
                                c = e[o].y > e[o + 1].y
                        }
                        if (c) {
                            var a = e[o];
                            e[o] = e[o + 1], e[o + 1] = a
                        }
                    }
            }, e.getPointByCPAndAngleAndLen = function(e, t, n) {
                var o = t * Math.PI / 180,
                    c = n * Math.cos(o),
                    a = n * Math.sin(o);
                return cc.p(e.x + a, e.y + c)
            }, e.setSprite = function(e, t, n) {
                var o = e.getSpriteFrame(n);
                t.getComponent(cc.Sprite).spriteFrame = o
            }, e.logArr = function(e) {
                for (var t = "", n = 0; n < e.length; n++) t += e[n].x + ",", t += e[n].y + ",";
                cc.log(t)
            }, e.analysisArr = function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    if (n % 2 == 0) {
                        var o = cc.v2(e[n], e[n + 1]);
                        t.push(o)
                    }
                return t
            }, e.DetermineTheAngle = function(e, t) {
                var n = e.x - t.x,
                    o = e.y - t.y,
                    c = cc.v2(n, o);
                return Math.atan2(c.x, c.y) * (180 / Math.PI)
            }, e
        }();
        n.default = o, cc._RF.pop()
    }, {}],


    WallUpdate: [function(e, t, n) {}, {}],


    bfPrefabJs: [function(e, t, n) {}, {}],


    fruitData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "55375yB7OxHJ6SSoJ5ShoDj", "fruitData");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../common/PlayerInfo"),
            i = e("./GameFunction"),
            r = e("../Common/PoolManager"),
            s = e("../Common/Utils"),
            l = e("../common/DynamicLoad"),
            u = e("./MainGameUi"),
            d = e("./AudioManager"),
            p = cc._decorator,
            f = p.ccclass,
            h = p.property,
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.levelNumber = 0, t.fruitNumber = 0, t.bianjieX = 0, t.pengzhuangCount = 0, t.notTargetTime = 0, t.returnNumber = !1, t.getNumberTime = 0, t.endCtrl = !1, t.endOne = 0, t.wallColl = 0, t.testEndDJS = 0, t
                }
                return o(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {
                    this.bianjieX = 360 - this.node.width / 2
                }, t.prototype.update = function(e) {
                    var t = this;
                    if (this.node.x < -this.bianjieX && (this.node.x = -this.bianjieX), this.node.x > this.bianjieX && (this.node.x = this.bianjieX), this.notTargetTime += e, this.returnNumber && (this.scheduleOnce(function() {
                            t.getNumberTime = 0
                        }, .25), this.returnNumber = !1), "fruitNode" == this.node.parent.name && (this.testEndDJS += e), this.node.y + this.node.width / 2 > cc.find("Canvas/lineNode").children[0].y && 0 == this.pengzhuangCount && this.endCtrl && 0 == this.endOne && this.testEndDJS > 3) {
                        a.default.GameUpdateCtrl = !1, a.default.playerTouch = !1;
                        for (var n = 0; n < cc.find("Canvas/fruitNode").children.length; n++) cc.find("Canvas/fruitNode").children[n].removeComponent(cc.PhysicsCircleCollider), cc.find("Canvas/fruitNode").children[n].removeComponent(cc.RigidBody);
                        this.node.color = cc.Color.RED, cc.tween(this.node).to(.3, {
                            opacity: 0
                        }).to(.3, {
                            opacity: 255
                        }).union().repeat(3).call(function() {
                            i.default.Instance.end(), cc.find("Canvas/lineNode").children[0].active = !1
                        }).start(), this.endOne++
                    }
                }, t.prototype.setGridInfo = function() {}, t.prototype.getNumber = function() {
                    var e = this.getNumberTime;
                    return this.getNumberTime++, this.returnNumber = !0, e
                }, t.prototype.onBeginContact = function(e, t, n) {
                    var o = this;
                    if ("downwall" == n.node.group && (t.node.parent = cc.find("Canvas/fruitNode"), 0 == this.wallColl && (d.default.Instance.Play(5, !1, 1), this.wallColl++)), "fruit" == n.node.group) {
                        if (this.endCtrl = !0, t.node.y < n.node.y) return;
                        t.node.parent = cc.find("Canvas/fruitNode"), i.default.Instance.fruitHeigth = i.default.Instance.findHighestFruit(), null != t.node.getComponent(cc.RigidBody) && (t.node.getComponent(cc.RigidBody).angularVelocity = 0);
                        var c = this.fruitNumber,
                            r = n.node.getComponent("fruitData").fruitNumber,
                            maxIndex = i.default.Instance.findLargestFruit();
                        c == r && c < 9 && r < 9 ? (this.pengzhuangCount += 1, 0 == t.node.getComponent("fruitData").getNumber() && (a.default.score += this.fruitNumber + 1, u.default.Instance.SetScoreTween(a.default.score), n.node.getComponent(cc.PhysicsCircleCollider).radius = 0, n.node.getComponent(cc.PhysicsCircleCollider).apply(), this.node.getComponent(cc.PhysicsCircleCollider).radius = 0, this.node.getComponent(cc.PhysicsCircleCollider).apply(), cc.tween(t.node).to(.1, {
                            position: n.node.position
                        }).call(function() {
                            i.default.Instance.createFruitSui(o.fruitNumber, n.node.position), i.default.Instance.createFruitL(o.fruitNumber, n.node.position, n.node.width), i.default.Instance.createLevelUpFruit(o.fruitNumber + 1, n.node.position, maxIndex), n.node.active = !1, t.node.active = !1, n.node.destroy(), t.node.destroy()
                        }).start())) : c == r && 9 == c && 9 == r && (this.pengzhuangCount += 1, 0 == t.node.getComponent("fruitData").getNumber() && (a.default.score += this.fruitNumber + 1, u.default.Instance.SetScoreTween(a.default.score), n.node.getComponent(cc.PhysicsCircleCollider).radius = 0, n.node.getComponent(cc.PhysicsCircleCollider).apply(), this.node.getComponent(cc.PhysicsCircleCollider).radius = 0, this.node.getComponent(cc.PhysicsCircleCollider).apply(), a.default.playerTouch = !1, cc.tween(t.node).to(.1, {
                            // 这里是加分的地方
                            position: n.node.position
                        }).call(function() {
                            i.default.Instance.createFruitSui(o.fruitNumber, n.node.position), i.default.Instance.createFruitL(o.fruitNumber, n.node.position, n.node.width), i.default.Instance.createLevelUpFruit(o.fruitNumber + 1, n.node.position, maxIndex);
                            var e = cc.find("Canvas/upEffectParent").getChildByName("daxigua");
                            e.active = !0, e.opacity = 0, cc.tween(e).to(.5, {
                                opacity: 150
                            }).start();
                            var c = new cc.Node;
                            c.addComponent(cc.Sprite).spriteFrame = l.default.Instance.fruit[10], c.parent = cc.find("Canvas/upEffectParent"), c.position = cc.v2(0, -500), c.scale = 0;
                            var r = new cc.Node;
                            r.addComponent(cc.Sprite).spriteFrame = l.default.Instance.caidia[6], r.scale = 3, r.parent = c, r.position = cc.v2(0), cc.tween(r).by(5, {
                                angle: 360
                            }).repeatForever().start();
                            var s = new cc.Node;
                            s.addComponent(cc.Sprite).spriteFrame = l.default.Instance.fruit[10], s.parent = c, s.position = cc.v2(0), d.default.Instance.Play(4, !1, 1), i.default.Instance.ribbonEffect(cc.v2(0, 0)), c.runAction(cc.sequence(cc.spawn(cc.jumpBy(1, 0, 0, 300, 1), cc.scaleTo(1, 1)), cc.delayTime(1), cc.spawn(cc.moveTo(1, cc.v2(0, 500)), cc.scaleTo(1, 0)), cc.callFunc(function() {
                                a.default.score += 100, u.default.Instance.SetScoreTween(a.default.score), e.active = !1, a.default.playerTouch = !0, c.destroy()
                            }))), n.node.active = !1, t.node.active = !1, n.node.destroy(), t.node.destroy()
                        }).start()))
                    }
                    // }, t.prototype.createBoom = function() {
                    //     var e = r.default.Spawn("boom", cc.find("Canvas/upEffectParent"));
                    //     e.position = this.node.position, e.runAction(cc.sequence(cc.delayTime(.5), cc.fadeOut(.5)))
                    // }, t.prototype.createStar = function() {
                    //     var e = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
                    //     e.scale = s.default.Random(.1, 1);
                    //     var t = this.node.x + this.node.width / 2,
                    //         n = this.node.x - this.node.width / 2,
                    //         o = this.node.y;
                    //     e.position = cc.v2(s.default.RandomInteger(n, t), o), e.runAction(cc.fadeOut(2))
                    // }, t.prototype.planeBoomEffect = function() {
                    //     r.default.Spawn("boom", cc.find("Canvas/upEffectParent")).position = s.default.convetOtherNodeSpaceAR(this.node, cc.find("Canvas/upEffectParent"))
                    // }, t.prototype.clockEoilffect = function(e, t) {
                    //     for (var n = 0; n < 3; n++) setTimeout(function() {
                    //         var t = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
                    //         t.position = e.position, t.scale = .3, t.runAction(cc.sequence(cc.scaleTo(.5, 1.1), cc.fadeOut(.5)))
                    //     }, 300 * n)
                }, t.prototype.addScoreEffect = function() {
                    var e = r.default.Spawn("add1", cc.find("Canvas/mainGameUi"));
                    e.position = cc.find("Canvas/mainGameUi").children[0].position.add(cc.v2(0, 50)), e.runAction(cc.spawn(cc.moveBy(.5, 0, 50), cc.fadeOut(.5)))
                }, c([h()], t.prototype, "fruitNumber", void 0), t = c([f], t)
            }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "../Common/PoolManager": "PoolManager",
        "../Common/Utils": "Utils",
        "../common/DynamicLoad": "DynamicLoad",
        "../common/PlayerInfo": "PlayerInfo",
        "./AudioManager": "AudioManager",
        "./GameFunction": "GameFunction",
        "./MainGameUi": "MainGameUi"
    }],


    gameOverJs: [function(e, t, n) {
        //     "use strict";
        //     cc._RF.push(t, "3621brbM61BsYFG7fM/74TL", "gameOverJs");
        //     var o = e("GameUiTools"),
        //         c = e("GameConfig"),
        //         a = e("MainManage");
        //     cc.Class({
        //         extends: cc.Component,
        //         properties: {
        //             bgLayer: cc.Node,
        //             scoreBg: cc.Node,
        //             overScoreT: cc.Label,
        //             overInfoT: cc.Label,
        //             moreBtn: cc.Button,
        //             leftBtn: cc.Button,
        //             rightBtn: cc.Button,
        //             midGameText: cc.Label,
        //             leftBtnText: cc.Label,
        //             rightBtnText: cc.Label,
        //             maxScoreText: cc.Label
        //         },
        //         onLoad: function() {
        //             this.bgLayer.color = cc.color("#68b951"), this.standardScore = c.standScore, this.game_max_score = 200, this.rigthBtnGameName = null, this.rightBtnGameUrl = null, this.UIPosChange(), this.addClickBtns();
        //             var e = "\u6700\u9ad8\u7eaa\u5f55:",
        //                 t = this.returnCurrentLanType();
        //             e = 1 == t ? "\u6700\u9ad8\u7eaa\u5f55:" : 2 == t ? "\u6700\u9ad8\u7d00\u9304:" : 4 == t ? "\ucd5c\uace0 \uae30\ub85d:" : "Highest Record:";
        //             var n = c.gameScore,
        //                 o = this.getHighScore();
        //             o ? o < c.gameScore && (this.setHisSocre(c.gameScore), o = c.gameScore) : (this.setHisSocre(c.gameScore), o = n), this.maxScoreText.string = e + o
        //         },
        //         returnCurrentLanType: function() {
        //             var e = 1;
        //             switch (cc.sys.language) {
        //                 case cc.sys.LANGUAGE_CHINESE:
        //                     "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
        //                     break;
        //                 case cc.sys.LANGUAGE_KOREAN:
        //                     e = 4;
        //                     break;
        //                 default:
        //                     e = 3
        //             }
        //             return e
        //         },
        //         setHisSocre: function(e) {
        //             cc.sys.localStorage.setItem("HigScore_JiaoTong", e)
        //         },
        //         getHighScore: function() {
        //             return cc.sys.localStorage.getItem("HigScore_JiaoTong")
        //         },
        //         UIPosChange: function() {
        //             this.overScoreT.string = c.gameScore, console.log("lang", a.langugeType);
        //             var e = null;
        //             e = 1 == a.langugeType ? this.getContentByScore(c.gameScore, a.gameNameText) : this.getContentByScore2(c.gameScore, a.gameNameText), console.log("nihao", a.endHttpShowInfo), null != a.endHttpShowInfo && "" != a.endHttpShowInfo && (cc.log("gototo"), e = a.endHttpShowInfo), this.overInfoT.string = e;
        //             var t = this.overInfoT.node.height;
        //             if (this.overInfoT.node.height = Math.ceil(e.length * this.overInfoT.fontSize / this.overInfoT.node.width) * t, document.title = e, console.log("gameOver txtMoreText", a.txtMoreText), this.midGameText.string = a.txtMoreText, this.leftBtnText.string = a.txtAgainText, this.tempArr = this.gameFocus(), null != a.ranLinkUrl()) {
        //                 var n = a.ranLinkUrl(),
        //                     o = a.ranLinkData.gameList[n].gameName;
        //                 this.rigthBtnGameName = o, this.rightBtnGameUrl = a.ranLinkData.gameList[n].gameUrl
        //             }
        //             null != this.rigthBtnGameName && "" != this.rigthBtnGameName ? this.rightBtnText.string = this.rigthBtnGameName : this.rightBtnText.string = this.tempArr[0]
        //         },
        //         gameFocus: function() {
        //             var e = [],
        //                 t = null,
        //                 n = null;
        //             return Math.random() <= .5 ? (t = a.gameEndName1, n = a.gameEndUrl1) : (t = a.gameEndName2, n = a.gameEndUrl2), e.push(t), e.push(n), e
        //         },
        //         addClickBtns: function() {
        //             var e = this;
        //             e.moreBtn.node.on(cc.Node.EventType.TOUCH_START, function(e) {}), e.moreBtn.node.on(cc.Node.EventType.TOUCH_END, function(e) {
        //                 console.log("MoreGame"), window.location.href = a.moreGameUrl
        //             }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function(e) {}), e.leftBtn.node.on(cc.Node.EventType.TOUCH_END, function(e) {
        //                 c.GAME_OVER_BOOL = !0, c.gameScore = 0, o.loadingScene("MainGameScene")
        //             }), e.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function(e) {}), e.rightBtn.node.on(cc.Node.EventType.TOUCH_END, function(t) {
        //                 var n = null;
        //                 n = null != e.rightBtnGameUrl && "" != e.rightBtnGameUrl ? e.rightBtnGameUrl : e.tempArr[1], window.location.href = n
        //             })
        //         },
        //         getContentByScore: function(e, t) {
        //             var n = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e861\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f971\u5206\uff01",
        //                 o = parseInt(.3 * this.standardScore),
        //                 c = parseInt(1.5 * this.standardScore),
        //                 a = parseInt(2.5 * this.standardScore),
        //                 i = parseInt(4 * this.standardScore);
        //             if (e > 0 && e <= o) n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01";
        //             else if (e > o && e <= this.standardScore) n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01";
        //             else if (e > this.standardScore && e <= c) {
        //                 n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(12 * (e - this.standardScore) / (c - this.standardScore)) + 80) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01"
        //             } else if (e > c && e <= a) {
        //                 n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(7 * (e - c) / (a - c)) + 92) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01"
        //             } else if (e > a && e <= i) n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01";
        //             else if (e > i && e < this.game_max_score) {
        //                 n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - i) / (this.game_max_score - i))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01"
        //             } else e >= this.game_max_score && (n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01");
        //             return n
        //         },
        //         strlen: function(e) {
        //             for (var t = 0, n = 0; n < e.length; n++) {
        //                 var o = e.charCodeAt(n);
        //                 o >= 1 && o <= 126 || 65376 <= o && o <= 65439 ? t++ : t += 2
        //             }
        //             return t
        //         },
        //         getContentByScore2: function(e, t) {
        //             var n = "I'm awesome\uff0cin" + t + "get 0 score\uff0conly one person in the world has a 0\uff01",
        //                 o = parseInt(.3 * this.standardScore),
        //                 c = parseInt(1.5 * this.standardScore),
        //                 a = parseInt(2.5 * this.standardScore),
        //                 i = parseInt(4 * this.standardScore);
        //             if (e >= this.game_max_score) n = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!";
        //             else if (e > 0 && e <= o) n = "I got " + e + " points in the game, really great\uff01";
        //             else if (e > o && e <= this.standardScore) n = "I got " + e + " points in the game, really great\uff01";
        //             else if (e > this.standardScore && e <= c) {
        //                 n = "I got in the game in " + e + " points, beating out " + (Math.floor(12 * (e - this.standardScore) / (c - this.standardScore)) + 80) + "% of global players\uff01"
        //             } else if (e > c && e <= a) {
        //                 n = "I got in the game in " + e + " points, beating out " + (Math.floor(7 * (e - c) / (a - c)) + 92) + "% of global players\uff01"
        //             } else if (e > a && e <= i) n = "I got in the game in " + e + " points, beating out 99% of global players\uff01";
        //             else if (e > i && e < this.game_max_score) {
        //                 n = "I got " + e + " points in the game, it said to be the world's only " + (20 - Math.ceil(17 * (e - i) / (this.game_max_score - i))) + " people to reach this level! Have you?"
        //             }
        //             return n
        //         },
        //         start: function() {}
        //     }), cc._RF.pop()
        // }, {
        //     GameConfig: "GameConfig",
        //     GameUiTools: "GameUiTools",
        //     MainManage: "MainManage"
    }],


    linkHttpIconJs: [function(e, t, n) {}],


    peaCannonAI: [function(e, t, n) {}],


    resArr: [function(e, t, n) {}, {}],


    startGameJs: [function(e, t, n) {}],


    startPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d42d3uJR2RCPLKQIl417E7S", "startPanel");
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
    }, {
        "../Common/Utils": "Utils",
        "../commonJs/GameConfig": "GameConfig"
    }],
    "use_v2.1.x_cc.Action": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ce2acozQx1Dq7kOhKg5RkBi", "use_v2.1.x_cc.Action"), cc.macro.ROTATE_ACTION_CCW = !0, cc._RF.pop()
    }, {}],


    wineObsmove: [function(e, t, n) {}],


    winerCollision: [function(e, t, n) {}]
}, {}, ["HttpManagerJs", "LanguageSetJs", "LoadSceneJs", "AniTools", "MainGameJS", "ToolsJs", "resArr", "MainManage", "AddScore", "AdjusWithHeight", "AudioManager", "AutoDestroy", "DataManager", "EffectCenter", "FailedUi", "GameFunction", "GameManager", "InputController", "KnifeCollision", "MainGameUi", "NewAttribute", "PhysicsParticle", "Rocker", "RotateAround", "Stack", "WallUpdate", "fruitData", "peaCannonAI", "startPanel", "wineObsmove", "winerCollision", "GameConfig", "GameUiTools", "DynamicLoad", "EffectSprite", "PlayerInfo", "PoolManager", "RandomFly", "RenderWater", "Shake", "SpriteManager", "Toast", "Utils", "bfPrefabJs", "gameOverJs", "linkHttpIconJs", "startGameJs", "use_v2.1.x_cc.Action"]);

function fun1() {
    var info = document.getElementById("info");
    info.style.display = "none";
}