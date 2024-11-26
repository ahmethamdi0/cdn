/*!
 * EverSarjTools v20241126083109 by Ever Şarj - https://eversarj.com
 * Copyright 2024 Ever Şarj A.Ş
 */
var Hn = Object.defineProperty;
var Wn = (t, e, n) => e in t ? Hn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ee = (t, e, n) => Wn(t, typeof e != "symbol" ? e + "" : e, n);
function V() {
}
function J(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function pn(t) {
  return t();
}
function St() {
  return /* @__PURE__ */ Object.create(null);
}
function fe(t) {
  t.forEach(pn);
}
function bt(t) {
  return typeof t == "function";
}
function R(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Ie;
function Xn(t, e) {
  return t === e ? !0 : (Ie || (Ie = document.createElement("a")), Ie.href = e, t === Ie.href);
}
function Yn(t) {
  return Object.keys(t).length === 0;
}
function mn(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return V;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function te(t, e, n) {
  t.$$.on_destroy.push(mn(e, n));
}
function me(t, e, n, r) {
  if (t) {
    const i = hn(t, e, n, r);
    return t[0](i);
  }
}
function hn(t, e, n, r) {
  return t[1] && r ? J(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function he(t, e, n, r) {
  if (t[2] && r) {
    const i = t[2](r(n));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const a = [], s = Math.max(e.dirty.length, i.length);
      for (let l = 0; l < s; l += 1)
        a[l] = e.dirty[l] | i[l];
      return a;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function be(t, e, n, r, i, a) {
  if (i) {
    const s = hn(e, n, r, a);
    t.p(s, i);
  }
}
function ve(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function Be(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function qe(t, e) {
  const n = {};
  e = new Set(e);
  for (const r in t) !e.has(r) && r[0] !== "$" && (n[r] = t[r]);
  return n;
}
function g(t, e) {
  t.appendChild(e);
}
function Z(t, e, n) {
  const r = Kn(t);
  if (!r.getElementById(e)) {
    const i = y("style");
    i.id = e, i.textContent = n, Jn(r, i);
  }
}
function Kn(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Jn(t, e) {
  return g(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function L(t, e, n) {
  t.insertBefore(e, n || null);
}
function O(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Qe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function y(t) {
  return document.createElement(t);
}
function at(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function B(t) {
  return document.createTextNode(t);
}
function z() {
  return B(" ");
}
function Ee() {
  return B("");
}
function We(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Zn = ["width", "height"];
function Ne(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null ? t.removeAttribute(r) : r === "style" ? t.style.cssText = e[r] : r === "__value" ? t.value = t[r] = e[r] : n[r] && n[r].set && Zn.indexOf(r) === -1 ? t[r] = e[r] : h(t, r, e[r]);
}
function Et(t, e) {
  for (const n in e)
    h(t, n, e[n]);
}
function er(t) {
  return Array.from(t.childNodes);
}
function H(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function st(t, e) {
  t.value = e ?? "";
}
function Ve(t, e, n, r) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function zt(t, e, n) {
  for (let r = 0; r < t.options.length; r += 1) {
    const i = t.options[r];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function tr(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function _e(t, e, n) {
  t.classList.toggle(e, !!n);
}
function nr(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function rr(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let je;
function $e(t) {
  je = t;
}
function vt() {
  if (!je) throw new Error("Function called outside component initialization");
  return je;
}
function yt(t) {
  vt().$$.on_mount.push(t);
}
function ir(t) {
  vt().$$.on_destroy.push(t);
}
function bn() {
  const t = vt();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const a = nr(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return i.slice().forEach((s) => {
        s.call(t, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
const pe = [], Fe = [];
let ye = [];
const ot = [], vn = /* @__PURE__ */ Promise.resolve();
let lt = !1;
function yn() {
  lt || (lt = !0, vn.then(G));
}
function _n() {
  return yn(), vn;
}
function Ge(t) {
  ye.push(t);
}
function ar(t) {
  ot.push(t);
}
const nt = /* @__PURE__ */ new Set();
let de = 0;
function G() {
  if (de !== 0)
    return;
  const t = je;
  do {
    try {
      for (; de < pe.length; ) {
        const e = pe[de];
        de++, $e(e), sr(e.$$);
      }
    } catch (e) {
      throw pe.length = 0, de = 0, e;
    }
    for ($e(null), pe.length = 0, de = 0; Fe.length; ) Fe.pop()();
    for (let e = 0; e < ye.length; e += 1) {
      const n = ye[e];
      nt.has(n) || (nt.add(n), n());
    }
    ye.length = 0;
  } while (pe.length);
  for (; ot.length; )
    ot.pop()();
  lt = !1, nt.clear(), $e(t);
}
function sr(t) {
  if (t.fragment !== null) {
    t.update(), fe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ge);
  }
}
function or(t) {
  const e = [], n = [];
  ye.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), ye = e;
}
const Te = /* @__PURE__ */ new Set();
let ce;
function ae() {
  ce = {
    r: 0,
    c: [],
    p: ce
    // parent group
  };
}
function se() {
  ce.r || fe(ce.c), ce = ce.p;
}
function k(t, e) {
  t && t.i && (Te.delete(t), t.i(e));
}
function A(t, e, n, r) {
  if (t && t.o) {
    if (Te.has(t)) return;
    Te.add(t), ce.c.push(() => {
      Te.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else r && r();
}
function re(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function lr(t, e) {
  A(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function cr(t, e, n, r, i, a, s, l, o, c, f, d) {
  let u = t.length, m = a.length, p = u;
  const b = {};
  for (; p--; ) b[t[p].key] = p;
  const _ = [], w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), j = [];
  for (p = m; p--; ) {
    const P = d(i, a, p), T = n(P);
    let E = s.get(T);
    E ? j.push(() => E.p(P, e)) : (E = c(T, P), E.c()), w.set(T, _[p] = E), T in b && v.set(T, Math.abs(p - b[T]));
  }
  const S = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set();
  function $(P) {
    k(P, 1), P.m(l, f), s.set(P.key, P), f = P.first, m--;
  }
  for (; u && m; ) {
    const P = _[m - 1], T = t[u - 1], E = P.key, C = T.key;
    P === T ? (f = P.first, u--, m--) : w.has(C) ? !s.has(E) || S.has(E) ? $(P) : x.has(C) ? u-- : v.get(E) > v.get(C) ? (x.add(E), $(P)) : (S.add(C), u--) : (o(T, s), u--);
  }
  for (; u--; ) {
    const P = t[u];
    w.has(P.key) || o(P, s);
  }
  for (; m; ) $(_[m - 1]);
  return fe(j), _;
}
function Ce(t, e) {
  const n = {}, r = {}, i = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const s = t[a], l = e[a];
    if (l) {
      for (const o in s)
        o in l || (r[o] = 1);
      for (const o in l)
        i[o] || (n[o] = l[o], i[o] = 1);
      t[a] = l;
    } else
      for (const o in s)
        i[o] = 1;
  }
  for (const s in r)
    s in n || (n[s] = void 0);
  return n;
}
function _t(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function ur(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function N(t) {
  t && t.c();
}
function q(t, e, n) {
  const { fragment: r, after_update: i } = t.$$;
  r && r.m(e, n), Ge(() => {
    const a = t.$$.on_mount.map(pn).filter(bt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...a) : fe(a), t.$$.on_mount = [];
  }), i.forEach(Ge);
}
function Q(t, e) {
  const n = t.$$;
  n.fragment !== null && (or(n.after_update), fe(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function fr(t, e) {
  t.$$.dirty[0] === -1 && (pe.push(t), yn(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function W(t, e, n, r, i, a, s = null, l = [-1]) {
  const o = je;
  $e(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: V,
    not_equal: i,
    bound: St(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: St(),
    dirty: l,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(c.root);
  let f = !1;
  if (c.ctx = n ? n(t, e.props || {}, (d, u, ...m) => {
    const p = m.length ? m[0] : u;
    return c.ctx && i(c.ctx[d], c.ctx[d] = p) && (!c.skip_bound && c.bound[d] && c.bound[d](p), f && fr(t, d)), u;
  }) : [], c.update(), f = !0, fe(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = er(e.target);
      c.fragment && c.fragment.l(d), d.forEach(O);
    } else
      c.fragment && c.fragment.c();
    e.intro && k(t.$$.fragment), q(t, e.target, e.anchor), G();
  }
  $e(o);
}
let wn;
typeof HTMLElement == "function" && (wn = class extends HTMLElement {
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    ee(this, "$$ctor");
    /** Slots */
    ee(this, "$$s");
    /** The Svelte component instance */
    ee(this, "$$c");
    /** Whether or not the custom element is connected */
    ee(this, "$$cn", !1);
    /** Component props data */
    ee(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ee(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ee(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ee(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ee(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const i = this.$$c.$on(e, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(e, n, r);
  }
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(a) {
        return () => {
          let s;
          return {
            c: function() {
              s = y("slot"), a !== "default" && h(s, "name", a);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, f) {
              L(c, s, f);
            },
            d: function(c) {
              c && O(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = rr(this);
      for (const a of this.$$s)
        a in r && (n[a] = [e(a)]);
      for (const a of this.attributes) {
        const s = this.$$g_p(a.name);
        s in this.$$d || (this.$$d[s] = De(s, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const a in this.$$p_d)
          if (this.$$d[a] = this.$$c.$$.ctx[this.$$c.$$.props[a]], this.$$p_d[a].reflect) {
            const s = De(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const a in this.$$l)
        for (const s of this.$$l[a]) {
          const l = this.$$c.$on(a, s);
          this.$$l_u.set(s, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = De(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function De(t, e, n, r) {
  var a;
  const i = (a = n[t]) == null ? void 0 : a.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function X(t, e, n, r, i, a) {
  let s = class extends wn {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((l) => {
    Object.defineProperty(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var c;
        o = De(l, o, e), this.$$d[l] = o, (c = this.$$c) == null || c.$set({ [l]: o });
      }
    });
  }), r.forEach((l) => {
    Object.defineProperty(s.prototype, l, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[l];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
class Y {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ee(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ee(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Q(this, 1), this.$destroy = V;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!bt(n))
      return V;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Yn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const dr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(dr);
const ge = [];
function Cn(t, e) {
  return {
    subscribe: Xe(t, e).subscribe
  };
}
function Xe(t, e = V) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (R(t, l) && (t = l, n)) {
      const o = !ge.length;
      for (const c of r)
        c[1](), ge.push(c, t);
      if (o) {
        for (let c = 0; c < ge.length; c += 2)
          ge[c][0](ge[c + 1]);
        ge.length = 0;
      }
    }
  }
  function a(l) {
    i(l(t));
  }
  function s(l, o = V) {
    const c = [l, o];
    return r.add(c), r.size === 1 && (n = e(i, a) || V), l(t), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Ye(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return Cn(n, (s, l) => {
    let o = !1;
    const c = [];
    let f = 0, d = V;
    const u = () => {
      if (f)
        return;
      d();
      const p = e(r ? c[0] : c, s, l);
      a ? s(p) : d = bt(p) ? p : V;
    }, m = i.map(
      (p, b) => mn(
        p,
        (_) => {
          c[b] = _, f &= ~(1 << b), o && u();
        },
        () => {
          f |= 1 << b;
        }
      )
    );
    return o = !0, u(), function() {
      fe(m), d(), o = !1;
    };
  });
}
const ie = new URLSearchParams(location.search), Re = Xe(null), Ke = Cn([
  {
    slug: "togg",
    name: "Togg",
    models: [
      {
        slug: "t10x-v2-uzun-menzil",
        name: "T10X V2",
        description: "Uzun Menzil",
        meta: {
          batteryCapacity: 88.5,
          acChargingPower: 22
        }
      },
      {
        slug: "t10x-v1-standart-menzil",
        name: "T10X V1",
        description: "Standart Menzil",
        meta: {
          batteryCapacity: 52.4,
          acChargingPower: 11
        }
      },
      {
        slug: "t10x-v1-uzun-menzil",
        name: "T10X V1",
        description: "Uzun Menzil",
        meta: {
          batteryCapacity: 88.5,
          acChargingPower: 22
        }
      }
    ]
  },
  {
    slug: "tesla",
    name: "Tesla",
    models: [
      {
        slug: "model-s",
        name: "Model S",
        description: "",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 16.5
        }
      },
      {
        slug: "model-3",
        name: "Model 3",
        description: "",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 11
        }
      },
      {
        slug: "model-x",
        name: "Model X",
        description: "",
        meta: {
          batteryCapacity: 72.5,
          acChargingPower: 16.5
        }
      },
      {
        slug: "model-y-arkadan-ceker",
        name: "Model Y",
        description: "Arkadan Çeker",
        meta: {
          batteryCapacity: 59.4,
          acChargingPower: 11
        }
      },
      {
        slug: "model-y-dort-ceker",
        name: "Model Y",
        description: "Dört Çeker",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 11
        }
      },
      {
        slug: "cybertruck",
        name: "Cybertruck",
        description: "",
        meta: {
          batteryCapacity: 123,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "audi",
    name: "Audi",
    models: [
      {
        slug: "e-tron-50",
        name: "e-Tron 50",
        description: "",
        meta: {
          batteryCapacity: 95,
          acChargingPower: 11
        }
      },
      {
        slug: "e-tron-55",
        name: "e-Tron 55",
        description: "",
        meta: {
          batteryCapacity: 95,
          acChargingPower: 11
        }
      },
      {
        slug: "e-tron-gt-quattro",
        name: "e-Tron GT quattro",
        description: "",
        meta: {
          batteryCapacity: 83.7,
          acChargingPower: 22
        }
      },
      {
        slug: "e-tron-q4-40",
        name: "e-Tron Q4 40",
        description: "",
        meta: {
          batteryCapacity: 95,
          acChargingPower: 11
        }
      },
      {
        slug: "e-tron-q8-55",
        name: "e-Tron Q8 55",
        description: "",
        meta: {
          batteryCapacity: 106,
          acChargingPower: 11
        }
      },
      {
        slug: "e-tron-q8-55-sportback-quattro",
        name: "e-Tron Q8 55",
        description: "Sportback Quattro",
        meta: {
          batteryCapacity: 106,
          acChargingPower: 11
        }
      },
      {
        slug: "e-tron-rs-gt-quattro",
        name: "e-Tron RS GT Quattro",
        description: "",
        meta: {
          batteryCapacity: 83.7,
          acChargingPower: 22
        }
      }
    ]
  },
  {
    slug: "bmw",
    name: "BMW",
    models: [
      {
        slug: "i3",
        name: "i3",
        description: "",
        meta: {
          batteryCapacity: 42.2,
          acChargingPower: 11
        }
      },
      {
        slug: "i4-edrive30",
        name: "i4 eDrive30",
        description: "",
        meta: {
          batteryCapacity: 80.7,
          acChargingPower: 11
        }
      },
      {
        slug: "i4-edrive40",
        name: "i4 eDrive40",
        description: "",
        meta: {
          batteryCapacity: 80.7,
          acChargingPower: 11
        }
      },
      {
        slug: "i4-m50",
        name: "i4 M50",
        description: "",
        meta: {
          batteryCapacity: 80.7,
          acChargingPower: 11
        }
      },
      {
        slug: "i5-edrive40",
        name: "i5 eDrive40",
        description: "",
        meta: {
          batteryCapacity: 81.2,
          acChargingPower: 11
        }
      },
      {
        slug: "i5-m60-xdrive",
        name: "i5 M60 xDrive",
        description: "",
        meta: {
          batteryCapacity: 81.2,
          acChargingPower: 11
        }
      },
      {
        slug: "i7-m70-xdrive",
        name: "i7 M70 xDrive",
        description: "",
        meta: {
          batteryCapacity: 101.7,
          acChargingPower: 22
        }
      },
      {
        slug: "i7-xdrive60",
        name: "i7 Xdrive60",
        description: "",
        meta: {
          batteryCapacity: 101.7,
          acChargingPower: 11
        }
      },
      {
        slug: "ix-m60",
        name: "iX M60",
        description: "",
        meta: {
          batteryCapacity: 105.2,
          acChargingPower: 11
        }
      },
      {
        slug: "ix-xdrive-40",
        name: "iX xDrive 40",
        description: "",
        meta: {
          batteryCapacity: 71,
          acChargingPower: 11
        }
      },
      {
        slug: "ix-xdrive-50",
        name: "iX xDrive 50",
        description: "",
        meta: {
          batteryCapacity: 105.2,
          acChargingPower: 11
        }
      },
      {
        slug: "ix1-xdrive30",
        name: "iX1 xDrive30",
        description: "",
        meta: {
          batteryCapacity: 64.7,
          acChargingPower: 11
        }
      },
      {
        slug: "ix3-edrive20",
        name: "iX3 eDrive20",
        description: "",
        meta: {
          batteryCapacity: 64.8,
          acChargingPower: 22
        }
      },
      {
        slug: "ix3-edrive30",
        name: "iX3 eDrive30",
        description: "",
        meta: {
          batteryCapacity: 80,
          acChargingPower: 11
        }
      },
      {
        slug: "330e",
        name: "330e",
        description: "",
        meta: {
          batteryCapacity: 7.6,
          acChargingPower: 3.6
        }
      }
    ]
  },
  {
    slug: "byd",
    name: "BYD",
    models: [
      {
        slug: "seal",
        name: "SEAL",
        description: "",
        meta: {
          batteryCapacity: 82.5,
          acChargingPower: 11
        }
      },
      {
        slug: "atto-3",
        name: "ATTO 3",
        description: "",
        meta: {
          batteryCapacity: 60,
          acChargingPower: 11
        }
      },
      {
        slug: "han-cift-motorlu",
        name: "HAN",
        description: "Çift Motorlu",
        meta: {
          batteryCapacity: 77,
          acChargingPower: 11
        }
      },
      {
        slug: "seal-u-dm-i",
        name: "SEAL U DM-i",
        description: "",
        meta: {
          batteryCapacity: 18.3,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "citroen",
    name: "Citroën",
    models: [
      {
        slug: "c-zero",
        name: "C-Zero",
        description: "",
        meta: {
          batteryCapacity: 15,
          acChargingPower: 3.7
        }
      },
      {
        slug: "e-c-4x",
        name: "e-C 4X",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 7.4
        }
      },
      {
        slug: "e-c4",
        name: "e-C4",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 7.4
        }
      }
    ]
  },
  {
    slug: "dacia",
    name: "Dacia",
    models: [
      {
        slug: "spring",
        name: "Spring",
        description: "",
        meta: {
          batteryCapacity: 26.8,
          acChargingPower: 7.4
        }
      }
    ]
  },
  {
    slug: "ds",
    name: "DS",
    models: [
      {
        slug: "ds-3-crossback-e-tense",
        name: "DS 3 Crossback E-Tense",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "fiat",
    name: "Fiat",
    models: [
      {
        slug: "500e",
        name: "500e",
        description: "",
        meta: {
          batteryCapacity: 42,
          acChargingPower: 11
        }
      },
      {
        slug: "e-doblo",
        name: "E-Doblo",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 11
        }
      },
      {
        slug: "e-doblo-cargo",
        name: "E-Doblo Cargo",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 11
        }
      },
      {
        slug: "e-scudo",
        name: "E-Scudo",
        description: "",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "ford",
    name: "Ford",
    models: [
      {
        slug: "e-transit",
        name: "E-Transit",
        description: "",
        meta: {
          batteryCapacity: 68,
          acChargingPower: 11
        }
      },
      {
        slug: "mustang-mach-e-er-rwd",
        name: "Mustang Mach-E ER RWD",
        description: "",
        meta: {
          batteryCapacity: 91,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "volvo",
    name: "Volvo",
    models: [
      {
        slug: "c40-p6",
        name: "C40 P6",
        description: "",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 11
        }
      },
      {
        slug: "c40-p8",
        name: "C40 P8",
        description: "",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 11
        }
      },
      {
        slug: "xc40-recharge-p06",
        name: "XC40 RECHARGE P06",
        description: "",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 11
        }
      },
      {
        slug: "xc40-recharge-p08",
        name: "XC40 RECHARGE P08",
        description: "",
        meta: {
          batteryCapacity: 75,
          acChargingPower: 11
        }
      },
      {
        slug: "xc40",
        name: "XC40",
        description: "",
        meta: {
          batteryCapacity: 10.7,
          acChargingPower: 3.7
        }
      },
      {
        slug: "c40",
        name: "C40",
        description: "",
        meta: {
          batteryCapacity: 10,
          acChargingPower: 3.7
        }
      }
    ]
  },
  {
    slug: "volkswagen",
    name: "Volkswagen",
    models: [
      {
        slug: "e-golf",
        name: "e-Golf",
        description: "",
        meta: {
          batteryCapacity: 35.8,
          acChargingPower: 7.2
        }
      },
      {
        slug: "id-3",
        name: "ID.3",
        description: "",
        meta: {
          batteryCapacity: 58,
          acChargingPower: 11
        }
      },
      {
        slug: "id-4",
        name: "ID.4",
        description: "",
        meta: {
          batteryCapacity: 77,
          acChargingPower: 11
        }
      },
      {
        slug: "id-6",
        name: "ID.6",
        description: "",
        meta: {
          batteryCapacity: 77,
          acChargingPower: 11
        }
      },
      {
        slug: "passat-gte",
        name: "Passat GTE",
        description: "",
        meta: {
          batteryCapacity: 13,
          acChargingPower: 3.7
        }
      }
    ]
  },
  {
    slug: "kia",
    name: "Kia",
    models: [
      {
        slug: "ev6",
        name: "Ev6",
        description: "",
        meta: {
          batteryCapacity: 77.4,
          acChargingPower: 11
        }
      },
      {
        slug: "ev9",
        name: "Ev9",
        description: "",
        meta: {
          batteryCapacity: 99.8,
          acChargingPower: 11
        }
      },
      {
        slug: "niro-ev",
        name: "Niro EV",
        description: "",
        meta: {
          batteryCapacity: 64.8,
          acChargingPower: 11
        }
      },
      {
        slug: "soul-ev",
        name: "Soul EV",
        description: "",
        meta: {
          batteryCapacity: 30,
          acChargingPower: 7
        }
      }
    ]
  },
  {
    slug: "mercedes",
    name: "Mercedes",
    models: [
      {
        slug: "eqa-250-plus",
        name: "EQA 250+",
        description: "",
        meta: {
          batteryCapacity: 70.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqa-250-plus-amg-plus",
        name: "EQA 250+",
        description: " AMG+",
        meta: {
          batteryCapacity: 70.5,
          acChargingPower: 7.4
        }
      },
      {
        slug: "eqa-350-4mati̇c",
        name: "EQA 350",
        description: "4MATIC",
        meta: {
          batteryCapacity: 66.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqa-350-4mati̇c-amg-plus",
        name: "EQA 350 4MATIC",
        description: "AMG+",
        meta: {
          batteryCapacity: 66.5,
          acChargingPower: 7.4
        }
      },
      {
        slug: "eqb-250",
        name: "EQB 250",
        description: "",
        meta: {
          batteryCapacity: 70.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqb-250-plus-amg-plus",
        name: "EQB 250+",
        description: "AMG+",
        meta: {
          batteryCapacity: 70.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqb-350",
        name: "EQB 350",
        description: "",
        meta: {
          batteryCapacity: 66.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqb-350-4mati̇c",
        name: "EQB 350",
        description: "4MATIC",
        meta: {
          batteryCapacity: 66.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqb-350-4mati̇c-amg-plus",
        name: "EQB 350",
        description: "4MATIC AMG+",
        meta: {
          batteryCapacity: 66.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqb-400-4mati̇c",
        name: "EQB 400",
        description: "4MATIC",
        meta: {
          batteryCapacity: 66.5,
          acChargingPower: 11
        }
      },
      {
        slug: "eqc-400-4matic",
        name: "EQC 400",
        description: "4MATIC",
        meta: {
          batteryCapacity: 78,
          acChargingPower: 7.4
        }
      },
      {
        slug: "eqc-400-4mati̇c",
        name: "EQC 400",
        description: "4MATIC",
        meta: {
          batteryCapacity: 80,
          acChargingPower: 11
        }
      },
      {
        slug: "eqe-300",
        name: "EQE 300",
        description: "",
        meta: {
          batteryCapacity: 89,
          acChargingPower: 11
        }
      },
      {
        slug: "eqe-350-4mati̇c-amg",
        name: "EQE 350",
        description: "4MATIC AMG",
        meta: {
          batteryCapacity: 89,
          acChargingPower: 22
        }
      },
      {
        slug: "eqe-350-plus",
        name: "EQE 350+",
        description: "",
        meta: {
          batteryCapacity: 90,
          acChargingPower: 11
        }
      },
      {
        slug: "eqe-500-4mati̇c",
        name: "EQE 500",
        description: "4MATIC",
        meta: {
          batteryCapacity: 90,
          acChargingPower: 11
        }
      },
      {
        slug: "eqe-53-4mati̇c-amg",
        name: "EQE 53",
        description: "4MATIC +AMG",
        meta: {
          batteryCapacity: 90.56,
          acChargingPower: 11
        }
      },
      {
        slug: "eqs-53-4mati̇c-plus-amg",
        name: "EQS 53",
        description: "4MATIC+ AMG",
        meta: {
          batteryCapacity: 108,
          acChargingPower: 22
        }
      },
      {
        slug: "eqs-580-4mati̇c",
        name: "EQS 580",
        description: "4MATIC",
        meta: {
          batteryCapacity: 107.8,
          acChargingPower: 22
        }
      },
      {
        slug: "eqs-350-amg",
        name: "EQS 350",
        description: "AMG",
        meta: {
          batteryCapacity: 90,
          acChargingPower: 11
        }
      },
      {
        slug: "eqs-suv-450-4mati̇c",
        name: "EQS SUV 450",
        description: "4MATIC",
        meta: {
          batteryCapacity: 107.8,
          acChargingPower: 22
        }
      },
      {
        slug: "eqs-suv-450-plus",
        name: "EQS SUV 450+",
        description: "",
        meta: {
          batteryCapacity: 107.8,
          acChargingPower: 22
        }
      },
      {
        slug: "g-580",
        name: "G 580",
        description: "",
        meta: {
          batteryCapacity: 116,
          acChargingPower: 11
        }
      },
      {
        slug: "a250e",
        name: "A250e",
        description: "",
        meta: {
          batteryCapacity: 15.6,
          acChargingPower: 3.7
        }
      }
    ]
  },
  {
    slug: "mg",
    name: "MG",
    models: [
      {
        slug: "mg4-comfort",
        name: "MG4",
        description: "Comfort",
        meta: {
          batteryCapacity: 51,
          acChargingPower: 6.6
        }
      },
      {
        slug: "mg4-luxury",
        name: "MG4",
        description: "Luxury",
        meta: {
          batteryCapacity: 72.6,
          acChargingPower: 11
        }
      },
      {
        slug: "zs-ev",
        name: "ZS EV",
        description: "",
        meta: {
          batteryCapacity: 72.6,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "mini",
    name: "Mini",
    models: [
      {
        slug: "cooper-se",
        name: "Cooper SE",
        description: "",
        meta: {
          batteryCapacity: 32.6,
          acChargingPower: 11
        }
      },
      {
        slug: "mini-aceman-e",
        name: "Mini Aceman E",
        description: "",
        meta: {
          batteryCapacity: 42.5,
          acChargingPower: 11
        }
      },
      {
        slug: "mini-aceman-se",
        name: "Mini Aceman SE",
        description: "",
        meta: {
          batteryCapacity: 54.2,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "seat",
    name: "Seat",
    models: [
      {
        slug: "e-mii-ev",
        name: "e-Mii EV",
        description: "",
        meta: {
          batteryCapacity: 36.8,
          acChargingPower: 7.2
        }
      }
    ]
  },
  {
    slug: "porsche",
    name: "Porsche",
    models: [
      {
        slug: "taycan",
        name: "Taycan",
        description: "",
        meta: {
          batteryCapacity: 79.2,
          acChargingPower: 11
        }
      },
      {
        slug: "taycan-turbo-s-sport-turismo",
        name: "Taycan Turbo S Sport Turismo",
        description: "",
        meta: {
          batteryCapacity: 97,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "renault",
    name: "Renault",
    models: [
      {
        slug: "kango-e",
        name: "Kango E",
        description: "",
        meta: {
          batteryCapacity: 45,
          acChargingPower: 22
        }
      },
      {
        slug: "megane-e-tech-i̇conic",
        name: "Megane E-Tech İconic",
        description: "",
        meta: {
          batteryCapacity: 60,
          acChargingPower: 22
        }
      },
      {
        slug: "megane-e-tech-tecno",
        name: "Megane E-Tech Tecno",
        description: "",
        meta: {
          batteryCapacity: 60,
          acChargingPower: 7.4
        }
      },
      {
        slug: "renault-5-(40-kw)",
        name: "Renault 5 (40 kW)",
        description: "",
        meta: {
          batteryCapacity: 40,
          acChargingPower: 11
        }
      },
      {
        slug: "renault-5-(52-kw)",
        name: "Renault 5 (52 kW)",
        description: "",
        meta: {
          batteryCapacity: 52,
          acChargingPower: 11
        }
      },
      {
        slug: "zoe-40",
        name: "Zoe 40",
        description: "",
        meta: {
          batteryCapacity: 44,
          acChargingPower: 22
        }
      },
      {
        slug: "zoe-50",
        name: "Zoe 50",
        description: "",
        meta: {
          batteryCapacity: 52,
          acChargingPower: 22
        }
      }
    ]
  },
  {
    slug: "nissan",
    name: "Nissan",
    models: [
      {
        slug: "leaf",
        name: "Leaf",
        description: "",
        meta: {
          batteryCapacity: 40,
          acChargingPower: 3.6
        }
      }
    ]
  },
  {
    slug: "opel",
    name: "Opel",
    models: [
      {
        slug: "astra-e",
        name: "Astra E",
        description: "",
        meta: {
          batteryCapacity: 54,
          acChargingPower: 11
        }
      },
      {
        slug: "corsa-e",
        name: "Corsa E",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 7.4
        }
      },
      {
        slug: "grandland-(98kw)",
        name: "Grandland (98kW)",
        description: "",
        meta: {
          batteryCapacity: 98,
          acChargingPower: 11
        }
      },
      {
        slug: "mokka-e",
        name: "Mokka-e",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 7.4
        }
      }
    ]
  },
  {
    slug: "peugeot",
    name: "Peugeot",
    models: [
      {
        slug: "e-2008-suv-(100-kw)",
        name: "e-2008 SUV (100 kW)",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 7.4
        }
      },
      {
        slug: "e-2008-suv-(115-kw)",
        name: "e-2008 SUV (115 kW)",
        description: "",
        meta: {
          batteryCapacity: 54,
          acChargingPower: 7.4
        }
      },
      {
        slug: "e-3008",
        name: "e-3008",
        description: "",
        meta: {
          batteryCapacity: 73,
          acChargingPower: 11
        }
      },
      {
        slug: "e-208",
        name: "e-208",
        description: "",
        meta: {
          batteryCapacity: 50,
          acChargingPower: 7.4
        }
      },
      {
        slug: "e-308",
        name: "e-308",
        description: "",
        meta: {
          batteryCapacity: 54,
          acChargingPower: 7.4
        }
      }
    ]
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    models: [
      {
        slug: "ioniq-5-long-range-awd",
        name: "IONIQ 5 Long Range AWD",
        description: "",
        meta: {
          batteryCapacity: 72.6,
          acChargingPower: 11
        }
      },
      {
        slug: "ioniq-6-çift-motorlu",
        name: "IONIQ 6 Çift Motorlu",
        description: "",
        meta: {
          batteryCapacity: 77.4,
          acChargingPower: 11
        }
      },
      {
        slug: "ioniq-6-tek-motorlu",
        name: "IONIQ 6 Tek Motorlu",
        description: "",
        meta: {
          batteryCapacity: 53,
          acChargingPower: 11
        }
      },
      {
        slug: "kona-ev",
        name: "Kona EV",
        description: "",
        meta: {
          batteryCapacity: 48,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "skoda",
    name: "Škoda",
    models: [
      {
        slug: "enyaq-iv-60",
        name: "Enyaq iV 60",
        description: "",
        meta: {
          batteryCapacity: 62,
          acChargingPower: 11
        }
      },
      {
        slug: "enyaq-iv-80",
        name: "Enyaq iV 80",
        description: "",
        meta: {
          batteryCapacity: 82,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "smart",
    name: "Smart",
    models: [
      {
        slug: "#1",
        name: "#1",
        description: "",
        meta: {
          batteryCapacity: 66,
          acChargingPower: 22
        }
      }
    ]
  },
  {
    slug: "ssangyong",
    name: "SsangYong",
    models: [
      {
        slug: "torres-evx",
        name: "Torres EVX",
        description: "",
        meta: {
          batteryCapacity: 73.4,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "jaguar",
    name: "Jaguar",
    models: [
      {
        slug: "i-pace-ev400",
        name: "I-Pace EV400",
        description: "",
        meta: {
          batteryCapacity: 90,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "jeep",
    name: "Jeep",
    models: [
      {
        slug: "avenger",
        name: "Avenger",
        description: "",
        meta: {
          batteryCapacity: 54,
          acChargingPower: 11
        }
      },
      {
        slug: "compass",
        name: "Compass",
        description: "",
        meta: {
          batteryCapacity: 11.4,
          acChargingPower: 7.2
        }
      }
    ]
  },
  {
    slug: "lexus",
    name: "Lexus",
    models: [
      {
        slug: "ux-300e",
        name: "UX 300e",
        description: "",
        meta: {
          batteryCapacity: 72.8,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi",
    models: [
      {
        slug: "outlander",
        name: "Outlander",
        description: "",
        meta: {
          batteryCapacity: 13.8,
          acChargingPower: 3.7
        }
      }
    ]
  },
  {
    slug: "lotus",
    name: "Lotus",
    models: [
      {
        slug: "eletre",
        name: "Eletre",
        description: "",
        meta: {
          batteryCapacity: 100,
          acChargingPower: 22
        }
      }
    ]
  },
  {
    slug: "maxus",
    name: "Maxus",
    models: [
      {
        slug: "e-deliver-3",
        name: "e-Deliver 3",
        description: "",
        meta: {
          batteryCapacity: 50.2,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "subaru",
    name: "Subaru",
    models: [
      {
        slug: "solterra",
        name: "Solterra",
        description: "",
        meta: {
          batteryCapacity: 71.4,
          acChargingPower: 7
        }
      }
    ]
  },
  {
    slug: "skywell",
    name: "Skywell",
    models: [
      {
        slug: "et-5",
        name: "ET 5",
        description: "",
        meta: {
          batteryCapacity: 85.97,
          acChargingPower: 11
        }
      }
    ]
  },
  {
    slug: "huawei-aito",
    name: "Huawei Aito",
    models: [
      {
        slug: "seres-m5-ev",
        name: "Seres M5-EV",
        description: "",
        meta: {
          batteryCapacity: 79.93,
          acChargingPower: 7
        }
      }
    ]
  },
  {
    slug: "saic-mg",
    name: "SAIC MG",
    models: [
      {
        slug: "zs-ev",
        name: "ZS EV",
        description: "",
        meta: {
          batteryCapacity: 44.5,
          acChargingPower: 6.6
        }
      }
    ]
  },
  {
    slug: "seres",
    name: "Seres",
    models: [
      {
        slug: "3-serisi",
        name: "3 Serisi",
        description: "",
        meta: {
          batteryCapacity: 53.6,
          acChargingPower: 6.6
        }
      }
    ]
  },
  {
    slug: "tata",
    name: "Tata",
    models: [
      {
        slug: "tiago-ev",
        name: "Tiago EV",
        description: "",
        meta: {
          batteryCapacity: 19.2,
          acChargingPower: 3.3
        }
      }
    ]
  },
  {
    slug: "xev",
    name: "XEV",
    models: [
      {
        slug: "yoyo",
        name: "YOYO",
        description: "",
        meta: {
          batteryCapacity: 10.3,
          acChargingPower: 3.6
        }
      }
    ]
  },
  {
    slug: "hozon",
    name: "Hozon",
    models: [
      {
        slug: "neta-u",
        name: "Neta U",
        description: "",
        meta: {
          batteryCapacity: 68.2,
          acChargingPower: 7
        }
      }
    ]
  },
  {
    slug: "leapmotor",
    name: "Leapmotor",
    models: [
      {
        slug: "t03",
        name: "T03",
        description: "",
        meta: {
          batteryCapacity: 41.3,
          acChargingPower: 6.6
        }
      }
    ]
  }
]), we = Xe(ie.get("brand") ?? null), Ue = Xe(ie.get("model") ?? null), wt = Ye(Ke, (t) => t), gr = Ye(
  [Ke, we],
  ([t, e]) => {
    var n;
    return ((n = t.find(({ slug: r }) => r === e)) == null ? void 0 : n.models) ?? [];
  },
  []
), pr = Ye(
  [Ke, we, Ue],
  ([t, e, n]) => {
    var r;
    return ((r = t.find(({ slug: i }) => i === e)) == null ? void 0 : r.models.find(({ slug: i }) => i === n)) ?? {};
  },
  {}
), mr = Ye([Ke, we], ([t, e]) => (t == null ? void 0 : t.find(({ slug: n }) => n === e)) ?? {});
function hr(t) {
  Z(t, "svelte-u96ot7", `.loading.svelte-u96ot7{animation:svelte-u96ot7-spin 1.5s infinite linear;background:conic-gradient(from 30deg, rgba(119, 119, 119, 0), rgba(119, 119, 119, 0.48), rgba(119, 119, 119, 0.8), rgb(119, 119, 119));color:rgba(255, 255, 255, 0);mask:url("data:image/svg+xml,<svg width='48' height='48' xmlns='http://www.w3.org/2000/svg'><path d='M24 1a2.347 2.347 0 1 1 0 4.694 18.306 18.306 0 1 0 13.359 5.792 2.347 2.347 0 1 1 3.426-3.21A23 23 0 1 1 24 1Z' fill='black'/></svg>");mask-size:cover;opacity:0.7;display:block;block-size:var(--size);inline-size:var(--size);min-block-size:var(--size);min-inline-size:var(--size);max-inline-size:100%;overflow:hidden;text-indent:-9999px;transition:color 0.33s ease, transform 0.5s cubic-bezier(0.5, 0, 0, 0.75)}@keyframes svelte-u96ot7-spin{from{transform:rotate(0deg)}to{transform:rotate(1turn)}}`);
}
function br(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), h(n, "fill", "currentColor"), h(n, "d", "M24 1a2.347 2.347 0 1 1 0 4.694 18.306 18.306 0 1 0 13.359 5.792 2.347 2.347 0 1 1 3.426-3.21A23 23 0 1 1 24 1"), Ve(
        e,
        "--size",
        /*size*/
        t[0] + "px"
      ), h(e, "class", "loading svelte-u96ot7"), h(e, "viewBox", "0 0 48 48"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      L(r, e, i), g(e, n);
    },
    p(r, [i]) {
      i & /*size*/
      1 && Ve(
        e,
        "--size",
        /*size*/
        r[0] + "px"
      );
    },
    i: V,
    o: V,
    d(r) {
      r && O(e);
    }
  };
}
function vr(t, e, n) {
  let { size: r = "48" } = e;
  return t.$$set = (i) => {
    "size" in i && n(0, r = i.size);
  }, [r];
}
class xn extends Y {
  constructor(e) {
    super(), W(this, e, vr, br, R, { size: 0 }, hr);
  }
  get size() {
    return this.$$.ctx[0];
  }
  set size(e) {
    this.$$set({ size: e }), G();
  }
}
X(xn, { size: {} }, [], [], !0);
function yr(t) {
  Z(t, "svelte-8bdcgh", ".statu-bemu8z{font-size:0.75rem;line-height:1rem;--eversarj-text-opacity:1;color:rgb(115 115 115 / var(--eversarj-text-opacity));font-weight:600}");
}
const _r = (t) => ({}), It = (t) => ({}), wr = (t) => ({}), Mt = (t) => ({});
function Cr(t) {
  let e;
  const n = (
    /*#slots*/
    t[8].loading
  ), r = me(
    n,
    t,
    /*$$scope*/
    t[7],
    It
  ), i = r || kr();
  return {
    c() {
      i && i.c();
    },
    m(a, s) {
      i && i.m(a, s), e = !0;
    },
    p(a, s) {
      r && r.p && (!e || s & /*$$scope*/
      128) && be(
        r,
        n,
        a,
        /*$$scope*/
        a[7],
        e ? he(
          n,
          /*$$scope*/
          a[7],
          s,
          _r
        ) : ve(
          /*$$scope*/
          a[7]
        ),
        It
      );
    },
    i(a) {
      e || (k(i, a), e = !0);
    },
    o(a) {
      A(i, a), e = !1;
    },
    d(a) {
      i && i.d(a);
    }
  };
}
function xr(t) {
  let e;
  const n = (
    /*#slots*/
    t[8].error
  ), r = me(
    n,
    t,
    /*$$scope*/
    t[7],
    Mt
  ), i = r || jr();
  return {
    c() {
      i && i.c();
    },
    m(a, s) {
      i && i.m(a, s), e = !0;
    },
    p(a, s) {
      r && r.p && (!e || s & /*$$scope*/
      128) && be(
        r,
        n,
        a,
        /*$$scope*/
        a[7],
        e ? he(
          n,
          /*$$scope*/
          a[7],
          s,
          wr
        ) : ve(
          /*$$scope*/
          a[7]
        ),
        Mt
      );
    },
    i(a) {
      e || (k(i, a), e = !0);
    },
    o(a) {
      A(i, a), e = !1;
    },
    d(a) {
      i && i.d(a);
    }
  };
}
function $r(t) {
  let e, n, r = [
    {
      src: n = "" + /*url*/
      (t[2] + /*src*/
      t[0])
    },
    { alt: (
      /*alt*/
      t[1]
    ) },
    /*$$restProps*/
    t[6]
  ], i = {};
  for (let a = 0; a < r.length; a += 1)
    i = J(i, r[a]);
  return {
    c() {
      e = y("img"), Ne(e, i);
    },
    m(a, s) {
      L(a, e, s);
    },
    p(a, s) {
      Ne(e, i = Ce(r, [
        s & /*url, src*/
        5 && !Xn(e.src, n = "" + /*url*/
        (a[2] + /*src*/
        a[0])) && { src: n },
        s & /*alt*/
        2 && { alt: (
          /*alt*/
          a[1]
        ) },
        s & /*$$restProps*/
        64 && /*$$restProps*/
        a[6]
      ]));
    },
    i: V,
    o: V,
    d(a) {
      a && O(e);
    }
  };
}
function kr(t) {
  let e, n;
  return e = new xn({ props: { size: "24" } }), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p: V,
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function jr(t) {
  let e;
  return {
    c() {
      e = y("div"), e.textContent = "Resim Bulunamadı", h(e, "class", "statu-bemu8z");
    },
    m(n, r) {
      L(n, e, r);
    },
    p: V,
    d(n) {
      n && O(e);
    }
  };
}
function Pr(t) {
  let e, n, r, i;
  const a = [$r, xr, Cr], s = [];
  function l(o, c) {
    return (
      /*loaded*/
      o[3] ? 0 : (
        /*failed*/
        o[4] ? 1 : (
          /*loading*/
          o[5] ? 2 : -1
        )
      )
    );
  }
  return ~(e = l(t)) && (n = s[e] = a[e](t)), {
    c() {
      n && n.c(), r = Ee();
    },
    m(o, c) {
      ~e && s[e].m(o, c), L(o, r, c), i = !0;
    },
    p(o, [c]) {
      let f = e;
      e = l(o), e === f ? ~e && s[e].p(o, c) : (n && (ae(), A(s[f], 1, 1, () => {
        s[f] = null;
      }), se()), ~e ? (n = s[e], n ? n.p(o, c) : (n = s[e] = a[e](o), n.c()), k(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(o) {
      i || (k(n), i = !0);
    },
    o(o) {
      A(n), i = !1;
    },
    d(o) {
      o && O(r), ~e && s[e].d(o);
    }
  };
}
function Ar(t, e, n) {
  const r = ["src", "alt", "url"];
  let i = qe(e, r), { $$slots: a = {}, $$scope: s } = e, { src: l } = e, { alt: o = "Media" } = e, { url: c = "https://raw.githubusercontent.com/ahmethamdi0/cdn/main" } = e, f = !1, d = !1, u = !1;
  return yt(() => {
    const m = new Image();
    m.src = c + l, n(5, u = !0), m.onload = () => {
      n(5, u = !1), n(3, f = !0);
    }, m.onerror = () => {
      n(5, u = !1), n(4, d = !0);
    };
  }), t.$$set = (m) => {
    e = J(J({}, e), Be(m)), n(6, i = qe(e, r)), "src" in m && n(0, l = m.src), "alt" in m && n(1, o = m.alt), "url" in m && n(2, c = m.url), "$$scope" in m && n(7, s = m.$$scope);
  }, [l, o, c, f, d, u, i, s, a];
}
class oe extends Y {
  constructor(e) {
    super(), W(this, e, Ar, Pr, R, { src: 0, alt: 1, url: 2 }, yr);
  }
  get src() {
    return this.$$.ctx[0];
  }
  set src(e) {
    this.$$set({ src: e }), G();
  }
  get alt() {
    return this.$$.ctx[1];
  }
  set alt(e) {
    this.$$set({ alt: e }), G();
  }
  get url() {
    return this.$$.ctx[2];
  }
  set url(e) {
    this.$$set({ url: e }), G();
  }
}
X(oe, { src: {}, alt: {}, url: {} }, ["error", "loading"], [], !0);
function Sr(t) {
  Z(t, "svelte-14bo021", ".card.svelte-14bo021{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;border-width:1px;border-color:rgb(229 229 229 / 0.5);border-style:solid;padding-top:0.25rem;height:8rem;cursor:pointer;border-radius:0.875rem;--eversarj-bg-opacity:1;background-color:rgb(250 250 250 / var(--eversarj-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.card-image.svelte-14bo021{pointer-events:none;width:100%;height:2.75rem;display:flex;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;max-width:70%}.card-image.svelte-14bo021 img{height:100%;width:100%;object-fit:contain;object-position:center}.card-name.svelte-14bo021{width:100%;text-align:center;color:rgb(38 38 38 / 0.9);font-family:InterDisplay, Inter, sans-serif;font-size:18px;font-weight:550;line-height:normal;letter-spacing:-0.4px}.card.svelte-14bo021:hover{border-color:rgb(47 108 178 / 0.3);background-color:rgb(47 108 178 / 0.03)}.card.selected.svelte-14bo021{border-color:rgb(47 108 178 / 0.8);background-color:rgb(47 108 178 / 0.08);box-shadow:0 0 0 2px rgba(47, 108, 178, 0.1)}");
}
function Tt(t) {
  let e, n;
  return e = new oe({
    props: {
      src: "/brands/" + /*slug*/
      t[1] + "/logo.png",
      alt: (
        /*name*/
        t[0] + " Logo"
      ),
      draggable: "false"
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p(r, i) {
      const a = {};
      i & /*slug*/
      2 && (a.src = "/brands/" + /*slug*/
      r[1] + "/logo.png"), i & /*name*/
      1 && (a.alt = /*name*/
      r[0] + " Logo"), e.$set(a);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function Er(t) {
  let e, n, r = (
    /*slug*/
    t[1]
  ), i, a, s, l, o, c, f = Tt(t);
  return {
    c() {
      e = y("button"), n = y("span"), f.c(), i = z(), a = y("span"), s = B(
        /*name*/
        t[0]
      ), h(n, "class", "card-image svelte-14bo021"), h(a, "class", "card-name svelte-14bo021"), h(e, "class", "card svelte-14bo021"), _e(
        e,
        "selected",
        /*$selectedBrand*/
        t[2] === /*slug*/
        t[1]
      );
    },
    m(d, u) {
      L(d, e, u), g(e, n), f.m(n, null), g(e, i), g(e, a), g(a, s), l = !0, o || (c = We(
        e,
        "click",
        /*onSelect*/
        t[3]
      ), o = !0);
    },
    p(d, [u]) {
      u & /*slug*/
      2 && R(r, r = /*slug*/
      d[1]) ? (ae(), A(f, 1, 1, V), se(), f = Tt(d), f.c(), k(f, 1), f.m(n, null)) : f.p(d, u), (!l || u & /*name*/
      1) && H(
        s,
        /*name*/
        d[0]
      ), (!l || u & /*$selectedBrand, slug*/
      6) && _e(
        e,
        "selected",
        /*$selectedBrand*/
        d[2] === /*slug*/
        d[1]
      );
    },
    i(d) {
      l || (k(f), l = !0);
    },
    o(d) {
      A(f), l = !1;
    },
    d(d) {
      d && O(e), f.d(d), o = !1, c();
    }
  };
}
function zr(t, e, n) {
  let r, i;
  te(t, Re, (c) => n(4, r = c)), te(t, we, (c) => n(2, i = c));
  let { name: a } = e, { slug: s } = e;
  const l = bn(), o = async () => {
    ie.set("brand", s), ie.delete("model"), we.set(s), Ue.set(null), l("select"), window.history.pushState({}, "Page", `?${ie.toString()}`), await _n(), r.querySelector("#step-model").scrollIntoView({ behavior: "smooth" });
  };
  return t.$$set = (c) => {
    "name" in c && n(0, a = c.name), "slug" in c && n(1, s = c.slug);
  }, [a, s, i, o];
}
let $n = class extends Y {
  constructor(e) {
    super(), W(this, e, zr, Er, R, { name: 0, slug: 1 }, Sr);
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), G();
  }
  get slug() {
    return this.$$.ctx[1];
  }
  set slug(e) {
    this.$$set({ slug: e }), G();
  }
};
X($n, { name: {}, slug: {} }, [], [], !0);
function Ir(t) {
  Z(t, "svelte-vf7xe1", '.step.svelte-vf7xe1.svelte-vf7xe1{display:grid;gap:8px 20px;align-items:center;grid-template-columns:min-content 1fr;grid-template-rows:min-content auto;scroll-margin:20px 0;grid-template-areas:"Count Header" "Line Body"}.step-count.svelte-vf7xe1.svelte-vf7xe1{display:flex;align-items:center;justify-content:center;width:2.375rem;height:2.375rem;border-radius:9999px;--eversarj-bg-opacity:1;background-color:rgb(38 38 38 / var(--eversarj-bg-opacity));text-align:center;font-size:1rem;line-height:1.5rem;color:rgb(255 255 255 / 0.9);font-weight:500;grid-area:Count}.step-count.svelte-vf7xe1.svelte-vf7xe1::before{counter-increment:step-counter;content:counter(step-counter)}.step-line.svelte-vf7xe1.svelte-vf7xe1{margin-left:auto;margin-right:auto;width:0.125rem;height:100%}.step-header.svelte-vf7xe1.svelte-vf7xe1{display:flex;align-items:center;justify-content:space-between;row-gap:0.25rem;column-gap:1rem;grid-area:Header;display:grid;grid-template-columns:1fr auto;grid-template-rows:min-content min-content;grid-template-areas:"Title Actions" "Description Actions"}.step-header__title.svelte-vf7xe1.svelte-vf7xe1{margin:0;--eversarj-text-opacity:1;color:rgb(38 38 38 / var(--eversarj-text-opacity));font-size:18px;line-height:20px;font-weight:500;letter-spacing:-0.27px;grid-area:Title}.step-header__description.svelte-vf7xe1.svelte-vf7xe1{margin:0;--eversarj-text-opacity:1;color:rgb(115 115 115 / var(--eversarj-text-opacity));font-size:14px;line-height:18px;font-weight:400;letter-spacing:-0.49px;grid-area:Description}.step-header__actions.svelte-vf7xe1.svelte-vf7xe1{display:flex;flex:none;gap:1rem;grid-area:Actions}.step-body.svelte-vf7xe1.svelte-vf7xe1{padding-bottom:2.75rem;padding-top:1rem;grid-area:Body}.step.svelte-vf7xe1:not(:last-child) .step-line.svelte-vf7xe1{--eversarj-bg-opacity:1;background-color:rgb(229 229 229 / var(--eversarj-bg-opacity))}.step.svelte-vf7xe1:last-child .step-line.svelte-vf7xe1{--eversarj-gradient-from-position:0%;--eversarj-gradient-from:rgb(229 229 229 / var(--eversarj-from-opacity, 1)) var(--eversarj-gradient-from-position);--eversarj-gradient-to-position:100%;--eversarj-gradient-to:rgb(229 229 229 / 0) var(--eversarj-gradient-to-position);--eversarj-gradient-stops:var(--eversarj-gradient-from), var(--eversarj-gradient-to);--eversarj-gradient-to-position:100%;--eversarj-gradient-to:transparent var(--eversarj-gradient-to-position);--eversarj-gradient-shape:to bottom;--eversarj-gradient:var(--eversarj-gradient-shape), var(--eversarj-gradient-stops);background-image:linear-gradient(var(--eversarj-gradient))}.step.svelte-vf7xe1:last-child .step-body.svelte-vf7xe1{padding-bottom:0}@media(max-width: 1280px){.step.svelte-vf7xe1.svelte-vf7xe1{grid-template-columns:min-content 1fr;grid-template-rows:min-content auto;scroll-margin:20px 0;grid-template-areas:"Count Header" "Body Body"}.step-line.svelte-vf7xe1.svelte-vf7xe1{display:none}}@media(max-width: 768px){.step.svelte-vf7xe1.svelte-vf7xe1{gap:8px 12px}.step-count.svelte-vf7xe1.svelte-vf7xe1{width:2.125rem;height:2.125rem}.step-header.svelte-vf7xe1.svelte-vf7xe1{display:flex;flex-direction:column;align-items:flex-start}.step-header__title.svelte-vf7xe1.svelte-vf7xe1{font-size:16px;line-height:18px}.step-header__description.svelte-vf7xe1.svelte-vf7xe1{font-size:13px;line-height:16px}.step-header__actions.svelte-vf7xe1.svelte-vf7xe1{display:none}}');
}
const Mr = (t) => ({}), Dt = (t) => ({}), Tr = (t) => ({}), Ot = (t) => ({}), Dr = (t) => ({}), Lt = (t) => ({});
function Or(t) {
  let e;
  return {
    c() {
      e = B(
        /*title*/
        t[1]
      );
    },
    m(n, r) {
      L(n, e, r);
    },
    p(n, r) {
      r & /*title*/
      2 && H(
        e,
        /*title*/
        n[1]
      );
    },
    d(n) {
      n && O(e);
    }
  };
}
function Lr(t) {
  let e;
  return {
    c() {
      e = B(
        /*description*/
        t[2]
      );
    },
    m(n, r) {
      L(n, e, r);
    },
    p(n, r) {
      r & /*description*/
      4 && H(
        e,
        /*description*/
        n[2]
      );
    },
    d(n) {
      n && O(e);
    }
  };
}
function Br(t) {
  let e, n, r, i, a, s, l, o, c, f, d, u, m, p, b;
  const _ = (
    /*#slots*/
    t[4].title
  ), w = me(
    _,
    t,
    /*$$scope*/
    t[3],
    Lt
  ), v = w || Or(t), j = (
    /*#slots*/
    t[4].description
  ), S = me(
    j,
    t,
    /*$$scope*/
    t[3],
    Ot
  ), x = S || Lr(t), $ = (
    /*#slots*/
    t[4].action
  ), P = me(
    $,
    t,
    /*$$scope*/
    t[3],
    Dt
  ), T = (
    /*#slots*/
    t[4].default
  ), E = me(
    T,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      e = y("section"), n = y("div"), r = z(), i = y("div"), a = z(), s = y("div"), l = y("h2"), v && v.c(), o = z(), c = y("p"), x && x.c(), f = z(), d = y("div"), P && P.c(), u = z(), m = y("div"), E && E.c(), h(n, "class", "step-count svelte-vf7xe1"), h(i, "class", "step-line svelte-vf7xe1"), h(l, "class", "step-header__title svelte-vf7xe1"), h(c, "class", "step-header__description svelte-vf7xe1"), h(d, "class", "step-header__actions svelte-vf7xe1"), h(s, "class", "step-header svelte-vf7xe1"), h(m, "class", "step-body svelte-vf7xe1"), h(e, "class", "step svelte-vf7xe1"), h(e, "id", p = "step-" + /*name*/
      t[0]);
    },
    m(C, D) {
      L(C, e, D), g(e, n), g(e, r), g(e, i), g(e, a), g(e, s), g(s, l), v && v.m(l, null), g(s, o), g(s, c), x && x.m(c, null), g(s, f), g(s, d), P && P.m(d, null), g(e, u), g(e, m), E && E.m(m, null), b = !0;
    },
    p(C, [D]) {
      w ? w.p && (!b || D & /*$$scope*/
      8) && be(
        w,
        _,
        C,
        /*$$scope*/
        C[3],
        b ? he(
          _,
          /*$$scope*/
          C[3],
          D,
          Dr
        ) : ve(
          /*$$scope*/
          C[3]
        ),
        Lt
      ) : v && v.p && (!b || D & /*title*/
      2) && v.p(C, b ? D : -1), S ? S.p && (!b || D & /*$$scope*/
      8) && be(
        S,
        j,
        C,
        /*$$scope*/
        C[3],
        b ? he(
          j,
          /*$$scope*/
          C[3],
          D,
          Tr
        ) : ve(
          /*$$scope*/
          C[3]
        ),
        Ot
      ) : x && x.p && (!b || D & /*description*/
      4) && x.p(C, b ? D : -1), P && P.p && (!b || D & /*$$scope*/
      8) && be(
        P,
        $,
        C,
        /*$$scope*/
        C[3],
        b ? he(
          $,
          /*$$scope*/
          C[3],
          D,
          Mr
        ) : ve(
          /*$$scope*/
          C[3]
        ),
        Dt
      ), E && E.p && (!b || D & /*$$scope*/
      8) && be(
        E,
        T,
        C,
        /*$$scope*/
        C[3],
        b ? he(
          T,
          /*$$scope*/
          C[3],
          D,
          null
        ) : ve(
          /*$$scope*/
          C[3]
        ),
        null
      ), (!b || D & /*name*/
      1 && p !== (p = "step-" + /*name*/
      C[0])) && h(e, "id", p);
    },
    i(C) {
      b || (k(v, C), k(x, C), k(P, C), k(E, C), b = !0);
    },
    o(C) {
      A(v, C), A(x, C), A(P, C), A(E, C), b = !1;
    },
    d(C) {
      C && O(e), v && v.d(C), x && x.d(C), P && P.d(C), E && E.d(C);
    }
  };
}
function qr(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { name: a } = e, { title: s } = e, { description: l } = e;
  return t.$$set = (o) => {
    "name" in o && n(0, a = o.name), "title" in o && n(1, s = o.title), "description" in o && n(2, l = o.description), "$$scope" in o && n(3, i = o.$$scope);
  }, [a, s, l, i, r];
}
class Je extends Y {
  constructor(e) {
    super(), W(this, e, qr, Br, R, { name: 0, title: 1, description: 2 }, Ir);
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), G();
  }
  get title() {
    return this.$$.ctx[1];
  }
  set title(e) {
    this.$$set({ title: e }), G();
  }
  get description() {
    return this.$$.ctx[2];
  }
  set description(e) {
    this.$$set({ description: e }), G();
  }
}
X(Je, { name: {}, title: {}, description: {} }, ["title", "description", "action", "default"], [], !0);
const ke = /^[a-z0-9]+(-[a-z0-9]+)*$/, Ze = (t, e, n, r = "") => {
  const i = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    r = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const l = i.pop(), o = i.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : r,
      prefix: o,
      name: l
    };
    return e && !Oe(c) ? null : c;
  }
  const a = i[0], s = a.split("-");
  if (s.length > 1) {
    const l = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return e && !Oe(l) ? null : l;
  }
  if (n && r === "") {
    const l = {
      provider: r,
      prefix: "",
      name: a
    };
    return e && !Oe(l, n) ? null : l;
  }
  return null;
}, Oe = (t, e) => t ? !!((t.provider === "" || t.provider.match(ke)) && (e && t.prefix === "" || t.prefix.match(ke)) && t.name.match(ke)) : !1, kn = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), He = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), et = Object.freeze({
  ...kn,
  ...He
}), ct = Object.freeze({
  ...et,
  body: "",
  hidden: !1
});
function Qr(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Bt(t, e) {
  const n = Qr(t, e);
  for (const r in ct)
    r in He ? r in t && !(r in n) && (n[r] = He[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function Nr(t, e) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function a(s) {
    if (n[s])
      return i[s] = [];
    if (!(s in i)) {
      i[s] = null;
      const l = r[s] && r[s].parent, o = l && a(l);
      o && (i[s] = [l].concat(o));
    }
    return i[s];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(a), i;
}
function Vr(t, e, n) {
  const r = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null);
  let a = {};
  function s(l) {
    a = Bt(
      r[l] || i[l],
      a
    );
  }
  return s(e), n.forEach(s), Bt(t, a);
}
function jn(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((i) => {
    e(i, null), n.push(i);
  });
  const r = Nr(t);
  for (const i in r) {
    const a = r[i];
    a && (e(i, Vr(t, i, a)), n.push(i));
  }
  return n;
}
const Fr = {
  provider: "",
  aliases: {},
  not_found: {},
  ...kn
};
function rt(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Pn(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !rt(t, Fr))
    return null;
  const n = e.icons;
  for (const i in n) {
    const a = n[i];
    if (!i.match(ke) || typeof a.body != "string" || !rt(
      a,
      ct
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in r) {
    const a = r[i], s = a.parent;
    if (!i.match(ke) || typeof s != "string" || !n[s] && !r[s] || !rt(
      a,
      ct
    ))
      return null;
  }
  return e;
}
const qt = /* @__PURE__ */ Object.create(null);
function Gr(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ue(t, e) {
  const n = qt[t] || (qt[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Gr(t, e));
}
function Ct(t, e) {
  return Pn(e) ? jn(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function Rr(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Pe = !1;
function An(t) {
  return typeof t == "boolean" && (Pe = t), Pe;
}
function Ur(t) {
  const e = typeof t == "string" ? Ze(t, !0, Pe) : t;
  if (e) {
    const n = ue(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Hr(t, e) {
  const n = Ze(t, !0, Pe);
  if (!n)
    return !1;
  const r = ue(n.provider, n.prefix);
  return Rr(r, n.name, e);
}
function Wr(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), Pe && !e && !t.prefix) {
    let i = !1;
    return Pn(t) && (t.prefix = "", jn(t, (a, s) => {
      s && Hr(a, s) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!Oe({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = ue(e, n);
  return !!Ct(r, t);
}
const Sn = Object.freeze({
  width: null,
  height: null
}), En = Object.freeze({
  // Dimensions
  ...Sn,
  // Transformations
  ...He
}), Xr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Yr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qt(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(Xr);
  if (r === null || !r.length)
    return t;
  const i = [];
  let a = r.shift(), s = Yr.test(a);
  for (; ; ) {
    if (s) {
      const l = parseFloat(a);
      isNaN(l) ? i.push(a) : i.push(Math.ceil(l * e * n) / n);
    } else
      i.push(a);
    if (a = r.shift(), a === void 0)
      return i.join("");
    s = !s;
  }
}
function Kr(t, e = "defs") {
  let n = "";
  const r = t.indexOf("<" + e);
  for (; r >= 0; ) {
    const i = t.indexOf(">", r), a = t.indexOf("</" + e);
    if (i === -1 || a === -1)
      break;
    const s = t.indexOf(">", a);
    if (s === -1)
      break;
    n += t.slice(i + 1, a).trim(), t = t.slice(0, r).trim() + t.slice(s + 1);
  }
  return {
    defs: n,
    content: t
  };
}
function Jr(t, e) {
  return t ? "<defs>" + t + "</defs>" + e : e;
}
function Zr(t, e, n) {
  const r = Kr(t);
  return Jr(r.defs, e + r.content + n);
}
const ei = (t) => t === "unset" || t === "undefined" || t === "none";
function ti(t, e) {
  const n = {
    ...et,
    ...t
  }, r = {
    ...En,
    ...e
  }, i = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let a = n.body;
  [n, r].forEach((b) => {
    const _ = [], w = b.hFlip, v = b.vFlip;
    let j = b.rotate;
    w ? v ? j += 2 : (_.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), _.push("scale(-1 1)"), i.top = i.left = 0) : v && (_.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), _.push("scale(1 -1)"), i.top = i.left = 0);
    let S;
    switch (j < 0 && (j -= Math.floor(j / 4) * 4), j = j % 4, j) {
      case 1:
        S = i.height / 2 + i.top, _.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        _.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        S = i.width / 2 + i.left, _.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    j % 2 === 1 && (i.left !== i.top && (S = i.left, i.left = i.top, i.top = S), i.width !== i.height && (S = i.width, i.width = i.height, i.height = S)), _.length && (a = Zr(
      a,
      '<g transform="' + _.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, l = r.height, o = i.width, c = i.height;
  let f, d;
  s === null ? (d = l === null ? "1em" : l === "auto" ? c : l, f = Qt(d, o / c)) : (f = s === "auto" ? o : s, d = l === null ? Qt(f, c / o) : l === "auto" ? c : l);
  const u = {}, m = (b, _) => {
    ei(_) || (u[b] = _.toString());
  };
  m("width", f), m("height", d);
  const p = [i.left, i.top, o, c];
  return u.viewBox = p.join(" "), {
    attributes: u,
    viewBox: p,
    body: a
  };
}
const ni = /\sid="(\S+)"/g, ri = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ii = 0;
function ai(t, e = ri) {
  const n = [];
  let r;
  for (; r = ni.exec(t); )
    n.push(r[1]);
  if (!n.length)
    return t;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((a) => {
    const s = typeof e == "function" ? e(a) : e + (ii++).toString(), l = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + s + i + "$3"
    );
  }), t = t.replace(new RegExp(i, "g"), ""), t;
}
const ut = /* @__PURE__ */ Object.create(null);
function si(t, e) {
  ut[t] = e;
}
function ft(t) {
  return ut[t] || ut[""];
}
function xt(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const $t = /* @__PURE__ */ Object.create(null), xe = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Le = [];
for (; xe.length > 0; )
  xe.length === 1 || Math.random() > 0.5 ? Le.push(xe.shift()) : Le.push(xe.pop());
$t[""] = xt({
  resources: ["https://api.iconify.design"].concat(Le)
});
function oi(t, e) {
  const n = xt(e);
  return n === null ? !1 : ($t[t] = n, !0);
}
function kt(t) {
  return $t[t];
}
const li = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Nt = li();
function ci(t, e) {
  const n = kt(t);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let i = 0;
    n.resources.forEach((s) => {
      i = Math.max(i, s.length);
    });
    const a = e + ".json?icons=";
    r = n.maxURL - i - n.path.length - a.length;
  }
  return r;
}
function ui(t) {
  return t === 404;
}
const fi = (t, e, n) => {
  const r = [], i = ci(t, e), a = "icons";
  let s = {
    type: a,
    provider: t,
    prefix: e,
    icons: []
  }, l = 0;
  return n.forEach((o, c) => {
    l += o.length + 1, l >= i && c > 0 && (r.push(s), s = {
      type: a,
      provider: t,
      prefix: e,
      icons: []
    }, l = o.length), s.icons.push(o);
  }), r.push(s), r;
};
function di(t) {
  if (typeof t == "string") {
    const e = kt(t);
    if (e)
      return e.path;
  }
  return "/";
}
const gi = (t, e, n) => {
  if (!Nt) {
    n("abort", 424);
    return;
  }
  let r = di(e.provider);
  switch (e.type) {
    case "icons": {
      const a = e.prefix, l = e.icons.join(","), o = new URLSearchParams({
        icons: l
      });
      r += a + ".json?" + o.toString();
      break;
    }
    case "custom": {
      const a = e.uri;
      r += a.slice(0, 1) === "/" ? a.slice(1) : a;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let i = 503;
  Nt(t + r).then((a) => {
    const s = a.status;
    if (s !== 200) {
      setTimeout(() => {
        n(ui(s) ? "abort" : "next", s);
      });
      return;
    }
    return i = 501, a.json();
  }).then((a) => {
    if (typeof a != "object" || a === null) {
      setTimeout(() => {
        a === 404 ? n("abort", a) : n("next", i);
      });
      return;
    }
    setTimeout(() => {
      n("success", a);
    });
  }).catch(() => {
    n("next", i);
  });
}, pi = {
  prepare: fi,
  send: gi
};
function mi(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((i, a) => i.provider !== a.provider ? i.provider.localeCompare(a.provider) : i.prefix !== a.prefix ? i.prefix.localeCompare(a.prefix) : i.name.localeCompare(a.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((i) => {
    if (r.name === i.name && r.prefix === i.prefix && r.provider === i.provider)
      return;
    r = i;
    const a = i.provider, s = i.prefix, l = i.name, o = n[a] || (n[a] = /* @__PURE__ */ Object.create(null)), c = o[s] || (o[s] = ue(a, s));
    let f;
    l in c.icons ? f = e.loaded : s === "" || c.missing.has(l) ? f = e.missing : f = e.pending;
    const d = {
      provider: a,
      prefix: s,
      name: l
    };
    f.push(d);
  }), e;
}
function zn(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((i) => i.id !== e));
  });
}
function hi(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const r = t.provider, i = t.prefix;
    e.forEach((a) => {
      const s = a.icons, l = s.pending.length;
      s.pending = s.pending.filter((o) => {
        if (o.prefix !== i)
          return !0;
        const c = o.name;
        if (t.icons[c])
          s.loaded.push({
            provider: r,
            prefix: i,
            name: c
          });
        else if (t.missing.has(c))
          s.missing.push({
            provider: r,
            prefix: i,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== l && (n || zn([t], a.id), a.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        a.abort
      ));
    });
  }));
}
let bi = 0;
function vi(t, e, n) {
  const r = bi++, i = zn.bind(null, n, r);
  if (!e.pending.length)
    return i;
  const a = {
    id: r,
    icons: e,
    callback: t,
    abort: i
  };
  return n.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(a);
  }), i;
}
function yi(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((i) => {
    const a = typeof i == "string" ? Ze(i, e, n) : i;
    a && r.push(a);
  }), r;
}
var _i = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function wi(t, e, n, r) {
  const i = t.resources.length, a = t.random ? Math.floor(Math.random() * i) : t.index;
  let s;
  if (t.random) {
    let $ = t.resources.slice(0);
    for (s = []; $.length > 1; ) {
      const P = Math.floor(Math.random() * $.length);
      s.push($[P]), $ = $.slice(0, P).concat($.slice(P + 1));
    }
    s = s.concat($);
  } else
    s = t.resources.slice(a).concat(t.resources.slice(0, a));
  const l = Date.now();
  let o = "pending", c = 0, f, d = null, u = [], m = [];
  typeof r == "function" && m.push(r);
  function p() {
    d && (clearTimeout(d), d = null);
  }
  function b() {
    o === "pending" && (o = "aborted"), p(), u.forEach(($) => {
      $.status === "pending" && ($.status = "aborted");
    }), u = [];
  }
  function _($, P) {
    P && (m = []), typeof $ == "function" && m.push($);
  }
  function w() {
    return {
      startTime: l,
      payload: e,
      status: o,
      queriesSent: c,
      queriesPending: u.length,
      subscribe: _,
      abort: b
    };
  }
  function v() {
    o = "failed", m.forEach(($) => {
      $(void 0, f);
    });
  }
  function j() {
    u.forEach(($) => {
      $.status === "pending" && ($.status = "aborted");
    }), u = [];
  }
  function S($, P, T) {
    const E = P !== "success";
    switch (u = u.filter((C) => C !== $), o) {
      case "pending":
        break;
      case "failed":
        if (E || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (P === "abort") {
      f = T, v();
      return;
    }
    if (E) {
      f = T, u.length || (s.length ? x() : v());
      return;
    }
    if (p(), j(), !t.random) {
      const C = t.resources.indexOf($.resource);
      C !== -1 && C !== t.index && (t.index = C);
    }
    o = "completed", m.forEach((C) => {
      C(T);
    });
  }
  function x() {
    if (o !== "pending")
      return;
    p();
    const $ = s.shift();
    if ($ === void 0) {
      if (u.length) {
        d = setTimeout(() => {
          p(), o === "pending" && (j(), v());
        }, t.timeout);
        return;
      }
      v();
      return;
    }
    const P = {
      status: "pending",
      resource: $,
      callback: (T, E) => {
        S(P, T, E);
      }
    };
    u.push(P), c++, d = setTimeout(x, t.rotate), n($, e, P.callback);
  }
  return setTimeout(x), w;
}
function In(t) {
  const e = {
    ..._i,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((l) => l().status === "pending");
  }
  function i(l, o, c) {
    const f = wi(
      e,
      l,
      o,
      (d, u) => {
        r(), c && c(d, u);
      }
    );
    return n.push(f), f;
  }
  function a(l) {
    return n.find((o) => l(o)) || null;
  }
  return {
    query: i,
    find: a,
    setIndex: (l) => {
      e.index = l;
    },
    getIndex: () => e.index,
    cleanup: r
  };
}
function Vt() {
}
const it = /* @__PURE__ */ Object.create(null);
function Ci(t) {
  if (!it[t]) {
    const e = kt(t);
    if (!e)
      return;
    const n = In(e), r = {
      config: e,
      redundancy: n
    };
    it[t] = r;
  }
  return it[t];
}
function xi(t, e, n) {
  let r, i;
  if (typeof t == "string") {
    const a = ft(t);
    if (!a)
      return n(void 0, 424), Vt;
    i = a.send;
    const s = Ci(t);
    s && (r = s.redundancy);
  } else {
    const a = xt(t);
    if (a) {
      r = In(a);
      const s = t.resources ? t.resources[0] : "", l = ft(s);
      l && (i = l.send);
    }
  }
  return !r || !i ? (n(void 0, 424), Vt) : r.query(e, i, n)().abort;
}
const Ft = "iconify2", Ae = "iconify", Mn = Ae + "-count", Gt = Ae + "-version", Tn = 36e5, $i = 168, ki = 50;
function dt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function jt(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function Rt(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function gt(t, e) {
  return jt(t, Mn, e.toString());
}
function pt(t) {
  return parseInt(dt(t, Mn)) || 0;
}
const tt = {
  local: !0,
  session: !0
}, Dn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Pt = !1;
function ji(t) {
  Pt = t;
}
let Me = typeof window > "u" ? {} : window;
function On(t) {
  const e = t + "Storage";
  try {
    if (Me && Me[e] && typeof Me[e].length == "number")
      return Me[e];
  } catch {
  }
  tt[t] = !1;
}
function Ln(t, e) {
  const n = On(t);
  if (!n)
    return;
  const r = dt(n, Gt);
  if (r !== Ft) {
    if (r) {
      const l = pt(n);
      for (let o = 0; o < l; o++)
        Rt(n, Ae + o.toString());
    }
    jt(n, Gt, Ft), gt(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / Tn) - $i, a = (l) => {
    const o = Ae + l.toString(), c = dt(n, o);
    if (typeof c == "string") {
      try {
        const f = JSON.parse(c);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > i && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, l))
          return !0;
      } catch {
      }
      Rt(n, o);
    }
  };
  let s = pt(n);
  for (let l = s - 1; l >= 0; l--)
    a(l) || (l === s - 1 ? (s--, gt(n, s)) : Dn[t].add(l));
}
function Bn() {
  if (!Pt) {
    ji(!0);
    for (const t in tt)
      Ln(t, (e) => {
        const n = e.data, r = e.provider, i = n.prefix, a = ue(
          r,
          i
        );
        if (!Ct(a, n).length)
          return !1;
        const s = n.lastModified || -1;
        return a.lastModifiedCached = a.lastModifiedCached ? Math.min(a.lastModifiedCached, s) : s, !0;
      });
  }
}
function Pi(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in tt)
      Ln(r, (i) => {
        const a = i.data;
        return i.provider !== t.provider || a.prefix !== t.prefix || a.lastModified === e;
      });
  return !0;
}
function Ai(t, e) {
  Pt || Bn();
  function n(r) {
    let i;
    if (!tt[r] || !(i = On(r)))
      return;
    const a = Dn[r];
    let s;
    if (a.size)
      a.delete(s = Array.from(a).shift());
    else if (s = pt(i), s >= ki || !gt(i, s + 1))
      return;
    const l = {
      cached: Math.floor(Date.now() / Tn),
      provider: t.provider,
      data: e
    };
    return jt(
      i,
      Ae + s.toString(),
      JSON.stringify(l)
    );
  }
  e.lastModified && !Pi(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Ut() {
}
function Si(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, hi(t);
  }));
}
function Ei(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, i = t.iconsToLoad;
    delete t.iconsToLoad;
    let a;
    if (!i || !(a = ft(n)))
      return;
    a.prepare(n, r, i).forEach((l) => {
      xi(n, l, (o) => {
        if (typeof o != "object")
          l.icons.forEach((c) => {
            t.missing.add(c);
          });
        else
          try {
            const c = Ct(
              t,
              o
            );
            if (!c.length)
              return;
            const f = t.pendingIcons;
            f && c.forEach((d) => {
              f.delete(d);
            }), Ai(t, o);
          } catch (c) {
            console.error(c);
          }
        Si(t);
      });
    });
  }));
}
const zi = (t, e) => {
  const n = yi(t, !0, An()), r = mi(n);
  if (!r.pending.length) {
    let o = !0;
    return e && setTimeout(() => {
      o && e(
        r.loaded,
        r.missing,
        r.pending,
        Ut
      );
    }), () => {
      o = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), a = [];
  let s, l;
  return r.pending.forEach((o) => {
    const { provider: c, prefix: f } = o;
    if (f === l && c === s)
      return;
    s = c, l = f, a.push(ue(c, f));
    const d = i[c] || (i[c] = /* @__PURE__ */ Object.create(null));
    d[f] || (d[f] = []);
  }), r.pending.forEach((o) => {
    const { provider: c, prefix: f, name: d } = o, u = ue(c, f), m = u.pendingIcons || (u.pendingIcons = /* @__PURE__ */ new Set());
    m.has(d) || (m.add(d), i[c][f].push(d));
  }), a.forEach((o) => {
    const { provider: c, prefix: f } = o;
    i[c][f].length && Ei(o, i[c][f]);
  }), e ? vi(e, r, a) : Ut;
};
function Ii(t, e) {
  const n = {
    ...t
  };
  for (const r in e) {
    const i = e[r], a = typeof i;
    r in Sn ? (i === null || i && (a === "string" || a === "number")) && (n[r] = i) : a === typeof n[r] && (n[r] = r === "rotate" ? i % 4 : i);
  }
  return n;
}
const Mi = /[\s,]+/;
function Ti(t, e) {
  e.split(Mi).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function Di(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (n === "") {
    const i = parseInt(t);
    return isNaN(i) ? 0 : r(i);
  } else if (n !== t) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let a = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(a) ? 0 : (a = a / i, a % 1 === 0 ? r(a) : 0);
    }
  }
  return e;
}
function Oi(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function Li(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Bi(t) {
  return "data:image/svg+xml," + Li(t);
}
function qi(t) {
  return 'url("' + Bi(t) + '")';
}
const Ht = {
  ...En,
  inline: !1
}, Qi = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Ni = {
  display: "inline-block"
}, mt = {
  "background-color": "currentColor"
}, qn = {
  "background-color": "transparent"
}, Wt = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Xt = {
  "-webkit-mask": mt,
  mask: mt,
  background: qn
};
for (const t in Xt) {
  const e = Xt[t];
  for (const n in Wt)
    e[t + "-" + n] = Wt[n];
}
function Vi(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Fi(t, e) {
  const n = Ii(Ht, e), r = e.mode || "svg", i = r === "svg" ? { ...Qi } : {};
  t.body.indexOf("xlink:") === -1 && delete i["xmlns:xlink"];
  let a = typeof e.style == "string" ? e.style : "";
  for (let w in e) {
    const v = e[w];
    if (v !== void 0)
      switch (w) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[w] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && Ti(n, v);
          break;
        case "color":
          a = a + (a.length > 0 && a.trim().slice(-1) !== ";" ? ";" : "") + "color: " + v + "; ";
          break;
        case "rotate":
          typeof v == "string" ? n[w] = Di(v) : typeof v == "number" && (n[w] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete i["aria-hidden"];
          break;
        default:
          if (w.slice(0, 3) === "on:")
            break;
          Ht[w] === void 0 && (i[w] = v);
      }
  }
  const s = ti(t, n), l = s.attributes;
  if (n.inline && (a = "vertical-align: -0.125em; " + a), r === "svg") {
    Object.assign(i, l), a !== "" && (i.style = a);
    let w = 0, v = e.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), {
      svg: !0,
      attributes: i,
      body: ai(s.body, v ? () => v + "ID" + w++ : "iconifySvelte")
    };
  }
  const { body: o, width: c, height: f } = t, d = r === "mask" || (r === "bg" ? !1 : o.indexOf("currentColor") !== -1), u = Oi(o, {
    ...l,
    width: c + "",
    height: f + ""
  }), p = {
    "--svg": qi(u)
  }, b = (w) => {
    const v = l[w];
    v && (p[w] = Vi(v));
  };
  b("width"), b("height"), Object.assign(p, Ni, d ? mt : qn);
  let _ = "";
  for (const w in p)
    _ += w + ": " + p[w] + ";";
  return i.style = _ + a, {
    svg: !1,
    attributes: i
  };
}
An(!0);
si("", pi);
if (typeof document < "u" && typeof window < "u") {
  Bn();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Wr(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = e[n];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          oi(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Gi(t, e, n, r, i) {
  function a() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", a(), { data: { ...et, ...t } };
  let s;
  if (typeof t != "string" || (s = Ze(t, !1, !0)) === null)
    return a(), null;
  const l = Ur(s);
  if (!l)
    return n && (!e.loading || e.loading.name !== t) && (a(), e.name = "", e.loading = {
      name: t,
      abort: zi([s], r)
    }), null;
  a(), e.name !== t && (e.name = t, i && !e.destroyed && i(t));
  const o = ["iconify"];
  return s.prefix !== "" && o.push("iconify--" + s.prefix), s.provider !== "" && o.push("iconify--" + s.provider), { data: l, classes: o };
}
function Ri(t, e) {
  return t ? Fi({
    ...et,
    ...t
  }, e) : null;
}
function Yt(t) {
  let e;
  function n(a, s) {
    return (
      /*data*/
      a[0].svg ? Hi : Ui
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      i.c(), e = Ee();
    },
    m(a, s) {
      i.m(a, s), L(a, e, s);
    },
    p(a, s) {
      r === (r = n(a)) && i ? i.p(a, s) : (i.d(1), i = r(a), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(a) {
      a && O(e), i.d(a);
    }
  };
}
function Ui(t) {
  let e, n = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let i = 0; i < n.length; i += 1)
    r = J(r, n[i]);
  return {
    c() {
      e = y("span"), Ne(e, r);
    },
    m(i, a) {
      L(i, e, a);
    },
    p(i, a) {
      Ne(e, r = Ce(n, [a & /*data*/
      1 && /*data*/
      i[0].attributes]));
    },
    d(i) {
      i && O(e);
    }
  };
}
function Hi(t) {
  let e, n = (
    /*data*/
    t[0].body + ""
  ), r = [
    /*data*/
    t[0].attributes
  ], i = {};
  for (let a = 0; a < r.length; a += 1)
    i = J(i, r[a]);
  return {
    c() {
      e = at("svg"), Et(e, i);
    },
    m(a, s) {
      L(a, e, s), e.innerHTML = n;
    },
    p(a, s) {
      s & /*data*/
      1 && n !== (n = /*data*/
      a[0].body + "") && (e.innerHTML = n), Et(e, i = Ce(r, [s & /*data*/
      1 && /*data*/
      a[0].attributes]));
    },
    d(a) {
      a && O(e);
    }
  };
}
function Wi(t) {
  let e, n = (
    /*data*/
    t[0] && Yt(t)
  );
  return {
    c() {
      n && n.c(), e = Ee();
    },
    m(r, i) {
      n && n.m(r, i), L(r, e, i);
    },
    p(r, [i]) {
      /*data*/
      r[0] ? n ? n.p(r, i) : (n = Yt(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(r) {
      r && O(e), n && n.d(r);
    }
  };
}
function Xi(t, e, n) {
  const r = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let i = !1, a = 0, s;
  const l = (c) => {
    typeof e.onLoad == "function" && e.onLoad(c), bn()("load", { icon: c });
  };
  function o() {
    n(3, a++, a);
  }
  return yt(() => {
    n(2, i = !0);
  }), ir(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), t.$$set = (c) => {
    n(6, e = J(J({}, e), Be(c)));
  }, t.$$.update = () => {
    {
      const c = Gi(e.icon, r, i, o, l);
      n(0, s = c ? Ri(c.data, e) : null), s && c.classes && n(
        0,
        s.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + c.classes.join(" "),
        s
      );
    }
  }, e = Be(e), [s, r, i, a];
}
class Qn extends Y {
  constructor(e) {
    super(), W(this, e, Xi, Wi, R, {});
  }
}
X(Qn, {}, [], [], !0);
function Yi(t) {
  let e, n;
  const r = [
    { icon: (
      /*name*/
      t[0]
    ) },
    /*$$restProps*/
    t[1]
  ];
  let i = {};
  for (let a = 0; a < r.length; a += 1)
    i = J(i, r[a]);
  return e = new Qn({ props: i }), {
    c() {
      N(e.$$.fragment);
    },
    m(a, s) {
      q(e, a, s), n = !0;
    },
    p(a, [s]) {
      const l = s & /*name, $$restProps*/
      3 ? Ce(r, [
        s & /*name*/
        1 && { icon: (
          /*name*/
          a[0]
        ) },
        s & /*$$restProps*/
        2 && _t(
          /*$$restProps*/
          a[1]
        )
      ]) : {};
      e.$set(l);
    },
    i(a) {
      n || (k(e.$$.fragment, a), n = !0);
    },
    o(a) {
      A(e.$$.fragment, a), n = !1;
    },
    d(a) {
      Q(e, a);
    }
  };
}
function Ki(t, e, n) {
  const r = ["name"];
  let i = qe(e, r), { name: a } = e;
  return t.$$set = (s) => {
    e = J(J({}, e), Be(s)), n(1, i = qe(e, r)), "name" in s && n(0, a = s.name);
  }, [a, i];
}
class Se extends Y {
  constructor(e) {
    super(), W(this, e, Ki, Yi, R, { name: 0 });
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), G();
  }
}
X(Se, { name: {} }, [], [], !0);
function Ji(t) {
  Z(t, "svelte-yry4c1", ".search.svelte-yry4c1.svelte-yry4c1{margin-top:-0.5rem;margin-bottom:-0.5rem;width:17.5rem;height:2.875rem;display:flex;flex:none;align-items:center;gap:0.625rem;border-width:1px;border-color:rgb(229 229 229 / 0.5);border-style:solid;cursor:pointer;border-radius:0.625rem;--eversarj-bg-opacity:1;background-color:rgb(250 250 250 / var(--eversarj-bg-opacity));cursor:text;padding-left:0.75rem;padding-right:0.75rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:#a3a3a3}.search.svelte-yry4c1 input.svelte-yry4c1{width:100%;height:100%;min-width:1px;flex:1 1 0%;border-width:0px;background-color:transparent;padding:0;font-size:0.875rem;line-height:1.25rem;outline:2px solid transparent;outline-offset:2px;color:#555555}.search.svelte-yry4c1 input.svelte-yry4c1::placeholder{color:#a3a3a3}.search.svelte-yry4c1.svelte-yry4c1:hover{border-color:rgb(47 108 178 / 0.3);background-color:rgb(47 108 178 / 0.03)}.search.svelte-yry4c1.svelte-yry4c1:focus-within{border-color:rgb(47 108 178 / 0.8);background-color:rgb(47 108 178 / 0.03)}");
}
function Zi(t) {
  let e, n, r, i, a, s, l;
  return n = new Se({ props: { name: "ri:search-line" } }), {
    c() {
      e = y("label"), N(n.$$.fragment), r = z(), i = y("input"), h(i, "type", "search"), h(
        i,
        "placeholder",
        /*placeholder*/
        t[1]
      ), h(i, "class", "svelte-yry4c1"), h(e, "class", "search svelte-yry4c1");
    },
    m(o, c) {
      L(o, e, c), q(n, e, null), g(e, r), g(e, i), st(
        i,
        /*value*/
        t[0]
      ), a = !0, s || (l = We(
        i,
        "input",
        /*input_input_handler*/
        t[2]
      ), s = !0);
    },
    p(o, [c]) {
      (!a || c & /*placeholder*/
      2) && h(
        i,
        "placeholder",
        /*placeholder*/
        o[1]
      ), c & /*value*/
      1 && i.value !== /*value*/
      o[0] && st(
        i,
        /*value*/
        o[0]
      );
    },
    i(o) {
      a || (k(n.$$.fragment, o), a = !0);
    },
    o(o) {
      A(n.$$.fragment, o), a = !1;
    },
    d(o) {
      o && O(e), Q(n), s = !1, l();
    }
  };
}
function ea(t, e, n) {
  let { value: r = "" } = e, { placeholder: i = "Arama yapın" } = e;
  function a() {
    r = this.value, n(0, r);
  }
  return t.$$set = (s) => {
    "value" in s && n(0, r = s.value), "placeholder" in s && n(1, i = s.placeholder);
  }, [r, i, a];
}
class Nn extends Y {
  constructor(e) {
    super(), W(this, e, ea, Zi, R, { value: 0, placeholder: 1 }, Ji);
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), G();
  }
  get placeholder() {
    return this.$$.ctx[1];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), G();
  }
}
X(Nn, { value: {}, placeholder: {} }, [], [], !0);
function ta(t) {
  Z(t, "svelte-1bqcvp3", ".list.svelte-1bqcvp3{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill, minmax(170px, 1fr))}");
}
function Kt(t, e, n) {
  const r = t.slice();
  return r[5] = e[n].name, r[6] = e[n].slug, r;
}
function Jt(t) {
  let e, n;
  return e = new $n({
    props: {
      name: (
        /*name*/
        t[5]
      ),
      slug: (
        /*slug*/
        t[6]
      )
    }
  }), e.$on(
    "select",
    /*onSelect*/
    t[2]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p(r, i) {
      const a = {};
      i & /*getSearchResult*/
      2 && (a.name = /*name*/
      r[5]), i & /*getSearchResult*/
      2 && (a.slug = /*slug*/
      r[6]), e.$set(a);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function na(t) {
  let e, n, r = re(
    /*getSearchResult*/
    t[1]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Jt(Kt(t, r, s));
  const a = (s) => A(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = y("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      h(e, "class", "list svelte-1bqcvp3");
    },
    m(s, l) {
      L(s, e, l);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      n = !0;
    },
    p(s, l) {
      if (l & /*getSearchResult, onSelect*/
      6) {
        r = re(
          /*getSearchResult*/
          s[1]
        );
        let o;
        for (o = 0; o < r.length; o += 1) {
          const c = Kt(s, r, o);
          i[o] ? (i[o].p(c, l), k(i[o], 1)) : (i[o] = Jt(c), i[o].c(), k(i[o], 1), i[o].m(e, null));
        }
        for (ae(), o = r.length; o < i.length; o += 1)
          a(o);
        se();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          k(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        A(i[l]);
      n = !1;
    },
    d(s) {
      s && O(e), Qe(i, s);
    }
  };
}
function ra(t) {
  let e, n, r;
  function i(s) {
    t[4](s);
  }
  let a = {
    slot: "action",
    placeholder: "Aramak istediğiniz marka"
  };
  return (
    /*search*/
    t[0] !== void 0 && (a.value = /*search*/
    t[0]), e = new Nn({ props: a }), Fe.push(() => ur(e, "value", i)), {
      c() {
        N(e.$$.fragment);
      },
      m(s, l) {
        q(e, s, l), r = !0;
      },
      p(s, l) {
        const o = {};
        !n && l & /*search*/
        1 && (n = !0, o.value = /*search*/
        s[0], ar(() => n = !1)), e.$set(o);
      },
      i(s) {
        r || (k(e.$$.fragment, s), r = !0);
      },
      o(s) {
        A(e.$$.fragment, s), r = !1;
      },
      d(s) {
        Q(e, s);
      }
    }
  );
}
function ia(t) {
  let e, n;
  return e = new Je({
    props: {
      name: "brand",
      title: "Araba Markası Seçiniz",
      description: "Verilerini görmek istediğiniz araba için önce hedeflediğiniz markayı seçiniz",
      $$slots: {
        action: [ra],
        default: [na]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p(r, [i]) {
      const a = {};
      i & /*$$scope, search, getSearchResult*/
      515 && (a.$$scope = { dirty: i, ctx: r }), e.$set(a);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function aa(t, e, n) {
  let r, i;
  te(t, wt, (o) => n(3, i = o));
  let a = "";
  const s = (o) => {
    n(0, a = "");
  };
  function l(o) {
    a = o, n(0, a);
  }
  return t.$$.update = () => {
    t.$$.dirty & /*$getBrands, search*/
    9 && n(1, r = i.filter((o) => o.slug.toLowerCase().includes(a.toLowerCase())));
  }, [a, r, s, i, l];
}
class Vn extends Y {
  constructor(e) {
    super(), W(this, e, aa, ia, R, {}, ta);
  }
}
X(Vn, {}, [], [], !0);
function sa(t) {
  Z(t, "svelte-t5ros6", ".card.svelte-t5ros6.svelte-t5ros6{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;border-width:1px;border-color:rgb(229 229 229 / 0.5);border-style:solid;padding-left:1.5rem;padding-right:1.5rem;padding-top:1.5rem;padding-bottom:1.25rem;height:18.75rem;cursor:pointer;border-radius:0.875rem;--eversarj-bg-opacity:1;background-color:rgb(250 250 250 / var(--eversarj-bg-opacity));text-align:left;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.card-image.svelte-t5ros6.svelte-t5ros6{pointer-events:none;position:relative;width:100%;display:flex;flex:1 1 0%;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center}.card-image.svelte-t5ros6 img{position:absolute;inset:0;height:100%;width:100%;object-fit:contain;object-position:center}.card-content.svelte-t5ros6.svelte-t5ros6{width:100%;display:flex;flex-direction:column;gap:0.5rem}.card-content-header.svelte-t5ros6.svelte-t5ros6{display:flex;align-items:flex-end;gap:0.5rem}.card-content-header__name.svelte-t5ros6.svelte-t5ros6{color:rgb(38 38 38 / 0.9);font-family:InterDisplay, Inter, sans-serif;font-size:20px;font-weight:600;line-height:normal}.card-content-header__description.svelte-t5ros6.svelte-t5ros6{color:rgb(38 38 38 / 0.7);font-size:16px;font-weight:500;line-height:22px;letter-spacing:-0.64px}.card-content-info.svelte-t5ros6.svelte-t5ros6{display:flex;flex:none;flex-wrap:wrap;align-items:center;column-gap:1rem;row-gap:0.375rem}.card-content-info__item.svelte-t5ros6.svelte-t5ros6{display:flex;flex:none;align-items:center;gap:0.375rem}.card-content-info__item.svelte-t5ros6 svg{font-size:1rem;--eversarj-text-opacity:1;color:rgb(115 115 115 / var(--eversarj-text-opacity))}.card-content-info__item.svelte-t5ros6 span.svelte-t5ros6{color:#737373;font-size:14px;font-weight:500;line-height:normal;letter-spacing:-0.7px}.card-content-info__item.svelte-t5ros6 span i.svelte-t5ros6{font-weight:400;font-style:normal}.card.svelte-t5ros6.svelte-t5ros6:hover{border-color:rgb(47 108 178 / 0.3);background-color:rgb(47 108 178 / 0.03)}.card.selected.svelte-t5ros6.svelte-t5ros6{border-color:rgb(47 108 178 / 0.8);background-color:rgb(47 108 178 / 0.08);box-shadow:0 0 0 2px rgba(47, 108, 178, 0.1)}");
}
function oa(t) {
  let e, n;
  return e = new oe({
    props: {
      src: "/brands/not-found.png",
      alt: "Not Found",
      slot: "error",
      draggable: "false"
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p: V,
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function Zt(t) {
  let e, n;
  return {
    c() {
      e = y("span"), n = B(
        /*description*/
        t[4]
      ), h(e, "class", "card-content-header__description svelte-t5ros6");
    },
    m(r, i) {
      L(r, e, i), g(e, n);
    },
    p(r, i) {
      i & /*description*/
      16 && H(
        n,
        /*description*/
        r[4]
      );
    },
    d(r) {
      r && O(e);
    }
  };
}
function la(t) {
  let e, n, r, i, a, s, l, o, c, f, d, u, m, p, b, _ = (
    /*meta*/
    t[1].batteryCapacity + ""
  ), w, v, j, S, x, $, P, T, E = (
    /*meta*/
    t[1].acChargingPower + ""
  ), C, D, M, U, I, le;
  r = new oe({
    props: {
      src: "/brands/" + /*brand*/
      t[3] + "/models/" + /*slug*/
      t[0] + "/image.png",
      alt: (
        /*name*/
        t[2] + " Logo"
      ),
      draggable: "false",
      $$slots: { error: [oa] },
      $$scope: { ctx: t }
    }
  });
  let K = (
    /*description*/
    t[4] && Zt(t)
  );
  return m = new Se({ props: { name: "ri:battery-low-line" } }), $ = new Se({ props: { name: "ri:plug-line" } }), {
    c() {
      e = y("button"), n = y("span"), N(r.$$.fragment), i = z(), a = y("span"), s = y("span"), l = y("span"), o = B(
        /*name*/
        t[2]
      ), c = z(), K && K.c(), f = z(), d = y("span"), u = y("span"), N(m.$$.fragment), p = z(), b = y("span"), w = B(_), v = B(` kW
          `), j = y("i"), j.textContent = "Batarya", S = z(), x = y("span"), N($.$$.fragment), P = z(), T = y("span"), C = B(E), D = B(` kW
          `), M = y("i"), M.textContent = "Maksimum AC Gücü", h(n, "class", "card-image svelte-t5ros6"), h(l, "class", "card-content-header__name svelte-t5ros6"), h(s, "class", "card-content-header svelte-t5ros6"), h(j, "class", "svelte-t5ros6"), h(b, "class", "svelte-t5ros6"), h(u, "class", "card-content-info__item svelte-t5ros6"), h(M, "class", "svelte-t5ros6"), h(T, "class", "svelte-t5ros6"), h(x, "class", "card-content-info__item svelte-t5ros6"), h(d, "class", "card-content-info svelte-t5ros6"), h(a, "class", "card-content svelte-t5ros6"), h(e, "class", "card svelte-t5ros6"), _e(
        e,
        "selected",
        /*$selectedModel*/
        t[5] === /*slug*/
        t[0]
      );
    },
    m(F, ne) {
      L(F, e, ne), g(e, n), q(r, n, null), g(e, i), g(e, a), g(a, s), g(s, l), g(l, o), g(s, c), K && K.m(s, null), g(a, f), g(a, d), g(d, u), q(m, u, null), g(u, p), g(u, b), g(b, w), g(b, v), g(b, j), g(d, S), g(d, x), q($, x, null), g(x, P), g(x, T), g(T, C), g(T, D), g(T, M), U = !0, I || (le = We(
        e,
        "click",
        /*onSelect*/
        t[6]
      ), I = !0);
    },
    p(F, [ne]) {
      const ze = {};
      ne & /*brand, slug*/
      9 && (ze.src = "/brands/" + /*brand*/
      F[3] + "/models/" + /*slug*/
      F[0] + "/image.png"), ne & /*name*/
      4 && (ze.alt = /*name*/
      F[2] + " Logo"), ne & /*$$scope*/
      512 && (ze.$$scope = { dirty: ne, ctx: F }), r.$set(ze), (!U || ne & /*name*/
      4) && H(
        o,
        /*name*/
        F[2]
      ), /*description*/
      F[4] ? K ? K.p(F, ne) : (K = Zt(F), K.c(), K.m(s, null)) : K && (K.d(1), K = null), (!U || ne & /*meta*/
      2) && _ !== (_ = /*meta*/
      F[1].batteryCapacity + "") && H(w, _), (!U || ne & /*meta*/
      2) && E !== (E = /*meta*/
      F[1].acChargingPower + "") && H(C, E), (!U || ne & /*$selectedModel, slug*/
      33) && _e(
        e,
        "selected",
        /*$selectedModel*/
        F[5] === /*slug*/
        F[0]
      );
    },
    i(F) {
      U || (k(r.$$.fragment, F), k(m.$$.fragment, F), k($.$$.fragment, F), U = !0);
    },
    o(F) {
      A(r.$$.fragment, F), A(m.$$.fragment, F), A($.$$.fragment, F), U = !1;
    },
    d(F) {
      F && O(e), Q(r), K && K.d(), Q(m), Q($), I = !1, le();
    }
  };
}
function ca(t, e, n) {
  let r, i, a;
  te(t, Re, (u) => n(7, r = u)), te(t, we, (u) => n(8, i = u)), te(t, Ue, (u) => n(5, a = u));
  let { slug: s } = e, { meta: l } = e, { name: o } = e, { brand: c = i } = e, { description: f } = e;
  const d = async () => {
    ie.set("model", s), Ue.set(s), window.history.pushState({}, "Page", `?${ie.toString()}`), await _n(), r.querySelector("#step-detail").scrollIntoView({ behavior: "smooth" });
  };
  return t.$$set = (u) => {
    "slug" in u && n(0, s = u.slug), "meta" in u && n(1, l = u.meta), "name" in u && n(2, o = u.name), "brand" in u && n(3, c = u.brand), "description" in u && n(4, f = u.description);
  }, [s, l, o, c, f, a, d];
}
class At extends Y {
  constructor(e) {
    super(), W(
      this,
      e,
      ca,
      la,
      R,
      {
        slug: 0,
        meta: 1,
        name: 2,
        brand: 3,
        description: 4
      },
      sa
    );
  }
  get slug() {
    return this.$$.ctx[0];
  }
  set slug(e) {
    this.$$set({ slug: e }), G();
  }
  get meta() {
    return this.$$.ctx[1];
  }
  set meta(e) {
    this.$$set({ meta: e }), G();
  }
  get name() {
    return this.$$.ctx[2];
  }
  set name(e) {
    this.$$set({ name: e }), G();
  }
  get brand() {
    return this.$$.ctx[3];
  }
  set brand(e) {
    this.$$set({ brand: e }), G();
  }
  get description() {
    return this.$$.ctx[4];
  }
  set description(e) {
    this.$$set({ description: e }), G();
  }
}
X(At, { slug: {}, meta: {}, name: {}, brand: {}, description: {} }, [], [], !0);
function ua(t) {
  Z(t, "svelte-1o0g8tp", '.list.svelte-1o0g8tp{position:relative;display:grid;gap:1rem;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr))}.list-message.svelte-1o0g8tp{position:absolute;inset:0;z-index:20;margin-left:auto;margin-right:auto;max-width:25rem;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.list-message__image.svelte-1o0g8tp{margin-bottom:0.5rem;height:10rem;display:flex;align-items:center;justify-content:center}.list-message__image.svelte-1o0g8tp img{height:100%;width:auto}.list-message__title.svelte-1o0g8tp{margin-bottom:0.25rem;font-size:1.25rem;line-height:1.75rem;--eversarj-text-opacity:1;color:rgb(38 38 38 / var(--eversarj-text-opacity));font-weight:600;font-family:InterDisplay, Inter, sans-serif}.list-message__description.svelte-1o0g8tp{text-align:center;font-size:1rem;line-height:1.5rem;--eversarj-text-opacity:1;color:rgb(64 64 64 / var(--eversarj-text-opacity))}.list--empty.svelte-1o0g8tp{pointer-events:none;margin:-1.5rem;-webkit-user-select:none;user-select:none;padding:1.5rem}.list--empty.svelte-1o0g8tp::before{position:absolute;inset:0;z-index:10;width:100%;height:100%;display:flex;background-color:rgb(255 255 255 / 0.5);content:"";backdrop-filter:blur(8px)}@media(max-width: 1200px){.list.svelte-1o0g8tp{grid-template-columns:repeat(auto-fill, minmax(300px, 1fr))}}');
}
function en(t, e, n) {
  const r = t.slice();
  return r[3] = e[n], r;
}
function tn(t, e, n) {
  const r = t.slice();
  return r[3] = e[n], r;
}
function fa(t) {
  let e, n, r, i, a, s, l, o, c, f;
  i = new oe({
    props: {
      src: "/empty/brand.png",
      alt: "Empty Models"
    }
  });
  let d = re(
    /*tesla*/
    t[1].models
  ), u = [];
  for (let p = 0; p < d.length; p += 1)
    u[p] = nn(en(t, d, p));
  const m = (p) => A(u[p], 1, 1, () => {
    u[p] = null;
  });
  return {
    c() {
      e = y("div"), n = y("div"), r = y("div"), N(i.$$.fragment), a = z(), s = y("div"), s.textContent = "Marka Seçimi Gerekli", l = z(), o = y("div"), o.textContent = "Araba modellerini görmeniz ve seçebilmeniz için önce marka seçiminizi yapınız.", c = z();
      for (let p = 0; p < u.length; p += 1)
        u[p].c();
      h(r, "class", "list-message__image svelte-1o0g8tp"), h(s, "class", "list-message__title svelte-1o0g8tp"), h(o, "class", "list-message__description svelte-1o0g8tp"), h(n, "class", "list-message svelte-1o0g8tp"), h(e, "class", "list list--empty svelte-1o0g8tp");
    },
    m(p, b) {
      L(p, e, b), g(e, n), g(n, r), q(i, r, null), g(n, a), g(n, s), g(n, l), g(n, o), g(e, c);
      for (let _ = 0; _ < u.length; _ += 1)
        u[_] && u[_].m(e, null);
      f = !0;
    },
    p(p, b) {
      if (b & /*tesla*/
      2) {
        d = re(
          /*tesla*/
          p[1].models
        );
        let _;
        for (_ = 0; _ < d.length; _ += 1) {
          const w = en(p, d, _);
          u[_] ? (u[_].p(w, b), k(u[_], 1)) : (u[_] = nn(w), u[_].c(), k(u[_], 1), u[_].m(e, null));
        }
        for (ae(), _ = d.length; _ < u.length; _ += 1)
          m(_);
        se();
      }
    },
    i(p) {
      if (!f) {
        k(i.$$.fragment, p);
        for (let b = 0; b < d.length; b += 1)
          k(u[b]);
        f = !0;
      }
    },
    o(p) {
      A(i.$$.fragment, p), u = u.filter(Boolean);
      for (let b = 0; b < u.length; b += 1)
        A(u[b]);
      f = !1;
    },
    d(p) {
      p && O(e), Q(i), Qe(u, p);
    }
  };
}
function da(t) {
  let e, n = [], r = /* @__PURE__ */ new Map(), i, a = re(
    /*$getModels*/
    t[0]
  );
  const s = (l) => (
    /*model*/
    l[3].slug
  );
  for (let l = 0; l < a.length; l += 1) {
    let o = tn(t, a, l), c = s(o);
    r.set(c, n[l] = rn(c, o));
  }
  return {
    c() {
      e = y("div");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      h(e, "class", "list svelte-1o0g8tp");
    },
    m(l, o) {
      L(l, e, o);
      for (let c = 0; c < n.length; c += 1)
        n[c] && n[c].m(e, null);
      i = !0;
    },
    p(l, o) {
      o & /*$getModels*/
      1 && (a = re(
        /*$getModels*/
        l[0]
      ), ae(), n = cr(n, o, s, 1, l, a, r, e, lr, rn, null, tn), se());
    },
    i(l) {
      if (!i) {
        for (let o = 0; o < a.length; o += 1)
          k(n[o]);
        i = !0;
      }
    },
    o(l) {
      for (let o = 0; o < n.length; o += 1)
        A(n[o]);
      i = !1;
    },
    d(l) {
      l && O(e);
      for (let o = 0; o < n.length; o += 1)
        n[o].d();
    }
  };
}
function nn(t) {
  let e, n;
  const r = [
    /*model*/
    t[3],
    { brand: "tesla" }
  ];
  let i = {};
  for (let a = 0; a < r.length; a += 1)
    i = J(i, r[a]);
  return e = new At({ props: i }), {
    c() {
      N(e.$$.fragment);
    },
    m(a, s) {
      q(e, a, s), n = !0;
    },
    p(a, s) {
      const l = s & /*tesla*/
      2 ? Ce(r, [_t(
        /*model*/
        a[3]
      ), r[1]]) : {};
      e.$set(l);
    },
    i(a) {
      n || (k(e.$$.fragment, a), n = !0);
    },
    o(a) {
      A(e.$$.fragment, a), n = !1;
    },
    d(a) {
      Q(e, a);
    }
  };
}
function rn(t, e) {
  let n, r, i;
  const a = [
    /*model*/
    e[3]
  ];
  let s = {};
  for (let l = 0; l < a.length; l += 1)
    s = J(s, a[l]);
  return r = new At({ props: s }), {
    key: t,
    first: null,
    c() {
      n = Ee(), N(r.$$.fragment), this.first = n;
    },
    m(l, o) {
      L(l, n, o), q(r, l, o), i = !0;
    },
    p(l, o) {
      e = l;
      const c = o & /*$getModels*/
      1 ? Ce(a, [_t(
        /*model*/
        e[3]
      )]) : {};
      r.$set(c);
    },
    i(l) {
      i || (k(r.$$.fragment, l), i = !0);
    },
    o(l) {
      A(r.$$.fragment, l), i = !1;
    },
    d(l) {
      l && O(n), Q(r, l);
    }
  };
}
function ga(t) {
  let e, n, r, i;
  const a = [da, fa], s = [];
  function l(o, c) {
    return (
      /*$getModels*/
      o[0].length ? 0 : 1
    );
  }
  return e = l(t), n = s[e] = a[e](t), {
    c() {
      n.c(), r = Ee();
    },
    m(o, c) {
      s[e].m(o, c), L(o, r, c), i = !0;
    },
    p(o, c) {
      let f = e;
      e = l(o), e === f ? s[e].p(o, c) : (ae(), A(s[f], 1, 1, () => {
        s[f] = null;
      }), se(), n = s[e], n ? n.p(o, c) : (n = s[e] = a[e](o), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(o) {
      i || (k(n), i = !0);
    },
    o(o) {
      A(n), i = !1;
    },
    d(o) {
      o && O(r), s[e].d(o);
    }
  };
}
function pa(t) {
  let e, n;
  return e = new Je({
    props: {
      name: "model",
      title: "Araba Modeli Seçiniz",
      description: "Verilerini görmek istediğiniz araba modelini seçiniz",
      $$slots: { default: [ga] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p(r, [i]) {
      const a = {};
      i & /*$$scope, $getModels*/
      257 && (a.$$scope = { dirty: i, ctx: r }), e.$set(a);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function ma(t, e, n) {
  let r, i;
  te(t, wt, (s) => n(2, r = s)), te(t, gr, (s) => n(0, i = s));
  const a = r.find((s) => s.slug === "tesla");
  return [i, a];
}
class Fn extends Y {
  constructor(e) {
    super(), W(this, e, ma, pa, R, {}, ua);
  }
}
X(Fn, {}, [], [], !0);
function ha(t) {
  Z(t, "svelte-m38e4r", ".info.svelte-m38e4r{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.25rem;border-radius:0.875rem;padding-left:1.5rem;padding-right:1.5rem;padding-top:2rem;padding-bottom:2rem;flex:1 1 0%;border-width:1px;border-color:rgb(229 229 229 / 0.5);border-style:solid;--eversarj-bg-opacity:1;background-color:rgb(250 250 250 / var(--eversarj-bg-opacity));box-shadow:inset 0 0 4px 0 rgba(0, 0, 0, 0.02)}.info-icon.svelte-m38e4r{display:flex;align-items:center;justify-content:center;padding:1rem;border-width:1px;border-color:rgb(229 229 229 / 0.5);border-radius:9999px;border-style:solid;--eversarj-bg-opacity:1;background-color:rgb(255 255 255 / var(--eversarj-bg-opacity));font-size:2rem;color:rgba(94, 94, 94, 0.75);box-shadow:0px -1px 2px 0px rgba(0, 0, 0, 0.1) inset}.info-content.svelte-m38e4r{width:100%;display:flex;flex-direction:column;gap:0.25rem;text-align:center}.info-content__title.svelte-m38e4r{--eversarj-text-opacity:1;color:rgb(115 115 115 / var(--eversarj-text-opacity));font-weight:500;line-height:1.5;font-family:InterDisplay, Inter, sans-serif;font-size:20px;letter-spacing:-0.2px}.info-content__value.svelte-m38e4r{--eversarj-text-opacity:1;color:rgb(38 38 38 / var(--eversarj-text-opacity));font-weight:700;font-family:InterDisplay, Inter, sans-serif;--eversarj-numeric-figure:lining-nums;font-variant-numeric:var(--eversarj-ordinal) var(--eversarj-slashed-zero) var(--eversarj-numeric-figure) var(--eversarj-numeric-spacing) var(--eversarj-numeric-fraction);--eversarj-numeric-spacing:tabular-nums;font-variant-numeric:var(--eversarj-ordinal) var(--eversarj-slashed-zero) var(--eversarj-numeric-figure) var(--eversarj-numeric-spacing) var(--eversarj-numeric-fraction);font-size:54px;line-height:60px;letter-spacing:-0.54px}");
}
function ba(t) {
  let e, n, r, i, a, s, l, o, c, f, d;
  return r = new Se({ props: { name: (
    /*icon*/
    t[0]
  ) } }), {
    c() {
      e = y("div"), n = y("div"), N(r.$$.fragment), i = z(), a = y("div"), s = y("div"), l = B(
        /*title*/
        t[1]
      ), o = z(), c = y("div"), f = B(
        /*value*/
        t[2]
      ), h(n, "class", "info-icon svelte-m38e4r"), h(s, "class", "info-content__title svelte-m38e4r"), h(c, "class", "info-content__value svelte-m38e4r"), h(a, "class", "info-content svelte-m38e4r"), h(e, "class", "info svelte-m38e4r");
    },
    m(u, m) {
      L(u, e, m), g(e, n), q(r, n, null), g(e, i), g(e, a), g(a, s), g(s, l), g(a, o), g(a, c), g(c, f), d = !0;
    },
    p(u, [m]) {
      const p = {};
      m & /*icon*/
      1 && (p.name = /*icon*/
      u[0]), r.$set(p), (!d || m & /*title*/
      2) && H(
        l,
        /*title*/
        u[1]
      ), (!d || m & /*value*/
      4) && H(
        f,
        /*value*/
        u[2]
      );
    },
    i(u) {
      d || (k(r.$$.fragment, u), d = !0);
    },
    o(u) {
      A(r.$$.fragment, u), d = !1;
    },
    d(u) {
      u && O(e), Q(r);
    }
  };
}
function va(t, e, n) {
  let { icon: r } = e, { title: i } = e, { value: a } = e;
  return t.$$set = (s) => {
    "icon" in s && n(0, r = s.icon), "title" in s && n(1, i = s.title), "value" in s && n(2, a = s.value);
  }, [r, i, a];
}
class ht extends Y {
  constructor(e) {
    super(), W(this, e, va, ba, R, { icon: 0, title: 1, value: 2 }, ha);
  }
  get icon() {
    return this.$$.ctx[0];
  }
  set icon(e) {
    this.$$set({ icon: e }), G();
  }
  get title() {
    return this.$$.ctx[1];
  }
  set title(e) {
    this.$$set({ title: e }), G();
  }
  get value() {
    return this.$$.ctx[2];
  }
  set value(e) {
    this.$$set({ value: e }), G();
  }
}
X(ht, { icon: {}, title: {}, value: {} }, [], [], !0);
function ya(t) {
  Z(t, "svelte-nbmnxt", '.product.svelte-nbmnxt{height:100%;width:100%;display:flex;flex-direction:column;-webkit-user-select:none;user-select:none;border-radius:0.875rem;text-decoration:none;position:relative;overflow:hidden;--eversarj-bg-opacity:1;background-color:rgb(250 250 250 / var(--eversarj-bg-opacity));text-align:center;--eversarj-text-opacity:1;color:rgb(255 255 255 / var(--eversarj-text-opacity));background-color:rgba(0, 110, 182, 0.9);background-image:url("/product/effect.png");background-position:center bottom;background-size:100%}.product-content.svelte-nbmnxt{display:flex;flex:1 1 0%;flex-direction:column;align-items:center;justify-content:center;padding-left:1rem;padding-right:1rem;padding-top:1rem}.product-content__logo.svelte-nbmnxt{margin-bottom:0.875rem;height:2rem;width:100%;display:flex;align-items:center;justify-content:center}.product-content__logo.svelte-nbmnxt img{height:100%;filter:drop-shadow(0 2px 2px rgba(255, 255, 255, 0.2))}.product-content__title.svelte-nbmnxt{margin-bottom:0.375rem;text-align:center;--eversarj-text-opacity:1;color:rgb(255 255 255 / var(--eversarj-text-opacity));font-family:InterDisplay, Inter, sans-serif;font-size:32px;font-weight:600;line-height:1}.product-content__description.svelte-nbmnxt{text-align:center;color:rgb(255 255 255 / 0.8);font-size:20px;font-weight:450;line-height:22px;letter-spacing:-0.6px}.product-image.svelte-nbmnxt{width:100%;display:flex}.product-image.svelte-nbmnxt img{width:100%;height:auto;object-fit:contain;object-position:center}.product.svelte-nbmnxt::after{pointer-events:none;position:absolute;inset:0;width:100%;height:100%;content:"";box-shadow:0 0 0 2px rgba(0, 0, 0, 0.05) inset}');
}
function _a(t) {
  let e, n, r, i, a, s, l, o, c, f, d, u;
  return i = new oe({
    props: {
      src: "/product/logo.png",
      alt: "GO-E Logo",
      draggable: "false"
    }
  }), d = new oe({
    props: {
      src: "/product/gemini.png",
      alt: "GO-E Logo",
      draggable: "false"
    }
  }), {
    c() {
      e = y("a"), n = y("span"), r = y("span"), N(i.$$.fragment), a = z(), s = y("span"), s.textContent = "Gemini Flex 22 kW", l = z(), o = y("span"), o.textContent = "En Yüksek Şarj Verimi İçin", c = z(), f = y("span"), N(d.$$.fragment), h(r, "class", "product-content__logo svelte-nbmnxt"), h(s, "class", "product-content__title svelte-nbmnxt"), h(o, "class", "product-content__description svelte-nbmnxt"), h(n, "class", "product-content svelte-nbmnxt"), h(f, "class", "product-image svelte-nbmnxt"), h(e, "class", "product svelte-nbmnxt"), h(e, "target", "_blank"), h(e, "href", "https://eversarj.com/go-e-charger-gemini-flex-22-kw-elektrikli-arac-hizli-sarj-cihazi-mobil-i-sabit");
    },
    m(m, p) {
      L(m, e, p), g(e, n), g(n, r), q(i, r, null), g(n, a), g(n, s), g(n, l), g(n, o), g(e, c), g(e, f), q(d, f, null), u = !0;
    },
    p: V,
    i(m) {
      u || (k(i.$$.fragment, m), k(d.$$.fragment, m), u = !0);
    },
    o(m) {
      A(i.$$.fragment, m), A(d.$$.fragment, m), u = !1;
    },
    d(m) {
      m && O(e), Q(i), Q(d);
    }
  };
}
class Gn extends Y {
  constructor(e) {
    super(), W(this, e, null, _a, R, {}, ya);
  }
}
X(Gn, {}, [], [], !0);
function wa(t) {
  Z(t, "svelte-1k9u7p2", `.calculate.svelte-1k9u7p2.svelte-1k9u7p2{height:100%;display:flex;flex-direction:column;gap:1.25rem;border-radius:0.875rem;padding:1.5rem;border-width:1px;border-color:rgb(229 229 229 / 0.5);border-style:solid;--eversarj-bg-opacity:1;background-color:rgb(250 250 250 / var(--eversarj-bg-opacity))}.calculate-header.svelte-1k9u7p2.svelte-1k9u7p2{row-gap:0.375rem;column-gap:2rem;display:grid;grid-template-columns:1fr auto;grid-template-rows:min-content min-content;grid-template-areas:"Title Actions" "Description Actions"}.calculate-header__title.svelte-1k9u7p2.svelte-1k9u7p2{--eversarj-text-opacity:1;color:rgb(38 38 38 / var(--eversarj-text-opacity));font-family:InterDisplay, Inter, sans-serif;font-size:20px;font-weight:600;line-height:normal;letter-spacing:-0.2px;grid-area:Title}.calculate-header__description.svelte-1k9u7p2.svelte-1k9u7p2{--eversarj-text-opacity:1;color:rgb(115 115 115 / var(--eversarj-text-opacity));font-size:16px;font-weight:500;line-height:normal;letter-spacing:-0.48px;grid-area:Description}.calculate-header__description.svelte-1k9u7p2 strong.svelte-1k9u7p2{color:rgb(82 82 82 / 0.9)}.calculate-header__description.svelte-1k9u7p2 span.svelte-1k9u7p2{opacity:0.5}.calculate-header__select.svelte-1k9u7p2.svelte-1k9u7p2{height:2.875rem;display:flex;flex:none;align-items:center;gap:0.625rem;--eversarj-text-opacity:1;color:rgb(115 115 115 / var(--eversarj-text-opacity));border-width:1px;border-color:rgb(229 229 229 / 0.5);border-style:solid;font-weight:500;outline:2px solid transparent;outline-offset:2px;margin:-0.5rem;cursor:pointer;border-radius:0.625rem;background-color:rgb(255 255 255 / 0.7);font-size:0.875rem;line-height:1.25rem;letter-spacing:-0.025em;cursor:pointer;-webkit-appearance:none;appearance:none;padding-left:0.75rem;padding-right:2.25rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);grid-area:Actions;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23A3A3A3'%3E%3Cpath d='M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z'%3E%3C/path%3E%3C/svg%3E");background-repeat:no-repeat;background-size:16px;background-position:center right 12px}.calculate-header__select.svelte-1k9u7p2.svelte-1k9u7p2:hover{border-color:rgb(47 108 178 / 0.3);background-color:rgb(47 108 178 / 0.03)}.calculate-header__select.svelte-1k9u7p2.svelte-1k9u7p2:focus{border-color:rgb(47 108 178 / 0.8);background-color:rgb(47 108 178 / 0.03)}.calculate-content.svelte-1k9u7p2.svelte-1k9u7p2{display:flex;flex:1 1 0%;flex-direction:column;justify-content:center;gap:1rem}.calculate-item.svelte-1k9u7p2.svelte-1k9u7p2{display:flex;flex-direction:column;gap:0.25rem}.calculate-item__title.svelte-1k9u7p2.svelte-1k9u7p2{color:#6b6b6b;font-size:16px;font-weight:500;line-height:normal;letter-spacing:-0.32px}.calculate-item__title.svelte-1k9u7p2 strong.svelte-1k9u7p2{color:#555}.calculate-item__bar.svelte-1k9u7p2.svelte-1k9u7p2{height:3.5rem;display:flex;align-items:center;border-radius:0.875rem;background-color:rgb(229 229 229 / 0.4);padding:0.125rem;box-shadow:0 0 4px 0 rgba(0, 0, 0, 0.02) inset}.calculate-item__bar.svelte-1k9u7p2.svelte-1k9u7p2::before{height:100%;display:flex;align-items:center;overflow:hidden;border-radius:0.75rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:1.5rem;letter-spacing:-0.32px;border:1px solid rgba(255, 255, 255, 0.05);box-shadow:0px -1px 2px 0px rgba(255, 255, 255, 0.2) inset;text-wrap:nowrap}.calculate-item__bar.svelte-1k9u7p2.svelte-1k9u7p2:not([data-available=true])::before{width:100%;--eversarj-text-opacity:1;color:rgb(163 163 163 / var(--eversarj-text-opacity));font-weight:500;content:attr(data-available);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAgMAAADw5/WeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURQAAAAAAAAAAAINj6cAAAAADdFJOUwAKDX4oUOkAAAAxSURBVAjXY2BbwpDlwCA1gXElA5AB5DGsBPEYQMJsDCBhKQaQcBYDsiKQ8AQGCvQCADqSGpHi02OPAAAAAElFTkSuQmCC")}.calculate-item__bar[data-available=true].svelte-1k9u7p2.svelte-1k9u7p2::before{--eversarj-text-opacity:1;color:rgb(255 255 255 / var(--eversarj-text-opacity));font-weight:600;--eversarj-numeric-spacing:tabular-nums;font-variant-numeric:var(--eversarj-ordinal) var(--eversarj-slashed-zero) var(--eversarj-numeric-figure) var(--eversarj-numeric-spacing) var(--eversarj-numeric-fraction);background:#242424;min-width:var(--width);content:attr(data-hour) " " attr(data-minute)}.calculate-helper.svelte-1k9u7p2.svelte-1k9u7p2{--eversarj-text-opacity:1;color:rgb(163 163 163 / var(--eversarj-text-opacity));font-size:14px;font-weight:400;line-height:20px;letter-spacing:-0.42px}`);
}
function an(t, e, n) {
  const r = t.slice();
  return r[8] = e[n].title, r[9] = e[n].phase, r[10] = e[n].description, r[11] = e[n].time, r[12] = e[n].width, r[13] = e[n].error, r;
}
function sn(t, e, n) {
  const r = t.slice();
  return r[16] = e[n][0], r[17] = e[n][1].label, r;
}
function on(t) {
  let e, n = (
    /*label*/
    t[17] + ""
  ), r;
  return {
    c() {
      e = y("option"), r = B(n), e.__value = /*key*/
      t[16], st(e, e.__value);
    },
    m(i, a) {
      L(i, e, a), g(e, r);
    },
    p: V,
    d(i) {
      i && O(e);
    }
  };
}
function ln(t) {
  let e, n, r = (
    /*description*/
    t[10] + ""
  ), i, a;
  return {
    c() {
      e = y("span"), n = y("strong"), i = B(r), a = B(`
              ile`), h(n, "class", "svelte-1k9u7p2");
    },
    m(s, l) {
      L(s, e, l), g(e, n), g(n, i), g(e, a);
    },
    p(s, l) {
      l & /*bars*/
      2 && r !== (r = /*description*/
      s[10] + "") && H(i, r);
    },
    d(s) {
      s && O(e);
    }
  };
}
function cn(t) {
  let e, n, r, i = (
    /*title*/
    t[8] + ""
  ), a, s, l = (
    /*phase*/
    t[9] + ""
  ), o, c, f, d, u, m, p, b, _, w = (
    /*time*/
    t[11] && ln(t)
  );
  return {
    c() {
      var v, j;
      e = y("div"), n = y("div"), r = y("span"), a = B(i), s = B(" ("), o = B(l), c = B(")"), f = z(), w && w.c(), d = z(), u = y("div"), _ = z(), h(n, "class", "calculate-item__title svelte-1k9u7p2"), h(u, "class", "calculate-item__bar svelte-1k9u7p2"), Ve(
        u,
        "--width",
        /*width*/
        t[12]
      ), h(u, "data-hour", m = /*time*/
      ((v = t[11]) == null ? void 0 : v.hour) + " Saat"), h(u, "data-minute", p = /*time*/
      ((j = t[11]) == null ? void 0 : j.minute) + " Dakika"), h(u, "data-available", b = /*time*/
      t[11] ? !0 : (
        /*error*/
        t[13]
      )), h(e, "class", "calculate-item svelte-1k9u7p2");
    },
    m(v, j) {
      L(v, e, j), g(e, n), g(n, r), g(r, a), g(r, s), g(r, o), g(r, c), g(n, f), w && w.m(n, null), g(e, d), g(e, u), g(e, _);
    },
    p(v, j) {
      var S, x;
      j & /*bars*/
      2 && i !== (i = /*title*/
      v[8] + "") && H(a, i), j & /*bars*/
      2 && l !== (l = /*phase*/
      v[9] + "") && H(o, l), /*time*/
      v[11] ? w ? w.p(v, j) : (w = ln(v), w.c(), w.m(n, null)) : w && (w.d(1), w = null), j & /*bars*/
      2 && Ve(
        u,
        "--width",
        /*width*/
        v[12]
      ), j & /*bars*/
      2 && m !== (m = /*time*/
      ((S = v[11]) == null ? void 0 : S.hour) + " Saat") && h(u, "data-hour", m), j & /*bars*/
      2 && p !== (p = /*time*/
      ((x = v[11]) == null ? void 0 : x.minute) + " Dakika") && h(u, "data-minute", p), j & /*bars*/
      2 && b !== (b = /*time*/
      v[11] ? !0 : (
        /*error*/
        v[13]
      )) && h(u, "data-available", b);
    },
    d(v) {
      v && O(e), w && w.d();
    }
  };
}
function Ca(t) {
  let e, n, r, i, a, s, l, o = (
    /*types*/
    t[2][
      /*type*/
      t[0]
    ].text + ""
  ), c, f, d, u, m, p, b, _, w, v, j = (
    /*types*/
    t[2][
      /*type*/
      t[0]
    ].text + ""
  ), S, x, $, P, T = re(Object.entries(
    /*types*/
    t[2]
  )), E = [];
  for (let M = 0; M < T.length; M += 1)
    E[M] = on(sn(t, T, M));
  let C = re(
    /*bars*/
    t[1]
  ), D = [];
  for (let M = 0; M < C.length; M += 1)
    D[M] = cn(an(t, C, M));
  return {
    c() {
      e = y("div"), n = y("div"), r = y("div"), r.textContent = "Şarj Süresi Hesaplaması", i = z(), a = y("div"), s = B("Tesla Model Y (Dört Çeker) modeli için "), l = y("strong"), c = B(o), f = B(`
      şarj süresi hesaplaması
      `), d = y("span"), d.textContent = "*", u = z(), m = y("select");
      for (let M = 0; M < E.length; M += 1)
        E[M].c();
      p = z(), b = y("div");
      for (let M = 0; M < D.length; M += 1)
        D[M].c();
      _ = z(), w = y("div"), v = B("*"), S = B(j), x = B(` kadar şarj ederken yaklaşık değerlerin belirlenmesi: gerçek şarj süresi ve şarj hızı, yuvarlama farklılıkları
    ve dış etkiler nedeniyle sapabilir.`), h(r, "class", "calculate-header__title svelte-1k9u7p2"), h(l, "class", "svelte-1k9u7p2"), h(d, "class", "svelte-1k9u7p2"), h(a, "class", "calculate-header__description svelte-1k9u7p2"), h(m, "class", "calculate-header__select svelte-1k9u7p2"), /*type*/
      t[0] === void 0 && Ge(() => (
        /*select_change_handler*/
        t[4].call(m)
      )), h(n, "class", "calculate-header svelte-1k9u7p2"), h(b, "class", "calculate-content svelte-1k9u7p2"), h(w, "class", "calculate-helper svelte-1k9u7p2"), h(e, "class", "calculate svelte-1k9u7p2");
    },
    m(M, U) {
      L(M, e, U), g(e, n), g(n, r), g(n, i), g(n, a), g(a, s), g(a, l), g(l, c), g(a, f), g(a, d), g(n, u), g(n, m);
      for (let I = 0; I < E.length; I += 1)
        E[I] && E[I].m(m, null);
      zt(
        m,
        /*type*/
        t[0],
        !0
      ), g(e, p), g(e, b);
      for (let I = 0; I < D.length; I += 1)
        D[I] && D[I].m(b, null);
      g(e, _), g(e, w), g(w, v), g(w, S), g(w, x), $ || (P = We(
        m,
        "change",
        /*select_change_handler*/
        t[4]
      ), $ = !0);
    },
    p(M, [U]) {
      if (U & /*type*/
      1 && o !== (o = /*types*/
      M[2][
        /*type*/
        M[0]
      ].text + "") && H(c, o), U & /*Object, types*/
      4) {
        T = re(Object.entries(
          /*types*/
          M[2]
        ));
        let I;
        for (I = 0; I < T.length; I += 1) {
          const le = sn(M, T, I);
          E[I] ? E[I].p(le, U) : (E[I] = on(le), E[I].c(), E[I].m(m, null));
        }
        for (; I < E.length; I += 1)
          E[I].d(1);
        E.length = T.length;
      }
      if (U & /*type, Object, types*/
      5 && zt(
        m,
        /*type*/
        M[0]
      ), U & /*bars*/
      2) {
        C = re(
          /*bars*/
          M[1]
        );
        let I;
        for (I = 0; I < C.length; I += 1) {
          const le = an(M, C, I);
          D[I] ? D[I].p(le, U) : (D[I] = cn(le), D[I].c(), D[I].m(b, null));
        }
        for (; I < D.length; I += 1)
          D[I].d(1);
        D.length = C.length;
      }
      U & /*type*/
      1 && j !== (j = /*types*/
      M[2][
        /*type*/
        M[0]
      ].text + "") && H(S, j);
    },
    i: V,
    o: V,
    d(M) {
      M && O(e), Qe(E, M), Qe(D, M), $ = !1, P();
    }
  };
}
function xa(t, e, n) {
  let r, { details: i } = e, a = "full";
  const s = {
    full: {
      label: "%0 - %100 Şarj",
      text: "0’dan %100’e",
      calculate: 1
    },
    half: {
      label: "%20 - %80 Şarj",
      text: "%20’den %80’e",
      calculate: 0.6
    }
  }, l = +i.meta.batteryCapacity, o = +i.meta.acChargingPower, c = (d) => (d = +d.toFixed(2) * s[a].calculate, {
    hour: Math.floor(d),
    minute: Math.ceil(d % 1 * 60)
  });
  function f() {
    a = tr(this), n(0, a), n(2, s);
  }
  return t.$$set = (d) => {
    "details" in d && n(3, i = d.details);
  }, t.$$.update = () => {
    t.$$.dirty & /*type*/
    1 && n(1, r = [
      {
        type: a,
        title: "Trifaze",
        phase: "Üç Faz",
        description: o === 11 ? "16A 11 kW" : "32A 22 kW",
        width: "33%",
        time: o < 11 ? null : c(l / o),
        error: "Bu araç trifaze desteğine sahip değildir"
      },
      {
        type: a,
        title: "Monofaze",
        phase: "Tek Faz",
        description: "32A 7.4 kW",
        width: o < 11 ? "50%" : "66%",
        time: o < 7.4 ? null : c(l / Math.min(o, 7.4)),
        error: "Bu araç 32A 7.4 kW desteğine sahip değildir"
      },
      {
        type: a,
        title: "Monofaze",
        phase: "Tek Faz",
        description: "16A 3.7 kW",
        width: "100%",
        time: c(l / Math.min(o, 3.7)),
        error: "Bu araç 16 amper desteğine sahip değildir"
      }
    ]);
  }, [a, r, s, i, f];
}
class Rn extends Y {
  constructor(e) {
    super(), W(this, e, xa, Ca, R, { details: 3 }, wa);
  }
  get details() {
    return this.$$.ctx[3];
  }
  set details(e) {
    this.$$set({ details: e }), G();
  }
}
X(Rn, { details: {} }, [], [], !0);
function $a(t) {
  Z(t, "svelte-119ljc0", '.details.svelte-119ljc0{position:relative;display:flex;flex-direction:column;gap:1rem}.details-banner.svelte-119ljc0{position:relative;height:18.75rem;width:100%;display:flex;overflow:hidden;border-radius:0.875rem;--eversarj-bg-opacity:1;background-color:rgb(245 245 245 / var(--eversarj-bg-opacity))}.details-banner__image.svelte-119ljc0{pointer-events:none;width:100%;height:100%;display:flex;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center}.details-banner__image.svelte-119ljc0 img{width:100%;height:100%;object-fit:cover;object-position:center}.details-banner__content.svelte-119ljc0{display:flex;align-items:flex-end;gap:1rem;position:absolute;inset:0;z-index:10;width:100%;height:100%;padding-left:2rem;padding-right:2rem;padding-top:1.75rem;padding-bottom:1.75rem;--eversarj-gradient-from-position:0%;--eversarj-gradient-from:rgb(38 38 38 / 0) var(--eversarj-gradient-from-position);--eversarj-gradient-to-position:100%;--eversarj-gradient-to:rgb(38 38 38 / 0) var(--eversarj-gradient-to-position);--eversarj-gradient-stops:var(--eversarj-gradient-from), var(--eversarj-gradient-to);--eversarj-gradient-to-position:100%;--eversarj-gradient-to:rgb(38 38 38 / var(--eversarj-to-opacity, 1)) var(--eversarj-gradient-to-position);--eversarj-gradient-from-position:20%;--eversarj-gradient-shape:to bottom;--eversarj-gradient:var(--eversarj-gradient-shape), var(--eversarj-gradient-stops);background-image:linear-gradient(var(--eversarj-gradient))}.details-banner__name.svelte-119ljc0{font-family:InterDisplay, Inter, sans-serif;color:rgba(255, 255, 255, 0.95);font-size:48px;font-weight:600;line-height:50px;letter-spacing:-0.96px}.details-banner__description.svelte-119ljc0{color:rgba(255, 255, 255, 0.7);font-size:32px;font-weight:500;line-height:normal;letter-spacing:-1.28px}.details-content.svelte-119ljc0{display:grid;gap:1rem;grid-template-columns:330px 1fr 330px}.details-content__info.svelte-119ljc0{display:flex;flex-direction:column;gap:1rem}.details-content__calculate.svelte-119ljc0{display:flex;flex-direction:column;gap:1rem}.details-content__product.svelte-119ljc0{display:flex;flex-direction:column;gap:1rem}.details-message.svelte-119ljc0{position:absolute;inset:0;z-index:120;margin-left:auto;margin-right:auto;max-width:25rem;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.details-message__image.svelte-119ljc0{margin-bottom:0.5rem;height:10rem;display:flex;align-items:center;justify-content:center}.details-message__image.svelte-119ljc0 img{height:100%;width:auto}.details-message__title.svelte-119ljc0{margin-bottom:0.25rem;font-size:1.25rem;line-height:1.75rem;--eversarj-text-opacity:1;color:rgb(38 38 38 / var(--eversarj-text-opacity));font-weight:600;font-family:InterDisplay, Inter, sans-serif}.details-message__description.svelte-119ljc0{text-align:center;font-size:1rem;line-height:1.5rem;--eversarj-text-opacity:1;color:rgb(64 64 64 / var(--eversarj-text-opacity))}.details--empty.svelte-119ljc0{pointer-events:none;margin:-1.5rem;-webkit-user-select:none;user-select:none;padding:1.5rem}.details--empty.svelte-119ljc0::before{position:absolute;inset:0;z-index:100;width:100%;height:100%;display:flex;background-color:rgb(255 255 255 / 0.5);content:"";backdrop-filter:blur(10px)}');
}
function un(t) {
  let e, n = (
    /*details*/
    t[2].description + ""
  ), r;
  return {
    c() {
      e = y("div"), r = B(n), h(e, "class", "details-banner__description svelte-119ljc0");
    },
    m(i, a) {
      L(i, e, a), g(e, r);
    },
    p(i, a) {
      a & /*details*/
      4 && n !== (n = /*details*/
      i[2].description + "") && H(r, n);
    },
    d(i) {
      i && O(e);
    }
  };
}
function fn(t) {
  let e, n, r, i, a, s, l = (
    /*brand*/
    t[0].name + ""
  ), o, c, f = (
    /*details*/
    t[2].name + ""
  ), d, u, m;
  r = new oe({
    props: {
      src: "/brands/" + /*brand*/
      t[0].slug + "/models/" + /*details*/
      t[2].slug + "/banner.png",
      alt: (
        /*details*/
        t[2].name + " Banner"
      ),
      draggable: "false"
    }
  });
  let p = (
    /*details*/
    t[2].description && un(t)
  );
  return {
    c() {
      e = y("div"), n = y("div"), N(r.$$.fragment), i = z(), a = y("div"), s = y("div"), o = B(l), c = z(), d = B(f), u = z(), p && p.c(), h(n, "class", "details-banner__image svelte-119ljc0"), h(s, "class", "details-banner__name svelte-119ljc0"), h(a, "class", "details-banner__content svelte-119ljc0"), h(e, "class", "details-banner svelte-119ljc0");
    },
    m(b, _) {
      L(b, e, _), g(e, n), q(r, n, null), g(e, i), g(e, a), g(a, s), g(s, o), g(s, c), g(s, d), g(a, u), p && p.m(a, null), m = !0;
    },
    p(b, _) {
      const w = {};
      _ & /*brand, details*/
      5 && (w.src = "/brands/" + /*brand*/
      b[0].slug + "/models/" + /*details*/
      b[2].slug + "/banner.png"), _ & /*details*/
      4 && (w.alt = /*details*/
      b[2].name + " Banner"), r.$set(w), (!m || _ & /*brand*/
      1) && l !== (l = /*brand*/
      b[0].name + "") && H(o, l), (!m || _ & /*details*/
      4) && f !== (f = /*details*/
      b[2].name + "") && H(d, f), /*details*/
      b[2].description ? p ? p.p(b, _) : (p = un(b), p.c(), p.m(a, null)) : p && (p.d(1), p = null);
    },
    i(b) {
      m || (k(r.$$.fragment, b), m = !0);
    },
    o(b) {
      A(r.$$.fragment, b), m = !1;
    },
    d(b) {
      b && O(e), Q(r), p && p.d();
    }
  };
}
function dn(t) {
  let e, n;
  return e = new Rn({ props: { details: (
    /*details*/
    t[2]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p(r, i) {
      const a = {};
      i & /*details*/
      4 && (a.details = /*details*/
      r[2]), e.$set(a);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function gn(t) {
  let e, n, r, i, a, s, l, o;
  return r = new oe({
    props: {
      src: "/empty/model.png",
      alt: "Empty Brand"
    }
  }), {
    c() {
      e = y("div"), n = y("div"), N(r.$$.fragment), i = z(), a = y("div"), a.textContent = "Model Seçimi Gerekli", s = z(), l = y("div"), l.textContent = "Şarj detaylarını görmeniz ve inceleyebilmeniz için önce bir model seçiminizi yapınız.", h(n, "class", "details-message__image svelte-119ljc0"), h(a, "class", "details-message__title svelte-119ljc0"), h(l, "class", "details-message__description svelte-119ljc0"), h(e, "class", "details-message svelte-119ljc0");
    },
    m(c, f) {
      L(c, e, f), g(e, n), q(r, n, null), g(e, i), g(e, a), g(e, s), g(e, l), o = !0;
    },
    i(c) {
      o || (k(r.$$.fragment, c), o = !0);
    },
    o(c) {
      A(r.$$.fragment, c), o = !1;
    },
    d(c) {
      c && O(e), Q(r);
    }
  };
}
function ka(t) {
  let e, n = (
    /*details*/
    t[2].slug
  ), r, i, a, s, l, o, c, f, d = (
    /*details*/
    t[2].slug
  ), u, m, p, b, _ = !/*$getDetails*/
  t[1].hasOwnProperty("slug"), w, v = fn(t);
  s = new ht({
    props: {
      icon: "ri:battery-low-line",
      title: "Batarya Kapasitesi",
      value: (
        /*details*/
        t[2].meta.batteryCapacity + " kW"
      )
    }
  }), o = new ht({
    props: {
      icon: "ri:plug-line",
      title: "Maksimum AC Şarj Gücü",
      value: (
        /*details*/
        t[2].meta.acChargingPower + " kW"
      )
    }
  });
  let j = dn(t);
  p = new Gn({});
  let S = _ && gn();
  return {
    c() {
      e = y("div"), v.c(), r = z(), i = y("div"), a = y("div"), N(s.$$.fragment), l = z(), N(o.$$.fragment), c = z(), f = y("div"), j.c(), u = z(), m = y("div"), N(p.$$.fragment), b = z(), S && S.c(), h(a, "class", "details-content__info svelte-119ljc0"), h(f, "class", "details-content__calculate svelte-119ljc0"), h(m, "class", "details-content__product svelte-119ljc0"), h(i, "class", "details-content svelte-119ljc0"), h(e, "class", "details svelte-119ljc0"), _e(e, "details--empty", !/*$getDetails*/
      t[1].hasOwnProperty("slug"));
    },
    m(x, $) {
      L(x, e, $), v.m(e, null), g(e, r), g(e, i), g(i, a), q(s, a, null), g(a, l), q(o, a, null), g(i, c), g(i, f), j.m(f, null), g(i, u), g(i, m), q(p, m, null), g(e, b), S && S.m(e, null), w = !0;
    },
    p(x, $) {
      $ & /*details*/
      4 && R(n, n = /*details*/
      x[2].slug) ? (ae(), A(v, 1, 1, V), se(), v = fn(x), v.c(), k(v, 1), v.m(e, r)) : v.p(x, $);
      const P = {};
      $ & /*details*/
      4 && (P.value = /*details*/
      x[2].meta.batteryCapacity + " kW"), s.$set(P);
      const T = {};
      $ & /*details*/
      4 && (T.value = /*details*/
      x[2].meta.acChargingPower + " kW"), o.$set(T), $ & /*details*/
      4 && R(d, d = /*details*/
      x[2].slug) ? (ae(), A(j, 1, 1, V), se(), j = dn(x), j.c(), k(j, 1), j.m(f, null)) : j.p(x, $), $ & /*$getDetails*/
      2 && (_ = !/*$getDetails*/
      x[1].hasOwnProperty("slug")), _ ? S ? $ & /*$getDetails*/
      2 && k(S, 1) : (S = gn(), S.c(), k(S, 1), S.m(e, null)) : S && (ae(), A(S, 1, 1, () => {
        S = null;
      }), se()), (!w || $ & /*$getDetails*/
      2) && _e(e, "details--empty", !/*$getDetails*/
      x[1].hasOwnProperty("slug"));
    },
    i(x) {
      w || (k(v), k(s.$$.fragment, x), k(o.$$.fragment, x), k(j), k(p.$$.fragment, x), k(S), w = !0);
    },
    o(x) {
      A(v), A(s.$$.fragment, x), A(o.$$.fragment, x), A(j), A(p.$$.fragment, x), A(S), w = !1;
    },
    d(x) {
      x && O(e), v.d(x), Q(s), Q(o), j.d(x), Q(p), S && S.d();
    }
  };
}
function ja(t) {
  let e, n;
  return e = new Je({
    props: {
      name: "detail",
      title: "Seçtiğiniz Aracın Hesaplaması",
      description: "Hedeflediğiniz aracın şarj süresi ve tüketim verileri ile ilgili detaylı bilgiyi inceleyebilirsiniz",
      $$slots: { default: [ka] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(r, i) {
      q(e, r, i), n = !0;
    },
    p(r, [i]) {
      const a = {};
      i & /*$$scope, $getDetails, details, brand*/
      39 && (a.$$scope = { dirty: i, ctx: r }), e.$set(a);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function Pa(t, e, n) {
  let r, i, a, s, l;
  return te(t, wt, (o) => n(3, a = o)), te(t, pr, (o) => n(1, s = o)), te(t, mr, (o) => n(4, l = o)), t.$$.update = () => {
    t.$$.dirty & /*$getDetails, $getBrand, $getBrands*/
    26 && n(0, r = s.hasOwnProperty("slug") ? l : a.find((o) => o.slug === "tesla")), t.$$.dirty & /*$getDetails, $getBrands*/
    10 && n(2, i = s.hasOwnProperty("slug") ? s : a.find((o) => o.slug === "tesla").models.find((o) => o.slug === "model-y-arkadan-ceker"));
  }, [r, s, i, a, l];
}
class Un extends Y {
  constructor(e) {
    super(), W(this, e, Pa, ja, R, {}, $a);
  }
}
X(Un, {}, [], [], !0);
function Aa(t) {
  Z(t, "svelte-1o3y68l", ".picker.svelte-1o3y68l{display:flex;flex-direction:column;gap:3rem;font-family:Inter, sans-serif}.picker-header.svelte-1o3y68l{display:flex;flex-direction:column;align-items:center;gap:0.5rem}.picker-header__title.svelte-1o3y68l{margin:0;text-align:center;--eversarj-text-opacity:1;color:rgb(38 38 38 / var(--eversarj-text-opacity));font-family:InterDisplay, Inter, sans-serif;font-size:38px;line-height:1.4;font-weight:600;letter-spacing:-0.57px}.picker-header__description.svelte-1o3y68l{margin:0;text-align:center;--eversarj-text-opacity:1;color:rgb(115 115 115 / var(--eversarj-text-opacity));font-size:20px;line-height:1.5;font-weight:400;letter-spacing:-0.7px;text-wrap:pretty}.picker-body.svelte-1o3y68l{counter-reset:step-counter;display:flex;flex-direction:column;gap:0.5rem}@media(max-width: 768px){.picker.svelte-1o3y68l{gap:2.5rem}.picker-header.svelte-1o3y68l{gap:0.375rem}.picker-header__title.svelte-1o3y68l{font-size:28px}.picker-header__description.svelte-1o3y68l{font-size:16px}}@media(max-width: 576px){.picker.svelte-1o3y68l{gap:2rem}.picker-header__title.svelte-1o3y68l{font-size:20px;line-height:24px}.picker-header__description.svelte-1o3y68l{font-size:14px;line-height:18px}}*,::before,::after{box-sizing:border-box}");
}
function Sa(t) {
  let e, n, r, i, a, s, l, o, c, f;
  return a = new Vn({}), l = new Fn({}), c = new Un({}), {
    c() {
      e = y("section"), n = y("div"), n.innerHTML = '<h1 class="picker-header__title svelte-1o3y68l">Şarj Süresi ve Tüketim Hesaplama</h1> <p class="picker-header__description svelte-1o3y68l">Seçtiğiniz aracın enerji tüketim maliyetini ve şarj süresini hesaplayabilirsiniz</p>', r = z(), i = y("div"), N(a.$$.fragment), s = z(), N(l.$$.fragment), o = z(), N(c.$$.fragment), h(n, "class", "picker-header svelte-1o3y68l"), h(i, "class", "picker-body svelte-1o3y68l"), h(e, "class", "picker svelte-1o3y68l");
    },
    m(d, u) {
      L(d, e, u), g(e, n), g(e, r), g(e, i), q(a, i, null), g(i, s), q(l, i, null), g(i, o), q(c, i, null), t[1](e), f = !0;
    },
    p: V,
    i(d) {
      f || (k(a.$$.fragment, d), k(l.$$.fragment, d), k(c.$$.fragment, d), f = !0);
    },
    o(d) {
      A(a.$$.fragment, d), A(l.$$.fragment, d), A(c.$$.fragment, d), f = !1;
    },
    d(d) {
      d && O(e), Q(a), Q(l), Q(c), t[1](null);
    }
  };
}
function Ea(t, e, n) {
  let r;
  te(t, Re, (a) => n(0, r = a)), yt(() => {
    ie.has("brand") && setTimeout(() => r.querySelector("#step-model").scrollIntoView(), 300), ie.has("brand") && ie.has("model") && setTimeout(() => r.querySelector("#step-detail").scrollIntoView(), 300);
  });
  function i(a) {
    Fe[a ? "unshift" : "push"](() => {
      r = a, Re.set(r);
    });
  }
  return [r, i];
}
class za extends Y {
  constructor(e) {
    super(), W(this, e, Ea, Sa, R, {}, Aa);
  }
}
customElements.define("eversarj-picker", X(za, {}, [], [], !0));
export {
  za as Picker
};
