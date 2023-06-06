var qc = Object.defineProperty;
var Wc = (e, t, n) => t in e ? qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fi = (e, t, n) => (Wc(e, typeof t != "symbol" ? t + "" : t, n), n);
function zt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function As(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ve(o) ? Yc(o) : As(o);
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
const zc = /;(?![^(]*\))/g, Jc = /:([^]+)/, Gc = /\/\*.*?\*\//gs;
function Yc(e) {
  const t = {};
  return e.replace(Gc, "").split(zc).forEach((n) => {
    if (n) {
      const o = n.split(Jc);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function An(e) {
  let t = "";
  if (ve(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const o = An(e[n]);
      o && (t += o + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Qc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Xc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Zc = /* @__PURE__ */ zt(Qc), eu = /* @__PURE__ */ zt(Xc), tu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nu = /* @__PURE__ */ zt(tu);
function Sl(e) {
  return !!e || e === "";
}
function ou(e, t) {
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
  let n = di(e), o = di(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Zn(e), o = Zn(t), n || o)
    return e === t;
  if (n = H(e), o = H(t), n || o)
    return n && o ? ou(e, t) : !1;
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
function ru(e, t) {
  return e.findIndex((n) => nr(n, t));
}
const Vt = (e) => ve(e) ? e : e == null ? "" : H(e) || le(e) && (e.toString === Tl || !q(e.toString)) ? JSON.stringify(e, Dl, 2) : String(e), Dl = (e, t) => t && t.__v_isRef ? Dl(e, t.value) : sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : or(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : le(t) && !H(t) && !Pl(t) ? String(t) : t, fe = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, On = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ie = () => {
}, Cl = () => !1, su = /^on[^a-z]/, fo = (e) => su.test(e), Uo = (e) => e.startsWith("onUpdate:"), Ne = Object.assign, Rs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, iu = Object.prototype.hasOwnProperty, X = (e, t) => iu.call(e, t), H = Array.isArray, sn = (e) => po(e) === "[object Map]", or = (e) => po(e) === "[object Set]", di = (e) => po(e) === "[object Date]", q = (e) => typeof e == "function", ve = (e) => typeof e == "string", Zn = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", $s = (e) => le(e) && q(e.then) && q(e.catch), Tl = Object.prototype.toString, po = (e) => Tl.call(e), Vs = (e) => po(e).slice(8, -1), Pl = (e) => po(e) === "[object Object]", ks = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ro = /* @__PURE__ */ zt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), lu = /* @__PURE__ */ zt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, au = /-(\w)/g, vt = rr((e) => e.replace(au, (t, n) => n ? n.toUpperCase() : "")), cu = /\B([A-Z])/g, Dt = rr((e) => e.replace(cu, "-$1").toLowerCase()), pn = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = rr((e) => e ? `on${pn(e)}` : ""), eo = (e, t) => !Object.is(e, t), bn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Bo = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, to = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let pi;
const Al = () => pi || (pi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ft;
class uu {
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
function fu(e, t = ft) {
  t && t.active && t.effects.push(e);
}
const no = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Rl = (e) => (e.w & Kt) > 0, $l = (e) => (e.n & Kt) > 0, du = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Kt;
}, pu = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Rl(r) && !$l(r) ? r.delete(e) : t[n++] = r, r.w &= ~Kt, r.n &= ~Kt;
    }
    t.length = n;
  }
}, qr = /* @__PURE__ */ new WeakMap();
let Bn = 0, Kt = 1;
const Wr = 30;
let Ue;
const ln = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), zr = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Fs {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, fu(this, o);
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
      return this.parent = Ue, Ue = this, Bt = !0, Kt = 1 << ++Bn, Bn <= Wr ? du(this) : hi(this), this.fn();
    } finally {
      Bn <= Wr && pu(this), Kt = 1 << --Bn, Ue = this.parent, Bt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ue === this ? this.deferStop = !0 : this.active && (hi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function hi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Bt = !0;
const Vl = [];
function mn() {
  Vl.push(Bt), Bt = !1;
}
function gn() {
  const e = Vl.pop();
  Bt = e === void 0 ? !0 : e;
}
function We(e, t, n) {
  if (Bt && Ue) {
    let o = qr.get(e);
    o || qr.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = no());
    const s = process.env.NODE_ENV !== "production" ? { effect: Ue, target: e, type: t, key: n } : void 0;
    Jr(r, s);
  }
}
function Jr(e, t) {
  let n = !1;
  Bn <= Wr ? $l(e) || (e.n |= Kt, n = !Rl(e)) : n = !e.has(Ue), n && (e.add(Ue), Ue.deps.push(e), process.env.NODE_ENV !== "production" && Ue.onTrack && Ue.onTrack(Object.assign({ effect: Ue }, t)));
}
function Ct(e, t, n, o, r, s) {
  const i = qr.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && H(e)) {
    const c = to(o);
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
    l[0] && (process.env.NODE_ENV !== "production" ? wn(l[0], a) : wn(l[0]));
  else {
    const c = [];
    for (const u of l)
      u && c.push(...u);
    process.env.NODE_ENV !== "production" ? wn(no(c), a) : wn(no(c));
  }
}
function wn(e, t) {
  const n = H(e) ? e : [...e];
  for (const o of n)
    o.computed && mi(o, t);
  for (const o of n)
    o.computed || mi(o, t);
}
function mi(e, t) {
  (e !== Ue || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Ne({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const hu = /* @__PURE__ */ zt("__proto__,__v_isRef,__isVue"), kl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zn)
), mu = /* @__PURE__ */ sr(), gu = /* @__PURE__ */ sr(!1, !0), vu = /* @__PURE__ */ sr(!0), yu = /* @__PURE__ */ sr(!0, !0), gi = /* @__PURE__ */ Eu();
function Eu() {
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
    if (r === "__v_raw" && s === (e ? t ? Hl : Bl : t ? Ul : jl).get(o))
      return o;
    const i = H(o);
    if (!e && i && X(gi, r))
      return Reflect.get(gi, r, s);
    const l = Reflect.get(o, r, s);
    return (Zn(r) ? kl.has(r) : hu(r)) || (e || We(o, "get", r), t) ? l : De(l) ? i && ks(r) ? l : l.value : le(l) ? e ? Kl(l) : Rn(l) : l;
  };
}
const bu = /* @__PURE__ */ Fl(), _u = /* @__PURE__ */ Fl(!0);
function Fl(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (qt(i) && De(i) && !De(r))
      return !1;
    if (!e && (!Ho(r) && !qt(r) && (i = G(i), r = G(r)), !H(n) && De(i) && !De(r)))
      return i.value = r, !0;
    const l = H(n) && ks(o) ? Number(o) < n.length : X(n, o), a = Reflect.set(n, o, r, s);
    return n === G(s) && (l ? eo(r, i) && Ct(n, "set", o, r, i) : Ct(n, "add", o, r)), a;
  };
}
function wu(e, t) {
  const n = X(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Ct(e, "delete", t, void 0, o), r;
}
function Nu(e, t) {
  const n = Reflect.has(e, t);
  return (!Zn(t) || !kl.has(t)) && We(e, "has", t), n;
}
function Ou(e) {
  return We(e, "iterate", H(e) ? "length" : ln), Reflect.ownKeys(e);
}
const Il = {
  get: mu,
  set: bu,
  deleteProperty: wu,
  has: Nu,
  ownKeys: Ou
}, Ll = {
  get: vu,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Kr(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Kr(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, xu = /* @__PURE__ */ Ne({}, Il, {
  get: gu,
  set: _u
}), Su = /* @__PURE__ */ Ne({}, Ll, {
  get: yu
}), Is = (e) => e, ir = (e) => Reflect.getPrototypeOf(e);
function wo(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = G(e), s = G(t);
  n || (t !== s && We(r, "get", t), We(r, "get", s));
  const { has: i } = ir(r), l = o ? Is : n ? Ls : oo;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function No(e, t = !1) {
  const n = this.__v_raw, o = G(n), r = G(e);
  return t || (e !== r && We(o, "has", e), We(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Oo(e, t = !1) {
  return e = e.__v_raw, !t && We(G(e), "iterate", ln), Reflect.get(e, "size", e);
}
function vi(e) {
  e = G(e);
  const t = G(this);
  return ir(t).has.call(t, e) || (t.add(e), Ct(t, "add", e, e)), this;
}
function yi(e, t) {
  t = G(t);
  const n = G(this), { has: o, get: r } = ir(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Ml(n, o, e) : (e = G(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? eo(t, i) && Ct(n, "set", e, t, i) : Ct(n, "add", e, t), this;
}
function Ei(e) {
  const t = G(this), { has: n, get: o } = ir(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Ml(t, n, e) : (e = G(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Ct(t, "delete", e, void 0, s), i;
}
function bi() {
  const e = G(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? sn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ct(e, "clear", void 0, void 0, n), o;
}
function xo(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = G(i), a = t ? Is : e ? Ls : oo;
    return !e && We(l, "iterate", ln), i.forEach((c, u) => o.call(r, a(c), a(u), s));
  };
}
function So(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = G(r), i = sn(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = r[e](...o), u = n ? Is : t ? Ls : oo;
    return !t && We(s, "iterate", a ? zr : ln), {
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
function Du() {
  const e = {
    get(s) {
      return wo(this, s);
    },
    get size() {
      return Oo(this);
    },
    has: No,
    add: vi,
    set: yi,
    delete: Ei,
    clear: bi,
    forEach: xo(!1, !1)
  }, t = {
    get(s) {
      return wo(this, s, !1, !0);
    },
    get size() {
      return Oo(this);
    },
    has: No,
    add: vi,
    set: yi,
    delete: Ei,
    clear: bi,
    forEach: xo(!1, !0)
  }, n = {
    get(s) {
      return wo(this, s, !0);
    },
    get size() {
      return Oo(this, !0);
    },
    has(s) {
      return No.call(this, s, !0);
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
    forEach: xo(!0, !1)
  }, o = {
    get(s) {
      return wo(this, s, !0, !0);
    },
    get size() {
      return Oo(this, !0);
    },
    has(s) {
      return No.call(this, s, !0);
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
    forEach: xo(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = So(s, !1, !1), n[s] = So(s, !0, !1), t[s] = So(s, !1, !0), o[s] = So(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Cu, Tu, Pu, Au] = /* @__PURE__ */ Du();
function lr(e, t) {
  const n = t ? e ? Au : Pu : e ? Tu : Cu;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(X(n, r) && r in o ? n : o, r, s);
}
const Ru = {
  get: /* @__PURE__ */ lr(!1, !1)
}, $u = {
  get: /* @__PURE__ */ lr(!1, !0)
}, Vu = {
  get: /* @__PURE__ */ lr(!0, !1)
}, ku = {
  get: /* @__PURE__ */ lr(!0, !0)
};
function Ml(e, t, n) {
  const o = G(n);
  if (o !== n && t.call(e, o)) {
    const r = Vs(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const jl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap();
function Fu(e) {
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
function Iu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fu(Vs(e));
}
function Rn(e) {
  return qt(e) ? e : ar(e, !1, Il, Ru, jl);
}
function Lu(e) {
  return ar(e, !1, xu, $u, Ul);
}
function Kl(e) {
  return ar(e, !0, Ll, Vu, Bl);
}
function Nn(e) {
  return ar(e, !0, Su, ku, Hl);
}
function ar(e, t, n, o, r) {
  if (!le(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Iu(e);
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
function Ho(e) {
  return !!(e && e.__v_isShallow);
}
function Gr(e) {
  return an(e) || qt(e);
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function ql(e) {
  return Bo(e, "__v_skip", !0), e;
}
const oo = (e) => le(e) ? Rn(e) : e, Ls = (e) => le(e) ? Kl(e) : e;
function Wl(e) {
  Bt && Ue && (e = G(e), process.env.NODE_ENV !== "production" ? Jr(e.dep || (e.dep = no()), {
    target: e,
    type: "get",
    key: "value"
  }) : Jr(e.dep || (e.dep = no())));
}
function zl(e, t) {
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
function Y(e) {
  return Gl(e, !1);
}
function Jl(e) {
  return Gl(e, !0);
}
function Gl(e, t) {
  return De(e) ? e : new Mu(e, t);
}
class Mu {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : G(t), this._value = n ? t : oo(t);
  }
  get value() {
    return Wl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ho(t) || qt(t);
    t = n ? t : G(t), eo(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : oo(t), zl(this, t));
  }
}
function ke(e) {
  return De(e) ? e.value : e;
}
const ju = {
  get: (e, t, n) => ke(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return De(r) && !De(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Yl(e) {
  return an(e) ? e : new Proxy(e, ju);
}
var Ql;
class Uu {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ql] = !1, this._dirty = !0, this.effect = new Fs(t, () => {
      this._dirty || (this._dirty = !0, zl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = G(this);
    return Wl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ql = "__v_isReadonly";
function Bu(e, t, n = !1) {
  let o, r;
  const s = q(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Ie) : (o = e.get, r = e.set);
  const i = new Uu(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const cn = [];
function $o(e) {
  cn.push(e);
}
function Vo() {
  cn.pop();
}
function D(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  mn();
  const n = cn.length ? cn[cn.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Hu();
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
`, ...Ku(r)), console.warn(...s);
  }
  gn();
}
function Hu() {
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
function Ku(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...qu(n));
  }), t;
}
function qu({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${mr(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Wu(e.props), s] : [r + s];
}
function Wu(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Xl(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Xl(e, t, n) {
  return ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : De(t) ? (t = Xl(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : q(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
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
  zu(e, n, r, o);
}
function zu(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Ms[t];
    if (n && $o(n), D(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Vo(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ro = !1, Yr = !1;
const Le = [];
let pt = 0;
const xn = [];
let dt = null, kt = 0;
const Zl = /* @__PURE__ */ Promise.resolve();
let js = null;
const Ju = 100;
function Us(e) {
  const t = js || Zl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gu(e) {
  let t = pt + 1, n = Le.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    so(Le[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function ur(e) {
  (!Le.length || !Le.includes(e, ro && e.allowRecurse ? pt + 1 : pt)) && (e.id == null ? Le.push(e) : Le.splice(Gu(e.id), 0, e), ea());
}
function ea() {
  !ro && !Yr && (Yr = !0, js = Zl.then(oa));
}
function Yu(e) {
  const t = Le.indexOf(e);
  t > pt && Le.splice(t, 1);
}
function ta(e) {
  H(e) ? xn.push(...e) : (!dt || !dt.includes(e, e.allowRecurse ? kt + 1 : kt)) && xn.push(e), ea();
}
function _i(e, t = ro ? pt + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Le.length; t++) {
    const n = Le[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Bs(e, n))
        continue;
      Le.splice(t, 1), t--, n();
    }
  }
}
function na(e) {
  if (xn.length) {
    const t = [...new Set(xn)];
    if (xn.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), dt.sort((n, o) => so(n) - so(o)), kt = 0; kt < dt.length; kt++)
      process.env.NODE_ENV !== "production" && Bs(e, dt[kt]) || dt[kt]();
    dt = null, kt = 0;
  }
}
const so = (e) => e.id == null ? 1 / 0 : e.id, Qu = (e, t) => {
  const n = so(e) - so(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function oa(e) {
  Yr = !1, ro = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Le.sort(Qu);
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
    pt = 0, Le.length = 0, na(e), ro = !1, js = null, (Le.length || xn.length) && oa(e);
  }
}
function Bs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ju) {
      const o = t.ownerInstance, r = o && Ys(o.type);
      return D(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Ht = !1;
const _n = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Al().__VUE_HMR_RUNTIME__ = {
  createRecord: xr(ra),
  rerender: xr(ef),
  reload: xr(tf)
});
const hn = /* @__PURE__ */ new Map();
function Xu(e) {
  const t = e.type.__hmrId;
  let n = hn.get(t);
  n || (ra(t, e.type), n = hn.get(t)), n.instances.add(e);
}
function Zu(e) {
  hn.get(e.type.__hmrId).instances.delete(e);
}
function ra(e, t) {
  return hn.has(e) ? !1 : (hn.set(e, {
    initialDef: qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qn(e) {
  return ja(e) ? e.__vccOpts : e;
}
function ef(e, t) {
  const n = hn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, qn(o.type).render = t), o.renderCache = [], Ht = !0, o.update(), Ht = !1;
  }));
}
function tf(e, t) {
  const n = hn.get(e);
  if (!n)
    return;
  t = qn(t), wi(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = qn(r.type);
    _n.has(s) || (s !== n.initialDef && wi(s, t), _n.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (_n.add(s), r.ceReload(t.styles), _n.delete(s)) : r.parent ? ur(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  ta(() => {
    for (const r of o)
      _n.delete(qn(r.type));
  });
}
function wi(e, t) {
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
let ht, Hn = [], Qr = !1;
function ho(e, ...t) {
  ht ? ht.emit(e, ...t) : Qr || Hn.push({ event: e, args: t });
}
function sa(e, t) {
  var n, o;
  ht = e, ht ? (ht.enabled = !0, Hn.forEach(({ event: r, args: s }) => ht.emit(r, ...s)), Hn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    sa(s, t);
  }), setTimeout(() => {
    ht || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Qr = !0, Hn = []);
  }, 3e3)) : (Qr = !0, Hn = []);
}
function nf(e, t) {
  ho("app:init", e, t, {
    Fragment: Se,
    Text: go,
    Comment: Fe,
    Static: Jn
  });
}
function of(e) {
  ho("app:unmount", e);
}
const rf = /* @__PURE__ */ Hs(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), ia = /* @__PURE__ */ Hs(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), sf = /* @__PURE__ */ Hs(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), lf = (e) => {
  ht && typeof ht.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ht.cleanupBuffer(e) && sf(e);
};
function Hs(e) {
  return (t) => {
    ho(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const af = /* @__PURE__ */ la(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), cf = /* @__PURE__ */ la(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function la(e) {
  return (t, n, o) => {
    ho(e, t.appContext.app, t.uid, t, n, o);
  };
}
function uf(e, t, n) {
  ho("component:emit", e.appContext.app, e, t, n);
}
function ff(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || fe;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: u, propsOptions: [f] } = e;
    if (u)
      if (!(t in u))
        (!f || !(Qt(t) in f)) && D(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qt(t)}" prop.`);
      else {
        const d = u[t];
        q(d) && (d(...n) || D(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: d } = o[u] || fe;
    d && (r = n.map((m) => ve(m) ? m.trim() : m)), f && (r = n.map(to));
  }
  if (process.env.NODE_ENV !== "production" && uf(e, t, r), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Qt(u)] && D(`Event "${u}" is emitted in component ${mr(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Dt(t)}" instead of "${t}".`);
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
function aa(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!q(e)) {
    const a = (c) => {
      const u = aa(c, t, !0);
      u && (l = !0, Ne(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (le(e) && o.set(e, null), null) : (H(s) ? s.forEach((a) => i[a] = null) : Ne(i, s), le(e) && o.set(e, i), i);
}
function fr(e, t) {
  return !e || !fo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, Dt(t)) || X(e, t));
}
let Ae = null, ca = null;
function Ko(e) {
  const t = Ae;
  return Ae = e, ca = e && e.type.__scopeId || null, t;
}
function rt(e, t = Ae, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && ki(-1);
    const s = Ko(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ko(s), o._d && ki(1);
    }
    return process.env.NODE_ENV !== "production" && ia(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Xr = !1;
function qo() {
  Xr = !0;
}
function Sr(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: a, emit: c, render: u, renderCache: f, data: d, setupState: m, ctx: g, inheritAttrs: y } = e;
  let N, O;
  const S = Ko(e);
  process.env.NODE_ENV !== "production" && (Xr = !1);
  try {
    if (n.shapeFlag & 4) {
      const W = r || o;
      N = st(u.call(W, W, f, s, m, d, g)), O = a;
    } else {
      const W = t;
      process.env.NODE_ENV !== "production" && a === s && qo(), N = st(W.length > 1 ? W(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return qo(), a;
        },
        slots: l,
        emit: c
      } : { attrs: a, slots: l, emit: c }) : W(
        s,
        null
        /* we know it doesn't need it */
      )), O = t.props ? a : pf(a);
    }
  } catch (W) {
    Gn.length = 0, cr(
      W,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), N = _e(Fe);
  }
  let k = N, I;
  if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && ([k, I] = df(N)), O && y !== !1) {
    const W = Object.keys(O), { shapeFlag: ee } = k;
    if (W.length) {
      if (ee & 7)
        i && W.some(Uo) && (O = hf(O, i)), k = lt(k, O);
      else if (process.env.NODE_ENV !== "production" && !Xr && k.type !== Fe) {
        const se = Object.keys(a), K = [], Q = [];
        for (let te = 0, ce = se.length; te < ce; te++) {
          const de = se[te];
          fo(de) ? Uo(de) || K.push(de[2].toLowerCase() + de.slice(3)) : Q.push(de);
        }
        Q.length && D(`Extraneous non-props attributes (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), K.length && D(`Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ni(k) && D("Runtime directive used on component with non-element root node. The directives will not function as intended."), k = lt(k), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ni(k) && D("Component inside <Transition> renders non-element root node that cannot be animated."), k.transition = n.transition), process.env.NODE_ENV !== "production" && I ? I(k) : N = k, Ko(S), N;
}
const df = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ua(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [st(o), i];
};
function ua(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Dn(o)) {
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
const pf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || fo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, hf = (e, t) => {
  const n = {};
  for (const o in e)
    (!Uo(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Ni = (e) => e.shapeFlag & 7 || e.type === Fe;
function mf(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, c = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && Ht || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Oi(o, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (i[d] !== o[d] && !fr(c, d))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Oi(o, i, c) : !0 : !!i;
  return !1;
}
function Oi(e, t, n) {
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
function gf({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const vf = (e) => e.__isSuspense;
function yf(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : ta(e);
}
function qe(e, t) {
  if (!Pe)
    process.env.NODE_ENV !== "production" && D("provide() can only be used inside setup().");
  else {
    let n = Pe.provides;
    const o = Pe.parent && Pe.parent.provides;
    o === n && (n = Pe.provides = Object.create(o)), n[e] = t;
  }
}
function we(e, t, n = !1) {
  const o = Pe || Ae;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && q(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && D(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && D("inject() can only be used inside setup() or functional components.");
}
function nt(e, t) {
  return Ks(e, null, t);
}
const Do = {};
function gt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !q(t) && D("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Ks(e, t, n);
}
function Ks(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = fe) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && D('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && D('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (I) => {
    D("Invalid watch source: ", I, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Pe;
  let c, u = !1, f = !1;
  if (De(e) ? (c = () => e.value, u = Ho(e)) : an(e) ? (c = () => e, o = !0) : H(e) ? (f = !0, u = e.some((I) => an(I) || Ho(I)), c = () => e.map((I) => {
    if (De(I))
      return I.value;
    if (an(I))
      return on(I);
    if (q(I))
      return Ot(
        I,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(I);
  })) : q(e) ? t ? c = () => Ot(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : c = () => {
    if (!(a && a.isUnmounted))
      return d && d(), et(e, a, 3, [m]);
  } : (c = Ie, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const I = c;
    c = () => on(I());
  }
  let d, m = (I) => {
    d = S.onStop = () => {
      Ot(
        I,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, g;
  if (lo)
    if (m = Ie, t ? n && et(t, a, 3, [
      c(),
      f ? [] : void 0,
      m
    ]) : c(), r === "sync") {
      const I = Od();
      g = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return Ie;
  let y = f ? new Array(e.length).fill(Do) : Do;
  const N = () => {
    if (S.active)
      if (t) {
        const I = S.run();
        (o || u || (f ? I.some((W, ee) => eo(W, y[ee])) : eo(I, y))) && (d && d(), et(t, a, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          y === Do ? void 0 : f && y[0] === Do ? [] : y,
          m
        ]), y = I);
      } else
        S.run();
  };
  N.allowRecurse = !!t;
  let O;
  r === "sync" ? O = N : r === "post" ? O = () => Ke(N, a && a.suspense) : (N.pre = !0, a && (N.id = a.uid), O = () => ur(N));
  const S = new Fs(c, O);
  process.env.NODE_ENV !== "production" && (S.onTrack = s, S.onTrigger = i), t ? n ? N() : y = S.run() : r === "post" ? Ke(S.run.bind(S), a && a.suspense) : S.run();
  const k = () => {
    S.stop(), a && a.scope && Rs(a.scope.effects, S);
  };
  return g && g.push(k), k;
}
function Ef(e, t, n) {
  const o = this.proxy, r = ve(e) ? e.includes(".") ? fa(o, e) : () => o[e] : e.bind(o, o);
  let s;
  q(t) ? s = t : (s = t.handler, n = t);
  const i = Pe;
  Cn(this);
  const l = Ks(r, s.bind(o), n);
  return i ? Cn(i) : fn(), l;
}
function fa(e, t) {
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
  else if (Pl(e))
    for (const n in e)
      on(e[n], t);
  return e;
}
function bf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return $e(() => {
    e.isMounted = !0;
  }), ma(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ze = [Function, Array], _f = {
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
    const n = Gs(), o = bf();
    let r;
    return () => {
      const s = t.default && pa(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let y = !1;
        for (const N of s)
          if (N.type !== Fe) {
            if (process.env.NODE_ENV !== "production" && y) {
              D("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = N, y = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = G(e), { mode: a } = l;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && D(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Dr(i);
      const c = xi(i);
      if (!c)
        return Dr(i);
      const u = Zr(c, l, o, n);
      es(c, u);
      const f = n.subTree, d = f && xi(f);
      let m = !1;
      const { getTransitionKey: g } = c.type;
      if (g) {
        const y = g();
        r === void 0 ? r = y : y !== r && (r = y, m = !0);
      }
      if (d && d.type !== Fe && (!Zt(c, d) || m)) {
        const y = Zr(d, l, o, n);
        if (es(d, y), a === "out-in")
          return o.isLeaving = !0, y.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Dr(i);
        a === "in-out" && c.type !== Fe && (y.delayLeave = (N, O, S) => {
          const k = da(o, d);
          k[String(d.key)] = d, N._leaveCb = () => {
            O(), N._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = S;
        });
      }
      return i;
    };
  }
}, wf = _f;
function da(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Zr(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: g, onBeforeAppear: y, onAppear: N, onAfterAppear: O, onAppearCancelled: S } = t, k = String(e.key), I = da(n, e), W = (K, Q) => {
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
          Q = y || l;
        else
          return;
      K._leaveCb && K._leaveCb(
        !0
        /* cancelled */
      );
      const te = I[k];
      te && Zt(e, te) && te.el._leaveCb && te.el._leaveCb(), W(Q, [K]);
    },
    enter(K) {
      let Q = a, te = c, ce = u;
      if (!n.isMounted)
        if (r)
          Q = N || a, te = O || c, ce = S || u;
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
        ce || (ce = !0, Q(), ae ? W(g, [K]) : W(m, [K]), K._leaveCb = void 0, I[te] === e && delete I[te]);
      };
      I[te] = e, d ? ee(d, [K, de]) : de();
    },
    clone(K) {
      return Zr(K, t, n, o);
    }
  };
  return se;
}
function Dr(e) {
  if (mo(e))
    return e = lt(e), e.children = null, e;
}
function xi(e) {
  return mo(e) ? e.children ? e.children[0] : void 0 : e;
}
function es(e, t) {
  e.shapeFlag & 6 && e.component ? es(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function pa(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Se ? (i.patchFlag & 128 && r++, o = o.concat(pa(i.children, t, l))) : (t || i.type !== Fe) && o.push(l != null ? lt(i, { key: l }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function ye(e) {
  return q(e) ? { setup: e, name: e.name } : e;
}
const Wn = (e) => !!e.type.__asyncLoader, mo = (e) => e.type.__isKeepAlive;
function Nf(e, t) {
  ha(e, "a", t);
}
function Of(e, t) {
  ha(e, "da", t);
}
function ha(e, t, n = Pe) {
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
      mo(r.parent.vnode) && xf(o, t, n, r), r = r.parent;
  }
}
function xf(e, t, n, o) {
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
function dr(e, t, n = Pe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      mn(), Cn(n);
      const l = et(t, n, e, i);
      return fn(), gn(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Qt(Ms[e].replace(/ hook$/, ""));
    D(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Tt = (e) => (t, n = Pe) => (!lo || e === "sp") && dr(e, (...o) => t(...o), n), Sf = Tt(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), $e = Tt(
  "m"
  /* LifecycleHooks.MOUNTED */
), Df = Tt(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Cf = Tt(
  "u"
  /* LifecycleHooks.UPDATED */
), ma = Tt(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Ge = Tt(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Tf = Tt(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Pf = Tt(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Af = Tt(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Rf(e, t = Pe) {
  dr("ec", e, t);
}
function ga(e) {
  lu(e) && D("Do not use built-in directive ids as custom directive id: " + e);
}
function Lt(e, t) {
  const n = Ae;
  if (n === null)
    return process.env.NODE_ENV !== "production" && D("withDirectives can only be used inside render functions."), e;
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
    a && (mn(), et(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), gn());
  }
}
const Wo = "components";
function va(e, t) {
  return ba(Wo, e, !0, t) || e;
}
const ya = Symbol();
function Ea(e) {
  return ve(e) ? ba(Wo, e, !1) || e : e || ya;
}
function ba(e, t, n = !0, o = !1) {
  const r = Ae || Pe;
  if (r) {
    const s = r.type;
    if (e === Wo) {
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
      Si(r[e] || s[e], t) || // global registration
      Si(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const l = e === Wo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      D(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && D(`resolve${pn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Si(e, t) {
  return e && (e[t] || e[vt(t)] || e[pn(vt(t))]);
}
function zo(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (H(e) || ve(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && D(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
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
  if (Ae.isCE || Ae.parent && Wn(Ae.parent) && Ae.parent.isCE)
    return t !== "default" && (n.name = t), _e("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (D("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), ge();
  const i = s && _a(s(n)), l = xt(
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
function _a(e) {
  return e.some((t) => Dn(t) ? !(t.type === Fe || t.type === Se && !_a(t.children)) : !0) ? e : null;
}
const ts = (e) => e ? Ia(e) ? hr(e) || e.proxy : ts(e.parent) : null, un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Nn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Nn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Nn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Nn(e.refs) : e.refs,
    $parent: (e) => ts(e.parent),
    $root: (e) => ts(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ws(e),
    $forceUpdate: (e) => e.f || (e.f = () => ur(e.update)),
    $nextTick: (e) => e.n || (e.n = Us.bind(e.proxy)),
    $watch: (e) => Ef.bind(e)
  })
), qs = (e) => e === "_" || e === "$", Tr = (e, t) => e !== fe && !e.__isScriptSetup && X(e, t), wa = {
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
    let f, d;
    if (u)
      return t === "$attrs" && (We(e, "get", t), process.env.NODE_ENV !== "production" && qo()), u(e);
    if ((f = l.__cssModules) && (f = f[t]))
      return f;
    if (n !== fe && X(n, t))
      return i[t] = 4, n[t];
    if (d = a.config.globalProperties, X(d, t))
      return d[t];
    process.env.NODE_ENV !== "production" && Ae && (!ve(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== fe && qs(t[0]) && X(r, t) ? D(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Ae && D(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Tr(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && X(r, t) ? (D(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== fe && X(o, t) ? (o[t] = n, !0) : X(e.props, t) ? (process.env.NODE_ENV !== "production" && D(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && D(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
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
process.env.NODE_ENV !== "production" && (wa.ownKeys = (e) => (D("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function $f(e) {
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
function Vf(e) {
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
function kf(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (qs(o[0])) {
        D(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
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
function Ff() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? D(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ns = !0;
function If(e) {
  const t = Ws(e), n = e.proxy, o = e.ctx;
  ns = !1, t.beforeCreate && Di(
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
    unmounted: I,
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
  } = t, be = process.env.NODE_ENV !== "production" ? Ff() : null;
  if (process.env.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const U in F)
        be("Props", U);
  }
  if (c && Lf(c, o, be, e.appContext.config.unwrapInjectedRef), i)
    for (const F in i) {
      const U = i[F];
      q(U) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: U.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = U.bind(n), process.env.NODE_ENV !== "production" && be("Methods", F)) : process.env.NODE_ENV !== "production" && D(`Method "${F}" has type "${typeof U}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !q(r) && D("The data option must be a function. Plain object usage is no longer supported.");
    const F = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && $s(F) && D("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !le(F))
      process.env.NODE_ENV !== "production" && D("data() should return an object.");
    else if (e.data = Rn(F), process.env.NODE_ENV !== "production")
      for (const U in F)
        be("Data", U), qs(U[0]) || Object.defineProperty(o, U, {
          configurable: !0,
          enumerable: !0,
          get: () => F[U],
          set: Ie
        });
  }
  if (ns = !0, s)
    for (const F in s) {
      const U = s[F], me = q(U) ? U.bind(n, n) : q(U.get) ? U.get.bind(n, n) : Ie;
      process.env.NODE_ENV !== "production" && me === Ie && D(`Computed property "${F}" has no getter.`);
      const Ce = !q(U) && q(U.set) ? U.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        D(`Write operation failed: computed property "${F}" is readonly.`);
      } : Ie, ze = J({
        get: me,
        set: Ce
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (Oe) => ze.value = Oe
      }), process.env.NODE_ENV !== "production" && be("Computed", F);
    }
  if (l)
    for (const F in l)
      Na(l[F], o, n, F);
  if (a) {
    const F = q(a) ? a.call(n) : a;
    Reflect.ownKeys(F).forEach((U) => {
      qe(U, F[U]);
    });
  }
  u && Di(
    u,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function he(F, U) {
    H(U) ? U.forEach((me) => F(me.bind(n))) : U && F(U.bind(n));
  }
  if (he(Sf, f), he($e, d), he(Df, m), he(Cf, g), he(Nf, y), he(Of, N), he(Rf, K), he(Af, ee), he(Pf, se), he(ma, S), he(Ge, I), he(Tf, Q), H(te))
    if (te.length) {
      const F = e.exposed || (e.exposed = {});
      te.forEach((U) => {
        Object.defineProperty(F, U, {
          get: () => n[U],
          set: (me) => n[U] = me
        });
      });
    } else
      e.exposed || (e.exposed = {});
  W && e.render === Ie && (e.render = W), ce != null && (e.inheritAttrs = ce), de && (e.components = de), ae && (e.directives = ae);
}
function Lf(e, t, n = Ie, o = !1) {
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
    }) : (process.env.NODE_ENV !== "production" && D(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Di(e, t, n) {
  et(H(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Na(e, t, n, o) {
  const r = o.includes(".") ? fa(n, o) : () => n[o];
  if (ve(e)) {
    const s = t[e];
    q(s) ? gt(r, s) : process.env.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e}"`, s);
  } else if (q(e))
    gt(r, e.bind(n));
  else if (le(e))
    if (H(e))
      e.forEach((s) => Na(s, t, n, o));
    else {
      const s = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(s) ? gt(r, s, e) : process.env.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && D(`Invalid watch option: "${o}"`, e);
}
function Ws(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach((c) => Jo(a, c, i, !0)), Jo(a, t, i)), le(t) && s.set(t, a), a;
}
function Jo(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Jo(e, s, n, !0), r && r.forEach((i) => Jo(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && D('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = Mf[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Mf = {
  data: Ci,
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
  watch: Uf,
  // provide / inject
  provide: Ci,
  inject: jf
};
function Ci(e, t) {
  return t ? e ? function() {
    return Ne(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t);
  } : t : e;
}
function jf(e, t) {
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
function Uf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Ne(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = je(e[o], t[o]);
  return n;
}
function Bf(e, t, n, o = !1) {
  const r = {}, s = {};
  Bo(s, pr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Oa(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Sa(t || {}, r, e), n ? e.props = o ? r : Lu(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Hf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Kf(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, l = G(r), [a] = e.propsOptions;
  let c = !1;
  if (// always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !(process.env.NODE_ENV !== "production" && Hf(e)) && (o || i > 0) && !(i & 16)) {
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
            const g = vt(d);
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
          m !== s[d] && (s[d] = m, c = !0);
      }
    }
  } else {
    Oa(e, t, r, s) && (c = !0);
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
  c && Ct(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Sa(t || {}, r, e);
}
function Oa(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Ro(a))
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
        n in c ? o = c[n] : (Cn(r), o = c[n] = a.call(null, t), fn());
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
function xa(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!q(e)) {
    const u = (f) => {
      a = !0;
      const [d, m] = xa(f, t, !0);
      Ne(i, d), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !a)
    return le(e) && o.set(e, On), On;
  if (H(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !ve(s[u]) && D("props must be strings when using array syntax.", s[u]);
      const f = vt(s[u]);
      Ti(f) && (i[f] = fe);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !le(s) && D("invalid props options", s);
    for (const u in s) {
      const f = vt(u);
      if (Ti(f)) {
        const d = s[u], m = i[f] = H(d) || q(d) ? { type: d } : Object.assign({}, d);
        if (m) {
          const g = Ai(Boolean, m.type), y = Ai(String, m.type);
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
function Ti(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && D(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ss(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Pi(e, t) {
  return ss(e) === ss(t);
}
function Ai(e, t) {
  return H(t) ? t.findIndex((n) => Pi(n, e)) : q(t) && Pi(t, e) ? 0 : -1;
}
function Sa(e, t, n) {
  const o = G(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && qf(s, o[s], i, !X(e, s) && !X(e, Dt(s)));
  }
}
function qf(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    D('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const a = H(r) ? r : [r], c = [];
      for (let u = 0; u < a.length && !l; u++) {
        const { valid: f, expectedType: d } = zf(t, a[u]);
        c.push(d || ""), l = f;
      }
      if (!l) {
        D(Jf(e, t, c));
        return;
      }
    }
    i && !i(t) && D('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Wf = /* @__PURE__ */ zt("String,Number,Boolean,Function,Symbol,BigInt");
function zf(e, t) {
  let n;
  const o = ss(t);
  if (Wf(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = le(e) : o === "Array" ? n = H(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Jf(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(pn).join(" | ")}`;
  const r = n[0], s = Vs(t), i = Ri(t, r), l = Ri(t, s);
  return n.length === 1 && $i(r) && !Gf(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, $i(s) && (o += `with value ${l}.`), o;
}
function Ri(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $i(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Gf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Da = (e) => e[0] === "_" || e === "$stable", zs = (e) => H(e) ? e.map(st) : [st(e)], Yf = (e, t, n) => {
  if (t._n)
    return t;
  const o = rt((...r) => (process.env.NODE_ENV !== "production" && Pe && D(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), zs(t(...r))), n);
  return o._c = !1, o;
}, Ca = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Da(r))
      continue;
    const s = e[r];
    if (q(s))
      t[r] = Yf(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && D(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = zs(s);
      t[r] = () => i;
    }
  }
}, Ta = (e, t) => {
  process.env.NODE_ENV !== "production" && !mo(e.vnode) && D("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = zs(t);
  e.slots.default = () => n;
}, Qf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = G(t), Bo(t, "_", n)) : Ca(t, e.slots = {});
  } else
    e.slots = {}, t && Ta(e, t);
  Bo(e.slots, pr, 1);
}, Xf = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = fe;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ht ? Ne(r, t) : n && l === 1 ? s = !1 : (Ne(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Ca(t, r)), i = t;
  } else
    t && (Ta(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Da(l) && !(l in i) && delete r[l];
};
function Pa() {
  return {
    app: null,
    config: {
      isNativeTag: Cl,
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
let Zf = 0;
function ed(e, t) {
  return function(o, r = null) {
    q(o) || (o = Object.assign({}, o)), r != null && !le(r) && (process.env.NODE_ENV !== "production" && D("root props passed to app.mount() must be an object."), r = null);
    const s = Pa(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: Zf++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Li,
      get config() {
        return s.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && D("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...u) {
        return i.has(c) ? process.env.NODE_ENV !== "production" && D("Plugin has already been applied to target app.") : c && q(c.install) ? (i.add(c), c.install(a, ...u)) : q(c) ? (i.add(c), c(a, ...u)) : process.env.NODE_ENV !== "production" && D('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(c) {
        return s.mixins.includes(c) ? process.env.NODE_ENV !== "production" && D("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : s.mixins.push(c), a;
      },
      component(c, u) {
        return process.env.NODE_ENV !== "production" && as(c, s.config), u ? (process.env.NODE_ENV !== "production" && s.components[c] && D(`Component "${c}" has already been registered in target app.`), s.components[c] = u, a) : s.components[c];
      },
      directive(c, u) {
        return process.env.NODE_ENV !== "production" && ga(c), u ? (process.env.NODE_ENV !== "production" && s.directives[c] && D(`Directive "${c}" has already been registered in target app.`), s.directives[c] = u, a) : s.directives[c];
      },
      mount(c, u, f) {
        if (l)
          process.env.NODE_ENV !== "production" && D("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && D("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const d = _e(o, r);
          return d.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(lt(d), c, f);
          }), u && t ? t(d, c) : e(d, c, f), l = !0, a._container = c, c.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = d.component, nf(a, Li)), hr(d.component) || d.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, of(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && D("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return process.env.NODE_ENV !== "production" && c in s.provides && D(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), s.provides[c] = u, a;
      }
    };
    return a;
  };
}
function is(e, t, n, o, r = !1) {
  if (H(e)) {
    e.forEach((d, m) => is(d, t && (H(t) ? t[m] : t), n, o, r));
    return;
  }
  if (Wn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? hr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    D("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = t && t.r, u = l.refs === fe ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== a && (ve(c) ? (u[c] = null, X(f, c) && (f[c] = null)) : De(c) && (c.value = null)), q(a))
    Ot(a, l, 12, [i, u]);
  else {
    const d = ve(a), m = De(a);
    if (d || m) {
      const g = () => {
        if (e.f) {
          const y = d ? X(f, a) ? f[a] : u[a] : a.value;
          r ? H(y) && Rs(y, s) : H(y) ? y.includes(s) || y.push(s) : d ? (u[a] = [s], X(f, a) && (f[a] = u[a])) : (a.value = [s], e.k && (u[e.k] = a.value));
        } else
          d ? (u[a] = i, X(f, a) && (f[a] = i)) : m ? (a.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && D("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (g.id = -1, Ke(g, n)) : g();
    } else
      process.env.NODE_ENV !== "production" && D("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let Fn, Mt;
function _t(e, t) {
  e.appContext.config.performance && Go() && Mt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && af(e, t, Go() ? Mt.now() : Date.now());
}
function wt(e, t) {
  if (e.appContext.config.performance && Go()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Mt.mark(o), Mt.measure(`<${mr(e, e.type)}> ${t}`, n, o), Mt.clearMarks(n), Mt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && cf(e, t, Go() ? Mt.now() : Date.now());
}
function Go() {
  return Fn !== void 0 || (typeof window < "u" && window.performance ? (Fn = !0, Mt = window.performance) : Fn = !1), Fn;
}
function td() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ke = yf;
function nd(e) {
  return od(e);
}
function od(e, t) {
  td();
  const n = Al();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && sa(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: a, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m = Ie, insertStaticContent: g } = e, y = (p, h, v, w = null, b = null, P = null, R = !1, C = null, A = process.env.NODE_ENV !== "production" && Ht ? !1 : !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Zt(p, h) && (w = $(p), He(p, b, P, !0), p = null), h.patchFlag === -2 && (A = !1, h.dynamicChildren = null);
    const { type: x, ref: j, shapeFlag: M } = h;
    switch (x) {
      case go:
        N(p, h, v, w);
        break;
      case Fe:
        O(p, h, v, w);
        break;
      case Jn:
        p == null ? S(h, v, w, R) : process.env.NODE_ENV !== "production" && k(p, h, v, R);
        break;
      case Se:
        ae(p, h, v, w, b, P, R, C, A);
        break;
      default:
        M & 1 ? ee(p, h, v, w, b, P, R, C, A) : M & 6 ? Xe(p, h, v, w, b, P, R, C, A) : M & 64 || M & 128 ? x.process(p, h, v, w, b, P, R, C, A, L) : process.env.NODE_ENV !== "production" && D("Invalid VNode type:", x, `(${typeof x})`);
    }
    j != null && b && is(j, p && p.ref, P, h || p, !h);
  }, N = (p, h, v, w) => {
    if (p == null)
      o(h.el = l(h.children), v, w);
    else {
      const b = h.el = p.el;
      h.children !== p.children && c(b, h.children);
    }
  }, O = (p, h, v, w) => {
    p == null ? o(h.el = a(h.children || ""), v, w) : h.el = p.el;
  }, S = (p, h, v, w) => {
    [p.el, p.anchor] = g(p.children, h, v, w, p.el, p.anchor);
  }, k = (p, h, v, w) => {
    if (h.children !== p.children) {
      const b = d(p.anchor);
      W(p), [h.el, h.anchor] = g(h.children, v, b, w);
    } else
      h.el = p.el, h.anchor = p.anchor;
  }, I = ({ el: p, anchor: h }, v, w) => {
    let b;
    for (; p && p !== h; )
      b = d(p), o(p, v, w), p = b;
    o(h, v, w);
  }, W = ({ el: p, anchor: h }) => {
    let v;
    for (; p && p !== h; )
      v = d(p), r(p), p = v;
    r(h);
  }, ee = (p, h, v, w, b, P, R, C, A) => {
    R = R || h.type === "svg", p == null ? se(h, v, w, b, P, R, C, A) : te(p, h, b, P, R, C, A);
  }, se = (p, h, v, w, b, P, R, C) => {
    let A, x;
    const { type: j, props: M, shapeFlag: B, transition: z, dirs: Z } = p;
    if (A = p.el = i(p.type, P, M && M.is, M), B & 8 ? u(A, p.children) : B & 16 && Q(p.children, A, null, w, b, P && j !== "foreignObject", R, C), Z && Jt(p, null, w, "created"), M) {
      for (const ue in M)
        ue !== "value" && !Ro(ue) && s(A, ue, null, M[ue], P, p.children, w, b, E);
      "value" in M && s(A, "value", null, M.value), (x = M.onVnodeBeforeMount) && ut(x, w, p);
    }
    K(A, p, p.scopeId, R, w), process.env.NODE_ENV !== "production" && (Object.defineProperty(A, "__vnode", {
      value: p,
      enumerable: !1
    }), Object.defineProperty(A, "__vueParentComponent", {
      value: w,
      enumerable: !1
    })), Z && Jt(p, null, w, "beforeMount");
    const pe = (!b || b && !b.pendingBranch) && z && !z.persisted;
    pe && z.beforeEnter(A), o(A, h, v), ((x = M && M.onVnodeMounted) || pe || Z) && Ke(() => {
      x && ut(x, w, p), pe && z.enter(A), Z && Jt(p, null, w, "mounted");
    }, b);
  }, K = (p, h, v, w, b) => {
    if (v && m(p, v), w)
      for (let P = 0; P < w.length; P++)
        m(p, w[P]);
    if (b) {
      let P = b.subTree;
      if (process.env.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && (P = ua(P.children) || P), h === P) {
        const R = b.vnode;
        K(p, R, R.scopeId, R.slotScopeIds, b.parent);
      }
    }
  }, Q = (p, h, v, w, b, P, R, C, A = 0) => {
    for (let x = A; x < p.length; x++) {
      const j = p[x] = C ? Ft(p[x]) : st(p[x]);
      y(null, j, h, v, w, b, P, R, C);
    }
  }, te = (p, h, v, w, b, P, R) => {
    const C = h.el = p.el;
    let { patchFlag: A, dynamicChildren: x, dirs: j } = h;
    A |= p.patchFlag & 16;
    const M = p.props || fe, B = h.props || fe;
    let z;
    v && Gt(v, !1), (z = B.onVnodeBeforeUpdate) && ut(z, v, h, p), j && Jt(h, p, v, "beforeUpdate"), v && Gt(v, !0), process.env.NODE_ENV !== "production" && Ht && (A = 0, R = !1, x = null);
    const Z = b && h.type !== "foreignObject";
    if (x ? (ce(p.dynamicChildren, x, C, v, w, Z, P), process.env.NODE_ENV !== "production" && v && v.type.__hmrId && zn(p, h)) : R || me(p, h, C, null, v, w, Z, P, !1), A > 0) {
      if (A & 16)
        de(C, h, M, B, v, w, b);
      else if (A & 2 && M.class !== B.class && s(C, "class", null, B.class, b), A & 4 && s(C, "style", M.style, B.style, b), A & 8) {
        const pe = h.dynamicProps;
        for (let ue = 0; ue < pe.length; ue++) {
          const xe = pe[ue], ot = M[xe], yn = B[xe];
          (yn !== ot || xe === "value") && s(C, xe, ot, yn, b, p.children, v, w, E);
        }
      }
      A & 1 && p.children !== h.children && u(C, h.children);
    } else
      !R && x == null && de(C, h, M, B, v, w, b);
    ((z = B.onVnodeUpdated) || j) && Ke(() => {
      z && ut(z, v, h, p), j && Jt(h, p, v, "updated");
    }, w);
  }, ce = (p, h, v, w, b, P, R) => {
    for (let C = 0; C < h.length; C++) {
      const A = p[C], x = h[C], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && (A.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(A, x) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 70) ? f(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      y(A, x, j, null, w, b, P, R, !0);
    }
  }, de = (p, h, v, w, b, P, R) => {
    if (v !== w) {
      if (v !== fe)
        for (const C in v)
          !Ro(C) && !(C in w) && s(p, C, v[C], null, R, h.children, b, P, E);
      for (const C in w) {
        if (Ro(C))
          continue;
        const A = w[C], x = v[C];
        A !== x && C !== "value" && s(p, C, x, A, R, h.children, b, P, E);
      }
      "value" in w && s(p, "value", v.value, w.value);
    }
  }, ae = (p, h, v, w, b, P, R, C, A) => {
    const x = h.el = p ? p.el : l(""), j = h.anchor = p ? p.anchor : l("");
    let { patchFlag: M, dynamicChildren: B, slotScopeIds: z } = h;
    process.env.NODE_ENV !== "production" && (Ht || M & 2048) && (M = 0, A = !1, B = null), z && (C = C ? C.concat(z) : z), p == null ? (o(x, v, w), o(j, v, w), Q(h.children, v, j, b, P, R, C, A)) : M > 0 && M & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (ce(p.dynamicChildren, B, v, b, P, R, C), process.env.NODE_ENV !== "production" && b && b.type.__hmrId ? zn(p, h) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (h.key != null || b && h === b.subTree) && zn(
        p,
        h,
        !0
        /* shallow */
      )
    )) : me(p, h, v, j, b, P, R, C, A);
  }, Xe = (p, h, v, w, b, P, R, C, A) => {
    h.slotScopeIds = C, p == null ? h.shapeFlag & 512 ? b.ctx.activate(h, v, w, R, A) : be(h, v, w, b, P, R, A) : he(p, h, A);
  }, be = (p, h, v, w, b, P, R) => {
    const C = p.component = gd(p, w, b);
    if (process.env.NODE_ENV !== "production" && C.type.__hmrId && Xu(C), process.env.NODE_ENV !== "production" && ($o(p), _t(C, "mount")), mo(p) && (C.ctx.renderer = L), process.env.NODE_ENV !== "production" && _t(C, "init"), yd(C), process.env.NODE_ENV !== "production" && wt(C, "init"), C.asyncDep) {
      if (b && b.registerDep(C, F), !p.el) {
        const A = C.subTree = _e(Fe);
        O(null, A, h, v);
      }
      return;
    }
    F(C, p, h, v, b, P, R), process.env.NODE_ENV !== "production" && (Vo(), wt(C, "mount"));
  }, he = (p, h, v) => {
    const w = h.component = p.component;
    if (mf(p, h, v))
      if (w.asyncDep && !w.asyncResolved) {
        process.env.NODE_ENV !== "production" && $o(h), U(w, h, v), process.env.NODE_ENV !== "production" && Vo();
        return;
      } else
        w.next = h, Yu(w.update), w.update();
    else
      h.el = p.el, w.vnode = h;
  }, F = (p, h, v, w, b, P, R) => {
    const C = () => {
      if (p.isMounted) {
        let { next: j, bu: M, u: B, parent: z, vnode: Z } = p, pe = j, ue;
        process.env.NODE_ENV !== "production" && $o(j || p.vnode), Gt(p, !1), j ? (j.el = Z.el, U(p, j, R)) : j = Z, M && bn(M), (ue = j.props && j.props.onVnodeBeforeUpdate) && ut(ue, z, j, Z), Gt(p, !0), process.env.NODE_ENV !== "production" && _t(p, "render");
        const xe = Sr(p);
        process.env.NODE_ENV !== "production" && wt(p, "render");
        const ot = p.subTree;
        p.subTree = xe, process.env.NODE_ENV !== "production" && _t(p, "patch"), y(
          ot,
          xe,
          // parent may have changed if it's in a teleport
          f(ot.el),
          // anchor may have changed if it's in a fragment
          $(ot),
          p,
          b,
          P
        ), process.env.NODE_ENV !== "production" && wt(p, "patch"), j.el = xe.el, pe === null && gf(p, xe.el), B && Ke(B, b), (ue = j.props && j.props.onVnodeUpdated) && Ke(() => ut(ue, z, j, Z), b), process.env.NODE_ENV !== "production" && ia(p), process.env.NODE_ENV !== "production" && Vo();
      } else {
        let j;
        const { el: M, props: B } = h, { bm: z, m: Z, parent: pe } = p, ue = Wn(h);
        if (Gt(p, !1), z && bn(z), !ue && (j = B && B.onVnodeBeforeMount) && ut(j, pe, h), Gt(p, !0), M && Ee) {
          const xe = () => {
            process.env.NODE_ENV !== "production" && _t(p, "render"), p.subTree = Sr(p), process.env.NODE_ENV !== "production" && wt(p, "render"), process.env.NODE_ENV !== "production" && _t(p, "hydrate"), Ee(M, p.subTree, p, b, null), process.env.NODE_ENV !== "production" && wt(p, "hydrate");
          };
          ue ? h.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && xe()
          ) : xe();
        } else {
          process.env.NODE_ENV !== "production" && _t(p, "render");
          const xe = p.subTree = Sr(p);
          process.env.NODE_ENV !== "production" && wt(p, "render"), process.env.NODE_ENV !== "production" && _t(p, "patch"), y(null, xe, v, w, p, b, P), process.env.NODE_ENV !== "production" && wt(p, "patch"), h.el = xe.el;
        }
        if (Z && Ke(Z, b), !ue && (j = B && B.onVnodeMounted)) {
          const xe = h;
          Ke(() => ut(j, pe, xe), b);
        }
        (h.shapeFlag & 256 || pe && Wn(pe.vnode) && pe.vnode.shapeFlag & 256) && p.a && Ke(p.a, b), p.isMounted = !0, process.env.NODE_ENV !== "production" && rf(p), h = v = w = null;
      }
    }, A = p.effect = new Fs(
      C,
      () => ur(x),
      p.scope
      // track it in component's effect scope
    ), x = p.update = () => A.run();
    x.id = p.uid, Gt(p, !0), process.env.NODE_ENV !== "production" && (A.onTrack = p.rtc ? (j) => bn(p.rtc, j) : void 0, A.onTrigger = p.rtg ? (j) => bn(p.rtg, j) : void 0, x.ownerInstance = p), x();
  }, U = (p, h, v) => {
    h.component = p;
    const w = p.vnode.props;
    p.vnode = h, p.next = null, Kf(p, h.props, w, v), Xf(p, h.children, v), mn(), _i(), gn();
  }, me = (p, h, v, w, b, P, R, C, A = !1) => {
    const x = p && p.children, j = p ? p.shapeFlag : 0, M = h.children, { patchFlag: B, shapeFlag: z } = h;
    if (B > 0) {
      if (B & 128) {
        ze(x, M, v, w, b, P, R, C, A);
        return;
      } else if (B & 256) {
        Ce(x, M, v, w, b, P, R, C, A);
        return;
      }
    }
    z & 8 ? (j & 16 && E(x, b, P), M !== x && u(v, M)) : j & 16 ? z & 16 ? ze(x, M, v, w, b, P, R, C, A) : E(x, b, P, !0) : (j & 8 && u(v, ""), z & 16 && Q(M, v, w, b, P, R, C, A));
  }, Ce = (p, h, v, w, b, P, R, C, A) => {
    p = p || On, h = h || On;
    const x = p.length, j = h.length, M = Math.min(x, j);
    let B;
    for (B = 0; B < M; B++) {
      const z = h[B] = A ? Ft(h[B]) : st(h[B]);
      y(p[B], z, v, null, b, P, R, C, A);
    }
    x > j ? E(p, b, P, !0, !1, M) : Q(h, v, w, b, P, R, C, A, M);
  }, ze = (p, h, v, w, b, P, R, C, A) => {
    let x = 0;
    const j = h.length;
    let M = p.length - 1, B = j - 1;
    for (; x <= M && x <= B; ) {
      const z = p[x], Z = h[x] = A ? Ft(h[x]) : st(h[x]);
      if (Zt(z, Z))
        y(z, Z, v, null, b, P, R, C, A);
      else
        break;
      x++;
    }
    for (; x <= M && x <= B; ) {
      const z = p[M], Z = h[B] = A ? Ft(h[B]) : st(h[B]);
      if (Zt(z, Z))
        y(z, Z, v, null, b, P, R, C, A);
      else
        break;
      M--, B--;
    }
    if (x > M) {
      if (x <= B) {
        const z = B + 1, Z = z < j ? h[z].el : w;
        for (; x <= B; )
          y(null, h[x] = A ? Ft(h[x]) : st(h[x]), v, Z, b, P, R, C, A), x++;
      }
    } else if (x > B)
      for (; x <= M; )
        He(p[x], b, P, !0), x++;
    else {
      const z = x, Z = x, pe = /* @__PURE__ */ new Map();
      for (x = Z; x <= B; x++) {
        const Me = h[x] = A ? Ft(h[x]) : st(h[x]);
        Me.key != null && (process.env.NODE_ENV !== "production" && pe.has(Me.key) && D("Duplicate keys found during update:", JSON.stringify(Me.key), "Make sure keys are unique."), pe.set(Me.key, x));
      }
      let ue, xe = 0;
      const ot = B - Z + 1;
      let yn = !1, ai = 0;
      const kn = new Array(ot);
      for (x = 0; x < ot; x++)
        kn[x] = 0;
      for (x = z; x <= M; x++) {
        const Me = p[x];
        if (xe >= ot) {
          He(Me, b, P, !0);
          continue;
        }
        let ct;
        if (Me.key != null)
          ct = pe.get(Me.key);
        else
          for (ue = Z; ue <= B; ue++)
            if (kn[ue - Z] === 0 && Zt(Me, h[ue])) {
              ct = ue;
              break;
            }
        ct === void 0 ? He(Me, b, P, !0) : (kn[ct - Z] = x + 1, ct >= ai ? ai = ct : yn = !0, y(Me, h[ct], v, null, b, P, R, C, A), xe++);
      }
      const ci = yn ? rd(kn) : On;
      for (ue = ci.length - 1, x = ot - 1; x >= 0; x--) {
        const Me = Z + x, ct = h[Me], ui = Me + 1 < j ? h[Me + 1].el : w;
        kn[x] === 0 ? y(null, ct, v, ui, b, P, R, C, A) : yn && (ue < 0 || x !== ci[ue] ? Oe(
          ct,
          v,
          ui,
          2
          /* MoveType.REORDER */
        ) : ue--);
      }
    }
  }, Oe = (p, h, v, w, b = null) => {
    const { el: P, type: R, transition: C, children: A, shapeFlag: x } = p;
    if (x & 6) {
      Oe(p.component.subTree, h, v, w);
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
    if (R === Se) {
      o(P, h, v);
      for (let M = 0; M < A.length; M++)
        Oe(A[M], h, v, w);
      o(p.anchor, h, v);
      return;
    }
    if (R === Jn) {
      I(p, h, v);
      return;
    }
    if (w !== 2 && x & 1 && C)
      if (w === 0)
        C.beforeEnter(P), o(P, h, v), Ke(() => C.enter(P), b);
      else {
        const { leave: M, delayLeave: B, afterLeave: z } = C, Z = () => o(P, h, v), pe = () => {
          M(P, () => {
            Z(), z && z();
          });
        };
        B ? B(P, Z, pe) : pe();
      }
    else
      o(P, h, v);
  }, He = (p, h, v, w = !1, b = !1) => {
    const { type: P, props: R, ref: C, children: A, dynamicChildren: x, shapeFlag: j, patchFlag: M, dirs: B } = p;
    if (C != null && is(C, null, v, p, !0), j & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const z = j & 1 && B, Z = !Wn(p);
    let pe;
    if (Z && (pe = R && R.onVnodeBeforeUnmount) && ut(pe, h, p), j & 6)
      Pt(p.component, v, w);
    else {
      if (j & 128) {
        p.suspense.unmount(v, w);
        return;
      }
      z && Jt(p, null, h, "beforeUnmount"), j & 64 ? p.type.remove(p, h, v, b, L, w) : x && (P !== Se || M > 0 && M & 64) ? E(x, h, v, !1, !0) : (P === Se && M & 384 || !b && j & 16) && E(A, h, v), w && at(p);
    }
    (Z && (pe = R && R.onVnodeUnmounted) || z) && Ke(() => {
      pe && ut(pe, h, p), z && Jt(p, null, h, "unmounted");
    }, v);
  }, at = (p) => {
    const { type: h, el: v, anchor: w, transition: b } = p;
    if (h === Se) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && b && !b.persisted ? p.children.forEach((R) => {
        R.type === Fe ? r(R.el) : at(R);
      }) : _o(v, w);
      return;
    }
    if (h === Jn) {
      W(p);
      return;
    }
    const P = () => {
      r(v), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (p.shapeFlag & 1 && b && !b.persisted) {
      const { leave: R, delayLeave: C } = b, A = () => R(v, P);
      C ? C(p.el, P, A) : A();
    } else
      P();
  }, _o = (p, h) => {
    let v;
    for (; p !== h; )
      v = d(p), r(p), p = v;
    r(h);
  }, Pt = (p, h, v) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && Zu(p);
    const { bum: w, scope: b, update: P, subTree: R, um: C } = p;
    w && bn(w), b.stop(), P && (P.active = !1, He(R, p, h, v)), C && Ke(C, h), Ke(() => {
      p.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), process.env.NODE_ENV !== "production" && lf(p);
  }, E = (p, h, v, w = !1, b = !1, P = 0) => {
    for (let R = P; R < p.length; R++)
      He(p[R], h, v, w, b);
  }, $ = (p) => p.shapeFlag & 6 ? $(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : d(p.anchor || p.el), V = (p, h, v) => {
    p == null ? h._vnode && He(h._vnode, null, null, !0) : y(h._vnode || null, p, h, null, null, null, v), _i(), na(), h._vnode = p;
  }, L = {
    p: y,
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
  return t && ([ne, Ee] = t(L)), {
    render: V,
    hydrate: ne,
    createApp: ed(V, ne)
  };
}
function Gt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function zn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (H(o) && H(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Ft(r[s]), l.el = i.el), n || zn(i, l)), l.type === go && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === Fe && !l.el && (l.el = i.el);
    }
}
function rd(e) {
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
const sd = (e) => e.__isTeleport, Sn = (e) => e && (e.disabled || e.disabled === ""), Vi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ls = (e, t) => {
  const n = e && e.to;
  if (ve(n))
    if (t) {
      const o = t(n);
      return o || process.env.NODE_ENV !== "production" && D(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), o;
    } else
      return process.env.NODE_ENV !== "production" && D("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !Sn(e) && D(`Invalid Teleport target: ${n}`), n;
}, id = {
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, l, a, c) {
    const { mc: u, pc: f, pbc: d, o: { insert: m, querySelector: g, createText: y, createComment: N } } = c, O = Sn(t.props);
    let { shapeFlag: S, children: k, dynamicChildren: I } = t;
    if (process.env.NODE_ENV !== "production" && Ht && (a = !1, I = null), e == null) {
      const W = t.el = process.env.NODE_ENV !== "production" ? N("teleport start") : y(""), ee = t.anchor = process.env.NODE_ENV !== "production" ? N("teleport end") : y("");
      m(W, n, o), m(ee, n, o);
      const se = t.target = ls(t.props, g), K = t.targetAnchor = y("");
      se ? (m(K, se), i = i || Vi(se)) : process.env.NODE_ENV !== "production" && !O && D("Invalid Teleport target on mount:", se, `(${typeof se})`);
      const Q = (te, ce) => {
        S & 16 && u(k, te, ce, r, s, i, l, a);
      };
      O ? Q(n, ee) : se && Q(se, K);
    } else {
      t.el = e.el;
      const W = t.anchor = e.anchor, ee = t.target = e.target, se = t.targetAnchor = e.targetAnchor, K = Sn(e.props), Q = K ? n : ee, te = K ? W : se;
      if (i = i || Vi(ee), I ? (d(e.dynamicChildren, I, Q, r, s, i, l), zn(e, t, !0)) : a || f(e, t, Q, te, r, s, i, l, !1), O)
        K || Co(
          t,
          n,
          W,
          c,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ce = t.target = ls(t.props, g);
        ce ? Co(
          t,
          ce,
          null,
          c,
          0
          /* TeleportMoveTypes.TARGET_CHANGE */
        ) : process.env.NODE_ENV !== "production" && D("Invalid Teleport target on update:", ee, `(${typeof ee})`);
      } else
        K && Co(
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
    const { shapeFlag: l, children: a, anchor: c, targetAnchor: u, target: f, props: d } = e;
    if (f && s(u), (i || !Sn(d)) && (s(c), l & 16))
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        r(g, t, n, !0, !!g.dynamicChildren);
      }
  },
  move: Co,
  hydrate: ld
};
function Co(e, t, n, { o: { insert: o }, m: r }, s = 2) {
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
function ld(e, t, n, o, r, s, { o: { nextSibling: i, parentNode: l, querySelector: a } }, c) {
  const u = t.target = ls(t.props, a);
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
    Aa(t);
  }
  return t.anchor && i(t.anchor);
}
const ad = id;
function Aa(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Se = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), go = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Fe = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Jn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Gn = [];
let it = null;
function ge(e = !1) {
  Gn.push(it = e ? null : []);
}
function cd() {
  Gn.pop(), it = Gn[Gn.length - 1] || null;
}
let io = 1;
function ki(e) {
  io += e;
}
function Ra(e) {
  return e.dynamicChildren = io > 0 ? it || On : null, cd(), io > 0 && it && it.push(e), e;
}
function Be(e, t, n, o, r, s) {
  return Ra(T(
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
  return Ra(_e(
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
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && _n.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const ud = (...e) => Va(...e), pr = "__vInternal", $a = ({ key: e }) => e ?? null, ko = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ve(e) || De(e) || q(e) ? { i: Ae, r: e, k: t, f: !!n } : e : null;
function T(e, t = null, n = null, o = 0, r = null, s = e === Se ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $a(t),
    ref: t && ko(t),
    scopeId: ca,
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
    ctx: Ae
  };
  return l ? (Js(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ve(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && D("VNode created with invalid key (NaN). VNode type:", a.type), io > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  it && (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && it.push(a), a;
}
const _e = process.env.NODE_ENV !== "production" ? ud : Va;
function Va(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ya) && (process.env.NODE_ENV !== "production" && !e && D(`Invalid vnode type when creating vnode: ${e}.`), e = Fe), Dn(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Js(l, n), io > 0 && !s && it && (l.shapeFlag & 6 ? it[it.indexOf(e)] = l : it.push(l)), l.patchFlag |= -2, l;
  }
  if (ja(e) && (e = e.__vccOpts), t) {
    t = fd(t);
    let { class: l, style: a } = t;
    l && !ve(l) && (t.class = An(l)), le(a) && (Gr(a) && !H(a) && (a = Ne({}, a)), t.style = As(a));
  }
  const i = ve(e) ? 1 : vf(e) ? 128 : sd(e) ? 64 : le(e) ? 4 : q(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Gr(e) && (e = G(e), D("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), T(e, t, n, o, r, i, s, !0);
}
function fd(e) {
  return e ? Gr(e) || pr in e ? Ne({}, e) : e : null;
}
function lt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? pd(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && $a(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? H(r) ? r.concat(ko(t)) : [r, ko(t)] : ko(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && H(i) ? i.map(ka) : i,
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
function ka(e) {
  const t = lt(e);
  return H(e.children) && (t.children = e.children.map(ka)), t;
}
function Fa(e = " ", t = 0) {
  return _e(go, null, e, t);
}
function dd(e, t) {
  const n = _e(Jn, null, e);
  return n.staticCount = t, n;
}
function Pr(e = "", t = !1) {
  return t ? (ge(), xt(Fe, null, e)) : _e(Fe, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? _e(Fe) : H(e) ? _e(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ft(e) : _e(go, null, String(e));
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
      !r && !(pr in t) ? t._ctx = Ae : r === 3 && Ae && (Ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    q(t) ? (t = { default: t, _ctx: Ae }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Fa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = An([t.class, o.class]));
      else if (r === "style")
        t.style = As([t.style, o.style]);
      else if (fo(r)) {
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
const hd = Pa();
let md = 0;
function gd(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || hd, s = {
    uid: md++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new uu(
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
    propsOptions: xa(o, r),
    emitsOptions: aa(o, r),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = $f(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ff.bind(null, s), e.ce && e.ce(s), s;
}
let Pe = null;
const Gs = () => Pe || Ae, Cn = (e) => {
  Pe = e, e.scope.on();
}, fn = () => {
  Pe && Pe.scope.off(), Pe = null;
}, vd = /* @__PURE__ */ zt("slot,component");
function as(e, t) {
  const n = t.isNativeTag || Cl;
  (vd(e) || n(e)) && D("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ia(e) {
  return e.vnode.shapeFlag & 4;
}
let lo = !1;
function yd(e, t = !1) {
  lo = t;
  const { props: n, children: o } = e.vnode, r = Ia(e);
  Bf(e, n, r, t), Qf(e, o);
  const s = r ? Ed(e, t) : void 0;
  return lo = !1, s;
}
function Ed(e, t) {
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
        ga(s[i]);
    }
    o.compilerOptions && La() && D('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ql(new Proxy(e.ctx, wa)), process.env.NODE_ENV !== "production" && Vf(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? bd(e) : null;
    Cn(e), mn();
    const i = Ot(r, e, 0, [process.env.NODE_ENV !== "production" ? Nn(e.props) : e.props, s]);
    if (gn(), fn(), $s(i)) {
      if (i.then(fn, fn), t)
        return i.then((l) => {
          Fi(e, l, t);
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
        D(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Fi(e, i, t);
  } else
    Ma(e, t);
}
function Fi(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) ? (process.env.NODE_ENV !== "production" && Dn(t) && D("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Yl(t), process.env.NODE_ENV !== "production" && kf(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && D(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ma(e, n);
}
let cs;
const La = () => !cs;
function Ma(e, t, n) {
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
  Cn(e), mn(), If(e), gn(), fn(), process.env.NODE_ENV !== "production" && !o.render && e.render === Ie && !t && (o.template ? D(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : D("Component is missing template or render function."));
}
function Ii(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return qo(), We(e, "get", "$attrs"), t[n];
    },
    set() {
      return D("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return D("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return We(e, "get", "$attrs"), t[n];
    }
  });
}
function bd(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && D("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Ii(e));
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
      return n || (n = Ii(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function hr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Yl(ql(e.exposed)), {
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
const _d = /(?:^|[-_])(\w)/g, wd = (e) => e.replace(_d, (t) => t.toUpperCase()).replace(/[-_]/g, "");
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
  return o ? wd(o) : n ? "App" : "Anonymous";
}
function ja(e) {
  return q(e) && "__vccOpts" in e;
}
const J = (e, t) => Bu(e, t, lo);
function Te(e, t, n) {
  const o = arguments.length;
  return o === 2 ? le(t) && !H(t) ? Dn(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Dn(n) && (n = [n]), _e(e, t, n));
}
const Nd = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Od = () => {
  {
    const e = we(Nd);
    return e || process.env.NODE_ENV !== "production" && D("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Ar(e) {
  return !!(e && e.__v_isShallow);
}
function xd() {
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
        ["span", e, Ar(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${qt(f) ? " (readonly)" : ""}`
      ] : qt(f) ? [
        "div",
        {},
        ["span", e, Ar(f) ? "ShallowReadonly" : "Readonly"],
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
    return d = Ne({}, d), Object.keys(d).length ? [
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
    if (q(m))
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
    return Ar(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Li = "3.2.45", Sd = "http://www.w3.org/2000/svg", en = typeof document < "u" ? document : null, Mi = en && /* @__PURE__ */ en.createElement("template"), Dd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? en.createElementNS(Sd, e) : en.createElement(e, n ? { is: n } : void 0);
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
      Mi.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = Mi.content;
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
function Cd(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Td(e, t, n) {
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
const Pd = /[^\\];\s*$/, ji = /\s*!important$/;
function us(e, t, n) {
  if (H(n))
    n.forEach((o) => us(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Pd.test(n) && D(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Ad(e, t);
    ji.test(n) ? e.setProperty(Dt(o), n.replace(ji, ""), "important") : e[o] = n;
  }
}
const Ui = ["Webkit", "Moz", "ms"], Rr = {};
function Ad(e, t) {
  const n = Rr[t];
  if (n)
    return n;
  let o = vt(t);
  if (o !== "filter" && o in e)
    return Rr[t] = o;
  o = pn(o);
  for (let r = 0; r < Ui.length; r++) {
    const s = Ui[r] + o;
    if (s in e)
      return Rr[t] = s;
  }
  return t;
}
const Bi = "http://www.w3.org/1999/xlink";
function Rd(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Bi, t.slice(6, t.length)) : e.setAttributeNS(Bi, t, n);
  else {
    const s = nu(t);
    n == null || s && !Sl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function $d(e, t, n, o, r, s, i) {
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
    a === "boolean" ? n = Sl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !l && D(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && e.removeAttribute(t);
}
function tn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Vd(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function kd(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, a] = Fd(t);
    if (o) {
      const c = s[t] = Md(o, r);
      tn(e, l, c, a);
    } else
      i && (Vd(e, l, i, a), s[t] = void 0);
  }
}
const Hi = /(?:Once|Passive|Capture)$/;
function Fd(e) {
  let t;
  if (Hi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Hi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Dt(e.slice(2)), t];
}
let $r = 0;
const Id = /* @__PURE__ */ Promise.resolve(), Ld = () => $r || (Id.then(() => $r = 0), $r = Date.now());
function Md(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    et(jd(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Ld(), n;
}
function jd(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Ki = /^on[a-z]/, Ud = (e, t, n, o, r = !1, s, i, l, a) => {
  t === "class" ? Cd(e, o, r) : t === "style" ? Td(e, n, o) : fo(t) ? Uo(t) || kd(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bd(e, t, o, r)) ? $d(e, t, o, s, i, l, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Rd(e, t, o, r));
};
function Bd(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Ki.test(t) && q(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ki.test(t) && ve(n) ? !1 : t in e;
}
const Hd = {
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
wf.props;
const Yo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => bn(t, n) : t;
};
function Kd(e) {
  e.target.composing = !0;
}
function qi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Yn = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e._assign = Yo(r);
    const s = o || r.props && r.props.type === "number";
    tn(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), s && (l = to(l)), e._assign(l);
    }), n && tn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (tn(e, "compositionstart", Kd), tn(e, "compositionend", qi), tn(e, "change", qi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, s) {
    if (e._assign = Yo(s), e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (r || e.type === "number") && to(e.value) === t))
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
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map((i) => n ? to(Qo(i)) : Qo(i));
      e._assign(e.multiple ? r ? new Set(s) : s : s[0]);
    }), e._assign = Yo(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Wi(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Yo(n);
  },
  updated(e, { value: t }) {
    Wi(e, t);
  }
};
function Wi(e, t) {
  const n = e.multiple;
  if (n && !H(t) && !or(t)) {
    process.env.NODE_ENV !== "production" && D(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const s = e.options[o], i = Qo(s);
    if (n)
      H(t) ? s.selected = ru(t, i) > -1 : s.selected = t.has(i);
    else if (nr(Qo(s), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Qo(e) {
  return "_value" in e ? e._value : e.value;
}
const qd = ["ctrl", "shift", "alt", "meta"], Wd = {
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
  exact: (e, t) => qd.some((n) => e[`${n}Key`] && !t.includes(n))
}, zi = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = Wd[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, zd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Jd = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const o = Dt(n.key);
  if (t.some((r) => r === o || zd[r] === o))
    return e(n);
}, Gd = /* @__PURE__ */ Ne({ patchProp: Ud }, Dd);
let Ji;
function Yd() {
  return Ji || (Ji = nd(Gd));
}
const Qd = (...e) => {
  const t = Yd().createApp(...e);
  process.env.NODE_ENV !== "production" && (Xd(t), Zd(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = ep(o);
    if (!r)
      return;
    const s = t._component;
    !q(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Xd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Zc(t) || eu(t),
    writable: !1
  });
}
function Zd(e) {
  if (La()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        D("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return D(o), n;
      },
      set() {
        D(o);
      }
    });
  }
}
function ep(e) {
  if (ve(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && D(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && D('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function tp() {
  xd();
}
process.env.NODE_ENV !== "production" && tp();
const np = /* @__PURE__ */ ye({
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
    return (o, r) => (ge(), xt(Ea(t.element.type), {
      class: An(ke(n)),
      key: t.element.id,
      innerHTML: t.element.content
    }, null, 8, ["class", "innerHTML"]));
  }
}), op = ["src", "alt"], rp = /* @__PURE__ */ ye({
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
    }, null, 8, op));
  }
}), sp = /* @__PURE__ */ ye({
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
      class: An(ke(n))
    }, [
      (ge(!0), Be(Se, null, zo(t.container.elements, (s) => (ge(), xt(Ea(s.type === "img" ? rp : np), {
        onClick: (i) => o.$emit("selectElement", s),
        element: s
      }, null, 8, ["onClick", "element"]))), 256))
    ], 2));
  }
});
function Ua(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ip } = Object.prototype, { getPrototypeOf: Qs } = Object, gr = ((e) => (t) => {
  const n = ip.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Et = (e) => (e = e.toLowerCase(), (t) => gr(t) === e), vr = (e) => (t) => typeof t === e, { isArray: $n } = Array, ao = vr("undefined");
function lp(e) {
  return e !== null && !ao(e) && e.constructor !== null && !ao(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ba = Et("ArrayBuffer");
function ap(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ba(e.buffer), t;
}
const cp = vr("string"), tt = vr("function"), Ha = vr("number"), yr = (e) => e !== null && typeof e == "object", up = (e) => e === !0 || e === !1, Fo = (e) => {
  if (gr(e) !== "object")
    return !1;
  const t = Qs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, fp = Et("Date"), dp = Et("File"), pp = Et("Blob"), hp = Et("FileList"), mp = (e) => yr(e) && tt(e.pipe), gp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = gr(e)) === "formdata" || t === "object" && tt(e.toString) && e.toString() === "[object FormData]"));
}, vp = Et("URLSearchParams"), yp = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, r;
  if (typeof e != "object" && (e = [e]), $n(e))
    for (o = 0, r = e.length; o < r; o++)
      t.call(null, e[o], o, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let l;
    for (o = 0; o < i; o++)
      l = s[o], t.call(null, e[l], l, e);
  }
}
function Ka(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let o = n.length, r;
  for (; o-- > 0; )
    if (r = n[o], t === r.toLowerCase())
      return r;
  return null;
}
const qa = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Wa = (e) => !ao(e) && e !== qa;
function ds() {
  const { caseless: e } = Wa(this) && this || {}, t = {}, n = (o, r) => {
    const s = e && Ka(t, r) || r;
    Fo(t[s]) && Fo(o) ? t[s] = ds(t[s], o) : Fo(o) ? t[s] = ds({}, o) : $n(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, r = arguments.length; o < r; o++)
    arguments[o] && vo(arguments[o], n);
  return t;
}
const Ep = (e, t, n, { allOwnKeys: o } = {}) => (vo(t, (r, s) => {
  n && tt(r) ? e[s] = Ua(r, n) : e[s] = r;
}, { allOwnKeys: o }), e), bp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), _p = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, wp = (e, t, n, o) => {
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
}, Np = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, Op = (e) => {
  if (!e)
    return null;
  if ($n(e))
    return e;
  let t = e.length;
  if (!Ha(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, xp = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Qs(Uint8Array)), Sp = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, Dp = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, Cp = Et("HTMLFormElement"), Tp = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, r) {
    return o.toUpperCase() + r;
  }
), Gi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Pp = Et("RegExp"), za = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  vo(n, (r, s) => {
    t(r, s, e) !== !1 && (o[s] = r);
  }), Object.defineProperties(e, o);
}, Ap = (e) => {
  za(e, (t, n) => {
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
}, Rp = (e, t) => {
  const n = {}, o = (r) => {
    r.forEach((s) => {
      n[s] = !0;
    });
  };
  return $n(e) ? o(e) : o(String(e).split(t)), n;
}, $p = () => {
}, Vp = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Vr = "abcdefghijklmnopqrstuvwxyz", Yi = "0123456789", Ja = {
  DIGIT: Yi,
  ALPHA: Vr,
  ALPHA_DIGIT: Vr + Vr.toUpperCase() + Yi
}, kp = (e = 16, t = Ja.ALPHA_DIGIT) => {
  let n = "";
  const { length: o } = t;
  for (; e--; )
    n += t[Math.random() * o | 0];
  return n;
};
function Fp(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ip = (e) => {
  const t = new Array(10), n = (o, r) => {
    if (yr(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[r] = o;
        const s = $n(o) ? [] : {};
        return vo(o, (i, l) => {
          const a = n(i, r + 1);
          !ao(a) && (s[l] = a);
        }), t[r] = void 0, s;
      }
    }
    return o;
  };
  return n(e, 0);
}, Lp = Et("AsyncFunction"), Mp = (e) => e && (yr(e) || tt(e)) && tt(e.then) && tt(e.catch), _ = {
  isArray: $n,
  isArrayBuffer: Ba,
  isBuffer: lp,
  isFormData: gp,
  isArrayBufferView: ap,
  isString: cp,
  isNumber: Ha,
  isBoolean: up,
  isObject: yr,
  isPlainObject: Fo,
  isUndefined: ao,
  isDate: fp,
  isFile: dp,
  isBlob: pp,
  isRegExp: Pp,
  isFunction: tt,
  isStream: mp,
  isURLSearchParams: vp,
  isTypedArray: xp,
  isFileList: hp,
  forEach: vo,
  merge: ds,
  extend: Ep,
  trim: yp,
  stripBOM: bp,
  inherits: _p,
  toFlatObject: wp,
  kindOf: gr,
  kindOfTest: Et,
  endsWith: Np,
  toArray: Op,
  forEachEntry: Sp,
  matchAll: Dp,
  isHTMLForm: Cp,
  hasOwnProperty: Gi,
  hasOwnProp: Gi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: za,
  freezeMethods: Ap,
  toObjectSet: Rp,
  toCamelCase: Tp,
  noop: $p,
  toFiniteNumber: Vp,
  findKey: Ka,
  global: qa,
  isContextDefined: Wa,
  ALPHABET: Ja,
  generateString: kp,
  isSpecCompliantForm: Fp,
  toJSONObject: Ip,
  isAsyncFn: Lp,
  isThenable: Mp
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
const Ga = re.prototype, Ya = {};
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
  Ya[e] = { value: e };
});
Object.defineProperties(re, Ya);
Object.defineProperty(Ga, "isAxiosError", { value: !0 });
re.from = (e, t, n, o, r, s) => {
  const i = Object.create(Ga);
  return _.toFlatObject(e, i, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), re.call(i, e.message, t, n, o, r), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const jp = null;
function ps(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Qa(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qi(e, t, n) {
  return e ? e.concat(t).map(function(r, s) {
    return r = Qa(r), !n && s ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function Up(e) {
  return _.isArray(e) && !e.some(ps);
}
const Bp = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Er(e, t, n) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, N) {
    return !_.isUndefined(N[y]);
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
  function u(g, y, N) {
    let O = g;
    if (g && !N && typeof g == "object") {
      if (_.endsWith(y, "{}"))
        y = o ? y : y.slice(0, -2), g = JSON.stringify(g);
      else if (_.isArray(g) && Up(g) || (_.isFileList(g) || _.endsWith(y, "[]")) && (O = _.toArray(g)))
        return y = Qa(y), O.forEach(function(k, I) {
          !(_.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Qi([y], I, s) : i === null ? y : y + "[]",
            c(k)
          );
        }), !1;
    }
    return ps(g) ? !0 : (t.append(Qi(N, y, s), c(g)), !1);
  }
  const f = [], d = Object.assign(Bp, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ps
  });
  function m(g, y) {
    if (!_.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(g), _.forEach(g, function(O, S) {
        (!(_.isUndefined(O) || O === null) && r.call(
          t,
          O,
          _.isString(S) ? S.trim() : S,
          y,
          d
        )) === !0 && m(O, y ? y.concat(S) : [S]);
      }), f.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Xi(e) {
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
const Xa = Xs.prototype;
Xa.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xa.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, Xi);
  } : Xi;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function Hp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Za(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || Hp, r = n && n.serialize;
  let s;
  if (r ? s = r(t, n) : s = _.isURLSearchParams(t) ? t.toString() : new Xs(t, n).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Kp {
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
const Zi = Kp, ec = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qp = typeof URLSearchParams < "u" ? URLSearchParams : Xs, Wp = typeof FormData < "u" ? FormData : null, zp = typeof Blob < "u" ? Blob : null, Jp = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Gp = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), mt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qp,
    FormData: Wp,
    Blob: zp
  },
  isStandardBrowserEnv: Jp,
  isStandardBrowserWebWorkerEnv: Gp,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Yp(e, t) {
  return Er(e, new mt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, r, s) {
      return mt.isNode && _.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Qp(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Xp(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const r = n.length;
  let s;
  for (o = 0; o < r; o++)
    s = n[o], t[s] = e[s];
  return t;
}
function tc(e) {
  function t(n, o, r, s) {
    let i = n[s++];
    const l = Number.isFinite(+i), a = s >= n.length;
    return i = !i && _.isArray(r) ? r.length : i, a ? (_.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !l) : ((!r[i] || !_.isObject(r[i])) && (r[i] = []), t(n, o, r[i], s) && _.isArray(r[i]) && (r[i] = Xp(r[i])), !l);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (o, r) => {
      t(Qp(o), r, n, 0);
    }), n;
  }
  return null;
}
const Zp = {
  "Content-Type": void 0
};
function eh(e, t, n) {
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
  transitional: ec,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", r = o.indexOf("application/json") > -1, s = _.isObject(t);
    if (s && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return r && r ? JSON.stringify(tc(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Yp(t, this.formSerializer).toString();
      if ((l = _.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Er(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || r ? (n.setContentType("application/json", !1), eh(t)) : t;
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
  br.headers[t] = _.merge(Zp);
});
const Zs = br, th = _.toObjectSet([
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
]), nh = (e) => {
  const t = {};
  let n, o, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), o = i.substring(r + 1).trim(), !(!n || t[n] && th[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, el = Symbol("internals");
function In(e) {
  return e && String(e).trim().toLowerCase();
}
function Io(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Io) : String(e);
}
function oh(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const rh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function sh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function ih(e, t) {
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
      const u = In(a);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = _.findKey(r, u);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = Io(l));
    }
    const i = (l, a) => _.forEach(l, (c, u) => s(c, u, a));
    return _.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : _.isString(t) && (t = t.trim()) && !rh(t) ? i(nh(t), n) : t != null && s(n, t, o), this;
  }
  get(t, n) {
    if (t = In(t), t) {
      const o = _.findKey(this, t);
      if (o) {
        const r = this[o];
        if (!n)
          return r;
        if (n === !0)
          return oh(r);
        if (_.isFunction(n))
          return n.call(this, r, o);
        if (_.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = In(t), t) {
      const o = _.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || kr(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let r = !1;
    function s(i) {
      if (i = In(i), i) {
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
        n[i] = Io(r), delete n[s];
        return;
      }
      const l = t ? sh(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Io(r), o[l] = !0;
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
    const o = (this[el] = this[el] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const l = In(i);
      o[l] || (ih(r, i), o[l] = !0);
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
function nc(e) {
  return !!(e && e.__CANCEL__);
}
function yo(e, t, n) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, n), this.name = "CanceledError";
}
_.inherits(yo, re, {
  __CANCEL__: !0
});
function lh(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new re(
    "Request failed with status code " + n.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const ah = mt.isStandardBrowserEnv ? function() {
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
function ch(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uh(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function oc(e, t) {
  return e && !ch(t) ? uh(e, t) : t;
}
const fh = mt.isStandardBrowserEnv ? function() {
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
function dh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ph(e, t) {
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
function tl(e, t) {
  let n = 0;
  const o = ph(50, 250);
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
const hh = typeof XMLHttpRequest < "u", mh = hh && function(e) {
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
    const u = oc(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Za(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
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
      lh(function(O) {
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
      const y = e.transitional || ec;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), o(new re(
        g,
        y.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        c
      )), c = null;
    }, mt.isStandardBrowserEnv) {
      const m = (e.withCredentials || fh(u)) && e.xsrfCookieName && ah.read(e.xsrfCookieName);
      m && s.set(e.xsrfHeaderName, m);
    }
    r === void 0 && s.setContentType(null), "setRequestHeader" in c && _.forEach(s.toJSON(), function(g, y) {
      c.setRequestHeader(y, g);
    }), _.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", tl(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", tl(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (m) => {
      c && (o(!m || m.type ? new yo(null, e, c) : m), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const d = dh(u);
    if (d && mt.protocols.indexOf(d) === -1) {
      o(new re("Unsupported protocol " + d + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(r || null);
  });
}, Lo = {
  http: jp,
  xhr: mh
};
_.forEach(Lo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const gh = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    for (let r = 0; r < t && (n = e[r], !(o = _.isString(n) ? Lo[n.toLowerCase()] : n)); r++)
      ;
    if (!o)
      throw o === !1 ? new re(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        _.hasOwnProp(Lo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!_.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Lo
};
function Ir(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yo(null, e);
}
function nl(e) {
  return Ir(e), e.headers = St.from(e.headers), e.data = Fr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gh.getAdapter(e.adapter || Zs.adapter)(e).then(function(o) {
    return Ir(e), o.data = Fr.call(
      e,
      e.transformResponse,
      o
    ), o.headers = St.from(o.headers), o;
  }, function(o) {
    return nc(o) || (Ir(e), o && o.response && (o.response.data = Fr.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = St.from(o.response.headers))), Promise.reject(o);
  });
}
const ol = (e) => e instanceof St ? e.toJSON() : e;
function Tn(e, t) {
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
    headers: (c, u) => r(ol(c), ol(u), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = a[u] || r, d = f(e[u], t[u], u);
    _.isUndefined(d) && f !== l || (n[u] = d);
  }), n;
}
const rc = "1.4.0", ei = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ei[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rl = {};
ei.transitional = function(t, n, o) {
  function r(s, i) {
    return "[Axios v" + rc + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new re(
        r(i, " has been removed" + (n ? " in " + n : "")),
        re.ERR_DEPRECATED
      );
    return n && !rl[i] && (rl[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function vh(e, t, n) {
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
  assertOptions: vh,
  validators: ei
}, Rt = hs.validators;
class Xo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Zi(),
      response: new Zi()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Tn(this.defaults, n);
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
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (a = a && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u, f = 0, d;
    if (!a) {
      const g = [nl.bind(this), void 0];
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
      u = nl.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = c.length; f < d; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = Tn(this.defaults, t);
    const n = oc(t.baseURL, t.url);
    return Za(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function(t) {
  Xo.prototype[t] = function(n, o) {
    return this.request(Tn(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(s, i, l) {
      return this.request(Tn(l || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Xo.prototype[t] = n(), Xo.prototype[t + "Form"] = n(!0);
});
const Mo = Xo;
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
      o.reason || (o.reason = new yo(s, i, l), n(o.reason));
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
const yh = ti;
function Eh(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function bh(e) {
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
const _h = ms;
function sc(e) {
  const t = new Mo(e), n = Ua(Mo.prototype.request, t);
  return _.extend(n, Mo.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return sc(Tn(e, r));
  }, n;
}
const Ve = sc(Zs);
Ve.Axios = Mo;
Ve.CanceledError = yo;
Ve.CancelToken = yh;
Ve.isCancel = nc;
Ve.VERSION = rc;
Ve.toFormData = Er;
Ve.AxiosError = re;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) {
  return Promise.all(t);
};
Ve.spread = Eh;
Ve.isAxiosError = bh;
Ve.mergeConfig = Tn;
Ve.AxiosHeaders = St;
Ve.formToJSON = (e) => tc(_.isHTMLForm(e) ? new FormData(e) : e);
Ve.HttpStatusCode = _h;
Ve.default = Ve;
const Zo = Ve;
class wh {
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
    const o = await Zo.post("/page-builder/storage-url", {
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
    }), await Zo.put(o.data.url, t, {
      headers: r,
      onUploadProgress: (s) => {
      }
    }), o.data.extension = t.name.split(".").pop(), o.data;
  }
}
const Nh = new wh(), Oh = /* @__PURE__ */ T("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Element Configuration ", -1), xh = {
  key: 0,
  class: "flex flex-col gap-3 p-3 bg-white"
}, Sh = { class: "flex flex-col gap-1" }, Dh = /* @__PURE__ */ T("label", null, "File", -1), Ch = { class: "flex flex-col gap-1" }, Th = /* @__PURE__ */ T("label", null, "Alt Tag", -1), Ph = {
  key: 1,
  class: "flex flex-col gap-3 p-3 bg-white"
}, Ah = { class: "flex flex-col gap-1" }, Rh = /* @__PURE__ */ T("label", null, "Text Size", -1), $h = /* @__PURE__ */ dd('<option value="xs">Extra Small</option><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option><option value="xl">Extra Large</option><option value="2xl">2x Extra Large</option><option value="3xl">3x Extra Large</option><option value="4xl">4x Extra Large</option>', 8), Vh = [
  $h
], kh = { class: "flex flex-col gap-1" }, Fh = /* @__PURE__ */ T("label", null, "Font Weight", -1), Ih = /* @__PURE__ */ T("option", { value: "normal" }, "Normal", -1), Lh = /* @__PURE__ */ T("option", { value: "bold" }, "Bold", -1), Mh = [
  Ih,
  Lh
], jh = { class: "flex flex-col gap-1" }, Uh = /* @__PURE__ */ T("label", null, "Content", -1), Bh = /* @__PURE__ */ T("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Element ", -1), Hh = /* @__PURE__ */ ye({
  __name: "ElementConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Y(null), o = () => {
      n.value && "click" in n.value && n.value.click();
    }, r = (s) => {
      Nh.store(s.target.files[0], {
        progress: (i) => {
        }
      }).then(async (i) => {
        const l = await Zo.post("/page-builder/files", {
          uuid: i.uuid,
          key: i.key,
          bucket: i.bucket
        });
        t.modelValue.src = l.data.file;
      });
    };
    return (s, i) => (ge(), Be("details", null, [
      Oh,
      t.modelValue.type === "img" ? (ge(), Be("div", xh, [
        T("div", Sh, [
          Dh,
          Lt(T("input", {
            type: "text",
            "onUpdate:modelValue": i[0] || (i[0] = (l) => t.modelValue.src = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
          }, null, 512), [
            [Yn, t.modelValue.src]
          ]),
          T("input", {
            onChange: r,
            ref_key: "fileSelection",
            ref: n,
            type: "file",
            class: "hidden"
          }, null, 544),
          T("button", {
            onClick: i[1] || (i[1] = (l) => o()),
            class: "border bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 col-span-4"
          }, " Upload File ")
        ]),
        T("div", Ch, [
          Th,
          Lt(T("input", {
            type: "text",
            "onUpdate:modelValue": i[2] || (i[2] = (l) => t.modelValue.alt = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
          }, null, 512), [
            [Yn, t.modelValue.alt]
          ])
        ])
      ])) : (ge(), Be("div", Ph, [
        T("div", Ah, [
          Rh,
          Lt(T("select", {
            "onUpdate:modelValue": i[3] || (i[3] = (l) => t.modelValue.size = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, Vh, 512), [
            [fs, t.modelValue.size]
          ])
        ]),
        T("div", kh, [
          Fh,
          Lt(T("select", {
            "onUpdate:modelValue": i[4] || (i[4] = (l) => t.modelValue.weight = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, Mh, 512), [
            [fs, t.modelValue.weight]
          ])
        ]),
        T("div", jh, [
          Uh,
          Lt(T("textarea", {
            "onUpdate:modelValue": i[5] || (i[5] = (l) => t.modelValue.content = l),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, null, 512), [
            [Yn, t.modelValue.content]
          ])
        ]),
        Bh
      ]))
    ]));
  }
}), Kh = /* @__PURE__ */ T("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Container Configuration ", -1), qh = { class: "flex flex-col gap-3 p-3 bg-white" }, Wh = { class: "flex flex-col gap-1" }, zh = /* @__PURE__ */ T("label", null, "Span", -1), Jh = { class: "flex flex-col gap-1" }, Gh = /* @__PURE__ */ T("label", null, "Text Align", -1), Yh = /* @__PURE__ */ T("option", { value: "text-left" }, "Left", -1), Qh = /* @__PURE__ */ T("option", { value: "text-center" }, "Center", -1), Xh = /* @__PURE__ */ T("option", { value: "text-right" }, "Right", -1), Zh = /* @__PURE__ */ T("option", { value: "text-justify" }, "Justify", -1), em = [
  Yh,
  Qh,
  Xh,
  Zh
], tm = /* @__PURE__ */ T("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Container ", -1), nm = /* @__PURE__ */ ye({
  __name: "ContainerConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (ge(), Be("details", null, [
      Kh,
      T("div", qh, [
        T("div", Wh, [
          zh,
          Lt(T("input", {
            "onUpdate:modelValue": o[0] || (o[0] = (r) => t.modelValue.colSpan = r),
            type: "number",
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
            max: "4",
            min: "1"
          }, null, 512), [
            [Yn, t.modelValue.colSpan]
          ])
        ]),
        T("div", Jh, [
          Gh,
          Lt(T("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (r) => t.modelValue.textAlign = r),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, em, 512), [
            [fs, t.modelValue.textAlign]
          ])
        ]),
        tm
      ])
    ]));
  }
});
function om() {
  return ic().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ic() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const rm = typeof Proxy == "function", sm = "devtools-plugin:setup", im = "plugin:settings:set";
let En, gs;
function lm() {
  var e;
  return En !== void 0 || (typeof window < "u" && window.performance ? (En = !0, gs = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (En = !0, gs = global.perf_hooks.performance) : En = !1), En;
}
function am() {
  return lm() ? gs.now() : Date.now();
}
class cm {
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
        return am();
      }
    }, n && n.on(im, (i, l) => {
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
function um(e, t) {
  const n = e, o = ic(), r = om(), s = rm && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(sm, e, t);
  else {
    const i = s ? new cm(n, r) : null;
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
function fm(e) {
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
const Qn = () => {
}, Ye = Array.isArray;
function oe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const dm = /\/$/, pm = (e) => e.replace(dm, "");
function Mr(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return l < a && l >= 0 && (a = -1), a > -1 && (o = t.slice(0, a), s = t.slice(a + 1, l > -1 ? l : t.length), r = e(s)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = gm(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: i
  };
}
function hm(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function il(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && Wt(t.matched[o], n.matched[r]) && lc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Wt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function lc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!mm(e[n], t[n]))
      return !1;
  return !0;
}
function mm(e, t) {
  return Ye(e) ? ll(e, t) : Ye(t) ? ll(t, e) : e === t;
}
function ll(e, t) {
  return Ye(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function gm(e, t) {
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
var co;
(function(e) {
  e.pop = "pop", e.push = "push";
})(co || (co = {}));
var Xn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Xn || (Xn = {}));
function vm(e) {
  if (!e)
    if (Nt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), pm(e);
}
const ym = /^[^#]+#/;
function Em(e, t) {
  return e.replace(ym, "#") + t;
}
function bm(e, t) {
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
function _m(e) {
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
    t = bm(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function al(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const vs = /* @__PURE__ */ new Map();
function wm(e, t) {
  vs.set(e, t);
}
function Nm(e) {
  const t = vs.get(e);
  return vs.delete(e), t;
}
let Om = () => location.protocol + "//" + location.host;
function ac(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let l = r.includes(e.slice(s)) ? e.slice(s).length : 1, a = r.slice(l);
    return a[0] !== "/" && (a = "/" + a), sl(a, "");
  }
  return sl(n, e) + o + r;
}
function xm(e, t, n, o) {
  let r = [], s = [], i = null;
  const l = ({ state: d }) => {
    const m = ac(e, location), g = n.value, y = t.value;
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
        type: co.pop,
        direction: N ? N > 0 ? Xn.forward : Xn.back : Xn.unknown
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
function cl(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? wr() : null
  };
}
function Sm(e) {
  const { history: t, location: n } = window, o = {
    value: ac(e, n)
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
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : Om() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d), r.value = c;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? oe("Error with push/replace State", m) : console.error(m), n[u ? "replace" : "assign"](d);
    }
  }
  function i(a, c) {
    const u = ie({}, t.state, cl(
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
    const f = ie({}, cl(o.value, a, null), { position: u.position + 1 }, c);
    s(a, f, !1), o.value = a;
  }
  return {
    location: o,
    state: r,
    push: l,
    replace: i
  };
}
function Dm(e) {
  e = vm(e);
  const t = Sm(e), n = xm(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = ie({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Em.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function Cm(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function cc(e) {
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
var ul;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ul || (ul = {}));
const Tm = {
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
    return `Redirected from "${e.fullPath}" to "${Am(t)}" via a navigation guard.`;
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
  return process.env.NODE_ENV !== "production" ? ie(new Error(Tm[e](t)), {
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
const Pm = ["params", "query", "hash"];
function Am(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Pm)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const fl = "[^/]+?", Rm = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, $m = /[.+*?^${}()[\]/\\]/g;
function Vm(e, t) {
  const n = ie({}, Rm, t), o = [];
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
        f || (r += "/"), r += d.value.replace($m, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: g, repeatable: y, optional: N, regexp: O } = d;
        s.push({
          name: g,
          repeatable: y,
          optional: N
        });
        const S = O || fl;
        if (S !== fl) {
          m += 10;
          try {
            new RegExp(`(${S})`);
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${S}): ` + I.message);
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
function km(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Fm(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = km(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (dl(o))
      return 1;
    if (dl(r))
      return -1;
  }
  return r.length - o.length;
}
function dl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Im = {
  type: 0,
  value: ""
}, Lm = /[a-zA-Z0-9_]/;
function Mm(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Im]];
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
        a === "(" ? n = 2 : Lm.test(a) ? d() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
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
function jm(e, t, n) {
  const o = Vm(Mm(e.path), n);
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
function Um(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = ml({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function s(u, f, d) {
    const m = !d, g = Bm(u);
    process.env.NODE_ENV !== "production" && Wm(g, f), g.aliasOf = d && d.record;
    const y = ml(t, u), N = [
      g
    ];
    if ("alias" in u) {
      const k = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const I of k)
        N.push(ie({}, g, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : g.components,
          path: I,
          // we might be the child of an alias
          aliasOf: d ? d.record : g
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let O, S;
    for (const k of N) {
      const { path: I } = k;
      if (f && I[0] !== "/") {
        const W = f.record.path, ee = W[W.length - 1] === "/" ? "" : "/";
        k.path = f.record.path + (I && ee + I);
      }
      if (process.env.NODE_ENV !== "production" && k.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (O = jm(k, f, y), process.env.NODE_ENV !== "production" && f && I[0] === "/" && zm(O, f), d ? (d.alias.push(O), process.env.NODE_ENV !== "production" && qm(d, O)) : (S = S || O, S !== O && S.alias.push(O), m && u.name && !hl(O) && i(u.name)), g.children) {
        const W = g.children;
        for (let ee = 0; ee < W.length; ee++)
          s(W[ee], O, d && d.children[ee]);
      }
      d = d || O, (O.record.components && Object.keys(O.record.components).length || O.record.name || O.record.redirect) && a(O);
    }
    return S ? () => {
      i(S);
    } : Qn;
  }
  function i(u) {
    if (cc(u)) {
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
    for (; f < n.length && Fm(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !uc(u, n[f])); )
      f++;
    n.splice(f, 0, u), u.record.name && !hl(u) && o.set(u.record.name, u);
  }
  function c(u, f) {
    let d, m = {}, g, y;
    if ("name" in u && u.name) {
      if (d = o.get(u.name), !d)
        throw Pn(1, {
          location: u
        });
      if (process.env.NODE_ENV !== "production") {
        const S = Object.keys(u.params || {}).filter((k) => !d.keys.find((I) => I.name === k));
        S.length && oe(`Discarded invalid param(s) "${S.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      y = d.record.name, m = ie(
        // paramsFromLocation is a new object
        pl(
          f.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((S) => !S.optional).map((S) => S.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && pl(u.params, d.keys.map((S) => S.name))
      ), g = d.stringify(m);
    } else if ("path" in u)
      g = u.path, process.env.NODE_ENV !== "production" && !g.startsWith("/") && oe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), d = n.find((S) => S.re.test(g)), d && (m = d.parse(g), y = d.record.name);
    else {
      if (d = f.name ? o.get(f.name) : n.find((S) => S.re.test(f.path)), !d)
        throw Pn(1, {
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
      meta: Km(N)
    };
  }
  return e.forEach((u) => s(u)), { addRoute: s, resolve: c, removeRoute: i, getRoutes: l, getRecordMatcher: r };
}
function pl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Bm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Hm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Hm(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function hl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Km(e) {
  return e.reduce((t, n) => ie(t, n.meta), {});
}
function ml(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Es(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function qm(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Es.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Es.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Wm(e, t) {
  t && t.record.name && !e.name && !e.path && oe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function zm(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Es.bind(null, n)))
      return oe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function uc(e, t) {
  return t.children.some((n) => n === e || uc(e, n));
}
const fc = /#/g, Jm = /&/g, Gm = /\//g, Ym = /=/g, Qm = /\?/g, dc = /\+/g, Xm = /%5B/g, Zm = /%5D/g, pc = /%5E/g, eg = /%60/g, hc = /%7B/g, tg = /%7C/g, mc = /%7D/g, ng = /%20/g;
function ni(e) {
  return encodeURI("" + e).replace(tg, "|").replace(Xm, "[").replace(Zm, "]");
}
function og(e) {
  return ni(e).replace(hc, "{").replace(mc, "}").replace(pc, "^");
}
function bs(e) {
  return ni(e).replace(dc, "%2B").replace(ng, "+").replace(fc, "%23").replace(Jm, "%26").replace(eg, "`").replace(hc, "{").replace(mc, "}").replace(pc, "^");
}
function rg(e) {
  return bs(e).replace(Ym, "%3D");
}
function sg(e) {
  return ni(e).replace(fc, "%23").replace(Qm, "%3F");
}
function ig(e) {
  return e == null ? "" : sg(e).replace(Gm, "%2F");
}
function uo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && oe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function lg(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(dc, " "), i = s.indexOf("="), l = uo(i < 0 ? s : s.slice(0, i)), a = i < 0 ? null : uo(s.slice(i + 1));
    if (l in t) {
      let c = t[l];
      Ye(c) || (c = t[l] = [c]), c.push(a);
    } else
      t[l] = a;
  }
  return t;
}
function gl(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = rg(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ye(o) ? o.map((s) => s && bs(s)) : [o && bs(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function ag(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ye(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const cg = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), vl = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), oi = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ri = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), _s = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Ln() {
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
      })) : f instanceof Error ? l(f) : Cm(f) ? l(Pn(2, {
        from: t,
        to: f
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === s && typeof f == "function" && s.push(f), i());
    }, c = e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? ug(a, t, n) : a);
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
function ug(e, t, n) {
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
        if (fg(l)) {
          const c = (l.__vccOpts || l)[t];
          c && r.push(It(c, n, o, s, i));
        } else {
          let a = l();
          process.env.NODE_ENV !== "production" && !("catch" in a) && (oe(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), a = Promise.resolve(a)), r.push(() => a.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));
            const u = fm(c) ? c.default : c;
            s.components[i] = u;
            const d = (u.__vccOpts || u)[t];
            return d && It(d, n, o, s, i)();
          }));
        }
    }
  }
  return r;
}
function fg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function yl(e) {
  const t = we(oi), n = we(ri), o = J(() => t.resolve(ke(e.to))), r = J(() => {
    const { matched: a } = o.value, { length: c } = a, u = a[c - 1], f = n.matched;
    if (!u || !f.length)
      return -1;
    const d = f.findIndex(Wt.bind(null, u));
    if (d > -1)
      return d;
    const m = El(a[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      El(u) === m && // avoid comparing the child with its parent
      f[f.length - 1].path !== m ? f.findIndex(Wt.bind(null, a[c - 2])) : d
    );
  }), s = J(() => r.value > -1 && mg(n.params, o.value.params)), i = J(() => r.value > -1 && r.value === n.matched.length - 1 && lc(n.params, o.value.params));
  function l(a = {}) {
    return hg(a) ? t[ke(e.replace) ? "replace" : "push"](
      ke(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Qn) : Promise.resolve();
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
const dg = /* @__PURE__ */ ye({
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
  useLink: yl,
  setup(e, { slots: t }) {
    const n = Rn(yl(e)), { options: o } = we(oi), r = J(() => ({
      [bl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [bl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), pg = dg;
function hg(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function mg(e, t) {
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
function El(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const bl = (e, t, n) => e ?? t ?? n, gg = /* @__PURE__ */ ye({
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
    process.env.NODE_ENV !== "production" && yg();
    const o = we(_s), r = J(() => e.route || o.value), s = we(vl, 0), i = J(() => {
      let c = ke(s);
      const { matched: u } = r.value;
      let f;
      for (; (f = u[c]) && !f.components; )
        c++;
      return c;
    }), l = J(() => r.value.matched[i.value]);
    qe(vl, J(() => i.value + 1)), qe(cg, l), qe(_s, r);
    const a = Y();
    return gt(() => [a.value, l.value, e.name], ([c, u, f], [d, m, g]) => {
      u && (u.instances[f] = c, m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), c && u && (!m || !Wt(u, m) || !d) && (u.enterCallbacks[f] || []).forEach((y) => y(c));
    }, { flush: "post" }), () => {
      const c = r.value, u = e.name, f = l.value, d = f && f.components[u];
      if (!d)
        return _l(n.default, { Component: d, route: c });
      const m = f.props[u], g = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null, N = Te(d, ie({}, g, t, {
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
        (Ye(N.ref) ? N.ref.map((k) => k.i) : [N.ref.i]).forEach((k) => {
          k.__vrv_devtools = O;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        _l(n.default, { Component: N, route: c }) || N
      );
    };
  }
});
function _l(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const vg = gg;
function yg() {
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
function Mn(e, t) {
  const n = ie({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Dg(o, ["instances", "children", "aliasOf"]))
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
function To(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Eg = 0;
function bg(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Eg++;
  um({
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
        value: Mn(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: u, componentInstance: f }) => {
      if (f.__vrv_devtools) {
        const d = f.__vrv_devtools;
        u.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: gc
        });
      }
      Ye(f.__vrl_devtools) && (f.__devtoolsApi = r, f.__vrl_devtools.forEach((d) => {
        let m = Ec, g = "";
        d.isExactActive ? (m = yc, g = "This is exactly active") : d.isActive && (m = vc, g = "This link is active"), u.tags.push({
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
        guard: To("beforeEach"),
        from: Mn(f, "Current Location during this navigation"),
        to: Mn(u, "Target location")
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
        guard: To("afterEach")
      };
      d ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, m.status = To("❌")) : m.status = To("✅"), m.from = Mn(f, "Current Location during this navigation"), m.to = Mn(u, "Target location"), r.addTimelineEvent({
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
      f.forEach(wc), u.filter && (f = f.filter((d) => // save matches state based on the payload
      ws(d, u.filter.toLowerCase()))), f.forEach((d) => _c(d, t.currentRoute.value)), u.rootNodes = f.map(bc);
    }
    let c;
    r.on.getInspectorTree((u) => {
      c = u, u.app === e && u.inspectorId === l && a();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === l) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === u.nodeId);
        d && (u.state = {
          options: wg(d)
        });
      }
    }), r.sendInspectorTree(l), r.sendInspectorState(l);
  });
}
function _g(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function wg(e) {
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
        display: e.keys.map((o) => `${o.name}${_g(o)}`).join(" "),
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
const gc = 15485081, vc = 2450411, yc = 8702998, Ng = 2282478, Ec = 16486972, Og = 6710886;
function bc(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Ng
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Ec
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: gc
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: yc
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: vc
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Og
  });
  let o = n.__vd_id;
  return o == null && (o = String(xg++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(bc)
  };
}
let xg = 0;
const Sg = /^\/(.*)\/([a-z]*)$/;
function _c(e, t) {
  const n = t.matched.length && Wt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Wt(o, e.record))), e.children.forEach((o) => _c(o, t));
}
function wc(e) {
  e.__vd_match = !1, e.children.forEach(wc);
}
function ws(e, t) {
  const n = String(e.re).match(Sg);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ws(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = uo(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ws(i, t));
}
function Dg(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Cg(e) {
  const t = Um(e.routes, e), n = e.parseQuery || lg, o = e.stringifyQuery || gl, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Ln(), i = Ln(), l = Ln(), a = Jl($t);
  let c = $t;
  Nt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Lr.bind(null, (E) => "" + E), f = Lr.bind(null, ig), d = (
    // @ts-expect-error: intentionally avoid the type check
    Lr.bind(null, uo)
  );
  function m(E, $) {
    let V, L;
    return cc(E) ? (V = t.getRecordMatcher(E), L = $) : L = E, t.addRoute(L, V);
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
      const h = Mr(n, E, $.path), v = t.resolve({ path: h.path }, $), w = r.createHref(h.fullPath);
      return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? oe(`Location "${E}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : v.matched.length || oe(`No match found for location with path "${E}"`)), ie(h, v, {
        params: d(v.params),
        hash: uo(h.hash),
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
      for (const v in h)
        h[v] == null && delete h[v];
      V = ie({}, E, {
        params: f(h)
      }), $.params = f($.params);
    }
    const L = t.resolve(V, $), ne = E.hash || "";
    process.env.NODE_ENV !== "production" && ne && !ne.startsWith("#") && oe(`A \`hash\` should always start with the character "#". Replace "${ne}" with "#${ne}".`), L.params = u(d(L.params));
    const Ee = hm(o, ie({}, E, {
      hash: og(ne),
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
        o === gl ? ag(E.query) : E.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: p
    });
  }
  function S(E) {
    return typeof E == "string" ? Mr(n, E, a.value.path) : ie({}, E);
  }
  function k(E, $) {
    if (c !== E)
      return Pn(8, {
        from: $,
        to: E
      });
  }
  function I(E) {
    return se(E);
  }
  function W(E) {
    return I(ie(S(E), { replace: !0 }));
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
    return !Ee && il(o, L, V) && (w = Pn(16, { to: v, from: L }), ze(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (w ? Promise.resolve(w) : te(v, L)).catch((b) => bt(b) ? (
      // navigation redirects still mark the router as ready
      bt(
        b,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? b : Ce(b)
    ) : (
      // reject any unknown error
      U(b, v, L)
    )).then((b) => {
      if (b) {
        if (bt(
          b,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          il(o, O(b.to), v) && // and we have done it a couple of times
          $ && ($._count = $._count ? (
            // @ts-expect-error
            $._count + 1
          ) : 1) > 30 ? (oe(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${v.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : se(
            // keep options
            ie({
              // preserve an existing replacement but allow the redirect to override it
              replace: p
            }, S(b.to), {
              state: typeof b.to == "object" ? ie({}, ne, b.to.state) : ne,
              force: Ee
            }),
            // preserve the original redirectedFrom if any
            $ || v
          );
      } else
        b = de(v, L, !0, p, ne);
      return ce(v, L, b), b;
    });
  }
  function K(E, $) {
    const V = k(E, $);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function Q(E) {
    const $ = at.values().next().value;
    return $ && typeof $.runWithContext == "function" ? $.runWithContext(E) : E();
  }
  function te(E, $) {
    let V;
    const [L, ne, Ee] = Tg(E, $);
    V = jr(L.reverse(), "beforeRouteLeave", E, $);
    for (const h of L)
      h.leaveGuards.forEach((v) => {
        V.push(It(v, E, $));
      });
    const p = K.bind(null, E, $);
    return V.push(p), Pt(V).then(() => {
      V = [];
      for (const h of s.list())
        V.push(It(h, E, $));
      return V.push(p), Pt(V);
    }).then(() => {
      V = jr(ne, "beforeRouteUpdate", E, $);
      for (const h of ne)
        h.updateGuards.forEach((v) => {
          V.push(It(v, E, $));
        });
      return V.push(p), Pt(V);
    }).then(() => {
      V = [];
      for (const h of E.matched)
        if (h.beforeEnter && !$.matched.includes(h))
          if (Ye(h.beforeEnter))
            for (const v of h.beforeEnter)
              V.push(It(v, E, $));
          else
            V.push(It(h.beforeEnter, E, $));
      return V.push(p), Pt(V);
    }).then(() => (E.matched.forEach((h) => h.enterCallbacks = {}), V = jr(Ee, "beforeRouteEnter", E, $), V.push(p), Pt(V))).then(() => {
      V = [];
      for (const h of i.list())
        V.push(It(h, E, $));
      return V.push(p), Pt(V);
    }).catch((h) => bt(
      h,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? h : Promise.reject(h));
  }
  function ce(E, $, V) {
    for (const L of l.list())
      Q(() => L(E, $, V));
  }
  function de(E, $, V, L, ne) {
    const Ee = k(E, $);
    if (Ee)
      return Ee;
    const p = $ === $t, h = Nt ? history.state : {};
    V && (L || p ? r.replace(E.fullPath, ie({
      scroll: p && h && h.scroll
    }, ne)) : r.push(E.fullPath, ne)), a.value = E, ze(E, $, V, p), Ce();
  }
  let ae;
  function Xe() {
    ae || (ae = r.listen((E, $, V) => {
      if (!_o.listening)
        return;
      const L = O(E), ne = ee(L);
      if (ne) {
        se(ie(ne, { replace: !0 }), L).catch(Qn);
        return;
      }
      c = L;
      const Ee = a.value;
      Nt && wm(al(Ee.fullPath, V.delta), wr()), te(L, Ee).catch((p) => bt(
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
        ) && !V.delta && V.type === co.pop && r.go(-1, !1);
      }).catch(Qn), Promise.reject()) : (V.delta && r.go(-V.delta, !1), U(p, L, Ee))).then((p) => {
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
        ) ? r.go(-V.delta, !1) : V.type === co.pop && bt(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), ce(L, Ee, p);
      }).catch(Qn);
    }));
  }
  let be = Ln(), he = Ln(), F;
  function U(E, $, V) {
    Ce(E);
    const L = he.list();
    return L.length ? L.forEach((ne) => ne(E, $, V)) : (process.env.NODE_ENV !== "production" && oe("uncaught error during route navigation:"), console.error(E)), Promise.reject(E);
  }
  function me() {
    return F && a.value !== $t ? Promise.resolve() : new Promise((E, $) => {
      be.add([E, $]);
    });
  }
  function Ce(E) {
    return F || (F = !E, Xe(), be.list().forEach(([$, V]) => E ? V(E) : $()), be.reset()), E;
  }
  function ze(E, $, V, L) {
    const { scrollBehavior: ne } = e;
    if (!Nt || !ne)
      return Promise.resolve();
    const Ee = !V && Nm(al(E.fullPath, 0)) || (L || !V) && history.state && history.state.scroll || null;
    return Us().then(() => ne(E, $, Ee)).then((p) => p && _m(p)).catch((p) => U(p, E, $));
  }
  const Oe = (E) => r.go(E);
  let He;
  const at = /* @__PURE__ */ new Set(), _o = {
    currentRoute: a,
    listening: !0,
    addRoute: m,
    removeRoute: g,
    hasRoute: N,
    getRoutes: y,
    resolve: O,
    options: e,
    push: I,
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
      E.component("RouterLink", pg), E.component("RouterView", vg), E.config.globalProperties.$router = $, Object.defineProperty(E.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ke(a)
      }), Nt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !He && a.value === $t && (He = !0, I(r.location).catch((ne) => {
        process.env.NODE_ENV !== "production" && oe("Unexpected error when starting the router:", ne);
      }));
      const V = {};
      for (const ne in $t)
        V[ne] = J(() => a.value[ne]);
      E.provide(oi, $), E.provide(ri, Rn(V)), E.provide(_s, a);
      const L = E.unmount;
      at.add(E), E.unmount = function() {
        at.delete(E), at.size < 1 && (c = $t, ae && ae(), ae = null, a.value = $t, He = !1, F = !1), L();
      }, process.env.NODE_ENV !== "production" && Nt && bg(E, $, t);
    }
  };
  function Pt(E) {
    return E.reduce(($, V) => $.then(() => Q(V)), Promise.resolve());
  }
  return _o;
}
function Tg(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((c) => Wt(c, l)) ? o.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((c) => Wt(c, a)) || r.push(a));
  }
  return [n, o, r];
}
function Pg() {
  return we(ri);
}
class Nc {
  constructor() {
    fi(this, "client");
    let t = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.client = Zo.create(t);
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
}
const Ag = { class: "grid grid-cols-5 min-h-screen" }, Rg = { class: "col-span-1 bg-gray-100 flex flex-col" }, $g = { key: 0 }, Vg = /* @__PURE__ */ T("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, "Components", -1), kg = { class: "flex flex-col gap-3 p-3 bg-white" }, Fg = ["onDragstart"], Ig = { class: "min-w-0 flex-1" }, Lg = {
  href: "#",
  class: "focus:outline-none"
}, Mg = /* @__PURE__ */ T("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), jg = { class: "text-sm font-medium text-gray-900" }, Ug = { class: "truncate text-sm text-gray-500" }, Bg = { class: "col-span-4 grid grid-cols-4 gap-4 p-5 content-start" }, Hg = /* @__PURE__ */ ye({
  __name: "PageBuilder",
  setup(e) {
    const t = Pg(), n = new Nc(), o = Y(null), r = Y([]), s = Y(null), i = Y([
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
    window.addEventListener("keypress", (N) => {
      N.ctrlKey && N.key === "s" && (N.preventDefault(), y());
    });
    const l = Y(null), a = () => {
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
    return $e(() => {
      g(t.params.slug);
    }), (N, O) => (ge(), Be("div", Ag, [
      T("div", Rg, [
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
        r.value.length ? (ge(), Be("details", $g, [
          Vg,
          T("div", kg, [
            (ge(!0), Be(Se, null, zo(i.value, (S) => (ge(), Be("div", {
              class: "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400",
              draggable: "true",
              key: S.id,
              onDragstart: (k) => c(k, S)
            }, [
              T("div", Ig, [
                T("a", Lg, [
                  Mg,
                  T("p", jg, Vt(S.name), 1),
                  T("p", Ug, Vt(S.description), 1)
                ])
              ])
            ], 40, Fg))), 128))
          ])
        ])) : Pr("", !0),
        o.value ? (ge(), xt(nm, {
          key: 1,
          modelValue: o.value,
          "onUpdate:modelValue": O[0] || (O[0] = (S) => o.value = S)
        }, null, 8, ["modelValue"])) : Pr("", !0),
        s.value ? (ge(), xt(Hh, {
          key: 2,
          modelValue: s.value,
          "onUpdate:modelValue": O[1] || (O[1] = (S) => s.value = S)
        }, null, 8, ["modelValue"])) : Pr("", !0)
      ]),
      T("div", Bg, [
        (ge(!0), Be(Se, null, zo(r.value, (S) => (ge(), xt(sp, {
          onClick: (k) => f(S),
          onDragover: O[2] || (O[2] = zi(() => {
          }, ["prevent"])),
          onDragenter: O[3] || (O[3] = zi(() => {
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
  let i = xc(o, n), l = Object.assign(r, { props: i });
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
  let { as: l, ...a } = Sc(e, ["unmount", "static"]), c = (s = n.default) == null ? void 0 : s.call(n, o), u = {};
  if (o) {
    let f = !1, d = [];
    for (let [m, g] of Object.entries(o))
      typeof g == "boolean" && (f = !0), g === !0 && d.push(m);
    f && (u["data-headlessui-state"] = d.join(" "));
  }
  if (l === "template") {
    if (c = Oc(c ?? []), Object.keys(a).length > 0 || Object.keys(t).length > 0) {
      let [f, ...d] = c ?? [];
      if (!Kg(f) || d.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(a).concat(Object.keys(t)).map((y) => y.trim()).filter((y, N, O) => O.indexOf(y) === N).sort((y, N) => y.localeCompare(N)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      let m = xc((i = f.props) != null ? i : {}, a), g = lt(f, m);
      for (let y in m)
        y.startsWith("on") && (g.props || (g.props = {}), g.props[y] = m[y]);
      return g;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return Te(l, Object.assign({}, a, u), { default: () => c });
}
function Oc(e) {
  return e.flatMap((t) => t.type === Se ? Oc(t.children) : [t]);
}
function xc(...e) {
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
function Sc(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function Kg(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let qg = 0;
function Wg() {
  return ++qg;
}
function vn() {
  return Wg();
}
var Dc = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Dc || {});
function Re(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Cc = Symbol("Context");
var Je = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Je || {});
function zg() {
  return si() !== null;
}
function si() {
  return we(Cc, null);
}
function Jg(e) {
  qe(Cc, e);
}
var Gg = Object.defineProperty, Yg = (e, t, n) => t in e ? Gg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wl = (e, t, n) => (Yg(e, typeof t != "symbol" ? t + "" : t, n), n);
class Qg {
  constructor() {
    wl(this, "current", this.detect()), wl(this, "currentId", 0);
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
let Eo = new Qg();
function Vn(e) {
  if (Eo.isServer)
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
var jt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(jt || {}), Tc = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Tc || {}), Xg = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Xg || {});
function Zg(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ns)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Pc = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Pc || {});
function ev(e, t = 0) {
  var n;
  return e === ((n = Vn(e)) == null ? void 0 : n.body) ? !1 : yt(t, { [0]() {
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
var tv = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(tv || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let nv = ["textarea", "input"].join(",");
function ov(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, nv)) != null ? n : !1;
}
function rv(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let r = t(n), s = t(o);
    if (r === null || s === null)
      return 0;
    let i = r.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function jo(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  var s;
  let i = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, l = Array.isArray(e) ? n ? rv(e) : e : Zg(e);
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
  return t & 6 && ov(m) && m.select(), 2;
}
function Nl(e, t, n) {
  Eo.isServer || nt((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function Ac(e, t, n) {
  Eo.isServer || nt((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
function sv(e, t, n = J(() => !0)) {
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
    return !ev(l, Pc.Loose) && l.tabIndex !== -1 && s.preventDefault(), t(s, l);
  }
  let r = Y(null);
  Nl("mousedown", (s) => {
    var i, l;
    n.value && (r.value = ((l = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), Nl("click", (s) => {
    r.value && (o(s, () => r.value), r.value = null);
  }, !0), Ac("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var tr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(tr || {});
let Os = ye({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...r } = e, s = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return Qe({ ourProps: s, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function iv() {
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
var Kn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Kn || {});
function lv() {
  let e = Y(0);
  return Ac("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Rc(e, t, n, o) {
  Eo.isServer || nt((r) => {
    e = e ?? window, e.addEventListener(t, n, o), r(() => e.removeEventListener(t, n, o));
  });
}
function $c(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function av(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Vc(e) {
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
var kc = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(kc || {});
let jn = Object.assign(ye({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: Y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = Y(null);
  o({ el: r, $el: r });
  let s = J(() => Vn(r)), i = Y(!1);
  $e(() => i.value = !0), Ge(() => i.value = !1), uv({ ownerDocument: s }, J(() => i.value && Boolean(e.features & 16)));
  let l = fv({ ownerDocument: s, container: r, initialFocus: J(() => e.initialFocus) }, J(() => i.value && Boolean(e.features & 2)));
  dv({ ownerDocument: s, container: r, containers: e.containers, previousActiveElement: l }, J(() => i.value && Boolean(e.features & 8)));
  let a = lv();
  function c(m) {
    let g = Re(r);
    g && ((y) => y())(() => {
      yt(a.value, { [Kn.Forwards]: () => {
        jo(g, jt.First, { skipElements: [m.relatedTarget] });
      }, [Kn.Backwards]: () => {
        jo(g, jt.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = Y(!1);
  function f(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function d(m) {
    if (!i.value)
      return;
    let g = Vc(e.containers);
    Re(r) instanceof HTMLElement && g.add(Re(r));
    let y = m.relatedTarget;
    y instanceof HTMLElement && y.dataset.headlessuiFocusGuard !== "true" && (Fc(g, y) || (u.value ? jo(Re(r), yt(a.value, { [Kn.Forwards]: () => jt.Next, [Kn.Backwards]: () => jt.Previous }) | jt.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && dn(m.target)));
  }
  return () => {
    let m = {}, g = { ref: r, onKeydown: f, onFocusout: d }, { features: y, initialFocus: N, containers: O, ...S } = e;
    return Te(Se, [Boolean(y & 4) && Te(Os, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tr.Focusable }), Qe({ ourProps: g, theirProps: { ...t, ...S }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), Boolean(y & 4) && Te(Os, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tr.Focusable })]);
  };
} }), { features: kc }), nn = [];
av(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && nn[0] !== t.target && (nn.unshift(t.target), nn = nn.filter((n) => n != null && n.isConnected), nn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function cv(e) {
  let t = Y(nn.slice());
  return gt([e], ([n], [o]) => {
    o === !0 && n === !1 ? $c(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = nn.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function uv({ ownerDocument: e }, t) {
  let n = cv(t);
  $e(() => {
    nt(() => {
      var o, r;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && dn(n());
    }, { flush: "post" });
  }), Ge(() => {
    t.value && dn(n());
  });
}
function fv({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let r = Y(null), s = Y(!1);
  return $e(() => s.value = !0), Ge(() => s.value = !1), $e(() => {
    gt([t, n, o], (i, l) => {
      if (i.every((c, u) => (l == null ? void 0 : l[u]) === c) || !o.value)
        return;
      let a = Re(t);
      a && $c(() => {
        var c, u;
        if (!s.value)
          return;
        let f = Re(n), d = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === d) {
            r.value = d;
            return;
          }
        } else if (a.contains(d)) {
          r.value = d;
          return;
        }
        f ? dn(f) : jo(a, jt.First | jt.NoScroll) === Tc.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function dv({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, r) {
  var s;
  Rc((s = e.value) == null ? void 0 : s.defaultView, "focus", (i) => {
    if (!r.value)
      return;
    let l = Vc(n);
    Re(t) instanceof HTMLElement && l.add(Re(t));
    let a = o.value;
    if (!a)
      return;
    let c = i.target;
    c && c instanceof HTMLElement ? Fc(l, c) ? (o.value = c, dn(c)) : (i.preventDefault(), i.stopPropagation(), dn(a)) : dn(o.value);
  }, !0);
}
function Fc(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Br = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map();
function Ol(e, t = Y(!0)) {
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
      let l = (i = Un.get(r)) != null ? i : 1;
      if (l === 1 ? Un.delete(r) : Un.set(r, l - 1), l !== 1)
        return;
      let a = Br.get(r);
      a && (a["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", a["aria-hidden"]), r.inert = a.inert, Br.delete(r));
    });
    let s = (o = Un.get(r)) != null ? o : 0;
    Un.set(r, s + 1), s === 0 && (Br.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
let Ic = Symbol("ForcePortalRootContext");
function pv() {
  return we(Ic, !1);
}
let xs = ye({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return qe(Ic, e.force), () => {
    let { force: o, ...r } = e;
    return Qe({ theirProps: r, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function hv(e) {
  let t = Vn(e);
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
let Lc = ye({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = Y(null), r = J(() => Vn(o)), s = pv(), i = we(Mc, null), l = Y(s === !0 || i == null ? hv(o.value) : i.resolveTarget());
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
    return Te(ad, { to: l.value }, Qe({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Ss = Symbol("PortalParentContext");
function mv() {
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
let Mc = Symbol("PortalGroupContext"), gv = ye({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = Rn({ resolveTarget() {
    return e.target;
  } });
  return qe(Mc, o), () => {
    let { target: r, ...s } = e;
    return Qe({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), jc = Symbol("StackContext");
var Ds = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ds || {});
function vv() {
  return we(jc, () => {
  });
}
function yv({ type: e, enabled: t, element: n, onUpdate: o }) {
  let r = vv();
  function s(...i) {
    o == null || o(...i), r(...i);
  }
  $e(() => {
    gt(t, (i, l) => {
      i ? s(0, e, n) : l === !0 && s(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Ge(() => {
    t.value && s(1, e, n);
  }), qe(jc, s);
}
let Uc = Symbol("DescriptionContext");
function Ev() {
  let e = we(Uc, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function bv({ slot: e = Y({}), name: t = "Description", props: n = {} } = {}) {
  let o = Y([]);
  function r(s) {
    return o.value.push(s), () => {
      let i = o.value.indexOf(s);
      i !== -1 && o.value.splice(i, 1);
    };
  }
  return qe(Uc, { register: r, slot: e, name: t, props: n }), J(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Ey = ye({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${vn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Ev();
  return $e(() => Ge(o.register(e.id))), () => {
    let { name: r = "Description", slot: s = Y({}), props: i = {} } = o, { id: l, ...a } = e, c = { ...Object.entries(i).reduce((u, [f, d]) => Object.assign(u, { [f]: ke(d) }), {}), id: l };
    return Qe({ ourProps: c, theirProps: a, slot: s.value, attrs: t, slots: n, name: r });
  };
} });
function _v(e) {
  let t = Jl(e.getSnapshot());
  return Ge(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function wv(e, t) {
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
function Nv() {
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
function Ov() {
  if (!iv())
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
function xv() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Sv(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let rn = wv(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Nr(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let o = { doc: e, d: t, meta: Sv(n) }, r = [Ov(), Nv(), xv()];
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
function Dv(e, t, n) {
  let o = _v(rn), r = J(() => {
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
function Cv({ defaultContainers: e = [], portals: t } = {}) {
  let n = Y(null), o = Vn(n);
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
var Tv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Tv || {});
let Cs = Symbol("DialogContext");
function bo(e) {
  let t = we(Cs, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, bo), n;
  }
  return t;
}
let Po = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Pv = ye({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Po }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${vn()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
  var s;
  let i = Y(!1);
  $e(() => {
    i.value = !0;
  });
  let l = Y(0), a = si(), c = J(() => e.open === Po && a !== null ? (a.value & Je.Open) === Je.Open : e.open), u = Y(null), f = J(() => Vn(u));
  if (r({ el: u, $el: u }), !(e.open !== Po || a !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Po ? void 0 : e.open}`);
  let d = J(() => i.value && c.value ? 0 : 1), m = J(() => d.value === 0), g = J(() => l.value > 1), y = we(Cs, null) !== null, [N, O] = mv(), { resolveContainers: S, mainTreeNodeRef: k, MainTreeNode: I } = Cv({ portals: N, defaultContainers: [J(() => {
    var F;
    return (F = ae.panelRef.value) != null ? F : u.value;
  })] }), W = J(() => g.value ? "parent" : "leaf"), ee = J(() => a !== null ? (a.value & Je.Closing) === Je.Closing : !1), se = J(() => y || ee.value ? !1 : m.value), K = J(() => {
    var F, U, me;
    return (me = Array.from((U = (F = f.value) == null ? void 0 : F.querySelectorAll("body > *")) != null ? U : []).find((Ce) => Ce.id === "headlessui-portal-root" ? !1 : Ce.contains(Re(k)) && Ce instanceof HTMLElement)) != null ? me : null;
  });
  Ol(K, se);
  let Q = J(() => g.value ? !0 : m.value), te = J(() => {
    var F, U, me;
    return (me = Array.from((U = (F = f.value) == null ? void 0 : F.querySelectorAll("[data-headlessui-portal]")) != null ? U : []).find((Ce) => Ce.contains(Re(k)) && Ce instanceof HTMLElement)) != null ? me : null;
  });
  Ol(te, Q), yv({ type: "Dialog", enabled: J(() => d.value === 0), element: u, onUpdate: (F, U) => {
    if (U === "Dialog")
      return yt(F, { [Ds.Add]: () => l.value += 1, [Ds.Remove]: () => l.value -= 1 });
  } });
  let ce = bv({ name: "DialogDescription", slot: J(() => ({ open: c.value })) }), de = Y(null), ae = { titleId: de, panelRef: Y(null), dialogState: d, setTitleId(F) {
    de.value !== F && (de.value = F);
  }, close() {
    t("close", !1);
  } };
  qe(Cs, ae);
  let Xe = J(() => !(!m.value || g.value));
  sv(S, (F, U) => {
    ae.close(), Us(() => U == null ? void 0 : U.focus());
  }, Xe);
  let be = J(() => !(g.value || d.value !== 0));
  Rc((s = f.value) == null ? void 0 : s.defaultView, "keydown", (F) => {
    be.value && (F.defaultPrevented || F.key === Dc.Escape && (F.preventDefault(), F.stopPropagation(), ae.close()));
  });
  let he = J(() => !(ee.value || d.value !== 0 || y));
  return Dv(f, he, (F) => {
    var U;
    return { containers: [...(U = F.containers) != null ? U : [], S] };
  }), nt((F) => {
    if (d.value !== 0)
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
    me.observe(U), F(() => me.disconnect());
  }), () => {
    let { id: F, open: U, initialFocus: me, ...Ce } = e, ze = { ...n, ref: u, id: F, role: "dialog", "aria-modal": d.value === 0 ? !0 : void 0, "aria-labelledby": de.value, "aria-describedby": ce.value }, Oe = { open: d.value === 0 };
    return Te(xs, { force: !0 }, () => [Te(Lc, () => Te(gv, { target: u.value }, () => Te(xs, { force: !1 }, () => Te(jn, { initialFocus: me, containers: S, features: m.value ? yt(W.value, { parent: jn.features.RestoreFocus, leaf: jn.features.All & ~jn.features.FocusLock }) : jn.features.None }, () => Te(O, {}, () => Qe({ ourProps: ze, theirProps: { ...Ce, ...n }, slot: Oe, attrs: n, slots: o, visible: d.value === 0, features: er.RenderStrategy | er.Static, name: "Dialog" })))))), Te(I)]);
  };
} });
ye({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${vn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = bo("DialogOverlay");
  function r(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), o.close());
  }
  return () => {
    let { id: s, ...i } = e;
    return Qe({ ourProps: { id: s, "aria-hidden": !0, onClick: r }, theirProps: i, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
ye({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${vn()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = bo("DialogBackdrop"), s = Y(null);
  return o({ el: s, $el: s }), $e(() => {
    if (r.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...l } = e, a = { id: i, ref: s, "aria-hidden": !0 };
    return Te(xs, { force: !0 }, () => Te(Lc, () => Qe({ ourProps: a, theirProps: { ...t, ...l }, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let Av = ye({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${vn()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = bo("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function s(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...l } = e, a = { id: i, ref: r.panelRef, onClick: s };
    return Qe({ ourProps: a, theirProps: l, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), Rv = ye({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${vn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = bo("DialogTitle");
  return $e(() => {
    o.setTitleId(e.id), Ge(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...s } = e;
    return Qe({ ourProps: { id: r }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
function $v(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Hr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ao(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Ts = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ts || {});
function Vv(e, t) {
  let n = Nr();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [s, i] = [o, r].map((l) => {
    let [a = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
    return a;
  });
  return s !== 0 ? n.setTimeout(() => t("finished"), s + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function xl(e, t, n, o, r, s) {
  let i = Nr(), l = s !== void 0 ? $v(s) : () => {
  };
  return Ao(e, ...r), Hr(e, ...t, ...n), i.nextFrame(() => {
    Ao(e, ...n), Hr(e, ...o), i.add(Vv(e, (a) => (Ao(e, ...o, ...t), Hr(e, ...r), l(a))));
  }), i.add(() => Ao(e, ...t, ...n, ...o, ...r)), i.add(() => l("cancelled")), i.dispose;
}
function Yt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ii = Symbol("TransitionContext");
var kv = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(kv || {});
function Fv() {
  return we(ii, null) !== null;
}
function Iv() {
  let e = we(ii, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Lv() {
  let e = we(li, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let li = Symbol("NestingContext");
function Or(e) {
  return "children" in e ? Or(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Bc(e) {
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
let Hc = er.RenderStrategy, Ps = ye({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
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
  if (!Fv() && zg())
    return () => Te(Kc, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: a, onAfterLeave: c }, o);
  let u = Y(null), f = J(() => e.unmount ? Ut.Unmount : Ut.Hidden);
  r({ el: u, $el: u });
  let { show: d, appear: m } = Iv(), { register: g, unregister: y } = Lv(), N = Y(d.value ? "visible" : "hidden"), O = { value: !0 }, S = vn(), k = { value: !1 }, I = Bc(() => {
    !k.value && N.value !== "hidden" && (N.value = "hidden", y(S), c());
  });
  $e(() => {
    let ae = g(S);
    Ge(ae);
  }), nt(() => {
    if (f.value === Ut.Hidden && S) {
      if (d.value && N.value !== "visible") {
        N.value = "visible";
        return;
      }
      yt(N.value, { hidden: () => y(S), visible: () => g(S) });
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
    !be || !(be instanceof HTMLElement) || Xe || (k.value = !0, d.value && i(), d.value || a(), ae(d.value ? xl(be, W, ee, se, K, (he) => {
      k.value = !1, he === Ts.Finished && l();
    }) : xl(be, Q, te, ce, K, (he) => {
      k.value = !1, he === Ts.Finished && (Or(I) || (N.value = "hidden", y(S), c()));
    })));
  }
  return $e(() => {
    gt([d], (ae, Xe, be) => {
      de(be), O.value = !1;
    }, { immediate: !0 });
  }), qe(li, I), Jg(J(() => yt(N.value, { visible: Je.Open, hidden: Je.Closed }) | s.value)), () => {
    let { appear: ae, show: Xe, enter: be, enterFrom: he, enterTo: F, entered: U, leave: me, leaveFrom: Ce, leaveTo: ze, ...Oe } = e, He = { ref: u }, at = { ...Oe, ...m.value && d.value && Eo.isServer ? { class: An([n.class, Oe.class, ...W, ...ee]) } : {} };
    return Qe({ theirProps: at, ourProps: He, slot: {}, slots: o, attrs: n, features: Hc, visible: N.value === "visible", name: "TransitionChild" });
  };
} }), Mv = Ps, Kc = ye({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let r = si(), s = J(() => e.show === null && r !== null ? (r.value & Je.Open) === Je.Open : e.show);
  nt(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = Y(s.value ? "visible" : "hidden"), l = Bc(() => {
    i.value = "hidden";
  }), a = Y(!0), c = { show: s, appear: J(() => e.appear || !a.value) };
  return $e(() => {
    nt(() => {
      a.value = !1, s.value ? i.value = "visible" : Or(l) || (i.value = "hidden");
    });
  }), qe(li, l), qe(ii, c), () => {
    let u = Sc(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return Qe({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [Te(Mv, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...u }, o.default)] }, attrs: {}, features: Hc, visible: i.value === "visible", name: "Transition" });
  };
} });
const jv = /* @__PURE__ */ T("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Uv = { class: "fixed inset-0 z-10 overflow-y-auto" }, Bv = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Hv = { class: "mt-3 sm:mt-5" }, Kv = { class: "mt-2" }, qv = { class: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3" }, Wv = /* @__PURE__ */ ye({
  __name: "Modal",
  props: ["open"],
  setup(e) {
    const t = e;
    return (n, o) => (ge(), xt(ke(Kc), {
      as: "template",
      show: t.open
    }, {
      default: rt(() => [
        _e(ke(Pv), {
          as: "div",
          class: "relative z-10",
          onClose: o[0] || (o[0] = (r) => n.$emit("close"))
        }, {
          default: rt(() => [
            _e(ke(Ps), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: rt(() => [
                jv
              ]),
              _: 1
            }),
            T("div", Uv, [
              T("div", Bv, [
                _e(ke(Ps), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: rt(() => [
                    _e(ke(Av), { class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6" }, {
                      default: rt(() => [
                        T("div", null, [
                          T("div", Hv, [
                            _e(ke(Rv), {
                              as: "h3",
                              class: "text-base font-semibold leading-6 text-gray-900"
                            }, {
                              default: rt(() => [
                                Cr(n.$slots, "title")
                              ]),
                              _: 3
                            }),
                            T("div", Kv, [
                              Cr(n.$slots, "body")
                            ])
                          ])
                        ]),
                        T("div", qv, [
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
}), zv = /* @__PURE__ */ T("div", { class: "min-w-0 flex-1" }, [
  /* @__PURE__ */ T("h2", { class: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" }, " Page Builder ")
], -1), Jv = { class: "px-4 sm:px-6 lg:px-8" }, Gv = { class: "mt-8 flow-root" }, Yv = { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, Qv = { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, Xv = { class: "min-w-full divide-y divide-gray-300" }, Zv = /* @__PURE__ */ T("thead", null, [
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
], -1), ey = { class: "divide-y divide-gray-200" }, ty = { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, ny = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, oy = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, ry = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, sy = { class: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, iy = /* @__PURE__ */ T("h3", { class: "text-lg leading-6 font-medium text-gray-900" }, " Create New Page ", -1), ly = { class: "mt-2" }, ay = { class: "text-sm text-gray-500 flex flex-col gap-3" }, cy = /* @__PURE__ */ T("label", null, "Page Name", -1), uy = ["onKeydown"], fy = /* @__PURE__ */ ye({
  __name: "Pages",
  setup(e) {
    const t = new Nc();
    let n = Y(""), o = Y([]), r = Y(!1);
    const s = async () => {
      o.value = await t.loadPages();
    }, i = async () => {
      await t.createPage(n.value), await s(), a();
    }, l = () => {
      r.value = !0;
    }, a = () => {
      r.value = !1;
    };
    return $e(() => {
      s();
    }), (c, u) => {
      const f = va("router-link");
      return ge(), Be(Se, null, [
        T("div", null, [
          T("div", { class: "md:flex md:items-center md:justify-between p-5" }, [
            zv,
            T("div", { class: "mt-4 flex md:ml-4 md:mt-0" }, [
              T("button", {
                onClick: l,
                type: "button",
                class: "ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              }, " Create New Page ")
            ])
          ]),
          T("div", Jv, [
            T("div", Gv, [
              T("div", Yv, [
                T("div", Qv, [
                  T("table", Xv, [
                    Zv,
                    T("tbody", ey, [
                      (ge(!0), Be(Se, null, zo(ke(o), (d) => (ge(), Be("tr", null, [
                        T("td", ty, Vt(d.title), 1),
                        T("td", ny, Vt(d.slug), 1),
                        T("td", oy, Vt(new Date(d.created_at).toLocaleDateString()) + " - " + Vt(new Date(d.created_at).toLocaleTimeString()), 1),
                        T("td", ry, Vt(new Date(d.updated_at).toLocaleDateString()) + " - " + Vt(new Date(d.updated_at).toLocaleTimeString()), 1),
                        T("td", sy, [
                          _e(f, {
                            to: `/page-builder/pages/${d.slug}`,
                            class: "text-indigo-600 hover:text-indigo-900"
                          }, {
                            default: rt(() => [
                              Fa(" Edit ")
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
        _e(Wv, {
          onClose: a,
          open: ke(r)
        }, {
          title: rt(() => [
            iy
          ]),
          body: rt(() => [
            T("div", ly, [
              T("p", ay, [
                cy,
                Lt(T("input", {
                  "onUpdate:modelValue": u[0] || (u[0] = (d) => De(n) ? n.value = d : n = d),
                  type: "text",
                  class: "w-full border border-gray-300 rounded-md",
                  onKeydown: Jd(i, ["enter"])
                }, null, 40, uy), [
                  [Yn, ke(n)]
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
}), dy = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, py = {};
function hy(e, t) {
  const n = va("router-view");
  return ge(), xt(n);
}
const my = /* @__PURE__ */ dy(py, [["render", hy]]), gy = [
  { path: "/page-builder/pages", component: fy },
  { path: "/page-builder/pages/:slug", component: Hg }
], vy = Cg({
  history: Dm(),
  routes: gy
});
Qd(my).use(vy).mount("#app");
