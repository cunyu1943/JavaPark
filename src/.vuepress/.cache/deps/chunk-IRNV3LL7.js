// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/mermaid-7e6c58c3.js
function zl(t9) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t9 == "string" ? [t9] : t9);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var h = l.match(/\n([\t ]+|(?!\s).)/g);
    return h ? a.concat(h.map(function(c) {
      var u, g;
      return (g = (u = c.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && g !== void 0 ? g : 0;
    })) : a;
  }, []);
  if (n.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    r = r.map(function(a) {
      return a.replace(o, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var s = r[0];
  return e.forEach(function(a, l) {
    var h = s.match(/(?:^|\n)( *)$/), c = h ? h[1] : "", u = a;
    typeof a == "string" && a.includes(`
`) && (u = String(a).split(`
`).map(function(g, p) {
      return p === 0 ? g : "" + c + g;
    }).join(`
`)), s += u + r[l + 1];
  }), s;
}
var Wl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hl(t9) {
  return t9 && t9.__esModule && Object.prototype.hasOwnProperty.call(t9, "default") ? t9.default : t9;
}
var cs = { exports: {} };
(function(t9, e) {
  (function(i, r) {
    t9.exports = r();
  })(Wl, function() {
    var i = 1e3, r = 6e4, n = 36e5, o = "millisecond", s = "second", a = "minute", l = "hour", h = "day", c = "week", u = "month", g = "quarter", p = "year", _ = "date", v = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var T = ["th", "st", "nd", "rd"], x = E % 100;
      return "[" + E + (T[(x - 20) % 10] || T[x] || T[0]) + "]";
    } }, z = function(E, T, x) {
      var O = String(E);
      return !O || O.length >= T ? E : "" + Array(T + 1 - O.length).join(x) + E;
    }, Q = { s: z, z: function(E) {
      var T = -E.utcOffset(), x = Math.abs(T), O = Math.floor(x / 60), y = x % 60;
      return (T <= 0 ? "+" : "-") + z(O, 2, "0") + ":" + z(y, 2, "0");
    }, m: function E(T, x) {
      if (T.date() < x.date())
        return -E(x, T);
      var O = 12 * (x.year() - T.year()) + (x.month() - T.month()), y = T.clone().add(O, u), D = x - y < 0, w = T.clone().add(O + (D ? -1 : 1), u);
      return +(-(O + (x - y) / (D ? y - w : w - y)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: u, y: p, w: c, d: h, D: _, h: l, m: a, s, ms: o, Q: g }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, X = "en", G = {};
    G[X] = S;
    var W = function(E) {
      return E instanceof Dt;
    }, Yt = function E(T, x, O) {
      var y;
      if (!T)
        return X;
      if (typeof T == "string") {
        var D = T.toLowerCase();
        G[D] && (y = D), x && (G[D] = x, y = D);
        var w = T.split("-");
        if (!y && w.length > 1)
          return E(w[0]);
      } else {
        var H = T.name;
        G[H] = T, y = H;
      }
      return !O && y && (X = y), y || !O && X;
    }, K = function(E, T) {
      if (W(E))
        return E.clone();
      var x = typeof T == "object" ? T : {};
      return x.date = E, x.args = arguments, new Dt(x);
    }, $ = Q;
    $.l = Yt, $.i = W, $.w = function(E, T) {
      return K(E, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var Dt = function() {
      function E(x) {
        this.$L = Yt(x.locale, null, true), this.parse(x);
      }
      var T = E.prototype;
      return T.parse = function(x) {
        this.$d = function(O) {
          var y = O.date, D = O.utc;
          if (y === null)
            return /* @__PURE__ */ new Date(NaN);
          if ($.u(y))
            return /* @__PURE__ */ new Date();
          if (y instanceof Date)
            return new Date(y);
          if (typeof y == "string" && !/Z$/i.test(y)) {
            var w = y.match(M);
            if (w) {
              var H = w[2] - 1 || 0, R = (w[7] || "0").substring(0, 3);
              return D ? new Date(Date.UTC(w[1], H, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, R)) : new Date(w[1], H, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, R);
            }
          }
          return new Date(y);
        }(x), this.$x = x.x || {}, this.init();
      }, T.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, T.$utils = function() {
        return $;
      }, T.isValid = function() {
        return this.$d.toString() !== v;
      }, T.isSame = function(x, O) {
        var y = K(x);
        return this.startOf(O) <= y && y <= this.endOf(O);
      }, T.isAfter = function(x, O) {
        return K(x) < this.startOf(O);
      }, T.isBefore = function(x, O) {
        return this.endOf(O) < K(x);
      }, T.$g = function(x, O, y) {
        return $.u(x) ? this[O] : this.set(y, x);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(x, O) {
        var y = this, D = !!$.u(O) || O, w = $.p(x), H = function(Rt, it) {
          var st = $.w(y.$u ? Date.UTC(y.$y, it, Rt) : new Date(y.$y, it, Rt), y);
          return D ? st : st.endOf(h);
        }, R = function(Rt, it) {
          return $.w(y.toDate()[Rt].apply(y.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(it)), y);
        }, U = this.$W, P = this.$M, ct = this.$D, pt = "set" + (this.$u ? "UTC" : "");
        switch (w) {
          case p:
            return D ? H(1, 0) : H(31, 11);
          case u:
            return D ? H(1, P) : H(0, P + 1);
          case c:
            var Gt = this.$locale().weekStart || 0, Nt = (U < Gt ? U + 7 : U) - Gt;
            return H(D ? ct - Nt : ct + (6 - Nt), P);
          case h:
          case _:
            return R(pt + "Hours", 0);
          case l:
            return R(pt + "Minutes", 1);
          case a:
            return R(pt + "Seconds", 2);
          case s:
            return R(pt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, T.endOf = function(x) {
        return this.startOf(x, false);
      }, T.$set = function(x, O) {
        var y, D = $.p(x), w = "set" + (this.$u ? "UTC" : ""), H = (y = {}, y[h] = w + "Date", y[_] = w + "Date", y[u] = w + "Month", y[p] = w + "FullYear", y[l] = w + "Hours", y[a] = w + "Minutes", y[s] = w + "Seconds", y[o] = w + "Milliseconds", y)[D], R = D === h ? this.$D + (O - this.$W) : O;
        if (D === u || D === p) {
          var U = this.clone().set(_, 1);
          U.$d[H](R), U.init(), this.$d = U.set(_, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          H && this.$d[H](R);
        return this.init(), this;
      }, T.set = function(x, O) {
        return this.clone().$set(x, O);
      }, T.get = function(x) {
        return this[$.p(x)]();
      }, T.add = function(x, O) {
        var y, D = this;
        x = Number(x);
        var w = $.p(O), H = function(P) {
          var ct = K(D);
          return $.w(ct.date(ct.date() + Math.round(P * x)), D);
        };
        if (w === u)
          return this.set(u, this.$M + x);
        if (w === p)
          return this.set(p, this.$y + x);
        if (w === h)
          return H(1);
        if (w === c)
          return H(7);
        var R = (y = {}, y[a] = r, y[l] = n, y[s] = i, y)[w] || 1, U = this.$d.getTime() + x * R;
        return $.w(U, this);
      }, T.subtract = function(x, O) {
        return this.add(-1 * x, O);
      }, T.format = function(x) {
        var O = this, y = this.$locale();
        if (!this.isValid())
          return y.invalidDate || v;
        var D = x || "YYYY-MM-DDTHH:mm:ssZ", w = $.z(this), H = this.$H, R = this.$m, U = this.$M, P = y.weekdays, ct = y.months, pt = function(it, st, St, Vt) {
          return it && (it[st] || it(O, D)) || St[st].slice(0, Vt);
        }, Gt = function(it) {
          return $.s(H % 12 || 12, it, "0");
        }, Nt = y.meridiem || function(it, st, St) {
          var Vt = it < 12 ? "AM" : "PM";
          return St ? Vt.toLowerCase() : Vt;
        }, Rt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: $.s(U + 1, 2, "0"), MMM: pt(y.monthsShort, U, ct, 3), MMMM: pt(ct, U), D: this.$D, DD: $.s(this.$D, 2, "0"), d: String(this.$W), dd: pt(y.weekdaysMin, this.$W, P, 2), ddd: pt(y.weekdaysShort, this.$W, P, 3), dddd: P[this.$W], H: String(H), HH: $.s(H, 2, "0"), h: Gt(1), hh: Gt(2), a: Nt(H, R, true), A: Nt(H, R, false), m: String(R), mm: $.s(R, 2, "0"), s: String(this.$s), ss: $.s(this.$s, 2, "0"), SSS: $.s(this.$ms, 3, "0"), Z: w };
        return D.replace(q, function(it, st) {
          return st || Rt[it] || w.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(x, O, y) {
        var D, w = $.p(O), H = K(x), R = (H.utcOffset() - this.utcOffset()) * r, U = this - H, P = $.m(this, H);
        return P = (D = {}, D[p] = P / 12, D[u] = P, D[g] = P / 3, D[c] = (U - R) / 6048e5, D[h] = (U - R) / 864e5, D[l] = U / n, D[a] = U / r, D[s] = U / i, D)[w] || U, y ? P : $.a(P);
      }, T.daysInMonth = function() {
        return this.endOf(u).$D;
      }, T.$locale = function() {
        return G[this.$L];
      }, T.locale = function(x, O) {
        if (!x)
          return this.$L;
        var y = this.clone(), D = Yt(x, O, true);
        return D && (y.$L = D), y;
      }, T.clone = function() {
        return $.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), At = Dt.prototype;
    return K.prototype = At, [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", h], ["$M", u], ["$y", p], ["$D", _]].forEach(function(E) {
      At[E[1]] = function(T) {
        return this.$g(T, E[0], E[1]);
      };
    }), K.extend = function(E, T) {
      return E.$i || (E(T, Dt, K), E.$i = true), K;
    }, K.locale = Yt, K.isDayjs = W, K.unix = function(E) {
      return K(1e3 * E);
    }, K.en = G[X], K.Ls = G, K.p = {}, K;
  });
})(cs);
var jl = cs.exports;
var Ul = Hl(jl);
var zt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};
var k = {
  trace: (...t9) => {
  },
  debug: (...t9) => {
  },
  info: (...t9) => {
  },
  warn: (...t9) => {
  },
  error: (...t9) => {
  },
  fatal: (...t9) => {
  }
};
var dn = function(t9 = "fatal") {
  let e = zt.fatal;
  typeof t9 == "string" ? (t9 = t9.toLowerCase(), t9 in zt && (e = zt[t9])) : typeof t9 == "number" && (e = t9), k.trace = () => {
  }, k.debug = () => {
  }, k.info = () => {
  }, k.warn = () => {
  }, k.error = () => {
  }, k.fatal = () => {
  }, e <= zt.fatal && (k.fatal = console.error ? console.error.bind(console, yt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", yt("FATAL"))), e <= zt.error && (k.error = console.error ? console.error.bind(console, yt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", yt("ERROR"))), e <= zt.warn && (k.warn = console.warn ? console.warn.bind(console, yt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", yt("WARN"))), e <= zt.info && (k.info = console.info ? console.info.bind(console, yt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", yt("INFO"))), e <= zt.debug && (k.debug = console.debug ? console.debug.bind(console, yt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", yt("DEBUG"))), e <= zt.trace && (k.trace = console.debug ? console.debug.bind(console, yt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", yt("TRACE")));
};
var yt = (t9) => `%c${Ul().format("ss.SSS")} : ${t9} : `;
var pn = {};
Object.defineProperty(pn, "__esModule", { value: true });
var us = pn.sanitizeUrl = void 0;
var Yl = /^([^\w]*)(javascript|data|vbscript)/im;
var Gl = /&#(\w+)(^\w|;)?/g;
var Vl = /&tab;/gi;
var Xl = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var Kl = /^.+(:|&colon;)/gim;
var Zl = [".", "/"];
function Jl(t9) {
  return Zl.indexOf(t9[0]) > -1;
}
function Ql(t9) {
  return t9 = t9.replace(Vl, "&#9;"), t9.replace(Gl, function(e, i) {
    return String.fromCharCode(i);
  });
}
function th(t9) {
  var e = Ql(t9 || "").replace(Xl, "").trim();
  if (!e)
    return "about:blank";
  if (Jl(e))
    return e;
  var i = e.match(Kl);
  if (!i)
    return e;
  var r = i[0];
  return Yl.test(r) ? "about:blank" : e;
}
us = pn.sanitizeUrl = th;
var eh = { value: () => {
} };
function fs() {
  for (var t9 = 0, e = arguments.length, i = {}, r; t9 < e; ++t9) {
    if (!(r = arguments[t9] + "") || r in i || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new ki(i);
}
function ki(t9) {
  this._ = t9;
}
function ih(t9, e) {
  return t9.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i))
      throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
ki.prototype = fs.prototype = {
  constructor: ki,
  on: function(t9, e) {
    var i = this._, r = ih(t9 + "", i), n, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((n = (t9 = r[o]).type) && (n = rh(i[n], t9.name)))
          return n;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (n = (t9 = r[o]).type)
        i[n] = no(i[n], t9.name, e);
      else if (e == null)
        for (n in i)
          i[n] = no(i[n], t9.name, null);
    return this;
  },
  copy: function() {
    var t9 = {}, e = this._;
    for (var i in e)
      t9[i] = e[i].slice();
    return new ki(t9);
  },
  call: function(t9, e) {
    if ((n = arguments.length - 2) > 0)
      for (var i = new Array(n), r = 0, n, o; r < n; ++r)
        i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (o = this._[t9], r = 0, n = o.length; r < n; ++r)
      o[r].value.apply(e, i);
  },
  apply: function(t9, e, i) {
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (var r = this._[t9], n = 0, o = r.length; n < o; ++n)
      r[n].value.apply(e, i);
  }
};
function rh(t9, e) {
  for (var i = 0, r = t9.length, n; i < r; ++i)
    if ((n = t9[i]).name === e)
      return n.value;
}
function no(t9, e, i) {
  for (var r = 0, n = t9.length; r < n; ++r)
    if (t9[r].name === e) {
      t9[r] = eh, t9 = t9.slice(0, r).concat(t9.slice(r + 1));
      break;
    }
  return i != null && t9.push({ name: e, value: i }), t9;
}
var Yr = "http://www.w3.org/1999/xhtml";
var oo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Yr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function rr(t9) {
  var e = t9 += "", i = e.indexOf(":");
  return i >= 0 && (e = t9.slice(0, i)) !== "xmlns" && (t9 = t9.slice(i + 1)), oo.hasOwnProperty(e) ? { space: oo[e], local: t9 } : t9;
}
function nh(t9) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === Yr && e.documentElement.namespaceURI === Yr ? e.createElement(t9) : e.createElementNS(i, t9);
  };
}
function oh(t9) {
  return function() {
    return this.ownerDocument.createElementNS(t9.space, t9.local);
  };
}
function ds(t9) {
  var e = rr(t9);
  return (e.local ? oh : nh)(e);
}
function sh() {
}
function gn(t9) {
  return t9 == null ? sh : function() {
    return this.querySelector(t9);
  };
}
function ah(t9) {
  typeof t9 != "function" && (t9 = gn(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = new Array(s), l, h, c = 0; c < s; ++c)
      (l = o[c]) && (h = t9.call(l, l.__data__, c, o)) && ("__data__" in l && (h.__data__ = l.__data__), a[c] = h);
  return new mt(r, this._parents);
}
function lh(t9) {
  return t9 == null ? [] : Array.isArray(t9) ? t9 : Array.from(t9);
}
function hh() {
  return [];
}
function ps(t9) {
  return t9 == null ? hh : function() {
    return this.querySelectorAll(t9);
  };
}
function ch(t9) {
  return function() {
    return lh(t9.apply(this, arguments));
  };
}
function uh(t9) {
  typeof t9 == "function" ? t9 = ch(t9) : t9 = ps(t9);
  for (var e = this._groups, i = e.length, r = [], n = [], o = 0; o < i; ++o)
    for (var s = e[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && (r.push(t9.call(l, l.__data__, h, s)), n.push(l));
  return new mt(r, n);
}
function gs(t9) {
  return function() {
    return this.matches(t9);
  };
}
function ms(t9) {
  return function(e) {
    return e.matches(t9);
  };
}
var fh = Array.prototype.find;
function dh(t9) {
  return function() {
    return fh.call(this.children, t9);
  };
}
function ph() {
  return this.firstElementChild;
}
function gh(t9) {
  return this.select(t9 == null ? ph : dh(typeof t9 == "function" ? t9 : ms(t9)));
}
var mh = Array.prototype.filter;
function _h() {
  return Array.from(this.children);
}
function yh(t9) {
  return function() {
    return mh.call(this.children, t9);
  };
}
function Ch(t9) {
  return this.selectAll(t9 == null ? _h : yh(typeof t9 == "function" ? t9 : ms(t9)));
}
function xh(t9) {
  typeof t9 != "function" && (t9 = gs(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new mt(r, this._parents);
}
function _s(t9) {
  return new Array(t9.length);
}
function bh() {
  return new mt(this._enter || this._groups.map(_s), this._parents);
}
function Di(t9, e) {
  this.ownerDocument = t9.ownerDocument, this.namespaceURI = t9.namespaceURI, this._next = null, this._parent = t9, this.__data__ = e;
}
Di.prototype = {
  constructor: Di,
  appendChild: function(t9) {
    return this._parent.insertBefore(t9, this._next);
  },
  insertBefore: function(t9, e) {
    return this._parent.insertBefore(t9, e);
  },
  querySelector: function(t9) {
    return this._parent.querySelector(t9);
  },
  querySelectorAll: function(t9) {
    return this._parent.querySelectorAll(t9);
  }
};
function Th(t9) {
  return function() {
    return t9;
  };
}
function Sh(t9, e, i, r, n, o) {
  for (var s = 0, a, l = e.length, h = o.length; s < h; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : i[s] = new Di(t9, o[s]);
  for (; s < l; ++s)
    (a = e[s]) && (n[s] = a);
}
function kh(t9, e, i, r, n, o, s) {
  var a, l, h = /* @__PURE__ */ new Map(), c = e.length, u = o.length, g = new Array(c), p;
  for (a = 0; a < c; ++a)
    (l = e[a]) && (g[a] = p = s.call(l, l.__data__, a, e) + "", h.has(p) ? n[a] = l : h.set(p, l));
  for (a = 0; a < u; ++a)
    p = s.call(t9, o[a], a, o) + "", (l = h.get(p)) ? (r[a] = l, l.__data__ = o[a], h.delete(p)) : i[a] = new Di(t9, o[a]);
  for (a = 0; a < c; ++a)
    (l = e[a]) && h.get(g[a]) === l && (n[a] = l);
}
function vh(t9) {
  return t9.__data__;
}
function wh(t9, e) {
  if (!arguments.length)
    return Array.from(this, vh);
  var i = e ? kh : Sh, r = this._parents, n = this._groups;
  typeof t9 != "function" && (t9 = Th(t9));
  for (var o = n.length, s = new Array(o), a = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
    var c = r[h], u = n[h], g = u.length, p = Bh(t9.call(c, c && c.__data__, h, r)), _ = p.length, v = a[h] = new Array(_), M = s[h] = new Array(_), q = l[h] = new Array(g);
    i(c, u, v, M, q, p, e);
    for (var S = 0, z = 0, Q, X; S < _; ++S)
      if (Q = v[S]) {
        for (S >= z && (z = S + 1); !(X = M[z]) && ++z < _; )
          ;
        Q._next = X || null;
      }
  }
  return s = new mt(s, r), s._enter = a, s._exit = l, s;
}
function Bh(t9) {
  return typeof t9 == "object" && "length" in t9 ? t9 : Array.from(t9);
}
function Fh() {
  return new mt(this._exit || this._groups.map(_s), this._parents);
}
function Lh(t9, e, i) {
  var r = this.enter(), n = this, o = this.exit();
  return typeof t9 == "function" ? (r = t9(r), r && (r = r.selection())) : r = r.append(t9 + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? o.remove() : i(o), r && n ? r.merge(n).order() : n;
}
function Ah(t9) {
  for (var e = t9.selection ? t9.selection() : t9, i = this._groups, r = e._groups, n = i.length, o = r.length, s = Math.min(n, o), a = new Array(n), l = 0; l < s; ++l)
    for (var h = i[l], c = r[l], u = h.length, g = a[l] = new Array(u), p, _ = 0; _ < u; ++_)
      (p = h[_] || c[_]) && (g[_] = p);
  for (; l < n; ++l)
    a[l] = i[l];
  return new mt(a, this._parents);
}
function Eh() {
  for (var t9 = this._groups, e = -1, i = t9.length; ++e < i; )
    for (var r = t9[e], n = r.length - 1, o = r[n], s; --n >= 0; )
      (s = r[n]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Mh(t9) {
  t9 || (t9 = Oh);
  function e(u, g) {
    return u && g ? t9(u.__data__, g.__data__) : !u - !g;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), o = 0; o < r; ++o) {
    for (var s = i[o], a = s.length, l = n[o] = new Array(a), h, c = 0; c < a; ++c)
      (h = s[c]) && (l[c] = h);
    l.sort(e);
  }
  return new mt(n, this._parents).order();
}
function Oh(t9, e) {
  return t9 < e ? -1 : t9 > e ? 1 : t9 >= e ? 0 : NaN;
}
function Ih() {
  var t9 = arguments[0];
  return arguments[0] = this, t9.apply(null, arguments), this;
}
function $h() {
  return Array.from(this);
}
function Dh() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length; n < o; ++n) {
      var s = r[n];
      if (s)
        return s;
    }
  return null;
}
function Nh() {
  let t9 = 0;
  for (const e of this)
    ++t9;
  return t9;
}
function Rh() {
  return !this.node();
}
function qh(t9) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], o = 0, s = n.length, a; o < s; ++o)
      (a = n[o]) && t9.call(a, a.__data__, o, n);
  return this;
}
function Ph(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function zh(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function Wh(t9, e) {
  return function() {
    this.setAttribute(t9, e);
  };
}
function Hh(t9, e) {
  return function() {
    this.setAttributeNS(t9.space, t9.local, e);
  };
}
function jh(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t9) : this.setAttribute(t9, i);
  };
}
function Uh(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t9.space, t9.local) : this.setAttributeNS(t9.space, t9.local, i);
  };
}
function Yh(t9, e) {
  var i = rr(t9);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? zh : Ph : typeof e == "function" ? i.local ? Uh : jh : i.local ? Hh : Wh)(i, e));
}
function ys(t9) {
  return t9.ownerDocument && t9.ownerDocument.defaultView || t9.document && t9 || t9.defaultView;
}
function Gh(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function Vh(t9, e, i) {
  return function() {
    this.style.setProperty(t9, e, i);
  };
}
function Xh(t9, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t9) : this.style.setProperty(t9, r, i);
  };
}
function Kh(t9, e, i) {
  return arguments.length > 1 ? this.each((e == null ? Gh : typeof e == "function" ? Xh : Vh)(t9, e, i ?? "")) : we(this.node(), t9);
}
function we(t9, e) {
  return t9.style.getPropertyValue(e) || ys(t9).getComputedStyle(t9, null).getPropertyValue(e);
}
function Zh(t9) {
  return function() {
    delete this[t9];
  };
}
function Jh(t9, e) {
  return function() {
    this[t9] = e;
  };
}
function Qh(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t9] : this[t9] = i;
  };
}
function tc(t9, e) {
  return arguments.length > 1 ? this.each((e == null ? Zh : typeof e == "function" ? Qh : Jh)(t9, e)) : this.node()[t9];
}
function Cs(t9) {
  return t9.trim().split(/^|\s+/);
}
function mn(t9) {
  return t9.classList || new xs(t9);
}
function xs(t9) {
  this._node = t9, this._names = Cs(t9.getAttribute("class") || "");
}
xs.prototype = {
  add: function(t9) {
    var e = this._names.indexOf(t9);
    e < 0 && (this._names.push(t9), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t9) {
    var e = this._names.indexOf(t9);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t9) {
    return this._names.indexOf(t9) >= 0;
  }
};
function bs(t9, e) {
  for (var i = mn(t9), r = -1, n = e.length; ++r < n; )
    i.add(e[r]);
}
function Ts(t9, e) {
  for (var i = mn(t9), r = -1, n = e.length; ++r < n; )
    i.remove(e[r]);
}
function ec(t9) {
  return function() {
    bs(this, t9);
  };
}
function ic(t9) {
  return function() {
    Ts(this, t9);
  };
}
function rc(t9, e) {
  return function() {
    (e.apply(this, arguments) ? bs : Ts)(this, t9);
  };
}
function nc(t9, e) {
  var i = Cs(t9 + "");
  if (arguments.length < 2) {
    for (var r = mn(this.node()), n = -1, o = i.length; ++n < o; )
      if (!r.contains(i[n]))
        return false;
    return true;
  }
  return this.each((typeof e == "function" ? rc : e ? ec : ic)(i, e));
}
function oc() {
  this.textContent = "";
}
function sc(t9) {
  return function() {
    this.textContent = t9;
  };
}
function ac(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function lc(t9) {
  return arguments.length ? this.each(t9 == null ? oc : (typeof t9 == "function" ? ac : sc)(t9)) : this.node().textContent;
}
function hc() {
  this.innerHTML = "";
}
function cc(t9) {
  return function() {
    this.innerHTML = t9;
  };
}
function uc(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function fc(t9) {
  return arguments.length ? this.each(t9 == null ? hc : (typeof t9 == "function" ? uc : cc)(t9)) : this.node().innerHTML;
}
function dc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function pc() {
  return this.each(dc);
}
function gc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function mc() {
  return this.each(gc);
}
function _c(t9) {
  var e = typeof t9 == "function" ? t9 : ds(t9);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function yc() {
  return null;
}
function Cc(t9, e) {
  var i = typeof t9 == "function" ? t9 : ds(t9), r = e == null ? yc : typeof e == "function" ? e : gn(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function xc() {
  var t9 = this.parentNode;
  t9 && t9.removeChild(this);
}
function bc() {
  return this.each(xc);
}
function Tc() {
  var t9 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function Sc() {
  var t9 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function kc(t9) {
  return this.select(t9 ? Sc : Tc);
}
function vc(t9) {
  return arguments.length ? this.property("__data__", t9) : this.node().__data__;
}
function wc(t9) {
  return function(e) {
    t9.call(this, e, this.__data__);
  };
}
function Bc(t9) {
  return t9.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function Fc(t9) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, o; i < n; ++i)
        o = e[i], (!t9.type || o.type === t9.type) && o.name === t9.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Lc(t9, e, i) {
  return function() {
    var r = this.__on, n, o = wc(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((n = r[s]).type === t9.type && n.name === t9.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = o, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t9.type, o, i), n = { type: t9.type, name: t9.name, value: e, listener: o, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function Ac(t9, e, i) {
  var r = Bc(t9 + ""), n, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, h = a.length, c; l < h; ++l)
        for (n = 0, c = a[l]; n < o; ++n)
          if ((s = r[n]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? Lc : Fc, n = 0; n < o; ++n)
    this.each(a(r[n], e, i));
  return this;
}
function Ss(t9, e, i) {
  var r = ys(t9), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, false, false)), t9.dispatchEvent(n);
}
function Ec(t9, e) {
  return function() {
    return Ss(this, t9, e);
  };
}
function Mc(t9, e) {
  return function() {
    return Ss(this, t9, e.apply(this, arguments));
  };
}
function Oc(t9, e) {
  return this.each((typeof e == "function" ? Mc : Ec)(t9, e));
}
function* Ic() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length, s; n < o; ++n)
      (s = r[n]) && (yield s);
}
var ks = [null];
function mt(t9, e) {
  this._groups = t9, this._parents = e;
}
function ni() {
  return new mt([[document.documentElement]], ks);
}
function $c() {
  return this;
}
mt.prototype = ni.prototype = {
  constructor: mt,
  select: ah,
  selectAll: uh,
  selectChild: gh,
  selectChildren: Ch,
  filter: xh,
  data: wh,
  enter: bh,
  exit: Fh,
  join: Lh,
  merge: Ah,
  selection: $c,
  order: Eh,
  sort: Mh,
  call: Ih,
  nodes: $h,
  node: Dh,
  size: Nh,
  empty: Rh,
  each: qh,
  attr: Yh,
  style: Kh,
  property: tc,
  classed: nc,
  text: lc,
  html: fc,
  raise: pc,
  lower: mc,
  append: _c,
  insert: Cc,
  remove: bc,
  clone: kc,
  datum: vc,
  on: Ac,
  dispatch: Oc,
  [Symbol.iterator]: Ic
};
function Ct(t9) {
  return typeof t9 == "string" ? new mt([[document.querySelector(t9)]], [document.documentElement]) : new mt([[t9]], ks);
}
function _n(t9, e, i) {
  t9.prototype = e.prototype = i, i.constructor = t9;
}
function vs(t9, e) {
  var i = Object.create(t9.prototype);
  for (var r in e)
    i[r] = e[r];
  return i;
}
function oi() {
}
var Ve = 0.7;
var Ni = 1 / Ve;
var ve = "\\s*([+-]?\\d+)\\s*";
var Xe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var Mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var Dc = /^#([0-9a-f]{3,8})$/;
var Nc = new RegExp(`^rgb\\(${ve},${ve},${ve}\\)$`);
var Rc = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`);
var qc = new RegExp(`^rgba\\(${ve},${ve},${ve},${Xe}\\)$`);
var Pc = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Xe}\\)$`);
var zc = new RegExp(`^hsl\\(${Xe},${Mt},${Mt}\\)$`);
var Wc = new RegExp(`^hsla\\(${Xe},${Mt},${Mt},${Xe}\\)$`);
var so = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
_n(oi, Ke, {
  copy(t9) {
    return Object.assign(new this.constructor(), this, t9);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ao,
  // Deprecated! Use color.formatHex.
  formatHex: ao,
  formatHex8: Hc,
  formatHsl: jc,
  formatRgb: lo,
  toString: lo
});
function ao() {
  return this.rgb().formatHex();
}
function Hc() {
  return this.rgb().formatHex8();
}
function jc() {
  return ws(this).formatHsl();
}
function lo() {
  return this.rgb().formatRgb();
}
function Ke(t9) {
  var e, i;
  return t9 = (t9 + "").trim().toLowerCase(), (e = Dc.exec(t9)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? ho(e) : i === 3 ? new ft(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? gi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? gi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Nc.exec(t9)) ? new ft(e[1], e[2], e[3], 1) : (e = Rc.exec(t9)) ? new ft(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = qc.exec(t9)) ? gi(e[1], e[2], e[3], e[4]) : (e = Pc.exec(t9)) ? gi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = zc.exec(t9)) ? fo(e[1], e[2] / 100, e[3] / 100, 1) : (e = Wc.exec(t9)) ? fo(e[1], e[2] / 100, e[3] / 100, e[4]) : so.hasOwnProperty(t9) ? ho(so[t9]) : t9 === "transparent" ? new ft(NaN, NaN, NaN, 0) : null;
}
function ho(t9) {
  return new ft(t9 >> 16 & 255, t9 >> 8 & 255, t9 & 255, 1);
}
function gi(t9, e, i, r) {
  return r <= 0 && (t9 = e = i = NaN), new ft(t9, e, i, r);
}
function Uc(t9) {
  return t9 instanceof oi || (t9 = Ke(t9)), t9 ? (t9 = t9.rgb(), new ft(t9.r, t9.g, t9.b, t9.opacity)) : new ft();
}
function Gr(t9, e, i, r) {
  return arguments.length === 1 ? Uc(t9) : new ft(t9, e, i, r ?? 1);
}
function ft(t9, e, i, r) {
  this.r = +t9, this.g = +e, this.b = +i, this.opacity = +r;
}
_n(ft, Gr, vs(oi, {
  brighter(t9) {
    return t9 = t9 == null ? Ni : Math.pow(Ni, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ve : Math.pow(Ve, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ft(le(this.r), le(this.g), le(this.b), Ri(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: co,
  // Deprecated! Use color.formatHex.
  formatHex: co,
  formatHex8: Yc,
  formatRgb: uo,
  toString: uo
}));
function co() {
  return `#${ae(this.r)}${ae(this.g)}${ae(this.b)}`;
}
function Yc() {
  return `#${ae(this.r)}${ae(this.g)}${ae(this.b)}${ae((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function uo() {
  const t9 = Ri(this.opacity);
  return `${t9 === 1 ? "rgb(" : "rgba("}${le(this.r)}, ${le(this.g)}, ${le(this.b)}${t9 === 1 ? ")" : `, ${t9})`}`;
}
function Ri(t9) {
  return isNaN(t9) ? 1 : Math.max(0, Math.min(1, t9));
}
function le(t9) {
  return Math.max(0, Math.min(255, Math.round(t9) || 0));
}
function ae(t9) {
  return t9 = le(t9), (t9 < 16 ? "0" : "") + t9.toString(16);
}
function fo(t9, e, i, r) {
  return r <= 0 ? t9 = e = i = NaN : i <= 0 || i >= 1 ? t9 = e = NaN : e <= 0 && (t9 = NaN), new vt(t9, e, i, r);
}
function ws(t9) {
  if (t9 instanceof vt)
    return new vt(t9.h, t9.s, t9.l, t9.opacity);
  if (t9 instanceof oi || (t9 = Ke(t9)), !t9)
    return new vt();
  if (t9 instanceof vt)
    return t9;
  t9 = t9.rgb();
  var e = t9.r / 255, i = t9.g / 255, r = t9.b / 255, n = Math.min(e, i, r), o = Math.max(e, i, r), s = NaN, a = o - n, l = (o + n) / 2;
  return a ? (e === o ? s = (i - r) / a + (i < r) * 6 : i === o ? s = (r - e) / a + 2 : s = (e - i) / a + 4, a /= l < 0.5 ? o + n : 2 - o - n, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new vt(s, a, l, t9.opacity);
}
function Gc(t9, e, i, r) {
  return arguments.length === 1 ? ws(t9) : new vt(t9, e, i, r ?? 1);
}
function vt(t9, e, i, r) {
  this.h = +t9, this.s = +e, this.l = +i, this.opacity = +r;
}
_n(vt, Gc, vs(oi, {
  brighter(t9) {
    return t9 = t9 == null ? Ni : Math.pow(Ni, t9), new vt(this.h, this.s, this.l * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ve : Math.pow(Ve, t9), new vt(this.h, this.s, this.l * t9, this.opacity);
  },
  rgb() {
    var t9 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t9) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new ft(
      Lr(t9 >= 240 ? t9 - 240 : t9 + 120, n, r),
      Lr(t9, n, r),
      Lr(t9 < 120 ? t9 + 240 : t9 - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new vt(po(this.h), mi(this.s), mi(this.l), Ri(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t9 = Ri(this.opacity);
    return `${t9 === 1 ? "hsl(" : "hsla("}${po(this.h)}, ${mi(this.s) * 100}%, ${mi(this.l) * 100}%${t9 === 1 ? ")" : `, ${t9})`}`;
  }
}));
function po(t9) {
  return t9 = (t9 || 0) % 360, t9 < 0 ? t9 + 360 : t9;
}
function mi(t9) {
  return Math.max(0, Math.min(1, t9 || 0));
}
function Lr(t9, e, i) {
  return (t9 < 60 ? e + (i - e) * t9 / 60 : t9 < 180 ? i : t9 < 240 ? e + (i - e) * (240 - t9) / 60 : e) * 255;
}
var yn = (t9) => () => t9;
function Bs(t9, e) {
  return function(i) {
    return t9 + i * e;
  };
}
function Vc(t9, e, i) {
  return t9 = Math.pow(t9, i), e = Math.pow(e, i) - t9, i = 1 / i, function(r) {
    return Math.pow(t9 + r * e, i);
  };
}
function vx(t9, e) {
  var i = e - t9;
  return i ? Bs(t9, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : yn(isNaN(t9) ? e : t9);
}
function Xc(t9) {
  return (t9 = +t9) == 1 ? Fs : function(e, i) {
    return i - e ? Vc(e, i, t9) : yn(isNaN(e) ? i : e);
  };
}
function Fs(t9, e) {
  var i = e - t9;
  return i ? Bs(t9, i) : yn(isNaN(t9) ? e : t9);
}
var go = function t(e) {
  var i = Xc(e);
  function r(n, o) {
    var s = i((n = Gr(n)).r, (o = Gr(o)).r), a = i(n.g, o.g), l = i(n.b, o.b), h = Fs(n.opacity, o.opacity);
    return function(c) {
      return n.r = s(c), n.g = a(c), n.b = l(c), n.opacity = h(c), n + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Zt(t9, e) {
  return t9 = +t9, e = +e, function(i) {
    return t9 * (1 - i) + e * i;
  };
}
var Vr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var Ar = new RegExp(Vr.source, "g");
function Kc(t9) {
  return function() {
    return t9;
  };
}
function Zc(t9) {
  return function(e) {
    return t9(e) + "";
  };
}
function Jc(t9, e) {
  var i = Vr.lastIndex = Ar.lastIndex = 0, r, n, o, s = -1, a = [], l = [];
  for (t9 = t9 + "", e = e + ""; (r = Vr.exec(t9)) && (n = Ar.exec(e)); )
    (o = n.index) > i && (o = e.slice(i, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (n = n[0]) ? a[s] ? a[s] += n : a[++s] = n : (a[++s] = null, l.push({ i: s, x: Zt(r, n) })), i = Ar.lastIndex;
  return i < e.length && (o = e.slice(i), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? l[0] ? Zc(l[0].x) : Kc(e) : (e = l.length, function(h) {
    for (var c = 0, u; c < e; ++c)
      a[(u = l[c]).i] = u.x(h);
    return a.join("");
  });
}
var mo = 180 / Math.PI;
var Xr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ls(t9, e, i, r, n, o) {
  var s, a, l;
  return (s = Math.sqrt(t9 * t9 + e * e)) && (t9 /= s, e /= s), (l = t9 * i + e * r) && (i -= t9 * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t9 * r < e * i && (t9 = -t9, e = -e, l = -l, s = -s), {
    translateX: n,
    translateY: o,
    rotate: Math.atan2(e, t9) * mo,
    skewX: Math.atan(l) * mo,
    scaleX: s,
    scaleY: a
  };
}
var _i;
function Qc(t9) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t9 + "");
  return e.isIdentity ? Xr : Ls(e.a, e.b, e.c, e.d, e.e, e.f);
}
function tu(t9) {
  return t9 == null || (_i || (_i = document.createElementNS("http://www.w3.org/2000/svg", "g")), _i.setAttribute("transform", t9), !(t9 = _i.transform.baseVal.consolidate())) ? Xr : (t9 = t9.matrix, Ls(t9.a, t9.b, t9.c, t9.d, t9.e, t9.f));
}
function As(t9, e, i, r) {
  function n(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, c, u, g, p, _) {
    if (h !== u || c !== g) {
      var v = p.push("translate(", null, e, null, i);
      _.push({ i: v - 4, x: Zt(h, u) }, { i: v - 2, x: Zt(c, g) });
    } else
      (u || g) && p.push("translate(" + u + e + g + i);
  }
  function s(h, c, u, g) {
    h !== c ? (h - c > 180 ? c += 360 : c - h > 180 && (h += 360), g.push({ i: u.push(n(u) + "rotate(", null, r) - 2, x: Zt(h, c) })) : c && u.push(n(u) + "rotate(" + c + r);
  }
  function a(h, c, u, g) {
    h !== c ? g.push({ i: u.push(n(u) + "skewX(", null, r) - 2, x: Zt(h, c) }) : c && u.push(n(u) + "skewX(" + c + r);
  }
  function l(h, c, u, g, p, _) {
    if (h !== u || c !== g) {
      var v = p.push(n(p) + "scale(", null, ",", null, ")");
      _.push({ i: v - 4, x: Zt(h, u) }, { i: v - 2, x: Zt(c, g) });
    } else
      (u !== 1 || g !== 1) && p.push(n(p) + "scale(" + u + "," + g + ")");
  }
  return function(h, c) {
    var u = [], g = [];
    return h = t9(h), c = t9(c), o(h.translateX, h.translateY, c.translateX, c.translateY, u, g), s(h.rotate, c.rotate, u, g), a(h.skewX, c.skewX, u, g), l(h.scaleX, h.scaleY, c.scaleX, c.scaleY, u, g), h = c = null, function(p) {
      for (var _ = -1, v = g.length, M; ++_ < v; )
        u[(M = g[_]).i] = M.x(p);
      return u.join("");
    };
  };
}
var eu = As(Qc, "px, ", "px)", "deg)");
var iu = As(tu, ", ", ")", ")");
var Be = 0;
var ze = 0;
var Ne = 0;
var Es = 1e3;
var qi;
var We;
var Pi = 0;
var ue = 0;
var nr = 0;
var Ze = typeof performance == "object" && performance.now ? performance : Date;
var Ms = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t9) {
  setTimeout(t9, 17);
};
function Cn() {
  return ue || (Ms(ru), ue = Ze.now() + nr);
}
function ru() {
  ue = 0;
}
function zi() {
  this._call = this._time = this._next = null;
}
zi.prototype = Os.prototype = {
  constructor: zi,
  restart: function(t9, e, i) {
    if (typeof t9 != "function")
      throw new TypeError("callback is not a function");
    i = (i == null ? Cn() : +i) + (e == null ? 0 : +e), !this._next && We !== this && (We ? We._next = this : qi = this, We = this), this._call = t9, this._time = i, Kr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Kr());
  }
};
function Os(t9, e, i) {
  var r = new zi();
  return r.restart(t9, e, i), r;
}
function nu() {
  Cn(), ++Be;
  for (var t9 = qi, e; t9; )
    (e = ue - t9._time) >= 0 && t9._call.call(void 0, e), t9 = t9._next;
  --Be;
}
function _o() {
  ue = (Pi = Ze.now()) + nr, Be = ze = 0;
  try {
    nu();
  } finally {
    Be = 0, su(), ue = 0;
  }
}
function ou() {
  var t9 = Ze.now(), e = t9 - Pi;
  e > Es && (nr -= e, Pi = t9);
}
function su() {
  for (var t9, e = qi, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t9 = e, e = e._next) : (i = e._next, e._next = null, e = t9 ? t9._next = i : qi = i);
  We = t9, Kr(r);
}
function Kr(t9) {
  if (!Be) {
    ze && (ze = clearTimeout(ze));
    var e = t9 - ue;
    e > 24 ? (t9 < 1 / 0 && (ze = setTimeout(_o, t9 - Ze.now() - nr)), Ne && (Ne = clearInterval(Ne))) : (Ne || (Pi = Ze.now(), Ne = setInterval(ou, Es)), Be = 1, Ms(_o));
  }
}
function yo(t9, e, i) {
  var r = new zi();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t9(n + e);
  }, e, i), r;
}
var au = fs("start", "end", "cancel", "interrupt");
var lu = [];
var Is = 0;
var Co = 1;
var Zr = 2;
var vi = 3;
var xo = 4;
var Jr = 5;
var wi = 6;
function or(t9, e, i, r, n, o) {
  var s = t9.__transition;
  if (!s)
    t9.__transition = {};
  else if (i in s)
    return;
  hu(t9, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: au,
    tween: lu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Is
  });
}
function xn(t9, e) {
  var i = Lt(t9, e);
  if (i.state > Is)
    throw new Error("too late; already scheduled");
  return i;
}
function $t(t9, e) {
  var i = Lt(t9, e);
  if (i.state > vi)
    throw new Error("too late; already running");
  return i;
}
function Lt(t9, e) {
  var i = t9.__transition;
  if (!i || !(i = i[e]))
    throw new Error("transition not found");
  return i;
}
function hu(t9, e, i) {
  var r = t9.__transition, n;
  r[e] = i, i.timer = Os(o, 0, i.time);
  function o(h) {
    i.state = Co, i.timer.restart(s, i.delay, i.time), i.delay <= h && s(h - i.delay);
  }
  function s(h) {
    var c, u, g, p;
    if (i.state !== Co)
      return l();
    for (c in r)
      if (p = r[c], p.name === i.name) {
        if (p.state === vi)
          return yo(s);
        p.state === xo ? (p.state = wi, p.timer.stop(), p.on.call("interrupt", t9, t9.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = wi, p.timer.stop(), p.on.call("cancel", t9, t9.__data__, p.index, p.group), delete r[c]);
      }
    if (yo(function() {
      i.state === vi && (i.state = xo, i.timer.restart(a, i.delay, i.time), a(h));
    }), i.state = Zr, i.on.call("start", t9, t9.__data__, i.index, i.group), i.state === Zr) {
      for (i.state = vi, n = new Array(g = i.tween.length), c = 0, u = -1; c < g; ++c)
        (p = i.tween[c].value.call(t9, t9.__data__, i.index, i.group)) && (n[++u] = p);
      n.length = u + 1;
    }
  }
  function a(h) {
    for (var c = h < i.duration ? i.ease.call(null, h / i.duration) : (i.timer.restart(l), i.state = Jr, 1), u = -1, g = n.length; ++u < g; )
      n[u].call(t9, c);
    i.state === Jr && (i.on.call("end", t9, t9.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = wi, i.timer.stop(), delete r[e];
    for (var h in r)
      return;
    delete t9.__transition;
  }
}
function cu(t9, e) {
  var i = t9.__transition, r, n, o = true, s;
  if (i) {
    e = e == null ? null : e + "";
    for (s in i) {
      if ((r = i[s]).name !== e) {
        o = false;
        continue;
      }
      n = r.state > Zr && r.state < Jr, r.state = wi, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t9, t9.__data__, r.index, r.group), delete i[s];
    }
    o && delete t9.__transition;
  }
}
function uu(t9) {
  return this.each(function() {
    cu(this, t9);
  });
}
function fu(t9, e) {
  var i, r;
  return function() {
    var n = $t(this, t9), o = n.tween;
    if (o !== i) {
      r = i = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function du(t9, e, i) {
  var r, n;
  if (typeof i != "function")
    throw new Error();
  return function() {
    var o = $t(this, t9), s = o.tween;
    if (s !== r) {
      n = (r = s).slice();
      for (var a = { name: e, value: i }, l = 0, h = n.length; l < h; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === h && n.push(a);
    }
    o.tween = n;
  };
}
function pu(t9, e) {
  var i = this._id;
  if (t9 += "", arguments.length < 2) {
    for (var r = Lt(this.node(), i).tween, n = 0, o = r.length, s; n < o; ++n)
      if ((s = r[n]).name === t9)
        return s.value;
    return null;
  }
  return this.each((e == null ? fu : du)(i, t9, e));
}
function bn(t9, e, i) {
  var r = t9._id;
  return t9.each(function() {
    var n = $t(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return Lt(n, r).value[e];
  };
}
function $s(t9, e) {
  var i;
  return (typeof e == "number" ? Zt : e instanceof Ke ? go : (i = Ke(e)) ? (e = i, go) : Jc)(t9, e);
}
function gu(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function mu(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function _u(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttribute(t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function yu(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttributeNS(t9.space, t9.local);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Cu(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttribute(t9) : (s = this.getAttribute(t9), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function xu(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t9.space, t9.local) : (s = this.getAttributeNS(t9.space, t9.local), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function bu(t9, e) {
  var i = rr(t9), r = i === "transform" ? iu : $s;
  return this.attrTween(t9, typeof e == "function" ? (i.local ? xu : Cu)(i, r, bn(this, "attr." + t9, e)) : e == null ? (i.local ? mu : gu)(i) : (i.local ? yu : _u)(i, r, e));
}
function Tu(t9, e) {
  return function(i) {
    this.setAttribute(t9, e.call(this, i));
  };
}
function Su(t9, e) {
  return function(i) {
    this.setAttributeNS(t9.space, t9.local, e.call(this, i));
  };
}
function ku(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Su(t9, o)), i;
  }
  return n._value = e, n;
}
function vu(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Tu(t9, o)), i;
  }
  return n._value = e, n;
}
function wu(t9, e) {
  var i = "attr." + t9;
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  var r = rr(t9);
  return this.tween(i, (r.local ? ku : vu)(r, e));
}
function Bu(t9, e) {
  return function() {
    xn(this, t9).delay = +e.apply(this, arguments);
  };
}
function Fu(t9, e) {
  return e = +e, function() {
    xn(this, t9).delay = e;
  };
}
function Lu(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? Bu : Fu)(e, t9)) : Lt(this.node(), e).delay;
}
function Au(t9, e) {
  return function() {
    $t(this, t9).duration = +e.apply(this, arguments);
  };
}
function Eu(t9, e) {
  return e = +e, function() {
    $t(this, t9).duration = e;
  };
}
function Mu(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? Au : Eu)(e, t9)) : Lt(this.node(), e).duration;
}
function Ou(t9, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    $t(this, t9).ease = e;
  };
}
function Iu(t9) {
  var e = this._id;
  return arguments.length ? this.each(Ou(e, t9)) : Lt(this.node(), e).ease;
}
function $u(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function")
      throw new Error();
    $t(this, t9).ease = i;
  };
}
function Du(t9) {
  if (typeof t9 != "function")
    throw new Error();
  return this.each($u(this._id, t9));
}
function Nu(t9) {
  typeof t9 != "function" && (t9 = gs(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new Ut(r, this._parents, this._name, this._id);
}
function Ru(t9) {
  if (t9._id !== this._id)
    throw new Error();
  for (var e = this._groups, i = t9._groups, r = e.length, n = i.length, o = Math.min(r, n), s = new Array(r), a = 0; a < o; ++a)
    for (var l = e[a], h = i[a], c = l.length, u = s[a] = new Array(c), g, p = 0; p < c; ++p)
      (g = l[p] || h[p]) && (u[p] = g);
  for (; a < r; ++a)
    s[a] = e[a];
  return new Ut(s, this._parents, this._name, this._id);
}
function qu(t9) {
  return (t9 + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function Pu(t9, e, i) {
  var r, n, o = qu(e) ? xn : $t;
  return function() {
    var s = o(this, t9), a = s.on;
    a !== r && (n = (r = a).copy()).on(e, i), s.on = n;
  };
}
function zu(t9, e) {
  var i = this._id;
  return arguments.length < 2 ? Lt(this.node(), i).on.on(t9) : this.each(Pu(i, t9, e));
}
function Wu(t9) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition)
      if (+i !== t9)
        return;
    e && e.removeChild(this);
  };
}
function Hu() {
  return this.on("end.remove", Wu(this._id));
}
function ju(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = gn(t9));
  for (var r = this._groups, n = r.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = r[s], l = a.length, h = o[s] = new Array(l), c, u, g = 0; g < l; ++g)
      (c = a[g]) && (u = t9.call(c, c.__data__, g, a)) && ("__data__" in c && (u.__data__ = c.__data__), h[g] = u, or(h[g], e, i, g, h, Lt(c, i)));
  return new Ut(o, this._parents, e, i);
}
function Uu(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = ps(t9));
  for (var r = this._groups, n = r.length, o = [], s = [], a = 0; a < n; ++a)
    for (var l = r[a], h = l.length, c, u = 0; u < h; ++u)
      if (c = l[u]) {
        for (var g = t9.call(c, c.__data__, u, l), p, _ = Lt(c, i), v = 0, M = g.length; v < M; ++v)
          (p = g[v]) && or(p, e, i, v, g, _);
        o.push(g), s.push(c);
      }
  return new Ut(o, s, e, i);
}
var Yu = ni.prototype.constructor;
function Gu() {
  return new Yu(this._groups, this._parents);
}
function Vu(t9, e) {
  var i, r, n;
  return function() {
    var o = we(this, t9), s = (this.style.removeProperty(t9), we(this, t9));
    return o === s ? null : o === i && s === r ? n : n = e(i = o, r = s);
  };
}
function Ds(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function Xu(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = we(this, t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Ku(t9, e, i) {
  var r, n, o;
  return function() {
    var s = we(this, t9), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t9), we(this, t9))), s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a));
  };
}
function Zu(t9, e) {
  var i, r, n, o = "style." + e, s = "end." + o, a;
  return function() {
    var l = $t(this, t9), h = l.on, c = l.value[o] == null ? a || (a = Ds(e)) : void 0;
    (h !== i || n !== c) && (r = (i = h).copy()).on(s, n = c), l.on = r;
  };
}
function Ju(t9, e, i) {
  var r = (t9 += "") == "transform" ? eu : $s;
  return e == null ? this.styleTween(t9, Vu(t9, r)).on("end.style." + t9, Ds(t9)) : typeof e == "function" ? this.styleTween(t9, Ku(t9, r, bn(this, "style." + t9, e))).each(Zu(this._id, t9)) : this.styleTween(t9, Xu(t9, r, e), i).on("end.style." + t9, null);
}
function Qu(t9, e, i) {
  return function(r) {
    this.style.setProperty(t9, e.call(this, r), i);
  };
}
function tf(t9, e, i) {
  var r, n;
  function o() {
    var s = e.apply(this, arguments);
    return s !== n && (r = (n = s) && Qu(t9, s, i)), r;
  }
  return o._value = e, o;
}
function ef(t9, e, i) {
  var r = "style." + (t9 += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, tf(t9, e, i ?? ""));
}
function rf(t9) {
  return function() {
    this.textContent = t9;
  };
}
function nf(t9) {
  return function() {
    var e = t9(this);
    this.textContent = e ?? "";
  };
}
function of(t9) {
  return this.tween("text", typeof t9 == "function" ? nf(bn(this, "text", t9)) : rf(t9 == null ? "" : t9 + ""));
}
function sf(t9) {
  return function(e) {
    this.textContent = t9.call(this, e);
  };
}
function af(t9) {
  var e, i;
  function r() {
    var n = t9.apply(this, arguments);
    return n !== i && (e = (i = n) && sf(n)), e;
  }
  return r._value = t9, r;
}
function lf(t9) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t9 == null)
    return this.tween(e, null);
  if (typeof t9 != "function")
    throw new Error();
  return this.tween(e, af(t9));
}
function hf() {
  for (var t9 = this._name, e = this._id, i = Ns(), r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      if (l = s[h]) {
        var c = Lt(l, e);
        or(l, t9, i, h, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ut(r, this._parents, t9, i);
}
function cf() {
  var t9, e, i = this, r = i._id, n = i.size();
  return new Promise(function(o, s) {
    var a = { value: s }, l = { value: function() {
      --n === 0 && o();
    } };
    i.each(function() {
      var h = $t(this, r), c = h.on;
      c !== t9 && (e = (t9 = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), h.on = e;
    }), n === 0 && o();
  });
}
var uf = 0;
function Ut(t9, e, i, r) {
  this._groups = t9, this._parents = e, this._name = i, this._id = r;
}
function Ns() {
  return ++uf;
}
var Wt = ni.prototype;
Ut.prototype = {
  constructor: Ut,
  select: ju,
  selectAll: Uu,
  selectChild: Wt.selectChild,
  selectChildren: Wt.selectChildren,
  filter: Nu,
  merge: Ru,
  selection: Gu,
  transition: hf,
  call: Wt.call,
  nodes: Wt.nodes,
  node: Wt.node,
  size: Wt.size,
  empty: Wt.empty,
  each: Wt.each,
  on: zu,
  attr: bu,
  attrTween: wu,
  style: Ju,
  styleTween: ef,
  text: of,
  textTween: lf,
  remove: Hu,
  tween: pu,
  delay: Lu,
  duration: Mu,
  ease: Iu,
  easeVarying: Du,
  end: cf,
  [Symbol.iterator]: Wt[Symbol.iterator]
};
function ff(t9) {
  return ((t9 *= 2) <= 1 ? t9 * t9 * t9 : (t9 -= 2) * t9 * t9 + 2) / 2;
}
var df = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ff
};
function pf(t9, e) {
  for (var i; !(i = t9.__transition) || !(i = i[e]); )
    if (!(t9 = t9.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function gf(t9) {
  var e, i;
  t9 instanceof Ut ? (e = t9._id, t9 = t9._name) : (e = Ns(), (i = df).time = Cn(), t9 = t9 == null ? null : t9 + "");
  for (var r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && or(l, t9, e, h, s, i || pf(l, e));
  return new Ut(r, this._parents, t9, e);
}
ni.prototype.interrupt = uu;
ni.prototype.transition = gf;
var wx = Math.abs;
var Bx = Math.atan2;
var Fx = Math.cos;
var Lx = Math.max;
var Ax = Math.min;
var Ex = Math.sin;
var Mx = Math.sqrt;
var bo = 1e-12;
var Tn = Math.PI;
var To = Tn / 2;
var Ox = 2 * Tn;
function Ix(t9) {
  return t9 > 1 ? 0 : t9 < -1 ? Tn : Math.acos(t9);
}
function $x(t9) {
  return t9 >= 1 ? To : t9 <= -1 ? -To : Math.asin(t9);
}
function Rs(t9) {
  this._context = t9;
}
Rs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t9, e);
        break;
    }
  }
};
function mf(t9) {
  return new Rs(t9);
}
var qs = class {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
};
function _f(t9) {
  return new qs(t9, true);
}
function yf(t9) {
  return new qs(t9, false);
}
function te() {
}
function Wi(t9, e, i) {
  t9._context.bezierCurveTo(
    (2 * t9._x0 + t9._x1) / 3,
    (2 * t9._y0 + t9._y1) / 3,
    (t9._x0 + 2 * t9._x1) / 3,
    (t9._y0 + 2 * t9._y1) / 3,
    (t9._x0 + 4 * t9._x1 + e) / 6,
    (t9._y0 + 4 * t9._y1 + i) / 6
  );
}
function sr(t9) {
  this._context = t9;
}
sr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Wi(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Wi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Cf(t9) {
  return new sr(t9);
}
function Ps(t9) {
  this._context = t9;
}
Ps.prototype = {
  areaStart: te,
  areaEnd: te,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t9, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t9, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t9, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t9) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        Wi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function xf(t9) {
  return new Ps(t9);
}
function zs(t9) {
  this._context = t9;
}
zs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t9) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      default:
        Wi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function bf(t9) {
  return new zs(t9);
}
function Ws(t9, e) {
  this._basis = new sr(t9), this._beta = e;
}
Ws.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length - 1;
    if (i > 0)
      for (var r = t9[0], n = e[0], o = t9[i] - r, s = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t9[a] + (1 - this._beta) * (r + l * o),
          this._beta * e[a] + (1 - this._beta) * (n + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
var Tf = function t2(e) {
  function i(r) {
    return e === 1 ? new sr(r) : new Ws(r, e);
  }
  return i.beta = function(r) {
    return t2(+r);
  }, i;
}(0.85);
function Hi(t9, e, i) {
  t9._context.bezierCurveTo(
    t9._x1 + t9._k * (t9._x2 - t9._x0),
    t9._y1 + t9._k * (t9._y2 - t9._y0),
    t9._x2 + t9._k * (t9._x1 - e),
    t9._y2 + t9._k * (t9._y1 - i),
    t9._x2,
    t9._y2
  );
}
function Sn(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
Sn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Hi(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2, this._x1 = t9, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        Hi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Sf = function t3(e) {
  function i(r) {
    return new Sn(r, e);
  }
  return i.tension = function(r) {
    return t3(+r);
  }, i;
}(0);
function kn(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
kn.prototype = {
  areaStart: te,
  areaEnd: te,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        Hi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var kf = function t4(e) {
  function i(r) {
    return new kn(r, e);
  }
  return i.tension = function(r) {
    return t4(+r);
  }, i;
}(0);
function vn(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
vn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Hi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var vf = function t5(e) {
  function i(r) {
    return new vn(r, e);
  }
  return i.tension = function(r) {
    return t5(+r);
  }, i;
}(0);
function wn(t9, e, i) {
  var r = t9._x1, n = t9._y1, o = t9._x2, s = t9._y2;
  if (t9._l01_a > bo) {
    var a = 2 * t9._l01_2a + 3 * t9._l01_a * t9._l12_a + t9._l12_2a, l = 3 * t9._l01_a * (t9._l01_a + t9._l12_a);
    r = (r * a - t9._x0 * t9._l12_2a + t9._x2 * t9._l01_2a) / l, n = (n * a - t9._y0 * t9._l12_2a + t9._y2 * t9._l01_2a) / l;
  }
  if (t9._l23_a > bo) {
    var h = 2 * t9._l23_2a + 3 * t9._l23_a * t9._l12_a + t9._l12_2a, c = 3 * t9._l23_a * (t9._l23_a + t9._l12_a);
    o = (o * h + t9._x1 * t9._l23_2a - e * t9._l12_2a) / c, s = (s * h + t9._y1 * t9._l23_2a - i * t9._l12_2a) / c;
  }
  t9._context.bezierCurveTo(r, n, o, s, t9._x2, t9._y2);
}
function Hs(t9, e) {
  this._context = t9, this._alpha = e;
}
Hs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        wn(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var wf = function t6(e) {
  function i(r) {
    return e ? new Hs(r, e) : new Sn(r, 0);
  }
  return i.alpha = function(r) {
    return t6(+r);
  }, i;
}(0.5);
function js(t9, e) {
  this._context = t9, this._alpha = e;
}
js.prototype = {
  areaStart: te,
  areaEnd: te,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        wn(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Bf = function t7(e) {
  function i(r) {
    return e ? new js(r, e) : new kn(r, 0);
  }
  return i.alpha = function(r) {
    return t7(+r);
  }, i;
}(0.5);
function Us(t9, e) {
  this._context = t9, this._alpha = e;
}
Us.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        wn(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Ff = function t8(e) {
  function i(r) {
    return e ? new Us(r, e) : new vn(r, 0);
  }
  return i.alpha = function(r) {
    return t8(+r);
  }, i;
}(0.5);
function Ys(t9) {
  this._context = t9;
}
Ys.prototype = {
  areaStart: te,
  areaEnd: te,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t9, e) {
    t9 = +t9, e = +e, this._point ? this._context.lineTo(t9, e) : (this._point = 1, this._context.moveTo(t9, e));
  }
};
function Lf(t9) {
  return new Ys(t9);
}
function So(t9) {
  return t9 < 0 ? -1 : 1;
}
function ko(t9, e, i) {
  var r = t9._x1 - t9._x0, n = e - t9._x1, o = (t9._y1 - t9._y0) / (r || n < 0 && -0), s = (i - t9._y1) / (n || r < 0 && -0), a = (o * n + s * r) / (r + n);
  return (So(o) + So(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function vo(t9, e) {
  var i = t9._x1 - t9._x0;
  return i ? (3 * (t9._y1 - t9._y0) / i - e) / 2 : e;
}
function Er(t9, e, i) {
  var r = t9._x0, n = t9._y0, o = t9._x1, s = t9._y1, a = (o - r) / 3;
  t9._context.bezierCurveTo(r + a, n + a * e, o - a, s - a * i, o, s);
}
function ji(t9) {
  this._context = t9;
}
ji.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Er(this, this._t0, vo(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    var i = NaN;
    if (t9 = +t9, e = +e, !(t9 === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Er(this, vo(this, i = ko(this, t9, e)), i);
          break;
        default:
          Er(this, this._t0, i = ko(this, t9, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function Gs(t9) {
  this._context = new Vs(t9);
}
(Gs.prototype = Object.create(ji.prototype)).point = function(t9, e) {
  ji.prototype.point.call(this, e, t9);
};
function Vs(t9) {
  this._context = t9;
}
Vs.prototype = {
  moveTo: function(t9, e) {
    this._context.moveTo(e, t9);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t9, e) {
    this._context.lineTo(e, t9);
  },
  bezierCurveTo: function(t9, e, i, r, n, o) {
    this._context.bezierCurveTo(e, t9, r, i, o, n);
  }
};
function Af(t9) {
  return new ji(t9);
}
function Ef(t9) {
  return new Gs(t9);
}
function Xs(t9) {
  this._context = t9;
}
Xs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length;
    if (i)
      if (this._line ? this._context.lineTo(t9[0], e[0]) : this._context.moveTo(t9[0], e[0]), i === 2)
        this._context.lineTo(t9[1], e[1]);
      else
        for (var r = wo(t9), n = wo(e), o = 0, s = 1; s < i; ++o, ++s)
          this._context.bezierCurveTo(r[0][o], n[0][o], r[1][o], n[1][o], t9[s], e[s]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
function wo(t9) {
  var e, i = t9.length - 1, r, n = new Array(i), o = new Array(i), s = new Array(i);
  for (n[0] = 0, o[0] = 2, s[0] = t9[0] + 2 * t9[1], e = 1; e < i - 1; ++e)
    n[e] = 1, o[e] = 4, s[e] = 4 * t9[e] + 2 * t9[e + 1];
  for (n[i - 1] = 2, o[i - 1] = 7, s[i - 1] = 8 * t9[i - 1] + t9[i], e = 1; e < i; ++e)
    r = n[e] / o[e - 1], o[e] -= r, s[e] -= r * s[e - 1];
  for (n[i - 1] = s[i - 1] / o[i - 1], e = i - 2; e >= 0; --e)
    n[e] = (s[e] - n[e + 1]) / o[e];
  for (o[i - 1] = (t9[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e)
    o[e] = 2 * t9[e + 1] - n[e + 1];
  return [n, o];
}
function Mf(t9) {
  return new Xs(t9);
}
function ar(t9, e) {
  this._context = t9, this._t = e;
}
ar.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t9, e);
        else {
          var i = this._x * (1 - this._t) + t9 * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t9, this._y = e;
  }
};
function Of(t9) {
  return new ar(t9, 0.5);
}
function If(t9) {
  return new ar(t9, 0);
}
function $f(t9) {
  return new ar(t9, 1);
}
function He(t9, e, i) {
  this.k = t9, this.x = e, this.y = i;
}
He.prototype = {
  constructor: He,
  scale: function(t9) {
    return t9 === 1 ? this : new He(this.k * t9, this.x, this.y);
  },
  translate: function(t9, e) {
    return t9 === 0 & e === 0 ? this : new He(this.k, this.x + this.k * t9, this.y + this.k * e);
  },
  apply: function(t9) {
    return [t9[0] * this.k + this.x, t9[1] * this.k + this.y];
  },
  applyX: function(t9) {
    return t9 * this.k + this.x;
  },
  applyY: function(t9) {
    return t9 * this.k + this.y;
  },
  invert: function(t9) {
    return [(t9[0] - this.x) / this.k, (t9[1] - this.y) / this.k];
  },
  invertX: function(t9) {
    return (t9 - this.x) / this.k;
  },
  invertY: function(t9) {
    return (t9 - this.y) / this.k;
  },
  rescaleX: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertX, this).map(t9.invert, t9));
  },
  rescaleY: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertY, this).map(t9.invert, t9));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
He.prototype;
var {
  entries: Ks,
  setPrototypeOf: Bo,
  isFrozen: Df,
  getPrototypeOf: Nf,
  getOwnPropertyDescriptor: Rf
} = Object;
var {
  freeze: ht,
  seal: Bt,
  create: qf
} = Object;
var {
  apply: Qr,
  construct: tn
} = typeof Reflect < "u" && Reflect;
Qr || (Qr = function(e, i, r) {
  return e.apply(i, r);
});
ht || (ht = function(e) {
  return e;
});
Bt || (Bt = function(e) {
  return e;
});
tn || (tn = function(e, i) {
  return new e(...i);
});
var Pf = bt(Array.prototype.forEach);
var Fo = bt(Array.prototype.pop);
var Re = bt(Array.prototype.push);
var Bi = bt(String.prototype.toLowerCase);
var Mr = bt(String.prototype.toString);
var zf = bt(String.prototype.match);
var kt = bt(String.prototype.replace);
var Wf = bt(String.prototype.indexOf);
var Hf = bt(String.prototype.trim);
var gt = bt(RegExp.prototype.test);
var qe = jf(TypeError);
function bt(t9) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return Qr(t9, e, r);
  };
}
function jf(t9) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return tn(t9, i);
  };
}
function N(t9, e, i) {
  var r;
  i = (r = i) !== null && r !== void 0 ? r : Bi, Bo && Bo(t9, null);
  let n = e.length;
  for (; n--; ) {
    let o = e[n];
    if (typeof o == "string") {
      const s = i(o);
      s !== o && (Df(e) || (e[n] = s), o = s);
    }
    t9[o] = true;
  }
  return t9;
}
function be(t9) {
  const e = qf(null);
  for (const [i, r] of Ks(t9))
    e[i] = r;
  return e;
}
function yi(t9, e) {
  for (; t9 !== null; ) {
    const r = Rf(t9, e);
    if (r) {
      if (r.get)
        return bt(r.get);
      if (typeof r.value == "function")
        return bt(r.value);
    }
    t9 = Nf(t9);
  }
  function i(r) {
    return console.warn("fallback value for", r), null;
  }
  return i;
}
var Lo = ht(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Or = ht(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var Ir = ht(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var Uf = ht(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var $r = ht(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var Yf = ht(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var Ao = ht(["#text"]);
var Eo = ht(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var Dr = ht(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Mo = ht(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var Ci = ht(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var Gf = Bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var Vf = Bt(/<%[\w\W]*|[\w\W]*%>/gm);
var Xf = Bt(/\${[\w\W]*}/gm);
var Kf = Bt(/^data-[\-\w.\u00B7-\uFFFF]/);
var Zf = Bt(/^aria-[\-\w]+$/);
var Zs = Bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var Jf = Bt(/^(?:\w+script|data):/i);
var Qf = Bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var Js = Bt(/^html$/i);
var Oo = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Gf,
  ERB_EXPR: Vf,
  TMPLIT_EXPR: Xf,
  DATA_ATTR: Kf,
  ARIA_ATTR: Zf,
  IS_ALLOWED_URI: Zs,
  IS_SCRIPT_OR_DATA: Jf,
  ATTR_WHITESPACE: Qf,
  DOCTYPE_NAME: Js
});
var td = () => typeof window > "u" ? null : window;
var ed = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function Qs() {
  let t9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : td();
  const e = (B) => Qs(B);
  if (e.version = "3.0.5", e.removed = [], !t9 || !t9.document || t9.document.nodeType !== 9)
    return e.isSupported = false, e;
  const i = t9.document, r = i.currentScript;
  let {
    document: n
  } = t9;
  const {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: a,
    Element: l,
    NodeFilter: h,
    NamedNodeMap: c = t9.NamedNodeMap || t9.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: g,
    trustedTypes: p
  } = t9, _ = l.prototype, v = yi(_, "cloneNode"), M = yi(_, "nextSibling"), q = yi(_, "childNodes"), S = yi(_, "parentNode");
  if (typeof s == "function") {
    const B = n.createElement("template");
    B.content && B.content.ownerDocument && (n = B.content.ownerDocument);
  }
  let z, Q = "";
  const {
    implementation: X,
    createNodeIterator: G,
    createDocumentFragment: W,
    getElementsByTagName: Yt
  } = n, {
    importNode: K
  } = i;
  let $ = {};
  e.isSupported = typeof Ks == "function" && typeof S == "function" && X && X.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Dt,
    ERB_EXPR: At,
    TMPLIT_EXPR: E,
    DATA_ATTR: T,
    ARIA_ATTR: x,
    IS_SCRIPT_OR_DATA: O,
    ATTR_WHITESPACE: y
  } = Oo;
  let {
    IS_ALLOWED_URI: D
  } = Oo, w = null;
  const H = N({}, [...Lo, ...Or, ...Ir, ...$r, ...Ao]);
  let R = null;
  const U = N({}, [...Eo, ...Dr, ...Mo, ...Ci]);
  let P = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), ct = null, pt = null, Gt = true, Nt = true, Rt = false, it = true, st = false, St = false, Vt = false, xr = false, me = false, hi = false, ci = false, Wn = true, Hn = false;
  const Ml = "user-content-";
  let br = true, De = false, _e = {}, ye = null;
  const jn = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Un = null;
  const Yn = N({}, ["audio", "video", "img", "source", "image", "track"]);
  let Tr = null;
  const Gn = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ui = "http://www.w3.org/1998/Math/MathML", fi = "http://www.w3.org/2000/svg", qt = "http://www.w3.org/1999/xhtml";
  let Ce = qt, Sr = false, kr = null;
  const Ol = N({}, [ui, fi, qt], Mr);
  let re;
  const Il = ["application/xhtml+xml", "text/html"], $l = "text/html";
  let tt, xe = null;
  const Dl = n.createElement("form"), Vn = function(f) {
    return f instanceof RegExp || f instanceof Function;
  }, vr = function(f) {
    if (!(xe && xe === f)) {
      if ((!f || typeof f != "object") && (f = {}), f = be(f), re = // eslint-disable-next-line unicorn/prefer-includes
      Il.indexOf(f.PARSER_MEDIA_TYPE) === -1 ? re = $l : re = f.PARSER_MEDIA_TYPE, tt = re === "application/xhtml+xml" ? Mr : Bi, w = "ALLOWED_TAGS" in f ? N({}, f.ALLOWED_TAGS, tt) : H, R = "ALLOWED_ATTR" in f ? N({}, f.ALLOWED_ATTR, tt) : U, kr = "ALLOWED_NAMESPACES" in f ? N({}, f.ALLOWED_NAMESPACES, Mr) : Ol, Tr = "ADD_URI_SAFE_ATTR" in f ? N(
        be(Gn),
        // eslint-disable-line indent
        f.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : Gn, Un = "ADD_DATA_URI_TAGS" in f ? N(
        be(Yn),
        // eslint-disable-line indent
        f.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : Yn, ye = "FORBID_CONTENTS" in f ? N({}, f.FORBID_CONTENTS, tt) : jn, ct = "FORBID_TAGS" in f ? N({}, f.FORBID_TAGS, tt) : {}, pt = "FORBID_ATTR" in f ? N({}, f.FORBID_ATTR, tt) : {}, _e = "USE_PROFILES" in f ? f.USE_PROFILES : false, Gt = f.ALLOW_ARIA_ATTR !== false, Nt = f.ALLOW_DATA_ATTR !== false, Rt = f.ALLOW_UNKNOWN_PROTOCOLS || false, it = f.ALLOW_SELF_CLOSE_IN_ATTR !== false, st = f.SAFE_FOR_TEMPLATES || false, St = f.WHOLE_DOCUMENT || false, me = f.RETURN_DOM || false, hi = f.RETURN_DOM_FRAGMENT || false, ci = f.RETURN_TRUSTED_TYPE || false, xr = f.FORCE_BODY || false, Wn = f.SANITIZE_DOM !== false, Hn = f.SANITIZE_NAMED_PROPS || false, br = f.KEEP_CONTENT !== false, De = f.IN_PLACE || false, D = f.ALLOWED_URI_REGEXP || Zs, Ce = f.NAMESPACE || qt, P = f.CUSTOM_ELEMENT_HANDLING || {}, f.CUSTOM_ELEMENT_HANDLING && Vn(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = f.CUSTOM_ELEMENT_HANDLING.tagNameCheck), f.CUSTOM_ELEMENT_HANDLING && Vn(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), f.CUSTOM_ELEMENT_HANDLING && typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), st && (Nt = false), hi && (me = true), _e && (w = N({}, [...Ao]), R = [], _e.html === true && (N(w, Lo), N(R, Eo)), _e.svg === true && (N(w, Or), N(R, Dr), N(R, Ci)), _e.svgFilters === true && (N(w, Ir), N(R, Dr), N(R, Ci)), _e.mathMl === true && (N(w, $r), N(R, Mo), N(R, Ci))), f.ADD_TAGS && (w === H && (w = be(w)), N(w, f.ADD_TAGS, tt)), f.ADD_ATTR && (R === U && (R = be(R)), N(R, f.ADD_ATTR, tt)), f.ADD_URI_SAFE_ATTR && N(Tr, f.ADD_URI_SAFE_ATTR, tt), f.FORBID_CONTENTS && (ye === jn && (ye = be(ye)), N(ye, f.FORBID_CONTENTS, tt)), br && (w["#text"] = true), St && N(w, ["html", "head", "body"]), w.table && (N(w, ["tbody"]), delete ct.tbody), f.TRUSTED_TYPES_POLICY) {
        if (typeof f.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw qe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof f.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw qe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = f.TRUSTED_TYPES_POLICY, Q = z.createHTML("");
      } else
        z === void 0 && (z = ed(p, r)), z !== null && typeof Q == "string" && (Q = z.createHTML(""));
      ht && ht(f), xe = f;
    }
  }, Xn = N({}, ["mi", "mo", "mn", "ms", "mtext"]), Kn = N({}, ["foreignobject", "desc", "title", "annotation-xml"]), Nl = N({}, ["title", "style", "font", "a", "script"]), di = N({}, Or);
  N(di, Ir), N(di, Uf);
  const wr = N({}, $r);
  N(wr, Yf);
  const Rl = function(f) {
    let m = S(f);
    (!m || !m.tagName) && (m = {
      namespaceURI: Ce,
      tagName: "template"
    });
    const b = Bi(f.tagName), j = Bi(m.tagName);
    return kr[f.namespaceURI] ? f.namespaceURI === fi ? m.namespaceURI === qt ? b === "svg" : m.namespaceURI === ui ? b === "svg" && (j === "annotation-xml" || Xn[j]) : !!di[b] : f.namespaceURI === ui ? m.namespaceURI === qt ? b === "math" : m.namespaceURI === fi ? b === "math" && Kn[j] : !!wr[b] : f.namespaceURI === qt ? m.namespaceURI === fi && !Kn[j] || m.namespaceURI === ui && !Xn[j] ? false : !wr[b] && (Nl[b] || !di[b]) : !!(re === "application/xhtml+xml" && kr[f.namespaceURI]) : false;
  }, ne = function(f) {
    Re(e.removed, {
      element: f
    });
    try {
      f.parentNode.removeChild(f);
    } catch {
      f.remove();
    }
  }, Br = function(f, m) {
    try {
      Re(e.removed, {
        attribute: m.getAttributeNode(f),
        from: m
      });
    } catch {
      Re(e.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(f), f === "is" && !R[f])
      if (me || hi)
        try {
          ne(m);
        } catch {
        }
      else
        try {
          m.setAttribute(f, "");
        } catch {
        }
  }, Zn = function(f) {
    let m, b;
    if (xr)
      f = "<remove></remove>" + f;
    else {
      const _t = zf(f, /^[\r\n\t ]+/);
      b = _t && _t[0];
    }
    re === "application/xhtml+xml" && Ce === qt && (f = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + f + "</body></html>");
    const j = z ? z.createHTML(f) : f;
    if (Ce === qt)
      try {
        m = new g().parseFromString(j, re);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = X.createDocument(Ce, "template", null);
      try {
        m.documentElement.innerHTML = Sr ? Q : j;
      } catch {
      }
    }
    const et = m.body || m.documentElement;
    return f && b && et.insertBefore(n.createTextNode(b), et.childNodes[0] || null), Ce === qt ? Yt.call(m, St ? "html" : "body")[0] : St ? m.documentElement : et;
  }, Jn = function(f) {
    return G.call(
      f.ownerDocument || f,
      f,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT,
      null,
      false
    );
  }, ql = function(f) {
    return f instanceof u && (typeof f.nodeName != "string" || typeof f.textContent != "string" || typeof f.removeChild != "function" || !(f.attributes instanceof c) || typeof f.removeAttribute != "function" || typeof f.setAttribute != "function" || typeof f.namespaceURI != "string" || typeof f.insertBefore != "function" || typeof f.hasChildNodes != "function");
  }, pi = function(f) {
    return typeof a == "object" ? f instanceof a : f && typeof f == "object" && typeof f.nodeType == "number" && typeof f.nodeName == "string";
  }, Pt = function(f, m, b) {
    $[f] && Pf($[f], (j) => {
      j.call(e, m, b, xe);
    });
  }, Qn = function(f) {
    let m;
    if (Pt("beforeSanitizeElements", f, null), ql(f))
      return ne(f), true;
    const b = tt(f.nodeName);
    if (Pt("uponSanitizeElement", f, {
      tagName: b,
      allowedTags: w
    }), f.hasChildNodes() && !pi(f.firstElementChild) && (!pi(f.content) || !pi(f.content.firstElementChild)) && gt(/<[/\w]/g, f.innerHTML) && gt(/<[/\w]/g, f.textContent))
      return ne(f), true;
    if (!w[b] || ct[b]) {
      if (!ct[b] && eo(b) && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)))
        return false;
      if (br && !ye[b]) {
        const j = S(f) || f.parentNode, et = q(f) || f.childNodes;
        if (et && j) {
          const _t = et.length;
          for (let V = _t - 1; V >= 0; --V)
            j.insertBefore(v(et[V], true), M(f));
        }
      }
      return ne(f), true;
    }
    return f instanceof l && !Rl(f) || (b === "noscript" || b === "noembed" || b === "noframes") && gt(/<\/no(script|embed|frames)/i, f.innerHTML) ? (ne(f), true) : (st && f.nodeType === 3 && (m = f.textContent, m = kt(m, Dt, " "), m = kt(m, At, " "), m = kt(m, E, " "), f.textContent !== m && (Re(e.removed, {
      element: f.cloneNode()
    }), f.textContent = m)), Pt("afterSanitizeElements", f, null), false);
  }, to = function(f, m, b) {
    if (Wn && (m === "id" || m === "name") && (b in n || b in Dl))
      return false;
    if (!(Nt && !pt[m] && gt(T, m))) {
      if (!(Gt && gt(x, m))) {
        if (!R[m] || pt[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(eo(f) && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, f) || P.tagNameCheck instanceof Function && P.tagNameCheck(f)) && (P.attributeNameCheck instanceof RegExp && gt(P.attributeNameCheck, m) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)))
          )
            return false;
        } else if (!Tr[m]) {
          if (!gt(D, kt(b, y, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && f !== "script" && Wf(b, "data:") === 0 && Un[f])) {
              if (!(Rt && !gt(O, kt(b, y, "")))) {
                if (b)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, eo = function(f) {
    return f.indexOf("-") > 0;
  }, io = function(f) {
    let m, b, j, et;
    Pt("beforeSanitizeAttributes", f, null);
    const {
      attributes: _t
    } = f;
    if (!_t)
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: R
    };
    for (et = _t.length; et--; ) {
      m = _t[et];
      const {
        name: Et,
        namespaceURI: Fr
      } = m;
      if (b = Et === "value" ? m.value : Hf(m.value), j = tt(Et), V.attrName = j, V.attrValue = b, V.keepAttr = true, V.forceKeepAttr = void 0, Pt("uponSanitizeAttribute", f, V), b = V.attrValue, V.forceKeepAttr || (Br(Et, f), !V.keepAttr))
        continue;
      if (!it && gt(/\/>/i, b)) {
        Br(Et, f);
        continue;
      }
      st && (b = kt(b, Dt, " "), b = kt(b, At, " "), b = kt(b, E, " "));
      const ro = tt(f.nodeName);
      if (to(ro, j, b)) {
        if (Hn && (j === "id" || j === "name") && (Br(Et, f), b = Ml + b), z && typeof p == "object" && typeof p.getAttributeType == "function" && !Fr)
          switch (p.getAttributeType(ro, j)) {
            case "TrustedHTML": {
              b = z.createHTML(b);
              break;
            }
            case "TrustedScriptURL": {
              b = z.createScriptURL(b);
              break;
            }
          }
        try {
          Fr ? f.setAttributeNS(Fr, Et, b) : f.setAttribute(Et, b), Fo(e.removed);
        } catch {
        }
      }
    }
    Pt("afterSanitizeAttributes", f, null);
  }, Pl = function B(f) {
    let m;
    const b = Jn(f);
    for (Pt("beforeSanitizeShadowDOM", f, null); m = b.nextNode(); )
      Pt("uponSanitizeShadowNode", m, null), !Qn(m) && (m.content instanceof o && B(m.content), io(m));
    Pt("afterSanitizeShadowDOM", f, null);
  };
  return e.sanitize = function(B) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m, b, j, et;
    if (Sr = !B, Sr && (B = "<!-->"), typeof B != "string" && !pi(B))
      if (typeof B.toString == "function") {
        if (B = B.toString(), typeof B != "string")
          throw qe("dirty is not a string, aborting");
      } else
        throw qe("toString is not a function");
    if (!e.isSupported)
      return B;
    if (Vt || vr(f), e.removed = [], typeof B == "string" && (De = false), De) {
      if (B.nodeName) {
        const Et = tt(B.nodeName);
        if (!w[Et] || ct[Et])
          throw qe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (B instanceof a)
      m = Zn("<!---->"), b = m.ownerDocument.importNode(B, true), b.nodeType === 1 && b.nodeName === "BODY" || b.nodeName === "HTML" ? m = b : m.appendChild(b);
    else {
      if (!me && !st && !St && // eslint-disable-next-line unicorn/prefer-includes
      B.indexOf("<") === -1)
        return z && ci ? z.createHTML(B) : B;
      if (m = Zn(B), !m)
        return me ? null : ci ? Q : "";
    }
    m && xr && ne(m.firstChild);
    const _t = Jn(De ? B : m);
    for (; j = _t.nextNode(); )
      Qn(j) || (j.content instanceof o && Pl(j.content), io(j));
    if (De)
      return B;
    if (me) {
      if (hi)
        for (et = W.call(m.ownerDocument); m.firstChild; )
          et.appendChild(m.firstChild);
      else
        et = m;
      return (R.shadowroot || R.shadowrootmode) && (et = K.call(i, et, true)), et;
    }
    let V = St ? m.outerHTML : m.innerHTML;
    return St && w["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && gt(Js, m.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + V), st && (V = kt(V, Dt, " "), V = kt(V, At, " "), V = kt(V, E, " ")), z && ci ? z.createHTML(V) : V;
  }, e.setConfig = function(B) {
    vr(B), Vt = true;
  }, e.clearConfig = function() {
    xe = null, Vt = false;
  }, e.isValidAttribute = function(B, f, m) {
    xe || vr({});
    const b = tt(B), j = tt(f);
    return to(b, j, m);
  }, e.addHook = function(B, f) {
    typeof f == "function" && ($[B] = $[B] || [], Re($[B], f));
  }, e.removeHook = function(B) {
    if ($[B])
      return Fo($[B]);
  }, e.removeHooks = function(B) {
    $[B] && ($[B] = []);
  }, e.removeAllHooks = function() {
    $ = {};
  }, e;
}
var Ui = Qs();
var lr = /<br\s*\/?>/gi;
var id = (t9) => t9 ? ea(t9).replace(/\\n/g, "#br#").split("#br#") : [""];
var ta = (t9) => Ui.sanitize(t9);
var Io = (t9, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== false) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t9 = ta(t9) : r !== "loose" && (t9 = ea(t9), t9 = t9.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t9 = t9.replace(/=/g, "&equals;"), t9 = sd(t9));
  }
  return t9;
};
var Je = (t9, e) => t9 && (e.dompurifyConfig ? t9 = Ui.sanitize(Io(t9, e), e.dompurifyConfig).toString() : t9 = Ui.sanitize(Io(t9, e), {
  FORBID_TAGS: ["style"]
}).toString(), t9);
var rd = (t9, e) => typeof t9 == "string" ? Je(t9, e) : t9.flat().map((i) => Je(i, e));
var nd = (t9) => lr.test(t9);
var od = (t9) => t9.split(lr);
var sd = (t9) => t9.replace(/#br#/g, "<br/>");
var ea = (t9) => t9.replace(lr, "#br#");
var ad = (t9) => {
  let e = "";
  return t9 && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
};
var ia = (t9) => !(t9 === false || ["false", "null", "0"].includes(String(t9).trim().toLowerCase()));
var ld = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.max(...e);
};
var hd = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.min(...e);
};
var cd = function(t9) {
  let e = t9;
  if (t9.split("~").length - 1 >= 2) {
    let i = e;
    do
      e = i, i = e.replace(/~([^\s,:;]+)~/, "<$1>");
    while (i != e);
    return cd(i);
  } else
    return e;
};
var Bn = {
  getRows: id,
  sanitizeText: Je,
  sanitizeTextOrArray: rd,
  hasBreaks: nd,
  splitBreaks: od,
  lineBreakRegex: lr,
  removeScript: ta,
  getUrl: ad,
  evaluate: ia,
  getMax: ld,
  getMin: hd
};
var Fi = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    g: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    b: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    h: (t9) => t9 % 360,
    s: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    l: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    a: (t9) => t9 >= 1 ? 1 : t9 < 0 ? 0 : t9
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t9) => {
    const e = t9 / 255;
    return t9 > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t9, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t9 + (e - t9) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t9 + (e - t9) * (2 / 3 - i) * 6 : t9),
  hsl2rgb: ({ h: t9, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t9 /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n;
    switch (r) {
      case "r":
        return Fi.hue2rgb(o, n, t9 + 1 / 3) * 255;
      case "g":
        return Fi.hue2rgb(o, n, t9) * 255;
      case "b":
        return Fi.hue2rgb(o, n, t9 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t9, g: e, b: i }, r) => {
    t9 /= 255, e /= 255, i /= 255;
    const n = Math.max(t9, e, i), o = Math.min(t9, e, i), s = (n + o) / 2;
    if (r === "l")
      return s * 100;
    if (n === o)
      return 0;
    const a = n - o, l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t9:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t9) / a + 2) * 60;
      case i:
        return ((t9 - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
};
var ud = Fi;
var fd = {
  /* API */
  clamp: (t9, e, i) => e > i ? Math.min(e, Math.max(i, t9)) : Math.min(i, Math.max(e, t9)),
  round: (t9) => Math.round(t9 * 1e10) / 1e10
};
var dd = fd;
var pd = {
  /* API */
  dec2hex: (t9) => {
    const e = Math.round(t9).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
};
var gd = pd;
var md = {
  channel: ud,
  lang: dd,
  unit: gd
};
var I = md;
var Kt = {};
for (let t9 = 0; t9 <= 255; t9++)
  Kt[t9] = I.unit.dec2hex(t9);
var rt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
var _d = class {
  constructor() {
    this.type = rt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = rt.ALL;
  }
  is(e) {
    return this.type === e;
  }
};
var yd = _d;
var Cd = class {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = false, this.data = e, this.type = new yd();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = false, this.data = e, this.type.type = rt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = I.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = I.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = I.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = I.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = I.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = I.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), I.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), I.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), I.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), I.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), I.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), I.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.r = e;
  }
  set g(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.g = e;
  }
  set b(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.b = e;
  }
  set h(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.h = e;
  }
  set s(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.s = e;
  }
  set l(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.l = e;
  }
  set a(e) {
    this.changed = true, this.data.a = e;
  }
};
var xd = Cd;
var bd = new xd({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
var hr = bd;
var ra = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t9) => {
    if (t9.charCodeAt(0) !== 35)
      return;
    const e = t9.match(ra.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, o = n % 4 === 0, s = n > 4, a = s ? 1 : 17, l = s ? 8 : 4, h = o ? 0 : -1, c = s ? 255 : 15;
    return hr.set({
      r: (r >> l * (h + 3) & c) * a,
      g: (r >> l * (h + 2) & c) * a,
      b: (r >> l * (h + 1) & c) * a,
      a: o ? (r & c) * a / 255 : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `#${Kt[Math.round(e)]}${Kt[Math.round(i)]}${Kt[Math.round(r)]}${Kt[Math.round(n * 255)]}` : `#${Kt[Math.round(e)]}${Kt[Math.round(i)]}${Kt[Math.round(r)]}`;
  }
};
var je = ra;
var Li = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t9) => {
    const e = t9.match(Li.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return I.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return I.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return I.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return I.channel.clamp.h(parseFloat(t9));
  },
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t9.match(Li.re);
    if (!i)
      return;
    const [, r, n, o, s, a] = i;
    return hr.set({
      h: Li._hue2deg(r),
      s: I.channel.clamp.s(parseFloat(n)),
      l: I.channel.clamp.l(parseFloat(o)),
      a: s ? I.channel.clamp.a(a ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { h: e, s: i, l: r, a: n } = t9;
    return n < 1 ? `hsla(${I.lang.round(e)}, ${I.lang.round(i)}%, ${I.lang.round(r)}%, ${n})` : `hsl(${I.lang.round(e)}, ${I.lang.round(i)}%, ${I.lang.round(r)}%)`;
  }
};
var xi = Li;
var Ai = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t9) => {
    t9 = t9.toLowerCase();
    const e = Ai.colors[t9];
    if (e)
      return je.parse(e);
  },
  stringify: (t9) => {
    const e = je.stringify(t9);
    for (const i in Ai.colors)
      if (Ai.colors[i] === e)
        return i;
  }
};
var $o = Ai;
var na = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t9.match(na.re);
    if (!i)
      return;
    const [, r, n, o, s, a, l, h, c] = i;
    return hr.set({
      r: I.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: I.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: I.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: h ? I.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `rgba(${I.lang.round(e)}, ${I.lang.round(i)}, ${I.lang.round(r)}, ${I.lang.round(n)})` : `rgb(${I.lang.round(e)}, ${I.lang.round(i)}, ${I.lang.round(r)})`;
  }
};
var bi = na;
var Td = {
  /* VARIABLES */
  format: {
    keyword: $o,
    hex: je,
    rgb: bi,
    rgba: bi,
    hsl: xi,
    hsla: xi
  },
  /* API */
  parse: (t9) => {
    if (typeof t9 != "string")
      return t9;
    const e = je.parse(t9) || bi.parse(t9) || xi.parse(t9) || $o.parse(t9);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t9}"`);
  },
  stringify: (t9) => !t9.changed && t9.color ? t9.color : t9.type.is(rt.HSL) || t9.data.r === void 0 ? xi.stringify(t9) : t9.a < 1 || !Number.isInteger(t9.r) || !Number.isInteger(t9.g) || !Number.isInteger(t9.b) ? bi.stringify(t9) : je.stringify(t9)
};
var It = Td;
var Sd = (t9, e) => {
  const i = It.parse(t9);
  for (const r in e)
    i[r] = I.channel.clamp[r](e[r]);
  return It.stringify(i);
};
var oa = Sd;
var kd = (t9, e, i = 0, r = 1) => {
  if (typeof t9 != "number")
    return oa(t9, { a: e });
  const n = hr.set({
    r: I.channel.clamp.r(t9),
    g: I.channel.clamp.g(e),
    b: I.channel.clamp.b(i),
    a: I.channel.clamp.a(r)
  });
  return It.stringify(n);
};
var Ue = kd;
var vd = (t9) => {
  const { r: e, g: i, b: r } = It.parse(t9), n = 0.2126 * I.channel.toLinear(e) + 0.7152 * I.channel.toLinear(i) + 0.0722 * I.channel.toLinear(r);
  return I.lang.round(n);
};
var wd = vd;
var Bd = (t9) => wd(t9) >= 0.5;
var Fd = Bd;
var Ld = (t9) => !Fd(t9);
var si = Ld;
var Ad = (t9, e, i) => {
  const r = It.parse(t9), n = r[e], o = I.channel.clamp[e](n + i);
  return n !== o && (r[e] = o), It.stringify(r);
};
var sa = Ad;
var Ed = (t9, e) => sa(t9, "l", e);
var F = Ed;
var Md = (t9, e) => sa(t9, "l", -e);
var A = Md;
var Od = (t9, e) => {
  const i = It.parse(t9), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return oa(t9, r);
};
var d = Od;
var Id = (t9, e, i = 50) => {
  const { r, g: n, b: o, a: s } = It.parse(t9), { r: a, g: l, b: h, a: c } = It.parse(e), u = i / 100, g = u * 2 - 1, p = s - c, v = ((g * p === -1 ? g : (g + p) / (1 + g * p)) + 1) / 2, M = 1 - v, q = r * v + a * M, S = n * v + l * M, z = o * v + h * M, Q = s * u + c * (1 - u);
  return Ue(q, S, z, Q);
};
var $d = Id;
var Dd = (t9, e = 100) => {
  const i = It.parse(t9);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, $d(i, t9, e);
};
var C = Dd;
var lt = (t9, e) => e ? d(t9, { s: -40, l: 10 }) : d(t9, { s: -40, l: -10 });
var cr = "#ffffff";
var ur = "#f2f2f2";
var Nd = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || d(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || d(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || lt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || lt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || C(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || C(this.tertiaryColor), this.lineColor = this.lineColor || C(this.background), this.arrowheadColor = this.arrowheadColor || C(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || A(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || C(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || F(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this.darkMode)
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = A(this["cScale" + i], 75);
    else
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = A(this["cScale" + i], 25);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleInv" + i] = this["cScaleInv" + i] || C(this["cScale" + i]);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this.darkMode ? this["cScalePeer" + i] = this["cScalePeer" + i] || F(this["cScale" + i], 10) : this["cScalePeer" + i] = this["cScalePeer" + i] || A(this["cScale" + i], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++)
      this["surface" + i] = this["surface" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (5 + i * 3) }), this["surfacePeer" + i] = this["surfacePeer" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (8 + i * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || d(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || d(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || d(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || d(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || d(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || si(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || cr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ur;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var Rd = (t9) => {
  const e = new Nd();
  return e.calculate(t9), e;
};
var qd = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = F(this.primaryColor, 16), this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = C(this.background), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = F(C("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = Ue(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = A("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = A(this.sectionBkgColor, 10), this.taskBorderColor = Ue(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Ue(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    this.secondBkg = F(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = F(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = F(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || C(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScalePeer" + e] = this["cScalePeer" + e] || F(this["cScale" + e], 10);
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-10 + e * 4) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-7 + e * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || si(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = F(this.secondaryColor, 20), this.git1 = F(this.pie2 || this.secondaryColor, 20), this.git2 = F(this.pie3 || this.tertiaryColor, 20), this.git3 = F(this.pie4 || d(this.primaryColor, { h: -30 }), 20), this.git4 = F(this.pie5 || d(this.primaryColor, { h: -60 }), 20), this.git5 = F(this.pie6 || d(this.primaryColor, { h: -90 }), 10), this.git6 = F(this.pie7 || d(this.primaryColor, { h: 60 }), 10), this.git7 = F(this.pie8 || d(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || F(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || F(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var Pd = (t9) => {
  const e = new qd();
  return e.calculate(t9), e;
};
var zd = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = d(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = Ue(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || A(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || A(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = A(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, l: -(7 + e * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || C(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || C(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
        this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = F(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || d(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || si(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(C(this.git0), 25), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || cr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ur;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var Wd = (t9) => {
  const e = new zd();
  return e.calculate(t9), e;
};
var Hd = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = F("#cde498", 10), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.primaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.actorBorder = A(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || A(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || A(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = A(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || si(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || cr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ur;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var jd = (t9) => {
  const e = new Hd();
  return e.calculate(t9), e;
};
var Ud = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = F(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.secondBkg = F(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = F(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || C(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || F(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = F(this.contrast, 30), this.sectionBkgColor2 = F(this.contrast, 30), this.taskBorderColor = A(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = F(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = A(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || si(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = A(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || d(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || d(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || d(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || d(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || d(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || cr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ur;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var Yd = (t9) => {
  const e = new Ud();
  return e.calculate(t9), e;
};
var jt = {
  base: {
    getThemeVariables: Rd
  },
  dark: {
    getThemeVariables: Pd
  },
  default: {
    getThemeVariables: Wd
  },
  forest: {
    getThemeVariables: jd
  },
  neutral: {
    getThemeVariables: Yd
  }
};
var Xt = {
  flowchart: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    htmlLabels: true,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: true,
    hideUnusedParticipants: false,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: true,
    forceMenus: false,
    bottomMarginAdj: 1,
    rightAngles: false,
    showSequenceNumbers: false,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: false,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: true,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: false,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: true,
    titleTopMargin: 25,
    arrowMarkerAbsolute: false,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: false
  },
  state: {
    useMaxWidth: true,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: true,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  requirement: {
    useMaxWidth: true,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: true,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: false
  },
  gitGraph: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: true,
    showBranches: true,
    rotateCommitLabel: true,
    arrowMarkerAbsolute: false
  },
  c4: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: true,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: true,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify"
  },
  theme: "default",
  maxTextSize: 5e4,
  darkMode: false,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: true,
  arrowMarkerAbsolute: false,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize"
  ],
  deterministicIds: false,
  fontSize: 16
};
var aa = {
  ...Xt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: jt.default.getThemeVariables(),
  sequence: {
    ...Xt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...Xt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Xt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...Xt.pie,
    useWidth: void 0
  },
  requirement: {
    ...Xt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...Xt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: false
  },
  sankey: {
    ...Xt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: false
  }
};
var la = (t9, e = "") => Object.keys(t9).reduce((i, r) => Array.isArray(t9[r]) ? i : typeof t9[r] == "object" && t9[r] !== null ? [...i, e + r, ...la(t9[r], "")] : [...i, e + r], []);
var Gd = la(aa, "");
var Vd = aa;
function ha(t9) {
  return typeof t9 > "u" || t9 === null;
}
function Xd(t9) {
  return typeof t9 == "object" && t9 !== null;
}
function Kd(t9) {
  return Array.isArray(t9) ? t9 : ha(t9) ? [] : [t9];
}
function Zd(t9, e) {
  var i, r, n, o;
  if (e)
    for (o = Object.keys(e), i = 0, r = o.length; i < r; i += 1)
      n = o[i], t9[n] = e[n];
  return t9;
}
function Jd(t9, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t9;
  return i;
}
function Qd(t9) {
  return t9 === 0 && Number.NEGATIVE_INFINITY === 1 / t9;
}
var tp = ha;
var ep = Xd;
var ip = Kd;
var rp = Jd;
var np = Qd;
var op = Zd;
var at = {
  isNothing: tp,
  isObject: ep,
  toArray: ip,
  repeat: rp,
  isNegativeZero: np,
  extend: op
};
function ca(t9, e) {
  var i = "", r = t9.reason || "(unknown reason)";
  return t9.mark ? (t9.mark.name && (i += 'in "' + t9.mark.name + '" '), i += "(" + (t9.mark.line + 1) + ":" + (t9.mark.column + 1) + ")", !e && t9.mark.snippet && (i += `

` + t9.mark.snippet), r + " " + i) : r;
}
function Qe(t9, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t9, this.mark = e, this.message = ca(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Qe.prototype = Object.create(Error.prototype);
Qe.prototype.constructor = Qe;
Qe.prototype.toString = function(e) {
  return this.name + ": " + ca(this, e);
};
var Ht = Qe;
function Nr(t9, e, i, r, n) {
  var o = "", s = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (o = " ... ", e = r - a + o.length), i - r > a && (s = " ...", i = r + a - s.length), {
    str: o + t9.slice(e, i).replace(/\t/g, "→") + s,
    pos: r - e + o.length
    // relative position
  };
}
function Rr(t9, e) {
  return at.repeat(" ", e - t9.length) + t9;
}
function sp(t9, e) {
  if (e = Object.create(e || null), !t9.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], o, s = -1; o = i.exec(t9.buffer); )
    n.push(o.index), r.push(o.index + o[0].length), t9.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  var a = "", l, h, c = Math.min(t9.line + e.linesAfter, n.length).toString().length, u = e.maxLength - (e.indent + c + 3);
  for (l = 1; l <= e.linesBefore && !(s - l < 0); l++)
    h = Nr(
      t9.buffer,
      r[s - l],
      n[s - l],
      t9.position - (r[s] - r[s - l]),
      u
    ), a = at.repeat(" ", e.indent) + Rr((t9.line - l + 1).toString(), c) + " | " + h.str + `
` + a;
  for (h = Nr(t9.buffer, r[s], n[s], t9.position, u), a += at.repeat(" ", e.indent) + Rr((t9.line + 1).toString(), c) + " | " + h.str + `
`, a += at.repeat("-", e.indent + c + 3 + h.pos) + `^
`, l = 1; l <= e.linesAfter && !(s + l >= n.length); l++)
    h = Nr(
      t9.buffer,
      r[s + l],
      n[s + l],
      t9.position - (r[s] - r[s + l]),
      u
    ), a += at.repeat(" ", e.indent) + Rr((t9.line + l + 1).toString(), c) + " | " + h.str + `
`;
  return a.replace(/\n$/, "");
}
var ap = sp;
var lp = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var hp = [
  "scalar",
  "sequence",
  "mapping"
];
function cp(t9) {
  var e = {};
  return t9 !== null && Object.keys(t9).forEach(function(i) {
    t9[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function up(t9, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (lp.indexOf(i) === -1)
      throw new Ht('Unknown option "' + i + '" is met in definition of "' + t9 + '" YAML type.');
  }), this.options = e, this.tag = t9, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return true;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = cp(e.styleAliases || null), hp.indexOf(this.kind) === -1)
    throw new Ht('Unknown kind "' + this.kind + '" is specified for "' + t9 + '" YAML type.');
}
var ot = up;
function Do(t9, e) {
  var i = [];
  return t9[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(o, s) {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (n = s);
    }), i[n] = r;
  }), i;
}
function fp() {
  var t9 = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t9.multi[n.kind].push(n), t9.multi.fallback.push(n)) : t9[n.kind][n.tag] = t9.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t9;
}
function en(t9) {
  return this.extend(t9);
}
en.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof ot)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Ht("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(o) {
    if (!(o instanceof ot))
      throw new Ht("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new Ht("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new Ht("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(o) {
    if (!(o instanceof ot))
      throw new Ht("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(en.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = Do(n, "implicit"), n.compiledExplicit = Do(n, "explicit"), n.compiledTypeMap = fp(n.compiledImplicit, n.compiledExplicit), n;
};
var dp = en;
var pp = new ot("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t9) {
    return t9 !== null ? t9 : "";
  }
});
var gp = new ot("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t9) {
    return t9 !== null ? t9 : [];
  }
});
var mp = new ot("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t9) {
    return t9 !== null ? t9 : {};
  }
});
var ua = new dp({
  explicit: [
    pp,
    gp,
    mp
  ]
});
function _p(t9) {
  if (t9 === null)
    return true;
  var e = t9.length;
  return e === 1 && t9 === "~" || e === 4 && (t9 === "null" || t9 === "Null" || t9 === "NULL");
}
function yp() {
  return null;
}
function Cp(t9) {
  return t9 === null;
}
var xp = new ot("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: _p,
  construct: yp,
  predicate: Cp,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function bp(t9) {
  if (t9 === null)
    return false;
  var e = t9.length;
  return e === 4 && (t9 === "true" || t9 === "True" || t9 === "TRUE") || e === 5 && (t9 === "false" || t9 === "False" || t9 === "FALSE");
}
function Tp(t9) {
  return t9 === "true" || t9 === "True" || t9 === "TRUE";
}
function Sp(t9) {
  return Object.prototype.toString.call(t9) === "[object Boolean]";
}
var kp = new ot("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: bp,
  construct: Tp,
  predicate: Sp,
  represent: {
    lowercase: function(t9) {
      return t9 ? "true" : "false";
    },
    uppercase: function(t9) {
      return t9 ? "TRUE" : "FALSE";
    },
    camelcase: function(t9) {
      return t9 ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function vp(t9) {
  return 48 <= t9 && t9 <= 57 || 65 <= t9 && t9 <= 70 || 97 <= t9 && t9 <= 102;
}
function wp(t9) {
  return 48 <= t9 && t9 <= 55;
}
function Bp(t9) {
  return 48 <= t9 && t9 <= 57;
}
function Fp(t9) {
  if (t9 === null)
    return false;
  var e = t9.length, i = 0, r = false, n;
  if (!e)
    return false;
  if (n = t9[i], (n === "-" || n === "+") && (n = t9[++i]), n === "0") {
    if (i + 1 === e)
      return true;
    if (n = t9[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!vp(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!wp(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return false;
  for (; i < e; i++)
    if (n = t9[i], n !== "_") {
      if (!Bp(t9.charCodeAt(i)))
        return false;
      r = true;
    }
  return !(!r || n === "_");
}
function Lp(t9) {
  var e = t9, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function Ap(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && t9 % 1 === 0 && !at.isNegativeZero(t9);
}
var Ep = new ot("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Fp,
  construct: Lp,
  predicate: Ap,
  represent: {
    binary: function(t9) {
      return t9 >= 0 ? "0b" + t9.toString(2) : "-0b" + t9.toString(2).slice(1);
    },
    octal: function(t9) {
      return t9 >= 0 ? "0o" + t9.toString(8) : "-0o" + t9.toString(8).slice(1);
    },
    decimal: function(t9) {
      return t9.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t9) {
      return t9 >= 0 ? "0x" + t9.toString(16).toUpperCase() : "-0x" + t9.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var Mp = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Op(t9) {
  return !(t9 === null || !Mp.test(t9) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t9[t9.length - 1] === "_");
}
function Ip(t9) {
  var e, i;
  return e = t9.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var $p = /^[-+]?[0-9]+e/;
function Dp(t9, e) {
  var i;
  if (isNaN(t9))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (at.isNegativeZero(t9))
    return "-0.0";
  return i = t9.toString(10), $p.test(i) ? i.replace("e", ".e") : i;
}
function Np(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && (t9 % 1 !== 0 || at.isNegativeZero(t9));
}
var Rp = new ot("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Op,
  construct: Ip,
  predicate: Np,
  represent: Dp,
  defaultStyle: "lowercase"
});
var qp = ua.extend({
  implicit: [
    xp,
    kp,
    Ep,
    Rp
  ]
});
var Pp = qp;
var fa = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var da = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function zp(t9) {
  return t9 === null ? false : fa.exec(t9) !== null || da.exec(t9) !== null;
}
function Wp(t9) {
  var e, i, r, n, o, s, a, l = 0, h = null, c, u, g;
  if (e = fa.exec(t9), e === null && (e = da.exec(t9)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (o = +e[4], s = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (c = +e[10], u = +(e[11] || 0), h = (c * 60 + u) * 6e4, e[9] === "-" && (h = -h)), g = new Date(Date.UTC(i, r, n, o, s, a, l)), h && g.setTime(g.getTime() - h), g;
}
function Hp(t9) {
  return t9.toISOString();
}
var jp = new ot("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: zp,
  construct: Wp,
  instanceOf: Date,
  represent: Hp
});
function Up(t9) {
  return t9 === "<<" || t9 === null;
}
var Yp = new ot("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Up
});
var Fn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Gp(t9) {
  if (t9 === null)
    return false;
  var e, i, r = 0, n = t9.length, o = Fn;
  for (i = 0; i < n; i++)
    if (e = o.indexOf(t9.charAt(i)), !(e > 64)) {
      if (e < 0)
        return false;
      r += 6;
    }
  return r % 8 === 0;
}
function Vp(t9) {
  var e, i, r = t9.replace(/[\r\n=]/g, ""), n = r.length, o = Fn, s = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : i === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : i === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}
function Xp(t9) {
  var e = "", i = 0, r, n, o = t9.length, s = Fn;
  for (r = 0; r < o; r++)
    r % 3 === 0 && r && (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]), i = (i << 8) + t9[r];
  return n = o % 3, n === 0 ? (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]) : n === 2 ? (e += s[i >> 10 & 63], e += s[i >> 4 & 63], e += s[i << 2 & 63], e += s[64]) : n === 1 && (e += s[i >> 2 & 63], e += s[i << 4 & 63], e += s[64], e += s[64]), e;
}
function Kp(t9) {
  return Object.prototype.toString.call(t9) === "[object Uint8Array]";
}
var Zp = new ot("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Gp,
  construct: Vp,
  predicate: Kp,
  represent: Xp
});
var Jp = Object.prototype.hasOwnProperty;
var Qp = Object.prototype.toString;
function tg(t9) {
  if (t9 === null)
    return true;
  var e = [], i, r, n, o, s, a = t9;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], s = false, Qp.call(n) !== "[object Object]")
      return false;
    for (o in n)
      if (Jp.call(n, o))
        if (!s)
          s = true;
        else
          return false;
    if (!s)
      return false;
    if (e.indexOf(o) === -1)
      e.push(o);
    else
      return false;
  }
  return true;
}
function eg(t9) {
  return t9 !== null ? t9 : [];
}
var ig = new ot("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: tg,
  construct: eg
});
var rg = Object.prototype.toString;
function ng(t9) {
  if (t9 === null)
    return true;
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1) {
    if (r = s[e], rg.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return false;
    o[e] = [n[0], r[n[0]]];
  }
  return true;
}
function og(t9) {
  if (t9 === null)
    return [];
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1)
    r = s[e], n = Object.keys(r), o[e] = [n[0], r[n[0]]];
  return o;
}
var sg = new ot("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: ng,
  construct: og
});
var ag = Object.prototype.hasOwnProperty;
function lg(t9) {
  if (t9 === null)
    return true;
  var e, i = t9;
  for (e in i)
    if (ag.call(i, e) && i[e] !== null)
      return false;
  return true;
}
function hg(t9) {
  return t9 !== null ? t9 : {};
}
var cg = new ot("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: lg,
  construct: hg
});
var ug = Pp.extend({
  implicit: [
    jp,
    Yp
  ],
  explicit: [
    Zp,
    ig,
    sg,
    cg
  ]
});
var ee = Object.prototype.hasOwnProperty;
var Yi = 1;
var pa = 2;
var ga = 3;
var Gi = 4;
var qr = 1;
var fg = 2;
var No = 3;
var dg = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var pg = /[\x85\u2028\u2029]/;
var gg = /[,\[\]\{\}]/;
var ma = /^(?:!|!!|![a-z\-]+!)$/i;
var _a = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Ro(t9) {
  return Object.prototype.toString.call(t9);
}
function Ot(t9) {
  return t9 === 10 || t9 === 13;
}
function he(t9) {
  return t9 === 9 || t9 === 32;
}
function dt(t9) {
  return t9 === 9 || t9 === 32 || t9 === 10 || t9 === 13;
}
function Se(t9) {
  return t9 === 44 || t9 === 91 || t9 === 93 || t9 === 123 || t9 === 125;
}
function mg(t9) {
  var e;
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : (e = t9 | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function _g(t9) {
  return t9 === 120 ? 2 : t9 === 117 ? 4 : t9 === 85 ? 8 : 0;
}
function yg(t9) {
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : -1;
}
function qo(t9) {
  return t9 === 48 ? "\0" : t9 === 97 ? "\x07" : t9 === 98 ? "\b" : t9 === 116 || t9 === 9 ? "	" : t9 === 110 ? `
` : t9 === 118 ? "\v" : t9 === 102 ? "\f" : t9 === 114 ? "\r" : t9 === 101 ? "\x1B" : t9 === 32 ? " " : t9 === 34 ? '"' : t9 === 47 ? "/" : t9 === 92 ? "\\" : t9 === 78 ? "" : t9 === 95 ? " " : t9 === 76 ? "\u2028" : t9 === 80 ? "\u2029" : "";
}
function Cg(t9) {
  return t9 <= 65535 ? String.fromCharCode(t9) : String.fromCharCode(
    (t9 - 65536 >> 10) + 55296,
    (t9 - 65536 & 1023) + 56320
  );
}
var ya = new Array(256);
var Ca = new Array(256);
for (Te = 0; Te < 256; Te++)
  ya[Te] = qo(Te) ? 1 : 0, Ca[Te] = qo(Te);
var Te;
function xg(t9, e) {
  this.input = t9, this.filename = e.filename || null, this.schema = e.schema || ug, this.onWarning = e.onWarning || null, this.legacy = e.legacy || false, this.json = e.json || false, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t9.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function xa(t9, e) {
  var i = {
    name: t9.filename,
    buffer: t9.input.slice(0, -1),
    // omit trailing \0
    position: t9.position,
    line: t9.line,
    column: t9.position - t9.lineStart
  };
  return i.snippet = ap(i), new Ht(e, i);
}
function L(t9, e) {
  throw xa(t9, e);
}
function Vi(t9, e) {
  t9.onWarning && t9.onWarning.call(null, xa(t9, e));
}
var Po = {
  YAML: function(e, i, r) {
    var n, o, s;
    e.version !== null && L(e, "duplication of %YAML directive"), r.length !== 1 && L(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && L(e, "ill-formed argument of the YAML directive"), o = parseInt(n[1], 10), s = parseInt(n[2], 10), o !== 1 && L(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && Vi(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, o;
    r.length !== 2 && L(e, "TAG directive accepts exactly two arguments"), n = r[0], o = r[1], ma.test(n) || L(e, "ill-formed tag handle (first argument) of the TAG directive"), ee.call(e.tagMap, n) && L(e, 'there is a previously declared suffix for "' + n + '" tag handle'), _a.test(o) || L(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      L(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[n] = o;
  }
};
function Qt(t9, e, i, r) {
  var n, o, s, a;
  if (e < i) {
    if (a = t9.input.slice(e, i), r)
      for (n = 0, o = a.length; n < o; n += 1)
        s = a.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || L(t9, "expected valid JSON character");
    else
      dg.test(a) && L(t9, "the stream contains non-printable characters");
    t9.result += a;
  }
}
function zo(t9, e, i, r) {
  var n, o, s, a;
  for (at.isObject(i) || L(t9, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), s = 0, a = n.length; s < a; s += 1)
    o = n[s], ee.call(e, o) || (e[o] = i[o], r[o] = true);
}
function ke(t9, e, i, r, n, o, s, a, l) {
  var h, c;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), h = 0, c = n.length; h < c; h += 1)
      Array.isArray(n[h]) && L(t9, "nested arrays are not supported inside keys"), typeof n == "object" && Ro(n[h]) === "[object Object]" && (n[h] = "[object Object]");
  if (typeof n == "object" && Ro(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (h = 0, c = o.length; h < c; h += 1)
        zo(t9, e, o[h], i);
    else
      zo(t9, e, o, i);
  else
    !t9.json && !ee.call(i, n) && ee.call(e, n) && (t9.line = s || t9.line, t9.lineStart = a || t9.lineStart, t9.position = l || t9.position, L(t9, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: o
    }) : e[n] = o, delete i[n];
  return e;
}
function Ln(t9) {
  var e;
  e = t9.input.charCodeAt(t9.position), e === 10 ? t9.position++ : e === 13 ? (t9.position++, t9.input.charCodeAt(t9.position) === 10 && t9.position++) : L(t9, "a line break is expected"), t9.line += 1, t9.lineStart = t9.position, t9.firstTabInLine = -1;
}
function J(t9, e, i) {
  for (var r = 0, n = t9.input.charCodeAt(t9.position); n !== 0; ) {
    for (; he(n); )
      n === 9 && t9.firstTabInLine === -1 && (t9.firstTabInLine = t9.position), n = t9.input.charCodeAt(++t9.position);
    if (e && n === 35)
      do
        n = t9.input.charCodeAt(++t9.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Ot(n))
      for (Ln(t9), n = t9.input.charCodeAt(t9.position), r++, t9.lineIndent = 0; n === 32; )
        t9.lineIndent++, n = t9.input.charCodeAt(++t9.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t9.lineIndent < i && Vi(t9, "deficient indentation"), r;
}
function fr(t9) {
  var e = t9.position, i;
  return i = t9.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t9.input.charCodeAt(e + 1) && i === t9.input.charCodeAt(e + 2) && (e += 3, i = t9.input.charCodeAt(e), i === 0 || dt(i)));
}
function An(t9, e) {
  e === 1 ? t9.result += " " : e > 1 && (t9.result += at.repeat(`
`, e - 1));
}
function bg(t9, e, i) {
  var r, n, o, s, a, l, h, c, u = t9.kind, g = t9.result, p;
  if (p = t9.input.charCodeAt(t9.position), dt(p) || Se(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && Se(n)))
    return false;
  for (t9.kind = "scalar", t9.result = "", o = s = t9.position, a = false; p !== 0; ) {
    if (p === 58) {
      if (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && Se(n))
        break;
    } else if (p === 35) {
      if (r = t9.input.charCodeAt(t9.position - 1), dt(r))
        break;
    } else {
      if (t9.position === t9.lineStart && fr(t9) || i && Se(p))
        break;
      if (Ot(p))
        if (l = t9.line, h = t9.lineStart, c = t9.lineIndent, J(t9, false, -1), t9.lineIndent >= e) {
          a = true, p = t9.input.charCodeAt(t9.position);
          continue;
        } else {
          t9.position = s, t9.line = l, t9.lineStart = h, t9.lineIndent = c;
          break;
        }
    }
    a && (Qt(t9, o, s, false), An(t9, t9.line - l), o = s = t9.position, a = false), he(p) || (s = t9.position + 1), p = t9.input.charCodeAt(++t9.position);
  }
  return Qt(t9, o, s, false), t9.result ? true : (t9.kind = u, t9.result = g, false);
}
function Tg(t9, e) {
  var i, r, n;
  if (i = t9.input.charCodeAt(t9.position), i !== 39)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, r = n = t9.position; (i = t9.input.charCodeAt(t9.position)) !== 0; )
    if (i === 39)
      if (Qt(t9, r, t9.position, true), i = t9.input.charCodeAt(++t9.position), i === 39)
        r = t9.position, t9.position++, n = t9.position;
      else
        return true;
    else
      Ot(i) ? (Qt(t9, r, n, true), An(t9, J(t9, false, e)), r = n = t9.position) : t9.position === t9.lineStart && fr(t9) ? L(t9, "unexpected end of the document within a single quoted scalar") : (t9.position++, n = t9.position);
  L(t9, "unexpected end of the stream within a single quoted scalar");
}
function Sg(t9, e) {
  var i, r, n, o, s, a;
  if (a = t9.input.charCodeAt(t9.position), a !== 34)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, i = r = t9.position; (a = t9.input.charCodeAt(t9.position)) !== 0; ) {
    if (a === 34)
      return Qt(t9, i, t9.position, true), t9.position++, true;
    if (a === 92) {
      if (Qt(t9, i, t9.position, true), a = t9.input.charCodeAt(++t9.position), Ot(a))
        J(t9, false, e);
      else if (a < 256 && ya[a])
        t9.result += Ca[a], t9.position++;
      else if ((s = _g(a)) > 0) {
        for (n = s, o = 0; n > 0; n--)
          a = t9.input.charCodeAt(++t9.position), (s = mg(a)) >= 0 ? o = (o << 4) + s : L(t9, "expected hexadecimal character");
        t9.result += Cg(o), t9.position++;
      } else
        L(t9, "unknown escape sequence");
      i = r = t9.position;
    } else
      Ot(a) ? (Qt(t9, i, r, true), An(t9, J(t9, false, e)), i = r = t9.position) : t9.position === t9.lineStart && fr(t9) ? L(t9, "unexpected end of the document within a double quoted scalar") : (t9.position++, r = t9.position);
  }
  L(t9, "unexpected end of the stream within a double quoted scalar");
}
function kg(t9, e) {
  var i = true, r, n, o, s = t9.tag, a, l = t9.anchor, h, c, u, g, p, _ = /* @__PURE__ */ Object.create(null), v, M, q, S;
  if (S = t9.input.charCodeAt(t9.position), S === 91)
    c = 93, p = false, a = [];
  else if (S === 123)
    c = 125, p = true, a = {};
  else
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = a), S = t9.input.charCodeAt(++t9.position); S !== 0; ) {
    if (J(t9, true, e), S = t9.input.charCodeAt(t9.position), S === c)
      return t9.position++, t9.tag = s, t9.anchor = l, t9.kind = p ? "mapping" : "sequence", t9.result = a, true;
    i ? S === 44 && L(t9, "expected the node content, but found ','") : L(t9, "missed comma between flow collection entries"), M = v = q = null, u = g = false, S === 63 && (h = t9.input.charCodeAt(t9.position + 1), dt(h) && (u = g = true, t9.position++, J(t9, true, e))), r = t9.line, n = t9.lineStart, o = t9.position, Fe(t9, e, Yi, false, true), M = t9.tag, v = t9.result, J(t9, true, e), S = t9.input.charCodeAt(t9.position), (g || t9.line === r) && S === 58 && (u = true, S = t9.input.charCodeAt(++t9.position), J(t9, true, e), Fe(t9, e, Yi, false, true), q = t9.result), p ? ke(t9, a, _, M, v, q, r, n, o) : u ? a.push(ke(t9, null, _, M, v, q, r, n, o)) : a.push(v), J(t9, true, e), S = t9.input.charCodeAt(t9.position), S === 44 ? (i = true, S = t9.input.charCodeAt(++t9.position)) : i = false;
  }
  L(t9, "unexpected end of the stream within a flow collection");
}
function vg(t9, e) {
  var i, r, n = qr, o = false, s = false, a = e, l = 0, h = false, c, u;
  if (u = t9.input.charCodeAt(t9.position), u === 124)
    r = false;
  else if (u === 62)
    r = true;
  else
    return false;
  for (t9.kind = "scalar", t9.result = ""; u !== 0; )
    if (u = t9.input.charCodeAt(++t9.position), u === 43 || u === 45)
      qr === n ? n = u === 43 ? No : fg : L(t9, "repeat of a chomping mode identifier");
    else if ((c = yg(u)) >= 0)
      c === 0 ? L(t9, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? L(t9, "repeat of an indentation width identifier") : (a = e + c - 1, s = true);
    else
      break;
  if (he(u)) {
    do
      u = t9.input.charCodeAt(++t9.position);
    while (he(u));
    if (u === 35)
      do
        u = t9.input.charCodeAt(++t9.position);
      while (!Ot(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Ln(t9), t9.lineIndent = 0, u = t9.input.charCodeAt(t9.position); (!s || t9.lineIndent < a) && u === 32; )
      t9.lineIndent++, u = t9.input.charCodeAt(++t9.position);
    if (!s && t9.lineIndent > a && (a = t9.lineIndent), Ot(u)) {
      l++;
      continue;
    }
    if (t9.lineIndent < a) {
      n === No ? t9.result += at.repeat(`
`, o ? 1 + l : l) : n === qr && o && (t9.result += `
`);
      break;
    }
    for (r ? he(u) ? (h = true, t9.result += at.repeat(`
`, o ? 1 + l : l)) : h ? (h = false, t9.result += at.repeat(`
`, l + 1)) : l === 0 ? o && (t9.result += " ") : t9.result += at.repeat(`
`, l) : t9.result += at.repeat(`
`, o ? 1 + l : l), o = true, s = true, l = 0, i = t9.position; !Ot(u) && u !== 0; )
      u = t9.input.charCodeAt(++t9.position);
    Qt(t9, i, t9.position, false);
  }
  return true;
}
function Wo(t9, e) {
  var i, r = t9.tag, n = t9.anchor, o = [], s, a = false, l;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = o), l = t9.input.charCodeAt(t9.position); l !== 0 && (t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, L(t9, "tab characters must not be used in indentation")), !(l !== 45 || (s = t9.input.charCodeAt(t9.position + 1), !dt(s)))); ) {
    if (a = true, t9.position++, J(t9, true, -1) && t9.lineIndent <= e) {
      o.push(null), l = t9.input.charCodeAt(t9.position);
      continue;
    }
    if (i = t9.line, Fe(t9, e, ga, false, true), o.push(t9.result), J(t9, true, -1), l = t9.input.charCodeAt(t9.position), (t9.line === i || t9.lineIndent > e) && l !== 0)
      L(t9, "bad indentation of a sequence entry");
    else if (t9.lineIndent < e)
      break;
  }
  return a ? (t9.tag = r, t9.anchor = n, t9.kind = "sequence", t9.result = o, true) : false;
}
function wg(t9, e, i) {
  var r, n, o, s, a, l, h = t9.tag, c = t9.anchor, u = {}, g = /* @__PURE__ */ Object.create(null), p = null, _ = null, v = null, M = false, q = false, S;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = u), S = t9.input.charCodeAt(t9.position); S !== 0; ) {
    if (!M && t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, L(t9, "tab characters must not be used in indentation")), r = t9.input.charCodeAt(t9.position + 1), o = t9.line, (S === 63 || S === 58) && dt(r))
      S === 63 ? (M && (ke(t9, u, g, p, _, null, s, a, l), p = _ = v = null), q = true, M = true, n = true) : M ? (M = false, n = true) : L(t9, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t9.position += 1, S = r;
    else {
      if (s = t9.line, a = t9.lineStart, l = t9.position, !Fe(t9, i, pa, false, true))
        break;
      if (t9.line === o) {
        for (S = t9.input.charCodeAt(t9.position); he(S); )
          S = t9.input.charCodeAt(++t9.position);
        if (S === 58)
          S = t9.input.charCodeAt(++t9.position), dt(S) || L(t9, "a whitespace character is expected after the key-value separator within a block mapping"), M && (ke(t9, u, g, p, _, null, s, a, l), p = _ = v = null), q = true, M = false, n = false, p = t9.tag, _ = t9.result;
        else if (q)
          L(t9, "can not read an implicit mapping pair; a colon is missed");
        else
          return t9.tag = h, t9.anchor = c, true;
      } else if (q)
        L(t9, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t9.tag = h, t9.anchor = c, true;
    }
    if ((t9.line === o || t9.lineIndent > e) && (M && (s = t9.line, a = t9.lineStart, l = t9.position), Fe(t9, e, Gi, true, n) && (M ? _ = t9.result : v = t9.result), M || (ke(t9, u, g, p, _, v, s, a, l), p = _ = v = null), J(t9, true, -1), S = t9.input.charCodeAt(t9.position)), (t9.line === o || t9.lineIndent > e) && S !== 0)
      L(t9, "bad indentation of a mapping entry");
    else if (t9.lineIndent < e)
      break;
  }
  return M && ke(t9, u, g, p, _, null, s, a, l), q && (t9.tag = h, t9.anchor = c, t9.kind = "mapping", t9.result = u), q;
}
function Bg(t9) {
  var e, i = false, r = false, n, o, s;
  if (s = t9.input.charCodeAt(t9.position), s !== 33)
    return false;
  if (t9.tag !== null && L(t9, "duplication of a tag property"), s = t9.input.charCodeAt(++t9.position), s === 60 ? (i = true, s = t9.input.charCodeAt(++t9.position)) : s === 33 ? (r = true, n = "!!", s = t9.input.charCodeAt(++t9.position)) : n = "!", e = t9.position, i) {
    do
      s = t9.input.charCodeAt(++t9.position);
    while (s !== 0 && s !== 62);
    t9.position < t9.length ? (o = t9.input.slice(e, t9.position), s = t9.input.charCodeAt(++t9.position)) : L(t9, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !dt(s); )
      s === 33 && (r ? L(t9, "tag suffix cannot contain exclamation marks") : (n = t9.input.slice(e - 1, t9.position + 1), ma.test(n) || L(t9, "named tag handle cannot contain such characters"), r = true, e = t9.position + 1)), s = t9.input.charCodeAt(++t9.position);
    o = t9.input.slice(e, t9.position), gg.test(o) && L(t9, "tag suffix cannot contain flow indicator characters");
  }
  o && !_a.test(o) && L(t9, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    L(t9, "tag name is malformed: " + o);
  }
  return i ? t9.tag = o : ee.call(t9.tagMap, n) ? t9.tag = t9.tagMap[n] + o : n === "!" ? t9.tag = "!" + o : n === "!!" ? t9.tag = "tag:yaml.org,2002:" + o : L(t9, 'undeclared tag handle "' + n + '"'), true;
}
function Fg(t9) {
  var e, i;
  if (i = t9.input.charCodeAt(t9.position), i !== 38)
    return false;
  for (t9.anchor !== null && L(t9, "duplication of an anchor property"), i = t9.input.charCodeAt(++t9.position), e = t9.position; i !== 0 && !dt(i) && !Se(i); )
    i = t9.input.charCodeAt(++t9.position);
  return t9.position === e && L(t9, "name of an anchor node must contain at least one character"), t9.anchor = t9.input.slice(e, t9.position), true;
}
function Lg(t9) {
  var e, i, r;
  if (r = t9.input.charCodeAt(t9.position), r !== 42)
    return false;
  for (r = t9.input.charCodeAt(++t9.position), e = t9.position; r !== 0 && !dt(r) && !Se(r); )
    r = t9.input.charCodeAt(++t9.position);
  return t9.position === e && L(t9, "name of an alias node must contain at least one character"), i = t9.input.slice(e, t9.position), ee.call(t9.anchorMap, i) || L(t9, 'unidentified alias "' + i + '"'), t9.result = t9.anchorMap[i], J(t9, true, -1), true;
}
function Fe(t9, e, i, r, n) {
  var o, s, a, l = 1, h = false, c = false, u, g, p, _, v, M;
  if (t9.listener !== null && t9.listener("open", t9), t9.tag = null, t9.anchor = null, t9.kind = null, t9.result = null, o = s = a = Gi === i || ga === i, r && J(t9, true, -1) && (h = true, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)), l === 1)
    for (; Bg(t9) || Fg(t9); )
      J(t9, true, -1) ? (h = true, a = o, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)) : a = false;
  if (a && (a = h || n), (l === 1 || Gi === i) && (Yi === i || pa === i ? v = e : v = e + 1, M = t9.position - t9.lineStart, l === 1 ? a && (Wo(t9, M) || wg(t9, M, v)) || kg(t9, v) ? c = true : (s && vg(t9, v) || Tg(t9, v) || Sg(t9, v) ? c = true : Lg(t9) ? (c = true, (t9.tag !== null || t9.anchor !== null) && L(t9, "alias node should not have any properties")) : bg(t9, v, Yi === i) && (c = true, t9.tag === null && (t9.tag = "?")), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : l === 0 && (c = a && Wo(t9, M))), t9.tag === null)
    t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
  else if (t9.tag === "?") {
    for (t9.result !== null && t9.kind !== "scalar" && L(t9, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t9.kind + '"'), u = 0, g = t9.implicitTypes.length; u < g; u += 1)
      if (_ = t9.implicitTypes[u], _.resolve(t9.result)) {
        t9.result = _.construct(t9.result), t9.tag = _.tag, t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
        break;
      }
  } else if (t9.tag !== "!") {
    if (ee.call(t9.typeMap[t9.kind || "fallback"], t9.tag))
      _ = t9.typeMap[t9.kind || "fallback"][t9.tag];
    else
      for (_ = null, p = t9.typeMap.multi[t9.kind || "fallback"], u = 0, g = p.length; u < g; u += 1)
        if (t9.tag.slice(0, p[u].tag.length) === p[u].tag) {
          _ = p[u];
          break;
        }
    _ || L(t9, "unknown tag !<" + t9.tag + ">"), t9.result !== null && _.kind !== t9.kind && L(t9, "unacceptable node kind for !<" + t9.tag + '> tag; it should be "' + _.kind + '", not "' + t9.kind + '"'), _.resolve(t9.result, t9.tag) ? (t9.result = _.construct(t9.result, t9.tag), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : L(t9, "cannot resolve a node with !<" + t9.tag + "> explicit tag");
  }
  return t9.listener !== null && t9.listener("close", t9), t9.tag !== null || t9.anchor !== null || c;
}
function Ag(t9) {
  var e = t9.position, i, r, n, o = false, s;
  for (t9.version = null, t9.checkLineBreaks = t9.legacy, t9.tagMap = /* @__PURE__ */ Object.create(null), t9.anchorMap = /* @__PURE__ */ Object.create(null); (s = t9.input.charCodeAt(t9.position)) !== 0 && (J(t9, true, -1), s = t9.input.charCodeAt(t9.position), !(t9.lineIndent > 0 || s !== 37)); ) {
    for (o = true, s = t9.input.charCodeAt(++t9.position), i = t9.position; s !== 0 && !dt(s); )
      s = t9.input.charCodeAt(++t9.position);
    for (r = t9.input.slice(i, t9.position), n = [], r.length < 1 && L(t9, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; he(s); )
        s = t9.input.charCodeAt(++t9.position);
      if (s === 35) {
        do
          s = t9.input.charCodeAt(++t9.position);
        while (s !== 0 && !Ot(s));
        break;
      }
      if (Ot(s))
        break;
      for (i = t9.position; s !== 0 && !dt(s); )
        s = t9.input.charCodeAt(++t9.position);
      n.push(t9.input.slice(i, t9.position));
    }
    s !== 0 && Ln(t9), ee.call(Po, r) ? Po[r](t9, r, n) : Vi(t9, 'unknown document directive "' + r + '"');
  }
  if (J(t9, true, -1), t9.lineIndent === 0 && t9.input.charCodeAt(t9.position) === 45 && t9.input.charCodeAt(t9.position + 1) === 45 && t9.input.charCodeAt(t9.position + 2) === 45 ? (t9.position += 3, J(t9, true, -1)) : o && L(t9, "directives end mark is expected"), Fe(t9, t9.lineIndent - 1, Gi, false, true), J(t9, true, -1), t9.checkLineBreaks && pg.test(t9.input.slice(e, t9.position)) && Vi(t9, "non-ASCII line breaks are interpreted as content"), t9.documents.push(t9.result), t9.position === t9.lineStart && fr(t9)) {
    t9.input.charCodeAt(t9.position) === 46 && (t9.position += 3, J(t9, true, -1));
    return;
  }
  if (t9.position < t9.length - 1)
    L(t9, "end of the stream or a document separator is expected");
  else
    return;
}
function ba(t9, e) {
  t9 = String(t9), e = e || {}, t9.length !== 0 && (t9.charCodeAt(t9.length - 1) !== 10 && t9.charCodeAt(t9.length - 1) !== 13 && (t9 += `
`), t9.charCodeAt(0) === 65279 && (t9 = t9.slice(1)));
  var i = new xg(t9, e), r = t9.indexOf("\0");
  for (r !== -1 && (i.position = r, L(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    Ag(i);
  return i.documents;
}
function Eg(t9, e, i) {
  e !== null && typeof e == "object" && typeof i > "u" && (i = e, e = null);
  var r = ba(t9, i);
  if (typeof e != "function")
    return r;
  for (var n = 0, o = r.length; n < o; n += 1)
    e(r[n]);
}
function Mg(t9, e) {
  var i = ba(t9, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new Ht("expected a single document in the stream, but found more");
  }
}
var Og = Eg;
var Ig = Mg;
var $g = {
  loadAll: Og,
  load: Ig
};
var Dg = ua;
var Ng = $g.load;
var Ta = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
function Rg(t9, e) {
  var r, n;
  const i = t9.match(Ta);
  if (i) {
    const o = Ng(i[1], {
      // To keep things simple, only allow strings, arrays, and plain objects.
      // https://www.yaml.org/spec/1.2/spec.html#id2802346
      schema: Dg
    });
    return o != null && o.title && ((r = e.setDiagramTitle) == null || r.call(e, o.title)), o != null && o.displayMode && ((n = e.setDisplayMode) == null || n.call(e, o.displayMode)), t9.slice(i[0].length);
  } else
    return t9;
}
var rn = function(t9, e, i) {
  const { depth: r, clobber: n } = Object.assign({ depth: 2, clobber: false }, i);
  return Array.isArray(e) && !Array.isArray(t9) ? (e.forEach((o) => rn(t9, o, i)), t9) : Array.isArray(e) && Array.isArray(t9) ? (e.forEach((o) => {
    t9.includes(o) || t9.push(o);
  }), t9) : t9 === void 0 || r <= 0 ? t9 != null && typeof t9 == "object" && typeof e == "object" ? Object.assign(t9, e) : e : (e !== void 0 && typeof t9 == "object" && typeof e == "object" && Object.keys(e).forEach((o) => {
    typeof e[o] == "object" && (t9[o] === void 0 || typeof t9[o] == "object") ? (t9[o] === void 0 && (t9[o] = Array.isArray(e[o]) ? [] : {}), t9[o] = rn(t9[o], e[o], { depth: r - 1, clobber: n })) : (n || typeof t9[o] != "object" && typeof e[o] != "object") && (t9[o] = e[o]);
  }), t9);
};
var nt = rn;
var ti = Object.freeze(Vd);
var ut = nt({}, ti);
var Sa;
var Le = [];
var Ye = nt({}, ti);
var dr = (t9, e) => {
  let i = nt({}, t9), r = {};
  for (const n of e)
    va(n), r = nt(r, n);
  if (i = nt(i, r), r.theme && r.theme in jt) {
    const n = nt({}, Sa), o = nt(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in jt && (i.themeVariables = jt[i.theme].getThemeVariables(o));
  }
  return Ye = i, Ba(Ye), Ye;
};
var qg = (t9) => (ut = nt({}, ti), ut = nt(ut, t9), t9.theme && jt[t9.theme] && (ut.themeVariables = jt[t9.theme].getThemeVariables(t9.themeVariables)), dr(ut, Le), ut);
var Pg = (t9) => {
  Sa = nt({}, t9);
};
var zg = (t9) => (ut = nt(ut, t9), dr(ut, Le), ut);
var ka = () => nt({}, ut);
var Wg = (t9) => (Ba(t9), nt(Ye, t9), Ft());
var Ft = () => nt({}, Ye);
var va = (t9) => {
  ["secure", ...ut.secure ?? []].forEach((e) => {
    t9[e] !== void 0 && (k.debug(`Denied attempt to modify a secure key ${e}`, t9[e]), delete t9[e]);
  }), Object.keys(t9).forEach((e) => {
    e.indexOf("__") === 0 && delete t9[e];
  }), Object.keys(t9).forEach((e) => {
    typeof t9[e] == "string" && (t9[e].includes("<") || t9[e].includes(">") || t9[e].includes("url(data:")) && delete t9[e], typeof t9[e] == "object" && va(t9[e]);
  });
};
var wa = (t9) => {
  t9.fontFamily && (t9.themeVariables ? t9.themeVariables.fontFamily || (t9.themeVariables = { fontFamily: t9.fontFamily }) : t9.themeVariables = { fontFamily: t9.fontFamily }), Le.push(t9), dr(ut, Le);
};
var Xi = (t9 = ut) => {
  Le = [], dr(t9, Le);
};
var Hg = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
};
var Ho = {};
var jg = (t9) => {
  Ho[t9] || (k.warn(Hg[t9]), Ho[t9] = true);
};
var Ba = (t9) => {
  t9 && (t9.lazyLoadedDiagrams || t9.loadExternalDiagramsAtStartup) && jg("LAZY_LOAD_DEPRECATED");
};
var Ug = function(t9, e) {
  for (let i of e)
    t9.attr(i[0], i[1]);
};
var Yg = function(t9, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t9), r.set("width", e)), r;
};
var Fa = function(t9, e, i, r) {
  const n = Yg(e, i, r);
  Ug(t9, n);
};
var Gg = function(t9, e, i, r) {
  const n = e.node().getBBox(), o = n.width, s = n.height;
  k.info(`SVG bounds: ${o}x${s}`, n);
  let a = 0, l = 0;
  k.info(`Graph bounds: ${a}x${l}`, t9), a = o + i * 2, l = s + i * 2, k.info(`Calculated bounds: ${a}x${l}`), Fa(e, l, a, r);
  const h = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", h);
};
var Ei = {};
var Vg = (t9, e, i) => {
  let r = "";
  return t9 in Ei && Ei[t9] ? r = Ei[t9](i) : k.warn(`No theme found for ${t9}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
};
var Xg = (t9, e) => {
  e !== void 0 && (Ei[t9] = e);
};
var Kg = Vg;
var En = "";
var pr = "";
var Mn = "";
var On = (t9) => Je(t9, Ft());
var La = function() {
  En = "", Mn = "", pr = "";
};
var Aa = function(t9) {
  En = On(t9).replace(/^\s+/g, "");
};
var Ea = function() {
  return En || pr;
};
var Ma = function(t9) {
  Mn = On(t9).replace(/\n\s+/g, `
`);
};
var Oa = function() {
  return Mn;
};
var Ia = function(t9) {
  pr = On(t9);
};
var $a = function() {
  return pr;
};
var Zg = {
  getAccTitle: Ea,
  setAccTitle: Aa,
  getDiagramTitle: $a,
  setDiagramTitle: Ia,
  getAccDescription: Oa,
  setAccDescription: Ma,
  clear: La
};
var Jg = Object.freeze(Object.defineProperty({
  __proto__: null,
  clear: La,
  default: Zg,
  getAccDescription: Oa,
  getAccTitle: Ea,
  getDiagramTitle: $a,
  setAccDescription: Ma,
  setAccTitle: Aa,
  setDiagramTitle: Ia
}, Symbol.toStringTag, { value: "Module" }));
var oe = {};
var Da = function(t9, e, i, r) {
  k.debug("parseDirective is being called", e, i, r);
  try {
    if (e !== void 0)
      switch (e = e.trim(), i) {
        case "open_directive":
          oe = {};
          break;
        case "type_directive":
          if (!oe)
            throw new Error("currentDirective is undefined");
          oe.type = e.toLowerCase();
          break;
        case "arg_directive":
          if (!oe)
            throw new Error("currentDirective is undefined");
          oe.args = JSON.parse(e);
          break;
        case "close_directive":
          Qg(t9, oe, r), oe = void 0;
          break;
      }
  } catch (n) {
    k.error(
      `Error while rendering sequenceDiagram directive: ${e} jison context: ${i}`
    ), k.error(n.message);
  }
};
var Qg = function(t9, e, i) {
  switch (k.info(`Directive type=${e.type} with args:`, e.args), e.type) {
    case "init":
    case "initialize": {
      ["config"].forEach((r) => {
        e.args[r] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), e.args[i] = e.args[r], delete e.args[r]);
      }), k.info("sanitize in handleDirective", e.args), Ee(e.args), k.info("sanitize in handleDirective (done)", e.args), wa(e.args);
      break;
    }
    case "wrap":
    case "nowrap":
      t9 && t9.setWrap && t9.setWrap(e.type === "wrap");
      break;
    case "themeCss":
      k.warn("themeCss encountered");
      break;
    default:
      k.warn(
        `Unhandled directive: source: '%%{${e.type}: ${JSON.stringify(
          e.args ? e.args : {}
        )}}%%`,
        e
      );
      break;
  }
};
var tm = k;
var em = dn;
var Na = Ft;
var im = (t9) => Je(t9, Na());
var rm = Gg;
var nm = () => Jg;
var om = (t9, e, i, r) => Da(t9, e, i, r);
var Ki = {};
var Zi = (t9, e, i) => {
  if (Ki[t9])
    throw new Error(`Diagram ${t9} already registered.`);
  Ki[t9] = e, i && Pa(t9, i), Xg(t9, e.styles), e.injectUtils && e.injectUtils(
    tm,
    em,
    Na,
    im,
    rm,
    nm(),
    om
  );
};
var In = (t9) => {
  if (t9 in Ki)
    return Ki[t9];
  throw new sm(t9);
};
var sm = class extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
};
var Ra = class extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
};
var am = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var lm = /\s*%%.*\n/gm;
var Ae = {};
var gr = function(t9, e) {
  t9 = t9.replace(Ta, "").replace(am, "").replace(lm, `
`);
  for (const [i, { detector: r }] of Object.entries(Ae))
    if (r(t9, e))
      return i;
  throw new Ra(
    `No diagram type detected matching given configuration for text: ${t9}`
  );
};
var qa = (...t9) => {
  for (const { id: e, detector: i, loader: r } of t9)
    Pa(e, i, r);
};
var hm = async () => {
  k.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(Ae).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          In(i);
        } catch {
          try {
            const { diagram: s, id: a } = await n();
            Zi(a, s, r);
          } catch (s) {
            throw k.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete Ae[i], s;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    k.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      k.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
};
var Pa = (t9, e, i) => {
  Ae[t9] ? k.error(`Detector with key ${t9} already exists`) : Ae[t9] = { detector: e, loader: i }, k.debug(`Detector with key ${t9} added${i ? " with loader" : ""}`);
};
var cm = (t9) => Ae[t9].loader;
var um = typeof global == "object" && global && global.Object === Object && global;
var za = um;
var fm = typeof self == "object" && self && self.Object === Object && self;
var dm = za || fm || Function("return this")();
var ie = dm;
var pm = ie.Symbol;
var Ji = pm;
var Wa = Object.prototype;
var gm = Wa.hasOwnProperty;
var mm = Wa.toString;
var Pe = Ji ? Ji.toStringTag : void 0;
function _m(t9) {
  var e = gm.call(t9, Pe), i = t9[Pe];
  try {
    t9[Pe] = void 0;
    var r = true;
  } catch {
  }
  var n = mm.call(t9);
  return r && (e ? t9[Pe] = i : delete t9[Pe]), n;
}
var ym = Object.prototype;
var Cm = ym.toString;
function xm(t9) {
  return Cm.call(t9);
}
var bm = "[object Null]";
var Tm = "[object Undefined]";
var jo = Ji ? Ji.toStringTag : void 0;
function ai(t9) {
  return t9 == null ? t9 === void 0 ? Tm : bm : jo && jo in Object(t9) ? _m(t9) : xm(t9);
}
function Ha(t9) {
  var e = typeof t9;
  return t9 != null && (e == "object" || e == "function");
}
var Sm = "[object AsyncFunction]";
var km = "[object Function]";
var vm = "[object GeneratorFunction]";
var wm = "[object Proxy]";
function ja(t9) {
  if (!Ha(t9))
    return false;
  var e = ai(t9);
  return e == km || e == vm || e == Sm || e == wm;
}
var Bm = ie["__core-js_shared__"];
var Pr = Bm;
var Uo = function() {
  var t9 = /[^.]+$/.exec(Pr && Pr.keys && Pr.keys.IE_PROTO || "");
  return t9 ? "Symbol(src)_1." + t9 : "";
}();
function Fm(t9) {
  return !!Uo && Uo in t9;
}
var Lm = Function.prototype;
var Am = Lm.toString;
function pe(t9) {
  if (t9 != null) {
    try {
      return Am.call(t9);
    } catch {
    }
    try {
      return t9 + "";
    } catch {
    }
  }
  return "";
}
var Em = /[\\^$.*+?()[\]{}|]/g;
var Mm = /^\[object .+?Constructor\]$/;
var Om = Function.prototype;
var Im = Object.prototype;
var $m = Om.toString;
var Dm = Im.hasOwnProperty;
var Nm = RegExp(
  "^" + $m.call(Dm).replace(Em, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Rm(t9) {
  if (!Ha(t9) || Fm(t9))
    return false;
  var e = ja(t9) ? Nm : Mm;
  return e.test(pe(t9));
}
function qm(t9, e) {
  return t9 == null ? void 0 : t9[e];
}
function Oe(t9, e) {
  var i = qm(t9, e);
  return Rm(i) ? i : void 0;
}
var Pm = Oe(Object, "create");
var ei = Pm;
function zm() {
  this.__data__ = ei ? ei(null) : {}, this.size = 0;
}
function Wm(t9) {
  var e = this.has(t9) && delete this.__data__[t9];
  return this.size -= e ? 1 : 0, e;
}
var Hm = "__lodash_hash_undefined__";
var jm = Object.prototype;
var Um = jm.hasOwnProperty;
function Ym(t9) {
  var e = this.__data__;
  if (ei) {
    var i = e[t9];
    return i === Hm ? void 0 : i;
  }
  return Um.call(e, t9) ? e[t9] : void 0;
}
var Gm = Object.prototype;
var Vm = Gm.hasOwnProperty;
function Xm(t9) {
  var e = this.__data__;
  return ei ? e[t9] !== void 0 : Vm.call(e, t9);
}
var Km = "__lodash_hash_undefined__";
function Zm(t9, e) {
  var i = this.__data__;
  return this.size += this.has(t9) ? 0 : 1, i[t9] = ei && e === void 0 ? Km : e, this;
}
function fe(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
fe.prototype.clear = zm;
fe.prototype.delete = Wm;
fe.prototype.get = Ym;
fe.prototype.has = Xm;
fe.prototype.set = Zm;
function Jm() {
  this.__data__ = [], this.size = 0;
}
function Qm(t9, e) {
  return t9 === e || t9 !== t9 && e !== e;
}
function mr(t9, e) {
  for (var i = t9.length; i--; )
    if (Qm(t9[i][0], e))
      return i;
  return -1;
}
var t0 = Array.prototype;
var e0 = t0.splice;
function i0(t9) {
  var e = this.__data__, i = mr(e, t9);
  if (i < 0)
    return false;
  var r = e.length - 1;
  return i == r ? e.pop() : e0.call(e, i, 1), --this.size, true;
}
function r0(t9) {
  var e = this.__data__, i = mr(e, t9);
  return i < 0 ? void 0 : e[i][1];
}
function n0(t9) {
  return mr(this.__data__, t9) > -1;
}
function o0(t9, e) {
  var i = this.__data__, r = mr(i, t9);
  return r < 0 ? (++this.size, i.push([t9, e])) : i[r][1] = e, this;
}
function Ie(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
Ie.prototype.clear = Jm;
Ie.prototype.delete = i0;
Ie.prototype.get = r0;
Ie.prototype.has = n0;
Ie.prototype.set = o0;
var s0 = Oe(ie, "Map");
var Qi = s0;
function a0() {
  this.size = 0, this.__data__ = {
    hash: new fe(),
    map: new (Qi || Ie)(),
    string: new fe()
  };
}
function l0(t9) {
  var e = typeof t9;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t9 !== "__proto__" : t9 === null;
}
function _r(t9, e) {
  var i = t9.__data__;
  return l0(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function h0(t9) {
  var e = _r(this, t9).delete(t9);
  return this.size -= e ? 1 : 0, e;
}
function c0(t9) {
  return _r(this, t9).get(t9);
}
function u0(t9) {
  return _r(this, t9).has(t9);
}
function f0(t9, e) {
  var i = _r(this, t9), r = i.size;
  return i.set(t9, e), this.size += i.size == r ? 0 : 1, this;
}
function ge(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
ge.prototype.clear = a0;
ge.prototype.delete = h0;
ge.prototype.get = c0;
ge.prototype.has = u0;
ge.prototype.set = f0;
var d0 = "Expected a function";
function li(t9, e) {
  if (typeof t9 != "function" || e != null && typeof e != "function")
    throw new TypeError(d0);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], o = i.cache;
    if (o.has(n))
      return o.get(n);
    var s = t9.apply(this, r);
    return i.cache = o.set(n, s) || o, s;
  };
  return i.cache = new (li.Cache || ge)(), i;
}
li.Cache = ge;
var p0 = "​";
var g0 = {
  curveBasis: Cf,
  curveBasisClosed: xf,
  curveBasisOpen: bf,
  curveBumpX: _f,
  curveBumpY: yf,
  curveBundle: Tf,
  curveCardinalClosed: kf,
  curveCardinalOpen: vf,
  curveCardinal: Sf,
  curveCatmullRomClosed: Bf,
  curveCatmullRomOpen: Ff,
  curveCatmullRom: wf,
  curveLinear: mf,
  curveLinearClosed: Lf,
  curveMonotoneX: Af,
  curveMonotoneY: Ef,
  curveNatural: Mf,
  curveStep: Of,
  curveStepAfter: $f,
  curveStepBefore: If
};
var zr = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var m0 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var _0 = function(t9, e) {
  const i = Ua(t9, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const n = i.map((o) => o.args);
    Ee(n), r = nt(r, [...n]);
  } else
    r = i.args;
  if (r) {
    let n = gr(t9, e);
    ["config"].forEach((o) => {
      r[o] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[o], delete r[o]);
    });
  }
  return r;
};
var Ua = function(t9, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${m0.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t9 = t9.trim().replace(i, "").replace(/'/gm, '"'), k.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t9}`
    );
    let r;
    const n = [];
    for (; (r = zr.exec(t9)) !== null; )
      if (r.index === zr.lastIndex && zr.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const o = r[1] ? r[1] : r[2], s = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: o, args: s });
      }
    return n.length === 0 && n.push({ type: t9, args: null }), n.length === 1 ? n[0] : n;
  } catch (i) {
    return k.error(
      `ERROR: ${i.message} - Unable to parse directive
      ${e !== null ? " type:" + e : ""} based on the text:${t9}`
    ), { type: null, args: null };
  }
};
var y0 = function(t9, e) {
  for (const [i, r] of e.entries())
    if (r.match(t9))
      return i;
  return -1;
};
function C0(t9, e) {
  if (!t9)
    return e;
  const i = `curve${t9.charAt(0).toUpperCase() + t9.slice(1)}`;
  return g0[i] || e;
}
function x0(t9, e) {
  const i = t9.trim();
  if (i)
    return e.securityLevel !== "loose" ? us(i) : i;
}
var b0 = (t9, ...e) => {
  const i = t9.split("."), r = i.length - 1, n = i[r];
  let o = window;
  for (let s = 0; s < r; s++)
    if (o = o[i[s]], !o)
      return;
  o[n](...e);
};
function tr(t9, e) {
  return t9 && e ? Math.sqrt(Math.pow(e.x - t9.x, 2) + Math.pow(e.y - t9.y, 2)) : 0;
}
function T0(t9) {
  let e, i = 0;
  t9.forEach((o) => {
    i += tr(o, e), e = o;
  });
  let r = i / 2, n;
  return e = void 0, t9.forEach((o) => {
    if (e && !n) {
      const s = tr(o, e);
      if (s < r)
        r -= s;
      else {
        const a = r / s;
        a <= 0 && (n = e), a >= 1 && (n = { x: o.x, y: o.y }), a > 0 && a < 1 && (n = {
          x: (1 - a) * e.x + a * o.x,
          y: (1 - a) * e.y + a * o.y
        });
      }
    }
    e = o;
  }), n;
}
function S0(t9) {
  return t9.length === 1 ? t9[0] : T0(t9);
}
var k0 = (t9, e, i) => {
  let r;
  k.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  let o = 25, s;
  r = void 0, e.forEach((c) => {
    if (r && !s) {
      const u = tr(c, r);
      if (u < o)
        o -= u;
      else {
        const g = o / u;
        g <= 0 && (s = r), g >= 1 && (s = { x: c.x, y: c.y }), g > 0 && g < 1 && (s = {
          x: (1 - g) * r.x + g * c.x,
          y: (1 - g) * r.y + g * c.y
        });
      }
    }
    r = c;
  });
  const a = t9 ? 10 : 5, l = Math.atan2(e[0].y - s.y, e[0].x - s.x), h = { x: 0, y: 0 };
  return h.x = Math.sin(l) * a + (e[0].x + s.x) / 2, h.y = -Math.cos(l) * a + (e[0].y + s.y) / 2, h;
};
function v0(t9, e, i) {
  let r = JSON.parse(JSON.stringify(i)), n;
  k.info("our points", r), e !== "start_left" && e !== "start_right" && (r = r.reverse()), r.forEach((u) => {
    n = u;
  });
  let s = 25 + t9, a;
  n = void 0, r.forEach((u) => {
    if (n && !a) {
      const g = tr(u, n);
      if (g < s)
        s -= g;
      else {
        const p = s / g;
        p <= 0 && (a = n), p >= 1 && (a = { x: u.x, y: u.y }), p > 0 && p < 1 && (a = {
          x: (1 - p) * n.x + p * u.x,
          y: (1 - p) * n.y + p * u.y
        });
      }
    }
    n = u;
  });
  const l = 10 + t9 * 0.5, h = Math.atan2(r[0].y - a.y, r[0].x - a.x), c = { x: 0, y: 0 };
  return c.x = Math.sin(h) * l + (r[0].x + a.x) / 2, c.y = -Math.cos(h) * l + (r[0].y + a.y) / 2, e === "start_left" && (c.x = Math.sin(h + Math.PI) * l + (r[0].x + a.x) / 2, c.y = -Math.cos(h + Math.PI) * l + (r[0].y + a.y) / 2), e === "end_right" && (c.x = Math.sin(h - Math.PI) * l + (r[0].x + a.x) / 2 - 5, c.y = -Math.cos(h - Math.PI) * l + (r[0].y + a.y) / 2 - 5), e === "end_left" && (c.x = Math.sin(h) * l + (r[0].x + a.x) / 2 - 5, c.y = -Math.cos(h) * l + (r[0].y + a.y) / 2 - 5), c;
}
function w0(t9) {
  let e = "", i = "";
  for (const r of t9)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
var Yo = 0;
var B0 = () => (Yo++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Yo);
function F0(t9) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t9; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
var L0 = (t9) => F0(t9.length);
var A0 = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0
  };
};
var E0 = function(t9, e) {
  const i = e.text.replace(Bn.lineBreakRegex, " "), [, r] = Dn(e.fontSize), n = t9.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const o = n.append("tspan");
  return o.attr("x", e.x + e.textMargin * 2), o.attr("fill", e.fill), o.text(i), n;
};
var M0 = li(
  (t9, e, i) => {
    if (!t9 || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), Bn.lineBreakRegex.test(t9)))
      return t9;
    const r = t9.split(" "), n = [];
    let o = "";
    return r.forEach((s, a) => {
      const l = er(`${s} `, i), h = er(o, i);
      if (l > e) {
        const { hyphenatedStrings: g, remainingWord: p } = O0(s, e, "-", i);
        n.push(o, ...g), o = p;
      } else
        h + l >= e ? (n.push(o), o = s) : o = [o, s].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(o);
    }), n.filter((s) => s !== "").join(i.joinWith);
  },
  (t9, e, i) => `${t9}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
);
var O0 = li(
  (t9, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t9], o = [];
    let s = "";
    return n.forEach((a, l) => {
      const h = `${s}${a}`;
      if (er(h, r) >= e) {
        const u = l + 1, g = n.length === u, p = `${h}${i}`;
        o.push(g ? h : p), s = "";
      } else
        s = h;
    }), { hyphenatedStrings: o, remainingWord: s };
  },
  (t9, e, i = "-", r) => `${t9}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function I0(t9, e) {
  return e = Object.assign(
    { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 15 },
    e
  ), $n(t9, e).height;
}
function er(t9, e) {
  return e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e), $n(t9, e).width;
}
var $n = li(
  (t9, e) => {
    e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e);
    const { fontSize: i, fontFamily: r, fontWeight: n } = e;
    if (!t9)
      return { width: 0, height: 0 };
    const [, o] = Dn(i), s = ["sans-serif", r], a = t9.split(Bn.lineBreakRegex), l = [], h = Ct("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const c = h.append("svg");
    for (const g of s) {
      let p = 0;
      const _ = { width: 0, height: 0, lineHeight: 0 };
      for (const v of a) {
        const M = A0();
        M.text = v || p0;
        const q = E0(c, M).style("font-size", o).style("font-weight", n).style("font-family", g), S = (q._groups || q)[0][0].getBBox();
        if (S.width === 0 && S.height === 0)
          throw new Error("svg element not in render tree");
        _.width = Math.round(Math.max(_.width, S.width)), p = Math.round(S.height), _.height += p, _.lineHeight = Math.round(Math.max(_.lineHeight, p));
      }
      l.push(_);
    }
    c.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (t9, e) => `${t9}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
var $0 = class {
  constructor(e, i) {
    this.deterministic = e, this.seed = i, this.count = i ? i.length : 0;
  }
  next() {
    return this.deterministic ? this.count++ : Date.now();
  }
};
var Ti;
var D0 = function(t9) {
  return Ti = Ti || document.createElement("div"), t9 = escape(t9).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Ti.innerHTML = t9, unescape(Ti.textContent);
};
var Ee = (t9) => {
  if (k.debug("directiveSanitizer called with", t9), typeof t9 == "object" && (t9.length ? t9.forEach((e) => Ee(e)) : Object.keys(t9).forEach((e) => {
    k.debug("Checking key", e), e.startsWith("__") && (k.debug("sanitize deleting __ option", e), delete t9[e]), e.includes("proto") && (k.debug("sanitize deleting proto option", e), delete t9[e]), e.includes("constr") && (k.debug("sanitize deleting constr option", e), delete t9[e]), e.includes("themeCSS") && (k.debug("sanitizing themeCss option"), t9[e] = Mi(t9[e])), e.includes("fontFamily") && (k.debug("sanitizing fontFamily option"), t9[e] = Mi(t9[e])), e.includes("altFontFamily") && (k.debug("sanitizing altFontFamily option"), t9[e] = Mi(t9[e])), Gd.includes(e) ? typeof t9[e] == "object" && (k.debug("sanitize deleting object", e), Ee(t9[e])) : (k.debug("sanitize deleting option", e), delete t9[e]);
  })), t9.themeVariables) {
    const e = Object.keys(t9.themeVariables);
    for (const i of e) {
      const r = t9.themeVariables[i];
      r && r.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (t9.themeVariables[i] = "");
    }
  }
  k.debug("After sanitization", t9);
};
var Mi = (t9) => {
  let e = 0, i = 0;
  for (const r of t9) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t9;
};
function Ya(t9) {
  return "str" in t9;
}
var N0 = (t9, e, i, r) => {
  if (!r)
    return;
  const n = t9.node().getBBox();
  t9.append("text").text(r).attr("x", n.x + n.width / 2).attr("y", -i).attr("class", e);
};
var Dn = (t9) => {
  if (typeof t9 == "number")
    return [t9, t9 + "px"];
  const e = parseInt(t9, 10);
  return Number.isNaN(e) ? [void 0, void 0] : t9 === String(e) ? [e, t9 + "px"] : [e, t9];
};
var Oi = {
  assignWithDepth: nt,
  wrapLabel: M0,
  calculateTextHeight: I0,
  calculateTextWidth: er,
  calculateTextDimensions: $n,
  detectInit: _0,
  detectDirective: Ua,
  isSubstringInArray: y0,
  interpolateToCurve: C0,
  calcLabelPosition: S0,
  calcCardinalityPosition: k0,
  calcTerminalLabelPosition: v0,
  formatUrl: x0,
  getStylesFromArray: w0,
  generateId: B0,
  random: L0,
  runFunc: b0,
  entityDecode: D0,
  initIdGenerator: $0,
  directiveSanitizer: Ee,
  sanitizeCss: Mi,
  insertTitle: N0,
  parseFontSize: Dn
};
var Ga = "comm";
var Va = "rule";
var Xa = "decl";
var R0 = "@import";
var q0 = "@keyframes";
var P0 = Math.abs;
var Nn = String.fromCharCode;
function Ka(t9) {
  return t9.trim();
}
function nn(t9, e, i) {
  return t9.replace(e, i);
}
function z0(t9, e) {
  return t9.indexOf(e);
}
function ii(t9, e) {
  return t9.charCodeAt(e) | 0;
}
function ri(t9, e, i) {
  return t9.slice(e, i);
}
function Jt(t9) {
  return t9.length;
}
function Za(t9) {
  return t9.length;
}
function Si(t9, e) {
  return e.push(t9), t9;
}
var yr = 1;
var Me = 1;
var Ja = 0;
var Tt = 0;
var Z = 0;
var $e = "";
function Rn(t9, e, i, r, n, o, s) {
  return { value: t9, root: e, parent: i, type: r, props: n, children: o, line: yr, column: Me, length: s, return: "" };
}
function W0() {
  return Z;
}
function H0() {
  return Z = Tt > 0 ? ii($e, --Tt) : 0, Me--, Z === 10 && (Me = 1, yr--), Z;
}
function wt() {
  return Z = Tt < Ja ? ii($e, Tt++) : 0, Me++, Z === 10 && (Me = 1, yr++), Z;
}
function ce() {
  return ii($e, Tt);
}
function Ii() {
  return Tt;
}
function Cr(t9, e) {
  return ri($e, t9, e);
}
function on(t9) {
  switch (t9) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function j0(t9) {
  return yr = Me = 1, Ja = Jt($e = t9), Tt = 0, [];
}
function U0(t9) {
  return $e = "", t9;
}
function Wr(t9) {
  return Ka(Cr(Tt - 1, sn(t9 === 91 ? t9 + 2 : t9 === 40 ? t9 + 1 : t9)));
}
function Y0(t9) {
  for (; (Z = ce()) && Z < 33; )
    wt();
  return on(t9) > 2 || on(Z) > 3 ? "" : " ";
}
function G0(t9, e) {
  for (; --e && wt() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return Cr(t9, Ii() + (e < 6 && ce() == 32 && wt() == 32));
}
function sn(t9) {
  for (; wt(); )
    switch (Z) {
      case t9:
        return Tt;
      case 34:
      case 39:
        t9 !== 34 && t9 !== 39 && sn(Z);
        break;
      case 40:
        t9 === 41 && sn(t9);
        break;
      case 92:
        wt();
        break;
    }
  return Tt;
}
function V0(t9, e) {
  for (; wt() && t9 + Z !== 47 + 10; )
    if (t9 + Z === 42 + 42 && ce() === 47)
      break;
  return "/*" + Cr(e, Tt - 1) + "*" + Nn(t9 === 47 ? t9 : wt());
}
function X0(t9) {
  for (; !on(ce()); )
    wt();
  return Cr(t9, Tt);
}
function K0(t9) {
  return U0($i("", null, null, null, [""], t9 = j0(t9), 0, [0], t9));
}
function $i(t9, e, i, r, n, o, s, a, l) {
  for (var h = 0, c = 0, u = s, g = 0, p = 0, _ = 0, v = 1, M = 1, q = 1, S = 0, z = "", Q = n, X = o, G = r, W = z; M; )
    switch (_ = S, S = wt()) {
      case 40:
        if (_ != 108 && ii(W, u - 1) == 58) {
          z0(W += nn(Wr(S), "&", "&\f"), "&\f") != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        W += Wr(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        W += Y0(_);
        break;
      case 92:
        W += G0(Ii() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Si(Z0(V0(wt(), Ii()), e, i), l);
            break;
          default:
            W += "/";
        }
        break;
      case 123 * v:
        a[h++] = Jt(W) * q;
      case 125 * v:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            M = 0;
          case 59 + c:
            p > 0 && Jt(W) - u && Si(p > 32 ? Vo(W + ";", r, i, u - 1) : Vo(nn(W, " ", "") + ";", r, i, u - 2), l);
            break;
          case 59:
            W += ";";
          default:
            if (Si(G = Go(W, e, i, h, c, n, a, z, Q = [], X = [], u), o), S === 123)
              if (c === 0)
                $i(W, e, G, G, Q, o, u, a, X);
              else
                switch (g === 99 && ii(W, 3) === 110 ? 100 : g) {
                  case 100:
                  case 109:
                  case 115:
                    $i(t9, G, G, r && Si(Go(t9, G, G, 0, 0, n, a, z, n, Q = [], u), X), n, X, u, a, r ? Q : X);
                    break;
                  default:
                    $i(W, G, G, G, [""], X, 0, a, X);
                }
        }
        h = c = p = 0, v = q = 1, z = W = "", u = s;
        break;
      case 58:
        u = 1 + Jt(W), p = _;
      default:
        if (v < 1) {
          if (S == 123)
            --v;
          else if (S == 125 && v++ == 0 && H0() == 125)
            continue;
        }
        switch (W += Nn(S), S * v) {
          case 38:
            q = c > 0 ? 1 : (W += "\f", -1);
            break;
          case 44:
            a[h++] = (Jt(W) - 1) * q, q = 1;
            break;
          case 64:
            ce() === 45 && (W += Wr(wt())), g = ce(), c = u = Jt(z = W += X0(Ii())), S++;
            break;
          case 45:
            _ === 45 && Jt(W) == 2 && (v = 0);
        }
    }
  return o;
}
function Go(t9, e, i, r, n, o, s, a, l, h, c) {
  for (var u = n - 1, g = n === 0 ? o : [""], p = Za(g), _ = 0, v = 0, M = 0; _ < r; ++_)
    for (var q = 0, S = ri(t9, u + 1, u = P0(v = s[_])), z = t9; q < p; ++q)
      (z = Ka(v > 0 ? g[q] + " " + S : nn(S, /&\f/g, g[q]))) && (l[M++] = z);
  return Rn(t9, e, i, n === 0 ? Va : a, l, h, c);
}
function Z0(t9, e, i) {
  return Rn(t9, e, i, Ga, Nn(W0()), ri(t9, 2, -2), 0);
}
function Vo(t9, e, i, r) {
  return Rn(t9, e, i, Xa, ri(t9, 0, r), ri(t9, r + 1, -1), r);
}
function an(t9, e) {
  for (var i = "", r = Za(t9), n = 0; n < r; n++)
    i += e(t9[n], n, t9, e) || "";
  return i;
}
function J0(t9, e, i, r) {
  switch (t9.type) {
    case R0:
    case Xa:
      return t9.return = t9.return || t9.value;
    case Ga:
      return "";
    case q0:
      return t9.return = t9.value + "{" + an(t9.children, r) + "}";
    case Va:
      t9.value = t9.props.join(",");
  }
  return Jt(i = an(t9.children, r)) ? t9.return = t9.value + "{" + i + "}" : "";
}
var Xo = "10.3.1";
var Qa = "c4";
var Q0 = (t9) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t9);
var t_ = async () => {
  const { diagram: t9 } = await import("./c4Diagram-bd40bc1b-ODKWXC4C.js");
  return { id: Qa, diagram: t9 };
};
var e_ = {
  id: Qa,
  detector: Q0,
  loader: t_
};
var i_ = e_;
var tl = "flowchart";
var r_ = (t9, e) => {
  var i, r;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9);
};
var n_ = async () => {
  const { diagram: t9 } = await import("./flowDiagram-dbf2c5c9-YTXQGOF6.js");
  return { id: tl, diagram: t9 };
};
var o_ = {
  id: tl,
  detector: r_,
  loader: n_
};
var s_ = o_;
var el = "flowchart-v2";
var a_ = (t9, e) => {
  var i, r, n;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(t9);
};
var l_ = async () => {
  const { diagram: t9 } = await import("./flowDiagram-v2-526e04fc-CMMABPYO.js");
  return { id: el, diagram: t9 };
};
var h_ = {
  id: el,
  detector: a_,
  loader: l_
};
var c_ = h_;
var il = "er";
var u_ = (t9) => /^\s*erDiagram/.test(t9);
var f_ = async () => {
  const { diagram: t9 } = await import("./erDiagram-398a53e9-G77HPXS6.js");
  return { id: il, diagram: t9 };
};
var d_ = {
  id: il,
  detector: u_,
  loader: f_
};
var p_ = d_;
var rl = "gitGraph";
var g_ = (t9) => /^\s*gitGraph/.test(t9);
var m_ = async () => {
  const { diagram: t9 } = await import("./gitGraphDiagram-e49c3762-HPYDOSOI.js");
  return { id: rl, diagram: t9 };
};
var __ = {
  id: rl,
  detector: g_,
  loader: m_
};
var y_ = __;
var nl = "gantt";
var C_ = (t9) => /^\s*gantt/.test(t9);
var x_ = async () => {
  const { diagram: t9 } = await import("./ganttDiagram-bac86b83-74T2A3QP.js");
  return { id: nl, diagram: t9 };
};
var b_ = {
  id: nl,
  detector: C_,
  loader: x_
};
var T_ = b_;
var ol = "info";
var S_ = (t9) => /^\s*info/.test(t9);
var k_ = async () => {
  const { diagram: t9 } = await import("./infoDiagram-a7376644-RWHYPAYQ.js");
  return { id: ol, diagram: t9 };
};
var v_ = {
  id: ol,
  detector: S_,
  loader: k_
};
var sl = "pie";
var w_ = (t9) => /^\s*pie/.test(t9);
var B_ = async () => {
  const { diagram: t9 } = await import("./pieDiagram-d415667d-HKB5A3WP.js");
  return { id: sl, diagram: t9 };
};
var F_ = {
  id: sl,
  detector: w_,
  loader: B_
};
var L_ = F_;
var al = "quadrantChart";
var A_ = (t9) => /^\s*quadrantChart/.test(t9);
var E_ = async () => {
  const { diagram: t9 } = await import("./quadrantDiagram-f4c13fcb-2DFILWAI.js");
  return { id: al, diagram: t9 };
};
var M_ = {
  id: al,
  detector: A_,
  loader: E_
};
var O_ = M_;
var ll = "requirement";
var I_ = (t9) => /^\s*requirement(Diagram)?/.test(t9);
var $_ = async () => {
  const { diagram: t9 } = await import("./requirementDiagram-51520602-5F4I7425.js");
  return { id: ll, diagram: t9 };
};
var D_ = {
  id: ll,
  detector: I_,
  loader: $_
};
var N_ = D_;
var hl = "sequence";
var R_ = (t9) => /^\s*sequenceDiagram/.test(t9);
var q_ = async () => {
  const { diagram: t9 } = await import("./sequenceDiagram-adea57f6-VFRJSZEG.js");
  return { id: hl, diagram: t9 };
};
var P_ = {
  id: hl,
  detector: R_,
  loader: q_
};
var z_ = P_;
var cl = "class";
var W_ = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(t9);
};
var H_ = async () => {
  const { diagram: t9 } = await import("./classDiagram-b1e5886b-YGBQQSSI.js");
  return { id: cl, diagram: t9 };
};
var j_ = {
  id: cl,
  detector: W_,
  loader: H_
};
var U_ = j_;
var ul = "classDiagram";
var Y_ = (t9, e) => {
  var i;
  return /^\s*classDiagram/.test(t9) && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(t9);
};
var G_ = async () => {
  const { diagram: t9 } = await import("./classDiagram-v2-b0bf8ef8-73YCHFBI.js");
  return { id: ul, diagram: t9 };
};
var V_ = {
  id: ul,
  detector: Y_,
  loader: G_
};
var X_ = V_;
var fl = "state";
var K_ = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(t9);
};
var Z_ = async () => {
  const { diagram: t9 } = await import("./stateDiagram-949ae5f7-2FUCPH55.js");
  return { id: fl, diagram: t9 };
};
var J_ = {
  id: fl,
  detector: K_,
  loader: Z_
};
var Q_ = J_;
var dl = "stateDiagram";
var ty = (t9, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t9) || /^\s*stateDiagram/.test(t9) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
};
var ey = async () => {
  const { diagram: t9 } = await import("./stateDiagram-v2-2efec10d-DT5MWPGZ.js");
  return { id: dl, diagram: t9 };
};
var iy = {
  id: dl,
  detector: ty,
  loader: ey
};
var ry = iy;
var pl = "journey";
var ny = (t9) => /^\s*journey/.test(t9);
var oy = async () => {
  const { diagram: t9 } = await import("./journeyDiagram-4884cc8d-PA7FV5BN.js");
  return { id: pl, diagram: t9 };
};
var sy = {
  id: pl,
  detector: ny,
  loader: oy
};
var ay = sy;
var ly = (t9) => {
  var n;
  const { securityLevel: e } = Ft();
  let i = Ct("body");
  if (e === "sandbox") {
    const s = ((n = Ct(`#i${t9}`).node()) == null ? void 0 : n.contentDocument) ?? document;
    i = Ct(s.body);
  }
  return i.select(`#${t9}`);
};
var hy = (t9, e, i) => {
  k.debug(`renering svg for syntax error
`);
  const r = ly(e);
  r.attr("viewBox", "0 0 2412 512"), Fa(r, 100, 512, true);
  const n = r.append("g");
  n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
};
var gl = { draw: hy };
var cy = gl;
var uy = {
  db: {},
  renderer: gl,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
};
var fy = uy;
var ml = "flowchart-elk";
var dy = (t9, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t9) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t9) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
};
var py = async () => {
  const { diagram: t9 } = await import("./flowchart-elk-definition-c618ffa4-NFBH5OHG.js");
  return { id: ml, diagram: t9 };
};
var gy = {
  id: ml,
  detector: dy,
  loader: py
};
var my = gy;
var _l = "timeline";
var _y = (t9) => /^\s*timeline/.test(t9);
var yy = async () => {
  const { diagram: t9 } = await import("./timeline-definition-a91b186e-ERPAU7VT.js");
  return { id: _l, diagram: t9 };
};
var Cy = {
  id: _l,
  detector: _y,
  loader: yy
};
var xy = Cy;
var yl = "mindmap";
var by = (t9) => /^\s*mindmap/.test(t9);
var Ty = async () => {
  const { diagram: t9 } = await import("./mindmap-definition-dae41a11-S4EXOKSW.js");
  return { id: yl, diagram: t9 };
};
var Sy = {
  id: yl,
  detector: by,
  loader: Ty
};
var ky = Sy;
var Cl = "sankey";
var vy = (t9) => /^\s*sankey-beta/.test(t9);
var wy = async () => {
  const { diagram: t9 } = await import("./sankeyDiagram-fedc6f27-4T2TL43B.js");
  return { id: Cl, diagram: t9 };
};
var By = {
  id: Cl,
  detector: vy,
  loader: wy
};
var Fy = By;
var Ko = false;
var qn = () => {
  Ko || (Ko = true, Zi("error", fy, (t9) => t9.toLowerCase().trim() === "error"), Zi(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {},
      // should never be used
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t9) => t9.toLowerCase().trimStart().startsWith("---")
  ), qa(
    i_,
    X_,
    U_,
    p_,
    T_,
    v_,
    L_,
    N_,
    z_,
    my,
    c_,
    s_,
    ky,
    xy,
    y_,
    ry,
    Q_,
    ay,
    O_,
    Fy
  ));
};
var Ly = (t9) => t9.trimStart().replace(/^\s*%%(?!{)[^\n]+\n?/gm, "");
var xl = class {
  constructor(e) {
    this.text = e, this.type = "graph", this.text += `
`;
    const i = Ft();
    try {
      this.type = gr(e, i);
    } catch (o) {
      this.type = "error", this.detectError = o;
    }
    const r = In(this.type);
    k.debug("Type " + this.type), this.db = r.db, this.renderer = r.renderer, this.parser = r.parser;
    const n = this.parser.parse.bind(this.parser);
    this.parser.parse = (o) => n(Ly(Rg(o, this.db))), this.parser.parser.yy = this.db, this.init = r.init, this.parse();
  }
  parse() {
    var e, i, r;
    if (this.detectError)
      throw this.detectError;
    (i = (e = this.db).clear) == null || i.call(e), (r = this.init) == null || r.call(this, Ft()), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var Pn = async (t9) => {
  const e = gr(t9, Ft());
  try {
    In(e);
  } catch {
    const r = cm(e);
    if (!r)
      throw new Ra(`Diagram ${e} not found.`);
    const { id: n, diagram: o } = await r();
    Zi(n, o);
  }
  return new xl(t9);
};
var ln = [];
var zx = (t9) => {
  ln.push(t9);
};
var Ay = () => {
  ln.forEach((t9) => {
    t9();
  }), ln = [];
};
var Ey = Object.prototype;
function bl(t9) {
  var e = t9 && t9.constructor, i = typeof e == "function" && e.prototype || Ey;
  return t9 === i;
}
function My(t9, e) {
  return function(i) {
    return t9(e(i));
  };
}
var Oy = My(Object.keys, Object);
var Iy = Oy;
var $y = Object.prototype;
var Dy = $y.hasOwnProperty;
function Ny(t9) {
  if (!bl(t9))
    return Iy(t9);
  var e = [];
  for (var i in Object(t9))
    Dy.call(t9, i) && i != "constructor" && e.push(i);
  return e;
}
var Ry = Oe(ie, "DataView");
var hn = Ry;
var qy = Oe(ie, "Promise");
var cn = qy;
var Py = Oe(ie, "Set");
var un = Py;
var zy = Oe(ie, "WeakMap");
var fn = zy;
var Zo = "[object Map]";
var Wy = "[object Object]";
var Jo = "[object Promise]";
var Qo = "[object Set]";
var ts = "[object WeakMap]";
var es = "[object DataView]";
var Hy = pe(hn);
var jy = pe(Qi);
var Uy = pe(cn);
var Yy = pe(un);
var Gy = pe(fn);
var se = ai;
(hn && se(new hn(new ArrayBuffer(1))) != es || Qi && se(new Qi()) != Zo || cn && se(cn.resolve()) != Jo || un && se(new un()) != Qo || fn && se(new fn()) != ts) && (se = function(t9) {
  var e = ai(t9), i = e == Wy ? t9.constructor : void 0, r = i ? pe(i) : "";
  if (r)
    switch (r) {
      case Hy:
        return es;
      case jy:
        return Zo;
      case Uy:
        return Jo;
      case Yy:
        return Qo;
      case Gy:
        return ts;
    }
  return e;
});
var Vy = se;
function zn(t9) {
  return t9 != null && typeof t9 == "object";
}
var Xy = "[object Arguments]";
function is(t9) {
  return zn(t9) && ai(t9) == Xy;
}
var Tl = Object.prototype;
var Ky = Tl.hasOwnProperty;
var Zy = Tl.propertyIsEnumerable;
var Jy = is(function() {
  return arguments;
}()) ? is : function(t9) {
  return zn(t9) && Ky.call(t9, "callee") && !Zy.call(t9, "callee");
};
var Qy = Jy;
var tC = Array.isArray;
var eC = tC;
var iC = 9007199254740991;
function Sl(t9) {
  return typeof t9 == "number" && t9 > -1 && t9 % 1 == 0 && t9 <= iC;
}
function rC(t9) {
  return t9 != null && Sl(t9.length) && !ja(t9);
}
function nC() {
  return false;
}
var kl = typeof exports == "object" && exports && !exports.nodeType && exports;
var rs = kl && typeof module == "object" && module && !module.nodeType && module;
var oC = rs && rs.exports === kl;
var ns = oC ? ie.Buffer : void 0;
var sC = ns ? ns.isBuffer : void 0;
var aC = sC || nC;
var lC = aC;
var hC = "[object Arguments]";
var cC = "[object Array]";
var uC = "[object Boolean]";
var fC = "[object Date]";
var dC = "[object Error]";
var pC = "[object Function]";
var gC = "[object Map]";
var mC = "[object Number]";
var _C = "[object Object]";
var yC = "[object RegExp]";
var CC = "[object Set]";
var xC = "[object String]";
var bC = "[object WeakMap]";
var TC = "[object ArrayBuffer]";
var SC = "[object DataView]";
var kC = "[object Float32Array]";
var vC = "[object Float64Array]";
var wC = "[object Int8Array]";
var BC = "[object Int16Array]";
var FC = "[object Int32Array]";
var LC = "[object Uint8Array]";
var AC = "[object Uint8ClampedArray]";
var EC = "[object Uint16Array]";
var MC = "[object Uint32Array]";
var Y = {};
Y[kC] = Y[vC] = Y[wC] = Y[BC] = Y[FC] = Y[LC] = Y[AC] = Y[EC] = Y[MC] = true;
Y[hC] = Y[cC] = Y[TC] = Y[uC] = Y[SC] = Y[fC] = Y[dC] = Y[pC] = Y[gC] = Y[mC] = Y[_C] = Y[yC] = Y[CC] = Y[xC] = Y[bC] = false;
function OC(t9) {
  return zn(t9) && Sl(t9.length) && !!Y[ai(t9)];
}
function IC(t9) {
  return function(e) {
    return t9(e);
  };
}
var vl = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ge = vl && typeof module == "object" && module && !module.nodeType && module;
var $C = Ge && Ge.exports === vl;
var Hr = $C && za.process;
var DC = function() {
  try {
    var t9 = Ge && Ge.require && Ge.require("util").types;
    return t9 || Hr && Hr.binding && Hr.binding("util");
  } catch {
  }
}();
var os = DC;
var ss = os && os.isTypedArray;
var NC = ss ? IC(ss) : OC;
var RC = NC;
var qC = "[object Map]";
var PC = "[object Set]";
var zC = Object.prototype;
var WC = zC.hasOwnProperty;
function jr(t9) {
  if (t9 == null)
    return true;
  if (rC(t9) && (eC(t9) || typeof t9 == "string" || typeof t9.splice == "function" || lC(t9) || RC(t9) || Qy(t9)))
    return !t9.length;
  var e = Vy(t9);
  if (e == qC || e == PC)
    return !t9.size;
  if (bl(t9))
    return !Ny(t9).length;
  for (var i in t9)
    if (WC.call(t9, i))
      return false;
  return true;
}
var HC = "graphics-document document";
function jC(t9, e) {
  t9.attr("role", HC), e !== "" && t9.attr("aria-roledescription", e);
}
function UC(t9, e, i, r) {
  if (t9.insert !== void 0) {
    if (i) {
      const n = `chart-desc-${r}`;
      t9.attr("aria-describedby", n), t9.insert("desc", ":first-child").attr("id", n).text(i);
    }
    if (e) {
      const n = `chart-title-${r}`;
      t9.attr("aria-labelledby", n), t9.insert("title", ":first-child").attr("id", n).text(e);
    }
  }
}
var wl = [
  "graph",
  "flowchart",
  "flowchart-v2",
  "flowchart-elk",
  "stateDiagram",
  "stateDiagram-v2"
];
var YC = 5e4;
var GC = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var VC = "sandbox";
var XC = "loose";
var KC = "http://www.w3.org/2000/svg";
var ZC = "http://www.w3.org/1999/xlink";
var JC = "http://www.w3.org/1999/xhtml";
var QC = "100%";
var tx = "100%";
var ex = "border:0;margin:0;";
var ix = "margin:0";
var rx = "allow-top-navigation-by-user-activation allow-popups";
var nx = 'The "iframe" tag is not supported by your browser.';
var ox = ["foreignobject"];
var sx = ["dominant-baseline"];
async function ax(t9, e) {
  qn();
  try {
    await Pn(t9);
  } catch (i) {
    if (e != null && e.suppressErrors)
      return false;
    throw i;
  }
  return true;
}
var lx = function(t9) {
  let e = t9;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
};
var hx = function(t9) {
  return t9.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var as = (t9, e, i = []) => `
.${t9} ${e} { ${i.join(" !important; ")} !important; }`;
var cx = (t9, e, i = {}) => {
  var n;
  let r = "";
  if (t9.themeCSS !== void 0 && (r += `
${t9.themeCSS}`), t9.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${t9.fontFamily}}`), t9.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${t9.altFontFamily}}`), !jr(i) && wl.includes(e)) {
    const l = t9.htmlLabels || ((n = t9.flowchart) == null ? void 0 : n.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const h in i) {
      const c = i[h];
      jr(c.styles) || l.forEach((u) => {
        r += as(c.id, u, c.styles);
      }), jr(c.textStyles) || (r += as(c.id, "tspan", c.textStyles));
    }
  }
  return r;
};
var ux = (t9, e, i, r) => {
  const n = cx(t9, e, i), o = Kg(e, n, t9.themeVariables);
  return an(K0(`${r}{${o}}`), J0);
};
var fx = (t9 = "", e, i) => {
  let r = t9;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = hx(r), r = r.replace(/<br>/g, "<br/>"), r;
};
var dx = (t9 = "", e) => {
  var n, o;
  const i = (o = (n = e == null ? void 0 : e.viewBox) == null ? void 0 : n.baseVal) != null && o.height ? e.viewBox.baseVal.height + "px" : tx, r = btoa('<body style="' + ix + '">' + t9 + "</body>");
  return `<iframe style="width:${QC};height:${i};${ex}" src="data:text/html;base64,${r}" sandbox="${rx}">
  ${nx}
</iframe>`;
};
var ls = (t9, e, i, r, n) => {
  const o = t9.append("div");
  o.attr("id", i), r && o.attr("style", r);
  const s = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", KC);
  return n && s.attr("xmlns:xlink", n), s.append("g"), t9;
};
function hs(t9, e) {
  return t9.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var px = (t9, e, i, r) => {
  var n, o, s;
  (n = t9.getElementById(e)) == null || n.remove(), (o = t9.getElementById(i)) == null || o.remove(), (s = t9.getElementById(r)) == null || s.remove();
};
var gx = async function(t9, e, i) {
  var E, T, x, O;
  qn(), Xi();
  const r = Oi.detectInit(e);
  r && (Ee(r), wa(r));
  const n = Ft();
  k.debug(n), e.length > ((n == null ? void 0 : n.maxTextSize) ?? YC) && (e = GC), e = e.replace(/\r\n?/g, `
`), e = e.replace(
    /<(\w+)([^>]*)>/g,
    (y, D, w) => "<" + D + w.replace(/="([^"]*)"/g, "='$1'") + ">"
  );
  const o = "#" + t9, s = "i" + t9, a = "#" + s, l = "d" + t9, h = "#" + l;
  let c = Ct("body");
  const u = n.securityLevel === VC, g = n.securityLevel === XC, p = n.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), u) {
      const y = hs(Ct(i), s);
      c = Ct(y.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct(i);
    ls(c, t9, l, `font-family: ${p}`, ZC);
  } else {
    if (px(document, t9, l, s), u) {
      const y = hs(Ct("body"), s);
      c = Ct(y.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct("body");
    ls(c, t9, l);
  }
  e = lx(e);
  let _, v;
  try {
    _ = await Pn(e);
  } catch (y) {
    _ = new xl("error"), v = y;
  }
  const M = c.select(h).node(), q = _.type, S = M.firstChild, z = S.firstChild, Q = wl.includes(q) ? _.renderer.getClasses(e, _) : {}, X = ux(n, q, Q, o), G = document.createElement("style");
  G.innerHTML = X, S.insertBefore(G, z);
  try {
    await _.renderer.draw(e, t9, Xo, _);
  } catch (y) {
    throw cy.draw(e, t9, Xo), y;
  }
  const W = c.select(`${h} svg`), Yt = (T = (E = _.db).getAccTitle) == null ? void 0 : T.call(E), K = (O = (x = _.db).getAccDescription) == null ? void 0 : O.call(x);
  _x(q, W, Yt, K), c.select(`[id="${t9}"]`).selectAll("foreignobject > *").attr("xmlns", JC);
  let $ = c.select(h).node().innerHTML;
  if (k.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), $ = fx($, u, ia(n.arrowMarkerAbsolute)), u) {
    const y = c.select(h + " svg").node();
    $ = dx($, y);
  } else
    g || ($ = Ui.sanitize($, {
      ADD_TAGS: ox,
      ADD_ATTR: sx
    }));
  if (Ay(), v)
    throw v;
  const At = Ct(u ? a : h).node();
  return At && "remove" in At && At.remove(), {
    svg: $,
    bindFunctions: _.db.bindFunctions
  };
};
function mx(t9 = {}) {
  var i;
  t9 != null && t9.fontFamily && !((i = t9.themeVariables) != null && i.fontFamily) && (t9.themeVariables || (t9.themeVariables = {}), t9.themeVariables.fontFamily = t9.fontFamily), Pg(t9), t9 != null && t9.theme && t9.theme in jt ? t9.themeVariables = jt[t9.theme].getThemeVariables(
    t9.themeVariables
  ) : t9 && (t9.themeVariables = jt.default.getThemeVariables(t9.themeVariables));
  const e = typeof t9 == "object" ? qg(t9) : ka();
  dn(e.logLevel), qn();
}
function _x(t9, e, i, r) {
  jC(e, t9), UC(e, i, r, e.attr("id"));
}
var de = Object.freeze({
  render: gx,
  parse: ax,
  parseDirective: Da,
  getDiagramFromText: Pn,
  initialize: mx,
  getConfig: Ft,
  setConfig: Wg,
  getSiteConfig: ka,
  updateSiteConfig: zg,
  reset: () => {
    Xi();
  },
  globalReset: () => {
    Xi(ti);
  },
  defaultConfig: ti
});
dn(Ft().logLevel);
Xi(Ft());
var yx = (t9, e, i) => {
  k.warn(t9), Ya(t9) ? (i && i(t9.str, t9.hash), e.push({ ...t9, message: t9.str, error: t9 })) : (i && i(t9), t9 instanceof Error && e.push({
    str: t9.message,
    message: t9.message,
    hash: t9.name,
    error: t9
  }));
};
var Bl = async function(t9 = {
  querySelector: ".mermaid"
}) {
  try {
    await Cx(t9);
  } catch (e) {
    if (Ya(e) && k.error(e.str), xt.parseError && xt.parseError(e), !t9.suppressErrors)
      throw k.error("Use the suppressErrors option to suppress these errors"), e;
  }
};
var Cx = async function({ postRenderCallback: t9, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = de.getConfig();
  k.debug(`${t9 ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  k.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && (k.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), de.updateSiteConfig({ startOnLoad: r == null ? void 0 : r.startOnLoad }));
  const o = new Oi.initIdGenerator(r.deterministicIds, r.deterministicIDSeed);
  let s;
  const a = [];
  for (const l of Array.from(n)) {
    k.info("Rendering diagram: " + l.id);
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const h = `mermaid-${o.next()}`;
    s = l.innerHTML, s = zl(Oi.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const c = Oi.detectInit(s);
    c && k.debug("Detected early reinit: ", c);
    try {
      const { svg: u, bindFunctions: g } = await El(h, s, l);
      l.innerHTML = u, t9 && await t9(h), g && g(l);
    } catch (u) {
      yx(u, a, xt.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
};
var Fl = function(t9) {
  de.initialize(t9);
};
var xx = async function(t9, e, i) {
  k.warn("mermaid.init is deprecated. Please use run instead."), t9 && Fl(t9);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await Bl(r);
};
var bx = async (t9, {
  lazyLoad: e = true
} = {}) => {
  qa(...t9), e === false && await hm();
};
var Ll = function() {
  if (xt.startOnLoad) {
    const { startOnLoad: t9 } = de.getConfig();
    t9 && xt.run().catch((e) => k.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", Ll, false);
}
var Tx = function(t9) {
  xt.parseError = t9;
};
var ir = [];
var Ur = false;
var Al = async () => {
  if (!Ur) {
    for (Ur = true; ir.length > 0; ) {
      const t9 = ir.shift();
      if (t9)
        try {
          await t9();
        } catch (e) {
          k.error("Error executing queue", e);
        }
    }
    Ur = false;
  }
};
var Sx = async (t9, e) => new Promise((i, r) => {
  const n = () => new Promise((o, s) => {
    de.parse(t9, e).then(
      (a) => {
        o(a), i(a);
      },
      (a) => {
        var l;
        k.error("Error parsing", a), (l = xt.parseError) == null || l.call(xt, a), s(a), r(a);
      }
    );
  });
  ir.push(n), Al().catch(r);
});
var El = (t9, e, i) => new Promise((r, n) => {
  const o = () => new Promise((s, a) => {
    de.render(t9, e, i).then(
      (l) => {
        s(l), r(l);
      },
      (l) => {
        var h;
        k.error("Error parsing", l), (h = xt.parseError) == null || h.call(xt, l), a(l), n(l);
      }
    );
  });
  ir.push(o), Al().catch(n);
});
var xt = {
  startOnLoad: true,
  mermaidAPI: de,
  parse: Sx,
  render: El,
  init: xx,
  run: Bl,
  registerExternalDiagrams: bx,
  initialize: Fl,
  parseError: void 0,
  contentLoaded: Ll,
  setParseErrorHandler: Tx,
  detectType: gr
};

export {
  zl,
  Wl,
  Hl,
  Ul,
  k,
  us,
  lh,
  ks,
  mt,
  Ct,
  _n,
  vs,
  oi,
  Ke,
  Uc,
  ft,
  yn,
  vx,
  Fs,
  go,
  Zt,
  Jc,
  wx,
  Bx,
  Fx,
  Lx,
  Ax,
  Ex,
  Mx,
  bo,
  Tn,
  To,
  Ox,
  Ix,
  $x,
  mf,
  Cf,
  Je,
  ia,
  cd,
  Bn,
  I,
  It,
  Ue,
  si,
  F,
  A,
  Wd,
  Vd,
  nt,
  ti,
  Wg,
  Ft,
  Fa,
  Gg,
  La,
  Aa,
  Ea,
  Ma,
  Oa,
  Ia,
  $a,
  Jg,
  Da,
  Na,
  rm,
  ie,
  Ji,
  ai,
  Ha,
  ja,
  Oe,
  Qm,
  Ie,
  Qi,
  ge,
  li,
  p0,
  C0,
  w0,
  B0,
  L0,
  M0,
  I0,
  er,
  Dn,
  Oi,
  ly,
  zx,
  bl,
  My,
  Ny,
  un,
  Vy,
  zn,
  Qy,
  eC,
  Sl,
  rC,
  lC,
  IC,
  os,
  RC,
  jr,
  hx,
  de,
  xt
};
/*! Bundled license information:

mermaid/dist/mermaid-7e6c58c3.js:
  (*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE *)
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=chunk-IRNV3LL7.js.map
