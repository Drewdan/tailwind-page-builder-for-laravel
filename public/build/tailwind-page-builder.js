var zc = Object.defineProperty;
var Jc = (e, t, n) => t in e ? zc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Sr = (e, t, n) => (Jc(e, typeof t != "symbol" ? t + "" : t, n), n);
function Wt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Vs(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Ee(o) ? Xc(o) : Vs(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (Ee(e))
      return e;
    if (ae(e))
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
function $n(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const o = $n(e[n]);
      o && (t += o + " ");
    }
  else if (ae(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Zc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", eu = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", tu = /* @__PURE__ */ Wt(Zc), nu = /* @__PURE__ */ Wt(eu), ou = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ru = /* @__PURE__ */ Wt(ou);
function Pl(e) {
  return !!e || e === "";
}
function su(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = tr(e[o], t[o]);
  return n;
}
function tr(e, t) {
  if (e === t)
    return !0;
  let n = mi(e), o = mi(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Xn(e), o = Xn(t), n || o)
    return e === t;
  if (n = H(e), o = H(t), n || o)
    return n && o ? su(e, t) : !1;
  if (n = ae(e), o = ae(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !tr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function iu(e, t) {
  return e.findIndex((n) => tr(n, t));
}
const Fe = (e) => Ee(e) ? e : e == null ? "" : H(e) || ae(e) && (e.toString === Rl || !W(e.toString)) ? JSON.stringify(e, $l, 2) : String(e), $l = (e, t) => t && t.__v_isRef ? $l(e, t.value) : rn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : nr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ae(t) && !H(t) && !Vl(t) ? String(t) : t, he = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Nn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Me = () => {
}, Al = () => !1, lu = /^on[^a-z]/, uo = (e) => lu.test(e), Bo = (e) => e.startsWith("onUpdate:"), Se = Object.assign, ks = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, au = Object.prototype.hasOwnProperty, X = (e, t) => au.call(e, t), H = Array.isArray, rn = (e) => fo(e) === "[object Map]", nr = (e) => fo(e) === "[object Set]", mi = (e) => fo(e) === "[object Date]", W = (e) => typeof e == "function", Ee = (e) => typeof e == "string", Xn = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", Is = (e) => ae(e) && W(e.then) && W(e.catch), Rl = Object.prototype.toString, fo = (e) => Rl.call(e), Fs = (e) => fo(e).slice(8, -1), Vl = (e) => fo(e) === "[object Object]", Ls = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ Wt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cu = /* @__PURE__ */ Wt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), or = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, uu = /-(\w)/g, Et = or((e) => e.replace(uu, (t, n) => n ? n.toUpperCase() : "")), fu = /\B([A-Z])/g, Dt = or((e) => e.replace(fu, "-$1").toLowerCase()), dn = or((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yt = or((e) => e ? `on${dn(e)}` : ""), Zn = (e, t) => !Object.is(e, t), En = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Uo = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, eo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let gi;
const kl = () => gi || (gi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pt;
class du {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = pt, !t && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = pt;
      try {
        return pt = this, t();
      } finally {
        pt = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Wr("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    pt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    pt = this.parent;
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
function pu(e, t = pt) {
  t && t.active && t.effects.push(e);
}
const to = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Il = (e) => (e.w & Ht) > 0, Fl = (e) => (e.n & Ht) > 0, hu = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ht;
}, mu = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Il(r) && !Fl(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ht, r.n &= ~Ht;
    }
    t.length = n;
  }
}, zr = /* @__PURE__ */ new WeakMap();
let Hn = 0, Ht = 1;
const Jr = 30;
let He;
const sn = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Gr = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Ms {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, pu(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = He, n = Bt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = He, He = this, Bt = !0, Ht = 1 << ++Hn, Hn <= Jr ? hu(this) : vi(this), this.fn();
    } finally {
      Hn <= Jr && mu(this), Ht = 1 << --Hn, He = this.parent, Bt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    He === this ? this.deferStop = !0 : this.active && (vi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function vi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Bt = !0;
const Ll = [];
function hn() {
  Ll.push(Bt), Bt = !1;
}
function mn() {
  const e = Ll.pop();
  Bt = e === void 0 ? !0 : e;
}
function ze(e, t, n) {
  if (Bt && He) {
    let o = zr.get(e);
    o || zr.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = to());
    const s = process.env.NODE_ENV !== "production" ? { effect: He, target: e, type: t, key: n } : void 0;
    Yr(r, s);
  }
}
function Yr(e, t) {
  let n = !1;
  Hn <= Jr ? Fl(e) || (e.n |= Ht, n = !Il(e)) : n = !e.has(He), n && (e.add(He), He.deps.push(e), process.env.NODE_ENV !== "production" && He.onTrack && He.onTrack(Object.assign({ effect: He }, t)));
}
function Tt(e, t, n, o, r, s) {
  const i = zr.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && H(e)) {
    const c = eo(o);
    i.forEach((u, f) => {
      (f === "length" || f >= c) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        H(e) ? Ls(n) && l.push(i.get("length")) : (l.push(i.get(sn)), rn(e) && l.push(i.get(Gr)));
        break;
      case "delete":
        H(e) || (l.push(i.get(sn)), rn(e) && l.push(i.get(Gr)));
        break;
      case "set":
        rn(e) && l.push(i.get(sn));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? bn(l[0], a) : bn(l[0]));
  else {
    const c = [];
    for (const u of l)
      u && c.push(...u);
    process.env.NODE_ENV !== "production" ? bn(to(c), a) : bn(to(c));
  }
}
function bn(e, t) {
  const n = H(e) ? e : [...e];
  for (const o of n)
    o.computed && yi(o, t);
  for (const o of n)
    o.computed || yi(o, t);
}
function yi(e, t) {
  (e !== He || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Se({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const gu = /* @__PURE__ */ Wt("__proto__,__v_isRef,__isVue"), Ml = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xn)
), vu = /* @__PURE__ */ rr(), yu = /* @__PURE__ */ rr(!1, !0), Eu = /* @__PURE__ */ rr(!0), _u = /* @__PURE__ */ rr(!0, !0), Ei = /* @__PURE__ */ bu();
function bu() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = G(this);
      for (let s = 0, i = this.length; s < i; s++)
        ze(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(G)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      hn();
      const o = G(this)[t].apply(this, n);
      return mn(), o;
    };
  }), e;
}
function rr(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? zl : Wl : t ? ql : Kl).get(o))
      return o;
    const i = H(o);
    if (!e && i && X(Ei, r))
      return Reflect.get(Ei, r, s);
    const l = Reflect.get(o, r, s);
    return (Xn(r) ? Ml.has(r) : gu(r)) || (e || ze(o, "get", r), t) ? l : Te(l) ? i && Ls(r) ? l : l.value : ae(l) ? e ? Jl(l) : An(l) : l;
  };
}
const wu = /* @__PURE__ */ jl(), Nu = /* @__PURE__ */ jl(!0);
function jl(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Kt(i) && Te(i) && !Te(r))
      return !1;
    if (!e && (!Ho(r) && !Kt(r) && (i = G(i), r = G(r)), !H(n) && Te(i) && !Te(r)))
      return i.value = r, !0;
    const l = H(n) && Ls(o) ? Number(o) < n.length : X(n, o), a = Reflect.set(n, o, r, s);
    return n === G(s) && (l ? Zn(r, i) && Tt(n, "set", o, r, i) : Tt(n, "add", o, r)), a;
  };
}
function Ou(e, t) {
  const n = X(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Tt(e, "delete", t, void 0, o), r;
}
function xu(e, t) {
  const n = Reflect.has(e, t);
  return (!Xn(t) || !Ml.has(t)) && ze(e, "has", t), n;
}
function Su(e) {
  return ze(e, "iterate", H(e) ? "length" : sn), Reflect.ownKeys(e);
}
const Bl = {
  get: vu,
  set: wu,
  deleteProperty: Ou,
  has: xu,
  ownKeys: Su
}, Ul = {
  get: Eu,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Wr(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Wr(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Cu = /* @__PURE__ */ Se({}, Bl, {
  get: yu,
  set: Nu
}), Du = /* @__PURE__ */ Se({}, Ul, {
  get: _u
}), js = (e) => e, sr = (e) => Reflect.getPrototypeOf(e);
function bo(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = G(e), s = G(t);
  n || (t !== s && ze(r, "get", t), ze(r, "get", s));
  const { has: i } = sr(r), l = o ? js : n ? Bs : no;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function wo(e, t = !1) {
  const n = this.__v_raw, o = G(n), r = G(e);
  return t || (e !== r && ze(o, "has", e), ze(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function No(e, t = !1) {
  return e = e.__v_raw, !t && ze(G(e), "iterate", sn), Reflect.get(e, "size", e);
}
function _i(e) {
  e = G(e);
  const t = G(this);
  return sr(t).has.call(t, e) || (t.add(e), Tt(t, "add", e, e)), this;
}
function bi(e, t) {
  t = G(t);
  const n = G(this), { has: o, get: r } = sr(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Hl(n, o, e) : (e = G(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Zn(t, i) && Tt(n, "set", e, t, i) : Tt(n, "add", e, t), this;
}
function wi(e) {
  const t = G(this), { has: n, get: o } = sr(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Hl(t, n, e) : (e = G(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Tt(t, "delete", e, void 0, s), i;
}
function Ni() {
  const e = G(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? rn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Tt(e, "clear", void 0, void 0, n), o;
}
function Oo(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = G(i), a = t ? js : e ? Bs : no;
    return !e && ze(l, "iterate", sn), i.forEach((c, u) => o.call(r, a(c), a(u), s));
  };
}
function xo(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = G(r), i = rn(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = r[e](...o), u = n ? js : t ? Bs : no;
    return !t && ze(s, "iterate", a ? Gr : sn), {
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
      console.warn(`${dn(e)} operation ${n}failed: target is readonly.`, G(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Tu() {
  const e = {
    get(s) {
      return bo(this, s);
    },
    get size() {
      return No(this);
    },
    has: wo,
    add: _i,
    set: bi,
    delete: wi,
    clear: Ni,
    forEach: Oo(!1, !1)
  }, t = {
    get(s) {
      return bo(this, s, !1, !0);
    },
    get size() {
      return No(this);
    },
    has: wo,
    add: _i,
    set: bi,
    delete: wi,
    clear: Ni,
    forEach: Oo(!1, !0)
  }, n = {
    get(s) {
      return bo(this, s, !0);
    },
    get size() {
      return No(this, !0);
    },
    has(s) {
      return wo.call(this, s, !0);
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
    forEach: Oo(!0, !1)
  }, o = {
    get(s) {
      return bo(this, s, !0, !0);
    },
    get size() {
      return No(this, !0);
    },
    has(s) {
      return wo.call(this, s, !0);
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
    forEach: Oo(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = xo(s, !1, !1), n[s] = xo(s, !0, !1), t[s] = xo(s, !1, !0), o[s] = xo(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Pu, $u, Au, Ru] = /* @__PURE__ */ Tu();
function ir(e, t) {
  const n = t ? e ? Ru : Au : e ? $u : Pu;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(X(n, r) && r in o ? n : o, r, s);
}
const Vu = {
  get: /* @__PURE__ */ ir(!1, !1)
}, ku = {
  get: /* @__PURE__ */ ir(!1, !0)
}, Iu = {
  get: /* @__PURE__ */ ir(!0, !1)
}, Fu = {
  get: /* @__PURE__ */ ir(!0, !0)
};
function Hl(e, t, n) {
  const o = G(n);
  if (o !== n && t.call(e, o)) {
    const r = Fs(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Kl = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Lu(Fs(e));
}
function An(e) {
  return Kt(e) ? e : lr(e, !1, Bl, Vu, Kl);
}
function ju(e) {
  return lr(e, !1, Cu, ku, ql);
}
function Jl(e) {
  return lr(e, !0, Ul, Iu, Wl);
}
function wn(e) {
  return lr(e, !0, Du, Fu, zl);
}
function lr(e, t, n, o, r) {
  if (!ae(e))
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
function ln(e) {
  return Kt(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ho(e) {
  return !!(e && e.__v_isShallow);
}
function Qr(e) {
  return ln(e) || Kt(e);
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Gl(e) {
  return Uo(e, "__v_skip", !0), e;
}
const no = (e) => ae(e) ? An(e) : e, Bs = (e) => ae(e) ? Jl(e) : e;
function Yl(e) {
  Bt && He && (e = G(e), process.env.NODE_ENV !== "production" ? Yr(e.dep || (e.dep = to()), {
    target: e,
    type: "get",
    key: "value"
  }) : Yr(e.dep || (e.dep = to())));
}
function Ql(e, t) {
  e = G(e), e.dep && (process.env.NODE_ENV !== "production" ? bn(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : bn(e.dep));
}
function Te(e) {
  return !!(e && e.__v_isRef === !0);
}
function Y(e) {
  return Zl(e, !1);
}
function Xl(e) {
  return Zl(e, !0);
}
function Zl(e, t) {
  return Te(e) ? e : new Bu(e, t);
}
class Bu {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : G(t), this._value = n ? t : no(t);
  }
  get value() {
    return Yl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ho(t) || Kt(t);
    t = n ? t : G(t), Zn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : no(t), Ql(this, t));
  }
}
function fe(e) {
  return Te(e) ? e.value : e;
}
const Uu = {
  get: (e, t, n) => fe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Te(r) && !Te(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ea(e) {
  return ln(e) ? e : new Proxy(e, Uu);
}
var ta;
class Hu {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[ta] = !1, this._dirty = !0, this.effect = new Ms(t, () => {
      this._dirty || (this._dirty = !0, Ql(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = G(this);
    return Yl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
ta = "__v_isReadonly";
function Ku(e, t, n = !1) {
  let o, r;
  const s = W(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Me) : (o = e.get, r = e.set);
  const i = new Hu(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const an = [];
function Ao(e) {
  an.push(e);
}
function Ro() {
  an.pop();
}
function C(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  hn();
  const n = an.length ? an[an.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = qu();
  if (o)
    St(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${hr(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Wu(r)), console.warn(...s);
  }
  mn();
}
function qu() {
  let e = an[an.length - 1];
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${hr(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Ju(e.props), s] : [r + s];
}
function Ju(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...na(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function na(e, t, n) {
  return Ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Te(t) ? (t = na(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : W(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
}
const Us = {
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
function St(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    ar(s, t, n);
  }
  return r;
}
function nt(e, t, n, o) {
  if (W(e)) {
    const s = St(e, t, n, o);
    return s && Is(s) && s.catch((i) => {
      ar(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(nt(e[s], t, n, o));
  return r;
}
function ar(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Us[n] : n;
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
      St(a, null, 10, [e, i, l]);
      return;
    }
  }
  Gu(e, n, r, o);
}
function Gu(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Us[t];
    if (n && Ao(n), C(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ro(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let oo = !1, Xr = !1;
const je = [];
let mt = 0;
const On = [];
let ht = null, kt = 0;
const oa = /* @__PURE__ */ Promise.resolve();
let Hs = null;
const Yu = 100;
function Ks(e) {
  const t = Hs || oa;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qu(e) {
  let t = mt + 1, n = je.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    ro(je[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function cr(e) {
  (!je.length || !je.includes(e, oo && e.allowRecurse ? mt + 1 : mt)) && (e.id == null ? je.push(e) : je.splice(Qu(e.id), 0, e), ra());
}
function ra() {
  !oo && !Xr && (Xr = !0, Hs = oa.then(la));
}
function Xu(e) {
  const t = je.indexOf(e);
  t > mt && je.splice(t, 1);
}
function sa(e) {
  H(e) ? On.push(...e) : (!ht || !ht.includes(e, e.allowRecurse ? kt + 1 : kt)) && On.push(e), ra();
}
function Oi(e, t = oo ? mt + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < je.length; t++) {
    const n = je[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && qs(e, n))
        continue;
      je.splice(t, 1), t--, n();
    }
  }
}
function ia(e) {
  if (On.length) {
    const t = [...new Set(On)];
    if (On.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ht.sort((n, o) => ro(n) - ro(o)), kt = 0; kt < ht.length; kt++)
      process.env.NODE_ENV !== "production" && qs(e, ht[kt]) || ht[kt]();
    ht = null, kt = 0;
  }
}
const ro = (e) => e.id == null ? 1 / 0 : e.id, Zu = (e, t) => {
  const n = ro(e) - ro(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function la(e) {
  Xr = !1, oo = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), je.sort(Zu);
  const t = process.env.NODE_ENV !== "production" ? (n) => qs(e, n) : Me;
  try {
    for (mt = 0; mt < je.length; mt++) {
      const n = je[mt];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        St(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    mt = 0, je.length = 0, ia(e), oo = !1, Hs = null, (je.length || On.length) && la(e);
  }
}
function qs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Yu) {
      const o = t.ownerInstance, r = o && ti(o.type);
      return C(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Ut = !1;
const _n = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (kl().__VUE_HMR_RUNTIME__ = {
  createRecord: Cr(aa),
  rerender: Cr(nf),
  reload: Cr(of)
});
const pn = /* @__PURE__ */ new Map();
function ef(e) {
  const t = e.type.__hmrId;
  let n = pn.get(t);
  n || (aa(t, e.type), n = pn.get(t)), n.instances.add(e);
}
function tf(e) {
  pn.get(e.type.__hmrId).instances.delete(e);
}
function aa(e, t) {
  return pn.has(e) ? !1 : (pn.set(e, {
    initialDef: Wn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Wn(e) {
  return Ua(e) ? e.__vccOpts : e;
}
function nf(e, t) {
  const n = pn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Wn(o.type).render = t), o.renderCache = [], Ut = !0, o.update(), Ut = !1;
  }));
}
function of(e, t) {
  const n = pn.get(e);
  if (!n)
    return;
  t = Wn(t), xi(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Wn(r.type);
    _n.has(s) || (s !== n.initialDef && xi(s, t), _n.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (_n.add(s), r.ceReload(t.styles), _n.delete(s)) : r.parent ? cr(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  sa(() => {
    for (const r of o)
      _n.delete(Wn(r.type));
  });
}
function xi(e, t) {
  Se(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Cr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let gt, Kn = [], Zr = !1;
function po(e, ...t) {
  gt ? gt.emit(e, ...t) : Zr || Kn.push({ event: e, args: t });
}
function ca(e, t) {
  var n, o;
  gt = e, gt ? (gt.enabled = !0, Kn.forEach(({ event: r, args: s }) => gt.emit(r, ...s)), Kn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ca(s, t);
  }), setTimeout(() => {
    gt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Zr = !0, Kn = []);
  }, 3e3)) : (Zr = !0, Kn = []);
}
function rf(e, t) {
  po("app:init", e, t, {
    Fragment: Ne,
    Text: mo,
    Comment: Le,
    Static: Vo
  });
}
function sf(e) {
  po("app:unmount", e);
}
const lf = /* @__PURE__ */ Ws(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), ua = /* @__PURE__ */ Ws(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), af = /* @__PURE__ */ Ws(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), cf = (e) => {
  gt && typeof gt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !gt.cleanupBuffer(e) && af(e);
};
function Ws(e) {
  return (t) => {
    po(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const uf = /* @__PURE__ */ fa(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), ff = /* @__PURE__ */ fa(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function fa(e) {
  return (t, n, o) => {
    po(e, t.appContext.app, t.uid, t, n, o);
  };
}
function df(e, t, n) {
  po("component:emit", e.appContext.app, e, t, n);
}
function pf(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || he;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: u, propsOptions: [f] } = e;
    if (u)
      if (!(t in u))
        (!f || !(Yt(t) in f)) && C(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Yt(t)}" prop.`);
      else {
        const d = u[t];
        W(d) && (d(...n) || C(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: d } = o[u] || he;
    d && (r = n.map((m) => Ee(m) ? m.trim() : m)), f && (r = n.map(eo));
  }
  if (process.env.NODE_ENV !== "production" && df(e, t, r), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Yt(u)] && C(`Event "${u}" is emitted in component ${hr(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Dt(t)}" instead of "${t}".`);
  }
  let l, a = o[l = Yt(t)] || // also try camelCase event handler (#2249)
  o[l = Yt(Et(t))];
  !a && s && (a = o[l = Yt(Dt(t))]), a && nt(a, e, 6, r);
  const c = o[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, nt(c, e, 6, r);
  }
}
function da(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!W(e)) {
    const a = (c) => {
      const u = da(c, t, !0);
      u && (l = !0, Se(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ae(e) && o.set(e, null), null) : (H(s) ? s.forEach((a) => i[a] = null) : Se(i, s), ae(e) && o.set(e, i), i);
}
function ur(e, t) {
  return !e || !uo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, Dt(t)) || X(e, t));
}
let Re = null, pa = null;
function Ko(e) {
  const t = Re;
  return Re = e, pa = e && e.type.__scopeId || null, t;
}
function tt(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Li(-1);
    const s = Ko(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ko(s), o._d && Li(1);
    }
    return process.env.NODE_ENV !== "production" && ua(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let es = !1;
function qo() {
  es = !0;
}
function Dr(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: a, emit: c, render: u, renderCache: f, data: d, setupState: m, ctx: g, inheritAttrs: y } = e;
  let N, O;
  const S = Ko(e);
  process.env.NODE_ENV !== "production" && (es = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = r || o;
      N = it(u.call(z, z, f, s, m, d, g)), O = a;
    } else {
      const z = t;
      process.env.NODE_ENV !== "production" && a === s && qo(), N = it(z.length > 1 ? z(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return qo(), a;
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
    Gn.length = 0, ar(
      z,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), N = xe(Le);
  }
  let k = N, F;
  if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && ([k, F] = hf(N)), O && y !== !1) {
    const z = Object.keys(O), { shapeFlag: ee } = k;
    if (z.length) {
      if (ee & 7)
        i && z.some(Bo) && (O = gf(O, i)), k = ct(k, O);
      else if (process.env.NODE_ENV !== "production" && !es && k.type !== Le) {
        const ie = Object.keys(a), K = [], Q = [];
        for (let te = 0, de = ie.length; te < de; te++) {
          const me = ie[te];
          uo(me) ? Bo(me) || K.push(me[2].toLowerCase() + me.slice(3)) : Q.push(me);
        }
        Q.length && C(`Extraneous non-props attributes (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), K.length && C(`Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Si(k) && C("Runtime directive used on component with non-element root node. The directives will not function as intended."), k = ct(k), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Si(k) && C("Component inside <Transition> renders non-element root node that cannot be animated."), k.transition = n.transition), process.env.NODE_ENV !== "production" && F ? F(k) : N = k, Ko(S), N;
}
const hf = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ha(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [it(o), i];
};
function ha(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Cn(o)) {
      if (o.type !== Le || o.children === "v-if") {
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
    (n === "class" || n === "style" || uo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gf = (e, t) => {
  const n = {};
  for (const o in e)
    (!Bo(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Si = (e) => e.shapeFlag & 7 || e.type === Le;
function vf(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, c = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && Ut || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Ci(o, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (i[d] !== o[d] && !ur(c, d))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Ci(o, i, c) : !0 : !!i;
  return !1;
}
function Ci(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !ur(n, s))
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
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : sa(e);
}
function We(e, t) {
  if (!Ae)
    process.env.NODE_ENV !== "production" && C("provide() can only be used inside setup().");
  else {
    let n = Ae.provides;
    const o = Ae.parent && Ae.parent.provides;
    o === n && (n = Ae.provides = Object.create(o)), n[e] = t;
  }
}
function be(e, t, n = !1) {
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
function rt(e, t) {
  return zs(e, null, t);
}
const So = {};
function yt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !W(t) && C("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), zs(e, t, n);
}
function zs(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = he) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && C('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && C('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (F) => {
    C("Invalid watch source: ", F, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Ae;
  let c, u = !1, f = !1;
  if (Te(e) ? (c = () => e.value, u = Ho(e)) : ln(e) ? (c = () => e, o = !0) : H(e) ? (f = !0, u = e.some((F) => ln(F) || Ho(F)), c = () => e.map((F) => {
    if (Te(F))
      return F.value;
    if (ln(F))
      return nn(F);
    if (W(F))
      return St(
        F,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(F);
  })) : W(e) ? t ? c = () => St(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : c = () => {
    if (!(a && a.isUnmounted))
      return d && d(), nt(e, a, 3, [m]);
  } : (c = Me, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const F = c;
    c = () => nn(F());
  }
  let d, m = (F) => {
    d = S.onStop = () => {
      St(
        F,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, g;
  if (io)
    if (m = Me, t ? n && nt(t, a, 3, [
      c(),
      f ? [] : void 0,
      m
    ]) : c(), r === "sync") {
      const F = xd();
      g = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return Me;
  let y = f ? new Array(e.length).fill(So) : So;
  const N = () => {
    if (S.active)
      if (t) {
        const F = S.run();
        (o || u || (f ? F.some((z, ee) => Zn(z, y[ee])) : Zn(F, y))) && (d && d(), nt(t, a, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          y === So ? void 0 : f && y[0] === So ? [] : y,
          m
        ]), y = F);
      } else
        S.run();
  };
  N.allowRecurse = !!t;
  let O;
  r === "sync" ? O = N : r === "post" ? O = () => qe(N, a && a.suspense) : (N.pre = !0, a && (N.id = a.uid), O = () => cr(N));
  const S = new Ms(c, O);
  process.env.NODE_ENV !== "production" && (S.onTrack = s, S.onTrigger = i), t ? n ? N() : y = S.run() : r === "post" ? qe(S.run.bind(S), a && a.suspense) : S.run();
  const k = () => {
    S.stop(), a && a.scope && ks(a.scope.effects, S);
  };
  return g && g.push(k), k;
}
function bf(e, t, n) {
  const o = this.proxy, r = Ee(e) ? e.includes(".") ? ma(o, e) : () => o[e] : e.bind(o, o);
  let s;
  W(t) ? s = t : (s = t.handler, n = t);
  const i = Ae;
  Dn(this);
  const l = zs(r, s.bind(o), n);
  return i ? Dn(i) : un(), l;
}
function ma(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function nn(e, t) {
  if (!ae(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Te(e))
    nn(e.value, t);
  else if (H(e))
    for (let n = 0; n < e.length; n++)
      nn(e[n], t);
  else if (nr(e) || rn(e))
    e.forEach((n) => {
      nn(n, t);
    });
  else if (Vl(e))
    for (const n in e)
      nn(e[n], t);
  return e;
}
function wf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ke(() => {
    e.isMounted = !0;
  }), Ea(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], Nf = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: et,
    onEnter: et,
    onAfterEnter: et,
    onEnterCancelled: et,
    // leave
    onBeforeLeave: et,
    onLeave: et,
    onAfterLeave: et,
    onLeaveCancelled: et,
    // appear
    onBeforeAppear: et,
    onAppear: et,
    onAfterAppear: et,
    onAppearCancelled: et
  },
  setup(e, { slots: t }) {
    const n = ei(), o = wf();
    let r;
    return () => {
      const s = t.default && va(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let y = !1;
        for (const N of s)
          if (N.type !== Le) {
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
        return Tr(i);
      const c = Di(i);
      if (!c)
        return Tr(i);
      const u = ts(c, l, o, n);
      ns(c, u);
      const f = n.subTree, d = f && Di(f);
      let m = !1;
      const { getTransitionKey: g } = c.type;
      if (g) {
        const y = g();
        r === void 0 ? r = y : y !== r && (r = y, m = !0);
      }
      if (d && d.type !== Le && (!Xt(c, d) || m)) {
        const y = ts(d, l, o, n);
        if (ns(d, y), a === "out-in")
          return o.isLeaving = !0, y.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Tr(i);
        a === "in-out" && c.type !== Le && (y.delayLeave = (N, O, S) => {
          const k = ga(o, d);
          k[String(d.key)] = d, N._leaveCb = () => {
            O(), N._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = S;
        });
      }
      return i;
    };
  }
}, Of = Nf;
function ga(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function ts(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: g, onBeforeAppear: y, onAppear: N, onAfterAppear: O, onAppearCancelled: S } = t, k = String(e.key), F = ga(n, e), z = (K, Q) => {
    K && nt(K, o, 9, Q);
  }, ee = (K, Q) => {
    const te = Q[1];
    z(K, Q), H(K) ? K.every((de) => de.length <= 1) && te() : K.length <= 1 && te();
  }, ie = {
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
      const te = F[k];
      te && Xt(e, te) && te.el._leaveCb && te.el._leaveCb(), z(Q, [K]);
    },
    enter(K) {
      let Q = a, te = c, de = u;
      if (!n.isMounted)
        if (r)
          Q = N || a, te = O || c, de = S || u;
        else
          return;
      let me = !1;
      const ce = K._enterCb = (Ze) => {
        me || (me = !0, Ze ? z(de, [K]) : z(te, [K]), ie.delayedLeave && ie.delayedLeave(), K._enterCb = void 0);
      };
      Q ? ee(Q, [K, ce]) : ce();
    },
    leave(K, Q) {
      const te = String(e.key);
      if (K._enterCb && K._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Q();
      z(f, [K]);
      let de = !1;
      const me = K._leaveCb = (ce) => {
        de || (de = !0, Q(), ce ? z(g, [K]) : z(m, [K]), K._leaveCb = void 0, F[te] === e && delete F[te]);
      };
      F[te] = e, d ? ee(d, [K, me]) : me();
    },
    clone(K) {
      return ts(K, t, n, o);
    }
  };
  return ie;
}
function Tr(e) {
  if (ho(e))
    return e = ct(e), e.children = null, e;
}
function Di(e) {
  return ho(e) ? e.children ? e.children[0] : void 0 : e;
}
function ns(e, t) {
  e.shapeFlag & 6 && e.component ? ns(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function va(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ne ? (i.patchFlag & 128 && r++, o = o.concat(va(i.children, t, l))) : (t || i.type !== Le) && o.push(l != null ? ct(i, { key: l }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function ue(e) {
  return W(e) ? { setup: e, name: e.name } : e;
}
const zn = (e) => !!e.type.__asyncLoader, ho = (e) => e.type.__isKeepAlive;
function xf(e, t) {
  ya(e, "a", t);
}
function Sf(e, t) {
  ya(e, "da", t);
}
function ya(e, t, n = Ae) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (fr(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ho(r.parent.vnode) && Cf(o, t, n, r), r = r.parent;
  }
}
function Cf(e, t, n, o) {
  const r = fr(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ye(() => {
    ks(o[t], r);
  }, n);
}
function fr(e, t, n = Ae, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      hn(), Dn(n);
      const l = nt(t, n, e, i);
      return un(), mn(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Yt(Us[e].replace(/ hook$/, ""));
    C(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Pt = (e) => (t, n = Ae) => (!io || e === "sp") && fr(e, (...o) => t(...o), n), Df = Pt(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), ke = Pt(
  "m"
  /* LifecycleHooks.MOUNTED */
), Tf = Pt(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Pf = Pt(
  "u"
  /* LifecycleHooks.UPDATED */
), Ea = Pt(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Ye = Pt(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), $f = Pt(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Af = Pt(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Rf = Pt(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Vf(e, t = Ae) {
  fr("ec", e, t);
}
function _a(e) {
  cu(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function Wo(e, t) {
  const n = Re;
  if (n === null)
    return process.env.NODE_ENV !== "production" && C("withDirectives can only be used inside render functions."), e;
  const o = pr(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, a, c = he] = t[s];
    i && (W(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && nn(l), r.push({
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
function zt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[o];
    a && (hn(), nt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), mn());
  }
}
const zo = "components";
function ba(e, t) {
  return Na(zo, e, !0, t) || e;
}
const wa = Symbol();
function Js(e) {
  return Ee(e) ? Na(zo, e, !1) || e : e || wa;
}
function Na(e, t, n = !0, o = !1) {
  const r = Re || Ae;
  if (r) {
    const s = r.type;
    if (e === zo) {
      const l = ti(
        s,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (l && (l === t || l === Et(t) || l === dn(Et(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ti(r[e] || s[e], t) || // global registration
      Ti(r.appContext[e], t)
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
    process.env.NODE_ENV !== "production" && C(`resolve${dn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Ti(e, t) {
  return e && (e[t] || e[Et(t)] || e[dn(Et(t))]);
}
function Sn(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (H(e) || Ee(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && C(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (ae(e))
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
function Pr(e, t, n = {}, o, r) {
  if (Re.isCE || Re.parent && zn(Re.parent) && Re.parent.isCE)
    return t !== "default" && (n.name = t), xe("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (C("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), se();
  const i = s && Oa(s(n)), l = at(
    Ne,
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
  return e.some((t) => Cn(t) ? !(t.type === Le || t.type === Ne && !Oa(t.children)) : !0) ? e : null;
}
const os = (e) => e ? Ma(e) ? pr(e) || e.proxy : os(e.parent) : null, cn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? wn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? wn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? wn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? wn(e.refs) : e.refs,
    $parent: (e) => os(e.parent),
    $root: (e) => os(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ys(e),
    $forceUpdate: (e) => e.f || (e.f = () => cr(e.update)),
    $nextTick: (e) => e.n || (e.n = Ks.bind(e.proxy)),
    $watch: (e) => bf.bind(e)
  })
), Gs = (e) => e === "_" || e === "$", $r = (e, t) => e !== he && !e.__isScriptSetup && X(e, t), xa = {
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
        if ($r(o, t))
          return i[t] = 1, o[t];
        if (r !== he && X(r, t))
          return i[t] = 2, r[t];
        if ((c = e.propsOptions[0]) && X(c, t))
          return i[t] = 3, s[t];
        if (n !== he && X(n, t))
          return i[t] = 4, n[t];
        rs && (i[t] = 0);
      }
    }
    const u = cn[t];
    let f, d;
    if (u)
      return t === "$attrs" && (ze(e, "get", t), process.env.NODE_ENV !== "production" && qo()), u(e);
    if ((f = l.__cssModules) && (f = f[t]))
      return f;
    if (n !== he && X(n, t))
      return i[t] = 4, n[t];
    if (d = a.config.globalProperties, X(d, t))
      return d[t];
    process.env.NODE_ENV !== "production" && Re && (!Ee(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== he && Gs(t[0]) && X(r, t) ? C(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Re && C(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return $r(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && X(r, t) ? (C(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== he && X(o, t) ? (o[t] = n, !0) : X(e.props, t) ? (process.env.NODE_ENV !== "production" && C(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && C(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== he && X(e, i) || $r(t, i) || (l = s[0]) && X(l, i) || X(o, i) || X(cn, i) || X(r.config.globalProperties, i);
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
  }), Object.keys(cn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => cn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Me
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
      set: Me
    });
  });
}
function Ff(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Gs(o[0])) {
        C(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Me
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
let rs = !0;
function Mf(e) {
  const t = Ys(e), n = e.proxy, o = e.ctx;
  rs = !1, t.beforeCreate && Pi(
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
    renderTriggered: ie,
    errorCaptured: K,
    serverPrefetch: Q,
    // public API
    expose: te,
    inheritAttrs: de,
    // assets
    components: me,
    directives: ce,
    filters: Ze
  } = t, we = process.env.NODE_ENV !== "production" ? Lf() : null;
  if (process.env.NODE_ENV !== "production") {
    const [I] = e.propsOptions;
    if (I)
      for (const B in I)
        we("Props", B);
  }
  if (c && jf(c, o, we, e.appContext.config.unwrapInjectedRef), i)
    for (const I in i) {
      const B = i[I];
      W(B) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, I, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[I] = B.bind(n), process.env.NODE_ENV !== "production" && we("Methods", I)) : process.env.NODE_ENV !== "production" && C(`Method "${I}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !W(r) && C("The data option must be a function. Plain object usage is no longer supported.");
    const I = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Is(I) && C("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ae(I))
      process.env.NODE_ENV !== "production" && C("data() should return an object.");
    else if (e.data = An(I), process.env.NODE_ENV !== "production")
      for (const B in I)
        we("Data", B), Gs(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => I[B],
          set: Me
        });
  }
  if (rs = !0, s)
    for (const I in s) {
      const B = s[I], ye = W(B) ? B.bind(n, n) : W(B.get) ? B.get.bind(n, n) : Me;
      process.env.NODE_ENV !== "production" && ye === Me && C(`Computed property "${I}" has no getter.`);
      const Pe = !W(B) && W(B.set) ? B.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        C(`Write operation failed: computed property "${I}" is readonly.`);
      } : Me, Je = q({
        get: ye,
        set: Pe
      });
      Object.defineProperty(o, I, {
        enumerable: !0,
        configurable: !0,
        get: () => Je.value,
        set: (Ce) => Je.value = Ce
      }), process.env.NODE_ENV !== "production" && we("Computed", I);
    }
  if (l)
    for (const I in l)
      Sa(l[I], o, n, I);
  if (a) {
    const I = W(a) ? a.call(n) : a;
    Reflect.ownKeys(I).forEach((B) => {
      We(B, I[B]);
    });
  }
  u && Pi(
    u,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ve(I, B) {
    H(B) ? B.forEach((ye) => I(ye.bind(n))) : B && I(B.bind(n));
  }
  if (ve(Df, f), ve(ke, d), ve(Tf, m), ve(Pf, g), ve(xf, y), ve(Sf, N), ve(Vf, K), ve(Rf, ee), ve(Af, ie), ve(Ea, S), ve(Ye, F), ve($f, Q), H(te))
    if (te.length) {
      const I = e.exposed || (e.exposed = {});
      te.forEach((B) => {
        Object.defineProperty(I, B, {
          get: () => n[B],
          set: (ye) => n[B] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  z && e.render === Me && (e.render = z), de != null && (e.inheritAttrs = de), me && (e.components = me), ce && (e.directives = ce);
}
function jf(e, t, n = Me, o = !1) {
  H(e) && (e = ss(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ae(s) ? "default" in s ? i = be(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : i = be(s.from || r) : i = be(s), Te(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && C(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Pi(e, t, n) {
  nt(H(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sa(e, t, n, o) {
  const r = o.includes(".") ? ma(n, o) : () => n[o];
  if (Ee(e)) {
    const s = t[e];
    W(s) ? yt(r, s) : process.env.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e}"`, s);
  } else if (W(e))
    yt(r, e.bind(n));
  else if (ae(e))
    if (H(e))
      e.forEach((s) => Sa(s, t, n, o));
    else {
      const s = W(e.handler) ? e.handler.bind(n) : t[e.handler];
      W(s) ? yt(r, s, e) : process.env.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && C(`Invalid watch option: "${o}"`, e);
}
function Ys(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach((c) => Jo(a, c, i, !0)), Jo(a, t, i)), ae(t) && s.set(t, a), a;
}
function Jo(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Jo(e, s, n, !0), r && r.forEach((i) => Jo(e, i, n, !0));
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
  data: $i,
  props: Qt,
  emits: Qt,
  // objects
  methods: Qt,
  computed: Qt,
  // lifecycle
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  // assets
  components: Qt,
  directives: Qt,
  // watch
  watch: Hf,
  // provide / inject
  provide: $i,
  inject: Uf
};
function $i(e, t) {
  return t ? e ? function() {
    return Se(W(e) ? e.call(this, this) : e, W(t) ? t.call(this, this) : t);
  } : t : e;
}
function Uf(e, t) {
  return Qt(ss(e), ss(t));
}
function ss(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qt(e, t) {
  return e ? Se(Se(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Hf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Se(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = Ue(e[o], t[o]);
  return n;
}
function Kf(e, t, n, o = !1) {
  const r = {}, s = {};
  Uo(s, dr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ca(e, t, r, s);
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
        if (ur(e.emitsOptions, d))
          continue;
        const m = t[d];
        if (a)
          if (X(s, d))
            m !== s[d] && (s[d] = m, c = !0);
          else {
            const g = Et(d);
            r[g] = is(
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
      (!t || !X(t, f) && ((u = Dt(f)) === f || !X(t, u))) && (a ? n && (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = is(
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
  c && Tt(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Ta(t || {}, r, e);
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
      r && X(r, u = Et(a)) ? !s || !s.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : ur(e.emitsOptions, a) || (!(a in o) || c !== o[a]) && (o[a] = c, i = !0);
    }
  if (s) {
    const a = G(n), c = l || he;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = is(r, a, f, c[f], e, !X(c, f));
    }
  }
  return i;
}
function is(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = X(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && W(a)) {
        const { propsDefaults: c } = r;
        n in c ? o = c[n] : (Dn(r), o = c[n] = a.call(null, t), un());
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
      Se(i, d), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !a)
    return ae(e) && o.set(e, Nn), Nn;
  if (H(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !Ee(s[u]) && C("props must be strings when using array syntax.", s[u]);
      const f = Et(s[u]);
      Ai(f) && (i[f] = he);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !ae(s) && C("invalid props options", s);
    for (const u in s) {
      const f = Et(u);
      if (Ai(f)) {
        const d = s[u], m = i[f] = H(d) || W(d) ? { type: d } : Object.assign({}, d);
        if (m) {
          const g = Vi(Boolean, m.type), y = Vi(String, m.type);
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
  return ae(e) && o.set(e, c), c;
}
function Ai(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && C(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ls(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Ri(e, t) {
  return ls(e) === ls(t);
}
function Vi(e, t) {
  return H(t) ? t.findIndex((n) => Ri(n, e)) : W(t) && Ri(t, e) ? 0 : -1;
}
function Ta(e, t, n) {
  const o = G(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && zf(s, o[s], i, !X(e, s) && !X(e, Dt(s)));
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
const Jf = /* @__PURE__ */ Wt("String,Number,Boolean,Function,Symbol,BigInt");
function Gf(e, t) {
  let n;
  const o = ls(t);
  if (Jf(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = ae(e) : o === "Array" ? n = H(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Yf(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(dn).join(" | ")}`;
  const r = n[0], s = Fs(t), i = ki(t, r), l = ki(t, s);
  return n.length === 1 && Ii(r) && !Qf(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Ii(s) && (o += `with value ${l}.`), o;
}
function ki(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ii(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Qf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Pa = (e) => e[0] === "_" || e === "$stable", Qs = (e) => H(e) ? e.map(it) : [it(e)], Xf = (e, t, n) => {
  if (t._n)
    return t;
  const o = tt((...r) => (process.env.NODE_ENV !== "production" && Ae && C(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Qs(t(...r))), n);
  return o._c = !1, o;
}, $a = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Pa(r))
      continue;
    const s = e[r];
    if (W(s))
      t[r] = Xf(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && C(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Qs(s);
      t[r] = () => i;
    }
  }
}, Aa = (e, t) => {
  process.env.NODE_ENV !== "production" && !ho(e.vnode) && C("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Qs(t);
  e.slots.default = () => n;
}, Zf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = G(t), Uo(t, "_", n)) : $a(t, e.slots = {});
  } else
    e.slots = {}, t && Aa(e, t);
  Uo(e.slots, dr, 1);
}, ed = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = he;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ut ? Se(r, t) : n && l === 1 ? s = !1 : (Se(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, $a(t, r)), i = t;
  } else
    t && (Aa(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Pa(l) && !(l in i) && delete r[l];
};
function Ra() {
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
    W(o) || (o = Object.assign({}, o)), r != null && !ae(r) && (process.env.NODE_ENV !== "production" && C("root props passed to app.mount() must be an object."), r = null);
    const s = Ra(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: td++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Bi,
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
        return process.env.NODE_ENV !== "production" && us(c, s.config), u ? (process.env.NODE_ENV !== "production" && s.components[c] && C(`Component "${c}" has already been registered in target app.`), s.components[c] = u, a) : s.components[c];
      },
      directive(c, u) {
        return process.env.NODE_ENV !== "production" && _a(c), u ? (process.env.NODE_ENV !== "production" && s.directives[c] && C(`Directive "${c}" has already been registered in target app.`), s.directives[c] = u, a) : s.directives[c];
      },
      mount(c, u, f) {
        if (l)
          process.env.NODE_ENV !== "production" && C("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && C("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const d = xe(o, r);
          return d.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(ct(d), c, f);
          }), u && t ? t(d, c) : e(d, c, f), l = !0, a._container = c, c.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = d.component, rf(a, Bi)), pr(d.component) || d.component.proxy;
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
function as(e, t, n, o, r = !1) {
  if (H(e)) {
    e.forEach((d, m) => as(d, t && (H(t) ? t[m] : t), n, o, r));
    return;
  }
  if (zn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? pr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    C("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = t && t.r, u = l.refs === he ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== a && (Ee(c) ? (u[c] = null, X(f, c) && (f[c] = null)) : Te(c) && (c.value = null)), W(a))
    St(a, l, 12, [i, u]);
  else {
    const d = Ee(a), m = Te(a);
    if (d || m) {
      const g = () => {
        if (e.f) {
          const y = d ? X(f, a) ? f[a] : u[a] : a.value;
          r ? H(y) && ks(y, s) : H(y) ? y.includes(s) || y.push(s) : d ? (u[a] = [s], X(f, a) && (f[a] = u[a])) : (a.value = [s], e.k && (u[e.k] = a.value));
        } else
          d ? (u[a] = i, X(f, a) && (f[a] = i)) : m ? (a.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (g.id = -1, qe(g, n)) : g();
    } else
      process.env.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let In, Lt;
function Nt(e, t) {
  e.appContext.config.performance && Go() && Lt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && uf(e, t, Go() ? Lt.now() : Date.now());
}
function Ot(e, t) {
  if (e.appContext.config.performance && Go()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Lt.mark(o), Lt.measure(`<${hr(e, e.type)}> ${t}`, n, o), Lt.clearMarks(n), Lt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && ff(e, t, Go() ? Lt.now() : Date.now());
}
function Go() {
  return In !== void 0 || (typeof window < "u" && window.performance ? (In = !0, Lt = window.performance) : In = !1), In;
}
function od() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const qe = _f;
function rd(e) {
  return sd(e);
}
function sd(e, t) {
  od();
  const n = kl();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && ca(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: a, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m = Me, insertStaticContent: g } = e, y = (p, h, v, w = null, _ = null, P = null, A = !1, T = null, $ = process.env.NODE_ENV !== "production" && Ut ? !1 : !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Xt(p, h) && (w = R(p), Ke(p, _, P, !0), p = null), h.patchFlag === -2 && ($ = !1, h.dynamicChildren = null);
    const { type: x, ref: j, shapeFlag: M } = h;
    switch (x) {
      case mo:
        N(p, h, v, w);
        break;
      case Le:
        O(p, h, v, w);
        break;
      case Vo:
        p == null ? S(h, v, w, A) : process.env.NODE_ENV !== "production" && k(p, h, v, A);
        break;
      case Ne:
        ce(p, h, v, w, _, P, A, T, $);
        break;
      default:
        M & 1 ? ee(p, h, v, w, _, P, A, T, $) : M & 6 ? Ze(p, h, v, w, _, P, A, T, $) : M & 64 || M & 128 ? x.process(p, h, v, w, _, P, A, T, $, L) : process.env.NODE_ENV !== "production" && C("Invalid VNode type:", x, `(${typeof x})`);
    }
    j != null && _ && as(j, p && p.ref, P, h || p, !h);
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
  }, ee = (p, h, v, w, _, P, A, T, $) => {
    A = A || h.type === "svg", p == null ? ie(h, v, w, _, P, A, T, $) : te(p, h, _, P, A, T, $);
  }, ie = (p, h, v, w, _, P, A, T) => {
    let $, x;
    const { type: j, props: M, shapeFlag: U, transition: J, dirs: Z } = p;
    if ($ = p.el = i(p.type, P, M && M.is, M), U & 8 ? u($, p.children) : U & 16 && Q(p.children, $, null, w, _, P && j !== "foreignObject", A, T), Z && zt(p, null, w, "created"), M) {
      for (const pe in M)
        pe !== "value" && !$o(pe) && s($, pe, null, M[pe], P, p.children, w, _, E);
      "value" in M && s($, "value", null, M.value), (x = M.onVnodeBeforeMount) && dt(x, w, p);
    }
    K($, p, p.scopeId, A, w), process.env.NODE_ENV !== "production" && (Object.defineProperty($, "__vnode", {
      value: p,
      enumerable: !1
    }), Object.defineProperty($, "__vueParentComponent", {
      value: w,
      enumerable: !1
    })), Z && zt(p, null, w, "beforeMount");
    const ge = (!_ || _ && !_.pendingBranch) && J && !J.persisted;
    ge && J.beforeEnter($), o($, h, v), ((x = M && M.onVnodeMounted) || ge || Z) && qe(() => {
      x && dt(x, w, p), ge && J.enter($), Z && zt(p, null, w, "mounted");
    }, _);
  }, K = (p, h, v, w, _) => {
    if (v && m(p, v), w)
      for (let P = 0; P < w.length; P++)
        m(p, w[P]);
    if (_) {
      let P = _.subTree;
      if (process.env.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && (P = ha(P.children) || P), h === P) {
        const A = _.vnode;
        K(p, A, A.scopeId, A.slotScopeIds, _.parent);
      }
    }
  }, Q = (p, h, v, w, _, P, A, T, $ = 0) => {
    for (let x = $; x < p.length; x++) {
      const j = p[x] = T ? It(p[x]) : it(p[x]);
      y(null, j, h, v, w, _, P, A, T);
    }
  }, te = (p, h, v, w, _, P, A) => {
    const T = h.el = p.el;
    let { patchFlag: $, dynamicChildren: x, dirs: j } = h;
    $ |= p.patchFlag & 16;
    const M = p.props || he, U = h.props || he;
    let J;
    v && Jt(v, !1), (J = U.onVnodeBeforeUpdate) && dt(J, v, h, p), j && zt(h, p, v, "beforeUpdate"), v && Jt(v, !0), process.env.NODE_ENV !== "production" && Ut && ($ = 0, A = !1, x = null);
    const Z = _ && h.type !== "foreignObject";
    if (x ? (de(p.dynamicChildren, x, T, v, w, Z, P), process.env.NODE_ENV !== "production" && v && v.type.__hmrId && Jn(p, h)) : A || ye(p, h, T, null, v, w, Z, P, !1), $ > 0) {
      if ($ & 16)
        me(T, h, M, U, v, w, _);
      else if ($ & 2 && M.class !== U.class && s(T, "class", null, U.class, _), $ & 4 && s(T, "style", M.style, U.style, _), $ & 8) {
        const ge = h.dynamicProps;
        for (let pe = 0; pe < ge.length; pe++) {
          const De = ge[pe], st = M[De], vn = U[De];
          (vn !== st || De === "value") && s(T, De, st, vn, _, p.children, v, w, E);
        }
      }
      $ & 1 && p.children !== h.children && u(T, h.children);
    } else
      !A && x == null && me(T, h, M, U, v, w, _);
    ((J = U.onVnodeUpdated) || j) && qe(() => {
      J && dt(J, v, h, p), j && zt(h, p, v, "updated");
    }, w);
  }, de = (p, h, v, w, _, P, A) => {
    for (let T = 0; T < h.length; T++) {
      const $ = p[T], x = h[T], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && ($.type === Ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt($, x) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 70) ? f($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      y($, x, j, null, w, _, P, A, !0);
    }
  }, me = (p, h, v, w, _, P, A) => {
    if (v !== w) {
      if (v !== he)
        for (const T in v)
          !$o(T) && !(T in w) && s(p, T, v[T], null, A, h.children, _, P, E);
      for (const T in w) {
        if ($o(T))
          continue;
        const $ = w[T], x = v[T];
        $ !== x && T !== "value" && s(p, T, x, $, A, h.children, _, P, E);
      }
      "value" in w && s(p, "value", v.value, w.value);
    }
  }, ce = (p, h, v, w, _, P, A, T, $) => {
    const x = h.el = p ? p.el : l(""), j = h.anchor = p ? p.anchor : l("");
    let { patchFlag: M, dynamicChildren: U, slotScopeIds: J } = h;
    process.env.NODE_ENV !== "production" && (Ut || M & 2048) && (M = 0, $ = !1, U = null), J && (T = T ? T.concat(J) : J), p == null ? (o(x, v, w), o(j, v, w), Q(h.children, v, j, _, P, A, T, $)) : M > 0 && M & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (de(p.dynamicChildren, U, v, _, P, A, T), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? Jn(p, h) : (
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
    )) : ye(p, h, v, j, _, P, A, T, $);
  }, Ze = (p, h, v, w, _, P, A, T, $) => {
    h.slotScopeIds = T, p == null ? h.shapeFlag & 512 ? _.ctx.activate(h, v, w, A, $) : we(h, v, w, _, P, A, $) : ve(p, h, $);
  }, we = (p, h, v, w, _, P, A) => {
    const T = p.component = vd(p, w, _);
    if (process.env.NODE_ENV !== "production" && T.type.__hmrId && ef(T), process.env.NODE_ENV !== "production" && (Ao(p), Nt(T, "mount")), ho(p) && (T.ctx.renderer = L), process.env.NODE_ENV !== "production" && Nt(T, "init"), Ed(T), process.env.NODE_ENV !== "production" && Ot(T, "init"), T.asyncDep) {
      if (_ && _.registerDep(T, I), !p.el) {
        const $ = T.subTree = xe(Le);
        O(null, $, h, v);
      }
      return;
    }
    I(T, p, h, v, _, P, A), process.env.NODE_ENV !== "production" && (Ro(), Ot(T, "mount"));
  }, ve = (p, h, v) => {
    const w = h.component = p.component;
    if (vf(p, h, v))
      if (w.asyncDep && !w.asyncResolved) {
        process.env.NODE_ENV !== "production" && Ao(h), B(w, h, v), process.env.NODE_ENV !== "production" && Ro();
        return;
      } else
        w.next = h, Xu(w.update), w.update();
    else
      h.el = p.el, w.vnode = h;
  }, I = (p, h, v, w, _, P, A) => {
    const T = () => {
      if (p.isMounted) {
        let { next: j, bu: M, u: U, parent: J, vnode: Z } = p, ge = j, pe;
        process.env.NODE_ENV !== "production" && Ao(j || p.vnode), Jt(p, !1), j ? (j.el = Z.el, B(p, j, A)) : j = Z, M && En(M), (pe = j.props && j.props.onVnodeBeforeUpdate) && dt(pe, J, j, Z), Jt(p, !0), process.env.NODE_ENV !== "production" && Nt(p, "render");
        const De = Dr(p);
        process.env.NODE_ENV !== "production" && Ot(p, "render");
        const st = p.subTree;
        p.subTree = De, process.env.NODE_ENV !== "production" && Nt(p, "patch"), y(
          st,
          De,
          // parent may have changed if it's in a teleport
          f(st.el),
          // anchor may have changed if it's in a fragment
          R(st),
          p,
          _,
          P
        ), process.env.NODE_ENV !== "production" && Ot(p, "patch"), j.el = De.el, ge === null && yf(p, De.el), U && qe(U, _), (pe = j.props && j.props.onVnodeUpdated) && qe(() => dt(pe, J, j, Z), _), process.env.NODE_ENV !== "production" && ua(p), process.env.NODE_ENV !== "production" && Ro();
      } else {
        let j;
        const { el: M, props: U } = h, { bm: J, m: Z, parent: ge } = p, pe = zn(h);
        if (Jt(p, !1), J && En(J), !pe && (j = U && U.onVnodeBeforeMount) && dt(j, ge, h), Jt(p, !0), M && _e) {
          const De = () => {
            process.env.NODE_ENV !== "production" && Nt(p, "render"), p.subTree = Dr(p), process.env.NODE_ENV !== "production" && Ot(p, "render"), process.env.NODE_ENV !== "production" && Nt(p, "hydrate"), _e(M, p.subTree, p, _, null), process.env.NODE_ENV !== "production" && Ot(p, "hydrate");
          };
          pe ? h.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && De()
          ) : De();
        } else {
          process.env.NODE_ENV !== "production" && Nt(p, "render");
          const De = p.subTree = Dr(p);
          process.env.NODE_ENV !== "production" && Ot(p, "render"), process.env.NODE_ENV !== "production" && Nt(p, "patch"), y(null, De, v, w, p, _, P), process.env.NODE_ENV !== "production" && Ot(p, "patch"), h.el = De.el;
        }
        if (Z && qe(Z, _), !pe && (j = U && U.onVnodeMounted)) {
          const De = h;
          qe(() => dt(j, ge, De), _);
        }
        (h.shapeFlag & 256 || ge && zn(ge.vnode) && ge.vnode.shapeFlag & 256) && p.a && qe(p.a, _), p.isMounted = !0, process.env.NODE_ENV !== "production" && lf(p), h = v = w = null;
      }
    }, $ = p.effect = new Ms(
      T,
      () => cr(x),
      p.scope
      // track it in component's effect scope
    ), x = p.update = () => $.run();
    x.id = p.uid, Jt(p, !0), process.env.NODE_ENV !== "production" && ($.onTrack = p.rtc ? (j) => En(p.rtc, j) : void 0, $.onTrigger = p.rtg ? (j) => En(p.rtg, j) : void 0, x.ownerInstance = p), x();
  }, B = (p, h, v) => {
    h.component = p;
    const w = p.vnode.props;
    p.vnode = h, p.next = null, Wf(p, h.props, w, v), ed(p, h.children, v), hn(), Oi(), mn();
  }, ye = (p, h, v, w, _, P, A, T, $ = !1) => {
    const x = p && p.children, j = p ? p.shapeFlag : 0, M = h.children, { patchFlag: U, shapeFlag: J } = h;
    if (U > 0) {
      if (U & 128) {
        Je(x, M, v, w, _, P, A, T, $);
        return;
      } else if (U & 256) {
        Pe(x, M, v, w, _, P, A, T, $);
        return;
      }
    }
    J & 8 ? (j & 16 && E(x, _, P), M !== x && u(v, M)) : j & 16 ? J & 16 ? Je(x, M, v, w, _, P, A, T, $) : E(x, _, P, !0) : (j & 8 && u(v, ""), J & 16 && Q(M, v, w, _, P, A, T, $));
  }, Pe = (p, h, v, w, _, P, A, T, $) => {
    p = p || Nn, h = h || Nn;
    const x = p.length, j = h.length, M = Math.min(x, j);
    let U;
    for (U = 0; U < M; U++) {
      const J = h[U] = $ ? It(h[U]) : it(h[U]);
      y(p[U], J, v, null, _, P, A, T, $);
    }
    x > j ? E(p, _, P, !0, !1, M) : Q(h, v, w, _, P, A, T, $, M);
  }, Je = (p, h, v, w, _, P, A, T, $) => {
    let x = 0;
    const j = h.length;
    let M = p.length - 1, U = j - 1;
    for (; x <= M && x <= U; ) {
      const J = p[x], Z = h[x] = $ ? It(h[x]) : it(h[x]);
      if (Xt(J, Z))
        y(J, Z, v, null, _, P, A, T, $);
      else
        break;
      x++;
    }
    for (; x <= M && x <= U; ) {
      const J = p[M], Z = h[U] = $ ? It(h[U]) : it(h[U]);
      if (Xt(J, Z))
        y(J, Z, v, null, _, P, A, T, $);
      else
        break;
      M--, U--;
    }
    if (x > M) {
      if (x <= U) {
        const J = U + 1, Z = J < j ? h[J].el : w;
        for (; x <= U; )
          y(null, h[x] = $ ? It(h[x]) : it(h[x]), v, Z, _, P, A, T, $), x++;
      }
    } else if (x > U)
      for (; x <= M; )
        Ke(p[x], _, P, !0), x++;
    else {
      const J = x, Z = x, ge = /* @__PURE__ */ new Map();
      for (x = Z; x <= U; x++) {
        const Be = h[x] = $ ? It(h[x]) : it(h[x]);
        Be.key != null && (process.env.NODE_ENV !== "production" && ge.has(Be.key) && C("Duplicate keys found during update:", JSON.stringify(Be.key), "Make sure keys are unique."), ge.set(Be.key, x));
      }
      let pe, De = 0;
      const st = U - Z + 1;
      let vn = !1, di = 0;
      const kn = new Array(st);
      for (x = 0; x < st; x++)
        kn[x] = 0;
      for (x = J; x <= M; x++) {
        const Be = p[x];
        if (De >= st) {
          Ke(Be, _, P, !0);
          continue;
        }
        let ft;
        if (Be.key != null)
          ft = ge.get(Be.key);
        else
          for (pe = Z; pe <= U; pe++)
            if (kn[pe - Z] === 0 && Xt(Be, h[pe])) {
              ft = pe;
              break;
            }
        ft === void 0 ? Ke(Be, _, P, !0) : (kn[ft - Z] = x + 1, ft >= di ? di = ft : vn = !0, y(Be, h[ft], v, null, _, P, A, T, $), De++);
      }
      const pi = vn ? id(kn) : Nn;
      for (pe = pi.length - 1, x = st - 1; x >= 0; x--) {
        const Be = Z + x, ft = h[Be], hi = Be + 1 < j ? h[Be + 1].el : w;
        kn[x] === 0 ? y(null, ft, v, hi, _, P, A, T, $) : vn && (pe < 0 || x !== pi[pe] ? Ce(
          ft,
          v,
          hi,
          2
          /* MoveType.REORDER */
        ) : pe--);
      }
    }
  }, Ce = (p, h, v, w, _ = null) => {
    const { el: P, type: A, transition: T, children: $, shapeFlag: x } = p;
    if (x & 6) {
      Ce(p.component.subTree, h, v, w);
      return;
    }
    if (x & 128) {
      p.suspense.move(h, v, w);
      return;
    }
    if (x & 64) {
      A.move(p, h, v, L);
      return;
    }
    if (A === Ne) {
      o(P, h, v);
      for (let M = 0; M < $.length; M++)
        Ce($[M], h, v, w);
      o(p.anchor, h, v);
      return;
    }
    if (A === Vo) {
      F(p, h, v);
      return;
    }
    if (w !== 2 && x & 1 && T)
      if (w === 0)
        T.beforeEnter(P), o(P, h, v), qe(() => T.enter(P), _);
      else {
        const { leave: M, delayLeave: U, afterLeave: J } = T, Z = () => o(P, h, v), ge = () => {
          M(P, () => {
            Z(), J && J();
          });
        };
        U ? U(P, Z, ge) : ge();
      }
    else
      o(P, h, v);
  }, Ke = (p, h, v, w = !1, _ = !1) => {
    const { type: P, props: A, ref: T, children: $, dynamicChildren: x, shapeFlag: j, patchFlag: M, dirs: U } = p;
    if (T != null && as(T, null, v, p, !0), j & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const J = j & 1 && U, Z = !zn(p);
    let ge;
    if (Z && (ge = A && A.onVnodeBeforeUnmount) && dt(ge, h, p), j & 6)
      $t(p.component, v, w);
    else {
      if (j & 128) {
        p.suspense.unmount(v, w);
        return;
      }
      J && zt(p, null, h, "beforeUnmount"), j & 64 ? p.type.remove(p, h, v, _, L, w) : x && (P !== Ne || M > 0 && M & 64) ? E(x, h, v, !1, !0) : (P === Ne && M & 384 || !_ && j & 16) && E($, h, v), w && ut(p);
    }
    (Z && (ge = A && A.onVnodeUnmounted) || J) && qe(() => {
      ge && dt(ge, h, p), J && zt(p, null, h, "unmounted");
    }, v);
  }, ut = (p) => {
    const { type: h, el: v, anchor: w, transition: _ } = p;
    if (h === Ne) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && _ && !_.persisted ? p.children.forEach((A) => {
        A.type === Le ? r(A.el) : ut(A);
      }) : _o(v, w);
      return;
    }
    if (h === Vo) {
      z(p);
      return;
    }
    const P = () => {
      r(v), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (p.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: A, delayLeave: T } = _, $ = () => A(v, P);
      T ? T(p.el, P, $) : $();
    } else
      P();
  }, _o = (p, h) => {
    let v;
    for (; p !== h; )
      v = d(p), r(p), p = v;
    r(h);
  }, $t = (p, h, v) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && tf(p);
    const { bum: w, scope: _, update: P, subTree: A, um: T } = p;
    w && En(w), _.stop(), P && (P.active = !1, Ke(A, p, h, v)), T && qe(T, h), qe(() => {
      p.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), process.env.NODE_ENV !== "production" && cf(p);
  }, E = (p, h, v, w = !1, _ = !1, P = 0) => {
    for (let A = P; A < p.length; A++)
      Ke(p[A], h, v, w, _);
  }, R = (p) => p.shapeFlag & 6 ? R(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : d(p.anchor || p.el), V = (p, h, v) => {
    p == null ? h._vnode && Ke(h._vnode, null, null, !0) : y(h._vnode || null, p, h, null, null, null, v), Oi(), ia(), h._vnode = p;
  }, L = {
    p: y,
    um: Ke,
    m: Ce,
    r: ut,
    mt: we,
    mc: Q,
    pc: ye,
    pbc: de,
    n: R,
    o: e
  };
  let ne, _e;
  return t && ([ne, _e] = t(L)), {
    render: V,
    hydrate: ne,
    createApp: nd(V, ne)
  };
}
function Jt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Jn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (H(o) && H(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = It(r[s]), l.el = i.el), n || Jn(i, l)), l.type === mo && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === Le && !l.el && (l.el = i.el);
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
const ld = (e) => e.__isTeleport, xn = (e) => e && (e.disabled || e.disabled === ""), Fi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, cs = (e, t) => {
  const n = e && e.to;
  if (Ee(n))
    if (t) {
      const o = t(n);
      return o || process.env.NODE_ENV !== "production" && C(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), o;
    } else
      return process.env.NODE_ENV !== "production" && C("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !xn(e) && C(`Invalid Teleport target: ${n}`), n;
}, ad = {
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, l, a, c) {
    const { mc: u, pc: f, pbc: d, o: { insert: m, querySelector: g, createText: y, createComment: N } } = c, O = xn(t.props);
    let { shapeFlag: S, children: k, dynamicChildren: F } = t;
    if (process.env.NODE_ENV !== "production" && Ut && (a = !1, F = null), e == null) {
      const z = t.el = process.env.NODE_ENV !== "production" ? N("teleport start") : y(""), ee = t.anchor = process.env.NODE_ENV !== "production" ? N("teleport end") : y("");
      m(z, n, o), m(ee, n, o);
      const ie = t.target = cs(t.props, g), K = t.targetAnchor = y("");
      ie ? (m(K, ie), i = i || Fi(ie)) : process.env.NODE_ENV !== "production" && !O && C("Invalid Teleport target on mount:", ie, `(${typeof ie})`);
      const Q = (te, de) => {
        S & 16 && u(k, te, de, r, s, i, l, a);
      };
      O ? Q(n, ee) : ie && Q(ie, K);
    } else {
      t.el = e.el;
      const z = t.anchor = e.anchor, ee = t.target = e.target, ie = t.targetAnchor = e.targetAnchor, K = xn(e.props), Q = K ? n : ee, te = K ? z : ie;
      if (i = i || Fi(ee), F ? (d(e.dynamicChildren, F, Q, r, s, i, l), Jn(e, t, !0)) : a || f(e, t, Q, te, r, s, i, l, !1), O)
        K || Co(
          t,
          n,
          z,
          c,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const de = t.target = cs(t.props, g);
        de ? Co(
          t,
          de,
          null,
          c,
          0
          /* TeleportMoveTypes.TARGET_CHANGE */
        ) : process.env.NODE_ENV !== "production" && C("Invalid Teleport target on update:", ee, `(${typeof ee})`);
      } else
        K && Co(
          t,
          ee,
          ie,
          c,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
    }
    Va(t);
  },
  remove(e, t, n, o, { um: r, o: { remove: s } }, i) {
    const { shapeFlag: l, children: a, anchor: c, targetAnchor: u, target: f, props: d } = e;
    if (f && s(u), (i || !xn(d)) && (s(c), l & 16))
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        r(g, t, n, !0, !!g.dynamicChildren);
      }
  },
  move: Co,
  hydrate: cd
};
function Co(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: c, props: u } = e, f = s === 2;
  if (f && o(i, t, n), (!f || xn(u)) && a & 16)
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
  const u = t.target = cs(t.props, a);
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (xn(t.props))
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
const Ne = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), mo = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Le = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Vo = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Gn = [];
let lt = null;
function se(e = !1) {
  Gn.push(lt = e ? null : []);
}
function fd() {
  Gn.pop(), lt = Gn[Gn.length - 1] || null;
}
let so = 1;
function Li(e) {
  so += e;
}
function ka(e) {
  return e.dynamicChildren = so > 0 ? lt || Nn : null, fd(), so > 0 && lt && lt.push(e), e;
}
function Oe(e, t, n, o, r, s) {
  return ka(D(
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
function at(e, t, n, o, r) {
  return ka(xe(
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
function Xt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && _n.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const dd = (...e) => Fa(...e), dr = "__vInternal", Ia = ({ key: e }) => e ?? null, ko = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Ee(e) || Te(e) || W(e) ? { i: Re, r: e, k: t, f: !!n } : e : null;
function D(e, t = null, n = null, o = 0, r = null, s = e === Ne ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ia(t),
    ref: t && ko(t),
    scopeId: pa,
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
  return l ? (Zs(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && C("VNode created with invalid key (NaN). VNode type:", a.type), so > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  lt && (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && lt.push(a), a;
}
const xe = process.env.NODE_ENV !== "production" ? dd : Fa;
function Fa(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === wa) && (process.env.NODE_ENV !== "production" && !e && C(`Invalid vnode type when creating vnode: ${e}.`), e = Le), Cn(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Zs(l, n), so > 0 && !s && lt && (l.shapeFlag & 6 ? lt[lt.indexOf(e)] = l : lt.push(l)), l.patchFlag |= -2, l;
  }
  if (Ua(e) && (e = e.__vccOpts), t) {
    t = pd(t);
    let { class: l, style: a } = t;
    l && !Ee(l) && (t.class = $n(l)), ae(a) && (Qr(a) && !H(a) && (a = Se({}, a)), t.style = Vs(a));
  }
  const i = Ee(e) ? 1 : Ef(e) ? 128 : ld(e) ? 64 : ae(e) ? 4 : W(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Qr(e) && (e = G(e), C("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), D(e, t, n, o, r, i, s, !0);
}
function pd(e) {
  return e ? Qr(e) || dr in e ? Se({}, e) : e : null;
}
function ct(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? hd(o || {}, t) : o;
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
      n && r ? H(r) ? r.concat(ko(t)) : [r, ko(t)] : ko(t)
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
    patchFlag: t && e.type !== Ne ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function La(e) {
  const t = ct(e);
  return H(e.children) && (t.children = e.children.map(La)), t;
}
function Xs(e = " ", t = 0) {
  return xe(mo, null, e, t);
}
function Ar(e = "", t = !1) {
  return t ? (se(), at(Le, null, e)) : xe(Le, null, e);
}
function it(e) {
  return e == null || typeof e == "boolean" ? xe(Le) : H(e) ? xe(
    Ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? It(e) : xe(mo, null, String(e));
}
function It(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function Zs(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Zs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(dr in t) ? t._ctx = Re : r === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    W(t) ? (t = { default: t, _ctx: Re }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Xs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function hd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = $n([t.class, o.class]));
      else if (r === "style")
        t.style = Vs([t.style, o.style]);
      else if (uo(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(H(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function dt(e, t, n, o = null) {
  nt(e, t, 7, [
    n,
    o
  ]);
}
const md = Ra();
let gd = 0;
function vd(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || md, s = {
    uid: gd++,
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
    emitsOptions: da(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
const ei = () => Ae || Re, Dn = (e) => {
  Ae = e, e.scope.on();
}, un = () => {
  Ae && Ae.scope.off(), Ae = null;
}, yd = /* @__PURE__ */ Wt("slot,component");
function us(e, t) {
  const n = t.isNativeTag || Al;
  (yd(e) || n(e)) && C("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ma(e) {
  return e.vnode.shapeFlag & 4;
}
let io = !1;
function Ed(e, t = !1) {
  io = t;
  const { props: n, children: o } = e.vnode, r = Ma(e);
  Kf(e, n, r, t), Zf(e, o);
  const s = r ? _d(e, t) : void 0;
  return io = !1, s;
}
function _d(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && us(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        us(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        _a(s[i]);
    }
    o.compilerOptions && ja() && C('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Gl(new Proxy(e.ctx, xa)), process.env.NODE_ENV !== "production" && If(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? bd(e) : null;
    Dn(e), hn();
    const i = St(r, e, 0, [process.env.NODE_ENV !== "production" ? wn(e.props) : e.props, s]);
    if (mn(), un(), Is(i)) {
      if (i.then(un, un), t)
        return i.then((l) => {
          Mi(e, l, t);
        }).catch((l) => {
          ar(
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
      Mi(e, i, t);
  } else
    Ba(e, t);
}
function Mi(e, t, n) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) ? (process.env.NODE_ENV !== "production" && Cn(t) && C("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ea(t), process.env.NODE_ENV !== "production" && Ff(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && C(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ba(e, n);
}
let fs;
const ja = () => !fs;
function Ba(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && fs && !o.render) {
      const r = o.template || Ys(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Nt(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = o, c = Se(Se({
          isCustomElement: s,
          delimiters: l
        }, i), a);
        o.render = fs(r, c), process.env.NODE_ENV !== "production" && Ot(e, "compile");
      }
    }
    e.render = o.render || Me;
  }
  Dn(e), hn(), Mf(e), mn(), un(), process.env.NODE_ENV !== "production" && !o.render && e.render === Me && !t && (o.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : C("Component is missing template or render function."));
}
function ji(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return qo(), ze(e, "get", "$attrs"), t[n];
    },
    set() {
      return C("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return C("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ze(e, "get", "$attrs"), t[n];
    }
  });
}
function bd(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && C("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = ji(e));
    },
    get slots() {
      return wn(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = ji(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function pr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ea(Gl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in cn)
          return cn[n](e);
      },
      has(t, n) {
        return n in t || n in cn;
      }
    }));
}
const wd = /(?:^|[-_])(\w)/g, Nd = (e) => e.replace(wd, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ti(e, t = !0) {
  return W(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hr(e, t, n = !1) {
  let o = ti(t);
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
  return o ? Nd(o) : n ? "App" : "Anonymous";
}
function Ua(e) {
  return W(e) && "__vccOpts" in e;
}
const q = (e, t) => Ku(e, t, io);
function $e(e, t, n) {
  const o = arguments.length;
  return o === 2 ? ae(t) && !H(t) ? Cn(t) ? xe(e, null, [t]) : xe(e, t) : xe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Cn(n) && (n = [n]), xe(e, t, n));
}
const Od = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), xd = () => {
  {
    const e = be(Od);
    return e || process.env.NODE_ENV !== "production" && C("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Rr(e) {
  return !!(e && e.__v_isShallow);
}
function Sd() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(f) {
      return ae(f) ? f.__isVue ? ["div", e, "VueInstance"] : Te(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        l(f.value),
        ">"
      ] : ln(f) ? [
        "div",
        {},
        ["span", e, Rr(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${Kt(f) ? " (readonly)" : ""}`
      ] : Kt(f) ? [
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
    f.type.props && f.props && d.push(i("props", G(f.props))), f.setupState !== he && d.push(i("setup", f.setupState)), f.data !== he && d.push(i("data", G(f.data)));
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
    return d = Se({}, d), Object.keys(d).length ? [
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
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : ae(f) ? ["object", { object: d ? G(f) : f }] : ["span", n, String(f)];
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
    if (H(g) && g.includes(d) || ae(g) && d in g || f.extends && c(f.extends, d, m) || f.mixins && f.mixins.some((y) => c(y, d, m)))
      return !0;
  }
  function u(f) {
    return Rr(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Bi = "3.2.45", Cd = "http://www.w3.org/2000/svg", Zt = typeof document < "u" ? document : null, Ui = Zt && /* @__PURE__ */ Zt.createElement("template"), Dd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Zt.createElementNS(Cd, e) : Zt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Zt.createTextNode(e),
  createComment: (e) => Zt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Zt.querySelector(e),
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
      Ui.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = Ui.content;
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
function Td(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Pd(e, t, n) {
  const o = e.style, r = Ee(n);
  if (n && !r) {
    for (const s in n)
      ds(o, s, n[s]);
    if (t && !Ee(t))
      for (const s in t)
        n[s] == null && ds(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const $d = /[^\\];\s*$/, Hi = /\s*!important$/;
function ds(e, t, n) {
  if (H(n))
    n.forEach((o) => ds(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && $d.test(n) && C(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Ad(e, t);
    Hi.test(n) ? e.setProperty(Dt(o), n.replace(Hi, ""), "important") : e[o] = n;
  }
}
const Ki = ["Webkit", "Moz", "ms"], Vr = {};
function Ad(e, t) {
  const n = Vr[t];
  if (n)
    return n;
  let o = Et(t);
  if (o !== "filter" && o in e)
    return Vr[t] = o;
  o = dn(o);
  for (let r = 0; r < Ki.length; r++) {
    const s = Ki[r] + o;
    if (s in e)
      return Vr[t] = s;
  }
  return t;
}
const qi = "http://www.w3.org/1999/xlink";
function Rd(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(qi, t.slice(6, t.length)) : e.setAttributeNS(qi, t, n);
  else {
    const s = ru(t);
    n == null || s && !Pl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Vd(e, t, n, o, r, s, i) {
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
    a === "boolean" ? n = Pl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !l && C(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && e.removeAttribute(t);
}
function en(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function kd(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Id(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, a] = Fd(t);
    if (o) {
      const c = s[t] = jd(o, r);
      en(e, l, c, a);
    } else
      i && (kd(e, l, i, a), s[t] = void 0);
  }
}
const Wi = /(?:Once|Passive|Capture)$/;
function Fd(e) {
  let t;
  if (Wi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Wi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Dt(e.slice(2)), t];
}
let kr = 0;
const Ld = /* @__PURE__ */ Promise.resolve(), Md = () => kr || (Ld.then(() => kr = 0), kr = Date.now());
function jd(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    nt(Bd(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Md(), n;
}
function Bd(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const zi = /^on[a-z]/, Ud = (e, t, n, o, r = !1, s, i, l, a) => {
  t === "class" ? Td(e, o, r) : t === "style" ? Pd(e, n, o) : uo(t) ? Bo(t) || Id(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hd(e, t, o, r)) ? Vd(e, t, o, s, i, l, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Rd(e, t, o, r));
};
function Hd(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && zi.test(t) && W(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || zi.test(t) && Ee(n) ? !1 : t in e;
}
const Kd = {
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
const Yo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => En(t, n) : t;
};
function qd(e) {
  e.target.composing = !0;
}
function Ji(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ha = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e._assign = Yo(r);
    const s = o || r.props && r.props.type === "number";
    en(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), s && (l = eo(l)), e._assign(l);
    }), n && en(e, "change", () => {
      e.value = e.value.trim();
    }), t || (en(e, "compositionstart", qd), en(e, "compositionend", Ji), en(e, "change", Ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, s) {
    if (e._assign = Yo(s), e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (r || e.type === "number") && eo(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
}, Wd = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = nr(t);
    en(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map((i) => n ? eo(Qo(i)) : Qo(i));
      e._assign(e.multiple ? r ? new Set(s) : s : s[0]);
    }), e._assign = Yo(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Gi(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Yo(n);
  },
  updated(e, { value: t }) {
    Gi(e, t);
  }
};
function Gi(e, t) {
  const n = e.multiple;
  if (n && !H(t) && !nr(t)) {
    process.env.NODE_ENV !== "production" && C(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const s = e.options[o], i = Qo(s);
    if (n)
      H(t) ? s.selected = iu(t, i) > -1 : s.selected = t.has(i);
    else if (tr(Qo(s), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Qo(e) {
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
}, Yi = (e, t) => (n, ...o) => {
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
  const o = Dt(n.key);
  if (t.some((r) => r === o || Gd[r] === o))
    return e(n);
}, Qd = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Fn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Fn(e, !0), o.enter(e)) : o.leave(e, () => {
      Fn(e, !1);
    }) : Fn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Fn(e, t);
  }
};
function Fn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Xd = /* @__PURE__ */ Se({ patchProp: Ud }, Dd);
let Qi;
function Zd() {
  return Qi || (Qi = rd(Xd));
}
const ep = (...e) => {
  const t = Zd().createApp(...e);
  process.env.NODE_ENV !== "production" && (tp(t), np(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = op(o);
    if (!r)
      return;
    const s = t._component;
    !W(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function tp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => tu(t) || nu(t),
    writable: !1
  });
}
function np(e) {
  if (ja()) {
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
function op(e) {
  if (Ee(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && C(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && C('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function rp() {
  Sd();
}
process.env.NODE_ENV !== "production" && rp();
const sp = /* @__PURE__ */ D("button", { class: "bg-red-600 top-0 left-0 p-1 rounded-md text-white text-xs absolute hidden group-hover:absolute group-hover:block" }, [
  /* @__PURE__ */ D("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, [
    /* @__PURE__ */ D("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ])
], -1), Xi = /* @__PURE__ */ ue({
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
          r = "text-base";
      }
      let s;
      switch (n.value.weight) {
        case "light":
          s = "font-light";
          break;
        case "black":
          s = "font-black";
          break;
        case "normal":
          s = "font-base";
          break;
        case "bold":
          s = "font-bold";
          break;
        default:
          s = "font-base";
      }
      let i = n.value["text-alignment"] ?? "";
      return [
        r,
        s,
        i
      ].join(" ");
    });
    return (r, s) => (se(), at(Js(fe(n).type), {
      class: $n([fe(o), "relative group"]),
      key: fe(n).id
    }, {
      default: tt(() => [
        Xs(Fe(fe(n).content) + " ", 1),
        sp
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), ip = { class: "w-full group relative" }, lp = ["src", "alt"], ap = /* @__PURE__ */ D("button", { class: "bg-red-600 top-0 left-0 p-1 rounded-md text-white text-xs absolute hidden group-hover:absolute group-hover:block" }, [
  /* @__PURE__ */ D("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, [
    /* @__PURE__ */ D("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ])
], -1), cp = /* @__PURE__ */ ue({
  __name: "ImageElement",
  props: {
    element: null
  },
  setup(e) {
    const t = e;
    return (n, o) => (se(), Oe("div", ip, [
      D("img", {
        src: t.element.src,
        alt: t.element.alt,
        class: "w-full"
      }, null, 8, lp),
      ap
    ]));
  }
});
var ps = /* @__PURE__ */ ((e) => (e.Text = "Text", e.Image = "Image", e))(ps || {});
const up = /* @__PURE__ */ ue({
  __name: "ElementLoader",
  props: {
    element: null,
    items: null
  },
  setup(e) {
    const t = e, n = q(() => {
      let o;
      switch (t.element.renderer) {
        case ps.Text:
          o = Xi;
          break;
        case ps.Image:
          o = cp;
          break;
        default:
          o = Xi;
      }
      return o;
    });
    return (o, r) => (se(), at(Js(fe(n)), {
      items: t.items,
      element: t.element
    }, null, 8, ["items", "element"]));
  }
}), fp = /* @__PURE__ */ ue({
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
    return (o, r) => (se(), Oe("div", {
      key: t.container.id,
      class: $n(fe(n))
    }, [
      (se(!0), Oe(Ne, null, Sn(t.container.elements, (s) => (se(), at(up, {
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
const { toString: dp } = Object.prototype, { getPrototypeOf: ni } = Object, mr = ((e) => (t) => {
  const n = dp.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), bt = (e) => (e = e.toLowerCase(), (t) => mr(t) === e), gr = (e) => (t) => typeof t === e, { isArray: Rn } = Array, lo = gr("undefined");
function pp(e) {
  return e !== null && !lo(e) && e.constructor !== null && !lo(e.constructor) && ot(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qa = bt("ArrayBuffer");
function hp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qa(e.buffer), t;
}
const mp = gr("string"), ot = gr("function"), Wa = gr("number"), vr = (e) => e !== null && typeof e == "object", gp = (e) => e === !0 || e === !1, Io = (e) => {
  if (mr(e) !== "object")
    return !1;
  const t = ni(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, vp = bt("Date"), yp = bt("File"), Ep = bt("Blob"), _p = bt("FileList"), bp = (e) => vr(e) && ot(e.pipe), wp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ot(e.append) && ((t = mr(e)) === "formdata" || t === "object" && ot(e.toString) && e.toString() === "[object FormData]"));
}, Np = bt("URLSearchParams"), Op = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function go(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, r;
  if (typeof e != "object" && (e = [e]), Rn(e))
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
const Ja = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ga = (e) => !lo(e) && e !== Ja;
function hs() {
  const { caseless: e } = Ga(this) && this || {}, t = {}, n = (o, r) => {
    const s = e && za(t, r) || r;
    Io(t[s]) && Io(o) ? t[s] = hs(t[s], o) : Io(o) ? t[s] = hs({}, o) : Rn(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, r = arguments.length; o < r; o++)
    arguments[o] && go(arguments[o], n);
  return t;
}
const xp = (e, t, n, { allOwnKeys: o } = {}) => (go(t, (r, s) => {
  n && ot(r) ? e[s] = Ka(r, n) : e[s] = r;
}, { allOwnKeys: o }), e), Sp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Cp = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Dp = (e, t, n, o) => {
  let r, s, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], (!o || o(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && ni(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Tp = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, Pp = (e) => {
  if (!e)
    return null;
  if (Rn(e))
    return e;
  let t = e.length;
  if (!Wa(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, $p = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ni(Uint8Array)), Ap = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, Rp = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, Vp = bt("HTMLFormElement"), kp = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, r) {
    return o.toUpperCase() + r;
  }
), Zi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ip = bt("RegExp"), Ya = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  go(n, (r, s) => {
    t(r, s, e) !== !1 && (o[s] = r);
  }), Object.defineProperties(e, o);
}, Fp = (e) => {
  Ya(e, (t, n) => {
    if (ot(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = e[n];
    if (ot(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Lp = (e, t) => {
  const n = {}, o = (r) => {
    r.forEach((s) => {
      n[s] = !0;
    });
  };
  return Rn(e) ? o(e) : o(String(e).split(t)), n;
}, Mp = () => {
}, jp = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ir = "abcdefghijklmnopqrstuvwxyz", el = "0123456789", Qa = {
  DIGIT: el,
  ALPHA: Ir,
  ALPHA_DIGIT: Ir + Ir.toUpperCase() + el
}, Bp = (e = 16, t = Qa.ALPHA_DIGIT) => {
  let n = "";
  const { length: o } = t;
  for (; e--; )
    n += t[Math.random() * o | 0];
  return n;
};
function Up(e) {
  return !!(e && ot(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Hp = (e) => {
  const t = new Array(10), n = (o, r) => {
    if (vr(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[r] = o;
        const s = Rn(o) ? [] : {};
        return go(o, (i, l) => {
          const a = n(i, r + 1);
          !lo(a) && (s[l] = a);
        }), t[r] = void 0, s;
      }
    }
    return o;
  };
  return n(e, 0);
}, Kp = bt("AsyncFunction"), qp = (e) => e && (vr(e) || ot(e)) && ot(e.then) && ot(e.catch), b = {
  isArray: Rn,
  isArrayBuffer: qa,
  isBuffer: pp,
  isFormData: wp,
  isArrayBufferView: hp,
  isString: mp,
  isNumber: Wa,
  isBoolean: gp,
  isObject: vr,
  isPlainObject: Io,
  isUndefined: lo,
  isDate: vp,
  isFile: yp,
  isBlob: Ep,
  isRegExp: Ip,
  isFunction: ot,
  isStream: bp,
  isURLSearchParams: Np,
  isTypedArray: $p,
  isFileList: _p,
  forEach: go,
  merge: hs,
  extend: xp,
  trim: Op,
  stripBOM: Sp,
  inherits: Cp,
  toFlatObject: Dp,
  kindOf: mr,
  kindOfTest: bt,
  endsWith: Tp,
  toArray: Pp,
  forEachEntry: Ap,
  matchAll: Rp,
  isHTMLForm: Vp,
  hasOwnProperty: Zi,
  hasOwnProp: Zi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ya,
  freezeMethods: Fp,
  toObjectSet: Lp,
  toCamelCase: kp,
  noop: Mp,
  toFiniteNumber: jp,
  findKey: za,
  global: Ja,
  isContextDefined: Ga,
  ALPHABET: Qa,
  generateString: Bp,
  isSpecCompliantForm: Up,
  toJSONObject: Hp,
  isAsyncFn: Kp,
  isThenable: qp
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
const Wp = null;
function ms(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function ec(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function tl(e, t, n) {
  return e ? e.concat(t).map(function(r, s) {
    return r = ec(r), !n && s ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function zp(e) {
  return b.isArray(e) && !e.some(ms);
}
const Jp = b.toFlatObject(b, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function yr(e, t, n) {
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
      else if (b.isArray(g) && zp(g) || (b.isFileList(g) || b.endsWith(y, "[]")) && (O = b.toArray(g)))
        return y = ec(y), O.forEach(function(k, F) {
          !(b.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? tl([y], F, s) : i === null ? y : y + "[]",
            c(k)
          );
        }), !1;
    }
    return ms(g) ? !0 : (t.append(tl(N, y, s), c(g)), !1);
  }
  const f = [], d = Object.assign(Jp, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ms
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
function nl(e) {
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
function oi(e, t) {
  this._pairs = [], e && yr(e, this, t);
}
const tc = oi.prototype;
tc.append = function(t, n) {
  this._pairs.push([t, n]);
};
tc.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, nl);
  } : nl;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function Gp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nc(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || Gp, r = n && n.serialize;
  let s;
  if (r ? s = r(t, n) : s = b.isURLSearchParams(t) ? t.toString() : new oi(t, n).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Yp {
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
const ol = Yp, oc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Qp = typeof URLSearchParams < "u" ? URLSearchParams : oi, Xp = typeof FormData < "u" ? FormData : null, Zp = typeof Blob < "u" ? Blob : null, eh = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), th = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), vt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Qp,
    FormData: Xp,
    Blob: Zp
  },
  isStandardBrowserEnv: eh,
  isStandardBrowserWebWorkerEnv: th,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function nh(e, t) {
  return yr(e, new vt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, r, s) {
      return vt.isNode && b.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function oh(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function rh(e) {
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
    return i = !i && b.isArray(r) ? r.length : i, a ? (b.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !l) : ((!r[i] || !b.isObject(r[i])) && (r[i] = []), t(n, o, r[i], s) && b.isArray(r[i]) && (r[i] = rh(r[i])), !l);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const n = {};
    return b.forEachEntry(e, (o, r) => {
      t(oh(o), r, n, 0);
    }), n;
  }
  return null;
}
const sh = {
  "Content-Type": void 0
};
function ih(e, t, n) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const Er = {
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
        return nh(t, this.formSerializer).toString();
      if ((l = b.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return yr(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || r ? (n.setContentType("application/json", !1), ih(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Er.transitional, o = n && n.forcedJSONParsing, r = this.responseType === "json";
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
    FormData: vt.classes.FormData,
    Blob: vt.classes.Blob
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
  Er.headers[t] = {};
});
b.forEach(["post", "put", "patch"], function(t) {
  Er.headers[t] = b.merge(sh);
});
const ri = Er, lh = b.toObjectSet([
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
]), ah = (e) => {
  const t = {};
  let n, o, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), o = i.substring(r + 1).trim(), !(!n || t[n] && lh[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, rl = Symbol("internals");
function Ln(e) {
  return e && String(e).trim().toLowerCase();
}
function Fo(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(Fo) : String(e);
}
function ch(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const uh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fr(e, t, n, o, r) {
  if (b.isFunction(o))
    return o.call(this, t, n);
  if (r && (t = n), !!b.isString(t)) {
    if (b.isString(o))
      return t.indexOf(o) !== -1;
    if (b.isRegExp(o))
      return o.test(t);
  }
}
function fh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function dh(e, t) {
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
      const f = b.findKey(r, u);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = Fo(l));
    }
    const i = (l, a) => b.forEach(l, (c, u) => s(c, u, a));
    return b.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : b.isString(t) && (t = t.trim()) && !uh(t) ? i(ah(t), n) : t != null && s(n, t, o), this;
  }
  get(t, n) {
    if (t = Ln(t), t) {
      const o = b.findKey(this, t);
      if (o) {
        const r = this[o];
        if (!n)
          return r;
        if (n === !0)
          return ch(r);
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
      return !!(o && this[o] !== void 0 && (!n || Fr(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let r = !1;
    function s(i) {
      if (i = Ln(i), i) {
        const l = b.findKey(o, i);
        l && (!n || Fr(o, o[l], l, n)) && (delete o[l], r = !0);
      }
    }
    return b.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, r = !1;
    for (; o--; ) {
      const s = n[o];
      (!t || Fr(this, this[s], s, t, !0)) && (delete this[s], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, o = {};
    return b.forEach(this, (r, s) => {
      const i = b.findKey(o, s);
      if (i) {
        n[i] = Fo(r), delete n[s];
        return;
      }
      const l = t ? fh(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Fo(r), o[l] = !0;
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
    const o = (this[rl] = this[rl] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const l = Ln(i);
      o[l] || (dh(r, i), o[l] = !0);
    }
    return b.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
_r.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.freezeMethods(_r.prototype);
b.freezeMethods(_r);
const Ct = _r;
function Lr(e, t) {
  const n = this || ri, o = t || n, r = Ct.from(o.headers);
  let s = o.data;
  return b.forEach(e, function(l) {
    s = l.call(n, s, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), s;
}
function sc(e) {
  return !!(e && e.__CANCEL__);
}
function vo(e, t, n) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, n), this.name = "CanceledError";
}
b.inherits(vo, re, {
  __CANCEL__: !0
});
function ph(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new re(
    "Request failed with status code " + n.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const hh = vt.isStandardBrowserEnv ? function() {
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
function mh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function gh(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ic(e, t) {
  return e && !mh(t) ? gh(e, t) : t;
}
const vh = vt.isStandardBrowserEnv ? function() {
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
function yh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Eh(e, t) {
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
function sl(e, t) {
  let n = 0;
  const o = Eh(50, 250);
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
const _h = typeof XMLHttpRequest < "u", bh = _h && function(e) {
  return new Promise(function(n, o) {
    let r = e.data;
    const s = Ct.from(e.headers).normalize(), i = e.responseType;
    let l;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    b.isFormData(r) && (vt.isStandardBrowserEnv || vt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
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
      const m = Ct.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: m,
        config: e,
        request: c
      };
      ph(function(O) {
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
    }, vt.isStandardBrowserEnv) {
      const m = (e.withCredentials || vh(u)) && e.xsrfCookieName && hh.read(e.xsrfCookieName);
      m && s.set(e.xsrfHeaderName, m);
    }
    r === void 0 && s.setContentType(null), "setRequestHeader" in c && b.forEach(s.toJSON(), function(g, y) {
      c.setRequestHeader(y, g);
    }), b.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", sl(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", sl(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (m) => {
      c && (o(!m || m.type ? new vo(null, e, c) : m), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const d = yh(u);
    if (d && vt.protocols.indexOf(d) === -1) {
      o(new re("Unsupported protocol " + d + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(r || null);
  });
}, Lo = {
  http: Wp,
  xhr: bh
};
b.forEach(Lo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const wh = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    for (let r = 0; r < t && (n = e[r], !(o = b.isString(n) ? Lo[n.toLowerCase()] : n)); r++)
      ;
    if (!o)
      throw o === !1 ? new re(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        b.hasOwnProp(Lo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!b.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Lo
};
function Mr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new vo(null, e);
}
function il(e) {
  return Mr(e), e.headers = Ct.from(e.headers), e.data = Lr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), wh.getAdapter(e.adapter || ri.adapter)(e).then(function(o) {
    return Mr(e), o.data = Lr.call(
      e,
      e.transformResponse,
      o
    ), o.headers = Ct.from(o.headers), o;
  }, function(o) {
    return sc(o) || (Mr(e), o && o.response && (o.response.data = Lr.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = Ct.from(o.response.headers))), Promise.reject(o);
  });
}
const ll = (e) => e instanceof Ct ? e.toJSON() : e;
function Tn(e, t) {
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
    headers: (c, u) => r(ll(c), ll(u), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = a[u] || r, d = f(e[u], t[u], u);
    b.isUndefined(d) && f !== l || (n[u] = d);
  }), n;
}
const lc = "1.4.0", si = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  si[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const al = {};
si.transitional = function(t, n, o) {
  function r(s, i) {
    return "[Axios v" + lc + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new re(
        r(i, " has been removed" + (n ? " in " + n : "")),
        re.ERR_DEPRECATED
      );
    return n && !al[i] && (al[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function Nh(e, t, n) {
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
const gs = {
  assertOptions: Nh,
  validators: si
}, Rt = gs.validators;
class Xo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ol(),
      response: new ol()
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
    o !== void 0 && gs.assertOptions(o, {
      silentJSONParsing: Rt.transitional(Rt.boolean),
      forcedJSONParsing: Rt.transitional(Rt.boolean),
      clarifyTimeoutError: Rt.transitional(Rt.boolean)
    }, !1), r != null && (b.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : gs.assertOptions(r, {
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
    ), n.headers = Ct.concat(i, s);
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
      const g = [il.bind(this), void 0];
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
      u = il.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = c.length; f < d; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = Tn(this.defaults, t);
    const n = ic(t.baseURL, t.url);
    return nc(n, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(t) {
  Xo.prototype[t] = function(n, o) {
    return this.request(Tn(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(t) {
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
class ii {
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
      o.reason || (o.reason = new vo(s, i, l), n(o.reason));
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
      token: new ii(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
const Oh = ii;
function xh(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Sh(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const vs = {
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
Object.entries(vs).forEach(([e, t]) => {
  vs[t] = e;
});
const Ch = vs;
function ac(e) {
  const t = new Mo(e), n = Ka(Mo.prototype.request, t);
  return b.extend(n, Mo.prototype, t, { allOwnKeys: !0 }), b.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return ac(Tn(e, r));
  }, n;
}
const Ie = ac(ri);
Ie.Axios = Mo;
Ie.CanceledError = vo;
Ie.CancelToken = Oh;
Ie.isCancel = sc;
Ie.VERSION = lc;
Ie.toFormData = yr;
Ie.AxiosError = re;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(t) {
  return Promise.all(t);
};
Ie.spread = xh;
Ie.isAxiosError = Sh;
Ie.mergeConfig = Tn;
Ie.AxiosHeaders = Ct;
Ie.formToJSON = (e) => rc(b.isHTMLForm(e) ? new FormData(e) : e);
Ie.HttpStatusCode = Ch;
Ie.default = Ie;
const ys = Ie;
class br {
  constructor() {
    Sr(this, "client");
    let t = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.client = ys.create(t), this.client.interceptors.response.use(
      (n) => n,
      async (n) => (n.response.status === 401 && (window.location.href = "/login"), window.location.href = `/page-builder/error/${n.response.status}`, Promise.reject(n))
    );
  }
  async loadElements() {
    return (await this.client.get("/page-builder/elements")).data;
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
      content: o
    });
  }
  async storeFile(t, n, o) {
    return (await this.client.post("/page-builder/files", { uuid: t, key: n, bucket: o })).data.file;
  }
}
const Dh = { class: "flex flex-col gap-1" }, Th = { class: "text-sm font-bold" }, Ph = ["value"], $h = ["value"], Ah = /* @__PURE__ */ ue({
  __name: "SelectOption",
  props: {
    modelValue: null,
    options: null,
    title: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (se(), Oe("div", Dh, [
      D("label", Th, Fe(t.title), 1),
      D("select", {
        value: t.modelValue,
        onInput: o[0] || (o[0] = (r) => n.$emit("update:modelValue", r.target.value)),
        class: "text-sm border border-gray-300 rounded p-1 w-full"
      }, [
        (se(!0), Oe(Ne, null, Sn(t.options.options, (r, s) => (se(), Oe("option", {
          value: r.value,
          key: s
        }, Fe(r.label), 9, $h))), 128))
      ], 40, Ph)
    ]));
  }
});
class Rh {
  constructor() {
    Sr(this, "client");
    let t = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.client = ys.create(t);
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
    }), await ys.put(o.data.url, t, {
      headers: r,
      onUploadProgress: (s) => {
      }
    }), o.data.extension = t.name.split(".").pop(), o.data;
  }
}
const Vh = new Rh(), kh = { class: "flex flex-col gap-1" }, Ih = { class: "text-sm font-bold" }, Fh = ["value"], Lh = ["value"], Mh = /* @__PURE__ */ ue({
  __name: "UploadOption",
  props: {
    modelValue: null,
    title: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = new br(), r = Y(null), s = Y(0), i = () => {
      r.value && "click" in r.value && r.value.click();
    }, l = async (a) => {
      const c = await Vh.store(a.target.files[0], {
        progress: (f) => {
          s.value = Math.round(f * 100);
        }
      }), u = await o.storeFile(c.uuid, c.key, c.bucket);
      t("update:modelValue", u);
    };
    return (a, c) => (se(), Oe("div", kh, [
      D("label", Ih, Fe(n.title), 1),
      D("input", {
        type: "text",
        value: e.modelValue,
        class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
      }, null, 8, Fh),
      D("input", {
        onChange: l,
        ref_key: "fileSelection",
        ref: r,
        type: "file",
        class: "hidden"
      }, null, 544),
      D("button", {
        onClick: c[0] || (c[0] = (u) => i()),
        class: "border bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 col-span-4"
      }, " Upload File "),
      Wo(D("progress", {
        value: s.value,
        max: "100"
      }, Fe(s.value) + "% ", 9, Lh), [
        [Qd, s.value > 0]
      ])
    ]));
  }
}), jh = { class: "flex flex-col gap-1" }, Bh = { class: "text-sm font-bold" }, Uh = ["value"], Hh = /* @__PURE__ */ ue({
  __name: "TextOption",
  props: {
    modelValue: null,
    options: null,
    title: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (se(), Oe("div", jh, [
      D("label", Bh, Fe(t.title), 1),
      D("input", {
        type: "text",
        value: t.modelValue,
        onInput: o[0] || (o[0] = (r) => n.$emit("update:modelValue", r.target.value)),
        class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
      }, null, 40, Uh)
    ]));
  }
}), Kh = { class: "flex flex-col gap-1" }, qh = { class: "text-sm font-bold" }, Wh = ["value"], zh = /* @__PURE__ */ ue({
  __name: "ContentOption",
  props: {
    modelValue: null,
    options: null,
    title: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (se(), Oe("div", Kh, [
      D("label", qh, Fe(t.title), 1),
      D("textarea", {
        value: t.modelValue,
        onInput: o[0] || (o[0] = (r) => n.$emit("update:modelValue", r.target.value)),
        class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
      }, null, 40, Wh)
    ]));
  }
}), Jh = /* @__PURE__ */ D("summary", { class: "font-bold p-4 border-b cursor-pointer" }, " Element Configuration ", -1), Gh = { class: "flex flex-col gap-3 p-3" }, Yh = /* @__PURE__ */ ue({
  __name: "ElementConfiguration",
  props: {
    modelValue: null,
    elements: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    new br();
    const n = q(() => t.elements.find((s) => s.id === t.modelValue.id)), o = {
      select: Ah,
      upload: Mh,
      text: Hh,
      content: zh
    }, r = (s) => o[s];
    return (s, i) => (se(), Oe("details", null, [
      Jh,
      D("div", Gh, [
        (se(!0), Oe(Ne, null, Sn(fe(n).options, (l, a) => (se(), at(Js(r(l.type)), {
          key: a,
          title: l.title,
          options: l,
          modelValue: t.modelValue[a],
          "onUpdate:modelValue": (c) => t.modelValue[a] = c
        }, null, 8, ["title", "options", "modelValue", "onUpdate:modelValue"]))), 128))
      ])
    ]));
  }
}), Qh = /* @__PURE__ */ D("summary", { class: "font-bold p-4 border-b cursor-pointer" }, " Container Configuration ", -1), Xh = { class: "flex flex-col gap-3 p-3 bg-white" }, Zh = { class: "flex flex-col gap-1" }, em = /* @__PURE__ */ D("label", null, "Span", -1), tm = { class: "flex flex-col gap-1" }, nm = /* @__PURE__ */ D("label", null, "Text Align", -1), om = /* @__PURE__ */ D("option", { value: "text-left" }, "Left", -1), rm = /* @__PURE__ */ D("option", { value: "text-center" }, "Center", -1), sm = /* @__PURE__ */ D("option", { value: "text-right" }, "Right", -1), im = /* @__PURE__ */ D("option", { value: "text-justify" }, "Justify", -1), lm = [
  om,
  rm,
  sm,
  im
], am = /* @__PURE__ */ D("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Container ", -1), cm = /* @__PURE__ */ ue({
  __name: "ContainerConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (se(), Oe("details", null, [
      Qh,
      D("div", Xh, [
        D("div", Zh, [
          em,
          Wo(D("input", {
            "onUpdate:modelValue": o[0] || (o[0] = (r) => t.modelValue.colSpan = r),
            type: "number",
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
            max: "4",
            min: "1"
          }, null, 512), [
            [Ha, t.modelValue.colSpan]
          ])
        ]),
        D("div", tm, [
          nm,
          Wo(D("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (r) => t.modelValue.textAlign = r),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, lm, 512), [
            [Wd, t.modelValue.textAlign]
          ])
        ]),
        am
      ])
    ]));
  }
});
function um() {
  return cc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function cc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const fm = typeof Proxy == "function", dm = "devtools-plugin:setup", pm = "plugin:settings:set";
let yn, Es;
function hm() {
  var e;
  return yn !== void 0 || (typeof window < "u" && window.performance ? (yn = !0, Es = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (yn = !0, Es = global.perf_hooks.performance) : yn = !1), yn;
}
function mm() {
  return hm() ? Es.now() : Date.now();
}
class gm {
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
        return mm();
      }
    }, n && n.on(pm, (i, l) => {
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
function vm(e, t) {
  const n = e, o = cc(), r = um(), s = fm && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(dm, e, t);
  else {
    const i = s ? new gm(n, r) : null;
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
const xt = typeof window < "u";
function ym(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const le = Object.assign;
function jr(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Qe(r) ? r.map(e) : e(r);
  }
  return n;
}
const Yn = () => {
}, Qe = Array.isArray;
function oe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Em = /\/$/, _m = (e) => e.replace(Em, "");
function Br(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return l < a && l >= 0 && (a = -1), a > -1 && (o = t.slice(0, a), s = t.slice(a + 1, l > -1 ? l : t.length), r = e(s)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = Nm(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: i
  };
}
function bm(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function cl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ul(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && qt(t.matched[o], n.matched[r]) && uc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function qt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function uc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!wm(e[n], t[n]))
      return !1;
  return !0;
}
function wm(e, t) {
  return Qe(e) ? fl(e, t) : Qe(t) ? fl(t, e) : e === t;
}
function fl(e, t) {
  return Qe(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Nm(e, t) {
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
var ao;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ao || (ao = {}));
var Qn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Qn || (Qn = {}));
function Om(e) {
  if (!e)
    if (xt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), _m(e);
}
const xm = /^[^#]+#/;
function Sm(e, t) {
  return e.replace(xm, "#") + t;
}
function Cm(e, t) {
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
function Dm(e) {
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
    t = Cm(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function dl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const _s = /* @__PURE__ */ new Map();
function Tm(e, t) {
  _s.set(e, t);
}
function Pm(e) {
  const t = _s.get(e);
  return _s.delete(e), t;
}
let $m = () => location.protocol + "//" + location.host;
function fc(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let l = r.includes(e.slice(s)) ? e.slice(s).length : 1, a = r.slice(l);
    return a[0] !== "/" && (a = "/" + a), cl(a, "");
  }
  return cl(n, e) + o + r;
}
function Am(e, t, n, o) {
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
        type: ao.pop,
        direction: N ? N > 0 ? Qn.forward : Qn.back : Qn.unknown
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
    d.state && d.replaceState(le({}, d.state, { scroll: wr() }), "");
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
function pl(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? wr() : null
  };
}
function Rm(e) {
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
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : $m() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d), r.value = c;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? oe("Error with push/replace State", m) : console.error(m), n[u ? "replace" : "assign"](d);
    }
  }
  function i(a, c) {
    const u = le({}, t.state, pl(
      r.value.back,
      // keep back and forward entries but override current position
      a,
      r.value.forward,
      !0
    ), c, { position: r.value.position });
    s(a, u, !0), o.value = a;
  }
  function l(a, c) {
    const u = le(
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
    const f = le({}, pl(o.value, a, null), { position: u.position + 1 }, c);
    s(a, f, !1), o.value = a;
  }
  return {
    location: o,
    state: r,
    push: l,
    replace: i
  };
}
function Vm(e) {
  e = Om(e);
  const t = Rm(e), n = Am(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = le({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Sm.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function km(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function dc(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Vt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, bs = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var hl;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(hl || (hl = {}));
const Im = {
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
    return `Redirected from "${e.fullPath}" to "${Lm(t)}" via a navigation guard.`;
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
  return process.env.NODE_ENV !== "production" ? le(new Error(Im[e](t)), {
    type: e,
    [bs]: !0
  }, t) : le(new Error(), {
    type: e,
    [bs]: !0
  }, t);
}
function wt(e, t) {
  return e instanceof Error && bs in e && (t == null || !!(e.type & t));
}
const Fm = ["params", "query", "hash"];
function Lm(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Fm)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const ml = "[^/]+?", Mm = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, jm = /[.+*?^${}()[\]/\\]/g;
function Bm(e, t) {
  const n = le({}, Mm, t), o = [];
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
        f || (r += "/"), r += d.value.replace(jm, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: g, repeatable: y, optional: N, regexp: O } = d;
        s.push({
          name: g,
          repeatable: y,
          optional: N
        });
        const S = O || ml;
        if (S !== ml) {
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
          if (Qe(O) && !y)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const S = Qe(O) ? O.join("/") : O;
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
function Um(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Hm(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = Um(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (gl(o))
      return 1;
    if (gl(r))
      return -1;
  }
  return r.length - o.length;
}
function gl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Km = {
  type: 0,
  value: ""
}, qm = /[a-zA-Z0-9_]/;
function Wm(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Km]];
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
        a === "(" ? n = 2 : qm.test(a) ? d() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
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
function zm(e, t, n) {
  const o = Bm(Wm(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && oe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = le(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Jm(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = El({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function s(u, f, d) {
    const m = !d, g = Gm(u);
    process.env.NODE_ENV !== "production" && Zm(g, f), g.aliasOf = d && d.record;
    const y = El(t, u), N = [
      g
    ];
    if ("alias" in u) {
      const k = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const F of k)
        N.push(le({}, g, {
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
      if (O = zm(k, f, y), process.env.NODE_ENV !== "production" && f && F[0] === "/" && eg(O, f), d ? (d.alias.push(O), process.env.NODE_ENV !== "production" && Xm(d, O)) : (S = S || O, S !== O && S.alias.push(O), m && u.name && !yl(O) && i(u.name)), g.children) {
        const z = g.children;
        for (let ee = 0; ee < z.length; ee++)
          s(z[ee], O, d && d.children[ee]);
      }
      d = d || O, (O.record.components && Object.keys(O.record.components).length || O.record.name || O.record.redirect) && a(O);
    }
    return S ? () => {
      i(S);
    } : Yn;
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
    for (; f < n.length && Hm(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !pc(u, n[f])); )
      f++;
    n.splice(f, 0, u), u.record.name && !yl(u) && o.set(u.record.name, u);
  }
  function c(u, f) {
    let d, m = {}, g, y;
    if ("name" in u && u.name) {
      if (d = o.get(u.name), !d)
        throw Pn(1, {
          location: u
        });
      if (process.env.NODE_ENV !== "production") {
        const S = Object.keys(u.params || {}).filter((k) => !d.keys.find((F) => F.name === k));
        S.length && oe(`Discarded invalid param(s) "${S.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      y = d.record.name, m = le(
        // paramsFromLocation is a new object
        vl(
          f.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((S) => !S.optional).map((S) => S.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && vl(u.params, d.keys.map((S) => S.name))
      ), g = d.stringify(m);
    } else if ("path" in u)
      g = u.path, process.env.NODE_ENV !== "production" && !g.startsWith("/") && oe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), d = n.find((S) => S.re.test(g)), d && (m = d.parse(g), y = d.record.name);
    else {
      if (d = f.name ? o.get(f.name) : n.find((S) => S.re.test(f.path)), !d)
        throw Pn(1, {
          location: u,
          currentLocation: f
        });
      y = d.record.name, m = le({}, f.params, u.params), g = d.stringify(m);
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
      meta: Qm(N)
    };
  }
  return e.forEach((u) => s(u)), { addRoute: s, resolve: c, removeRoute: i, getRoutes: l, getRecordMatcher: r };
}
function vl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Gm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Ym(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Ym(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function yl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Qm(e) {
  return e.reduce((t, n) => le(t, n.meta), {});
}
function El(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function ws(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Xm(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(ws.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(ws.bind(null, n)))
      return oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Zm(e, t) {
  t && t.record.name && !e.name && !e.path && oe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function eg(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(ws.bind(null, n)))
      return oe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function pc(e, t) {
  return t.children.some((n) => n === e || pc(e, n));
}
const hc = /#/g, tg = /&/g, ng = /\//g, og = /=/g, rg = /\?/g, mc = /\+/g, sg = /%5B/g, ig = /%5D/g, gc = /%5E/g, lg = /%60/g, vc = /%7B/g, ag = /%7C/g, yc = /%7D/g, cg = /%20/g;
function li(e) {
  return encodeURI("" + e).replace(ag, "|").replace(sg, "[").replace(ig, "]");
}
function ug(e) {
  return li(e).replace(vc, "{").replace(yc, "}").replace(gc, "^");
}
function Ns(e) {
  return li(e).replace(mc, "%2B").replace(cg, "+").replace(hc, "%23").replace(tg, "%26").replace(lg, "`").replace(vc, "{").replace(yc, "}").replace(gc, "^");
}
function fg(e) {
  return Ns(e).replace(og, "%3D");
}
function dg(e) {
  return li(e).replace(hc, "%23").replace(rg, "%3F");
}
function pg(e) {
  return e == null ? "" : dg(e).replace(ng, "%2F");
}
function co(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && oe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function hg(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(mc, " "), i = s.indexOf("="), l = co(i < 0 ? s : s.slice(0, i)), a = i < 0 ? null : co(s.slice(i + 1));
    if (l in t) {
      let c = t[l];
      Qe(c) || (c = t[l] = [c]), c.push(a);
    } else
      t[l] = a;
  }
  return t;
}
function _l(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = fg(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Qe(o) ? o.map((s) => s && Ns(s)) : [o && Ns(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function mg(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Qe(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const gg = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), bl = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Nr = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ai = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Os = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
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
      f === !1 ? l(Pn(4, {
        from: n,
        to: t
      })) : f instanceof Error ? l(f) : km(f) ? l(Pn(2, {
        from: t,
        to: f
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === s && typeof f == "function" && s.push(f), i());
    }, c = e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? vg(a, t, n) : a);
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
function vg(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && oe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ur(e, t, n, o) {
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
        if (yg(l)) {
          const c = (l.__vccOpts || l)[t];
          c && r.push(Ft(c, n, o, s, i));
        } else {
          let a = l();
          process.env.NODE_ENV !== "production" && !("catch" in a) && (oe(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), a = Promise.resolve(a)), r.push(() => a.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));
            const u = ym(c) ? c.default : c;
            s.components[i] = u;
            const d = (u.__vccOpts || u)[t];
            return d && Ft(d, n, o, s, i)();
          }));
        }
    }
  }
  return r;
}
function yg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function wl(e) {
  const t = be(Nr), n = be(ai), o = q(() => t.resolve(fe(e.to))), r = q(() => {
    const { matched: a } = o.value, { length: c } = a, u = a[c - 1], f = n.matched;
    if (!u || !f.length)
      return -1;
    const d = f.findIndex(qt.bind(null, u));
    if (d > -1)
      return d;
    const m = Nl(a[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Nl(u) === m && // avoid comparing the child with its parent
      f[f.length - 1].path !== m ? f.findIndex(qt.bind(null, a[c - 2])) : d
    );
  }), s = q(() => r.value > -1 && wg(n.params, o.value.params)), i = q(() => r.value > -1 && r.value === n.matched.length - 1 && uc(n.params, o.value.params));
  function l(a = {}) {
    return bg(a) ? t[fe(e.replace) ? "replace" : "push"](
      fe(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Yn) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && xt) {
    const a = ei();
    if (a) {
      const c = {
        route: o.value,
        isActive: s.value,
        isExactActive: i.value
      };
      a.__vrl_devtools = a.__vrl_devtools || [], a.__vrl_devtools.push(c), rt(() => {
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
const Eg = /* @__PURE__ */ ue({
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
  useLink: wl,
  setup(e, { slots: t }) {
    const n = An(wl(e)), { options: o } = be(Nr), r = q(() => ({
      [Ol(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Ol(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : $e("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), _g = Eg;
function bg(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function wg(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!Qe(r) || r.length !== o.length || o.some((s, i) => s !== r[i]))
      return !1;
  }
  return !0;
}
function Nl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ol = (e, t, n) => e ?? t ?? n, Ng = /* @__PURE__ */ ue({
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
    process.env.NODE_ENV !== "production" && xg();
    const o = be(Os), r = q(() => e.route || o.value), s = be(bl, 0), i = q(() => {
      let c = fe(s);
      const { matched: u } = r.value;
      let f;
      for (; (f = u[c]) && !f.components; )
        c++;
      return c;
    }), l = q(() => r.value.matched[i.value]);
    We(bl, q(() => i.value + 1)), We(gg, l), We(Os, r);
    const a = Y();
    return yt(() => [a.value, l.value, e.name], ([c, u, f], [d, m, g]) => {
      u && (u.instances[f] = c, m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), c && u && (!m || !qt(u, m) || !d) && (u.enterCallbacks[f] || []).forEach((y) => y(c));
    }, { flush: "post" }), () => {
      const c = r.value, u = e.name, f = l.value, d = f && f.components[u];
      if (!d)
        return xl(n.default, { Component: d, route: c });
      const m = f.props[u], g = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null, N = $e(d, le({}, g, t, {
        onVnodeUnmounted: (O) => {
          O.component.isUnmounted && (f.instances[u] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && xt && N.ref) {
        const O = {
          depth: i.value,
          name: f.name,
          path: f.path,
          meta: f.meta
        };
        (Qe(N.ref) ? N.ref.map((k) => k.i) : [N.ref.i]).forEach((k) => {
          k.__vrv_devtools = O;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        xl(n.default, { Component: N, route: c }) || N
      );
    };
  }
});
function xl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Og = Ng;
function xg() {
  const e = ei(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
  const n = le({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Vg(o, ["instances", "children", "aliasOf"]))
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
function Do(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Sg = 0;
function Cg(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Sg++;
  vm({
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
      Qe(f.__vrl_devtools) && (f.__devtoolsApi = r, f.__vrl_devtools.forEach((d) => {
        let m = wc, g = "";
        d.isExactActive ? (m = bc, g = "This is exactly active") : d.isActive && (m = _c, g = "This link is active"), u.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: g,
          backgroundColor: m
        });
      }));
    }), yt(t.currentRoute, () => {
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
        guard: Do("beforeEach"),
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
        guard: Do("afterEach")
      };
      d ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, m.status = Do("❌")) : m.status = Do("✅"), m.from = jn(f, "Current Location during this navigation"), m.to = jn(u, "Target location"), r.addTimelineEvent({
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
      xs(d, u.filter.toLowerCase()))), f.forEach((d) => Oc(d, t.currentRoute.value)), u.rootNodes = f.map(Nc);
    }
    let c;
    r.on.getInspectorTree((u) => {
      c = u, u.app === e && u.inspectorId === l && a();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === l) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === u.nodeId);
        d && (u.state = {
          options: Tg(d)
        });
      }
    }), r.sendInspectorTree(l), r.sendInspectorState(l);
  });
}
function Dg(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Tg(e) {
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
        display: e.keys.map((o) => `${o.name}${Dg(o)}`).join(" "),
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
const Ec = 15485081, _c = 2450411, bc = 8702998, Pg = 2282478, wc = 16486972, $g = 6710886;
function Nc(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Pg
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
    backgroundColor: $g
  });
  let o = n.__vd_id;
  return o == null && (o = String(Ag++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Nc)
  };
}
let Ag = 0;
const Rg = /^\/(.*)\/([a-z]*)$/;
function Oc(e, t) {
  const n = t.matched.length && qt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => qt(o, e.record))), e.children.forEach((o) => Oc(o, t));
}
function xc(e) {
  e.__vd_match = !1, e.children.forEach(xc);
}
function xs(e, t) {
  const n = String(e.re).match(Rg);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => xs(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = co(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => xs(i, t));
}
function Vg(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function kg(e) {
  const t = Jm(e.routes, e), n = e.parseQuery || hg, o = e.stringifyQuery || _l, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Mn(), i = Mn(), l = Mn(), a = Xl(Vt);
  let c = Vt;
  xt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = jr.bind(null, (E) => "" + E), f = jr.bind(null, pg), d = (
    // @ts-expect-error: intentionally avoid the type check
    jr.bind(null, co)
  );
  function m(E, R) {
    let V, L;
    return dc(E) ? (V = t.getRecordMatcher(E), L = R) : L = E, t.addRoute(L, V);
  }
  function g(E) {
    const R = t.getRecordMatcher(E);
    R ? t.removeRoute(R) : process.env.NODE_ENV !== "production" && oe(`Cannot remove non-existent route "${String(E)}"`);
  }
  function y() {
    return t.getRoutes().map((E) => E.record);
  }
  function N(E) {
    return !!t.getRecordMatcher(E);
  }
  function O(E, R) {
    if (R = le({}, R || a.value), typeof E == "string") {
      const h = Br(n, E, R.path), v = t.resolve({ path: h.path }, R), w = r.createHref(h.fullPath);
      return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? oe(`Location "${E}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : v.matched.length || oe(`No match found for location with path "${E}"`)), le(h, v, {
        params: d(v.params),
        hash: co(h.hash),
        redirectedFrom: void 0,
        href: w
      });
    }
    let V;
    if ("path" in E)
      process.env.NODE_ENV !== "production" && "params" in E && !("name" in E) && // @ts-expect-error: the type is never
      Object.keys(E.params).length && oe(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), V = le({}, E, {
        path: Br(n, E.path, R.path).path
      });
    else {
      const h = le({}, E.params);
      for (const v in h)
        h[v] == null && delete h[v];
      V = le({}, E, {
        params: f(h)
      }), R.params = f(R.params);
    }
    const L = t.resolve(V, R), ne = E.hash || "";
    process.env.NODE_ENV !== "production" && ne && !ne.startsWith("#") && oe(`A \`hash\` should always start with the character "#". Replace "${ne}" with "#${ne}".`), L.params = u(d(L.params));
    const _e = bm(o, le({}, E, {
      hash: ug(ne),
      path: L.path
    })), p = r.createHref(_e);
    return process.env.NODE_ENV !== "production" && (p.startsWith("//") ? oe(`Location "${E}" resolved to "${p}". A resolved location cannot start with multiple slashes.`) : L.matched.length || oe(`No match found for location with path "${"path" in E ? E.path : E}"`)), le({
      fullPath: _e,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ne,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === _l ? mg(E.query) : E.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: p
    });
  }
  function S(E) {
    return typeof E == "string" ? Br(n, E, a.value.path) : le({}, E);
  }
  function k(E, R) {
    if (c !== E)
      return Pn(8, {
        from: R,
        to: E
      });
  }
  function F(E) {
    return ie(E);
  }
  function z(E) {
    return F(le(S(E), { replace: !0 }));
  }
  function ee(E) {
    const R = E.matched[E.matched.length - 1];
    if (R && R.redirect) {
      const { redirect: V } = R;
      let L = typeof V == "function" ? V(E) : V;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = S(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), process.env.NODE_ENV !== "production" && !("path" in L) && !("name" in L))
        throw oe(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return le({
        query: E.query,
        hash: E.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in L ? {} : E.params
      }, L);
    }
  }
  function ie(E, R) {
    const V = c = O(E), L = a.value, ne = E.state, _e = E.force, p = E.replace === !0, h = ee(V);
    if (h)
      return ie(
        le(S(h), {
          state: typeof h == "object" ? le({}, ne, h.state) : ne,
          force: _e,
          replace: p
        }),
        // keep original redirectedFrom if it exists
        R || V
      );
    const v = V;
    v.redirectedFrom = R;
    let w;
    return !_e && ul(o, L, V) && (w = Pn(16, { to: v, from: L }), Je(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (w ? Promise.resolve(w) : te(v, L)).catch((_) => wt(_) ? (
      // navigation redirects still mark the router as ready
      wt(
        _,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? _ : Pe(_)
    ) : (
      // reject any unknown error
      B(_, v, L)
    )).then((_) => {
      if (_) {
        if (wt(
          _,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          ul(o, O(_.to), v) && // and we have done it a couple of times
          R && (R._count = R._count ? (
            // @ts-expect-error
            R._count + 1
          ) : 1) > 30 ? (oe(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${v.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : ie(
            // keep options
            le({
              // preserve an existing replacement but allow the redirect to override it
              replace: p
            }, S(_.to), {
              state: typeof _.to == "object" ? le({}, ne, _.to.state) : ne,
              force: _e
            }),
            // preserve the original redirectedFrom if any
            R || v
          );
      } else
        _ = me(v, L, !0, p, ne);
      return de(v, L, _), _;
    });
  }
  function K(E, R) {
    const V = k(E, R);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function Q(E) {
    const R = ut.values().next().value;
    return R && typeof R.runWithContext == "function" ? R.runWithContext(E) : E();
  }
  function te(E, R) {
    let V;
    const [L, ne, _e] = Ig(E, R);
    V = Ur(L.reverse(), "beforeRouteLeave", E, R);
    for (const h of L)
      h.leaveGuards.forEach((v) => {
        V.push(Ft(v, E, R));
      });
    const p = K.bind(null, E, R);
    return V.push(p), $t(V).then(() => {
      V = [];
      for (const h of s.list())
        V.push(Ft(h, E, R));
      return V.push(p), $t(V);
    }).then(() => {
      V = Ur(ne, "beforeRouteUpdate", E, R);
      for (const h of ne)
        h.updateGuards.forEach((v) => {
          V.push(Ft(v, E, R));
        });
      return V.push(p), $t(V);
    }).then(() => {
      V = [];
      for (const h of E.matched)
        if (h.beforeEnter && !R.matched.includes(h))
          if (Qe(h.beforeEnter))
            for (const v of h.beforeEnter)
              V.push(Ft(v, E, R));
          else
            V.push(Ft(h.beforeEnter, E, R));
      return V.push(p), $t(V);
    }).then(() => (E.matched.forEach((h) => h.enterCallbacks = {}), V = Ur(_e, "beforeRouteEnter", E, R), V.push(p), $t(V))).then(() => {
      V = [];
      for (const h of i.list())
        V.push(Ft(h, E, R));
      return V.push(p), $t(V);
    }).catch((h) => wt(
      h,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? h : Promise.reject(h));
  }
  function de(E, R, V) {
    for (const L of l.list())
      Q(() => L(E, R, V));
  }
  function me(E, R, V, L, ne) {
    const _e = k(E, R);
    if (_e)
      return _e;
    const p = R === Vt, h = xt ? history.state : {};
    V && (L || p ? r.replace(E.fullPath, le({
      scroll: p && h && h.scroll
    }, ne)) : r.push(E.fullPath, ne)), a.value = E, Je(E, R, V, p), Pe();
  }
  let ce;
  function Ze() {
    ce || (ce = r.listen((E, R, V) => {
      if (!_o.listening)
        return;
      const L = O(E), ne = ee(L);
      if (ne) {
        ie(le(ne, { replace: !0 }), L).catch(Yn);
        return;
      }
      c = L;
      const _e = a.value;
      xt && Tm(dl(_e.fullPath, V.delta), wr()), te(L, _e).catch((p) => wt(
        p,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? p : wt(
        p,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (ie(
        p.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((h) => {
        wt(
          h,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !V.delta && V.type === ao.pop && r.go(-1, !1);
      }).catch(Yn), Promise.reject()) : (V.delta && r.go(-V.delta, !1), B(p, L, _e))).then((p) => {
        p = p || me(
          // after navigation, all matched components are resolved
          L,
          _e,
          !1
        ), p && (V.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !wt(
          p,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-V.delta, !1) : V.type === ao.pop && wt(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), de(L, _e, p);
      }).catch(Yn);
    }));
  }
  let we = Mn(), ve = Mn(), I;
  function B(E, R, V) {
    Pe(E);
    const L = ve.list();
    return L.length ? L.forEach((ne) => ne(E, R, V)) : (process.env.NODE_ENV !== "production" && oe("uncaught error during route navigation:"), console.error(E)), Promise.reject(E);
  }
  function ye() {
    return I && a.value !== Vt ? Promise.resolve() : new Promise((E, R) => {
      we.add([E, R]);
    });
  }
  function Pe(E) {
    return I || (I = !E, Ze(), we.list().forEach(([R, V]) => E ? V(E) : R()), we.reset()), E;
  }
  function Je(E, R, V, L) {
    const { scrollBehavior: ne } = e;
    if (!xt || !ne)
      return Promise.resolve();
    const _e = !V && Pm(dl(E.fullPath, 0)) || (L || !V) && history.state && history.state.scroll || null;
    return Ks().then(() => ne(E, R, _e)).then((p) => p && Dm(p)).catch((p) => B(p, E, R));
  }
  const Ce = (E) => r.go(E);
  let Ke;
  const ut = /* @__PURE__ */ new Set(), _o = {
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
    go: Ce,
    back: () => Ce(-1),
    forward: () => Ce(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: ve.add,
    isReady: ye,
    install(E) {
      const R = this;
      E.component("RouterLink", _g), E.component("RouterView", Og), E.config.globalProperties.$router = R, Object.defineProperty(E.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => fe(a)
      }), xt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ke && a.value === Vt && (Ke = !0, F(r.location).catch((ne) => {
        process.env.NODE_ENV !== "production" && oe("Unexpected error when starting the router:", ne);
      }));
      const V = {};
      for (const ne in Vt)
        V[ne] = q(() => a.value[ne]);
      E.provide(Nr, R), E.provide(ai, An(V)), E.provide(Os, a);
      const L = E.unmount;
      ut.add(E), E.unmount = function() {
        ut.delete(E), ut.size < 1 && (c = Vt, ce && ce(), ce = null, a.value = Vt, Ke = !1, I = !1), L();
      }, process.env.NODE_ENV !== "production" && xt && Cg(E, R, t);
    }
  };
  function $t(E) {
    return E.reduce((R, V) => R.then(() => Q(V)), Promise.resolve());
  }
  return _o;
}
function Ig(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((c) => qt(c, l)) ? o.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((c) => qt(c, a)) || r.push(a));
  }
  return [n, o, r];
}
function Fg() {
  return be(Nr);
}
function Lg() {
  return be(ai);
}
const Mg = { class: "grid grid-cols-5 min-h-screen" }, jg = { class: "col-span-1 flex flex-col h-screen overflow-auto border-r" }, Bg = { key: 0 }, Ug = /* @__PURE__ */ D("summary", { class: "font-bold p-4 border-b cursor-pointer" }, "Components", -1), Hg = { class: "flex flex-col gap-3 p-3 bg-white" }, Kg = ["onDragstart"], qg = { class: "min-w-0 flex-1" }, Wg = {
  href: "#",
  class: "focus:outline-none"
}, zg = /* @__PURE__ */ D("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Jg = { class: "text-sm font-medium text-gray-900" }, Gg = { class: "truncate text-sm text-gray-500" }, Yg = { class: "col-span-4 overflow-auto h-screen" }, Qg = { class: "grid grid-cols-4 gap-4 p-5 content-start" }, Xg = /* @__PURE__ */ ue({
  __name: "PageBuilder",
  setup(e) {
    const t = Lg(), n = new br(), o = Y(null), r = Y([]), s = Y(null);
    let i = [];
    document.addEventListener("keydown", (N) => {
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
      l.value = O, typeof O.content == "string" ? r.value = JSON.parse(O.content) ?? [] : r.value = O.content ?? [];
    }, y = async () => {
      await n.savePage(l.value.slug, l.value.title, r.value);
    };
    return ke(async () => {
      i = await n.loadElements(), await g(t.params.slug);
    }), (N, O) => (se(), Oe("div", Mg, [
      D("div", jg, [
        D("div", { class: "flex flex-col" }, [
          D("button", {
            onClick: m,
            class: "bg-red-600 hover:bg-red-500 text-white p-2 col-span-4"
          }, " Clear All "),
          D("button", {
            onClick: y,
            class: "bg-green-600 hover:bg-green-500 text-white p-2 col-span-4"
          }, " Save Page "),
          D("button", {
            onClick: a,
            class: "bg-amber-600 hover:bg-amber-500 text-white p-2 col-span-4"
          }, " Add Container ")
        ]),
        r.value.length ? (se(), Oe("details", Bg, [
          Ug,
          D("div", Hg, [
            (se(!0), Oe(Ne, null, Sn(fe(i), (S) => (se(), Oe("div", {
              class: "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400",
              draggable: "true",
              key: S.id,
              onDragstart: (k) => c(k, S)
            }, [
              D("div", qg, [
                D("a", Wg, [
                  zg,
                  D("p", Jg, Fe(S.name), 1),
                  D("p", Gg, Fe(S.description), 1)
                ])
              ])
            ], 40, Kg))), 128))
          ])
        ])) : Ar("", !0),
        o.value ? (se(), at(cm, {
          key: 1,
          modelValue: o.value,
          "onUpdate:modelValue": O[0] || (O[0] = (S) => o.value = S)
        }, null, 8, ["modelValue"])) : Ar("", !0),
        s.value ? (se(), at(Yh, {
          key: 2,
          modelValue: s.value,
          "onUpdate:modelValue": O[1] || (O[1] = (S) => s.value = S),
          elements: fe(i)
        }, null, 8, ["modelValue", "elements"])) : Ar("", !0)
      ]),
      D("div", Yg, [
        D("div", Qg, [
          (se(!0), Oe(Ne, null, Sn(r.value, (S) => (se(), at(fp, {
            items: fe(i),
            onClick: (k) => f(S),
            onDragover: O[2] || (O[2] = Yi(() => {
            }, ["prevent"])),
            onDragenter: O[3] || (O[3] = Yi(() => {
            }, ["prevent"])),
            onDrop: (k) => u(k, S),
            key: S.id,
            container: S,
            onSelectElement: d
          }, null, 8, ["items", "onClick", "onDrop", "container"]))), 128))
        ])
      ])
    ]));
  }
});
function _t(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return typeof r == "function" ? r(...n) : r;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, _t), o;
}
var Zo = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Zo || {}), jt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(jt || {});
function Xe({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...r }) {
  var s;
  let i = Cc(o, n), l = Object.assign(r, { props: i });
  if (e || t & 2 && i.static)
    return Hr(l);
  if (t & 1) {
    let a = (s = i.unmount) == null || s ? 0 : 1;
    return _t(a, { [0]() {
      return null;
    }, [1]() {
      return Hr({ ...r, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Hr(l);
}
function Hr({ props: e, attrs: t, slots: n, slot: o, name: r }) {
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
      if (!Zg(f) || d.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(a).concat(Object.keys(t)).map((y) => y.trim()).filter((y, N, O) => O.indexOf(y) === N).sort((y, N) => y.localeCompare(N)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      let m = Cc((i = f.props) != null ? i : {}, a), g = ct(f, m);
      for (let y in m)
        y.startsWith("on") && (g.props || (g.props = {}), g.props[y] = m[y]);
      return g;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return $e(l, Object.assign({}, a, u), { default: () => c });
}
function Sc(e) {
  return e.flatMap((t) => t.type === Ne ? Sc(t.children) : [t]);
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
function Zg(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let ev = 0;
function tv() {
  return ++ev;
}
function gn() {
  return tv();
}
var Tc = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Tc || {});
function Ve(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Pc = Symbol("Context");
var Ge = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ge || {});
function nv() {
  return ci() !== null;
}
function ci() {
  return be(Pc, null);
}
function ov(e) {
  We(Pc, e);
}
var rv = Object.defineProperty, sv = (e, t, n) => t in e ? rv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sl = (e, t, n) => (sv(e, typeof t != "symbol" ? t + "" : t, n), n);
class iv {
  constructor() {
    Sl(this, "current", this.detect()), Sl(this, "currentId", 0);
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
let yo = new iv();
function Vn(e) {
  if (yo.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = Ve(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Ss = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Mt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Mt || {}), $c = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))($c || {}), lv = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(lv || {});
function av(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ss)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ac = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ac || {});
function cv(e, t = 0) {
  var n;
  return e === ((n = Vn(e)) == null ? void 0 : n.body) ? !1 : _t(t, { [0]() {
    return e.matches(Ss);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(Ss))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var uv = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(uv || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function fn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let fv = ["textarea", "input"].join(",");
function dv(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, fv)) != null ? n : !1;
}
function pv(e, t = (n) => n) {
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
  let i = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, l = Array.isArray(e) ? n ? pv(e) : e : av(e);
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
  return t & 6 && dv(m) && m.select(), 2;
}
function Cl(e, t, n) {
  yo.isServer || rt((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function Rc(e, t, n) {
  yo.isServer || rt((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
function hv(e, t, n = q(() => !0)) {
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
      let u = c instanceof HTMLElement ? c : Ve(c);
      if (u != null && u.contains(l) || s.composed && s.composedPath().includes(u))
        return;
    }
    return !cv(l, Ac.Loose) && l.tabIndex !== -1 && s.preventDefault(), t(s, l);
  }
  let r = Y(null);
  Cl("mousedown", (s) => {
    var i, l;
    n.value && (r.value = ((l = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), Cl("click", (s) => {
    r.value && (o(s, () => r.value), r.value = null);
  }, !0), Rc("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var er = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(er || {});
let Cs = ue({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...r } = e, s = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return Xe({ ourProps: s, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function mv() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Or() {
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
    let o = Or();
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
function gv() {
  let e = Y(0);
  return Rc("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Vc(e, t, n, o) {
  yo.isServer || rt((r) => {
    e = e ?? window, e.addEventListener(t, n, o), r(() => e.removeEventListener(t, n, o));
  });
}
function kc(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function vv(e) {
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
    let o = Ve(n);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var Fc = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Fc || {});
let Bn = Object.assign(ue({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: Y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = Y(null);
  o({ el: r, $el: r });
  let s = q(() => Vn(r)), i = Y(!1);
  ke(() => i.value = !0), Ye(() => i.value = !1), Ev({ ownerDocument: s }, q(() => i.value && Boolean(e.features & 16)));
  let l = _v({ ownerDocument: s, container: r, initialFocus: q(() => e.initialFocus) }, q(() => i.value && Boolean(e.features & 2)));
  bv({ ownerDocument: s, container: r, containers: e.containers, previousActiveElement: l }, q(() => i.value && Boolean(e.features & 8)));
  let a = gv();
  function c(m) {
    let g = Ve(r);
    g && ((y) => y())(() => {
      _t(a.value, { [qn.Forwards]: () => {
        jo(g, Mt.First, { skipElements: [m.relatedTarget] });
      }, [qn.Backwards]: () => {
        jo(g, Mt.Last, { skipElements: [m.relatedTarget] });
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
    let g = Ic(e.containers);
    Ve(r) instanceof HTMLElement && g.add(Ve(r));
    let y = m.relatedTarget;
    y instanceof HTMLElement && y.dataset.headlessuiFocusGuard !== "true" && (Lc(g, y) || (u.value ? jo(Ve(r), _t(a.value, { [qn.Forwards]: () => Mt.Next, [qn.Backwards]: () => Mt.Previous }) | Mt.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && fn(m.target)));
  }
  return () => {
    let m = {}, g = { ref: r, onKeydown: f, onFocusout: d }, { features: y, initialFocus: N, containers: O, ...S } = e;
    return $e(Ne, [Boolean(y & 4) && $e(Cs, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: er.Focusable }), Xe({ ourProps: g, theirProps: { ...t, ...S }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), Boolean(y & 4) && $e(Cs, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: er.Focusable })]);
  };
} }), { features: Fc }), tn = [];
vv(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && tn[0] !== t.target && (tn.unshift(t.target), tn = tn.filter((n) => n != null && n.isConnected), tn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function yv(e) {
  let t = Y(tn.slice());
  return yt([e], ([n], [o]) => {
    o === !0 && n === !1 ? kc(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = tn.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function Ev({ ownerDocument: e }, t) {
  let n = yv(t);
  ke(() => {
    rt(() => {
      var o, r;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && fn(n());
    }, { flush: "post" });
  }), Ye(() => {
    t.value && fn(n());
  });
}
function _v({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let r = Y(null), s = Y(!1);
  return ke(() => s.value = !0), Ye(() => s.value = !1), ke(() => {
    yt([t, n, o], (i, l) => {
      if (i.every((c, u) => (l == null ? void 0 : l[u]) === c) || !o.value)
        return;
      let a = Ve(t);
      a && kc(() => {
        var c, u;
        if (!s.value)
          return;
        let f = Ve(n), d = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === d) {
            r.value = d;
            return;
          }
        } else if (a.contains(d)) {
          r.value = d;
          return;
        }
        f ? fn(f) : jo(a, Mt.First | Mt.NoScroll) === $c.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function bv({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, r) {
  var s;
  Vc((s = e.value) == null ? void 0 : s.defaultView, "focus", (i) => {
    if (!r.value)
      return;
    let l = Ic(n);
    Ve(t) instanceof HTMLElement && l.add(Ve(t));
    let a = o.value;
    if (!a)
      return;
    let c = i.target;
    c && c instanceof HTMLElement ? Lc(l, c) ? (o.value = c, fn(c)) : (i.preventDefault(), i.stopPropagation(), fn(a)) : fn(o.value);
  }, !0);
}
function Lc(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Kr = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map();
function Dl(e, t = Y(!0)) {
  rt((n) => {
    var o;
    if (!t.value)
      return;
    let r = Ve(e);
    if (!r)
      return;
    n(function() {
      var i;
      if (!r)
        return;
      let l = (i = Un.get(r)) != null ? i : 1;
      if (l === 1 ? Un.delete(r) : Un.set(r, l - 1), l !== 1)
        return;
      let a = Kr.get(r);
      a && (a["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", a["aria-hidden"]), r.inert = a.inert, Kr.delete(r));
    });
    let s = (o = Un.get(r)) != null ? o : 0;
    Un.set(r, s + 1), s === 0 && (Kr.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
let Mc = Symbol("ForcePortalRootContext");
function wv() {
  return be(Mc, !1);
}
let Ds = ue({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return We(Mc, e.force), () => {
    let { force: o, ...r } = e;
    return Xe({ theirProps: r, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function Nv(e) {
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
let jc = ue({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = Y(null), r = q(() => Vn(o)), s = wv(), i = be(Bc, null), l = Y(s === !0 || i == null ? Nv(o.value) : i.resolveTarget());
  rt(() => {
    s || i != null && (l.value = i.resolveTarget());
  });
  let a = be(Ts, null);
  return ke(() => {
    let c = Ve(o);
    c && a && Ye(a.register(c));
  }), Ye(() => {
    var c, u;
    let f = (c = r.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    f && l.value === f && l.value.children.length <= 0 && ((u = l.value.parentElement) == null || u.removeChild(l.value));
  }), () => {
    if (l.value === null)
      return null;
    let c = { ref: o, "data-headlessui-portal": "" };
    return $e(ud, { to: l.value }, Xe({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Ts = Symbol("PortalParentContext");
function Ov() {
  let e = be(Ts, null), t = Y([]);
  function n(s) {
    return t.value.push(s), e && e.register(s), () => o(s);
  }
  function o(s) {
    let i = t.value.indexOf(s);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(s);
  }
  let r = { register: n, unregister: o, portals: t };
  return [t, ue({ name: "PortalWrapper", setup(s, { slots: i }) {
    return We(Ts, r), () => {
      var l;
      return (l = i.default) == null ? void 0 : l.call(i);
    };
  } })];
}
let Bc = Symbol("PortalGroupContext"), xv = ue({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = An({ resolveTarget() {
    return e.target;
  } });
  return We(Bc, o), () => {
    let { target: r, ...s } = e;
    return Xe({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Uc = Symbol("StackContext");
var Ps = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ps || {});
function Sv() {
  return be(Uc, () => {
  });
}
function Cv({ type: e, enabled: t, element: n, onUpdate: o }) {
  let r = Sv();
  function s(...i) {
    o == null || o(...i), r(...i);
  }
  ke(() => {
    yt(t, (i, l) => {
      i ? s(0, e, n) : l === !0 && s(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Ye(() => {
    t.value && s(1, e, n);
  }), We(Uc, s);
}
let Hc = Symbol("DescriptionContext");
function Dv() {
  let e = be(Hc, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Tv({ slot: e = Y({}), name: t = "Description", props: n = {} } = {}) {
  let o = Y([]);
  function r(s) {
    return o.value.push(s), () => {
      let i = o.value.indexOf(s);
      i !== -1 && o.value.splice(i, 1);
    };
  }
  return We(Hc, { register: r, slot: e, name: t, props: n }), q(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Vy = ue({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${gn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Dv();
  return ke(() => Ye(o.register(e.id))), () => {
    let { name: r = "Description", slot: s = Y({}), props: i = {} } = o, { id: l, ...a } = e, c = { ...Object.entries(i).reduce((u, [f, d]) => Object.assign(u, { [f]: fe(d) }), {}), id: l };
    return Xe({ ourProps: c, theirProps: a, slot: s.value, attrs: t, slots: n, name: r });
  };
} });
function Pv(e) {
  let t = Xl(e.getSnapshot());
  return Ye(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function $v(e, t) {
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
function Av() {
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
function Rv() {
  if (!mv())
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
function Vv() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function kv(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let on = $v(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Or(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let o = { doc: e, d: t, meta: kv(n) }, r = [Rv(), Av(), Vv()];
  r.forEach(({ before: s }) => s == null ? void 0 : s(o)), r.forEach(({ after: s }) => s == null ? void 0 : s(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
on.subscribe(() => {
  let e = on.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let o = t.get(n.doc) === "hidden", r = n.count !== 0;
    (r && !o || !r && o) && on.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && on.dispatch("TEARDOWN", n);
  }
});
function Iv(e, t, n) {
  let o = Pv(on), r = q(() => {
    let s = e.value ? o.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return yt([e, t], ([s, i], [l], a) => {
    if (!s || !i)
      return;
    on.dispatch("PUSH", s, n);
    let c = !1;
    a(() => {
      c || (on.dispatch("POP", l ?? s, n), c = !0);
    });
  }, { immediate: !0 }), r;
}
function Fv({ defaultContainers: e = [], portals: t } = {}) {
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
      l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains(Ve(n)) || i.some((a) => l.contains(a)) || i.push(l));
    return i;
  }
  return { resolveContainers: r, contains(s) {
    return r().some((i) => i.contains(s));
  }, mainTreeNodeRef: n, MainTreeNode() {
    return $e(Cs, { features: er.Hidden, ref: n });
  } };
}
var Lv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Lv || {});
let $s = Symbol("DialogContext");
function Eo(e) {
  let t = be($s, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Eo), n;
  }
  return t;
}
let To = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Mv = ue({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: To }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${gn()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
  var s;
  let i = Y(!1);
  ke(() => {
    i.value = !0;
  });
  let l = Y(0), a = ci(), c = q(() => e.open === To && a !== null ? (a.value & Ge.Open) === Ge.Open : e.open), u = Y(null), f = q(() => Vn(u));
  if (r({ el: u, $el: u }), !(e.open !== To || a !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === To ? void 0 : e.open}`);
  let d = q(() => i.value && c.value ? 0 : 1), m = q(() => d.value === 0), g = q(() => l.value > 1), y = be($s, null) !== null, [N, O] = Ov(), { resolveContainers: S, mainTreeNodeRef: k, MainTreeNode: F } = Fv({ portals: N, defaultContainers: [q(() => {
    var I;
    return (I = ce.panelRef.value) != null ? I : u.value;
  })] }), z = q(() => g.value ? "parent" : "leaf"), ee = q(() => a !== null ? (a.value & Ge.Closing) === Ge.Closing : !1), ie = q(() => y || ee.value ? !1 : m.value), K = q(() => {
    var I, B, ye;
    return (ye = Array.from((B = (I = f.value) == null ? void 0 : I.querySelectorAll("body > *")) != null ? B : []).find((Pe) => Pe.id === "headlessui-portal-root" ? !1 : Pe.contains(Ve(k)) && Pe instanceof HTMLElement)) != null ? ye : null;
  });
  Dl(K, ie);
  let Q = q(() => g.value ? !0 : m.value), te = q(() => {
    var I, B, ye;
    return (ye = Array.from((B = (I = f.value) == null ? void 0 : I.querySelectorAll("[data-headlessui-portal]")) != null ? B : []).find((Pe) => Pe.contains(Ve(k)) && Pe instanceof HTMLElement)) != null ? ye : null;
  });
  Dl(te, Q), Cv({ type: "Dialog", enabled: q(() => d.value === 0), element: u, onUpdate: (I, B) => {
    if (B === "Dialog")
      return _t(I, { [Ps.Add]: () => l.value += 1, [Ps.Remove]: () => l.value -= 1 });
  } });
  let de = Tv({ name: "DialogDescription", slot: q(() => ({ open: c.value })) }), me = Y(null), ce = { titleId: me, panelRef: Y(null), dialogState: d, setTitleId(I) {
    me.value !== I && (me.value = I);
  }, close() {
    t("close", !1);
  } };
  We($s, ce);
  let Ze = q(() => !(!m.value || g.value));
  hv(S, (I, B) => {
    ce.close(), Ks(() => B == null ? void 0 : B.focus());
  }, Ze);
  let we = q(() => !(g.value || d.value !== 0));
  Vc((s = f.value) == null ? void 0 : s.defaultView, "keydown", (I) => {
    we.value && (I.defaultPrevented || I.key === Tc.Escape && (I.preventDefault(), I.stopPropagation(), ce.close()));
  });
  let ve = q(() => !(ee.value || d.value !== 0 || y));
  return Iv(f, ve, (I) => {
    var B;
    return { containers: [...(B = I.containers) != null ? B : [], S] };
  }), rt((I) => {
    if (d.value !== 0)
      return;
    let B = Ve(u);
    if (!B)
      return;
    let ye = new ResizeObserver((Pe) => {
      for (let Je of Pe) {
        let Ce = Je.target.getBoundingClientRect();
        Ce.x === 0 && Ce.y === 0 && Ce.width === 0 && Ce.height === 0 && ce.close();
      }
    });
    ye.observe(B), I(() => ye.disconnect());
  }), () => {
    let { id: I, open: B, initialFocus: ye, ...Pe } = e, Je = { ...n, ref: u, id: I, role: "dialog", "aria-modal": d.value === 0 ? !0 : void 0, "aria-labelledby": me.value, "aria-describedby": de.value }, Ce = { open: d.value === 0 };
    return $e(Ds, { force: !0 }, () => [$e(jc, () => $e(xv, { target: u.value }, () => $e(Ds, { force: !1 }, () => $e(Bn, { initialFocus: ye, containers: S, features: m.value ? _t(z.value, { parent: Bn.features.RestoreFocus, leaf: Bn.features.All & ~Bn.features.FocusLock }) : Bn.features.None }, () => $e(O, {}, () => Xe({ ourProps: Je, theirProps: { ...Pe, ...n }, slot: Ce, attrs: n, slots: o, visible: d.value === 0, features: Zo.RenderStrategy | Zo.Static, name: "Dialog" })))))), $e(F)]);
  };
} });
ue({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${gn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Eo("DialogOverlay");
  function r(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), o.close());
  }
  return () => {
    let { id: s, ...i } = e;
    return Xe({ ourProps: { id: s, "aria-hidden": !0, onClick: r }, theirProps: i, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
ue({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${gn()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = Eo("DialogBackdrop"), s = Y(null);
  return o({ el: s, $el: s }), ke(() => {
    if (r.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...l } = e, a = { id: i, ref: s, "aria-hidden": !0 };
    return $e(Ds, { force: !0 }, () => $e(jc, () => Xe({ ourProps: a, theirProps: { ...t, ...l }, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let jv = ue({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${gn()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = Eo("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function s(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...l } = e, a = { id: i, ref: r.panelRef, onClick: s };
    return Xe({ ourProps: a, theirProps: l, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), Bv = ue({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${gn()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Eo("DialogTitle");
  return ke(() => {
    o.setTitleId(e.id), Ye(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...s } = e;
    return Xe({ ourProps: { id: r }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
function Uv(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function qr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Po(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var As = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(As || {});
function Hv(e, t) {
  let n = Or();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [s, i] = [o, r].map((l) => {
    let [a = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
    return a;
  });
  return s !== 0 ? n.setTimeout(() => t("finished"), s + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Tl(e, t, n, o, r, s) {
  let i = Or(), l = s !== void 0 ? Uv(s) : () => {
  };
  return Po(e, ...r), qr(e, ...t, ...n), i.nextFrame(() => {
    Po(e, ...n), qr(e, ...o), i.add(Hv(e, (a) => (Po(e, ...o, ...t), qr(e, ...r), l(a))));
  }), i.add(() => Po(e, ...t, ...n, ...o, ...r)), i.add(() => l("cancelled")), i.dispose;
}
function Gt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ui = Symbol("TransitionContext");
var Kv = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Kv || {});
function qv() {
  return be(ui, null) !== null;
}
function Wv() {
  let e = be(ui, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function zv() {
  let e = be(fi, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let fi = Symbol("NestingContext");
function xr(e) {
  return "children" in e ? xr(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Kc(e) {
  let t = Y([]), n = Y(!1);
  ke(() => n.value = !0), Ye(() => n.value = !1);
  function o(s, i = jt.Hidden) {
    let l = t.value.findIndex(({ id: a }) => a === s);
    l !== -1 && (_t(i, { [jt.Unmount]() {
      t.value.splice(l, 1);
    }, [jt.Hidden]() {
      t.value[l].state = "hidden";
    } }), !xr(t) && n.value && (e == null || e()));
  }
  function r(s) {
    let i = t.value.find(({ id: l }) => l === s);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: s, state: "visible" }), () => o(s, jt.Unmount);
  }
  return { children: t, register: r, unregister: o };
}
let qc = Zo.RenderStrategy, Rs = ue({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: r }) {
  let s = Y(0);
  function i() {
    s.value |= Ge.Opening, t("beforeEnter");
  }
  function l() {
    s.value &= ~Ge.Opening, t("afterEnter");
  }
  function a() {
    s.value |= Ge.Closing, t("beforeLeave");
  }
  function c() {
    s.value &= ~Ge.Closing, t("afterLeave");
  }
  if (!qv() && nv())
    return () => $e(Wc, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: a, onAfterLeave: c }, o);
  let u = Y(null), f = q(() => e.unmount ? jt.Unmount : jt.Hidden);
  r({ el: u, $el: u });
  let { show: d, appear: m } = Wv(), { register: g, unregister: y } = zv(), N = Y(d.value ? "visible" : "hidden"), O = { value: !0 }, S = gn(), k = { value: !1 }, F = Kc(() => {
    !k.value && N.value !== "hidden" && (N.value = "hidden", y(S), c());
  });
  ke(() => {
    let ce = g(S);
    Ye(ce);
  }), rt(() => {
    if (f.value === jt.Hidden && S) {
      if (d.value && N.value !== "visible") {
        N.value = "visible";
        return;
      }
      _t(N.value, { hidden: () => y(S), visible: () => g(S) });
    }
  });
  let z = Gt(e.enter), ee = Gt(e.enterFrom), ie = Gt(e.enterTo), K = Gt(e.entered), Q = Gt(e.leave), te = Gt(e.leaveFrom), de = Gt(e.leaveTo);
  ke(() => {
    rt(() => {
      if (N.value === "visible") {
        let ce = Ve(u);
        if (ce instanceof Comment && ce.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function me(ce) {
    let Ze = O.value && !m.value, we = Ve(u);
    !we || !(we instanceof HTMLElement) || Ze || (k.value = !0, d.value && i(), d.value || a(), ce(d.value ? Tl(we, z, ee, ie, K, (ve) => {
      k.value = !1, ve === As.Finished && l();
    }) : Tl(we, Q, te, de, K, (ve) => {
      k.value = !1, ve === As.Finished && (xr(F) || (N.value = "hidden", y(S), c()));
    })));
  }
  return ke(() => {
    yt([d], (ce, Ze, we) => {
      me(we), O.value = !1;
    }, { immediate: !0 });
  }), We(fi, F), ov(q(() => _t(N.value, { visible: Ge.Open, hidden: Ge.Closed }) | s.value)), () => {
    let { appear: ce, show: Ze, enter: we, enterFrom: ve, enterTo: I, entered: B, leave: ye, leaveFrom: Pe, leaveTo: Je, ...Ce } = e, Ke = { ref: u }, ut = { ...Ce, ...m.value && d.value && yo.isServer ? { class: $n([n.class, Ce.class, ...z, ...ee]) } : {} };
    return Xe({ theirProps: ut, ourProps: Ke, slot: {}, slots: o, attrs: n, features: qc, visible: N.value === "visible", name: "TransitionChild" });
  };
} }), Jv = Rs, Wc = ue({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let r = ci(), s = q(() => e.show === null && r !== null ? (r.value & Ge.Open) === Ge.Open : e.show);
  rt(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = Y(s.value ? "visible" : "hidden"), l = Kc(() => {
    i.value = "hidden";
  }), a = Y(!0), c = { show: s, appear: q(() => e.appear || !a.value) };
  return ke(() => {
    rt(() => {
      a.value = !1, s.value ? i.value = "visible" : xr(l) || (i.value = "hidden");
    });
  }), We(fi, l), We(ui, c), () => {
    let u = Dc(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return Xe({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [$e(Jv, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...u }, o.default)] }, attrs: {}, features: qc, visible: i.value === "visible", name: "Transition" });
  };
} });
const Gv = /* @__PURE__ */ D("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Yv = { class: "fixed inset-0 z-10 overflow-y-auto" }, Qv = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Xv = { class: "mt-3 sm:mt-5" }, Zv = { class: "mt-2" }, ey = { class: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3" }, ty = /* @__PURE__ */ ue({
  __name: "Modal",
  props: ["open"],
  setup(e) {
    const t = e;
    return (n, o) => (se(), at(fe(Wc), {
      as: "template",
      show: t.open
    }, {
      default: tt(() => [
        xe(fe(Mv), {
          as: "div",
          class: "relative z-10",
          onClose: o[0] || (o[0] = (r) => n.$emit("close"))
        }, {
          default: tt(() => [
            xe(fe(Rs), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: tt(() => [
                Gv
              ]),
              _: 1
            }),
            D("div", Yv, [
              D("div", Qv, [
                xe(fe(Rs), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: tt(() => [
                    xe(fe(jv), { class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6" }, {
                      default: tt(() => [
                        D("div", null, [
                          D("div", Xv, [
                            xe(fe(Bv), {
                              as: "h3",
                              class: "text-base font-semibold leading-6 text-gray-900"
                            }, {
                              default: tt(() => [
                                Pr(n.$slots, "title")
                              ]),
                              _: 3
                            }),
                            D("div", Zv, [
                              Pr(n.$slots, "body")
                            ])
                          ])
                        ]),
                        D("div", ey, [
                          Pr(n.$slots, "actions")
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
}), ny = /* @__PURE__ */ D("div", { class: "min-w-0 flex-1" }, [
  /* @__PURE__ */ D("h2", { class: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" }, " Page Builder ")
], -1), oy = { class: "px-4 sm:px-6 lg:px-8" }, ry = { class: "mt-8 flow-root" }, sy = { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, iy = { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, ly = { class: "min-w-full divide-y divide-gray-300" }, ay = /* @__PURE__ */ D("thead", null, [
  /* @__PURE__ */ D("tr", null, [
    /* @__PURE__ */ D("th", {
      scope: "col",
      class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
    }, " Page Name "),
    /* @__PURE__ */ D("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Page Slug "),
    /* @__PURE__ */ D("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Created At "),
    /* @__PURE__ */ D("th", {
      scope: "col",
      class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    }, " Updated At "),
    /* @__PURE__ */ D("th", {
      scope: "col",
      class: "relative py-3.5 pl-3 pr-4 sm:pr-0"
    }, [
      /* @__PURE__ */ D("span", { class: "sr-only" }, "Edit")
    ])
  ])
], -1), cy = { class: "divide-y divide-gray-200" }, uy = { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, fy = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, dy = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, py = { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, hy = { class: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, my = /* @__PURE__ */ D("h3", { class: "text-lg leading-6 font-medium text-gray-900" }, " Create New Page ", -1), gy = { class: "mt-2" }, vy = { class: "text-sm text-gray-500 flex flex-col gap-3" }, yy = /* @__PURE__ */ D("label", null, "Page Name", -1), Ey = ["onKeydown"], _y = /* @__PURE__ */ ue({
  __name: "Pages",
  setup(e) {
    const t = new br();
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
    return ke(() => {
      s();
    }), (c, u) => {
      const f = ba("router-link");
      return se(), Oe(Ne, null, [
        D("div", null, [
          D("div", { class: "md:flex md:items-center md:justify-between p-5" }, [
            ny,
            D("div", { class: "mt-4 flex md:ml-4 md:mt-0" }, [
              D("button", {
                onClick: l,
                type: "button",
                class: "ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              }, " Create New Page ")
            ])
          ]),
          D("div", oy, [
            D("div", ry, [
              D("div", sy, [
                D("div", iy, [
                  D("table", ly, [
                    ay,
                    D("tbody", cy, [
                      (se(!0), Oe(Ne, null, Sn(fe(o), (d) => (se(), Oe("tr", null, [
                        D("td", uy, Fe(d.title), 1),
                        D("td", fy, Fe(d.slug), 1),
                        D("td", dy, Fe(new Date(d.created_at).toLocaleDateString()) + " - " + Fe(new Date(d.created_at).toLocaleTimeString()), 1),
                        D("td", py, Fe(new Date(d.updated_at).toLocaleDateString()) + " - " + Fe(new Date(d.updated_at).toLocaleTimeString()), 1),
                        D("td", hy, [
                          xe(f, {
                            to: `/page-builder/pages/${d.slug}`,
                            class: "text-indigo-600 hover:text-indigo-900"
                          }, {
                            default: tt(() => [
                              Xs(" Edit ")
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
        xe(ty, {
          onClose: a,
          open: fe(r)
        }, {
          title: tt(() => [
            my
          ]),
          body: tt(() => [
            D("div", gy, [
              D("p", vy, [
                yy,
                Wo(D("input", {
                  "onUpdate:modelValue": u[0] || (u[0] = (d) => Te(n) ? n.value = d : n = d),
                  type: "text",
                  class: "w-full border border-gray-300 rounded-md",
                  onKeydown: Yd(i, ["enter"])
                }, null, 40, Ey), [
                  [Ha, fe(n)]
                ])
              ])
            ])
          ]),
          actions: tt(() => [
            D("button", {
              type: "button",
              class: "inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2",
              onClick: i
            }, " Create "),
            D("button", {
              type: "button",
              class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",
              onClick: u[1] || (u[1] = (d) => Te(r) ? r.value = !1 : r = !1),
              ref: "cancelButtonRef"
            }, " Cancel ", 512)
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
}), by = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, wy = {};
function Ny(e, t) {
  const n = ba("router-view");
  return se(), at(n);
}
const Oy = /* @__PURE__ */ by(wy, [["render", Ny]]), xy = { class: "grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8" }, Sy = { class: "text-center" }, Cy = { class: "text-base font-semibold text-indigo-600" }, Dy = { class: "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, Ty = { class: "mt-6 text-base leading-7 text-gray-600" }, Py = /* @__PURE__ */ ue({
  __name: "ErrorPage",
  setup(e) {
    const t = Fg(), n = parseInt(t.currentRoute.value.params.code), o = {
      403: {
        header: "Forbidden",
        subtitle: "Sorry, you don’t have access to this page."
      },
      404: {
        header: "Page not found",
        subtitle: "Sorry, we couldn’t find the page you’re looking for."
      },
      500: {
        header: "Internal server error",
        subtitle: "Sorry, something went wrong."
      },
      503: {
        header: "Service unavailable",
        subtitle: "Sorry, the service is unavailable."
      },
      504: {
        header: "Gateway timeout",
        subtitle: "Sorry, the gateway timed out."
      }
    }, r = o[n].header, s = o[n].subtitle;
    return (i, l) => (se(), Oe("main", xy, [
      D("div", Sy, [
        D("p", Cy, Fe(fe(n)), 1),
        D("h1", Dy, Fe(fe(r)), 1),
        D("p", Ty, Fe(fe(s)), 1)
      ])
    ]));
  }
}), $y = [
  { path: "/page-builder/pages", component: _y },
  { path: "/page-builder/pages/:slug", component: Xg },
  { path: "/page-builder/error/:code", component: Py, name: "error" }
], Ay = kg({
  history: Vm(),
  routes: $y
});
ep(Oy).use(Ay).mount("#app");
