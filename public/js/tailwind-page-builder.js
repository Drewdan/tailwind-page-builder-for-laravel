function zt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Ps(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ve(o) ? Wc(o) : Ps(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ve(e))
      return e;
    if (le(e))
      return e;
  }
}
const Hc = /;(?![^(]*\))/g, Kc = /:([^]+)/, qc = /\/\*.*?\*\//gs;
function Wc(e) {
  const t = {};
  return e.replace(qc, "").split(Hc).forEach((n) => {
    if (n) {
      const o = n.split(Kc);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Rn(e) {
  let t = "";
  if (ve(e))
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
const zc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Jc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Gc = /* @__PURE__ */ zt(zc), Yc = /* @__PURE__ */ zt(Jc), Qc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xc = /* @__PURE__ */ zt(Qc);
function xl(e) {
  return !!e || e === "";
}
function Zc(e, t) {
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
  let n = fi(e), o = fi(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = eo(e), o = eo(t), n || o)
    return e === t;
  if (n = H(e), o = H(t), n || o)
    return n && o ? Zc(e, t) : !1;
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
function eu(e, t) {
  return e.findIndex((n) => nr(n, t));
}
const Vt = (e) => ve(e) ? e : e == null ? "" : H(e) || le(e) && (e.toString === Cl || !q(e.toString)) ? JSON.stringify(e, Sl, 2) : String(e), Sl = (e, t) => t && t.__v_isRef ? Sl(e, t.value) : sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : or(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : le(t) && !H(t) && !Tl(t) ? String(t) : t, fe = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, xn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ie = () => {
}, Dl = () => !1, tu = /^on[^a-z]/, po = (e) => tu.test(e), Bo = (e) => e.startsWith("onUpdate:"), Ne = Object.assign, Rs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, nu = Object.prototype.hasOwnProperty, X = (e, t) => nu.call(e, t), H = Array.isArray, sn = (e) => ho(e) === "[object Map]", or = (e) => ho(e) === "[object Set]", fi = (e) => ho(e) === "[object Date]", q = (e) => typeof e == "function", ve = (e) => typeof e == "string", eo = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", $s = (e) => le(e) && q(e.then) && q(e.catch), Cl = Object.prototype.toString, ho = (e) => Cl.call(e), Vs = (e) => ho(e).slice(8, -1), Tl = (e) => ho(e) === "[object Object]", ks = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ zt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ou = /* @__PURE__ */ zt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ru = /-(\w)/g, vt = rr((e) => e.replace(ru, (t, n) => n ? n.toUpperCase() : "")), su = /\B([A-Z])/g, Dt = rr((e) => e.replace(su, "-$1").toLowerCase()), pn = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = rr((e) => e ? `on${pn(e)}` : ""), to = (e, t) => !Object.is(e, t), _n = (e, t) => {
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
let di;
const Al = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ft;
class iu {
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
      process.env.NODE_ENV !== "production" && Kr("cannot run an inactive effect scope.");
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
function lu(e, t = ft) {
  t && t.active && t.effects.push(e);
}
const oo = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Pl = (e) => (e.w & Kt) > 0, Rl = (e) => (e.n & Kt) > 0, au = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Kt;
}, cu = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Pl(r) && !Rl(r) ? r.delete(e) : t[n++] = r, r.w &= ~Kt, r.n &= ~Kt;
    }
    t.length = n;
  }
}, qr = /* @__PURE__ */ new WeakMap();
let Hn = 0, Kt = 1;
const Wr = 30;
let Ue;
const ln = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), zr = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Fs {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, lu(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ue, n = Bt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ue, Ue = this, Bt = !0, Kt = 1 << ++Hn, Hn <= Wr ? au(this) : pi(this), this.fn();
    } finally {
      Hn <= Wr && cu(this), Kt = 1 << --Hn, Ue = this.parent, Bt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ue === this ? this.deferStop = !0 : this.active && (pi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function pi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Bt = !0;
const $l = [];
function gn() {
  $l.push(Bt), Bt = !1;
}
function vn() {
  const e = $l.pop();
  Bt = e === void 0 ? !0 : e;
}
function We(e, t, n) {
  if (Bt && Ue) {
    let o = qr.get(e);
    o || qr.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = oo());
    const s = process.env.NODE_ENV !== "production" ? { effect: Ue, target: e, type: t, key: n } : void 0;
    Jr(r, s);
  }
}
function Jr(e, t) {
  let n = !1;
  Hn <= Wr ? Rl(e) || (e.n |= Kt, n = !Pl(e)) : n = !e.has(Ue), n && (e.add(Ue), Ue.deps.push(e), process.env.NODE_ENV !== "production" && Ue.onTrack && Ue.onTrack(Object.assign({ effect: Ue }, t)));
}
function Ct(e, t, n, o, r, s) {
  const i = qr.get(e);
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
        H(e) ? ks(n) && l.push(i.get("length")) : (l.push(i.get(ln)), sn(e) && l.push(i.get(zr)));
        break;
      case "delete":
        H(e) || (l.push(i.get(ln)), sn(e) && l.push(i.get(zr)));
        break;
      case "set":
        sn(e) && l.push(i.get(ln));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? Nn(l[0], a) : Nn(l[0]));
  else {
    const c = [];
    for (const u of l)
      u && c.push(...u);
    process.env.NODE_ENV !== "production" ? Nn(oo(c), a) : Nn(oo(c));
  }
}
function Nn(e, t) {
  const n = H(e) ? e : [...e];
  for (const o of n)
    o.computed && hi(o, t);
  for (const o of n)
    o.computed || hi(o, t);
}
function hi(e, t) {
  (e !== Ue || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Ne({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const uu = /* @__PURE__ */ zt("__proto__,__v_isRef,__isVue"), Vl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(eo)
), fu = /* @__PURE__ */ sr(), du = /* @__PURE__ */ sr(!1, !0), pu = /* @__PURE__ */ sr(!0), hu = /* @__PURE__ */ sr(!0, !0), mi = /* @__PURE__ */ mu();
function mu() {
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
      gn();
      const o = G(this)[t].apply(this, n);
      return vn(), o;
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
    if (r === "__v_raw" && s === (e ? t ? Bl : Ul : t ? jl : Ml).get(o))
      return o;
    const i = H(o);
    if (!e && i && X(mi, r))
      return Reflect.get(mi, r, s);
    const l = Reflect.get(o, r, s);
    return (eo(r) ? Vl.has(r) : uu(r)) || (e || We(o, "get", r), t) ? l : De(l) ? i && ks(r) ? l : l.value : le(l) ? e ? Hl(l) : $n(l) : l;
  };
}
const gu = /* @__PURE__ */ kl(), vu = /* @__PURE__ */ kl(!0);
function kl(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (qt(i) && De(i) && !De(r))
      return !1;
    if (!e && (!Ko(r) && !qt(r) && (i = G(i), r = G(r)), !H(n) && De(i) && !De(r)))
      return i.value = r, !0;
    const l = H(n) && ks(o) ? Number(o) < n.length : X(n, o), a = Reflect.set(n, o, r, s);
    return n === G(s) && (l ? to(r, i) && Ct(n, "set", o, r, i) : Ct(n, "add", o, r)), a;
  };
}
function yu(e, t) {
  const n = X(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Ct(e, "delete", t, void 0, o), r;
}
function Eu(e, t) {
  const n = Reflect.has(e, t);
  return (!eo(t) || !Vl.has(t)) && We(e, "has", t), n;
}
function bu(e) {
  return We(e, "iterate", H(e) ? "length" : ln), Reflect.ownKeys(e);
}
const Fl = {
  get: fu,
  set: gu,
  deleteProperty: yu,
  has: Eu,
  ownKeys: bu
}, Il = {
  get: pu,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Kr(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Kr(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, _u = /* @__PURE__ */ Ne({}, Fl, {
  get: du,
  set: vu
}), wu = /* @__PURE__ */ Ne({}, Il, {
  get: hu
}), Is = (e) => e, ir = (e) => Reflect.getPrototypeOf(e);
function No(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = G(e), s = G(t);
  n || (t !== s && We(r, "get", t), We(r, "get", s));
  const { has: i } = ir(r), l = o ? Is : n ? Ls : ro;
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
function gi(e) {
  e = G(e);
  const t = G(this);
  return ir(t).has.call(t, e) || (t.add(e), Ct(t, "add", e, e)), this;
}
function vi(e, t) {
  t = G(t);
  const n = G(this), { has: o, get: r } = ir(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Ll(n, o, e) : (e = G(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? to(t, i) && Ct(n, "set", e, t, i) : Ct(n, "add", e, t), this;
}
function yi(e) {
  const t = G(this), { has: n, get: o } = ir(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Ll(t, n, e) : (e = G(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Ct(t, "delete", e, void 0, s), i;
}
function Ei() {
  const e = G(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? sn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ct(e, "clear", void 0, void 0, n), o;
}
function So(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = G(i), a = t ? Is : e ? Ls : ro;
    return !e && We(l, "iterate", ln), i.forEach((c, u) => o.call(r, a(c), a(u), s));
  };
}
function Do(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = G(r), i = sn(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = r[e](...o), u = n ? Is : t ? Ls : ro;
    return !t && We(s, "iterate", a ? zr : ln), {
      // iterator protocol
      next() {
        const { value: f, done: p } = c.next();
        return p ? { value: f, done: p } : {
          value: l ? [u(f[0]), u(f[1])] : u(f),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${pn(e)} operation ${n}failed: target is readonly.`, G(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Nu() {
  const e = {
    get(s) {
      return No(this, s);
    },
    get size() {
      return xo(this);
    },
    has: Oo,
    add: gi,
    set: vi,
    delete: yi,
    clear: Ei,
    forEach: So(!1, !1)
  }, t = {
    get(s) {
      return No(this, s, !1, !0);
    },
    get size() {
      return xo(this);
    },
    has: Oo,
    add: gi,
    set: vi,
    delete: yi,
    clear: Ei,
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
    add: Pt(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Pt(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Pt(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Pt(
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
    add: Pt(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Pt(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Pt(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Pt(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: So(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Do(s, !1, !1), n[s] = Do(s, !0, !1), t[s] = Do(s, !1, !0), o[s] = Do(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Ou, xu, Su, Du] = /* @__PURE__ */ Nu();
function lr(e, t) {
  const n = t ? e ? Du : Su : e ? xu : Ou;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(X(n, r) && r in o ? n : o, r, s);
}
const Cu = {
  get: /* @__PURE__ */ lr(!1, !1)
}, Tu = {
  get: /* @__PURE__ */ lr(!1, !0)
}, Au = {
  get: /* @__PURE__ */ lr(!0, !1)
}, Pu = {
  get: /* @__PURE__ */ lr(!0, !0)
};
function Ll(e, t, n) {
  const o = G(n);
  if (o !== n && t.call(e, o)) {
    const r = Vs(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Ml = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap();
function Ru(e) {
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
function $u(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ru(Vs(e));
}
function $n(e) {
  return qt(e) ? e : ar(e, !1, Fl, Cu, Ml);
}
function Vu(e) {
  return ar(e, !1, _u, Tu, jl);
}
function Hl(e) {
  return ar(e, !0, Il, Au, Ul);
}
function On(e) {
  return ar(e, !0, wu, Pu, Bl);
}
function ar(e, t, n, o, r) {
  if (!le(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = $u(e);
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
function Gr(e) {
  return an(e) || qt(e);
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Kl(e) {
  return Ho(e, "__v_skip", !0), e;
}
const ro = (e) => le(e) ? $n(e) : e, Ls = (e) => le(e) ? Hl(e) : e;
function ql(e) {
  Bt && Ue && (e = G(e), process.env.NODE_ENV !== "production" ? Jr(e.dep || (e.dep = oo()), {
    target: e,
    type: "get",
    key: "value"
  }) : Jr(e.dep || (e.dep = oo())));
}
function Wl(e, t) {
  e = G(e), e.dep && (process.env.NODE_ENV !== "production" ? Nn(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Nn(e.dep));
}
function De(e) {
  return !!(e && e.__v_isRef === !0);
}
function Y(e) {
  return Jl(e, !1);
}
function zl(e) {
  return Jl(e, !0);
}
function Jl(e, t) {
  return De(e) ? e : new ku(e, t);
}
class ku {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : G(t), this._value = n ? t : ro(t);
  }
  get value() {
    return ql(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ko(t) || qt(t);
    t = n ? t : G(t), to(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ro(t), Wl(this, t));
  }
}
function ke(e) {
  return De(e) ? e.value : e;
}
const Fu = {
  get: (e, t, n) => ke(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return De(r) && !De(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Gl(e) {
  return an(e) ? e : new Proxy(e, Fu);
}
var Yl;
class Iu {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Yl] = !1, this._dirty = !0, this.effect = new Fs(t, () => {
      this._dirty || (this._dirty = !0, Wl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = G(this);
    return ql(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Yl = "__v_isReadonly";
function Lu(e, t, n = !1) {
  let o, r;
  const s = q(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Ie) : (o = e.get, r = e.set);
  const i = new Iu(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const cn = [];
function Vo(e) {
  cn.push(e);
}
function ko() {
  cn.pop();
}
function S(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  gn();
  const n = cn.length ? cn[cn.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Mu();
  if (o)
    Ot(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${mr(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...ju(r)), console.warn(...s);
  }
  vn();
}
function Mu() {
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
function ju(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Uu(n));
  }), t;
}
function Uu({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${mr(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Bu(e.props), s] : [r + s];
}
function Bu(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ql(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ql(e, t, n) {
  return ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : De(t) ? (t = Ql(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : q(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
}
const Ms = {
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
function Ot(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    cr(s, t, n);
  }
  return r;
}
function et(e, t, n, o) {
  if (q(e)) {
    const s = Ot(e, t, n, o);
    return s && $s(s) && s.catch((i) => {
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
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Ms[n] : n;
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
      Ot(a, null, 10, [e, i, l]);
      return;
    }
  }
  Hu(e, n, r, o);
}
function Hu(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Ms[t];
    if (n && Vo(n), S(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && ko(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let so = !1, Yr = !1;
const Le = [];
let pt = 0;
const Sn = [];
let dt = null, kt = 0;
const Xl = /* @__PURE__ */ Promise.resolve();
let js = null;
const Ku = 100;
function Us(e) {
  const t = js || Xl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qu(e) {
  let t = pt + 1, n = Le.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    io(Le[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function ur(e) {
  (!Le.length || !Le.includes(e, so && e.allowRecurse ? pt + 1 : pt)) && (e.id == null ? Le.push(e) : Le.splice(qu(e.id), 0, e), Zl());
}
function Zl() {
  !so && !Yr && (Yr = !0, js = Xl.then(na));
}
function Wu(e) {
  const t = Le.indexOf(e);
  t > pt && Le.splice(t, 1);
}
function ea(e) {
  H(e) ? Sn.push(...e) : (!dt || !dt.includes(e, e.allowRecurse ? kt + 1 : kt)) && Sn.push(e), Zl();
}
function bi(e, t = so ? pt + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Le.length; t++) {
    const n = Le[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Bs(e, n))
        continue;
      Le.splice(t, 1), t--, n();
    }
  }
}
function ta(e) {
  if (Sn.length) {
    const t = [...new Set(Sn)];
    if (Sn.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), dt.sort((n, o) => io(n) - io(o)), kt = 0; kt < dt.length; kt++)
      process.env.NODE_ENV !== "production" && Bs(e, dt[kt]) || dt[kt]();
    dt = null, kt = 0;
  }
}
const io = (e) => e.id == null ? 1 / 0 : e.id, zu = (e, t) => {
  const n = io(e) - io(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function na(e) {
  Yr = !1, so = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Le.sort(zu);
  const t = process.env.NODE_ENV !== "production" ? (n) => Bs(e, n) : Ie;
  try {
    for (pt = 0; pt < Le.length; pt++) {
      const n = Le[pt];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ot(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    pt = 0, Le.length = 0, ta(e), so = !1, js = null, (Le.length || Sn.length) && na(e);
  }
}
function Bs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ku) {
      const o = t.ownerInstance, r = o && Ys(o.type);
      return S(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Ht = !1;
const wn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Al().__VUE_HMR_RUNTIME__ = {
  createRecord: xr(oa),
  rerender: xr(Yu),
  reload: xr(Qu)
});
const hn = /* @__PURE__ */ new Map();
function Ju(e) {
  const t = e.type.__hmrId;
  let n = hn.get(t);
  n || (oa(t, e.type), n = hn.get(t)), n.instances.add(e);
}
function Gu(e) {
  hn.get(e.type.__hmrId).instances.delete(e);
}
function oa(e, t) {
  return hn.has(e) ? !1 : (hn.set(e, {
    initialDef: Wn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Wn(e) {
  return Ma(e) ? e.__vccOpts : e;
}
function Yu(e, t) {
  const n = hn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Wn(o.type).render = t), o.renderCache = [], Ht = !0, o.update(), Ht = !1;
  }));
}
function Qu(e, t) {
  const n = hn.get(e);
  if (!n)
    return;
  t = Wn(t), _i(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Wn(r.type);
    wn.has(s) || (s !== n.initialDef && _i(s, t), wn.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (wn.add(s), r.ceReload(t.styles), wn.delete(s)) : r.parent ? ur(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  ea(() => {
    for (const r of o)
      wn.delete(Wn(r.type));
  });
}
function _i(e, t) {
  Ne(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function xr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let ht, Kn = [], Qr = !1;
function mo(e, ...t) {
  ht ? ht.emit(e, ...t) : Qr || Kn.push({ event: e, args: t });
}
function ra(e, t) {
  var n, o;
  ht = e, ht ? (ht.enabled = !0, Kn.forEach(({ event: r, args: s }) => ht.emit(r, ...s)), Kn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ra(s, t);
  }), setTimeout(() => {
    ht || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Qr = !0, Kn = []);
  }, 3e3)) : (Qr = !0, Kn = []);
}
function Xu(e, t) {
  mo("app:init", e, t, {
    Fragment: Se,
    Text: vo,
    Comment: Fe,
    Static: Gn
  });
}
function Zu(e) {
  mo("app:unmount", e);
}
const ef = /* @__PURE__ */ Hs(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), sa = /* @__PURE__ */ Hs(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), tf = /* @__PURE__ */ Hs(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), nf = (e) => {
  ht && typeof ht.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ht.cleanupBuffer(e) && tf(e);
};
function Hs(e) {
  return (t) => {
    mo(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const of = /* @__PURE__ */ ia(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), rf = /* @__PURE__ */ ia(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function ia(e) {
  return (t, n, o) => {
    mo(e, t.appContext.app, t.uid, t, n, o);
  };
}
function sf(e, t, n) {
  mo("component:emit", e.appContext.app, e, t, n);
}
function lf(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || fe;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: u, propsOptions: [f] } = e;
    if (u)
      if (!(t in u))
        (!f || !(Qt(t) in f)) && S(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qt(t)}" prop.`);
      else {
        const p = u[t];
        q(p) && (p(...n) || S(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: p } = o[u] || fe;
    p && (r = n.map((m) => ve(m) ? m.trim() : m)), f && (r = n.map(no));
  }
  if (process.env.NODE_ENV !== "production" && sf(e, t, r), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Qt(u)] && S(`Event "${u}" is emitted in component ${mr(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Dt(t)}" instead of "${t}".`);
  }
  let l, a = o[l = Qt(t)] || // also try camelCase event handler (#2249)
  o[l = Qt(vt(t))];
  !a && s && (a = o[l = Qt(Dt(t))]), a && et(a, e, 6, r);
  const c = o[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, et(c, e, 6, r);
  }
}
function la(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!q(e)) {
    const a = (c) => {
      const u = la(c, t, !0);
      u && (l = !0, Ne(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (le(e) && o.set(e, null), null) : (H(s) ? s.forEach((a) => i[a] = null) : Ne(i, s), le(e) && o.set(e, i), i);
}
function fr(e, t) {
  return !e || !po(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, Dt(t)) || X(e, t));
}
let Pe = null, aa = null;
function qo(e) {
  const t = Pe;
  return Pe = e, aa = e && e.type.__scopeId || null, t;
}
function rt(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Vi(-1);
    const s = qo(t);
    let i;
    try {
      i = e(...r);
    } finally {
      qo(s), o._d && Vi(1);
    }
    return process.env.NODE_ENV !== "production" && sa(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Xr = !1;
function Wo() {
  Xr = !0;
}
function Sr(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: a, emit: c, render: u, renderCache: f, data: p, setupState: m, ctx: g, inheritAttrs: v } = e;
  let N, O;
  const A = qo(e);
  process.env.NODE_ENV !== "production" && (Xr = !1);
  try {
    if (n.shapeFlag & 4) {
      const W = r || o;
      N = st(u.call(W, W, f, s, m, p, g)), O = a;
    } else {
      const W = t;
      process.env.NODE_ENV !== "production" && a === s && Wo(), N = st(W.length > 1 ? W(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return Wo(), a;
        },
        slots: l,
        emit: c
      } : { attrs: a, slots: l, emit: c }) : W(
        s,
        null
        /* we know it doesn't need it */
      )), O = t.props ? a : cf(a);
    }
  } catch (W) {
    Yn.length = 0, cr(
      W,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), N = _e(Fe);
  }
  let L = N, F;
  if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && ([L, F] = af(N)), O && v !== !1) {
    const W = Object.keys(O), { shapeFlag: ee } = L;
    if (W.length) {
      if (ee & 7)
        i && W.some(Bo) && (O = uf(O, i)), L = lt(L, O);
      else if (process.env.NODE_ENV !== "production" && !Xr && L.type !== Fe) {
        const se = Object.keys(a), K = [], Q = [];
        for (let te = 0, ce = se.length; te < ce; te++) {
          const de = se[te];
          po(de) ? Bo(de) || K.push(de[2].toLowerCase() + de.slice(3)) : Q.push(de);
        }
        Q.length && S(`Extraneous non-props attributes (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), K.length && S(`Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !wi(L) && S("Runtime directive used on component with non-element root node. The directives will not function as intended."), L = lt(L), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !wi(L) && S("Component inside <Transition> renders non-element root node that cannot be animated."), L.transition = n.transition), process.env.NODE_ENV !== "production" && F ? F(L) : N = L, qo(A), N;
}
const af = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ca(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [st(o), i];
};
function ca(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Cn(o)) {
      if (o.type !== Fe || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const cf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || po(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, uf = (e, t) => {
  const n = {};
  for (const o in e)
    (!Bo(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, wi = (e) => e.shapeFlag & 7 || e.type === Fe;
function ff(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, c = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && Ht || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Ni(o, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (i[p] !== o[p] && !fr(c, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Ni(o, i, c) : !0 : !!i;
  return !1;
}
function Ni(e, t, n) {
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
function df({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const pf = (e) => e.__isSuspense;
function hf(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : ea(e);
}
function qe(e, t) {
  if (!Ae)
    process.env.NODE_ENV !== "production" && S("provide() can only be used inside setup().");
  else {
    let n = Ae.provides;
    const o = Ae.parent && Ae.parent.provides;
    o === n && (n = Ae.provides = Object.create(o)), n[e] = t;
  }
}
function we(e, t, n = !1) {
  const o = Ae || Pe;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && q(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
function nt(e, t) {
  return Ks(e, null, t);
}
const Co = {};
function gt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !q(t) && S("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Ks(e, t, n);
}
function Ks(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = fe) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (F) => {
    S("Invalid watch source: ", F, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Ae;
  let c, u = !1, f = !1;
  if (De(e) ? (c = () => e.value, u = Ko(e)) : an(e) ? (c = () => e, o = !0) : H(e) ? (f = !0, u = e.some((F) => an(F) || Ko(F)), c = () => e.map((F) => {
    if (De(F))
      return F.value;
    if (an(F))
      return on(F);
    if (q(F))
      return Ot(
        F,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(F);
  })) : q(e) ? t ? c = () => Ot(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : c = () => {
    if (!(a && a.isUnmounted))
      return p && p(), et(e, a, 3, [m]);
  } : (c = Ie, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const F = c;
    c = () => on(F());
  }
  let p, m = (F) => {
    p = A.onStop = () => {
      Ot(
        F,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, g;
  if (ao)
    if (m = Ie, t ? n && et(t, a, 3, [
      c(),
      f ? [] : void 0,
      m
    ]) : c(), r === "sync") {
      const F = bd();
      g = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return Ie;
  let v = f ? new Array(e.length).fill(Co) : Co;
  const N = () => {
    if (A.active)
      if (t) {
        const F = A.run();
        (o || u || (f ? F.some((W, ee) => to(W, v[ee])) : to(F, v))) && (p && p(), et(t, a, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          v === Co ? void 0 : f && v[0] === Co ? [] : v,
          m
        ]), v = F);
      } else
        A.run();
  };
  N.allowRecurse = !!t;
  let O;
  r === "sync" ? O = N : r === "post" ? O = () => Ke(N, a && a.suspense) : (N.pre = !0, a && (N.id = a.uid), O = () => ur(N));
  const A = new Fs(c, O);
  process.env.NODE_ENV !== "production" && (A.onTrack = s, A.onTrigger = i), t ? n ? N() : v = A.run() : r === "post" ? Ke(A.run.bind(A), a && a.suspense) : A.run();
  const L = () => {
    A.stop(), a && a.scope && Rs(a.scope.effects, A);
  };
  return g && g.push(L), L;
}
function mf(e, t, n) {
  const o = this.proxy, r = ve(e) ? e.includes(".") ? ua(o, e) : () => o[e] : e.bind(o, o);
  let s;
  q(t) ? s = t : (s = t.handler, n = t);
  const i = Ae;
  Tn(this);
  const l = Ks(r, s.bind(o), n);
  return i ? Tn(i) : fn(), l;
}
function ua(e, t) {
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
  else if (Tl(e))
    for (const n in e)
      on(e[n], t);
  return e;
}
function gf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return $e(() => {
    e.isMounted = !0;
  }), ha(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ze = [Function, Array], vf = {
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
    const n = Gs(), o = gf();
    let r;
    return () => {
      const s = t.default && da(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let v = !1;
        for (const N of s)
          if (N.type !== Fe) {
            if (process.env.NODE_ENV !== "production" && v) {
              S("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = N, v = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = G(e), { mode: a } = l;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && S(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Dr(i);
      const c = Oi(i);
      if (!c)
        return Dr(i);
      const u = Zr(c, l, o, n);
      es(c, u);
      const f = n.subTree, p = f && Oi(f);
      let m = !1;
      const { getTransitionKey: g } = c.type;
      if (g) {
        const v = g();
        r === void 0 ? r = v : v !== r && (r = v, m = !0);
      }
      if (p && p.type !== Fe && (!Zt(c, p) || m)) {
        const v = Zr(p, l, o, n);
        if (es(p, v), a === "out-in")
          return o.isLeaving = !0, v.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Dr(i);
        a === "in-out" && c.type !== Fe && (v.delayLeave = (N, O, A) => {
          const L = fa(o, p);
          L[String(p.key)] = p, N._leaveCb = () => {
            O(), N._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = A;
        });
      }
      return i;
    };
  }
}, yf = vf;
function fa(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Zr(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: p, onAfterLeave: m, onLeaveCancelled: g, onBeforeAppear: v, onAppear: N, onAfterAppear: O, onAppearCancelled: A } = t, L = String(e.key), F = fa(n, e), W = (K, Q) => {
    K && et(K, o, 9, Q);
  }, ee = (K, Q) => {
    const te = Q[1];
    W(K, Q), H(K) ? K.every((ce) => ce.length <= 1) && te() : K.length <= 1 && te();
  }, se = {
    mode: s,
    persisted: i,
    beforeEnter(K) {
      let Q = l;
      if (!n.isMounted)
        if (r)
          Q = v || l;
        else
          return;
      K._leaveCb && K._leaveCb(
        !0
        /* cancelled */
      );
      const te = F[L];
      te && Zt(e, te) && te.el._leaveCb && te.el._leaveCb(), W(Q, [K]);
    },
    enter(K) {
      let Q = a, te = c, ce = u;
      if (!n.isMounted)
        if (r)
          Q = N || a, te = O || c, ce = A || u;
        else
          return;
      let de = !1;
      const ae = K._enterCb = (Xe) => {
        de || (de = !0, Xe ? W(ce, [K]) : W(te, [K]), se.delayedLeave && se.delayedLeave(), K._enterCb = void 0);
      };
      Q ? ee(Q, [K, ae]) : ae();
    },
    leave(K, Q) {
      const te = String(e.key);
      if (K._enterCb && K._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Q();
      W(f, [K]);
      let ce = !1;
      const de = K._leaveCb = (ae) => {
        ce || (ce = !0, Q(), ae ? W(g, [K]) : W(m, [K]), K._leaveCb = void 0, F[te] === e && delete F[te]);
      };
      F[te] = e, p ? ee(p, [K, de]) : de();
    },
    clone(K) {
      return Zr(K, t, n, o);
    }
  };
  return se;
}
function Dr(e) {
  if (go(e))
    return e = lt(e), e.children = null, e;
}
function Oi(e) {
  return go(e) ? e.children ? e.children[0] : void 0 : e;
}
function es(e, t) {
  e.shapeFlag & 6 && e.component ? es(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function da(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Se ? (i.patchFlag & 128 && r++, o = o.concat(da(i.children, t, l))) : (t || i.type !== Fe) && o.push(l != null ? lt(i, { key: l }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function ye(e) {
  return q(e) ? { setup: e, name: e.name } : e;
}
const zn = (e) => !!e.type.__asyncLoader, go = (e) => e.type.__isKeepAlive;
function Ef(e, t) {
  pa(e, "a", t);
}
function bf(e, t) {
  pa(e, "da", t);
}
function pa(e, t, n = Ae) {
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
      go(r.parent.vnode) && _f(o, t, n, r), r = r.parent;
  }
}
function _f(e, t, n, o) {
  const r = dr(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ge(() => {
    Rs(o[t], r);
  }, n);
}
function dr(e, t, n = Ae, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      gn(), Tn(n);
      const l = et(t, n, e, i);
      return fn(), vn(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Qt(Ms[e].replace(/ hook$/, ""));
    S(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Tt = (e) => (t, n = Ae) => (!ao || e === "sp") && dr(e, (...o) => t(...o), n), wf = Tt(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), $e = Tt(
  "m"
  /* LifecycleHooks.MOUNTED */
), Nf = Tt(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Of = Tt(
  "u"
  /* LifecycleHooks.UPDATED */
), ha = Tt(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Ge = Tt(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), xf = Tt(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Sf = Tt(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Df = Tt(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Cf(e, t = Ae) {
  dr("ec", e, t);
}
function ma(e) {
  ou(e) && S("Do not use built-in directive ids as custom directive id: " + e);
}
function Lt(e, t) {
  const n = Pe;
  if (n === null)
    return process.env.NODE_ENV !== "production" && S("withDirectives can only be used inside render functions."), e;
  const o = hr(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, a, c = fe] = t[s];
    i && (q(i) && (i = {
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
    a && (gn(), et(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), vn());
  }
}
const zo = "components";
function ga(e, t) {
  return Ea(zo, e, !0, t) || e;
}
const va = Symbol();
function ya(e) {
  return ve(e) ? Ea(zo, e, !1) || e : e || va;
}
function Ea(e, t, n = !0, o = !1) {
  const r = Pe || Ae;
  if (r) {
    const s = r.type;
    if (e === zo) {
      const l = Ys(
        s,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (l && (l === t || l === vt(t) || l === pn(vt(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      xi(r[e] || s[e], t) || // global registration
      xi(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const l = e === zo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      S(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && S(`resolve${pn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function xi(e, t) {
  return e && (e[t] || e[vt(t)] || e[pn(vt(t))]);
}
function Jo(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (H(e) || ve(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && S(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
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
function Cr(e, t, n = {}, o, r) {
  if (Pe.isCE || Pe.parent && zn(Pe.parent) && Pe.parent.isCE)
    return t !== "default" && (n.name = t), _e("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (S("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), ge();
  const i = s && ba(s(n)), l = xt(
    Se,
    {
      key: n.key || i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function ba(e) {
  return e.some((t) => Cn(t) ? !(t.type === Fe || t.type === Se && !ba(t.children)) : !0) ? e : null;
}
const ts = (e) => e ? Fa(e) ? hr(e) || e.proxy : ts(e.parent) : null, un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? On(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? On(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? On(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? On(e.refs) : e.refs,
    $parent: (e) => ts(e.parent),
    $root: (e) => ts(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ws(e),
    $forceUpdate: (e) => e.f || (e.f = () => ur(e.update)),
    $nextTick: (e) => e.n || (e.n = Us.bind(e.proxy)),
    $watch: (e) => mf.bind(e)
  })
), qs = (e) => e === "_" || e === "$", Tr = (e, t) => e !== fe && !e.__isScriptSetup && X(e, t), _a = {
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
        if (Tr(o, t))
          return i[t] = 1, o[t];
        if (r !== fe && X(r, t))
          return i[t] = 2, r[t];
        if ((c = e.propsOptions[0]) && X(c, t))
          return i[t] = 3, s[t];
        if (n !== fe && X(n, t))
          return i[t] = 4, n[t];
        ns && (i[t] = 0);
      }
    }
    const u = un[t];
    let f, p;
    if (u)
      return t === "$attrs" && (We(e, "get", t), process.env.NODE_ENV !== "production" && Wo()), u(e);
    if ((f = l.__cssModules) && (f = f[t]))
      return f;
    if (n !== fe && X(n, t))
      return i[t] = 4, n[t];
    if (p = a.config.globalProperties, X(p, t))
      return p[t];
    process.env.NODE_ENV !== "production" && Pe && (!ve(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== fe && qs(t[0]) && X(r, t) ? S(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Pe && S(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Tr(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && X(r, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== fe && X(o, t) ? (o[t] = n, !0) : X(e.props, t) ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== fe && X(e, i) || Tr(t, i) || (l = s[0]) && X(l, i) || X(o, i) || X(un, i) || X(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (_a.ownKeys = (e) => (S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Tf(e) {
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
      set: Ie
    });
  }), t;
}
function Af(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Ie
    });
  });
}
function Pf(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (qs(o[0])) {
        S(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Ie
      });
    }
  });
}
function Rf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? S(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ns = !0;
function $f(e) {
  const t = Ws(e), n = e.proxy, o = e.ctx;
  ns = !1, t.beforeCreate && Si(
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
    mounted: p,
    beforeUpdate: m,
    updated: g,
    activated: v,
    deactivated: N,
    beforeDestroy: O,
    beforeUnmount: A,
    destroyed: L,
    unmounted: F,
    render: W,
    renderTracked: ee,
    renderTriggered: se,
    errorCaptured: K,
    serverPrefetch: Q,
    // public API
    expose: te,
    inheritAttrs: ce,
    // assets
    components: de,
    directives: ae,
    filters: Xe
  } = t, be = process.env.NODE_ENV !== "production" ? Rf() : null;
  if (process.env.NODE_ENV !== "production") {
    const [k] = e.propsOptions;
    if (k)
      for (const U in k)
        be("Props", U);
  }
  if (c && Vf(c, o, be, e.appContext.config.unwrapInjectedRef), i)
    for (const k in i) {
      const U = i[k];
      q(U) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, k, {
        value: U.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[k] = U.bind(n), process.env.NODE_ENV !== "production" && be("Methods", k)) : process.env.NODE_ENV !== "production" && S(`Method "${k}" has type "${typeof U}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !q(r) && S("The data option must be a function. Plain object usage is no longer supported.");
    const k = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && $s(k) && S("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !le(k))
      process.env.NODE_ENV !== "production" && S("data() should return an object.");
    else if (e.data = $n(k), process.env.NODE_ENV !== "production")
      for (const U in k)
        be("Data", U), qs(U[0]) || Object.defineProperty(o, U, {
          configurable: !0,
          enumerable: !0,
          get: () => k[U],
          set: Ie
        });
  }
  if (ns = !0, s)
    for (const k in s) {
      const U = s[k], me = q(U) ? U.bind(n, n) : q(U.get) ? U.get.bind(n, n) : Ie;
      process.env.NODE_ENV !== "production" && me === Ie && S(`Computed property "${k}" has no getter.`);
      const Ce = !q(U) && q(U.set) ? U.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        S(`Write operation failed: computed property "${k}" is readonly.`);
      } : Ie, ze = J({
        get: me,
        set: Ce
      });
      Object.defineProperty(o, k, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (Oe) => ze.value = Oe
      }), process.env.NODE_ENV !== "production" && be("Computed", k);
    }
  if (l)
    for (const k in l)
      wa(l[k], o, n, k);
  if (a) {
    const k = q(a) ? a.call(n) : a;
    Reflect.ownKeys(k).forEach((U) => {
      qe(U, k[U]);
    });
  }
  u && Si(
    u,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function he(k, U) {
    H(U) ? U.forEach((me) => k(me.bind(n))) : U && k(U.bind(n));
  }
  if (he(wf, f), he($e, p), he(Nf, m), he(Of, g), he(Ef, v), he(bf, N), he(Cf, K), he(Df, ee), he(Sf, se), he(ha, A), he(Ge, F), he(xf, Q), H(te))
    if (te.length) {
      const k = e.exposed || (e.exposed = {});
      te.forEach((U) => {
        Object.defineProperty(k, U, {
          get: () => n[U],
          set: (me) => n[U] = me
        });
      });
    } else
      e.exposed || (e.exposed = {});
  W && e.render === Ie && (e.render = W), ce != null && (e.inheritAttrs = ce), de && (e.components = de), ae && (e.directives = ae);
}
function Vf(e, t, n = Ie, o = !1) {
  H(e) && (e = os(e));
  for (const r in e) {
    const s = e[r];
    let i;
    le(s) ? "default" in s ? i = we(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : i = we(s.from || r) : i = we(s), De(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && S(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Si(e, t, n) {
  et(H(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function wa(e, t, n, o) {
  const r = o.includes(".") ? ua(n, o) : () => n[o];
  if (ve(e)) {
    const s = t[e];
    q(s) ? gt(r, s) : process.env.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e}"`, s);
  } else if (q(e))
    gt(r, e.bind(n));
  else if (le(e))
    if (H(e))
      e.forEach((s) => wa(s, t, n, o));
    else {
      const s = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(s) ? gt(r, s, e) : process.env.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && S(`Invalid watch option: "${o}"`, e);
}
function Ws(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach((c) => Go(a, c, i, !0)), Go(a, t, i)), le(t) && s.set(t, a), a;
}
function Go(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Go(e, s, n, !0), r && r.forEach((i) => Go(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = kf[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const kf = {
  data: Di,
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
  watch: If,
  // provide / inject
  provide: Di,
  inject: Ff
};
function Di(e, t) {
  return t ? e ? function() {
    return Ne(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t);
  } : t : e;
}
function Ff(e, t) {
  return Xt(os(e), os(t));
}
function os(e) {
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
  return e ? Ne(Ne(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function If(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Ne(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = je(e[o], t[o]);
  return n;
}
function Lf(e, t, n, o = !1) {
  const r = {}, s = {};
  Ho(s, pr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Na(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && xa(t || {}, r, e), n ? e.props = o ? r : Vu(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Mf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function jf(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, l = G(r), [a] = e.propsOptions;
  let c = !1;
  if (// always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !(process.env.NODE_ENV !== "production" && Mf(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (fr(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (X(s, p))
            m !== s[p] && (s[p] = m, c = !0);
          else {
            const g = vt(p);
            r[g] = rs(
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
          m !== s[p] && (s[p] = m, c = !0);
      }
    }
  } else {
    Na(e, t, r, s) && (c = !0);
    let u;
    for (const f in l)
      (!t || !X(t, f) && ((u = Dt(f)) === f || !X(t, u))) && (a ? n && (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = rs(
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
  c && Ct(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && xa(t || {}, r, e);
}
function Na(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if ($o(a))
        continue;
      const c = t[a];
      let u;
      r && X(r, u = vt(a)) ? !s || !s.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : fr(e.emitsOptions, a) || (!(a in o) || c !== o[a]) && (o[a] = c, i = !0);
    }
  if (s) {
    const a = G(n), c = l || fe;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = rs(r, a, f, c[f], e, !X(c, f));
    }
  }
  return i;
}
function rs(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = X(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && q(a)) {
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
    ] && (o === "" || o === Dt(n)) && (o = !0));
  }
  return o;
}
function Oa(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!q(e)) {
    const u = (f) => {
      a = !0;
      const [p, m] = Oa(f, t, !0);
      Ne(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !a)
    return le(e) && o.set(e, xn), xn;
  if (H(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !ve(s[u]) && S("props must be strings when using array syntax.", s[u]);
      const f = vt(s[u]);
      Ci(f) && (i[f] = fe);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !le(s) && S("invalid props options", s);
    for (const u in s) {
      const f = vt(u);
      if (Ci(f)) {
        const p = s[u], m = i[f] = H(p) || q(p) ? { type: p } : Object.assign({}, p);
        if (m) {
          const g = Ai(Boolean, m.type), v = Ai(String, m.type);
          m[
            0
            /* BooleanFlags.shouldCast */
          ] = g > -1, m[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = v < 0 || g < v, (g > -1 || X(m, "default")) && l.push(f);
        }
      }
    }
  }
  const c = [i, l];
  return le(e) && o.set(e, c), c;
}
function Ci(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && S(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ss(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Ti(e, t) {
  return ss(e) === ss(t);
}
function Ai(e, t) {
  return H(t) ? t.findIndex((n) => Ti(n, e)) : q(t) && Ti(t, e) ? 0 : -1;
}
function xa(e, t, n) {
  const o = G(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Uf(s, o[s], i, !X(e, s) && !X(e, Dt(s)));
  }
}
function Uf(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    S('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const a = H(r) ? r : [r], c = [];
      for (let u = 0; u < a.length && !l; u++) {
        const { valid: f, expectedType: p } = Hf(t, a[u]);
        c.push(p || ""), l = f;
      }
      if (!l) {
        S(Kf(e, t, c));
        return;
      }
    }
    i && !i(t) && S('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Bf = /* @__PURE__ */ zt("String,Number,Boolean,Function,Symbol,BigInt");
function Hf(e, t) {
  let n;
  const o = ss(t);
  if (Bf(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = le(e) : o === "Array" ? n = H(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Kf(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(pn).join(" | ")}`;
  const r = n[0], s = Vs(t), i = Pi(t, r), l = Pi(t, s);
  return n.length === 1 && Ri(r) && !qf(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Ri(s) && (o += `with value ${l}.`), o;
}
function Pi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ri(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function qf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Sa = (e) => e[0] === "_" || e === "$stable", zs = (e) => H(e) ? e.map(st) : [st(e)], Wf = (e, t, n) => {
  if (t._n)
    return t;
  const o = rt((...r) => (process.env.NODE_ENV !== "production" && Ae && S(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), zs(t(...r))), n);
  return o._c = !1, o;
}, Da = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Sa(r))
      continue;
    const s = e[r];
    if (q(s))
      t[r] = Wf(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && S(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = zs(s);
      t[r] = () => i;
    }
  }
}, Ca = (e, t) => {
  process.env.NODE_ENV !== "production" && !go(e.vnode) && S("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = zs(t);
  e.slots.default = () => n;
}, zf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = G(t), Ho(t, "_", n)) : Da(t, e.slots = {});
  } else
    e.slots = {}, t && Ca(e, t);
  Ho(e.slots, pr, 1);
}, Jf = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = fe;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ht ? Ne(r, t) : n && l === 1 ? s = !1 : (Ne(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Da(t, r)), i = t;
  } else
    t && (Ca(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Sa(l) && !(l in i) && delete r[l];
};
function Ta() {
  return {
    app: null,
    config: {
      isNativeTag: Dl,
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
let Gf = 0;
function Yf(e, t) {
  return function(o, r = null) {
    q(o) || (o = Object.assign({}, o)), r != null && !le(r) && (process.env.NODE_ENV !== "production" && S("root props passed to app.mount() must be an object."), r = null);
    const s = Ta(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: Gf++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Ii,
      get config() {
        return s.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && S("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...u) {
        return i.has(c) ? process.env.NODE_ENV !== "production" && S("Plugin has already been applied to target app.") : c && q(c.install) ? (i.add(c), c.install(a, ...u)) : q(c) ? (i.add(c), c(a, ...u)) : process.env.NODE_ENV !== "production" && S('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(c) {
        return s.mixins.includes(c) ? process.env.NODE_ENV !== "production" && S("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : s.mixins.push(c), a;
      },
      component(c, u) {
        return process.env.NODE_ENV !== "production" && as(c, s.config), u ? (process.env.NODE_ENV !== "production" && s.components[c] && S(`Component "${c}" has already been registered in target app.`), s.components[c] = u, a) : s.components[c];
      },
      directive(c, u) {
        return process.env.NODE_ENV !== "production" && ma(c), u ? (process.env.NODE_ENV !== "production" && s.directives[c] && S(`Directive "${c}" has already been registered in target app.`), s.directives[c] = u, a) : s.directives[c];
      },
      mount(c, u, f) {
        if (l)
          process.env.NODE_ENV !== "production" && S("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && S("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const p = _e(o, r);
          return p.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(lt(p), c, f);
          }), u && t ? t(p, c) : e(p, c, f), l = !0, a._container = c, c.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = p.component, Xu(a, Ii)), hr(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Zu(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && S("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return process.env.NODE_ENV !== "production" && c in s.provides && S(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), s.provides[c] = u, a;
      }
    };
    return a;
  };
}
function is(e, t, n, o, r = !1) {
  if (H(e)) {
    e.forEach((p, m) => is(p, t && (H(t) ? t[m] : t), n, o, r));
    return;
  }
  if (zn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? hr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    S("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = t && t.r, u = l.refs === fe ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== a && (ve(c) ? (u[c] = null, X(f, c) && (f[c] = null)) : De(c) && (c.value = null)), q(a))
    Ot(a, l, 12, [i, u]);
  else {
    const p = ve(a), m = De(a);
    if (p || m) {
      const g = () => {
        if (e.f) {
          const v = p ? X(f, a) ? f[a] : u[a] : a.value;
          r ? H(v) && Rs(v, s) : H(v) ? v.includes(s) || v.push(s) : p ? (u[a] = [s], X(f, a) && (f[a] = u[a])) : (a.value = [s], e.k && (u[e.k] = a.value));
        } else
          p ? (u[a] = i, X(f, a) && (f[a] = i)) : m ? (a.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (g.id = -1, Ke(g, n)) : g();
    } else
      process.env.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let In, Mt;
function _t(e, t) {
  e.appContext.config.performance && Yo() && Mt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && of(e, t, Yo() ? Mt.now() : Date.now());
}
function wt(e, t) {
  if (e.appContext.config.performance && Yo()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Mt.mark(o), Mt.measure(`<${mr(e, e.type)}> ${t}`, n, o), Mt.clearMarks(n), Mt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && rf(e, t, Yo() ? Mt.now() : Date.now());
}
function Yo() {
  return In !== void 0 || (typeof window < "u" && window.performance ? (In = !0, Mt = window.performance) : In = !1), In;
}
function Qf() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ke = hf;
function Xf(e) {
  return Zf(e);
}
function Zf(e, t) {
  Qf();
  const n = Al();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && ra(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: a, setText: c, setElementText: u, parentNode: f, nextSibling: p, setScopeId: m = Ie, insertStaticContent: g } = e, v = (d, h, y, w = null, b = null, T = null, R = !1, D = null, P = process.env.NODE_ENV !== "production" && Ht ? !1 : !!h.dynamicChildren) => {
    if (d === h)
      return;
    d && !Zt(d, h) && (w = $(d), He(d, b, T, !0), d = null), h.patchFlag === -2 && (P = !1, h.dynamicChildren = null);
    const { type: x, ref: j, shapeFlag: M } = h;
    switch (x) {
      case vo:
        N(d, h, y, w);
        break;
      case Fe:
        O(d, h, y, w);
        break;
      case Gn:
        d == null ? A(h, y, w, R) : process.env.NODE_ENV !== "production" && L(d, h, y, R);
        break;
      case Se:
        ae(d, h, y, w, b, T, R, D, P);
        break;
      default:
        M & 1 ? ee(d, h, y, w, b, T, R, D, P) : M & 6 ? Xe(d, h, y, w, b, T, R, D, P) : M & 64 || M & 128 ? x.process(d, h, y, w, b, T, R, D, P, I) : process.env.NODE_ENV !== "production" && S("Invalid VNode type:", x, `(${typeof x})`);
    }
    j != null && b && is(j, d && d.ref, T, h || d, !h);
  }, N = (d, h, y, w) => {
    if (d == null)
      o(h.el = l(h.children), y, w);
    else {
      const b = h.el = d.el;
      h.children !== d.children && c(b, h.children);
    }
  }, O = (d, h, y, w) => {
    d == null ? o(h.el = a(h.children || ""), y, w) : h.el = d.el;
  }, A = (d, h, y, w) => {
    [d.el, d.anchor] = g(d.children, h, y, w, d.el, d.anchor);
  }, L = (d, h, y, w) => {
    if (h.children !== d.children) {
      const b = p(d.anchor);
      W(d), [h.el, h.anchor] = g(h.children, y, b, w);
    } else
      h.el = d.el, h.anchor = d.anchor;
  }, F = ({ el: d, anchor: h }, y, w) => {
    let b;
    for (; d && d !== h; )
      b = p(d), o(d, y, w), d = b;
    o(h, y, w);
  }, W = ({ el: d, anchor: h }) => {
    let y;
    for (; d && d !== h; )
      y = p(d), r(d), d = y;
    r(h);
  }, ee = (d, h, y, w, b, T, R, D, P) => {
    R = R || h.type === "svg", d == null ? se(h, y, w, b, T, R, D, P) : te(d, h, b, T, R, D, P);
  }, se = (d, h, y, w, b, T, R, D) => {
    let P, x;
    const { type: j, props: M, shapeFlag: B, transition: z, dirs: Z } = d;
    if (P = d.el = i(d.type, T, M && M.is, M), B & 8 ? u(P, d.children) : B & 16 && Q(d.children, P, null, w, b, T && j !== "foreignObject", R, D), Z && Jt(d, null, w, "created"), M) {
      for (const ue in M)
        ue !== "value" && !$o(ue) && s(P, ue, null, M[ue], T, d.children, w, b, E);
      "value" in M && s(P, "value", null, M.value), (x = M.onVnodeBeforeMount) && ut(x, w, d);
    }
    K(P, d, d.scopeId, R, w), process.env.NODE_ENV !== "production" && (Object.defineProperty(P, "__vnode", {
      value: d,
      enumerable: !1
    }), Object.defineProperty(P, "__vueParentComponent", {
      value: w,
      enumerable: !1
    })), Z && Jt(d, null, w, "beforeMount");
    const pe = (!b || b && !b.pendingBranch) && z && !z.persisted;
    pe && z.beforeEnter(P), o(P, h, y), ((x = M && M.onVnodeMounted) || pe || Z) && Ke(() => {
      x && ut(x, w, d), pe && z.enter(P), Z && Jt(d, null, w, "mounted");
    }, b);
  }, K = (d, h, y, w, b) => {
    if (y && m(d, y), w)
      for (let T = 0; T < w.length; T++)
        m(d, w[T]);
    if (b) {
      let T = b.subTree;
      if (process.env.NODE_ENV !== "production" && T.patchFlag > 0 && T.patchFlag & 2048 && (T = ca(T.children) || T), h === T) {
        const R = b.vnode;
        K(d, R, R.scopeId, R.slotScopeIds, b.parent);
      }
    }
  }, Q = (d, h, y, w, b, T, R, D, P = 0) => {
    for (let x = P; x < d.length; x++) {
      const j = d[x] = D ? Ft(d[x]) : st(d[x]);
      v(null, j, h, y, w, b, T, R, D);
    }
  }, te = (d, h, y, w, b, T, R) => {
    const D = h.el = d.el;
    let { patchFlag: P, dynamicChildren: x, dirs: j } = h;
    P |= d.patchFlag & 16;
    const M = d.props || fe, B = h.props || fe;
    let z;
    y && Gt(y, !1), (z = B.onVnodeBeforeUpdate) && ut(z, y, h, d), j && Jt(h, d, y, "beforeUpdate"), y && Gt(y, !0), process.env.NODE_ENV !== "production" && Ht && (P = 0, R = !1, x = null);
    const Z = b && h.type !== "foreignObject";
    if (x ? (ce(d.dynamicChildren, x, D, y, w, Z, T), process.env.NODE_ENV !== "production" && y && y.type.__hmrId && Jn(d, h)) : R || me(d, h, D, null, y, w, Z, T, !1), P > 0) {
      if (P & 16)
        de(D, h, M, B, y, w, b);
      else if (P & 2 && M.class !== B.class && s(D, "class", null, B.class, b), P & 4 && s(D, "style", M.style, B.style, b), P & 8) {
        const pe = h.dynamicProps;
        for (let ue = 0; ue < pe.length; ue++) {
          const xe = pe[ue], ot = M[xe], En = B[xe];
          (En !== ot || xe === "value") && s(D, xe, ot, En, b, d.children, y, w, E);
        }
      }
      P & 1 && d.children !== h.children && u(D, h.children);
    } else
      !R && x == null && de(D, h, M, B, y, w, b);
    ((z = B.onVnodeUpdated) || j) && Ke(() => {
      z && ut(z, y, h, d), j && Jt(h, d, y, "updated");
    }, w);
  }, ce = (d, h, y, w, b, T, R) => {
    for (let D = 0; D < h.length; D++) {
      const P = d[D], x = h[D], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && (P.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(P, x) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? f(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          y
        )
      );
      v(P, x, j, null, w, b, T, R, !0);
    }
  }, de = (d, h, y, w, b, T, R) => {
    if (y !== w) {
      if (y !== fe)
        for (const D in y)
          !$o(D) && !(D in w) && s(d, D, y[D], null, R, h.children, b, T, E);
      for (const D in w) {
        if ($o(D))
          continue;
        const P = w[D], x = y[D];
        P !== x && D !== "value" && s(d, D, x, P, R, h.children, b, T, E);
      }
      "value" in w && s(d, "value", y.value, w.value);
    }
  }, ae = (d, h, y, w, b, T, R, D, P) => {
    const x = h.el = d ? d.el : l(""), j = h.anchor = d ? d.anchor : l("");
    let { patchFlag: M, dynamicChildren: B, slotScopeIds: z } = h;
    process.env.NODE_ENV !== "production" && (Ht || M & 2048) && (M = 0, P = !1, B = null), z && (D = D ? D.concat(z) : z), d == null ? (o(x, y, w), o(j, y, w), Q(h.children, y, j, b, T, R, D, P)) : M > 0 && M & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (ce(d.dynamicChildren, B, y, b, T, R, D), process.env.NODE_ENV !== "production" && b && b.type.__hmrId ? Jn(d, h) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (h.key != null || b && h === b.subTree) && Jn(
        d,
        h,
        !0
        /* shallow */
      )
    )) : me(d, h, y, j, b, T, R, D, P);
  }, Xe = (d, h, y, w, b, T, R, D, P) => {
    h.slotScopeIds = D, d == null ? h.shapeFlag & 512 ? b.ctx.activate(h, y, w, R, P) : be(h, y, w, b, T, R, P) : he(d, h, P);
  }, be = (d, h, y, w, b, T, R) => {
    const D = d.component = dd(d, w, b);
    if (process.env.NODE_ENV !== "production" && D.type.__hmrId && Ju(D), process.env.NODE_ENV !== "production" && (Vo(d), _t(D, "mount")), go(d) && (D.ctx.renderer = I), process.env.NODE_ENV !== "production" && _t(D, "init"), hd(D), process.env.NODE_ENV !== "production" && wt(D, "init"), D.asyncDep) {
      if (b && b.registerDep(D, k), !d.el) {
        const P = D.subTree = _e(Fe);
        O(null, P, h, y);
      }
      return;
    }
    k(D, d, h, y, b, T, R), process.env.NODE_ENV !== "production" && (ko(), wt(D, "mount"));
  }, he = (d, h, y) => {
    const w = h.component = d.component;
    if (ff(d, h, y))
      if (w.asyncDep && !w.asyncResolved) {
        process.env.NODE_ENV !== "production" && Vo(h), U(w, h, y), process.env.NODE_ENV !== "production" && ko();
        return;
      } else
        w.next = h, Wu(w.update), w.update();
    else
      h.el = d.el, w.vnode = h;
  }, k = (d, h, y, w, b, T, R) => {
    const D = () => {
      if (d.isMounted) {
        let { next: j, bu: M, u: B, parent: z, vnode: Z } = d, pe = j, ue;
        process.env.NODE_ENV !== "production" && Vo(j || d.vnode), Gt(d, !1), j ? (j.el = Z.el, U(d, j, R)) : j = Z, M && _n(M), (ue = j.props && j.props.onVnodeBeforeUpdate) && ut(ue, z, j, Z), Gt(d, !0), process.env.NODE_ENV !== "production" && _t(d, "render");
        const xe = Sr(d);
        process.env.NODE_ENV !== "production" && wt(d, "render");
        const ot = d.subTree;
        d.subTree = xe, process.env.NODE_ENV !== "production" && _t(d, "patch"), v(
          ot,
          xe,
          // parent may have changed if it's in a teleport
          f(ot.el),
          // anchor may have changed if it's in a fragment
          $(ot),
          d,
          b,
          T
        ), process.env.NODE_ENV !== "production" && wt(d, "patch"), j.el = xe.el, pe === null && df(d, xe.el), B && Ke(B, b), (ue = j.props && j.props.onVnodeUpdated) && Ke(() => ut(ue, z, j, Z), b), process.env.NODE_ENV !== "production" && sa(d), process.env.NODE_ENV !== "production" && ko();
      } else {
        let j;
        const { el: M, props: B } = h, { bm: z, m: Z, parent: pe } = d, ue = zn(h);
        if (Gt(d, !1), z && _n(z), !ue && (j = B && B.onVnodeBeforeMount) && ut(j, pe, h), Gt(d, !0), M && Ee) {
          const xe = () => {
            process.env.NODE_ENV !== "production" && _t(d, "render"), d.subTree = Sr(d), process.env.NODE_ENV !== "production" && wt(d, "render"), process.env.NODE_ENV !== "production" && _t(d, "hydrate"), Ee(M, d.subTree, d, b, null), process.env.NODE_ENV !== "production" && wt(d, "hydrate");
          };
          ue ? h.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !d.isUnmounted && xe()
          ) : xe();
        } else {
          process.env.NODE_ENV !== "production" && _t(d, "render");
          const xe = d.subTree = Sr(d);
          process.env.NODE_ENV !== "production" && wt(d, "render"), process.env.NODE_ENV !== "production" && _t(d, "patch"), v(null, xe, y, w, d, b, T), process.env.NODE_ENV !== "production" && wt(d, "patch"), h.el = xe.el;
        }
        if (Z && Ke(Z, b), !ue && (j = B && B.onVnodeMounted)) {
          const xe = h;
          Ke(() => ut(j, pe, xe), b);
        }
        (h.shapeFlag & 256 || pe && zn(pe.vnode) && pe.vnode.shapeFlag & 256) && d.a && Ke(d.a, b), d.isMounted = !0, process.env.NODE_ENV !== "production" && ef(d), h = y = w = null;
      }
    }, P = d.effect = new Fs(
      D,
      () => ur(x),
      d.scope
      // track it in component's effect scope
    ), x = d.update = () => P.run();
    x.id = d.uid, Gt(d, !0), process.env.NODE_ENV !== "production" && (P.onTrack = d.rtc ? (j) => _n(d.rtc, j) : void 0, P.onTrigger = d.rtg ? (j) => _n(d.rtg, j) : void 0, x.ownerInstance = d), x();
  }, U = (d, h, y) => {
    h.component = d;
    const w = d.vnode.props;
    d.vnode = h, d.next = null, jf(d, h.props, w, y), Jf(d, h.children, y), gn(), bi(), vn();
  }, me = (d, h, y, w, b, T, R, D, P = !1) => {
    const x = d && d.children, j = d ? d.shapeFlag : 0, M = h.children, { patchFlag: B, shapeFlag: z } = h;
    if (B > 0) {
      if (B & 128) {
        ze(x, M, y, w, b, T, R, D, P);
        return;
      } else if (B & 256) {
        Ce(x, M, y, w, b, T, R, D, P);
        return;
      }
    }
    z & 8 ? (j & 16 && E(x, b, T), M !== x && u(y, M)) : j & 16 ? z & 16 ? ze(x, M, y, w, b, T, R, D, P) : E(x, b, T, !0) : (j & 8 && u(y, ""), z & 16 && Q(M, y, w, b, T, R, D, P));
  }, Ce = (d, h, y, w, b, T, R, D, P) => {
    d = d || xn, h = h || xn;
    const x = d.length, j = h.length, M = Math.min(x, j);
    let B;
    for (B = 0; B < M; B++) {
      const z = h[B] = P ? Ft(h[B]) : st(h[B]);
      v(d[B], z, y, null, b, T, R, D, P);
    }
    x > j ? E(d, b, T, !0, !1, M) : Q(h, y, w, b, T, R, D, P, M);
  }, ze = (d, h, y, w, b, T, R, D, P) => {
    let x = 0;
    const j = h.length;
    let M = d.length - 1, B = j - 1;
    for (; x <= M && x <= B; ) {
      const z = d[x], Z = h[x] = P ? Ft(h[x]) : st(h[x]);
      if (Zt(z, Z))
        v(z, Z, y, null, b, T, R, D, P);
      else
        break;
      x++;
    }
    for (; x <= M && x <= B; ) {
      const z = d[M], Z = h[B] = P ? Ft(h[B]) : st(h[B]);
      if (Zt(z, Z))
        v(z, Z, y, null, b, T, R, D, P);
      else
        break;
      M--, B--;
    }
    if (x > M) {
      if (x <= B) {
        const z = B + 1, Z = z < j ? h[z].el : w;
        for (; x <= B; )
          v(null, h[x] = P ? Ft(h[x]) : st(h[x]), y, Z, b, T, R, D, P), x++;
      }
    } else if (x > B)
      for (; x <= M; )
        He(d[x], b, T, !0), x++;
    else {
      const z = x, Z = x, pe = /* @__PURE__ */ new Map();
      for (x = Z; x <= B; x++) {
        const Me = h[x] = P ? Ft(h[x]) : st(h[x]);
        Me.key != null && (process.env.NODE_ENV !== "production" && pe.has(Me.key) && S("Duplicate keys found during update:", JSON.stringify(Me.key), "Make sure keys are unique."), pe.set(Me.key, x));
      }
      let ue, xe = 0;
      const ot = B - Z + 1;
      let En = !1, ai = 0;
      const Fn = new Array(ot);
      for (x = 0; x < ot; x++)
        Fn[x] = 0;
      for (x = z; x <= M; x++) {
        const Me = d[x];
        if (xe >= ot) {
          He(Me, b, T, !0);
          continue;
        }
        let ct;
        if (Me.key != null)
          ct = pe.get(Me.key);
        else
          for (ue = Z; ue <= B; ue++)
            if (Fn[ue - Z] === 0 && Zt(Me, h[ue])) {
              ct = ue;
              break;
            }
        ct === void 0 ? He(Me, b, T, !0) : (Fn[ct - Z] = x + 1, ct >= ai ? ai = ct : En = !0, v(Me, h[ct], y, null, b, T, R, D, P), xe++);
      }
      const ci = En ? ed(Fn) : xn;
      for (ue = ci.length - 1, x = ot - 1; x >= 0; x--) {
        const Me = Z + x, ct = h[Me], ui = Me + 1 < j ? h[Me + 1].el : w;
        Fn[x] === 0 ? v(null, ct, y, ui, b, T, R, D, P) : En && (ue < 0 || x !== ci[ue] ? Oe(
          ct,
          y,
          ui,
          2
          /* MoveType.REORDER */
        ) : ue--);
      }
    }
  }, Oe = (d, h, y, w, b = null) => {
    const { el: T, type: R, transition: D, children: P, shapeFlag: x } = d;
    if (x & 6) {
      Oe(d.component.subTree, h, y, w);
      return;
    }
    if (x & 128) {
      d.suspense.move(h, y, w);
      return;
    }
    if (x & 64) {
      R.move(d, h, y, I);
      return;
    }
    if (R === Se) {
      o(T, h, y);
      for (let M = 0; M < P.length; M++)
        Oe(P[M], h, y, w);
      o(d.anchor, h, y);
      return;
    }
    if (R === Gn) {
      F(d, h, y);
      return;
    }
    if (w !== 2 && x & 1 && D)
      if (w === 0)
        D.beforeEnter(T), o(T, h, y), Ke(() => D.enter(T), b);
      else {
        const { leave: M, delayLeave: B, afterLeave: z } = D, Z = () => o(T, h, y), pe = () => {
          M(T, () => {
            Z(), z && z();
          });
        };
        B ? B(T, Z, pe) : pe();
      }
    else
      o(T, h, y);
  }, He = (d, h, y, w = !1, b = !1) => {
    const { type: T, props: R, ref: D, children: P, dynamicChildren: x, shapeFlag: j, patchFlag: M, dirs: B } = d;
    if (D != null && is(D, null, y, d, !0), j & 256) {
      h.ctx.deactivate(d);
      return;
    }
    const z = j & 1 && B, Z = !zn(d);
    let pe;
    if (Z && (pe = R && R.onVnodeBeforeUnmount) && ut(pe, h, d), j & 6)
      At(d.component, y, w);
    else {
      if (j & 128) {
        d.suspense.unmount(y, w);
        return;
      }
      z && Jt(d, null, h, "beforeUnmount"), j & 64 ? d.type.remove(d, h, y, b, I, w) : x && (T !== Se || M > 0 && M & 64) ? E(x, h, y, !1, !0) : (T === Se && M & 384 || !b && j & 16) && E(P, h, y), w && at(d);
    }
    (Z && (pe = R && R.onVnodeUnmounted) || z) && Ke(() => {
      pe && ut(pe, h, d), z && Jt(d, null, h, "unmounted");
    }, y);
  }, at = (d) => {
    const { type: h, el: y, anchor: w, transition: b } = d;
    if (h === Se) {
      process.env.NODE_ENV !== "production" && d.patchFlag > 0 && d.patchFlag & 2048 && b && !b.persisted ? d.children.forEach((R) => {
        R.type === Fe ? r(R.el) : at(R);
      }) : wo(y, w);
      return;
    }
    if (h === Gn) {
      W(d);
      return;
    }
    const T = () => {
      r(y), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (d.shapeFlag & 1 && b && !b.persisted) {
      const { leave: R, delayLeave: D } = b, P = () => R(y, T);
      D ? D(d.el, T, P) : P();
    } else
      T();
  }, wo = (d, h) => {
    let y;
    for (; d !== h; )
      y = p(d), r(d), d = y;
    r(h);
  }, At = (d, h, y) => {
    process.env.NODE_ENV !== "production" && d.type.__hmrId && Gu(d);
    const { bum: w, scope: b, update: T, subTree: R, um: D } = d;
    w && _n(w), b.stop(), T && (T.active = !1, He(R, d, h, y)), D && Ke(D, h), Ke(() => {
      d.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), process.env.NODE_ENV !== "production" && nf(d);
  }, E = (d, h, y, w = !1, b = !1, T = 0) => {
    for (let R = T; R < d.length; R++)
      He(d[R], h, y, w, b);
  }, $ = (d) => d.shapeFlag & 6 ? $(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : p(d.anchor || d.el), V = (d, h, y) => {
    d == null ? h._vnode && He(h._vnode, null, null, !0) : v(h._vnode || null, d, h, null, null, null, y), bi(), ta(), h._vnode = d;
  }, I = {
    p: v,
    um: He,
    m: Oe,
    r: at,
    mt: be,
    mc: Q,
    pc: me,
    pbc: ce,
    n: $,
    o: e
  };
  let ne, Ee;
  return t && ([ne, Ee] = t(I)), {
    render: V,
    hydrate: ne,
    createApp: Yf(V, ne)
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Ft(r[s]), l.el = i.el), n || Jn(i, l)), l.type === vo && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === Fe && !l.el && (l.el = i.el);
    }
}
function ed(e) {
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
const td = (e) => e.__isTeleport, Dn = (e) => e && (e.disabled || e.disabled === ""), $i = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ls = (e, t) => {
  const n = e && e.to;
  if (ve(n))
    if (t) {
      const o = t(n);
      return o || process.env.NODE_ENV !== "production" && S(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), o;
    } else
      return process.env.NODE_ENV !== "production" && S("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !Dn(e) && S(`Invalid Teleport target: ${n}`), n;
}, nd = {
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, l, a, c) {
    const { mc: u, pc: f, pbc: p, o: { insert: m, querySelector: g, createText: v, createComment: N } } = c, O = Dn(t.props);
    let { shapeFlag: A, children: L, dynamicChildren: F } = t;
    if (process.env.NODE_ENV !== "production" && Ht && (a = !1, F = null), e == null) {
      const W = t.el = process.env.NODE_ENV !== "production" ? N("teleport start") : v(""), ee = t.anchor = process.env.NODE_ENV !== "production" ? N("teleport end") : v("");
      m(W, n, o), m(ee, n, o);
      const se = t.target = ls(t.props, g), K = t.targetAnchor = v("");
      se ? (m(K, se), i = i || $i(se)) : process.env.NODE_ENV !== "production" && !O && S("Invalid Teleport target on mount:", se, `(${typeof se})`);
      const Q = (te, ce) => {
        A & 16 && u(L, te, ce, r, s, i, l, a);
      };
      O ? Q(n, ee) : se && Q(se, K);
    } else {
      t.el = e.el;
      const W = t.anchor = e.anchor, ee = t.target = e.target, se = t.targetAnchor = e.targetAnchor, K = Dn(e.props), Q = K ? n : ee, te = K ? W : se;
      if (i = i || $i(ee), F ? (p(e.dynamicChildren, F, Q, r, s, i, l), Jn(e, t, !0)) : a || f(e, t, Q, te, r, s, i, l, !1), O)
        K || To(
          t,
          n,
          W,
          c,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ce = t.target = ls(t.props, g);
        ce ? To(
          t,
          ce,
          null,
          c,
          0
          /* TeleportMoveTypes.TARGET_CHANGE */
        ) : process.env.NODE_ENV !== "production" && S("Invalid Teleport target on update:", ee, `(${typeof ee})`);
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
    Aa(t);
  },
  remove(e, t, n, o, { um: r, o: { remove: s } }, i) {
    const { shapeFlag: l, children: a, anchor: c, targetAnchor: u, target: f, props: p } = e;
    if (f && s(u), (i || !Dn(p)) && (s(c), l & 16))
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        r(g, t, n, !0, !!g.dynamicChildren);
      }
  },
  move: To,
  hydrate: od
};
function To(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: c, props: u } = e, f = s === 2;
  if (f && o(i, t, n), (!f || Dn(u)) && a & 16)
    for (let p = 0; p < c.length; p++)
      r(
        c[p],
        t,
        n,
        2
        /* MoveType.REORDER */
      );
  f && o(l, t, n);
}
function od(e, t, n, o, r, s, { o: { nextSibling: i, parentNode: l, querySelector: a } }, c) {
  const u = t.target = ls(t.props, a);
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Dn(t.props))
        t.anchor = c(i(e), t, l(e), n, o, r, s), t.targetAnchor = f;
      else {
        t.anchor = i(e);
        let p = f;
        for (; p; )
          if (p = i(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, u._lpa = t.targetAnchor && i(t.targetAnchor);
            break;
          }
        c(f, t, u, n, o, r, s);
      }
    Aa(t);
  }
  return t.anchor && i(t.anchor);
}
const rd = nd;
function Aa(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Se = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), vo = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Fe = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Gn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Yn = [];
let it = null;
function ge(e = !1) {
  Yn.push(it = e ? null : []);
}
function sd() {
  Yn.pop(), it = Yn[Yn.length - 1] || null;
}
let lo = 1;
function Vi(e) {
  lo += e;
}
function Pa(e) {
  return e.dynamicChildren = lo > 0 ? it || xn : null, sd(), lo > 0 && it && it.push(e), e;
}
function Be(e, t, n, o, r, s) {
  return Pa(C(
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
function xt(e, t, n, o, r) {
  return Pa(_e(
    e,
    t,
    n,
    o,
    r,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && wn.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const id = (...e) => $a(...e), pr = "__vInternal", Ra = ({ key: e }) => e ?? null, Fo = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ve(e) || De(e) || q(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null;
function C(e, t = null, n = null, o = 0, r = null, s = e === Se ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ra(t),
    ref: t && Fo(t),
    scopeId: aa,
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
    ctx: Pe
  };
  return l ? (Js(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ve(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && S("VNode created with invalid key (NaN). VNode type:", a.type), lo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  it && (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && it.push(a), a;
}
const _e = process.env.NODE_ENV !== "production" ? id : $a;
function $a(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === va) && (process.env.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Fe), Cn(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Js(l, n), lo > 0 && !s && it && (l.shapeFlag & 6 ? it[it.indexOf(e)] = l : it.push(l)), l.patchFlag |= -2, l;
  }
  if (Ma(e) && (e = e.__vccOpts), t) {
    t = ld(t);
    let { class: l, style: a } = t;
    l && !ve(l) && (t.class = Rn(l)), le(a) && (Gr(a) && !H(a) && (a = Ne({}, a)), t.style = Ps(a));
  }
  const i = ve(e) ? 1 : pf(e) ? 128 : td(e) ? 64 : le(e) ? 4 : q(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Gr(e) && (e = G(e), S("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), C(e, t, n, o, r, i, s, !0);
}
function ld(e) {
  return e ? Gr(e) || pr in e ? Ne({}, e) : e : null;
}
function lt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? cd(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ra(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? H(r) ? r.concat(Fo(t)) : [r, Fo(t)] : Fo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && H(i) ? i.map(Va) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? s === -1 ? 16 : s | 16 : s,
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
function Va(e) {
  const t = lt(e);
  return H(e.children) && (t.children = e.children.map(Va)), t;
}
function ka(e = " ", t = 0) {
  return _e(vo, null, e, t);
}
function ad(e, t) {
  const n = _e(Gn, null, e);
  return n.staticCount = t, n;
}
function Ar(e = "", t = !1) {
  return t ? (ge(), xt(Fe, null, e)) : _e(Fe, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? _e(Fe) : H(e) ? _e(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ft(e) : _e(vo, null, String(e));
}
function Ft(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function Js(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Js(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(pr in t) ? t._ctx = Pe : r === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    q(t) ? (t = { default: t, _ctx: Pe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ka(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function cd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Rn([t.class, o.class]));
      else if (r === "style")
        t.style = Ps([t.style, o.style]);
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
const ud = Ta();
let fd = 0;
function dd(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || ud, s = {
    uid: fd++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new iu(
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
    propsOptions: Oa(o, r),
    emitsOptions: la(o, r),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = Tf(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = lf.bind(null, s), e.ce && e.ce(s), s;
}
let Ae = null;
const Gs = () => Ae || Pe, Tn = (e) => {
  Ae = e, e.scope.on();
}, fn = () => {
  Ae && Ae.scope.off(), Ae = null;
}, pd = /* @__PURE__ */ zt("slot,component");
function as(e, t) {
  const n = t.isNativeTag || Dl;
  (pd(e) || n(e)) && S("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Fa(e) {
  return e.vnode.shapeFlag & 4;
}
let ao = !1;
function hd(e, t = !1) {
  ao = t;
  const { props: n, children: o } = e.vnode, r = Fa(e);
  Lf(e, n, r, t), zf(e, o);
  const s = r ? md(e, t) : void 0;
  return ao = !1, s;
}
function md(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && as(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        as(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        ma(s[i]);
    }
    o.compilerOptions && Ia() && S('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Kl(new Proxy(e.ctx, _a)), process.env.NODE_ENV !== "production" && Af(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? gd(e) : null;
    Tn(e), gn();
    const i = Ot(r, e, 0, [process.env.NODE_ENV !== "production" ? On(e.props) : e.props, s]);
    if (vn(), fn(), $s(i)) {
      if (i.then(fn, fn), t)
        return i.then((l) => {
          ki(e, l, t);
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
        S(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      ki(e, i, t);
  } else
    La(e, t);
}
function ki(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) ? (process.env.NODE_ENV !== "production" && Cn(t) && S("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Gl(t), process.env.NODE_ENV !== "production" && Pf(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && S(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), La(e, n);
}
let cs;
const Ia = () => !cs;
function La(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && cs && !o.render) {
      const r = o.template || Ws(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && _t(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = o, c = Ne(Ne({
          isCustomElement: s,
          delimiters: l
        }, i), a);
        o.render = cs(r, c), process.env.NODE_ENV !== "production" && wt(e, "compile");
      }
    }
    e.render = o.render || Ie;
  }
  Tn(e), gn(), $f(e), vn(), fn(), process.env.NODE_ENV !== "production" && !o.render && e.render === Ie && !t && (o.template ? S(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : S("Component is missing template or render function."));
}
function Fi(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return Wo(), We(e, "get", "$attrs"), t[n];
    },
    set() {
      return S("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return S("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return We(e, "get", "$attrs"), t[n];
    }
  });
}
function gd(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && S("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Fi(e));
    },
    get slots() {
      return On(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Fi(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function hr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Gl(Kl(e.exposed)), {
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
const vd = /(?:^|[-_])(\w)/g, yd = (e) => e.replace(vd, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ys(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mr(e, t, n = !1) {
  let o = Ys(t);
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
  return o ? yd(o) : n ? "App" : "Anonymous";
}
function Ma(e) {
  return q(e) && "__vccOpts" in e;
}
const J = (e, t) => Lu(e, t, ao);
function Te(e, t, n) {
  const o = arguments.length;
  return o === 2 ? le(t) && !H(t) ? Cn(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Cn(n) && (n = [n]), _e(e, t, n));
}
const Ed = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), bd = () => {
  {
    const e = we(Ed);
    return e || process.env.NODE_ENV !== "production" && S("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Pr(e) {
  return !!(e && e.__v_isShallow);
}
function _d() {
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
        ["span", e, Pr(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${qt(f) ? " (readonly)" : ""}`
      ] : qt(f) ? [
        "div",
        {},
        ["span", e, Pr(f) ? "ShallowReadonly" : "Readonly"],
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
    const p = [];
    f.type.props && f.props && p.push(i("props", G(f.props))), f.setupState !== fe && p.push(i("setup", f.setupState)), f.data !== fe && p.push(i("data", G(f.data)));
    const m = a(f, "computed");
    m && p.push(i("computed", m));
    const g = a(f, "inject");
    return g && p.push(i("injected", g)), p.push([
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
    ]), p;
  }
  function i(f, p) {
    return p = Ne({}, p), Object.keys(p).length ? [
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
        ...Object.keys(p).map((m) => [
          "div",
          {},
          ["span", o, m + ": "],
          l(p[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, p = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : le(f) ? ["object", { object: p ? G(f) : f }] : ["span", n, String(f)];
  }
  function a(f, p) {
    const m = f.type;
    if (q(m))
      return;
    const g = {};
    for (const v in f.ctx)
      c(m, v, p) && (g[v] = f.ctx[v]);
    return g;
  }
  function c(f, p, m) {
    const g = f[m];
    if (H(g) && g.includes(p) || le(g) && p in g || f.extends && c(f.extends, p, m) || f.mixins && f.mixins.some((v) => c(v, p, m)))
      return !0;
  }
  function u(f) {
    return Pr(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Ii = "3.2.45", wd = "http://www.w3.org/2000/svg", en = typeof document < "u" ? document : null, Li = en && /* @__PURE__ */ en.createElement("template"), Nd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? en.createElementNS(wd, e) : en.createElement(e, n ? { is: n } : void 0);
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
      Li.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = Li.content;
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
function Od(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function xd(e, t, n) {
  const o = e.style, r = ve(n);
  if (n && !r) {
    for (const s in n)
      us(o, s, n[s]);
    if (t && !ve(t))
      for (const s in t)
        n[s] == null && us(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const Sd = /[^\\];\s*$/, Mi = /\s*!important$/;
function us(e, t, n) {
  if (H(n))
    n.forEach((o) => us(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Sd.test(n) && S(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Dd(e, t);
    Mi.test(n) ? e.setProperty(Dt(o), n.replace(Mi, ""), "important") : e[o] = n;
  }
}
const ji = ["Webkit", "Moz", "ms"], Rr = {};
function Dd(e, t) {
  const n = Rr[t];
  if (n)
    return n;
  let o = vt(t);
  if (o !== "filter" && o in e)
    return Rr[t] = o;
  o = pn(o);
  for (let r = 0; r < ji.length; r++) {
    const s = ji[r] + o;
    if (s in e)
      return Rr[t] = s;
  }
  return t;
}
const Ui = "http://www.w3.org/1999/xlink";
function Cd(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ui, t.slice(6, t.length)) : e.setAttributeNS(Ui, t, n);
  else {
    const s = Xc(t);
    n == null || s && !xl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Td(e, t, n, o, r, s, i) {
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
    a === "boolean" ? n = xl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !l && S(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && e.removeAttribute(t);
}
function tn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ad(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Pd(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, a] = Rd(t);
    if (o) {
      const c = s[t] = kd(o, r);
      tn(e, l, c, a);
    } else
      i && (Ad(e, l, i, a), s[t] = void 0);
  }
}
const Bi = /(?:Once|Passive|Capture)$/;
function Rd(e) {
  let t;
  if (Bi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Bi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Dt(e.slice(2)), t];
}
let $r = 0;
const $d = /* @__PURE__ */ Promise.resolve(), Vd = () => $r || ($d.then(() => $r = 0), $r = Date.now());
function kd(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    et(Fd(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Vd(), n;
}
function Fd(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Hi = /^on[a-z]/, Id = (e, t, n, o, r = !1, s, i, l, a) => {
  t === "class" ? Od(e, o, r) : t === "style" ? xd(e, n, o) : po(t) ? Bo(t) || Pd(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ld(e, t, o, r)) ? Td(e, t, o, s, i, l, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Cd(e, t, o, r));
};
function Ld(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Hi.test(t) && q(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hi.test(t) && ve(n) ? !1 : t in e;
}
const Md = {
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
yf.props;
const Qo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => _n(t, n) : t;
};
function jd(e) {
  e.target.composing = !0;
}
function Ki(e) {
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
    }), t || (tn(e, "compositionstart", jd), tn(e, "compositionend", Ki), tn(e, "change", Ki));
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
}, fs = {
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
    qi(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Qo(n);
  },
  updated(e, { value: t }) {
    qi(e, t);
  }
};
function qi(e, t) {
  const n = e.multiple;
  if (n && !H(t) && !or(t)) {
    process.env.NODE_ENV !== "production" && S(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const s = e.options[o], i = Xo(s);
    if (n)
      H(t) ? s.selected = eu(t, i) > -1 : s.selected = t.has(i);
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
const Ud = ["ctrl", "shift", "alt", "meta"], Bd = {
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
  exact: (e, t) => Ud.some((n) => e[`${n}Key`] && !t.includes(n))
}, Wi = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = Bd[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, Hd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Kd = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const o = Dt(n.key);
  if (t.some((r) => r === o || Hd[r] === o))
    return e(n);
}, qd = /* @__PURE__ */ Ne({ patchProp: Id }, Nd);
let zi;
function Wd() {
  return zi || (zi = Xf(qd));
}
const zd = (...e) => {
  const t = Wd().createApp(...e);
  process.env.NODE_ENV !== "production" && (Jd(t), Gd(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Yd(o);
    if (!r)
      return;
    const s = t._component;
    !q(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Jd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Gc(t) || Yc(t),
    writable: !1
  });
}
function Gd(e) {
  if (Ia()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        S("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return S(o), n;
      },
      set() {
        S(o);
      }
    });
  }
}
function Yd(e) {
  if (ve(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && S(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && S('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function Qd() {
  _d();
}
process.env.NODE_ENV !== "production" && Qd();
const Xd = /* @__PURE__ */ ye({
  __name: "ElementItem",
  props: {
    element: null
  },
  setup(e) {
    const t = e, n = J(() => {
      let o;
      switch (t.element.size) {
        case "sm":
          o = "text-sm";
          break;
        case "md":
          o = "text-md";
          break;
        case "lg":
          o = "text-lg";
          break;
        case "xl":
          o = "text-xl";
          break;
        case "2xl":
          o = "text-2xl";
          break;
        case "3xl":
          o = "text-3xl";
          break;
        case "4xl":
          o = "text-4xl";
          break;
        default:
          o = "text-sm";
      }
      let r;
      switch (t.element.size) {
        case "normal":
          r = "font-base";
          break;
        case "bold":
          r = "font-bold";
          break;
        default:
          r = "font-base";
      }
      return [
        o,
        r
      ].join(" ");
    });
    return (o, r) => (ge(), xt(ya(t.element.type), {
      class: Rn(ke(n)),
      key: t.element.id,
      innerHTML: t.element.content
    }, null, 8, ["class", "innerHTML"]));
  }
}), Zd = ["src", "alt"], ep = /* @__PURE__ */ ye({
  __name: "ImageElement",
  props: {
    element: null
  },
  setup(e) {
    const t = e;
    return (n, o) => (ge(), Be("img", {
      src: t.element.src,
      alt: t.element.alt,
      class: "w-full"
    }, null, 8, Zd));
  }
}), tp = /* @__PURE__ */ ye({
  __name: "ContainerElement",
  props: {
    container: null
  },
  setup(e) {
    const t = e, n = J(() => {
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
    return (o, r) => (ge(), Be("div", {
      key: t.container.id,
      class: Rn(ke(n))
    }, [
      (ge(!0), Be(Se, null, Jo(t.container.elements, (s) => (ge(), xt(ya(s.type === "img" ? ep : Xd), {
        onClick: (i) => o.$emit("selectElement", s),
        element: s
      }, null, 8, ["onClick", "element"]))), 256))
    ], 2));
  }
});
function ja(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: np } = Object.prototype, { getPrototypeOf: Qs } = Object, gr = ((e) => (t) => {
  const n = np.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Et = (e) => (e = e.toLowerCase(), (t) => gr(t) === e), vr = (e) => (t) => typeof t === e, { isArray: Vn } = Array, co = vr("undefined");
function op(e) {
  return e !== null && !co(e) && e.constructor !== null && !co(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ua = Et("ArrayBuffer");
function rp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ua(e.buffer), t;
}
const sp = vr("string"), tt = vr("function"), Ba = vr("number"), yr = (e) => e !== null && typeof e == "object", ip = (e) => e === !0 || e === !1, Io = (e) => {
  if (gr(e) !== "object")
    return !1;
  const t = Qs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, lp = Et("Date"), ap = Et("File"), cp = Et("Blob"), up = Et("FileList"), fp = (e) => yr(e) && tt(e.pipe), dp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = gr(e)) === "formdata" || t === "object" && tt(e.toString) && e.toString() === "[object FormData]"));
}, pp = Et("URLSearchParams"), hp = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Ha(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let o = n.length, r;
  for (; o-- > 0; )
    if (r = n[o], t === r.toLowerCase())
      return r;
  return null;
}
const Ka = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), qa = (e) => !co(e) && e !== Ka;
function ds() {
  const { caseless: e } = qa(this) && this || {}, t = {}, n = (o, r) => {
    const s = e && Ha(t, r) || r;
    Io(t[s]) && Io(o) ? t[s] = ds(t[s], o) : Io(o) ? t[s] = ds({}, o) : Vn(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, r = arguments.length; o < r; o++)
    arguments[o] && yo(arguments[o], n);
  return t;
}
const mp = (e, t, n, { allOwnKeys: o } = {}) => (yo(t, (r, s) => {
  n && tt(r) ? e[s] = ja(r, n) : e[s] = r;
}, { allOwnKeys: o }), e), gp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vp = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, yp = (e, t, n, o) => {
  let r, s, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], (!o || o(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Qs(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ep = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, bp = (e) => {
  if (!e)
    return null;
  if (Vn(e))
    return e;
  let t = e.length;
  if (!Ba(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, _p = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Qs(Uint8Array)), wp = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, Np = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, Op = Et("HTMLFormElement"), xp = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, r) {
    return o.toUpperCase() + r;
  }
), Ji = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Sp = Et("RegExp"), Wa = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  yo(n, (r, s) => {
    t(r, s, e) !== !1 && (o[s] = r);
  }), Object.defineProperties(e, o);
}, Dp = (e) => {
  Wa(e, (t, n) => {
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
}, Cp = (e, t) => {
  const n = {}, o = (r) => {
    r.forEach((s) => {
      n[s] = !0;
    });
  };
  return Vn(e) ? o(e) : o(String(e).split(t)), n;
}, Tp = () => {
}, Ap = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Vr = "abcdefghijklmnopqrstuvwxyz", Gi = "0123456789", za = {
  DIGIT: Gi,
  ALPHA: Vr,
  ALPHA_DIGIT: Vr + Vr.toUpperCase() + Gi
}, Pp = (e = 16, t = za.ALPHA_DIGIT) => {
  let n = "";
  const { length: o } = t;
  for (; e--; )
    n += t[Math.random() * o | 0];
  return n;
};
function Rp(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const $p = (e) => {
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
}, Vp = Et("AsyncFunction"), kp = (e) => e && (yr(e) || tt(e)) && tt(e.then) && tt(e.catch), _ = {
  isArray: Vn,
  isArrayBuffer: Ua,
  isBuffer: op,
  isFormData: dp,
  isArrayBufferView: rp,
  isString: sp,
  isNumber: Ba,
  isBoolean: ip,
  isObject: yr,
  isPlainObject: Io,
  isUndefined: co,
  isDate: lp,
  isFile: ap,
  isBlob: cp,
  isRegExp: Sp,
  isFunction: tt,
  isStream: fp,
  isURLSearchParams: pp,
  isTypedArray: _p,
  isFileList: up,
  forEach: yo,
  merge: ds,
  extend: mp,
  trim: hp,
  stripBOM: gp,
  inherits: vp,
  toFlatObject: yp,
  kindOf: gr,
  kindOfTest: Et,
  endsWith: Ep,
  toArray: bp,
  forEachEntry: wp,
  matchAll: Np,
  isHTMLForm: Op,
  hasOwnProperty: Ji,
  hasOwnProp: Ji,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wa,
  freezeMethods: Dp,
  toObjectSet: Cp,
  toCamelCase: xp,
  noop: Tp,
  toFiniteNumber: Ap,
  findKey: Ha,
  global: Ka,
  isContextDefined: qa,
  ALPHABET: za,
  generateString: Pp,
  isSpecCompliantForm: Rp,
  toJSONObject: $p,
  isAsyncFn: Vp,
  isThenable: kp
};
function re(e, t, n, o, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), r && (this.response = r);
}
_.inherits(re, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ja = re.prototype, Ga = {};
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
  Ga[e] = { value: e };
});
Object.defineProperties(re, Ga);
Object.defineProperty(Ja, "isAxiosError", { value: !0 });
re.from = (e, t, n, o, r, s) => {
  const i = Object.create(Ja);
  return _.toFlatObject(e, i, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), re.call(i, e.message, t, n, o, r), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Fp = null;
function ps(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Ya(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yi(e, t, n) {
  return e ? e.concat(t).map(function(r, s) {
    return r = Ya(r), !n && s ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function Ip(e) {
  return _.isArray(e) && !e.some(ps);
}
const Lp = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Er(e, t, n) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, N) {
    return !_.isUndefined(N[v]);
  });
  const o = n.metaTokens, r = n.visitor || u, s = n.dots, i = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
  if (!_.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null)
      return "";
    if (_.isDate(g))
      return g.toISOString();
    if (!a && _.isBlob(g))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(g) || _.isTypedArray(g) ? a && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, v, N) {
    let O = g;
    if (g && !N && typeof g == "object") {
      if (_.endsWith(v, "{}"))
        v = o ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (_.isArray(g) && Ip(g) || (_.isFileList(g) || _.endsWith(v, "[]")) && (O = _.toArray(g)))
        return v = Ya(v), O.forEach(function(L, F) {
          !(_.isUndefined(L) || L === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Yi([v], F, s) : i === null ? v : v + "[]",
            c(L)
          );
        }), !1;
    }
    return ps(g) ? !0 : (t.append(Yi(N, v, s), c(g)), !1);
  }
  const f = [], p = Object.assign(Lp, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ps
  });
  function m(g, v) {
    if (!_.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(g), _.forEach(g, function(O, A) {
        (!(_.isUndefined(O) || O === null) && r.call(
          t,
          O,
          _.isString(A) ? A.trim() : A,
          v,
          p
        )) === !0 && m(O, v ? v.concat(A) : [A]);
      }), f.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Qi(e) {
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
function Xs(e, t) {
  this._pairs = [], e && Er(e, this, t);
}
const Qa = Xs.prototype;
Qa.append = function(t, n) {
  this._pairs.push([t, n]);
};
Qa.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, Qi);
  } : Qi;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function Mp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xa(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || Mp, r = n && n.serialize;
  let s;
  if (r ? s = r(t, n) : s = _.isURLSearchParams(t) ? t.toString() : new Xs(t, n).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class jp {
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
    _.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const Xi = jp, Za = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Up = typeof URLSearchParams < "u" ? URLSearchParams : Xs, Bp = typeof FormData < "u" ? FormData : null, Hp = typeof Blob < "u" ? Blob : null, Kp = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), qp = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), mt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Up,
    FormData: Bp,
    Blob: Hp
  },
  isStandardBrowserEnv: Kp,
  isStandardBrowserWebWorkerEnv: qp,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Wp(e, t) {
  return Er(e, new mt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, r, s) {
      return mt.isNode && _.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function zp(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jp(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const r = n.length;
  let s;
  for (o = 0; o < r; o++)
    s = n[o], t[s] = e[s];
  return t;
}
function ec(e) {
  function t(n, o, r, s) {
    let i = n[s++];
    const l = Number.isFinite(+i), a = s >= n.length;
    return i = !i && _.isArray(r) ? r.length : i, a ? (_.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !l) : ((!r[i] || !_.isObject(r[i])) && (r[i] = []), t(n, o, r[i], s) && _.isArray(r[i]) && (r[i] = Jp(r[i])), !l);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (o, r) => {
      t(zp(o), r, n, 0);
    }), n;
  }
  return null;
}
const Gp = {
  "Content-Type": void 0
};
function Yp(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const br = {
  transitional: Za,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", r = o.indexOf("application/json") > -1, s = _.isObject(t);
    if (s && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return r && r ? JSON.stringify(ec(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Wp(t, this.formSerializer).toString();
      if ((l = _.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Er(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || r ? (n.setContentType("application/json", !1), Yp(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || br.transitional, o = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (t && _.isString(t) && (o && !this.responseType || r)) {
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
_.forEach(["delete", "get", "head"], function(t) {
  br.headers[t] = {};
});
_.forEach(["post", "put", "patch"], function(t) {
  br.headers[t] = _.merge(Gp);
});
const Zs = br, Qp = _.toObjectSet([
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
]), Xp = (e) => {
  const t = {};
  let n, o, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), o = i.substring(r + 1).trim(), !(!n || t[n] && Qp[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, Zi = Symbol("internals");
function Ln(e) {
  return e && String(e).trim().toLowerCase();
}
function Lo(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Lo) : String(e);
}
function Zp(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const eh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function kr(e, t, n, o, r) {
  if (_.isFunction(o))
    return o.call(this, t, n);
  if (r && (t = n), !!_.isString(t)) {
    if (_.isString(o))
      return t.indexOf(o) !== -1;
    if (_.isRegExp(o))
      return o.test(t);
  }
}
function th(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function nh(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + n, {
      value: function(r, s, i) {
        return this[o].call(this, t, r, s, i);
      },
      configurable: !0
    });
  });
}
class _r {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, o) {
    const r = this;
    function s(l, a, c) {
      const u = Ln(a);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = _.findKey(r, u);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = Lo(l));
    }
    const i = (l, a) => _.forEach(l, (c, u) => s(c, u, a));
    return _.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : _.isString(t) && (t = t.trim()) && !eh(t) ? i(Xp(t), n) : t != null && s(n, t, o), this;
  }
  get(t, n) {
    if (t = Ln(t), t) {
      const o = _.findKey(this, t);
      if (o) {
        const r = this[o];
        if (!n)
          return r;
        if (n === !0)
          return Zp(r);
        if (_.isFunction(n))
          return n.call(this, r, o);
        if (_.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ln(t), t) {
      const o = _.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || kr(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let r = !1;
    function s(i) {
      if (i = Ln(i), i) {
        const l = _.findKey(o, i);
        l && (!n || kr(o, o[l], l, n)) && (delete o[l], r = !0);
      }
    }
    return _.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, r = !1;
    for (; o--; ) {
      const s = n[o];
      (!t || kr(this, this[s], s, t, !0)) && (delete this[s], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, o = {};
    return _.forEach(this, (r, s) => {
      const i = _.findKey(o, s);
      if (i) {
        n[i] = Lo(r), delete n[s];
        return;
      }
      const l = t ? th(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Lo(r), o[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (o, r) => {
      o != null && o !== !1 && (n[r] = t && _.isArray(o) ? o.join(", ") : o);
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
    const o = (this[Zi] = this[Zi] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const l = Ln(i);
      o[l] || (nh(r, i), o[l] = !0);
    }
    return _.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
_r.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.freezeMethods(_r.prototype);
_.freezeMethods(_r);
const St = _r;
function Fr(e, t) {
  const n = this || Zs, o = t || n, r = St.from(o.headers);
  let s = o.data;
  return _.forEach(e, function(l) {
    s = l.call(n, s, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), s;
}
function tc(e) {
  return !!(e && e.__CANCEL__);
}
function Eo(e, t, n) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, n), this.name = "CanceledError";
}
_.inherits(Eo, re, {
  __CANCEL__: !0
});
function oh(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new re(
    "Request failed with status code " + n.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const rh = mt.isStandardBrowserEnv ? function() {
  return {
    write: function(n, o, r, s, i, l) {
      const a = [];
      a.push(n + "=" + encodeURIComponent(o)), _.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), _.isString(s) && a.push("path=" + s), _.isString(i) && a.push("domain=" + i), l === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function sh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ih(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nc(e, t) {
  return e && !sh(t) ? ih(e, t) : t;
}
const lh = mt.isStandardBrowserEnv ? function() {
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
    const l = _.isString(i) ? r(i) : i;
    return l.protocol === o.protocol && l.host === o.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function ah(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ch(e, t) {
  e = e || 10;
  const n = new Array(e), o = new Array(e);
  let r = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const c = Date.now(), u = o[s];
    i || (i = c), n[r] = a, o[r] = c;
    let f = s, p = 0;
    for (; f !== r; )
      p += n[f++], f = f % e;
    if (r = (r + 1) % e, r === s && (s = (s + 1) % e), c - i < t)
      return;
    const m = u && c - u;
    return m ? Math.round(p * 1e3 / m) : void 0;
  };
}
function el(e, t) {
  let n = 0;
  const o = ch(50, 250);
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
const uh = typeof XMLHttpRequest < "u", fh = uh && function(e) {
  return new Promise(function(n, o) {
    let r = e.data;
    const s = St.from(e.headers).normalize(), i = e.responseType;
    let l;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    _.isFormData(r) && (mt.isStandardBrowserEnv || mt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(m + ":" + g));
    }
    const u = nc(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Xa(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function f() {
      if (!c)
        return;
      const m = St.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), v = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: m,
        config: e,
        request: c
      };
      oh(function(O) {
        n(O), a();
      }, function(O) {
        o(O), a();
      }, v), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (o(new re("Request aborted", re.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      o(new re("Network Error", re.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const v = e.transitional || Za;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), o(new re(
        g,
        v.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        c
      )), c = null;
    }, mt.isStandardBrowserEnv) {
      const m = (e.withCredentials || lh(u)) && e.xsrfCookieName && rh.read(e.xsrfCookieName);
      m && s.set(e.xsrfHeaderName, m);
    }
    r === void 0 && s.setContentType(null), "setRequestHeader" in c && _.forEach(s.toJSON(), function(g, v) {
      c.setRequestHeader(v, g);
    }), _.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", el(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", el(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (m) => {
      c && (o(!m || m.type ? new Eo(null, e, c) : m), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const p = ah(u);
    if (p && mt.protocols.indexOf(p) === -1) {
      o(new re("Unsupported protocol " + p + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(r || null);
  });
}, Mo = {
  http: Fp,
  xhr: fh
};
_.forEach(Mo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const dh = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    for (let r = 0; r < t && (n = e[r], !(o = _.isString(n) ? Mo[n.toLowerCase()] : n)); r++)
      ;
    if (!o)
      throw o === !1 ? new re(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        _.hasOwnProp(Mo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!_.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Mo
};
function Ir(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Eo(null, e);
}
function tl(e) {
  return Ir(e), e.headers = St.from(e.headers), e.data = Fr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), dh.getAdapter(e.adapter || Zs.adapter)(e).then(function(o) {
    return Ir(e), o.data = Fr.call(
      e,
      e.transformResponse,
      o
    ), o.headers = St.from(o.headers), o;
  }, function(o) {
    return tc(o) || (Ir(e), o && o.response && (o.response.data = Fr.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = St.from(o.response.headers))), Promise.reject(o);
  });
}
const nl = (e) => e instanceof St ? e.toJSON() : e;
function An(e, t) {
  t = t || {};
  const n = {};
  function o(c, u, f) {
    return _.isPlainObject(c) && _.isPlainObject(u) ? _.merge.call({ caseless: f }, c, u) : _.isPlainObject(u) ? _.merge({}, u) : _.isArray(u) ? u.slice() : u;
  }
  function r(c, u, f) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(c))
        return o(void 0, c, f);
    } else
      return o(c, u, f);
  }
  function s(c, u) {
    if (!_.isUndefined(u))
      return o(void 0, u);
  }
  function i(c, u) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(c))
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
    headers: (c, u) => r(nl(c), nl(u), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = a[u] || r, p = f(e[u], t[u], u);
    _.isUndefined(p) && f !== l || (n[u] = p);
  }), n;
}
const oc = "1.4.0", ei = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ei[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ol = {};
ei.transitional = function(t, n, o) {
  function r(s, i) {
    return "[Axios v" + oc + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new re(
        r(i, " has been removed" + (n ? " in " + n : "")),
        re.ERR_DEPRECATED
      );
    return n && !ol[i] && (ol[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function ph(e, t, n) {
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
const hs = {
  assertOptions: ph,
  validators: ei
}, Rt = hs.validators;
class Zo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Xi(),
      response: new Xi()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = An(this.defaults, n);
    const { transitional: o, paramsSerializer: r, headers: s } = n;
    o !== void 0 && hs.assertOptions(o, {
      silentJSONParsing: Rt.transitional(Rt.boolean),
      forcedJSONParsing: Rt.transitional(Rt.boolean),
      clarifyTimeoutError: Rt.transitional(Rt.boolean)
    }, !1), r != null && (_.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : hs.assertOptions(r, {
      encode: Rt.function,
      serialize: Rt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && _.merge(
      s.common,
      s[n.method]
    ), i && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), n.headers = St.concat(i, s);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (a = a && v.synchronous, l.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let u, f = 0, p;
    if (!a) {
      const g = [tl.bind(this), void 0];
      for (g.unshift.apply(g, l), g.push.apply(g, c), p = g.length, u = Promise.resolve(n); f < p; )
        u = u.then(g[f++], g[f++]);
      return u;
    }
    p = l.length;
    let m = n;
    for (f = 0; f < p; ) {
      const g = l[f++], v = l[f++];
      try {
        m = g(m);
      } catch (N) {
        v.call(this, N);
        break;
      }
    }
    try {
      u = tl.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, p = c.length; f < p; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = An(this.defaults, t);
    const n = nc(t.baseURL, t.url);
    return Xa(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function(t) {
  Zo.prototype[t] = function(n, o) {
    return this.request(An(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(s, i, l) {
      return this.request(An(l || {}, {
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
class ti {
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
      token: new ti(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
const hh = ti;
function mh(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function gh(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const ms = {
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
Object.entries(ms).forEach(([e, t]) => {
  ms[t] = e;
});
const vh = ms;
function rc(e) {
  const t = new jo(e), n = ja(jo.prototype.request, t);
  return _.extend(n, jo.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return rc(An(e, r));
  }, n;
}
const Ve = rc(Zs);
Ve.Axios = jo;
Ve.CanceledError = Eo;
Ve.CancelToken = hh;
Ve.isCancel = tc;
Ve.VERSION = oc;
Ve.toFormData = Er;
Ve.AxiosError = re;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) {
  return Promise.all(t);
};
Ve.spread = mh;
Ve.isAxiosError = gh;
Ve.mergeConfig = An;
Ve.AxiosHeaders = St;
Ve.formToJSON = (e) => ec(_.isHTMLForm(e) ? new FormData(e) : e);
Ve.HttpStatusCode = vh;
Ve.default = Ve;
const mn = Ve;
class yh {
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
    const o = await mn.post("/page-builder/storage-url", {
      bucket: n.bucket || "",
      content_type: n.contentType || t.type,
      expires: n.expires || "",
      visibility: n.visibility || "",
      ...n.data
    }, {
      baseURL: n.baseURL || null,
      headers: n.headers || {},
      ...n.options
    });
    let r = o.data.headers;
    return "Host" in r && delete r.Host, typeof n.progress > "u" && (n.progress = () => {
    }), await mn.put(o.data.url, t, {
      headers: r,
      onUploadProgress: (s) => {
      }
    }), o.data.extension = t.name.split(".").pop(), o.data;
  }
}
const Eh = new yh(), bh = /* @__PURE__ */ C("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Element Configuration ", -1), _h = {
  key: 0,
  class: "flex flex-col gap-3 p-3 bg-white"
}, wh = { class: "flex flex-col gap-1" }, Nh = /* @__PURE__ */ C("label", null, "File", -1), Oh = { class: "flex flex-col gap-1" }, xh = /* @__PURE__ */ C("label", null, "Alt Tag", -1), Sh = {
  key: 1,
  class: "flex flex-col gap-3 p-3 bg-white"
}, Dh = { class: "flex flex-col gap-1" }, Ch = /* @__PURE__ */ C("label", null, "Text Size", -1), Th = /* @__PURE__ */ ad('<option value="xs">Extra Small</option><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option><option value="xl">Extra Large</option><option value="2xl">2x Extra Large</option><option value="3xl">3x Extra Large</option><option value="4xl">4x Extra Large</option>', 8), Ah = [
  Th
], Ph = { class: "flex flex-col gap-1" }, Rh = /* @__PURE__ */ C("label", null, "Font Weight", -1), $h = /* @__PURE__ */ C("option", { value: "normal" }, "Normal", -1), Vh = /* @__PURE__ */ C("option", { value: "bold" }, "Bold", -1), kh = [
  $h,
  Vh
], Fh = { class: "flex flex-col gap-1" }, Ih = /* @__PURE__ */ C("label", null, "Content", -1), Lh = /* @__PURE__ */ C("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Element ", -1), Mh = /* @__PURE__ */ ye({
  __name: "ElementConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Y(null), o = () => {
      n.value && "click" in n.value && n.value.click();
    }, r = (s) => {
      Eh.store(s.target.files[0], {
        progress: (i) => {
        }
      }).then(async (i) => {
        const l = await mn.post("/page-builder/files", {
          uuid: i.uuid,
          key: i.key,
          bucket: i.bucket
        });
        t.modelValue.src = l.data.file;
      });
    };
    return (s, i) => (ge(), Be("details", null, [
      bh,
      t.modelValue.type === "img" ? (ge(), Be("div", _h, [
        C("div", wh, [
          Nh,
          Lt(C("input", {
            type: "text",
            "onUpdate:modelValue": i[0] || (i[0] = (l) => t.modelValue.src = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
          }, null, 512), [
            [Qn, t.modelValue.src]
          ]),
          C("input", {
            onChange: r,
            ref_key: "fileSelection",
            ref: n,
            type: "file",
            class: "hidden"
          }, null, 544),
          C("button", {
            onClick: i[1] || (i[1] = (l) => o()),
            class: "border bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 col-span-4"
          }, " Upload File ")
        ]),
        C("div", Oh, [
          xh,
          Lt(C("input", {
            type: "text",
            "onUpdate:modelValue": i[2] || (i[2] = (l) => t.modelValue.alt = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
          }, null, 512), [
            [Qn, t.modelValue.alt]
          ])
        ])
      ])) : (ge(), Be("div", Sh, [
        C("div", Dh, [
          Ch,
          Lt(C("select", {
            "onUpdate:modelValue": i[3] || (i[3] = (l) => t.modelValue.size = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, Ah, 512), [
            [fs, t.modelValue.size]
          ])
        ]),
        C("div", Ph, [
          Rh,
          Lt(C("select", {
            "onUpdate:modelValue": i[4] || (i[4] = (l) => t.modelValue.weight = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, kh, 512), [
            [fs, t.modelValue.weight]
          ])
        ]),
        C("div", Fh, [
          Ih,
          Lt(C("textarea", {
            "onUpdate:modelValue": i[5] || (i[5] = (l) => t.modelValue.content = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, null, 512), [
            [Qn, t.modelValue.content]
          ])
        ]),
        Lh
      ]))
    ]));
  }
}), jh = /* @__PURE__ */ C("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Container Configuration ", -1), Uh = { class: "flex flex-col gap-3 p-3 bg-white" }, Bh = { class: "flex flex-col gap-1" }, Hh = /* @__PURE__ */ C("label", null, "Span", -1), Kh = { class: "flex flex-col gap-1" }, qh = /* @__PURE__ */ C("label", null, "Text Align", -1), Wh = /* @__PURE__ */ C("option", { value: "text-left" }, "Left", -1), zh = /* @__PURE__ */ C("option", { value: "text-center" }, "Center", -1), Jh = /* @__PURE__ */ C("option", { value: "text-right" }, "Right", -1), Gh = /* @__PURE__ */ C("option", { value: "text-justify" }, "Justify", -1), Yh = [
  Wh,
  zh,
  Jh,
  Gh
], Qh = /* @__PURE__ */ C("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Container ", -1), Xh = /* @__PURE__ */ ye({
  __name: "ContainerConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (ge(), Be("details", null, [
      jh,
      C("div", Uh, [
        C("div", Bh, [
          Hh,
          Lt(C("input", {
            "onUpdate:modelValue": o[0] || (o[0] = (r) => t.modelValue.colSpan = r),
            type: "number",
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
            max: "4",
            min: "1"
          }, null, 512), [
            [Qn, t.modelValue.colSpan]
          ])
        ]),
        C("div", Kh, [
          qh,
          Lt(C("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (r) => t.modelValue.textAlign = r),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, Yh, 512), [
            [fs, t.modelValue.textAlign]
          ])
        ]),
        Qh
      ])
    ]));
  }
});
function Zh() {
  return sc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function sc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const em = typeof Proxy == "function", tm = "devtools-plugin:setup", nm = "plugin:settings:set";
let bn, gs;
function om() {
  var e;
  return bn !== void 0 || (typeof window < "u" && window.performance ? (bn = !0, gs = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (bn = !0, gs = global.perf_hooks.performance) : bn = !1), bn;
}
function rm() {
  return om() ? gs.now() : Date.now();
}
class sm {
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
        return rm();
      }
    }, n && n.on(nm, (i, l) => {
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
function im(e, t) {
  const n = e, o = sc(), r = Zh(), s = em && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(tm, e, t);
  else {
    const i = s ? new sm(n, r) : null;
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
const Nt = typeof window < "u";
function lm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ie = Object.assign;
function Lr(e, t) {
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
const am = /\/$/, cm = (e) => e.replace(am, "");
function Mr(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return l < a && l >= 0 && (a = -1), a > -1 && (o = t.slice(0, a), s = t.slice(a + 1, l > -1 ? l : t.length), r = e(s)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = dm(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: i
  };
}
function um(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function rl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function sl(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && Wt(t.matched[o], n.matched[r]) && ic(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Wt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ic(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!fm(e[n], t[n]))
      return !1;
  return !0;
}
function fm(e, t) {
  return Ye(e) ? il(e, t) : Ye(t) ? il(t, e) : e === t;
}
function il(e, t) {
  return Ye(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function dm(e, t) {
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
function pm(e) {
  if (!e)
    if (Nt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), cm(e);
}
const hm = /^[^#]+#/;
function mm(e, t) {
  return e.replace(hm, "#") + t;
}
function gm(e, t) {
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
function vm(e) {
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
    t = gm(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function ll(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const vs = /* @__PURE__ */ new Map();
function ym(e, t) {
  vs.set(e, t);
}
function Em(e) {
  const t = vs.get(e);
  return vs.delete(e), t;
}
let bm = () => location.protocol + "//" + location.host;
function lc(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let l = r.includes(e.slice(s)) ? e.slice(s).length : 1, a = r.slice(l);
    return a[0] !== "/" && (a = "/" + a), rl(a, "");
  }
  return rl(n, e) + o + r;
}
function _m(e, t, n, o) {
  let r = [], s = [], i = null;
  const l = ({ state: p }) => {
    const m = lc(e, location), g = n.value, v = t.value;
    let N = 0;
    if (p) {
      if (n.value = m, t.value = p, i && i === g) {
        i = null;
        return;
      }
      N = v ? p.position - v.position : 0;
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
  function c(p) {
    r.push(p);
    const m = () => {
      const g = r.indexOf(p);
      g > -1 && r.splice(g, 1);
    };
    return s.push(m), m;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState(ie({}, p.state, { scroll: wr() }), "");
  }
  function f() {
    for (const p of s)
      p();
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
function al(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? wr() : null
  };
}
function wm(e) {
  const { history: t, location: n } = window, o = {
    value: lc(e, n)
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
    const f = e.indexOf("#"), p = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : bm() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", p), r.value = c;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? oe("Error with push/replace State", m) : console.error(m), n[u ? "replace" : "assign"](p);
    }
  }
  function i(a, c) {
    const u = ie({}, t.state, al(
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
    const f = ie({}, al(o.value, a, null), { position: u.position + 1 }, c);
    s(a, f, !1), o.value = a;
  }
  return {
    location: o,
    state: r,
    push: l,
    replace: i
  };
}
function Nm(e) {
  e = pm(e);
  const t = wm(e), n = _m(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = ie({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: mm.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function Om(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ac(e) {
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
}, ys = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var cl;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(cl || (cl = {}));
const xm = {
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
    return `Redirected from "${e.fullPath}" to "${Dm(t)}" via a navigation guard.`;
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
function Pn(e, t) {
  return process.env.NODE_ENV !== "production" ? ie(new Error(xm[e](t)), {
    type: e,
    [ys]: !0
  }, t) : ie(new Error(), {
    type: e,
    [ys]: !0
  }, t);
}
function bt(e, t) {
  return e instanceof Error && ys in e && (t == null || !!(e.type & t));
}
const Sm = ["params", "query", "hash"];
function Dm(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Sm)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const ul = "[^/]+?", Cm = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Tm = /[.+*?^${}()[\]/\\]/g;
function Am(e, t) {
  const n = ie({}, Cm, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !c.length && (r += "/");
    for (let f = 0; f < c.length; f++) {
      const p = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        f || (r += "/"), r += p.value.replace(Tm, "\\$&"), m += 40;
      else if (p.type === 1) {
        const { value: g, repeatable: v, optional: N, regexp: O } = p;
        s.push({
          name: g,
          repeatable: v,
          optional: N
        });
        const A = O || ul;
        if (A !== ul) {
          m += 10;
          try {
            new RegExp(`(${A})`);
          } catch (F) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${A}): ` + F.message);
          }
        }
        let L = v ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        f || (L = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        N && c.length < 2 ? `(?:/${L})` : "/" + L), N && (L += "?"), r += L, m += 20, N && (m += -8), v && (m += -20), A === ".*" && (m += -50);
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
    for (let p = 1; p < u.length; p++) {
      const m = u[p] || "", g = s[p - 1];
      f[g.name] = m && g.repeatable ? m.split("/") : m;
    }
    return f;
  }
  function a(c) {
    let u = "", f = !1;
    for (const p of e) {
      (!f || !u.endsWith("/")) && (u += "/"), f = !1;
      for (const m of p)
        if (m.type === 0)
          u += m.value;
        else if (m.type === 1) {
          const { value: g, repeatable: v, optional: N } = m, O = g in c ? c[g] : "";
          if (Ye(O) && !v)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const A = Ye(O) ? O.join("/") : O;
          if (!A)
            if (N)
              p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
            else
              throw new Error(`Missing required param "${g}"`);
          u += A;
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
function Pm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Rm(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = Pm(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (fl(o))
      return 1;
    if (fl(r))
      return -1;
  }
  return r.length - o.length;
}
function fl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const $m = {
  type: 0,
  value: ""
}, Vm = /[a-zA-Z0-9_]/;
function km(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[$m]];
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
  function p() {
    c += a;
  }
  for (; l < e.length; ) {
    if (a = e[l++], a === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && f(), i()) : a === ":" ? (f(), n = 1) : p();
        break;
      case 4:
        p(), n = o;
        break;
      case 1:
        a === "(" ? n = 2 : Vm.test(a) ? p() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
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
function Fm(e, t, n) {
  const o = Am(km(e.path), n);
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
function Im(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = hl({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function s(u, f, p) {
    const m = !p, g = Lm(u);
    process.env.NODE_ENV !== "production" && Bm(g, f), g.aliasOf = p && p.record;
    const v = hl(t, u), N = [
      g
    ];
    if ("alias" in u) {
      const L = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const F of L)
        N.push(ie({}, g, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: p ? p.record.components : g.components,
          path: F,
          // we might be the child of an alias
          aliasOf: p ? p.record : g
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let O, A;
    for (const L of N) {
      const { path: F } = L;
      if (f && F[0] !== "/") {
        const W = f.record.path, ee = W[W.length - 1] === "/" ? "" : "/";
        L.path = f.record.path + (F && ee + F);
      }
      if (process.env.NODE_ENV !== "production" && L.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (O = Fm(L, f, v), process.env.NODE_ENV !== "production" && f && F[0] === "/" && Hm(O, f), p ? (p.alias.push(O), process.env.NODE_ENV !== "production" && Um(p, O)) : (A = A || O, A !== O && A.alias.push(O), m && u.name && !pl(O) && i(u.name)), g.children) {
        const W = g.children;
        for (let ee = 0; ee < W.length; ee++)
          s(W[ee], O, p && p.children[ee]);
      }
      p = p || O, (O.record.components && Object.keys(O.record.components).length || O.record.name || O.record.redirect) && a(O);
    }
    return A ? () => {
      i(A);
    } : Xn;
  }
  function i(u) {
    if (ac(u)) {
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
    for (; f < n.length && Rm(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !cc(u, n[f])); )
      f++;
    n.splice(f, 0, u), u.record.name && !pl(u) && o.set(u.record.name, u);
  }
  function c(u, f) {
    let p, m = {}, g, v;
    if ("name" in u && u.name) {
      if (p = o.get(u.name), !p)
        throw Pn(1, {
          location: u
        });
      if (process.env.NODE_ENV !== "production") {
        const A = Object.keys(u.params || {}).filter((L) => !p.keys.find((F) => F.name === L));
        A.length && oe(`Discarded invalid param(s) "${A.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      v = p.record.name, m = ie(
        // paramsFromLocation is a new object
        dl(
          f.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          p.keys.filter((A) => !A.optional).map((A) => A.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && dl(u.params, p.keys.map((A) => A.name))
      ), g = p.stringify(m);
    } else if ("path" in u)
      g = u.path, process.env.NODE_ENV !== "production" && !g.startsWith("/") && oe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), p = n.find((A) => A.re.test(g)), p && (m = p.parse(g), v = p.record.name);
    else {
      if (p = f.name ? o.get(f.name) : n.find((A) => A.re.test(f.path)), !p)
        throw Pn(1, {
          location: u,
          currentLocation: f
        });
      v = p.record.name, m = ie({}, f.params, u.params), g = p.stringify(m);
    }
    const N = [];
    let O = p;
    for (; O; )
      N.unshift(O.record), O = O.parent;
    return {
      name: v,
      path: g,
      params: m,
      matched: N,
      meta: jm(N)
    };
  }
  return e.forEach((u) => s(u)), { addRoute: s, resolve: c, removeRoute: i, getRoutes: l, getRecordMatcher: r };
}
function dl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Lm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Mm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Mm(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function pl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function jm(e) {
  return e.reduce((t, n) => ie(t, n.meta), {});
}
function hl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Es(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Um(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Es.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Es.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Bm(e, t) {
  t && t.record.name && !e.name && !e.path && oe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Hm(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Es.bind(null, n)))
      return oe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function cc(e, t) {
  return t.children.some((n) => n === e || cc(e, n));
}
const uc = /#/g, Km = /&/g, qm = /\//g, Wm = /=/g, zm = /\?/g, fc = /\+/g, Jm = /%5B/g, Gm = /%5D/g, dc = /%5E/g, Ym = /%60/g, pc = /%7B/g, Qm = /%7C/g, hc = /%7D/g, Xm = /%20/g;
function ni(e) {
  return encodeURI("" + e).replace(Qm, "|").replace(Jm, "[").replace(Gm, "]");
}
function Zm(e) {
  return ni(e).replace(pc, "{").replace(hc, "}").replace(dc, "^");
}
function bs(e) {
  return ni(e).replace(fc, "%2B").replace(Xm, "+").replace(uc, "%23").replace(Km, "%26").replace(Ym, "`").replace(pc, "{").replace(hc, "}").replace(dc, "^");
}
function eg(e) {
  return bs(e).replace(Wm, "%3D");
}
function tg(e) {
  return ni(e).replace(uc, "%23").replace(zm, "%3F");
}
function ng(e) {
  return e == null ? "" : tg(e).replace(qm, "%2F");
}
function fo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && oe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function og(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(fc, " "), i = s.indexOf("="), l = fo(i < 0 ? s : s.slice(0, i)), a = i < 0 ? null : fo(s.slice(i + 1));
    if (l in t) {
      let c = t[l];
      Ye(c) || (c = t[l] = [c]), c.push(a);
    } else
      t[l] = a;
  }
  return t;
}
function ml(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = eg(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ye(o) ? o.map((s) => s && bs(s)) : [o && bs(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function rg(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ye(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const sg = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), gl = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), oi = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ri = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), _s = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
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
function It(e, t, n, o, r) {
  const s = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((i, l) => {
    const a = (f) => {
      f === !1 ? l(Pn(4, {
        from: n,
        to: t
      })) : f instanceof Error ? l(f) : Om(f) ? l(Pn(2, {
        from: t,
        to: f
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === s && typeof f == "function" && s.push(f), i());
    }, c = e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? ig(a, t, n) : a);
    let u = Promise.resolve(c);
    if (e.length < 3 && (u = u.then(a)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const f = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof c == "object" && "then" in c)
        u = u.then((p) => a._called ? p : (oe(f), Promise.reject(new Error("Invalid navigation guard"))));
      else if (c !== void 0 && !a._called) {
        oe(f), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    u.catch((f) => l(f));
  });
}
function ig(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && oe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function jr(e, t, n, o) {
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
        if (lg(l)) {
          const c = (l.__vccOpts || l)[t];
          c && r.push(It(c, n, o, s, i));
        } else {
          let a = l();
          process.env.NODE_ENV !== "production" && !("catch" in a) && (oe(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), a = Promise.resolve(a)), r.push(() => a.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));
            const u = lm(c) ? c.default : c;
            s.components[i] = u;
            const p = (u.__vccOpts || u)[t];
            return p && It(p, n, o, s, i)();
          }));
        }
    }
  }
  return r;
}
function lg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function vl(e) {
  const t = we(oi), n = we(ri), o = J(() => t.resolve(ke(e.to))), r = J(() => {
    const { matched: a } = o.value, { length: c } = a, u = a[c - 1], f = n.matched;
    if (!u || !f.length)
      return -1;
    const p = f.findIndex(Wt.bind(null, u));
    if (p > -1)
      return p;
    const m = yl(a[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      yl(u) === m && // avoid comparing the child with its parent
      f[f.length - 1].path !== m ? f.findIndex(Wt.bind(null, a[c - 2])) : p
    );
  }), s = J(() => r.value > -1 && fg(n.params, o.value.params)), i = J(() => r.value > -1 && r.value === n.matched.length - 1 && ic(n.params, o.value.params));
  function l(a = {}) {
    return ug(a) ? t[ke(e.replace) ? "replace" : "push"](
      ke(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Xn) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Nt) {
    const a = Gs();
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
    href: J(() => o.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l
  };
}
const ag = /* @__PURE__ */ ye({
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
  useLink: vl,
  setup(e, { slots: t }) {
    const n = $n(vl(e)), { options: o } = we(oi), r = J(() => ({
      [El(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [El(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : Te("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), cg = ag;
function ug(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function fg(e, t) {
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
function yl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const El = (e, t, n) => e ?? t ?? n, dg = /* @__PURE__ */ ye({
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
    process.env.NODE_ENV !== "production" && hg();
    const o = we(_s), r = J(() => e.route || o.value), s = we(gl, 0), i = J(() => {
      let c = ke(s);
      const { matched: u } = r.value;
      let f;
      for (; (f = u[c]) && !f.components; )
        c++;
      return c;
    }), l = J(() => r.value.matched[i.value]);
    qe(gl, J(() => i.value + 1)), qe(sg, l), qe(_s, r);
    const a = Y();
    return gt(() => [a.value, l.value, e.name], ([c, u, f], [p, m, g]) => {
      u && (u.instances[f] = c, m && m !== u && c && c === p && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), c && u && (!m || !Wt(u, m) || !p) && (u.enterCallbacks[f] || []).forEach((v) => v(c));
    }, { flush: "post" }), () => {
      const c = r.value, u = e.name, f = l.value, p = f && f.components[u];
      if (!p)
        return bl(n.default, { Component: p, route: c });
      const m = f.props[u], g = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null, N = Te(p, ie({}, g, t, {
        onVnodeUnmounted: (O) => {
          O.component.isUnmounted && (f.instances[u] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && Nt && N.ref) {
        const O = {
          depth: i.value,
          name: f.name,
          path: f.path,
          meta: f.meta
        };
        (Ye(N.ref) ? N.ref.map((L) => L.i) : [N.ref.i]).forEach((L) => {
          L.__vrv_devtools = O;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        bl(n.default, { Component: N, route: c }) || N
      );
    };
  }
});
function bl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const pg = dg;
function hg() {
  const e = Gs(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
    matched: e.matched.map((o) => Ng(o, ["instances", "children", "aliasOf"]))
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
function Ao(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let mg = 0;
function gg(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = mg++;
  im({
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
        const p = f.__vrv_devtools;
        u.tags.push({
          label: (p.name ? `${p.name.toString()}: ` : "") + p.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: mc
        });
      }
      Ye(f.__vrl_devtools) && (f.__devtoolsApi = r, f.__vrl_devtools.forEach((p) => {
        let m = yc, g = "";
        p.isExactActive ? (m = vc, g = "This is exactly active") : p.isActive && (m = gc, g = "This link is active"), u.tags.push({
          label: p.route.path,
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
      const p = {
        guard: Ao("beforeEach"),
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
          data: p,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, f, p) => {
      const m = {
        guard: Ao("afterEach")
      };
      p ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: p ? p.message : "",
          tooltip: "Navigation Failure",
          value: p
        }
      }, m.status = Ao("❌")) : m.status = Ao("✅"), m.from = jn(f, "Current Location during this navigation"), m.to = jn(u, "Target location"), r.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: r.now(),
          data: m,
          logType: p ? "warning" : "default",
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
      let f = n.getRoutes().filter((p) => !p.parent);
      f.forEach(_c), u.filter && (f = f.filter((p) => // save matches state based on the payload
      ws(p, u.filter.toLowerCase()))), f.forEach((p) => bc(p, t.currentRoute.value)), u.rootNodes = f.map(Ec);
    }
    let c;
    r.on.getInspectorTree((u) => {
      c = u, u.app === e && u.inspectorId === l && a();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === l) {
        const p = n.getRoutes().find((m) => m.record.__vd_id === u.nodeId);
        p && (u.state = {
          options: yg(p)
        });
      }
    }), r.sendInspectorTree(l), r.sendInspectorState(l);
  });
}
function vg(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function yg(e) {
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
        display: e.keys.map((o) => `${o.name}${vg(o)}`).join(" "),
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
const mc = 15485081, gc = 2450411, vc = 8702998, Eg = 2282478, yc = 16486972, bg = 6710886;
function Ec(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Eg
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: yc
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: mc
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: vc
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: gc
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: bg
  });
  let o = n.__vd_id;
  return o == null && (o = String(_g++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ec)
  };
}
let _g = 0;
const wg = /^\/(.*)\/([a-z]*)$/;
function bc(e, t) {
  const n = t.matched.length && Wt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Wt(o, e.record))), e.children.forEach((o) => bc(o, t));
}
function _c(e) {
  e.__vd_match = !1, e.children.forEach(_c);
}
function ws(e, t) {
  const n = String(e.re).match(wg);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ws(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = fo(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ws(i, t));
}
function Ng(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Og(e) {
  const t = Im(e.routes, e), n = e.parseQuery || og, o = e.stringifyQuery || ml, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Mn(), i = Mn(), l = Mn(), a = zl($t);
  let c = $t;
  Nt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Lr.bind(null, (E) => "" + E), f = Lr.bind(null, ng), p = (
    // @ts-expect-error: intentionally avoid the type check
    Lr.bind(null, fo)
  );
  function m(E, $) {
    let V, I;
    return ac(E) ? (V = t.getRecordMatcher(E), I = $) : I = E, t.addRoute(I, V);
  }
  function g(E) {
    const $ = t.getRecordMatcher(E);
    $ ? t.removeRoute($) : process.env.NODE_ENV !== "production" && oe(`Cannot remove non-existent route "${String(E)}"`);
  }
  function v() {
    return t.getRoutes().map((E) => E.record);
  }
  function N(E) {
    return !!t.getRecordMatcher(E);
  }
  function O(E, $) {
    if ($ = ie({}, $ || a.value), typeof E == "string") {
      const h = Mr(n, E, $.path), y = t.resolve({ path: h.path }, $), w = r.createHref(h.fullPath);
      return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? oe(`Location "${E}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : y.matched.length || oe(`No match found for location with path "${E}"`)), ie(h, y, {
        params: p(y.params),
        hash: fo(h.hash),
        redirectedFrom: void 0,
        href: w
      });
    }
    let V;
    if ("path" in E)
      process.env.NODE_ENV !== "production" && "params" in E && !("name" in E) && // @ts-expect-error: the type is never
      Object.keys(E.params).length && oe(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), V = ie({}, E, {
        path: Mr(n, E.path, $.path).path
      });
    else {
      const h = ie({}, E.params);
      for (const y in h)
        h[y] == null && delete h[y];
      V = ie({}, E, {
        params: f(h)
      }), $.params = f($.params);
    }
    const I = t.resolve(V, $), ne = E.hash || "";
    process.env.NODE_ENV !== "production" && ne && !ne.startsWith("#") && oe(`A \`hash\` should always start with the character "#". Replace "${ne}" with "#${ne}".`), I.params = u(p(I.params));
    const Ee = um(o, ie({}, E, {
      hash: Zm(ne),
      path: I.path
    })), d = r.createHref(Ee);
    return process.env.NODE_ENV !== "production" && (d.startsWith("//") ? oe(`Location "${E}" resolved to "${d}". A resolved location cannot start with multiple slashes.`) : I.matched.length || oe(`No match found for location with path "${"path" in E ? E.path : E}"`)), ie({
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
        o === ml ? rg(E.query) : E.query || {}
      )
    }, I, {
      redirectedFrom: void 0,
      href: d
    });
  }
  function A(E) {
    return typeof E == "string" ? Mr(n, E, a.value.path) : ie({}, E);
  }
  function L(E, $) {
    if (c !== E)
      return Pn(8, {
        from: $,
        to: E
      });
  }
  function F(E) {
    return se(E);
  }
  function W(E) {
    return F(ie(A(E), { replace: !0 }));
  }
  function ee(E) {
    const $ = E.matched[E.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: V } = $;
      let I = typeof V == "function" ? V(E) : V;
      if (typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = A(I) : (
        // force empty params
        { path: I }
      ), I.params = {}), process.env.NODE_ENV !== "production" && !("path" in I) && !("name" in I))
        throw oe(`Invalid redirect found:
${JSON.stringify(I, null, 2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ie({
        query: E.query,
        hash: E.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in I ? {} : E.params
      }, I);
    }
  }
  function se(E, $) {
    const V = c = O(E), I = a.value, ne = E.state, Ee = E.force, d = E.replace === !0, h = ee(V);
    if (h)
      return se(
        ie(A(h), {
          state: typeof h == "object" ? ie({}, ne, h.state) : ne,
          force: Ee,
          replace: d
        }),
        // keep original redirectedFrom if it exists
        $ || V
      );
    const y = V;
    y.redirectedFrom = $;
    let w;
    return !Ee && sl(o, I, V) && (w = Pn(16, { to: y, from: I }), ze(
      I,
      I,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (w ? Promise.resolve(w) : te(y, I)).catch((b) => bt(b) ? (
      // navigation redirects still mark the router as ready
      bt(
        b,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? b : Ce(b)
    ) : (
      // reject any unknown error
      U(b, y, I)
    )).then((b) => {
      if (b) {
        if (bt(
          b,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          sl(o, O(b.to), y) && // and we have done it a couple of times
          $ && ($._count = $._count ? (
            // @ts-expect-error
            $._count + 1
          ) : 1) > 30 ? (oe(`Detected a possibly infinite redirection in a navigation guard when going from "${I.fullPath}" to "${y.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : se(
            // keep options
            ie({
              // preserve an existing replacement but allow the redirect to override it
              replace: d
            }, A(b.to), {
              state: typeof b.to == "object" ? ie({}, ne, b.to.state) : ne,
              force: Ee
            }),
            // preserve the original redirectedFrom if any
            $ || y
          );
      } else
        b = de(y, I, !0, d, ne);
      return ce(y, I, b), b;
    });
  }
  function K(E, $) {
    const V = L(E, $);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function Q(E) {
    const $ = at.values().next().value;
    return $ && typeof $.runWithContext == "function" ? $.runWithContext(E) : E();
  }
  function te(E, $) {
    let V;
    const [I, ne, Ee] = xg(E, $);
    V = jr(I.reverse(), "beforeRouteLeave", E, $);
    for (const h of I)
      h.leaveGuards.forEach((y) => {
        V.push(It(y, E, $));
      });
    const d = K.bind(null, E, $);
    return V.push(d), At(V).then(() => {
      V = [];
      for (const h of s.list())
        V.push(It(h, E, $));
      return V.push(d), At(V);
    }).then(() => {
      V = jr(ne, "beforeRouteUpdate", E, $);
      for (const h of ne)
        h.updateGuards.forEach((y) => {
          V.push(It(y, E, $));
        });
      return V.push(d), At(V);
    }).then(() => {
      V = [];
      for (const h of E.matched)
        if (h.beforeEnter && !$.matched.includes(h))
          if (Ye(h.beforeEnter))
            for (const y of h.beforeEnter)
              V.push(It(y, E, $));
          else
            V.push(It(h.beforeEnter, E, $));
      return V.push(d), At(V);
    }).then(() => (E.matched.forEach((h) => h.enterCallbacks = {}), V = jr(Ee, "beforeRouteEnter", E, $), V.push(d), At(V))).then(() => {
      V = [];
      for (const h of i.list())
        V.push(It(h, E, $));
      return V.push(d), At(V);
    }).catch((h) => bt(
      h,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? h : Promise.reject(h));
  }
  function ce(E, $, V) {
    for (const I of l.list())
      Q(() => I(E, $, V));
  }
  function de(E, $, V, I, ne) {
    const Ee = L(E, $);
    if (Ee)
      return Ee;
    const d = $ === $t, h = Nt ? history.state : {};
    V && (I || d ? r.replace(E.fullPath, ie({
      scroll: d && h && h.scroll
    }, ne)) : r.push(E.fullPath, ne)), a.value = E, ze(E, $, V, d), Ce();
  }
  let ae;
  function Xe() {
    ae || (ae = r.listen((E, $, V) => {
      if (!wo.listening)
        return;
      const I = O(E), ne = ee(I);
      if (ne) {
        se(ie(ne, { replace: !0 }), I).catch(Xn);
        return;
      }
      c = I;
      const Ee = a.value;
      Nt && ym(ll(Ee.fullPath, V.delta), wr()), te(I, Ee).catch((d) => bt(
        d,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? d : bt(
        d,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (se(
        d.to,
        I
        // avoid an uncaught rejection, let push call triggerError
      ).then((h) => {
        bt(
          h,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !V.delta && V.type === uo.pop && r.go(-1, !1);
      }).catch(Xn), Promise.reject()) : (V.delta && r.go(-V.delta, !1), U(d, I, Ee))).then((d) => {
        d = d || de(
          // after navigation, all matched components are resolved
          I,
          Ee,
          !1
        ), d && (V.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !bt(
          d,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-V.delta, !1) : V.type === uo.pop && bt(
          d,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), ce(I, Ee, d);
      }).catch(Xn);
    }));
  }
  let be = Mn(), he = Mn(), k;
  function U(E, $, V) {
    Ce(E);
    const I = he.list();
    return I.length ? I.forEach((ne) => ne(E, $, V)) : (process.env.NODE_ENV !== "production" && oe("uncaught error during route navigation:"), console.error(E)), Promise.reject(E);
  }
  function me() {
    return k && a.value !== $t ? Promise.resolve() : new Promise((E, $) => {
      be.add([E, $]);
    });
  }
  function Ce(E) {
    return k || (k = !E, Xe(), be.list().forEach(([$, V]) => E ? V(E) : $()), be.reset()), E;
  }
  function ze(E, $, V, I) {
    const { scrollBehavior: ne } = e;
    if (!Nt || !ne)
      return Promise.resolve();
    const Ee = !V && Em(ll(E.fullPath, 0)) || (I || !V) && history.state && history.state.scroll || null;
    return Us().then(() => ne(E, $, Ee)).then((d) => d && vm(d)).catch((d) => U(d, E, $));
  }
  const Oe = (E) => r.go(E);
  let He;
  const at = /* @__PURE__ */ new Set(), wo = {
    currentRoute: a,
    listening: !0,
    addRoute: m,
    removeRoute: g,
    hasRoute: N,
    getRoutes: v,
    resolve: O,
    options: e,
    push: F,
    replace: W,
    go: Oe,
    back: () => Oe(-1),
    forward: () => Oe(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: he.add,
    isReady: me,
    install(E) {
      const $ = this;
      E.component("RouterLink", cg), E.component("RouterView", pg), E.config.globalProperties.$router = $, Object.defineProperty(E.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ke(a)
      }), Nt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !He && a.value === $t && (He = !0, F(r.location).catch((ne) => {
        process.env.NODE_ENV !== "production" && oe("Unexpected error when starting the router:", ne);
      }));
      const V = {};
      for (const ne in $t)
        V[ne] = J(() => a.value[ne]);
      E.provide(oi, $), E.provide(ri, $n(V)), E.provide(_s, a);
      const I = E.unmount;
      at.add(E), E.unmount = function() {
        at.delete(E), at.size < 1 && (c = $t, ae && ae(), ae = null, a.value = $t, He = !1, k = !1), I();
      }, process.env.NODE_ENV !== "production" && Nt && gg(E, $, t);
    }
  };
  function At(E) {
    return E.reduce(($, V) => $.then(() => Q(V)), Promise.resolve());
  }
  return wo;
}
function xg(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((c) => Wt(c, l)) ? o.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((c) => Wt(c, a)) || r.push(a));
  }
  return [n, o, r];
}
function Sg() {
  return we(ri);
}
const Dg = { class: "grid grid-cols-5 min-h-screen" }, Cg = { class: "col-span-1 bg-gray-100 flex flex-col" }, Tg = { key: 0 }, Ag = /* @__PURE__ */ C("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, "Components", -1), Pg = { class: "flex flex-col gap-3 p-3 bg-white" }, Rg = ["onDragstart"], $g = { class: "min-w-0 flex-1" }, Vg = {
  href: "#",
  class: "focus:outline-none"
}, kg = /* @__PURE__ */ C("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Fg = { class: "text-sm font-medium text-gray-900" }, Ig = { class: "truncate text-sm text-gray-500" }, Lg = { class: "col-span-4 grid grid-cols-4 gap-4 p-5 content-start" }, Mg = /* @__PURE__ */ ye({
  __name: "PageBuilder",
  setup(e) {
    const t = Sg(), n = Y(null), o = Y([]), r = Y(null), s = Y([
      {
        id: 1,
        type: "h1",
        name: "Heading",
        description: "Use this element to create a heading",
        classes: "text-2xl font-bold",
        size: "4xl",
        weight: "bold",
        content: "Some heading"
      },
      {
        id: 2,
        type: "p",
        name: "Paragraph",
        description: "Use this element to create a paragraph",
        size: "md",
        weight: "normal",
        content: "Some paragraph"
      },
      {
        id: 3,
        type: "img",
        name: "Image Element",
        description: "Use this to create an image element",
        src: "https://placehold.it/350x150",
        alt: "Placeholder image"
      }
    ]);
    window.addEventListener("keypress", (v) => {
      v.ctrlKey && v.key === "s" && (v.preventDefault(), g());
    });
    const i = Y(null), l = () => {
      const N = JSON.parse(JSON.stringify({
        id: 0,
        classes: "border border-gray-300",
        colSpan: 4,
        textAlign: "text-left",
        elements: []
      }));
      N.id = o.value.length, o.value.push(N);
    }, a = (v, N) => {
      v.dataTransfer.dropEffect = "move", v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("item", JSON.stringify(N));
    }, c = (v, N) => {
      v.preventDefault();
      const O = JSON.parse(v.dataTransfer.getData("item"));
      N.elements.push({ ...O });
    }, u = (v) => {
      n.value = v;
    }, f = (v) => {
      r.value = v;
    }, p = () => {
      localStorage.removeItem("page"), o.value = [];
    }, m = (v) => {
      mn.get(`/page-builder/data/pages/${v}`).then(({ data: N }) => {
        i.value = N.page, o.value = JSON.parse(N.page.content) ?? [];
      });
    }, g = () => {
      mn.patch(`/page-builder/data/pages/${i.value.slug}`, {
        title: i.value.title,
        slug: i.value.slug,
        content: JSON.stringify(o.value)
      });
    };
    return $e(() => {
      m(t.params.slug);
    }), (v, N) => (ge(), Be("div", Dg, [
      C("div", Cg, [
        C("div", { class: "flex flex-col" }, [
          C("button", {
            onClick: p,
            class: "bg-red-600 hover:bg-red-500 text-white p-2 col-span-4"
          }, " Clear All "),
          C("button", {
            onClick: g,
            class: "bg-green-600 hover:bg-green-500 text-white p-2 col-span-4"
          }, " Save Page "),
          C("button", {
            onClick: l,
            class: "bg-amber-600 hover:bg-amber-500 text-white p-2 col-span-4"
          }, " Add Container ")
        ]),
        o.value.length ? (ge(), Be("details", Tg, [
          Ag,
          C("div", Pg, [
            (ge(!0), Be(Se, null, Jo(s.value, (O) => (ge(), Be("div", {
              class: "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400",
              draggable: "true",
              key: O.id,
              onDragstart: (A) => a(A, O)
            }, [
              C("div", $g, [
                C("a", Vg, [
                  kg,
                  C("p", Fg, Vt(O.name), 1),
                  C("p", Ig, Vt(O.description), 1)
                ])
              ])
            ], 40, Rg))), 128))
          ])
        ])) : Ar("", !0),
        n.value ? (ge(), xt(Xh, {
          key: 1,
          modelValue: n.value,
          "onUpdate:modelValue": N[0] || (N[0] = (O) => n.value = O)
        }, null, 8, ["modelValue"])) : Ar("", !0),
        r.value ? (ge(), xt(Mh, {
          key: 2,
          modelValue: r.value,
          "onUpdate:modelValue": N[1] || (N[1] = (O) => r.value = O)
        }, null, 8, ["modelValue"])) : Ar("", !0)
      ]),
      C("div", Lg, [
        (ge(!0), Be(Se, null, Jo(o.value, (O) => (ge(), xt(tp, {
          onClick: (A) => u(O),
          onDragover: N[2] || (N[2] = Wi(() => {
          }, ["prevent"])),
          onDragenter: N[3] || (N[3] = Wi(() => {
          }, ["prevent"])),
          onDrop: (A) => c(A, O),
          key: O.id,
          container: O,
          onSelectElement: f
        }, null, 8, ["onClick", "onDrop", "container"]))), 128))
      ])
    ]));
  }
});
function yt(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return typeof r == "function" ? r(...n) : r;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, yt), o;
}
var er = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(er || {}), Ut = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ut || {});
function Qe({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...r }) {
  var s;
  let i = Nc(o, n), l = Object.assign(r, { props: i });
  if (e || t & 2 && i.static)
    return Ur(l);
  if (t & 1) {
    let a = (s = i.unmount) == null || s ? 0 : 1;
    return yt(a, { [0]() {
      return null;
    }, [1]() {
      return Ur({ ...r, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ur(l);
}
function Ur({ props: e, attrs: t, slots: n, slot: o, name: r }) {
  var s, i;
  let { as: l, ...a } = Oc(e, ["unmount", "static"]), c = (s = n.default) == null ? void 0 : s.call(n, o), u = {};
  if (o) {
    let f = !1, p = [];
    for (let [m, g] of Object.entries(o))
      typeof g == "boolean" && (f = !0), g === !0 && p.push(m);
    f && (u["data-headlessui-state"] = p.join(" "));
  }
  if (l === "template") {
    if (c = wc(c ?? []), Object.keys(a).length > 0 || Object.keys(t).length > 0) {
      let [f, ...p] = c ?? [];
      if (!jg(f) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(a).concat(Object.keys(t)).map((v) => v.trim()).filter((v, N, O) => O.indexOf(v) === N).sort((v, N) => v.localeCompare(N)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let m = Nc((i = f.props) != null ? i : {}, a), g = lt(f, m);
      for (let v in m)
        v.startsWith("on") && (g.props || (g.props = {}), g.props[v] = m[v]);
      return g;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return Te(l, Object.assign({}, a, u), { default: () => c });
}
function wc(e) {
  return e.flatMap((t) => t.type === Se ? wc(t.children) : [t]);
}
function Nc(...e) {
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
function Oc(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function jg(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ug = 0;
function Bg() {
  return ++Ug;
}
function yn() {
  return Bg();
}
var xc = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(xc || {});
function Re(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Sc = Symbol("Context");
var Je = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Je || {});
function Hg() {
  return si() !== null;
}
function si() {
  return we(Sc, null);
}
function Kg(e) {
  qe(Sc, e);
}
var qg = Object.defineProperty, Wg = (e, t, n) => t in e ? qg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _l = (e, t, n) => (Wg(e, typeof t != "symbol" ? t + "" : t, n), n);
class zg {
  constructor() {
    _l(this, "current", this.detect()), _l(this, "currentId", 0);
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
let bo = new zg();
function kn(e) {
  if (bo.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = Re(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Ns = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var jt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(jt || {}), Dc = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Dc || {}), Jg = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Jg || {});
function Gg(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ns)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Cc = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Cc || {});
function Yg(e, t = 0) {
  var n;
  return e === ((n = kn(e)) == null ? void 0 : n.body) ? !1 : yt(t, { [0]() {
    return e.matches(Ns);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(Ns))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var Qg = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Qg || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Xg = ["textarea", "input"].join(",");
function Zg(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Xg)) != null ? n : !1;
}
function ev(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let r = t(n), s = t(o);
    if (r === null || s === null)
      return 0;
    let i = r.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Uo(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  var s;
  let i = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, l = Array.isArray(e) ? n ? ev(e) : e : Gg(e);
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
  })(), u = t & 32 ? { preventScroll: !0 } : {}, f = 0, p = l.length, m;
  do {
    if (f >= p || f + p <= 0)
      return 0;
    let g = c + f;
    if (t & 16)
      g = (g + p) % p;
    else {
      if (g < 0)
        return 3;
      if (g >= p)
        return 1;
    }
    m = l[g], m == null || m.focus(u), f += a;
  } while (m !== i.activeElement);
  return t & 6 && Zg(m) && m.select(), 2;
}
function wl(e, t, n) {
  bo.isServer || nt((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function Tc(e, t, n) {
  bo.isServer || nt((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
function tv(e, t, n = J(() => !0)) {
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
      let u = c instanceof HTMLElement ? c : Re(c);
      if (u != null && u.contains(l) || s.composed && s.composedPath().includes(u))
        return;
    }
    return !Yg(l, Cc.Loose) && l.tabIndex !== -1 && s.preventDefault(), t(s, l);
  }
  let r = Y(null);
  wl("mousedown", (s) => {
    var i, l;
    n.value && (r.value = ((l = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), wl("click", (s) => {
    r.value && (o(s, () => r.value), r.value = null);
  }, !0), Tc("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var tr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(tr || {});
let Os = ye({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...r } = e, s = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return Qe({ ourProps: s, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function nv() {
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
function ov() {
  let e = Y(0);
  return Tc("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ac(e, t, n, o) {
  bo.isServer || nt((r) => {
    e = e ?? window, e.addEventListener(t, n, o), r(() => e.removeEventListener(t, n, o));
  });
}
function Pc(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function rv(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Rc(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let o = Re(n);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var $c = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))($c || {});
let Un = Object.assign(ye({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: Y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = Y(null);
  o({ el: r, $el: r });
  let s = J(() => kn(r)), i = Y(!1);
  $e(() => i.value = !0), Ge(() => i.value = !1), iv({ ownerDocument: s }, J(() => i.value && Boolean(e.features & 16)));
  let l = lv({ ownerDocument: s, container: r, initialFocus: J(() => e.initialFocus) }, J(() => i.value && Boolean(e.features & 2)));
  av({ ownerDocument: s, container: r, containers: e.containers, previousActiveElement: l }, J(() => i.value && Boolean(e.features & 8)));
  let a = ov();
  function c(m) {
    let g = Re(r);
    g && ((v) => v())(() => {
      yt(a.value, { [qn.Forwards]: () => {
        Uo(g, jt.First, { skipElements: [m.relatedTarget] });
      }, [qn.Backwards]: () => {
        Uo(g, jt.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = Y(!1);
  function f(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function p(m) {
    if (!i.value)
      return;
    let g = Rc(e.containers);
    Re(r) instanceof HTMLElement && g.add(Re(r));
    let v = m.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (Vc(g, v) || (u.value ? Uo(Re(r), yt(a.value, { [qn.Forwards]: () => jt.Next, [qn.Backwards]: () => jt.Previous }) | jt.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && dn(m.target)));
  }
  return () => {
    let m = {}, g = { ref: r, onKeydown: f, onFocusout: p }, { features: v, initialFocus: N, containers: O, ...A } = e;
    return Te(Se, [Boolean(v & 4) && Te(Os, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tr.Focusable }), Qe({ ourProps: g, theirProps: { ...t, ...A }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), Boolean(v & 4) && Te(Os, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tr.Focusable })]);
  };
} }), { features: $c }), nn = [];
rv(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && nn[0] !== t.target && (nn.unshift(t.target), nn = nn.filter((n) => n != null && n.isConnected), nn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function sv(e) {
  let t = Y(nn.slice());
  return gt([e], ([n], [o]) => {
    o === !0 && n === !1 ? Pc(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = nn.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function iv({ ownerDocument: e }, t) {
  let n = sv(t);
  $e(() => {
    nt(() => {
      var o, r;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && dn(n());
    }, { flush: "post" });
  }), Ge(() => {
    t.value && dn(n());
  });
}
function lv({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let r = Y(null), s = Y(!1);
  return $e(() => s.value = !0), Ge(() => s.value = !1), $e(() => {
    gt([t, n, o], (i, l) => {
      if (i.every((c, u) => (l == null ? void 0 : l[u]) === c) || !o.value)
        return;
      let a = Re(t);
      a && Pc(() => {
        var c, u;
        if (!s.value)
          return;
        let f = Re(n), p = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === p) {
            r.value = p;
            return;
          }
        } else if (a.contains(p)) {
          r.value = p;
          return;
        }
        f ? dn(f) : Uo(a, jt.First | jt.NoScroll) === Dc.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function av({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, r) {
  var s;
  Ac((s = e.value) == null ? void 0 : s.defaultView, "focus", (i) => {
    if (!r.value)
      return;
    let l = Rc(n);
    Re(t) instanceof HTMLElement && l.add(Re(t));
    let a = o.value;
    if (!a)
      return;
    let c = i.target;
    c && c instanceof HTMLElement ? Vc(l, c) ? (o.value = c, dn(c)) : (i.preventDefault(), i.stopPropagation(), dn(a)) : dn(o.value);
  }, !0);
}
function Vc(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Br = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map();
function Nl(e, t = Y(!0)) {
  nt((n) => {
    var o;
    if (!t.value)
      return;
    let r = Re(e);
    if (!r)
      return;
    n(function() {
      var i;
      if (!r)
        return;
      let l = (i = Bn.get(r)) != null ? i : 1;
      if (l === 1 ? Bn.delete(r) : Bn.set(r, l - 1), l !== 1)
        return;
      let a = Br.get(r);
      a && (a["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", a["aria-hidden"]), r.inert = a.inert, Br.delete(r));
    });
    let s = (o = Bn.get(r)) != null ? o : 0;
    Bn.set(r, s + 1), s === 0 && (Br.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
let kc = Symbol("ForcePortalRootContext");
function cv() {
  return we(kc, !1);
}
let xs = ye({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return qe(kc, e.force), () => {
    let { force: o, ...r } = e;
    return Qe({ theirProps: r, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function uv(e) {
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
let Fc = ye({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = Y(null), r = J(() => kn(o)), s = cv(), i = we(Ic, null), l = Y(s === !0 || i == null ? uv(o.value) : i.resolveTarget());
  nt(() => {
    s || i != null && (l.value = i.resolveTarget());
  });
  let a = we(Ss, null);
  return $e(() => {
    let c = Re(o);
    c && a && Ge(a.register(c));
  }), Ge(() => {
    var c, u;
    let f = (c = r.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    f && l.value === f && l.value.children.length <= 0 && ((u = l.value.parentElement) == null || u.removeChild(l.value));
  }), () => {
    if (l.value === null)
      return null;
    let c = { ref: o, "data-headlessui-portal": "" };
    return Te(rd, { to: l.value }, Qe({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Ss = Symbol("PortalParentContext");
function fv() {
  let e = we(Ss, null), t = Y([]);
  function n(s) {
    return t.value.push(s), e && e.register(s), () => o(s);
  }
  function o(s) {
    let i = t.value.indexOf(s);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(s);
  }
  let r = { register: n, unregister: o, portals: t };
  return [t, ye({ name: "PortalWrapper", setup(s, { slots: i }) {
    return qe(Ss, r), () => {
      var l;
      return (l = i.default) == null ? void 0 : l.call(i);
    };
  } })];
}
let Ic = Symbol("PortalGroupContext"), dv = ye({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = $n({ resolveTarget() {
    return e.target;
  } });
  return qe(Ic, o), () => {
    let { target: r, ...s } = e;
    return Qe({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Lc = Symbol("StackContext");
var Ds = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ds || {});
function pv() {
  return we(Lc, () => {
  });
}
function hv({ type: e, enabled: t, element: n, onUpdate: o }) {
  let r = pv();
  function s(...i) {
    o == null || o(...i), r(...i);
  }
  $e(() => {
    gt(t, (i, l) => {
      i ? s(0, e, n) : l === !0 && s(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Ge(() => {
    t.value && s(1, e, n);
  }), qe(Lc, s);
}
let Mc = Symbol("DescriptionContext");
function mv() {
  let e = we(Mc, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function gv({ slot: e = Y({}), name: t = "Description", props: n = {} } = {}) {
  let o = Y([]);
  function r(s) {
    return o.value.push(s), () => {
      let i = o.value.indexOf(s);
      i !== -1 && o.value.splice(i, 1);
    };
  }
  return qe(Mc, { register: r, slot: e, name: t, props: n }), J(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let hy = ye({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${yn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = mv();
  return $e(() => Ge(o.register(e.id))), () => {
    let { name: r = "Description", slot: s = Y({}), props: i = {} } = o, { id: l, ...a } = e, c = { ...Object.entries(i).reduce((u, [f, p]) => Object.assign(u, { [f]: ke(p) }), {}), id: l };
    return Qe({ ourProps: c, theirProps: a, slot: s.value, attrs: t, slots: n, name: r });
  };
} });
function vv(e) {
  let t = zl(e.getSnapshot());
  return Ge(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function yv(e, t) {
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
function Ev() {
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
function bv() {
  if (!nv())
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
function _v() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function wv(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let rn = yv(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Nr(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let o = { doc: e, d: t, meta: wv(n) }, r = [bv(), Ev(), _v()];
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
function Nv(e, t, n) {
  let o = vv(rn), r = J(() => {
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
function Ov({ defaultContainers: e = [], portals: t } = {}) {
  let n = Y(null), o = kn(n);
  function r() {
    var s;
    let i = [];
    for (let l of e)
      l !== null && (l instanceof HTMLElement ? i.push(l) : "value" in l && l.value instanceof HTMLElement && i.push(l.value));
    if (t != null && t.value)
      for (let l of t.value)
        i.push(l);
    for (let l of (s = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? s : [])
      l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains(Re(n)) || i.some((a) => l.contains(a)) || i.push(l));
    return i;
  }
  return { resolveContainers: r, contains(s) {
    return r().some((i) => i.contains(s));
  }, mainTreeNodeRef: n, MainTreeNode() {
    return Te(Os, { features: tr.Hidden, ref: n });
  } };
}
var xv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xv || {});
let Cs = Symbol("DialogContext");
function _o(e) {
  let t = we(Cs, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, _o), n;
  }
  return t;
}
let Po = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Sv = ye({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Po }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${yn()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
  var s;
  let i = Y(!1);
  $e(() => {
    i.value = !0;
  });
  let l = Y(0), a = si(), c = J(() => e.open === Po && a !== null ? (a.value & Je.Open) === Je.Open : e.open), u = Y(null), f = J(() => kn(u));
  if (r({ el: u, $el: u }), !(e.open !== Po || a !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Po ? void 0 : e.open}`);
  let p = J(() => i.value && c.value ? 0 : 1), m = J(() => p.value === 0), g = J(() => l.value > 1), v = we(Cs, null) !== null, [N, O] = fv(), { resolveContainers: A, mainTreeNodeRef: L, MainTreeNode: F } = Ov({ portals: N, defaultContainers: [J(() => {
    var k;
    return (k = ae.panelRef.value) != null ? k : u.value;
  })] }), W = J(() => g.value ? "parent" : "leaf"), ee = J(() => a !== null ? (a.value & Je.Closing) === Je.Closing : !1), se = J(() => v || ee.value ? !1 : m.value), K = J(() => {
    var k, U, me;
    return (me = Array.from((U = (k = f.value) == null ? void 0 : k.querySelectorAll("body > *")) != null ? U : []).find((Ce) => Ce.id === "headlessui-portal-root" ? !1 : Ce.contains(Re(L)) && Ce instanceof HTMLElement)) != null ? me : null;
  });
  Nl(K, se);
  let Q = J(() => g.value ? !0 : m.value), te = J(() => {
    var k, U, me;
    return (me = Array.from((U = (k = f.value) == null ? void 0 : k.querySelectorAll("[data-headlessui-portal]")) != null ? U : []).find((Ce) => Ce.contains(Re(L)) && Ce instanceof HTMLElement)) != null ? me : null;
  });
  Nl(te, Q), hv({ type: "Dialog", enabled: J(() => p.value === 0), element: u, onUpdate: (k, U) => {
    if (U === "Dialog")
      return yt(k, { [Ds.Add]: () => l.value += 1, [Ds.Remove]: () => l.value -= 1 });
  } });
  let ce = gv({ name: "DialogDescription", slot: J(() => ({ open: c.value })) }), de = Y(null), ae = { titleId: de, panelRef: Y(null), dialogState: p, setTitleId(k) {
    de.value !== k && (de.value = k);
  }, close() {
    t("close", !1);
  } };
  qe(Cs, ae);
  let Xe = J(() => !(!m.value || g.value));
  tv(A, (k, U) => {
    ae.close(), Us(() => U == null ? void 0 : U.focus());
  }, Xe);
  let be = J(() => !(g.value || p.value !== 0));
  Ac((s = f.value) == null ? void 0 : s.defaultView, "keydown", (k) => {
    be.value && (k.defaultPrevented || k.key === xc.Escape && (k.preventDefault(), k.stopPropagation(), ae.close()));
  });
  let he = J(() => !(ee.value || p.value !== 0 || v));
  return Nv(f, he, (k) => {
    var U;
    return { containers: [...(U = k.containers) != null ? U : [], A] };
  }), nt((k) => {
    if (p.value !== 0)
      return;
    let U = Re(u);
    if (!U)
      return;
    let me = new ResizeObserver((Ce) => {
      for (let ze of Ce) {
        let Oe = ze.target.getBoundingClientRect();
        Oe.x === 0 && Oe.y === 0 && Oe.width === 0 && Oe.height === 0 && ae.close();
      }
    });
    me.observe(U), k(() => me.disconnect());
  }), () => {
    let { id: k, open: U, initialFocus: me, ...Ce } = e, ze = { ...n, ref: u, id: k, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": de.value, "aria-describedby": ce.value }, Oe = { open: p.value === 0 };
    return Te(xs, { force: !0 }, () => [Te(Fc, () => Te(dv, { target: u.value }, () => Te(xs, { force: !1 }, () => Te(Un, { initialFocus: me, containers: A, features: m.value ? yt(W.value, { parent: Un.features.RestoreFocus, leaf: Un.features.All & ~Un.features.FocusLock }) : Un.features.None }, () => Te(O, {}, () => Qe({ ourProps: ze, theirProps: { ...Ce, ...n }, slot: Oe, attrs: n, slots: o, visible: p.value === 0, features: er.RenderStrategy | er.Static, name: "Dialog" })))))), Te(F)]);
  };
} });
ye({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${yn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = _o("DialogOverlay");
  function r(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), o.close());
  }
  return () => {
    let { id: s, ...i } = e;
    return Qe({ ourProps: { id: s, "aria-hidden": !0, onClick: r }, theirProps: i, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
ye({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${yn()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = _o("DialogBackdrop"), s = Y(null);
  return o({ el: s, $el: s }), $e(() => {
    if (r.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...l } = e, a = { id: i, ref: s, "aria-hidden": !0 };
    return Te(xs, { force: !0 }, () => Te(Fc, () => Qe({ ourProps: a, theirProps: { ...t, ...l }, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let Dv = ye({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${yn()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = _o("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function s(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...l } = e, a = { id: i, ref: r.panelRef, onClick: s };
    return Qe({ ourProps: a, theirProps: l, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), Cv = ye({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${yn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = _o("DialogTitle");
  return $e(() => {
    o.setTitleId(e.id), Ge(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...s } = e;
    return Qe({ ourProps: { id: r }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
function Tv(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Hr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ro(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Ts = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ts || {});
function Av(e, t) {
  let n = Nr();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [s, i] = [o, r].map((l) => {
    let [a = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
    return a;
  });
  return s !== 0 ? n.setTimeout(() => t("finished"), s + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Ol(e, t, n, o, r, s) {
  let i = Nr(), l = s !== void 0 ? Tv(s) : () => {
  };
  return Ro(e, ...r), Hr(e, ...t, ...n), i.nextFrame(() => {
    Ro(e, ...n), Hr(e, ...o), i.add(Av(e, (a) => (Ro(e, ...o, ...t), Hr(e, ...r), l(a))));
  }), i.add(() => Ro(e, ...t, ...n, ...o, ...r)), i.add(() => l("cancelled")), i.dispose;
}
function Yt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ii = Symbol("TransitionContext");
var Pv = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Pv || {});
function Rv() {
  return we(ii, null) !== null;
}
function $v() {
  let e = we(ii, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Vv() {
  let e = we(li, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let li = Symbol("NestingContext");
function Or(e) {
  return "children" in e ? Or(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function jc(e) {
  let t = Y([]), n = Y(!1);
  $e(() => n.value = !0), Ge(() => n.value = !1);
  function o(s, i = Ut.Hidden) {
    let l = t.value.findIndex(({ id: a }) => a === s);
    l !== -1 && (yt(i, { [Ut.Unmount]() {
      t.value.splice(l, 1);
    }, [Ut.Hidden]() {
      t.value[l].state = "hidden";
    } }), !Or(t) && n.value && (e == null || e()));
  }
  function r(s) {
    let i = t.value.find(({ id: l }) => l === s);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: s, state: "visible" }), () => o(s, Ut.Unmount);
  }
  return { children: t, register: r, unregister: o };
}
let Uc = er.RenderStrategy, As = ye({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
  let s = Y(0);
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
  if (!Rv() && Hg())
    return () => Te(Bc, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: a, onAfterLeave: c }, o);
  let u = Y(null), f = J(() => e.unmount ? Ut.Unmount : Ut.Hidden);
  r({ el: u, $el: u });
  let { show: p, appear: m } = $v(), { register: g, unregister: v } = Vv(), N = Y(p.value ? "visible" : "hidden"), O = { value: !0 }, A = yn(), L = { value: !1 }, F = jc(() => {
    !L.value && N.value !== "hidden" && (N.value = "hidden", v(A), c());
  });
  $e(() => {
    let ae = g(A);
    Ge(ae);
  }), nt(() => {
    if (f.value === Ut.Hidden && A) {
      if (p.value && N.value !== "visible") {
        N.value = "visible";
        return;
      }
      yt(N.value, { hidden: () => v(A), visible: () => g(A) });
    }
  });
  let W = Yt(e.enter), ee = Yt(e.enterFrom), se = Yt(e.enterTo), K = Yt(e.entered), Q = Yt(e.leave), te = Yt(e.leaveFrom), ce = Yt(e.leaveTo);
  $e(() => {
    nt(() => {
      if (N.value === "visible") {
        let ae = Re(u);
        if (ae instanceof Comment && ae.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function de(ae) {
    let Xe = O.value && !m.value, be = Re(u);
    !be || !(be instanceof HTMLElement) || Xe || (L.value = !0, p.value && i(), p.value || a(), ae(p.value ? Ol(be, W, ee, se, K, (he) => {
      L.value = !1, he === Ts.Finished && l();
    }) : Ol(be, Q, te, ce, K, (he) => {
      L.value = !1, he === Ts.Finished && (Or(F) || (N.value = "hidden", v(A), c()));
    })));
  }
  return $e(() => {
    gt([p], (ae, Xe, be) => {
      de(be), O.value = !1;
    }, { immediate: !0 });
  }), qe(li, F), Kg(J(() => yt(N.value, { visible: Je.Open, hidden: Je.Closed }) | s.value)), () => {
    let { appear: ae, show: Xe, enter: be, enterFrom: he, enterTo: k, entered: U, leave: me, leaveFrom: Ce, leaveTo: ze, ...Oe } = e, He = { ref: u }, at = { ...Oe, ...m.value && p.value && bo.isServer ? { class: Rn([n.class, Oe.class, ...W, ...ee]) } : {} };
    return Qe({ theirProps: at, ourProps: He, slot: {}, slots: o, attrs: n, features: Uc, visible: N.value === "visible", name: "TransitionChild" });
  };
} }), kv = As, Bc = ye({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let r = si(), s = J(() => e.show === null && r !== null ? (r.value & Je.Open) === Je.Open : e.show);
  nt(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = Y(s.value ? "visible" : "hidden"), l = jc(() => {
    i.value = "hidden";
  }), a = Y(!0), c = { show: s, appear: J(() => e.appear || !a.value) };
  return $e(() => {
    nt(() => {
      a.value = !1, s.value ? i.value = "visible" : Or(l) || (i.value = "hidden");
    });
  }), qe(li, l), qe(ii, c), () => {
    let u = Oc(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return Qe({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [Te(kv, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...u }, o.default)] }, attrs: {}, features: Uc, visible: i.value === "visible", name: "Transition" });
  };
} });
const Fv = /* @__PURE__ */ C("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Iv = { class: "fixed inset-0 z-10 overflow-y-auto" }, Lv = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Mv = { class: "mt-3 sm:mt-5" }, jv = { class: "mt-2" }, Uv = { class: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3" }, Bv = /* @__PURE__ */ ye({
  __name: "Modal",
  props: ["open"],
  setup(e) {
    const t = e;
    return (n, o) => (ge(), xt(ke(Bc), {
      as: "template",
      show: t.open
    }, {
      default: rt(() => [
        _e(ke(Sv), {
          as: "div",
          class: "relative z-10",
          onClose: o[0] || (o[0] = (r) => n.$emit("close"))
        }, {
          default: rt(() => [
            _e(ke(As), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: rt(() => [
                Fv
              ]),
              _: 1
            }),
            C("div", Iv, [
              C("div", Lv, [
                _e(ke(As), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: rt(() => [
                    _e(ke(Dv), { class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6" }, {
                      default: rt(() => [
                        C("div", null, [
                          C("div", Mv, [
                            _e(ke(Cv), {
                              as: "h3",
                              class: "text-base font-semibold leading-6 text-gray-900"
                            }, {
                              default: rt(() => [
                                Cr(n.$slots, "title")
                              ]),
                              _: 3
                            }),
                            C("div", jv, [
                              Cr(n.$slots, "body")
                            ])
                          ])
                        ]),
                        C("div", Uv, [
                          Cr(n.$slots, "actions")
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
}), Hv = /* @__PURE__ */ C("div", { class: "min-w-0 flex-1" }, [
  /* @__PURE__ */ C("h2", { class: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" }, " Page Builder ")
], -1), Kv = { class: "px-4 sm:px-6 lg:px-8" }, qv = { class: "mt-8 flow-root" }, Wv = { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, zv = { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, Jv = { class: "min-w-full divide-y divide-gray-300" }, Gv = /* @__PURE__ */ C("thead", null, [
  /* @__PURE__ */ C("tr", null, [
    /* @__PURE__ */ C("th", {
      scope: "col",
      class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
    }, " Page Name "),
    /* @__PURE__ */ C("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Page Slug "),
    /* @__PURE__ */ C("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Created At "),
    /* @__PURE__ */ C("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Updated At "),
    /* @__PURE__ */ C("th", {
      scope: "col",
      class: "relative py-3.5 pl-3 pr-4 sm:pr-0"
    }, [
      /* @__PURE__ */ C("span", { class: "sr-only" }, "Edit")
    ])
  ])
], -1), Yv = { class: "divide-y divide-gray-200" }, Qv = { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, Xv = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, Zv = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, ey = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, ty = { class: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, ny = /* @__PURE__ */ C("h3", { class: "text-lg leading-6 font-medium text-gray-900" }, " Create New Page ", -1), oy = { class: "mt-2" }, ry = { class: "text-sm text-gray-500 flex flex-col gap-3" }, sy = /* @__PURE__ */ C("label", null, "Page Name", -1), iy = ["onKeydown"], ly = /* @__PURE__ */ ye({
  __name: "Pages",
  setup(e) {
    let t = Y(""), n = Y([]), o = Y(!1);
    const r = () => {
      mn.get("/page-builder/data/pages").then((a) => {
        n.value = a.data.pages;
      }).catch(() => {
        console.log("Error getting page data");
      });
    }, s = async () => {
      await mn.post("/page-builder/data/pages", { title: t.value }), r(), l();
    }, i = () => {
      o.value = !0;
    }, l = () => {
      o.value = !1;
    };
    return $e(() => {
      r();
    }), (a, c) => {
      const u = ga("router-link");
      return ge(), Be(Se, null, [
        C("div", null, [
          C("div", { class: "md:flex md:items-center md:justify-between p-5" }, [
            Hv,
            C("div", { class: "mt-4 flex md:ml-4 md:mt-0" }, [
              C("button", {
                onClick: i,
                type: "button",
                class: "ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              }, " Create New Page ")
            ])
          ]),
          C("div", Kv, [
            C("div", qv, [
              C("div", Wv, [
                C("div", zv, [
                  C("table", Jv, [
                    Gv,
                    C("tbody", Yv, [
                      (ge(!0), Be(Se, null, Jo(ke(n), (f) => (ge(), Be("tr", null, [
                        C("td", Qv, Vt(f.title), 1),
                        C("td", Xv, Vt(f.slug), 1),
                        C("td", Zv, Vt(new Date(f.created_at).toLocaleDateString()) + " - " + Vt(new Date(f.created_at).toLocaleTimeString()), 1),
                        C("td", ey, Vt(new Date(f.updated_at).toLocaleDateString()) + " - " + Vt(new Date(f.updated_at).toLocaleTimeString()), 1),
                        C("td", ty, [
                          _e(u, {
                            to: `/page-builder/pages/${f.slug}`,
                            class: "text-indigo-600 hover:text-indigo-900"
                          }, {
                            default: rt(() => [
                              ka(" Edit ")
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
        _e(Bv, {
          onClose: l,
          open: ke(o)
        }, {
          title: rt(() => [
            ny
          ]),
          body: rt(() => [
            C("div", oy, [
              C("p", ry, [
                sy,
                Lt(C("input", {
                  "onUpdate:modelValue": c[0] || (c[0] = (f) => De(t) ? t.value = f : t = f),
                  type: "text",
                  class: "w-full border border-gray-300 rounded-md",
                  onKeydown: Kd(s, ["enter"])
                }, null, 40, iy), [
                  [Qn, ke(t)]
                ])
              ])
            ])
          ]),
          actions: rt(() => [
            C("button", {
              type: "button",
              class: "inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2",
              onClick: s
            }, " Create "),
            C("button", {
              type: "button",
              class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",
              onClick: c[1] || (c[1] = (f) => De(o) ? o.value = !1 : o = !1),
              ref: "cancelButtonRef"
            }, " Cancel ", 512)
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
}), ay = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, cy = {};
function uy(e, t) {
  const n = ga("router-view");
  return ge(), xt(n);
}
const fy = /* @__PURE__ */ ay(cy, [["render", uy]]), dy = [
  { path: "/page-builder/pages", component: ly },
  { path: "/page-builder/pages/:slug", component: Mg }
], py = Og({
  history: Nm(),
  routes: dy
});
zd(fy).use(py).mount("#app");
