var zc = Object.defineProperty;
var Jc = (e, t, n) => t in e ? zc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var xr = (e, t, n) => (Jc(e, typeof t != "symbol" ? t + "" : t, n), n);
function zt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function $s(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ye(o) ? Xc(o) : $s(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ye(e))
      return e;
    if (le(e))
      return e;
  }
}
const Gc = /;(?![^(]*\))/g, Yc = /:([^]+)/, Qc = /\/\*.*?\*\//gs;
function Xc(e) {
  const t = {};
  return e.replace(Qc, "").split(Gc).forEach((n) => {
    if (n) {
      const o = n.split(Yc);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Rn(e) {
  let t = "";
  if (ye(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const o = Rn(e[n]);
      o && (t += o + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Zc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", eu = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", tu = /* @__PURE__ */ zt(Zc), nu = /* @__PURE__ */ zt(eu), ou = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ru = /* @__PURE__ */ zt(ou);
function Tl(e) {
  return !!e || e === "";
}
function su(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = nr(e[o], t[o]);
  return n;
}
function nr(e, t) {
  if (e === t)
    return !0;
  let n = hi(e), o = hi(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = eo(e), o = eo(t), n || o)
    return e === t;
  if (n = H(e), o = H(t), n || o)
    return n && o ? su(e, t) : !1;
  if (n = le(e), o = le(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !nr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function iu(e, t) {
  return e.findIndex((n) => nr(n, t));
}
const Vt = (e) => ye(e) ? e : e == null ? "" : H(e) || le(e) && (e.toString === Rl || !W(e.toString)) ? JSON.stringify(e, Pl, 2) : String(e), Pl = (e, t) => t && t.__v_isRef ? Pl(e, t.value) : sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : or(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : le(t) && !H(t) && !$l(t) ? String(t) : t, fe = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, On = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Fe = () => {
}, Al = () => !1, lu = /^on[^a-z]/, po = (e) => lu.test(e), Uo = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, Vs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, au = Object.prototype.hasOwnProperty, X = (e, t) => au.call(e, t), H = Array.isArray, sn = (e) => ho(e) === "[object Map]", or = (e) => ho(e) === "[object Set]", hi = (e) => ho(e) === "[object Date]", W = (e) => typeof e == "function", ye = (e) => typeof e == "string", eo = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", ks = (e) => le(e) && W(e.then) && W(e.catch), Rl = Object.prototype.toString, ho = (e) => Rl.call(e), Is = (e) => ho(e).slice(8, -1), $l = (e) => ho(e) === "[object Object]", Fs = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ zt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cu = /* @__PURE__ */ zt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, uu = /-(\w)/g, yt = rr((e) => e.replace(uu, (t, n) => n ? n.toUpperCase() : "")), fu = /\B([A-Z])/g, Ct = rr((e) => e.replace(fu, "-$1").toLowerCase()), pn = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = rr((e) => e ? `on${pn(e)}` : ""), to = (e, t) => !Object.is(e, t), _n = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ho = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, no = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let mi;
const Vl = () => mi || (mi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ft;
class du {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = ft, !t && ft && (this.index = (ft.scopes || (ft.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = ft;
      try {
        return ft = this, t();
      } finally {
        ft = n;
      }
    } else
      process.env.NODE_ENV !== "production" && qr("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ft = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ft = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function pu(e, t = ft) {
  t && t.active && t.effects.push(e);
}
const oo = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, kl = (e) => (e.w & Kt) > 0, Il = (e) => (e.n & Kt) > 0, hu = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Kt;
}, mu = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      kl(r) && !Il(r) ? r.delete(e) : t[n++] = r, r.w &= ~Kt, r.n &= ~Kt;
    }
    t.length = n;
  }
}, Wr = /* @__PURE__ */ new WeakMap();
let Hn = 0, Kt = 1;
const zr = 30;
let Be;
const ln = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Jr = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Ls {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, pu(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Be, n = Ut;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Be, Be = this, Ut = !0, Kt = 1 << ++Hn, Hn <= zr ? hu(this) : gi(this), this.fn();
    } finally {
      Hn <= zr && mu(this), Kt = 1 << --Hn, Be = this.parent, Ut = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Be === this ? this.deferStop = !0 : this.active && (gi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function gi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ut = !0;
const Fl = [];
function mn() {
  Fl.push(Ut), Ut = !1;
}
function gn() {
  const e = Fl.pop();
  Ut = e === void 0 ? !0 : e;
}
function We(e, t, n) {
  if (Ut && Be) {
    let o = Wr.get(e);
    o || Wr.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = oo());
    const s = process.env.NODE_ENV !== "production" ? { effect: Be, target: e, type: t, key: n } : void 0;
    Gr(r, s);
  }
}
function Gr(e, t) {
  let n = !1;
  Hn <= zr ? Il(e) || (e.n |= Kt, n = !kl(e)) : n = !e.has(Be), n && (e.add(Be), Be.deps.push(e), process.env.NODE_ENV !== "production" && Be.onTrack && Be.onTrack(Object.assign({ effect: Be }, t)));
}
function Dt(e, t, n, o, r, s) {
  const i = Wr.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && H(e)) {
    const c = no(o);
    i.forEach((u, f) => {
      (f === "length" || f >= c) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        H(e) ? Fs(n) && l.push(i.get("length")) : (l.push(i.get(ln)), sn(e) && l.push(i.get(Jr)));
        break;
      case "delete":
        H(e) || (l.push(i.get(ln)), sn(e) && l.push(i.get(Jr)));
        break;
      case "set":
        sn(e) && l.push(i.get(ln));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? wn(l[0], a) : wn(l[0]));
  else {
    const c = [];
    for (const u of l)
      u && c.push(...u);
    process.env.NODE_ENV !== "production" ? wn(oo(c), a) : wn(oo(c));
  }
}
function wn(e, t) {
  const n = H(e) ? e : [...e];
  for (const o of n)
    o.computed && vi(o, t);
  for (const o of n)
    o.computed || vi(o, t);
}
function vi(e, t) {
  (e !== Be || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Oe({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const gu = /* @__PURE__ */ zt("__proto__,__v_isRef,__isVue"), Ll = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(eo)
), vu = /* @__PURE__ */ sr(), yu = /* @__PURE__ */ sr(!1, !0), Eu = /* @__PURE__ */ sr(!0), _u = /* @__PURE__ */ sr(!0, !0), yi = /* @__PURE__ */ bu();
function bu() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = G(this);
      for (let s = 0, i = this.length; s < i; s++)
        We(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(G)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      mn();
      const o = G(this)[t].apply(this, n);
      return gn(), o;
    };
  }), e;
}
function sr(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Wl : ql : t ? Kl : Hl).get(o))
      return o;
    const i = H(o);
    if (!e && i && X(yi, r))
      return Reflect.get(yi, r, s);
    const l = Reflect.get(o, r, s);
    return (eo(r) ? Ll.has(r) : gu(r)) || (e || We(o, "get", r), t) ? l : De(l) ? i && Fs(r) ? l : l.value : le(l) ? e ? zl(l) : $n(l) : l;
  };
}
const wu = /* @__PURE__ */ Ml(), Nu = /* @__PURE__ */ Ml(!0);
function Ml(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (qt(i) && De(i) && !De(r))
      return !1;
    if (!e && (!Ko(r) && !qt(r) && (i = G(i), r = G(r)), !H(n) && De(i) && !De(r)))
      return i.value = r, !0;
    const l = H(n) && Fs(o) ? Number(o) < n.length : X(n, o), a = Reflect.set(n, o, r, s);
    return n === G(s) && (l ? to(r, i) && Dt(n, "set", o, r, i) : Dt(n, "add", o, r)), a;
  };
}
function Ou(e, t) {
  const n = X(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Dt(e, "delete", t, void 0, o), r;
}
function xu(e, t) {
  const n = Reflect.has(e, t);
  return (!eo(t) || !Ll.has(t)) && We(e, "has", t), n;
}
function Su(e) {
  return We(e, "iterate", H(e) ? "length" : ln), Reflect.ownKeys(e);
}
const jl = {
  get: vu,
  set: wu,
  deleteProperty: Ou,
  has: xu,
  ownKeys: Su
}, Bl = {
  get: Eu,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && qr(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && qr(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Cu = /* @__PURE__ */ Oe({}, jl, {
  get: yu,
  set: Nu
}), Du = /* @__PURE__ */ Oe({}, Bl, {
  get: _u
}), Ms = (e) => e, ir = (e) => Reflect.getPrototypeOf(e);
function No(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = G(e), s = G(t);
  n || (t !== s && We(r, "get", t), We(r, "get", s));
  const { has: i } = ir(r), l = o ? Ms : n ? js : ro;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function Oo(e, t = !1) {
  const n = this.__v_raw, o = G(n), r = G(e);
  return t || (e !== r && We(o, "has", e), We(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function xo(e, t = !1) {
  return e = e.__v_raw, !t && We(G(e), "iterate", ln), Reflect.get(e, "size", e);
}
function Ei(e) {
  e = G(e);
  const t = G(this);
  return ir(t).has.call(t, e) || (t.add(e), Dt(t, "add", e, e)), this;
}
function _i(e, t) {
  t = G(t);
  const n = G(this), { has: o, get: r } = ir(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Ul(n, o, e) : (e = G(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? to(t, i) && Dt(n, "set", e, t, i) : Dt(n, "add", e, t), this;
}
function bi(e) {
  const t = G(this), { has: n, get: o } = ir(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Ul(t, n, e) : (e = G(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Dt(t, "delete", e, void 0, s), i;
}
function wi() {
  const e = G(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? sn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Dt(e, "clear", void 0, void 0, n), o;
}
function So(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = G(i), a = t ? Ms : e ? js : ro;
    return !e && We(l, "iterate", ln), i.forEach((c, u) => o.call(r, a(c), a(u), s));
  };
}
function Co(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = G(r), i = sn(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = r[e](...o), u = n ? Ms : t ? js : ro;
    return !t && We(s, "iterate", a ? Jr : ln), {
      // iterator protocol
      next() {
        const { value: f, done: d } = c.next();
        return d ? { value: f, done: d } : {
          value: l ? [u(f[0]), u(f[1])] : u(f),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function At(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${pn(e)} operation ${n}failed: target is readonly.`, G(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Tu() {
  const e = {
    get(s) {
      return No(this, s);
    },
    get size() {
      return xo(this);
    },
    has: Oo,
    add: Ei,
    set: _i,
    delete: bi,
    clear: wi,
    forEach: So(!1, !1)
  }, t = {
    get(s) {
      return No(this, s, !1, !0);
    },
    get size() {
      return xo(this);
    },
    has: Oo,
    add: Ei,
    set: _i,
    delete: bi,
    clear: wi,
    forEach: So(!1, !0)
  }, n = {
    get(s) {
      return No(this, s, !0);
    },
    get size() {
      return xo(this, !0);
    },
    has(s) {
      return Oo.call(this, s, !0);
    },
    add: At(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: At(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: At(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: At(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: So(!0, !1)
  }, o = {
    get(s) {
      return No(this, s, !0, !0);
    },
    get size() {
      return xo(this, !0);
    },
    has(s) {
      return Oo.call(this, s, !0);
    },
    add: At(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: At(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: At(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: At(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: So(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Co(s, !1, !1), n[s] = Co(s, !0, !1), t[s] = Co(s, !1, !0), o[s] = Co(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Pu, Au, Ru, $u] = /* @__PURE__ */ Tu();
function lr(e, t) {
  const n = t ? e ? $u : Ru : e ? Au : Pu;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(X(n, r) && r in o ? n : o, r, s);
}
const Vu = {
  get: /* @__PURE__ */ lr(!1, !1)
}, ku = {
  get: /* @__PURE__ */ lr(!1, !0)
}, Iu = {
  get: /* @__PURE__ */ lr(!0, !1)
}, Fu = {
  get: /* @__PURE__ */ lr(!0, !0)
};
function Ul(e, t, n) {
  const o = G(n);
  if (o !== n && t.call(e, o)) {
    const r = Is(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Hl = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakMap();
function Lu(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Mu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Lu(Is(e));
}
function $n(e) {
  return qt(e) ? e : ar(e, !1, jl, Vu, Hl);
}
function ju(e) {
  return ar(e, !1, Cu, ku, Kl);
}
function zl(e) {
  return ar(e, !0, Bl, Iu, ql);
}
function Nn(e) {
  return ar(e, !0, Du, Fu, Wl);
}
function ar(e, t, n, o, r) {
  if (!le(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Mu(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return r.set(e, l), l;
}
function an(e) {
  return qt(e) ? an(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ko(e) {
  return !!(e && e.__v_isShallow);
}
function Yr(e) {
  return an(e) || qt(e);
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Jl(e) {
  return Ho(e, "__v_skip", !0), e;
}
const ro = (e) => le(e) ? $n(e) : e, js = (e) => le(e) ? zl(e) : e;
function Gl(e) {
  Ut && Be && (e = G(e), process.env.NODE_ENV !== "production" ? Gr(e.dep || (e.dep = oo()), {
    target: e,
    type: "get",
    key: "value"
  }) : Gr(e.dep || (e.dep = oo())));
}
function Yl(e, t) {
  e = G(e), e.dep && (process.env.NODE_ENV !== "production" ? wn(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : wn(e.dep));
}
function De(e) {
  return !!(e && e.__v_isRef === !0);
}
function Q(e) {
  return Xl(e, !1);
}
function Ql(e) {
  return Xl(e, !0);
}
function Xl(e, t) {
  return De(e) ? e : new Bu(e, t);
}
class Bu {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : G(t), this._value = n ? t : ro(t);
  }
  get value() {
    return Gl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ko(t) || qt(t);
    t = n ? t : G(t), to(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ro(t), Yl(this, t));
  }
}
function be(e) {
  return De(e) ? e.value : e;
}
const Uu = {
  get: (e, t, n) => be(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return De(r) && !De(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Zl(e) {
  return an(e) ? e : new Proxy(e, Uu);
}
var ea;
class Hu {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[ea] = !1, this._dirty = !0, this.effect = new Ls(t, () => {
      this._dirty || (this._dirty = !0, Yl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = G(this);
    return Gl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
ea = "__v_isReadonly";
function Ku(e, t, n = !1) {
  let o, r;
  const s = W(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Fe) : (o = e.get, r = e.set);
  const i = new Hu(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const cn = [];
function Vo(e) {
  cn.push(e);
}
function ko() {
  cn.pop();
}
function C(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  mn();
  const n = cn.length ? cn[cn.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = qu();
  if (o)
    xt(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${mr(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Wu(r)), console.warn(...s);
  }
  gn();
}
function qu() {
  let e = cn[cn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Wu(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...zu(n));
  }), t;
}
function zu({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${mr(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Ju(e.props), s] : [r + s];
}
function Ju(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ta(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ta(e, t, n) {
  return ye(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : De(t) ? (t = ta(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : W(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
}
const Bs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function xt(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    cr(s, t, n);
  }
  return r;
}
function et(e, t, n, o) {
  if (W(e)) {
    const s = xt(e, t, n, o);
    return s && ks(s) && s.catch((i) => {
      cr(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(et(e[s], t, n, o));
  return r;
}
function cr(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Bs[n] : n;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      xt(a, null, 10, [e, i, l]);
      return;
    }
  }
  Gu(e, n, r, o);
}
function Gu(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Bs[t];
    if (n && Vo(n), C(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && ko(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let so = !1, Qr = !1;
const Le = [];
let pt = 0;
const xn = [];
let dt = null, kt = 0;
const na = /* @__PURE__ */ Promise.resolve();
let Us = null;
const Yu = 100;
function Hs(e) {
  const t = Us || na;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qu(e) {
  let t = pt + 1, n = Le.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    io(Le[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function ur(e) {
  (!Le.length || !Le.includes(e, so && e.allowRecurse ? pt + 1 : pt)) && (e.id == null ? Le.push(e) : Le.splice(Qu(e.id), 0, e), oa());
}
function oa() {
  !so && !Qr && (Qr = !0, Us = na.then(ia));
}
function Xu(e) {
  const t = Le.indexOf(e);
  t > pt && Le.splice(t, 1);
}
function ra(e) {
  H(e) ? xn.push(...e) : (!dt || !dt.includes(e, e.allowRecurse ? kt + 1 : kt)) && xn.push(e), oa();
}
function Ni(e, t = so ? pt + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Le.length; t++) {
    const n = Le[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Ks(e, n))
        continue;
      Le.splice(t, 1), t--, n();
    }
  }
}
function sa(e) {
  if (xn.length) {
    const t = [...new Set(xn)];
    if (xn.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), dt.sort((n, o) => io(n) - io(o)), kt = 0; kt < dt.length; kt++)
      process.env.NODE_ENV !== "production" && Ks(e, dt[kt]) || dt[kt]();
    dt = null, kt = 0;
  }
}
const io = (e) => e.id == null ? 1 / 0 : e.id, Zu = (e, t) => {
  const n = io(e) - io(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ia(e) {
  Qr = !1, so = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Le.sort(Zu);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ks(e, n) : Fe;
  try {
    for (pt = 0; pt < Le.length; pt++) {
      const n = Le[pt];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        xt(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    pt = 0, Le.length = 0, sa(e), so = !1, Us = null, (Le.length || xn.length) && ia(e);
  }
}
function Ks(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Yu) {
      const o = t.ownerInstance, r = o && Xs(o.type);
      return C(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Ht = !1;
const bn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Vl().__VUE_HMR_RUNTIME__ = {
  createRecord: Sr(la),
  rerender: Sr(nf),
  reload: Sr(of)
});
const hn = /* @__PURE__ */ new Map();
function ef(e) {
  const t = e.type.__hmrId;
  let n = hn.get(t);
  n || (la(t, e.type), n = hn.get(t)), n.instances.add(e);
}
function tf(e) {
  hn.get(e.type.__hmrId).instances.delete(e);
}
function la(e, t) {
  return hn.has(e) ? !1 : (hn.set(e, {
    initialDef: Wn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Wn(e) {
  return Ha(e) ? e.__vccOpts : e;
}
function nf(e, t) {
  const n = hn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Wn(o.type).render = t), o.renderCache = [], Ht = !0, o.update(), Ht = !1;
  }));
}
function of(e, t) {
  const n = hn.get(e);
  if (!n)
    return;
  t = Wn(t), Oi(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Wn(r.type);
    bn.has(s) || (s !== n.initialDef && Oi(s, t), bn.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (bn.add(s), r.ceReload(t.styles), bn.delete(s)) : r.parent ? ur(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  ra(() => {
    for (const r of o)
      bn.delete(Wn(r.type));
  });
}
function Oi(e, t) {
  Oe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Sr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let ht, Kn = [], Xr = !1;
function mo(e, ...t) {
  ht ? ht.emit(e, ...t) : Xr || Kn.push({ event: e, args: t });
}
function aa(e, t) {
  var n, o;
  ht = e, ht ? (ht.enabled = !0, Kn.forEach(({ event: r, args: s }) => ht.emit(r, ...s)), Kn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    aa(s, t);
  }), setTimeout(() => {
    ht || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xr = !0, Kn = []);
  }, 3e3)) : (Xr = !0, Kn = []);
}
function rf(e, t) {
  mo("app:init", e, t, {
    Fragment: Ce,
    Text: vo,
    Comment: Ie,
    Static: Gn
  });
}
function sf(e) {
  mo("app:unmount", e);
}
const lf = /* @__PURE__ */ qs(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), ca = /* @__PURE__ */ qs(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), af = /* @__PURE__ */ qs(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), cf = (e) => {
  ht && typeof ht.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ht.cleanupBuffer(e) && af(e);
};
function qs(e) {
  return (t) => {
    mo(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const uf = /* @__PURE__ */ ua(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), ff = /* @__PURE__ */ ua(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function ua(e) {
  return (t, n, o) => {
    mo(e, t.appContext.app, t.uid, t, n, o);
  };
}
function df(e, t, n) {
  mo("component:emit", e.appContext.app, e, t, n);
}
function pf(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || fe;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: u, propsOptions: [f] } = e;
    if (u)
      if (!(t in u))
        (!f || !(Qt(t) in f)) && C(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qt(t)}" prop.`);
      else {
        const d = u[t];
        W(d) && (d(...n) || C(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: d } = o[u] || fe;
    d && (r = n.map((m) => ye(m) ? m.trim() : m)), f && (r = n.map(no));
  }
  if (process.env.NODE_ENV !== "production" && df(e, t, r), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Qt(u)] && C(`Event "${u}" is emitted in component ${mr(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ct(t)}" instead of "${t}".`);
  }
  let l, a = o[l = Qt(t)] || // also try camelCase event handler (#2249)
  o[l = Qt(yt(t))];
  !a && s && (a = o[l = Qt(Ct(t))]), a && et(a, e, 6, r);
  const c = o[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, et(c, e, 6, r);
  }
}
function fa(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!W(e)) {
    const a = (c) => {
      const u = fa(c, t, !0);
      u && (l = !0, Oe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (le(e) && o.set(e, null), null) : (H(s) ? s.forEach((a) => i[a] = null) : Oe(i, s), le(e) && o.set(e, i), i);
}
function fr(e, t) {
  return !e || !po(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, Ct(t)) || X(e, t));
}
let Re = null, da = null;
function qo(e) {
  const t = Re;
  return Re = e, da = e && e.type.__scopeId || null, t;
}
function rt(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Fi(-1);
    const s = qo(t);
    let i;
    try {
      i = e(...r);
    } finally {
      qo(s), o._d && Fi(1);
    }
    return process.env.NODE_ENV !== "production" && ca(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Zr = !1;
function Wo() {
  Zr = !0;
}
function Cr(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: a, emit: c, render: u, renderCache: f, data: d, setupState: m, ctx: g, inheritAttrs: y } = e;
  let N, O;
  const S = qo(e);
  process.env.NODE_ENV !== "production" && (Zr = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = r || o;
      N = st(u.call(z, z, f, s, m, d, g)), O = a;
    } else {
      const z = t;
      process.env.NODE_ENV !== "production" && a === s && Wo(), N = st(z.length > 1 ? z(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return Wo(), a;
        },
        slots: l,
        emit: c
      } : { attrs: a, slots: l, emit: c }) : z(
        s,
        null
        /* we know it doesn't need it */
      )), O = t.props ? a : mf(a);
    }
  } catch (z) {
    Yn.length = 0, cr(
      z,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), N = we(Ie);
  }
  let k = N, F;
  if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && ([k, F] = hf(N)), O && y !== !1) {
    const z = Object.keys(O), { shapeFlag: ee } = k;
    if (z.length) {
      if (ee & 7)
        i && z.some(Uo) && (O = gf(O, i)), k = lt(k, O);
      else if (process.env.NODE_ENV !== "production" && !Zr && k.type !== Ie) {
        const se = Object.keys(a), K = [], Y = [];
        for (let te = 0, ce = se.length; te < ce; te++) {
          const de = se[te];
          po(de) ? Uo(de) || K.push(de[2].toLowerCase() + de.slice(3)) : Y.push(de);
        }
        Y.length && C(`Extraneous non-props attributes (${Y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), K.length && C(`Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !xi(k) && C("Runtime directive used on component with non-element root node. The directives will not function as intended."), k = lt(k), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !xi(k) && C("Component inside <Transition> renders non-element root node that cannot be animated."), k.transition = n.transition), process.env.NODE_ENV !== "production" && F ? F(k) : N = k, qo(S), N;
}
const hf = (e) => {
  const t = e.children, n = e.dynamicChildren, o = pa(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [st(o), i];
};
function pa(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Dn(o)) {
      if (o.type !== Ie || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const mf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || po(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gf = (e, t) => {
  const n = {};
  for (const o in e)
    (!Uo(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, xi = (e) => e.shapeFlag & 7 || e.type === Ie;
function vf(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, c = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && Ht || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Si(o, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (i[d] !== o[d] && !fr(c, d))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Si(o, i, c) : !0 : !!i;
  return !1;
}
function Si(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !fr(n, s))
      return !0;
  }
  return !1;
}
function yf({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ef = (e) => e.__isSuspense;
function _f(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : ra(e);
}
function qe(e, t) {
  if (!Ae)
    process.env.NODE_ENV !== "production" && C("provide() can only be used inside setup().");
  else {
    let n = Ae.provides;
    const o = Ae.parent && Ae.parent.provides;
    o === n && (n = Ae.provides = Object.create(o)), n[e] = t;
  }
}
function Ne(e, t, n = !1) {
  const o = Ae || Re;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && W(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && C(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && C("inject() can only be used inside setup() or functional components.");
}
function nt(e, t) {
  return Ws(e, null, t);
}
const Do = {};
function gt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !W(t) && C("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Ws(e, t, n);
}
function Ws(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = fe) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && C('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && C('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (F) => {
    C("Invalid watch source: ", F, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Ae;
  let c, u = !1, f = !1;
  if (De(e) ? (c = () => e.value, u = Ko(e)) : an(e) ? (c = () => e, o = !0) : H(e) ? (f = !0, u = e.some((F) => an(F) || Ko(F)), c = () => e.map((F) => {
    if (De(F))
      return F.value;
    if (an(F))
      return on(F);
    if (W(F))
      return xt(
        F,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(F);
  })) : W(e) ? t ? c = () => xt(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : c = () => {
    if (!(a && a.isUnmounted))
      return d && d(), et(e, a, 3, [m]);
  } : (c = Fe, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const F = c;
    c = () => on(F());
  }
  let d, m = (F) => {
    d = S.onStop = () => {
      xt(
        F,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, g;
  if (ao)
    if (m = Fe, t ? n && et(t, a, 3, [
      c(),
      f ? [] : void 0,
      m
    ]) : c(), r === "sync") {
      const F = Sd();
      g = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return Fe;
  let y = f ? new Array(e.length).fill(Do) : Do;
  const N = () => {
    if (S.active)
      if (t) {
        const F = S.run();
        (o || u || (f ? F.some((z, ee) => to(z, y[ee])) : to(F, y))) && (d && d(), et(t, a, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          y === Do ? void 0 : f && y[0] === Do ? [] : y,
          m
        ]), y = F);
      } else
        S.run();
  };
  N.allowRecurse = !!t;
  let O;
  r === "sync" ? O = N : r === "post" ? O = () => He(N, a && a.suspense) : (N.pre = !0, a && (N.id = a.uid), O = () => ur(N));
  const S = new Ls(c, O);
  process.env.NODE_ENV !== "production" && (S.onTrack = s, S.onTrigger = i), t ? n ? N() : y = S.run() : r === "post" ? He(S.run.bind(S), a && a.suspense) : S.run();
  const k = () => {
    S.stop(), a && a.scope && Vs(a.scope.effects, S);
  };
  return g && g.push(k), k;
}
function bf(e, t, n) {
  const o = this.proxy, r = ye(e) ? e.includes(".") ? ha(o, e) : () => o[e] : e.bind(o, o);
  let s;
  W(t) ? s = t : (s = t.handler, n = t);
  const i = Ae;
  Tn(this);
  const l = Ws(r, s.bind(o), n);
  return i ? Tn(i) : fn(), l;
}
function ha(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function on(e, t) {
  if (!le(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), De(e))
    on(e.value, t);
  else if (H(e))
    for (let n = 0; n < e.length; n++)
      on(e[n], t);
  else if (or(e) || sn(e))
    e.forEach((n) => {
      on(n, t);
    });
  else if ($l(e))
    for (const n in e)
      on(e[n], t);
  return e;
}
function wf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ve(() => {
    e.isMounted = !0;
  }), ya(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ze = [Function, Array], Nf = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: Ze,
    onEnter: Ze,
    onAfterEnter: Ze,
    onEnterCancelled: Ze,
    // leave
    onBeforeLeave: Ze,
    onLeave: Ze,
    onAfterLeave: Ze,
    onLeaveCancelled: Ze,
    // appear
    onBeforeAppear: Ze,
    onAppear: Ze,
    onAfterAppear: Ze,
    onAppearCancelled: Ze
  },
  setup(e, { slots: t }) {
    const n = Qs(), o = wf();
    let r;
    return () => {
      const s = t.default && ga(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let y = !1;
        for (const N of s)
          if (N.type !== Ie) {
            if (process.env.NODE_ENV !== "production" && y) {
              C("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = N, y = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = G(e), { mode: a } = l;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && C(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Dr(i);
      const c = Ci(i);
      if (!c)
        return Dr(i);
      const u = es(c, l, o, n);
      ts(c, u);
      const f = n.subTree, d = f && Ci(f);
      let m = !1;
      const { getTransitionKey: g } = c.type;
      if (g) {
        const y = g();
        r === void 0 ? r = y : y !== r && (r = y, m = !0);
      }
      if (d && d.type !== Ie && (!Zt(c, d) || m)) {
        const y = es(d, l, o, n);
        if (ts(d, y), a === "out-in")
          return o.isLeaving = !0, y.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Dr(i);
        a === "in-out" && c.type !== Ie && (y.delayLeave = (N, O, S) => {
          const k = ma(o, d);
          k[String(d.key)] = d, N._leaveCb = () => {
            O(), N._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = S;
        });
      }
      return i;
    };
  }
}, Of = Nf;
function ma(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function es(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: g, onBeforeAppear: y, onAppear: N, onAfterAppear: O, onAppearCancelled: S } = t, k = String(e.key), F = ma(n, e), z = (K, Y) => {
    K && et(K, o, 9, Y);
  }, ee = (K, Y) => {
    const te = Y[1];
    z(K, Y), H(K) ? K.every((ce) => ce.length <= 1) && te() : K.length <= 1 && te();
  }, se = {
    mode: s,
    persisted: i,
    beforeEnter(K) {
      let Y = l;
      if (!n.isMounted)
        if (r)
          Y = y || l;
        else
          return;
      K._leaveCb && K._leaveCb(
        !0
        /* cancelled */
      );
      const te = F[k];
      te && Zt(e, te) && te.el._leaveCb && te.el._leaveCb(), z(Y, [K]);
    },
    enter(K) {
      let Y = a, te = c, ce = u;
      if (!n.isMounted)
        if (r)
          Y = N || a, te = O || c, ce = S || u;
        else
          return;
      let de = !1;
      const ae = K._enterCb = (Xe) => {
        de || (de = !0, Xe ? z(ce, [K]) : z(te, [K]), se.delayedLeave && se.delayedLeave(), K._enterCb = void 0);
      };
      Y ? ee(Y, [K, ae]) : ae();
    },
    leave(K, Y) {
      const te = String(e.key);
      if (K._enterCb && K._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      z(f, [K]);
      let ce = !1;
      const de = K._leaveCb = (ae) => {
        ce || (ce = !0, Y(), ae ? z(g, [K]) : z(m, [K]), K._leaveCb = void 0, F[te] === e && delete F[te]);
      };
      F[te] = e, d ? ee(d, [K, de]) : de();
    },
    clone(K) {
      return es(K, t, n, o);
    }
  };
  return se;
}
function Dr(e) {
  if (go(e))
    return e = lt(e), e.children = null, e;
}
function Ci(e) {
  return go(e) ? e.children ? e.children[0] : void 0 : e;
}
function ts(e, t) {
  e.shapeFlag & 6 && e.component ? ts(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ga(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ce ? (i.patchFlag & 128 && r++, o = o.concat(ga(i.children, t, l))) : (t || i.type !== Ie) && o.push(l != null ? lt(i, { key: l }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function he(e) {
  return W(e) ? { setup: e, name: e.name } : e;
}
const zn = (e) => !!e.type.__asyncLoader, go = (e) => e.type.__isKeepAlive;
function xf(e, t) {
  va(e, "a", t);
}
function Sf(e, t) {
  va(e, "da", t);
}
function va(e, t, n = Ae) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (dr(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      go(r.parent.vnode) && Cf(o, t, n, r), r = r.parent;
  }
}
function Cf(e, t, n, o) {
  const r = dr(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ge(() => {
    Vs(o[t], r);
  }, n);
}
function dr(e, t, n = Ae, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      mn(), Tn(n);
      const l = et(t, n, e, i);
      return fn(), gn(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Qt(Bs[e].replace(/ hook$/, ""));
    C(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Tt = (e) => (t, n = Ae) => (!ao || e === "sp") && dr(e, (...o) => t(...o), n), Df = Tt(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Ve = Tt(
  "m"
  /* LifecycleHooks.MOUNTED */
), Tf = Tt(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Pf = Tt(
  "u"
  /* LifecycleHooks.UPDATED */
), ya = Tt(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Ge = Tt(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Af = Tt(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Rf = Tt(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), $f = Tt(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Vf(e, t = Ae) {
  dr("ec", e, t);
}
function Ea(e) {
  cu(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function Lt(e, t) {
  const n = Re;
  if (n === null)
    return process.env.NODE_ENV !== "production" && C("withDirectives can only be used inside render functions."), e;
  const o = hr(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, a, c = fe] = t[s];
    i && (W(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && on(l), r.push({
      dir: i,
      instance: o,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function Jt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[o];
    a && (mn(), et(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), gn());
  }
}
const zo = "components";
function _a(e, t) {
  return Na(zo, e, !0, t) || e;
}
const ba = Symbol();
function wa(e) {
  return ye(e) ? Na(zo, e, !1) || e : e || ba;
}
function Na(e, t, n = !0, o = !1) {
  const r = Re || Ae;
  if (r) {
    const s = r.type;
    if (e === zo) {
      const l = Xs(
        s,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (l && (l === t || l === yt(t) || l === pn(yt(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Di(r[e] || s[e], t) || // global registration
      Di(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const l = e === zo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      C(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && C(`resolve${pn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Di(e, t) {
  return e && (e[t] || e[yt(t)] || e[pn(yt(t))]);
}
function Jo(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (H(e) || ye(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && C(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (le(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const c = i[l];
        r[l] = t(e[c], c, l, s && s[l]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
function Tr(e, t, n = {}, o, r) {
  if (Re.isCE || Re.parent && zn(Re.parent) && Re.parent.isCE)
    return t !== "default" && (n.name = t), we("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (C("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), ve();
  const i = s && Oa(s(n)), l = vt(
    Ce,
    {
      key: n.key || i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Oa(e) {
  return e.some((t) => Dn(t) ? !(t.type === Ie || t.type === Ce && !Oa(t.children)) : !0) ? e : null;
}
const ns = (e) => e ? ja(e) ? hr(e) || e.proxy : ns(e.parent) : null, un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Nn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Nn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Nn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Nn(e.refs) : e.refs,
    $parent: (e) => ns(e.parent),
    $root: (e) => ns(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Js(e),
    $forceUpdate: (e) => e.f || (e.f = () => ur(e.update)),
    $nextTick: (e) => e.n || (e.n = Hs.bind(e.proxy)),
    $watch: (e) => bf.bind(e)
  })
), zs = (e) => e === "_" || e === "$", Pr = (e, t) => e !== fe && !e.__isScriptSetup && X(e, t), xa = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Pr(o, t))
          return i[t] = 1, o[t];
        if (r !== fe && X(r, t))
          return i[t] = 2, r[t];
        if ((c = e.propsOptions[0]) && X(c, t))
          return i[t] = 3, s[t];
        if (n !== fe && X(n, t))
          return i[t] = 4, n[t];
        os && (i[t] = 0);
      }
    }
    const u = un[t];
    let f, d;
    if (u)
      return t === "$attrs" && (We(e, "get", t), process.env.NODE_ENV !== "production" && Wo()), u(e);
    if ((f = l.__cssModules) && (f = f[t]))
      return f;
    if (n !== fe && X(n, t))
      return i[t] = 4, n[t];
    if (d = a.config.globalProperties, X(d, t))
      return d[t];
    process.env.NODE_ENV !== "production" && Re && (!ye(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== fe && zs(t[0]) && X(r, t) ? C(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Re && C(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Pr(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && X(r, t) ? (C(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== fe && X(o, t) ? (o[t] = n, !0) : X(e.props, t) ? (process.env.NODE_ENV !== "production" && C(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && C(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== fe && X(e, i) || Pr(t, i) || (l = s[0]) && X(l, i) || X(o, i) || X(un, i) || X(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (xa.ownKeys = (e) => (C("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function kf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(un).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => un[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Fe
    });
  }), t;
}
function If(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Fe
    });
  });
}
function Ff(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (zs(o[0])) {
        C(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Fe
      });
    }
  });
}
function Lf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? C(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let os = !0;
function Mf(e) {
  const t = Js(e), n = e.proxy, o = e.ctx;
  os = !1, t.beforeCreate && Ti(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: m,
    updated: g,
    activated: y,
    deactivated: N,
    beforeDestroy: O,
    beforeUnmount: S,
    destroyed: k,
    unmounted: F,
    render: z,
    renderTracked: ee,
    renderTriggered: se,
    errorCaptured: K,
    serverPrefetch: Y,
    // public API
    expose: te,
    inheritAttrs: ce,
    // assets
    components: de,
    directives: ae,
    filters: Xe
  } = t, _e = process.env.NODE_ENV !== "production" ? Lf() : null;
  if (process.env.NODE_ENV !== "production") {
    const [I] = e.propsOptions;
    if (I)
      for (const B in I)
        _e("Props", B);
  }
  if (c && jf(c, o, _e, e.appContext.config.unwrapInjectedRef), i)
    for (const I in i) {
      const B = i[I];
      W(B) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, I, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[I] = B.bind(n), process.env.NODE_ENV !== "production" && _e("Methods", I)) : process.env.NODE_ENV !== "production" && C(`Method "${I}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !W(r) && C("The data option must be a function. Plain object usage is no longer supported.");
    const I = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && ks(I) && C("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !le(I))
      process.env.NODE_ENV !== "production" && C("data() should return an object.");
    else if (e.data = $n(I), process.env.NODE_ENV !== "production")
      for (const B in I)
        _e("Data", B), zs(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => I[B],
          set: Fe
        });
  }
  if (os = !0, s)
    for (const I in s) {
      const B = s[I], ge = W(B) ? B.bind(n, n) : W(B.get) ? B.get.bind(n, n) : Fe;
      process.env.NODE_ENV !== "production" && ge === Fe && C(`Computed property "${I}" has no getter.`);
      const Te = !W(B) && W(B.set) ? B.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        C(`Write operation failed: computed property "${I}" is readonly.`);
      } : Fe, ze = q({
        get: ge,
        set: Te
      });
      Object.defineProperty(o, I, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (xe) => ze.value = xe
      }), process.env.NODE_ENV !== "production" && _e("Computed", I);
    }
  if (l)
    for (const I in l)
      Sa(l[I], o, n, I);
  if (a) {
    const I = W(a) ? a.call(n) : a;
    Reflect.ownKeys(I).forEach((B) => {
      qe(B, I[B]);
    });
  }
  u && Ti(
    u,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function me(I, B) {
    H(B) ? B.forEach((ge) => I(ge.bind(n))) : B && I(B.bind(n));
  }
  if (me(Df, f), me(Ve, d), me(Tf, m), me(Pf, g), me(xf, y), me(Sf, N), me(Vf, K), me($f, ee), me(Rf, se), me(ya, S), me(Ge, F), me(Af, Y), H(te))
    if (te.length) {
      const I = e.exposed || (e.exposed = {});
      te.forEach((B) => {
        Object.defineProperty(I, B, {
          get: () => n[B],
          set: (ge) => n[B] = ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  z && e.render === Fe && (e.render = z), ce != null && (e.inheritAttrs = ce), de && (e.components = de), ae && (e.directives = ae);
}
function jf(e, t, n = Fe, o = !1) {
  H(e) && (e = rs(e));
  for (const r in e) {
    const s = e[r];
    let i;
    le(s) ? "default" in s ? i = Ne(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : i = Ne(s.from || r) : i = Ne(s), De(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && C(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ti(e, t, n) {
  et(H(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sa(e, t, n, o) {
  const r = o.includes(".") ? ha(n, o) : () => n[o];
  if (ye(e)) {
    const s = t[e];
    W(s) ? gt(r, s) : process.env.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e}"`, s);
  } else if (W(e))
    gt(r, e.bind(n));
  else if (le(e))
    if (H(e))
      e.forEach((s) => Sa(s, t, n, o));
    else {
      const s = W(e.handler) ? e.handler.bind(n) : t[e.handler];
      W(s) ? gt(r, s, e) : process.env.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && C(`Invalid watch option: "${o}"`, e);
}
function Js(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach((c) => Go(a, c, i, !0)), Go(a, t, i)), le(t) && s.set(t, a), a;
}
function Go(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Go(e, s, n, !0), r && r.forEach((i) => Go(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && C('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = Bf[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Bf = {
  data: Pi,
  props: Xt,
  emits: Xt,
  // objects
  methods: Xt,
  computed: Xt,
  // lifecycle
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  // assets
  components: Xt,
  directives: Xt,
  // watch
  watch: Hf,
  // provide / inject
  provide: Pi,
  inject: Uf
};
function Pi(e, t) {
  return t ? e ? function() {
    return Oe(W(e) ? e.call(this, this) : e, W(t) ? t.call(this, this) : t);
  } : t : e;
}
function Uf(e, t) {
  return Xt(rs(e), rs(t));
}
function rs(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xt(e, t) {
  return e ? Oe(Oe(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Hf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Oe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = je(e[o], t[o]);
  return n;
}
function Kf(e, t, n, o = !1) {
  const r = {}, s = {};
  Ho(s, pr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ca(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Ta(t || {}, r, e), n ? e.props = o ? r : ju(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function qf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Wf(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, l = G(r), [a] = e.propsOptions;
  let c = !1;
  if (// always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !(process.env.NODE_ENV !== "production" && qf(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (fr(e.emitsOptions, d))
          continue;
        const m = t[d];
        if (a)
          if (X(s, d))
            m !== s[d] && (s[d] = m, c = !0);
          else {
            const g = yt(d);
            r[g] = ss(
              a,
              l,
              g,
              m,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          m !== s[d] && (s[d] = m, c = !0);
      }
    }
  } else {
    Ca(e, t, r, s) && (c = !0);
    let u;
    for (const f in l)
      (!t || !X(t, f) && ((u = Ct(f)) === f || !X(t, u))) && (a ? n && (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = ss(
        a,
        l,
        f,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[f]);
    if (s !== l)
      for (const f in s)
        (!t || !X(t, f)) && (delete s[f], c = !0);
  }
  c && Dt(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Ta(t || {}, r, e);
}
function Ca(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if ($o(a))
        continue;
      const c = t[a];
      let u;
      r && X(r, u = yt(a)) ? !s || !s.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : fr(e.emitsOptions, a) || (!(a in o) || c !== o[a]) && (o[a] = c, i = !0);
    }
  if (s) {
    const a = G(n), c = l || fe;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = ss(r, a, f, c[f], e, !X(c, f));
    }
  }
  return i;
}
function ss(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = X(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && W(a)) {
        const { propsDefaults: c } = r;
        n in c ? o = c[n] : (Tn(r), o = c[n] = a.call(null, t), fn());
      } else
        o = a;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? o = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Ct(n)) && (o = !0));
  }
  return o;
}
function Da(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!W(e)) {
    const u = (f) => {
      a = !0;
      const [d, m] = Da(f, t, !0);
      Oe(i, d), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !a)
    return le(e) && o.set(e, On), On;
  if (H(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !ye(s[u]) && C("props must be strings when using array syntax.", s[u]);
      const f = yt(s[u]);
      Ai(f) && (i[f] = fe);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !le(s) && C("invalid props options", s);
    for (const u in s) {
      const f = yt(u);
      if (Ai(f)) {
        const d = s[u], m = i[f] = H(d) || W(d) ? { type: d } : Object.assign({}, d);
        if (m) {
          const g = $i(Boolean, m.type), y = $i(String, m.type);
          m[
            0
            /* BooleanFlags.shouldCast */
          ] = g > -1, m[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = y < 0 || g < y, (g > -1 || X(m, "default")) && l.push(f);
        }
      }
    }
  }
  const c = [i, l];
  return le(e) && o.set(e, c), c;
}
function Ai(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && C(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function is(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Ri(e, t) {
  return is(e) === is(t);
}
function $i(e, t) {
  return H(t) ? t.findIndex((n) => Ri(n, e)) : W(t) && Ri(t, e) ? 0 : -1;
}
function Ta(e, t, n) {
  const o = G(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && zf(s, o[s], i, !X(e, s) && !X(e, Ct(s)));
  }
}
function zf(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    C('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const a = H(r) ? r : [r], c = [];
      for (let u = 0; u < a.length && !l; u++) {
        const { valid: f, expectedType: d } = Gf(t, a[u]);
        c.push(d || ""), l = f;
      }
      if (!l) {
        C(Yf(e, t, c));
        return;
      }
    }
    i && !i(t) && C('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Jf = /* @__PURE__ */ zt("String,Number,Boolean,Function,Symbol,BigInt");
function Gf(e, t) {
  let n;
  const o = is(t);
  if (Jf(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = le(e) : o === "Array" ? n = H(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Yf(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(pn).join(" | ")}`;
  const r = n[0], s = Is(t), i = Vi(t, r), l = Vi(t, s);
  return n.length === 1 && ki(r) && !Qf(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, ki(s) && (o += `with value ${l}.`), o;
}
function Vi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ki(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Qf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Pa = (e) => e[0] === "_" || e === "$stable", Gs = (e) => H(e) ? e.map(st) : [st(e)], Xf = (e, t, n) => {
  if (t._n)
    return t;
  const o = rt((...r) => (process.env.NODE_ENV !== "production" && Ae && C(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Gs(t(...r))), n);
  return o._c = !1, o;
}, Aa = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Pa(r))
      continue;
    const s = e[r];
    if (W(s))
      t[r] = Xf(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && C(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Gs(s);
      t[r] = () => i;
    }
  }
}, Ra = (e, t) => {
  process.env.NODE_ENV !== "production" && !go(e.vnode) && C("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Gs(t);
  e.slots.default = () => n;
}, Zf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = G(t), Ho(t, "_", n)) : Aa(t, e.slots = {});
  } else
    e.slots = {}, t && Ra(e, t);
  Ho(e.slots, pr, 1);
}, ed = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = fe;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ht ? Oe(r, t) : n && l === 1 ? s = !1 : (Oe(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Aa(t, r)), i = t;
  } else
    t && (Ra(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Pa(l) && !(l in i) && delete r[l];
};
function $a() {
  return {
    app: null,
    config: {
      isNativeTag: Al,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let td = 0;
function nd(e, t) {
  return function(o, r = null) {
    W(o) || (o = Object.assign({}, o)), r != null && !le(r) && (process.env.NODE_ENV !== "production" && C("root props passed to app.mount() must be an object."), r = null);
    const s = $a(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: td++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ji,
      get config() {
        return s.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && C("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...u) {
        return i.has(c) ? process.env.NODE_ENV !== "production" && C("Plugin has already been applied to target app.") : c && W(c.install) ? (i.add(c), c.install(a, ...u)) : W(c) ? (i.add(c), c(a, ...u)) : process.env.NODE_ENV !== "production" && C('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(c) {
        return s.mixins.includes(c) ? process.env.NODE_ENV !== "production" && C("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : s.mixins.push(c), a;
      },
      component(c, u) {
        return process.env.NODE_ENV !== "production" && cs(c, s.config), u ? (process.env.NODE_ENV !== "production" && s.components[c] && C(`Component "${c}" has already been registered in target app.`), s.components[c] = u, a) : s.components[c];
      },
      directive(c, u) {
        return process.env.NODE_ENV !== "production" && Ea(c), u ? (process.env.NODE_ENV !== "production" && s.directives[c] && C(`Directive "${c}" has already been registered in target app.`), s.directives[c] = u, a) : s.directives[c];
      },
      mount(c, u, f) {
        if (l)
          process.env.NODE_ENV !== "production" && C("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && C("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const d = we(o, r);
          return d.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(lt(d), c, f);
          }), u && t ? t(d, c) : e(d, c, f), l = !0, a._container = c, c.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = d.component, rf(a, ji)), hr(d.component) || d.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, sf(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && C("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return process.env.NODE_ENV !== "production" && c in s.provides && C(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), s.provides[c] = u, a;
      }
    };
    return a;
  };
}
function ls(e, t, n, o, r = !1) {
  if (H(e)) {
    e.forEach((d, m) => ls(d, t && (H(t) ? t[m] : t), n, o, r));
    return;
  }
  if (zn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? hr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    C("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = t && t.r, u = l.refs === fe ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== a && (ye(c) ? (u[c] = null, X(f, c) && (f[c] = null)) : De(c) && (c.value = null)), W(a))
    xt(a, l, 12, [i, u]);
  else {
    const d = ye(a), m = De(a);
    if (d || m) {
      const g = () => {
        if (e.f) {
          const y = d ? X(f, a) ? f[a] : u[a] : a.value;
          r ? H(y) && Vs(y, s) : H(y) ? y.includes(s) || y.push(s) : d ? (u[a] = [s], X(f, a) && (f[a] = u[a])) : (a.value = [s], e.k && (u[e.k] = a.value));
        } else
          d ? (u[a] = i, X(f, a) && (f[a] = i)) : m ? (a.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (g.id = -1, He(g, n)) : g();
    } else
      process.env.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let Fn, Mt;
function wt(e, t) {
  e.appContext.config.performance && Yo() && Mt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && uf(e, t, Yo() ? Mt.now() : Date.now());
}
function Nt(e, t) {
  if (e.appContext.config.performance && Yo()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Mt.mark(o), Mt.measure(`<${mr(e, e.type)}> ${t}`, n, o), Mt.clearMarks(n), Mt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && ff(e, t, Yo() ? Mt.now() : Date.now());
}
function Yo() {
  return Fn !== void 0 || (typeof window < "u" && window.performance ? (Fn = !0, Mt = window.performance) : Fn = !1), Fn;
}
function od() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const He = _f;
function rd(e) {
  return sd(e);
}
function sd(e, t) {
  od();
  const n = Vl();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && aa(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: a, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m = Fe, insertStaticContent: g } = e, y = (p, h, v, w = null, _ = null, P = null, R = !1, D = null, A = process.env.NODE_ENV !== "production" && Ht ? !1 : !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Zt(p, h) && (w = $(p), Ue(p, _, P, !0), p = null), h.patchFlag === -2 && (A = !1, h.dynamicChildren = null);
    const { type: x, ref: j, shapeFlag: M } = h;
    switch (x) {
      case vo:
        N(p, h, v, w);
        break;
      case Ie:
        O(p, h, v, w);
        break;
      case Gn:
        p == null ? S(h, v, w, R) : process.env.NODE_ENV !== "production" && k(p, h, v, R);
        break;
      case Ce:
        ae(p, h, v, w, _, P, R, D, A);
        break;
      default:
        M & 1 ? ee(p, h, v, w, _, P, R, D, A) : M & 6 ? Xe(p, h, v, w, _, P, R, D, A) : M & 64 || M & 128 ? x.process(p, h, v, w, _, P, R, D, A, L) : process.env.NODE_ENV !== "production" && C("Invalid VNode type:", x, `(${typeof x})`);
    }
    j != null && _ && ls(j, p && p.ref, P, h || p, !h);
  }, N = (p, h, v, w) => {
    if (p == null)
      o(h.el = l(h.children), v, w);
    else {
      const _ = h.el = p.el;
      h.children !== p.children && c(_, h.children);
    }
  }, O = (p, h, v, w) => {
    p == null ? o(h.el = a(h.children || ""), v, w) : h.el = p.el;
  }, S = (p, h, v, w) => {
    [p.el, p.anchor] = g(p.children, h, v, w, p.el, p.anchor);
  }, k = (p, h, v, w) => {
    if (h.children !== p.children) {
      const _ = d(p.anchor);
      z(p), [h.el, h.anchor] = g(h.children, v, _, w);
    } else
      h.el = p.el, h.anchor = p.anchor;
  }, F = ({ el: p, anchor: h }, v, w) => {
    let _;
    for (; p && p !== h; )
      _ = d(p), o(p, v, w), p = _;
    o(h, v, w);
  }, z = ({ el: p, anchor: h }) => {
    let v;
    for (; p && p !== h; )
      v = d(p), r(p), p = v;
    r(h);
  }, ee = (p, h, v, w, _, P, R, D, A) => {
    R = R || h.type === "svg", p == null ? se(h, v, w, _, P, R, D, A) : te(p, h, _, P, R, D, A);
  }, se = (p, h, v, w, _, P, R, D) => {
    let A, x;
    const { type: j, props: M, shapeFlag: U, transition: J, dirs: Z } = p;
    if (A = p.el = i(p.type, P, M && M.is, M), U & 8 ? u(A, p.children) : U & 16 && Y(p.children, A, null, w, _, P && j !== "foreignObject", R, D), Z && Jt(p, null, w, "created"), M) {
      for (const ue in M)
        ue !== "value" && !$o(ue) && s(A, ue, null, M[ue], P, p.children, w, _, E);
      "value" in M && s(A, "value", null, M.value), (x = M.onVnodeBeforeMount) && ut(x, w, p);
    }
    K(A, p, p.scopeId, R, w), process.env.NODE_ENV !== "production" && (Object.defineProperty(A, "__vnode", {
      value: p,
      enumerable: !1
    }), Object.defineProperty(A, "__vueParentComponent", {
      value: w,
      enumerable: !1
    })), Z && Jt(p, null, w, "beforeMount");
    const pe = (!_ || _ && !_.pendingBranch) && J && !J.persisted;
    pe && J.beforeEnter(A), o(A, h, v), ((x = M && M.onVnodeMounted) || pe || Z) && He(() => {
      x && ut(x, w, p), pe && J.enter(A), Z && Jt(p, null, w, "mounted");
    }, _);
  }, K = (p, h, v, w, _) => {
    if (v && m(p, v), w)
      for (let P = 0; P < w.length; P++)
        m(p, w[P]);
    if (_) {
      let P = _.subTree;
      if (process.env.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && (P = pa(P.children) || P), h === P) {
        const R = _.vnode;
        K(p, R, R.scopeId, R.slotScopeIds, _.parent);
      }
    }
  }, Y = (p, h, v, w, _, P, R, D, A = 0) => {
    for (let x = A; x < p.length; x++) {
      const j = p[x] = D ? It(p[x]) : st(p[x]);
      y(null, j, h, v, w, _, P, R, D);
    }
  }, te = (p, h, v, w, _, P, R) => {
    const D = h.el = p.el;
    let { patchFlag: A, dynamicChildren: x, dirs: j } = h;
    A |= p.patchFlag & 16;
    const M = p.props || fe, U = h.props || fe;
    let J;
    v && Gt(v, !1), (J = U.onVnodeBeforeUpdate) && ut(J, v, h, p), j && Jt(h, p, v, "beforeUpdate"), v && Gt(v, !0), process.env.NODE_ENV !== "production" && Ht && (A = 0, R = !1, x = null);
    const Z = _ && h.type !== "foreignObject";
    if (x ? (ce(p.dynamicChildren, x, D, v, w, Z, P), process.env.NODE_ENV !== "production" && v && v.type.__hmrId && Jn(p, h)) : R || ge(p, h, D, null, v, w, Z, P, !1), A > 0) {
      if (A & 16)
        de(D, h, M, U, v, w, _);
      else if (A & 2 && M.class !== U.class && s(D, "class", null, U.class, _), A & 4 && s(D, "style", M.style, U.style, _), A & 8) {
        const pe = h.dynamicProps;
        for (let ue = 0; ue < pe.length; ue++) {
          const Se = pe[ue], ot = M[Se], yn = U[Se];
          (yn !== ot || Se === "value") && s(D, Se, ot, yn, _, p.children, v, w, E);
        }
      }
      A & 1 && p.children !== h.children && u(D, h.children);
    } else
      !R && x == null && de(D, h, M, U, v, w, _);
    ((J = U.onVnodeUpdated) || j) && He(() => {
      J && ut(J, v, h, p), j && Jt(h, p, v, "updated");
    }, w);
  }, ce = (p, h, v, w, _, P, R) => {
    for (let D = 0; D < h.length; D++) {
      const A = p[D], x = h[D], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && (A.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(A, x) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 70) ? f(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      y(A, x, j, null, w, _, P, R, !0);
    }
  }, de = (p, h, v, w, _, P, R) => {
    if (v !== w) {
      if (v !== fe)
        for (const D in v)
          !$o(D) && !(D in w) && s(p, D, v[D], null, R, h.children, _, P, E);
      for (const D in w) {
        if ($o(D))
          continue;
        const A = w[D], x = v[D];
        A !== x && D !== "value" && s(p, D, x, A, R, h.children, _, P, E);
      }
      "value" in w && s(p, "value", v.value, w.value);
    }
  }, ae = (p, h, v, w, _, P, R, D, A) => {
    const x = h.el = p ? p.el : l(""), j = h.anchor = p ? p.anchor : l("");
    let { patchFlag: M, dynamicChildren: U, slotScopeIds: J } = h;
    process.env.NODE_ENV !== "production" && (Ht || M & 2048) && (M = 0, A = !1, U = null), J && (D = D ? D.concat(J) : J), p == null ? (o(x, v, w), o(j, v, w), Y(h.children, v, j, _, P, R, D, A)) : M > 0 && M & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (ce(p.dynamicChildren, U, v, _, P, R, D), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? Jn(p, h) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (h.key != null || _ && h === _.subTree) && Jn(
        p,
        h,
        !0
        /* shallow */
      )
    )) : ge(p, h, v, j, _, P, R, D, A);
  }, Xe = (p, h, v, w, _, P, R, D, A) => {
    h.slotScopeIds = D, p == null ? h.shapeFlag & 512 ? _.ctx.activate(h, v, w, R, A) : _e(h, v, w, _, P, R, A) : me(p, h, A);
  }, _e = (p, h, v, w, _, P, R) => {
    const D = p.component = yd(p, w, _);
    if (process.env.NODE_ENV !== "production" && D.type.__hmrId && ef(D), process.env.NODE_ENV !== "production" && (Vo(p), wt(D, "mount")), go(p) && (D.ctx.renderer = L), process.env.NODE_ENV !== "production" && wt(D, "init"), _d(D), process.env.NODE_ENV !== "production" && Nt(D, "init"), D.asyncDep) {
      if (_ && _.registerDep(D, I), !p.el) {
        const A = D.subTree = we(Ie);
        O(null, A, h, v);
      }
      return;
    }
    I(D, p, h, v, _, P, R), process.env.NODE_ENV !== "production" && (ko(), Nt(D, "mount"));
  }, me = (p, h, v) => {
    const w = h.component = p.component;
    if (vf(p, h, v))
      if (w.asyncDep && !w.asyncResolved) {
        process.env.NODE_ENV !== "production" && Vo(h), B(w, h, v), process.env.NODE_ENV !== "production" && ko();
        return;
      } else
        w.next = h, Xu(w.update), w.update();
    else
      h.el = p.el, w.vnode = h;
  }, I = (p, h, v, w, _, P, R) => {
    const D = () => {
      if (p.isMounted) {
        let { next: j, bu: M, u: U, parent: J, vnode: Z } = p, pe = j, ue;
        process.env.NODE_ENV !== "production" && Vo(j || p.vnode), Gt(p, !1), j ? (j.el = Z.el, B(p, j, R)) : j = Z, M && _n(M), (ue = j.props && j.props.onVnodeBeforeUpdate) && ut(ue, J, j, Z), Gt(p, !0), process.env.NODE_ENV !== "production" && wt(p, "render");
        const Se = Cr(p);
        process.env.NODE_ENV !== "production" && Nt(p, "render");
        const ot = p.subTree;
        p.subTree = Se, process.env.NODE_ENV !== "production" && wt(p, "patch"), y(
          ot,
          Se,
          // parent may have changed if it's in a teleport
          f(ot.el),
          // anchor may have changed if it's in a fragment
          $(ot),
          p,
          _,
          P
        ), process.env.NODE_ENV !== "production" && Nt(p, "patch"), j.el = Se.el, pe === null && yf(p, Se.el), U && He(U, _), (ue = j.props && j.props.onVnodeUpdated) && He(() => ut(ue, J, j, Z), _), process.env.NODE_ENV !== "production" && ca(p), process.env.NODE_ENV !== "production" && ko();
      } else {
        let j;
        const { el: M, props: U } = h, { bm: J, m: Z, parent: pe } = p, ue = zn(h);
        if (Gt(p, !1), J && _n(J), !ue && (j = U && U.onVnodeBeforeMount) && ut(j, pe, h), Gt(p, !0), M && Ee) {
          const Se = () => {
            process.env.NODE_ENV !== "production" && wt(p, "render"), p.subTree = Cr(p), process.env.NODE_ENV !== "production" && Nt(p, "render"), process.env.NODE_ENV !== "production" && wt(p, "hydrate"), Ee(M, p.subTree, p, _, null), process.env.NODE_ENV !== "production" && Nt(p, "hydrate");
          };
          ue ? h.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && Se()
          ) : Se();
        } else {
          process.env.NODE_ENV !== "production" && wt(p, "render");
          const Se = p.subTree = Cr(p);
          process.env.NODE_ENV !== "production" && Nt(p, "render"), process.env.NODE_ENV !== "production" && wt(p, "patch"), y(null, Se, v, w, p, _, P), process.env.NODE_ENV !== "production" && Nt(p, "patch"), h.el = Se.el;
        }
        if (Z && He(Z, _), !ue && (j = U && U.onVnodeMounted)) {
          const Se = h;
          He(() => ut(j, pe, Se), _);
        }
        (h.shapeFlag & 256 || pe && zn(pe.vnode) && pe.vnode.shapeFlag & 256) && p.a && He(p.a, _), p.isMounted = !0, process.env.NODE_ENV !== "production" && lf(p), h = v = w = null;
      }
    }, A = p.effect = new Ls(
      D,
      () => ur(x),
      p.scope
      // track it in component's effect scope
    ), x = p.update = () => A.run();
    x.id = p.uid, Gt(p, !0), process.env.NODE_ENV !== "production" && (A.onTrack = p.rtc ? (j) => _n(p.rtc, j) : void 0, A.onTrigger = p.rtg ? (j) => _n(p.rtg, j) : void 0, x.ownerInstance = p), x();
  }, B = (p, h, v) => {
    h.component = p;
    const w = p.vnode.props;
    p.vnode = h, p.next = null, Wf(p, h.props, w, v), ed(p, h.children, v), mn(), Ni(), gn();
  }, ge = (p, h, v, w, _, P, R, D, A = !1) => {
    const x = p && p.children, j = p ? p.shapeFlag : 0, M = h.children, { patchFlag: U, shapeFlag: J } = h;
    if (U > 0) {
      if (U & 128) {
        ze(x, M, v, w, _, P, R, D, A);
        return;
      } else if (U & 256) {
        Te(x, M, v, w, _, P, R, D, A);
        return;
      }
    }
    J & 8 ? (j & 16 && E(x, _, P), M !== x && u(v, M)) : j & 16 ? J & 16 ? ze(x, M, v, w, _, P, R, D, A) : E(x, _, P, !0) : (j & 8 && u(v, ""), J & 16 && Y(M, v, w, _, P, R, D, A));
  }, Te = (p, h, v, w, _, P, R, D, A) => {
    p = p || On, h = h || On;
    const x = p.length, j = h.length, M = Math.min(x, j);
    let U;
    for (U = 0; U < M; U++) {
      const J = h[U] = A ? It(h[U]) : st(h[U]);
      y(p[U], J, v, null, _, P, R, D, A);
    }
    x > j ? E(p, _, P, !0, !1, M) : Y(h, v, w, _, P, R, D, A, M);
  }, ze = (p, h, v, w, _, P, R, D, A) => {
    let x = 0;
    const j = h.length;
    let M = p.length - 1, U = j - 1;
    for (; x <= M && x <= U; ) {
      const J = p[x], Z = h[x] = A ? It(h[x]) : st(h[x]);
      if (Zt(J, Z))
        y(J, Z, v, null, _, P, R, D, A);
      else
        break;
      x++;
    }
    for (; x <= M && x <= U; ) {
      const J = p[M], Z = h[U] = A ? It(h[U]) : st(h[U]);
      if (Zt(J, Z))
        y(J, Z, v, null, _, P, R, D, A);
      else
        break;
      M--, U--;
    }
    if (x > M) {
      if (x <= U) {
        const J = U + 1, Z = J < j ? h[J].el : w;
        for (; x <= U; )
          y(null, h[x] = A ? It(h[x]) : st(h[x]), v, Z, _, P, R, D, A), x++;
      }
    } else if (x > U)
      for (; x <= M; )
        Ue(p[x], _, P, !0), x++;
    else {
      const J = x, Z = x, pe = /* @__PURE__ */ new Map();
      for (x = Z; x <= U; x++) {
        const Me = h[x] = A ? It(h[x]) : st(h[x]);
        Me.key != null && (process.env.NODE_ENV !== "production" && pe.has(Me.key) && C("Duplicate keys found during update:", JSON.stringify(Me.key), "Make sure keys are unique."), pe.set(Me.key, x));
      }
      let ue, Se = 0;
      const ot = U - Z + 1;
      let yn = !1, fi = 0;
      const In = new Array(ot);
      for (x = 0; x < ot; x++)
        In[x] = 0;
      for (x = J; x <= M; x++) {
        const Me = p[x];
        if (Se >= ot) {
          Ue(Me, _, P, !0);
          continue;
        }
        let ct;
        if (Me.key != null)
          ct = pe.get(Me.key);
        else
          for (ue = Z; ue <= U; ue++)
            if (In[ue - Z] === 0 && Zt(Me, h[ue])) {
              ct = ue;
              break;
            }
        ct === void 0 ? Ue(Me, _, P, !0) : (In[ct - Z] = x + 1, ct >= fi ? fi = ct : yn = !0, y(Me, h[ct], v, null, _, P, R, D, A), Se++);
      }
      const di = yn ? id(In) : On;
      for (ue = di.length - 1, x = ot - 1; x >= 0; x--) {
        const Me = Z + x, ct = h[Me], pi = Me + 1 < j ? h[Me + 1].el : w;
        In[x] === 0 ? y(null, ct, v, pi, _, P, R, D, A) : yn && (ue < 0 || x !== di[ue] ? xe(
          ct,
          v,
          pi,
          2
          /* MoveType.REORDER */
        ) : ue--);
      }
    }
  }, xe = (p, h, v, w, _ = null) => {
    const { el: P, type: R, transition: D, children: A, shapeFlag: x } = p;
    if (x & 6) {
      xe(p.component.subTree, h, v, w);
      return;
    }
    if (x & 128) {
      p.suspense.move(h, v, w);
      return;
    }
    if (x & 64) {
      R.move(p, h, v, L);
      return;
    }
    if (R === Ce) {
      o(P, h, v);
      for (let M = 0; M < A.length; M++)
        xe(A[M], h, v, w);
      o(p.anchor, h, v);
      return;
    }
    if (R === Gn) {
      F(p, h, v);
      return;
    }
    if (w !== 2 && x & 1 && D)
      if (w === 0)
        D.beforeEnter(P), o(P, h, v), He(() => D.enter(P), _);
      else {
        const { leave: M, delayLeave: U, afterLeave: J } = D, Z = () => o(P, h, v), pe = () => {
          M(P, () => {
            Z(), J && J();
          });
        };
        U ? U(P, Z, pe) : pe();
      }
    else
      o(P, h, v);
  }, Ue = (p, h, v, w = !1, _ = !1) => {
    const { type: P, props: R, ref: D, children: A, dynamicChildren: x, shapeFlag: j, patchFlag: M, dirs: U } = p;
    if (D != null && ls(D, null, v, p, !0), j & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const J = j & 1 && U, Z = !zn(p);
    let pe;
    if (Z && (pe = R && R.onVnodeBeforeUnmount) && ut(pe, h, p), j & 6)
      Pt(p.component, v, w);
    else {
      if (j & 128) {
        p.suspense.unmount(v, w);
        return;
      }
      J && Jt(p, null, h, "beforeUnmount"), j & 64 ? p.type.remove(p, h, v, _, L, w) : x && (P !== Ce || M > 0 && M & 64) ? E(x, h, v, !1, !0) : (P === Ce && M & 384 || !_ && j & 16) && E(A, h, v), w && at(p);
    }
    (Z && (pe = R && R.onVnodeUnmounted) || J) && He(() => {
      pe && ut(pe, h, p), J && Jt(p, null, h, "unmounted");
    }, v);
  }, at = (p) => {
    const { type: h, el: v, anchor: w, transition: _ } = p;
    if (h === Ce) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && _ && !_.persisted ? p.children.forEach((R) => {
        R.type === Ie ? r(R.el) : at(R);
      }) : wo(v, w);
      return;
    }
    if (h === Gn) {
      z(p);
      return;
    }
    const P = () => {
      r(v), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (p.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: R, delayLeave: D } = _, A = () => R(v, P);
      D ? D(p.el, P, A) : A();
    } else
      P();
  }, wo = (p, h) => {
    let v;
    for (; p !== h; )
      v = d(p), r(p), p = v;
    r(h);
  }, Pt = (p, h, v) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && tf(p);
    const { bum: w, scope: _, update: P, subTree: R, um: D } = p;
    w && _n(w), _.stop(), P && (P.active = !1, Ue(R, p, h, v)), D && He(D, h), He(() => {
      p.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), process.env.NODE_ENV !== "production" && cf(p);
  }, E = (p, h, v, w = !1, _ = !1, P = 0) => {
    for (let R = P; R < p.length; R++)
      Ue(p[R], h, v, w, _);
  }, $ = (p) => p.shapeFlag & 6 ? $(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : d(p.anchor || p.el), V = (p, h, v) => {
    p == null ? h._vnode && Ue(h._vnode, null, null, !0) : y(h._vnode || null, p, h, null, null, null, v), Ni(), sa(), h._vnode = p;
  }, L = {
    p: y,
    um: Ue,
    m: xe,
    r: at,
    mt: _e,
    mc: Y,
    pc: ge,
    pbc: ce,
    n: $,
    o: e
  };
  let ne, Ee;
  return t && ([ne, Ee] = t(L)), {
    render: V,
    hydrate: ne,
    createApp: nd(V, ne)
  };
}
function Gt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Jn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (H(o) && H(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = It(r[s]), l.el = i.el), n || Jn(i, l)), l.type === vo && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === Ie && !l.el && (l.el = i.el);
    }
}
function id(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const c = e[o];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < c ? s = l + 1 : i = l;
      c < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const ld = (e) => e.__isTeleport, Sn = (e) => e && (e.disabled || e.disabled === ""), Ii = (e) => typeof SVGElement < "u" && e instanceof SVGElement, as = (e, t) => {
  const n = e && e.to;
  if (ye(n))
    if (t) {
      const o = t(n);
      return o || process.env.NODE_ENV !== "production" && C(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), o;
    } else
      return process.env.NODE_ENV !== "production" && C("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !Sn(e) && C(`Invalid Teleport target: ${n}`), n;
}, ad = {
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, l, a, c) {
    const { mc: u, pc: f, pbc: d, o: { insert: m, querySelector: g, createText: y, createComment: N } } = c, O = Sn(t.props);
    let { shapeFlag: S, children: k, dynamicChildren: F } = t;
    if (process.env.NODE_ENV !== "production" && Ht && (a = !1, F = null), e == null) {
      const z = t.el = process.env.NODE_ENV !== "production" ? N("teleport start") : y(""), ee = t.anchor = process.env.NODE_ENV !== "production" ? N("teleport end") : y("");
      m(z, n, o), m(ee, n, o);
      const se = t.target = as(t.props, g), K = t.targetAnchor = y("");
      se ? (m(K, se), i = i || Ii(se)) : process.env.NODE_ENV !== "production" && !O && C("Invalid Teleport target on mount:", se, `(${typeof se})`);
      const Y = (te, ce) => {
        S & 16 && u(k, te, ce, r, s, i, l, a);
      };
      O ? Y(n, ee) : se && Y(se, K);
    } else {
      t.el = e.el;
      const z = t.anchor = e.anchor, ee = t.target = e.target, se = t.targetAnchor = e.targetAnchor, K = Sn(e.props), Y = K ? n : ee, te = K ? z : se;
      if (i = i || Ii(ee), F ? (d(e.dynamicChildren, F, Y, r, s, i, l), Jn(e, t, !0)) : a || f(e, t, Y, te, r, s, i, l, !1), O)
        K || To(
          t,
          n,
          z,
          c,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ce = t.target = as(t.props, g);
        ce ? To(
          t,
          ce,
          null,
          c,
          0
          /* TeleportMoveTypes.TARGET_CHANGE */
        ) : process.env.NODE_ENV !== "production" && C("Invalid Teleport target on update:", ee, `(${typeof ee})`);
      } else
        K && To(
          t,
          ee,
          se,
          c,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
    }
    Va(t);
  },
  remove(e, t, n, o, { um: r, o: { remove: s } }, i) {
    const { shapeFlag: l, children: a, anchor: c, targetAnchor: u, target: f, props: d } = e;
    if (f && s(u), (i || !Sn(d)) && (s(c), l & 16))
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        r(g, t, n, !0, !!g.dynamicChildren);
      }
  },
  move: To,
  hydrate: cd
};
function To(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: c, props: u } = e, f = s === 2;
  if (f && o(i, t, n), (!f || Sn(u)) && a & 16)
    for (let d = 0; d < c.length; d++)
      r(
        c[d],
        t,
        n,
        2
        /* MoveType.REORDER */
      );
  f && o(l, t, n);
}
function cd(e, t, n, o, r, s, { o: { nextSibling: i, parentNode: l, querySelector: a } }, c) {
  const u = t.target = as(t.props, a);
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Sn(t.props))
        t.anchor = c(i(e), t, l(e), n, o, r, s), t.targetAnchor = f;
      else {
        t.anchor = i(e);
        let d = f;
        for (; d; )
          if (d = i(d), d && d.nodeType === 8 && d.data === "teleport anchor") {
            t.targetAnchor = d, u._lpa = t.targetAnchor && i(t.targetAnchor);
            break;
          }
        c(f, t, u, n, o, r, s);
      }
    Va(t);
  }
  return t.anchor && i(t.anchor);
}
const ud = ad;
function Va(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Ce = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), vo = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Ie = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Gn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Yn = [];
let it = null;
function ve(e = !1) {
  Yn.push(it = e ? null : []);
}
function fd() {
  Yn.pop(), it = Yn[Yn.length - 1] || null;
}
let lo = 1;
function Fi(e) {
  lo += e;
}
function ka(e) {
  return e.dynamicChildren = lo > 0 ? it || On : null, fd(), lo > 0 && it && it.push(e), e;
}
function Ke(e, t, n, o, r, s) {
  return ka(T(
    e,
    t,
    n,
    o,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function vt(e, t, n, o, r) {
  return ka(we(
    e,
    t,
    n,
    o,
    r,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Dn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && bn.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const dd = (...e) => Fa(...e), pr = "__vInternal", Ia = ({ key: e }) => e ?? null, Io = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ye(e) || De(e) || W(e) ? { i: Re, r: e, k: t, f: !!n } : e : null;
function T(e, t = null, n = null, o = 0, r = null, s = e === Ce ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ia(t),
    ref: t && Io(t),
    scopeId: da,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Re
  };
  return l ? (Ys(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ye(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && C("VNode created with invalid key (NaN). VNode type:", a.type), lo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  it && (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && it.push(a), a;
}
const we = process.env.NODE_ENV !== "production" ? dd : Fa;
function Fa(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ba) && (process.env.NODE_ENV !== "production" && !e && C(`Invalid vnode type when creating vnode: ${e}.`), e = Ie), Dn(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ys(l, n), lo > 0 && !s && it && (l.shapeFlag & 6 ? it[it.indexOf(e)] = l : it.push(l)), l.patchFlag |= -2, l;
  }
  if (Ha(e) && (e = e.__vccOpts), t) {
    t = pd(t);
    let { class: l, style: a } = t;
    l && !ye(l) && (t.class = Rn(l)), le(a) && (Yr(a) && !H(a) && (a = Oe({}, a)), t.style = $s(a));
  }
  const i = ye(e) ? 1 : Ef(e) ? 128 : ld(e) ? 64 : le(e) ? 4 : W(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Yr(e) && (e = G(e), C("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), T(e, t, n, o, r, i, s, !0);
}
function pd(e) {
  return e ? Yr(e) || pr in e ? Oe({}, e) : e : null;
}
function lt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? md(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ia(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? H(r) ? r.concat(Io(t)) : [r, Io(t)] : Io(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && H(i) ? i.map(La) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function La(e) {
  const t = lt(e);
  return H(e.children) && (t.children = e.children.map(La)), t;
}
function Ma(e = " ", t = 0) {
  return we(vo, null, e, t);
}
function hd(e, t) {
  const n = we(Gn, null, e);
  return n.staticCount = t, n;
}
function Ar(e = "", t = !1) {
  return t ? (ve(), vt(Ie, null, e)) : we(Ie, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? we(Ie) : H(e) ? we(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? It(e) : we(vo, null, String(e));
}
function It(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function Ys(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ys(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(pr in t) ? t._ctx = Re : r === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    W(t) ? (t = { default: t, _ctx: Re }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ma(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function md(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Rn([t.class, o.class]));
      else if (r === "style")
        t.style = $s([t.style, o.style]);
      else if (po(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(H(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function ut(e, t, n, o = null) {
  et(e, t, 7, [
    n,
    o
  ]);
}
const gd = $a();
let vd = 0;
function yd(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || gd, s = {
    uid: vd++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new du(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Da(o, r),
    emitsOptions: fa(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = kf(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = pf.bind(null, s), e.ce && e.ce(s), s;
}
let Ae = null;
const Qs = () => Ae || Re, Tn = (e) => {
  Ae = e, e.scope.on();
}, fn = () => {
  Ae && Ae.scope.off(), Ae = null;
}, Ed = /* @__PURE__ */ zt("slot,component");
function cs(e, t) {
  const n = t.isNativeTag || Al;
  (Ed(e) || n(e)) && C("Do not use built-in or reserved HTML elements as component id: " + e);
}
function ja(e) {
  return e.vnode.shapeFlag & 4;
}
let ao = !1;
function _d(e, t = !1) {
  ao = t;
  const { props: n, children: o } = e.vnode, r = ja(e);
  Kf(e, n, r, t), Zf(e, o);
  const s = r ? bd(e, t) : void 0;
  return ao = !1, s;
}
function bd(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && cs(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        cs(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        Ea(s[i]);
    }
    o.compilerOptions && Ba() && C('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Jl(new Proxy(e.ctx, xa)), process.env.NODE_ENV !== "production" && If(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? wd(e) : null;
    Tn(e), mn();
    const i = xt(r, e, 0, [process.env.NODE_ENV !== "production" ? Nn(e.props) : e.props, s]);
    if (gn(), fn(), ks(i)) {
      if (i.then(fn, fn), t)
        return i.then((l) => {
          Li(e, l, t);
        }).catch((l) => {
          cr(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        C(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Li(e, i, t);
  } else
    Ua(e, t);
}
function Li(e, t, n) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) ? (process.env.NODE_ENV !== "production" && Dn(t) && C("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Zl(t), process.env.NODE_ENV !== "production" && Ff(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && C(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ua(e, n);
}
let us;
const Ba = () => !us;
function Ua(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && us && !o.render) {
      const r = o.template || Js(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && wt(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = o, c = Oe(Oe({
          isCustomElement: s,
          delimiters: l
        }, i), a);
        o.render = us(r, c), process.env.NODE_ENV !== "production" && Nt(e, "compile");
      }
    }
    e.render = o.render || Fe;
  }
  Tn(e), mn(), Mf(e), gn(), fn(), process.env.NODE_ENV !== "production" && !o.render && e.render === Fe && !t && (o.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : C("Component is missing template or render function."));
}
function Mi(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return Wo(), We(e, "get", "$attrs"), t[n];
    },
    set() {
      return C("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return C("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return We(e, "get", "$attrs"), t[n];
    }
  });
}
function wd(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && C("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Mi(e));
    },
    get slots() {
      return Nn(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Mi(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function hr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Zl(Jl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in un)
          return un[n](e);
      },
      has(t, n) {
        return n in t || n in un;
      }
    }));
}
const Nd = /(?:^|[-_])(\w)/g, Od = (e) => e.replace(Nd, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Xs(e, t = !0) {
  return W(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mr(e, t, n = !1) {
  let o = Xs(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? Od(o) : n ? "App" : "Anonymous";
}
function Ha(e) {
  return W(e) && "__vccOpts" in e;
}
const q = (e, t) => Ku(e, t, ao);
function Pe(e, t, n) {
  const o = arguments.length;
  return o === 2 ? le(t) && !H(t) ? Dn(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Dn(n) && (n = [n]), we(e, t, n));
}
const xd = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Sd = () => {
  {
    const e = Ne(xd);
    return e || process.env.NODE_ENV !== "production" && C("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Rr(e) {
  return !!(e && e.__v_isShallow);
}
function Cd() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(f) {
      return le(f) ? f.__isVue ? ["div", e, "VueInstance"] : De(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        l(f.value),
        ">"
      ] : an(f) ? [
        "div",
        {},
        ["span", e, Rr(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${qt(f) ? " (readonly)" : ""}`
      ] : qt(f) ? [
        "div",
        {},
        ["span", e, Rr(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const d = [];
    f.type.props && f.props && d.push(i("props", G(f.props))), f.setupState !== fe && d.push(i("setup", f.setupState)), f.data !== fe && d.push(i("data", G(f.data)));
    const m = a(f, "computed");
    m && d.push(i("computed", m));
    const g = a(f, "inject");
    return g && d.push(i("injected", g)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), d;
  }
  function i(f, d) {
    return d = Oe({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((m) => [
          "div",
          {},
          ["span", o, m + ": "],
          l(d[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, d = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : le(f) ? ["object", { object: d ? G(f) : f }] : ["span", n, String(f)];
  }
  function a(f, d) {
    const m = f.type;
    if (W(m))
      return;
    const g = {};
    for (const y in f.ctx)
      c(m, y, d) && (g[y] = f.ctx[y]);
    return g;
  }
  function c(f, d, m) {
    const g = f[m];
    if (H(g) && g.includes(d) || le(g) && d in g || f.extends && c(f.extends, d, m) || f.mixins && f.mixins.some((y) => c(y, d, m)))
      return !0;
  }
  function u(f) {
    return Rr(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ji = "3.2.45", Dd = "http://www.w3.org/2000/svg", en = typeof document < "u" ? document : null, Bi = en && /* @__PURE__ */ en.createElement("template"), Td = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? en.createElementNS(Dd, e) : en.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => en.createTextNode(e),
  createComment: (e) => en.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => en.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Bi.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = Bi.content;
      if (o) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Pd(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Ad(e, t, n) {
  const o = e.style, r = ye(n);
  if (n && !r) {
    for (const s in n)
      fs(o, s, n[s]);
    if (t && !ye(t))
      for (const s in t)
        n[s] == null && fs(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const Rd = /[^\\];\s*$/, Ui = /\s*!important$/;
function fs(e, t, n) {
  if (H(n))
    n.forEach((o) => fs(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Rd.test(n) && C(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = $d(e, t);
    Ui.test(n) ? e.setProperty(Ct(o), n.replace(Ui, ""), "important") : e[o] = n;
  }
}
const Hi = ["Webkit", "Moz", "ms"], $r = {};
function $d(e, t) {
  const n = $r[t];
  if (n)
    return n;
  let o = yt(t);
  if (o !== "filter" && o in e)
    return $r[t] = o;
  o = pn(o);
  for (let r = 0; r < Hi.length; r++) {
    const s = Hi[r] + o;
    if (s in e)
      return $r[t] = s;
  }
  return t;
}
const Ki = "http://www.w3.org/1999/xlink";
function Vd(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ki, t.slice(6, t.length)) : e.setAttributeNS(Ki, t, n);
  else {
    const s = ru(t);
    n == null || s && !Tl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function kd(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Tl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !l && C(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && e.removeAttribute(t);
}
function tn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Id(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Fd(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, a] = Ld(t);
    if (o) {
      const c = s[t] = Bd(o, r);
      tn(e, l, c, a);
    } else
      i && (Id(e, l, i, a), s[t] = void 0);
  }
}
const qi = /(?:Once|Passive|Capture)$/;
function Ld(e) {
  let t;
  if (qi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(qi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ct(e.slice(2)), t];
}
let Vr = 0;
const Md = /* @__PURE__ */ Promise.resolve(), jd = () => Vr || (Md.then(() => Vr = 0), Vr = Date.now());
function Bd(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    et(Ud(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = jd(), n;
}
function Ud(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Wi = /^on[a-z]/, Hd = (e, t, n, o, r = !1, s, i, l, a) => {
  t === "class" ? Pd(e, o, r) : t === "style" ? Ad(e, n, o) : po(t) ? Uo(t) || Fd(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kd(e, t, o, r)) ? kd(e, t, o, s, i, l, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Vd(e, t, o, r));
};
function Kd(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Wi.test(t) && W(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Wi.test(t) && ye(n) ? !1 : t in e;
}
const qd = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Of.props;
const Qo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => _n(t, n) : t;
};
function Wd(e) {
  e.target.composing = !0;
}
function zi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qn = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e._assign = Qo(r);
    const s = o || r.props && r.props.type === "number";
    tn(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), s && (l = no(l)), e._assign(l);
    }), n && tn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (tn(e, "compositionstart", Wd), tn(e, "compositionend", zi), tn(e, "change", zi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, s) {
    if (e._assign = Qo(s), e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (r || e.type === "number") && no(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
}, ds = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = or(t);
    tn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map((i) => n ? no(Xo(i)) : Xo(i));
      e._assign(e.multiple ? r ? new Set(s) : s : s[0]);
    }), e._assign = Qo(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ji(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Qo(n);
  },
  updated(e, { value: t }) {
    Ji(e, t);
  }
};
function Ji(e, t) {
  const n = e.multiple;
  if (n && !H(t) && !or(t)) {
    process.env.NODE_ENV !== "production" && C(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const s = e.options[o], i = Xo(s);
    if (n)
      H(t) ? s.selected = iu(t, i) > -1 : s.selected = t.has(i);
    else if (nr(Xo(s), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Xo(e) {
  return "_value" in e ? e._value : e.value;
}
const zd = ["ctrl", "shift", "alt", "meta"], Jd = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => zd.some((n) => e[`${n}Key`] && !t.includes(n))
}, Gi = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = Jd[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, Gd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Yd = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const o = Ct(n.key);
  if (t.some((r) => r === o || Gd[r] === o))
    return e(n);
}, Qd = /* @__PURE__ */ Oe({ patchProp: Hd }, Td);
let Yi;
function Xd() {
  return Yi || (Yi = rd(Qd));
}
const Zd = (...e) => {
  const t = Xd().createApp(...e);
  process.env.NODE_ENV !== "production" && (ep(t), tp(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = np(o);
    if (!r)
      return;
    const s = t._component;
    !W(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function ep(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => tu(t) || nu(t),
    writable: !1
  });
}
function tp(e) {
  if (Ba()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        C("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return C(o), n;
      },
      set() {
        C(o);
      }
    });
  }
}
function np(e) {
  if (ye(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && C(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && C('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function op() {
  Cd();
}
process.env.NODE_ENV !== "production" && op();
const Qi = /* @__PURE__ */ he({
  __name: "TextElement",
  props: {
    element: null,
    items: null
  },
  setup(e) {
    const t = e, n = q(() => ({
      ...t.items.find((s) => s.type === t.element.type),
      ...t.element
    })), o = q(() => {
      let r;
      switch (n.value.size) {
        case "sm":
          r = "text-sm";
          break;
        case "md":
          r = "text-md";
          break;
        case "lg":
          r = "text-lg";
          break;
        case "xl":
          r = "text-xl";
          break;
        case "2xl":
          r = "text-2xl";
          break;
        case "3xl":
          r = "text-3xl";
          break;
        case "4xl":
          r = "text-4xl";
          break;
        default:
          r = "text-sm";
      }
      let s;
      switch (n.value.size) {
        case "normal":
          s = "font-base";
          break;
        case "bold":
          s = "font-bold";
          break;
        default:
          s = "font-base";
      }
      return [
        r,
        s
      ].join(" ");
    });
    return (r, s) => (ve(), vt(wa(be(n).type), {
      class: Rn(be(o)),
      key: be(n).id,
      innerHTML: be(n).content
    }, null, 8, ["class", "innerHTML"]));
  }
}), rp = ["src", "alt"], sp = /* @__PURE__ */ he({
  __name: "ImageElement",
  props: {
    element: null
  },
  setup(e) {
    const t = e;
    return (n, o) => (ve(), Ke("img", {
      src: t.element.src,
      alt: t.element.alt,
      class: "w-full"
    }, null, 8, rp));
  }
});
var Cn = /* @__PURE__ */ ((e) => (e.Text = "Text", e.Image = "Image", e))(Cn || {});
const ip = /* @__PURE__ */ he({
  __name: "ElementLoader",
  props: {
    element: null,
    items: null
  },
  setup(e) {
    const t = e, n = q(() => {
      let o;
      switch (t.element.renderer) {
        case Cn.Text:
          o = Qi;
          break;
        case Cn.Image:
          o = sp;
          break;
        default:
          o = Qi;
      }
      return o;
    });
    return (o, r) => (ve(), vt(wa(be(n)), {
      items: t.items,
      element: t.element
    }, null, 8, ["items", "element"]));
  }
}), lp = /* @__PURE__ */ he({
  __name: "ContainerElement",
  props: {
    container: null,
    items: null
  },
  setup(e) {
    const t = e, n = q(() => {
      let o;
      switch (t.container.colSpan) {
        case 1:
          o = "col-span-1";
          break;
        case 2:
          o = "col-span-2";
          break;
        case 3:
          o = "col-span-3";
          break;
        case 4:
          o = "col-span-4";
          break;
        default:
          o = "col-span-4";
      }
      const r = [
        o,
        t.container.textAlign,
        "p-5"
      ];
      return `${t.container.classes} ${r.join(" ")}`;
    });
    return (o, r) => (ve(), Ke("div", {
      key: t.container.id,
      class: Rn(be(n))
    }, [
      (ve(!0), Ke(Ce, null, Jo(t.container.elements, (s) => (ve(), vt(ip, {
        items: t.items,
        element: s,
        onClick: (i) => o.$emit("selectElement", s)
      }, null, 8, ["items", "element", "onClick"]))), 256))
    ], 2));
  }
});
function Ka(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ap } = Object.prototype, { getPrototypeOf: Zs } = Object, gr = ((e) => (t) => {
  const n = ap.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), _t = (e) => (e = e.toLowerCase(), (t) => gr(t) === e), vr = (e) => (t) => typeof t === e, { isArray: Vn } = Array, co = vr("undefined");
function cp(e) {
  return e !== null && !co(e) && e.constructor !== null && !co(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qa = _t("ArrayBuffer");
function up(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qa(e.buffer), t;
}
const fp = vr("string"), tt = vr("function"), Wa = vr("number"), yr = (e) => e !== null && typeof e == "object", dp = (e) => e === !0 || e === !1, Fo = (e) => {
  if (gr(e) !== "object")
    return !1;
  const t = Zs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, pp = _t("Date"), hp = _t("File"), mp = _t("Blob"), gp = _t("FileList"), vp = (e) => yr(e) && tt(e.pipe), yp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = gr(e)) === "formdata" || t === "object" && tt(e.toString) && e.toString() === "[object FormData]"));
}, Ep = _t("URLSearchParams"), _p = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, r;
  if (typeof e != "object" && (e = [e]), Vn(e))
    for (o = 0, r = e.length; o < r; o++)
      t.call(null, e[o], o, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let l;
    for (o = 0; o < i; o++)
      l = s[o], t.call(null, e[l], l, e);
  }
}
function za(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let o = n.length, r;
  for (; o-- > 0; )
    if (r = n[o], t === r.toLowerCase())
      return r;
  return null;
}
const Ja = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ga = (e) => !co(e) && e !== Ja;
function ps() {
  const { caseless: e } = Ga(this) && this || {}, t = {}, n = (o, r) => {
    const s = e && za(t, r) || r;
    Fo(t[s]) && Fo(o) ? t[s] = ps(t[s], o) : Fo(o) ? t[s] = ps({}, o) : Vn(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, r = arguments.length; o < r; o++)
    arguments[o] && yo(arguments[o], n);
  return t;
}
const bp = (e, t, n, { allOwnKeys: o } = {}) => (yo(t, (r, s) => {
  n && tt(r) ? e[s] = Ka(r, n) : e[s] = r;
}, { allOwnKeys: o }), e), wp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Np = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Op = (e, t, n, o) => {
  let r, s, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], (!o || o(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Zs(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, xp = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, Sp = (e) => {
  if (!e)
    return null;
  if (Vn(e))
    return e;
  let t = e.length;
  if (!Wa(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Cp = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Zs(Uint8Array)), Dp = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, Tp = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, Pp = _t("HTMLFormElement"), Ap = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, r) {
    return o.toUpperCase() + r;
  }
), Xi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Rp = _t("RegExp"), Ya = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  yo(n, (r, s) => {
    t(r, s, e) !== !1 && (o[s] = r);
  }), Object.defineProperties(e, o);
}, $p = (e) => {
  Ya(e, (t, n) => {
    if (tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = e[n];
    if (tt(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Vp = (e, t) => {
  const n = {}, o = (r) => {
    r.forEach((s) => {
      n[s] = !0;
    });
  };
  return Vn(e) ? o(e) : o(String(e).split(t)), n;
}, kp = () => {
}, Ip = (e, t) => (e = +e, Number.isFinite(e) ? e : t), kr = "abcdefghijklmnopqrstuvwxyz", Zi = "0123456789", Qa = {
  DIGIT: Zi,
  ALPHA: kr,
  ALPHA_DIGIT: kr + kr.toUpperCase() + Zi
}, Fp = (e = 16, t = Qa.ALPHA_DIGIT) => {
  let n = "";
  const { length: o } = t;
  for (; e--; )
    n += t[Math.random() * o | 0];
  return n;
};
function Lp(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Mp = (e) => {
  const t = new Array(10), n = (o, r) => {
    if (yr(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[r] = o;
        const s = Vn(o) ? [] : {};
        return yo(o, (i, l) => {
          const a = n(i, r + 1);
          !co(a) && (s[l] = a);
        }), t[r] = void 0, s;
      }
    }
    return o;
  };
  return n(e, 0);
}, jp = _t("AsyncFunction"), Bp = (e) => e && (yr(e) || tt(e)) && tt(e.then) && tt(e.catch), b = {
  isArray: Vn,
  isArrayBuffer: qa,
  isBuffer: cp,
  isFormData: yp,
  isArrayBufferView: up,
  isString: fp,
  isNumber: Wa,
  isBoolean: dp,
  isObject: yr,
  isPlainObject: Fo,
  isUndefined: co,
  isDate: pp,
  isFile: hp,
  isBlob: mp,
  isRegExp: Rp,
  isFunction: tt,
  isStream: vp,
  isURLSearchParams: Ep,
  isTypedArray: Cp,
  isFileList: gp,
  forEach: yo,
  merge: ps,
  extend: bp,
  trim: _p,
  stripBOM: wp,
  inherits: Np,
  toFlatObject: Op,
  kindOf: gr,
  kindOfTest: _t,
  endsWith: xp,
  toArray: Sp,
  forEachEntry: Dp,
  matchAll: Tp,
  isHTMLForm: Pp,
  hasOwnProperty: Xi,
  hasOwnProp: Xi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ya,
  freezeMethods: $p,
  toObjectSet: Vp,
  toCamelCase: Ap,
  noop: kp,
  toFiniteNumber: Ip,
  findKey: za,
  global: Ja,
  isContextDefined: Ga,
  ALPHABET: Qa,
  generateString: Fp,
  isSpecCompliantForm: Lp,
  toJSONObject: Mp,
  isAsyncFn: jp,
  isThenable: Bp
};
function re(e, t, n, o, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), r && (this.response = r);
}
b.inherits(re, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Xa = re.prototype, Za = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Za[e] = { value: e };
});
Object.defineProperties(re, Za);
Object.defineProperty(Xa, "isAxiosError", { value: !0 });
re.from = (e, t, n, o, r, s) => {
  const i = Object.create(Xa);
  return b.toFlatObject(e, i, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), re.call(i, e.message, t, n, o, r), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Up = null;
function hs(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function ec(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function el(e, t, n) {
  return e ? e.concat(t).map(function(r, s) {
    return r = ec(r), !n && s ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function Hp(e) {
  return b.isArray(e) && !e.some(hs);
}
const Kp = b.toFlatObject(b, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Er(e, t, n) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = b.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, N) {
    return !b.isUndefined(N[y]);
  });
  const o = n.metaTokens, r = n.visitor || u, s = n.dots, i = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
  if (!b.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null)
      return "";
    if (b.isDate(g))
      return g.toISOString();
    if (!a && b.isBlob(g))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(g) || b.isTypedArray(g) ? a && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, y, N) {
    let O = g;
    if (g && !N && typeof g == "object") {
      if (b.endsWith(y, "{}"))
        y = o ? y : y.slice(0, -2), g = JSON.stringify(g);
      else if (b.isArray(g) && Hp(g) || (b.isFileList(g) || b.endsWith(y, "[]")) && (O = b.toArray(g)))
        return y = ec(y), O.forEach(function(k, F) {
          !(b.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? el([y], F, s) : i === null ? y : y + "[]",
            c(k)
          );
        }), !1;
    }
    return hs(g) ? !0 : (t.append(el(N, y, s), c(g)), !1);
  }
  const f = [], d = Object.assign(Kp, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: hs
  });
  function m(g, y) {
    if (!b.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(g), b.forEach(g, function(O, S) {
        (!(b.isUndefined(O) || O === null) && r.call(
          t,
          O,
          b.isString(S) ? S.trim() : S,
          y,
          d
        )) === !0 && m(O, y ? y.concat(S) : [S]);
      }), f.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function tl(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function ei(e, t) {
  this._pairs = [], e && Er(e, this, t);
}
const tc = ei.prototype;
tc.append = function(t, n) {
  this._pairs.push([t, n]);
};
tc.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, tl);
  } : tl;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function qp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nc(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || qp, r = n && n.serialize;
  let s;
  if (r ? s = r(t, n) : s = b.isURLSearchParams(t) ? t.toString() : new ei(t, n).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Wp {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    b.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const nl = Wp, oc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zp = typeof URLSearchParams < "u" ? URLSearchParams : ei, Jp = typeof FormData < "u" ? FormData : null, Gp = typeof Blob < "u" ? Blob : null, Yp = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Qp = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), mt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zp,
    FormData: Jp,
    Blob: Gp
  },
  isStandardBrowserEnv: Yp,
  isStandardBrowserWebWorkerEnv: Qp,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Xp(e, t) {
  return Er(e, new mt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, r, s) {
      return mt.isNode && b.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zp(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function eh(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const r = n.length;
  let s;
  for (o = 0; o < r; o++)
    s = n[o], t[s] = e[s];
  return t;
}
function rc(e) {
  function t(n, o, r, s) {
    let i = n[s++];
    const l = Number.isFinite(+i), a = s >= n.length;
    return i = !i && b.isArray(r) ? r.length : i, a ? (b.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !l) : ((!r[i] || !b.isObject(r[i])) && (r[i] = []), t(n, o, r[i], s) && b.isArray(r[i]) && (r[i] = eh(r[i])), !l);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const n = {};
    return b.forEachEntry(e, (o, r) => {
      t(Zp(o), r, n, 0);
    }), n;
  }
  return null;
}
const th = {
  "Content-Type": void 0
};
function nh(e, t, n) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const _r = {
  transitional: oc,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", r = o.indexOf("application/json") > -1, s = b.isObject(t);
    if (s && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t))
      return r && r ? JSON.stringify(rc(t)) : t;
    if (b.isArrayBuffer(t) || b.isBuffer(t) || b.isStream(t) || b.isFile(t) || b.isBlob(t))
      return t;
    if (b.isArrayBufferView(t))
      return t.buffer;
    if (b.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Xp(t, this.formSerializer).toString();
      if ((l = b.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Er(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || r ? (n.setContentType("application/json", !1), nh(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || _r.transitional, o = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (t && b.isString(t) && (o && !this.responseType || r)) {
      const i = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? re.from(l, re.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: mt.classes.FormData,
    Blob: mt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
b.forEach(["delete", "get", "head"], function(t) {
  _r.headers[t] = {};
});
b.forEach(["post", "put", "patch"], function(t) {
  _r.headers[t] = b.merge(th);
});
const ti = _r, oh = b.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), rh = (e) => {
  const t = {};
  let n, o, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), o = i.substring(r + 1).trim(), !(!n || t[n] && oh[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, ol = Symbol("internals");
function Ln(e) {
  return e && String(e).trim().toLowerCase();
}
function Lo(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(Lo) : String(e);
}
function sh(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const ih = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ir(e, t, n, o, r) {
  if (b.isFunction(o))
    return o.call(this, t, n);
  if (r && (t = n), !!b.isString(t)) {
    if (b.isString(o))
      return t.indexOf(o) !== -1;
    if (b.isRegExp(o))
      return o.test(t);
  }
}
function lh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function ah(e, t) {
  const n = b.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + n, {
      value: function(r, s, i) {
        return this[o].call(this, t, r, s, i);
      },
      configurable: !0
    });
  });
}
class br {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, o) {
    const r = this;
    function s(l, a, c) {
      const u = Ln(a);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = b.findKey(r, u);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = Lo(l));
    }
    const i = (l, a) => b.forEach(l, (c, u) => s(c, u, a));
    return b.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : b.isString(t) && (t = t.trim()) && !ih(t) ? i(rh(t), n) : t != null && s(n, t, o), this;
  }
  get(t, n) {
    if (t = Ln(t), t) {
      const o = b.findKey(this, t);
      if (o) {
        const r = this[o];
        if (!n)
          return r;
        if (n === !0)
          return sh(r);
        if (b.isFunction(n))
          return n.call(this, r, o);
        if (b.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ln(t), t) {
      const o = b.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || Ir(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let r = !1;
    function s(i) {
      if (i = Ln(i), i) {
        const l = b.findKey(o, i);
        l && (!n || Ir(o, o[l], l, n)) && (delete o[l], r = !0);
      }
    }
    return b.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, r = !1;
    for (; o--; ) {
      const s = n[o];
      (!t || Ir(this, this[s], s, t, !0)) && (delete this[s], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, o = {};
    return b.forEach(this, (r, s) => {
      const i = b.findKey(o, s);
      if (i) {
        n[i] = Lo(r), delete n[s];
        return;
      }
      const l = t ? lh(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Lo(r), o[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (o, r) => {
      o != null && o !== !1 && (n[r] = t && b.isArray(o) ? o.join(", ") : o);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const o = new this(t);
    return n.forEach((r) => o.set(r)), o;
  }
  static accessor(t) {
    const o = (this[ol] = this[ol] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const l = Ln(i);
      o[l] || (ah(r, i), o[l] = !0);
    }
    return b.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
br.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.freezeMethods(br.prototype);
b.freezeMethods(br);
const St = br;
function Fr(e, t) {
  const n = this || ti, o = t || n, r = St.from(o.headers);
  let s = o.data;
  return b.forEach(e, function(l) {
    s = l.call(n, s, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), s;
}
function sc(e) {
  return !!(e && e.__CANCEL__);
}
function Eo(e, t, n) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, n), this.name = "CanceledError";
}
b.inherits(Eo, re, {
  __CANCEL__: !0
});
function ch(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new re(
    "Request failed with status code " + n.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const uh = mt.isStandardBrowserEnv ? function() {
  return {
    write: function(n, o, r, s, i, l) {
      const a = [];
      a.push(n + "=" + encodeURIComponent(o)), b.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), b.isString(s) && a.push("path=" + s), b.isString(i) && a.push("domain=" + i), l === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read: function(n) {
      const o = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return o ? decodeURIComponent(o[3]) : null;
    },
    remove: function(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();
function fh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function dh(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ic(e, t) {
  return e && !fh(t) ? dh(e, t) : t;
}
const ph = mt.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
  let o;
  function r(s) {
    let i = s;
    return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return o = r(window.location.href), function(i) {
    const l = b.isString(i) ? r(i) : i;
    return l.protocol === o.protocol && l.host === o.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function hh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function mh(e, t) {
  e = e || 10;
  const n = new Array(e), o = new Array(e);
  let r = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const c = Date.now(), u = o[s];
    i || (i = c), n[r] = a, o[r] = c;
    let f = s, d = 0;
    for (; f !== r; )
      d += n[f++], f = f % e;
    if (r = (r + 1) % e, r === s && (s = (s + 1) % e), c - i < t)
      return;
    const m = u && c - u;
    return m ? Math.round(d * 1e3 / m) : void 0;
  };
}
function rl(e, t) {
  let n = 0;
  const o = mh(50, 250);
  return (r) => {
    const s = r.loaded, i = r.lengthComputable ? r.total : void 0, l = s - n, a = o(l), c = s <= i;
    n = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && i && c ? (i - s) / a : void 0,
      event: r
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const gh = typeof XMLHttpRequest < "u", vh = gh && function(e) {
  return new Promise(function(n, o) {
    let r = e.data;
    const s = St.from(e.headers).normalize(), i = e.responseType;
    let l;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    b.isFormData(r) && (mt.isStandardBrowserEnv || mt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(m + ":" + g));
    }
    const u = ic(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), nc(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function f() {
      if (!c)
        return;
      const m = St.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: m,
        config: e,
        request: c
      };
      ch(function(O) {
        n(O), a();
      }, function(O) {
        o(O), a();
      }, y), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (o(new re("Request aborted", re.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      o(new re("Network Error", re.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || oc;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), o(new re(
        g,
        y.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        c
      )), c = null;
    }, mt.isStandardBrowserEnv) {
      const m = (e.withCredentials || ph(u)) && e.xsrfCookieName && uh.read(e.xsrfCookieName);
      m && s.set(e.xsrfHeaderName, m);
    }
    r === void 0 && s.setContentType(null), "setRequestHeader" in c && b.forEach(s.toJSON(), function(g, y) {
      c.setRequestHeader(y, g);
    }), b.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rl(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rl(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (m) => {
      c && (o(!m || m.type ? new Eo(null, e, c) : m), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const d = hh(u);
    if (d && mt.protocols.indexOf(d) === -1) {
      o(new re("Unsupported protocol " + d + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(r || null);
  });
}, Mo = {
  http: Up,
  xhr: vh
};
b.forEach(Mo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yh = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    for (let r = 0; r < t && (n = e[r], !(o = b.isString(n) ? Mo[n.toLowerCase()] : n)); r++)
      ;
    if (!o)
      throw o === !1 ? new re(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        b.hasOwnProp(Mo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!b.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Mo
};
function Lr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Eo(null, e);
}
function sl(e) {
  return Lr(e), e.headers = St.from(e.headers), e.data = Fr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yh.getAdapter(e.adapter || ti.adapter)(e).then(function(o) {
    return Lr(e), o.data = Fr.call(
      e,
      e.transformResponse,
      o
    ), o.headers = St.from(o.headers), o;
  }, function(o) {
    return sc(o) || (Lr(e), o && o.response && (o.response.data = Fr.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = St.from(o.response.headers))), Promise.reject(o);
  });
}
const il = (e) => e instanceof St ? e.toJSON() : e;
function Pn(e, t) {
  t = t || {};
  const n = {};
  function o(c, u, f) {
    return b.isPlainObject(c) && b.isPlainObject(u) ? b.merge.call({ caseless: f }, c, u) : b.isPlainObject(u) ? b.merge({}, u) : b.isArray(u) ? u.slice() : u;
  }
  function r(c, u, f) {
    if (b.isUndefined(u)) {
      if (!b.isUndefined(c))
        return o(void 0, c, f);
    } else
      return o(c, u, f);
  }
  function s(c, u) {
    if (!b.isUndefined(u))
      return o(void 0, u);
  }
  function i(c, u) {
    if (b.isUndefined(u)) {
      if (!b.isUndefined(c))
        return o(void 0, c);
    } else
      return o(void 0, u);
  }
  function l(c, u, f) {
    if (f in t)
      return o(c, u);
    if (f in e)
      return o(void 0, c);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u) => r(il(c), il(u), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = a[u] || r, d = f(e[u], t[u], u);
    b.isUndefined(d) && f !== l || (n[u] = d);
  }), n;
}
const lc = "1.4.0", ni = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ni[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ll = {};
ni.transitional = function(t, n, o) {
  function r(s, i) {
    return "[Axios v" + lc + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new re(
        r(i, " has been removed" + (n ? " in " + n : "")),
        re.ERR_DEPRECATED
      );
    return n && !ll[i] && (ll[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function Eh(e, t, n) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let r = o.length;
  for (; r-- > 0; ) {
    const s = o[r], i = t[s];
    if (i) {
      const l = e[s], a = l === void 0 || i(l, s, e);
      if (a !== !0)
        throw new re("option " + s + " must be " + a, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new re("Unknown option " + s, re.ERR_BAD_OPTION);
  }
}
const ms = {
  assertOptions: Eh,
  validators: ni
}, Rt = ms.validators;
class Zo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new nl(),
      response: new nl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Pn(this.defaults, n);
    const { transitional: o, paramsSerializer: r, headers: s } = n;
    o !== void 0 && ms.assertOptions(o, {
      silentJSONParsing: Rt.transitional(Rt.boolean),
      forcedJSONParsing: Rt.transitional(Rt.boolean),
      clarifyTimeoutError: Rt.transitional(Rt.boolean)
    }, !1), r != null && (b.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : ms.assertOptions(r, {
      encode: Rt.function,
      serialize: Rt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && b.merge(
      s.common,
      s[n.method]
    ), i && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), n.headers = St.concat(i, s);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (a = a && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u, f = 0, d;
    if (!a) {
      const g = [sl.bind(this), void 0];
      for (g.unshift.apply(g, l), g.push.apply(g, c), d = g.length, u = Promise.resolve(n); f < d; )
        u = u.then(g[f++], g[f++]);
      return u;
    }
    d = l.length;
    let m = n;
    for (f = 0; f < d; ) {
      const g = l[f++], y = l[f++];
      try {
        m = g(m);
      } catch (N) {
        y.call(this, N);
        break;
      }
    }
    try {
      u = sl.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = c.length; f < d; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = Pn(this.defaults, t);
    const n = ic(t.baseURL, t.url);
    return nc(n, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(t) {
  Zo.prototype[t] = function(n, o) {
    return this.request(Pn(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(s, i, l) {
      return this.request(Pn(l || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Zo.prototype[t] = n(), Zo.prototype[t + "Form"] = n(!0);
});
const jo = Zo;
class oi {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const o = this;
    this.promise.then((r) => {
      if (!o._listeners)
        return;
      let s = o._listeners.length;
      for (; s-- > 0; )
        o._listeners[s](r);
      o._listeners = null;
    }), this.promise.then = (r) => {
      let s;
      const i = new Promise((l) => {
        o.subscribe(l), s = l;
      }).then(r);
      return i.cancel = function() {
        o.unsubscribe(s);
      }, i;
    }, t(function(s, i, l) {
      o.reason || (o.reason = new Eo(s, i, l), n(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new oi(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
const _h = oi;
function bh(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function wh(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const gs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(gs).forEach(([e, t]) => {
  gs[t] = e;
});
const Nh = gs;
function ac(e) {
  const t = new jo(e), n = Ka(jo.prototype.request, t);
  return b.extend(n, jo.prototype, t, { allOwnKeys: !0 }), b.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return ac(Pn(e, r));
  }, n;
}
const ke = ac(ti);
ke.Axios = jo;
ke.CanceledError = Eo;
ke.CancelToken = _h;
ke.isCancel = sc;
ke.VERSION = lc;
ke.toFormData = Er;
ke.AxiosError = re;
ke.Cancel = ke.CanceledError;
ke.all = function(t) {
  return Promise.all(t);
};
ke.spread = bh;
ke.isAxiosError = wh;
ke.mergeConfig = Pn;
ke.AxiosHeaders = St;
ke.formToJSON = (e) => rc(b.isHTMLForm(e) ? new FormData(e) : e);
ke.HttpStatusCode = Nh;
ke.default = ke;
const vs = ke;
class Oh {
  constructor() {
    xr(this, "client");
    let t = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.client = vs.create(t);
  }
  /**
   * Generate the S3 URL to an application asset.
   */
  asset(t) {
    return "/" + t;
  }
  /**
   * Store a file in S3 and return its UUID, key, and other information.
   */
  async store(t, n = {}) {
    const o = await this.client.post("/page-builder/storage-url", {
      bucket: n.bucket || "",
      content_type: n.contentType || t.type,
      expires: n.expires || "",
      visibility: n.visibility || "",
      ...n.data
    }, {
      headers: n.headers || {},
      ...n.options
    });
    let r = o.data.headers;
    return "Host" in r && delete r.Host, typeof n.progress > "u" && (n.progress = () => {
    }), await vs.put(o.data.url, t, {
      headers: r,
      onUploadProgress: (s) => {
      }
    }), o.data.extension = t.name.split(".").pop(), o.data;
  }
}
const xh = new Oh();
class ri {
  constructor() {
    xr(this, "client");
    let t = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.client = vs.create(t);
  }
  async loadPages() {
    return (await this.client.get("/page-builder/data/pages")).data.pages;
  }
  async loadPage(t) {
    return (await this.client.get(`/page-builder/data/pages/${t}`)).data.page;
  }
  async createPage(t) {
    await this.client.post("/page-builder/data/pages", { title: t });
  }
  async savePage(t, n, o) {
    await this.client.put(`/page-builder/data/pages/${t}`, {
      title: n,
      content: JSON.stringify(o)
    });
  }
  async storeFile(t, n, o) {
    return (await this.client.post("/page-builder/files", { uuid: t, key: n, bucket: o })).data.file;
  }
}
const Sh = /* @__PURE__ */ T("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Element Configuration ", -1), Ch = {
  key: 0,
  class: "flex flex-col gap-3 p-3 bg-white"
}, Dh = { class: "flex flex-col gap-1" }, Th = /* @__PURE__ */ T("label", null, "File", -1), Ph = { class: "flex flex-col gap-1" }, Ah = /* @__PURE__ */ T("label", null, "Alt Tag", -1), Rh = {
  key: 1,
  class: "flex flex-col gap-3 p-3 bg-white"
}, $h = { class: "flex flex-col gap-1" }, Vh = /* @__PURE__ */ T("label", null, "Text Size", -1), kh = /* @__PURE__ */ hd('<option value="xs">Extra Small</option><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option><option value="xl">Extra Large</option><option value="2xl">2x Extra Large</option><option value="3xl">3x Extra Large</option><option value="4xl">4x Extra Large</option>', 8), Ih = [
  kh
], Fh = { class: "flex flex-col gap-1" }, Lh = /* @__PURE__ */ T("label", null, "Font Weight", -1), Mh = /* @__PURE__ */ T("option", { value: "normal" }, "Normal", -1), jh = /* @__PURE__ */ T("option", { value: "bold" }, "Bold", -1), Bh = [
  Mh,
  jh
], Uh = { class: "flex flex-col gap-1" }, Hh = /* @__PURE__ */ T("label", null, "Content", -1), Kh = /* @__PURE__ */ T("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Element ", -1), qh = /* @__PURE__ */ he({
  __name: "ElementConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = new ri(), o = Q(null), r = () => {
      o.value && "click" in o.value && o.value.click();
    }, s = (i) => {
      xh.store(i.target.files[0], {
        progress: (l) => {
        }
      }).then(async (l) => {
        t.modelValue.src = await n.storeFile(l.uuid, l.key, l.bucket);
      });
    };
    return (i, l) => (ve(), Ke("details", null, [
      Sh,
      t.modelValue.type === "img" ? (ve(), Ke("div", Ch, [
        T("div", Dh, [
          Th,
          Lt(T("input", {
            type: "text",
            "onUpdate:modelValue": l[0] || (l[0] = (a) => t.modelValue.src = a),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
          }, null, 512), [
            [Qn, t.modelValue.src]
          ]),
          T("input", {
            onChange: s,
            ref_key: "fileSelection",
            ref: o,
            type: "file",
            class: "hidden"
          }, null, 544),
          T("button", {
            onClick: l[1] || (l[1] = (a) => r()),
            class: "border bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 col-span-4"
          }, " Upload File ")
        ]),
        T("div", Ph, [
          Ah,
          Lt(T("input", {
            type: "text",
            "onUpdate:modelValue": l[2] || (l[2] = (a) => t.modelValue.alt = a),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
          }, null, 512), [
            [Qn, t.modelValue.alt]
          ])
        ])
      ])) : (ve(), Ke("div", Rh, [
        T("div", $h, [
          Vh,
          Lt(T("select", {
            "onUpdate:modelValue": l[3] || (l[3] = (a) => t.modelValue.size = a),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, Ih, 512), [
            [ds, t.modelValue.size]
          ])
        ]),
        T("div", Fh, [
          Lh,
          Lt(T("select", {
            "onUpdate:modelValue": l[4] || (l[4] = (a) => t.modelValue.weight = a),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, Bh, 512), [
            [ds, t.modelValue.weight]
          ])
        ]),
        T("div", Uh, [
          Hh,
          Lt(T("textarea", {
            "onUpdate:modelValue": l[5] || (l[5] = (a) => t.modelValue.content = a),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, null, 512), [
            [Qn, t.modelValue.content]
          ])
        ]),
        Kh
      ]))
    ]));
  }
}), Wh = /* @__PURE__ */ T("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Container Configuration ", -1), zh = { class: "flex flex-col gap-3 p-3 bg-white" }, Jh = { class: "flex flex-col gap-1" }, Gh = /* @__PURE__ */ T("label", null, "Span", -1), Yh = { class: "flex flex-col gap-1" }, Qh = /* @__PURE__ */ T("label", null, "Text Align", -1), Xh = /* @__PURE__ */ T("option", { value: "text-left" }, "Left", -1), Zh = /* @__PURE__ */ T("option", { value: "text-center" }, "Center", -1), em = /* @__PURE__ */ T("option", { value: "text-right" }, "Right", -1), tm = /* @__PURE__ */ T("option", { value: "text-justify" }, "Justify", -1), nm = [
  Xh,
  Zh,
  em,
  tm
], om = /* @__PURE__ */ T("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Container ", -1), rm = /* @__PURE__ */ he({
  __name: "ContainerConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (ve(), Ke("details", null, [
      Wh,
      T("div", zh, [
        T("div", Jh, [
          Gh,
          Lt(T("input", {
            "onUpdate:modelValue": o[0] || (o[0] = (r) => t.modelValue.colSpan = r),
            type: "number",
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
            max: "4",
            min: "1"
          }, null, 512), [
            [Qn, t.modelValue.colSpan]
          ])
        ]),
        T("div", Yh, [
          Qh,
          Lt(T("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (r) => t.modelValue.textAlign = r),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, nm, 512), [
            [ds, t.modelValue.textAlign]
          ])
        ]),
        om
      ])
    ]));
  }
});
function sm() {
  return cc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function cc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const im = typeof Proxy == "function", lm = "devtools-plugin:setup", am = "plugin:settings:set";
let En, ys;
function cm() {
  var e;
  return En !== void 0 || (typeof window < "u" && window.performance ? (En = !0, ys = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (En = !0, ys = global.perf_hooks.performance) : En = !1), En;
}
function um() {
  return cm() ? ys.now() : Date.now();
}
class fm {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        o[i] = l.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), l = JSON.parse(i);
      Object.assign(s, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return um();
      }
    }, n && n.on(am, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...a) => {
        this.onQueue.push({
          method: l,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...a) => (this.targetQueue.push({
        method: l,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[l](...a)) : (...a) => new Promise((c) => {
        this.targetQueue.push({
          method: l,
          args: a,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function dm(e, t) {
  const n = e, o = cc(), r = sm(), s = im && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(lm, e, t);
  else {
    const i = s ? new fm(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Ot = typeof window < "u";
function pm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ie = Object.assign;
function Mr(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Ye(r) ? r.map(e) : e(r);
  }
  return n;
}
const Xn = () => {
}, Ye = Array.isArray;
function oe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const hm = /\/$/, mm = (e) => e.replace(hm, "");
function jr(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return l < a && l >= 0 && (a = -1), a > -1 && (o = t.slice(0, a), s = t.slice(a + 1, l > -1 ? l : t.length), r = e(s)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = ym(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: i
  };
}
function gm(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function al(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function cl(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && Wt(t.matched[o], n.matched[r]) && uc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Wt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function uc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!vm(e[n], t[n]))
      return !1;
  return !0;
}
function vm(e, t) {
  return Ye(e) ? ul(e, t) : Ye(t) ? ul(t, e) : e === t;
}
function ul(e, t) {
  return Ye(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function ym(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return oe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let s = n.length - 1, i, l;
  for (i = 0; i < o.length; i++)
    if (l = o[i], l !== ".")
      if (l === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/");
}
var uo;
(function(e) {
  e.pop = "pop", e.push = "push";
})(uo || (uo = {}));
var Zn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Zn || (Zn = {}));
function Em(e) {
  if (!e)
    if (Ot) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), mm(e);
}
const _m = /^[^#]+#/;
function bm(e, t) {
  return e.replace(_m, "#") + t;
}
function wm(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const wr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Nm(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (o && s) {
          oe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        oe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      process.env.NODE_ENV !== "production" && oe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = wm(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function fl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Es = /* @__PURE__ */ new Map();
function Om(e, t) {
  Es.set(e, t);
}
function xm(e) {
  const t = Es.get(e);
  return Es.delete(e), t;
}
let Sm = () => location.protocol + "//" + location.host;
function fc(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let l = r.includes(e.slice(s)) ? e.slice(s).length : 1, a = r.slice(l);
    return a[0] !== "/" && (a = "/" + a), al(a, "");
  }
  return al(n, e) + o + r;
}
function Cm(e, t, n, o) {
  let r = [], s = [], i = null;
  const l = ({ state: d }) => {
    const m = fc(e, location), g = n.value, y = t.value;
    let N = 0;
    if (d) {
      if (n.value = m, t.value = d, i && i === g) {
        i = null;
        return;
      }
      N = y ? d.position - y.position : 0;
    } else
      o(m);
    r.forEach((O) => {
      O(n.value, g, {
        delta: N,
        type: uo.pop,
        direction: N ? N > 0 ? Zn.forward : Zn.back : Zn.unknown
      });
    });
  };
  function a() {
    i = n.value;
  }
  function c(d) {
    r.push(d);
    const m = () => {
      const g = r.indexOf(d);
      g > -1 && r.splice(g, 1);
    };
    return s.push(m), m;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(ie({}, d.state, { scroll: wr() }), "");
  }
  function f() {
    for (const d of s)
      d();
    s = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: a,
    listen: c,
    destroy: f
  };
}
function dl(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? wr() : null
  };
}
function Dm(e) {
  const { history: t, location: n } = window, o = {
    value: fc(e, n)
  }, r = { value: t.state };
  r.value || s(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function s(a, c, u) {
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : Sm() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d), r.value = c;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? oe("Error with push/replace State", m) : console.error(m), n[u ? "replace" : "assign"](d);
    }
  }
  function i(a, c) {
    const u = ie({}, t.state, dl(
      r.value.back,
      // keep back and forward entries but override current position
      a,
      r.value.forward,
      !0
    ), c, { position: r.value.position });
    s(a, u, !0), o.value = a;
  }
  function l(a, c) {
    const u = ie(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: a,
        scroll: wr()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && oe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), s(u.current, u, !0);
    const f = ie({}, dl(o.value, a, null), { position: u.position + 1 }, c);
    s(a, f, !1), o.value = a;
  }
  return {
    location: o,
    state: r,
    push: l,
    replace: i
  };
}
function Tm(e) {
  e = Em(e);
  const t = Dm(e), n = Cm(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = ie({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: bm.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function Pm(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function dc(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const $t = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, _s = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var pl;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(pl || (pl = {}));
const Am = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${$m(t)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function An(e, t) {
  return process.env.NODE_ENV !== "production" ? ie(new Error(Am[e](t)), {
    type: e,
    [_s]: !0
  }, t) : ie(new Error(), {
    type: e,
    [_s]: !0
  }, t);
}
function bt(e, t) {
  return e instanceof Error && _s in e && (t == null || !!(e.type & t));
}
const Rm = ["params", "query", "hash"];
function $m(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Rm)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const hl = "[^/]+?", Vm = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, km = /[.+*?^${}()[\]/\\]/g;
function Im(e, t) {
  const n = ie({}, Vm, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !c.length && (r += "/");
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (r += "/"), r += d.value.replace(km, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: g, repeatable: y, optional: N, regexp: O } = d;
        s.push({
          name: g,
          repeatable: y,
          optional: N
        });
        const S = O || hl;
        if (S !== hl) {
          m += 10;
          try {
            new RegExp(`(${S})`);
          } catch (F) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${S}): ` + F.message);
          }
        }
        let k = y ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
        f || (k = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        N && c.length < 2 ? `(?:/${k})` : "/" + k), N && (k += "?"), r += k, m += 20, N && (m += -8), y && (m += -20), S === ".*" && (m += -50);
      }
      u.push(m);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const c = o.length - 1;
    o[c][o[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function l(c) {
    const u = c.match(i), f = {};
    if (!u)
      return null;
    for (let d = 1; d < u.length; d++) {
      const m = u[d] || "", g = s[d - 1];
      f[g.name] = m && g.repeatable ? m.split("/") : m;
    }
    return f;
  }
  function a(c) {
    let u = "", f = !1;
    for (const d of e) {
      (!f || !u.endsWith("/")) && (u += "/"), f = !1;
      for (const m of d)
        if (m.type === 0)
          u += m.value;
        else if (m.type === 1) {
          const { value: g, repeatable: y, optional: N } = m, O = g in c ? c[g] : "";
          if (Ye(O) && !y)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const S = Ye(O) ? O.join("/") : O;
          if (!S)
            if (N)
              d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
            else
              throw new Error(`Missing required param "${g}"`);
          u += S;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: o,
    keys: s,
    parse: l,
    stringify: a
  };
}
function Fm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Lm(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = Fm(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (ml(o))
      return 1;
    if (ml(r))
      return -1;
  }
  return r.length - o.length;
}
function ml(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Mm = {
  type: 0,
  value: ""
}, jm = /[a-zA-Z0-9_]/;
function Bm(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Mm]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`);
  }
  let n = 0, o = n;
  const r = [];
  let s;
  function i() {
    s && r.push(s), s = [];
  }
  let l = 0, a, c = "", u = "";
  function f() {
    c && (n === 0 ? s.push({
      type: 0,
      value: c
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: c,
      regexp: u,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), c = "");
  }
  function d() {
    c += a;
  }
  for (; l < e.length; ) {
    if (a = e[l++], a === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && f(), i()) : a === ":" ? (f(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        a === "(" ? n = 2 : jm.test(a) ? d() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + a : n = 3 : u += a;
        break;
      case 3:
        f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), r;
}
function Um(e, t, n) {
  const o = Im(Bm(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && oe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = ie(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Hm(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = yl({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function s(u, f, d) {
    const m = !d, g = Km(u);
    process.env.NODE_ENV !== "production" && Jm(g, f), g.aliasOf = d && d.record;
    const y = yl(t, u), N = [
      g
    ];
    if ("alias" in u) {
      const k = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const F of k)
        N.push(ie({}, g, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : g.components,
          path: F,
          // we might be the child of an alias
          aliasOf: d ? d.record : g
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let O, S;
    for (const k of N) {
      const { path: F } = k;
      if (f && F[0] !== "/") {
        const z = f.record.path, ee = z[z.length - 1] === "/" ? "" : "/";
        k.path = f.record.path + (F && ee + F);
      }
      if (process.env.NODE_ENV !== "production" && k.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (O = Um(k, f, y), process.env.NODE_ENV !== "production" && f && F[0] === "/" && Gm(O, f), d ? (d.alias.push(O), process.env.NODE_ENV !== "production" && zm(d, O)) : (S = S || O, S !== O && S.alias.push(O), m && u.name && !vl(O) && i(u.name)), g.children) {
        const z = g.children;
        for (let ee = 0; ee < z.length; ee++)
          s(z[ee], O, d && d.children[ee]);
      }
      d = d || O, (O.record.components && Object.keys(O.record.components).length || O.record.name || O.record.redirect) && a(O);
    }
    return S ? () => {
      i(S);
    } : Xn;
  }
  function i(u) {
    if (dc(u)) {
      const f = o.get(u);
      f && (o.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(u);
      f > -1 && (n.splice(f, 1), u.record.name && o.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function a(u) {
    let f = 0;
    for (; f < n.length && Lm(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !pc(u, n[f])); )
      f++;
    n.splice(f, 0, u), u.record.name && !vl(u) && o.set(u.record.name, u);
  }
  function c(u, f) {
    let d, m = {}, g, y;
    if ("name" in u && u.name) {
      if (d = o.get(u.name), !d)
        throw An(1, {
          location: u
        });
      if (process.env.NODE_ENV !== "production") {
        const S = Object.keys(u.params || {}).filter((k) => !d.keys.find((F) => F.name === k));
        S.length && oe(`Discarded invalid param(s) "${S.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      y = d.record.name, m = ie(
        // paramsFromLocation is a new object
        gl(
          f.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((S) => !S.optional).map((S) => S.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && gl(u.params, d.keys.map((S) => S.name))
      ), g = d.stringify(m);
    } else if ("path" in u)
      g = u.path, process.env.NODE_ENV !== "production" && !g.startsWith("/") && oe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), d = n.find((S) => S.re.test(g)), d && (m = d.parse(g), y = d.record.name);
    else {
      if (d = f.name ? o.get(f.name) : n.find((S) => S.re.test(f.path)), !d)
        throw An(1, {
          location: u,
          currentLocation: f
        });
      y = d.record.name, m = ie({}, f.params, u.params), g = d.stringify(m);
    }
    const N = [];
    let O = d;
    for (; O; )
      N.unshift(O.record), O = O.parent;
    return {
      name: y,
      path: g,
      params: m,
      matched: N,
      meta: Wm(N)
    };
  }
  return e.forEach((u) => s(u)), { addRoute: s, resolve: c, removeRoute: i, getRoutes: l, getRecordMatcher: r };
}
function gl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Km(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: qm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function qm(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function vl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Wm(e) {
  return e.reduce((t, n) => ie(t, n.meta), {});
}
function yl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function bs(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function zm(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(bs.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(bs.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Jm(e, t) {
  t && t.record.name && !e.name && !e.path && oe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Gm(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(bs.bind(null, n)))
      return oe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function pc(e, t) {
  return t.children.some((n) => n === e || pc(e, n));
}
const hc = /#/g, Ym = /&/g, Qm = /\//g, Xm = /=/g, Zm = /\?/g, mc = /\+/g, eg = /%5B/g, tg = /%5D/g, gc = /%5E/g, ng = /%60/g, vc = /%7B/g, og = /%7C/g, yc = /%7D/g, rg = /%20/g;
function si(e) {
  return encodeURI("" + e).replace(og, "|").replace(eg, "[").replace(tg, "]");
}
function sg(e) {
  return si(e).replace(vc, "{").replace(yc, "}").replace(gc, "^");
}
function ws(e) {
  return si(e).replace(mc, "%2B").replace(rg, "+").replace(hc, "%23").replace(Ym, "%26").replace(ng, "`").replace(vc, "{").replace(yc, "}").replace(gc, "^");
}
function ig(e) {
  return ws(e).replace(Xm, "%3D");
}
function lg(e) {
  return si(e).replace(hc, "%23").replace(Zm, "%3F");
}
function ag(e) {
  return e == null ? "" : lg(e).replace(Qm, "%2F");
}
function fo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && oe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function cg(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(mc, " "), i = s.indexOf("="), l = fo(i < 0 ? s : s.slice(0, i)), a = i < 0 ? null : fo(s.slice(i + 1));
    if (l in t) {
      let c = t[l];
      Ye(c) || (c = t[l] = [c]), c.push(a);
    } else
      t[l] = a;
  }
  return t;
}
function El(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = ig(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ye(o) ? o.map((s) => s && ws(s)) : [o && ws(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function ug(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ye(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const fg = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), _l = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), ii = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), li = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Ns = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Mn() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e,
    reset: n
  };
}
function Ft(e, t, n, o, r) {
  const s = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((i, l) => {
    const a = (f) => {
      f === !1 ? l(An(4, {
        from: n,
        to: t
      })) : f instanceof Error ? l(f) : Pm(f) ? l(An(2, {
        from: t,
        to: f
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === s && typeof f == "function" && s.push(f), i());
    }, c = e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? dg(a, t, n) : a);
    let u = Promise.resolve(c);
    if (e.length < 3 && (u = u.then(a)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const f = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof c == "object" && "then" in c)
        u = u.then((d) => a._called ? d : (oe(f), Promise.reject(new Error("Invalid navigation guard"))));
      else if (c !== void 0 && !a._called) {
        oe(f), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    u.catch((f) => l(f));
  });
}
function dg(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && oe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Br(e, t, n, o) {
  const r = [];
  for (const s of e) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && oe(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in s.components) {
      let l = s.components[i];
      if (process.env.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw oe(`Component "${i}" in record with path "${s.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          oe(`Component "${i}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const a = l;
          l = () => a;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, oe(`Component "${i}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (pg(l)) {
          const c = (l.__vccOpts || l)[t];
          c && r.push(Ft(c, n, o, s, i));
        } else {
          let a = l();
          process.env.NODE_ENV !== "production" && !("catch" in a) && (oe(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), a = Promise.resolve(a)), r.push(() => a.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));
            const u = pm(c) ? c.default : c;
            s.components[i] = u;
            const d = (u.__vccOpts || u)[t];
            return d && Ft(d, n, o, s, i)();
          }));
        }
    }
  }
  return r;
}
function pg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function bl(e) {
  const t = Ne(ii), n = Ne(li), o = q(() => t.resolve(be(e.to))), r = q(() => {
    const { matched: a } = o.value, { length: c } = a, u = a[c - 1], f = n.matched;
    if (!u || !f.length)
      return -1;
    const d = f.findIndex(Wt.bind(null, u));
    if (d > -1)
      return d;
    const m = wl(a[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      wl(u) === m && // avoid comparing the child with its parent
      f[f.length - 1].path !== m ? f.findIndex(Wt.bind(null, a[c - 2])) : d
    );
  }), s = q(() => r.value > -1 && vg(n.params, o.value.params)), i = q(() => r.value > -1 && r.value === n.matched.length - 1 && uc(n.params, o.value.params));
  function l(a = {}) {
    return gg(a) ? t[be(e.replace) ? "replace" : "push"](
      be(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Xn) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Ot) {
    const a = Qs();
    if (a) {
      const c = {
        route: o.value,
        isActive: s.value,
        isExactActive: i.value
      };
      a.__vrl_devtools = a.__vrl_devtools || [], a.__vrl_devtools.push(c), nt(() => {
        c.route = o.value, c.isActive = s.value, c.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: q(() => o.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l
  };
}
const hg = /* @__PURE__ */ he({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: bl,
  setup(e, { slots: t }) {
    const n = $n(bl(e)), { options: o } = Ne(ii), r = q(() => ({
      [Nl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Nl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : Pe("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), mg = hg;
function gg(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function vg(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!Ye(r) || r.length !== o.length || o.some((s, i) => s !== r[i]))
      return !1;
  }
  return !0;
}
function wl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Nl = (e, t, n) => e ?? t ?? n, yg = /* @__PURE__ */ he({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && _g();
    const o = Ne(Ns), r = q(() => e.route || o.value), s = Ne(_l, 0), i = q(() => {
      let c = be(s);
      const { matched: u } = r.value;
      let f;
      for (; (f = u[c]) && !f.components; )
        c++;
      return c;
    }), l = q(() => r.value.matched[i.value]);
    qe(_l, q(() => i.value + 1)), qe(fg, l), qe(Ns, r);
    const a = Q();
    return gt(() => [a.value, l.value, e.name], ([c, u, f], [d, m, g]) => {
      u && (u.instances[f] = c, m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), c && u && (!m || !Wt(u, m) || !d) && (u.enterCallbacks[f] || []).forEach((y) => y(c));
    }, { flush: "post" }), () => {
      const c = r.value, u = e.name, f = l.value, d = f && f.components[u];
      if (!d)
        return Ol(n.default, { Component: d, route: c });
      const m = f.props[u], g = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null, N = Pe(d, ie({}, g, t, {
        onVnodeUnmounted: (O) => {
          O.component.isUnmounted && (f.instances[u] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && Ot && N.ref) {
        const O = {
          depth: i.value,
          name: f.name,
          path: f.path,
          meta: f.meta
        };
        (Ye(N.ref) ? N.ref.map((k) => k.i) : [N.ref.i]).forEach((k) => {
          k.__vrv_devtools = O;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Ol(n.default, { Component: N, route: c }) || N
      );
    };
  }
});
function Ol(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Eg = yg;
function _g() {
  const e = Qs(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    oe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function jn(e, t) {
  const n = ie({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Tg(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function Po(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let bg = 0;
function wg(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = bg++;
  dm({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((u, f) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: jn(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: u, componentInstance: f }) => {
      if (f.__vrv_devtools) {
        const d = f.__vrv_devtools;
        u.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Ec
        });
      }
      Ye(f.__vrl_devtools) && (f.__devtoolsApi = r, f.__vrl_devtools.forEach((d) => {
        let m = wc, g = "";
        d.isExactActive ? (m = bc, g = "This is exactly active") : d.isActive && (m = _c, g = "This link is active"), u.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: g,
          backgroundColor: m
        });
      }));
    }), gt(t.currentRoute, () => {
      a(), r.notifyComponentUpdate(), r.sendInspectorTree(l), r.sendInspectorState(l);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((u, f) => {
      r.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: f.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: u },
          groupId: f.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((u, f) => {
      const d = {
        guard: Po("beforeEach"),
        from: jn(f, "Current Location during this navigation"),
        to: jn(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), r.addTimelineEvent({
        layerId: s,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: d,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, f, d) => {
      const m = {
        guard: Po("afterEach")
      };
      d ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, m.status = Po("❌")) : m.status = Po("✅"), m.from = jn(f, "Current Location during this navigation"), m.to = jn(u, "Target location"), r.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: r.now(),
          data: m,
          logType: d ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + o;
    r.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function a() {
      if (!c)
        return;
      const u = c;
      let f = n.getRoutes().filter((d) => !d.parent);
      f.forEach(xc), u.filter && (f = f.filter((d) => // save matches state based on the payload
      Os(d, u.filter.toLowerCase()))), f.forEach((d) => Oc(d, t.currentRoute.value)), u.rootNodes = f.map(Nc);
    }
    let c;
    r.on.getInspectorTree((u) => {
      c = u, u.app === e && u.inspectorId === l && a();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === l) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === u.nodeId);
        d && (u.state = {
          options: Og(d)
        });
      }
    }), r.sendInspectorTree(l), r.sendInspectorState(l);
  });
}
function Ng(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Og(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${Ng(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Ec = 15485081, _c = 2450411, bc = 8702998, xg = 2282478, wc = 16486972, Sg = 6710886;
function Nc(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: xg
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: wc
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Ec
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: bc
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: _c
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Sg
  });
  let o = n.__vd_id;
  return o == null && (o = String(Cg++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Nc)
  };
}
let Cg = 0;
const Dg = /^\/(.*)\/([a-z]*)$/;
function Oc(e, t) {
  const n = t.matched.length && Wt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Wt(o, e.record))), e.children.forEach((o) => Oc(o, t));
}
function xc(e) {
  e.__vd_match = !1, e.children.forEach(xc);
}
function Os(e, t) {
  const n = String(e.re).match(Dg);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Os(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = fo(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Os(i, t));
}
function Tg(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Pg(e) {
  const t = Hm(e.routes, e), n = e.parseQuery || cg, o = e.stringifyQuery || El, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Mn(), i = Mn(), l = Mn(), a = Ql($t);
  let c = $t;
  Ot && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Mr.bind(null, (E) => "" + E), f = Mr.bind(null, ag), d = (
    // @ts-expect-error: intentionally avoid the type check
    Mr.bind(null, fo)
  );
  function m(E, $) {
    let V, L;
    return dc(E) ? (V = t.getRecordMatcher(E), L = $) : L = E, t.addRoute(L, V);
  }
  function g(E) {
    const $ = t.getRecordMatcher(E);
    $ ? t.removeRoute($) : process.env.NODE_ENV !== "production" && oe(`Cannot remove non-existent route "${String(E)}"`);
  }
  function y() {
    return t.getRoutes().map((E) => E.record);
  }
  function N(E) {
    return !!t.getRecordMatcher(E);
  }
  function O(E, $) {
    if ($ = ie({}, $ || a.value), typeof E == "string") {
      const h = jr(n, E, $.path), v = t.resolve({ path: h.path }, $), w = r.createHref(h.fullPath);
      return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? oe(`Location "${E}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : v.matched.length || oe(`No match found for location with path "${E}"`)), ie(h, v, {
        params: d(v.params),
        hash: fo(h.hash),
        redirectedFrom: void 0,
        href: w
      });
    }
    let V;
    if ("path" in E)
      process.env.NODE_ENV !== "production" && "params" in E && !("name" in E) && // @ts-expect-error: the type is never
      Object.keys(E.params).length && oe(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), V = ie({}, E, {
        path: jr(n, E.path, $.path).path
      });
    else {
      const h = ie({}, E.params);
      for (const v in h)
        h[v] == null && delete h[v];
      V = ie({}, E, {
        params: f(h)
      }), $.params = f($.params);
    }
    const L = t.resolve(V, $), ne = E.hash || "";
    process.env.NODE_ENV !== "production" && ne && !ne.startsWith("#") && oe(`A \`hash\` should always start with the character "#". Replace "${ne}" with "#${ne}".`), L.params = u(d(L.params));
    const Ee = gm(o, ie({}, E, {
      hash: sg(ne),
      path: L.path
    })), p = r.createHref(Ee);
    return process.env.NODE_ENV !== "production" && (p.startsWith("//") ? oe(`Location "${E}" resolved to "${p}". A resolved location cannot start with multiple slashes.`) : L.matched.length || oe(`No match found for location with path "${"path" in E ? E.path : E}"`)), ie({
      fullPath: Ee,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ne,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === El ? ug(E.query) : E.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: p
    });
  }
  function S(E) {
    return typeof E == "string" ? jr(n, E, a.value.path) : ie({}, E);
  }
  function k(E, $) {
    if (c !== E)
      return An(8, {
        from: $,
        to: E
      });
  }
  function F(E) {
    return se(E);
  }
  function z(E) {
    return F(ie(S(E), { replace: !0 }));
  }
  function ee(E) {
    const $ = E.matched[E.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: V } = $;
      let L = typeof V == "function" ? V(E) : V;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = S(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), process.env.NODE_ENV !== "production" && !("path" in L) && !("name" in L))
        throw oe(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ie({
        query: E.query,
        hash: E.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in L ? {} : E.params
      }, L);
    }
  }
  function se(E, $) {
    const V = c = O(E), L = a.value, ne = E.state, Ee = E.force, p = E.replace === !0, h = ee(V);
    if (h)
      return se(
        ie(S(h), {
          state: typeof h == "object" ? ie({}, ne, h.state) : ne,
          force: Ee,
          replace: p
        }),
        // keep original redirectedFrom if it exists
        $ || V
      );
    const v = V;
    v.redirectedFrom = $;
    let w;
    return !Ee && cl(o, L, V) && (w = An(16, { to: v, from: L }), ze(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (w ? Promise.resolve(w) : te(v, L)).catch((_) => bt(_) ? (
      // navigation redirects still mark the router as ready
      bt(
        _,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? _ : Te(_)
    ) : (
      // reject any unknown error
      B(_, v, L)
    )).then((_) => {
      if (_) {
        if (bt(
          _,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          cl(o, O(_.to), v) && // and we have done it a couple of times
          $ && ($._count = $._count ? (
            // @ts-expect-error
            $._count + 1
          ) : 1) > 30 ? (oe(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${v.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : se(
            // keep options
            ie({
              // preserve an existing replacement but allow the redirect to override it
              replace: p
            }, S(_.to), {
              state: typeof _.to == "object" ? ie({}, ne, _.to.state) : ne,
              force: Ee
            }),
            // preserve the original redirectedFrom if any
            $ || v
          );
      } else
        _ = de(v, L, !0, p, ne);
      return ce(v, L, _), _;
    });
  }
  function K(E, $) {
    const V = k(E, $);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function Y(E) {
    const $ = at.values().next().value;
    return $ && typeof $.runWithContext == "function" ? $.runWithContext(E) : E();
  }
  function te(E, $) {
    let V;
    const [L, ne, Ee] = Ag(E, $);
    V = Br(L.reverse(), "beforeRouteLeave", E, $);
    for (const h of L)
      h.leaveGuards.forEach((v) => {
        V.push(Ft(v, E, $));
      });
    const p = K.bind(null, E, $);
    return V.push(p), Pt(V).then(() => {
      V = [];
      for (const h of s.list())
        V.push(Ft(h, E, $));
      return V.push(p), Pt(V);
    }).then(() => {
      V = Br(ne, "beforeRouteUpdate", E, $);
      for (const h of ne)
        h.updateGuards.forEach((v) => {
          V.push(Ft(v, E, $));
        });
      return V.push(p), Pt(V);
    }).then(() => {
      V = [];
      for (const h of E.matched)
        if (h.beforeEnter && !$.matched.includes(h))
          if (Ye(h.beforeEnter))
            for (const v of h.beforeEnter)
              V.push(Ft(v, E, $));
          else
            V.push(Ft(h.beforeEnter, E, $));
      return V.push(p), Pt(V);
    }).then(() => (E.matched.forEach((h) => h.enterCallbacks = {}), V = Br(Ee, "beforeRouteEnter", E, $), V.push(p), Pt(V))).then(() => {
      V = [];
      for (const h of i.list())
        V.push(Ft(h, E, $));
      return V.push(p), Pt(V);
    }).catch((h) => bt(
      h,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? h : Promise.reject(h));
  }
  function ce(E, $, V) {
    for (const L of l.list())
      Y(() => L(E, $, V));
  }
  function de(E, $, V, L, ne) {
    const Ee = k(E, $);
    if (Ee)
      return Ee;
    const p = $ === $t, h = Ot ? history.state : {};
    V && (L || p ? r.replace(E.fullPath, ie({
      scroll: p && h && h.scroll
    }, ne)) : r.push(E.fullPath, ne)), a.value = E, ze(E, $, V, p), Te();
  }
  let ae;
  function Xe() {
    ae || (ae = r.listen((E, $, V) => {
      if (!wo.listening)
        return;
      const L = O(E), ne = ee(L);
      if (ne) {
        se(ie(ne, { replace: !0 }), L).catch(Xn);
        return;
      }
      c = L;
      const Ee = a.value;
      Ot && Om(fl(Ee.fullPath, V.delta), wr()), te(L, Ee).catch((p) => bt(
        p,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? p : bt(
        p,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (se(
        p.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((h) => {
        bt(
          h,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !V.delta && V.type === uo.pop && r.go(-1, !1);
      }).catch(Xn), Promise.reject()) : (V.delta && r.go(-V.delta, !1), B(p, L, Ee))).then((p) => {
        p = p || de(
          // after navigation, all matched components are resolved
          L,
          Ee,
          !1
        ), p && (V.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !bt(
          p,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-V.delta, !1) : V.type === uo.pop && bt(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), ce(L, Ee, p);
      }).catch(Xn);
    }));
  }
  let _e = Mn(), me = Mn(), I;
  function B(E, $, V) {
    Te(E);
    const L = me.list();
    return L.length ? L.forEach((ne) => ne(E, $, V)) : (process.env.NODE_ENV !== "production" && oe("uncaught error during route navigation:"), console.error(E)), Promise.reject(E);
  }
  function ge() {
    return I && a.value !== $t ? Promise.resolve() : new Promise((E, $) => {
      _e.add([E, $]);
    });
  }
  function Te(E) {
    return I || (I = !E, Xe(), _e.list().forEach(([$, V]) => E ? V(E) : $()), _e.reset()), E;
  }
  function ze(E, $, V, L) {
    const { scrollBehavior: ne } = e;
    if (!Ot || !ne)
      return Promise.resolve();
    const Ee = !V && xm(fl(E.fullPath, 0)) || (L || !V) && history.state && history.state.scroll || null;
    return Hs().then(() => ne(E, $, Ee)).then((p) => p && Nm(p)).catch((p) => B(p, E, $));
  }
  const xe = (E) => r.go(E);
  let Ue;
  const at = /* @__PURE__ */ new Set(), wo = {
    currentRoute: a,
    listening: !0,
    addRoute: m,
    removeRoute: g,
    hasRoute: N,
    getRoutes: y,
    resolve: O,
    options: e,
    push: F,
    replace: z,
    go: xe,
    back: () => xe(-1),
    forward: () => xe(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: me.add,
    isReady: ge,
    install(E) {
      const $ = this;
      E.component("RouterLink", mg), E.component("RouterView", Eg), E.config.globalProperties.$router = $, Object.defineProperty(E.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => be(a)
      }), Ot && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ue && a.value === $t && (Ue = !0, F(r.location).catch((ne) => {
        process.env.NODE_ENV !== "production" && oe("Unexpected error when starting the router:", ne);
      }));
      const V = {};
      for (const ne in $t)
        V[ne] = q(() => a.value[ne]);
      E.provide(ii, $), E.provide(li, $n(V)), E.provide(Ns, a);
      const L = E.unmount;
      at.add(E), E.unmount = function() {
        at.delete(E), at.size < 1 && (c = $t, ae && ae(), ae = null, a.value = $t, Ue = !1, I = !1), L();
      }, process.env.NODE_ENV !== "production" && Ot && wg(E, $, t);
    }
  };
  function Pt(E) {
    return E.reduce(($, V) => $.then(() => Y(V)), Promise.resolve());
  }
  return wo;
}
function Ag(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((c) => Wt(c, l)) ? o.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((c) => Wt(c, a)) || r.push(a));
  }
  return [n, o, r];
}
function Rg() {
  return Ne(li);
}
const $g = { class: "grid grid-cols-5 min-h-screen" }, Vg = { class: "col-span-1 bg-gray-100 flex flex-col h-screen overflow-auto" }, kg = { key: 0 }, Ig = /* @__PURE__ */ T("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, "Components", -1), Fg = { class: "flex flex-col gap-3 p-3 bg-white" }, Lg = ["onDragstart"], Mg = { class: "min-w-0 flex-1" }, jg = {
  href: "#",
  class: "focus:outline-none"
}, Bg = /* @__PURE__ */ T("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Ug = { class: "text-sm font-medium text-gray-900" }, Hg = { class: "truncate text-sm text-gray-500" }, Kg = { class: "col-span-4 grid grid-cols-4 gap-4 p-5 content-start" }, qg = /* @__PURE__ */ he({
  __name: "PageBuilder",
  setup(e) {
    const t = Rg(), n = new ri(), o = Q(null), r = Q([]), s = Q(null), i = [
      {
        id: 1,
        type: "h1",
        renderer: Cn.Text,
        name: "Heading",
        description: "Use this element to create a heading",
        classes: "text-2xl font-bold",
        size: "4xl",
        weight: "bold",
        content: "Some heading",
        alignment: "text-left"
      },
      {
        id: 2,
        type: "p",
        renderer: Cn.Text,
        name: "Paragraph",
        description: "Use this element to create a paragraph",
        size: "md",
        weight: "normal",
        content: "Some paragraph",
        alignment: "text-left"
      },
      {
        id: 3,
        type: "img",
        renderer: Cn.Image,
        name: "Image Element",
        description: "Use this to create an image element",
        src: "https://placehold.it/350x150",
        alt: "Placeholder image"
      }
    ];
    document.addEventListener("keydown", (N) => {
      N.ctrlKey && N.key === "s" && (N.preventDefault(), y());
    });
    const l = Q(null), a = () => {
      const O = JSON.parse(JSON.stringify({
        id: 0,
        classes: "border border-gray-300",
        colSpan: 4,
        textAlign: "text-left",
        elements: []
      }));
      O.id = r.value.length, r.value.push(O);
    }, c = (N, O) => {
      N.dataTransfer.dropEffect = "move", N.dataTransfer.effectAllowed = "move", N.dataTransfer.setData("item", JSON.stringify(O));
    }, u = (N, O) => {
      N.preventDefault();
      const S = JSON.parse(N.dataTransfer.getData("item"));
      O.elements.push({ ...S });
    }, f = (N) => {
      o.value = N;
    }, d = (N) => {
      s.value = N;
    }, m = () => {
      localStorage.removeItem("page"), r.value = [];
    }, g = async (N) => {
      const O = await n.loadPage(N);
      l.value = O, typeof O.content == "string" && (r.value = JSON.parse(O.content) ?? []);
    }, y = async () => {
      await n.savePage(l.value.slug, l.value.title, r.value);
    };
    return Ve(() => {
      g(t.params.slug);
    }), (N, O) => (ve(), Ke("div", $g, [
      T("div", Vg, [
        T("div", { class: "flex flex-col" }, [
          T("button", {
            onClick: m,
            class: "bg-red-600 hover:bg-red-500 text-white p-2 col-span-4"
          }, " Clear All "),
          T("button", {
            onClick: y,
            class: "bg-green-600 hover:bg-green-500 text-white p-2 col-span-4"
          }, " Save Page "),
          T("button", {
            onClick: a,
            class: "bg-amber-600 hover:bg-amber-500 text-white p-2 col-span-4"
          }, " Add Container ")
        ]),
        r.value.length ? (ve(), Ke("details", kg, [
          Ig,
          T("div", Fg, [
            (ve(), Ke(Ce, null, Jo(i, (S) => T("div", {
              class: "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400",
              draggable: "true",
              key: S.id,
              onDragstart: (k) => c(k, S)
            }, [
              T("div", Mg, [
                T("a", jg, [
                  Bg,
                  T("p", Ug, Vt(S.name), 1),
                  T("p", Hg, Vt(S.description), 1)
                ])
              ])
            ], 40, Lg)), 64))
          ])
        ])) : Ar("", !0),
        o.value ? (ve(), vt(rm, {
          key: 1,
          modelValue: o.value,
          "onUpdate:modelValue": O[0] || (O[0] = (S) => o.value = S)
        }, null, 8, ["modelValue"])) : Ar("", !0),
        s.value ? (ve(), vt(qh, {
          key: 2,
          modelValue: s.value,
          "onUpdate:modelValue": O[1] || (O[1] = (S) => s.value = S)
        }, null, 8, ["modelValue"])) : Ar("", !0)
      ]),
      T("div", Kg, [
        (ve(!0), Ke(Ce, null, Jo(r.value, (S) => (ve(), vt(lp, {
          items: i,
          onClick: (k) => f(S),
          onDragover: O[2] || (O[2] = Gi(() => {
          }, ["prevent"])),
          onDragenter: O[3] || (O[3] = Gi(() => {
          }, ["prevent"])),
          onDrop: (k) => u(k, S),
          key: S.id,
          container: S,
          onSelectElement: d
        }, null, 8, ["onClick", "onDrop", "container"]))), 128))
      ])
    ]));
  }
});
function Et(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return typeof r == "function" ? r(...n) : r;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, Et), o;
}
var er = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(er || {}), Bt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Bt || {});
function Qe({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...r }) {
  var s;
  let i = Cc(o, n), l = Object.assign(r, { props: i });
  if (e || t & 2 && i.static)
    return Ur(l);
  if (t & 1) {
    let a = (s = i.unmount) == null || s ? 0 : 1;
    return Et(a, { [0]() {
      return null;
    }, [1]() {
      return Ur({ ...r, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ur(l);
}
function Ur({ props: e, attrs: t, slots: n, slot: o, name: r }) {
  var s, i;
  let { as: l, ...a } = Dc(e, ["unmount", "static"]), c = (s = n.default) == null ? void 0 : s.call(n, o), u = {};
  if (o) {
    let f = !1, d = [];
    for (let [m, g] of Object.entries(o))
      typeof g == "boolean" && (f = !0), g === !0 && d.push(m);
    f && (u["data-headlessui-state"] = d.join(" "));
  }
  if (l === "template") {
    if (c = Sc(c ?? []), Object.keys(a).length > 0 || Object.keys(t).length > 0) {
      let [f, ...d] = c ?? [];
      if (!Wg(f) || d.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(a).concat(Object.keys(t)).map((y) => y.trim()).filter((y, N, O) => O.indexOf(y) === N).sort((y, N) => y.localeCompare(N)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      let m = Cc((i = f.props) != null ? i : {}, a), g = lt(f, m);
      for (let y in m)
        y.startsWith("on") && (g.props || (g.props = {}), g.props[y] = m[y]);
      return g;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return Pe(l, Object.assign({}, a, u), { default: () => c });
}
function Sc(e) {
  return e.flatMap((t) => t.type === Ce ? Sc(t.children) : [t]);
}
function Cc(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let o of e)
    for (let r in o)
      r.startsWith("on") && typeof o[r] == "function" ? (n[r] != null || (n[r] = []), n[r].push(o[r])) : t[r] = o[r];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((o) => [o, void 0])));
  for (let o in n)
    Object.assign(t, { [o](r, ...s) {
      let i = n[o];
      for (let l of i) {
        if (r instanceof Event && r.defaultPrevented)
          return;
        l(r, ...s);
      }
    } });
  return t;
}
function Dc(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function Wg(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let zg = 0;
function Jg() {
  return ++zg;
}
function vn() {
  return Jg();
}
var Tc = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Tc || {});
function $e(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Pc = Symbol("Context");
var Je = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Je || {});
function Gg() {
  return ai() !== null;
}
function ai() {
  return Ne(Pc, null);
}
function Yg(e) {
  qe(Pc, e);
}
var Qg = Object.defineProperty, Xg = (e, t, n) => t in e ? Qg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xl = (e, t, n) => (Xg(e, typeof t != "symbol" ? t + "" : t, n), n);
class Zg {
  constructor() {
    xl(this, "current", this.detect()), xl(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let _o = new Zg();
function kn(e) {
  if (_o.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = $e(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let xs = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var jt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(jt || {}), Ac = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ac || {}), ev = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ev || {});
function tv(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(xs)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Rc = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Rc || {});
function nv(e, t = 0) {
  var n;
  return e === ((n = kn(e)) == null ? void 0 : n.body) ? !1 : Et(t, { [0]() {
    return e.matches(xs);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(xs))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var ov = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ov || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let rv = ["textarea", "input"].join(",");
function sv(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, rv)) != null ? n : !1;
}
function iv(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let r = t(n), s = t(o);
    if (r === null || s === null)
      return 0;
    let i = r.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Bo(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  var s;
  let i = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, l = Array.isArray(e) ? n ? iv(e) : e : tv(e);
  r.length > 0 && l.length > 1 && (l = l.filter((g) => !r.includes(g))), o = o ?? i.activeElement;
  let a = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, l.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, l.indexOf(o)) + 1;
    if (t & 8)
      return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, f = 0, d = l.length, m;
  do {
    if (f >= d || f + d <= 0)
      return 0;
    let g = c + f;
    if (t & 16)
      g = (g + d) % d;
    else {
      if (g < 0)
        return 3;
      if (g >= d)
        return 1;
    }
    m = l[g], m == null || m.focus(u), f += a;
  } while (m !== i.activeElement);
  return t & 6 && sv(m) && m.select(), 2;
}
function Sl(e, t, n) {
  _o.isServer || nt((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function $c(e, t, n) {
  _o.isServer || nt((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
function lv(e, t, n = q(() => !0)) {
  function o(s, i) {
    if (!n.value || s.defaultPrevented)
      return;
    let l = i(s);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let a = function c(u) {
      return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let c of a) {
      if (c === null)
        continue;
      let u = c instanceof HTMLElement ? c : $e(c);
      if (u != null && u.contains(l) || s.composed && s.composedPath().includes(u))
        return;
    }
    return !nv(l, Rc.Loose) && l.tabIndex !== -1 && s.preventDefault(), t(s, l);
  }
  let r = Q(null);
  Sl("mousedown", (s) => {
    var i, l;
    n.value && (r.value = ((l = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), Sl("click", (s) => {
    r.value && (o(s, () => r.value), r.value = null);
  }, !0), $c("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var tr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(tr || {});
let Ss = he({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...r } = e, s = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return Qe({ ourProps: s, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function av() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Nr() {
  let e = [], t = { addEventListener(n, o, r, s) {
    return n.addEventListener(o, r, s), t.add(() => n.removeEventListener(o, r, s));
  }, requestAnimationFrame(...n) {
    let o = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(o));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let o = setTimeout(...n);
    t.add(() => clearTimeout(o));
  }, style(n, o, r) {
    let s = n.style.getPropertyValue(o);
    return Object.assign(n.style, { [o]: r }), this.add(() => {
      Object.assign(n.style, { [o]: s });
    });
  }, group(n) {
    let o = Nr();
    return n(o), this.add(() => o.dispose());
  }, add(n) {
    return e.push(n), () => {
      let o = e.indexOf(n);
      if (o >= 0)
        for (let r of e.splice(o, 1))
          r();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
var qn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(qn || {});
function cv() {
  let e = Q(0);
  return $c("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Vc(e, t, n, o) {
  _o.isServer || nt((r) => {
    e = e ?? window, e.addEventListener(t, n, o), r(() => e.removeEventListener(t, n, o));
  });
}
function kc(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function uv(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Ic(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let o = $e(n);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var Fc = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Fc || {});
let Bn = Object.assign(he({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: Q(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = Q(null);
  o({ el: r, $el: r });
  let s = q(() => kn(r)), i = Q(!1);
  Ve(() => i.value = !0), Ge(() => i.value = !1), dv({ ownerDocument: s }, q(() => i.value && Boolean(e.features & 16)));
  let l = pv({ ownerDocument: s, container: r, initialFocus: q(() => e.initialFocus) }, q(() => i.value && Boolean(e.features & 2)));
  hv({ ownerDocument: s, container: r, containers: e.containers, previousActiveElement: l }, q(() => i.value && Boolean(e.features & 8)));
  let a = cv();
  function c(m) {
    let g = $e(r);
    g && ((y) => y())(() => {
      Et(a.value, { [qn.Forwards]: () => {
        Bo(g, jt.First, { skipElements: [m.relatedTarget] });
      }, [qn.Backwards]: () => {
        Bo(g, jt.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = Q(!1);
  function f(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function d(m) {
    if (!i.value)
      return;
    let g = Ic(e.containers);
    $e(r) instanceof HTMLElement && g.add($e(r));
    let y = m.relatedTarget;
    y instanceof HTMLElement && y.dataset.headlessuiFocusGuard !== "true" && (Lc(g, y) || (u.value ? Bo($e(r), Et(a.value, { [qn.Forwards]: () => jt.Next, [qn.Backwards]: () => jt.Previous }) | jt.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && dn(m.target)));
  }
  return () => {
    let m = {}, g = { ref: r, onKeydown: f, onFocusout: d }, { features: y, initialFocus: N, containers: O, ...S } = e;
    return Pe(Ce, [Boolean(y & 4) && Pe(Ss, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tr.Focusable }), Qe({ ourProps: g, theirProps: { ...t, ...S }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), Boolean(y & 4) && Pe(Ss, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tr.Focusable })]);
  };
} }), { features: Fc }), nn = [];
uv(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && nn[0] !== t.target && (nn.unshift(t.target), nn = nn.filter((n) => n != null && n.isConnected), nn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function fv(e) {
  let t = Q(nn.slice());
  return gt([e], ([n], [o]) => {
    o === !0 && n === !1 ? kc(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = nn.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function dv({ ownerDocument: e }, t) {
  let n = fv(t);
  Ve(() => {
    nt(() => {
      var o, r;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && dn(n());
    }, { flush: "post" });
  }), Ge(() => {
    t.value && dn(n());
  });
}
function pv({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let r = Q(null), s = Q(!1);
  return Ve(() => s.value = !0), Ge(() => s.value = !1), Ve(() => {
    gt([t, n, o], (i, l) => {
      if (i.every((c, u) => (l == null ? void 0 : l[u]) === c) || !o.value)
        return;
      let a = $e(t);
      a && kc(() => {
        var c, u;
        if (!s.value)
          return;
        let f = $e(n), d = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === d) {
            r.value = d;
            return;
          }
        } else if (a.contains(d)) {
          r.value = d;
          return;
        }
        f ? dn(f) : Bo(a, jt.First | jt.NoScroll) === Ac.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function hv({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, r) {
  var s;
  Vc((s = e.value) == null ? void 0 : s.defaultView, "focus", (i) => {
    if (!r.value)
      return;
    let l = Ic(n);
    $e(t) instanceof HTMLElement && l.add($e(t));
    let a = o.value;
    if (!a)
      return;
    let c = i.target;
    c && c instanceof HTMLElement ? Lc(l, c) ? (o.value = c, dn(c)) : (i.preventDefault(), i.stopPropagation(), dn(a)) : dn(o.value);
  }, !0);
}
function Lc(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Hr = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map();
function Cl(e, t = Q(!0)) {
  nt((n) => {
    var o;
    if (!t.value)
      return;
    let r = $e(e);
    if (!r)
      return;
    n(function() {
      var i;
      if (!r)
        return;
      let l = (i = Un.get(r)) != null ? i : 1;
      if (l === 1 ? Un.delete(r) : Un.set(r, l - 1), l !== 1)
        return;
      let a = Hr.get(r);
      a && (a["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", a["aria-hidden"]), r.inert = a.inert, Hr.delete(r));
    });
    let s = (o = Un.get(r)) != null ? o : 0;
    Un.set(r, s + 1), s === 0 && (Hr.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
let Mc = Symbol("ForcePortalRootContext");
function mv() {
  return Ne(Mc, !1);
}
let Cs = he({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return qe(Mc, e.force), () => {
    let { force: o, ...r } = e;
    return Qe({ theirProps: r, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function gv(e) {
  let t = kn(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let o = t.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(o);
}
let jc = he({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = Q(null), r = q(() => kn(o)), s = mv(), i = Ne(Bc, null), l = Q(s === !0 || i == null ? gv(o.value) : i.resolveTarget());
  nt(() => {
    s || i != null && (l.value = i.resolveTarget());
  });
  let a = Ne(Ds, null);
  return Ve(() => {
    let c = $e(o);
    c && a && Ge(a.register(c));
  }), Ge(() => {
    var c, u;
    let f = (c = r.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    f && l.value === f && l.value.children.length <= 0 && ((u = l.value.parentElement) == null || u.removeChild(l.value));
  }), () => {
    if (l.value === null)
      return null;
    let c = { ref: o, "data-headlessui-portal": "" };
    return Pe(ud, { to: l.value }, Qe({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Ds = Symbol("PortalParentContext");
function vv() {
  let e = Ne(Ds, null), t = Q([]);
  function n(s) {
    return t.value.push(s), e && e.register(s), () => o(s);
  }
  function o(s) {
    let i = t.value.indexOf(s);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(s);
  }
  let r = { register: n, unregister: o, portals: t };
  return [t, he({ name: "PortalWrapper", setup(s, { slots: i }) {
    return qe(Ds, r), () => {
      var l;
      return (l = i.default) == null ? void 0 : l.call(i);
    };
  } })];
}
let Bc = Symbol("PortalGroupContext"), yv = he({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = $n({ resolveTarget() {
    return e.target;
  } });
  return qe(Bc, o), () => {
    let { target: r, ...s } = e;
    return Qe({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Uc = Symbol("StackContext");
var Ts = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ts || {});
function Ev() {
  return Ne(Uc, () => {
  });
}
function _v({ type: e, enabled: t, element: n, onUpdate: o }) {
  let r = Ev();
  function s(...i) {
    o == null || o(...i), r(...i);
  }
  Ve(() => {
    gt(t, (i, l) => {
      i ? s(0, e, n) : l === !0 && s(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Ge(() => {
    t.value && s(1, e, n);
  }), qe(Uc, s);
}
let Hc = Symbol("DescriptionContext");
function bv() {
  let e = Ne(Hc, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function wv({ slot: e = Q({}), name: t = "Description", props: n = {} } = {}) {
  let o = Q([]);
  function r(s) {
    return o.value.push(s), () => {
      let i = o.value.indexOf(s);
      i !== -1 && o.value.splice(i, 1);
    };
  }
  return qe(Hc, { register: r, slot: e, name: t, props: n }), q(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let by = he({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${vn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = bv();
  return Ve(() => Ge(o.register(e.id))), () => {
    let { name: r = "Description", slot: s = Q({}), props: i = {} } = o, { id: l, ...a } = e, c = { ...Object.entries(i).reduce((u, [f, d]) => Object.assign(u, { [f]: be(d) }), {}), id: l };
    return Qe({ ourProps: c, theirProps: a, slot: s.value, attrs: t, slots: n, name: r });
  };
} });
function Nv(e) {
  let t = Ql(e.getSnapshot());
  return Ge(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Ov(e, t) {
  let n = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(r) {
    return o.add(r), () => o.delete(r);
  }, dispatch(r, ...s) {
    let i = t[r].call(n, ...s);
    i && (n = i, o.forEach((l) => l()));
  } };
}
function xv() {
  let e;
  return { before({ doc: t }) {
    var n;
    let o = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - o.clientWidth;
  }, after({ doc: t, d: n }) {
    let o = t.documentElement, r = o.clientWidth - o.offsetWidth, s = e - r;
    n.style(o, "paddingRight", `${s}px`);
  } };
}
function Sv() {
  if (!av())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: o }) {
    function r(i) {
      return o.containers.flatMap((l) => l()).some((l) => l.contains(i));
    }
    n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    n.addEventListener(t, "click", (i) => {
      if (i.target instanceof HTMLElement)
        try {
          let l = i.target.closest("a");
          if (!l)
            return;
          let { hash: a } = new URL(l.href), c = t.querySelector(a);
          c && !r(c) && (s = c);
        } catch {
        }
    }, !0), n.addEventListener(t, "touchmove", (i) => {
      i.target instanceof HTMLElement && !r(i.target) && i.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function Cv() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Dv(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let rn = Ov(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Nr(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let o = { doc: e, d: t, meta: Dv(n) }, r = [Sv(), xv(), Cv()];
  r.forEach(({ before: s }) => s == null ? void 0 : s(o)), r.forEach(({ after: s }) => s == null ? void 0 : s(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
rn.subscribe(() => {
  let e = rn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let o = t.get(n.doc) === "hidden", r = n.count !== 0;
    (r && !o || !r && o) && rn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && rn.dispatch("TEARDOWN", n);
  }
});
function Tv(e, t, n) {
  let o = Nv(rn), r = q(() => {
    let s = e.value ? o.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return gt([e, t], ([s, i], [l], a) => {
    if (!s || !i)
      return;
    rn.dispatch("PUSH", s, n);
    let c = !1;
    a(() => {
      c || (rn.dispatch("POP", l ?? s, n), c = !0);
    });
  }, { immediate: !0 }), r;
}
function Pv({ defaultContainers: e = [], portals: t } = {}) {
  let n = Q(null), o = kn(n);
  function r() {
    var s;
    let i = [];
    for (let l of e)
      l !== null && (l instanceof HTMLElement ? i.push(l) : "value" in l && l.value instanceof HTMLElement && i.push(l.value));
    if (t != null && t.value)
      for (let l of t.value)
        i.push(l);
    for (let l of (s = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? s : [])
      l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains($e(n)) || i.some((a) => l.contains(a)) || i.push(l));
    return i;
  }
  return { resolveContainers: r, contains(s) {
    return r().some((i) => i.contains(s));
  }, mainTreeNodeRef: n, MainTreeNode() {
    return Pe(Ss, { features: tr.Hidden, ref: n });
  } };
}
var Av = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Av || {});
let Ps = Symbol("DialogContext");
function bo(e) {
  let t = Ne(Ps, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, bo), n;
  }
  return t;
}
let Ao = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Rv = he({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ao }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${vn()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
  var s;
  let i = Q(!1);
  Ve(() => {
    i.value = !0;
  });
  let l = Q(0), a = ai(), c = q(() => e.open === Ao && a !== null ? (a.value & Je.Open) === Je.Open : e.open), u = Q(null), f = q(() => kn(u));
  if (r({ el: u, $el: u }), !(e.open !== Ao || a !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Ao ? void 0 : e.open}`);
  let d = q(() => i.value && c.value ? 0 : 1), m = q(() => d.value === 0), g = q(() => l.value > 1), y = Ne(Ps, null) !== null, [N, O] = vv(), { resolveContainers: S, mainTreeNodeRef: k, MainTreeNode: F } = Pv({ portals: N, defaultContainers: [q(() => {
    var I;
    return (I = ae.panelRef.value) != null ? I : u.value;
  })] }), z = q(() => g.value ? "parent" : "leaf"), ee = q(() => a !== null ? (a.value & Je.Closing) === Je.Closing : !1), se = q(() => y || ee.value ? !1 : m.value), K = q(() => {
    var I, B, ge;
    return (ge = Array.from((B = (I = f.value) == null ? void 0 : I.querySelectorAll("body > *")) != null ? B : []).find((Te) => Te.id === "headlessui-portal-root" ? !1 : Te.contains($e(k)) && Te instanceof HTMLElement)) != null ? ge : null;
  });
  Cl(K, se);
  let Y = q(() => g.value ? !0 : m.value), te = q(() => {
    var I, B, ge;
    return (ge = Array.from((B = (I = f.value) == null ? void 0 : I.querySelectorAll("[data-headlessui-portal]")) != null ? B : []).find((Te) => Te.contains($e(k)) && Te instanceof HTMLElement)) != null ? ge : null;
  });
  Cl(te, Y), _v({ type: "Dialog", enabled: q(() => d.value === 0), element: u, onUpdate: (I, B) => {
    if (B === "Dialog")
      return Et(I, { [Ts.Add]: () => l.value += 1, [Ts.Remove]: () => l.value -= 1 });
  } });
  let ce = wv({ name: "DialogDescription", slot: q(() => ({ open: c.value })) }), de = Q(null), ae = { titleId: de, panelRef: Q(null), dialogState: d, setTitleId(I) {
    de.value !== I && (de.value = I);
  }, close() {
    t("close", !1);
  } };
  qe(Ps, ae);
  let Xe = q(() => !(!m.value || g.value));
  lv(S, (I, B) => {
    ae.close(), Hs(() => B == null ? void 0 : B.focus());
  }, Xe);
  let _e = q(() => !(g.value || d.value !== 0));
  Vc((s = f.value) == null ? void 0 : s.defaultView, "keydown", (I) => {
    _e.value && (I.defaultPrevented || I.key === Tc.Escape && (I.preventDefault(), I.stopPropagation(), ae.close()));
  });
  let me = q(() => !(ee.value || d.value !== 0 || y));
  return Tv(f, me, (I) => {
    var B;
    return { containers: [...(B = I.containers) != null ? B : [], S] };
  }), nt((I) => {
    if (d.value !== 0)
      return;
    let B = $e(u);
    if (!B)
      return;
    let ge = new ResizeObserver((Te) => {
      for (let ze of Te) {
        let xe = ze.target.getBoundingClientRect();
        xe.x === 0 && xe.y === 0 && xe.width === 0 && xe.height === 0 && ae.close();
      }
    });
    ge.observe(B), I(() => ge.disconnect());
  }), () => {
    let { id: I, open: B, initialFocus: ge, ...Te } = e, ze = { ...n, ref: u, id: I, role: "dialog", "aria-modal": d.value === 0 ? !0 : void 0, "aria-labelledby": de.value, "aria-describedby": ce.value }, xe = { open: d.value === 0 };
    return Pe(Cs, { force: !0 }, () => [Pe(jc, () => Pe(yv, { target: u.value }, () => Pe(Cs, { force: !1 }, () => Pe(Bn, { initialFocus: ge, containers: S, features: m.value ? Et(z.value, { parent: Bn.features.RestoreFocus, leaf: Bn.features.All & ~Bn.features.FocusLock }) : Bn.features.None }, () => Pe(O, {}, () => Qe({ ourProps: ze, theirProps: { ...Te, ...n }, slot: xe, attrs: n, slots: o, visible: d.value === 0, features: er.RenderStrategy | er.Static, name: "Dialog" })))))), Pe(F)]);
  };
} });
he({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${vn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = bo("DialogOverlay");
  function r(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), o.close());
  }
  return () => {
    let { id: s, ...i } = e;
    return Qe({ ourProps: { id: s, "aria-hidden": !0, onClick: r }, theirProps: i, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
he({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${vn()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = bo("DialogBackdrop"), s = Q(null);
  return o({ el: s, $el: s }), Ve(() => {
    if (r.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...l } = e, a = { id: i, ref: s, "aria-hidden": !0 };
    return Pe(Cs, { force: !0 }, () => Pe(jc, () => Qe({ ourProps: a, theirProps: { ...t, ...l }, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let $v = he({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${vn()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = bo("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function s(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...l } = e, a = { id: i, ref: r.panelRef, onClick: s };
    return Qe({ ourProps: a, theirProps: l, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), Vv = he({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${vn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = bo("DialogTitle");
  return Ve(() => {
    o.setTitleId(e.id), Ge(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...s } = e;
    return Qe({ ourProps: { id: r }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
function kv(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Kr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ro(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var As = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(As || {});
function Iv(e, t) {
  let n = Nr();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [s, i] = [o, r].map((l) => {
    let [a = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
    return a;
  });
  return s !== 0 ? n.setTimeout(() => t("finished"), s + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Dl(e, t, n, o, r, s) {
  let i = Nr(), l = s !== void 0 ? kv(s) : () => {
  };
  return Ro(e, ...r), Kr(e, ...t, ...n), i.nextFrame(() => {
    Ro(e, ...n), Kr(e, ...o), i.add(Iv(e, (a) => (Ro(e, ...o, ...t), Kr(e, ...r), l(a))));
  }), i.add(() => Ro(e, ...t, ...n, ...o, ...r)), i.add(() => l("cancelled")), i.dispose;
}
function Yt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ci = Symbol("TransitionContext");
var Fv = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Fv || {});
function Lv() {
  return Ne(ci, null) !== null;
}
function Mv() {
  let e = Ne(ci, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function jv() {
  let e = Ne(ui, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ui = Symbol("NestingContext");
function Or(e) {
  return "children" in e ? Or(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Kc(e) {
  let t = Q([]), n = Q(!1);
  Ve(() => n.value = !0), Ge(() => n.value = !1);
  function o(s, i = Bt.Hidden) {
    let l = t.value.findIndex(({ id: a }) => a === s);
    l !== -1 && (Et(i, { [Bt.Unmount]() {
      t.value.splice(l, 1);
    }, [Bt.Hidden]() {
      t.value[l].state = "hidden";
    } }), !Or(t) && n.value && (e == null || e()));
  }
  function r(s) {
    let i = t.value.find(({ id: l }) => l === s);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: s, state: "visible" }), () => o(s, Bt.Unmount);
  }
  return { children: t, register: r, unregister: o };
}
let qc = er.RenderStrategy, Rs = he({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
  let s = Q(0);
  function i() {
    s.value |= Je.Opening, t("beforeEnter");
  }
  function l() {
    s.value &= ~Je.Opening, t("afterEnter");
  }
  function a() {
    s.value |= Je.Closing, t("beforeLeave");
  }
  function c() {
    s.value &= ~Je.Closing, t("afterLeave");
  }
  if (!Lv() && Gg())
    return () => Pe(Wc, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: a, onAfterLeave: c }, o);
  let u = Q(null), f = q(() => e.unmount ? Bt.Unmount : Bt.Hidden);
  r({ el: u, $el: u });
  let { show: d, appear: m } = Mv(), { register: g, unregister: y } = jv(), N = Q(d.value ? "visible" : "hidden"), O = { value: !0 }, S = vn(), k = { value: !1 }, F = Kc(() => {
    !k.value && N.value !== "hidden" && (N.value = "hidden", y(S), c());
  });
  Ve(() => {
    let ae = g(S);
    Ge(ae);
  }), nt(() => {
    if (f.value === Bt.Hidden && S) {
      if (d.value && N.value !== "visible") {
        N.value = "visible";
        return;
      }
      Et(N.value, { hidden: () => y(S), visible: () => g(S) });
    }
  });
  let z = Yt(e.enter), ee = Yt(e.enterFrom), se = Yt(e.enterTo), K = Yt(e.entered), Y = Yt(e.leave), te = Yt(e.leaveFrom), ce = Yt(e.leaveTo);
  Ve(() => {
    nt(() => {
      if (N.value === "visible") {
        let ae = $e(u);
        if (ae instanceof Comment && ae.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function de(ae) {
    let Xe = O.value && !m.value, _e = $e(u);
    !_e || !(_e instanceof HTMLElement) || Xe || (k.value = !0, d.value && i(), d.value || a(), ae(d.value ? Dl(_e, z, ee, se, K, (me) => {
      k.value = !1, me === As.Finished && l();
    }) : Dl(_e, Y, te, ce, K, (me) => {
      k.value = !1, me === As.Finished && (Or(F) || (N.value = "hidden", y(S), c()));
    })));
  }
  return Ve(() => {
    gt([d], (ae, Xe, _e) => {
      de(_e), O.value = !1;
    }, { immediate: !0 });
  }), qe(ui, F), Yg(q(() => Et(N.value, { visible: Je.Open, hidden: Je.Closed }) | s.value)), () => {
    let { appear: ae, show: Xe, enter: _e, enterFrom: me, enterTo: I, entered: B, leave: ge, leaveFrom: Te, leaveTo: ze, ...xe } = e, Ue = { ref: u }, at = { ...xe, ...m.value && d.value && _o.isServer ? { class: Rn([n.class, xe.class, ...z, ...ee]) } : {} };
    return Qe({ theirProps: at, ourProps: Ue, slot: {}, slots: o, attrs: n, features: qc, visible: N.value === "visible", name: "TransitionChild" });
  };
} }), Bv = Rs, Wc = he({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let r = ai(), s = q(() => e.show === null && r !== null ? (r.value & Je.Open) === Je.Open : e.show);
  nt(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = Q(s.value ? "visible" : "hidden"), l = Kc(() => {
    i.value = "hidden";
  }), a = Q(!0), c = { show: s, appear: q(() => e.appear || !a.value) };
  return Ve(() => {
    nt(() => {
      a.value = !1, s.value ? i.value = "visible" : Or(l) || (i.value = "hidden");
    });
  }), qe(ui, l), qe(ci, c), () => {
    let u = Dc(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return Qe({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [Pe(Bv, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...u }, o.default)] }, attrs: {}, features: qc, visible: i.value === "visible", name: "Transition" });
  };
} });
const Uv = /* @__PURE__ */ T("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Hv = { class: "fixed inset-0 z-10 overflow-y-auto" }, Kv = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, qv = { class: "mt-3 sm:mt-5" }, Wv = { class: "mt-2" }, zv = { class: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3" }, Jv = /* @__PURE__ */ he({
  __name: "Modal",
  props: ["open"],
  setup(e) {
    const t = e;
    return (n, o) => (ve(), vt(be(Wc), {
      as: "template",
      show: t.open
    }, {
      default: rt(() => [
        we(be(Rv), {
          as: "div",
          class: "relative z-10",
          onClose: o[0] || (o[0] = (r) => n.$emit("close"))
        }, {
          default: rt(() => [
            we(be(Rs), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: rt(() => [
                Uv
              ]),
              _: 1
            }),
            T("div", Hv, [
              T("div", Kv, [
                we(be(Rs), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: rt(() => [
                    we(be($v), { class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6" }, {
                      default: rt(() => [
                        T("div", null, [
                          T("div", qv, [
                            we(be(Vv), {
                              as: "h3",
                              class: "text-base font-semibold leading-6 text-gray-900"
                            }, {
                              default: rt(() => [
                                Tr(n.$slots, "title")
                              ]),
                              _: 3
                            }),
                            T("div", Wv, [
                              Tr(n.$slots, "body")
                            ])
                          ])
                        ]),
                        T("div", zv, [
                          Tr(n.$slots, "actions")
                        ])
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ])
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}), Gv = /* @__PURE__ */ T("div", { class: "min-w-0 flex-1" }, [
  /* @__PURE__ */ T("h2", { class: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" }, " Page Builder ")
], -1), Yv = { class: "px-4 sm:px-6 lg:px-8" }, Qv = { class: "mt-8 flow-root" }, Xv = { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, Zv = { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, ey = { class: "min-w-full divide-y divide-gray-300" }, ty = /* @__PURE__ */ T("thead", null, [
  /* @__PURE__ */ T("tr", null, [
    /* @__PURE__ */ T("th", {
      scope: "col",
      class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
    }, " Page Name "),
    /* @__PURE__ */ T("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Page Slug "),
    /* @__PURE__ */ T("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Created At "),
    /* @__PURE__ */ T("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Updated At "),
    /* @__PURE__ */ T("th", {
      scope: "col",
      class: "relative py-3.5 pl-3 pr-4 sm:pr-0"
    }, [
      /* @__PURE__ */ T("span", { class: "sr-only" }, "Edit")
    ])
  ])
], -1), ny = { class: "divide-y divide-gray-200" }, oy = { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, ry = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, sy = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, iy = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, ly = { class: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, ay = /* @__PURE__ */ T("h3", { class: "text-lg leading-6 font-medium text-gray-900" }, " Create New Page ", -1), cy = { class: "mt-2" }, uy = { class: "text-sm text-gray-500 flex flex-col gap-3" }, fy = /* @__PURE__ */ T("label", null, "Page Name", -1), dy = ["onKeydown"], py = /* @__PURE__ */ he({
  __name: "Pages",
  setup(e) {
    const t = new ri();
    let n = Q(""), o = Q([]), r = Q(!1);
    const s = async () => {
      o.value = await t.loadPages();
    }, i = async () => {
      await t.createPage(n.value), await s(), a();
    }, l = () => {
      r.value = !0;
    }, a = () => {
      r.value = !1;
    };
    return Ve(() => {
      s();
    }), (c, u) => {
      const f = _a("router-link");
      return ve(), Ke(Ce, null, [
        T("div", null, [
          T("div", { class: "md:flex md:items-center md:justify-between p-5" }, [
            Gv,
            T("div", { class: "mt-4 flex md:ml-4 md:mt-0" }, [
              T("button", {
                onClick: l,
                type: "button",
                class: "ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              }, " Create New Page ")
            ])
          ]),
          T("div", Yv, [
            T("div", Qv, [
              T("div", Xv, [
                T("div", Zv, [
                  T("table", ey, [
                    ty,
                    T("tbody", ny, [
                      (ve(!0), Ke(Ce, null, Jo(be(o), (d) => (ve(), Ke("tr", null, [
                        T("td", oy, Vt(d.title), 1),
                        T("td", ry, Vt(d.slug), 1),
                        T("td", sy, Vt(new Date(d.created_at).toLocaleDateString()) + " - " + Vt(new Date(d.created_at).toLocaleTimeString()), 1),
                        T("td", iy, Vt(new Date(d.updated_at).toLocaleDateString()) + " - " + Vt(new Date(d.updated_at).toLocaleTimeString()), 1),
                        T("td", ly, [
                          we(f, {
                            to: `/page-builder/pages/${d.slug}`,
                            class: "text-indigo-600 hover:text-indigo-900"
                          }, {
                            default: rt(() => [
                              Ma(" Edit ")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ]))), 256))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        we(Jv, {
          onClose: a,
          open: be(r)
        }, {
          title: rt(() => [
            ay
          ]),
          body: rt(() => [
            T("div", cy, [
              T("p", uy, [
                fy,
                Lt(T("input", {
                  "onUpdate:modelValue": u[0] || (u[0] = (d) => De(n) ? n.value = d : n = d),
                  type: "text",
                  class: "w-full border border-gray-300 rounded-md",
                  onKeydown: Yd(i, ["enter"])
                }, null, 40, dy), [
                  [Qn, be(n)]
                ])
              ])
            ])
          ]),
          actions: rt(() => [
            T("button", {
              type: "button",
              class: "inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2",
              onClick: i
            }, " Create "),
            T("button", {
              type: "button",
              class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",
              onClick: u[1] || (u[1] = (d) => De(r) ? r.value = !1 : r = !1),
              ref: "cancelButtonRef"
            }, " Cancel ", 512)
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
}), hy = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, my = {};
function gy(e, t) {
  const n = _a("router-view");
  return ve(), vt(n);
}
const vy = /* @__PURE__ */ hy(my, [["render", gy]]), yy = [
  { path: "/page-builder/pages", component: py },
  { path: "/page-builder/pages/:slug", component: qg }
], Ey = Pg({
  history: Tm(),
  routes: yy
});
Zd(vy).use(Ey).mount("#app");
