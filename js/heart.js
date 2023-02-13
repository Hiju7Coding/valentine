(function() {
    function i(e, t, n) {
      this.container = n, this.init(e, t)
    }
    var e = 6,
      t = function(e) {
        return e ? Math.floor(e) + "px" : 0
      },
      n = function(e) {
        if (!window.getComputedStyle) return 0;
        var t = window.getComputedStyle(e),
          n = t.getPropertyValue("transform");
        if (!n.match("matrix")) return 0;
        var r = n.match(/-?0(\.[0-9]*[1-9])?/ig).map(function(e) {
          return parseFloat(e, 10)
        });
        return -Math.asin(r[1])
      },
      r = function(e, t) {
        return e && "number" == typeof e.length ? e[Math.floor(Math.random() * e.length)] : ("number" != typeof t && (t = e || 1, e = 0), e + Math.random() * (t - e))
      };
    i.STYLES = ["t01dc2e861029c8a8ca", "t016cc24a48997d651a", "t01dd2a63c80cbdbc30"], i.prototype = {
      init: function(e, t) {
        this.alive = !0, this.scale = r(.3, .7), this.opacity = r(50, 70) / 100, this.style = r(i.STYLES);
        var n = r(Math.PI * 2);
        this.x = e + Math.sin(n) * 80 - this.scale * 48 / 2, this.y = t + Math.cos(n) * 80 - this.scale * 42 / 2, this.theta = r(Math.PI * 2), this.drag = r(.9, .99), this.wander = r(.5, 2), this.force = r(.1, .4), this.vx = Math.sin(this.theta) * this.force, this.vy = Math.cos(this.theta) * this.force, this.draw()
      },
      move: function() {
        this.x += this.vx, this.y += this.vy, this.vx *= this.drag, this.vy *= this.drag, this.theta += r(-0.5, .5) * this.wander, this.vx += Math.sin(this.theta) * .1, this.vy += Math.cos(this.theta) * .1, this.scale *= .995, this.opacity *= .96, this.alive = this.opacity > .1, this.draw()
      },
      draw: function() {
        var e = this.img;
        e || (e = document.createElement("img"), e.src = "https://p.ssl.qhimg.com/" + this.style + ".png", this.container.appendChild(e), this.img = e), e.style.left = t(this.x), e.style.top = t(this.y), e.style.width = t(this.scale * 48), e.style.height = t(this.scale * 42), e.style.opacity = this.opacity
      },
      destory: function() {
        this.img && this.container.removeChild(this.img)
      }
    };
    var s = {
        MAX_PARTICLES: 500,
        pool: [],
        start: function(e, t, r) {
          s.ropeH = e, s.container = t, s.timer = setInterval(function() {
            s.spawn(n(r)), s.update()
          }, 50)
        },
        spawn: function(e) {
          if (s.pool.length >= s.MAX_PARTICLES) return;
          var t = Math.sin(e) * (s.ropeH + 40),
            n = Math.cos(e) * (s.ropeH + 40) + 20;
          heart = new i(t, n, s.container), s.pool.push(heart)
        },
        update: function() {
          s.pool.forEach(function(e, t) {
            e.alive ? e.move() : (e.destory(), s.pool.splice(t, 1))
          })
        },
        stop: function() {
          clearInterval(s.timer), s.pool.forEach(function(e) {
            e.destory()
          }), s.pool = []
        }
      },
      o = '<div id="valentine"><div class="shake"><div class="rope"></div><a href="http://yule.360.cn/zt/wangwangwang.html" class="heart-wrap"><img src="https://p.ssl.qhimg.com/t015d1b94b34633c54d.png" class="heart"><img src="https://p.ssl.qhimg.com/t016d4fc7667d17d5bf.png" class="beat"></a></div><div class="tiny"></div><div class="control"><div class="countdown">\u5269\u4f59<em class="time">10</em>\u79d2</div><div class="close">&times;</div></div></div>',
      u = '#valentine{display:none;z-index:100;position:fixed;width:600px;height:0;top:0;left:50%;margin-left:-300px}@keyframes shake{from{transform:rotate(30deg)}to{transform:rotate(-30deg)}}#valentine .shake{width:240px;height:0;position:absolute;z-index:20;top:0;left:180px;animation-name:shake;animation-duration:2.5s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.6,0,.3,1);animation-direction:alternate;transform-origin:top center}#valentine .shake .rope{position:absolute;width:2px;left:119px;top:-10px;background-color:#FF2128;box-shadow:rgba(255,33,40,.2) -7px 0 6px}#valentine .shake .heart-wrap{position:absolute;width:240px;height:220px}#valentine .heart-wrap .heart{display:block;position:relative;width:240px;height:220px}@keyframes beat{0%{transform:scale(0);opacity:1}40%{opacity:.8}80%{transform:scale(1);opacity:.6}100%{transform:scale(1);opacity:0}}#valentine .heart-wrap .beat{position:absolute;top:38px;left:153px;animation-name:beat;animation-duration:1.6s;animation-iteration-count:infinite;animation-timing-function:ease-out;transform-origin:bottom center}#valentine .tiny{position:relative;width:0;height:0;top:0;left:300px;z-index:1;user-select:none}#valentine .tiny img{position:absolute}#valentine .control{position:absolute;right:-100px;top:263px;height:36px;width:96px}#valentine .countdown{float:right;margin:6px 0 6px -10px;background:#888;height:24px;line-height:24px;border-radius:0 12px 12px 0;width:50px;padding:0 7px 0 13px;color:#FFF}#valentine .close{width:36px;height:36px;background:#888;border-radius:50%;text-align:center;line-height:36px;color:#FFF;font-size:32px;font-family:"Times New Roman";cursor:pointer;text-decoration:none;float:left}#valentine .close:hover{background:#666}',
      a = Math.max(Dom.getDocRect().height / 2, 300),
      f = null,
      l = null,
      c = null,
      h = null,
      p = {
        el: W("#imgLogo"),
        init: function() {
          var t = p.el.parentNode(".item-logo");
          t.query(".replay").length || t.appendChild('<span class="replay"></span>'), p.el.attr("href", "http://yule.360.cn/zt/wangwangwang.html"), p.el.attr("target", "_blank"), p.el.removeAttr("data-themeKey"), t.query(".replay").on("click", function(e) {
            e.preventDefault();
            if (hao360.themeData[0] !== "default" || h) return;
            LogHub.behavior("valentine", "replay"), v()
          }), p.preload()
        },
        preload: function() {
          var t = p.el.query("img").attr("data-src"),
            n = new Image;
          t && (n.src = t)
        },
        show: function() {
          var t = "https://p.ssl.qhimg.com/t018cb056a766b58183.png";
          p.el.addClass("valentine-logo"), p.el.query("img").attr("src", t)
        },
        hide: function() {
          p.el.removeClass("valentine-logo");
          var t = p.el.query("img").attr("data-src");
          t && p.el.query("img").attr("src", t)
        }
      },
      d = function() {
        W("#doc-view-front").appendChild(o), qboot.load.css(u), f = W("#valentine"), l = f.query(".tiny"), c = f.query(".shake"), c.query(".rope").css({
          height: a + "px"
        }), c.query(".heart-wrap").css({
          top: a - 60 + "px"
        });
        var e = function() {
          f.query(".close").on("click", function(e) {
            e.preventDefault(), LogHub.behavior("valentine", "close"), m()
          })
        };
        e()
      },
      v = function() {
        if (h) return;
        s.start(a, l[0], c[0]), p.hide(), f.show(), LogHub.behavior("valentine", "show");
        var t = e;
        f.query(".countdown em").html(t), h = setInterval(function() {
          t--, f.query(".countdown em").html(t), t <= 0 && (m(), clearInterval(h), h = null)
        }, 1e3)
      },
      m = function() {
        s.stop(), W("#valentine").hide(), p.show(), h && (clearInterval(h), h = null)
      };
    if (!VALENTINE_TIME) return;
    if (hao360.todayObj < new Date(VALENTINE_TIME.start) || hao360.todayObj > new Date(VALENTINE_TIME.end)) return;
    d(), p.init(), qboot.cookie.get("valentine-showed") || (v(), qboot.cookie.set("valentine-showed", 1, {
      expires: 864e5
    }))
  })();