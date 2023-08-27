import {
  Ie,
  Ne,
  Re
} from "./chunk-6QFQKSWR.js";
import {
  A,
  zs
} from "./chunk-4IBMGVCZ.js";
import {
  S
} from "./chunk-4MHZVYT6.js";
import "./chunk-OS2TPKC3.js";
import "./chunk-OTN43OJN.js";
import {
  Bn,
  Cf,
  Ct,
  Fa,
  Ft,
  Oi,
  k
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/stateDiagram-949ae5f7.js
var L = {};
var $ = (e, i) => {
  L[e] = i;
};
var v = (e) => L[e];
var P = () => Object.keys(L);
var I = () => P().length;
var _ = {
  get: v,
  set: $,
  keys: P,
  size: I
};
var j = (e) => e.append("circle").attr("class", "start-state").attr("r", Ft().state.sizeUnit).attr("cx", Ft().state.padding + Ft().state.sizeUnit).attr("cy", Ft().state.padding + Ft().state.sizeUnit);
var q = (e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", Ft().state.textHeight).attr("class", "divider").attr("x2", Ft().state.textHeight * 2).attr("y1", 0).attr("y2", 0);
var Z = (e, i) => {
  const o = e.append("text").attr("x", 2 * Ft().state.padding).attr("y", Ft().state.textHeight + 2 * Ft().state.padding).attr("font-size", Ft().state.fontSize).attr("class", "state-title").text(i.id), d = o.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", Ft().state.padding).attr("y", Ft().state.padding).attr("width", d.width + 2 * Ft().state.padding).attr("height", d.height + 2 * Ft().state.padding).attr("rx", Ft().state.radius), o;
};
var K = (e, i) => {
  const o = function(l, m, w) {
    const k2 = l.append("tspan").attr("x", 2 * Ft().state.padding).text(m);
    w || k2.attr("dy", Ft().state.textHeight);
  }, s = e.append("text").attr("x", 2 * Ft().state.padding).attr("y", Ft().state.textHeight + 1.3 * Ft().state.padding).attr("font-size", Ft().state.fontSize).attr("class", "state-title").text(i.descriptions[0]).node().getBBox(), g = s.height, p = e.append("text").attr("x", Ft().state.padding).attr(
    "y",
    g + Ft().state.padding * 0.4 + Ft().state.dividerMargin + Ft().state.textHeight
  ).attr("class", "state-description");
  let a = true, r = true;
  i.descriptions.forEach(function(l) {
    a || (o(p, l, r), r = false), a = false;
  });
  const y = e.append("line").attr("x1", Ft().state.padding).attr("y1", Ft().state.padding + g + Ft().state.dividerMargin / 2).attr("y2", Ft().state.padding + g + Ft().state.dividerMargin / 2).attr("class", "descr-divider"), x = p.node().getBBox(), c = Math.max(x.width, s.width);
  return y.attr("x2", c + 3 * Ft().state.padding), e.insert("rect", ":first-child").attr("x", Ft().state.padding).attr("y", Ft().state.padding).attr("width", c + 2 * Ft().state.padding).attr("height", x.height + g + 2 * Ft().state.padding).attr("rx", Ft().state.radius), e;
};
var Q = (e, i, o) => {
  const d = Ft().state.padding, s = 2 * Ft().state.padding, g = e.node().getBBox(), p = g.width, a = g.x, r = e.append("text").attr("x", 0).attr("y", Ft().state.titleShift).attr("font-size", Ft().state.fontSize).attr("class", "state-title").text(i.id), x = r.node().getBBox().width + s;
  let c = Math.max(x, p);
  c === p && (c = c + s);
  let l;
  const m = e.node().getBBox();
  i.doc, l = a - d, x > p && (l = (p - c) / 2 + d), Math.abs(a - m.x) < d && x > p && (l = a - (x - p) / 2);
  const w = 1 - Ft().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", l).attr("y", w).attr("class", o ? "alt-composit" : "composit").attr("width", c).attr(
    "height",
    m.height + Ft().state.textHeight + Ft().state.titleShift + 1
  ).attr("rx", "0"), r.attr("x", l + d), x <= p && r.attr("x", a + (c - s) / 2 - x / 2 + d), e.insert("rect", ":first-child").attr("x", l).attr(
    "y",
    Ft().state.titleShift - Ft().state.textHeight - Ft().state.padding
  ).attr("width", c).attr("height", Ft().state.textHeight * 3).attr("rx", Ft().state.radius), e.insert("rect", ":first-child").attr("x", l).attr(
    "y",
    Ft().state.titleShift - Ft().state.textHeight - Ft().state.padding
  ).attr("width", c).attr("height", m.height + 3 + 2 * Ft().state.textHeight).attr("rx", Ft().state.radius), e;
};
var V = (e) => (e.append("circle").attr("class", "end-state-outer").attr("r", Ft().state.sizeUnit + Ft().state.miniPadding).attr(
  "cx",
  Ft().state.padding + Ft().state.sizeUnit + Ft().state.miniPadding
).attr(
  "cy",
  Ft().state.padding + Ft().state.sizeUnit + Ft().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", Ft().state.sizeUnit).attr("cx", Ft().state.padding + Ft().state.sizeUnit + 2).attr("cy", Ft().state.padding + Ft().state.sizeUnit + 2));
var D = (e, i) => {
  let o = Ft().state.forkWidth, d = Ft().state.forkHeight;
  if (i.parentId) {
    let s = o;
    o = d, d = s;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", o).attr("height", d).attr("x", Ft().state.padding).attr("y", Ft().state.padding);
};
var tt = (e, i, o, d) => {
  let s = 0;
  const g = d.append("text");
  g.style("text-anchor", "start"), g.attr("class", "noteText");
  let p = e.replace(/\r\n/g, "<br/>");
  p = p.replace(/\n/g, "<br/>");
  const a = p.split(Bn.lineBreakRegex);
  let r = 1.25 * Ft().state.noteMargin;
  for (const y of a) {
    const x = y.trim();
    if (x.length > 0) {
      const c = g.append("tspan");
      if (c.text(x), r === 0) {
        const l = c.node().getBBox();
        r += l.height;
      }
      s += r, c.attr("x", i + Ft().state.noteMargin), c.attr("y", o + s + 1.25 * Ft().state.noteMargin);
    }
  }
  return { textWidth: g.node().getBBox().width, textHeight: s };
};
var et = (e, i) => {
  i.attr("class", "state-note");
  const o = i.append("rect").attr("x", 0).attr("y", Ft().state.padding), d = i.append("g"), { textWidth: s, textHeight: g } = tt(e, 0, 0, d);
  return o.attr("height", g + 2 * Ft().state.noteMargin), o.attr("width", s + Ft().state.noteMargin * 2), o;
};
var G = function(e, i) {
  const o = i.id, d = {
    id: o,
    label: i.id,
    width: 0,
    height: 0
  }, s = e.append("g").attr("id", o).attr("class", "stateGroup");
  i.type === "start" && j(s), i.type === "end" && V(s), (i.type === "fork" || i.type === "join") && D(s, i), i.type === "note" && et(i.note.text, s), i.type === "divider" && q(s), i.type === "default" && i.descriptions.length === 0 && Z(s, i), i.type === "default" && i.descriptions.length > 0 && K(s, i);
  const g = s.node().getBBox();
  return d.width = g.width + 2 * Ft().state.padding, d.height = g.height + 2 * Ft().state.padding, _.set(o, d), d;
};
var A2 = 0;
var at = function(e, i, o) {
  const d = function(r) {
    switch (r) {
      case Ne.relationType.AGGREGATION:
        return "aggregation";
      case Ne.relationType.EXTENSION:
        return "extension";
      case Ne.relationType.COMPOSITION:
        return "composition";
      case Ne.relationType.DEPENDENCY:
        return "dependency";
    }
  };
  i.points = i.points.filter((r) => !Number.isNaN(r.y));
  const s = i.points, g = S().x(function(r) {
    return r.x;
  }).y(function(r) {
    return r.y;
  }).curve(Cf), p = e.append("path").attr("d", g(s)).attr("id", "edge" + A2).attr("class", "transition");
  let a = "";
  if (Ft().state.arrowMarkerAbsolute && (a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, a = a.replace(/\(/g, "\\("), a = a.replace(/\)/g, "\\)")), p.attr(
    "marker-end",
    "url(" + a + "#" + d(Ne.relationType.DEPENDENCY) + "End)"
  ), o.title !== void 0) {
    const r = e.append("g").attr("class", "stateLabel"), { x: y, y: x } = Oi.calcLabelPosition(i.points), c = Bn.getRows(o.title);
    let l = 0;
    const m = [];
    let w = 0, k2 = 0;
    for (let u = 0; u <= c.length; u++) {
      const h = r.append("text").attr("text-anchor", "middle").text(c[u]).attr("x", y).attr("y", x + l), f = h.node().getBBox();
      w = Math.max(w, f.width), k2 = Math.min(k2, f.x), k.info(f.x, y, x + l), l === 0 && (l = h.node().getBBox().height, k.info("Title height", l, x)), m.push(h);
    }
    let E = l * c.length;
    if (c.length > 1) {
      const u = (c.length - 1) * l * 0.5;
      m.forEach((h, f) => h.attr("y", x + f * l - u)), E = l * c.length;
    }
    const n = r.node().getBBox();
    r.insert("rect", ":first-child").attr("class", "box").attr("x", y - w / 2 - Ft().state.padding / 2).attr("y", x - E / 2 - Ft().state.padding / 2 - 3.5).attr("width", w + Ft().state.padding).attr("height", E + Ft().state.padding), k.info(n);
  }
  A2++;
};
var B;
var z = {};
var it = function() {
};
var nt = function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
var st = function(e, i, o, d) {
  B = Ft().state;
  const s = Ft().securityLevel;
  let g;
  s === "sandbox" && (g = Ct("#i" + i));
  const p = s === "sandbox" ? Ct(g.nodes()[0].contentDocument.body) : Ct("body"), a = s === "sandbox" ? g.nodes()[0].contentDocument : document;
  k.debug("Rendering diagram " + e);
  const r = p.select(`[id='${i}']`);
  nt(r);
  const y = d.db.getRootDoc();
  W(y, r, void 0, false, p, a, d);
  const x = B.padding, c = r.node().getBBox(), l = c.width + x * 2, m = c.height + x * 2, w = l * 1.75;
  Fa(r, m, w, B.useMaxWidth), r.attr(
    "viewBox",
    `${c.x - B.padding}  ${c.y - B.padding} ` + l + " " + m
  );
};
var rt = (e) => e ? e.length * B.fontSizeFactor : 1;
var W = (e, i, o, d, s, g, p) => {
  const a = new A({
    compound: true,
    multigraph: true
  });
  let r, y = true;
  for (r = 0; r < e.length; r++)
    if (e[r].stmt === "relation") {
      y = false;
      break;
    }
  o ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: y ? 1 : B.edgeLengthFactor,
    nodeSep: y ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: y ? 1 : B.edgeLengthFactor,
    nodeSep: y ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  }), p.db.extract(e);
  const x = p.db.getStates(), c = p.db.getRelations(), l = Object.keys(x);
  for (const n of l) {
    const u = x[n];
    o && (u.parentId = o);
    let h;
    if (u.doc) {
      let f = i.append("g").attr("id", u.id).attr("class", "stateGroup");
      h = W(u.doc, f, u.id, !d, s, g, p);
      {
        f = Q(f, u, d);
        let S2 = f.node().getBBox();
        h.width = S2.width, h.height = S2.height + B.padding / 2, z[u.id] = { y: B.compositTitleSize };
      }
    } else
      h = G(i, u);
    if (u.note) {
      const f = {
        descriptions: [],
        id: u.id + "-note",
        note: u.note,
        type: "note"
      }, S2 = G(i, f);
      u.note.position === "left of" ? (a.setNode(h.id + "-note", S2), a.setNode(h.id, h)) : (a.setNode(h.id, h), a.setNode(h.id + "-note", S2)), a.setParent(h.id, h.id + "-group"), a.setParent(h.id + "-note", h.id + "-group");
    } else
      a.setNode(h.id, h);
  }
  k.debug("Count=", a.nodeCount(), a);
  let m = 0;
  c.forEach(function(n) {
    m++, k.debug("Setting edge", n), a.setEdge(
      n.id1,
      n.id2,
      {
        relation: n,
        width: rt(n.title),
        height: B.labelHeight * Bn.getRows(n.title).length,
        labelpos: "c"
      },
      "id" + m
    );
  }), zs(a), k.debug("Graph after layout", a.nodes());
  const w = i.node();
  a.nodes().forEach(function(n) {
    n !== void 0 && a.node(n) !== void 0 ? (k.warn("Node " + n + ": " + JSON.stringify(a.node(n))), s.select("#" + w.id + " #" + n).attr(
      "transform",
      "translate(" + (a.node(n).x - a.node(n).width / 2) + "," + (a.node(n).y + (z[n] ? z[n].y : 0) - a.node(n).height / 2) + " )"
    ), s.select("#" + w.id + " #" + n).attr("data-x-shift", a.node(n).x - a.node(n).width / 2), g.querySelectorAll("#" + w.id + " #" + n + " .divider").forEach((h) => {
      const f = h.parentElement;
      let S2 = 0, M = 0;
      f && (f.parentElement && (S2 = f.parentElement.getBBox().width), M = parseInt(f.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), h.setAttribute("x1", 0 - M + 8), h.setAttribute("x2", S2 - M - 8);
    })) : k.debug("No Node " + n + ": " + JSON.stringify(a.node(n)));
  });
  let k2 = w.getBBox();
  a.edges().forEach(function(n) {
    n !== void 0 && a.edge(n) !== void 0 && (k.debug("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(a.edge(n))), at(i, a.edge(n), a.edge(n).relation));
  }), k2 = w.getBBox();
  const E = {
    id: o || "root",
    label: o || "root",
    width: 0,
    height: 0
  };
  return E.width = k2.width + 2 * B.padding, E.height = k2.height + 2 * B.padding, k.debug("Doc rendered", E, a), E;
};
var ot = {
  setConf: it,
  draw: st
};
var xt = {
  parser: Ie,
  db: Ne,
  renderer: ot,
  styles: Re,
  init: (e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute, Ne.clear();
  }
};
export {
  xt as diagram
};
//# sourceMappingURL=stateDiagram-949ae5f7-2FUCPH55.js.map
