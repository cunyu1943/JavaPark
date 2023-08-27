import {
  C,
  E
} from "./chunk-OTN43OJN.js";
import {
  $x,
  Ax,
  Bx,
  Ex,
  Fx,
  Ix,
  Lx,
  Mx,
  Ox,
  Tn,
  To,
  bo,
  wx
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/arc-e34fbb53.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, O, E2, h, v, K, a) {
  var s = O - l, n = E2 - x, m = K - h, i = a - v, r = i * s - m * n;
  if (!(r * r < bo))
    return r = (m * (x - v) - i * (l - h)) / r, [l + r * s, x + r * n];
}
function U(l, x, O, E2, h, v, K) {
  var a = l - O, s = x - E2, n = (K ? v : -v) / Mx(a * a + s * s), m = n * s, i = -n * a, r = l + m, f = x + i, c = O + m, q = E2 + i, o = (r + c) / 2, w = (f + q) / 2, p = c - r, g = q - f, A = p * p + g * g, F = h - v, P = r * q - c * f, G = (g < 0 ? -1 : 1) * Mx(Lx(0, F * F * A - P * P)), H = (P * g - p * G) / A, d = (-P * p - g * G) / A, R = (P * g + p * G) / A, T = (-P * p + g * G) / A, e = H - o, u = d - w, L = R - o, M = T - w;
  return e * e + u * u > L * L + M * M && (H = R, d = T), {
    cx: H,
    cy: d,
    x01: -m,
    y01: -i,
    x11: H * (h / F - 1),
    y11: d * (h / F - 1)
  };
}
function hn() {
  var l = fn, x = cn, O = E(0), E2 = null, h = yn, v = gn, K = mn, a = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), r = +x.apply(this, arguments), f = h.apply(this, arguments) - To, c = v.apply(this, arguments) - To, q = wx(c - f), o = c > f;
    if (a || (a = n = C()), r < i && (m = r, r = i, i = m), !(r > bo))
      a.moveTo(0, 0);
    else if (q > Ox - bo)
      a.moveTo(r * Fx(f), r * Ex(f)), a.arc(0, 0, r, f, c, !o), i > bo && (a.moveTo(i * Fx(c), i * Ex(c)), a.arc(0, 0, i, c, f, o));
    else {
      var w = f, p = c, g = f, A = c, F = q, P = q, G = K.apply(this, arguments) / 2, H = G > bo && (E2 ? +E2.apply(this, arguments) : Mx(i * i + r * r)), d = Ax(wx(r - i) / 2, +O.apply(this, arguments)), R = d, T = d, e, u;
      if (H > bo) {
        var L = $x(H / i * Ex(G)), M = $x(H / r * Ex(G));
        (F -= L * 2) > bo ? (L *= o ? 1 : -1, g += L, A -= L) : (F = 0, g = A = (f + c) / 2), (P -= M * 2) > bo ? (M *= o ? 1 : -1, w += M, p -= M) : (P = 0, w = p = (f + c) / 2);
      }
      var S = r * Fx(w), W = r * Ex(w), z = i * Fx(A), B = i * Ex(A);
      if (d > bo) {
        var C2 = r * Fx(p), Q = r * Ex(p), V = i * Fx(g), X = i * Ex(g), I;
        if (q < Tn && (I = pn(S, W, V, X, C2, Q, z, B))) {
          var Y = S - I[0], Z = W - I[1], $ = C2 - I[0], k = Q - I[1], _ = 1 / Ex(Ix((Y * $ + Z * k) / (Mx(Y * Y + Z * Z) * Mx($ * $ + k * k))) / 2), nn = Mx(I[0] * I[0] + I[1] * I[1]);
          R = Ax(d, (i - nn) / (_ - 1)), T = Ax(d, (r - nn) / (_ + 1));
        }
      }
      P > bo ? T > bo ? (e = U(V, X, S, W, r, T, o), u = U(C2, Q, z, B, r, T, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? a.arc(e.cx, e.cy, T, Bx(e.y01, e.x01), Bx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, T, Bx(e.y01, e.x01), Bx(e.y11, e.x11), !o), a.arc(0, 0, r, Bx(e.cy + e.y11, e.cx + e.x11), Bx(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, T, Bx(u.y11, u.x11), Bx(u.y01, u.x01), !o))) : (a.moveTo(S, W), a.arc(0, 0, r, w, p, !o)) : a.moveTo(S, W), !(i > bo) || !(F > bo) ? a.lineTo(z, B) : R > bo ? (e = U(z, B, C2, Q, i, -R, o), u = U(S, W, V, X, i, -R, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), R < d ? a.arc(e.cx, e.cy, R, Bx(e.y01, e.x01), Bx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, R, Bx(e.y01, e.x01), Bx(e.y11, e.x11), !o), a.arc(0, 0, i, Bx(e.cy + e.y11, e.cx + e.x11), Bx(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, R, Bx(u.y11, u.x11), Bx(u.y01, u.x01), !o))) : a.arc(0, 0, i, A, g, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - Tn / 2;
    return [Fx(m) * n, Ex(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (O = typeof n == "function" ? n : E(+n), s) : O;
  }, s.padRadius = function(n) {
    return arguments.length ? (E2 = n == null ? null : typeof n == "function" ? n : E(+n), s) : E2;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (K = typeof n == "function" ? n : E(+n), s) : K;
  }, s.context = function(n) {
    return arguments.length ? (a = n ?? null, s) : a;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-KHZIG6JB.js.map
