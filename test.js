this.swanGlobal = this;
this.GameGlobal = this;

// FIMXE
this.window = this;

this.navigator = {
    userAgent: _naSwan.userAgent
};

// 扩展extension使用
this.swanExtensionCache = {};
this.swanExtensionExtend = function(name, callback) {
    this.swanExtensionCache[name] = callback;
}
.bind(this);

!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.swan = t() : e.swan = t()
}(swanGlobal, function() {
    return function(n) {
        var a = {};
        function r(e) {
            if (a[e])
                return a[e].exports;
            var t = a[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, r),
            t.l = !0,
            t.exports
        }
        return r.m = n,
        r.c = a,
        r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        r.t = function(t, e) {
            if (1 & e && (t = r(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (r.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var a in t)
                    r.d(n, a, function(e) {
                        return t[e]
                    }
                    .bind(null, a));
            return n
        }
        ,
        r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, "a", t),
            t
        }
        ,
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "",
        r(r.s = 13)
    }([function(e, t, n) {
        "use strict";
        var a, r;
        _naSwan.getMethodsList = _naSwan.getMethodsList || (a = void 0,
        r = ["Canvas", "Image", "console", "getMethodsList"],
        function() {
            if (a)
                return a;
            for (var e in a = [],
            _naSwan)
                "function" == typeof _naSwan[e] && r.indexOf(e) < 0 && a.push(e);
            return a
        }
        ),
        _naSwan.getMethodsList().forEach(function(e) {
            _naSwan[e] = _naSwan[e].bind(_naSwan)
        });
        try {
            _naSwan.bridge = new _naSwan.Bridge
        } catch (e) {}
        t.a = _naSwan
    }
    , function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }),
        n.d(t, "b", function() {
            return o
        });
        var a = function() {
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && a(e.prototype, t),
                n && a(e, n),
                e
            }
        }();
        var d = Array.prototype.slice
          , r = function() {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this._$handlers = {},
                this._$eventProcessor = e
            }
            return a(t, [{
                key: "one",
                value: function(e, t, n, a) {
                    var r = this._$handlers;
                    if ("function" == typeof t && (a = n,
                    n = t,
                    t = null),
                    !n || !e)
                        return this;
                    t = s(this, t),
                    r[e] || (r[e] = []);
                    for (var i = 0; i < r[e].length; i++)
                        if (r[e][i].h === n)
                            return this;
                    return r[e].push({
                        h: n,
                        one: !0,
                        query: t,
                        ctx: a || this
                    }),
                    this
                }
            }, {
                key: "on",
                value: function(e, t, n, a) {
                    var r = this._$handlers;
                    if ("function" == typeof t && (a = n,
                    n = t,
                    t = null),
                    !n || !e)
                        return this;
                    t = s(this, t),
                    r[e] || (r[e] = []);
                    for (var i = 0; i < r[e].length; i++)
                        if (r[e][i].h === n)
                            return this;
                    return r[e].push({
                        h: n,
                        one: !1,
                        query: t,
                        ctx: a || this
                    }),
                    this
                }
            }, {
                key: "isSilent",
                value: function(e) {
                    var t = this._$handlers;
                    return !(t[e] && t[e].length)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = this._$handlers;
                    if (!e)
                        return this._$handlers = {},
                        this;
                    if (t) {
                        if (n[e]) {
                            for (var a = [], r = 0, i = n[e].length; r < i; r++)
                                n[e][r].h !== t && a.push(n[e][r]);
                            n[e] = a
                        }
                        n[e] && 0 === n[e].length && delete n[e]
                    } else
                        delete n[e];
                    return this
                }
            }, {
                key: "trigger",
                value: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    var a = t[0];
                    if (this._$handlers[a]) {
                        var r = t.length
                          , i = this._$eventProcessor;
                        3 < r && (t = d.call(t, 1));
                        for (var o = this._$handlers[a], s = o.length, u = 0; u < s; ) {
                            var c = o[u];
                            if (i && i.filter && null != c.query && !i.filter(a, c.query))
                                u++;
                            else {
                                switch (r) {
                                case 1:
                                    c.h.call(c.ctx);
                                    break;
                                case 2:
                                    c.h.call(c.ctx, t[1]);
                                    break;
                                case 3:
                                    c.h.call(c.ctx, t[1], t[2]);
                                    break;
                                default:
                                    c.h.apply(c.ctx, t)
                                }
                                c.one ? (o.splice(u, 1),
                                s--) : u++
                            }
                        }
                    }
                    return this
                }
            }, {
                key: "triggerWithContext",
                value: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    var a = t[0];
                    if (this._$handlers[a]) {
                        var r = t.length
                          , i = this._$eventProcessor;
                        4 < r && (t = d.call(t, 1, t.length - 1));
                        for (var o = t[t.length - 1], s = this._$handlers[a], u = s.length, c = 0; c < u; ) {
                            var l = s[c];
                            if (i && i.filter && null != l.query && !i.filter(a, l.query))
                                c++;
                            else {
                                switch (r) {
                                case 1:
                                    l.h.call(o);
                                    break;
                                case 2:
                                    l.h.call(o, t[1]);
                                    break;
                                case 3:
                                    l.h.call(o, t[1], t[2]);
                                    break;
                                default:
                                    l.h.apply(o, t)
                                }
                                l.one ? (s.splice(c, 1),
                                u--) : c++
                            }
                        }
                    }
                    return this
                }
            }]),
            t
        }()
          , i = null
          , o = function() {
            return i || (i = new r),
            i
        };
        function s(e, t) {
            var n = e._$eventProcessor;
            return null != t && n && n.normalizeQuery && (t = n.normalizeQuery(t)),
            t
        }
    }
    , function(e, t, n) {
        "use strict";
        n.d(t, "h", function() {
            return i
        }),
        n.d(t, "d", function() {
            return o
        }),
        n.d(t, "g", function() {
            return s
        }),
        n.d(t, "c", function() {
            return l
        }),
        n.d(t, "f", function() {
            return d
        }),
        n.d(t, "b", function() {
            return m
        }),
        n.d(t, "e", function() {
            return g
        }),
        n.d(t, "a", function() {
            return v
        });
        var a = n(0)
          , r = n(1)
          , u = n(6)
          , c = new r.a;
        function i(e) {
            c.on("touchstart", e)
        }
        function o(e) {
            c.off("touchstart", e)
        }
        function s(e) {
            c.on("touchmove", e)
        }
        function l(e) {
            c.off("touchmove", e)
        }
        function d(e) {
            c.on("touchend", e)
        }
        function m(e) {
            c.off("touchend", e)
        }
        function g(e) {
            c.on("touchcancel", e)
        }
        function v(e) {
            c.off("touchcancel", e)
        }
        for (var p = ["touchstart", "touchmove", "touchend", "touchcancel"], f = function(n) {
            a.a.addEventListener(p[n], function(e) {
                var i, o, s, t;
                c.trigger(p[n], (i = e,
                o = y ? null : Object(u.b)(),
                s = {
                    timeStamp: i.timestamp || i.timeStamp,
                    target: o,
                    currentTarget: o
                },
                (t = function(e) {
                    s[e] = [];
                    var t = i[e];
                    if (t.length)
                        for (var n = 0; n < t.length; ++n) {
                            var a = {}
                              , r = t[n];
                            a.identifier = r.identifier,
                            a.clientX = r.clientX,
                            a.clientY = r.clientY,
                            a.pageX = r.clientX,
                            a.pageY = r.clientY,
                            a.screenX = r.clientX,
                            a.screenY = r.clientY,
                            a.target = o,
                            s[e].push(a)
                        }
                }
                )("touches"),
                t("changedTouches"),
                s))
            })
        }, h = 0; h < p.length; ++h)
            f(h);
        var y = "openData" === a.a.domain
    }
    , function(e, t, n) {
        "use strict";
        n.d(t, "g", function() {
            return r
        }),
        n.d(t, "e", function() {
            return i
        }),
        n.d(t, "c", function() {
            return o
        }),
        n.d(t, "b", function() {
            return s
        }),
        n.d(t, "d", function() {
            return u
        }),
        n.d(t, "a", function() {
            return c
        }),
        n.d(t, "f", function() {
            return l
        });
        var a = n(0)
          , r = a.a.setTimeout
          , i = a.a.setInterval
          , o = a.a.clearTimeout
          , s = a.a.clearInterval
          , u = a.a.requestAnimationFrame
          , c = a.a.cancelAnimationFrame
          , l = a.a.setPreferredFramesPerSecond
    }
    , function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = function() {
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && a(e.prototype, t),
                n && a(e, n),
                e
            }
        }();
        var r = o()
          , i = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                Object.defineProperty(this, r, {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: o()
                })
            }
            return a(e, [{
                key: "set",
                value: function(e, t) {
                    var n = this[r];
                    e.hasOwnProperty(n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0
                    }),
                    e[n] = t
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = this[r];
                    if (e.hasOwnProperty(t))
                        return e[t]
                }
            }, {
                key: "has",
                value: function(e) {
                    return e.hasOwnProperty(this[r])
                }
            }, {
                key: "delete",
                value: function(e) {
                    e.hasOwnProperty(this[r]) && delete e[this[r]]
                }
            }]),
            e
        }();
        function o() {
            var t = void 0;
            try {
                t = Symbol()
            } catch (e) {
                t = "__symbol_prop_" + Math.random()
            }
            return t
        }
    }
    , function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }),
        n.d(t, "c", function() {
            return d
        }),
        n.d(t, "b", function() {
            return m
        });
        var a = n(0)
          , r = n(4)
          , i = function() {
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && a(e.prototype, t),
                n && a(e, n),
                e
            }
        }();
        var o = "openData" === a.a.domain
          , s = a.a.Image
          , u = new r.a
          , c = ["bdimg.com", "bdstatic.com"];
        var l = o ? function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                u.set(this, new s)
            }
            return i(e, [{
                key: "addEventListener",
                value: function(e, t) {
                    u.get(this).addEventListener(e, t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    u.get(this).removeEventListener(e, t)
                }
            }, {
                key: "width",
                set: function(e) {
                    u.get(this).width = e
                },
                get: function() {
                    return u.get(this).width
                }
            }, {
                key: "height",
                set: function(e) {
                    u.get(this).height = e
                },
                get: function() {
                    return u.get(this).height
                }
            }, {
                key: "src",
                set: function(e) {
                    if (!function(e) {
                        if ((e = e.trim()).startsWith("http://") || e.startsWith("https://")) {
                            for (var t = 0; t < c.length; t++)
                                if (new RegExp("^http(s)?://.*\\." + c[t] + "/","g").test(e))
                                    return !0;
                            return !1
                        }
                        return !0
                    }(e))
                        throw new Error("Image in openData can only use source from Baidu CDN");
                    u.get(this).src = e
                },
                get: function() {
                    return u.get(this).src
                }
            }, {
                key: "onload",
                set: function(e) {
                    u.get(this).onload = e
                },
                get: function() {
                    return u.get(this).onload
                }
            }, {
                key: "onerror",
                set: function(e) {
                    u.get(this).onerror = e
                },
                get: function() {
                    return u.get(this).onerror
                }
            }]),
            e
        }() : s;
        function d(e) {
            return u.get(e)
        }
        function m() {
            return new l
        }
    }
    , function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        }),
        n.d(t, "b", function() {
            return y
        }),
        n.d(t, "c", function() {
            return S
        });
        var a = n(0)
          , r = n(4)
          , i = function() {
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && a(e.prototype, t),
                n && a(e, n),
                e
            }
        }();
        var o = a.a.Canvas
          , s = "openData" === a.a.domain
          , u = new r.a
          , c = new r.a
          , l = new r.a;
        function d(e) {
            return "Can't use " + e + " because canvas is tainted by SharedCanvas"
        }
        function m(e) {
            return "Can't use " + e + " in open data context"
        }
        function g(i, o) {
            return function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var a = t[i]
                  , r = a instanceof I;
                return (r || u.get(a)) && u.set(l.get(this), !0),
                r && (t[i] = b),
                o.apply(this, t)
            }
        }
        function v(e) {
            var t = Object.getPrototypeOf(e);
            if (!c.get(t)) {
                c.set(t, !0);
                var a = t.toDataURL
                  , i = t.getContext
                  , r = t.toTempFilePath
                  , o = t.toTempFilePathSync;
                t.toDataURL = function() {
                    if (s)
                        throw new Error(m("toDataURL"));
                    if (u.get(this))
                        throw new Error(d("toDataURL"));
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return a.apply(this, t)
                }
                ,
                t.toTempFilePath = function() {
                    if (s)
                        throw new Error(m("toTempFilePath"));
                    if (u.get(this))
                        throw new Error(d("toTempFilePath"));
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return r.apply(this, t)
                }
                ,
                t.toTempFilePathSync = function() {
                    if (s)
                        throw new Error(m("toTempFilePathSync"));
                    if (u.get(this))
                        throw new Error(d("toTempFilePathSync"));
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return o.apply(this, t)
                }
                ,
                t.getContext = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    var a = (t[0] || "").trim()
                      , r = i.apply(this, t);
                    if (r)
                        if (l.get(r) || l.set(r, r.canvas),
                        "2d" === a)
                            !function(e) {
                                var t = Object.getPrototypeOf(e);
                                if (!c.get(t)) {
                                    c.set(t, !0);
                                    var a = t.getImageData;
                                    t.drawImage = g(0, t.drawImage),
                                    t.createPattern = g(0, t.createPattern),
                                    t.getImageData = function() {
                                        if (u.get(l.get(this)))
                                            throw new Error(d("getImageData"));
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                            t[n] = arguments[n];
                                        return a.apply(this, t)
                                    }
                                }
                            }(r);
                        else {
                            if (s)
                                throw new Error("Can't create WebGL context in open data context.");
                            !function(e) {
                                var t = Object.getPrototypeOf(e);
                                if (!c.get(t)) {
                                    c.set(t, !0);
                                    var a = t.readPixels;
                                    t.texImage2D = g(5, t.texImage2D),
                                    t.swanBindCanvasTexture = g(1, t.swanBindCanvasTexture || t.smBindCanvasTexture),
                                    t.texSubImage2D = g(6, t.texSubImage2D),
                                    t.readPixels = function() {
                                        if (u.get(l.get(this)))
                                            throw new Error(d("readPixels"));
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                            t[n] = arguments[n];
                                        return a.apply(this, t)
                                    }
                                }
                            }(r)
                        }
                    return r
                }
            }
        }
        var p = new o;
        p.type = "canvas",
        v(p);
        var f = !1;
        function h() {
            if (!f)
                return f = !0,
                p;
            var e = new o;
            return e.type = "canvas",
            v(e),
            e
        }
        function y() {
            return p
        }
        var b = void 0;
        function w() {}
        w.prototype = p.constructor.prototype;
        var I = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.type = "canvas",
                e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, w),
            i(t, [{
                key: "getContext",
                value: function() {
                    return null
                }
            }, {
                key: "width",
                get: function() {
                    return b.width
                },
                set: function(e) {
                    b.width = e
                }
            }, {
                key: "height",
                get: function() {
                    return b.height
                },
                set: function(e) {
                    b.height = e
                }
            }]),
            t
        }()
          , A = void 0;
        function S(e) {
            return !A && e && (b = e,
            A = new I,
            u.set(A, !0)),
            A
        }
    }
    , function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }),
        n.d(t, "a", function() {
            return s
        });
        var a = n(0)
          , r = void 0
          , i = swanGlobal.eval;
        function o() {
            swanGlobal.eval = r;
            var n = swanGlobal.Function;
            function e() {
                var e = arguments.length
                  , t = arguments.length <= e - 1 ? void 0 : arguments[e - 1];
                return e && /^\s*return\s*this\s*;?\s*$/.test(t) ? new n("return this") : new n
            }
            e.prototype = n.prototype,
            swanGlobal.Function.prototype.constructor = e,
            swanGlobal.Function = e
        }
        var s = a.a.authorizeEval ? function(t) {
            t = t || {},
            a.a.authorizeEval({
                success: function(e) {
                    swanGlobal.eval = i,
                    t.success && t.success(e)
                },
                fail: t.fail,
                complete: t.complete
            })
        }
        : null
    }
    , function(e, t, n) {
        "use strict";
        t.byteLength = function(e) {
            var t = g(e)
              , n = t[0]
              , a = t[1];
            return 3 * (n + a) / 4 - a
        }
        ,
        t.toByteArray = function(e) {
            for (var t, n = g(e), a = n[0], r = n[1], i = new m((c = a,
            l = r,
            3 * (c + l) / 4 - l)), o = 0, s = 0 < r ? a - 4 : a, u = 0; u < s; u += 4)
                t = d[e.charCodeAt(u)] << 18 | d[e.charCodeAt(u + 1)] << 12 | d[e.charCodeAt(u + 2)] << 6 | d[e.charCodeAt(u + 3)],
                i[o++] = t >> 16 & 255,
                i[o++] = t >> 8 & 255,
                i[o++] = 255 & t;
            var c, l;
            2 === r && (t = d[e.charCodeAt(u)] << 2 | d[e.charCodeAt(u + 1)] >> 4,
            i[o++] = 255 & t);
            1 === r && (t = d[e.charCodeAt(u)] << 10 | d[e.charCodeAt(u + 1)] << 4 | d[e.charCodeAt(u + 2)] >> 2,
            i[o++] = t >> 8 & 255,
            i[o++] = 255 & t);
            return i
        }
        ,
        t.fromByteArray = function(e) {
            for (var t, n = e.length, a = n % 3, r = [], i = 0, o = n - a; i < o; i += 16383)
                r.push(u(e, i, o < i + 16383 ? o : i + 16383));
            1 === a ? (t = e[n - 1],
            r.push(s[t >> 2] + s[t << 4 & 63] + "==")) : 2 === a && (t = (e[n - 2] << 8) + e[n - 1],
            r.push(s[t >> 10] + s[t >> 4 & 63] + s[t << 2 & 63] + "="));
            return r.join("")
        }
        ;
        for (var s = [], d = [], m = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, i = a.length; r < i; ++r)
            s[r] = a[r],
            d[a.charCodeAt(r)] = r;
        function g(e) {
            var t = e.length;
            if (0 < t % 4)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t),
            [n, n === t ? 0 : 4 - n % 4]
        }
        function u(e, t, n) {
            for (var a, r, i = [], o = t; o < n; o += 3)
                a = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
                i.push(s[(r = a) >> 18 & 63] + s[r >> 12 & 63] + s[r >> 6 & 63] + s[63 & r]);
            return i.join("")
        }
        d["-".charCodeAt(0)] = 62,
        d["_".charCodeAt(0)] = 63
    }
    , function(e, t, n) {
        "use strict";
        var a = {};
        n.r(a),
        n.d(a, "console", function() {
            return I
        }),
        n.d(a, "setTimeout", function() {
            return A.g
        }),
        n.d(a, "setInterval", function() {
            return A.e
        }),
        n.d(a, "clearTimeout", function() {
            return A.c
        }),
        n.d(a, "clearInterval", function() {
            return A.b
        }),
        n.d(a, "requestAnimationFrame", function() {
            return A.d
        }),
        n.d(a, "cancelAnimationFrame", function() {
            return A.a
        });
        var r = n(8)
          , i = n.n(r)
          , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        [["_tmpBase64ToArrayBuffer", function(e) {
            if ("string" != typeof e)
                throw new Error("The input should be a base64 string but not " + (void 0 === e ? "undefined" : o(e)));
            return i.a.toByteArray(e).buffer
        }
        ], ["_tmpArrayBufferToBase64", function(e) {
            if (!(e instanceof ArrayBuffer))
                throw new Error("The input should be an arrayBuffer but not " + (void 0 === e ? "undefined" : o(e)));
            return i.a.fromByteArray(new Uint8Array(e))
        }
        ]].forEach(function(e) {
            Object.defineProperty(swanGlobal, e[0], {
                value: e[1],
                enumerable: !1,
                writable: !1,
                configurable: !1
            })
        });
        var s = n(0)
          , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        var c = s.a.console
          , l = s.a.performanceNow;
        "function" != typeof l && (l = function() {
            return 1e3 * Date.now()
        }
        );
        var d = swanGlobal.console
          , m = 32;
        function g(e, t) {
            d && "function" == typeof d[e] && d[e].apply(d, function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }(t))
        }
        function v(e, t) {
            for (var n = "", a = 0; a < t.length; ++a) {
                var r = t[a];
                n += " " + (r && "object" === (void 0 === r ? "undefined" : u(r)) ? p(r) : r)
            }
            c[e](n)
        }
        function p(e, t) {
            if (t)
                return JSON.stringify(e);
            if (e instanceof Array || ArrayBuffer.isView(e)) {
                for (var n = "", a = Math.min(e.length, m), r = e.length - a, i = 0; i < a; ++i)
                    n += (0 === i ? "" : ", ") + f(e[i]);
                return "[" + n + (r ? ", ..." + r + " more" : "]")
            }
            var o = ""
              , s = !0;
            for (var u in e)
                try {
                    e.hasOwnProperty(u) && (o += (s ? "" : ", ") + u + ": " + f(e[u]),
                    s = !1)
                } catch (e) {}
            return "{" + o + "}"
        }
        function f(e) {
            return "function" == typeof e ? "[Function]" : e instanceof Array || ArrayBuffer.isView(e) ? "[Array" + e.length + "]" : "string" == typeof e ? '"' + e + '"' : e
        }
        var h, y, b = {}, w = {
            debug: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                v("debug", t),
                g("debug", t)
            },
            info: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                v("info", t),
                g("info", t)
            },
            warn: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                v("warn", t),
                g("warn", t)
            },
            error: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                v("error", t),
                g("error", t)
            },
            log: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                v("log", t),
                g("log", t)
            },
            assert: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var a = Array.prototype.slice.call(t);
                a.shift() || v("error", ["Assertion failed: " + a.join(", ")]),
                g("assert", t)
            },
            time: function(e) {
                b[e] = l()
            },
            timeEnd: function(e) {
                var t = b[e];
                if (t) {
                    var n = (l() - t) / 1e3;
                    w.log(e + ": " + n + "ms"),
                    delete b[e]
                }
            },
            dir: function(e) {
                g("dir", [e])
            }
        }, I = w, A = n(3);
        h = a,
        y = 0 <= _naSwan.userAgent.indexOf("swandevtools"),
        Object.getOwnPropertyNames(h).forEach(function(e) {
            y && "console" === e || (swanGlobal[e] = h[e])
        })
    }
    , function(e, _, t) {
        "use strict";
        (function(s) {
            var r = {
                type: 0
            }
              , i = {
                aso: {}
            }
              , n = void 0
              , a = function(e) {
                n = e
            }
              , l = {
                logServerUrl: "https://hmma.baidu.com/mini.gif",
                maxRequestRetryCount: 5,
                requestRetryFirstDelay: 1e3,
                requestRetryMultiple: 4,
                maxRequestDataLength: 204800,
                maxComponentPropValueLength: 2048,
                maxComponentContentLength: 20,
                enabledEvents: {
                    app: ["show", "hide"],
                    page: ["show", "hide"],
                    share: ["action"],
                    event: "*",
                    swan: ["setPageInfo"],
                    behavior: ["tap"]
                },
                storageKeys: {
                    key: "mtj_key",
                    uuid: "mtj_uuid"
                }
            }
              , u = function() {
                return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(4294967295 * Math.random())
            }
              , o = function(e, t) {
                return "[object " + t + "]" === {}.toString.call(e)
            }
              , t = function n(a) {
                return (o(a, "Object") || o(a, "Array")) && Object.keys(a).forEach(function(e) {
                    var t = a[e];
                    o(t, "Object") || o(t, "Array") ? a[e] = n(t) : a[e] = "" + t
                }),
                a
            }
              , c = 0
              , d = function(e) {
                if (e.data = e.data || {},
                e.data.v = "1.8.13",
                e.data.rqc = ++c,
                t = e.data,
                !(JSON.stringify(t).length <= l.maxRequestDataLength))
                    return c--,
                    void (e.fail && e.fail({
                        status: "1",
                        message: "invalid data"
                    }));
                var t;
                !function a(r) {
                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : l.requestRetryFirstDelay
                      , o = "_mtj_swan_sdk_request_cb_" + u();
                    s[o] = function(e) {
                        delete s[o];
                        try {
                            var t = JSON.parse(e);
                            if (0 == +t.status) {
                                if (delete r.data.rtc,
                                r.success) {
                                    var n = JSON.parse(decodeURIComponent(t.data)).data;
                                    r.success(n)
                                }
                            } else
                                r.data.rtc = (r.data.rtc || 0) + 1,
                                r.data.rtc <= l.maxRequestRetryCount ? s.setTimeout(function() {
                                    return a(r, i * l.requestRetryMultiple)
                                }, i) : (delete r.data.rtc,
                                r.fail && r.fail(t))
                        } catch (e) {}
                    }
                    ,
                    n.net.request({
                        cancelNumTostr: !0,
                        url: r.url,
                        data: r.data,
                        header: Object.assign({
                            "content-type": "application/json",
                            mtj_ii: r.data.cuid
                        }, r.header),
                        method: r.method || "POST",
                        dataType: r.dataType || "json",
                        cb: o
                    })
                }(e)
            }
              , m = function(e, t) {
                var n = o(t, "Object") ? JSON.stringify(t) : "" + t;
                d({
                    url: l.logServerUrl,
                    dataType: "string",
                    data: Object.assign({}, r, {
                        et: "error",
                        en: e,
                        ep: {
                            ex: n
                        },
                        aso: {},
                        rid: u()
                    })
                })
            }
              , g = function(a) {
                return new Promise(function(e, t) {
                    if ("*" !== l.enabledEvents[a.et] && l.enabledEvents[a.et].indexOf(a.en) < 0)
                        t({
                            status: "1",
                            message: "invalid event"
                        });
                    else {
                        a.ctime = +new Date,
                        a.rid = a.rid || u(),
                        a.aso = a.aso || {};
                        var n = {
                            url: l.logServerUrl,
                            dataType: "string",
                            data: Object.assign({}, r, a),
                            success: function() {
                                return e()
                            },
                            fail: function(e) {
                                return t(e)
                            }
                        };
                        d(n)
                    }
                }
                )
            }
              , v = void 0
              , e = void 0
              , p = function(e) {
                try {
                    return JSON.parse(decodeURIComponent(n.cache.get({
                        key: e,
                        type: "sync"
                    }).data) || '""')
                } catch (e) {
                    m("getStorageSync", e)
                }
            }
              , f = function(e, t) {
                try {
                    n.cache.set(e, t, "sync")
                } catch (e) {
                    m("setStorageSync", e)
                }
            }
              , h = function() {
                var e = p(l.storageKeys.uuid);
                return o(e, "String") && 32 === e.length || (e = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
                    return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(255 * Math.random())) & 15 >> e / 4).toString(16)
                }),
                f(l.storageKeys.uuid, e)),
                e
            }
              , y = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return v && !e.forceReload || (v = n.data.get({
                    name: "swan-appInfoSync"
                })),
                v
            }
              , b = function() {
                return n.device.systemInfo()
            }
              , w = function() {
                i.aso.scene = "" + (y().scene || ""),
                i.clkid = function(t) {
                    try {
                        var e = t.indexOf("?") + 1
                          , n = t.substr(e).split("&").filter(function(e) {
                            return 0 === e.indexOf("_baiduboxapp=")
                        })[0] || "{}"
                          , a = JSON.parse(decodeURIComponent(n.replace("_baiduboxapp=", "")));
                        if (a.ext)
                            return a.ext.clkid
                    } catch (e) {
                        m("get clkid", e + ":" + t)
                    }
                }(y().appLaunchScheme)
            }
              , I = function() {
                return w(),
                e || (r.sid = u(),
                r.rqc = 0,
                r.cuid = y().cuid || "",
                r.mtjcuid = y().mtjCuid || "",
                r.appid = y().appId || "",
                r.uuid = h(),
                e = n.device.networkType().then(function(e) {
                    i.network = t(e)
                }).then(b).then(function(e) {
                    i.system = t(e)
                }).then(function() {
                    return t = r.appid,
                    n = i.system.host,
                    new Promise(function(i) {
                        var e = p(l.storageKeys.key);
                        if (o(e, "Object") && e.bdstatistic_key)
                            return i(e);
                        d({
                            url: "https://mbd.baidu.com/smtapp/recordhandler/getrecordinfo",
                            data: {
                                app_id: t,
                                hostname: n,
                                refresh: 1
                            },
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                if (e && 0 === e.errno && e.data && e.data.bdstatistic_key && "" !== e.data.official_no && "" !== e.data.container_no) {
                                    var t = e.data
                                      , n = t.bdstatistic_key
                                      , a = t.official_no
                                      , r = t.container_no;
                                    f(l.storageKeys.key, {
                                        bdstatistic_key: n,
                                        official_no: a,
                                        container_no: r
                                    }),
                                    i(e.data)
                                } else
                                    m("getMtjKey", e)
                            },
                            fail: function(e) {
                                m("getMtjKey", e)
                            }
                        })
                    }
                    );
                    var t, n
                }).then(function(e) {
                    r.key = e.bdstatistic_key,
                    e.official_no && (r.officialNo = +e.official_no),
                    e.container_no && (r.containerNo = +e.container_no)
                }))
            }
              , A = {
                onShow: function(t, e) {
                    y({
                        forceReload: !0
                    }),
                    t.path && (i.aso.path = t.path);
                    var n = Object.keys(t.query || {});
                    return 0 < n.length && (i.aso.query = n.map(function(e) {
                        return {
                            key: e,
                            value: t.query[e]
                        }
                    })),
                    I().then(function() {
                        t.referrerInfo && t.referrerInfo.appId && t.referrerInfo.appId !== r.appid ? i.aso.referrerInfo = t.referrerInfo : delete i.aso.referrerInfo,
                        g(Object.assign({
                            et: "app",
                            en: "show",
                            rid: e
                        }, i))
                    }).catch(function(e) {
                        m("app.show", e)
                    })
                },
                onHide: function(e, t) {
                    return I().then(function() {
                        g(Object.assign({
                            et: "app",
                            en: "hide",
                            rid: t
                        }, i))
                    }).catch(function(e) {
                        m("app.hide", e)
                    })
                }
            }
              , S = {
                onShow: function(e, n) {
                    return I().then(function() {
                        var e = getCurrentPages()
                          , t = e[e.length - 1];
                        r.path = t.route,
                        i.aso.path || (i.aso.path = r.path),
                        r.query = Object.keys(t.options).map(function(e) {
                            return {
                                key: e,
                                value: t.options[e]
                            }
                        }),
                        i.aso.query || (i.aso.query = r.query || []),
                        g(Object.assign({
                            et: "page",
                            en: "show",
                            rid: n
                        }, i))
                    }).catch(function(e) {
                        m("page.show", e)
                    })
                },
                onHide: function(e, t) {
                    return I().then(function() {
                        g(Object.assign({
                            et: "page",
                            en: "hide",
                            rid: t
                        }, i))
                    }).catch(function(e) {
                        m("page.hide", e)
                    })
                },
                shareAction: function(e, t) {
                    var n = {
                        from: e.from,
                        path: e.path
                    };
                    if (!n.path) {
                        var a = r.query.map(function(e) {
                            return e.key + "=" + e.value
                        }).join("&");
                        n.path = r.path + (a ? "?" + a : "")
                    }
                    return e.title && (n.title = "" + e.title),
                    e.target && (n.target = JSON.stringify(e.target)),
                    I().then(function() {
                        g(Object.assign({
                            et: "share",
                            en: "action",
                            ep: n,
                            rid: t
                        }, i))
                    }).catch(function(e) {
                        m("share.action", e)
                    })
                }
            }
              , P = {
                reportAnalytics: function(e, t) {
                    if (n = e.reportName,
                    o(n, "String") && /^[a-z][a-z0-9_]{0,31}$/.test(n)) {
                        var n, a = e.reportParams || {}, r = Object.keys(a).filter(function(e) {
                            return o(n = e, "String") && /^[a-z0-9_]{1,32}$/.test(n) && (t = a[e],
                            o(t, "String") || o(t, "Number"));
                            var t, n
                        }).map(function(e) {
                            return {
                                key: e,
                                value: "" + a[e],
                                type: o(a[e], "String") ? "string" : "number"
                            }
                        });
                        return I().then(function() {
                            g(Object.assign({
                                et: "event",
                                en: e.reportName,
                                ep: {
                                    data: r
                                },
                                rid: t
                            }, i))
                        }).catch(function(e) {
                            m("reportAnalytics", e)
                        })
                    }
                },
                setPageInfo: function(t, e) {
                    var n = {};
                    return Object.keys(t).forEach(function(e) {
                        "success" !== e && "fail" !== e && (n[e] = t[e])
                    }),
                    I().then(function() {
                        return g(Object.assign({
                            et: "swan",
                            en: "setPageInfo",
                            ep: {
                                data: [n]
                            },
                            rid: e
                        }, i))
                    }).then(function() {
                        t.success && t.success({}),
                        t.complete && t.complete({})
                    }).catch(function(e) {
                        t.fail && t.fail(e),
                        t.complete && t.complete(e)
                    })
                },
                tapevent: function(t, a) {
                    return I().then(function() {
                        if ("0" === r.cuid.charAt(0)) {
                            r.path = window.pageInfo && window.pageInfo.pagePath;
                            var n = {
                                xpath: function e(t) {
                                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []
                                      , a = t.subTag || t.source && t.source.tagName || t.tagName.replace("swan-", "");
                                    n.unshift(a);
                                    var r = t.parentComponent;
                                    if (r) {
                                        var i = r.el.children
                                          , o = 0
                                          , s = 0;
                                        if (1 < i.length)
                                            for (var u = 0; u < i.length; u++) {
                                                var c = i[u];
                                                c.tagName.toLowerCase() === t.tagName && s++,
                                                c.id === t.el.id && (o = s)
                                            }
                                        for (1 < s && (n[0] = a + "[" + o + "]"); "swan-template" === r.tagName; )
                                            r = r.parentComponent;
                                        return e(r, n)
                                    }
                                    return n.join("/")
                                }(t),
                                props: function(e) {
                                    if (!e.source || !e.source.props)
                                        return {};
                                    var t = {}
                                      , n = e.data.get()
                                      , a = !0
                                      , r = !1
                                      , i = void 0;
                                    try {
                                        for (var o, s = e.source.props[Symbol.iterator](); !(a = (o = s.next()).done); a = !0) {
                                            var u = o.value
                                              , c = n[u.name];
                                            "url" !== u.name && "src" !== u.name || (t[u.name] = ("" + c).substr(0, l.maxComponentPropValueLength))
                                        }
                                    } catch (e) {
                                        r = !0,
                                        i = e
                                    } finally {
                                        try {
                                            !a && s.return && s.return()
                                        } finally {
                                            if (r)
                                                throw i
                                        }
                                    }
                                    return t
                                }(t),
                                text: function e(t) {
                                    if (o(t.content, "String"))
                                        return t.content.substr(0, l.maxComponentContentLength);
                                    if (t.children && 0 !== t.children.length) {
                                        for (var n = [], a = 0; a < t.children.length; a++)
                                            n.push(e(t.children[a]));
                                        return n.join("|").trim().substr(0, l.maxComponentContentLength)
                                    }
                                }(t)
                            }
                              , e = Object.keys(n).map(function(e) {
                                var t = n[e];
                                return {
                                    key: e,
                                    value: o(t, "Object") ? JSON.stringify(t) : "" + t
                                }
                            });
                            g(Object.assign({
                                et: "behavior",
                                en: "tap",
                                ep: {
                                    data: e
                                },
                                rid: a
                            }, i))
                        }
                    }).catch(function(e) {
                        m("userBehavior", e)
                    })
                }
            }
              , k = {
                appEvent: A,
                pageEvent: S,
                userEvent: P,
                trackError: m,
                init: function(e, t) {
                    a(t)
                },
                initGame: function(e, t) {
                    r.subtype = 1,
                    a(t),
                    A.appshow = A.onShow,
                    A.apphide = A.onHide,
                    Object.keys(A).forEach(function(t) {
                        return e.on(t, function(e) {
                            return Promise.resolve().then(function() {
                                return A[t](e)
                            }).catch(function(e) {
                                return m("appEvent", e)
                            })
                        })
                    }),
                    Object.keys(S).forEach(function(t) {
                        return e.on(t, function(e) {
                            return Promise.resolve().then(function() {
                                return S[t](e)
                            }).catch(function(e) {
                                return m("pageEvent", e)
                            })
                        })
                    }),
                    Object.keys(P).forEach(function(t) {
                        return e.on(t, function(e) {
                            return Promise.resolve().then(function() {
                                return P[t](e)
                            }).catch(function(e) {
                                return m("userEvent", e)
                            })
                        })
                    })
                }
            };
            _.a = k
        }
        ).call(this, t(14))
    }
    , function(e, i, t) {
        (function(e) {
            var t, n, a, r, j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            window,
            r = function() {
                return a = {},
                r.m = n = [function(e, t, n) {
                    "use strict";
                    var a = (+new Date + "").slice(-3)
                      , r = navigator.userAgent
                      , i = {
                        isBoxApp: function(e) {
                            return !1 !== / baiduboxapp\//i.test(r)
                        },
                        getHost: function() {
                            var e = null
                              , t = /swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/;
                            return t.exec(r) && (e = t.exec(r)[1]),
                            e
                        },
                        isBox: / baiduboxapp\//i.test(r) && !/ (lite|info) baiduboxapp/.test(r),
                        isIOS: /(iPhone|iPod|iPad)/.test(r) || /P2/.test(r),
                        isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(r) || /P1/.test(r),
                        getId: function() {
                            return a++
                        },
                        emptyArr: [],
                        emptyFn: function() {},
                        cleanObj: {},
                        byId: function(e) {
                            return i.isString(e) ? document.getElementById(e) : e
                        },
                        toArray: function(e) {
                            return i.emptyArr.slice.call(e)
                        },
                        $: function(e, t) {
                            return t = t && 1 === t.nodeType ? t : document,
                            i.toArray(t.querySelectorAll(e))
                        }
                    };
                    "Error,Object,Boolean,Undefined,Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function(a) {
                        i["is" + a] = function(e) {
                            return t = e,
                            n = a,
                            i.cleanObj.toString.call(t).slice(8, -1) === n;
                            var t, n
                        }
                    }),
                    i.isWindow = function(e) {
                        return null != e && e == e.window
                    }
                    ,
                    i.isPlainObject = function(e) {
                        return i.isObject(e) && !i.isWindow(e) && Object.getPrototypeOf(e) == Object.prototype
                    }
                    ,
                    i.isEmptyObject = function(e) {
                        return 0 === Object.keys(e).length && e.constructor === Object
                    }
                    ,
                    e.exports = i
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.hasNoGlobal = "undefined" == typeof swanGlobal,
                    t.global = "undefined" == typeof swanGlobal ? window : swanGlobal,
                    t.globalNative = "undefined" == typeof swanGlobal ? window : _naSwan
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.frameInfo = t.osInfo = t.envInfo = t.getEnvInfo = t.hostRegx = t.hostName = t.schema = void 0;
                    var a, r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , i = n(1), o = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, s = {};
                    try {
                        s = r({}, JSON.parse(_naSwan.getEnvVariables()))
                    } catch (e) {}
                    t.schema = s.scheme || "baiduboxapp";
                    var u = t.hostName = s.hostName || "baidu"
                      , c = (t.hostRegx = new RegExp("baidu\\.|" + u + "\\."),
                    t.getEnvInfo = function() {
                        return !i.hasNoGlobal && o.default.isIOS ? "ios.jsc" : i.hasNoGlobal || o.default.isIOS ? o.default.isIOS ? "ios.webview" : "android.webview" : "android.v8"
                    }
                    )
                      , l = t.envInfo = c();
                    t.osInfo = l.split(".")[0],
                    t.frameInfo = l.split(".")[1]
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.hasAPICallback = t.callFailAndComplete = t.executeCallback = t.createBindingCbPromise = t.createLevel2Promise = t.createInvokePromise = t.createBindingBoxjsPromise = t.createCallback = void 0;
                    var a, o = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , u = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, s = n(1), c = n(6), l = n(22), d = n(7), m = n(4), g = n(17), v = n(23), p = n(15), r = n(9), f = n(11), h = n(8);
                    function y(e, t) {
                        -1 !== c.DURATION_LOG_LIST.indexOf(e) && ("addDurationLog",
                        d.events.emit("addDurationLog", {
                            apiName: e,
                            success: 1,
                            start: r.startTimeMap.get(t),
                            end: Date.now()
                        }),
                        r.startTimeMap.delete(t))
                    }
                    t.createCallback = function(n, a) {
                        var e = (0,
                        v.getParamsCBName)();
                        return s.global[e] = function(e) {
                            var t = a(e);
                            n && n(t.data || {})
                        }
                        ,
                        e
                    }
                    ,
                    t.createBindingBoxjsPromise = function(a, r, e) {
                        var i = 2 < arguments.length && void 0 !== e ? e : {};
                        return new Promise(function(e, t) {
                            i = JSON.parse(JSON.stringify(i));
                            var n = a.invoke(r, (0,
                            g.paramsInOrder)(a, r, i));
                            0 == +(n = u.default.isString(n) ? JSON.parse(n) : n).status ? e((0,
                            f.callbackResHandler)(n)) : t((0,
                            f.callbackResHandler)(n))
                        }
                        )
                    }
                    ,
                    t.createInvokePromise = function(e, a, t, n) {
                        var r = 2 < arguments.length && void 0 !== t ? t : {}
                          , i = n;
                        return new Promise(function(t, n) {
                            if (r.success && "function" != typeof r.success || r.fail && "function" != typeof r.fail)
                                return n((0,
                                f.callbackResHandler)({
                                    status: 904,
                                    message: "params type error"
                                })),
                                !1;
                            r = JSON.parse(JSON.stringify(r)),
                            r = c.CANCEL_CONVERT_LIST.some(function(e) {
                                return a.match(e)
                            }) ? r : (0,
                            l.convertNumberToString)(r),
                            r = o(r, {
                                innerCallback: function(e) {
                                    0 == +e.status ? t((0,
                                    f.callbackResHandler)(e, i)) : n((0,
                                    f.callbackResHandler)(e, i))
                                }
                            }),
                            e.invoke(a, (0,
                            g.paramsInOrder)(e, a, r))
                        }
                        )
                    }
                    ,
                    t.createLevel2Promise = function(e, a, r, i) {
                        return e.cb = (0,
                        v.getParamsCBName)(),
                        new Promise(function(t, n) {
                            s.global[e.cb] = function(e) {
                                0 == +(e = a ? a(e) : (0,
                                m.jsonParse)(e)).status ? t((0,
                                f.callbackResHandler)(e)) : n((0,
                                f.callbackResHandler)(e))
                            }
                            ,
                            r && h.asyncBindingApiList.includes(r) && i.invoke(r, (0,
                            g.paramsInOrder)(i, r, e))
                        }
                        )
                    }
                    ,
                    t.createBindingCbPromise = function(e, a, r, i, o) {
                        return r.cb = (0,
                        v.getParamsCBName)(),
                        new Promise(function(t, n) {
                            s.global[r.cb] = function(e) {
                                0 == +(e = i ? i(e) : u.default.isString(e) ? (0,
                                m.jsonParse)(e) : e).status ? t((0,
                                f.callbackResHandler)(e, o)) : n((0,
                                f.callbackResHandler)(e, o))
                            }
                            ,
                            e.invoke(a, (0,
                            g.paramsInOrder)(e, a, r))
                        }
                        )
                    }
                    ,
                    t.executeCallback = function(e, t) {
                        var n = e.promise
                          , a = e.apiName
                          , r = 1 < arguments.length && void 0 !== t ? t : {}
                          , i = "at api"
                          , o = "callback function"
                          , s = {
                            success: i + " " + a + " success " + o,
                            fail: i + " " + a + " fail " + o,
                            complete: i + " " + a + " complete " + o
                        };
                        d.events.emit("addTimesLog", {
                            apiName: a,
                            success: 2
                        }),
                        u.default.isArray(n) ? Promise.all(n).then(function(e) {
                            var t = function(e, t) {
                                if (Array.isArray(e))
                                    return e;
                                if (Symbol.iterator in Object(e))
                                    return function(e, t) {
                                        var n = []
                                          , a = !0
                                          , r = !1
                                          , i = void 0;
                                        try {
                                            for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value),
                                            !t || n.length !== t); a = !0)
                                                ;
                                        } catch (e) {
                                            r = !0,
                                            i = e
                                        } finally {
                                            try {
                                                !a && s.return && s.return()
                                            } finally {
                                                if (r)
                                                    throw i
                                            }
                                        }
                                        return n
                                    }(e, t);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }(e, 2)
                              , n = (t[0],
                            t[1]);
                            y(a, r),
                            d.events.emit("addTimesLog", {
                                apiName: a,
                                success: 1,
                                statusCode: n.statusCode
                            }),
                            (0,
                            p.executeByTryCatch)(r.success, s.success, n),
                            (0,
                            p.executeByTryCatch)(r.complete, s.complete, n)
                        }).catch(function(e) {
                            y(a, r);
                            var t = u.default.isError(e) ? {
                                errCode: 904,
                                errMsg: e.message
                            } : e;
                            t.errCode && 202 == +t.errCode ? d.events.emit("addTimesLog", {
                                apiName: a,
                                success: 1
                            }) : d.events.emit("addTimesLog", {
                                apiName: a,
                                success: 0
                            }),
                            (0,
                            p.executeByTryCatch)(r.fail, s.fail, t),
                            (0,
                            p.executeByTryCatch)(r.complete, s.complete, t)
                        }) : n.then(function(e) {
                            d.events.emit("addTimesLog", {
                                apiName: a,
                                success: 1
                            }),
                            (0,
                            p.executeByTryCatch)(r.success, s.success, e),
                            (0,
                            p.executeByTryCatch)(r.complete, s.complete, e)
                        }).catch(function(e) {
                            var t = u.default.isError(e) ? {
                                errCode: 904,
                                errMsg: e.message
                            } : e;
                            t.errCode && 202 == +t.errCode ? d.events.emit("addTimesLog", {
                                apiName: a,
                                success: 1
                            }) : d.events.emit("addTimesLog", {
                                apiName: a,
                                success: 0
                            }),
                            (0,
                            p.executeByTryCatch)(r.fail, s.fail, t),
                            (0,
                            p.executeByTryCatch)(r.complete, s.complete, t)
                        })
                    }
                    ,
                    t.callFailAndComplete = function(e, t, n) {
                        n = t + ":fail " + n,
                        u.default.isObject(e) && ((0,
                        p.executeByTryCatch)(e.fail, "at api " + t + " fail callback function", {
                            errCode: 904,
                            errMsg: n
                        }),
                        (0,
                        p.executeByTryCatch)(e.complete, "at api " + t + " complete callback function", {
                            errCode: 904,
                            errMsg: n
                        }))
                    }
                    ,
                    t.hasAPICallback = function(e) {
                        return e && (e.success || e.fail || e.complete)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.parseMessage = function(e) {
                        if (o.default.isObject(e))
                            return e;
                        try {
                            e = (0,
                            r.isAndroid)() ? JSON.parse(e) : JSON.parse(unescape(e))
                        } catch (e) {}
                        return e
                    }
                    ,
                    t.aiParser = function(e) {
                        var t = e.data;
                        return {
                            statusCode: t.statusCode,
                            header: t.header,
                            data: JSON.parse(e.data.body)
                        }
                    }
                    ,
                    t.cloudParser = function(e) {
                        var t = o.default.isString(e) ? JSON.parse(e) : e;
                        return {
                            status: t.status,
                            message: t.message,
                            data: t.data
                        }
                    }
                    ,
                    t.jsonParse = u,
                    t.resNeedDecode = c,
                    t.base64Decode = l,
                    t.base64Parser = function(e) {
                        return (e = u(e)).data && (e.data = l(e.data)),
                        c(e)
                    }
                    ,
                    t.base64ToArrayBuffer = function(e) {
                        for (var t = s.globalNative.atob(e), n = t.length, a = new Uint8Array(n), r = 0; r < n; r++)
                            a[r] = t.charCodeAt(r);
                        return a.buffer
                    }
                    ,
                    t.settingThunkHandle = function(e) {
                        var t = u(e);
                        if (0 !== t.status)
                            return t;
                        var n = {};
                        for (var a in i.SCOPE_MAP) {
                            var r = i.SCOPE_MAP[a];
                            "1" !== t.data[r] && !0 !== t.data[r] || (n[a] = !0),
                            "0" !== t.data[r] && !1 !== t.data[r] || (n[a] = !1)
                        }
                        return t.data = {
                            authSetting: n
                        },
                        t
                    }
                    ,
                    t.getStorageAllThunkHandler = function(e) {
                        var t = {};
                        try {
                            t = JSON.parse(e)
                        } catch (n) {
                            t = e
                        }
                        if (0 == +t.status) {
                            var n = [];
                            for (var a in t.data.keys) {
                                var r = t.data.keys[a];
                                try {
                                    r = JSON.parse(decodeURIComponent(r))
                                } catch (n) {
                                    r = decodeURIComponent(r)
                                }
                                n.push(r)
                            }
                            t.data.keys = n
                        }
                        return t
                    }
                    ,
                    t.base64ToUint8 = function(e) {
                        for (var t = s.globalNative.atob(e), n = t.length, a = new Uint8ClampedArray(n), r = 0; r < n; r++)
                            a[r] = t.charCodeAt(r);
                        return a
                    }
                    ;
                    var a, i = n(6), r = n(16), o = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, s = n(1);
                    function u(t) {
                        var n = {};
                        try {
                            (n = JSON.parse(t)).status = +n.status
                        } catch (e) {
                            n = t
                        }
                        return n
                    }
                    function c(e, t) {
                        var n = u(e)
                          , a = n.data || {};
                        0 == +n.status && n.data && "string" == typeof n.data && (a = decodeURIComponent(n.data));
                        try {
                            n.data = JSON.parse(a)
                        } catch (e) {
                            n.data = a
                        }
                        var r = {
                            tips: "this is a ping request",
                            "Set-Cookie": n.data.header && n.data.header["Set-Cookie"] || ""
                        };
                        return t && (n.data = r),
                        n
                    }
                    function l(e) {
                        try {
                            e = decodeURIComponent(escape(s.globalNative.atob(e)))
                        } catch (e) {}
                        return e
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getParamType = t.handlerSet = t.getABSwitchValue = t.host = void 0,
                    t.validateUrl = function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "http";
                        return "http" === t ? /^(http|https):\/\/.*/i.test(e) : "websocket" === t && /^(ws|wss):\/\/.*/i.test(e)
                    }
                    ,
                    t.checkDomain = function(e) {
                        var t = e.split("/")[2].split("?");
                        return /^.+(\.baidu\.com)$/.test(t[0])
                    }
                    ,
                    t.convertObjectValueToString = function() {
                        var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object.keys(n).reduce(function(e, t) {
                            return "string" == typeof n[t] ? e[t] = n[t] : "number" == typeof n[t] ? e[t] = n[t] + "" : e[t] = Object.prototype.toString.apply(n[t]),
                            e
                        }, {})
                    }
                    ,
                    t.getCurrentAccessUri = function() {
                        var t = void 0;
                        try {
                            t = masterManager.navigator.history.getTopSlaves()[0].getCurrentChildren().accessUri
                        } catch (e) {
                            t = ""
                        }
                        return t
                    }
                    ,
                    t.getSlaveId = function() {
                        var t = void 0;
                        try {
                            t = masterManager.navigator.history.getTopSlaves()[0].getSlaveId()
                        } catch (e) {
                            t = 1
                        }
                        return t
                    }
                    ,
                    t.getProgramPath = function(e) {
                        var t = masterManager.navigator.history.getTopSlaves()[0].getFrontUri();
                        return ((/^\//.test(e) ? "" : t.replace(/[^/]*$/g, "")) + "/" + e).split("/").reduce(function(e, t) {
                            return "" !== t && "." !== t && (".." === t ? e.pop() : e.push(t)),
                            e
                        }, []).join("/")
                    }
                    ,
                    t.getMap = function(e, t) {
                        var n = {};
                        return e.forEach(function(e) {
                            t[e] && (n[e] = t[e])
                        }),
                        n
                    }
                    ,
                    t.getDescription = function(e, n) {
                        var a = [];
                        return e.forEach(function(t) {
                            n.forEach(function(e) {
                                e.name === t && a.push(e)
                            })
                        }),
                        a
                    }
                    ,
                    t.setEventEmitterHandle = function(e) {
                        s = e
                    }
                    ,
                    t.getEventEmitterHandle = function() {
                        return s
                    }
                    ;
                    var a, r = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, i = n(25), o = n(6);
                    t.host = o.HOST_NAME_LIST[r.default.getHost()],
                    t.getABSwitchValue = function(e) {
                        return "undefined" != typeof swanGlobal && _naSwan.env && _naSwan.env.config && _naSwan.env.config.abTestSwitch ? _naSwan.env.config.abTestSwitch[e] : window._envVariables && window._envVariables.abTestSwitch ? window._envVariables.abTestSwitch[e] : void 0
                    }
                    ,
                    t.handlerSet = new i.QueueSet,
                    t.getParamType = function(e) {
                        return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
                    }
                    ;
                    var s = void 0
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.HOST_NAME_LIST = {
                        baiduboxapp: "baidu"
                    },
                    t.CANCEL_CONVERT_LIST = ["request", /ai\.(?!getVoiceRecognizer)\w+/, /^uploadFile/, "sendSocketMessage", "requestWeChatPayment", "requestPolymerPayment", "statisticEvent", "statisticFlowJar", "recognizeImage", "setMenuOpacity", "joinActivity", "video.fullScreen", "cloud.renewalDocument", "cloud.deleteDocument", "cloud.getCollection", "cloud.addDocument", "cloud.countDocument", "cloud.getDocument", "cloud.setDocument", "cloud.callFunction", "baidu.playStream", "compressImage"],
                    t.noop = function() {}
                    ,
                    t.PARAMS_CHECK = {
                        string: "",
                        Number: 1,
                        Boolean: !0,
                        filePath: {
                            filePath: ""
                        },
                        url: {
                            url: ""
                        },
                        key: {
                            key: ""
                        },
                        index: {
                            index: 1
                        },
                        image: {
                            image: ""
                        },
                        src: {
                            src: ""
                        }
                    },
                    t.SCOPE_MAP = {
                        "scope.userInfo": "snsapi_userinfo",
                        "scope.mobile": "mobile",
                        "scope.userLocation": "mapp_location",
                        "scope.writePhotosAlbum": "mapp_images",
                        "scope.address": "mapp_choose_address",
                        "scope.invoiceTitle": "mapp_choose_invoice",
                        "scope.camera": "mapp_camera",
                        "scope.record": "mapp_record",
                        "scope.faceVerify": "mapp_i_face_verify",
                        "scope.realNameInfo": "ppcert"
                    },
                    t.PID_MAP = {
                        input: "1706",
                        search: "1707"
                    },
                    t.PROGRAM_LAUNCH_SCENE = "1170000000000000",
                    t.DURATION_LOG_LIST = ["login", "checkSession", "getUserInfo", "requestPolymerPayment", "requestAliPayment", "requestPayment", "requestWeChatPayment"],
                    t.IMAGE_RECOGNIZE_MAP = {
                        BARCODE: "扫一扫",
                        QUESTION: "拍题",
                        TRANSLATE: "翻译",
                        PLANT: "识花",
                        AR: "AR"
                    },
                    t.TOAST_TYPE_MAP = {
                        none: "1",
                        success: "2",
                        loading: "3",
                        btn: "4"
                    },
                    t.SUPPORT_IMAGE_RECOGNIZE_TIP = {
                        BARCODE: {
                            tipList: ["topTip", "bottomTip"],
                            tipLen: 60
                        },
                        AR: {
                            tipList: ["guideTip", "resultTitle"],
                            tipLen: 50
                        }
                    },
                    t.BINDING_METHOD_LIST = ["webView.navigateTo", "webView.redirectTo", "webView.reLaunch", "webView.navigateBack", "getSystemInfo", "ubcFlowJar", "getStorage", "clearStorage", "setStorage", "removeStorage"],
                    t.ANDROID_BINDING_LIST = ["shareFile"]
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.events = void 0;
                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    var r, i, o, s, u = (r = n(25)) && r.__esModule ? r : {
                        default: r
                    }, c = n(15), l = (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : j(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(d, u.default),
                    i = d,
                    (o = [{
                        key: "once",
                        value: function(e, t) {
                            this.onMessage(e, function(e) {
                                (0,
                                c.executeByTryCatch)(t, "at callback", e.data)
                            }, {
                                once: !0
                            })
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this.onMessage(e, function(e) {
                                (0,
                                c.executeByTryCatch)(t, "at callback", e.data)
                            })
                        }
                    }, {
                        key: "emit",
                        value: function(e, t) {
                            this.fireMessage({
                                type: e,
                                data: t
                            })
                        }
                    }]) && a(i.prototype, o),
                    s && a(i, s),
                    d);
                    function d() {
                        return function(e, t) {
                            if (!(e instanceof d))
                                throw new TypeError("Cannot call a class as a function")
                        }(this),
                        function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != (void 0 === t ? "undefined" : j(t)) && "function" != typeof t ? e : t
                        }(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments))
                    }
                    t.events = new l
                }
                , function(e, t, n) {
                    "use strict";
                    var r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , i = n(2)
                      , o = n(14)
                      , a = n(43)
                      , s = n(18)
                      , u = n(27)
                      , c = []
                      , l = []
                      , d = new RegExp("\\.insert|\\.update|\\.remove|\\.post|webView\\.")
                      , m = a.allDescription.reduce(function(t, n) {
                        var a = r({}, n, {
                            args: [].concat(n.args)
                        });
                        return u.noCallbackAPIs.find(function(e) {
                            return n.name.match(e)
                        }) || (u.bindingInvokeList.includes(n.invoke) ? c.push(n.name) : u.naBindingInvokeList.includes(n.invoke) ? l.push(n.name) : a.args.push({
                            name: "innerCallback",
                            value: "function"
                        })),
                        a.invoke = o.INVOKE_LIST[n.invoke],
                        a.scheme = i.schema,
                        ~u.boxjsDescriptionList.indexOf(n.name) || d.test(n.name) || "boxjs" === n.extension ? ("adWebview.insert" === n.name && (a.name = "openAdWebPage"),
                        "webView.exit" === n.name && t.swanDescription.push(r({}, a, {
                            name: "exit"
                        })),
                        t.boxjsDescription.push(a)) : ~u.allNeedList.indexOf(n.name) || "both" === n.extension ? (t.boxjsDescription.push(a),
                        t.swanDescription.push(a)) : u.specialList[n.name] ? u.specialList[n.name].forEach(function(e) {
                            t.swanDescription.push(r({}, a, {
                                name: e
                            }))
                        }) : t.swanDescription.push(a),
                        t
                    }, {
                        swanDescription: [],
                        boxjsDescription: []
                    });
                    e.exports = {
                        swanDescription: m.swanDescription,
                        boxjsDescription: m.boxjsDescription,
                        isNativeDescription: s.isNativeDescription,
                        asyncBindingApiList: c,
                        naAsyncBindingApiList: l
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getAPIsUbcReport = t.startTimeMap = void 0,
                    t.addTimesLog = function(e) {
                        g.push(e),
                        g.length >= s && u()
                    }
                    ,
                    t.ubcReportLog = u,
                    t.addDurationLog = p,
                    t.addDurationLogToQueue = function(e) {
                        return f && o.push(e),
                        o
                    }
                    ,
                    t.sendAndStopRecordingBootstrapLog = function() {
                        f && (f = !1,
                        p(o, "bootstrap"),
                        o = [])
                    }
                    ,
                    t.isAllowedSaveToBootstrapLogQueue = function() {
                        return f
                    }
                    ,
                    t.ubcLog = function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        v = v || (0,
                        c.default)().appid,
                        e.value.ext = e.value.ext || {},
                        e.value.ext.appKey = v;
                        try {
                            (0,
                            d.ubcReport)(e)
                        } catch (e) {}
                    }
                    ;
                    var c = i(n(24))
                      , l = i(n(41))
                      , d = n(42)
                      , m = n(48)
                      , a = n(18)
                      , r = i(n(0));
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var o = [];
                    setTimeout(function e() {
                        u(),
                        setTimeout(e, 6e4)
                    }, 6e4);
                    var g = []
                      , s = 70
                      , v = "";
                    function u() {
                        if (v = v || (0,
                        c.default)().appid,
                        g.length && v) {
                            for (var e = {}, t = 0, n = g.length; t < n; t++) {
                                var a = JSON.stringify(g[t]);
                                e[a] || (e[a] = 0),
                                e[a]++
                            }
                            var r = [];
                            for (var i in e) {
                                var o = JSON.parse(i);
                                o.count = e[i],
                                r.push(o)
                            }
                            var s = {
                                actionId: "786",
                                min_v: "16789504",
                                value: {
                                    from: "swan",
                                    type: "call",
                                    ext: {
                                        appKey: v,
                                        swan: (0,
                                        l.default)().SDKVersion,
                                        list: r
                                    }
                                }
                            }
                              , u = {
                                groupId: "12",
                                bizId: "38",
                                swanType: "swan",
                                eventName: "call",
                                smartAppId: v,
                                min_v: "16789504",
                                content: {
                                    ext: {
                                        list: r
                                    }
                                }
                            };
                            g = [];
                            try {
                                (0,
                                d.ubcReport)(s)
                            } catch (e) {}
                            try {
                                (0,
                                m.statisticEvent)(u)
                            } catch (e) {}
                        }
                    }
                    function p(e, t) {
                        v = v || (0,
                        c.default)().appid,
                        "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]),
                        e = e.map(function(e) {
                            return e.duration = e.end - e.start,
                            e
                        });
                        var n = {
                            actionId: "855",
                            min_v: "16789504",
                            value: {
                                from: "swan",
                                type: "duration",
                                ext: {
                                    appKey: v,
                                    list: e,
                                    type: t
                                }
                            }
                        };
                        try {
                            (0,
                            d.ubcReport)(n)
                        } catch (e) {}
                    }
                    t.startTimeMap = new Map;
                    var f = !0;
                    t.getAPIsUbcReport = function() {
                        v = v || (0,
                        c.default)().appid;
                        var e = (0,
                        l.default)()
                          , t = {
                            apiName: "getAPIs",
                            success: a.isNativeDescription ? 1 : a.isEmptyNativeDescription ? 2 : 0,
                            os: r.default.isIOS ? "ios" : r.default.isAndroid ? "android" : "developTool",
                            swan: e.SDKVersion,
                            appVersion: e.version
                        };
                        a.isNativeDescription || a.isEmptyNativeDescription || (t.errorMsg = a.nativeDescriptionError);
                        var n = {
                            actionId: "1087",
                            min_v: "16789504",
                            value: {
                                from: "swan",
                                type: "getAPIs",
                                ext: {
                                    appKey: v,
                                    list: [t]
                                }
                            }
                        };
                        try {
                            (0,
                            d.ubcReport)(n)
                        } catch (e) {}
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.boxjsNative = void 0;
                    var a, r = (a = n(26)) && a.__esModule ? a : {
                        default: a
                    };
                    t.boxjsNative = r.default.createContainer().config({
                        namingConflict: "ignore"
                    })
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.executeBindingCallback = t.callbackResHandler = void 0;
                    var a, c = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, l = n(7), d = n(9), m = n(15);
                    function r(e, t) {
                        l.events.emit("addTimesLog", {
                            apiName: t.apiName,
                            success: e
                        }),
                        e && (0,
                        d.addDurationLogToQueue)({
                            apiName: t.apiName,
                            success: 1,
                            start: t.startTime,
                            end: Date.now()
                        })
                    }
                    t.callbackResHandler = function(e, t, n) {
                        var a = {};
                        if (0 == +(e = c.default.isString(e) ? JSON.parse(e) : e).status) {
                            a = t ? t(e).data : e.data || {};
                            try {
                                n && r(1, n)
                            } catch (e) {}
                        } else {
                            a.errCode = e.status,
                            a.errMsg = e.message;
                            try {
                                a.errCode && 202 == +a.errCode ? n && r(1, n) : n && r(0, n)
                            } catch (e) {}
                        }
                        return a
                    }
                    ,
                    t.executeBindingCallback = function(e, t, n, a, r) {
                        var i = "at api"
                          , o = "callback function"
                          , s = {
                            success: i + " " + t + " success " + o,
                            fail: i + " " + t + " fail " + o,
                            complete: i + " " + t + " complete " + o
                        }
                          , u = {};
                        0 == +(n = c.default.isString(n) ? JSON.parse(n) : n).status ? (u = a ? a(n).data : n.data || {},
                        l.events.emit("addTimesLog", {
                            apiName: t,
                            success: 1
                        }),
                        (0,
                        d.isAllowedSaveToBootstrapLogQueue)() && r && (0,
                        d.addDurationLogToQueue)({
                            apiName: t,
                            success: 1,
                            start: r,
                            end: Date.now()
                        }),
                        e.success && (0,
                        m.executeByTryCatch)(e.success, s.success, u)) : (u.errCode = n.status,
                        u.errMsg = n.message,
                        u.errCode && 202 == +u.errCode ? l.events.emit("addTimesLog", {
                            apiName: t,
                            success: 1
                        }) : l.events.emit("addTimesLog", {
                            apiName: t,
                            success: 0
                        }),
                        e.fail && (0,
                        m.executeByTryCatch)(e.fail, s.fail, u)),
                        e.complete && (0,
                        m.executeByTryCatch)(e.complete, s.complete, u)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.swanNative = void 0;
                    var a, r = (a = n(26)) && a.__esModule ? a : {
                        default: a
                    };
                    t.swanNative = r.default.createContainer().config({
                        namingConflict: "ignore"
                    })
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.ubcInvokeMethodItem = t.asyncInvokeMethodItem = t.syncInvokeMethodItem = void 0;
                    var a = n(2)
                      , r = n(40);
                    t.syncInvokeMethodItem = r.envMap[a.osInfo][a.frameInfo].sync,
                    t.asyncInvokeMethodItem = r.envMap[a.osInfo][a.frameInfo].async,
                    t.ubcInvokeMethodItem = r.envMap[a.osInfo][a.frameInfo].ubc
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.INVOKE_LIST = {
                        "swan.message.url": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:URL", "CallMessage"],
                        "swan.prompt": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:URLArrayString", "CallPrompt"],
                        "swan.method.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArray", "CallMethodAdpter"],
                        "swan.method.jsonString": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArrayString", "CallMethodAdpter"],
                        "swan.naMethod.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArray", "CallMethodAdpter"],
                        "swan.naMethod.jsonString": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArrayString", "CallMethodAdpter"],
                        "swan.method.url": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:URLArray", "CallMethodAdpter"],
                        "swan.method.ubc": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:JSONString", "SchemeCombine:argArray", "CallMethodAdpter"]
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.executeByTryCatch = function(e, t, n) {
                        try {
                            e && e(n)
                        } catch (e) {
                            t = e.message + ";" + t
                        }
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var a = o(n(0))
                      , r = o(n(37))
                      , i = o(n(38));
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.exports = {
                        versionCompare: r.default,
                        isIOS: function() {
                            return a.default.isIOS
                        },
                        isAndroid: function() {
                            return a.default.isAndroid
                        },
                        os: a.default.isIOS ? "ios" : a.default.isAndroid ? "android" : "none",
                        osVersion: function() {
                            return i.default.getOSVerion()
                        },
                        isBox: a.default.isBoxApp,
                        boxVersion: i.default.getBoxVersion,
                        host: a.default.getHost(),
                        hostVersion: i.default.getHostVersion(),
                        sdkVersion: i.default.getSdkVersion()
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.paramsInOrder = function(e, t, n) {
                        return e.apis[e.apiIndex[t]].args.map(function(e) {
                            return n[e.name]
                        })
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.nativeDescriptionError = t.isEmptyNativeDescription = t.isNativeDescription = t.nativeDescription = void 0;
                    var a, r = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    };
                    n(2),
                    n(6);
                    var i = []
                      , o = !0
                      , s = !1
                      , u = "";
                    try {
                        if (r.default.isIOS)
                            t.nativeDescription = i = _naSwan.getAPIs();
                        else if (r.default.isAndroid) {
                            var c = JSON.parse(_naSwan.getAPIs(0))
                              , l = c.descriptions
                              , d = c.totalSlices;
                            if (t.nativeDescription = i = l,
                            1 < d)
                                for (var m = 1; m < d; m++)
                                    t.nativeDescription = i = i.concat(JSON.parse(_naSwan.getAPIs(m)).descriptions)
                        }
                        i.length || (t.isNativeDescription = o = !1,
                        t.isEmptyNativeDescription = s = !0)
                    } catch (e) {
                        t.isNativeDescription = o = !1,
                        t.nativeDescriptionError = u = e.message
                    }
                    t.nativeDescription = i,
                    t.isNativeDescription = o,
                    t.isEmptyNativeDescription = s,
                    t.nativeDescriptionError = u
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.boxjs = void 0;
                    var a, r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , i = n(10), o = n(20), s = n(8), u = n(27), c = n(21), l = (a = n(16)) && a.__esModule ? a : {
                        default: a
                    }, d = function(e) {
                        if (e && e.__esModule)
                            return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e,
                        t
                    }(n(65)), m = n(67), g = n(68), v = n(9), p = n(34), f = n(33), h = n(73);
                    for (var y in i.boxjsNative.add(s.boxjsDescription),
                    c.processors)
                        i.boxjsNative.addProcessorCreator(y, c.processors[y]);
                    t.boxjs = r({}, d, {
                        platform: l.default,
                        getAppInfo: g.getAppInfo,
                        adRequest: g.adRequest,
                        createAdAppInstallManager: g.createAdAppInstallManager,
                        sendAndStopRecordingBootstrapLog: v.sendAndStopRecordingBootstrapLog,
                        isV8TransportV8: f.isV8TransportV8,
                        isV8TransportWV: f.isV8TransportWV
                    }, h.hostBoxjsMethods, {
                        extend: function(e) {
                            var n = this
                              , t = 0 < arguments.length && void 0 !== e ? e : []
                              , a = t
                              , r = t.reduce(function(e, t) {
                                return t.name.match(/Sync$/g) ? e.syncDescriptions.push(t) : (e.asyncDescriptions.push(t),
                                u.bindingInvokeList.includes(t.invoke) && s.asyncBindingApiList.push(t.name)),
                                e
                            }, {
                                syncDescriptions: [],
                                asyncDescriptions: []
                            });
                            (a = (0,
                            p.argCombine)(r.syncDescriptions, r.asyncDescriptions)).forEach(function(e) {
                                var t = e.name;
                                n[t] = function(e) {
                                    return (0,
                                    o.invokeMaker)(i.boxjsNative, t, {}, !0, e)
                                }
                            }),
                            i.boxjsNative.add(a)
                        },
                        addCanIUse: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            r(m.componentMap, t)
                        }
                    })
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.invokeMaker = void 0;
                    var a, w = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, I = n(3), A = n(9), S = n(6), P = n(49), k = n(28), _ = n(52);
                    t.invokeMaker = function(e, t, n, a) {
                        for (var r = arguments.length, i = Array(4 < r ? r - 4 : 0), o = 4; o < r; o++)
                            i[o - 4] = arguments[o];
                        if (w.default.isFunction(n))
                            return n.apply(void 0, i);
                        var s = n.specialCheck
                          , u = n.filter
                          , c = n.moreParamsKey
                          , l = n.paramsCBName
                          , d = n.proxyHandler
                          , m = n.parser
                          , g = n.thunk
                          , v = n.isSync
                          , p = "";
                        if (!s || !(p = s(i[0]))) {
                            var f = u ? u.apply(void 0, i) : i[0];
                            if (f && f.callback && !f.cb && (0,
                            P.supportLevel2Callback)(f),
                            c) {
                                var h = {};
                                c.forEach(function(e, t) {
                                    h[e] = i[t]
                                }),
                                f = h
                            }
                            if (d)
                                return d(f);
                            var y = i[0]
                              , b = Date.now();
                            return t.match("Sync") || v ? (0,
                            _.syncMethodInvoker)(e, t, f, g, b) : (-1 !== S.DURATION_LOG_LIST.indexOf(t) && A.startTimeMap.set(y, b),
                            (0,
                            k.asyncMethodInvoker)(e, t, f, y, a, l, g, m, b))
                        }
                        (0,
                        I.callFailAndComplete)(i[0], t, "parameter error: " + p)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.processors = void 0;
                    var a, o = n(1), s = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, u = n(8);
                    function r(e, t, n) {
                        var a = {
                            ubcReport: {
                                action: "?action=",
                                callback: "",
                                params: "&params=" + t,
                                qm: ""
                            },
                            default: {
                                action: "",
                                callback: n && "callback=" + n || "",
                                params: t && "params=" + t + "&"
                            }
                        };
                        return a.default.qm = n || t ? "?" : "",
                        n || (a.default.params = t && "params=" + t),
                        a[e] || a.default
                    }
                    function c(e, t) {
                        var n = e.innerCallback;
                        delete e.innerCallback;
                        var a = r(t, "{}" !== JSON.stringify(e) ? encodeURIComponent(JSON.stringify(e)) : t.match("Sync") ? "" : encodeURIComponent("{}"), n);
                        return {
                            params: a.params,
                            callback: a.callback,
                            qm: a.qm
                        }
                    }
                    t.processors = {
                        SchemeCombine: function(o, e) {
                            var t = r(o.name).action
                              , s = o.scheme + "://" + o.authority + t + o.path;
                            switch (e) {
                            case "URL":
                                return function(e) {
                                    var t = c(e, o.name)
                                      , n = t.params
                                      , a = t.callback
                                      , r = t.qm;
                                    return s + r + n + a
                                }
                                ;
                            case "URLArrayString":
                                return function(e) {
                                    var t = c(e, o.name)
                                      , n = t.params
                                      , a = t.callback
                                      , r = t.qm
                                      , i = s + r + n + a;
                                    return JSON.stringify({
                                        func: "dispatch",
                                        args: [i]
                                    })
                                }
                                ;
                            case "URLArray":
                                return function(e) {
                                    var t = c(e, o.name)
                                      , n = t.params
                                      , a = t.callback
                                      , r = t.qm;
                                    return [s + r + n + a]
                                }
                                ;
                            case "argArray":
                                return function(e) {
                                    return [e]
                                }
                                ;
                            case "argArrayString":
                                return function(e) {
                                    return 0 < Object.keys(e).length ? [JSON.stringify(e)] : []
                                }
                            }
                        },
                        CallMethodAdpter: function(a, e) {
                            var r, i;
                            return function(e) {
                                !function() {
                                    if (!r) {
                                        var e = a.method.split(".")
                                          , t = e.length - 1;
                                        i = e[t],
                                        r = o.hasNoGlobal ? window : o.globalNative;
                                        for (var n = 0; n < t; n++)
                                            r[e[n]] && (r = r[e[n]])
                                    }
                                }(),
                                e = s.default.isString(e) ? [e] : e;
                                var t = "";
                                try {
                                    t = r[i].apply(r, e)
                                } catch (e) {
                                    t = JSON.stringify({
                                        status: e.status || 904,
                                        message: e.message || "调用端能力出错"
                                    })
                                }
                                if (u.asyncBindingApiList.includes(a.name)) {
                                    var n = {};
                                    e[0] && (n = s.default.isString(e[0]) ? JSON.parse(e[0]) : e[0]),
                                    n.cb && 0 != +(s.default.isString(t) ? JSON.parse(t) : t).status && o.global[n.cb](t)
                                }
                                return t
                            }
                        }
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , o = "function" == typeof Symbol && "symbol" == j(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : j(e)
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : j(e)
                    }
                    ;
                    t.convertNumberToString = function(e) {
                        var t, n = 0 < arguments.length && void 0 !== e ? e : {}, a = {};
                        for (var r in n)
                            "function" == typeof n[r] && (a[r] = n[r]);
                        return t = JSON.parse(JSON.stringify(n)),
                        i(t, a),
                        function e(t) {
                            for (var n in t)
                                "number" == typeof t[n] ? t[n] = "" + t[n] : "object" === o(t[n]) && (t[n] = e(t[n]));
                            return t
                        }(t)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getParamsCBName = void 0;
                    var a, r = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    };
                    t.getParamsCBName = function() {
                        return "_bdbox_pjs_" + r.default.getId()
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , r = n(10)
                      , i = n(11)
                      , o = n(13)
                      , s = n(14)
                      , u = n(2)
                      , c = n(18)
                      , l = n(1)
                      , d = {}
                      , m = (0,
                    u.getEnvInfo)().split(".")[1]
                      , g = a({}, o.syncInvokeMethodItem, {
                        invoke: s.INVOKE_LIST[o.syncInvokeMethodItem.invoke],
                        scheme: u.schema,
                        name: "getAppInfoSync",
                        authority: "swanAPI",
                        path: "/getAppInfoSync",
                        args: []
                    });
                    "jsc" === m && (g.method = "_naSwan.bridge.getAppInfoSync"),
                    c.isNativeDescription && "android" === u.osInfo && l.globalNative._naSetting && l.globalNative._naSetting.getAppInfoSync && (g.invoke = s.INVOKE_LIST["swan.method.jsonString"],
                    g.method = "_naSetting.getAppInfoSync"),
                    r.boxjsNative.add(g),
                    t.default = function() {
                        if (!d.appid)
                            try {
                                d = (0,
                                i.callbackResHandler)(r.boxjsNative.invoke("getAppInfoSync", []))
                            } catch (e) {
                                d = {}
                            }
                        return d
                    }
                }
                , function(e, t, n) {
                    window,
                    e.exports = function(n) {
                        var a = {};
                        function r(e) {
                            if (a[e])
                                return a[e].exports;
                            var t = a[e] = {
                                i: e,
                                l: !1,
                                exports: {}
                            };
                            return n[e].call(t.exports, t, t.exports, r),
                            t.l = !0,
                            t.exports
                        }
                        return r.m = n,
                        r.c = a,
                        r.d = function(e, t, n) {
                            r.o(e, t) || Object.defineProperty(e, t, {
                                configurable: !1,
                                enumerable: !0,
                                get: n
                            })
                        }
                        ,
                        r.r = function(e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }
                        ,
                        r.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            }
                            : function() {
                                return e
                            }
                            ;
                            return r.d(t, "a", t),
                            t
                        }
                        ,
                        r.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }
                        ,
                        r.p = "",
                        r(r.s = 2)
                    }([function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                            function a(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1,
                                    a.configurable = !0,
                                    "value"in a && (a.writable = !0),
                                    Object.defineProperty(e, a.key, a)
                                }
                            }
                            return function(e, t, n) {
                                return t && a(e.prototype, t),
                                n && a(e, n),
                                e
                            }
                        }()
                          , r = function() {
                            function n() {
                                !function(e, t) {
                                    if (!(e instanceof n))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this),
                                this.queue = []
                            }
                            return a(n, [{
                                key: "push",
                                value: function(e) {
                                    this.queue.push(e)
                                }
                            }, {
                                key: "getQueue",
                                value: function() {
                                    return this.queue
                                }
                            }, {
                                key: "pop",
                                value: function() {
                                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, t = []; e--; )
                                        t.push(this.queue.pop());
                                    return t
                                }
                            }, {
                                key: "del",
                                value: function(t) {
                                    this.queue = this.queue.filter(function(e) {
                                        return e.handler !== t
                                    })
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    this.queue = []
                                }
                            }]),
                            n
                        }();
                        t.default = r
                    }
                    , function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                        t.default = void 0;
                        var a, r = function() {
                            function a(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1,
                                    a.configurable = !0,
                                    "value"in a && (a.writable = !0),
                                    Object.defineProperty(e, a.key, a)
                                }
                            }
                            return function(e, t, n) {
                                return t && a(e.prototype, t),
                                n && a(e, n),
                                e
                            }
                        }(), i = (a = n(0)) && a.__esModule ? a : {
                            default: a
                        }, o = function() {
                            function n() {
                                !function(e, t) {
                                    if (!(e instanceof n))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this),
                                this.queueSet = {}
                            }
                            return r(n, [{
                                key: "get",
                                value: function(e) {
                                    return this.queueSet[e] || (this.queueSet[e] = new i.default),
                                    this.queueSet[e]
                                }
                            }, {
                                key: "pushTo",
                                value: function(e, t) {
                                    this.get(e).push(t)
                                }
                            }, {
                                key: "has",
                                value: function(e) {
                                    return !!this.queueSet[e]
                                }
                            }, {
                                key: "del",
                                value: function(e, n) {
                                    var a = this;
                                    if (n)
                                        if ("*" === e)
                                            Object.keys(this.queueSet).forEach(function(e) {
                                                var t = a.queueSet[e];
                                                t && t.del(n)
                                            });
                                        else {
                                            var t = this.queueSet[e];
                                            t && t.del(n)
                                        }
                                    else {
                                        var r = this.queueSet[e];
                                        r && r.clear()
                                    }
                                }
                            }]),
                            n
                        }();
                        t.default = o
                    }
                    , function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                        t.QueueSet = t.default = void 0;
                        var a, i = function() {
                            function a(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1,
                                    a.configurable = !0,
                                    "value"in a && (a.writable = !0),
                                    Object.defineProperty(e, a.key, a)
                                }
                            }
                            return function(e, t, n) {
                                return t && a(e.prototype, t),
                                n && a(e, n),
                                e
                            }
                        }(), o = (a = n(1)) && a.__esModule ? a : {
                            default: a
                        }, r = function() {
                            function r() {
                                !function(e, t) {
                                    if (!(e instanceof r))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this),
                                this.handlerQueueSet = new o.default,
                                this.messageQueueSet = new o.default
                            }
                            return i(r, [{
                                key: "fireMessage",
                                value: function(t) {
                                    var n = this;
                                    return t && t.type && this.handlerQueueSet.get(t.type) && (this.messageQueueSet.pushTo(t.type, t),
                                    this.handlerQueueSet.get(t.type).getQueue().forEach(function(e) {
                                        n.handlerWrapper(e, t.type, t)
                                    }),
                                    this.handlerQueueSet.get("*").getQueue().forEach(function(e) {
                                        n.handlerWrapper(e, "*", t)
                                    })),
                                    this
                                }
                            }, {
                                key: "onMessage",
                                value: function(e, t) {
                                    var n = this
                                      , a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                                    return "[object Array]" === Object.prototype.toString.call(e) ? e.forEach(function(e) {
                                        return n.onMessage(e, t, a)
                                    }) : (this.handlerQueueSet.pushTo(e, {
                                        handler: t,
                                        once: a.once
                                    }),
                                    !0 === a.listenPreviousEvent && this.messageQueueSet.has(e) && this.handlerWrapper({
                                        handler: t,
                                        once: a.once
                                    }, e, this.messageQueueSet.get(e).getQueue())),
                                    this
                                }
                            }, {
                                key: "delHandler",
                                value: function(e, t) {
                                    return this.handlerQueueSet.del(e, t),
                                    this
                                }
                            }, {
                                key: "handlerWrapper",
                                value: function(e, t, n) {
                                    var a = e.handler
                                      , r = e.once;
                                    return !!a && (a(n),
                                    r && this.handlerQueueSet.del(t, a),
                                    !0)
                                }
                            }], [{
                                key: "merge",
                                value: function() {
                                    for (var t = new r, e = arguments.length, n = Array(e), a = 0; a < e; a++)
                                        n[a] = arguments[a];
                                    return [].concat(n).forEach(function(e) {
                                        e.onMessage("*", function(e) {
                                            return t.fireMessage(e)
                                        })
                                    }),
                                    t
                                }
                            }]),
                            r
                        }();
                        t.default = r,
                        t.QueueSet = o.default
                    }
                    ])
                }
                , function(_, O, e) {
                    (function(e) {
                        var t, n, a, u, i, o, s, c, l, r, d;
                        function m(e, t) {
                            for (var n = 0, a = e && e.length || 0; n < a && !1 !== t(e[n], n); n++)
                                ;
                        }
                        function g(e) {
                            return e
                        }
                        function v(e) {
                            return "string" == typeof e ? JSON.parse(e) : e
                        }
                        function p(e) {
                            if ("string" != typeof e)
                                return e;
                            var t = {
                                isRequired: !0
                            };
                            return /=$/.test(e) && (t.isRequired = !1,
                            e = e.slice(0, e.length - 1)),
                            /\[\]$/.test(e) ? t.arrayOf = e.slice(0, e.length - 2) : 0 < e.indexOf("|") ? t.oneOfType = e.split("|") : t.type = e,
                            t
                        }
                        function f(a) {
                            return m(a, function(e, t) {
                                var n;
                                "function" == typeof e && (a[t] = (n = e,
                                function(e) {
                                    n("string" == typeof e ? JSON.parse(e) : e)
                                }
                                ))
                            }),
                            a
                        }
                        function h(r) {
                            return m(r, function(e, t) {
                                var n, a;
                                "function" == typeof e && (r[t] = (n = e,
                                a = o + i++,
                                u[a] = function(e) {
                                    delete u[a],
                                    n(e)
                                }
                                ,
                                a))
                            }),
                            r
                        }
                        function y(n) {
                            return m(n, function(e, t) {
                                n[t] = JSON.stringify(e)
                            }),
                            n
                        }
                        function b(a, e) {
                            var r = {};
                            return m(e, function(e, t) {
                                var n = a[t];
                                null != n && (r[e.name] = n)
                            }),
                            r
                        }
                        function w(e) {
                            return u.prompt(e)
                        }
                        function I(e) {
                            u.location.href = e
                        }
                        function A(e) {
                            var t = document.createElement("iframe");
                            t.src = e,
                            document.body.appendChild(t),
                            document.body.removeChild(t)
                        }
                        function S(e, t) {
                            for (var n in t)
                                t.hasOwnProperty(n) && !r[n] && (e[n] = t[n]);
                            return e
                        }
                        function P(e, t) {
                            var n = [];
                            if (e.args instanceof Array)
                                for (var a = 0; a < e.args.length; a++) {
                                    var r = e.args[a];
                                    n.push({
                                        name: r.name || r.n,
                                        value: r.value || r.v
                                    })
                                }
                            return (t = t || S)({
                                name: e.name,
                                args: n,
                                invoke: function(e) {
                                    if (e instanceof Array)
                                        return e;
                                    switch (void 0 === e ? "undefined" : j(e)) {
                                    case "string":
                                        return s[e];
                                    case "object":
                                        var t = [];
                                        return e.check && t.push("ArgCheck"),
                                        e.before && (t = t.concat(l[e.before])),
                                        t.push(c[e.call]),
                                        "JSON" === e.after && t.push("ReturnDecode:JSON"),
                                        t
                                    }
                                }(e.invoke),
                                method: e.method,
                                scheme: e.scheme || e.schema,
                                authority: e.authority,
                                path: e.path,
                                handler: e.handler
                            }, e)
                        }
                        function k(e) {
                            var o = {
                                ArgCheck: function(n, e, a) {
                                    return function(e) {
                                        return i = e,
                                        t = n.args,
                                        o = a,
                                        m(t, function(e, t) {
                                            var n, a = p(e.value);
                                            switch (function t(n, a) {
                                                if (a = p(a),
                                                null == n)
                                                    return a.isRequired && "*" !== a.type ? 1 : 0;
                                                var r = !1;
                                                switch (j(a.type)) {
                                                case "string":
                                                    switch (a.type) {
                                                    case "string":
                                                    case "boolean":
                                                    case "number":
                                                    case "function":
                                                    case "object":
                                                        r = (void 0 === n ? "undefined" : j(n)) === a.type;
                                                        break;
                                                    case "Object":
                                                        r = "object" == (void 0 === n ? "undefined" : j(n));
                                                        break;
                                                    case "Array":
                                                        r = n instanceof Array;
                                                        break;
                                                    case "*":
                                                        r = !0
                                                    }
                                                    if (!r)
                                                        return 2;
                                                    break;
                                                case "object":
                                                    if (n && "object" == (void 0 === n ? "undefined" : j(n)))
                                                        for (var e in r = !0,
                                                        a.type)
                                                            if (!(r = !t(n[e], a.type[e])))
                                                                break;
                                                    if (!r)
                                                        return 2;
                                                    break;
                                                default:
                                                    if (a.oneOf) {
                                                        if (m(a.oneOf, function(e) {
                                                            return !(r = e === n)
                                                        }),
                                                        !r)
                                                            return 3
                                                    } else if (a.oneOfType) {
                                                        if (m(a.oneOfType, function(e) {
                                                            return !(r = !t(n, e))
                                                        }),
                                                        !r)
                                                            return 4
                                                    } else if (a.arrayOf) {
                                                        if (!(n instanceof Array))
                                                            return 2;
                                                        if (r = !0,
                                                        m(n, function(e) {
                                                            return r = !t(e, a.arrayOf)
                                                        }),
                                                        !r)
                                                            return 5
                                                    }
                                                }
                                                return 0
                                            }(i[t], a)) {
                                            case 1:
                                                n = " is required.";
                                                break;
                                            case 2:
                                                n = " type error. must be " + JSON.stringify(a.type || "Array");
                                                break;
                                            case 3:
                                                n = " type error, must be oneOf " + JSON.stringify(a.oneOf);
                                                break;
                                            case 4:
                                                n = " type error, must be oneOfType " + JSON.stringify(a.oneOfType);
                                                break;
                                            case 5:
                                                n = " type error, must be arrayOf " + JSON.stringify(a.arrayOf)
                                            }
                                            if (n) {
                                                var r = o && o.options.errorTitle || "jsNative";
                                                throw new Error("[" + r + " Argument Error]" + e.name + n)
                                            }
                                        }),
                                        e;
                                        var i, t, o
                                    }
                                },
                                ArgFuncArgDecode: function(e, t) {
                                    return "JSON" === t ? f : g
                                },
                                ArgFuncEncode: function() {
                                    return h
                                },
                                ArgEncode: function(e, t) {
                                    return "JSON" === t ? y : g
                                },
                                ArgAdd: function(e, t) {
                                    var n = e.args.length;
                                    e.args.push({
                                        name: "_" + t,
                                        value: "*"
                                    });
                                    var a = e[t];
                                    return function(e) {
                                        return e[n] = a,
                                        e
                                    }
                                },
                                ArgCombine: function(t, e) {
                                    switch (e) {
                                    case "URL":
                                        var n = t.scheme + "://" + t.authority + t.path;
                                        return function(a) {
                                            var r = [];
                                            m(t.args, function(e, t) {
                                                var n = a[t];
                                                null != n && r.push(e.name + "=" + encodeURIComponent(n))
                                            });
                                            var e = r.join("&");
                                            return e ? n + "?" + e : n
                                        }
                                        ;
                                    case "Object":
                                        return function(e) {
                                            return b(e, t.args)
                                        }
                                        ;
                                    case "JSONString":
                                        return function(e) {
                                            return JSON.stringify(b(e, t.args))
                                        }
                                    }
                                    return g
                                },
                                CallMethod: function(a, e) {
                                    var r, i;
                                    return function(e) {
                                        switch (function() {
                                            if (!r) {
                                                var e = a.method.split(".")
                                                  , t = e.length - 1;
                                                i = e[t],
                                                r = u;
                                                for (var n = 0; n < t; n++)
                                                    r = r[e[n]]
                                            }
                                        }(),
                                        a.args.length) {
                                        case 0:
                                            return r[i]();
                                        case 1:
                                            return r[i](e[0]);
                                        case 2:
                                            return r[i](e[0], e[1]);
                                        case 3:
                                            return r[i](e[0], e[1], e[2])
                                        }
                                        return r[i].apply(r, e)
                                    }
                                },
                                CallPrompt: function() {
                                    return w
                                },
                                CallIframe: function() {
                                    return A
                                },
                                CallLocation: function() {
                                    return I
                                },
                                CallMessage: function(t) {
                                    return function(e) {
                                        u.webkit.messageHandlers[t.handler].postMessage(e)
                                    }
                                },
                                ReturnDecode: function(e, t) {
                                    return "JSON" === t ? v : g
                                }
                            }
                              , s = {
                                options: {
                                    errorTitle: "jsNative",
                                    namingConflict: "error"
                                },
                                apis: [],
                                apisLen: 0,
                                apiIndex: {},
                                config: function(e) {
                                    return e = e || {},
                                    this.options.errorTitle = e.errorTitle || this.options.errorTitle,
                                    this.options.namingConflict = e.namingConflict || this.options.namingConflict,
                                    this
                                },
                                add: function(e) {
                                    if (e instanceof Array)
                                        for (var t = 0; t < e.length; t++)
                                            this.add(e[t]);
                                    else if ("object" == (void 0 === e ? "undefined" : j(e))) {
                                        var n = e.name;
                                        if (null != this.apiIndex[n])
                                            switch (this.options.namingConflict) {
                                            case "override":
                                                this.apis[this.apiIndex[n]] = P(e, this.descriptionPropMerger);
                                            case "ignore":
                                                break;
                                            case "error":
                                            default:
                                                throw new Error("[" + this.options.errorTitle + "] API exists: " + n)
                                            }
                                        else {
                                            var a = P(e, this.descriptionPropMerger);
                                            this.apiIndex[n] = this.apisLen,
                                            this.apis[this.apisLen++] = a
                                        }
                                    }
                                    return this
                                },
                                fromNative: function(e) {
                                    return this.add(n(P(e, this.descriptionPropMerger)))
                                },
                                invoke: function(e, t) {
                                    return n(this.apis[this.apiIndex[e]], t)
                                },
                                map: function(e) {
                                    e = e || function(e) {
                                        return e
                                    }
                                    ;
                                    for (var t, n, a = {}, r = 0; r < this.apis.length; r++) {
                                        var i = this.apis[r]
                                          , o = (t = e,
                                        n = i.name,
                                        "function" == typeof t ? t(n) : t[n]);
                                        if (o && i.invoke)
                                            if (0 < o.indexOf(".")) {
                                                for (var s = o.split("."), u = 0, c = a; u < s.length - 1; u++) {
                                                    var l = s[u];
                                                    c[l] = c[l] || {},
                                                    c = c[l]
                                                }
                                                c[s[u]] = d(i)
                                            } else
                                                a[o] = d(i)
                                    }
                                    return a
                                },
                                invokeAPI: function(e, t) {
                                    return n(P(e, this.descriptionPropMerger), t)
                                },
                                addProcessorCreator: function(e, t) {
                                    if (o[e])
                                        throw new Error("[" + this.options.errorTitle + "] processorCreators exists: " + e);
                                    return o[e] = t,
                                    this
                                },
                                setExternalDescriptionProps: function(e) {
                                    for (var t = "", n = 0; n < e.length; n++) {
                                        var a = e[n];
                                        t += 'target["' + a + '"] = source["' + a + '"];'
                                    }
                                    this.descriptionPropMerger = new Function("target","source",t + "return target;")
                                }
                            };
                            return s.config(e),
                            s;
                            function a(r) {
                                var i = [];
                                if (!r.invoke)
                                    throw new Error("[" + s.options.errorTitle + "] invoke undefined: " + r.name);
                                return m(r.invoke, function(e) {
                                    var t, n = e.indexOf(":");
                                    0 < n && (t = e.slice(n + 1),
                                    e = e.slice(0, n));
                                    var a = o[e](r, t, s);
                                    "function" == typeof a && i.push(a)
                                }),
                                i
                            }
                            function n(e, t) {
                                if (e)
                                    return t = t || [],
                                    m(a(e), function(e) {
                                        t = e(t)
                                    }),
                                    t
                            }
                            function d(e) {
                                var n = a(e);
                                return function() {
                                    return t = Array.prototype.slice.call(arguments, 0, e.args.length),
                                    m(n, function(e) {
                                        t = e(t)
                                    }),
                                    t;
                                    var t
                                }
                            }
                        }
                        u = "undefined" != typeof window ? window : void 0 !== e ? e : this,
                        o = "__jsna_",
                        s = {
                            method: ["ArgCheck", "CallMethod"],
                            "method.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "CallMethod", "ReturnDecode:JSON"],
                            "prompt.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:JSONString", "CallPrompt", "ReturnDecode:JSON"],
                            "prompt.url": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL", "CallPrompt", "ReturnDecode:JSON"],
                            location: ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL", "CallLocation"],
                            iframe: ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL", "CallIframe"],
                            message: ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:Object", "CallMessage"]
                        },
                        c = {
                            method: "CallMethod",
                            prompt: "CallPrompt",
                            location: "CallLocation",
                            iframe: "CallIframe",
                            message: "CallMessage"
                        },
                        l = {
                            JSONStringInTurn: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON"],
                            JSONString: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:JSONString"],
                            JSONObject: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:Object"],
                            URL: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL"]
                        },
                        r = {
                            name: i = 1,
                            args: 1,
                            invoke: 1,
                            method: 1,
                            scheme: 1,
                            authority: 1,
                            path: 1,
                            handler: 1
                        },
                        (d = new k).version = "1.2.4",
                        d.createContainer = function(e) {
                            return new k(e)
                        }
                        ,
                        n = [],
                        void 0 === (a = "function" == typeof (t = u.jsNative = d) ? t.apply(O, n) : t) || (_.exports = a),
                        O.jsNative = d
                    }
                    ).call(this, e(39))
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.naBindingInvokeList = t.bindingInvokeList = t.noCallbackAPIs = t.specialList = t.allNeedList = t.boxjsDescriptionList = void 0;
                    var a, r = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, i = ["getLocalImgData", "getRegionData", "getLaunchAppInfo", "getSanDataFromActiveSlave", "getCommonSysInfoSync", "getSlaveIdSync", "getAppInfoSync", "getFormId", "setSanIncData2Console", "setSanFullData2Console", "ubcReport", "statisticEvent", "performpanel", "ubcFlowJar", "statisticFlowJar", "openIM", "openSpringback", "openAdWebview", "openApp", "closeSpringback", "installApp4Ad", "adRequest", "getCloudUrl"].concat(r.default.isIOS ? ["onSwanJSLoaded"] : ["startMediaVolumeListen", "stopMediaVolumeListen", "getMediaVolumeSync", "getAutoRotationSync", "addComponentToFullScreenSync", "removeComponentFromFullScreenSync", "setFullscreenOrientationSync"]);
                    t.boxjsDescriptionList = i,
                    t.allNeedList = ["getSystemInfo", "getSystemInfoSync", "getStorageSync", "setStorageSync", "getUserInfo", "getPhoneNumber", "getNetworkType", "request", "openSetting", "vibrateShort", "cancelRequest"],
                    t.specialList = {
                        navigateToSmartProgram: ["navigateToMiniProgram", "navigateBackMiniProgram", "navigateToSmartProgram", "navigateBackSmartProgram"]
                    },
                    t.noCallbackAPIs = ["getMenuButtonBoundingClientRect", "ubcReport", "Sync", "updateManager.applyUpdate"],
                    t.bindingInvokeList = ["swan.method.jsonString", "swan.method.json"],
                    t.naBindingInvokeList = ["swan.naMethod.jsonString", "swan.naMethod.json"]
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.asyncMethodInvoker = void 0;
                    var c = n(8)
                      , l = n(50)
                      , d = n(51);
                    t.asyncMethodInvoker = function(e, t, n, a, r, i, o, s, u) {
                        return c.asyncBindingApiList.includes(t) ? (0,
                        l.bindingInvoker)(e, t, n, a, r, i, o, s, u) : (0,
                        d.schemeInvoker)(e, t, n, a, r, i, o, s, u)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.invokeMethod = void 0;
                    var a = n(17)
                      , r = n(7);
                    t.invokeMethod = function(e, t, n) {
                        return r.events.emit("addTimesLog", {
                            apiName: t,
                            success: 2
                        }),
                        e.invoke(t, (0,
                        a.paramsInOrder)(e, t, n))
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.recoginzeImageParamsCheck = t.moreParamsKey = t.uint8ToBase64 = t.arrayBufferToBase64 = t.navigateBackProgramFilter = t.navigateToProgramFilter = t.getCallbacks = t.convertCanvasIdToSanId = void 0;
                    var c = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , i = n(1)
                      , o = n(6)
                      , l = n(5)
                      , d = n(56)
                      , a = r(n(24))
                      , m = r(n(0));
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.convertCanvasIdToSanId = function(e, t) {
                        var s = 0 < arguments.length && void 0 !== e ? e : "canvas"
                          , u = 1 < arguments.length && void 0 !== t ? t : "canvasId";
                        return function(e) {
                            var t = (0,
                            l.getSlaveId)()
                              , n = e[u];
                            if (!m.default.isString(n))
                                return e;
                            var a, r, i, o = (0,
                            d.getComponentId)({
                                slaveId: t,
                                componentName: s,
                                domId: n
                            });
                            return c({}, e, (a = {},
                            r = u,
                            i = d.componentsMap.get(o),
                            r in a ? Object.defineProperty(a, r, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : a[r] = i,
                            a))
                        }
                    }(),
                    t.getCallbacks = function(e) {
                        return {
                            success: e.success,
                            fail: e.fail,
                            complete: e.complete
                        }
                    }
                    ,
                    t.navigateToProgramFilter = function(e) {
                        e.appKey = e.appKey || e.appid || e.appId,
                        e.from = e.from || o.PROGRAM_LAUNCH_SCENE;
                        var t = (0,
                        a.default)();
                        return e.ubc = {
                            pre_source: t.rootSource,
                            pre_appid: t.appid
                        },
                        "develop" === e.envVersion ? e.appKey += "_dev" : "trial" === e.envVersion && (e.appKey += "_trial"),
                        delete e.appid,
                        delete e.appId,
                        e
                    }
                    ,
                    t.navigateBackProgramFilter = function(e) {
                        var t = (0,
                        a.default)();
                        return e.appKey = t.srcAppId,
                        e.path = t.srcAppPage,
                        e.ubc = {
                            pre_source: t.rootSource,
                            pre_appid: t.appid
                        },
                        e.from = e.from || o.PROGRAM_LAUNCH_SCENE,
                        e
                    }
                    ,
                    t.arrayBufferToBase64 = function(e) {
                        for (var t = "", n = new Uint8Array(e), a = n.byteLength, r = 0; r < a; r++)
                            t += String.fromCharCode(n[r]);
                        return i.globalNative.btoa(t)
                    }
                    ,
                    t.uint8ToBase64 = function(e) {
                        for (var t = "", n = e.length, a = 0; a < n; a++)
                            t += String.fromCharCode(e[a]);
                        return i.globalNative.btoa(t)
                    }
                    ,
                    t.moreParamsKey = function(n, e) {
                        var a = {};
                        return e.forEach(function(e, t) {
                            a[e] = n[t]
                        }),
                        a
                    }
                    ,
                    t.recoginzeImageParamsCheck = function(e) {
                        if (e.showTitle && !m.default.isBoolean(e.showTitle))
                            return "[jsNative Argument Error]: showTitle should be type of Boolean";
                        var t = e.categoryList && m.default.isArray(e.categoryList) && e.categoryList.length;
                        if (!t)
                            return "categoryList should be an Array which length larger than 0";
                        if (e.index < 0 || e.index >= t)
                            return "index should be within the range between [0, " + t + ")";
                        if (e.categoryList.find(function(e) {
                            return !Object.keys(o.IMAGE_RECOGNIZE_MAP).includes(e)
                        }))
                            return "category should be one of " + Object.keys(o.IMAGE_RECOGNIZE_MAP);
                        if (e.customTips && m.default.isObject(e.customTips))
                            for (var n in e.customTips)
                                if (Object.keys(o.SUPPORT_IMAGE_RECOGNIZE_TIP).includes(n) && e.categoryList.includes(n))
                                    for (var a in e.customTips[n]) {
                                        var r = o.SUPPORT_IMAGE_RECOGNIZE_TIP[n];
                                        if (!r.tipList.includes(a))
                                            return "customTips." + n + " only support set the tip of " + r.tipList;
                                        if (e.customTips[n][a].length > r.tipLen)
                                            return "customTips." + n + "'s tips length should not larger than " + r.tipLen
                                    }
                                else
                                    delete e.customTips[n]
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var a, r = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    };
                    e.exports = function(e) {
                        if (r.default.isString(e))
                            return e;
                        var t = [];
                        for (var n in e)
                            t.push(n + "=" + e[n]);
                        return t.join("&")
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.boxjsMap = void 0;
                    var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , r = c(n(0))
                      , i = c(n(66))
                      , o = c(n(31))
                      , s = n(8)
                      , u = n(2);
                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function l(e) {
                        if (e.url && r.default.isString(e.url) && -1 < e.url.indexOf("?")) {
                            var t = e.url.split("?")[0]
                              , n = (0,
                            i.default)(e.url);
                            Object.keys(n).forEach(function(e) {
                                n[e] = encodeURIComponent(n[e])
                            });
                            var a = (0,
                            o.default)(n);
                            e.url = t + "?" + a
                        }
                        return e
                    }
                    var d = s.boxjsDescription.reduce(function(e, t) {
                        if (!~t.name.indexOf(u.hostName) && ~t.name.indexOf(".")) {
                            var n = t.name.split(".");
                            e[n[0]] || (e[n[0]] = {}),
                            "webView.navigateTo" === t.name ? e[n[0]][n[1]] = {
                                filter: l
                            } : e[n[0]][n[1]] = {}
                        } else
                            e[t.name] = {};
                        return e
                    }, {})
                      , m = {
                        ubcReport: {
                            filter: function(e) {
                                return r.default.isIOS ? e.minver = "7.3.0.0" : e.min_v = "16789504",
                                e
                            }
                        }
                    };
                    t.boxjsMap = a({}, d, m)
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.isV8TransportWV = m,
                    t.isV8TransportV8 = g,
                    t.andrSetData = function(e, t) {
                        v = new Map,
                        e += "";
                        var n = "";
                        if (l)
                            n = JSON.stringify(window.V8Transport.setData(e, p(t)));
                        else if (d) {
                            var a;
                            a = 1 === (0,
                            s.getABSwitchValue)(c) ? t : p(t),
                            n = JSON.stringify(_naSwan.setData(e, a))
                        } else
                            n = i.globalNative.Bdbox_aiapps_jsbridge.setData(e, JSON.stringify(t));
                        return v && v.clear(),
                        n
                    }
                    ,
                    t.andrBindMessage = function(e, t) {
                        return l ? (window.V8Transport.bindId(e, t),
                        !0) : !!d && (_naSwan.bindId("master", t),
                        !0)
                    }
                    ;
                    var a, r = n(16), i = n(1), o = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, s = n(5), u = "swanswitch_android_setdata", c = "swanswitch_setdata_transport", l = !1, d = !1;
                    function m() {
                        var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
                          , t = (0,
                        s.getABSwitchValue)(u);
                        return l = e && (0,
                        r.isAndroid)() && "undefined" == typeof swanGlobal && 1 === t && window.V8Transport && window.V8Transport.setData && window.V8Transport.bindId && o.default.isBox
                    }
                    function g() {
                        var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
                          , t = (0,
                        s.getABSwitchValue)(u);
                        return d = e && (0,
                        r.isAndroid)() && "undefined" != typeof swanGlobal && 1 === t && _naSwan && _naSwan.setData && _naSwan.bindId && o.default.isBox
                    }
                    g(),
                    m();
                    var v = null;
                    function p(n) {
                        if (v && v.get(n))
                            return v.get(n);
                        var e = Object.prototype.toString.call(n) || ""
                          , a = null;
                        return e.includes("Object") ? (a = {},
                        v && v.set(n, n)) : e.includes("Array") ? (a = [],
                        v && v.set(n, n)) : a = n,
                        (e.includes("Object") || e.includes("Array")) && Object.keys(n).forEach(function(e) {
                            var t = n[e];
                            a[e] = "function" == typeof t ? null : p(t)
                        }),
                        a
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    ;
                    t.argCombine = function(e, t) {
                        var n = e.map(function(e) {
                            return (e = r({
                                scheme: i.schema
                            }, o.syncInvokeMethodItem, e)).invoke = s.INVOKE_LIST[e.invoke],
                            "/" !== e.path.substring(0, 1) && (e.path = "/" + e.path),
                            e
                        })
                          , a = t.map(function(e) {
                            return (e = r({
                                scheme: i.schema
                            }, o.asyncInvokeMethodItem, e)).invoke = s.INVOKE_LIST[e.invoke],
                            "/" !== e.path.substring(0, 1) && (e.path = "/" + e.path),
                            e.args = e.args || [],
                            u.asyncBindingApiList.includes(e.name) || (e.args = e.args.concat({
                                name: "innerCallback",
                                value: "function"
                            })),
                            e
                        });
                        return n.concat(a)
                    }
                    ;
                    var i = n(2)
                      , o = n(13)
                      , s = n(14)
                      , u = n(8)
                }
                , function(e, t, n) {
                    "use strict";
                    var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , r = n(36)
                      , i = n(8)
                      , o = n(21)
                      , s = n(12)
                      , u = n(53)
                      , c = n(75)
                      , l = n(5)
                      , d = n(34)
                      , m = n(19)
                      , g = n(16)
                      , v = n(79)
                      , p = n(30);
                    function f(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++)
                                n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }
                    var h = ["showToast", "hideToast", "showLoading", "hideLoading", "showActionSheet", "showModal", "chooseImage", "previewImage", "navigateToMiniProgram", "navigateBackMiniProgram", "getSystemInfo", "getSystemInfoSync", "login", "checkSession", "getSetting", "openSetting", "authorize", "getUserInfo", "getLocation", "vibrateShort", "vibrateLong", "getNetworkType", "onNetworkStatusChange", "downloadFile", "uploadFile", "requestPolymerPayment", "openShare", "getSwanId", "isLoginSync", "startAccelerometer", "stopAccelerometer", "onAccelerometerChange", "getClipboardData", "setClipboardData", "onCompassChange", "startCompass", "stopCompass", "getScreenBrightness", "setKeepScreenOn", "setScreenBrightness", "saveImageToPhotosAlbum", "showFavoriteGuide", "downloadPackages", "getDebugConfig", "getMenuButtonBoundingClientRect", "getEnvInfoSync"]
                      , y = a((0,
                    l.getMap)(h, u.commonMap), c.swanGameMap)
                      , b = "1280000000000000";
                    y.navigateToMiniProgram.filter = function(e) {
                        return e.from = e.from || b,
                        (0,
                        p.navigateToProgramFilter)(e)
                    }
                    ,
                    y.navigateBackMiniProgram.filter = function(e) {
                        return e.from = e.from || b,
                        (0,
                        p.navigateBackProgramFilter)(e)
                    }
                    ;
                    var w = (0,
                    d.argCombine)([], [{
                        name: "showShareMenu",
                        authority: "v33/swan",
                        path: "showShareMenu",
                        args: []
                    }, {
                        name: "hideShareMenu",
                        authority: "v33/swan",
                        path: "hideShareMenu",
                        args: []
                    }])
                      , I = (0,
                    l.getDescription)(h, i.swanDescription);
                    for (var A in I = [].concat(f(I), f(w)),
                    s.swanNative.add(I),
                    o.processors)
                        s.swanNative.addProcessorCreator(A, o.processors[A]);
                    var S = (0,
                    r.swanInit)(s.swanNative, {}, y);
                    S.getLaunchOptionsSync = function() {
                        return (0,
                        v.getLaunchOptionsSync)(m.boxjs)
                    }
                    ,
                    (0,
                    g.isIOS)() && delete S.requestPolymerPayment,
                    e.exports = function(e) {
                        return (0,
                        l.setEventEmitterHandle)(e),
                        {
                            swan: S,
                            boxjs: m.boxjs
                        }
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.swanInit = t.extensionToSwan = void 0;
                    var a, c = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , l = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, d = n(20), o = n(2), m = t.extensionToSwan = function(e, t, n, a) {
                        delete t.extension;
                        var r = n.split(".")[0];
                        if (o.hostRegx.test(n))
                            if ("baidu" === r)
                                e[n.replace("baidu.", "")] = a;
                            else {
                                var i = n.replace(o.hostName + ".", "");
                                e[o.hostName] = e[o.hostName] || {},
                                e[o.hostName][i] = a
                            }
                    }
                    ;
                    t.swanInit = function(o, s, u) {
                        function e(a) {
                            var e, r = u[a];
                            if (e = a.match("Sync") || l.default.isFunction(r) ? function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                    t[n] = arguments[n];
                                return d.invokeMaker.apply(void 0, [o, a, r, null].concat(t))
                            }
                            : function(e) {
                                return "function" == typeof e ? (0,
                                d.invokeMaker)(o, a, r, null, e) : (0,
                                d.invokeMaker)(o, a, r, null, c({}, r.defaultParam, e))
                            }
                            ,
                            0 < a.indexOf(".")) {
                                var t = function(e, t) {
                                    if (Array.isArray(e))
                                        return e;
                                    if (Symbol.iterator in Object(e))
                                        return function(e, t) {
                                            var n = []
                                              , a = !0
                                              , r = !1
                                              , i = void 0;
                                            try {
                                                for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value),
                                                !t || n.length !== t); a = !0)
                                                    ;
                                            } catch (e) {
                                                r = !0,
                                                i = e
                                            } finally {
                                                try {
                                                    !a && s.return && s.return()
                                                } finally {
                                                    if (r)
                                                        throw i
                                                }
                                            }
                                            return n
                                        }(e, t);
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }(a.split("."), 2)
                                  , n = t[0]
                                  , i = t[1];
                                r.extension ? m(s, r, a, e) : (s[n] = s[n] || {},
                                s[n][i] = e)
                            } else
                                s[a] = e
                        }
                        for (var t in u)
                            e(t);
                        return s
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    e.exports = function(e, t) {
                        t += "";
                        for (var n = (e += "").split("."), a = t.split("."), r = 0, i = Math.max(n.length, a.length); r < i; r++) {
                            if (n[r] && !a[r] && 0 < parseInt(n[r]) || parseInt(n[r]) > parseInt(a[r]))
                                return 1;
                            if (a[r] && !n[r] && 0 < parseInt(a[r]) || parseInt(n[r]) < parseInt(a[r]))
                                return -1
                        }
                        return 0
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var a, r = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, i = n(1), o = navigator.userAgent;
                    function s(e, t) {
                        var n = "0";
                        return t = t || 1,
                        (e = e).exec(o) && (n = e.exec(o)[t]),
                        n
                    }
                    var u = {
                        getBoxVersion: function() {
                            var e = 0;
                            if (r.default.isBox) {
                                var t = /swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/.exec(o);
                                e = t ? t[2] : (t = /baiduboxapp\/([\d+.]+)/.exec(o))[1]
                            }
                            return e
                        },
                        getHostVersion: function() {
                            return s(/swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/, 2)
                        },
                        getSdkVersion: function() {
                            return s(/swan\/([\d+.]+)/, 1)
                        },
                        getOSVerion: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : navigator.userAgent
                              , n = "unknown"
                              , a = i.hasNoGlobal ? t.match(/(Android);?\s+([\d.]+)?/) : t.match(/(P1)\s([\d/.]+)/)
                              , r = i.hasNoGlobal ? t.match(/(iPhone|iPad)\sOS\s([\d_]+)/) : t.match(/(P2)\s([\d/.]+)/);
                            return a ? n = a[2] : r && (n = i.hasNoGlobal ? r[2].replace(/_/g, ".") : r[2]),
                            n
                        }
                    };
                    e.exports = u
                }
                , function(e, t) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || new Function("return this")()
                    } catch (e) {
                        "object" == ("undefined" == typeof window ? "undefined" : j(window)) && (n = window)
                    }
                    e.exports = n
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.envMap = {
                        ios: {
                            webview: {
                                async: {
                                    invoke: "swan.message.url",
                                    handler: "bridge"
                                },
                                sync: {
                                    invoke: "swan.prompt"
                                },
                                ubc: {
                                    name: "ubcReport",
                                    authority: "utils",
                                    path: "ubcReport",
                                    handler: "bridge",
                                    invoke: "swan.message.url",
                                    args: [{
                                        name: "actionId",
                                        value: "string"
                                    }, {
                                        name: "value",
                                        value: "Object"
                                    }, {
                                        name: "minver",
                                        value: "string="
                                    }, {
                                        name: "min_v",
                                        value: "string="
                                    }]
                                }
                            },
                            jsc: {
                                async: {
                                    invoke: "swan.method.url",
                                    method: "_naSwan.bridge.postMessage"
                                },
                                sync: {
                                    invoke: "swan.method.json",
                                    method: "_naSwan.bridge.prompt"
                                },
                                ubc: {
                                    name: "ubcReport",
                                    authority: "utils",
                                    path: "ubcReport",
                                    method: "_naSwan.bridge.postMessage",
                                    invoke: "swan.method.url",
                                    args: [{
                                        name: "actionId",
                                        value: "string"
                                    }, {
                                        name: "value",
                                        value: "Object"
                                    }, {
                                        name: "minver",
                                        value: "string="
                                    }, {
                                        name: "min_v",
                                        value: "string="
                                    }]
                                }
                            }
                        },
                        android: {
                            webview: {
                                async: {
                                    invoke: "swan.method.url",
                                    method: "Bdbox_android_jsbridge.dispatch"
                                },
                                sync: {
                                    invoke: "swan.method.url",
                                    method: "Bdbox_aiapps_jsbridge.dispatch"
                                },
                                ubc: {
                                    name: "ubcReport",
                                    authority: "utils",
                                    path: "ubcEvent",
                                    invoke: "swan.method.ubc",
                                    method: "Bdbox_android_utils.ubcEvent",
                                    args: [{
                                        name: "actionId",
                                        value: "string"
                                    }, {
                                        name: "value",
                                        value: "Object"
                                    }, {
                                        name: "minver",
                                        value: "string="
                                    }, {
                                        name: "min_v",
                                        value: "string="
                                    }]
                                }
                            },
                            v8: {
                                async: {
                                    invoke: "swan.method.url",
                                    method: "_naSwan.Bdbox_android_jsbridge.dispatch"
                                },
                                sync: {
                                    invoke: "swan.method.url",
                                    method: "_naSwan.Bdbox_aiapps_jsbridge.dispatch"
                                },
                                ubc: {
                                    name: "ubcReport",
                                    authority: "utils",
                                    path: "ubcEvent",
                                    invoke: "swan.method.ubc",
                                    method: "_naSwan.Bdbox_android_utils.ubcEvent",
                                    args: [{
                                        name: "actionId",
                                        value: "string"
                                    }, {
                                        name: "value",
                                        value: "Object"
                                    }, {
                                        name: "minver",
                                        value: "string="
                                    }, {
                                        name: "min_v",
                                        value: "string="
                                    }]
                                }
                            }
                        }
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , r = n(12)
                      , i = n(11)
                      , o = n(13)
                      , s = n(14)
                      , u = n(18)
                      , c = n(2)
                      , l = n(1)
                      , d = {}
                      , m = a({}, o.syncInvokeMethodItem, {
                        invoke: s.INVOKE_LIST[o.syncInvokeMethodItem.invoke],
                        scheme: c.schema,
                        name: "getSystemInfoSync",
                        authority: "utils",
                        path: "/getSystemInfoSync",
                        args: []
                    });
                    "jsc" === c.frameInfo && (m.method = "_naSwan.bridge.getSystemInfoSync"),
                    "ios" === c.osInfo && (m.authority = "swanAPI"),
                    u.isNativeDescription && "android" === c.osInfo && l.globalNative._naUtils && l.globalNative._naUtils.getSystemInfoSync && (m.invoke = s.INVOKE_LIST["swan.method.jsonString"],
                    m.method = "_naUtils.getSystemInfoSync"),
                    r.swanNative.add(m),
                    t.default = function() {
                        try {
                            d = (0,
                            i.callbackResHandler)(r.swanNative.invoke("getSystemInfoSync", []))
                        } catch (e) {
                            d = {}
                        }
                        return d
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    ;
                    t.ubcReport = function(e) {
                        return function(e, t) {
                            var n = g.filter(t);
                            n = function e(t) {
                                for (var n in t)
                                    l.default.isNumber(t) ? t[n] = t[n] + "" : l.default.isObject(t) && (t[n] = e(t[n]));
                                return t
                            }(n);
                            try {
                                i.boxjsNative.invoke(e, (0,
                                d.paramsInOrder)(i.boxjsNative, e, n))
                            } catch (e) {}
                        }("ubcReport", e)
                    }
                    ;
                    var r, i = n(10), o = n(13), s = n(2), u = n(14), c = n(21), l = (r = n(0)) && r.__esModule ? r : {
                        default: r
                    }, d = n(17), m = a({}, o.ubcInvokeMethodItem, {
                        invoke: u.INVOKE_LIST[o.ubcInvokeMethodItem.invoke],
                        scheme: s.schema,
                        name: "ubcReport",
                        authority: o.ubcInvokeMethodItem.authority,
                        path: o.ubcInvokeMethodItem.path,
                        args: o.ubcInvokeMethodItem.args
                    }), g = {
                        filter: function(e) {
                            return l.default.isIOS ? e.minver = "7.3.0.0" : e.min_v = "16789504",
                            e
                        }
                    };
                    i.boxjsNative.add(m);
                    try {
                        if (!c.processors)
                            for (var v in c.processors)
                                i.boxjsNative.addProcessorCreator(v, c.processors[v])
                    } catch (e) {}
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.allDescription = void 0;
                    var a = n(44)
                      , r = (n(2),
                    n(18))
                      , i = [];
                    r.isNativeDescription ? t.allDescription = i = r.nativeDescription : t.allDescription = i = (0,
                    a.getLocalDescList)(),
                    t.allDescription = i
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getLocalDescList = void 0;
                    var a, r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , i = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, o = n(2), s = n(45), u = n(46), c = n(47), l = n(13);
                    t.getLocalDescList = function() {
                        var e = s.synclist.concat(i.default.isIOS ? c.iosSpecialSyncMap : u.androidSpecialSyncMap);
                        e = e.map(function(e) {
                            return e = r({}, l.syncInvokeMethodItem, e),
                            "jsc" === o.frameInfo && (e.method = "_naSwan.bridge." + e.name),
                            e
                        });
                        var t = "ios" === o.osInfo ? s.asynclist.concat(s.openSourceDebugList, c.iosSpecialMap) : s.asynclist.concat(s.openSourceDebugList, u.androidSpecialMap);
                        t = t.map(function(e) {
                            return r({}, l.asyncInvokeMethodItem, e)
                        });
                        var n = e.concat(t);
                        return n.push(l.ubcInvokeMethodItem),
                        n
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.asynclist = t.synclist = t.openSourceDebugList = void 0;
                    var a, r = n(13), i = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, o = n(1), s = i.default.isAndroid && o.globalNative._naUtils && o.globalNative._naUtils.getSystemInfo, u = i.default.isAndroid ? "utils" : "swanAPI", c = (t.openSourceDebugList = [{
                        name: "downloadExtension",
                        authority: "swanAPI",
                        path: "/debug/downloadExtension",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "getDebugConfig",
                        authority: "swanAPI",
                        path: "/debug/getDebugConfig",
                        args: []
                    }, {
                        name: "setDebugConfig",
                        authority: "swanAPI",
                        path: "/debug/setDebugConfig",
                        args: [{
                            name: "config",
                            value: "object"
                        }]
                    }, {
                        name: "setCtsConfig",
                        authority: "swanAPI",
                        path: "/debug/setCtsConfig",
                        args: [{
                            name: "loadCts",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setExtensionConfig",
                        authority: "swanAPI",
                        path: "/debug/setExtensionConfig",
                        args: [{
                            name: "useExtension",
                            value: "string"
                        }]
                    }, {
                        name: "replaceSwanCore",
                        authority: "swanAPI",
                        path: "/debug/replaceSwanCore",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setReplaceSwanCoreConfig",
                        authority: "swanAPI",
                        path: "/debug/setReplaceSwanCoreConfig",
                        args: [{
                            name: "emitReplaceSwanCore",
                            value: "string"
                        }]
                    }, {
                        name: "replaceGameCore",
                        authority: "swanAPI",
                        path: "/debug/replaceGameCore",
                        args: [{
                            name: "url",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "setReplaceGameCoreConfig",
                        authority: "swanAPI",
                        path: "/debug/setReplaceGameCoreConfig",
                        args: [{
                            name: "emitReplaceGameCore",
                            value: "string="
                        }]
                    }],
                    t.synclist = [{
                        name: "getSystemInfoSync",
                        authority: u,
                        path: "/getSystemInfoSync",
                        args: []
                    }, {
                        name: "getStorageInfoSync",
                        authority: "swanAPI",
                        path: "/getStorageInfoSync",
                        args: []
                    }, {
                        name: "clearStorageSync",
                        authority: "swanAPI",
                        path: "/clearStorageSync",
                        args: []
                    }, {
                        name: "getStorageSync",
                        authority: "swanAPI",
                        path: "/getStorageSync",
                        args: [{
                            name: "key",
                            value: "string"
                        }]
                    }, {
                        name: "setStorageSync",
                        authority: "swanAPI",
                        path: "/setStorageSync",
                        args: [{
                            name: "key",
                            value: "string"
                        }, {
                            name: "data",
                            value: "*"
                        }]
                    }, {
                        name: "removeStorageSync",
                        authority: "swanAPI",
                        path: "/removeStorageSync",
                        args: [{
                            name: "key",
                            value: "string"
                        }]
                    }, {
                        name: "isLoginSync",
                        authority: "swanAPI",
                        path: "/isLoginSync",
                        args: []
                    }, {
                        name: "canvas.measureTextSync",
                        authority: "swanAPI",
                        path: "/canvas/measureTextSync",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "canvasId",
                            value: "string="
                        }, {
                            name: "text",
                            value: "string="
                        }, {
                            name: "font",
                            value: "string="
                        }]
                    }, {
                        name: "backgroundAudio.getParamsSync",
                        authority: "swanAPI",
                        path: "/backgroundAudio/getParamsSync",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "param",
                            value: "string"
                        }]
                    }, {
                        name: "getMenuButtonBoundingClientRect",
                        authority: "swanAPI",
                        path: "/getMenuButtonBoundingClientRect",
                        args: []
                    }, {
                        name: "getBatteryInfoSync",
                        authority: "swanAPI",
                        path: "/getBatteryInfoSync",
                        args: []
                    }, {
                        name: "getCommonSysInfoSync",
                        authority: u,
                        path: "/getCommonSysInfoSync",
                        args: []
                    }, {
                        name: "getSlaveIdSync",
                        authority: "swanAPI",
                        path: "/getSlaveIdSync",
                        args: []
                    }, {
                        name: "getAppInfoSync",
                        authority: "swanAPI",
                        path: "/getAppInfoSync",
                        args: []
                    }],
                    r.asyncInvokeMethodItem.invoke), l = r.asyncInvokeMethodItem.method, d = r.asyncInvokeMethodItem.handler, m = i.default.isAndroid ? "swan.method.jsonString" : c;
                    t.asynclist = [{
                        name: "getPhoneContacts",
                        authority: "swanAPI",
                        path: "/getPhoneContacts",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setMenuOpacity",
                        authority: "swanAPI",
                        path: "/menu/setMenuOpacity",
                        args: [{
                            name: "alpha",
                            value: "number"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "live.play",
                        authority: "swanAPI",
                        path: "/live/play",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "liveId",
                            value: "string"
                        }]
                    }, {
                        name: "live.stop",
                        authority: "swanAPI",
                        path: "/live/stop",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "liveId",
                            value: "string"
                        }]
                    }, {
                        name: "live.pause",
                        authority: "swanAPI",
                        path: "/live/pause",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "liveId",
                            value: "string"
                        }]
                    }, {
                        name: "live.resume",
                        authority: "swanAPI",
                        path: "/live/resume",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "liveId",
                            value: "string"
                        }]
                    }, {
                        name: "live.mute",
                        authority: "swanAPI",
                        path: "/live/mute",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "liveId",
                            value: "string"
                        }, {
                            name: "muted",
                            value: "boolean"
                        }]
                    }, {
                        name: "live.fullScreen",
                        authority: "swanAPI",
                        path: "/live/fullScreen",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "liveId",
                            value: "string"
                        }, {
                            name: "fullScreen",
                            value: "boolean"
                        }, {
                            name: "direction",
                            value: "string="
                        }]
                    }, {
                        name: "map.getScale",
                        authority: "swanAPI",
                        path: "/map/getScale",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "mapId",
                            value: "string"
                        }]
                    }, {
                        name: "map.getRegion",
                        authority: "swanAPI",
                        path: "/map/getRegion",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "mapId",
                            value: "string"
                        }]
                    }, {
                        name: "map.includePoints",
                        authority: "swanAPI",
                        path: "/map/includePoints",
                        args: [{
                            name: "points",
                            value: "Array"
                        }, {
                            name: "padding",
                            value: "Array="
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "mapId",
                            value: "string"
                        }]
                    }, {
                        name: "map.translateMarker",
                        authority: "swanAPI",
                        path: "/map/translateMarker",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "mapId",
                            value: "string"
                        }, {
                            name: "markerId",
                            value: "string"
                        }, {
                            name: "destination",
                            value: "object"
                        }, {
                            name: "autoRotate",
                            value: "boolean"
                        }, {
                            name: "rotate",
                            value: "string"
                        }, {
                            name: "duration",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "map.moveToLocation",
                        authority: "swanAPI",
                        path: "/map/moveToLocation",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "mapId",
                            value: "string"
                        }]
                    }, {
                        name: "map.getCenterLocation",
                        authority: "swanAPI",
                        path: "/map/getCenterLocation",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "mapId",
                            value: "string"
                        }]
                    }, {
                        name: "onMemoryWarning",
                        authority: "swanAPI",
                        path: "/memoryWarning",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "onNetworkStatusChange",
                        authority: "swanAPI",
                        path: "/networkStatusChange",
                        args: [{
                            name: "cb",
                            value: "string"
                        }],
                        invoke: i.default.isAndroid ? "swan.method.jsonString" : c,
                        method: i.default.isAndroid ? "_naNetwork.networkStatusChange" : l
                    }, {
                        name: "recorder.start",
                        authority: "swanAPI",
                        path: "/recorder/start",
                        args: [{
                            name: "duration",
                            value: "string="
                        }, {
                            name: "sampleRate",
                            value: "string="
                        }, {
                            name: "numberOfChannels",
                            value: "string="
                        }, {
                            name: "encodeBitRate",
                            value: "string="
                        }, {
                            name: "format",
                            value: "string="
                        }, {
                            name: "audioSource",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "object"
                        }]
                    }, {
                        name: "recorder.pause",
                        authority: "swanAPI",
                        path: "/recorder/pause",
                        args: []
                    }, {
                        name: "recorder.resume",
                        authority: "swanAPI",
                        path: "/recorder/resume",
                        args: []
                    }, {
                        name: "recorder.stop",
                        authority: "swanAPI",
                        path: "/recorder/stop",
                        args: []
                    }, {
                        name: "request",
                        authority: "swanAPI",
                        path: "/request",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "data",
                            value: "string|object="
                        }, {
                            name: "header",
                            value: "object="
                        }, {
                            name: "method",
                            value: "string="
                        }, {
                            name: "dataType",
                            value: "string="
                        }, {
                            name: "responseType",
                            value: "string="
                        }, {
                            name: "ping",
                            value: "boolean="
                        }, {
                            name: "__plugin__",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "ext",
                            value: "object="
                        }]
                    }, {
                        name: "updateManager.applyUpdate",
                        authority: "swanAPI",
                        path: "/applyUpdate",
                        args: []
                    }, {
                        name: "video.play",
                        authority: "swanAPI",
                        path: "/video/play",
                        args: [{
                            name: "videoId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "video.pause",
                        authority: "swanAPI",
                        path: "/video/pause",
                        args: [{
                            name: "videoId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "video.seek",
                        authority: "swanAPI",
                        path: "/video/seek",
                        args: [{
                            name: "videoId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "string"
                        }]
                    }, {
                        name: "video.sendDanmu",
                        authority: "swanAPI",
                        path: "/video/sendDanmu",
                        args: [{
                            name: "videoId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "text",
                            value: "string="
                        }, {
                            name: "color",
                            value: "string="
                        }]
                    }, {
                        name: "video.fullScreen",
                        authority: "swanAPI",
                        path: "/video/fullScreen",
                        args: [{
                            name: "videoId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "fullScreen",
                            value: "boolean"
                        }, {
                            name: "direction",
                            value: {
                                oneOf: [0, 90, -90]
                            }
                        }]
                    }, {
                        name: "video.showStatusBar",
                        authority: "swanAPI",
                        path: "/video/showStatusBar",
                        args: [{
                            name: "videoId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "video.hideStatusBar",
                        authority: "swanAPI",
                        path: "/video/hideStatusBar",
                        args: [{
                            name: "videoId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "voiceRecognizer.start",
                        authority: "swanAPI",
                        path: "/voiceRecognize/start",
                        args: [{
                            name: "vad",
                            value: "string"
                        }, {
                            name: "isLongSpeech",
                            value: "boolean"
                        }, {
                            name: "cb",
                            value: "object"
                        }, {
                            name: "pid",
                            value: "string"
                        }, {
                            name: "voiceServerPath",
                            value: "string"
                        }]
                    }, {
                        name: "voiceRecognizer.stop",
                        authority: "swanAPI",
                        path: "/voiceRecognize/stop",
                        args: []
                    }, {
                        name: "voiceRecognizer.cancel",
                        authority: "swanAPI",
                        path: "/voiceRecognize/cancel",
                        args: []
                    }, {
                        name: "showToast",
                        authority: "swanAPI",
                        path: "/showToast",
                        args: [{
                            name: "title",
                            value: "string"
                        }, {
                            name: "message",
                            value: "string="
                        }, {
                            name: "icon",
                            value: "string="
                        }, {
                            name: "mask",
                            value: "boolean="
                        }, {
                            name: "time",
                            value: "string"
                        }, {
                            name: "type",
                            value: "string"
                        }, {
                            name: "image",
                            value: "string="
                        }, {
                            name: "buttonText",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "getPhoneNumber",
                        authority: "swanAPI",
                        path: "/getPhoneNumber",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setTabBarBadge",
                        authority: "swanAPI",
                        path: "/setTabBarBadge",
                        args: [{
                            name: "index",
                            value: "string"
                        }, {
                            name: "text",
                            value: "string"
                        }]
                    }, {
                        name: "removeTabBarBadge",
                        authority: "swanAPI",
                        path: "/closeTabBarBadge",
                        args: [{
                            name: "index",
                            value: "string"
                        }]
                    }, {
                        name: "showTabBarRedDot",
                        authority: "swanAPI",
                        path: "/openTabBarRedDot",
                        args: [{
                            name: "index",
                            value: "string"
                        }]
                    }, {
                        name: "hideTabBarRedDot",
                        authority: "swanAPI",
                        path: "/closeTabBarRedDot",
                        args: [{
                            name: "index",
                            value: "string"
                        }]
                    }, {
                        name: "setTabBarStyle",
                        authority: "swanAPI",
                        path: "/setTabBarStyle",
                        args: [{
                            name: "color",
                            value: "string="
                        }, {
                            name: "selectedColor",
                            value: "string="
                        }, {
                            name: "backgroundColor",
                            value: "string="
                        }, {
                            name: "borderStyle",
                            value: {
                                oneOf: ["black", "white"]
                            }
                        }]
                    }, {
                        name: "setTabBarItem",
                        authority: "swanAPI",
                        path: "/setTabBarItem",
                        args: [{
                            name: "index",
                            value: "string"
                        }, {
                            name: "text",
                            value: "string="
                        }, {
                            name: "iconPath",
                            value: "string="
                        }, {
                            name: "selectedIconPath",
                            value: "string="
                        }]
                    }, {
                        name: "showTabBar",
                        authority: "swanAPI",
                        path: "/openTabBar",
                        args: [{
                            name: "animation",
                            value: "boolean"
                        }]
                    }, {
                        name: "hideTabBar",
                        authority: "swanAPI",
                        path: "/closeTabBar",
                        args: [{
                            name: "animation",
                            value: "boolean"
                        }]
                    }, {
                        name: "vibrateShort",
                        authority: "swanAPI",
                        path: "/vibrateShort",
                        args: []
                    }, {
                        name: "getImageInfo",
                        authority: "swanAPI",
                        path: "/getImageInfo",
                        args: [{
                            name: "src",
                            value: "string"
                        }]
                    }, {
                        name: "chooseImage",
                        authority: "swanAPI",
                        path: "/chooseImage",
                        args: [{
                            name: "count",
                            value: "string="
                        }, {
                            name: "sizeType",
                            value: "string[]="
                        }, {
                            name: "sourceType",
                            value: "string[]="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "saveImageToPhotosAlbum",
                        authority: "swanAPI",
                        path: "/saveImageToPhotosAlbum",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "canvasToTempFilePath",
                        authority: "swanAPI",
                        path: "/canvas/toTempFilePath",
                        args: [{
                            name: "canvasId",
                            value: "string"
                        }, {
                            name: "x",
                            value: "string="
                        }, {
                            name: "y",
                            value: "string="
                        }, {
                            name: "width",
                            value: "string="
                        }, {
                            name: "height",
                            value: "string="
                        }, {
                            name: "destWidth",
                            value: "string="
                        }, {
                            name: "destHeight",
                            value: "string="
                        }, {
                            name: "fileType",
                            value: "string="
                        }, {
                            name: "quality",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "openLocation",
                        authority: "swanAPI",
                        path: "/map/openLocation",
                        args: [{
                            name: "latitude",
                            value: "string"
                        }, {
                            name: "longitude",
                            value: "string"
                        }, {
                            name: "name",
                            value: "string="
                        }, {
                            name: "address",
                            value: "string="
                        }, {
                            name: "scale",
                            value: "string="
                        }, {
                            name: "ignoredApps",
                            value: "Array="
                        }]
                    }, {
                        name: "login",
                        authority: "swanAPI",
                        path: "/login",
                        args: [{
                            name: "force",
                            value: "boolean="
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "timeout",
                            value: "string="
                        }]
                    }, {
                        name: "getSetting",
                        authority: "swanAPI",
                        path: "/getSetting",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "openSetting",
                        authority: "swanAPI",
                        path: "/openSetting",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "getLocation",
                        authority: "swanAPI",
                        path: "/getLocation",
                        args: [{
                            name: "type",
                            value: "string="
                        }, {
                            name: "altitude",
                            value: "boolean="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "getUserInfo",
                        authority: "swanAPI",
                        path: "/getUserInfo",
                        args: [{
                            name: "invokeFrom",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "checkSession",
                        authority: "swanAPI",
                        path: "/checkSession",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "authorize",
                        authority: "swanAPI",
                        path: "/authorize",
                        args: [{
                            name: "scope",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "showLoading",
                        authority: "swanAPI",
                        path: "/showLoading",
                        args: [{
                            name: "title",
                            value: "string"
                        }, {
                            name: "mask",
                            value: "boolean="
                        }]
                    }, {
                        name: "hideLoading",
                        authority: "swanAPI",
                        path: "/hideLoading",
                        args: []
                    }, {
                        name: "previewImage",
                        authority: u,
                        path: "/previewImage",
                        args: [{
                            name: "urls",
                            value: "string[]="
                        }, {
                            name: "images",
                            value: "Object[]="
                        }, {
                            name: "current",
                            value: "string="
                        }, {
                            name: "from",
                            value: "string="
                        }]
                    }, {
                        name: "hideKeyboard",
                        authority: u,
                        path: "/hideKeyboard",
                        args: []
                    }, {
                        name: "getNetworkType",
                        authority: u,
                        path: "/getNetworkType",
                        args: []
                    }, {
                        name: "getSystemInfo",
                        authority: u,
                        path: "/getSystemInfo",
                        args: [],
                        invoke: s ? "swan.method.jsonString" : c,
                        method: s ? "_naUtils.getSystemInfo" : l
                    }, {
                        name: "getClipboardData",
                        authority: u,
                        path: "/getClipboardData",
                        args: []
                    }, {
                        name: "setClipboardData",
                        authority: u,
                        path: "/setClipboardData",
                        args: [{
                            name: "data",
                            value: "string"
                        }]
                    }, {
                        name: "setNavigationBarColor",
                        authority: "swanAPI",
                        path: "/setNavigationBarColor",
                        args: [{
                            name: "frontColor",
                            value: "string"
                        }, {
                            name: "backgroundColor",
                            value: "string"
                        }, {
                            name: "animation",
                            value: "object="
                        }]
                    }, {
                        name: "setNavigationBarTitle",
                        authority: "swanAPI",
                        path: "/setNavigationBarTitle",
                        args: [{
                            name: "title",
                            value: "string"
                        }]
                    }, {
                        name: "showNavigationBarLoading",
                        authority: "swanAPI",
                        path: "/showNavigationBarLoading",
                        args: []
                    }, {
                        name: "hideNavigationBarLoading",
                        authority: "swanAPI",
                        path: "/hideNavigationBarLoading",
                        args: []
                    }, {
                        name: "makePhoneCall",
                        authority: u,
                        path: "/makePhoneCall",
                        args: [{
                            name: "phoneNumber",
                            value: "string"
                        }]
                    }, {
                        name: "getStorageInfo",
                        authority: "swanAPI",
                        path: "/getStorageInfo",
                        args: []
                    }, {
                        name: "clearStorage",
                        authority: "swanAPI",
                        path: "/clearStorage",
                        args: []
                    }, {
                        name: "getStorage",
                        authority: "swanAPI",
                        path: "/getStorage",
                        args: [{
                            name: "key",
                            value: "string"
                        }]
                    }, {
                        name: "setStorage",
                        authority: "swanAPI",
                        path: "/setStorage",
                        args: [{
                            name: "key",
                            value: "string"
                        }, {
                            name: "data",
                            value: "*"
                        }]
                    }, {
                        name: "removeStorage",
                        authority: "swanAPI",
                        path: "/removeStorage",
                        args: [{
                            name: "key",
                            value: "string"
                        }]
                    }, {
                        name: "showModal",
                        authority: u,
                        path: "/showModal",
                        args: [{
                            name: "title",
                            value: "string"
                        }, {
                            name: "content",
                            value: "string"
                        }, {
                            name: "showCancel",
                            value: "boolean="
                        }, {
                            name: "cancelText",
                            value: "string="
                        }, {
                            name: "confirmText",
                            value: "string="
                        }, {
                            name: "cancelColor",
                            value: "string="
                        }, {
                            name: "confirmColor",
                            value: "string="
                        }]
                    }, {
                        name: "showActionSheet",
                        authority: "swanAPI",
                        path: "/showActionSheet",
                        args: [{
                            name: "itemList",
                            value: "string[]"
                        }, {
                            name: "itemColor",
                            value: "string="
                        }]
                    }, {
                        name: "startPullDownRefresh",
                        authority: "swanAPI",
                        path: "/startPullDownRefresh",
                        args: []
                    }, {
                        name: "stopPullDownRefresh",
                        authority: "swanAPI",
                        path: "/stopPullDownRefresh",
                        args: []
                    }, {
                        name: "saveFile",
                        authority: "swanAPI",
                        path: "/file/save",
                        args: [{
                            name: "tempFilePath",
                            value: "string"
                        }]
                    }, {
                        name: "getSavedFileList",
                        authority: "swanAPI",
                        path: "/file/getSavedFileList",
                        args: []
                    }, {
                        name: "getSavedFileInfo",
                        authority: "swanAPI",
                        path: "/file/getSavedFileInfo",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }]
                    }, {
                        name: "removeSavedFile",
                        authority: "swanAPI",
                        path: "/file/removeSavedFile",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }]
                    }, {
                        name: "getSwanId",
                        authority: "swanAPI",
                        path: "/getSwanId",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "stopAccelerometer",
                        authority: "swanAPI",
                        path: "/stopAccelerometer",
                        args: []
                    }, {
                        name: "setScreenBrightness",
                        authority: "swanAPI",
                        path: "/brightness/set",
                        args: [{
                            name: "value",
                            value: "string"
                        }]
                    }, {
                        name: "stopCompass",
                        authority: "swanAPI",
                        path: "/stopCompass",
                        args: []
                    }, {
                        name: "getScreenBrightness",
                        authority: "swanAPI",
                        path: "/brightness/get",
                        args: []
                    }, {
                        name: "setKeepScreenOn",
                        authority: "swanAPI",
                        path: "/brightness/keepScreenOn",
                        args: [{
                            name: "keepScreenOn",
                            value: "boolean"
                        }]
                    }, {
                        name: "vibrateLong",
                        authority: "swanAPI",
                        path: "/vibrateLong",
                        args: []
                    }, {
                        name: "chooseVideo",
                        authority: "swanAPI",
                        path: "/chooseVideo",
                        args: [{
                            name: "cb",
                            value: "string"
                        }, {
                            name: "sourceType",
                            value: "string[]="
                        }, {
                            name: "compressed",
                            value: "boolean="
                        }, {
                            name: "maxDuration",
                            value: "string="
                        }]
                    }, {
                        name: "chooseAddress",
                        authority: "swanAPI",
                        path: "/chooseAddress",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "chooseInvoiceTitle",
                        authority: "swanAPI",
                        path: "/chooseInvoiceTitle",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "scanCode",
                        authority: "swanAPI",
                        path: "/scanCode",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "recommendSimilarProducts",
                        authority: "swanAPI",
                        path: "/recommendSimilarProducts",
                        args: [{
                            name: "cb",
                            value: "string"
                        }, {
                            name: "data",
                            value: "object="
                        }]
                    }, {
                        name: "recommendProducts",
                        authority: "swanAPI",
                        path: "/recommendProducts",
                        args: [{
                            name: "cb",
                            value: "string"
                        }, {
                            name: "data",
                            value: "object="
                        }]
                    }, {
                        name: "saveVideoToPhotosAlbum",
                        authority: "swanAPI",
                        path: "/saveVideoToPhotosAlbum",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "getFileInfo",
                        authority: "swanAPI",
                        path: "/file/getInfo",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }, {
                            name: "digestAlgorithm",
                            value: "string="
                        }]
                    }, {
                        name: "chooseLocation",
                        authority: "swanAPI",
                        path: "/map/chooseLocation",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setEnableDebug",
                        authority: "swanAPI",
                        path: "/sConsole/debugSwitch",
                        args: [{
                            name: "enableDebug",
                            value: "boolean"
                        }]
                    }, {
                        name: "loadSubPackage",
                        authority: "swanAPI",
                        path: "/preloadSubPackage",
                        args: [{
                            name: "root",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "canvasPutImageData",
                        authority: "swanAPI",
                        path: "/canvas/putImageData",
                        args: [{
                            name: "cb",
                            value: "string"
                        }, {
                            name: "data",
                            value: "string"
                        }, {
                            name: "canvasId",
                            value: "string"
                        }, {
                            name: "x",
                            value: "string"
                        }, {
                            name: "y",
                            value: "string"
                        }, {
                            name: "width",
                            value: "string"
                        }, {
                            name: "height",
                            value: "string="
                        }]
                    }, {
                        name: "canvasGetImageData",
                        authority: "swanAPI",
                        path: "/canvas/getImageData",
                        args: [{
                            name: "cb",
                            value: "string"
                        }, {
                            name: "canvasId",
                            value: "string"
                        }, {
                            name: "x",
                            value: "string"
                        }, {
                            name: "y",
                            value: "string"
                        }, {
                            name: "width",
                            value: "string"
                        }, {
                            name: "height",
                            value: "string"
                        }]
                    }, {
                        name: "openTabopt",
                        authority: "feed",
                        path: "/tabopt",
                        args: [{
                            name: "upgrade",
                            value: "string="
                        }, {
                            name: "action",
                            value: "string="
                        }, {
                            name: "tab_id",
                            value: "string="
                        }, {
                            name: "tabinfo",
                            value: "object="
                        }, {
                            name: "tabindex",
                            value: "string="
                        }, {
                            name: "tabselected",
                            value: "string="
                        }]
                    }, {
                        name: "openShare",
                        authority: "swanAPI",
                        path: "/share",
                        args: [{
                            name: "title",
                            value: "string="
                        }, {
                            name: "content",
                            value: "string="
                        }, {
                            name: "imageUrl",
                            value: "string="
                        }, {
                            name: "path",
                            value: "string="
                        }, {
                            name: "pannel",
                            value: "Array"
                        }, {
                            name: "defaultPannel",
                            value: "Array"
                        }, {
                            name: "linkUrl",
                            value: "string"
                        }, {
                            name: "mediaType",
                            value: {
                                oneOf: ["ugc_forward", "weixin_friend", "weixin_timeline", "baiduhi", "sinaweibo", "qqfriend", "qqdenglu"]
                            }
                        }, {
                            name: "categoryData",
                            value: "object"
                        }, {
                            name: "type",
                            value: "string"
                        }, {
                            name: "source",
                            value: "string"
                        }, {
                            name: "shareUrl",
                            value: "string="
                        }, {
                            name: "minver",
                            value: "string="
                        }, {
                            name: "command",
                            value: "object="
                        }, {
                            name: "banner",
                            value: "object="
                        }, {
                            name: "categoryInfo",
                            value: "object="
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "snapshot",
                            value: "boolean"
                        }, {
                            name: "forceLightTheme",
                            value: "boolean"
                        }]
                    }, {
                        name: "canvas.drawCanvas",
                        authority: "swanAPI",
                        path: "/canvas/drawCanvas",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "canvasId",
                            value: "string"
                        }, {
                            name: "actions",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "reserve",
                            value: "string="
                        }]
                    }, {
                        name: "requestPolymerPayment",
                        authority: "BDWallet",
                        path: "/requestPolymerPayment",
                        args: [{
                            name: "orderInfo",
                            value: "object"
                        }, {
                            name: "bannedChannels",
                            value: "string[]="
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "from",
                            value: "string="
                        }, {
                            name: "version",
                            value: "string="
                        }]
                    }, {
                        name: "requestAliPayment",
                        authority: "BDWallet",
                        path: "/requestAliPayment",
                        args: [{
                            name: "orderInfo",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "from",
                            value: "string="
                        }, {
                            name: "version",
                            value: "string="
                        }]
                    }, {
                        name: "requestPayment",
                        authority: "BDWallet",
                        path: "/requestPayment",
                        args: [{
                            name: "orderInfo",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "from",
                            value: "string="
                        }, {
                            name: "version",
                            value: "string="
                        }]
                    }, {
                        name: "requestWeChatPayment",
                        authority: "BDWallet",
                        path: "/requestWeChatPayment",
                        args: [{
                            name: "src",
                            value: "string"
                        }, {
                            name: "extraData",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string="
                        }, {
                            name: "from",
                            value: "string="
                        }, {
                            name: "version",
                            value: "string="
                        }]
                    }, {
                        name: "sendSocketMessage",
                        authority: "swanAPI",
                        path: "/webSocket/send",
                        args: [{
                            name: "taskID",
                            value: "string"
                        }, {
                            name: "data",
                            value: "string"
                        }, {
                            name: "dataType",
                            value: "string"
                        }, {
                            name: "__plugin__",
                            value: "string="
                        }]
                    }, {
                        name: "closeSocket",
                        authority: "swanAPI",
                        path: "/webSocket/close",
                        args: [{
                            name: "taskID",
                            value: "string"
                        }, {
                            name: "code",
                            value: "string="
                        }, {
                            name: "reason",
                            value: "string="
                        }, {
                            name: "__plugin__",
                            value: "string="
                        }]
                    }, {
                        name: "connectSocket",
                        authority: "swanAPI",
                        path: "/webSocket/connect",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "header",
                            value: "object="
                        }, {
                            name: "method",
                            value: "string="
                        }, {
                            name: "protocols",
                            value: "Array="
                        }, {
                            name: "__plugin__",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "object"
                        }]
                    }, {
                        name: "startAccelerometer",
                        authority: "swanAPI",
                        path: "/startAccelerometer",
                        args: [{
                            name: "interval",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "addPhoneContact",
                        authority: "swanAPI",
                        path: "/setPhoneContact",
                        args: [{
                            name: "action",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "firstName",
                            value: "string"
                        }, {
                            name: "photoFilePath",
                            value: "string="
                        }, {
                            name: "nickName",
                            value: "string="
                        }, {
                            name: "lastName",
                            value: "string="
                        }, {
                            name: "middleName",
                            value: "string="
                        }, {
                            name: "remark",
                            value: "string="
                        }, {
                            name: "mobilePhoneNumber",
                            value: "string="
                        }, {
                            name: "weChatNumber",
                            value: "string="
                        }, {
                            name: "addressCountry",
                            value: "string="
                        }, {
                            name: "addressState",
                            value: "string="
                        }, {
                            name: "addressCity",
                            value: "string="
                        }, {
                            name: "addressStreet",
                            value: "string="
                        }, {
                            name: "addressPostalCode",
                            value: "string="
                        }, {
                            name: "organization",
                            value: "string="
                        }, {
                            name: "title",
                            value: "string="
                        }, {
                            name: "workFaxNumber",
                            value: "string="
                        }, {
                            name: "workPhoneNumber",
                            value: "string="
                        }, {
                            name: "hostNumber",
                            value: "string="
                        }, {
                            name: "email",
                            value: "string="
                        }, {
                            name: "url",
                            value: "string="
                        }, {
                            name: "workAddressCountry",
                            value: "string="
                        }, {
                            name: "workAddressState",
                            value: "string="
                        }, {
                            name: "workAddressCity",
                            value: "string="
                        }, {
                            name: "workAddressStreet",
                            value: "string="
                        }, {
                            name: "workAddressPostalCode",
                            value: "string="
                        }, {
                            name: "homeFaxNumber",
                            value: "string="
                        }, {
                            name: "homePhoneNumber",
                            value: "string="
                        }, {
                            name: "homeAddressCountry",
                            value: "string="
                        }, {
                            name: "homeAddressState",
                            value: "string="
                        }, {
                            name: "homeAddressCity",
                            value: "string="
                        }, {
                            name: "homeAddressStreet",
                            value: "string="
                        }, {
                            name: "homeAddressPostalCode",
                            value: "string="
                        }]
                    }, {
                        name: "ARCamera.takePhoto",
                        authority: "swanAPI",
                        path: "/ARCamera/takePhoto",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "ARCameraId",
                            value: "string="
                        }]
                    }, {
                        name: "ARCamera.retake",
                        authority: "swanAPI",
                        path: "/ARCamera/update",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "ARCameraId",
                            value: "string="
                        }, {
                            name: "reset",
                            value: "boolean="
                        }]
                    }, {
                        name: "ARCamera.startRecord",
                        authority: "swanAPI",
                        path: "/ARCamera/startRecord",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "ARCameraId",
                            value: "string="
                        }, {
                            name: "onProgressUpdate",
                            value: "string="
                        }, {
                            name: "stopCallback",
                            value: "string="
                        }]
                    }, {
                        name: "ARCamera.stopRecord",
                        authority: "swanAPI",
                        path: "/ARCamera/stopRecord",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "ARCameraId",
                            value: "string="
                        }]
                    }, {
                        name: "ARCamera.detect",
                        authority: "swanAPI",
                        path: "/ARCamera/detectContent",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "ARCameraId",
                            value: "string="
                        }, {
                            name: "detectType",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "ARCamera.arMessage",
                        authority: "swanAPI",
                        path: "/ARCamera/arMessage",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "ARCameraId",
                            value: "string="
                        }, {
                            name: "messageData",
                            value: "Object="
                        }]
                    }, {
                        name: "ARCamera.changeARStatus",
                        authority: "swanAPI",
                        path: "/ARCamera/changeARStatus",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "ARCameraId",
                            value: "string="
                        }, {
                            name: "ARKey",
                            value: "string"
                        }, {
                            name: "ARType",
                            value: "string"
                        }, {
                            name: "status",
                            value: "string"
                        }]
                    }, {
                        name: "camera.takePhoto",
                        authority: "swanAPI",
                        path: "/camera/takePhoto",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "quality",
                            value: "string="
                        }]
                    }, {
                        name: "camera.startRecord",
                        authority: "swanAPI",
                        path: "/camera/startRecord",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "timeoutCallback",
                            value: "string"
                        }]
                    }, {
                        name: "camera.stopRecord",
                        authority: "swanAPI",
                        path: "/camera/stopRecord",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "startCompass",
                        authority: "swanAPI",
                        path: "/startCompass",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cancelRequest",
                        authority: "swanAPI",
                        path: "/cancelRequest",
                        args: [{
                            name: "cancelTag",
                            value: "string="
                        }, {
                            name: "taskIdentifier",
                            value: "string="
                        }]
                    }, {
                        name: "downloadFile",
                        authority: "swanAPI",
                        path: "/downloadFile",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "filePath",
                            value: "string="
                        }, {
                            name: "header",
                            value: "object="
                        }, {
                            name: "onProgressUpdate",
                            value: "string"
                        }, {
                            name: "__plugin__",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "uploadFile",
                        authority: "swanAPI",
                        path: "/uploadFile",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "header",
                            value: "object="
                        }, {
                            name: "filePath",
                            value: "string"
                        }, {
                            name: "formData",
                            value: "object="
                        }, {
                            name: "name",
                            value: "string"
                        }, {
                            name: "onProgressUpdate",
                            value: "string"
                        }, {
                            name: "__plugin__",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "pageScrollTo",
                        authority: "swanAPI",
                        path: "/pageScrollTo",
                        args: [{
                            name: "scrollTop",
                            value: "string|number"
                        }, {
                            name: "duration",
                            value: "string|number="
                        }]
                    }, {
                        name: "getHistory",
                        authority: "swanAPI",
                        path: "/getHistory",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "deleteHistory",
                        authority: "swanAPI",
                        path: "/deleteHistory",
                        args: [{
                            name: "appid",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "addFavor",
                        authority: "swanAPI",
                        path: "/addFavor",
                        args: [{
                            name: "appid",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "deleteFavor",
                        authority: "swanAPI",
                        path: "/deleteFavor",
                        args: [{
                            name: "appid",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "getFavor",
                        authority: "swanAPI",
                        path: "/getFavor",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "checkFavor",
                        authority: "swanAPI",
                        path: "/isFavor",
                        args: [{
                            name: "appid",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setTopFavor",
                        authority: "swanAPI",
                        path: "/topFavor",
                        args: [{
                            name: "appid",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setBackgroundTextStyle",
                        authority: "swanAPI",
                        path: "/setBackgroundTextStyle",
                        args: [{
                            name: "textStyle",
                            value: "string"
                        }]
                    }, {
                        name: "setBackgroundColor",
                        authority: "swanAPI",
                        path: "/setBackgroundColor",
                        args: [{
                            name: "backgroundColor",
                            value: "string="
                        }, {
                            name: "backgroundColorTop",
                            value: "string="
                        }, {
                            name: "backgroundColorBottom",
                            value: "string="
                        }]
                    }, {
                        name: "setInnerAudioOption",
                        authority: "swanAPI",
                        path: "/audio/setInnerAudioOption",
                        args: [{
                            name: "mixWithOther",
                            value: "boolean="
                        }]
                    }, {
                        name: "appInstallManager.install",
                        authority: "swanAPI",
                        path: "/installApp",
                        args: [{
                            name: "type",
                            value: {
                                oneOf: ["queryStatus", "startDownload", "pauseDownload", "cancelDownload", "installApp", "resumeDownload"]
                            }
                        }, {
                            name: "url",
                            value: "string="
                        }, {
                            name: "appId",
                            value: "string="
                        }, {
                            name: "name",
                            value: "string="
                        }, {
                            name: "onProgressUpdate",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "isAppInstalled",
                        authority: "swanAPI",
                        path: "/checkAppInstalled",
                        args: [{
                            name: "name",
                            value: "string"
                        }]
                    }, {
                        name: "recognizeImage",
                        authority: "swanAPI",
                        path: "/imageRecognition",
                        args: [{
                            name: "currentIndex",
                            value: "number="
                        }, {
                            name: "categoryList",
                            value: "object[]"
                        }, {
                            name: "customTips",
                            value: "Object="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "showFavoriteGuide",
                        authority: "swanAPI",
                        path: "/showFavoriteGuide",
                        args: [{
                            name: "type",
                            value: {
                                oneOf: ["bar", "bar-autohide", "tip"]
                            }
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "showOpenAppGuide",
                        authority: "swanAPI",
                        path: "/showOpenAppGuide",
                        args: [{
                            name: "name",
                            value: "string="
                        }, {
                            name: "scheme",
                            value: "string"
                        }, {
                            name: "downloadUrl",
                            value: "string"
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "hideOpenAppGuide",
                        authority: "swanAPI",
                        path: "/hideOpenAppGuide",
                        args: []
                    }, {
                        name: "getBatteryInfo",
                        authority: "swanAPI",
                        path: "/getBatteryInfo",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "startDeviceMotionListening",
                        authority: "swanAPI",
                        path: "/startDeviceMotion",
                        args: [{
                            name: "interval",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "stopDeviceMotionListening",
                        authority: "swanAPI",
                        path: "/stopDeviceMotion",
                        args: []
                    }, {
                        name: "animView.insert",
                        authority: "swanAPI",
                        path: "/animView/insert",
                        args: [{
                            name: "gesture",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string"
                        }, {
                            name: "sanId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }, {
                            name: "style",
                            value: "Object"
                        }, {
                            name: "loop",
                            value: "boolean"
                        }, {
                            name: "autoPlay",
                            value: "boolean"
                        }, {
                            name: "path",
                            value: "string"
                        }, {
                            name: "action",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }]
                    }, {
                        name: "animView.update",
                        authority: "swanAPI",
                        path: "/animView/update",
                        args: [{
                            name: "gesture",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string"
                        }, {
                            name: "sanId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }, {
                            name: "style",
                            value: "Object"
                        }, {
                            name: "loop",
                            value: "boolean"
                        }, {
                            name: "autoPlay",
                            value: "boolean"
                        }, {
                            name: "path",
                            value: "string"
                        }, {
                            name: "action",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }]
                    }, {
                        name: "animView.remove",
                        authority: "swanAPI",
                        path: "/animView/remove",
                        args: [{
                            name: "sanId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }]
                    }, {
                        name: "ARCamera.insert",
                        authority: "swanAPI",
                        path: "/ARCamera/insert",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "ARCameraId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "boolean"
                        }, {
                            name: "ARKey",
                            value: "string"
                        }, {
                            name: "ARType",
                            value: "string"
                        }, {
                            name: "flash",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }]
                    }, {
                        name: "ARCamera.update",
                        authority: "swanAPI",
                        path: "/ARCamera/update",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "ARCameraId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "boolean"
                        }, {
                            name: "ARKey",
                            value: "string"
                        }, {
                            name: "ARType",
                            value: "string"
                        }, {
                            name: "flash",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }]
                    }, {
                        name: "ARCamera.remove",
                        authority: "swanAPI",
                        path: "/ARCamera/remove",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "ARCameraId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }]
                    }, {
                        name: "button.insert",
                        authority: "swanAPI",
                        path: "/button/insert",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "buttonId",
                            value: "string"
                        }, {
                            name: "text",
                            value: "string"
                        }]
                    }, {
                        name: "button.update",
                        authority: "swanAPI",
                        path: "/button/update",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "buttonId",
                            value: "string"
                        }, {
                            name: "text",
                            value: "string"
                        }]
                    }, {
                        name: "button.remove",
                        authority: "swanAPI",
                        path: "/button/remove",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "buttonId",
                            value: "string"
                        }]
                    }, {
                        name: "camera.insert",
                        authority: "swanAPI",
                        path: "/camera/insert",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "cameraId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "boolean"
                        }, {
                            name: "devicePosition",
                            value: "string"
                        }, {
                            name: "flash",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }]
                    }, {
                        name: "camera.update",
                        authority: "swanAPI",
                        path: "/camera/update",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "cameraId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "boolean"
                        }, {
                            name: "devicePosition",
                            value: "string"
                        }, {
                            name: "flash",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }]
                    }, {
                        name: "camera.remove",
                        authority: "swanAPI",
                        path: "/camera/remove",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "cameraId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }]
                    }, {
                        name: "canvas.insert",
                        authority: "swanAPI",
                        path: "/canvas/insert",
                        args: [{
                            name: "canvasId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string"
                        }, {
                            name: "disableScroll",
                            value: "string"
                        }, {
                            name: "gesture",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }]
                    }, {
                        name: "canvas.update",
                        authority: "swanAPI",
                        path: "/canvas/update",
                        args: [{
                            name: "canvasId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string"
                        }, {
                            name: "disableScroll",
                            value: "string"
                        }, {
                            name: "gesture",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }]
                    }, {
                        name: "canvas.remove",
                        authority: "swanAPI",
                        path: "/canvas/remove",
                        args: [{
                            name: "canvasId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "coverView.insert",
                        authority: "swanAPI",
                        path: "/coverview/insert",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string"
                        }, {
                            name: "gesture",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }, {
                            name: "style",
                            value: "Object"
                        }, {
                            name: "text",
                            value: "string"
                        }, {
                            name: "scrollTop",
                            value: "string"
                        }]
                    }, {
                        name: "coverView.update",
                        authority: "swanAPI",
                        path: "/coverview/update",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string"
                        }, {
                            name: "gesture",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object"
                        }, {
                            name: "style",
                            value: "Object"
                        }, {
                            name: "text",
                            value: "string"
                        }, {
                            name: "scrollTop",
                            value: "string"
                        }, {
                            name: "transition",
                            value: "Object="
                        }]
                    }, {
                        name: "coverView.remove",
                        authority: "swanAPI",
                        path: "/coverview/remove",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }]
                    }, {
                        name: "coverImage.insert",
                        authority: "swanAPI",
                        path: "/coverimage/insert",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "src",
                            value: "string"
                        }, {
                            name: "loadState",
                            value: "boolean"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "coverImage.update",
                        authority: "swanAPI",
                        path: "/coverimage/update",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "src",
                            value: "string"
                        }, {
                            name: "loadState",
                            value: "boolean"
                        }, {
                            name: "transition",
                            value: "Object="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "coverImage.remove",
                        authority: "swanAPI",
                        path: "/coverimage/remove",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }]
                    }, {
                        name: "getLocalImgData",
                        authority: "swanAPI",
                        path: "/getLocalImgData",
                        args: [{
                            name: "filePath",
                            value: "string="
                        }]
                    }, {
                        name: "input.insert",
                        authority: "swanAPI",
                        path: "/openInput",
                        args: [{
                            name: "id",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "type",
                            value: "string="
                        }, {
                            name: "value",
                            value: "string="
                        }, {
                            name: "maxLength",
                            value: "string="
                        }, {
                            name: "password",
                            value: "string="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "cursorSpacing",
                            value: "string="
                        }, {
                            name: "cursor",
                            value: "string="
                        }, {
                            name: "focus",
                            value: "string="
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "disabled",
                            value: "boolean="
                        }, {
                            name: "placeholder",
                            value: "string="
                        }, {
                            name: "placeholderStyle",
                            value: "Object="
                        }, {
                            name: "confirmHold",
                            value: "string="
                        }, {
                            name: "confirmType",
                            value: "string="
                        }, {
                            name: "selectionStart",
                            value: "string="
                        }, {
                            name: "selectionEnd",
                            value: "string="
                        }, {
                            name: "adjustPosition",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "input.update",
                        authority: "swanAPI",
                        path: "/updateInput",
                        args: [{
                            name: "id",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "type",
                            value: "string="
                        }, {
                            name: "value",
                            value: "string="
                        }, {
                            name: "maxLength",
                            value: "string="
                        }, {
                            name: "password",
                            value: "string="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "cursorSpacing",
                            value: "string="
                        }, {
                            name: "cursor",
                            value: "string="
                        }, {
                            name: "focus",
                            value: "string="
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "disabled",
                            value: "boolean="
                        }, {
                            name: "placeholder",
                            value: "string="
                        }, {
                            name: "placeholderStyle",
                            value: "Object="
                        }, {
                            name: "confirmHold",
                            value: "string="
                        }, {
                            name: "confirmType",
                            value: "string="
                        }, {
                            name: "selectionStart",
                            value: "string="
                        }, {
                            name: "selectionEnd",
                            value: "string="
                        }, {
                            name: "adjustPosition",
                            value: "string="
                        }]
                    }, {
                        name: "input.remove",
                        authority: "swanAPI",
                        path: "/closeInput",
                        args: [{
                            name: "id",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "type",
                            value: "string="
                        }, {
                            name: "value",
                            value: "string="
                        }, {
                            name: "maxLength",
                            value: "string="
                        }, {
                            name: "password",
                            value: "string="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "cursorSpacing",
                            value: "string="
                        }, {
                            name: "cursor",
                            value: "string="
                        }, {
                            name: "focus",
                            value: "string="
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "placeholder",
                            value: "string="
                        }, {
                            name: "placeholderStyle",
                            value: "Object="
                        }, {
                            name: "confirmHold",
                            value: "string="
                        }, {
                            name: "confirmType",
                            value: "string="
                        }, {
                            name: "selectionStart",
                            value: "string="
                        }, {
                            name: "selectionEnd",
                            value: "string="
                        }, {
                            name: "adjustPosition",
                            value: "string="
                        }]
                    }, {
                        name: "map.insert",
                        authority: "swanAPI",
                        path: "/map/create",
                        args: [{
                            name: "mapId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "showLocation",
                            value: "boolean="
                        }, {
                            name: "enable3D",
                            value: "boolean="
                        }, {
                            name: "enableRotate",
                            value: "boolean="
                        }, {
                            name: "enableScroll",
                            value: "boolean="
                        }, {
                            name: "enableZoom",
                            value: "boolean="
                        }, {
                            name: "enableOverlooking",
                            value: "boolean="
                        }, {
                            name: "showCompass",
                            value: "boolean="
                        }, {
                            name: "subkey",
                            value: "string="
                        }, {
                            name: "longitude",
                            value: "string="
                        }, {
                            name: "latitude",
                            value: "string="
                        }, {
                            name: "scale",
                            value: "string="
                        }, {
                            name: "markers",
                            value: "Array="
                        }, {
                            name: "polyline",
                            value: "Array="
                        }, {
                            name: "polygons",
                            value: "Array="
                        }, {
                            name: "circles",
                            value: "Array="
                        }, {
                            name: "controls",
                            value: "Array="
                        }, {
                            name: "includePoints",
                            value: "Array="
                        }, {
                            name: "layerStyle",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "map.update",
                        authority: "swanAPI",
                        path: "/map/update",
                        args: [{
                            name: "mapId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "showLocation",
                            value: "boolean="
                        }, {
                            name: "enable3D",
                            value: "boolean="
                        }, {
                            name: "enableRotate",
                            value: "boolean="
                        }, {
                            name: "enableScroll",
                            value: "boolean="
                        }, {
                            name: "enableZoom",
                            value: "boolean="
                        }, {
                            name: "enableOverlooking",
                            value: "boolean="
                        }, {
                            name: "showCompass",
                            value: "boolean="
                        }, {
                            name: "subkey",
                            value: "string="
                        }, {
                            name: "longitude",
                            value: "string="
                        }, {
                            name: "latitude",
                            value: "string="
                        }, {
                            name: "scale",
                            value: "string="
                        }, {
                            name: "markers",
                            value: "Array="
                        }, {
                            name: "polyline",
                            value: "Array="
                        }, {
                            name: "polygons",
                            value: "Array="
                        }, {
                            name: "circles",
                            value: "Array="
                        }, {
                            name: "controls",
                            value: "Array="
                        }, {
                            name: "includePoints",
                            value: "Array="
                        }]
                    }, {
                        name: "map.remove",
                        authority: "swanAPI",
                        path: "/map/remove",
                        args: [{
                            name: "mapId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "picker.insert",
                        authority: u,
                        path: "/openPicker",
                        args: [{
                            name: "title",
                            value: "string="
                        }, {
                            name: "array",
                            value: "Array="
                        }, {
                            name: "current",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }],
                        invoke: m,
                        method: i.default.isAndroid ? "_naInteraction.openPicker" : l
                    }, {
                        name: "multiPicker.insert",
                        authority: u,
                        path: "/openMultiPicker",
                        args: [{
                            name: "title",
                            value: "string="
                        }, {
                            name: "array",
                            value: "Array="
                        }, {
                            name: "current",
                            value: "Array="
                        }, {
                            name: "cb",
                            value: "string="
                        }],
                        invoke: m,
                        method: i.default.isAndroid ? "_naInteraction.openMultiPicker" : l
                    }, {
                        name: "multiPicker.update",
                        authority: u,
                        path: "/updateMultiPicker",
                        args: [{
                            name: "column",
                            value: "string="
                        }, {
                            name: "array",
                            value: "Array="
                        }, {
                            name: "current",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }],
                        invoke: m,
                        method: i.default.isAndroid ? "_naInteraction.updateMultiPicker" : l
                    }, {
                        name: "datePicker.insert",
                        authority: u,
                        path: "/showDatePickerView",
                        args: [{
                            name: "start",
                            value: "string="
                        }, {
                            name: "end",
                            value: "string="
                        }, {
                            name: "mode",
                            value: "string="
                        }, {
                            name: "value",
                            value: "string="
                        }, {
                            name: "fields",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }],
                        invoke: m,
                        method: i.default.isAndroid ? "_naInteraction.showDatePickerView" : l
                    }, {
                        name: "getRegionData",
                        authority: "swanAPI",
                        path: "/getRegionData",
                        args: []
                    }, {
                        name: "textarea.insert",
                        authority: "swanAPI",
                        path: "/openTextarea",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "inputId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "disabled",
                            value: "string="
                        }, {
                            name: "placeholder",
                            value: "string="
                        }, {
                            name: "value",
                            value: "string="
                        }, {
                            name: "maxLength",
                            value: "string="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "focus",
                            value: "string="
                        }, {
                            name: "cursor",
                            value: "string="
                        }, {
                            name: "cursorSpacing",
                            value: "string="
                        }, {
                            name: "selectionStart",
                            value: "string="
                        }, {
                            name: "selectionEnd",
                            value: "string="
                        }, {
                            name: "showConfirmBar",
                            value: "string="
                        }, {
                            name: "confirmType",
                            value: "string="
                        }, {
                            name: "adjustPosition",
                            value: "string="
                        }, {
                            name: "fixed",
                            value: "string="
                        }, {
                            name: "autoHeight",
                            value: "string="
                        }, {
                            name: "placeholderStyle",
                            value: "Object="
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "textarea.update",
                        authority: "swanAPI",
                        path: "/updateTextarea",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "inputId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "disabled",
                            value: "string="
                        }, {
                            name: "placeholder",
                            value: "string="
                        }, {
                            name: "value",
                            value: "string="
                        }, {
                            name: "maxLength",
                            value: "string="
                        }, {
                            name: "style",
                            value: "Object="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "focus",
                            value: "string="
                        }, {
                            name: "cursor",
                            value: "string="
                        }, {
                            name: "cursorSpacing",
                            value: "string="
                        }, {
                            name: "selectionStart",
                            value: "string="
                        }, {
                            name: "selectionEnd",
                            value: "string="
                        }, {
                            name: "showConfirmBar",
                            value: "string="
                        }, {
                            name: "confirmType",
                            value: "string="
                        }, {
                            name: "adjustPosition",
                            value: "string="
                        }, {
                            name: "fixed",
                            value: "string="
                        }, {
                            name: "autoHeight",
                            value: "string="
                        }, {
                            name: "placeholderStyle",
                            value: "Object="
                        }, {
                            name: "hide",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "textarea.remove",
                        authority: "swanAPI",
                        path: "/closeTextarea",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "inputId",
                            value: "string"
                        }, {
                            name: "viewId",
                            value: "string"
                        }, {
                            name: "parentId",
                            value: "string"
                        }]
                    }, {
                        name: "video.insert",
                        authority: "swanAPI",
                        path: "/video/open",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "videoId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "sanId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "src",
                            value: "string="
                        }, {
                            name: "initialTime",
                            value: "string="
                        }, {
                            name: "duration",
                            value: "string="
                        }, {
                            name: "objectFit",
                            value: "string="
                        }, {
                            name: "poster",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "controls",
                            value: "boolean="
                        }, {
                            name: "autoplay",
                            value: "boolean="
                        }, {
                            name: "loop",
                            value: "boolean="
                        }, {
                            name: "muted",
                            value: "boolean="
                        }, {
                            name: "showPlayBtn",
                            value: "boolean="
                        }, {
                            name: "showCenterPlayBtn",
                            value: "boolean="
                        }, {
                            name: "showMuteBtn",
                            value: "boolean="
                        }, {
                            name: "danmuList",
                            value: "Array="
                        }, {
                            name: "enableDanmu",
                            value: "boolean="
                        }, {
                            name: "danmuBtn",
                            value: "boolean="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "pageGesture",
                            value: "boolean="
                        }, {
                            name: "showProgress",
                            value: "boolean="
                        }, {
                            name: "direction",
                            value: "string="
                        }, {
                            name: "showFullscreenBtn",
                            value: "boolean="
                        }, {
                            name: "enableProgressGesture",
                            value: "boolean="
                        }, {
                            name: "showNoWifiTip",
                            value: "boolean="
                        }]
                    }, {
                        name: "video.update",
                        authority: "swanAPI",
                        path: "/video/update",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "videoId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "sanId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "src",
                            value: "string="
                        }, {
                            name: "initialTime",
                            value: "string="
                        }, {
                            name: "duration",
                            value: "string="
                        }, {
                            name: "objectFit",
                            value: "string="
                        }, {
                            name: "poster",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "controls",
                            value: "boolean="
                        }, {
                            name: "autoplay",
                            value: "boolean="
                        }, {
                            name: "loop",
                            value: "boolean="
                        }, {
                            name: "muted",
                            value: "boolean="
                        }, {
                            name: "showPlayBtn",
                            value: "boolean="
                        }, {
                            name: "showCenterPlayBtn",
                            value: "boolean="
                        }, {
                            name: "showMuteBtn",
                            value: "boolean="
                        }, {
                            name: "danmuList",
                            value: "Array="
                        }, {
                            name: "enableDanmu",
                            value: "boolean="
                        }, {
                            name: "danmuBtn",
                            value: "boolean="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "pageGesture",
                            value: "boolean="
                        }, {
                            name: "showProgress",
                            value: "boolean="
                        }, {
                            name: "direction",
                            value: "string="
                        }, {
                            name: "showFullscreenBtn",
                            value: "boolean="
                        }, {
                            name: "enableProgressGesture",
                            value: "boolean="
                        }]
                    }, {
                        name: "video.remove",
                        authority: "swanAPI",
                        path: "/video/remove",
                        args: [{
                            name: "videoId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "sanId",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }]
                    }, {
                        name: "live.insert",
                        authority: "swanAPI",
                        path: "/live/open",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "liveId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "src",
                            value: "string="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "autoplay",
                            value: "boolean="
                        }, {
                            name: "muted",
                            value: "boolean="
                        }, {
                            name: "orientation",
                            value: "string="
                        }, {
                            name: "objectFit",
                            value: "string="
                        }, {
                            name: "backgroundMute",
                            value: "boolean="
                        }, {
                            name: "minCache",
                            value: "string="
                        }, {
                            name: "maxCache",
                            value: "string="
                        }]
                    }, {
                        name: "live.update",
                        authority: "swanAPI",
                        path: "/live/update",
                        args: [{
                            name: "gesture",
                            value: "string="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "liveId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "src",
                            value: "string="
                        }, {
                            name: "position",
                            value: "Object="
                        }, {
                            name: "autoplay",
                            value: "boolean="
                        }, {
                            name: "muted",
                            value: "boolean="
                        }, {
                            name: "orientation",
                            value: "string="
                        }, {
                            name: "objectFit",
                            value: "string="
                        }, {
                            name: "backgroundMute",
                            value: "boolean="
                        }, {
                            name: "minCache",
                            value: "string="
                        }, {
                            name: "maxCache",
                            value: "string="
                        }]
                    }, {
                        name: "live.remove",
                        authority: "swanAPI",
                        path: "/live/remove",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "liveId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }]
                    }, {
                        name: "webView.insert",
                        authority: "swanAPI",
                        path: "/insertWebView",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "src",
                            value: "string="
                        }]
                    }, {
                        name: "webView.update",
                        authority: "swanAPI",
                        path: "/updateWebView",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "hide",
                            value: "boolean="
                        }, {
                            name: "src",
                            value: "string="
                        }]
                    }, {
                        name: "webView.remove",
                        authority: "swanAPI",
                        path: "/removeWebView",
                        args: [{
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "parentId",
                            value: "string="
                        }, {
                            name: "viewId",
                            value: "string="
                        }]
                    }, {
                        name: "webView.navigateTo",
                        authority: "swanAPI",
                        path: "/navigateTo",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "initData",
                            value: "Object="
                        }, {
                            name: "startTime",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "webView.navigateBack",
                        authority: "swanAPI",
                        path: "/navigateBack",
                        args: [{
                            name: "delta",
                            value: "string"
                        }, {
                            name: "startTime",
                            value: "string="
                        }]
                    }, {
                        name: "webView.redirectTo",
                        authority: "swanAPI",
                        path: "/redirectTo",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "initData",
                            value: "Object="
                        }, {
                            name: "startTime",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "webView.reLaunch",
                        authority: "swanAPI",
                        path: "/reLaunch",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "initData",
                            value: "Object="
                        }, {
                            name: "startTime",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "webView.switchTab",
                        authority: "swanAPI",
                        path: "/switchTab",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "startTime",
                            value: "string="
                        }]
                    }, {
                        name: "getFormId",
                        authority: "swanAPI",
                        path: "/getFormId",
                        args: [{
                            name: "reportType",
                            value: "string="
                        }, {
                            name: "subscribeId",
                            value: "string="
                        }, {
                            name: "templateId",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "IM.insert",
                        authority: "message",
                        path: "/deliverMnpAppKey",
                        args: [{
                            name: "appKey",
                            value: "string"
                        }, {
                            name: "appLaunchScheme",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "springback.insert",
                        authority: "swanAPI",
                        path: "/openSpringback",
                        args: []
                    }, {
                        name: "springback.remove",
                        authority: "swanAPI",
                        path: "/closeSpringback",
                        args: []
                    }, {
                        name: "adWebview.insert",
                        authority: "swanAPI",
                        path: "/openAdWebPage",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "extraData",
                            value: "string="
                        }]
                    }, {
                        name: "statisticEvent",
                        authority: "swanAPI",
                        path: "/openStatisticEvent",
                        args: [{
                            name: "groupId",
                            value: "string"
                        }, {
                            name: "bizId",
                            value: "string"
                        }, {
                            name: "eventName",
                            value: "string"
                        }, {
                            name: "content",
                            value: "Object"
                        }, {
                            name: "appVersion",
                            value: "string="
                        }, {
                            name: "swanType",
                            value: "string="
                        }]
                    }, {
                        name: "performpanel",
                        authority: "swanAPI",
                        path: "/performancePanel",
                        args: [{
                            name: "data",
                            value: "Array"
                        }]
                    }, {
                        name: "ubcFlowJar",
                        authority: "swanAPI",
                        path: "/ubcFlowJar",
                        args: [{
                            name: "flowId",
                            value: "string"
                        }, {
                            name: "ext",
                            value: "Object="
                        }, {
                            name: "data",
                            value: "Array"
                        }]
                    }, {
                        name: "statisticFlowJar",
                        authority: "swanAPI",
                        path: "/openStatisticFlowJar",
                        args: [{
                            name: "groupId",
                            value: "string"
                        }, {
                            name: "bizId",
                            value: "string"
                        }, {
                            name: "data",
                            value: "Array"
                        }]
                    }, {
                        name: "getLaunchAppInfo",
                        authority: "swanAPI",
                        path: "/getLaunchAppInfo",
                        args: [{
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "app.insert",
                        authority: "swanAPI",
                        path: "/openApp",
                        args: [{
                            name: "open",
                            value: "string"
                        }, {
                            name: "download",
                            value: "Object="
                        }, {
                            name: "url",
                            value: "string="
                        }, {
                            name: "isNeedDownload",
                            value: "boolean="
                        }, {
                            name: "invokAnyWay",
                            value: "boolean="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "webView.launch",
                        authority: "swanAPI",
                        path: "/launch",
                        args: [{
                            name: "appid",
                            value: "string"
                        }, {
                            name: "url",
                            value: "string="
                        }, {
                            name: "navi",
                            value: "string="
                        }, {
                            name: "from",
                            value: "string="
                        }, {
                            name: "extraData",
                            value: "string|Object="
                        }]
                    }, {
                        name: "webView.exit",
                        authority: "swanAPI",
                        path: "/exit",
                        args: []
                    }, {
                        name: "installApp4Ad",
                        authority: "swanAPI",
                        path: "/installApp4Ad",
                        args: [{
                            name: "type",
                            value: {
                                oneOf: ["queryStatus", "startDownload", "pauseDownload", "cancelDownload", "installApp", "resumeDownload"]
                            }
                        }, {
                            name: "url",
                            value: "string="
                        }, {
                            name: "appId",
                            value: "string="
                        }, {
                            name: "name",
                            value: "string="
                        }, {
                            name: "onProgressUpdate",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "setSanIncData2Console",
                        authority: "swanAPI",
                        path: "/sConsole/sanIncData2Console",
                        args: [{
                            name: "incData",
                            value: "Object"
                        }]
                    }, {
                        name: "setSanFullData2Console",
                        authority: "swanAPI",
                        path: "/sConsole/sanFullData2Console",
                        args: [{
                            name: "fullData",
                            value: "Array"
                        }]
                    }, {
                        name: "getSanDataFromActiveSlave",
                        authority: "swanAPI",
                        path: "/sConsole/getSanDataFromActiveSlave",
                        args: []
                    }, {
                        name: "ai.faceDetect",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    image_type: {
                                        oneOf: ["URL", "BASE64", "FACE_TOKEN"],
                                        isRequired: !0
                                    },
                                    face_field: "string=",
                                    max_face_num: "string=",
                                    face_type: "string=",
                                    image: "string="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string="
                                }
                            }
                        }]
                    }, {
                        name: "ai.faceMatch",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: "Object"
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }]
                    }, {
                        name: "ai.faceSearch",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    image_type: {
                                        oneOf: ["URL", "BASE64", "FACE_TOKEN"],
                                        isRequired: !0
                                    },
                                    group_id_list: "string",
                                    quality_control: "string=",
                                    liveness_control: "string=",
                                    user_id: "string=",
                                    max_user_num: "number=",
                                    image: "string="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string="
                                }
                            }
                        }]
                    }, {
                        name: "ai.facePersonVerify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    image_type: {
                                        oneOf: ["URL", "BASE64", "FACE_TOKEN"],
                                        isRequired: !0
                                    },
                                    id_card_number: "string",
                                    name: "string",
                                    quality_control: "string=",
                                    liveness_control: "string=",
                                    image: "string="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string="
                                }
                            }
                        }]
                    }, {
                        name: "ai.facePersonIdmatch",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    id_card_number: "string",
                                    name: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.faceVerify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: "Object"
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }]
                    }, {
                        name: "ai.faceLivenessSessioncode",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    appid: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.faceLivenessVerify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    video_base64: "string=",
                                    session_id: "string="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    video_base64: "string="
                                }
                            }
                        }]
                    }, {
                        name: "ai.nlpLexerCustom",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    text: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.ocrIdCard",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    detect_direction: "boolean=",
                                    id_card_side: "string",
                                    detect_risk: "boolean="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.textClassify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    detect_direction: "string="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.nlpLexer",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: "Object"
                        }]
                    }, {
                        name: "ai.ocrBankCard",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.ocrDrivingLicense",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string",
                                    detect_direction: "string=",
                                    unified_valid_period: "boolean="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.ocrVehicleLicense",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string",
                                    detect_direction: "string=",
                                    accuracy: "string="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.textReview",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    content: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.textToAudio",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    tex: "string",
                                    ctp: "string=",
                                    lan: "string=",
                                    spd: "string=",
                                    pit: "string=",
                                    vol: "string=",
                                    per: "string="
                                }
                            }
                        }]
                    }, {
                        name: "ai.imageAudit",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string=",
                                    imageUrl: "string="
                                }
                            }
                        }]
                    }, {
                        name: "ai.advancedGeneralIdentify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.objectDetectIdentify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string",
                                    with_face: "number="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.dishClassify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    top_num: "number=",
                                    filter_threshold: "number"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.carClassify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string",
                                    top_num: "number="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.logoClassify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string=",
                                    custom_lib: "boolean="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.animalClassify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string",
                                    top_num: "number="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "ai.plantClassify",
                        authority: "swanAPI",
                        path: "/aiRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    string_key: "string"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    image: "string"
                                }
                            }
                        }]
                    }, {
                        name: "cloud.renewalDocument",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    collectionname: "string",
                                    documentid: "string|number",
                                    data: {
                                        type: {
                                            Document: "object"
                                        }
                                    }
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.deleteDocument",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    collectionname: "string",
                                    documentid: "string|number"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.callFunction",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    name: "string",
                                    data: "Object="
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.uploadFile",
                        authority: "swanAPI",
                        path: "/cloudUploadFile",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    cloudPath: "string",
                                    data: {
                                        type: {
                                            Headers: "Object="
                                        }
                                    }
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: {
                                type: {
                                    filePath: "string"
                                }
                            }
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.downloadFile",
                        authority: "swanAPI",
                        path: "/cloudDownloadFile",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    fileID: "string"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.deleteFile",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    fileList: "Array"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.getCollection",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    collectionname: "string",
                                    data: {
                                        type: {
                                            Query: "object=",
                                            Options: "object="
                                        }
                                    }
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.addDocument",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    collectionname: "string",
                                    data: {
                                        type: {
                                            document: "object"
                                        }
                                    }
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.countDocument",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    collectionname: "string",
                                    data: {
                                        type: {
                                            Query: "object=",
                                            Options: "object="
                                        }
                                    }
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.getDocument",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    collectionname: "string",
                                    documentid: "string|number"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "cloud.setDocument",
                        authority: "swanAPI",
                        path: "/cloudRequest",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    workspaceid: "string",
                                    collectionname: "string",
                                    documentid: "string|number",
                                    data: {
                                        type: {
                                            Document: "object"
                                        }
                                    }
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "getCloudUrl",
                        authority: "swanAPI",
                        path: "/cloudGetUrl",
                        args: [{
                            name: "service",
                            value: "string"
                        }, {
                            name: "api",
                            value: "string"
                        }, {
                            name: "stringMap",
                            value: {
                                type: {
                                    fileID: "string"
                                }
                            }
                        }, {
                            name: "fileMap",
                            value: "Object"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "audio.open",
                        authority: "swanAPI",
                        path: "/audio/open",
                        args: [{
                            name: "src",
                            value: "string="
                        }, {
                            name: "audioId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "object"
                        }, {
                            name: "startTime",
                            value: "string="
                        }, {
                            name: "loop",
                            value: "string="
                        }, {
                            name: "volume",
                            value: "string="
                        }, {
                            name: "obeyMuteSwitch",
                            value: "string="
                        }]
                    }, {
                        name: "audio.renew",
                        authority: "swanAPI",
                        path: "/audio/update",
                        args: [{
                            name: "src",
                            value: "string="
                        }, {
                            name: "audioId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "startTime",
                            value: "string="
                        }, {
                            name: "loop",
                            value: "string="
                        }, {
                            name: "volume",
                            value: "string="
                        }, {
                            name: "obeyMuteSwitch",
                            value: "string="
                        }]
                    }, {
                        name: "audio.play",
                        authority: "swanAPI",
                        path: "/audio/play",
                        args: [{
                            name: "audioId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "audio.pause",
                        authority: "swanAPI",
                        path: "/audio/pause",
                        args: [{
                            name: "audioId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "audio.stop",
                        authority: "swanAPI",
                        path: "/audio/stop",
                        args: [{
                            name: "audioId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "audio.seek",
                        authority: "swanAPI",
                        path: "/audio/seek",
                        args: [{
                            name: "audioId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "string="
                        }]
                    }, {
                        name: "audio.close",
                        authority: "swanAPI",
                        path: "/audio/close",
                        args: [{
                            name: "audioId",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "backgroundAudio.renew",
                        authority: "swanAPI",
                        path: "/backgroundAudio/update",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "src",
                            value: "string="
                        }, {
                            name: "startTime",
                            value: "string="
                        }, {
                            name: "title",
                            value: "string="
                        }, {
                            name: "epname",
                            value: "string="
                        }, {
                            name: "singer",
                            value: "string="
                        }, {
                            name: "coverImgUrl",
                            value: "string="
                        }, {
                            name: "webUrl",
                            value: "string="
                        }, {
                            name: "protocol",
                            value: "string="
                        }, {
                            name: "lrcURL",
                            value: "string="
                        }]
                    }, {
                        name: "backgroundAudio.open",
                        authority: "swanAPI",
                        path: "/backgroundAudio/open",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "Object"
                        }, {
                            name: "src",
                            value: "string"
                        }, {
                            name: "startTime",
                            value: "string="
                        }, {
                            name: "title",
                            value: "string"
                        }, {
                            name: "epname",
                            value: "string="
                        }, {
                            name: "singer",
                            value: "string="
                        }, {
                            name: "coverImgUrl",
                            value: "string="
                        }, {
                            name: "webUrl",
                            value: "string="
                        }, {
                            name: "protocol",
                            value: "string="
                        }, {
                            name: "lrcURL",
                            value: "string="
                        }]
                    }, {
                        name: "backgroundAudio.play",
                        authority: "swanAPI",
                        path: "/backgroundAudio/play",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "backgroundAudio.pause",
                        authority: "swanAPI",
                        path: "/backgroundAudio/pause",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "backgroundAudio.stop",
                        authority: "swanAPI",
                        path: "/backgroundAudio/stop",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }]
                    }, {
                        name: "backgroundAudio.seek",
                        authority: "swanAPI",
                        path: "/backgroundAudio/seek",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "position",
                            value: "string="
                        }]
                    }, {
                        name: "navigateToSmartProgram",
                        authority: "swanAPI",
                        path: "/navigateToProgram",
                        args: [{
                            name: "appKey",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }, {
                            name: "path",
                            value: "string="
                        }, {
                            name: "from",
                            value: "string="
                        }, {
                            name: "extraData",
                            value: "Object="
                        }, {
                            name: "ubc",
                            value: "Object="
                        }]
                    }, {
                        name: "chooseAlbum",
                        authority: "swanAPI",
                        path: "/chooseAlbum",
                        args: [{
                            name: "count",
                            value: "string="
                        }, {
                            name: "mode",
                            value: "string="
                        }, {
                            name: "compressed",
                            value: "boolean="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "faceVerify.insert",
                        authority: "swanAPI",
                        path: "/faceVerify",
                        args: [{
                            name: "invokeFrom",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "faceResultVerify",
                        authority: "swanAPI",
                        path: "/faceResultVerify",
                        args: [{
                            name: "callbackKey",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "confirmAppClose",
                        authority: "swanAPI",
                        path: "/confirmSwanClose",
                        args: [{
                            name: "content",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "adRequest",
                        authority: "swanAPI",
                        path: "/adRequest",
                        args: [{
                            name: "url",
                            value: "string"
                        }, {
                            name: "extParams",
                            value: "object="
                        }, {
                            name: "data",
                            value: "string|object="
                        }, {
                            name: "header",
                            value: "object="
                        }, {
                            name: "method",
                            value: "string="
                        }, {
                            name: "dataType",
                            value: "string="
                        }, {
                            name: "responseType",
                            value: "string="
                        }, {
                            name: "ping",
                            value: "boolean="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "sconsole.insert",
                        authority: "swanAPI",
                        path: "/sconsole/show",
                        args: []
                    }, {
                        name: "sconsole.remove",
                        authority: "swanAPI",
                        path: "/sconsole/hide",
                        args: []
                    }, {
                        name: "openAdWebPage",
                        authority: "swanAPI",
                        path: "/openAdLandingPage",
                        args: [{
                            name: "url",
                            value: "string"
                        }]
                    }, {
                        name: "postMessage",
                        authority: "swanAPI",
                        path: "/postMessage",
                        args: [{
                            name: "webviewid",
                            value: "string"
                        }, {
                            name: "message",
                            value: "string"
                        }]
                    }, {
                        name: "pageInfo.post",
                        authority: "swanAPI",
                        path: "/postPageInfo",
                        args: [{
                            name: "pageInfo",
                            value: "object"
                        }, {
                            name: "type",
                            value: "string"
                        }, {
                            name: "url",
                            value: "string"
                        }]
                    }, {
                        name: "downloadPackages",
                        authority: "swanAPI",
                        path: "/downloadPackages",
                        args: [{
                            name: "appKeys",
                            value: "Array"
                        }, {
                            name: "appType",
                            value: "string="
                        }, {
                            name: "netconf",
                            value: "string="
                        }]
                    }, {
                        name: "shareFile",
                        authority: "swanAPI",
                        path: "/shareFile",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }],
                        invoke: i.default.isAndroid ? "swan.method.jsonString" : c,
                        method: i.default.isAndroid ? "_naFile.shareFile" : l,
                        handler: i.default.isAndroid ? "" : d
                    }, {
                        name: "getAvailableAudioSources",
                        authority: "swanAPI",
                        path: "/audio/getAvailableAudioSources",
                        args: []
                    }, {
                        name: "getSystemRiskInfo",
                        authority: "swanAPI",
                        path: "/getSystemRiskInfo",
                        args: []
                    }, {
                        name: "multiAuthorize",
                        authority: "swanAPI",
                        path: "/multiAuthorize",
                        args: [{
                            name: "scopes",
                            value: "Array"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "compressImage",
                        authority: "swanAPI",
                        path: "/compressImage",
                        args: [{
                            name: "quality",
                            value: "number="
                        }, {
                            name: "src",
                            value: "string"
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }, {
                        name: "test.testAPI",
                        authority: "swanAPI",
                        path: "/testAPI",
                        args: [],
                        extension: "swan"
                    }, {
                        name: "baidu.testAPI",
                        authority: "swanAPI",
                        path: "/testAPI",
                        args: [],
                        extension: "swan"
                    }, {
                        name: "baidu.boxjsTestAPI",
                        authority: "swanAPI",
                        path: "/testAPI",
                        args: [],
                        extension: "boxjs"
                    }]
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.androidSpecialMap = [{
                        name: "startMediaVolumeListen",
                        authority: "swanAPI",
                        path: "/startMediaVolumeListen",
                        args: [{
                            name: "id",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string="
                        }]
                    }, {
                        name: "stopMediaVolumeListen",
                        authority: "swanAPI",
                        path: "/stopMediaVolumeListen",
                        args: [{
                            name: "id",
                            value: "string="
                        }]
                    }, {
                        name: "preventPullDownRefresh.insert",
                        authority: "swanAPI",
                        path: "/preventPullDownRefresh",
                        args: [{
                            name: "slaveId",
                            value: "string"
                        }, {
                            name: "prevent",
                            value: "boolean"
                        }]
                    }, {
                        name: "openAdApp.insert",
                        authority: "swanAPI",
                        path: "/openApp4Ad",
                        args: [{
                            name: "name",
                            value: "string"
                        }]
                    }, {
                        name: "hideToast",
                        authority: "swanAPI",
                        path: "/hideToast",
                        args: []
                    }, {
                        name: "openDocument",
                        authority: "swanAPI",
                        path: "/file/openDocument",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }, {
                            name: "fileType",
                            value: "string="
                        }, {
                            name: "cb",
                            value: "string"
                        }]
                    }],
                    t.androidSpecialSyncMap = [{
                        name: "getMediaVolumeSync",
                        authority: "swanAPI",
                        path: "/getMediaVolumeSync",
                        args: []
                    }, {
                        name: "getAutoRotationSync",
                        authority: "swanAPI",
                        path: "/getAutoRotationSync",
                        args: []
                    }, {
                        name: "addComponentToFullScreenSync",
                        authority: "swanAPI",
                        path: "/addComponentToFullScreenSync",
                        args: [{
                            name: "componentId",
                            value: "Array="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }]
                    }, {
                        name: "removeComponentFromFullScreenSync",
                        authority: "swanAPI",
                        path: "/removeComponentFromFullScreenSync",
                        args: [{
                            name: "componentId",
                            value: "Array="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }]
                    }, {
                        name: "setFullScreenOrientationSync",
                        authority: "swanAPI",
                        path: "/setFullScreenOrientationSync",
                        args: [{
                            name: "orientationType",
                            value: "string"
                        }, {
                            name: "slaveId",
                            value: "string"
                        }]
                    }]
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.iosSpecialMap = [{
                        name: "hideToast",
                        authority: "swanAPI",
                        path: "/dismissToast",
                        args: []
                    }, {
                        name: "onSwanJSLoaded",
                        authority: "swanAPI",
                        path: "/onSwanJSLoaded",
                        args: []
                    }, {
                        name: "container.insert",
                        authority: "swanAPI",
                        path: "/insertContainer",
                        args: [{
                            name: "scrollHeight",
                            value: "string="
                        }, {
                            name: "containerId",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "position",
                            value: "Object="
                        }]
                    }, {
                        name: "container.update",
                        authority: "swanAPI",
                        path: "/updateContainer",
                        args: [{
                            name: "scrollHeight",
                            value: "string="
                        }, {
                            name: "containerId",
                            value: "string="
                        }, {
                            name: "slaveId",
                            value: "string="
                        }, {
                            name: "position",
                            value: "Object="
                        }]
                    }, {
                        name: "openDocument",
                        authority: "swanAPI",
                        path: "/file/openDocument",
                        args: [{
                            name: "filePath",
                            value: "string"
                        }, {
                            name: "fileType",
                            value: "string="
                        }]
                    }],
                    t.iosSpecialSyncMap = []
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    ;
                    t.statisticEvent = function(e) {
                        return a = "statisticEvent",
                        r = e,
                        new Promise(function(t, n) {
                            r = i(r, {
                                innerCallback: function(e) {
                                    0 == +e.status ? t((0,
                                    c.callbackResHandler)(e, "")) : n((0,
                                    c.callbackResHandler)(e, ""))
                                }
                            }),
                            o.boxjsNative.invoke(a, (0,
                            l.paramsInOrder)(o.boxjsNative, a, r))
                        }
                        );
                        var a, r
                    }
                    ;
                    var o = n(10)
                      , a = n(13)
                      , r = n(2)
                      , s = n(14)
                      , u = n(21)
                      , c = n(11)
                      , l = n(17)
                      , d = i({}, a.asyncInvokeMethodItem, {
                        invoke: s.INVOKE_LIST[a.asyncInvokeMethodItem.invoke],
                        scheme: r.schema,
                        name: "statisticEvent",
                        authority: "swanAPI",
                        path: "/openStatisticEvent",
                        args: [{
                            name: "groupId",
                            value: "string"
                        }, {
                            name: "bizId",
                            value: "string"
                        }, {
                            name: "eventName",
                            value: "string"
                        }, {
                            name: "content",
                            value: "Object"
                        }, {
                            name: "appVersion",
                            value: "string="
                        }, {
                            name: "swanType",
                            value: "string="
                        }, {
                            name: "innerCallback",
                            value: "function"
                        }]
                    });
                    o.boxjsNative.add(d);
                    try {
                        if (!u.processors)
                            for (var m in u.processors)
                                o.boxjsNative.addProcessorCreator(m, u.processors[m])
                    } catch (e) {}
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.supportLevel2Callback = function(a) {
                        if (a.cb)
                            return a;
                        if (i.default.isFunction(a.callback)) {
                            var e = "_bdbox_pjs_" + i.default.getId();
                            a.cb = e,
                            r.global[e] = function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                    t[n] = arguments[n];
                                a.callback.apply(r.global, t)
                            }
                        } else
                            i.default.isString(a.callback) && (a.cb = a.callback,
                            delete a.callback);
                        return a
                    }
                    ;
                    var a, r = n(1), i = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.bindingInvoker = void 0;
                    var d = n(3)
                      , m = n(29)
                      , g = n(11)
                      , v = n(6)
                      , p = n(22);
                    t.bindingInvoker = function(e, t, n, a, r, i, o, s, u) {
                        var c = void 0;
                        if (n = v.CANCEL_CONVERT_LIST.some(function(e) {
                            return t.match(e)
                        }) ? n : (0,
                        p.convertNumberToString)(n),
                        r)
                            return (0,
                            d.createBindingBoxjsPromise)(e, t, n);
                        if (i) {
                            var l = (0,
                            d.createBindingCbPromise)(e, t, n, s, o);
                            (0,
                            d.executeCallback)({
                                apiName: t,
                                promise: l
                            }, a)
                        } else {
                            try {
                                c = (0,
                                m.invokeMethod)(e, t, n)
                            } catch (e) {
                                c = {
                                    status: 904,
                                    message: e.message
                                }
                            }
                            (0,
                            g.executeBindingCallback)(n, t, c, o, u)
                        }
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.schemeInvoker = void 0;
                    var m = n(3)
                      , g = n(9);
                    t.schemeInvoker = function(e, n, t, a, r, i, o, s, u) {
                        var c, l = i ? (0,
                        m.createLevel2Promise)(t, s) : null;
                        if (c = (0,
                        m.createInvokePromise)(e, n, t, o).then(function(e) {
                            if ((0,
                            g.isAllowedSaveToBootstrapLogQueue)()) {
                                var t = Date.now();
                                (0,
                                g.addDurationLogToQueue)({
                                    apiName: n,
                                    success: 1,
                                    start: u,
                                    end: t
                                })
                            }
                            return e
                        }),
                        r)
                            return c;
                        var d = l ? [c, l] : c;
                        (0,
                        m.executeCallback)({
                            apiName: n,
                            promise: d
                        }, a)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.syncMethodInvoker = void 0;
                    var s = n(29)
                      , u = n(7)
                      , c = (n(9),
                    n(11))
                      , l = n(6)
                      , d = n(22);
                    t.syncMethodInvoker = function(e, t, n, a, r) {
                        var i = void 0;
                        n = l.CANCEL_CONVERT_LIST.some(function(e) {
                            return t.match(e)
                        }) ? n : (0,
                        d.convertNumberToString)(n);
                        try {
                            i = (0,
                            s.invokeMethod)(e, t, n);
                            var o = {
                                apiName: t,
                                startTime: r
                            };
                            return (0,
                            c.callbackResHandler)(i, a, o)
                        } catch (e) {
                            return u.events.emit("addTimesLog", {
                                apiName: t,
                                success: 0
                            }),
                            e
                        }
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.commonMap = void 0;
                    var a, r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , i = n(54), o = n(55), s = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    };
                    for (var u in o.paramProcessedApiMap)
                        i.normalApiMap[u] && s.default.isObject(o.paramProcessedApiMap[u]) ? r(i.normalApiMap[u], o.paramProcessedApiMap[u]) : i.normalApiMap[u] = o.paramProcessedApiMap[u];
                    t.commonMap = i.normalApiMap
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.normalApiMap = void 0;
                    var a = n(8);
                    t.normalApiMap = a.swanDescription.reduce(function(t, e) {
                        var n = e.name
                          , a = e.args
                          , r = e.extension;
                        return n.match(/\./) && !r || (t[n] = {},
                        r && (t[n].extension = r),
                        a.forEach(function(e) {
                            "cb" === e.name && (t[n].paramsCBName = !0)
                        })),
                        t
                    }, {})
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.paramProcessedApiMap = void 0;
                    var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , r = (p(n(0)),
                    n(4))
                      , i = n(6)
                      , o = n(30)
                      , s = n(57)
                      , u = p(n(60))
                      , c = n(61)
                      , l = n(62)
                      , d = n(63)
                      , m = n(12)
                      , g = p(n(64))
                      , v = n(74);
                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.paramProcessedApiMap = a({}, u.default, {
                        onNetworkStatusChange: c.onNetworkStatusChange,
                        getEnvInfoSync: g.default,
                        createInnerAudioContext: s.createInnerAudioContext,
                        onAccelerometerChange: c.onAccelerometerChange,
                        startAccelerometer: c.startAccelerometer,
                        startCompass: c.startCompass,
                        onCompassChange: c.onCompassChange,
                        showToast: function(e) {
                            (0,
                            l.showToast)(e, m.swanNative)
                        },
                        chooseImage: {
                            defaultParam: d.chooseImageParams,
                            parser: r.resNeedDecode
                        },
                        saveImageToPhotosAlbum: {
                            parser: r.resNeedDecode
                        },
                        getSetting: {
                            parser: r.settingThunkHandle
                        },
                        openSetting: {
                            parser: r.settingThunkHandle
                        },
                        getUserInfo: {
                            filter: function(e) {
                                return e.invokeFrom = "api",
                                e
                            },
                            parser: function(e) {
                                if (0 === (e = (0,
                                r.jsonParse)(e)).status && e.data && e.data.userinfo) {
                                    e.data.userInfo = e.data.userinfo,
                                    delete e.data.userinfo;
                                    var t = e.data.userInfo;
                                    t.nickName = t.shoubainickname,
                                    t.avatarUrl = t.headimgurl,
                                    t.gender = t.sex,
                                    delete t.nickname,
                                    delete t.shoubainickname,
                                    delete t.headimgurl,
                                    delete t.sex
                                }
                                return e
                            }
                        },
                        authorize: {
                            filter: function(e) {
                                return e.scope = i.SCOPE_MAP[e.scope] || e.scope,
                                e
                            },
                            parser: function(e) {
                                var t = (0,
                                r.jsonParse)(e);
                                return 0 === t.status && (t.data = {
                                    errMsg: "授权成功"
                                }),
                                t
                            }
                        },
                        login: {
                            filter: d.loginFilter
                        },
                        showLoading: {
                            defaultParam: {
                                mask: !1
                            },
                            specialCheck: function(e) {
                                return e.title ? "" : "title is required"
                            }
                        },
                        previewImage: {
                            specialCheck: function(e) {
                                return e.urls || e.images ? "" : "one of the parmas either urls or images is required"
                            },
                            filter: d.previewImageFilter
                        },
                        showModal: {
                            defaultParam: {
                                title: "",
                                content: "",
                                confirmText: "确定",
                                cancelText: "取消",
                                showCancel: !0
                            },
                            specialCheck: function(e) {
                                return "string" != typeof e.confirmText || "string" != typeof e.cancelText ? "confirmText cancelText should be string" : 8 < e.confirmText.replace(/[^\x00-\xff]/g, "++").length ? "confirmText length should not be larger than 4 Chinese characters" : 8 < e.cancelText.replace(/[^\x00-\xff]/g, "++").length ? "cancelText length should not be larger than 4 Chinese characters" : ""
                            },
                            thunk: function(e) {
                                return 0 == +e.status && e.data && e.data.type && (e.data[e.data.type] = !0,
                                delete e.data.type),
                                e
                            }
                        },
                        showActionSheet: {
                            defaultParam: {
                                itemList: []
                            },
                            specialCheck: function(e) {
                                return 6 < e.itemList.length ? "itemList should not be larger than 6" : ""
                            }
                        },
                        navigateToMiniProgram: {
                            filter: o.navigateToProgramFilter
                        },
                        navigateBackMiniProgram: {
                            filter: o.navigateBackProgramFilter
                        },
                        getMenuButtonBoundingClientRect: {
                            isSync: !0
                        },
                        openShare: {
                            filter: v.openShareFilter
                        },
                        setClipboardData: {
                            specialCheck: function(e) {
                                return e.data ? "" : "data is required and should not be an empty string"
                            }
                        }
                    })
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getComponentId = t.componentsMap = void 0,
                    t.nativeOperateMethod = function(e, t, n) {
                        u.get(e) ? t.apply(n) : s.events.once(e, function(e) {
                            t.apply(n)
                        })
                    }
                    ;
                    var s = n(7)
                      , a = n(4)
                      , r = n(1).hasNoGlobal ? document : _naSwan
                      , u = t.componentsMap = new Map
                      , c = t.getComponentId = function(e) {
                        return [e.slaveId, e.componentName, e.domId].join("_")
                    }
                    ;
                    s.events.on("componentStateChange", function(e) {
                        var t = e.slaveId
                          , n = e.componentName
                          , a = e.domId
                          , r = e.state
                          , i = e.sanId
                          , o = c({
                            slaveId: t,
                            domId: a,
                            componentName: n
                        });
                        switch (r) {
                        case "insert":
                            u.set(o, i),
                            s.events.emit(o, e);
                            break;
                        case "remove":
                            u.set(o, "")
                        }
                    }),
                    r.addEventListener("message", function(e) {
                        if (e.message) {
                            var t = (0,
                            a.parseMessage)(e.message);
                            s.events.emit(t.type, t)
                        }
                    })
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getBackgroundAudioManager = t.createInnerAudioContext = void 0;
                    var a = o(n(58))
                      , r = o(n(59))
                      , i = n(5);
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var s = 0;
                    t.createInnerAudioContext = function() {
                        return new a.default(++s,(0,
                        i.getSlaveId)())
                    }
                    ,
                    t.getBackgroundAudioManager = function() {
                        return r.default
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.default = void 0;
                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    var r, i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , s = (r = n(0)) && r.__esModule ? r : {
                        default: r
                    }, o = n(12), u = n(5), c = n(7), l = n(3), d = n(4), m = ["Canplay", "Play", "Pause", "Stop", "Ended", "TimeUpdate", "Error", "Waiting", "Seeking", "Seeked"];
                    function g(e, t) {
                        (0,
                        l.createInvokePromise)(o.swanNative, "audio." + e, i({
                            slaveId: this.__slaveId,
                            audioId: this.__audioId
                        }, t))
                    }
                    function v(e, t) {
                        return e + "_audioId_" + t
                    }
                    var p, f, h, y = (p = b,
                    (f = [{
                        key: "play",
                        value: function() {
                            g.call(this, "play")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            g.call(this, "pause")
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            g.call(this, "stop")
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            s.default.isObject(e) && (e = e.position),
                            g.call(this, "seek", {
                                position: e
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            g.call(this, "close")
                        }
                    }, {
                        key: "src",
                        get: function() {
                            return this.__src
                        },
                        set: function(e) {
                            var t = this;
                            if ("String" === (0,
                            u.getParamType)(e) && e !== this.src) {
                                if (this.__openState)
                                    g.call(this, "renew", {
                                        src: e
                                    }),
                                    this.autoplay && this.play();
                                else {
                                    var n = {
                                        src: e,
                                        startTime: this.startTime,
                                        loop: this.loop + "",
                                        obeyMuteSwitch: this.obeyMuteSwitch + "",
                                        volume: this.volume,
                                        audioId: this.__audioId,
                                        slaveId: this.__slaveId,
                                        cb: function() {
                                            var a = this;
                                            return m.reduce(function(e, n) {
                                                return e["on" + n] = (0,
                                                l.createCallback)(function(e) {
                                                    var t = v(n, a.__audioId);
                                                    c.events.emit(t, e)
                                                }, d.resNeedDecode),
                                                e
                                            }, {})
                                        }
                                        .call(this)
                                    };
                                    (0,
                                    l.createInvokePromise)(o.swanNative, "audio.open", n).then(function(e) {
                                        t.__openState = !0,
                                        t.buffered = e.buffered,
                                        t.volume = e.volume,
                                        t.autoplay && t.play()
                                    }).catch(function(e) {})
                                }
                                this.__src = e
                            }
                        }
                    }]) && a(p.prototype, f),
                    h && a(p, h),
                    b);
                    function b(e, t) {
                        !function(e, t) {
                            if (!(e instanceof b))
                                throw new TypeError("Cannot call a class as a function")
                        }(this),
                        this.__audioId = e,
                        this.__slaveId = t,
                        function() {
                            var t = this;
                            c.events.on(v("Play", this.__audioId), function() {
                                t.paused = !1
                            }),
                            ["Pause", "Stop", "Error"].forEach(function(e) {
                                c.events.on(v(e, t.__audioId), function() {
                                    t.paused = !0
                                })
                            }),
                            c.events.on(v("Ended", this.__audioId), function() {
                                t.loop || (t.paused = !0)
                            }),
                            c.events.on(v("TimeUpdate", this.__audioId), function(e) {
                                t.paused || (t.duration = e.duration,
                                t.currentTime = e.currentTime)
                            })
                        }
                        .call(this);
                        var n = this;
                        ["startTime", "loop", "obeyMuteSwitch", "volume"].forEach(function(e) {
                            (function(i) {
                                var o = "__" + i;
                                Object.defineProperty(this, i, {
                                    set: function(e) {
                                        if (e !== this[i]) {
                                            this[o] = e,
                                            s.default.isBoolean(e) && (e += "");
                                            var t = (n = {
                                                slaveId: this.__slaveId,
                                                audioId: this.__audioId
                                            },
                                            r = e,
                                            (a = i)in n ? Object.defineProperty(n, a, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : n[a] = r,
                                            n);
                                            g.call(this, "renew", t)
                                        }
                                        var n, a, r
                                    },
                                    get: function() {
                                        return this[o]
                                    }
                                })
                            }
                            ).call(n, e)
                        }),
                        function() {
                            var n = this;
                            m.forEach(function(e) {
                                var t = v(e, n.__audioId);
                                n["on" + e] = function(e) {
                                    c.events.onMessage(t, e)
                                }
                                ,
                                n["off" + e] = function(e) {
                                    c.events.delHandler(t, e)
                                }
                            })
                        }
                        .call(this),
                        i(this, {
                            __src: "",
                            __startTime: 0,
                            __loop: !1,
                            __obeyMuteSwitch: !0,
                            __volume: 1,
                            autoplay: !1,
                            paused: !0,
                            currentTime: 0,
                            duration: 0,
                            buffered: 0
                        })
                    }
                    t.default = y
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a, r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , i = n(12), o = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    }, s = n(5), u = n(17), c = n(3), l = n(23), d = n(4), m = n(1), g = n(11), v = ["startTime", "title", "epname", "singer", "coverImgUrl", "webUrl", "protocol", "lrcURL"], p = ["onCanplay", "onPlay", "onPause", "onStop", "onEnded", "onTimeUpdate", "onPrev", "onNext", "onError", "onWaiting", "onSeeking", "onSeeked"], f = {
                        src: "",
                        currentTime: 0,
                        duration: 0,
                        paused: !0,
                        buffered: 0,
                        startTime: 0,
                        title: "",
                        epname: "",
                        singer: "",
                        coverImgUrl: "",
                        lrcURL: ""
                    };
                    function h(e, t) {
                        (0,
                        c.createInvokePromise)(i.swanNative, "backgroundAudio." + e, r({
                            slaveId: this.__slaveId
                        }, t))
                    }
                    var y = {
                        __openState: !1,
                        get __slaveId() {
                            return (0,
                            s.getSlaveId)()
                        },
                        get src() {
                            return b("src")
                        },
                        set src(e) {
                            "String" === (0,
                            s.getParamType)(e) && e && (f.src = e,
                            this.__openState ? h.call(y, "renew", {
                                src: f.src
                            }) : function() {
                                var t = {};
                                p.forEach(function(a) {
                                    var e = (0,
                                    l.getParamsCBName)();
                                    m.global[e] = function(e) {
                                        var t = (0,
                                        d.resNeedDecode)(e).data;
                                        "onTimeUpdate" === a && (f.currentTime = t.currentTime,
                                        f.duration = t.duration);
                                        var n = a + "_BGAudio";
                                        s.handlerSet.get(n).queue.forEach(function(e) {
                                            e.call(y, t)
                                        })
                                    }
                                    ,
                                    t[a] = e
                                });
                                var n = {
                                    slaveId: y.__slaveId,
                                    src: f.src,
                                    cb: t
                                };
                                v.forEach(function(e) {
                                    n[e] = f[e]
                                }),
                                (0,
                                c.createInvokePromise)(i.swanNative, "backgroundAudio.open", n).then(function(e) {
                                    y.__openState = !0
                                }).catch(function(e) {})
                            }())
                        },
                        get duration() {
                            return f.duration
                        },
                        get currentTime() {
                            return f.currentTime
                        },
                        play: function() {
                            h.call(this, "play")
                        },
                        pause: function() {
                            h.call(this, "pause")
                        },
                        stop: function() {
                            h.call(this, "stop")
                        },
                        seek: function(e) {
                            o.default.isObject(e) && (e = e.position),
                            h.call(this, "seek", {
                                position: e
                            })
                        }
                    };
                    function b(e) {
                        if (!y.__openState)
                            return f[e];
                        var t = "backgroundAudio.getParamsSync"
                          , n = (0,
                        g.callbackResHandler)(i.swanNative.invoke(t, (0,
                        u.paramsInOrder)(i.swanNative, t, {
                            slaveId: y.__slaveId + "",
                            param: e
                        })));
                        return o.default.isUndefined(n[e]) ? f[e] : n[e]
                    }
                    p.forEach(function(n) {
                        y[n] = function(e) {
                            var t = n + "_BGAudio";
                            s.handlerSet.get(t).clear(),
                            "function" == typeof e && s.handlerSet.pushTo(t, e)
                        }
                    }),
                    ["paused", "startTime", "buffered", "title", "epname", "singer", "coverImgUrl", "webUrl", "protocol", "lrcURL"].forEach(function(r) {
                        Object.defineProperty(y, r, {
                            get: function() {
                                return b(r)
                            },
                            set: function(e) {
                                var t, n, a;
                                -1 < v.indexOf(r) && (f[r] = e,
                                h.call(y, "renew", (a = e,
                                (n = r)in (t = {}) ? Object.defineProperty(t, n, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[n] = a,
                                t)))
                            }
                        })
                    }),
                    t.default = y
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a, r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    , i = (a = n(31)) && a.__esModule ? a : {
                        default: a
                    }, o = n(5), s = n(3), u = n(4), c = n(9), l = n(12), d = {
                        requestPolymerPayment: {
                            parser: u.base64Parser,
                            filter: function(e) {
                                return e.from = "swan",
                                e
                            }
                        },
                        requestAliPayment: {
                            parser: u.base64Parser,
                            filter: function(e) {
                                return e.from = "swan",
                                e
                            }
                        },
                        requestPayment: {
                            parser: u.base64Parser,
                            filter: function(e) {
                                return e.orderInfo = (0,
                                i.default)(e.orderInfo),
                                e.from = "swan",
                                e
                            }
                        },
                        requestWeChatPayment: {
                            filter: function(e) {
                                var t = e.url + "?prepay_id=" + e.prepayId;
                                for (var n in e.extraData)
                                    t += "&" + n + "=" + encodeURIComponent(e.extraData[n]);
                                return r({
                                    slaveId: (0,
                                    o.getSlaveId)(),
                                    src: t,
                                    from: "swan"
                                }, e)
                            }
                        }
                    }, m = {
                        "2.0": function(e) {
                            var t = (0,
                            u.jsonParse)(e);
                            return 0 == +t.status && (t.data.payResult = t.data && t.data.payResult ? (0,
                            u.base64Decode)(t.data.payResult) : "",
                            t.data.payResult = decodeURIComponent(t.data.payResult)),
                            t
                        }
                    };
                    Object.keys(d).forEach(function(r) {
                        var i = d[r];
                        i.proxyHandler = function(e) {
                            e.version && !m[e.version] && delete e.version;
                            var t = "requestWeChatPayment" === r && !e.version
                              , n = !t && (0,
                            s.createLevel2Promise)(e, m[e.version] || i.parser);
                            c.startTimeMap.set(e, Date.now());
                            var a = (0,
                            s.createInvokePromise)(l.swanNative, r, e);
                            (0,
                            s.executeCallback)({
                                apiName: r,
                                promise: t ? a : [a, n]
                            }, e)
                        }
                    }),
                    t.default = d
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.onAccelerometerChange = function(e) {
                        e && i.events.on("onAccelerometerChange", e),
                        a()
                    }
                    ,
                    t.startAccelerometer = a,
                    t.onCompassChange = function(e) {
                        e && i.events.on("onCompassChange", e),
                        l()
                    }
                    ,
                    t.startCompass = l,
                    t.onMemoryWarning = function(e) {
                        var t = "onMemoryWarning";
                        if (e && i.events.on(t, e),
                        !d[t]) {
                            d[t] = !0;
                            var n = (0,
                            o.createCallback)(function(e) {
                                i.events.emit(t, e)
                            }, s.jsonParse)
                              , a = c({
                                cb: n
                            }, t).then(function() {
                                d[t] = !0
                            });
                            (0,
                            o.executeCallback)({
                                apiName: t,
                                promise: a
                            })
                        }
                    }
                    ,
                    t.onNetworkStatusChange = function(e) {
                        var t = "onNetworkStatusChange";
                        if (e && i.events.on(t, e),
                        !d[t]) {
                            var n = (0,
                            o.createCallback)(function(e) {
                                i.events.emit(t, e)
                            }, s.resNeedDecode)
                              , a = (u.asyncBindingApiList.includes(t) ? o.createBindingBoxjsPromise : o.createInvokePromise)(r.swanNative, t, {
                                cb: n
                            }).then(function() {
                                d[t] = !0
                            });
                            (0,
                            o.executeCallback)({
                                apiName: t,
                                promise: a
                            })
                        }
                    }
                    ,
                    t.onDeviceMotionChange = function(e) {
                        e && i.events.on("onDeviceMotionChange", e),
                        m()
                    }
                    ,
                    t.startDeviceMotionListening = m;
                    var r = n(12)
                      , i = n(7)
                      , o = n(3)
                      , s = n(4)
                      , u = n(8)
                      , c = function(e, t) {
                        return (u.asyncBindingApiList.includes(t) ? o.createBindingBoxjsPromise : o.createInvokePromise)(r.swanNative, t, e)
                    };
                    function a() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        e.cb = (0,
                        o.createCallback)(function(e) {
                            i.events.emit("onAccelerometerChange", e)
                        }, s.jsonParse),
                        (0,
                        o.executeCallback)({
                            apiName: "startAccelerometer",
                            promise: c(e, "startAccelerometer")
                        }, e)
                    }
                    function l() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        e.cb = (0,
                        o.createCallback)(function(e) {
                            i.events.emit("onCompassChange", e)
                        }, s.jsonParse),
                        (0,
                        o.executeCallback)({
                            apiName: "startCompass",
                            promise: c(e, "startCompass")
                        }, e)
                    }
                    var d = {};
                    function m() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        e.cb = (0,
                        o.createCallback)(function(e) {
                            i.events.emit("onDeviceMotionChange", e)
                        }, s.jsonParse),
                        (0,
                        o.executeCallback)({
                            apiName: "startDeviceMotionListening",
                            promise: c(e, "startDeviceMotionListening")
                        }, e)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.showToast = void 0;
                    var o = n(6)
                      , s = n(3)
                      , u = n(15)
                      , c = n(4)
                      , l = n(28);
                    t.showToast = function(e, t) {
                        var n, a = 0 < arguments.length && void 0 !== e ? e : {}, r = t;
                        "4" === (n = a,
                        "" === n.title && (0,
                        s.callFailAndComplete)(n, "showToast", "parameter error: title is required"),
                        n.time = n.duration || 2e3,
                        n.mask = n.mask || !1,
                        n.message = n.title,
                        n.type = !n.image && o.TOAST_TYPE_MAP[n.icon] && "" !== n.image ? o.TOAST_TYPE_MAP[n.icon] : "2",
                        delete n.duration,
                        n).type && (a.cb = (0,
                        s.createCallback)(function(e) {
                            (0,
                            u.executeByTryCatch)(a.clickCallback, "at api showToast clickCallback function", e)
                        }, c.jsonParse));
                        var i = Date.now();
                        return (0,
                        l.asyncMethodInvoker)(r, "showToast", a, a, !1, null, null, i)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.chooseImageParams = t.previewImageFilter = t.loginFilter = void 0;
                    var a, r = (a = n(0)) && a.__esModule ? a : {
                        default: a
                    };
                    t.loginFilter = function(e) {
                        return r.default.isNumber(e.timeout) || delete e.timeout,
                        e
                    }
                    ,
                    t.previewImageFilter = function(e) {
                        return e.from = "swan",
                        e
                    }
                    ,
                    t.chooseImageParams = {
                        count: 9,
                        sizeType: ["original", "compressed"],
                        sourceType: ["album", "camera"]
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.default = function() {
                        var e, t = c.boxjs.device.systemInfo({
                            type: "sync"
                        }).SDKVersion, n = c.boxjs.data.get({
                            name: "swan-appInfoSync"
                        }), a = n.appId, r = n.appname, i = n.appLaunchScheme, o = /_dev\d+$/, s = /_trial$/, u = /_trial\d+$/;
                        return e = o.test(a) ? (a = a.replace(o, ""),
                        "development") : s.test(a) ? (a = a.replace(s, ""),
                        "trial") : (u.test(a) && (a = a.replace(u, "")),
                        "production"),
                        {
                            appKey: a,
                            appName: r,
                            lastAppURL: i = (i = i.replace(/(_baiduboxapp|callback|upgrade).*?(&|$)/g, "")).replace(/\?$/, ""),
                            sdkVersion: t,
                            scheme: l.schema,
                            env: e
                        }
                    }
                    ;
                    var c = n(19)
                      , l = n(2)
                }
                , function(e, t, n) {
                    "use strict";
                    function o(e, t) {
                        var n = a.boxjsMap[e] || {};
                        if (~e.indexOf(".") && !~e.indexOf(s.hostName))
                            try {
                                n = a.boxjsMap[e.split(".")[0]][e.split(".")[1]]
                            } catch (e) {}
                        return (0,
                        r.invokeMaker)(i.boxjsNative, e, n, !0, t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.webView = t.media = t.map = t.device = t.net = t.layer = t.log = t.message = t.data = t.canvas = t.cover = t.cache = t.ui = void 0;
                    var a = n(32)
                      , r = n(20)
                      , i = n(10)
                      , s = n(2);
                    t.ui = ["open", "update", "close"].reduce(function(e, r) {
                        var i = {
                            open: "insert",
                            update: "update",
                            close: "remove"
                        };
                        return e[r] = function(e) {
                            var t = e.name
                              , n = e.data
                              , a = t.split("-")[1] + "." + i[r];
                            return "swan-setting" === t && (a = "openSetting"),
                            "swan-adWebPage" === t && (a = "openAdWebPage"),
                            o(a, n)
                        }
                        ,
                        e
                    }, {}),
                    t.cache = {
                        get: function(e) {
                            var t = e.type
                              , n = e.key;
                            return o("sync" === t ? "getStorageSync" : "getStorage", {
                                key: encodeURIComponent(n)
                            })
                        },
                        set: function(e, t, n) {
                            return o("sync" === n ? "setStorageSync" : "setStorage", {
                                key: encodeURIComponent(e),
                                data: encodeURIComponent(JSON.stringify(t))
                            })
                        }
                    },
                    t.cover = ["insert", "update", "remove"].reduce(function(e, a) {
                        return e[a] = function(e) {
                            var t = e.name
                              , n = e.data;
                            return o(t.split("-")[1] + "." + a, n)
                        }
                        ,
                        e
                    }, {}),
                    t.canvas = ["insert", "update", "remove"].reduce(function(e, t) {
                        return e[t] = function(e) {
                            return o("canvas." + t, e)
                        }
                        ,
                        e
                    }, {}),
                    t.data = ["get", "set", "delete", "toggle"].reduce(function(e, a) {
                        return e[a] = function(e) {
                            var t = e.name
                              , n = e.data;
                            return o((t = t.split("-")[1]).replace(/(\w+\.)?(\w)/, function(e, t, n) {
                                return (t || "") + a + n.toUpperCase()
                            }), n || {})
                        }
                        ,
                        e
                    }, {}),
                    t.message = ["post"].reduce(function(e, a) {
                        return e[a] = function(e) {
                            var t = e.name
                              , n = e.data;
                            return o(t.split("-")[1] + "." + a, n)
                        }
                        ,
                        e
                    }, {}),
                    t.log = function(e) {
                        return o(e.name, e.data)
                    }
                    ,
                    t.layer = function(e) {
                        return o(e.name, e.data)
                    }
                    ,
                    t.net = ["request", "onSwanJSLoaded"].reduce(function(e, t) {
                        return e[t] = function(e) {
                            return o(t, e || {})
                        }
                        ,
                        e
                    }, {}),
                    t.device = ["vibrateShort", "networkType", "systemInfo"].reduce(function(e, n) {
                        var a = {
                            systemInfo: "getSystemInfo",
                            networkType: "getNetworkType"
                        };
                        return e[n] = function(e) {
                            var t = a[n] || n;
                            return e && "sync" === e.type && (t += "Sync"),
                            o(t, e)
                        }
                        ,
                        e
                    }, {}),
                    t.map = ["insert", "update", "remove"].reduce(function(e, t) {
                        return e[t] = function(e) {
                            return o("map." + t, e)
                        }
                        ,
                        e
                    }, {}),
                    t.media = ["video", "live", "camera", "ARCamera"].reduce(function(e, a) {
                        return e[a] = function(e) {
                            var t = e.type
                              , n = e.data;
                            return o(a + "." + t, n)
                        }
                        ,
                        e
                    }, {}),
                    t.webView = ["insert", "update", "remove", "navigateBack", "navigateTo", "redirectTo", "reLaunch", "switchTab", "launch", "exit"].reduce(function(e, t) {
                        return e[t] = function(e) {
                            return o("webView." + t, e)
                        }
                        ,
                        e
                    }, {})
                }
                , function(e, t, n) {
                    "use strict";
                    e.exports = function(e) {
                        var t = e.split("?")
                          , n = (t[1] ? t[1] : t[0]).split("&")
                          , a = {};
                        return n.forEach(function(e) {
                            if (0 < (e = e.split("="))[0].length) {
                                var t = "";
                                try {
                                    t = decodeURIComponent(e[1]) || ""
                                } catch (e) {}
                                a[e[0]] = t
                            }
                        }),
                        a
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.componentMap = {
                        view: ["hover-class", "hover-stop-propagation", "hover-start-time", "hover-stay-time"],
                        "scroll-view": ["scroll-x", "scroll-y", "upper-threshold", "lower-threshold", "scroll-top", "scroll-left", "scroll-into-view", "scroll-with-animation", "bindscrolltoupper", "bindscrolltolower", "bindscroll"],
                        swiper: ["indicator-color", "indicator-active-color", "indicator-dots", "autoplay", "current", "interval", "duration", "circular", "vertical", "bindchange", "current-item-id", "previous-margin", "next-margin", "display-multiple-items", "bindanimationfinish"],
                        "swiper-item": ["item-id"],
                        "movable-area": ["scale-area"],
                        "movable-view": ["direction", "inertia", "out-of-bounds", "x", "y", "damping", "friction", "disabled", "scale", "scale-min", "scale-max", "scale-value", "animation", "bindchange", "bindscale", "htouchmove", "vtouchmove"],
                        "cover-view": [],
                        "cover-image": ["src", "bindload", "binderror"],
                        icon: [{
                            type: ["success", "success_no_circle", "info", "warn", "waiting", "cancel", "download", "search", "clear", "personal", "setting", "top", "close", "checkboxSelected", "radioSelected", "radioUnselect"]
                        }, "size", "color"],
                        text: ["selectable", {
                            space: ["ensp", "emsp", "nbsp"]
                        }],
                        "rich-text": [{
                            nodes: ["name", "attrs", "children"]
                        }],
                        progress: ["percent", "show-info", "stroke-width", "color", "activeColor", "backgroundColor", "active", "active-mode"],
                        "animation-view": ["path", "loop", "autoplay", "action", "hidden"],
                        button: [{
                            size: ["default", "mini"]
                        }, {
                            type: ["primary", "default", "warn"]
                        }, {
                            "open-type": ["share", "getUserInfo", "getPhoneNumber", "contact", "openSetting"]
                        }, "form-type", "plain", "hover-stop-propagation", "hover-class", "hover-start-time", "hover-stay-time", "bindgetuserinfo", "bindgetphonenumber", "bindcontact", "bindopensetting"],
                        form: ["bindsubmit", "bindreset"],
                        "checkbox-group": ["bindchange"],
                        checkbox: ["value", "disabled", "checked", "color", "report-submit"],
                        input: ["value", {
                            type: ["text", "number", "digit"]
                        }, "password", "placeholder", "placeholder-style", "placeholder-class", "disabled", "maxlength", "cursor-spacing", "confirm-type", "focus", "bindinput", "bindfocus", "bindblur", "bindconfirm", {
                            "confirm-type": ["send", "search", "next", "go", "done"]
                        }, "confirm-hold", "cursor", "selection-start", "selection-end", "adjust-position"],
                        label: ["for"],
                        "picker-view": ["value", "indicator-style", "bindchange", "indicator-class", "mask-style", "mask-class"],
                        picker: [{
                            mode: [{
                                selector: ["range", "range-key", "value", "bindchange", "disabled", "title", "bindcancel"]
                            }, {
                                date: ["value", "start", "end", "bindchange", "disabled", "bindcancel", {
                                    fields: ["year", "month", "day"]
                                }]
                            }, {
                                time: ["value", "start", "end", "bindchange", "disabled", "bindcancel"]
                            }, {
                                multiSelector: ["range", "range-key", "value", "bindcolumnchange", "bindchange", "disabled", "title", "bindcancel"]
                            }, {
                                region: ["value", "custom-item", "bindchange", "disabled", "title", "bindcancel"]
                            }]
                        }],
                        "radio-group": ["bindchange"],
                        radio: ["value", "checked", "disabled", "color"],
                        slider: ["min", "max", "step", "disabled", "value", "activeColor", "backgroundColor", "show-value", "bindchange", "bindchanging", "block-size", "block-color"],
                        switch: ["checked", {
                            type: ["switch", "checkbox"]
                        }, "color", "bindchange", "disabled"],
                        textarea: ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "maxlength", "bindfocus", "focus", "auto-height", "fixed", "cursor-spacing", "bindfocus", "bindblur", "bindlinechange", "bindinput", "bindconfirm", "show-confirm-bar", "selection-start", "selection-end", "adjust-position", "cursor", "auto-focus"],
                        navigator: ["url", {
                            "open-type": ["navigate", "redirect", "switchTab", "reLaunch", "navigateBack"]
                        }, "delta", "hover-class", "hover-stop-propagation", "hover-start-time", "hover-stay-time"],
                        audio: ["id", "src", "loop", "controls", "poster", "name", "author", "binderror", "bindplay", "bindpause", "bindtimeupdate", "bindended"],
                        image: ["src", {
                            mode: ["scaleToFill", "aspectFit", "aspectFill", "widthFix", "top", "bottom", "center", "left", "right", "top left", "top right", "bottom left", "bottom right"]
                        }, "lazy-load", "binderror", "bindload"],
                        video: ["src", "initial-time", "duration", "controls", "autoplay", "loop", "muted", "objectFit", "poster", "bindplay", "bindpause", "bindended", "bindtimeupdate", "bindfullscreenchange", "page-gesture", "show-progress", "show-fullscreen-btn", "enable-progress-gesture", "danmu-list", "danmu-btn", "enable-danmu", "show-play-btn", "show-center-play-btn", "bindwaiting", "binderror"],
                        camera: ["device-position", "flash", "bindstop", "binderror"],
                        "live-player": ["id", "src", "autoplay", "muted", "object-fit", "background-mute", "min-cache", "max-cache", "bindstatechange", "bindnetstatus", "orientation", "bindfullscreenchange"],
                        map: ["longitude", "latitude", "scale", {
                            markers: ["id", "latitude", "longitude", "title", "iconPath", "rotate", "alpha", "width", "height", {
                                callout: ["content", "color", "fontSize", "borderRadius", "bgColor", "padding", "display", {
                                    textAlign: ["left", "right", "center"]
                                }]
                            }, {
                                label: ["content", "color", "fontSize", "x", "y", "borderWidth", "borderColor", "borderRadius", "bgColor", "padding", {
                                    textAlign: ["left", "right", "center"]
                                }]
                            }, "anchor"]
                        }, {
                            circles: ["latitude", "longitude", "color", "fillColor", "radius", "strokeWidth"]
                        }, {
                            controls: ["id", "position", "iconPath", "clickable"]
                        }, {
                            position: ["left", "top", "width", "height"]
                        }, "include-points", "show-location", "bindmarkertap", "bindcontroltap", "bindregionchange", "bindcallouttap", "bindtap", {
                            polyline: ["points", "color", "width", "dottedLine", "arrowLine", "borderColor", "borderWidth", "arrowIconPath"]
                        }, "bindupdated"],
                        canvas: ["canvas-id", "disable-scroll", "bindtouchstart", "bindtouchmove", "bindtouchend", "bindtouchcancel", "bindlongtap", "binderror"],
                        "web-view": ["src", "bindmessage"],
                        "open-data": [{
                            type: ["userNickName", "userAvatarUrl", "userGender"]
                        }]
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = n(69);
                    Object.keys(a).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return a[e]
                            }
                        })
                    });
                    var r = n(70);
                    Object.keys(r).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return r[e]
                            }
                        })
                    });
                    var i = n(72);
                    Object.keys(i).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return i[e]
                            }
                        })
                    })
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.createAdAppInstallManager = t.AdAppInstallManager = void 0;
                    var o = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    ;
                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    var r, i, s, u = n(10), c = n(4), l = n(3), d = n(7), m = new WeakMap, g = 1, v = t.AdAppInstallManager = (r = p,
                    (i = [{
                        key: "onProgressUpdate",
                        value: function(t) {
                            var n = this;
                            d.events.on(m.get(this), function(e) {
                                t.call(n, e)
                            })
                        }
                    }, {
                        key: "start",
                        value: function(e) {
                            this._invoke(e, "startDownload")
                        }
                    }, {
                        key: "pause",
                        value: function(e) {
                            f.call(this, e, "pauseDownload")
                        }
                    }, {
                        key: "resume",
                        value: function(e) {
                            f.call(this, e, "resumeDownload")
                        }
                    }, {
                        key: "cancel",
                        value: function(e) {
                            f.call(this, e, "cancelDownload")
                        }
                    }, {
                        key: "install",
                        value: function(e) {
                            f.call(this, e, "installApp")
                        }
                    }, {
                        key: "queryState",
                        value: function(e) {
                            this._invoke(e, "queryStatus")
                        }
                    }, {
                        key: "_invoke",
                        value: function(e, t) {
                            var n = this;
                            return e.onProgressUpdate = (0,
                            l.createCallback)(function(e) {
                                d.events.emit(m.get(n), e)
                            }, c.jsonParse),
                            f.call(this, e, t),
                            this
                        }
                    }]) && a(r.prototype, i),
                    s && a(r, s),
                    p);
                    function p(e) {
                        !function(e, t) {
                            if (!(e instanceof p))
                                throw new TypeError("Cannot call a class as a function")
                        }(this),
                        this._reqId = "InstallAdAppTask" + g++,
                        this.url = "",
                        this.appId = "",
                        this.name = "",
                        m.set(this, this._reqId + "__progress")
                    }
                    function f(e, t) {
                        var n = {
                            url: this.url,
                            appId: this.appId,
                            name: this.name,
                            type: t
                        }
                          , a = o(n, e)
                          , r = (0,
                        l.createLevel2Promise)(a, c.jsonParse)
                          , i = (0,
                        l.createInvokePromise)(u.boxjsNative, "installApp4Ad", a);
                        (0,
                        l.executeCallback)({
                            promise: [i, r],
                            apiName: "installApp4Ad"
                        }, a)
                    }
                    t.createAdAppInstallManager = function(e) {
                        return new v(0 < arguments.length && void 0 !== e ? e : {})
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getAppInfo = void 0;
                    var a, r = n(19), i = (a = n(71)) && a.__esModule ? a : {
                        default: a
                    }, o = n(7);
                    t.getAppInfo = function() {
                        return "undefined" != typeof masterManager ? Promise.resolve(r.boxjs.data.get({
                            name: "swan-appInfoSync"
                        })) : new Promise(function(t, e) {
                            o.events.once("responseGetAppInfo", function(e) {
                                t(e.value.appInfo)
                            }),
                            (0,
                            i.default)("master", {
                                type: "getAppInfo"
                            })
                        }
                        )
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = n(16)
                      , r = n(1)
                      , i = n(33);
                    t.default = (0,
                    a.isAndroid)() ? i.andrSetData : function(e, t) {
                        var n = r.hasNoGlobal ? window.webkit.messageHandlers : _naSwan;
                        return "BBAMNPPostMessageBridge"in n ? n.BBAMNPPostMessageBridge.postMessage({
                            webviewid: e + "",
                            message: escape(JSON.stringify(t))
                        }) : n.bridge.postMessage({
                            webviewid: e + "",
                            message: escape(JSON.stringify(t))
                        })
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.adRequest = void 0;
                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    var r, i, o, s, u = n(10), c = (r = n(0)) && r.__esModule ? r : {
                        default: r
                    }, l = n(3), d = n(5), m = n(4), g = n(1), v = n(7), p = 1, f = (i = h,
                    (o = [{
                        key: "abort",
                        value: function() {
                            function t() {
                                (0,
                                l.executeCallback)({
                                    apiName: "cancelRequest",
                                    promise: (0,
                                    l.createInvokePromise)(u.boxjsNative, "cancelRequest", e._adRequestId)
                                })
                            }
                            var e = this;
                            this._adRequestState ? t() : v.events.once(this._adReqId, function(e) {
                                t()
                            })
                        }
                    }]) && a(i.prototype, o),
                    s && a(i, s),
                    h);
                    function h() {
                        !function(e, t) {
                            if (!(e instanceof h))
                                throw new TypeError("Cannot call a class as a function")
                        }(this),
                        this._adRequestState = !1,
                        this._adReqId = "adRequestTask__" + p++
                    }
                    function y(e) {
                        return e = (0,
                        m.resNeedDecode)(e),
                        c.default.isObject(e.data.data) && (e.data.data = g.globalNative.btoa(e.data.data)),
                        e.data.data = (0,
                        m.base64ToArrayBuffer)(e.data.data),
                        e
                    }
                    t.adRequest = function(e) {
                        var n = 0 < arguments.length && void 0 !== e ? e : {};
                        if ((0,
                        d.validateUrl)(n.url) && (0,
                        d.checkDomain)(n.url)) {
                            var t = new f
                              , a = (0,
                            d.getParamType)(n.header);
                            "Undefined" !== a && "Object" !== a && (n.header = {}),
                            n.header = (0,
                            d.convertObjectValueToString)(n.header),
                            n.header = Object.keys(n.header).reduce(function(e, t) {
                                return "content-type" === t.toLowerCase() ? e["content-type"] = n.header[t] : e[t] = n.header[t],
                                e
                            }, {}),
                            "String" === (0,
                            d.getParamType)(n.method) ? n.method = n.method.toUpperCase() : n.method = "GET";
                            var r = n.responseType
                              , i = r && "arraybuffer" === r.toLowerCase() ? y : m.resNeedDecode
                              , o = (0,
                            l.createLevel2Promise)(n, i)
                              , s = (0,
                            l.createInvokePromise)(u.boxjsNative, "adRequest", n).then(function(e) {
                                t._adRequestId = e,
                                t._adRequestState = !0,
                                v.events.emit(t._adReqId)
                            });
                            return (0,
                            l.executeCallback)({
                                promise: [s, o],
                                apiName: "adRequest"
                            }, n),
                            t
                        }
                        (0,
                        l.callFailAndComplete)(n, "AdRequest", 'parameter error: invalid url "' + n.url + '"')
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.hostBoxjsMethods = void 0;
                    var a = n(32)
                      , r = n(20)
                      , i = n(2)
                      , o = n(10);
                    t.hostBoxjsMethods = Object.keys(a.boxjsMap).reduce(function(e, t) {
                        return i.hostRegx.test(t) && (e[t] = function(e) {
                            return (0,
                            r.invokeMaker)(o.boxjsNative, t, {}, !0, e)
                        }
                        ),
                        e
                    }, {})
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.openShareFilter = void 0;
                    var g = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                      , v = a(n(0))
                      , p = a(n(24))
                      , f = n(5)
                      , h = n(23)
                      , y = n(15)
                      , b = n(1)
                      , w = n(9);
                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function I(e) {
                        var t = []
                          , n = (0,
                        p.default)().appid;
                        return n && t.push("appid=" + n),
                        e.activityChannel && t.push("activity_channel=" + e.activityChannel),
                        e.path && t.push("url=" + encodeURIComponent(e.path)),
                        "https://mbd.baidu.com/ma/landingpage?t=smartapp_share&" + t.join("&")
                    }
                    t.openShareFilter = function(t) {
                        var e, n = (0,
                        p.default)(), a = 0;
                        if (!t.title) {
                            var r = masterManager.navigator.history.getTopSlavePage().customPageInfo || {};
                            t.title = r.title || n.appname || "智能小程序",
                            a = r.title ? 1 : n.appname ? 2 : 3
                        }
                        e = {
                            actionId: "1149",
                            min_v: "16789504",
                            value: {
                                from: "swan",
                                type: "share_settingtype",
                                ext: {
                                    setting_type: a,
                                    appkey: (0,
                                    p.default)().appid,
                                    apiName: "openShare"
                                }
                            }
                        },
                        (0,
                        w.ubcLog)(e),
                        t.content || (t.content = n.appDesc || "智能小程序，连接美好生活"),
                        t.path = t.path || (0,
                        f.getCurrentAccessUri)();
                        var i, o, s, u = t.imageUrl || n.iconUrl || "https://b.bdstatic.com/searchbox/icms/searchbox/img/LOGO300x300.jpg", c = function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : "url";
                            return v.default.isAndroid && (t = {
                                audio: "2",
                                image: "3",
                                video: "4",
                                url: "1"
                            }[t]),
                            t
                        }(t.type), l = (o = u,
                        s = {
                            url: "/searchbox?action=ugc&cmd=177",
                            publishType: "5",
                            placeholder: "说说你的想法...",
                            topic_pageurl: "baiduboxapp://v1/easybrowse/open?url=http%3A%2F%2Fmbd.baidu.com%2Fwebpage%3Ftype%3Dtopic%26action%3Dsearch&style=%7b%22menumode%22%3a%222%22%2c%22showtoolbar%22%3a%221%22%7d&newbrowser=1",
                            at_pageurl: "baiduboxapp://v1/easybrowse/open?newbrowser=1&style=%7B%22menumode%22%3A%222%22%2C%22showtoolbar%22%3A%221%22%7D&url=https%3A%2F%2Fmbd.baidu.com%2Fwebpage%3Ftype%3Dtopic%26action%3Dat",
                            reference_dt: {
                                url: I(i = t),
                                title: i.title || (0,
                                p.default)().appname,
                                ref_type: "imagetext",
                                account_type: "swan",
                                thumbpic: o,
                                channel: "swan_details_share_collect_comment "
                            },
                            source_from: "swan",
                            ext_info: {
                                share_type: "forward"
                            }
                        },
                        v.default.isIOS && (s.theme_mode = "light"),
                        encodeURIComponent(JSON.stringify(s))), d = (0,
                        h.getParamsCBName)();
                        b.global[d] = function(e) {
                            (0,
                            y.executeByTryCatch)(t.success, "at api openShare success callback function", e),
                            (0,
                            y.executeByTryCatch)(t.complete, "at api openShare complete callback function", e)
                        }
                        ;
                        var m = {
                            defaultPannel: v.default.isAndroid ? ["ugc_forward", "weixin_friend", "weixin_timeline", "baiduhi", "sinaweibo"] : ["ugc_forward", "weixin_friend", "weixin_timeline", "qqfriend", "qqdenglu", "baiduhi", "sinaweibo", "screenshot", "others"],
                            pannel: t.pannel || [],
                            linkUrl: I(t),
                            type: c,
                            imageUrl: u,
                            categoryData: {
                                ugc_scheme: "baiduboxapp://v6/ugc/publish?upgrade=0&params=" + l + "&callback=" + d
                            },
                            source: "swan",
                            snapshot: !0,
                            forceLightTheme: !0
                        };
                        return g({}, t, m)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.swanGameMap = void 0;
                    var a = i(n(76))
                      , r = i(n(78));
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var o = {
                        showShareMenu: {},
                        hideShareMenu: {},
                        shareAppMessage: {
                            proxyHandler: a.default.shareAppMessage.bind(a.default)
                        },
                        onShareAppMessage: {
                            proxyHandler: a.default.onShareAppMessage.bind(a.default)
                        },
                        offShareAppMessage: {
                            proxyHandler: a.default.offShareAppMessage.bind(a.default)
                        },
                        openAppByURL: r.default
                    };
                    t.swanGameMap = o
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var p = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    ;
                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    var r, i, o, s, u = n(19), c = n(12), l = n(77), d = n(3), m = n(4), f = n(1), g = n(5), h = (r = n(0)) && r.__esModule ? r : {
                        default: r
                    }, v = new l.QueueSet, y = {}, b = "share_app_message_" + Date.now(), w = "share_app_sucess_" + Date.now(), I = "share_app_fail_" + Date.now(), A = (i = S,
                    (o = [{
                        key: "initAppInfo",
                        value: function() {
                            y.appid || (y = u.boxjs.data.get({
                                name: "swan-appInfoSync"
                            }))
                        }
                    }, {
                        key: "filter",
                        value: function(t) {
                            var n = this
                              , e = "https://b.bdstatic.com/searchbox/icms/searchbox/img/LOGO300x300.jpg";
                            f.global[w] = function(e) {
                                n.eventEmitter.trigger("shareSuccess", {
                                    ext: e || ""
                                }),
                                t.success && t.success(e),
                                t.complete && t.complete()
                            }
                            ,
                            f.global[I] = function(e) {
                                n.eventEmitter.trigger("shareFail", {
                                    ext: e || ""
                                }),
                                t.fail && t.fail(e),
                                t.complete && t.complete(e)
                            }
                            ;
                            var a = ["activity_id=71"];
                            this.initAppInfo(),
                            y.appid && a.push("appid=" + y.appid);
                            var r = t.query || "";
                            if (r) {
                                var i = {};
                                try {
                                    for (var o = r.split("&"), s = 0; s < o.length; s++)
                                        i[o[s].split("=")[0]] = o[s].split("=")[1];
                                    r = JSON.stringify(i).replace("{", "").replace(/}$/, "")
                                } catch (e) {
                                    var u = {
                                        errMsg: "Please check the the legality of opts.query. "
                                    };
                                    t.fail && t.fail(u),
                                    t.complete && t.complete(u)
                                }
                                a.push("url=?minigame_query={" + encodeURIComponent(r) + "}")
                            }
                            var c = "https://mbd.baidu.com/ma/landingpage?t=smartapp_share&" + a.join("&")
                              , l = this.checkImageUrl(t.imageUrl || "")
                              , d = this.checkImageUrl(t.iconUrl || "")
                              , m = d && t.iconUrl || l && t.imageUrl || e;
                            !l && t.imageUrl && delete t.imageUrl,
                            !d && t.iconUrl && delete t.iconUrl;
                            var g = t.type ? t.type : "url"
                              , v = {
                                defaultPannel: h.default.isAndroid ? ["ugc_forward", "weixin_friend", "weixin_timeline", "baiduhi", "sinaweibo"] : ["ugc_forward", "weixin_friend", "weixin_timeline", "qqfriend", "qqdenglu", "baiduhi", "sinaweibo", "screenshot", "others"],
                                pannel: t.pannel || [],
                                linkUrl: c,
                                type: g,
                                imageUrl: m,
                                categoryData: {},
                                source: "swan-game",
                                shareSuccessCB: w,
                                shareErrorCB: I,
                                successCallback: w,
                                errorCallback: I,
                                snapshot: !0,
                                forceLightTheme: !0
                            };
                            return p({
                                title: y.appname || "百度小游戏",
                                content: y.appDesc || "世界很复杂，百度更懂你",
                                iconUrl: e,
                                imageUrl: e
                            }, t, v)
                        }
                    }, {
                        key: "shareAppMessage",
                        value: function(e, t) {
                            var n = this.filter(e);
                            this.eventEmitter = (0,
                            g.getEventEmitterHandle)(),
                            this.eventEmitter.trigger("shareAction", {
                                from: t || "button",
                                title: n.title ? n.title : ""
                            });
                            var a = (0,
                            d.createLevel2Promise)(n, m.jsonParse)
                              , r = [(0,
                            d.createInvokePromise)(c.swanNative, "openShare", n), a];
                            (0,
                            d.executeCallback)({
                                openShare: "openShare",
                                promise: r
                            }, n)
                        }
                    }, {
                        key: "onShareAppMessage",
                        value: function(e) {
                            v.pushTo(b, e)
                        }
                    }, {
                        key: "offShareAppMessage",
                        value: function(e) {
                            for (var t = v.get(b).queue, n = t.length - 1; 0 <= n; n--)
                                t[n] === e && t.splice(n, 1)
                        }
                    }, {
                        key: "checkImageUrl",
                        value: function(e) {
                            return e.match("http://") || e.match("https://")
                        }
                    }]) && a(i.prototype, o),
                    s && a(i, s),
                    S);
                    function S() {
                        var e = this;
                        !function(e, t) {
                            if (!(e instanceof S))
                                throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var a = {};
                        this.initAppInfo(),
                        f.globalNative.addEventListener && f.globalNative.addEventListener("sharebtn", function(n) {
                            v.get(b).queue.forEach(function(e) {
                                var t = e(n);
                                t && (a = t)
                            }),
                            e.shareAppMessage(a, "menu")
                        })
                    }
                    t.default = new A
                }
                , function(e, t, n) {
                    window,
                    e.exports = function(n) {
                        var a = {};
                        function r(e) {
                            if (a[e])
                                return a[e].exports;
                            var t = a[e] = {
                                i: e,
                                l: !1,
                                exports: {}
                            };
                            return n[e].call(t.exports, t, t.exports, r),
                            t.l = !0,
                            t.exports
                        }
                        return r.m = n,
                        r.c = a,
                        r.d = function(e, t, n) {
                            r.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: n
                            })
                        }
                        ,
                        r.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }
                        ,
                        r.t = function(t, e) {
                            if (1 & e && (t = r(t)),
                            8 & e)
                                return t;
                            if (4 & e && "object" == (void 0 === t ? "undefined" : j(t)) && t && t.__esModule)
                                return t;
                            var n = Object.create(null);
                            if (r.r(n),
                            Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: t
                            }),
                            2 & e && "string" != typeof t)
                                for (var a in t)
                                    r.d(n, a, function(e) {
                                        return t[e]
                                    }
                                    .bind(null, a));
                            return n
                        }
                        ,
                        r.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            }
                            : function() {
                                return e
                            }
                            ;
                            return r.d(t, "a", t),
                            t
                        }
                        ,
                        r.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }
                        ,
                        r.p = "",
                        r(r.s = 2)
                    }([function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                            function a(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1,
                                    a.configurable = !0,
                                    "value"in a && (a.writable = !0),
                                    Object.defineProperty(e, a.key, a)
                                }
                            }
                            return function(e, t, n) {
                                return t && a(e.prototype, t),
                                n && a(e, n),
                                e
                            }
                        }()
                          , r = function() {
                            function n() {
                                !function(e, t) {
                                    if (!(e instanceof n))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this),
                                this.queue = []
                            }
                            return a(n, [{
                                key: "push",
                                value: function(e) {
                                    this.queue.push(e)
                                }
                            }, {
                                key: "getQueue",
                                value: function() {
                                    return this.queue
                                }
                            }, {
                                key: "pop",
                                value: function() {
                                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, t = []; e--; )
                                        t.push(this.queue.pop());
                                    return t
                                }
                            }, {
                                key: "del",
                                value: function(t) {
                                    this.queue = this.queue.filter(function(e) {
                                        return e.handler !== t
                                    })
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    this.queue = []
                                }
                            }]),
                            n
                        }();
                        t.default = r
                    }
                    , function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                        t.default = void 0;
                        var a, r = function() {
                            function a(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1,
                                    a.configurable = !0,
                                    "value"in a && (a.writable = !0),
                                    Object.defineProperty(e, a.key, a)
                                }
                            }
                            return function(e, t, n) {
                                return t && a(e.prototype, t),
                                n && a(e, n),
                                e
                            }
                        }(), i = (a = n(0)) && a.__esModule ? a : {
                            default: a
                        }, o = function() {
                            function n() {
                                !function(e, t) {
                                    if (!(e instanceof n))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this),
                                this.queueSet = {}
                            }
                            return r(n, [{
                                key: "get",
                                value: function(e) {
                                    return this.queueSet[e] || (this.queueSet[e] = new i.default),
                                    this.queueSet[e]
                                }
                            }, {
                                key: "pushTo",
                                value: function(e, t) {
                                    this.get(e).push(t)
                                }
                            }, {
                                key: "has",
                                value: function(e) {
                                    return !!this.queueSet[e]
                                }
                            }, {
                                key: "del",
                                value: function(e, n) {
                                    var a = this;
                                    n ? "*" === e ? Object.keys(this.queueSet).forEach(function(e) {
                                        var t = a.queueSet[e];
                                        t && t.del(n)
                                    }) : this.queueSet[e].del(n) : this.queueSet[e].clear()
                                }
                            }]),
                            n
                        }();
                        t.default = o
                    }
                    , function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                        t.QueueSet = t.default = void 0;
                        var a, i = function() {
                            function a(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1,
                                    a.configurable = !0,
                                    "value"in a && (a.writable = !0),
                                    Object.defineProperty(e, a.key, a)
                                }
                            }
                            return function(e, t, n) {
                                return t && a(e.prototype, t),
                                n && a(e, n),
                                e
                            }
                        }(), o = (a = n(1)) && a.__esModule ? a : {
                            default: a
                        }, r = function() {
                            function r() {
                                !function(e, t) {
                                    if (!(e instanceof r))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this),
                                this.handlerQueueSet = new o.default,
                                this.messageQueueSet = new o.default
                            }
                            return i(r, [{
                                key: "fireMessage",
                                value: function(t) {
                                    var n = this;
                                    return t && t.type && this.handlerQueueSet.get(t.type) && (this.messageQueueSet.pushTo(t.type, t),
                                    this.handlerQueueSet.get(t.type).getQueue().forEach(function(e) {
                                        n.handlerWrapper(e, t.type, t)
                                    }),
                                    this.handlerQueueSet.get("*").getQueue().forEach(function(e) {
                                        n.handlerWrapper(e, "*", t)
                                    })),
                                    this
                                }
                            }, {
                                key: "onMessage",
                                value: function(e, t) {
                                    var n = this
                                      , a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                                    return "[object Array]" === Object.prototype.toString.call(e) ? e.forEach(function(e) {
                                        return n.onMessage(e, t, a)
                                    }) : (this.handlerQueueSet.pushTo(e, {
                                        handler: t,
                                        once: a.once
                                    }),
                                    !0 === a.listenPreviousEvent && this.messageQueueSet.has(e) && this.handlerWrapper({
                                        handler: t,
                                        once: a.once
                                    }, e, this.messageQueueSet.get(e).getQueue())),
                                    this
                                }
                            }, {
                                key: "delHandler",
                                value: function(e, t) {
                                    return this.handlerQueueSet.del(e, t),
                                    this
                                }
                            }, {
                                key: "handlerWrapper",
                                value: function(e, t, n) {
                                    var a = e.handler
                                      , r = e.once;
                                    return !!a && (a(n),
                                    r && this.handlerQueueSet.del(t, a),
                                    !0)
                                }
                            }], [{
                                key: "merge",
                                value: function() {
                                    for (var t = new r, e = arguments.length, n = Array(e), a = 0; a < e; a++)
                                        n[a] = arguments[a];
                                    return [].concat(n).forEach(function(e) {
                                        e.onMessage("*", function(e) {
                                            return t.fireMessage(e)
                                        })
                                    }),
                                    t
                                }
                            }]),
                            r
                        }();
                        t.default = r,
                        t.QueueSet = o.default
                    }
                    ])
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = n(19)
                      , r = n(3)
                      , i = n(11)
                      , o = n(5)
                      , s = n(4);
                    t.default = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                          , e = t.url;
                        "String" === (0,
                        o.getParamType)(e) ? a.boxjs.ui.open({
                            name: "swan-app",
                            data: {
                                open: encodeURIComponent(e),
                                download: {},
                                isNeedDownload: !1,
                                invokAnyWay: !0,
                                callback: function(e) {
                                    0 == +(0,
                                    s.jsonParse)(e).status ? t.success && t.success((0,
                                    i.callbackResHandler)(e)) : t.fail && t.fail((0,
                                    i.callbackResHandler)(e)),
                                    t.complete && t.complete((0,
                                    i.callbackResHandler)(e))
                                }
                            }
                        }).catch(function(e) {
                            t.fail && t.fail((0,
                            i.callbackResHandler)(e)),
                            t.complete && t.complete((0,
                            i.callbackResHandler)(e))
                        }) : (0,
                        r.callFailAndComplete)(t, "openAppByURL", 'parameter error: invalid url "' + t.url + '"')
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getLaunchOptionsSync = function(e) {
                        var t = e.data.get({
                            name: "swan-appInfoSync"
                        })
                          , n = t.appLaunchScheme || ""
                          , a = {};
                        if (0 <= (n && n.indexOf("minigame_query")))
                            try {
                                n = decodeURIComponent(n);
                                var r = /(?:minigame_query\s?=\s?[{])([^>]*?)(?:}&)/g.exec(n)[1];
                                a = JSON.parse("{" + r + "}")
                            } catch (e) {}
                        return {
                            scene: isNaN(t.scene) ? -1 : parseInt(t.scene, 10),
                            query: a,
                            referrerInfo: {
                                appId: t.srcAppId || "",
                                extraData: t.extraData || {}
                            }
                        }
                    }
                }
                ],
                r.c = a,
                r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }
                ,
                r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                r.t = function(t, e) {
                    if (1 & e && (t = r(t)),
                    8 & e)
                        return t;
                    if (4 & e && "object" == (void 0 === t ? "undefined" : j(t)) && t && t.__esModule)
                        return t;
                    var n = Object.create(null);
                    if (r.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && "string" != typeof t)
                        for (var a in t)
                            r.d(n, a, function(e) {
                                return t[e]
                            }
                            .bind(null, a));
                    return n
                }
                ,
                r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return r.d(t, "a", t),
                    t
                }
                ,
                r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                r.p = "",
                r(r.s = 35);
                function r(e) {
                    if (a[e])
                        return a[e].exports;
                    var t = a[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return n[e].call(t.exports, t, t.exports, r),
                    t.l = !0,
                    t.exports
                }
                var n, a
            }
            ,
            "object" == j(i) && "object" == j(e) ? e.exports = r() : (n = [],
            void 0 === (a = "function" == typeof (t = r) ? t.apply(i, n) : t) || (e.exports = a))
        }
        ).call(this, t(15)(e))
    }
    , , function(e, t, n) {
        "use strict";
        n.r(t);
        var a = {};
        n.r(a),
        n.d(a, "removeUserCloudStorage", function() {
            return ct
        }),
        n.d(a, "setUserCloudStorage", function() {
            return lt
        }),
        n.d(a, "loadLocalScript", function() {
            return dt
        }),
        n.d(a, "setPreferredFramesPerSecond", function() {
            return y.f
        }),
        n.d(a, "createCanvas", function() {
            return b.a
        }),
        n.d(a, "getOnscreenCanvas", function() {
            return b.b
        }),
        n.d(a, "onTouchStart", function() {
            return w.h
        }),
        n.d(a, "offTouchStart", function() {
            return w.d
        }),
        n.d(a, "onTouchMove", function() {
            return w.g
        }),
        n.d(a, "offTouchMove", function() {
            return w.c
        }),
        n.d(a, "onTouchEnd", function() {
            return w.f
        }),
        n.d(a, "offTouchEnd", function() {
            return w.b
        }),
        n.d(a, "onTouchCancel", function() {
            return w.e
        }),
        n.d(a, "offTouchCancel", function() {
            return w.a
        }),
        n.d(a, "authorizeEval", function() {
            return st.a
        }),
        n.d(a, "onShow", function() {
            return c
        }),
        n.d(a, "onHide", function() {
            return l
        }),
        n.d(a, "offShow", function() {
            return d
        }),
        n.d(a, "offHide", function() {
            return m
        }),
        n.d(a, "onDisplay", function() {
            return g
        }),
        n.d(a, "offDisplay", function() {
            return v
        }),
        n.d(a, "exit", function() {
            return f
        }),
        n.d(a, "exitMiniProgram", function() {
            return h
        }),
        n.d(a, "Image", function() {
            return I.a
        }),
        n.d(a, "getNativeImage", function() {
            return I.c
        }),
        n.d(a, "createImage", function() {
            return I.b
        }),
        n.d(a, "getFileSystemManager", function() {
            return A
        }),
        n.d(a, "getPerformance", function() {
            return k
        }),
        n.d(a, "createInnerAudioContext", function() {
            return x
        }),
        n.d(a, "setInnerAudioOption", function() {
            return E
        }),
        n.d(a, "checkIsUserAdvisedToRest", function() {
            return N
        }),
        n.d(a, "triggerGC", function() {
            return R
        }),
        n.d(a, "loadSubpackage", function() {
            return L
        }),
        n.d(a, "getOpenDataContext", function() {
            return B
        }),
        n.d(a, "createUserInfoButton", function() {
            return F
        }),
        n.d(a, "showKeyboard", function() {
            return q
        }),
        n.d(a, "hideKeyboard", function() {
            return U
        }),
        n.d(a, "updateKeyboard", function() {
            return V
        }),
        n.d(a, "onKeyboardInput", function() {
            return J
        }),
        n.d(a, "offKeyboardInput", function() {
            return G
        }),
        n.d(a, "onKeyboardConfirm", function() {
            return H
        }),
        n.d(a, "offKeyboardConfirm", function() {
            return W
        }),
        n.d(a, "onKeyboardComplete", function() {
            return z
        }),
        n.d(a, "offKeyboardComplete", function() {
            return K
        }),
        n.d(a, "createRewardedVideoAd", function() {
            return Q
        }),
        n.d(a, "createBannerAd", function() {
            return $
        }),
        n.d(a, "getStorage", function() {
            return Z
        }),
        n.d(a, "getStorageSync", function() {
            return X
        }),
        n.d(a, "setStorage", function() {
            return Y
        }),
        n.d(a, "setStorageSync", function() {
            return ee
        }),
        n.d(a, "removeStorage", function() {
            return te
        }),
        n.d(a, "removeStorageSync", function() {
            return ne
        }),
        n.d(a, "clearStorage", function() {
            return ae
        }),
        n.d(a, "clearStorageSync", function() {
            return re
        }),
        n.d(a, "getStorageInfo", function() {
            return ie
        }),
        n.d(a, "getStorageInfoSync", function() {
            return oe
        }),
        n.d(a, "onError", function() {
            return de
        }),
        n.d(a, "offError", function() {
            return me
        }),
        n.d(a, "onAudioInterruptionBegin", function() {
            return ge
        }),
        n.d(a, "offAudioInterruptionBegin", function() {
            return ve
        }),
        n.d(a, "onAudioInterruptionEnd", function() {
            return pe
        }),
        n.d(a, "offAudioInterruptionEnd", function() {
            return fe
        }),
        n.d(a, "loadFont", function() {
            return he
        }),
        n.d(a, "getTextLineHeight", function() {
            return ye
        }),
        n.d(a, "getUpdateManager", function() {
            return Ae
        }),
        n.d(a, "setEnableDebug", function() {
            return Se
        }),
        n.d(a, "connectSocket", function() {
            return Pe
        }),
        n.d(a, "request", function() {
            return Ee
        }),
        n.d(a, "downloadFile", function() {
            return Ne
        }),
        n.d(a, "uploadFile", function() {
            return Re
        }),
        n.d(a, "openCustomerServiceConversation", function() {
            return Le
        }),
        n.d(a, "getVideoRecorderManager", function() {
            return Be
        }),
        n.d(a, "shareVideo", function() {
            return qe
        }),
        n.d(a, "createRecommendationButton", function() {
            return Ue
        }),
        n.d(a, "createWorker", function() {
            return Ve
        }),
        n.d(a, "getDebugInfo", function() {
            return S
        }),
        n.d(a, "getBindingTestMethods", function() {
            return Ge
        }),
        n.d(a, "reload", function() {
            return He
        }),
        n.d(a, "onDeviceOrientationChange", function() {
            return We
        }),
        n.d(a, "offDeviceOrientationChange", function() {
            return ze
        }),
        n.d(a, "showAddToDesktopGuide", function() {
            return Ke
        }),
        n.d(a, "requestXRSession", function() {
            return Xe
        }),
        n.d(a, "detectFacesFromImage", function() {
            return et
        }),
        n.d(a, "supportsXRSession", function() {
            return Ye
        }),
        n.d(a, "getWebViewManager", function() {
            return at
        }),
        n.d(a, "menuItemCtrl", function() {
            return rt
        }),
        n.d(a, "getAntiAddiction", function() {
            return ot
        });
        var o = n(0)
          , r = (n(9),
        n(11))
          , i = n.n(r)
          , s = n(1)
          , u = Object(s.b)();
        function c(e) {
            u.on("appshow", e)
        }
        function l(e) {
            u.on("apphide", e)
        }
        function d(e) {
            u.off("appshow", e)
        }
        function m(e) {
            u.off("apphide", e)
        }
        function g(e) {
            u.on("appAttach", e)
        }
        function v(e) {
            u.off("appAttach", e)
        }
        function p(e) {
            null == e && (e = {}),
            e.success || (e.success = function() {}
            ),
            e.fail || (e.fail = function() {}
            ),
            e.complete || (e.complete = function() {}
            ),
            o.a.exit(e)
        }
        function f(e) {
            p(e)
        }
        function h(e) {
            p(e)
        }
        var y = n(3)
          , b = n(6)
          , w = n(2)
          , I = n(5)
          , A = o.a.getFileSystemManager;
        function S() {
            return "function" != typeof o.a.getEnvVariables ? null : {
                isDebugSdk: JSON.parse(o.a.getEnvVariables()).isDebugSdk
            }
        }
        var P = S();
        function k() {
            if (!P || !P.isDebugSdk) {
                if (!o.a.getPerformance)
                    return {
                        now: function() {
                            return o.a.performanceNow()
                        }
                    };
                var e = o.a.getPerformance();
                return {
                    now: function() {
                        return e.now()
                    }
                }
            }
            var n = o.a.getPerformance();
            return !n.getMemory && n.getMemoryInfo && (n.getMemory = function(t) {
                if (!t)
                    return n.getMemoryInfo().summaryTotalPss;
                n.getMemoryInfo(function(e) {
                    t(e.summaryTotalPss)
                })
            }
            ),
            !n.getGraphicsMemory && n.getMemoryInfo && (n.getGraphicsMemory = function(t) {
                if (!t)
                    return n.getMemoryInfo().summaryGraphics;
                n.getMemoryInfo(function(e) {
                    t(e.summaryGraphics)
                })
            }
            ),
            n
        }
        var _ = n(4)
          , O = function() {
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && a(e.prototype, t),
                n && a(e, n),
                e
            }
        }();
        var j = ["onCanplay", "offCanplay", "onEnded", "offEnded", "onError", "offError", "onPause", "offPause", "onPlay", "offPlay", "onSeeked", "offSeeked", "onSeeking", "offSeeking", "onStop", "offStop", "onTimeUpdate", "offTimeUpdate", "offWaiting", "onWaiting"];
        function C(e) {
            this.name = "AudioErrorException",
            this.message = e
        }
        var M = new _.a
          , T = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                M.set(this, o.a.createInnerAudioContext())
            }
            return O(e, [{
                key: "play",
                value: function() {
                    M.get(this).play()
                }
            }, {
                key: "pause",
                value: function() {
                    M.get(this).pause()
                }
            }, {
                key: "stop",
                value: function() {
                    M.get(this).stop()
                }
            }, {
                key: "seek",
                value: function(e) {
                    M.get(this).seek(e)
                }
            }, {
                key: "destroy",
                value: function() {
                    M.get(this).destroy()
                }
            }, {
                key: "setDataBuffer",
                value: function(e) {
                    M.get(this).setDataBuffer(e)
                }
            }, {
                key: "src",
                get: function() {
                    return M.get(this).src
                },
                set: function(e) {
                    M.get(this).src = e
                }
            }, {
                key: "startTime",
                get: function() {
                    return M.get(this).startTime
                },
                set: function(e) {
                    M.get(this).startTime = e
                }
            }, {
                key: "autoplay",
                get: function() {
                    return M.get(this).autoplay
                },
                set: function(e) {
                    M.get(this).autoplay = e
                }
            }, {
                key: "loop",
                get: function() {
                    return M.get(this).loop
                },
                set: function(e) {
                    M.get(this).loop = e
                }
            }, {
                key: "obeyMuteSwitch",
                get: function() {
                    return M.get(this).obeyMuteSwitch
                },
                set: function(e) {
                    M.get(this).obeyMuteSwitch = e
                }
            }, {
                key: "volume",
                get: function() {
                    return M.get(this).volume
                },
                set: function(e) {
                    M.get(this).volume = e
                }
            }, {
                key: "duration",
                get: function() {
                    return M.get(this).duration
                },
                set: function(e) {}
            }, {
                key: "currentTime",
                get: function() {
                    return M.get(this).currentTime
                },
                set: function(e) {}
            }, {
                key: "paused",
                get: function() {
                    return M.get(this).paused
                },
                set: function(e) {}
            }, {
                key: "buffered",
                get: function() {
                    return M.get(this).buffered
                },
                set: function(e) {}
            }]),
            e
        }();
        function x() {
            var e = new T
              , r = new s.a;
            return j.forEach(function(t) {
                var n = t.replace(/^o(n|ff)/, "").toLocaleLowerCase()
                  , a = /^on/.test(t);
                e[t] = function(e) {
                    if (a) {
                        if ("[object Function]" !== Object.prototype.toString.call(e))
                            throw new C("the " + e + " is not a function,\n                    " + t + " event required a function as argument");
                        r.on(n, e)
                    } else
                        0 === arguments.length || null == e ? r.off(n) : "[object Function]" !== Object.prototype.toString.call(e) || r.off(n, e)
                }
                ,
                a && M.get(e).addEventListener(n, function(e) {
                    r.trigger(n, e)
                })
            }),
            e
        }
        function E(e) {
            return o.a.setInnerAudioOption(e)
        }
        var N = o.a.checkIsUserAdvisedToRest
          , R = o.a.triggerGC;
        function L() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var a = o.a.loadSubpackage.apply(o.a, t);
            return a.onProgressUpdate || (a.onProgressUpdate = function(e) {
                a.addEventListener("progressupdate", e)
            }
            ),
            a
        }
        var D = void 0;
        function B() {
            if (!D) {
                var e = (D = o.a.getOpenDataContext()).canvas
                  , t = Object(b.c)(e);
                Object.defineProperty(D, "canvas", {
                    get: function() {
                        return t
                    },
                    set: function() {}
                })
            }
            return D
        }
        function F(e) {
            var t = o.a.createUserInfoButton(e);
            return t.onTap = function(e) {
                t.addEventListener("tap", e)
            }
            ,
            t.offTap = function(e) {
                t.removeEventListener("tap", e)
            }
            ,
            t
        }
        var q = o.a.showKeyboard
          , U = o.a.hideKeyboard
          , V = o.a.updateKeyboard;
        function J(e) {
            o.a.addEventListener("keyboardinput", e)
        }
        function G(e) {
            o.a.removeEventListener("keyboardinput", e)
        }
        function H(e) {
            o.a.addEventListener("keyboardconfirm", e)
        }
        function W(e) {
            o.a.removeEventListener("keyboardconfirm", e)
        }
        function z(e) {
            o.a.addEventListener("keyboardcomplete", e)
        }
        function K(e) {
            o.a.removeEventListener("keyboardcomplete", e)
        }
        function Q(e) {
            var n = o.a.createRewardedVideoAd(e);
            return n.load = function() {
                return new Promise(function(e, t) {
                    n.loadAd({
                        success: function() {
                            e()
                        },
                        fail: function(e) {
                            t(e)
                        }
                    })
                }
                )
            }
            ,
            n.show = function() {
                return new Promise(function(e, t) {
                    n.showAd({
                        success: function() {
                            e()
                        },
                        fail: function(e) {
                            t(e)
                        }
                    })
                }
                )
            }
            ,
            n.onLoad = function(e) {
                n.addEventListener("load", e)
            }
            ,
            n.offLoad = function(e) {
                n.removeEventListener("load", e)
            }
            ,
            n.onError = function(e) {
                n.addEventListener("error", e)
            }
            ,
            n.offError = function(e) {
                n.removeEventListener("error", e)
            }
            ,
            n.onClose = function(e) {
                n.addEventListener("close", e)
            }
            ,
            n.offClose = function(e) {
                n.removeEventListener("close", e)
            }
            ,
            n
        }
        function $(e) {
            var n = o.a.createBannerAd.call(this, e);
            return n.show = function() {
                return new Promise(function(e, t) {
                    n.showAd({
                        success: function() {
                            e()
                        },
                        fail: function(e) {
                            t(e)
                        }
                    })
                }
                )
            }
            ,
            n.onLoad = function(e) {
                n.addEventListener("load", e)
            }
            ,
            n.offLoad = function(e) {
                n.removeEventListener("load", e)
            }
            ,
            n.onError = function(e) {
                n.addEventListener("error", e)
            }
            ,
            n.offError = function(e) {
                n.removeEventListener("error", e)
            }
            ,
            n.onResize = function(e) {
                n.addEventListener("resize", e)
            }
            ,
            n.offResize = function(e) {
                n.removeEventListener("resize", e)
            }
            ,
            n
        }
        var Z = o.a.getStorage
          , X = o.a.getStorageSync
          , Y = o.a.setStorage
          , ee = o.a.setStorageSync
          , te = o.a.removeStorage
          , ne = o.a.removeStorageSync
          , ae = o.a.clearStorage
          , re = o.a.clearStorageSync
          , ie = o.a.getStorageInfo
          , oe = o.a.getStorageInfoSync
          , se = new s.a
          , ue = "audiointerruptionbegin"
          , ce = "audiointerruptionend"
          , le = "error";
        function de(e) {
            se.on(le, e)
        }
        function me(e) {
            se.off(le, e)
        }
        function ge(e) {
            se.on(ue, e)
        }
        function ve(e) {
            se.off(ue, e)
        }
        function pe(e) {
            se.on(ce, e)
        }
        function fe(e) {
            se.off(ce, e)
        }
        [le, ue, ce].forEach(function(t) {
            o.a.addEventListener(t, function(e) {
                se.trigger(t, e)
            })
        });
        var he = o.a.loadFont
          , ye = o.a.getTextLineHeight;
        var be = new s.a
          , we = function(e) {
            function n(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n);
                var t = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.name = "UpdateErrorException",
                t
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, Error),
            n
        }()
          , Ie = null;
        function Ae() {
            if (!Ie) {
                var t = {}
                  , e = o.a.getUpdateManager({
                    onCheckForUpdate: function(e) {
                        t.checkForUpdate = e,
                        be.isSilent("checkForUpdate") || be.trigger("checkForUpdate", e)
                    },
                    onUpdateReady: function() {
                        t.updateReady = "updateReady",
                        be.isSilent("updateReady") || be.trigger("updateReady")
                    },
                    onUpdateFailed: function() {
                        t.updateFailed = "updateFailed",
                        be.isSilent("updateFailed") || be.trigger("updateFailed")
                    }
                });
                Ie = {
                    onCheckForUpdate: function(e) {
                        if ("function" != typeof e)
                            throw new we("the " + e + " is not a function, onCheckForUpdate event required a function as argument");
                        be.on("checkForUpdate", e),
                        t.hasOwnProperty("checkForUpdate") && e(t.checkForUpdate)
                    },
                    onUpdateReady: function(e) {
                        if ("function" != typeof e)
                            throw new we("the " + e + " is not a function, onUpdateReady event required a function as argument");
                        be.on("updateReady", e),
                        t.hasOwnProperty("updateReady") && e()
                    },
                    onUpdateFailed: function(e) {
                        if ("function" != typeof e)
                            throw new we("the " + e + " is not a function, onUpdateFailed event required a function as argument");
                        be.on("updateFailed", e),
                        t.hasOwnProperty("updateFailed") && e()
                    },
                    applyUpdate: function() {
                        t.hasOwnProperty("updateReady") && e.applyUpdate()
                    }
                }
            }
            return Ie
        }
        var Se = o.a.setEnableDebug;
        function Pe(e) {
            var t = o.a.connectSocket(e);
            return t.onClose = function(e) {
                t.addEventListener("close", e)
            }
            ,
            t.onError = function(e) {
                t.addEventListener("error", e)
            }
            ,
            t.onMessage = function(e) {
                t.addEventListener("message", e)
            }
            ,
            t.onOpen = function(e) {
                t.addEventListener("open", e)
            }
            ,
            t
        }
        var ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , _e = function() {
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && a(e.prototype, t),
                n && a(e, n),
                e
            }
        }();
        var Oe = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
          , je = function(e) {
            return Object.prototype.toString.call(e)
        }
          , Ce = function(e) {
            return "[object String]" === je(e)
        }
          , Me = function(e) {
            return "[object Object]" === je(e)
        }
          , Te = function(e) {
            return /\[object [a-zA-z]{3,5}\d{1,2}[a-zA-Z]*Array\]/.test(je(e))
        }
          , xe = function() {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.config = Object.assign({}, e),
                this.validateAllprops()
            }
            return _e(t, [{
                key: "validateAllprops",
                value: function() {
                    this.checkUrl(),
                    this.checkHeader(),
                    this.checkDataType(),
                    this.checkMethod(),
                    this.checkResponseType(),
                    this.checkCallback(),
                    this.checkData()
                }
            }, {
                key: "checkUrl",
                value: function() {
                    Ce(this.config.url) && /^https?:.*$/.test(this.config.url) || this.isError("the url type is error, you should provide a http or https url address!")
                }
            }, {
                key: "checkHeader",
                value: function() {
                    if (Oe(this.config, "header")) {
                        if (!Me(this.config.header))
                            return;
                        var e = Object.assign({}, this.config.header);
                        for (var t in this.config.header = {},
                        e)
                            Oe(e, t) && (this.config.header[t.toLowerCase()] = e[t])
                    }
                }
            }, {
                key: "checkMethod",
                value: function() {
                    Ce(this.config.method) ? this.config.method = this.config.method.toUpperCase() : this.config.method = "GET"
                }
            }, {
                key: "checkDataType",
                value: function() {
                    Ce(this.config.dataType) ? this.config.dataType = this.config.dataType.toLowerCase() : this.config.dataType = "json"
                }
            }, {
                key: "checkResponseType",
                value: function() {
                    Ce(this.config.responseType) ? (this.config.responseType = this.config.responseType.toLowerCase(),
                    "arraybuffer" !== this.config.responseType && (this.config.responseType = "text")) : this.config.responseType = "text"
                }
            }, {
                key: "checkCallback",
                value: function() {
                    var n = this;
                    if (["success", "fail", "complete"].forEach(function(e) {
                        var t;
                        Oe(n.config, e) && (t = n.config[e],
                        "[object Function]" !== je(t)) && n.isError(e + " must be a Function!")
                    }),
                    Oe(this.config, "success")) {
                        var a = this.config.success;
                        this.config.success = function(e) {
                            var t = Object.assign({}, e);
                            t.data = n.convertResponseData(t.data),
                            a(t)
                        }
                    }
                    if (Oe(this.config, "complete")) {
                        var r = this.config.complete;
                        this.config.complete = function(e) {
                            var t = Object.assign({}, e);
                            Oe(t, "data") && (t.data = n.convertResponseData(t.data)),
                            r(t)
                        }
                    }
                }
            }, {
                key: "checkData",
                value: function() {
                    if (Oe(this.config, "data") && (e = this.config.data,
                    "[object ArrayBuffer]" !== je(e))) {
                        var e, t = this.config.data;
                        "GET" === this.config.method ? (Me(this.config.data) || Array.isArray(this.config.data) || Te(this.config.data)) && (t = this.queryStringify(this.config.data),
                        this.config.url += (0 <= this.config.url.indexOf("?") ? "&" : "?") + t) : Me(this.config.header) && "application/x-www-form-urlencoded" === this.config.header["content-type"] ? t = this.queryStringify(this.config.data) : "object" === ke(this.config.data) && (t = JSON.stringify(this.config.data)),
                        this.config.data = t
                    }
                }
            }, {
                key: "queryStringify",
                value: function(e) {
                    var t = [];
                    if (Me(e) || Array.isArray(e) || Te(e)) {
                        for (var n in e)
                            if (Oe(e, n))
                                if ("object" === ke(e[n])) {
                                    var a = JSON.stringify(e[n]);
                                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(a))
                                } else
                                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                        return t.join("&")
                    }
                    return e
                }
            }, {
                key: "convertResponseData",
                value: function(e) {
                    var t = e;
                    if (Ce(e) && "json" === this.config.dataType)
                        try {
                            t = JSON.parse(e)
                        } catch (e) {}
                    return t
                }
            }, {
                key: "isError",
                value: function(e) {
                    throw new Error(e)
                }
            }]),
            t
        }();
        function Ee(e) {
            if (!Me(e) || !Oe(e, "url"))
                throw new Error("Calling this method requires an object as a parameter. and must include url key");
            var t = new xe(e)
              , n = o.a.request(t.config);
            return n.onHeadersReceived = function(e) {
                n.addEventListener("headersReceived", e)
            }
            ,
            n.offHeadersReceived = function(e) {
                n.removeEventListener("headersReceived", e)
            }
            ,
            n
        }
        function Ne(e) {
            var t = o.a.downloadFile(e);
            return t.onProgressUpdate = function(e) {
                t.addEventListener("progressUpdate", e)
            }
            ,
            t.offProgressUpdate = function(e) {
                t.removeEventListener("progressUpdate", e)
            }
            ,
            t.onHeadersReceived = function(e) {
                t.addEventListener("headersReceived", e)
            }
            ,
            t.offHeadersReceived = function(e) {
                t.removeEventListener("headersReceived", e)
            }
            ,
            t
        }
        function Re(e) {
            var t = o.a.uploadFile(e);
            return t.onProgressUpdate = function(e) {
                t.addEventListener("progressUpdate", e)
            }
            ,
            t.offProgressUpdate = function(e) {
                t.removeEventListener("progressUpdate", e)
            }
            ,
            t.onHeadersReceived = function(e) {
                t.addEventListener("headersReceived", e)
            }
            ,
            t.offHeadersReceived = function(e) {
                t.removeEventListener("headersReceived", e)
            }
            ,
            t
        }
        var Le = o.a.openCustomerServiceConversation
          , De = ["onStart", "onResume", "onPause", "onStop", "onError"];
        function Be() {
            var n = o.a.getVideoRecorderManager();
            return De.forEach(function(e) {
                var t = e.replace(/^on/, "").toLowerCase();
                n[e] = function(e) {
                    n.addEventListener(t, e)
                }
            }),
            n
        }
        var Fe = function(e) {
            return Object.prototype.toString.call(e)
        }
          , qe = function(e) {
            if ("[object Object]" === Fe(e) && (n = e,
            a = "query",
            Object.prototype.hasOwnProperty.call(n, a)) && (t = e.query,
            "[object String]" === Fe(t)) && 1e4 < e.query.length)
                throw new Error("shareVideo:fail parameter error: query length exceeds limit;");
            var t, n, a;
            o.a.shareVideo(e)
        };
        function Ue(e) {
            var t = o.a.createRecommendationButton(e);
            return t.onLoad = function(e) {
                t.addEventListener("load", e)
            }
            ,
            t.offLoad = function(e) {
                t.removeEventListener("load", e)
            }
            ,
            t.onError = function(e) {
                t.addEventListener("error", e)
            }
            ,
            t.offError = function(e) {
                t.removeEventListener("error", e)
            }
            ,
            t
        }
        function Ve(e) {
            var t = o.a.createWorker(e);
            return t.onMessage = function(e) {
                t.addEventListener("message", e)
            }
            ,
            t
        }
        var Je = S();
        function Ge() {
            return Je && Je.isDebugSdk && o.a.jBenchmark || {}
        }
        var He = o.a.reload;
        function We(e) {
            o.a.addEventListener("deviceOrientationChange", e)
        }
        function ze(e) {
            o.a.removeEventListener("deviceOrientationChange", e)
        }
        function Ke(e) {
            o.a.showAddToDesktopGuide(e)
        }
        var Qe = function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.centerPoseMatrix = new Float32Array(t.centerPoseMatrix),
            this.blendShapes = t.blendShapes.map(function(e) {
                return {
                    name: e.name,
                    weight: +e.weight.toFixed(6)
                }
            }).sort(function(e, t) {
                return e.name.localeCompare(t.name)
            }),
            this.landmarks = new Float32Array(t.landmarks);
            var n = t.skeleton;
            n && (this.skeleton = {
                jointPoseMatrices: n.jointPoseMatrices
            })
        };
        var $e = function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = t.getProjectionMatrix()
              , a = t.getViewMatrix()
              , r = t.getUpdatedTrackableFaces().map(function(e) {
                return new Qe(e)
            });
            this.getProjectionMatrix = function() {
                return n
            }
            ,
            this.getViewMatrix = function() {
                return a
            }
            ,
            this.getUpdatedTrackableFaces = function() {
                return r.slice()
            }
        };
        var Ze = function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.getCameraVideo = function() {
                return t.getCameraVideo()
            }
            ,
            this.getFrame = function() {
                var e = t.getFrame();
                return new $e(e)
            }
            ,
            this.end = function() {
                return t.end()
            }
            ;
            var n = void 0;
            this.getSkeletonDefinition = function() {
                return n || (n = t.getSkeletonDefinition()),
                n
            }
            ;
            var a = new s.a
              , r = "authorizationchange";
            this.onAuthorizationChange = function(e) {
                a.on(r, e)
            }
            ,
            this.offAuthorizationChange = function(e) {
                a.off(r, e)
            }
            ,
            t.addEventListener(r, function(e) {
                a.trigger(r, e)
            })
        };
        function Xe(r) {
            o.a.requestXRSession(Object.assign({}, r, {
                success: function(e) {
                    var t, n, a;
                    "function" == typeof r.success && ("du_face" === r.mode ? r.success(new Ze(e)) : (t = e,
                    n = new s.a,
                    a = "authorizationchange",
                    t.onAuthorizationChange = function(e) {
                        n.on(a, e)
                    }
                    ,
                    t.offAuthorizationChange = function(e) {
                        n.off(a, e)
                    }
                    ,
                    t.addEventListener(a, function(e) {
                        n.trigger(a, e)
                    }),
                    r.success(e)))
                }
            }))
        }
        function Ye(e) {
            return e = e || {},
            o.a.supportsXRSession ? o.a.supportsXRSession(e) : "du_face" === e.mode
        }
        var et = o.a.detectFacesFromImage ? function(t) {
            o.a.detectFacesFromImage(Object.assign({}, t, {
                success: function(e) {
                    "function" == typeof t.success && t.success({
                        faces: e.faces.map(function(e) {
                            return new Qe(e)
                        })
                    })
                }
            }))
        }
        : null
          , tt = ["onOpen", "onClose", "onError"]
          , nt = ["offOpen", "offClose", "offError"];
        function at() {
            var n = o.a.getWebViewManager && o.a.getWebViewManager();
            return n && (tt.forEach(function(e) {
                var t = e.replace(/^on/, "").toLowerCase();
                n[e] = function(e) {
                    n.addEventListener(t, e)
                }
            }),
            nt.forEach(function(e) {
                var t = e.replace(/^off/, "").toLowerCase();
                n[e] = function(e) {
                    n.removeEventListener(t, e)
                }
            })),
            n
        }
        var rt = o.a.menuItemCtrl
          , it = ["onAntiAddiction"];
        function ot() {
            var n = o.a.getAntiAddiction && o.a.getAntiAddiction();
            return it.forEach(function(e) {
                var t = e.replace(/^on/, "").toLowerCase();
                n[e] = function(e) {
                    n.addEventListener(t, e)
                }
            }),
            n
        }
        var st = n(7)
          , ut = void 0
          , ct = function(e) {
            return ut || (ut = o.a.getOpenData()),
            ut.removeUserCloudStorage.call(ut, e)
        }
          , lt = function(e) {
            return ut || (ut = o.a.getOpenData()),
            ut.setUserCloudStorage.call(ut, e)
        }
          , dt = o.a.include
          , mt = n(10)
          , gt = function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function(e, t) {
                    var n = []
                      , a = !0
                      , r = !1
                      , i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value),
                        !t || n.length !== t); a = !0)
                            ;
                    } catch (e) {
                        r = !0,
                        i = e
                    } finally {
                        try {
                            !a && s.return && s.return()
                        } finally {
                            if (r)
                                throw i
                        }
                    }
                    return n
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , vt = null
          , pt = function(e) {
            vt = e
        }
          , ft = {
            v: "2.1.0",
            aso: {}
        }
          , ht = {
            aso: {}
        }
          , yt = {
            maxRequestDataLength: 200704,
            logIds: {
                "app@show": [50, 18],
                "app@hide": [51, 18],
                "page@show": [52, 19],
                "page@hide": [53, 19],
                "share@action": [54, 20],
                "mtj@event": [55, 21],
                "swan@setPageInfo": [61, 22]
            },
            enabledEvents: {
                app: ["show", "hide"],
                page: ["show", "hide"],
                share: ["action"],
                event: "*",
                swan: ["setPageInfo"]
            }
        }
          , bt = function() {
            return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(4294967295 * Math.random())
        }
          , wt = function(e) {
            var t = {}.toString.call(e);
            return t.substring(8, t.length - 1).toLowerCase()
        }
          , It = 0
          , At = function(e) {
            var t, n = e.eventName, a = e.bizId, r = e.groupId, i = e.data, o = Object.assign({
                rqc: ++It,
                rid: bt(),
                ctime: +new Date
            }, i);
            return t = o,
            JSON.stringify(t).length <= yt.maxRequestDataLength ? vt.log({
                name: "statisticEvent",
                data: {
                    eventName: n,
                    bizId: "" + a,
                    groupId: "" + r,
                    content: {
                        ext: o
                    }
                }
            }) : Promise.reject({
                status: "1",
                message: "invalid data"
            })
        }
          , St = function(e, t) {
            var n = {
                et: "error",
                en: e,
                ep: {
                    ex: "object" === wt(t) ? JSON.stringify(t) : "" + t
                }
            }
              , a = gt(yt.logIds["mtj@event"], 2)
              , r = a[0]
              , i = a[1];
            return At({
                eventName: "mtj@event",
                bizId: r,
                groupId: i,
                data: Object.assign({}, ft, n)
            })
        }
          , Pt = function(e) {
            if ("*" !== yt.enabledEvents[e.et] && yt.enabledEvents[e.et].indexOf(e.en) < 0)
                return Promise.reject({
                    status: "1",
                    message: "invalid event"
                });
            var t = "event" === e.et ? "mtj@event" : e.et + "@" + e.en
              , n = gt(yt.logIds[t], 2)
              , a = n[0]
              , r = n[1];
            return At({
                eventName: t,
                bizId: a,
                groupId: r,
                data: Object.assign({}, ft, e)
            })
        }
          , kt = function() {
            return vt.data.get({
                name: "swan-appInfoSync"
            })
        }
          , _t = function() {
            ht.aso.scene = "" + (kt().scene || ""),
            ht.clkid = function(t) {
                try {
                    var e = t.indexOf("?") + 1
                      , n = t.substr(e).split("&").filter(function(e) {
                        return 0 === e.indexOf("_baiduboxapp=")
                    })[0] || "{}"
                      , a = JSON.parse(decodeURIComponent(n.replace("_baiduboxapp=", "")));
                    if (a.ext && a.ext.clkid)
                        return a.ext.clkid
                } catch (e) {
                    St("get clkid", e + ":" + t)
                }
                return ""
            }(kt().appLaunchScheme) || void 0,
            "number" !== wt(ft.sid) && (ft.sid = bt(),
            ht.mtjcuid = kt().mtjCuid || void 0)
        }
          , Ot = {
            onShow: function(t, e) {
                _t(),
                ht.aso.path = t.path || "",
                ht.aso.query = Object.keys(t.query || {}).map(function(e) {
                    return {
                        key: e,
                        value: t.query[e]
                    }
                }),
                Pt(Object.assign({
                    et: "app",
                    en: "show",
                    rid: e
                }, ht))
            },
            onHide: function(e, t) {
                Pt({
                    et: "app",
                    en: "hide",
                    rid: t
                })
            },
            onError: function(e, t) {
                var n = "object" === wt(e) ? JSON.stringify(e) : "" + e;
                Pt({
                    et: "app",
                    en: "error",
                    ep: {
                        ex: n
                    },
                    rid: t
                })
            }
        }
          , jt = function(e, t, n) {
            _t(),
            Pt(Object.assign({
                et: "page",
                en: e,
                rid: t
            }, n))
        }
          , Ct = {
            onShow: function(e, t) {
                var n = getCurrentPages()
                  , a = n[n.length - 1];
                ft.path = a.route,
                ft.query = Object.keys(a.options).map(function(e) {
                    return {
                        key: e,
                        value: a.options[e]
                    }
                }),
                jt("show", t, ht)
            },
            onHide: function(e, t) {
                jt("hide", t)
            },
            shareAction: function(e, t) {
                _t();
                var n = {
                    from: e.from,
                    path: e.path
                };
                if (!n.path) {
                    var a = getCurrentPages()
                      , r = a[a.length - 1]
                      , i = Object.keys(r.options).map(function(e) {
                        return e + "=" + r.options[e]
                    }).join("&");
                    n.path = r.route + (i ? "?" + i : "")
                }
                e.title && (n.title = e.title),
                e.target && (n.target = JSON.stringify(e.target)),
                Pt(Object.assign({
                    et: "share",
                    en: "action",
                    ep: n,
                    rid: t
                }, ht))
            }
        }
          , Mt = {
            reportAnalytics: function(e, t) {
                if (n = e.reportName,
                "string" === wt(n) && /^[a-z][a-z0-9_]{0,31}$/.test(n)) {
                    var n;
                    _t();
                    var a = e.reportParams || {}
                      , r = Object.keys(a).filter(function(e) {
                        return "string" === wt(n = e) && /^[a-z0-9_]{1,32}$/.test(n) && (t = a[e],
                        "string" === wt(t) || "number" === wt(t));
                        var t, n
                    }).map(function(e) {
                        return {
                            key: "" + e,
                            value: "" + a[e],
                            type: wt(a[e])
                        }
                    });
                    Pt(Object.assign({
                        et: "event",
                        en: e.reportName,
                        ep: {
                            data: r
                        },
                        rid: t
                    }, ht))
                }
            },
            setPageInfo: function(t, e) {
                _t();
                var n = {};
                return Object.keys(t).forEach(function(e) {
                    "success" !== e && "fail" !== e && (n[e] = t[e])
                }),
                Pt(Object.assign({
                    et: "swan",
                    en: "setPageInfo",
                    ep: {
                        data: [n]
                    },
                    rid: e
                }, ht))
            }
        }
          , Tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , xt = "[object WeakMap]"
          , Et = "[object WeakSet]"
          , Nt = "[object RegExp]"
          , Rt = "[object ArrayBuffer]"
          , Lt = "[object DataView]"
          , Dt = "[object Error]"
          , Bt = "[object Math]"
          , Ft = "[object Map]"
          , qt = Object.prototype.toString
          , Ut = !1
          , Vt = {}
          , Jt = void 0;
        function Gt(e) {
            return e && "object" === (void 0 === e ? "undefined" : Tt(e))
        }
        function Ht(e) {
            if (Number.isNaN(e))
                return "<NaN>";
            if ("number" == typeof (t = e) && !isNaN(t) && !isFinite(e))
                return "<Infinity>";
            var t, n, a, r;
            if ("symbol" === (a = void 0 === (n = e) ? "undefined" : Tt(n)) || "object" === a && null != n && "[object Symbol]" === qt.call(n))
                return "<Symbol>";
            if (void 0 === e)
                return "<Undefined>";
            if ("function" == typeof e)
                return "<Function>";
            if (Gt(e)) {
                var i = qt.call(e);
                if (Gt(r = e) && "function" == typeof r.then)
                    return "<Promise>";
                if (i === xt)
                    return "<WeakMap>";
                if (i === Et)
                    return "<WeakSet>";
                if (i === Ft)
                    return "<Map: size=" + e.size + ">";
                if (i === Nt)
                    return "<RegExp:" + e.toString() + ">";
                if (i === Rt)
                    return "<ArrayBuffer: byteLength=" + e.byteLength + ">";
                if (i === Dt)
                    return "<Error:" + e.message + ">";
                if (i === Bt)
                    return "<Math>";
                if (ArrayBuffer.isView(e))
                    return i === Lt ? "<DateView>" : i
            }
            return e
        }
        function Wt(e) {
            var n = [];
            return JSON.stringify(e, function(e, t) {
                for (t = Ht(t); n.length && n[n.length - 1] !== this; )
                    n.pop();
                if ("object" === (void 0 === t ? "undefined" : Tt(t)) && null !== t) {
                    if (-1 !== n.indexOf(t))
                        return "<Circular>";
                    n.push(t)
                }
                return t
            })
        }
        function zt(e) {
            var a, t;
            Ut || ((t = e).console || (t.console = {}),
            ["log", "info", "warn", "debug", "error"].forEach(function(i) {
                Vt[i] = t.console[i],
                t.console[i] = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    for (var a = t.length, r = 0; r < a; r++)
                        t[r] = Wt(t[r]);
                    t = "[" + t.join(", ") + "]",
                    o.a.console[i](t)
                }
            }),
            a = e,
            o.a.addEventListener("sconsoleCmdMessage", function(e) {
                if (Gt(e) || "cmd" === e.type) {
                    var t = e.cmd
                      , n = void 0;
                    try {
                        n = Jt.call(a, t)
                    } catch (e) {
                        n = e.message
                    }
                    a.console.log(n)
                }
            }),
            Ut = !0)
        }
        function Kt(e) {
            var t;
            Ut && ((t = e).console || (t.console = {}),
            ["log", "info", "warn", "debug", "error"].forEach(function(e) {
                t.console[e] = Vt[e]
            }),
            o.a.removeEventListener("sconsoleCmdMessage"),
            Ut = !1)
        }
        "undefined" != typeof eval && (Jt = eval);
        var Qt = Object(s.b)()
          , $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , Zt = function() {
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && a(e.prototype, t),
                n && a(e, n),
                e
            }
        }();
        var Xt, Yt, en, tn, nn, an, rn = function() {
            function n(e, t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                this.swan = e,
                this.boxjs = t
            }
            return Zt(n, [{
                key: "injectHostMethods",
                value: function(e) {
                    var t = e.hostMethodDescriptions
                      , n = void 0 === t ? [] : t
                      , c = e.name;
                    try {
                        this.boxjs.extend(n.map(function(t) {
                            var e = t.args
                              , n = void 0 === e ? [{
                                name: "data",
                                value: "Object"
                            }] : e
                              , a = t.name
                              , r = void 0 === a ? t : a
                              , i = t.path
                              , o = t.authority
                              , s = void 0 === o ? "swanAPI" : o;
                            i = i || "/" + r,
                            ~["wifikey"].indexOf(c) && n.forEach(function(e) {
                                "string" == typeof e.value && e.value.replace(/=?$/, function(e) {
                                    return e ? "" : "="
                                })
                            });
                            var u = {
                                args: n,
                                name: r,
                                path: i,
                                authority: s
                            };
                            return ["invoke", "method", "handler"].forEach(function(e) {
                                t[e] && (u[e] = t[e])
                            }),
                            u
                        }), c)
                    } catch (e) {}
                }
            }, {
                key: "injectHostAPI",
                value: function(n) {
                    var e = n.name
                      , a = this.swan
                      , r = this.swan[e] = {};
                    return n.methods && Object.keys(n.methods).forEach(function(e) {
                        var t = n.methods[e];
                        switch (void 0 === t ? "undefined" : $t(t)) {
                        case "function":
                            r[e] = t;
                            break;
                        case "object":
                            "root" === t.scope ? a[e] = t.method : r[e] = t.method
                        }
                    }),
                    a
                }
            }, {
                key: "use",
                value: function() {
                    if ("function" == typeof _naSwan.getEnvVariables) {
                        var e = JSON.parse(_naSwan.getEnvVariables()).gameSdkExtension;
                        if (e) {
                            var t = e + "/game-extension.js";
                            try {
                                var n = t.split("?")[0];
                                _naSwan.include(n)
                            } catch (e) {
                                return
                            }
                            var a = swanExtensionCache["swan-game-extension"];
                            if (a) {
                                var r = a(this.swan, this.boxjs);
                                this.injectHostAPI(r),
                                this.injectHostMethods(r)
                            }
                        }
                    }
                }
            }]),
            n
        }(), on = Object(s.b)(), sn = i()(on), un = sn.swan, cn = sn.boxjs;
        Object.getOwnPropertyNames(a).forEach(function(e) {
            un[e] = a[e]
        }),
        un.reportAnalytics = (Xt = on,
        Yt = cn,
        mt.a.initGame(Xt, Yt),
        en = Xt,
        tn = Yt,
        ft.subtype = 1,
        pt(tn),
        Ot.appshow = Ot.onShow,
        Ot.apphide = Ot.onHide,
        Object.keys(Ot).forEach(function(t) {
            return en.on(t, function(e) {
                return Promise.resolve().then(function() {
                    return Ot[t](e)
                }).catch(function(e) {
                    return St("appEvent", e)
                })
            })
        }),
        Object.keys(Ct).forEach(function(t) {
            return en.on(t, function(e) {
                return Promise.resolve().then(function() {
                    return Ct[t](e)
                }).catch(function(e) {
                    return St("pageEvent", e)
                })
            })
        }),
        Object.keys(Mt).forEach(function(t) {
            return en.on(t, function(e) {
                return Promise.resolve().then(function() {
                    return Mt[t](e)
                }).catch(function(e) {
                    return St("userEvent", e)
                })
            })
        }),
        function(e, t) {
            Xt.trigger("reportAnalytics", {
                reportName: e,
                reportParams: t
            })
        }
        ),
        un.env = o.a.env,
        nn = un,
        an = cn,
        ["appshow", "apphide", "appLoad", "appMount", "appAttach"].forEach(function(i) {
            "appshow" === i ? o.a.addEventListener(i, function(e) {
                e || (e = {});
                var t = an.data.get({
                    name: "swan-appInfoSync"
                });
                nn.env.APP_NAME = t.appname,
                e.devhook ? zt(swanGlobal) : Kt(swanGlobal);
                var n = {
                    scene: e.scene,
                    query: {},
                    shareTicket: e.shareTicket,
                    referrerInfo: {}
                };
                try {
                    n.referrerInfo.appKey = t.srcAppId,
                    n.referrerInfo.extraData = t.extraData;
                    var a = decodeURIComponent(t.appLaunchScheme)
                      , r = /(?:minigame_query\s?=\s?[{])([^>]*?)(?:}&)/g.exec(a);
                    r && (n.query = JSON.parse("{" + r[1] + "}"))
                } catch (e) {}
                Qt.trigger(i, n)
            }) : o.a.addEventListener(i, function() {
                return Qt.trigger(i)
            })
        }),
        new rn(un,cn).use(),
        Object(st.b)();
        t.default = un
    }
    , function(tda, uda) {
        var wda, vda = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        wda = function() {
            return this
        }();
        try {
            wda = wda || Function("return this")() || eval("this")
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : vda(window)) && (wda = window)
        }
        tda.exports = wda
    }
    , function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
            ,
            e.paths = [],
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            e.webpackPolyfill = 1),
            e
        }
    }
    ]).default
});

delete this.window;
delete this.navigator;
delete this._naSwan;
