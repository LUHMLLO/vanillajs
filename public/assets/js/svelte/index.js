var Z = Object.defineProperty, tt = Object.defineProperties;
var et = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var nt = Object.prototype.hasOwnProperty, st = Object.prototype.propertyIsEnumerable;
var N = (e, t, n) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, I = (e, t) => {
  for (var n in t || (t = {}))
    nt.call(t, n) && N(e, n, t[n]);
  if (H)
    for (var n of H(t))
      st.call(t, n) && N(e, n, t[n]);
  return e;
}, J = (e, t) => tt(e, et(t));
var h = (e, t, n) => (N(e, typeof t != "symbol" ? t + "" : t, n), n);
var V = (e, t, n) => new Promise((s, i) => {
  var r = (l) => {
    try {
      c(n.next(l));
    } catch (o) {
      i(o);
    }
  }, u = (l) => {
    try {
      c(n.throw(l));
    } catch (o) {
      i(o);
    }
  }, c = (l) => l.done ? s(l.value) : Promise.resolve(l.value).then(r, u);
  c((n = n.apply(e, t)).next());
});
function P() {
}
function rt(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function K(e) {
  return e();
}
function q() {
  return /* @__PURE__ */ Object.create(null);
}
function x(e) {
  e.forEach(K);
}
function Q(e) {
  return typeof e == "function";
}
function it(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ot(e) {
  return Object.keys(e).length === 0;
}
function ct(e, t, n, s) {
  if (e) {
    const i = W(e, t, n, s);
    return e[0](i);
  }
}
function W(e, t, n, s) {
  return e[1] && s ? rt(n.ctx.slice(), e[1](s(t))) : n.ctx;
}
function ut(e, t, n, s) {
  if (e[2] && s) {
    const i = e[2](s(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], u = Math.max(t.dirty.length, i.length);
      for (let c = 0; c < u; c += 1)
        r[c] = t.dirty[c] | i[c];
      return r;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function lt(e, t, n, s, i, r) {
  if (i) {
    const u = W(t, n, s, r);
    e.p(u, i);
  }
}
function ft(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let s = 0; s < n; s++)
      t[s] = -1;
    return t;
  }
  return -1;
}
function g(e, t) {
  e.appendChild(t);
}
function X(e, t, n) {
  e.insertBefore(t, n || null);
}
function R(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function O(e) {
  return document.createElement(e);
}
function A(e) {
  return document.createTextNode(e);
}
function U() {
  return A(" ");
}
function $t(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function dt(e) {
  return Array.from(e.childNodes);
}
function z(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ht(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let T;
function k(e) {
  T = e;
}
const y = [], D = [];
let w = [];
const F = [], at = /* @__PURE__ */ Promise.resolve();
let B = !1;
function _t() {
  B || (B = !0, at.then(E));
}
function M(e) {
  w.push(e);
}
const S = /* @__PURE__ */ new Set();
let b = 0;
function E() {
  if (b !== 0)
    return;
  const e = T;
  do {
    try {
      for (; b < y.length; ) {
        const t = y[b];
        b++, k(t), gt(t.$$);
      }
    } catch (t) {
      throw y.length = 0, b = 0, t;
    }
    for (k(null), y.length = 0, b = 0; D.length; )
      D.pop()();
    for (let t = 0; t < w.length; t += 1) {
      const n = w[t];
      S.has(n) || (S.add(n), n());
    }
    w.length = 0;
  } while (y.length);
  for (; F.length; )
    F.pop()();
  B = !1, S.clear(), k(e);
}
function gt(e) {
  if (e.fragment !== null) {
    e.update(), x(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(M);
  }
}
function mt(e) {
  const t = [], n = [];
  w.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), w = t;
}
const L = /* @__PURE__ */ new Set();
let m;
function bt() {
  m = {
    r: 0,
    c: [],
    p: m
    // parent group
  };
}
function pt() {
  m.r || x(m.c), m = m.p;
}
function j(e, t) {
  e && e.i && (L.delete(e), e.i(t));
}
function v(e, t, n, s) {
  if (e && e.o) {
    if (L.has(e))
      return;
    L.add(e), m.c.push(() => {
      L.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else
    s && s();
}
function yt(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), M(() => {
    const r = e.$$.on_mount.map(K).filter(Q);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : x(r), e.$$.on_mount = [];
  }), i.forEach(M);
}
function wt(e, t) {
  const n = e.$$;
  n.fragment !== null && (mt(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function kt(e, t) {
  e.$$.dirty[0] === -1 && (y.push(e), _t(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Et(e, t, n, s, i, r, u = null, c = [-1]) {
  const l = T;
  k(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: P,
    not_equal: i,
    bound: q(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: q(),
    dirty: c,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  u && u(o.root);
  let _ = !1;
  if (o.ctx = n ? n(e, t.props || {}, (a, f, ...$) => {
    const d = $.length ? $[0] : f;
    return o.ctx && i(o.ctx[a], o.ctx[a] = d) && (!o.skip_bound && o.bound[a] && o.bound[a](d), _ && kt(e, a)), f;
  }) : [], o.update(), _ = !0, x(o.before_update), o.fragment = s ? s(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = dt(t.target);
      o.fragment && o.fragment.l(a), a.forEach(R);
    } else
      o.fragment && o.fragment.c();
    t.intro && j(e.$$.fragment), yt(e, t.target, t.anchor), E();
  }
  k(l);
}
let Y;
typeof HTMLElement == "function" && (Y = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    h(this, "$$ctor");
    /** Slots */
    h(this, "$$s");
    /** The Svelte component instance */
    h(this, "$$c");
    /** Whether or not the custom element is connected */
    h(this, "$$cn", !1);
    /** Component props data */
    h(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    h(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    h(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    h(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    h(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  connectedCallback() {
    return V(this, null, function* () {
      if (this.$$cn = !0, !this.$$c) {
        let t = function(r) {
          return () => {
            let u;
            return {
              c: function() {
                u = O("slot"), r !== "default" && p(u, "name", r);
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function(o, _) {
                X(o, u, _);
              },
              d: function(o) {
                o && R(u);
              }
            };
          };
        };
        if (yield Promise.resolve(), !this.$$cn || this.$$c)
          return;
        const n = {}, s = ht(this);
        for (const r of this.$$s)
          r in s && (n[r] = [t(r)]);
        for (const r of this.attributes) {
          const u = this.$$g_p(r.name);
          u in this.$$d || (this.$$d[u] = C(u, r.value, this.$$p_d, "toProp"));
        }
        for (const r in this.$$p_d)
          !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: J(I({}, this.$$d), {
            $$slots: n,
            $$scope: {
              ctx: []
            }
          })
        });
        const i = () => {
          this.$$r = !0;
          for (const r in this.$$p_d)
            if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
              const u = C(
                r,
                this.$$d[r],
                this.$$p_d,
                "toAttribute"
              );
              u == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, u);
            }
          this.$$r = !1;
        };
        this.$$c.$$.after_update.push(i), i();
        for (const r in this.$$l)
          for (const u of this.$$l[r]) {
            const c = this.$$c.$on(r, u);
            this.$$l_u.set(u, c);
          }
        this.$$l = {};
      }
    });
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = C(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function C(e, t, n, s) {
  var r;
  const i = (r = n[e]) == null ? void 0 : r.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function jt(e, t, n, s, i, r) {
  let u = class extends Y {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((c) => {
    Object.defineProperty(u.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(l) {
        var o;
        l = C(c, l, t), this.$$d[c] = l, (o = this.$$c) == null || o.$set({ [c]: l });
      }
    });
  }), s.forEach((c) => {
    Object.defineProperty(u.prototype, c, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[c];
      }
    });
  }), r && (u = r(u)), e.element = /** @type {any} */
  u, u;
}
class xt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    h(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    h(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    wt(this, 1), this.$destroy = P;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Q(n))
      return P;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const i = s.indexOf(n);
      i !== -1 && s.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ot(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window != "undefined" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
function G(e) {
  let t;
  const n = (
    /*#slots*/
    e[5].default
  ), s = ct(
    n,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, r) {
      s && s.m(i, r), t = !0;
    },
    p(i, r) {
      s && s.p && (!t || r & /*$$scope*/
      16) && lt(
        s,
        n,
        i,
        /*$$scope*/
        i[4],
        t ? ut(
          n,
          /*$$scope*/
          i[4],
          r,
          null
        ) : ft(
          /*$$scope*/
          i[4]
        ),
        null
      );
    },
    i(i) {
      t || (j(s, i), t = !0);
    },
    o(i) {
      v(s, i), t = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function At(e) {
  let t, n, s, i, r, u, c, l, o, _, a, f = (
    /*checked*/
    e[0] && G(e)
  );
  return {
    c() {
      t = O("div"), n = O("label"), s = A(
        /*label*/
        e[1]
      ), i = A(" : "), r = A(
        /*checked*/
        e[0]
      ), u = U(), c = O("input"), l = U(), f && f.c(), p(
        n,
        "for",
        /*group*/
        e[2]
      ), p(c, "type", "radio"), p(
        c,
        "name",
        /*group*/
        e[2]
      ), c.checked = /*checked*/
      e[0];
    },
    m($, d) {
      X($, t, d), g(t, n), g(n, s), g(n, i), g(n, r), g(t, u), g(t, c), g(t, l), f && f.m(t, null), o = !0, _ || (a = $t(
        c,
        "click",
        /*toggle*/
        e[3]
      ), _ = !0);
    },
    p($, [d]) {
      (!o || d & /*label*/
      2) && z(
        s,
        /*label*/
        $[1]
      ), (!o || d & /*checked*/
      1) && z(
        r,
        /*checked*/
        $[0]
      ), (!o || d & /*group*/
      4) && p(
        n,
        "for",
        /*group*/
        $[2]
      ), (!o || d & /*group*/
      4) && p(
        c,
        "name",
        /*group*/
        $[2]
      ), (!o || d & /*checked*/
      1) && (c.checked = /*checked*/
      $[0]), /*checked*/
      $[0] ? f ? (f.p($, d), d & /*checked*/
      1 && j(f, 1)) : (f = G($), f.c(), j(f, 1), f.m(t, null)) : f && (bt(), v(f, 1, 1, () => {
        f = null;
      }), pt());
    },
    i($) {
      o || (j(f), o = !0);
    },
    o($) {
      v(f), o = !1;
    },
    d($) {
      $ && R(t), f && f.d(), _ = !1, a();
    }
  };
}
function Lt(e, t, n) {
  let { $$slots: s = {}, $$scope: i } = t, { checked: r = !1 } = t, { label: u } = t, { group: c } = t;
  function l() {
    r || document.querySelectorAll(`lm-radio[group="${c}"]`).forEach((_) => {
      _.checked = !1;
    }), n(0, r = !0);
  }
  return e.$$set = (o) => {
    "checked" in o && n(0, r = o.checked), "label" in o && n(1, u = o.label), "group" in o && n(2, c = o.group), "$$scope" in o && n(4, i = o.$$scope);
  }, [r, u, c, l, i, s];
}
class Ct extends xt {
  constructor(t) {
    super(), Et(this, t, Lt, At, it, { checked: 0, label: 1, group: 2 });
  }
  get checked() {
    return this.$$.ctx[0];
  }
  set checked(t) {
    this.$$set({ checked: t }), E();
  }
  get label() {
    return this.$$.ctx[1];
  }
  set label(t) {
    this.$$set({ label: t }), E();
  }
  get group() {
    return this.$$.ctx[2];
  }
  set group(t) {
    this.$$set({ group: t }), E();
  }
}
customElements.define("lm-radio", jt(Ct, { checked: { type: "Boolean" }, label: {}, group: {} }, ["default"], [], !0));
export {
  Ct as Radio
};
