import {
  It,
  Lt,
  xt
} from "./chunk-FGE6AHHT.js";
import {
  gt
} from "./chunk-FIBEWFZ4.js";
import "./chunk-JTWDY2BT.js";
import "./chunk-HIF4XICZ.js";
import "./chunk-UFBL5X6U.js";
import {
  A
} from "./chunk-4IBMGVCZ.js";
import "./chunk-4MHZVYT6.js";
import "./chunk-OS2TPKC3.js";
import "./chunk-OTN43OJN.js";
import {
  Bn,
  C0,
  Ct,
  Ft,
  Gg,
  Oi,
  k,
  mf,
  w0
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/classDiagram-v2-b0bf8ef8.js
var S = (o) => Bn.sanitizeText(o, Ft());
var v = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
var q = function(o, t, p, n) {
  const e = Object.keys(o);
  k.info("keys:", e), k.info(o), e.forEach(function(s) {
    var y, d;
    const l = o[s], i = {
      shape: "rect",
      id: l.id,
      domId: l.domId,
      labelText: S(l.id),
      labelStyle: "",
      style: "fill: none; stroke: black",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = Ft().flowchart) == null ? void 0 : y.padding) ?? ((d = Ft().class) == null ? void 0 : d.padding)
    };
    t.setNode(l.id, i), I(l.classes, t, p, n, l.id), k.info("setNode", i);
  });
};
var I = function(o, t, p, n, e) {
  const s = Object.keys(o);
  k.info("keys:", s), k.info(o), s.filter((l) => o[l].parent == e).forEach(function(l) {
    var u, m;
    const a = o[l], i = a.cssClasses.join(" "), y = { labelStyle: "", style: "" }, d = a.label ?? a.id, f = 0, h = "class_box", b = {
      labelStyle: y.labelStyle,
      shape: h,
      labelText: S(d),
      classData: a,
      rx: f,
      ry: f,
      class: i,
      style: y.style,
      id: a.id,
      domId: a.domId,
      tooltip: n.db.getTooltip(a.id, e) || "",
      haveCallback: a.haveCallback,
      link: a.link,
      width: a.type === "group" ? 500 : void 0,
      type: a.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((u = Ft().flowchart) == null ? void 0 : u.padding) ?? ((m = Ft().class) == null ? void 0 : m.padding)
    };
    t.setNode(a.id, b), e && t.setParent(a.id, e), k.info("setNode", b);
  });
};
var F = function(o, t, p, n) {
  k.info(o), o.forEach(function(e, s) {
    var m, x;
    const l = e, a = "", i = { labelStyle: "", style: "" }, y = l.text, d = 0, f = "note", h = {
      labelStyle: i.labelStyle,
      shape: f,
      labelText: S(y),
      noteData: l,
      rx: d,
      ry: d,
      class: a,
      style: i.style,
      id: l.id,
      domId: l.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((m = Ft().flowchart) == null ? void 0 : m.padding) ?? ((x = Ft().class) == null ? void 0 : x.padding)
    };
    if (t.setNode(l.id, h), k.info("setNode", h), !l.class || !(l.class in n))
      return;
    const b = p + s, u = {
      id: `edgeNote${b}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: C0(v.curve, mf)
    };
    t.setEdge(l.id, l.class, u, b);
  });
};
var H = function(o, t) {
  const p = Ft().flowchart;
  let n = 0;
  o.forEach(function(e) {
    var l;
    n++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + n,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: D(e.relation.type1),
      arrowTypeEnd: D(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: C0(p == null ? void 0 : p.curve, mf)
    };
    if (k.info(s, e), e.style !== void 0) {
      const a = w0(e.style);
      s.style = a.style, s.labelStyle = a.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((l = Ft().flowchart) == null ? void 0 : l.htmlLabels) ?? Ft().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(Bn.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), t.setEdge(e.id1, e.id2, s, n);
  });
};
var V = function(o) {
  v = {
    ...v,
    ...o
  };
};
var W = async function(o, t, p, n) {
  k.info("Drawing class - ", t);
  const e = Ft().flowchart ?? Ft().class, s = Ft().securityLevel;
  k.info("config:", e);
  const l = (e == null ? void 0 : e.nodeSpacing) ?? 50, a = (e == null ? void 0 : e.rankSpacing) ?? 50, i = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: n.db.getDirection(),
    nodesep: l,
    ranksep: a,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), y = n.db.getNamespaces(), d = n.db.getClasses(), f = n.db.getRelations(), h = n.db.getNotes();
  k.info(f), q(y, i, t, n), I(d, i, t, n), H(f, i), F(h, i, f.length + 1, d);
  let b;
  s === "sandbox" && (b = Ct("#i" + t));
  const u = s === "sandbox" ? Ct(b.nodes()[0].contentDocument.body) : Ct("body"), m = u.select(`[id="${t}"]`), x = u.select("#" + t + " g");
  if (await gt(
    x,
    i,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    t
  ), Oi.insertTitle(m, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, n.db.getDiagramTitle()), Gg(i, m, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const T = s === "sandbox" ? b.nodes()[0].contentDocument : document, M = T.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
    for (const w of M) {
      const L = w.getBBox(), g = T.createElementNS("http://www.w3.org/2000/svg", "rect");
      g.setAttribute("rx", 0), g.setAttribute("ry", 0), g.setAttribute("width", L.width), g.setAttribute("height", L.height), w.insertBefore(g, w.firstChild);
    }
  }
};
function D(o) {
  let t;
  switch (o) {
    case 0:
      t = "aggregation";
      break;
    case 1:
      t = "extension";
      break;
    case 2:
      t = "composition";
      break;
    case 3:
      t = "dependency";
      break;
    case 4:
      t = "lollipop";
      break;
    default:
      t = "none";
  }
  return t;
}
var J = {
  setConf: V,
  draw: W
};
var se = {
  parser: Lt,
  db: It,
  renderer: J,
  styles: xt,
  init: (o) => {
    o.class || (o.class = {}), o.class.arrowMarkerAbsolute = o.arrowMarkerAbsolute, It.clear();
  }
};
export {
  se as diagram
};
//# sourceMappingURL=classDiagram-v2-b0bf8ef8-73YCHFBI.js.map
