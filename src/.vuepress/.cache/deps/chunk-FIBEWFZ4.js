import {
  Et,
  I,
  Pt,
  ar,
  er,
  ir,
  lr,
  nr,
  rr,
  sr,
  tr,
  v
} from "./chunk-JTWDY2BT.js";
import {
  Rr
} from "./chunk-HIF4XICZ.js";
import {
  A,
  dn,
  x,
  y,
  zs
} from "./chunk-4IBMGVCZ.js";
import {
  Ct,
  Ft,
  ia,
  k
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/index-c821dd4c.js
var K = 4;
function Q(e) {
  return dn(e, K);
}
function y2(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: Z(e),
    edges: I2(e)
  };
  return x(e.graph()) || (t.value = Q(e.graph())), t;
}
function Z(e) {
  return y(e.nodes(), function(t) {
    var n = e.node(t), r = e.parent(t), s = { v: t };
    return x(n) || (s.value = n), x(r) || (s.parent = r), s;
  });
}
function I2(e) {
  return y(e.edges(), function(t) {
    var n = e.edge(t), r = { v: t.v, w: t.w };
    return x(t.name) || (r.name = t.name), x(n) || (r.value = n), r;
  });
}
var f = {};
var x2 = {};
var T = {};
var tt = () => {
  x2 = {}, T = {}, f = {};
};
var S = (e, t) => (k.trace("In isDecendant", t, " ", e, " = ", x2[t].includes(e)), !!x2[t].includes(e));
var et = (e, t) => (k.info("Decendants of ", t, " is ", x2[t]), k.info("Edge is ", e), e.v === t || e.w === t ? false : x2[t] ? x2[t].includes(e.v) || S(e.v, t) || S(e.w, t) || x2[t].includes(e.w) : (k.debug("Tilt, ", t, ",not in decendants"), false));
var J = (e, t, n, r) => {
  k.warn(
    "Copying children of ",
    e,
    "root",
    r,
    "data",
    t.node(e),
    r
  );
  const s = t.children(e) || [];
  e !== r && s.push(e), k.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((a) => {
    if (t.children(a).length > 0)
      J(a, t, n, r);
    else {
      const u = t.node(a);
      k.info("cp ", a, " to ", r, " with parent ", e), n.setNode(a, u), r !== t.parent(a) && (k.warn("Setting parent", a, t.parent(a)), n.setParent(a, t.parent(a))), e !== r && a !== e ? (k.debug("Setting parent", a, e), n.setParent(a, e)) : (k.info("In copy ", e, "root", r, "data", t.node(e), r), k.debug(
        "Not Setting parent for node=",
        a,
        "cluster!==rootId",
        e !== r,
        "node!==clusterId",
        a !== e
      ));
      const l = t.edges(a);
      k.debug("Copying Edges", l), l.forEach((d) => {
        k.info("Edge", d);
        const w = t.edge(d.v, d.w, d.name);
        k.info("Edge data", w, r);
        try {
          et(d, r) ? (k.info("Copying as ", d.v, d.w, w, d.name), n.setEdge(d.v, d.w, w, d.name), k.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : k.info(
            "Skipping copy of edge ",
            d.v,
            "-->",
            d.w,
            " rootId: ",
            r,
            " clusterId:",
            e
          );
        } catch (g) {
          k.error(g);
        }
      });
    }
    k.debug("Removing node", a), t.removeNode(a);
  });
};
var p = (e, t) => {
  const n = t.children(e);
  let r = [...n];
  for (const s of n)
    T[s] = e, r = [...r, ...p(s, t)];
  return r;
};
var b = (e, t) => {
  k.trace("Searching", e);
  const n = t.children(e);
  if (k.trace("Searching children of id ", e, n), n.length < 1)
    return k.trace("This is a valid node", e), e;
  for (const r of n) {
    const s = b(r, t);
    if (s)
      return k.trace("Found replacement for", e, " => ", s), s;
  }
};
var v2 = (e) => !f[e] || !f[e].externalConnections ? e : f[e] ? f[e].id : e;
var nt = (e, t) => {
  if (!e || t > 10) {
    k.debug("Opting out, no graph ");
    return;
  } else
    k.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (k.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      b(n, e)
    ), x2[n] = p(n, e), f[n] = { id: b(n, e), clusterData: e.node(n) });
  }), e.nodes().forEach(function(n) {
    const r = e.children(n), s = e.edges();
    r.length > 0 ? (k.debug("Cluster identified", n, x2), s.forEach((a) => {
      if (a.v !== n && a.w !== n) {
        const u = S(a.v, n), l = S(a.w, n);
        u ^ l && (k.warn("Edge: ", a, " leaves cluster ", n), k.warn("Decendants of XXX ", n, ": ", x2[n]), f[n].externalConnections = true);
      }
    })) : k.debug("Not a cluster ", n, x2);
  }), e.edges().forEach(function(n) {
    const r = e.edge(n);
    k.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), k.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let s = n.v, a = n.w;
    if (k.warn(
      "Fix XXX",
      f,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      f[n.v],
      " --- ",
      f[n.w]
    ), f[n.v] && f[n.w] && f[n.v] === f[n.w]) {
      k.warn("Fixing and trixing link to self - removing XXX", n.v, n.w, n.name), k.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = v2(n.v), a = v2(n.w), e.removeEdge(n.v, n.w, n.name);
      const u = n.w + "---" + n.v;
      e.setNode(u, {
        domId: u,
        id: u,
        labelStyle: "",
        labelText: r.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const l = JSON.parse(JSON.stringify(r)), d = JSON.parse(JSON.stringify(r));
      l.label = "", l.arrowTypeEnd = "none", d.label = "", l.fromCluster = n.v, d.toCluster = n.v, e.setEdge(s, u, l, n.name + "-cyclic-special"), e.setEdge(u, a, d, n.name + "-cyclic-special");
    } else
      (f[n.v] || f[n.w]) && (k.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = v2(n.v), a = v2(n.w), e.removeEdge(n.v, n.w, n.name), s !== n.v && (r.fromCluster = n.v), a !== n.w && (r.toCluster = n.w), k.warn("Fix Replacing with XXX", s, a, n.name), e.setEdge(s, a, r, n.name));
  }), k.warn("Adjusted Graph", y2(e)), R(e, 0), k.trace(f);
};
var R = (e, t) => {
  if (k.warn("extractor - ", t, y2(e), e.children("D")), t > 10) {
    k.error("Bailing out");
    return;
  }
  let n = e.nodes(), r = false;
  for (const s of n) {
    const a = e.children(s);
    r = r || a.length > 0;
  }
  if (!r) {
    k.debug("Done, no node has children", e.nodes());
    return;
  }
  k.debug("Nodes = ", n, t);
  for (const s of n)
    if (k.debug(
      "Extracting node",
      s,
      f,
      f[s] && !f[s].externalConnections,
      !e.parent(s),
      e.node(s),
      e.children("D"),
      " Depth ",
      t
    ), !f[s])
      k.debug("Not a cluster", s, t);
    else if (!f[s].externalConnections && // !graph.parent(node) &&
    e.children(s) && e.children(s).length > 0) {
      k.warn(
        "Cluster without external connections, without a parent and with children",
        s,
        t
      );
      let u = e.graph().rankdir === "TB" ? "LR" : "TB";
      f[s] && f[s].clusterData && f[s].clusterData.dir && (u = f[s].clusterData.dir, k.warn("Fixing dir", f[s].clusterData.dir, u));
      const l = new A({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: u,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      k.warn("Old graph before copy", y2(e)), J(s, e, l, s), e.setNode(s, {
        clusterNode: true,
        id: s,
        clusterData: f[s].clusterData,
        labelText: f[s].labelText,
        graph: l
      }), k.warn("New graph after copy node: (", s, ")", y2(l)), k.debug("Old graph after copy", y2(e));
    } else
      k.warn(
        "Cluster ** ",
        s,
        " **not meeting the criteria !externalConnections:",
        !f[s].externalConnections,
        " no parent: ",
        !e.parent(s),
        " children ",
        e.children(s) && e.children(s).length > 0,
        e.children("D"),
        t
      ), k.debug(f);
  n = e.nodes(), k.warn("New list of nodes", n);
  for (const s of n) {
    const a = e.node(s);
    k.warn(" Now next level", s, a), a.clusterNode && R(a.graph, t + 1);
  }
};
var P = (e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign(t);
  return t.forEach((r) => {
    const s = e.children(r), a = P(e, s);
    n = [...n, ...a];
  }), n;
};
var it = (e) => P(e, e.children());
var st = (e, t) => {
  k.info("Creating subgraph rect for ", t.id, t);
  const n = e.insert("g").attr("class", "cluster" + (t.class ? " " + t.class : "")).attr("id", t.id), r = n.insert("rect", ":first-child"), s = ia(Ft().flowchart.htmlLabels), a = n.insert("g").attr("class", "cluster-label"), u = t.labelType === "markdown" ? Rr(a, t.labelText, { style: t.labelStyle, useHtmlLabels: s }) : a.node().appendChild(I(t.labelText, t.labelStyle, void 0, true));
  let l = u.getBBox();
  if (ia(Ft().flowchart.htmlLabels)) {
    const o = u.children[0], h = Ct(u);
    l = o.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  }
  const d = 0 * t.padding, w = d / 2, g = t.width <= l.width + d ? l.width + d : t.width;
  t.width <= l.width + d ? t.diff = (l.width - t.width) / 2 - t.padding / 2 : t.diff = -t.padding / 2, k.trace("Data ", t, JSON.stringify(t)), r.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - g / 2).attr("y", t.y - t.height / 2 - w).attr("width", g).attr("height", t.height + d), s ? a.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    "translate(" + (t.x - l.width / 2) + ", " + (t.y - t.height / 2) + ")"
  ) : a.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    "translate(" + t.x + ", " + (t.y - t.height / 2) + ")"
  );
  const c = r.node().getBBox();
  return t.width = c.width, t.height = c.height, t.intersect = function(o) {
    return Et(t, o);
  }, n;
};
var rt = (e, t) => {
  const n = e.insert("g").attr("class", "note-cluster").attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, a = s / 2;
  r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const u = r.node().getBBox();
  return t.width = u.width, t.height = u.height, t.intersect = function(l) {
    return Et(t, l);
  }, n;
};
var at = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = n.insert("g").attr("class", "cluster-label"), a = n.append("rect"), u = s.node().appendChild(I(t.labelText, t.labelStyle, void 0, true));
  let l = u.getBBox();
  if (ia(Ft().flowchart.htmlLabels)) {
    const o = u.children[0], h = Ct(u);
    l = o.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  }
  l = u.getBBox();
  const d = 0 * t.padding, w = d / 2, g = t.width <= l.width + t.padding ? l.width + t.padding : t.width;
  t.width <= l.width + t.padding ? t.diff = (l.width + t.padding * 0 - t.width) / 2 : t.diff = -t.padding / 2, r.attr("class", "outer").attr("x", t.x - g / 2 - w).attr("y", t.y - t.height / 2 - w).attr("width", g + d).attr("height", t.height + d), a.attr("class", "inner").attr("x", t.x - g / 2 - w).attr("y", t.y - t.height / 2 - w + l.height - 1).attr("width", g + d).attr("height", t.height + d - l.height - 3), s.attr(
    "transform",
    "translate(" + (t.x - l.width / 2) + ", " + (t.y - t.height / 2 - t.padding / 3 + (ia(Ft().flowchart.htmlLabels) ? 5 : 3)) + ")"
  );
  const c = r.node().getBBox();
  return t.height = c.height, t.intersect = function(o) {
    return Et(t, o);
  }, n;
};
var ct = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, a = s / 2;
  r.attr("class", "divider").attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2).attr("width", t.width + s).attr("height", t.height + s);
  const u = r.node().getBBox();
  return t.width = u.width, t.height = u.height, t.diff = -t.padding / 2, t.intersect = function(l) {
    return Et(t, l);
  }, n;
};
var ot = { rect: st, roundedWithTitle: at, noteGroup: rt, divider: ct };
var F = {};
var lt = (e, t) => {
  k.trace("Inserting cluster");
  const n = t.shape || "rect";
  F[t.id] = ot[n](e, t);
};
var ft = () => {
  F = {};
};
var k2 = async (e, t, n, r) => {
  k.info("Graph in recursive render: XXX", y2(t), r);
  const s = t.graph().rankdir;
  k.trace("Dir in recursive render - dir:", s);
  const a = e.insert("g").attr("class", "root");
  t.nodes() ? k.info("Recursive render XXX", t.nodes()) : k.info("No nodes found for", t), t.edges().length > 0 && k.trace("Recursive edges", t.edge(t.edges()[0]));
  const u = a.insert("g").attr("class", "clusters"), l = a.insert("g").attr("class", "edgePaths"), d = a.insert("g").attr("class", "edgeLabels"), w = a.insert("g").attr("class", "nodes");
  await Promise.all(
    t.nodes().map(async function(c) {
      const o = t.node(c);
      if (r !== void 0) {
        const h = JSON.parse(JSON.stringify(r.clusterData));
        k.info("Setting data for cluster XXX (", c, ") ", h, r), t.setNode(r.id, h), t.parent(c) || (k.trace("Setting parent", c, r.id), t.setParent(c, r.id, h));
      }
      if (k.info("(Insert) Node XXX" + c + ": " + JSON.stringify(t.node(c))), o && o.clusterNode) {
        k.info("Cluster identified", c, o.width, t.node(c));
        const h = await k2(w, o.graph, n, t.node(c)), C = h.elem;
        v(o, C), o.diff = h.diff || 0, k.info("Node bounds (abc123)", c, o, o.width, o.x, o.y), rr(C, o), k.warn("Recursive render complete ", C, o);
      } else
        t.children(c).length > 0 ? (k.info("Cluster - the non recursive path XXX", c, o.id, o, t), k.info(b(o.id, t)), f[o.id] = { id: b(o.id, t), node: o }) : (k.info("Node - the non recursive path", c, o.id, o), await tr(w, t.node(c), s));
    })
  ), t.edges().forEach(function(c) {
    const o = t.edge(c.v, c.w, c.name);
    k.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(c)), k.info("Edge " + c.v + " -> " + c.w + ": ", c, " ", JSON.stringify(t.edge(c))), k.info("Fix", f, "ids:", c.v, c.w, "Translateing: ", f[c.v], f[c.w]), ir(d, o);
  }), t.edges().forEach(function(c) {
    k.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(c));
  }), k.info("#############################################"), k.info("###                Layout                 ###"), k.info("#############################################"), k.info(t), zs(t), k.info("Graph after layout:", y2(t));
  let g = 0;
  return it(t).forEach(function(c) {
    const o = t.node(c);
    k.info("Position " + c + ": " + JSON.stringify(t.node(c))), k.info(
      "Position " + c + ": (" + o.x,
      "," + o.y,
      ") width: ",
      o.width,
      " height: ",
      o.height
    ), o && o.clusterNode ? er(o) : t.children(c).length > 0 ? (lt(u, o), f[o.id].node = o) : er(o);
  }), t.edges().forEach(function(c) {
    const o = t.edge(c);
    k.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(o), o);
    const h = lr(l, c, o, f, n, t);
    nr(o, h);
  }), t.nodes().forEach(function(c) {
    const o = t.node(c);
    k.info(c, o.type, o.diff), o.type === "group" && (g = o.diff);
  }), { elem: a, diff: g };
};
var gt = async (e, t, n, r, s) => {
  Pt(e, n, r, s), ar(), sr(), ft(), tt(), k.warn("Graph at first:", y2(t)), nt(t), k.warn("Graph after:", y2(t)), await k2(e, t, r);
};

export {
  gt
};
//# sourceMappingURL=chunk-FIBEWFZ4.js.map
