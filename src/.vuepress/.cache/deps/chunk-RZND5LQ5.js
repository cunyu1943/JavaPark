import {
  t
} from "./chunk-6DTUZTL4.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/ordinal-5695958c.js
var o = class extends Map {
  constructor(n, t2 = g) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t2 } }), n != null)
      for (const [r, s] of n)
        this.set(r, s);
  }
  get(n) {
    return super.get(c(this, n));
  }
  has(n) {
    return super.has(c(this, n));
  }
  set(n, t2) {
    return super.set(l(this, n), t2);
  }
  delete(n) {
    return super.delete(p(this, n));
  }
};
function c({ _intern: e, _key: n }, t2) {
  const r = n(t2);
  return e.has(r) ? e.get(r) : t2;
}
function l({ _intern: e, _key: n }, t2) {
  const r = n(t2);
  return e.has(r) ? e.get(r) : (e.set(r, t2), t2);
}
function p({ _intern: e, _key: n }, t2) {
  const r = n(t2);
  return e.has(r) && (t2 = e.get(r), e.delete(r)), t2;
}
function g(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
var f = Symbol("implicit");
function h() {
  var e = new o(), n = [], t2 = [], r = f;
  function s(u) {
    let i = e.get(u);
    if (i === void 0) {
      if (r !== f)
        return r;
      e.set(u, i = n.push(u) - 1);
    }
    return t2[i % t2.length];
  }
  return s.domain = function(u) {
    if (!arguments.length)
      return n.slice();
    n = [], e = new o();
    for (const i of u)
      e.has(i) || e.set(i, n.push(i) - 1);
    return s;
  }, s.range = function(u) {
    return arguments.length ? (t2 = Array.from(u), s) : t2.slice();
  }, s.unknown = function(u) {
    return arguments.length ? (r = u, s) : r;
  }, s.copy = function() {
    return h(n, t2).unknown(r);
  }, t.apply(s, arguments), s;
}

export {
  h
};
//# sourceMappingURL=chunk-RZND5LQ5.js.map
