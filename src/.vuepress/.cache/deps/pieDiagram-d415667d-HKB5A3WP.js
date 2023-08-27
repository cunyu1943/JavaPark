import {
  h
} from "./chunk-RZND5LQ5.js";
import {
  hn
} from "./chunk-KHZIG6JB.js";
import "./chunk-6DTUZTL4.js";
import {
  t
} from "./chunk-OS2TPKC3.js";
import {
  E
} from "./chunk-OTN43OJN.js";
import {
  $a,
  Aa,
  Bn,
  Ct,
  Dn,
  Ea,
  Fa,
  Ft,
  Ia,
  La,
  Ma,
  Oa,
  Ox,
  de,
  k
} from "./chunk-IRNV3LL7.js";

// node_modules/.pnpm/mermaid@10.3.1/node_modules/mermaid/dist/pieDiagram-d415667d.js
function wt(t2, u) {
  return u < t2 ? -1 : u > t2 ? 1 : u >= t2 ? 0 : NaN;
}
function At(t2) {
  return t2;
}
function Et() {
  var t2 = At, u = wt, v = null, b = E(0), E2 = E(Ox), d = E(0);
  function o(a) {
    var h2, p = (a = t(a)).length, D, C, k2 = 0, $ = new Array(p), S = new Array(p), w = +b.apply(this, arguments), W = Math.min(Ox, Math.max(-Ox, E2.apply(this, arguments) - w)), N, I = Math.min(Math.abs(W) / p, d.apply(this, arguments)), V = I * (W < 0 ? -1 : 1), g;
    for (h2 = 0; h2 < p; ++h2)
      (g = S[$[h2] = h2] = +t2(a[h2], h2, a)) > 0 && (k2 += g);
    for (u != null ? $.sort(function(A, m) {
      return u(S[A], S[m]);
    }) : v != null && $.sort(function(A, m) {
      return v(a[A], a[m]);
    }), h2 = 0, C = k2 ? (W - p * V) / k2 : 0; h2 < p; ++h2, w = N)
      D = $[h2], g = S[D], N = w + (g > 0 ? g * C : 0) + V, S[D] = {
        data: a[D],
        index: h2,
        value: g,
        startAngle: w,
        endAngle: N,
        padAngle: I
      };
    return S;
  }
  return o.value = function(a) {
    return arguments.length ? (t2 = typeof a == "function" ? a : E(+a), o) : t2;
  }, o.sortValues = function(a) {
    return arguments.length ? (u = a, v = null, o) : u;
  }, o.sort = function(a) {
    return arguments.length ? (v = a, u = null, o) : v;
  }, o.startAngle = function(a) {
    return arguments.length ? (b = typeof a == "function" ? a : E(+a), o) : b;
  }, o.endAngle = function(a) {
    return arguments.length ? (E2 = typeof a == "function" ? a : E(+a), o) : E2;
  }, o.padAngle = function(a) {
    return arguments.length ? (d = typeof a == "function" ? a : E(+a), o) : d;
  }, o;
}
var st = function() {
  var t2 = function(m, e, i, r) {
    for (i = i || {}, r = m.length; r--; i[m[r]] = e)
      ;
    return i;
  }, u = [1, 4], v = [1, 5], b = [1, 6], E2 = [1, 7], d = [1, 9], o = [1, 11, 13, 15, 17, 19, 20, 26, 27, 28, 29], a = [2, 5], h2 = [1, 6, 11, 13, 15, 17, 19, 20, 26, 27, 28, 29], p = [26, 27, 28], D = [2, 8], C = [1, 18], k2 = [1, 19], $ = [1, 20], S = [1, 21], w = [1, 22], W = [1, 23], N = [1, 28], I = [6, 26, 27, 28, 29], V = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, directive: 5, PIE: 6, document: 7, showData: 8, line: 9, statement: 10, txt: 11, value: 12, title: 13, title_value: 14, acc_title: 15, acc_title_value: 16, acc_descr: 17, acc_descr_value: 18, acc_descr_multiline_value: 19, section: 20, openDirective: 21, typeDirective: 22, closeDirective: 23, ":": 24, argDirective: 25, NEWLINE: 26, ";": 27, EOF: 28, open_directive: 29, type_directive: 30, arg_directive: 31, close_directive: 32, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "PIE", 8: "showData", 11: "txt", 12: "value", 13: "title", 14: "title_value", 15: "acc_title", 16: "acc_title_value", 17: "acc_descr", 18: "acc_descr_value", 19: "acc_descr_multiline_value", 20: "section", 24: ":", 26: "NEWLINE", 27: ";", 28: "EOF", 29: "open_directive", 30: "type_directive", 31: "arg_directive", 32: "close_directive" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [3, 3], [7, 0], [7, 2], [9, 2], [10, 0], [10, 2], [10, 2], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [5, 3], [5, 5], [4, 1], [4, 1], [4, 1], [21, 1], [22, 1], [25, 1], [23, 1]],
    performAction: function(e, i, r, n, l, s, c) {
      var f = s.length - 1;
      switch (l) {
        case 4:
          n.setShowData(true);
          break;
        case 7:
          this.$ = s[f - 1];
          break;
        case 9:
          n.addSection(s[f - 1], n.cleanupValue(s[f]));
          break;
        case 10:
          this.$ = s[f].trim(), n.setDiagramTitle(this.$);
          break;
        case 11:
          this.$ = s[f].trim(), n.setAccTitle(this.$);
          break;
        case 12:
        case 13:
          this.$ = s[f].trim(), n.setAccDescription(this.$);
          break;
        case 14:
          n.addSection(s[f].substr(8)), this.$ = s[f].substr(8);
          break;
        case 21:
          n.parseDirective("%%{", "open_directive");
          break;
        case 22:
          n.parseDirective(s[f], "type_directive");
          break;
        case 23:
          s[f] = s[f].trim().replace(/'/g, '"'), n.parseDirective(s[f], "arg_directive");
          break;
        case 24:
          n.parseDirective("}%%", "close_directive", "pie");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: u, 21: 8, 26: v, 27: b, 28: E2, 29: d }, { 1: [3] }, { 3: 10, 4: 2, 5: 3, 6: u, 21: 8, 26: v, 27: b, 28: E2, 29: d }, { 3: 11, 4: 2, 5: 3, 6: u, 21: 8, 26: v, 27: b, 28: E2, 29: d }, t2(o, a, { 7: 12, 8: [1, 13] }), t2(h2, [2, 18]), t2(h2, [2, 19]), t2(h2, [2, 20]), { 22: 14, 30: [1, 15] }, { 30: [2, 21] }, { 1: [2, 1] }, { 1: [2, 2] }, t2(p, D, { 21: 8, 9: 16, 10: 17, 5: 24, 1: [2, 3], 11: C, 13: k2, 15: $, 17: S, 19: w, 20: W, 29: d }), t2(o, a, { 7: 25 }), { 23: 26, 24: [1, 27], 32: N }, t2([24, 32], [2, 22]), t2(o, [2, 6]), { 4: 29, 26: v, 27: b, 28: E2 }, { 12: [1, 30] }, { 14: [1, 31] }, { 16: [1, 32] }, { 18: [1, 33] }, t2(p, [2, 13]), t2(p, [2, 14]), t2(p, [2, 15]), t2(p, D, { 21: 8, 9: 16, 10: 17, 5: 24, 1: [2, 4], 11: C, 13: k2, 15: $, 17: S, 19: w, 20: W, 29: d }), t2(I, [2, 16]), { 25: 34, 31: [1, 35] }, t2(I, [2, 24]), t2(o, [2, 7]), t2(p, [2, 9]), t2(p, [2, 10]), t2(p, [2, 11]), t2(p, [2, 12]), { 23: 36, 32: N }, { 32: [2, 23] }, t2(I, [2, 17])],
    defaultActions: { 9: [2, 21], 10: [2, 1], 11: [2, 2], 35: [2, 23] },
    parseError: function(e, i) {
      if (i.recoverable)
        this.trace(e);
      else {
        var r = new Error(e);
        throw r.hash = i, r;
      }
    },
    parse: function(e) {
      var i = this, r = [0], n = [], l = [null], s = [], c = this.table, f = "", F = 0, U = 0, K = 2, X = 1, ct = s.slice.call(arguments, 1), y = Object.create(this.lexer), j = { yy: {} };
      for (var Q in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Q) && (j.yy[Q] = this.yy[Q]);
      y.setInput(e, j.yy), j.yy.lexer = y, j.yy.parser = this, typeof y.yylloc > "u" && (y.yylloc = {});
      var Z = y.yylloc;
      s.push(Z);
      var ot = y.options && y.options.ranges;
      typeof j.yy.parseError == "function" ? this.parseError = j.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ht() {
        var P;
        return P = n.pop() || y.lex() || X, typeof P != "number" && (P instanceof Array && (n = P, P = n.pop()), P = i.symbols_[P] || P), P;
      }
      for (var _, z, x, tt, R = {}, q, O, at, G; ; ) {
        if (z = r[r.length - 1], this.defaultActions[z] ? x = this.defaultActions[z] : ((_ === null || typeof _ > "u") && (_ = ht()), x = c[z] && c[z][_]), typeof x > "u" || !x.length || !x[0]) {
          var et = "";
          G = [];
          for (q in c[z])
            this.terminals_[q] && q > K && G.push("'" + this.terminals_[q] + "'");
          y.showPosition ? et = "Parse error on line " + (F + 1) + `:
` + y.showPosition() + `
Expecting ` + G.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : et = "Parse error on line " + (F + 1) + ": Unexpected " + (_ == X ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(et, {
            text: y.match,
            token: this.terminals_[_] || _,
            line: y.yylineno,
            loc: Z,
            expected: G
          });
        }
        if (x[0] instanceof Array && x.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + z + ", token: " + _);
        switch (x[0]) {
          case 1:
            r.push(_), l.push(y.yytext), s.push(y.yylloc), r.push(x[1]), _ = null, U = y.yyleng, f = y.yytext, F = y.yylineno, Z = y.yylloc;
            break;
          case 2:
            if (O = this.productions_[x[1]][1], R.$ = l[l.length - O], R._$ = {
              first_line: s[s.length - (O || 1)].first_line,
              last_line: s[s.length - 1].last_line,
              first_column: s[s.length - (O || 1)].first_column,
              last_column: s[s.length - 1].last_column
            }, ot && (R._$.range = [
              s[s.length - (O || 1)].range[0],
              s[s.length - 1].range[1]
            ]), tt = this.performAction.apply(R, [
              f,
              U,
              F,
              j.yy,
              x[1],
              l,
              s
            ].concat(ct)), typeof tt < "u")
              return tt;
            O && (r = r.slice(0, -1 * O * 2), l = l.slice(0, -1 * O), s = s.slice(0, -1 * O)), r.push(this.productions_[x[1]][0]), l.push(R.$), s.push(R._$), at = c[r[r.length - 2]][r[r.length - 1]], r.push(at);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, g = function() {
    var m = {
      EOF: 1,
      parseError: function(i, r) {
        if (this.yy.parser)
          this.yy.parser.parseError(i, r);
        else
          throw new Error(i);
      },
      // resets the lexer, sets new input
      setInput: function(e, i) {
        return this.yy = i || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var e = this._input[0];
        this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
        var i = e.match(/(?:\r\n?|\n).*/g);
        return i ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
      },
      // unshifts one char (or a string) into the input
      unput: function(e) {
        var i = e.length, r = e.split(/(?:\r\n?|\n)/g);
        this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - i), this.offset -= i;
        var n = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
        var l = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === n.length ? this.yylloc.first_column : 0) + n[n.length - r.length].length - r[0].length : this.yylloc.first_column - i
        }, this.options.ranges && (this.yylloc.range = [l[0], l[0] + this.yyleng - i]), this.yyleng = this.yytext.length, this;
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
      less: function(e) {
        this.unput(this.match.slice(e));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var e = this.matched.substr(0, this.matched.length - this.match.length);
        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var e = this.match;
        return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var e = this.pastInput(), i = new Array(e.length + 1).join("-");
        return e + this.upcomingInput() + `
` + i + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(e, i) {
        var r, n, l;
        if (this.options.backtrack_lexer && (l = {
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
        }, this.options.ranges && (l.yylloc.range = this.yylloc.range.slice(0))), n = e[0].match(/(?:\r\n?|\n).*/g), n && (this.yylineno += n.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
        }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e[0].length), this.matched += e[0], r = this.performAction.call(this, this.yy, this, i, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), r)
          return r;
        if (this._backtrack) {
          for (var s in l)
            this[s] = l[s];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var e, i, r, n;
        this._more || (this.yytext = "", this.match = "");
        for (var l = this._currentRules(), s = 0; s < l.length; s++)
          if (r = this._input.match(this.rules[l[s]]), r && (!i || r[0].length > i[0].length)) {
            if (i = r, n = s, this.options.backtrack_lexer) {
              if (e = this.test_match(r, l[s]), e !== false)
                return e;
              if (this._backtrack) {
                i = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return i ? (e = this.test_match(i, l[n]), e !== false ? e : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var i = this.next();
        return i || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(i) {
        this.conditionStack.push(i);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var i = this.conditionStack.length - 1;
        return i > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(i) {
        return i = this.conditionStack.length - 1 - Math.abs(i || 0), i >= 0 ? this.conditionStack[i] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(i) {
        this.begin(i);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(i, r, n, l) {
        switch (n) {
          case 0:
            return this.begin("open_directive"), 29;
          case 1:
            return this.begin("type_directive"), 30;
          case 2:
            return this.popState(), this.begin("arg_directive"), 24;
          case 3:
            return this.popState(), this.popState(), 32;
          case 4:
            return 31;
          case 5:
            break;
          case 6:
            break;
          case 7:
            return 26;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return this.begin("title"), 13;
          case 11:
            return this.popState(), "title_value";
          case 12:
            return this.begin("acc_title"), 15;
          case 13:
            return this.popState(), "acc_title_value";
          case 14:
            return this.begin("acc_descr"), 17;
          case 15:
            return this.popState(), "acc_descr_value";
          case 16:
            this.begin("acc_descr_multiline");
            break;
          case 17:
            this.popState();
            break;
          case 18:
            return "acc_descr_multiline_value";
          case 19:
            this.begin("string");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return "txt";
          case 22:
            return 6;
          case 23:
            return 8;
          case 24:
            return "value";
          case 25:
            return 28;
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:[\s]+)/i, /^(?:title\b)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:pie\b)/i, /^(?:showData\b)/i, /^(?::[\s]*[\d]+(?:\.[\d]+)?)/i, /^(?:$)/i],
      conditions: { acc_descr_multiline: { rules: [17, 18], inclusive: false }, acc_descr: { rules: [15], inclusive: false }, acc_title: { rules: [13], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, title: { rules: [11], inclusive: false }, string: { rules: [20, 21], inclusive: false }, INITIAL: { rules: [0, 5, 6, 7, 8, 9, 10, 12, 14, 16, 19, 22, 23, 24, 25], inclusive: true } }
    };
    return m;
  }();
  V.lexer = g;
  function A() {
    this.yy = {};
  }
  return A.prototype = V, V.Parser = A, new A();
}();
st.parser = st;
var Dt = st;
var J = {};
var rt = false;
var Tt = function(t2, u, v) {
  de.parseDirective(this, t2, u, v);
};
var $t = function(t2, u) {
  t2 = Bn.sanitizeText(t2, Ft()), J[t2] === void 0 && (J[t2] = u, k.debug("Added new section :", t2));
};
var It = () => J;
var Vt = function(t2) {
  rt = t2;
};
var Ot = function() {
  return rt;
};
var Pt = function(t2) {
  return t2.substring(0, 1) === ":" && (t2 = t2.substring(1).trim()), Number(t2.trim());
};
var Lt = function() {
  J = {}, rt = false, La();
};
var Wt = {
  parseDirective: Tt,
  getConfig: () => Ft().pie,
  addSection: $t,
  getSections: It,
  cleanupValue: Pt,
  clear: Lt,
  setAccTitle: Aa,
  getAccTitle: Ea,
  setDiagramTitle: Ia,
  getDiagramTitle: $a,
  setShowData: Vt,
  getShowData: Ot,
  getAccDescription: Oa,
  setAccDescription: Ma
};
var Nt = (t2) => `
  .pieCircle{
    stroke: ${t2.pieStrokeColor};
    stroke-width : ${t2.pieStrokeWidth};
    opacity : ${t2.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t2.pieOuterStrokeColor};
    stroke-width: ${t2.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t2.pieTitleTextSize};
    fill: ${t2.pieTitleTextColor};
    font-family: ${t2.fontFamily};
  }
  .slice {
    font-family: ${t2.fontFamily};
    fill: ${t2.pieSectionTextColor};
    font-size:${t2.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t2.pieLegendTextColor};
    font-family: ${t2.fontFamily};
    font-size: ${t2.pieLegendTextSize};
  }
`;
var Ct2 = Nt;
var T = Ft();
var L;
var B = 450;
var Ft2 = (t2, u, v, b) => {
  var V;
  try {
    T = Ft(), k.debug(`Rendering info diagram
` + t2);
    const g = Ft().securityLevel;
    let A;
    g === "sandbox" && (A = Ct("#i" + u));
    const m = g === "sandbox" ? Ct(A.nodes()[0].contentDocument.body) : Ct("body"), i = (g === "sandbox" ? A.nodes()[0].contentDocument : document).getElementById(u);
    L = i.parentElement.offsetWidth, L === void 0 && (L = 1200), T.useWidth !== void 0 && (L = T.useWidth), T.pie.useWidth !== void 0 && (L = T.pie.useWidth);
    const r = m.select("#" + u);
    Fa(r, B, L, T.pie.useMaxWidth), i.setAttribute("viewBox", "0 0 " + L + " " + B);
    var E2 = 40, d = 18, o = 4, a = Math.min(L, B) / 2 - E2, h2 = r.append("g").attr("transform", "translate(" + L / 2 + "," + B / 2 + ")"), p = b.db.getSections(), D = 0;
    Object.keys(p).forEach(function(c) {
      D += p[c];
    });
    const n = T.themeVariables;
    var C = [
      n.pie1,
      n.pie2,
      n.pie3,
      n.pie4,
      n.pie5,
      n.pie6,
      n.pie7,
      n.pie8,
      n.pie9,
      n.pie10,
      n.pie11,
      n.pie12
    ];
    const l = ((V = T.pie) == null ? void 0 : V.textPosition) ?? 0.75;
    let [s] = Dn(n.pieOuterStrokeWidth);
    s ?? (s = 2);
    var k2 = h().range(C), $ = Object.entries(p).map(function(c, f) {
      return {
        order: f,
        name: c[0],
        value: c[1]
      };
    }), S = Et().value(function(c) {
      return c.value;
    }).sort(function(c, f) {
      return c.order - f.order;
    }), w = S($), W = hn().innerRadius(0).outerRadius(a), N = hn().innerRadius(a * l).outerRadius(a * l);
    h2.append("circle").attr("cx", 0).attr("cy", 0).attr("r", a + s / 2).attr("class", "pieOuterCircle"), h2.selectAll("mySlices").data(w).enter().append("path").attr("d", W).attr("fill", function(c) {
      return k2(c.data.name);
    }).attr("class", "pieCircle"), h2.selectAll("mySlices").data(w).enter().append("text").text(function(c) {
      return (c.data.value / D * 100).toFixed(0) + "%";
    }).attr("transform", function(c) {
      return "translate(" + N.centroid(c) + ")";
    }).style("text-anchor", "middle").attr("class", "slice"), h2.append("text").text(b.db.getDiagramTitle()).attr("x", 0).attr("y", -(B - 50) / 2).attr("class", "pieTitleText");
    var I = h2.selectAll(".legend").data(k2.domain()).enter().append("g").attr("class", "legend").attr("transform", function(c, f) {
      const F = d + o, U = F * k2.domain().length / 2, K = 12 * d, X = f * F - U;
      return "translate(" + K + "," + X + ")";
    });
    I.append("rect").attr("width", d).attr("height", d).style("fill", k2).style("stroke", k2), I.data(w).append("text").attr("x", d + o).attr("y", d - o).text(function(c) {
      return b.db.getShowData() || T.showData || T.pie.showData ? c.data.name + " [" + c.data.value + "]" : c.data.name;
    });
  } catch (g) {
    k.error("Error while rendering info diagram"), k.error(g);
  }
};
var jt = {
  draw: Ft2
};
var Xt = {
  parser: Dt,
  db: Wt,
  renderer: jt,
  styles: Ct2
};
export {
  Xt as diagram
};
//# sourceMappingURL=pieDiagram-d415667d-HKB5A3WP.js.map
