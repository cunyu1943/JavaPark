import {
  gt
} from "./chunk-FIBEWFZ4.js";
import {
  A,
  Xt
} from "./chunk-4IBMGVCZ.js";
import {
  Bn,
  C0,
  Ct,
  Ft,
  Gg,
  I,
  It,
  Oi,
  Ue,
  ia,
  ja,
  k,
  ks,
  lh,
  mf,
  mt,
  w0
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/styles-cb6bcb55.js
function Y(e) {
  return typeof e == "string" ? new mt([document.querySelectorAll(e)], [document.documentElement]) : new mt([lh(e)], ks);
}
var Z = (e, l) => I.lang.round(It.parse(e)[l]);
var O = Z;
function pe(e, l) {
  return !!e.children(l).length;
}
function be(e) {
  return L(e.v) + ":" + L(e.w) + ":" + L(e.name);
}
var ee = /:/g;
function L(e) {
  return e ? String(e).replace(ee, "\\:") : "";
}
function te(e, l) {
  l && e.attr("style", l);
}
function ue(e, l, c) {
  l && e.attr("class", l).attr("class", c + " " + e.attr("class"));
}
function we(e, l) {
  var c = l.graph();
  if (Xt(c)) {
    var a = c.transition;
    if (ja(a))
      return a(e);
  }
  return e;
}
function re(e, l) {
  var c = e.append("foreignObject").attr("width", "100000"), a = c.append("xhtml:div");
  a.attr("xmlns", "http://www.w3.org/1999/xhtml");
  var i = l.label;
  switch (typeof i) {
    case "function":
      a.insert(i);
      break;
    case "object":
      a.insert(function() {
        return i;
      });
      break;
    default:
      a.html(i);
  }
  te(a, l.labelStyle), a.style("display", "inline-block"), a.style("white-space", "nowrap");
  var d = a.node().getBoundingClientRect();
  return c.attr("width", d.width).attr("height", d.height), c;
}
var G = {};
var le = function(e) {
  const l = Object.keys(e);
  for (const c of l)
    G[c] = e[c];
};
var q = function(e, l, c, a, i, d) {
  const u = a.select(`[id="${c}"]`);
  Object.keys(e).forEach(function(f) {
    const r = e[f];
    let g = "default";
    r.classes.length > 0 && (g = r.classes.join(" ")), g = g + " flowchart-label";
    const w = w0(r.styles);
    let t = r.text !== void 0 ? r.text : r.id, s;
    if (k.info("vertex", r, r.labelType), r.labelType === "markdown")
      k.info("vertex", r, r.labelType);
    else if (ia(Ft().flowchart.htmlLabels)) {
      const m = {
        label: t.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (k2) => `<i class='${k2.replace(":", " ")}'></i>`
        )
      };
      s = re(u, m).node(), s.parentNode.removeChild(s);
    } else {
      const m = i.createElementNS("http://www.w3.org/2000/svg", "text");
      m.setAttribute("style", w.labelStyle.replace("color:", "fill:"));
      const k2 = t.split(Bn.lineBreakRegex);
      for (const T of k2) {
        const S = i.createElementNS("http://www.w3.org/2000/svg", "tspan");
        S.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), S.setAttribute("dy", "1em"), S.setAttribute("x", "1"), S.textContent = T, m.appendChild(S);
      }
      s = m;
    }
    let p = 0, n = "";
    switch (r.type) {
      case "round":
        p = 5, n = "rect";
        break;
      case "square":
        n = "rect";
        break;
      case "diamond":
        n = "question";
        break;
      case "hexagon":
        n = "hexagon";
        break;
      case "odd":
        n = "rect_left_inv_arrow";
        break;
      case "lean_right":
        n = "lean_right";
        break;
      case "lean_left":
        n = "lean_left";
        break;
      case "trapezoid":
        n = "trapezoid";
        break;
      case "inv_trapezoid":
        n = "inv_trapezoid";
        break;
      case "odd_right":
        n = "rect_left_inv_arrow";
        break;
      case "circle":
        n = "circle";
        break;
      case "ellipse":
        n = "ellipse";
        break;
      case "stadium":
        n = "stadium";
        break;
      case "subroutine":
        n = "subroutine";
        break;
      case "cylinder":
        n = "cylinder";
        break;
      case "group":
        n = "rect";
        break;
      case "doublecircle":
        n = "doublecircle";
        break;
      default:
        n = "rect";
    }
    l.setNode(r.id, {
      labelStyle: w.labelStyle,
      shape: n,
      labelText: t,
      labelType: r.labelType,
      rx: p,
      ry: p,
      class: g,
      style: w.style,
      id: r.id,
      link: r.link,
      linkTarget: r.linkTarget,
      tooltip: d.db.getTooltip(r.id) || "",
      domId: d.db.lookUpDomId(r.id),
      haveCallback: r.haveCallback,
      width: r.type === "group" ? 500 : void 0,
      dir: r.dir,
      type: r.type,
      props: r.props,
      padding: Ft().flowchart.padding
    }), k.info("setNode", {
      labelStyle: w.labelStyle,
      labelType: r.labelType,
      shape: n,
      labelText: t,
      rx: p,
      ry: p,
      class: g,
      style: w.style,
      id: r.id,
      domId: d.db.lookUpDomId(r.id),
      width: r.type === "group" ? 500 : void 0,
      type: r.type,
      dir: r.dir,
      props: r.props,
      padding: Ft().flowchart.padding
    });
  });
};
var P = function(e, l, c) {
  k.info("abc78 edges = ", e);
  let a = 0, i = {}, d, u;
  if (e.defaultStyle !== void 0) {
    const o = w0(e.defaultStyle);
    d = o.style, u = o.labelStyle;
  }
  e.forEach(function(o) {
    a++;
    const f = "L-" + o.start + "-" + o.end;
    i[f] === void 0 ? (i[f] = 0, k.info("abc78 new entry", f, i[f])) : (i[f]++, k.info("abc78 new entry", f, i[f]));
    let r = f + "-" + i[f];
    k.info("abc78 new link id to be used is", f, r, i[f]);
    const g = "LS-" + o.start, w = "LE-" + o.end, t = { style: "", labelStyle: "" };
    switch (t.minlen = o.length || 1, o.type === "arrow_open" ? t.arrowhead = "none" : t.arrowhead = "normal", t.arrowTypeStart = "arrow_open", t.arrowTypeEnd = "arrow_open", o.type) {
      case "double_arrow_cross":
        t.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        t.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        t.arrowTypeStart = "arrow_point";
      case "arrow_point":
        t.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        t.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        t.arrowTypeEnd = "arrow_circle";
        break;
    }
    let s = "", p = "";
    switch (o.stroke) {
      case "normal":
        s = "fill:none;", d !== void 0 && (s = d), u !== void 0 && (p = u), t.thickness = "normal", t.pattern = "solid";
        break;
      case "dotted":
        t.thickness = "normal", t.pattern = "dotted", t.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        t.thickness = "thick", t.pattern = "solid", t.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        t.thickness = "invisible", t.pattern = "solid", t.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (o.style !== void 0) {
      const n = w0(o.style);
      s = n.style, p = n.labelStyle;
    }
    t.style = t.style += s, t.labelStyle = t.labelStyle += p, o.interpolate !== void 0 ? t.curve = C0(o.interpolate, mf) : e.defaultInterpolate !== void 0 ? t.curve = C0(e.defaultInterpolate, mf) : t.curve = C0(G.curve, mf), o.text === void 0 ? o.style !== void 0 && (t.arrowheadStyle = "fill: #333") : (t.arrowheadStyle = "fill: #333", t.labelpos = "c"), t.labelType = o.labelType, t.label = o.text.replace(Bn.lineBreakRegex, `
`), o.style === void 0 && (t.style = t.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), t.labelStyle = t.labelStyle.replace("color:", "fill:"), t.id = r, t.classes = "flowchart-link " + g + " " + w, l.setEdge(o.start, o.end, t, a);
  });
};
var ae = function(e, l) {
  return l.db.getClasses();
};
var ne = async function(e, l, c, a) {
  k.info("Drawing flowchart");
  let i = a.db.getDirection();
  i === void 0 && (i = "TD");
  const { securityLevel: d, flowchart: u } = Ft(), o = u.nodeSpacing || 50, f = u.rankSpacing || 50;
  let r;
  d === "sandbox" && (r = Ct("#i" + l));
  const g = d === "sandbox" ? Ct(r.nodes()[0].contentDocument.body) : Ct("body"), w = d === "sandbox" ? r.nodes()[0].contentDocument : document, t = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: i,
    nodesep: o,
    ranksep: f,
    marginx: 0,
    marginy: 0
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let s;
  const p = a.db.getSubGraphs();
  k.info("Subgraphs - ", p);
  for (let b = p.length - 1; b >= 0; b--)
    s = p[b], k.info("Subgraph - ", s), a.db.addVertex(
      s.id,
      { text: s.title, type: s.labelType },
      "group",
      void 0,
      s.classes,
      s.dir
    );
  const n = a.db.getVertices(), m = a.db.getEdges();
  k.info("Edges", m);
  let k2 = 0;
  for (k2 = p.length - 1; k2 >= 0; k2--) {
    s = p[k2], Y("cluster").append("text");
    for (let b = 0; b < s.nodes.length; b++)
      k.info("Setting up subgraphs", s.nodes[b], s.id), t.setParent(s.nodes[b], s.id);
  }
  q(n, t, l, g, w, a), P(m, t);
  const T = g.select(`[id="${l}"]`), S = g.select("#" + l + " g");
  if (await gt(S, t, ["point", "circle", "cross"], "flowchart", l), Oi.insertTitle(T, "flowchartTitleText", u.titleTopMargin, a.db.getDiagramTitle()), Gg(t, T, u.diagramPadding, u.useMaxWidth), a.db.indexNodes("subGraph" + k2), !u.htmlLabels) {
    const b = w.querySelectorAll('[id="' + l + '"] .edgeLabel .label');
    for (const x of b) {
      const v = x.getBBox(), h = w.createElementNS("http://www.w3.org/2000/svg", "rect");
      h.setAttribute("rx", 0), h.setAttribute("ry", 0), h.setAttribute("width", v.width), h.setAttribute("height", v.height), x.insertBefore(h, x.firstChild);
    }
  }
  Object.keys(n).forEach(function(b) {
    const x = n[b];
    if (x.link) {
      const v = Ct("#" + l + ' [id="' + b + '"]');
      if (v) {
        const h = w.createElementNS("http://www.w3.org/2000/svg", "a");
        h.setAttributeNS("http://www.w3.org/2000/svg", "class", x.classes.join(" ")), h.setAttributeNS("http://www.w3.org/2000/svg", "href", x.link), h.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), d === "sandbox" ? h.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : x.linkTarget && h.setAttributeNS("http://www.w3.org/2000/svg", "target", x.linkTarget);
        const N = v.insert(function() {
          return h;
        }, ":first-child"), B = v.select(".label-container");
        B && N.append(function() {
          return B.node();
        });
        const I2 = v.select(".label");
        I2 && N.append(function() {
          return I2.node();
        });
      }
    }
  });
};
var he = {
  setConf: le,
  addVertices: q,
  addEdges: P,
  getClasses: ae,
  draw: ne
};
var oe = (e, l) => {
  const c = O, a = c(e, "r"), i = c(e, "g"), d = c(e, "b");
  return Ue(a, i, d, l);
};
var se = (e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${oe(e.edgeLabelBackground, 0.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;
var ye = se;

export {
  Y,
  pe,
  be,
  te,
  ue,
  we,
  re,
  he,
  ye
};
//# sourceMappingURL=chunk-RZPLYSGF.js.map
