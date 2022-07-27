!function () {
    var e = {
        852: function () {
            console.clear();
            for (var e = document.querySelectorAll(".slide"), t = e.length, n = 0; n < t; n++) TweenLite.set(e[n], {
                backgroundColor: "white",
                xPercent: 100 * n
            });
            var r, i = (r = 100 * (t - 1) - -100, function (e) {
                return (r + (e - -100) % r) % r - 100
            }), a = TweenLite.delayedCall(1.5, (function () {
                f.isPressed || f.isDragging || f.isThrowing ? a.restart(!0) : v(-1)
            })), s = TweenMax.to(e, 1, {
                xPercent: "+=" + 100 * t,
                ease: Linear.easeNone,
                paused: !0,
                repeat: -1,
                modifiers: {xPercent: i}
            }), o = document.createElement("div");
            TweenLite.set(o, {x: "+=0"});
            var u = o._gsTransform, c = TweenLite.to({}, .1, {}), l = 0, d = 0;
            p();
            var f = new Draggable(o, {
                trigger: ".slides-container", throwProps: !0, onPress: function () {
                    a.restart(!0), c.kill(), this.update()
                }, onDrag: m, onThrowUpdate: m, snap: {x: g}
            });

            function v(e) {
                a.restart(!0), c.kill();
                var t = g(u.x + e * l);
                c = TweenLite.to(o, 1, {x: t, onUpdate: m})
            }

            function m() {
                s.progress(u.x / d)
            }

            function g(e) {
                return Math.round(e / l) * l
            }

            function p() {
                var n = u.x / d || 0;
                l = e[0].offsetWidth, d = l * t, TweenLite.set(o, {x: n * d}), v(0), c.progress(1)
            }

            window.addEventListener("resize", p), $(document).ready((function () {
                setTimeout((function () {
                    $(".ball").addClass("scale")
                }), 1e3), setTimeout((function () {
                    $(".user-photo").addClass("user-photo-animate")
                }), 1200), setTimeout((function () {
                    $(".user-photo-mask > img").addClass("user-img"), $(".user-photo-mask > img").addClass("user-img")
                }), 1400), setTimeout((function () {
                    $(".user-name").addClass("fadeInUp")
                }), 1500), setTimeout((function () {
                    var e = $("ul.lines > li"), t = 0;
                    !function n() {
                        t != e.length && (e.eq(t++).addClass("fadeInUp"), window.setTimeout(n, 200))
                    }()
                }), 1600)
            })), $(document).ready((function () {
                $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click((function () {
                    $(this).toggleClass("open")
                }))
            }));
            var T = document.querySelector(".isOpenClick"), h = document.querySelector(".burger-container"), w = !1;
            T.addEventListener("click", (function () {
                C(w = !w)
            }));
            var C = function (e) {
                h.style.display = e ? "block" : "none"
            }
        }
    }, t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var a = t[r] = {exports: {}};
        return e[r](a, a.exports, n), a.exports
    }

    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, {a: t}), t
    }, n.d = function (e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, function () {
        "use strict";
        n(852), function () {
            var e;
            $((function () {
                return $("#nav").on("click", "a", (function (t) {
                    var n, r;
                    return (t = null != t ? t : {e: window.event}).preventDefault(), t.stopPropagation(), !$("#nav").hasClass("active") && ($(".focus").removeClass("focus"), $(this).addClass("focus"), $("#nav").addClass("active"), r = $(this).attr("data-slide"), n = $(".active").attr("data-slide"), $(".slide").removeClass("active"), e(r, n))
                })), setTimeout((function () {
                    return $('#nav a[data-slide="2"]').trigger("click")
                }), 500), setTimeout((function () {
                    return $('#nav a[data-slide="3"]').trigger("click")
                }), 1200), setTimeout((function () {
                    return $('#nav a[data-slide="4"]').trigger("click")
                }), 1900)
            })), e = function (e, t) {
                var n, r;
                return r = {
                    1: "one",
                    2: "two",
                    3: "three",
                    4: "four"
                }[e], 3 === (n = Math.abs(e - t)) && "1" === t ? ($('.slide[data-slide="' + e + '"]').addClass("active"), $(".slider-inner").attr("class", "slider-inner rotate two"), setTimeout((function () {
                    return $(".slider-inner").attr("class", "slider-inner rotate three")
                }), 400), setTimeout((function () {
                    return $(".slider-inner").attr("class", "slider-inner rotate four")
                }), 800)) : 3 === n && "4" === t ? ($('.slide[data-slide="' + e + '"]').addClass("active"), $(".slider-inner").attr("class", "slider-inner rotate three"), setTimeout((function () {
                    return $(".slider-inner").attr("class", "slider-inner rotate two")
                }), 350), setTimeout((function () {
                    return $(".slider-inner").attr("class", "slider-inner rotate one")
                }), 700)) : ($('.slide[data-slide="' + e + '"]').addClass("active"), $(".slider-inner").attr("class", "slider-inner rotate " + r)), $("#nav").removeClass("active")
            }
        }.call(void 0)
    }()
}();
