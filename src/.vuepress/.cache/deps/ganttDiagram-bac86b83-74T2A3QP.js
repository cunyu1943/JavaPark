import {
  On,
  Xn,
  Zn,
  nn,
  wn
} from "./chunk-K3BQRPJM.js";
import {
  t
} from "./chunk-6DTUZTL4.js";
import {
  $a,
  Aa,
  Bn,
  Ct,
  Ea,
  Fa,
  Fs,
  Ft,
  Hl,
  Ia,
  La,
  Ma,
  Oa,
  Oi,
  Uc,
  Ul,
  Wl,
  _n,
  de,
  ft,
  k,
  oi,
  us,
  vs,
  vx
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/ganttDiagram-bac86b83.js
function nr(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function rr(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function ir(t2) {
  return t2;
}
var Rt = 1;
var ne = 2;
var de2 = 3;
var Pt = 4;
var Ie = 1e-6;
function ar(t2) {
  return "translate(" + t2 + ",0)";
}
function sr(t2) {
  return "translate(0," + t2 + ")";
}
function or(t2) {
  return (e) => +t2(e);
}
function cr(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (n) => +t2(n) + e;
}
function ur() {
  return !this.__axis;
}
function Ke(t2, e) {
  var n = [], r = null, i = null, s = 6, o = 6, g = 3, _ = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, y = t2 === Rt || t2 === Pt ? -1 : 1, C = t2 === Pt || t2 === ne ? "x" : "y", F = t2 === Rt || t2 === de2 ? ar : sr;
  function w(x) {
    var q = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), d = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : ir), L = Math.max(s, 0) + g, N = e.range(), z = +N[0] + _, B = +N[N.length - 1] + _, Z = (e.bandwidth ? cr : or)(e.copy(), _), j = x.selection ? x.selection() : x, b = j.selectAll(".domain").data([null]), I = j.selectAll(".tick").data(q, e).order(), T = I.exit(), S = I.enter().append("g").attr("class", "tick"), M = I.select("line"), D = I.select("text");
    b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), I = I.merge(S), M = M.merge(S.append("line").attr("stroke", "currentColor").attr(C + "2", y * s)), D = D.merge(S.append("text").attr("fill", "currentColor").attr(C, y * L).attr("dy", t2 === Rt ? "0em" : t2 === de2 ? "0.71em" : "0.32em")), x !== j && (b = b.transition(x), I = I.transition(x), M = M.transition(x), D = D.transition(x), T = T.transition(x).attr("opacity", Ie).attr("transform", function(p) {
      return isFinite(p = Z(p)) ? F(p + _) : this.getAttribute("transform");
    }), S.attr("opacity", Ie).attr("transform", function(p) {
      var W = this.parentNode.__axis;
      return F((W && isFinite(W = W(p)) ? W : Z(p)) + _);
    })), T.remove(), b.attr("d", t2 === Pt || t2 === ne ? o ? "M" + y * o + "," + z + "H" + _ + "V" + B + "H" + y * o : "M" + _ + "," + z + "V" + B : o ? "M" + z + "," + y * o + "V" + _ + "H" + B + "V" + y * o : "M" + z + "," + _ + "H" + B), I.attr("opacity", 1).attr("transform", function(p) {
      return F(Z(p) + _);
    }), M.attr(C + "2", y * s), D.attr(C, y * L).text(d), j.filter(ur).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === ne ? "start" : t2 === Pt ? "end" : "middle"), j.each(function() {
      this.__axis = Z;
    });
  }
  return w.scale = function(x) {
    return arguments.length ? (e = x, w) : e;
  }, w.ticks = function() {
    return n = Array.from(arguments), w;
  }, w.tickArguments = function(x) {
    return arguments.length ? (n = x == null ? [] : Array.from(x), w) : n.slice();
  }, w.tickValues = function(x) {
    return arguments.length ? (r = x == null ? null : Array.from(x), w) : r && r.slice();
  }, w.tickFormat = function(x) {
    return arguments.length ? (i = x, w) : i;
  }, w.tickSize = function(x) {
    return arguments.length ? (s = o = +x, w) : s;
  }, w.tickSizeInner = function(x) {
    return arguments.length ? (s = +x, w) : s;
  }, w.tickSizeOuter = function(x) {
    return arguments.length ? (o = +x, w) : o;
  }, w.tickPadding = function(x) {
    return arguments.length ? (g = +x, w) : g;
  }, w.offset = function(x) {
    return arguments.length ? (_ = +x, w) : _;
  }, w;
}
function lr(t2) {
  return Ke(Rt, t2);
}
function fr(t2) {
  return Ke(de2, t2);
}
var hr = Math.PI / 180;
var dr = 180 / Math.PI;
var qt = 18;
var tn = 0.96422;
var en = 1;
var nn2 = 0.82521;
var rn = 4 / 29;
var wt = 6 / 29;
var an = 3 * wt * wt;
var mr = wt * wt * wt;
function sn(t2) {
  if (t2 instanceof at)
    return new at(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof ft2)
    return on(t2);
  t2 instanceof ft || (t2 = Uc(t2));
  var e = se(t2.r), n = se(t2.g), r = se(t2.b), i = re((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / en), s, o;
  return e === n && n === r ? s = o = i : (s = re((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / tn), o = re((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / nn2)), new at(116 * i - 16, 500 * (s - i), 200 * (i - o), t2.opacity);
}
function gr(t2, e, n, r) {
  return arguments.length === 1 ? sn(t2) : new at(t2, e, n, r ?? 1);
}
function at(t2, e, n, r) {
  this.l = +t2, this.a = +e, this.b = +n, this.opacity = +r;
}
_n(at, gr, vs(oi, {
  brighter(t2) {
    return new at(this.l + qt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new at(this.l - qt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, n = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = tn * ie(e), t2 = en * ie(t2), n = nn2 * ie(n), new ft(
      ae(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * n),
      ae(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * n),
      ae(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * n),
      this.opacity
    );
  }
}));
function re(t2) {
  return t2 > mr ? Math.pow(t2, 1 / 3) : t2 / an + rn;
}
function ie(t2) {
  return t2 > wt ? t2 * t2 * t2 : an * (t2 - rn);
}
function ae(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function se(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function yr(t2) {
  if (t2 instanceof ft2)
    return new ft2(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof at || (t2 = sn(t2)), t2.a === 0 && t2.b === 0)
    return new ft2(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * dr;
  return new ft2(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function me(t2, e, n, r) {
  return arguments.length === 1 ? yr(t2) : new ft2(t2, e, n, r ?? 1);
}
function ft2(t2, e, n, r) {
  this.h = +t2, this.c = +e, this.l = +n, this.opacity = +r;
}
function on(t2) {
  if (isNaN(t2.h))
    return new at(t2.l, 0, 0, t2.opacity);
  var e = t2.h * hr;
  return new at(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
_n(ft2, me, vs(oi, {
  brighter(t2) {
    return new ft2(this.h, this.c, this.l + qt * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new ft2(this.h, this.c, this.l - qt * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return on(this).rgb();
  }
}));
function kr(t2) {
  return function(e, n) {
    var r = t2((e = me(e)).h, (n = me(n)).h), i = Fs(e.c, n.c), s = Fs(e.l, n.l), o = Fs(e.opacity, n.opacity);
    return function(g) {
      return e.h = r(g), e.c = i(g), e.l = s(g), e.opacity = o(g), e + "";
    };
  };
}
var pr = kr(vx);
function vr(t2, e) {
  t2 = t2.slice();
  var n = 0, r = t2.length - 1, i = t2[n], s = t2[r], o;
  return s < i && (o = n, n = r, r = o, o = i, i = s, s = o), t2[n] = e.floor(i), t2[r] = e.ceil(s), t2;
}
var oe = /* @__PURE__ */ new Date();
var ce = /* @__PURE__ */ new Date();
function et(t2, e, n, r) {
  function i(s) {
    return t2(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return i.floor = function(s) {
    return t2(s = /* @__PURE__ */ new Date(+s)), s;
  }, i.ceil = function(s) {
    return t2(s = new Date(s - 1)), e(s, 1), t2(s), s;
  }, i.round = function(s) {
    var o = i(s), g = i.ceil(s);
    return s - o < g - s ? o : g;
  }, i.offset = function(s, o) {
    return e(s = /* @__PURE__ */ new Date(+s), o == null ? 1 : Math.floor(o)), s;
  }, i.range = function(s, o, g) {
    var _ = [], y;
    if (s = i.ceil(s), g = g == null ? 1 : Math.floor(g), !(s < o) || !(g > 0))
      return _;
    do
      _.push(y = /* @__PURE__ */ new Date(+s)), e(s, g), t2(s);
    while (y < s && s < o);
    return _;
  }, i.filter = function(s) {
    return et(function(o) {
      if (o >= o)
        for (; t2(o), !s(o); )
          o.setTime(o - 1);
    }, function(o, g) {
      if (o >= o)
        if (g < 0)
          for (; ++g <= 0; )
            for (; e(o, -1), !s(o); )
              ;
        else
          for (; --g >= 0; )
            for (; e(o, 1), !s(o); )
              ;
    });
  }, n && (i.count = function(s, o) {
    return oe.setTime(+s), ce.setTime(+o), t2(oe), t2(ce), Math.floor(n(oe, ce));
  }, i.every = function(s) {
    return s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? i.filter(r ? function(o) {
      return r(o) % s === 0;
    } : function(o) {
      return i.count(0, o) % s === 0;
    }) : i;
  }), i;
}
var Xt = et(function() {
}, function(t2, e) {
  t2.setTime(+t2 + e);
}, function(t2, e) {
  return e - t2;
});
Xt.every = function(t2) {
  return t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? et(function(e) {
    e.setTime(Math.floor(e / t2) * t2);
  }, function(e, n) {
    e.setTime(+e + n * t2);
  }, function(e, n) {
    return (n - e) / t2;
  }) : Xt;
};
var Tr = Xt;
Xt.range;
var ht = 1e3;
var rt = ht * 60;
var dt = rt * 60;
var mt = dt * 24;
var be = mt * 7;
var We = mt * 30;
var ue = mt * 365;
var cn = et(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds());
}, function(t2, e) {
  t2.setTime(+t2 + e * ht);
}, function(t2, e) {
  return (e - t2) / ht;
}, function(t2) {
  return t2.getUTCSeconds();
});
var Lt = cn;
cn.range;
var un = et(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * ht);
}, function(t2, e) {
  t2.setTime(+t2 + e * rt);
}, function(t2, e) {
  return (e - t2) / rt;
}, function(t2) {
  return t2.getMinutes();
});
var Gt = un;
un.range;
var ln = et(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * ht - t2.getMinutes() * rt);
}, function(t2, e) {
  t2.setTime(+t2 + e * dt);
}, function(t2, e) {
  return (e - t2) / dt;
}, function(t2) {
  return t2.getHours();
});
var jt = ln;
ln.range;
var fn = et(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * rt) / mt,
  (t2) => t2.getDate() - 1
);
var Ct2 = fn;
fn.range;
function kt(t2) {
  return et(function(e) {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setDate(e.getDate() + n * 7);
  }, function(e, n) {
    return (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / be;
  });
}
var It = kt(0);
var Et = kt(1);
var hn = kt(2);
var dn = kt(3);
var gt = kt(4);
var mn = kt(5);
var gn = kt(6);
It.range;
Et.range;
hn.range;
dn.range;
gt.range;
mn.range;
gn.range;
var yn = et(function(t2) {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setMonth(t2.getMonth() + e);
}, function(t2, e) {
  return e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12;
}, function(t2) {
  return t2.getMonth();
});
var Qt = yn;
yn.range;
var xe = et(function(t2) {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setFullYear(t2.getFullYear() + e);
}, function(t2, e) {
  return e.getFullYear() - t2.getFullYear();
}, function(t2) {
  return t2.getFullYear();
});
xe.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et(function(e) {
    e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setFullYear(e.getFullYear() + n * t2);
  });
};
var yt = xe;
xe.range;
var kn = et(function(t2) {
  t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCDate(t2.getUTCDate() + e);
}, function(t2, e) {
  return (e - t2) / mt;
}, function(t2) {
  return t2.getUTCDate() - 1;
});
var pn = kn;
kn.range;
function pt(t2) {
  return et(function(e) {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, function(e, n) {
    return (n - e) / be;
  });
}
var vn = pt(0);
var Jt = pt(1);
var br = pt(2);
var xr = pt(3);
var Mt = pt(4);
var wr = pt(5);
var Dr = pt(6);
vn.range;
Jt.range;
br.range;
xr.range;
Mt.range;
wr.range;
Dr.range;
var we = et(function(t2) {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, function(t2, e) {
  return e.getUTCFullYear() - t2.getUTCFullYear();
}, function(t2) {
  return t2.getUTCFullYear();
});
we.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et(function(e) {
    e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setUTCFullYear(e.getUTCFullYear() + n * t2);
  });
};
var At = we;
we.range;
function Cr(t2, e, n, r, i, s) {
  const o = [
    [Lt, 1, ht],
    [Lt, 5, 5 * ht],
    [Lt, 15, 15 * ht],
    [Lt, 30, 30 * ht],
    [s, 1, rt],
    [s, 5, 5 * rt],
    [s, 15, 15 * rt],
    [s, 30, 30 * rt],
    [i, 1, dt],
    [i, 3, 3 * dt],
    [i, 6, 6 * dt],
    [i, 12, 12 * dt],
    [r, 1, mt],
    [r, 2, 2 * mt],
    [n, 1, be],
    [e, 1, We],
    [e, 3, 3 * We],
    [t2, 1, ue]
  ];
  function g(y, C, F) {
    const w = C < y;
    w && ([y, C] = [C, y]);
    const x = F && typeof F.range == "function" ? F : _(y, C, F), q = x ? x.range(y, +C + 1) : [];
    return w ? q.reverse() : q;
  }
  function _(y, C, F) {
    const w = Math.abs(C - y) / F, x = nn(([, , L]) => L).right(o, w);
    if (x === o.length)
      return t2.every(wn(y / ue, C / ue, F));
    if (x === 0)
      return Tr.every(Math.max(wn(y, C, F), 1));
    const [q, d] = o[w / o[x - 1][2] < o[x][2] / w ? x - 1 : x];
    return q.every(d);
  }
  return [g, _];
}
var [Mr, _r] = Cr(yt, Qt, It, Ct2, jt, Gt);
function le(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function fe(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function Yt(t2, e, n) {
  return { y: t2, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Sr(t2) {
  var e = t2.dateTime, n = t2.date, r = t2.time, i = t2.periods, s = t2.days, o = t2.shortDays, g = t2.months, _ = t2.shortMonths, y = Ft2(i), C = Ut(i), F = Ft2(s), w = Ut(s), x = Ft2(o), q = Ut(o), d = Ft2(g), L = Ut(g), N = Ft2(_), z = Ut(_), B = {
    a: k2,
    A: v,
    b: m,
    B: u,
    c: null,
    d: Pe,
    e: Pe,
    f: Jr,
    g: oi2,
    G: ui,
    H: Gr,
    I: jr,
    j: Qr,
    L: Tn,
    m: $r,
    M: Kr,
    p: a,
    q: R,
    Q: Ze,
    s: qe,
    S: ti,
    u: ei,
    U: ni,
    V: ri,
    w: ii,
    W: ai,
    x: null,
    X: null,
    y: si,
    Y: ci,
    Z: li,
    "%": Be
  }, Z = {
    a: c,
    A: O,
    b: Q,
    B: X,
    c: null,
    d: Re,
    e: Re,
    f: mi,
    g: Di,
    G: Mi,
    H: fi,
    I: hi,
    j: di,
    L: xn,
    m: gi,
    M: yi,
    p: st,
    q: ot,
    Q: Ze,
    s: qe,
    S: ki,
    u: pi,
    U: vi,
    V: Ti,
    w: bi,
    W: xi,
    x: null,
    X: null,
    y: wi,
    Y: Ci,
    Z: _i,
    "%": Be
  }, j = {
    a: M,
    A: D,
    b: p,
    B: W,
    c: E,
    d: Ve,
    e: Ve,
    f: Br,
    g: Ne,
    G: ze,
    H: He,
    I: He,
    j: Vr,
    L: Rr,
    m: Nr,
    M: Hr,
    p: S,
    q: zr,
    Q: qr,
    s: Xr,
    S: Pr,
    u: Er,
    U: Ar,
    V: Ir,
    w: Lr,
    W: Wr,
    x: U,
    X: h,
    y: Ne,
    Y: ze,
    Z: Or,
    "%": Zr
  };
  B.x = b(n, B), B.X = b(r, B), B.c = b(e, B), Z.x = b(n, Z), Z.X = b(r, Z), Z.c = b(e, Z);
  function b(f, Y) {
    return function(A) {
      var l = [], J = -1, V = 0, H = f.length, G, $, vt;
      for (A instanceof Date || (A = /* @__PURE__ */ new Date(+A)); ++J < H; )
        f.charCodeAt(J) === 37 && (l.push(f.slice(V, J)), ($ = Oe[G = f.charAt(++J)]) != null ? G = f.charAt(++J) : $ = G === "e" ? " " : "0", (vt = Y[G]) && (G = vt(A, $)), l.push(G), V = J + 1);
      return l.push(f.slice(V, J)), l.join("");
    };
  }
  function I(f, Y) {
    return function(A) {
      var l = Yt(1900, void 0, 1), J = T(l, f, A += "", 0), V, H;
      if (J != A.length)
        return null;
      if ("Q" in l)
        return new Date(l.Q);
      if ("s" in l)
        return new Date(l.s * 1e3 + ("L" in l ? l.L : 0));
      if (Y && !("Z" in l) && (l.Z = 0), "p" in l && (l.H = l.H % 12 + l.p * 12), l.m === void 0 && (l.m = "q" in l ? l.q : 0), "V" in l) {
        if (l.V < 1 || l.V > 53)
          return null;
        "w" in l || (l.w = 1), "Z" in l ? (V = fe(Yt(l.y, 0, 1)), H = V.getUTCDay(), V = H > 4 || H === 0 ? Jt.ceil(V) : Jt(V), V = pn.offset(V, (l.V - 1) * 7), l.y = V.getUTCFullYear(), l.m = V.getUTCMonth(), l.d = V.getUTCDate() + (l.w + 6) % 7) : (V = le(Yt(l.y, 0, 1)), H = V.getDay(), V = H > 4 || H === 0 ? Et.ceil(V) : Et(V), V = Ct2.offset(V, (l.V - 1) * 7), l.y = V.getFullYear(), l.m = V.getMonth(), l.d = V.getDate() + (l.w + 6) % 7);
      } else
        ("W" in l || "U" in l) && ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0), H = "Z" in l ? fe(Yt(l.y, 0, 1)).getUTCDay() : le(Yt(l.y, 0, 1)).getDay(), l.m = 0, l.d = "W" in l ? (l.w + 6) % 7 + l.W * 7 - (H + 5) % 7 : l.w + l.U * 7 - (H + 6) % 7);
      return "Z" in l ? (l.H += l.Z / 100 | 0, l.M += l.Z % 100, fe(l)) : le(l);
    };
  }
  function T(f, Y, A, l) {
    for (var J = 0, V = Y.length, H = A.length, G, $; J < V; ) {
      if (l >= H)
        return -1;
      if (G = Y.charCodeAt(J++), G === 37) {
        if (G = Y.charAt(J++), $ = j[G in Oe ? Y.charAt(J++) : G], !$ || (l = $(f, A, l)) < 0)
          return -1;
      } else if (G != A.charCodeAt(l++))
        return -1;
    }
    return l;
  }
  function S(f, Y, A) {
    var l = y.exec(Y.slice(A));
    return l ? (f.p = C.get(l[0].toLowerCase()), A + l[0].length) : -1;
  }
  function M(f, Y, A) {
    var l = x.exec(Y.slice(A));
    return l ? (f.w = q.get(l[0].toLowerCase()), A + l[0].length) : -1;
  }
  function D(f, Y, A) {
    var l = F.exec(Y.slice(A));
    return l ? (f.w = w.get(l[0].toLowerCase()), A + l[0].length) : -1;
  }
  function p(f, Y, A) {
    var l = N.exec(Y.slice(A));
    return l ? (f.m = z.get(l[0].toLowerCase()), A + l[0].length) : -1;
  }
  function W(f, Y, A) {
    var l = d.exec(Y.slice(A));
    return l ? (f.m = L.get(l[0].toLowerCase()), A + l[0].length) : -1;
  }
  function E(f, Y, A) {
    return T(f, e, Y, A);
  }
  function U(f, Y, A) {
    return T(f, n, Y, A);
  }
  function h(f, Y, A) {
    return T(f, r, Y, A);
  }
  function k2(f) {
    return o[f.getDay()];
  }
  function v(f) {
    return s[f.getDay()];
  }
  function m(f) {
    return _[f.getMonth()];
  }
  function u(f) {
    return g[f.getMonth()];
  }
  function a(f) {
    return i[+(f.getHours() >= 12)];
  }
  function R(f) {
    return 1 + ~~(f.getMonth() / 3);
  }
  function c(f) {
    return o[f.getUTCDay()];
  }
  function O(f) {
    return s[f.getUTCDay()];
  }
  function Q(f) {
    return _[f.getUTCMonth()];
  }
  function X(f) {
    return g[f.getUTCMonth()];
  }
  function st(f) {
    return i[+(f.getUTCHours() >= 12)];
  }
  function ot(f) {
    return 1 + ~~(f.getUTCMonth() / 3);
  }
  return {
    format: function(f) {
      var Y = b(f += "", B);
      return Y.toString = function() {
        return f;
      }, Y;
    },
    parse: function(f) {
      var Y = I(f += "", false);
      return Y.toString = function() {
        return f;
      }, Y;
    },
    utcFormat: function(f) {
      var Y = b(f += "", Z);
      return Y.toString = function() {
        return f;
      }, Y;
    },
    utcParse: function(f) {
      var Y = I(f += "", true);
      return Y.toString = function() {
        return f;
      }, Y;
    }
  };
}
var Oe = { "-": "", _: " ", 0: "0" };
var tt = /^\s*\d+/;
var Yr = /^%/;
var Fr = /[\\^$*+?|[\]().{}]/g;
function P(t2, e, n) {
  var r = t2 < 0 ? "-" : "", i = (r ? -t2 : t2) + "", s = i.length;
  return r + (s < n ? new Array(n - s + 1).join(e) + i : i);
}
function Ur(t2) {
  return t2.replace(Fr, "\\$&");
}
function Ft2(t2) {
  return new RegExp("^(?:" + t2.map(Ur).join("|") + ")", "i");
}
function Ut(t2) {
  return new Map(t2.map((e, n) => [e.toLowerCase(), n]));
}
function Lr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.w = +r[0], n + r[0].length) : -1;
}
function Er(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.u = +r[0], n + r[0].length) : -1;
}
function Ar(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.U = +r[0], n + r[0].length) : -1;
}
function Ir(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.V = +r[0], n + r[0].length) : -1;
}
function Wr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.W = +r[0], n + r[0].length) : -1;
}
function ze(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 4));
  return r ? (t2.y = +r[0], n + r[0].length) : -1;
}
function Ne(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Or(t2, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t2.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function zr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Nr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.m = r[0] - 1, n + r[0].length) : -1;
}
function Ve(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.d = +r[0], n + r[0].length) : -1;
}
function Vr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 3));
  return r ? (t2.m = 0, t2.d = +r[0], n + r[0].length) : -1;
}
function He(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.H = +r[0], n + r[0].length) : -1;
}
function Hr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.M = +r[0], n + r[0].length) : -1;
}
function Pr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.S = +r[0], n + r[0].length) : -1;
}
function Rr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 3));
  return r ? (t2.L = +r[0], n + r[0].length) : -1;
}
function Br(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 6));
  return r ? (t2.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Zr(t2, e, n) {
  var r = Yr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function qr(t2, e, n) {
  var r = tt.exec(e.slice(n));
  return r ? (t2.Q = +r[0], n + r[0].length) : -1;
}
function Xr(t2, e, n) {
  var r = tt.exec(e.slice(n));
  return r ? (t2.s = +r[0], n + r[0].length) : -1;
}
function Pe(t2, e) {
  return P(t2.getDate(), e, 2);
}
function Gr(t2, e) {
  return P(t2.getHours(), e, 2);
}
function jr(t2, e) {
  return P(t2.getHours() % 12 || 12, e, 2);
}
function Qr(t2, e) {
  return P(1 + Ct2.count(yt(t2), t2), e, 3);
}
function Tn(t2, e) {
  return P(t2.getMilliseconds(), e, 3);
}
function Jr(t2, e) {
  return Tn(t2, e) + "000";
}
function $r(t2, e) {
  return P(t2.getMonth() + 1, e, 2);
}
function Kr(t2, e) {
  return P(t2.getMinutes(), e, 2);
}
function ti(t2, e) {
  return P(t2.getSeconds(), e, 2);
}
function ei(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function ni(t2, e) {
  return P(It.count(yt(t2) - 1, t2), e, 2);
}
function bn(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? gt(t2) : gt.ceil(t2);
}
function ri(t2, e) {
  return t2 = bn(t2), P(gt.count(yt(t2), t2) + (yt(t2).getDay() === 4), e, 2);
}
function ii(t2) {
  return t2.getDay();
}
function ai(t2, e) {
  return P(Et.count(yt(t2) - 1, t2), e, 2);
}
function si(t2, e) {
  return P(t2.getFullYear() % 100, e, 2);
}
function oi2(t2, e) {
  return t2 = bn(t2), P(t2.getFullYear() % 100, e, 2);
}
function ci(t2, e) {
  return P(t2.getFullYear() % 1e4, e, 4);
}
function ui(t2, e) {
  var n = t2.getDay();
  return t2 = n >= 4 || n === 0 ? gt(t2) : gt.ceil(t2), P(t2.getFullYear() % 1e4, e, 4);
}
function li(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + P(e / 60 | 0, "0", 2) + P(e % 60, "0", 2);
}
function Re(t2, e) {
  return P(t2.getUTCDate(), e, 2);
}
function fi(t2, e) {
  return P(t2.getUTCHours(), e, 2);
}
function hi(t2, e) {
  return P(t2.getUTCHours() % 12 || 12, e, 2);
}
function di(t2, e) {
  return P(1 + pn.count(At(t2), t2), e, 3);
}
function xn(t2, e) {
  return P(t2.getUTCMilliseconds(), e, 3);
}
function mi(t2, e) {
  return xn(t2, e) + "000";
}
function gi(t2, e) {
  return P(t2.getUTCMonth() + 1, e, 2);
}
function yi(t2, e) {
  return P(t2.getUTCMinutes(), e, 2);
}
function ki(t2, e) {
  return P(t2.getUTCSeconds(), e, 2);
}
function pi(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function vi(t2, e) {
  return P(vn.count(At(t2) - 1, t2), e, 2);
}
function wn2(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Mt(t2) : Mt.ceil(t2);
}
function Ti(t2, e) {
  return t2 = wn2(t2), P(Mt.count(At(t2), t2) + (At(t2).getUTCDay() === 4), e, 2);
}
function bi(t2) {
  return t2.getUTCDay();
}
function xi(t2, e) {
  return P(Jt.count(At(t2) - 1, t2), e, 2);
}
function wi(t2, e) {
  return P(t2.getUTCFullYear() % 100, e, 2);
}
function Di(t2, e) {
  return t2 = wn2(t2), P(t2.getUTCFullYear() % 100, e, 2);
}
function Ci(t2, e) {
  return P(t2.getUTCFullYear() % 1e4, e, 4);
}
function Mi(t2, e) {
  var n = t2.getUTCDay();
  return t2 = n >= 4 || n === 0 ? Mt(t2) : Mt.ceil(t2), P(t2.getUTCFullYear() % 1e4, e, 4);
}
function _i() {
  return "+0000";
}
function Be() {
  return "%";
}
function Ze(t2) {
  return +t2;
}
function qe(t2) {
  return Math.floor(+t2 / 1e3);
}
var bt;
var $t;
Si({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Si(t2) {
  return bt = Sr(t2), $t = bt.format, bt.parse, bt.utcFormat, bt.utcParse, bt;
}
function Yi(t2) {
  return new Date(t2);
}
function Fi(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function Dn(t2, e, n, r, i, s, o, g, _, y) {
  var C = Xn(), F = C.invert, w = C.domain, x = y(".%L"), q = y(":%S"), d = y("%I:%M"), L = y("%I %p"), N = y("%a %d"), z = y("%b %d"), B = y("%B"), Z = y("%Y");
  function j(b) {
    return (_(b) < b ? x : g(b) < b ? q : o(b) < b ? d : s(b) < b ? L : r(b) < b ? i(b) < b ? N : z : n(b) < b ? B : Z)(b);
  }
  return C.invert = function(b) {
    return new Date(F(b));
  }, C.domain = function(b) {
    return arguments.length ? w(Array.from(b, Fi)) : w().map(Yi);
  }, C.ticks = function(b) {
    var I = w();
    return t2(I[0], I[I.length - 1], b ?? 10);
  }, C.tickFormat = function(b, I) {
    return I == null ? j : y(I);
  }, C.nice = function(b) {
    var I = w();
    return (!b || typeof b.range != "function") && (b = e(I[0], I[I.length - 1], b ?? 10)), b ? w(vr(I, b)) : C;
  }, C.copy = function() {
    return On(C, Dn(t2, e, n, r, i, s, o, g, _, y));
  }, C;
}
function Ui() {
  return t.apply(Dn(Mr, _r, yt, Qt, It, Ct2, jt, Gt, Lt, $t).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var ge = function() {
  var t2 = function(U, h, k2, v) {
    for (k2 = k2 || {}, v = U.length; v--; k2[U[v]] = h)
      ;
    return k2;
  }, e = [1, 3], n = [1, 5], r = [7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 36, 43, 48], i = [1, 32], s = [1, 33], o = [1, 34], g = [1, 35], _ = [1, 36], y = [1, 37], C = [1, 38], F = [1, 15], w = [1, 16], x = [1, 17], q = [1, 18], d = [1, 19], L = [1, 20], N = [1, 21], z = [1, 22], B = [1, 24], Z = [1, 25], j = [1, 26], b = [1, 27], I = [1, 28], T = [1, 30], S = [1, 39], M = [1, 42], D = [5, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 36, 43, 48], p = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, gantt: 5, document: 6, EOF: 7, line: 8, SPACE: 9, statement: 10, NL: 11, weekday: 12, weekday_monday: 13, weekday_tuesday: 14, weekday_wednesday: 15, weekday_thursday: 16, weekday_friday: 17, weekday_saturday: 18, weekday_sunday: 19, dateFormat: 20, inclusiveEndDates: 21, topAxis: 22, axisFormat: 23, tickInterval: 24, excludes: 25, includes: 26, todayMarker: 27, title: 28, acc_title: 29, acc_title_value: 30, acc_descr: 31, acc_descr_value: 32, acc_descr_multiline_value: 33, section: 34, clickStatement: 35, taskTxt: 36, taskData: 37, openDirective: 38, typeDirective: 39, closeDirective: 40, ":": 41, argDirective: 42, click: 43, callbackname: 44, callbackargs: 45, href: 46, clickStatementDebug: 47, open_directive: 48, type_directive: 49, arg_directive: 50, close_directive: 51, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "gantt", 7: "EOF", 9: "SPACE", 11: "NL", 13: "weekday_monday", 14: "weekday_tuesday", 15: "weekday_wednesday", 16: "weekday_thursday", 17: "weekday_friday", 18: "weekday_saturday", 19: "weekday_sunday", 20: "dateFormat", 21: "inclusiveEndDates", 22: "topAxis", 23: "axisFormat", 24: "tickInterval", 25: "excludes", 26: "includes", 27: "todayMarker", 28: "title", 29: "acc_title", 30: "acc_title_value", 31: "acc_descr", 32: "acc_descr_value", 33: "acc_descr_multiline_value", 34: "section", 36: "taskTxt", 37: "taskData", 41: ":", 43: "click", 44: "callbackname", 45: "callbackargs", 46: "href", 48: "open_directive", 49: "type_directive", 50: "arg_directive", 51: "close_directive" },
    productions_: [0, [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [8, 1], [8, 1], [8, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 2], [10, 1], [4, 4], [4, 6], [35, 2], [35, 3], [35, 3], [35, 4], [35, 3], [35, 4], [35, 2], [47, 2], [47, 3], [47, 3], [47, 4], [47, 3], [47, 4], [47, 2], [38, 1], [39, 1], [42, 1], [40, 1]],
    performAction: function(h, k2, v, m, u, a, R) {
      var c = a.length - 1;
      switch (u) {
        case 2:
          return a[c - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          a[c - 1].push(a[c]), this.$ = a[c - 1];
          break;
        case 5:
        case 6:
          this.$ = a[c];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 9:
          m.setWeekday("monday");
          break;
        case 10:
          m.setWeekday("tuesday");
          break;
        case 11:
          m.setWeekday("wednesday");
          break;
        case 12:
          m.setWeekday("thursday");
          break;
        case 13:
          m.setWeekday("friday");
          break;
        case 14:
          m.setWeekday("saturday");
          break;
        case 15:
          m.setWeekday("sunday");
          break;
        case 16:
          m.setDateFormat(a[c].substr(11)), this.$ = a[c].substr(11);
          break;
        case 17:
          m.enableInclusiveEndDates(), this.$ = a[c].substr(18);
          break;
        case 18:
          m.TopAxis(), this.$ = a[c].substr(8);
          break;
        case 19:
          m.setAxisFormat(a[c].substr(11)), this.$ = a[c].substr(11);
          break;
        case 20:
          m.setTickInterval(a[c].substr(13)), this.$ = a[c].substr(13);
          break;
        case 21:
          m.setExcludes(a[c].substr(9)), this.$ = a[c].substr(9);
          break;
        case 22:
          m.setIncludes(a[c].substr(9)), this.$ = a[c].substr(9);
          break;
        case 23:
          m.setTodayMarker(a[c].substr(12)), this.$ = a[c].substr(12);
          break;
        case 25:
          m.setDiagramTitle(a[c].substr(6)), this.$ = a[c].substr(6);
          break;
        case 26:
          this.$ = a[c].trim(), m.setAccTitle(this.$);
          break;
        case 27:
        case 28:
          this.$ = a[c].trim(), m.setAccDescription(this.$);
          break;
        case 29:
          m.addSection(a[c].substr(8)), this.$ = a[c].substr(8);
          break;
        case 31:
          m.addTask(a[c - 1], a[c]), this.$ = "task";
          break;
        case 35:
          this.$ = a[c - 1], m.setClickEvent(a[c - 1], a[c], null);
          break;
        case 36:
          this.$ = a[c - 2], m.setClickEvent(a[c - 2], a[c - 1], a[c]);
          break;
        case 37:
          this.$ = a[c - 2], m.setClickEvent(a[c - 2], a[c - 1], null), m.setLink(a[c - 2], a[c]);
          break;
        case 38:
          this.$ = a[c - 3], m.setClickEvent(a[c - 3], a[c - 2], a[c - 1]), m.setLink(a[c - 3], a[c]);
          break;
        case 39:
          this.$ = a[c - 2], m.setClickEvent(a[c - 2], a[c], null), m.setLink(a[c - 2], a[c - 1]);
          break;
        case 40:
          this.$ = a[c - 3], m.setClickEvent(a[c - 3], a[c - 1], a[c]), m.setLink(a[c - 3], a[c - 2]);
          break;
        case 41:
          this.$ = a[c - 1], m.setLink(a[c - 1], a[c]);
          break;
        case 42:
        case 48:
          this.$ = a[c - 1] + " " + a[c];
          break;
        case 43:
        case 44:
        case 46:
          this.$ = a[c - 2] + " " + a[c - 1] + " " + a[c];
          break;
        case 45:
        case 47:
          this.$ = a[c - 3] + " " + a[c - 2] + " " + a[c - 1] + " " + a[c];
          break;
        case 49:
          m.parseDirective("%%{", "open_directive");
          break;
        case 50:
          m.parseDirective(a[c], "type_directive");
          break;
        case 51:
          a[c] = a[c].trim().replace(/'/g, '"'), m.parseDirective(a[c], "arg_directive");
          break;
        case 52:
          m.parseDirective("}%%", "close_directive", "gantt");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: e, 38: 4, 48: n }, { 1: [3] }, { 3: 6, 4: 2, 5: e, 38: 4, 48: n }, t2(r, [2, 3], { 6: 7 }), { 39: 8, 49: [1, 9] }, { 49: [2, 49] }, { 1: [2, 1] }, { 4: 31, 7: [1, 10], 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: 23, 13: i, 14: s, 15: o, 16: g, 17: _, 18: y, 19: C, 20: F, 21: w, 22: x, 23: q, 24: d, 25: L, 26: N, 27: z, 28: B, 29: Z, 31: j, 33: b, 34: I, 35: 29, 36: T, 38: 4, 43: S, 48: n }, { 40: 40, 41: [1, 41], 51: M }, t2([41, 51], [2, 50]), t2(r, [2, 8], { 1: [2, 2] }), t2(r, [2, 4]), { 4: 31, 10: 43, 12: 23, 13: i, 14: s, 15: o, 16: g, 17: _, 18: y, 19: C, 20: F, 21: w, 22: x, 23: q, 24: d, 25: L, 26: N, 27: z, 28: B, 29: Z, 31: j, 33: b, 34: I, 35: 29, 36: T, 38: 4, 43: S, 48: n }, t2(r, [2, 6]), t2(r, [2, 7]), t2(r, [2, 16]), t2(r, [2, 17]), t2(r, [2, 18]), t2(r, [2, 19]), t2(r, [2, 20]), t2(r, [2, 21]), t2(r, [2, 22]), t2(r, [2, 23]), t2(r, [2, 24]), t2(r, [2, 25]), { 30: [1, 44] }, { 32: [1, 45] }, t2(r, [2, 28]), t2(r, [2, 29]), t2(r, [2, 30]), { 37: [1, 46] }, t2(r, [2, 32]), t2(r, [2, 9]), t2(r, [2, 10]), t2(r, [2, 11]), t2(r, [2, 12]), t2(r, [2, 13]), t2(r, [2, 14]), t2(r, [2, 15]), { 44: [1, 47], 46: [1, 48] }, { 11: [1, 49] }, { 42: 50, 50: [1, 51] }, { 11: [2, 52] }, t2(r, [2, 5]), t2(r, [2, 26]), t2(r, [2, 27]), t2(r, [2, 31]), t2(r, [2, 35], { 45: [1, 52], 46: [1, 53] }), t2(r, [2, 41], { 44: [1, 54] }), t2(D, [2, 33]), { 40: 55, 51: M }, { 51: [2, 51] }, t2(r, [2, 36], { 46: [1, 56] }), t2(r, [2, 37]), t2(r, [2, 39], { 45: [1, 57] }), { 11: [1, 58] }, t2(r, [2, 38]), t2(r, [2, 40]), t2(D, [2, 34])],
    defaultActions: { 5: [2, 49], 6: [2, 1], 42: [2, 52], 51: [2, 51] },
    parseError: function(h, k2) {
      if (k2.recoverable)
        this.trace(h);
      else {
        var v = new Error(h);
        throw v.hash = k2, v;
      }
    },
    parse: function(h) {
      var k2 = this, v = [0], m = [], u = [null], a = [], R = this.table, c = "", O = 0, Q = 0, X = 2, st = 1, ot = a.slice.call(arguments, 1), f = Object.create(this.lexer), Y = { yy: {} };
      for (var A in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, A) && (Y.yy[A] = this.yy[A]);
      f.setInput(h, Y.yy), Y.yy.lexer = f, Y.yy.parser = this, typeof f.yylloc > "u" && (f.yylloc = {});
      var l = f.yylloc;
      a.push(l);
      var J = f.options && f.options.ranges;
      typeof Y.yy.parseError == "function" ? this.parseError = Y.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function V() {
        var ut;
        return ut = m.pop() || f.lex() || st, typeof ut != "number" && (ut instanceof Array && (m = ut, ut = m.pop()), ut = k2.symbols_[ut] || ut), ut;
      }
      for (var H, G, $, vt, Tt = {}, Nt, ct, Ee, Vt; ; ) {
        if (G = v[v.length - 1], this.defaultActions[G] ? $ = this.defaultActions[G] : ((H === null || typeof H > "u") && (H = V()), $ = R[G] && R[G][H]), typeof $ > "u" || !$.length || !$[0]) {
          var te = "";
          Vt = [];
          for (Nt in R[G])
            this.terminals_[Nt] && Nt > X && Vt.push("'" + this.terminals_[Nt] + "'");
          f.showPosition ? te = "Parse error on line " + (O + 1) + `:
` + f.showPosition() + `
Expecting ` + Vt.join(", ") + ", got '" + (this.terminals_[H] || H) + "'" : te = "Parse error on line " + (O + 1) + ": Unexpected " + (H == st ? "end of input" : "'" + (this.terminals_[H] || H) + "'"), this.parseError(te, {
            text: f.match,
            token: this.terminals_[H] || H,
            line: f.yylineno,
            loc: l,
            expected: Vt
          });
        }
        if ($[0] instanceof Array && $.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + G + ", token: " + H);
        switch ($[0]) {
          case 1:
            v.push(H), u.push(f.yytext), a.push(f.yylloc), v.push($[1]), H = null, Q = f.yyleng, c = f.yytext, O = f.yylineno, l = f.yylloc;
            break;
          case 2:
            if (ct = this.productions_[$[1]][1], Tt.$ = u[u.length - ct], Tt._$ = {
              first_line: a[a.length - (ct || 1)].first_line,
              last_line: a[a.length - 1].last_line,
              first_column: a[a.length - (ct || 1)].first_column,
              last_column: a[a.length - 1].last_column
            }, J && (Tt._$.range = [
              a[a.length - (ct || 1)].range[0],
              a[a.length - 1].range[1]
            ]), vt = this.performAction.apply(Tt, [
              c,
              Q,
              O,
              Y.yy,
              $[1],
              u,
              a
            ].concat(ot)), typeof vt < "u")
              return vt;
            ct && (v = v.slice(0, -1 * ct * 2), u = u.slice(0, -1 * ct), a = a.slice(0, -1 * ct)), v.push(this.productions_[$[1]][0]), u.push(Tt.$), a.push(Tt._$), Ee = R[v[v.length - 2]][v[v.length - 1]], v.push(Ee);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, W = function() {
    var U = {
      EOF: 1,
      parseError: function(k2, v) {
        if (this.yy.parser)
          this.yy.parser.parseError(k2, v);
        else
          throw new Error(k2);
      },
      // resets the lexer, sets new input
      setInput: function(h, k2) {
        return this.yy = k2 || this.yy || {}, this._input = h, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var h = this._input[0];
        this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
        var k2 = h.match(/(?:\r\n?|\n).*/g);
        return k2 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
      },
      // unshifts one char (or a string) into the input
      unput: function(h) {
        var k2 = h.length, v = h.split(/(?:\r\n?|\n)/g);
        this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - k2), this.offset -= k2;
        var m = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), v.length - 1 && (this.yylineno -= v.length - 1);
        var u = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: v ? (v.length === m.length ? this.yylloc.first_column : 0) + m[m.length - v.length].length - v[0].length : this.yylloc.first_column - k2
        }, this.options.ranges && (this.yylloc.range = [u[0], u[0] + this.yyleng - k2]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(h) {
        this.unput(this.match.slice(h));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var h = this.matched.substr(0, this.matched.length - this.match.length);
        return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var h = this.match;
        return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var h = this.pastInput(), k2 = new Array(h.length + 1).join("-");
        return h + this.upcomingInput() + `
` + k2 + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(h, k2) {
        var v, m, u;
        if (this.options.backtrack_lexer && (u = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (u.yylloc.range = this.yylloc.range.slice(0))), m = h[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h[0].length
        }, this.yytext += h[0], this.match += h[0], this.matches = h, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(h[0].length), this.matched += h[0], v = this.performAction.call(this, this.yy, this, k2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), v)
          return v;
        if (this._backtrack) {
          for (var a in u)
            this[a] = u[a];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var h, k2, v, m;
        this._more || (this.yytext = "", this.match = "");
        for (var u = this._currentRules(), a = 0; a < u.length; a++)
          if (v = this._input.match(this.rules[u[a]]), v && (!k2 || v[0].length > k2[0].length)) {
            if (k2 = v, m = a, this.options.backtrack_lexer) {
              if (h = this.test_match(v, u[a]), h !== false)
                return h;
              if (this._backtrack) {
                k2 = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return k2 ? (h = this.test_match(k2, u[m]), h !== false ? h : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var k2 = this.next();
        return k2 || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(k2) {
        this.conditionStack.push(k2);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var k2 = this.conditionStack.length - 1;
        return k2 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(k2) {
        return k2 = this.conditionStack.length - 1 - Math.abs(k2 || 0), k2 >= 0 ? this.conditionStack[k2] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(k2) {
        this.begin(k2);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(k2, v, m, u) {
        switch (m) {
          case 0:
            return this.begin("open_directive"), 48;
          case 1:
            return this.begin("type_directive"), 49;
          case 2:
            return this.popState(), this.begin("arg_directive"), 41;
          case 3:
            return this.popState(), this.popState(), 51;
          case 4:
            return 50;
          case 5:
            return this.begin("acc_title"), 29;
          case 6:
            return this.popState(), "acc_title_value";
          case 7:
            return this.begin("acc_descr"), 31;
          case 8:
            return this.popState(), "acc_descr_value";
          case 9:
            this.begin("acc_descr_multiline");
            break;
          case 10:
            this.popState();
            break;
          case 11:
            return "acc_descr_multiline_value";
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return 11;
          case 16:
            break;
          case 17:
            break;
          case 18:
            break;
          case 19:
            this.begin("href");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return 46;
          case 22:
            this.begin("callbackname");
            break;
          case 23:
            this.popState();
            break;
          case 24:
            this.popState(), this.begin("callbackargs");
            break;
          case 25:
            return 44;
          case 26:
            this.popState();
            break;
          case 27:
            return 45;
          case 28:
            this.begin("click");
            break;
          case 29:
            this.popState();
            break;
          case 30:
            return 43;
          case 31:
            return 5;
          case 32:
            return 20;
          case 33:
            return 21;
          case 34:
            return 22;
          case 35:
            return 23;
          case 36:
            return 24;
          case 37:
            return 26;
          case 38:
            return 25;
          case 39:
            return 27;
          case 40:
            return 13;
          case 41:
            return 14;
          case 42:
            return 15;
          case 43:
            return 16;
          case 44:
            return 17;
          case 45:
            return 18;
          case 46:
            return 19;
          case 47:
            return "date";
          case 48:
            return 28;
          case 49:
            return "accDescription";
          case 50:
            return 34;
          case 51:
            return 36;
          case 52:
            return 37;
          case 53:
            return 41;
          case 54:
            return 7;
          case 55:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [10, 11], inclusive: false }, acc_descr: { rules: [8], inclusive: false }, acc_title: { rules: [6], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, callbackargs: { rules: [26, 27], inclusive: false }, callbackname: { rules: [23, 24, 25], inclusive: false }, href: { rules: [20, 21], inclusive: false }, click: { rules: [29, 30], inclusive: false }, INITIAL: { rules: [0, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55], inclusive: true } }
    };
    return U;
  }();
  p.lexer = W;
  function E() {
    this.yy = {};
  }
  return E.prototype = p, p.Parser = E, new E();
}();
ge.parser = ge;
var Li = ge;
var Cn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(Wl, function() {
    var n = "day";
    return function(r, i, s) {
      var o = function(y) {
        return y.add(4 - y.isoWeekday(), n);
      }, g = i.prototype;
      g.isoWeekYear = function() {
        return o(this).year();
      }, g.isoWeek = function(y) {
        if (!this.$utils().u(y))
          return this.add(7 * (y - this.isoWeek()), n);
        var C, F, w, x, q = o(this), d = (C = this.isoWeekYear(), F = this.$u, w = (F ? s.utc : s)().year(C).startOf("year"), x = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (x += 7), w.add(x, n));
        return q.diff(d, "week") + 1;
      }, g.isoWeekday = function(y) {
        return this.$utils().u(y) ? this.day() || 7 : this.day(this.day() % 7 ? y : y - 7);
      };
      var _ = g.startOf;
      g.startOf = function(y, C) {
        var F = this.$utils(), w = !!F.u(C) || C;
        return F.p(y) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : _.bind(this)(y, C);
      };
    };
  });
})(Cn);
var Ei = Cn.exports;
var Ai = Hl(Ei);
var Mn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(Wl, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, s = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, g = {}, _ = function(d) {
      return (d = +d) + (d > 68 ? 1900 : 2e3);
    }, y = function(d) {
      return function(L) {
        this[d] = +L;
      };
    }, C = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
      (this.zone || (this.zone = {})).offset = function(L) {
        if (!L || L === "Z")
          return 0;
        var N = L.match(/([+-]|\d\d)/g), z = 60 * N[1] + (+N[2] || 0);
        return z === 0 ? 0 : N[0] === "+" ? -z : z;
      }(d);
    }], F = function(d) {
      var L = g[d];
      return L && (L.indexOf ? L : L.s.concat(L.f));
    }, w = function(d, L) {
      var N, z = g.meridiem;
      if (z) {
        for (var B = 1; B <= 24; B += 1)
          if (d.indexOf(z(B, 0, L)) > -1) {
            N = B > 12;
            break;
          }
      } else
        N = d === (L ? "pm" : "PM");
      return N;
    }, x = { A: [o, function(d) {
      this.afternoon = w(d, false);
    }], a: [o, function(d) {
      this.afternoon = w(d, true);
    }], S: [/\d/, function(d) {
      this.milliseconds = 100 * +d;
    }], SS: [i, function(d) {
      this.milliseconds = 10 * +d;
    }], SSS: [/\d{3}/, function(d) {
      this.milliseconds = +d;
    }], s: [s, y("seconds")], ss: [s, y("seconds")], m: [s, y("minutes")], mm: [s, y("minutes")], H: [s, y("hours")], h: [s, y("hours")], HH: [s, y("hours")], hh: [s, y("hours")], D: [s, y("day")], DD: [i, y("day")], Do: [o, function(d) {
      var L = g.ordinal, N = d.match(/\d+/);
      if (this.day = N[0], L)
        for (var z = 1; z <= 31; z += 1)
          L(z).replace(/\[|\]/g, "") === d && (this.day = z);
    }], M: [s, y("month")], MM: [i, y("month")], MMM: [o, function(d) {
      var L = F("months"), N = (F("monthsShort") || L.map(function(z) {
        return z.slice(0, 3);
      })).indexOf(d) + 1;
      if (N < 1)
        throw new Error();
      this.month = N % 12 || N;
    }], MMMM: [o, function(d) {
      var L = F("months").indexOf(d) + 1;
      if (L < 1)
        throw new Error();
      this.month = L % 12 || L;
    }], Y: [/[+-]?\d+/, y("year")], YY: [i, function(d) {
      this.year = _(d);
    }], YYYY: [/\d{4}/, y("year")], Z: C, ZZ: C };
    function q(d) {
      var L, N;
      L = d, N = g && g.formats;
      for (var z = (d = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(S, M, D) {
        var p = D && D.toUpperCase();
        return M || N[D] || n[D] || N[p].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(W, E, U) {
          return E || U.slice(1);
        });
      })).match(r), B = z.length, Z = 0; Z < B; Z += 1) {
        var j = z[Z], b = x[j], I = b && b[0], T = b && b[1];
        z[Z] = T ? { regex: I, parser: T } : j.replace(/^\[|\]$/g, "");
      }
      return function(S) {
        for (var M = {}, D = 0, p = 0; D < B; D += 1) {
          var W = z[D];
          if (typeof W == "string")
            p += W.length;
          else {
            var E = W.regex, U = W.parser, h = S.slice(p), k2 = E.exec(h)[0];
            U.call(M, k2), S = S.replace(k2, "");
          }
        }
        return function(v) {
          var m = v.afternoon;
          if (m !== void 0) {
            var u = v.hours;
            m ? u < 12 && (v.hours += 12) : u === 12 && (v.hours = 0), delete v.afternoon;
          }
        }(M), M;
      };
    }
    return function(d, L, N) {
      N.p.customParseFormat = true, d && d.parseTwoDigitYear && (_ = d.parseTwoDigitYear);
      var z = L.prototype, B = z.parse;
      z.parse = function(Z) {
        var j = Z.date, b = Z.utc, I = Z.args;
        this.$u = b;
        var T = I[1];
        if (typeof T == "string") {
          var S = I[2] === true, M = I[3] === true, D = S || M, p = I[2];
          M && (p = I[2]), g = this.$locale(), !S && p && (g = N.Ls[p]), this.$d = function(h, k2, v) {
            try {
              if (["x", "X"].indexOf(k2) > -1)
                return new Date((k2 === "X" ? 1e3 : 1) * h);
              var m = q(k2)(h), u = m.year, a = m.month, R = m.day, c = m.hours, O = m.minutes, Q = m.seconds, X = m.milliseconds, st = m.zone, ot = /* @__PURE__ */ new Date(), f = R || (u || a ? 1 : ot.getDate()), Y = u || ot.getFullYear(), A = 0;
              u && !a || (A = a > 0 ? a - 1 : ot.getMonth());
              var l = c || 0, J = O || 0, V = Q || 0, H = X || 0;
              return st ? new Date(Date.UTC(Y, A, f, l, J, V, H + 60 * st.offset * 1e3)) : v ? new Date(Date.UTC(Y, A, f, l, J, V, H)) : new Date(Y, A, f, l, J, V, H);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(j, T, b), this.init(), p && p !== true && (this.$L = this.locale(p).$L), D && j != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), g = {};
        } else if (T instanceof Array)
          for (var W = T.length, E = 1; E <= W; E += 1) {
            I[1] = T[E - 1];
            var U = N.apply(this, I);
            if (U.isValid()) {
              this.$d = U.$d, this.$L = U.$L, this.init();
              break;
            }
            E === W && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          B.call(this, Z);
      };
    };
  });
})(Mn);
var Ii = Mn.exports;
var Wi = Hl(Ii);
var _n2 = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(Wl, function() {
    return function(n, r) {
      var i = r.prototype, s = i.format;
      i.format = function(o) {
        var g = this, _ = this.$locale();
        if (!this.isValid())
          return s.bind(this)(o);
        var y = this.$utils(), C = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(F) {
          switch (F) {
            case "Q":
              return Math.ceil((g.$M + 1) / 3);
            case "Do":
              return _.ordinal(g.$D);
            case "gggg":
              return g.weekYear();
            case "GGGG":
              return g.isoWeekYear();
            case "wo":
              return _.ordinal(g.week(), "W");
            case "w":
            case "ww":
              return y.s(g.week(), F === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return y.s(g.isoWeek(), F === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return y.s(String(g.$H === 0 ? 24 : g.$H), F === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(g.$d.getTime() / 1e3);
            case "x":
              return g.$d.getTime();
            case "z":
              return "[" + g.offsetName() + "]";
            case "zzz":
              return "[" + g.offsetName("long") + "]";
            default:
              return F;
          }
        });
        return s.bind(this)(C);
      };
    };
  });
})(_n2);
var Oi2 = _n2.exports;
var zi = Hl(Oi2);
Ul.extend(Ai);
Ul.extend(Wi);
Ul.extend(zi);
var it = "";
var De = "";
var Ce;
var Me = "";
var Wt = [];
var Ot = [];
var _e = {};
var Se = [];
var Kt = [];
var _t = "";
var Ye = "";
var Sn = ["active", "done", "crit", "milestone"];
var Fe = [];
var zt = false;
var Ue = false;
var Le = "sunday";
var ye = 0;
var Ni = function(t2, e, n) {
  de.parseDirective(this, t2, e, n);
};
var Vi = function() {
  Se = [], Kt = [], _t = "", Fe = [], Bt = 0, pe = void 0, Zt = void 0, K = [], it = "", De = "", Ye = "", Ce = void 0, Me = "", Wt = [], Ot = [], zt = false, Ue = false, ye = 0, _e = {}, La(), Le = "sunday";
};
var Hi = function(t2) {
  De = t2;
};
var Pi = function() {
  return De;
};
var Ri = function(t2) {
  Ce = t2;
};
var Bi = function() {
  return Ce;
};
var Zi = function(t2) {
  Me = t2;
};
var qi = function() {
  return Me;
};
var Xi = function(t2) {
  it = t2;
};
var Gi = function() {
  zt = true;
};
var ji = function() {
  return zt;
};
var Qi = function() {
  Ue = true;
};
var Ji = function() {
  return Ue;
};
var $i = function(t2) {
  Ye = t2;
};
var Ki = function() {
  return Ye;
};
var ta = function() {
  return it;
};
var ea = function(t2) {
  Wt = t2.toLowerCase().split(/[\s,]+/);
};
var na = function() {
  return Wt;
};
var ra = function(t2) {
  Ot = t2.toLowerCase().split(/[\s,]+/);
};
var ia = function() {
  return Ot;
};
var aa = function() {
  return _e;
};
var sa = function(t2) {
  _t = t2, Se.push(t2);
};
var oa = function() {
  return Se;
};
var ca = function() {
  let t2 = Xe();
  const e = 10;
  let n = 0;
  for (; !t2 && n < e; )
    t2 = Xe(), n++;
  return Kt = K, Kt;
};
var Yn = function(t2, e, n, r) {
  return r.includes(t2.format(e.trim())) ? false : t2.isoWeekday() >= 6 && n.includes("weekends") || n.includes(t2.format("dddd").toLowerCase()) ? true : n.includes(t2.format(e.trim()));
};
var ua = function(t2) {
  Le = t2;
};
var la = function() {
  return Le;
};
var Fn = function(t2, e, n, r) {
  if (!n.length || t2.manualEndTime)
    return;
  let i;
  t2.startTime instanceof Date ? i = Ul(t2.startTime) : i = Ul(t2.startTime, e, true), i = i.add(1, "d");
  let s;
  t2.endTime instanceof Date ? s = Ul(t2.endTime) : s = Ul(t2.endTime, e, true);
  const [o, g] = fa(
    i,
    s,
    e,
    n,
    r
  );
  t2.endTime = o.toDate(), t2.renderEndTime = g;
};
var fa = function(t2, e, n, r, i) {
  let s = false, o = null;
  for (; t2 <= e; )
    s || (o = e.toDate()), s = Yn(t2, n, r, i), s && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, o];
};
var ke = function(t2, e, n) {
  n = n.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(n.trim());
  if (i !== null) {
    let o = null;
    if (i[1].split(" ").forEach(function(g) {
      let _ = St(g);
      _ !== void 0 && (o ? _.endTime > o.endTime && (o = _) : o = _);
    }), o)
      return o.endTime;
    {
      const g = /* @__PURE__ */ new Date();
      return g.setHours(0, 0, 0, 0), g;
    }
  }
  let s = Ul(n, e.trim(), true);
  if (s.isValid())
    return s.toDate();
  {
    k.debug("Invalid date:" + n), k.debug("With date format:" + e.trim());
    const o = new Date(n);
    if (o === void 0 || isNaN(o.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    o.getFullYear() < -1e4 || o.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return o;
  }
};
var Un = function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
};
var Ln = function(t2, e, n, r = false) {
  n = n.trim();
  let i = Ul(n, e.trim(), true);
  if (i.isValid())
    return r && (i = i.add(1, "d")), i.toDate();
  let s = Ul(t2);
  const [o, g] = Un(n);
  if (!Number.isNaN(o)) {
    const _ = s.add(o, g);
    _.isValid() && (s = _);
  }
  return s.toDate();
};
var Bt = 0;
var Dt = function(t2) {
  return t2 === void 0 ? (Bt = Bt + 1, "task" + Bt) : t2;
};
var ha = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  Wn(r, i, Sn);
  for (let o = 0; o < r.length; o++)
    r[o] = r[o].trim();
  let s = "";
  switch (r.length) {
    case 1:
      i.id = Dt(), i.startTime = t2.endTime, s = r[0];
      break;
    case 2:
      i.id = Dt(), i.startTime = ke(void 0, it, r[0]), s = r[1];
      break;
    case 3:
      i.id = Dt(r[0]), i.startTime = ke(void 0, it, r[1]), s = r[2];
      break;
  }
  return s && (i.endTime = Ln(i.startTime, it, s, zt), i.manualEndTime = Ul(s, "YYYY-MM-DD", true).isValid(), Fn(i, it, Ot, Wt)), i;
};
var da = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  Wn(r, i, Sn);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
  switch (r.length) {
    case 1:
      i.id = Dt(), i.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, i.endTime = {
        data: r[0]
      };
      break;
    case 2:
      i.id = Dt(), i.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, i.endTime = {
        data: r[1]
      };
      break;
    case 3:
      i.id = Dt(r[0]), i.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, i.endTime = {
        data: r[2]
      };
      break;
  }
  return i;
};
var pe;
var Zt;
var K = [];
var En = {};
var ma = function(t2, e) {
  const n = {
    section: _t,
    type: _t,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, r = da(Zt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Zt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = ye, ye++;
  const i = K.push(n);
  Zt = n.id, En[n.id] = i - 1;
};
var St = function(t2) {
  const e = En[t2];
  return K[e];
};
var ga = function(t2, e) {
  const n = {
    section: _t,
    type: _t,
    description: t2,
    task: t2,
    classes: []
  }, r = ha(pe, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, pe = n, Kt.push(n);
};
var Xe = function() {
  const t2 = function(n) {
    const r = K[n];
    let i = "";
    switch (K[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const s = St(r.prevTaskId);
        r.startTime = s.endTime;
        break;
      }
      case "getStartDate":
        i = ke(void 0, it, K[n].raw.startTime.startData), i && (K[n].startTime = i);
        break;
    }
    return K[n].startTime && (K[n].endTime = Ln(
      K[n].startTime,
      it,
      K[n].raw.endTime.data,
      zt
    ), K[n].endTime && (K[n].processed = true, K[n].manualEndTime = Ul(
      K[n].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), Fn(K[n], it, Ot, Wt))), K[n].processed;
  };
  let e = true;
  for (const [n, r] of K.entries())
    t2(n), e = e && r.processed;
  return e;
};
var ya = function(t2, e) {
  let n = e;
  Ft().securityLevel !== "loose" && (n = us(e)), t2.split(",").forEach(function(r) {
    St(r) !== void 0 && (In(r, () => {
      window.open(n, "_self");
    }), _e[r] = n);
  }), An(t2, "clickable");
};
var An = function(t2, e) {
  t2.split(",").forEach(function(n) {
    let r = St(n);
    r !== void 0 && r.classes.push(e);
  });
};
var ka = function(t2, e, n) {
  if (Ft().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].trim();
      o.charAt(0) === '"' && o.charAt(o.length - 1) === '"' && (o = o.substr(1, o.length - 2)), r[s] = o;
    }
  }
  r.length === 0 && r.push(t2), St(t2) !== void 0 && In(t2, () => {
    Oi.runFunc(e, ...r);
  });
};
var In = function(t2, e) {
  Fe.push(
    function() {
      const n = document.querySelector(`[id="${t2}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t2}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
};
var pa = function(t2, e, n) {
  t2.split(",").forEach(function(r) {
    ka(r, e, n);
  }), An(t2, "clickable");
};
var va = function(t2) {
  Fe.forEach(function(e) {
    e(t2);
  });
};
var Ta = {
  parseDirective: Ni,
  getConfig: () => Ft().gantt,
  clear: Vi,
  setDateFormat: Xi,
  getDateFormat: ta,
  enableInclusiveEndDates: Gi,
  endDatesAreInclusive: ji,
  enableTopAxis: Qi,
  topAxisEnabled: Ji,
  setAxisFormat: Hi,
  getAxisFormat: Pi,
  setTickInterval: Ri,
  getTickInterval: Bi,
  setTodayMarker: Zi,
  getTodayMarker: qi,
  setAccTitle: Aa,
  getAccTitle: Ea,
  setDiagramTitle: Ia,
  getDiagramTitle: $a,
  setDisplayMode: $i,
  getDisplayMode: Ki,
  setAccDescription: Ma,
  getAccDescription: Oa,
  addSection: sa,
  getSections: oa,
  getTasks: ca,
  addTask: ma,
  findTaskById: St,
  addTaskOrg: ga,
  setIncludes: ea,
  getIncludes: na,
  setExcludes: ra,
  getExcludes: ia,
  setClickEvent: pa,
  setLink: ya,
  getLinks: aa,
  bindFunctions: va,
  parseDuration: Un,
  isInvalidDate: Yn,
  setWeekday: ua,
  getWeekday: la
};
function Wn(t2, e, n) {
  let r = true;
  for (; r; )
    r = false, n.forEach(function(i) {
      const s = "^\\s*" + i + "\\s*$", o = new RegExp(s);
      t2[0].match(o) && (e[i] = true, t2.shift(1), r = true);
    });
}
var ba = function() {
  k.debug("Something is calling, setConf, remove the call");
};
var Ge = {
  monday: Et,
  tuesday: hn,
  wednesday: dn,
  thursday: gt,
  friday: mn,
  saturday: gn,
  sunday: It
};
var xa = (t2, e) => {
  let n = [...t2].map(() => -1 / 0), r = [...t2].sort((s, o) => s.startTime - o.startTime || s.order - o.order), i = 0;
  for (const s of r)
    for (let o = 0; o < n.length; o++)
      if (s.startTime >= n[o]) {
        n[o] = s.endTime, s.order = o + e, o > i && (i = o);
        break;
      }
  return i;
};
var lt;
var wa = function(t2, e, n, r) {
  const i = Ft().gantt, s = Ft().securityLevel;
  let o;
  s === "sandbox" && (o = Ct("#i" + e));
  const g = s === "sandbox" ? Ct(o.nodes()[0].contentDocument.body) : Ct("body"), _ = s === "sandbox" ? o.nodes()[0].contentDocument : document, y = _.getElementById(e);
  lt = y.parentElement.offsetWidth, lt === void 0 && (lt = 1200), i.useWidth !== void 0 && (lt = i.useWidth);
  const C = r.db.getTasks();
  let F = [];
  for (const T of C)
    F.push(T.type);
  F = I(F);
  const w = {};
  let x = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const T = {};
    for (const M of C)
      T[M.section] === void 0 ? T[M.section] = [M] : T[M.section].push(M);
    let S = 0;
    for (const M of Object.keys(T)) {
      const D = xa(T[M], S) + 1;
      S += D, x += D * (i.barHeight + i.barGap), w[M] = D;
    }
  } else {
    x += C.length * (i.barHeight + i.barGap);
    for (const T of F)
      w[T] = C.filter((S) => S.type === T).length;
  }
  y.setAttribute("viewBox", "0 0 " + lt + " " + x);
  const q = g.select(`[id="${e}"]`), d = Ui().domain([
    rr(C, function(T) {
      return T.startTime;
    }),
    nr(C, function(T) {
      return T.endTime;
    })
  ]).rangeRound([0, lt - i.leftPadding - i.rightPadding]);
  function L(T, S) {
    const M = T.startTime, D = S.startTime;
    let p = 0;
    return M > D ? p = 1 : M < D && (p = -1), p;
  }
  C.sort(L), N(C, lt, x), Fa(q, x, lt, i.useMaxWidth), q.append("text").text(r.db.getDiagramTitle()).attr("x", lt / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function N(T, S, M) {
    const D = i.barHeight, p = D + i.barGap, W = i.topPadding, E = i.leftPadding, U = Zn().domain([0, F.length]).range(["#00B9FA", "#F95002"]).interpolate(pr);
    B(
      p,
      W,
      E,
      S,
      M,
      T,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), Z(E, W, S, M), z(T, p, W, E, D, U, S), j(p, W), b(E, W, S, M);
  }
  function z(T, S, M, D, p, W, E) {
    const h = [...new Set(T.map((u) => u.order))].map((u) => T.find((a) => a.order === u));
    q.append("g").selectAll("rect").data(h).enter().append("rect").attr("x", 0).attr("y", function(u, a) {
      return a = u.order, a * S + M - 2;
    }).attr("width", function() {
      return E - i.rightPadding / 2;
    }).attr("height", S).attr("class", function(u) {
      for (const [a, R] of F.entries())
        if (u.type === R)
          return "section section" + a % i.numberSectionStyles;
      return "section section0";
    });
    const k2 = q.append("g").selectAll("rect").data(T).enter(), v = r.db.getLinks();
    if (k2.append("rect").attr("id", function(u) {
      return u.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(u) {
      return u.milestone ? d(u.startTime) + D + 0.5 * (d(u.endTime) - d(u.startTime)) - 0.5 * p : d(u.startTime) + D;
    }).attr("y", function(u, a) {
      return a = u.order, a * S + M;
    }).attr("width", function(u) {
      return u.milestone ? p : d(u.renderEndTime || u.endTime) - d(u.startTime);
    }).attr("height", p).attr("transform-origin", function(u, a) {
      return a = u.order, (d(u.startTime) + D + 0.5 * (d(u.endTime) - d(u.startTime))).toString() + "px " + (a * S + M + 0.5 * p).toString() + "px";
    }).attr("class", function(u) {
      const a = "task";
      let R = "";
      u.classes.length > 0 && (R = u.classes.join(" "));
      let c = 0;
      for (const [Q, X] of F.entries())
        u.type === X && (c = Q % i.numberSectionStyles);
      let O = "";
      return u.active ? u.crit ? O += " activeCrit" : O = " active" : u.done ? u.crit ? O = " doneCrit" : O = " done" : u.crit && (O += " crit"), O.length === 0 && (O = " task"), u.milestone && (O = " milestone " + O), O += c, O += " " + R, a + O;
    }), k2.append("text").attr("id", function(u) {
      return u.id + "-text";
    }).text(function(u) {
      return u.task;
    }).attr("font-size", i.fontSize).attr("x", function(u) {
      let a = d(u.startTime), R = d(u.renderEndTime || u.endTime);
      u.milestone && (a += 0.5 * (d(u.endTime) - d(u.startTime)) - 0.5 * p), u.milestone && (R = a + p);
      const c = this.getBBox().width;
      return c > R - a ? R + c + 1.5 * i.leftPadding > E ? a + D - 5 : R + D + 5 : (R - a) / 2 + a + D;
    }).attr("y", function(u, a) {
      return a = u.order, a * S + i.barHeight / 2 + (i.fontSize / 2 - 2) + M;
    }).attr("text-height", p).attr("class", function(u) {
      const a = d(u.startTime);
      let R = d(u.endTime);
      u.milestone && (R = a + p);
      const c = this.getBBox().width;
      let O = "";
      u.classes.length > 0 && (O = u.classes.join(" "));
      let Q = 0;
      for (const [st, ot] of F.entries())
        u.type === ot && (Q = st % i.numberSectionStyles);
      let X = "";
      return u.active && (u.crit ? X = "activeCritText" + Q : X = "activeText" + Q), u.done ? u.crit ? X = X + " doneCritText" + Q : X = X + " doneText" + Q : u.crit && (X = X + " critText" + Q), u.milestone && (X += " milestoneText"), c > R - a ? R + c + 1.5 * i.leftPadding > E ? O + " taskTextOutsideLeft taskTextOutside" + Q + " " + X : O + " taskTextOutsideRight taskTextOutside" + Q + " " + X + " width-" + c : O + " taskText taskText" + Q + " " + X + " width-" + c;
    }), Ft().securityLevel === "sandbox") {
      let u;
      u = Ct("#i" + e);
      const a = u.nodes()[0].contentDocument;
      k2.filter(function(R) {
        return v[R.id] !== void 0;
      }).each(function(R) {
        var c = a.querySelector("#" + R.id), O = a.querySelector("#" + R.id + "-text");
        const Q = c.parentNode;
        var X = a.createElement("a");
        X.setAttribute("xlink:href", v[R.id]), X.setAttribute("target", "_top"), Q.appendChild(X), X.appendChild(c), X.appendChild(O);
      });
    }
  }
  function B(T, S, M, D, p, W, E, U) {
    const h = W.reduce(
      (c, { startTime: O }) => c ? Math.min(c, O) : O,
      0
    ), k2 = W.reduce((c, { endTime: O }) => c ? Math.max(c, O) : O, 0), v = r.db.getDateFormat();
    if (!h || !k2)
      return;
    const m = [];
    let u = null, a = Ul(h);
    for (; a.valueOf() <= k2; )
      r.db.isInvalidDate(a, v, E, U) ? u ? u.end = a : u = {
        start: a,
        end: a
      } : u && (m.push(u), u = null), a = a.add(1, "d");
    q.append("g").selectAll("rect").data(m).enter().append("rect").attr("id", function(c) {
      return "exclude-" + c.start.format("YYYY-MM-DD");
    }).attr("x", function(c) {
      return d(c.start) + M;
    }).attr("y", i.gridLineStartPadding).attr("width", function(c) {
      const O = c.end.add(1, "day");
      return d(O) - d(c.start);
    }).attr("height", p - S - i.gridLineStartPadding).attr("transform-origin", function(c, O) {
      return (d(c.start) + M + 0.5 * (d(c.end) - d(c.start))).toString() + "px " + (O * T + 0.5 * p).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function Z(T, S, M, D) {
    let p = fr(d).tickSize(-D + S + i.gridLineStartPadding).tickFormat($t(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const E = /^([1-9]\d*)(minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (E !== null) {
      const U = E[1], h = E[2], k2 = r.db.getWeekday() || i.weekday;
      switch (h) {
        case "minute":
          p.ticks(Gt.every(U));
          break;
        case "hour":
          p.ticks(jt.every(U));
          break;
        case "day":
          p.ticks(Ct2.every(U));
          break;
        case "week":
          p.ticks(Ge[k2].every(U));
          break;
        case "month":
          p.ticks(Qt.every(U));
          break;
      }
    }
    if (q.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + (D - 50) + ")").call(p).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let U = lr(d).tickSize(-D + S + i.gridLineStartPadding).tickFormat($t(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (E !== null) {
        const h = E[1], k2 = E[2], v = r.db.getWeekday() || i.weekday;
        switch (k2) {
          case "minute":
            U.ticks(Gt.every(h));
            break;
          case "hour":
            U.ticks(jt.every(h));
            break;
          case "day":
            U.ticks(Ct2.every(h));
            break;
          case "week":
            U.ticks(Ge[v].every(h));
            break;
          case "month":
            U.ticks(Qt.every(h));
            break;
        }
      }
      q.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + S + ")").call(U).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function j(T, S) {
    let M = 0;
    const D = Object.keys(w).map((p) => [p, w[p]]);
    q.append("g").selectAll("text").data(D).enter().append(function(p) {
      const W = p[0].split(Bn.lineBreakRegex), E = -(W.length - 1) / 2, U = _.createElementNS("http://www.w3.org/2000/svg", "text");
      U.setAttribute("dy", E + "em");
      for (const [h, k2] of W.entries()) {
        const v = _.createElementNS("http://www.w3.org/2000/svg", "tspan");
        v.setAttribute("alignment-baseline", "central"), v.setAttribute("x", "10"), h > 0 && v.setAttribute("dy", "1em"), v.textContent = k2, U.appendChild(v);
      }
      return U;
    }).attr("x", 10).attr("y", function(p, W) {
      if (W > 0)
        for (let E = 0; E < W; E++)
          return M += D[W - 1][1], p[1] * T / 2 + M * T + S;
      else
        return p[1] * T / 2 + S;
    }).attr("font-size", i.sectionFontSize).attr("class", function(p) {
      for (const [W, E] of F.entries())
        if (p[0] === E)
          return "sectionTitle sectionTitle" + W % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function b(T, S, M, D) {
    const p = r.db.getTodayMarker();
    if (p === "off")
      return;
    const W = q.append("g").attr("class", "today"), E = /* @__PURE__ */ new Date(), U = W.append("line");
    U.attr("x1", d(E) + T).attr("x2", d(E) + T).attr("y1", i.titleTopMargin).attr("y2", D - i.titleTopMargin).attr("class", "today"), p !== "" && U.attr("style", p.replace(/,/g, ";"));
  }
  function I(T) {
    const S = {}, M = [];
    for (let D = 0, p = T.length; D < p; ++D)
      Object.prototype.hasOwnProperty.call(S, T[D]) || (S[T[D]] = true, M.push(T[D]));
    return M;
  }
};
var Da = {
  setConf: ba,
  draw: wa
};
var Ca = (t2) => `
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t2.fontFamily};
      fill: ${t2.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t2.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t2.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`;
var Ma2 = Ca;
var Fa2 = {
  parser: Li,
  db: Ta,
  renderer: Da,
  styles: Ma2
};
export {
  Fa2 as diagram
};
//# sourceMappingURL=ganttDiagram-bac86b83-74T2A3QP.js.map
