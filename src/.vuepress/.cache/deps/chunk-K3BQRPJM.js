import {
  t
} from "./chunk-6DTUZTL4.js";
import {
  Jc,
  Ke,
  Zt,
  go,
  yn
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/linear-3f420504.js
function F(n, t2) {
  return n == null || t2 == null ? NaN : n < t2 ? -1 : n > t2 ? 1 : n >= t2 ? 0 : NaN;
}
function mn(n, t2) {
  return n == null || t2 == null ? NaN : t2 < n ? -1 : t2 > n ? 1 : t2 >= n ? 0 : NaN;
}
function nn(n) {
  let t2, e, r;
  n.length !== 2 ? (t2 = F, e = (u, h) => F(n(u), h), r = (u, h) => n(u) - h) : (t2 = n === F || n === mn ? n : ln, e = n, r = n);
  function i(u, h, f = 0, l = u.length) {
    if (f < l) {
      if (t2(h, h) !== 0)
        return l;
      do {
        const c = f + l >>> 1;
        e(u[c], h) < 0 ? f = c + 1 : l = c;
      } while (f < l);
    }
    return f;
  }
  function a(u, h, f = 0, l = u.length) {
    if (f < l) {
      if (t2(h, h) !== 0)
        return l;
      do {
        const c = f + l >>> 1;
        e(u[c], h) <= 0 ? f = c + 1 : l = c;
      } while (f < l);
    }
    return f;
  }
  function o(u, h, f = 0, l = u.length) {
    const c = i(u, h, f, l - 1);
    return c > f && r(u[c - 1], h) > -r(u[c], h) ? c - 1 : c;
  }
  return { left: i, center: o, right: a };
}
function ln() {
  return 0;
}
function dn(n) {
  return n === null ? NaN : +n;
}
var gn = nn(F);
var Mn = gn.right;
nn(dn).center;
var yn2 = Mn;
var T = Math.sqrt(50);
var I = Math.sqrt(10);
var q = Math.sqrt(2);
function pn(n, t2, e) {
  var r, i = -1, a, o, u;
  if (t2 = +t2, n = +n, e = +e, n === t2 && e > 0)
    return [n];
  if ((r = t2 < n) && (a = n, n = t2, t2 = a), (u = tn(n, t2, e)) === 0 || !isFinite(u))
    return [];
  if (u > 0) {
    let h = Math.round(n / u), f = Math.round(t2 / u);
    for (h * u < n && ++h, f * u > t2 && --f, o = new Array(a = f - h + 1); ++i < a; )
      o[i] = (h + i) * u;
  } else {
    u = -u;
    let h = Math.round(n * u), f = Math.round(t2 * u);
    for (h / u < n && ++h, f / u > t2 && --f, o = new Array(a = f - h + 1); ++i < a; )
      o[i] = (h + i) / u;
  }
  return r && o.reverse(), o;
}
function tn(n, t2, e) {
  var r = (t2 - n) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, i);
  return i >= 0 ? (a >= T ? 10 : a >= I ? 5 : a >= q ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= T ? 10 : a >= I ? 5 : a >= q ? 2 : 1);
}
function wn(n, t2, e) {
  var r = Math.abs(t2 - n) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
  return a >= T ? i *= 10 : a >= I ? i *= 5 : a >= q && (i *= 2), t2 < n ? -i : i;
}
function Nn(n, t2) {
  t2 || (t2 = []);
  var e = n ? Math.min(t2.length, n.length) : 0, r = t2.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i)
      r[i] = n[i] * (1 - a) + t2[i] * a;
    return r;
  };
}
function kn(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function vn(n, t2) {
  var e = t2 ? t2.length : 0, r = n ? Math.min(e, n.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o)
    i[o] = B(n[o], t2[o]);
  for (; o < e; ++o)
    a[o] = t2[o];
  return function(u) {
    for (o = 0; o < r; ++o)
      a[o] = i[o](u);
    return a;
  };
}
function xn(n, t2) {
  var e = /* @__PURE__ */ new Date();
  return n = +n, t2 = +t2, function(r) {
    return e.setTime(n * (1 - r) + t2 * r), e;
  };
}
function An(n, t2) {
  var e = {}, r = {}, i;
  (n === null || typeof n != "object") && (n = {}), (t2 === null || typeof t2 != "object") && (t2 = {});
  for (i in t2)
    i in n ? e[i] = B(n[i], t2[i]) : r[i] = t2[i];
  return function(a) {
    for (i in e)
      r[i] = e[i](a);
    return r;
  };
}
function B(n, t2) {
  var e = typeof t2, r;
  return t2 == null || e === "boolean" ? yn(t2) : (e === "number" ? Zt : e === "string" ? (r = Ke(t2)) ? (t2 = r, go) : Jc : t2 instanceof Ke ? go : t2 instanceof Date ? xn : kn(t2) ? Nn : Array.isArray(t2) ? vn : typeof t2.valueOf != "function" && typeof t2.toString != "function" || isNaN(t2) ? An : Zt)(n, t2);
}
function Sn(n, t2) {
  return n = +n, t2 = +t2, function(e) {
    return Math.round(n * (1 - e) + t2 * e);
  };
}
function bn(n) {
  return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10);
}
function R(n, t2) {
  if ((e = (n = t2 ? n.toExponential(t2 - 1) : n.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = n.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +n.slice(e + 1)
  ];
}
function A(n) {
  return n = R(Math.abs(n)), n ? n[1] : NaN;
}
function jn(n, t2) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, u = n[0], h = 0; i > 0 && u > 0 && (h + u + 1 > r && (u = Math.max(1, r - h)), a.push(e.substring(i -= u, i + u)), !((h += u + 1) > r)); )
      u = n[o = (o + 1) % n.length];
    return a.reverse().join(t2);
  };
}
function Pn(n) {
  return function(t2) {
    return t2.replace(/[0-9]/g, function(e) {
      return n[+e];
    });
  };
}
var zn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function E(n) {
  if (!(t2 = zn.exec(n)))
    throw new Error("invalid format: " + n);
  var t2;
  return new G({
    fill: t2[1],
    align: t2[2],
    sign: t2[3],
    symbol: t2[4],
    zero: t2[5],
    width: t2[6],
    comma: t2[7],
    precision: t2[8] && t2[8].slice(1),
    trim: t2[9],
    type: t2[10]
  });
}
E.prototype = G.prototype;
function G(n) {
  this.fill = n.fill === void 0 ? " " : n.fill + "", this.align = n.align === void 0 ? ">" : n.align + "", this.sign = n.sign === void 0 ? "-" : n.sign + "", this.symbol = n.symbol === void 0 ? "" : n.symbol + "", this.zero = !!n.zero, this.width = n.width === void 0 ? void 0 : +n.width, this.comma = !!n.comma, this.precision = n.precision === void 0 ? void 0 : +n.precision, this.trim = !!n.trim, this.type = n.type === void 0 ? "" : n.type + "";
}
G.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function $n(n) {
  n:
    for (var t2 = n.length, e = 1, r = -1, i; e < t2; ++e)
      switch (n[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+n[e])
            break n;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? n.slice(0, r) + n.slice(i + 1) : n;
}
var rn;
function Fn(n, t2) {
  var e = R(n, t2);
  if (!e)
    return n + "";
  var r = e[0], i = e[1], a = i - (rn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + R(n, Math.max(0, t2 + a - 1))[0];
}
function H(n, t2) {
  var e = R(n, t2);
  if (!e)
    return n + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
var J = {
  "%": (n, t2) => (n * 100).toFixed(t2),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: bn,
  e: (n, t2) => n.toExponential(t2),
  f: (n, t2) => n.toFixed(t2),
  g: (n, t2) => n.toPrecision(t2),
  o: (n) => Math.round(n).toString(8),
  p: (n, t2) => H(n * 100, t2),
  r: H,
  s: Fn,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function K(n) {
  return n;
}
var Q = Array.prototype.map;
var W = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Rn(n) {
  var t2 = n.grouping === void 0 || n.thousands === void 0 ? K : jn(Q.call(n.grouping, Number), n.thousands + ""), e = n.currency === void 0 ? "" : n.currency[0] + "", r = n.currency === void 0 ? "" : n.currency[1] + "", i = n.decimal === void 0 ? "." : n.decimal + "", a = n.numerals === void 0 ? K : Pn(Q.call(n.numerals, String)), o = n.percent === void 0 ? "%" : n.percent + "", u = n.minus === void 0 ? "−" : n.minus + "", h = n.nan === void 0 ? "NaN" : n.nan + "";
  function f(c) {
    c = E(c);
    var m = c.fill, p = c.align, M = c.sign, S = c.symbol, k = c.zero, b = c.width, L = c.comma, w = c.precision, O = c.trim, d = c.type;
    d === "n" ? (L = true, d = "g") : J[d] || (w === void 0 && (w = 12), O = true, d = "g"), (k || m === "0" && p === "=") && (k = true, m = "0", p = "=");
    var on = S === "$" ? e : S === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", un = S === "$" ? r : /[%p]/.test(d) ? o : "", V = J[d], fn = /[defgprs%]/.test(d);
    w = w === void 0 ? 6 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function X(s) {
      var N = on, g = un, v, U, j;
      if (d === "c")
        g = V(s) + g, s = "";
      else {
        s = +s;
        var P = s < 0 || 1 / s < 0;
        if (s = isNaN(s) ? h : V(Math.abs(s), w), O && (s = $n(s)), P && +s == 0 && M !== "+" && (P = false), N = (P ? M === "(" ? M : u : M === "-" || M === "(" ? "" : M) + N, g = (d === "s" ? W[8 + rn / 3] : "") + g + (P && M === "(" ? ")" : ""), fn) {
          for (v = -1, U = s.length; ++v < U; )
            if (j = s.charCodeAt(v), 48 > j || j > 57) {
              g = (j === 46 ? i + s.slice(v + 1) : s.slice(v)) + g, s = s.slice(0, v);
              break;
            }
        }
      }
      L && !k && (s = t2(s, 1 / 0));
      var z = N.length + s.length + g.length, y = z < b ? new Array(b - z + 1).join(m) : "";
      switch (L && k && (s = t2(y + s, y.length ? b - g.length : 1 / 0), y = ""), p) {
        case "<":
          s = N + s + g + y;
          break;
        case "=":
          s = N + y + s + g;
          break;
        case "^":
          s = y.slice(0, z = y.length >> 1) + N + s + g + y.slice(z);
          break;
        default:
          s = y + N + s + g;
          break;
      }
      return a(s);
    }
    return X.toString = function() {
      return c + "";
    }, X;
  }
  function l(c, m) {
    var p = f((c = E(c), c.type = "f", c)), M = Math.max(-8, Math.min(8, Math.floor(A(m) / 3))) * 3, S = Math.pow(10, -M), k = W[8 + M / 3];
    return function(b) {
      return p(S * b) + k;
    };
  }
  return {
    format: f,
    formatPrefix: l
  };
}
var $;
var en;
var an;
En({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function En(n) {
  return $ = Rn(n), en = $.format, an = $.formatPrefix, $;
}
function Ln(n) {
  return Math.max(0, -A(Math.abs(n)));
}
function Dn(n, t2) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(A(t2) / 3))) * 3 - A(Math.abs(n)));
}
function Tn(n, t2) {
  return n = Math.abs(n), t2 = Math.abs(t2) - n, Math.max(0, A(t2) - A(n)) + 1;
}
function In(n) {
  return function() {
    return n;
  };
}
function qn(n) {
  return +n;
}
var _ = [0, 1];
function x(n) {
  return n;
}
function C(n, t2) {
  return (t2 -= n = +n) ? function(e) {
    return (e - n) / t2;
  } : In(isNaN(t2) ? NaN : 0.5);
}
function Cn(n, t2) {
  var e;
  return n > t2 && (e = n, n = t2, t2 = e), function(r) {
    return Math.max(n, Math.min(t2, r));
  };
}
function Bn(n, t2, e) {
  var r = n[0], i = n[1], a = t2[0], o = t2[1];
  return i < r ? (r = C(i, r), a = e(o, a)) : (r = C(r, i), a = e(a, o)), function(u) {
    return a(r(u));
  };
}
function Gn(n, t2, e) {
  var r = Math.min(n.length, t2.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (n[r] < n[0] && (n = n.slice().reverse(), t2 = t2.slice().reverse()); ++o < r; )
    i[o] = C(n[o], n[o + 1]), a[o] = e(t2[o], t2[o + 1]);
  return function(u) {
    var h = yn2(n, u, 1, r) - 1;
    return a[h](i[h](u));
  };
}
function On(n, t2) {
  return t2.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function Vn() {
  var n = _, t2 = _, e = B, r, i, a, o = x, u, h, f;
  function l() {
    var m = Math.min(n.length, t2.length);
    return o !== x && (o = Cn(n[0], n[m - 1])), u = m > 2 ? Gn : Bn, h = f = null, c;
  }
  function c(m) {
    return m == null || isNaN(m = +m) ? a : (h || (h = u(n.map(r), t2, e)))(r(o(m)));
  }
  return c.invert = function(m) {
    return o(i((f || (f = u(t2, n.map(r), Zt)))(m)));
  }, c.domain = function(m) {
    return arguments.length ? (n = Array.from(m, qn), l()) : n.slice();
  }, c.range = function(m) {
    return arguments.length ? (t2 = Array.from(m), l()) : t2.slice();
  }, c.rangeRound = function(m) {
    return t2 = Array.from(m), e = Sn, l();
  }, c.clamp = function(m) {
    return arguments.length ? (o = m ? true : x, l()) : o !== x;
  }, c.interpolate = function(m) {
    return arguments.length ? (e = m, l()) : e;
  }, c.unknown = function(m) {
    return arguments.length ? (a = m, c) : a;
  }, function(m, p) {
    return r = m, i = p, l();
  };
}
function Xn() {
  return Vn()(x, x);
}
function Un(n, t2, e, r) {
  var i = wn(n, t2, e), a;
  switch (r = E(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(n), Math.abs(t2));
      return r.precision == null && !isNaN(a = Dn(i, o)) && (r.precision = a), an(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Tn(i, Math.max(Math.abs(n), Math.abs(t2)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Ln(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return en(r);
}
function Yn(n) {
  var t2 = n.domain;
  return n.ticks = function(e) {
    var r = t2();
    return pn(r[0], r[r.length - 1], e ?? 10);
  }, n.tickFormat = function(e, r) {
    var i = t2();
    return Un(i[0], i[i.length - 1], e ?? 10, r);
  }, n.nice = function(e) {
    e == null && (e = 10);
    var r = t2(), i = 0, a = r.length - 1, o = r[i], u = r[a], h, f, l = 10;
    for (u < o && (f = o, o = u, u = f, f = i, i = a, a = f); l-- > 0; ) {
      if (f = tn(o, u, e), f === h)
        return r[i] = o, r[a] = u, t2(r);
      if (f > 0)
        o = Math.floor(o / f) * f, u = Math.ceil(u / f) * f;
      else if (f < 0)
        o = Math.ceil(o * f) / f, u = Math.floor(u * f) / f;
      else
        break;
      h = f;
    }
    return n;
  }, n;
}
function Zn() {
  var n = Xn();
  return n.copy = function() {
    return On(n, Zn());
  }, t.apply(n, arguments), Yn(n);
}

export {
  nn,
  wn,
  On,
  Xn,
  Zn
};
//# sourceMappingURL=chunk-K3BQRPJM.js.map
