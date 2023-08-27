import {
  Y,
  be,
  he,
  pe,
  re,
  te as te2,
  ue,
  we,
  ye
} from "./chunk-RZPLYSGF.js";
import "./chunk-FIBEWFZ4.js";
import {
  Jt,
  Qt
} from "./chunk-BP5EMJEX.js";
import "./chunk-JTWDY2BT.js";
import "./chunk-HIF4XICZ.js";
import "./chunk-UFBL5X6U.js";
import {
  A,
  b,
  bo,
  c,
  gn,
  k,
  te,
  zs
} from "./chunk-4IBMGVCZ.js";
import {
  S
} from "./chunk-4MHZVYT6.js";
import "./chunk-OS2TPKC3.js";
import "./chunk-OTN43OJN.js";
import {
  Bn,
  C0,
  Ct,
  Ft,
  Gg,
  ia,
  k as k2,
  mf,
  w0
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/flowDiagram-dbf2c5c9.js
function Dt(r) {
  if (!r.ok)
    throw new Error(r.status + " " + r.statusText);
  return r.text();
}
function Rt(r, e) {
  return fetch(r, e).then(Dt);
}
function Gt(r) {
  return (e, t) => Rt(e, t).then((n) => new DOMParser().parseFromString(n, r));
}
var Pt = Gt("image/svg+xml");
var Y2 = {
  normal: Wt,
  vee: $t,
  undirected: Vt
};
function Ut(r) {
  Y2 = r;
}
function Wt(r, e, t, n) {
  var a = r.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  te2(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function $t(r, e, t, n) {
  var a = r.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  te2(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function Vt(r, e, t, n) {
  var a = r.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  te2(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function zt(r, e) {
  var t = r;
  return t.node().appendChild(e.label), te2(t, e.labelStyle), t;
}
function Yt(r, e) {
  for (var t = r.append("text"), n = Ht(e.label).split(`
`), a = 0; a < n.length; a++)
    t.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(n[a]);
  return te2(t, e.labelStyle), t;
}
function Ht(r) {
  for (var e = "", t = false, n, a = 0; a < r.length; ++a)
    if (n = r[a], t) {
      switch (n) {
        case "n":
          e += `
`;
          break;
        default:
          e += n;
      }
      t = false;
    } else
      n === "\\" ? t = true : e += n;
  return e;
}
function K(r, e, t) {
  var n = e.label, a = r.append("g");
  e.labelType === "svg" ? zt(a, e) : typeof n != "string" || e.labelType === "html" ? re(a, e) : Yt(a, e);
  var s = a.node().getBBox(), i;
  switch (t) {
    case "top":
      i = -e.height / 2;
      break;
    case "bottom":
      i = e.height / 2 - s.height;
      break;
    default:
      i = -s.height / 2;
  }
  return a.attr("transform", "translate(" + -s.width / 2 + "," + i + ")"), a;
}
var H = function(r, e) {
  var t = e.nodes().filter(function(s) {
    return pe(e, s);
  }), n = r.selectAll("g.cluster").data(t, function(s) {
    return s;
  });
  we(n.exit(), e).style("opacity", 0).remove();
  var a = n.enter().append("g").attr("class", "cluster").attr("id", function(s) {
    var i = e.node(s);
    return i.id;
  }).style("opacity", 0).each(function(s) {
    var i = e.node(s), o = Ct(this);
    Ct(this).append("rect");
    var c2 = o.append("g").attr("class", "label");
    K(c2, i, i.clusterLabelPos);
  });
  return n = n.merge(a), n = we(n, e).style("opacity", 1), n.selectAll("rect").each(function(s) {
    var i = e.node(s), o = Ct(this);
    te2(o, i.style);
  }), n;
};
function Xt(r) {
  H = r;
}
var X = function(r, e) {
  var t = r.selectAll("g.edgeLabel").data(e.edges(), function(a) {
    return be(a);
  }).classed("update", true);
  t.exit().remove(), t.enter().append("g").classed("edgeLabel", true).style("opacity", 0), t = r.selectAll("g.edgeLabel"), t.each(function(a) {
    var s = Ct(this);
    s.select(".label").remove();
    var i = e.edge(a), o = K(s, e.edge(a), 0).classed("label", true), c2 = o.node().getBBox();
    i.labelId && o.attr("id", i.labelId), b(i, "width") || (i.width = c2.width), b(i, "height") || (i.height = c2.height);
  });
  var n;
  return t.exit ? n = t.exit() : n = t.selectAll(null), we(n, e).style("opacity", 0).remove(), t;
};
function Ft2(r) {
  X = r;
}
function O(r, e) {
  return r.intersect(e);
}
var F = function(r, e, t) {
  var n = r.selectAll("g.edgePath").data(e.edges(), function(i) {
    return be(i);
  }).classed("update", true), a = Zt(n, e);
  Ot(n, e);
  var s = n.merge !== void 0 ? n.merge(a) : n;
  return we(s, e).style("opacity", 1), s.each(function(i) {
    var o = Ct(this), c2 = e.edge(i);
    c2.elem = this, c2.id && o.attr("id", c2.id), ue(
      o,
      c2.class,
      (o.classed("update") ? "update " : "") + "edgePath"
    );
  }), s.selectAll("path.path").each(function(i) {
    var o = e.edge(i);
    o.arrowheadId = te("arrowhead");
    var c2 = Ct(this).attr("marker-end", function() {
      return "url(" + Qt2(location.href, o.arrowheadId) + ")";
    }).style("fill", "none");
    we(c2, e).attr("d", function(d) {
      return Jt2(e, d);
    }), te2(c2, o.style);
  }), s.selectAll("defs *").remove(), s.selectAll("defs").each(function(i) {
    var o = e.edge(i), c2 = t[o.arrowhead];
    c2(Ct(this), o.arrowheadId, o, "arrowhead");
  }), s;
};
function qt(r) {
  F = r;
}
function Qt2(r, e) {
  var t = r.split("#")[0];
  return t + "#" + e;
}
function Jt2(r, e) {
  var t = r.edge(e), n = r.node(e.v), a = r.node(e.w), s = t.points.slice(1, t.points.length - 1);
  return s.unshift(O(n, s[0])), s.push(O(a, s[s.length - 1])), ot(t, s);
}
function ot(r, e) {
  var t = (S || Pt.line)().x(function(n) {
    return n.x;
  }).y(function(n) {
    return n.y;
  });
  return (t.curve || t.interpolate)(r.curve), t(e);
}
function Kt(r) {
  var e = r.getBBox(), t = r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(e.width / 2, e.height / 2);
  return { x: t.e, y: t.f };
}
function Zt(r, e) {
  var t = r.enter().append("g").attr("class", "edgePath").style("opacity", 0);
  return t.append("path").attr("class", "path").attr("d", function(n) {
    var a = e.edge(n), s = e.node(n.v).elem, i = k(a.points.length).map(function() {
      return Kt(s);
    });
    return ot(a, i);
  }), t.append("defs"), t;
}
function Ot(r, e) {
  var t = r.exit();
  we(t, e).style("opacity", 0).remove();
}
var q = function(r, e, t) {
  var n = e.nodes().filter(function(i) {
    return !pe(e, i);
  }), a = r.selectAll("g.node").data(n, function(i) {
    return i;
  }).classed("update", true);
  a.exit().remove(), a.enter().append("g").attr("class", "node").style("opacity", 0), a = r.selectAll("g.node"), a.each(function(i) {
    var o = e.node(i), c2 = Ct(this);
    ue(
      c2,
      o.class,
      (c2.classed("update") ? "update " : "") + "node"
    ), c2.select("g.label").remove();
    var d = c2.append("g").attr("class", "label"), l = K(d, o), v = t[o.shape], h = gn(l.node().getBBox(), "width", "height");
    o.elem = this, o.id && c2.attr("id", o.id), o.labelId && d.attr("id", o.labelId), b(o, "width") && (h.width = o.width), b(o, "height") && (h.height = o.height), h.width += o.paddingLeft + o.paddingRight, h.height += o.paddingTop + o.paddingBottom, d.attr(
      "transform",
      "translate(" + (o.paddingLeft - o.paddingRight) / 2 + "," + (o.paddingTop - o.paddingBottom) / 2 + ")"
    );
    var u = Ct(this);
    u.select(".label-container").remove();
    var p = v(u, h, o).classed("label-container", true);
    te2(p, o.style);
    var g = p.node().getBBox();
    o.width = g.width, o.height = g.height;
  });
  var s;
  return a.exit ? s = a.exit() : s = a.selectAll(null), we(s, e).style("opacity", 0).remove(), a;
};
function jt(r) {
  q = r;
}
function te3(r, e) {
  var t = r.filter(function() {
    return !Ct(this).classed("update");
  });
  function n(a) {
    var s = e.node(a);
    return "translate(" + s.x + "," + s.y + ")";
  }
  t.attr("transform", n), we(r, e).style("opacity", 1).attr("transform", n), we(t.selectAll("rect"), e).attr("width", function(a) {
    return e.node(a).width;
  }).attr("height", function(a) {
    return e.node(a).height;
  }).attr("x", function(a) {
    var s = e.node(a);
    return -s.width / 2;
  }).attr("y", function(a) {
    var s = e.node(a);
    return -s.height / 2;
  });
}
function ee(r, e) {
  var t = r.filter(function() {
    return !Ct(this).classed("update");
  });
  function n(a) {
    var s = e.edge(a);
    return b(s, "x") ? "translate(" + s.x + "," + s.y + ")" : "";
  }
  t.attr("transform", n), we(r, e).style("opacity", 1).attr("transform", n);
}
function re2(r, e) {
  var t = r.filter(function() {
    return !Ct(this).classed("update");
  });
  function n(a) {
    var s = e.node(a);
    return "translate(" + s.x + "," + s.y + ")";
  }
  t.attr("transform", n), we(r, e).style("opacity", 1).attr("transform", n);
}
function lt(r, e, t, n) {
  var a = r.x, s = r.y, i = a - n.x, o = s - n.y, c2 = Math.sqrt(e * e * o * o + t * t * i * i), d = Math.abs(e * t * i / c2);
  n.x < a && (d = -d);
  var l = Math.abs(e * t * o / c2);
  return n.y < s && (l = -l), { x: a + d, y: s + l };
}
function ae(r, e, t) {
  return lt(r, e, e, t);
}
function ne(r, e, t, n) {
  var a, s, i, o, c2, d, l, v, h, u, p, g, f, y, k3;
  if (a = e.y - r.y, i = r.x - e.x, c2 = e.x * r.y - r.x * e.y, h = a * t.x + i * t.y + c2, u = a * n.x + i * n.y + c2, !(h !== 0 && u !== 0 && j(h, u)) && (s = n.y - t.y, o = t.x - n.x, d = n.x * t.y - t.x * n.y, l = s * r.x + o * r.y + d, v = s * e.x + o * e.y + d, !(l !== 0 && v !== 0 && j(l, v)) && (p = a * o - s * i, p !== 0)))
    return g = Math.abs(p / 2), f = i * d - o * c2, y = f < 0 ? (f - g) / p : (f + g) / p, f = s * c2 - a * d, k3 = f < 0 ? (f - g) / p : (f + g) / p, { x: y, y: k3 };
}
function j(r, e) {
  return r * e > 0;
}
function T(r, e, t) {
  var n = r.x, a = r.y, s = [], i = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY;
  e.forEach(function(p) {
    i = Math.min(i, p.x), o = Math.min(o, p.y);
  });
  for (var c2 = n - r.width / 2 - i, d = a - r.height / 2 - o, l = 0; l < e.length; l++) {
    var v = e[l], h = e[l < e.length - 1 ? l + 1 : 0], u = ne(
      r,
      t,
      { x: c2 + v.x, y: d + v.y },
      { x: c2 + h.x, y: d + h.y }
    );
    u && s.push(u);
  }
  return s.length ? (s.length > 1 && s.sort(function(p, g) {
    var f = p.x - t.x, y = p.y - t.y, k3 = Math.sqrt(f * f + y * y), I = g.x - t.x, E = g.y - t.y, U = Math.sqrt(I * I + E * E);
    return k3 < U ? -1 : k3 === U ? 0 : 1;
  }), s[0]) : (console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", r), r);
}
function Z(r, e) {
  var t = r.x, n = r.y, a = e.x - t, s = e.y - n, i = r.width / 2, o = r.height / 2, c2, d;
  return Math.abs(s) * i > Math.abs(a) * o ? (s < 0 && (o = -o), c2 = s === 0 ? 0 : o * a / s, d = o) : (a < 0 && (i = -i), c2 = i, d = a === 0 ? 0 : i * s / a), { x: t + c2, y: n + d };
}
var Q = {
  rect: ie,
  ellipse: oe,
  circle: le,
  diamond: ce
};
function se(r) {
  Q = r;
}
function ie(r, e, t) {
  var n = r.insert("rect", ":first-child").attr("rx", t.rx).attr("ry", t.ry).attr("x", -e.width / 2).attr("y", -e.height / 2).attr("width", e.width).attr("height", e.height);
  return t.intersect = function(a) {
    return Z(t, a);
  }, n;
}
function oe(r, e, t) {
  var n = e.width / 2, a = e.height / 2, s = r.insert("ellipse", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("rx", n).attr("ry", a);
  return t.intersect = function(i) {
    return lt(t, n, a, i);
  }, s;
}
function le(r, e, t) {
  var n = Math.max(e.width, e.height) / 2, a = r.insert("circle", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("r", n);
  return t.intersect = function(s) {
    return ae(t, n, s);
  }, a;
}
function ce(r, e, t) {
  var n = e.width * Math.SQRT2 / 2, a = e.height * Math.SQRT2 / 2, s = [
    { x: 0, y: -a },
    { x: -n, y: 0 },
    { x: 0, y: a },
    { x: n, y: 0 }
  ], i = r.insert("polygon", ":first-child").attr(
    "points",
    s.map(function(o) {
      return o.x + "," + o.y;
    }).join(" ")
  );
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function de() {
  var r = function(e, t) {
    fe(t);
    var n = D(e, "output"), a = D(n, "clusters"), s = D(n, "edgePaths"), i = X(D(n, "edgeLabels"), t), o = q(D(n, "nodes"), t, Q);
    zs(t), re2(o, t), ee(i, t), F(s, t, Y2);
    var c2 = H(a, t);
    te3(c2, t), pe2(t);
  };
  return r.createNodes = function(e) {
    return arguments.length ? (jt(e), r) : q;
  }, r.createClusters = function(e) {
    return arguments.length ? (Xt(e), r) : H;
  }, r.createEdgeLabels = function(e) {
    return arguments.length ? (Ft2(e), r) : X;
  }, r.createEdgePaths = function(e) {
    return arguments.length ? (qt(e), r) : F;
  }, r.shapes = function(e) {
    return arguments.length ? (se(e), r) : Q;
  }, r.arrows = function(e) {
    return arguments.length ? (Ut(e), r) : Y2;
  }, r;
}
var he2 = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: "rect"
};
var ue2 = {
  arrowhead: "normal",
  curve: mf
};
function fe(r) {
  r.nodes().forEach(function(e) {
    var t = r.node(e);
    !b(t, "label") && !r.children(e).length && (t.label = e), b(t, "paddingX") && bo(t, {
      paddingLeft: t.paddingX,
      paddingRight: t.paddingX
    }), b(t, "paddingY") && bo(t, {
      paddingTop: t.paddingY,
      paddingBottom: t.paddingY
    }), b(t, "padding") && bo(t, {
      paddingLeft: t.padding,
      paddingRight: t.padding,
      paddingTop: t.padding,
      paddingBottom: t.padding
    }), bo(t, he2), c(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], function(n) {
      t[n] = Number(t[n]);
    }), b(t, "width") && (t._prevWidth = t.width), b(t, "height") && (t._prevHeight = t.height);
  }), r.edges().forEach(function(e) {
    var t = r.edge(e);
    b(t, "label") || (t.label = ""), bo(t, ue2);
  });
}
function pe2(r) {
  c(r.nodes(), function(e) {
    var t = r.node(e);
    b(t, "_prevWidth") ? t.width = t._prevWidth : delete t.width, b(t, "_prevHeight") ? t.height = t._prevHeight : delete t.height, delete t._prevWidth, delete t._prevHeight;
  });
}
function D(r, e) {
  var t = r.select("g." + e);
  return t.empty() && (t = r.append("g").attr("class", e)), t;
}
function ct(r, e, t) {
  const n = e.width, a = e.height, s = (n + a) * 0.9, i = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ], o = A2(r, s, s, i);
  return t.intersect = function(c2) {
    return T(t, i, c2);
  }, o;
}
function dt(r, e, t) {
  const a = e.height, s = a / 4, i = e.width + 2 * s, o = [
    { x: s, y: 0 },
    { x: i - s, y: 0 },
    { x: i, y: -a / 2 },
    { x: i - s, y: -a },
    { x: s, y: -a },
    { x: 0, y: -a / 2 }
  ], c2 = A2(r, i, a, o);
  return t.intersect = function(d) {
    return T(t, o, d);
  }, c2;
}
function ht(r, e, t) {
  const n = e.width, a = e.height, s = [
    { x: -a / 2, y: 0 },
    { x: n, y: 0 },
    { x: n, y: -a },
    { x: -a / 2, y: -a },
    { x: 0, y: -a / 2 }
  ], i = A2(r, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function ut(r, e, t) {
  const n = e.width, a = e.height, s = [
    { x: -2 * a / 6, y: 0 },
    { x: n - a / 6, y: 0 },
    { x: n + 2 * a / 6, y: -a },
    { x: a / 6, y: -a }
  ], i = A2(r, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function ft(r, e, t) {
  const n = e.width, a = e.height, s = [
    { x: 2 * a / 6, y: 0 },
    { x: n + a / 6, y: 0 },
    { x: n - 2 * a / 6, y: -a },
    { x: -a / 6, y: -a }
  ], i = A2(r, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function pt(r, e, t) {
  const n = e.width, a = e.height, s = [
    { x: -2 * a / 6, y: 0 },
    { x: n + 2 * a / 6, y: 0 },
    { x: n - a / 6, y: -a },
    { x: a / 6, y: -a }
  ], i = A2(r, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function vt(r, e, t) {
  const n = e.width, a = e.height, s = [
    { x: a / 6, y: 0 },
    { x: n - a / 6, y: 0 },
    { x: n + 2 * a / 6, y: -a },
    { x: -2 * a / 6, y: -a }
  ], i = A2(r, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function yt(r, e, t) {
  const n = e.width, a = e.height, s = [
    { x: 0, y: 0 },
    { x: n + a / 2, y: 0 },
    { x: n, y: -a / 2 },
    { x: n + a / 2, y: -a },
    { x: 0, y: -a }
  ], i = A2(r, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function gt(r, e, t) {
  const n = e.height, a = e.width + n / 4, s = r.insert("rect", ":first-child").attr("rx", n / 2).attr("ry", n / 2).attr("x", -a / 2).attr("y", -n / 2).attr("width", a).attr("height", n);
  return t.intersect = function(i) {
    return Z(t, i);
  }, s;
}
function wt(r, e, t) {
  const n = e.width, a = e.height, s = [
    { x: 0, y: 0 },
    { x: n, y: 0 },
    { x: n, y: -a },
    { x: 0, y: -a },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: n + 8, y: 0 },
    { x: n + 8, y: -a },
    { x: -8, y: -a },
    { x: -8, y: 0 }
  ], i = A2(r, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function mt(r, e, t) {
  const n = e.width, a = n / 2, s = a / (2.5 + n / 50), i = e.height + s, o = "M 0," + s + " a " + a + "," + s + " 0,0,0 " + n + " 0 a " + a + "," + s + " 0,0,0 " + -n + " 0 l 0," + i + " a " + a + "," + s + " 0,0,0 " + n + " 0 l 0," + -i, c2 = r.attr("label-offset-y", s).insert("path", ":first-child").attr("d", o).attr("transform", "translate(" + -n / 2 + "," + -(i / 2 + s) + ")");
  return t.intersect = function(d) {
    const l = Z(t, d), v = l.x - t.x;
    if (a != 0 && (Math.abs(v) < t.width / 2 || Math.abs(v) == t.width / 2 && Math.abs(l.y - t.y) > t.height / 2 - s)) {
      let h = s * s * (1 - v * v / (a * a));
      h != 0 && (h = Math.sqrt(h)), h = s - h, d.y - t.y > 0 && (h = -h), l.y += h;
    }
    return l;
  }, c2;
}
function ve(r) {
  r.shapes().question = ct, r.shapes().hexagon = dt, r.shapes().stadium = gt, r.shapes().subroutine = wt, r.shapes().cylinder = mt, r.shapes().rect_left_inv_arrow = ht, r.shapes().lean_right = ut, r.shapes().lean_left = ft, r.shapes().trapezoid = pt, r.shapes().inv_trapezoid = vt, r.shapes().rect_right_inv_arrow = yt;
}
function ye2(r) {
  r({ question: ct }), r({ hexagon: dt }), r({ stadium: gt }), r({ subroutine: wt }), r({ cylinder: mt }), r({ rect_left_inv_arrow: ht }), r({ lean_right: ut }), r({ lean_left: ft }), r({ trapezoid: pt }), r({ inv_trapezoid: vt }), r({ rect_right_inv_arrow: yt });
}
function A2(r, e, t, n) {
  return r.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(a) {
      return a.x + "," + a.y;
    }).join(" ")
  ).attr("transform", "translate(" + -e / 2 + "," + t / 2 + ")");
}
var ge = {
  addToRender: ve,
  addToRenderV2: ye2
};
var xt = {};
var we2 = function(r) {
  const e = Object.keys(r);
  for (const t of e)
    xt[t] = r[t];
};
var bt = function(r, e, t, n, a, s) {
  const i = n ? n.select(`[id="${t}"]`) : Ct(`[id="${t}"]`), o = a || document;
  Object.keys(r).forEach(function(d) {
    const l = r[d];
    let v = "default";
    l.classes.length > 0 && (v = l.classes.join(" "));
    const h = w0(l.styles);
    let u = l.text !== void 0 ? l.text : l.id, p;
    if (ia(Ft().flowchart.htmlLabels)) {
      const y = {
        label: u.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (k3) => `<i class='${k3.replace(":", " ")}'></i>`
        )
      };
      p = re(i, y).node(), p.parentNode.removeChild(p);
    } else {
      const y = o.createElementNS("http://www.w3.org/2000/svg", "text");
      y.setAttribute("style", h.labelStyle.replace("color:", "fill:"));
      const k3 = u.split(Bn.lineBreakRegex);
      for (const I of k3) {
        const E = o.createElementNS("http://www.w3.org/2000/svg", "tspan");
        E.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), E.setAttribute("dy", "1em"), E.setAttribute("x", "1"), E.textContent = I, y.appendChild(E);
      }
      p = y;
    }
    let g = 0, f = "";
    switch (l.type) {
      case "round":
        g = 5, f = "rect";
        break;
      case "square":
        f = "rect";
        break;
      case "diamond":
        f = "question";
        break;
      case "hexagon":
        f = "hexagon";
        break;
      case "odd":
        f = "rect_left_inv_arrow";
        break;
      case "lean_right":
        f = "lean_right";
        break;
      case "lean_left":
        f = "lean_left";
        break;
      case "trapezoid":
        f = "trapezoid";
        break;
      case "inv_trapezoid":
        f = "inv_trapezoid";
        break;
      case "odd_right":
        f = "rect_left_inv_arrow";
        break;
      case "circle":
        f = "circle";
        break;
      case "ellipse":
        f = "ellipse";
        break;
      case "stadium":
        f = "stadium";
        break;
      case "subroutine":
        f = "subroutine";
        break;
      case "cylinder":
        f = "cylinder";
        break;
      case "group":
        f = "rect";
        break;
      default:
        f = "rect";
    }
    k2.warn("Adding node", l.id, l.domId), e.setNode(s.db.lookUpDomId(l.id), {
      labelType: "svg",
      labelStyle: h.labelStyle,
      shape: f,
      label: p,
      rx: g,
      ry: g,
      class: v,
      style: h.style,
      id: s.db.lookUpDomId(l.id)
    });
  });
};
var kt = function(r, e, t) {
  let n = 0, a, s;
  if (r.defaultStyle !== void 0) {
    const i = w0(r.defaultStyle);
    a = i.style, s = i.labelStyle;
  }
  r.forEach(function(i) {
    n++;
    const o = "L-" + i.start + "-" + i.end, c2 = "LS-" + i.start, d = "LE-" + i.end, l = {};
    i.type === "arrow_open" ? l.arrowhead = "none" : l.arrowhead = "normal";
    let v = "", h = "";
    if (i.style !== void 0) {
      const u = w0(i.style);
      v = u.style, h = u.labelStyle;
    } else
      switch (i.stroke) {
        case "normal":
          v = "fill:none", a !== void 0 && (v = a), s !== void 0 && (h = s);
          break;
        case "dotted":
          v = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          v = " stroke-width: 3.5px;fill:none";
          break;
      }
    l.style = v, l.labelStyle = h, i.interpolate !== void 0 ? l.curve = C0(i.interpolate, mf) : r.defaultInterpolate !== void 0 ? l.curve = C0(r.defaultInterpolate, mf) : l.curve = C0(xt.curve, mf), i.text === void 0 ? i.style !== void 0 && (l.arrowheadStyle = "fill: #333") : (l.arrowheadStyle = "fill: #333", l.labelpos = "c", ia(Ft().flowchart.htmlLabels) ? (l.labelType = "html", l.label = `<span id="L-${o}" class="edgeLabel L-${c2}' L-${d}" style="${l.labelStyle}">${i.text.replace(
      /fa[blrs]?:fa-[\w-]+/g,
      (u) => `<i class='${u.replace(":", " ")}'></i>`
    )}</span>`) : (l.labelType = "text", l.label = i.text.replace(Bn.lineBreakRegex, `
`), i.style === void 0 && (l.style = l.style || "stroke: #333; stroke-width: 1.5px;fill:none"), l.labelStyle = l.labelStyle.replace("color:", "fill:"))), l.id = o, l.class = c2 + " " + d, l.minlen = i.length || 1, e.setEdge(t.db.lookUpDomId(i.start), t.db.lookUpDomId(i.end), l, n);
  });
};
var me = function(r, e) {
  return k2.info("Extracting classes"), e.db.getClasses();
};
var xe = function(r, e, t, n) {
  k2.info("Drawing flowchart");
  const { securityLevel: a, flowchart: s } = Ft();
  let i;
  a === "sandbox" && (i = Ct("#i" + e));
  const o = a === "sandbox" ? Ct(i.nodes()[0].contentDocument.body) : Ct("body"), c2 = a === "sandbox" ? i.nodes()[0].contentDocument : document;
  let d = n.db.getDirection();
  d === void 0 && (d = "TD");
  const l = s.nodeSpacing || 50, v = s.rankSpacing || 50, h = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: d,
    nodesep: l,
    ranksep: v,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let u;
  const p = n.db.getSubGraphs();
  for (let w = p.length - 1; w >= 0; w--)
    u = p[w], n.db.addVertex(u.id, u.title, "group", void 0, u.classes);
  const g = n.db.getVertices();
  k2.warn("Get vertices", g);
  const f = n.db.getEdges();
  let y = 0;
  for (y = p.length - 1; y >= 0; y--) {
    u = p[y], Y("cluster").append("text");
    for (let w = 0; w < u.nodes.length; w++)
      k2.warn(
        "Setting subgraph",
        u.nodes[w],
        n.db.lookUpDomId(u.nodes[w]),
        n.db.lookUpDomId(u.id)
      ), h.setParent(n.db.lookUpDomId(u.nodes[w]), n.db.lookUpDomId(u.id));
  }
  bt(g, h, e, o, c2, n), kt(f, h, n);
  const k3 = new de();
  ge.addToRender(k3), k3.arrows().none = function(b2, L, m, B) {
    const C = b2.append("marker").attr("id", L).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    te2(C, m[B + "Style"]);
  }, k3.arrows().normal = function(b2, L) {
    b2.append("marker").attr("id", L).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const I = o.select(`[id="${e}"]`), E = o.select("#" + e + " g");
  for (k3(E, h), E.selectAll("g.node").attr("title", function() {
    return n.db.getTooltip(this.id);
  }), n.db.indexNodes("subGraph" + y), y = 0; y < p.length; y++)
    if (u = p[y], u.title !== "undefined") {
      const w = c2.querySelectorAll(
        "#" + e + ' [id="' + n.db.lookUpDomId(u.id) + '"] rect'
      ), b2 = c2.querySelectorAll(
        "#" + e + ' [id="' + n.db.lookUpDomId(u.id) + '"]'
      ), L = w[0].x.baseVal.value, m = w[0].y.baseVal.value, B = w[0].width.baseVal.value, C = Ct(b2[0]).select(".label");
      C.attr("transform", `translate(${L + B / 2}, ${m + 14})`), C.attr("id", e + "Text");
      for (let W = 0; W < u.classes.length; W++)
        b2[0].classList.add(u.classes[W]);
    }
  if (!s.htmlLabels) {
    const w = c2.querySelectorAll('[id="' + e + '"] .edgeLabel .label');
    for (const b2 of w) {
      const L = b2.getBBox(), m = c2.createElementNS("http://www.w3.org/2000/svg", "rect");
      m.setAttribute("rx", 0), m.setAttribute("ry", 0), m.setAttribute("width", L.width), m.setAttribute("height", L.height), b2.insertBefore(m, b2.firstChild);
    }
  }
  Gg(h, I, s.diagramPadding, s.useMaxWidth), Object.keys(g).forEach(function(w) {
    const b2 = g[w];
    if (b2.link) {
      const L = o.select("#" + e + ' [id="' + n.db.lookUpDomId(w) + '"]');
      if (L) {
        const m = c2.createElementNS("http://www.w3.org/2000/svg", "a");
        m.setAttributeNS("http://www.w3.org/2000/svg", "class", b2.classes.join(" ")), m.setAttributeNS("http://www.w3.org/2000/svg", "href", b2.link), m.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), a === "sandbox" ? m.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : b2.linkTarget && m.setAttributeNS("http://www.w3.org/2000/svg", "target", b2.linkTarget);
        const B = L.insert(function() {
          return m;
        }, ":first-child"), G = L.select(".label-container");
        G && B.append(function() {
          return G.node();
        });
        const C = L.select(".label");
        C && B.append(function() {
          return C.node();
        });
      }
    }
  });
};
var be2 = {
  setConf: we2,
  addVertices: bt,
  addEdges: kt,
  getClasses: me,
  draw: xe
};
var Me = {
  parser: Jt,
  db: Qt,
  renderer: he,
  styles: ye,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, be2.setConf(r.flowchart), Qt.clear(), Qt.setGen("gen-1");
  }
};
export {
  Me as diagram
};
//# sourceMappingURL=flowDiagram-dbf2c5c9-YTXQGOF6.js.map
