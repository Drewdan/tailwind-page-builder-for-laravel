function Qe(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function Oo(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = X(o) ? qr(o) : Oo(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else {
    if (X(e))
      return e;
    if (H(e))
      return e;
  }
}
const Kr = /;(?![^(]*\))/g, Wr = /:([^]+)/, zr = /\/\*.*?\*\//gs;
function qr(e) {
  const t = {};
  return e.replace(zr, "").split(Kr).forEach((n) => {
    if (n) {
      const o = n.split(Wr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function qt(e) {
  let t = "";
  if (X(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = qt(e[n]);
      o && (t += o + " ");
    }
  else if (H(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Jr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Yr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Xr = /* @__PURE__ */ Qe(Jr), Zr = /* @__PURE__ */ Qe(Yr), Qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gr = /* @__PURE__ */ Qe(Qr);
function Is(e) {
  return !!e || e === "";
}
function ei(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Dn(e[o], t[o]);
  return n;
}
function Dn(e, t) {
  if (e === t)
    return !0;
  let n = Xo(e), o = Xo(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = jt(e), o = jt(t), n || o)
    return e === t;
  if (n = $(e), o = $(t), n || o)
    return n && o ? ei(e, t) : !1;
  if (n = H(e), o = H(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const i in e) {
      const c = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (c && !u || !c && u || !Dn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ti(e, t) {
  return e.findIndex((n) => Dn(n, t));
}
const Yo = (e) => X(e) ? e : e == null ? "" : $(e) || H(e) && (e.toString === Ps || !S(e.toString)) ? JSON.stringify(e, As, 2) : String(e), As = (e, t) => t && t.__v_isRef ? As(e, t.value) : lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : Vn(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : H(t) && !$(t) && !Fs(t) ? String(t) : t, K = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, wt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], se = () => {
}, Ms = () => !1, ni = /^on[^a-z]/, Jt = (e) => ni.test(e), _n = (e) => e.startsWith("onUpdate:"), Q = Object.assign, xo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, oi = Object.prototype.hasOwnProperty, R = (e, t) => oi.call(e, t), $ = Array.isArray, lt = (e) => Yt(e) === "[object Map]", Vn = (e) => Yt(e) === "[object Set]", Xo = (e) => Yt(e) === "[object Date]", S = (e) => typeof e == "function", X = (e) => typeof e == "string", jt = (e) => typeof e == "symbol", H = (e) => e !== null && typeof e == "object", wo = (e) => H(e) && S(e.then) && S(e.catch), Ps = Object.prototype.toString, Yt = (e) => Ps.call(e), Do = (e) => Yt(e).slice(8, -1), Fs = (e) => Yt(e) === "[object Object]", Vo = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ Qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), si = /* @__PURE__ */ Qe("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ri = /-(\w)/g, Ie = Cn((e) => e.replace(ri, (t, n) => n ? n.toUpperCase() : "")), ii = /\B([A-Z])/g, Ye = Cn((e) => e.replace(ii, "-$1").toLowerCase()), ht = Cn((e) => e.charAt(0).toUpperCase() + e.slice(1)), tt = Cn((e) => e ? `on${ht(e)}` : ""), kt = (e, t) => !Object.is(e, t), Nt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, En = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Lt = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Zo;
const Rs = () => Zo || (Zo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ve;
class li {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Ve, !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Ve;
      try {
        return Ve = this, t();
      } finally {
        Ve = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Gn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ve = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ve = this.parent;
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
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function ci(e, t = Ve) {
  t && t.active && t.effects.push(e);
}
const Ht = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, js = (e) => (e.w & Xe) > 0, ks = (e) => (e.n & Xe) > 0, ui = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Xe;
}, fi = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      js(s) && !ks(s) ? s.delete(e) : t[n++] = s, s.w &= ~Xe, s.n &= ~Xe;
    }
    t.length = n;
  }
}, eo = /* @__PURE__ */ new WeakMap();
let It = 0, Xe = 1;
const to = 30;
let ae;
const ct = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), no = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Co {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ci(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ae, n = Je;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ae, ae = this, Je = !0, Xe = 1 << ++It, It <= to ? ui(this) : Qo(this), this.fn();
    } finally {
      It <= to && fi(this), Xe = 1 << --It, ae = this.parent, Je = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ae === this ? this.deferStop = !0 : this.active && (Qo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Qo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Je = !0;
const Ls = [];
function mt() {
  Ls.push(Je), Je = !1;
}
function _t() {
  const e = Ls.pop();
  Je = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (Je && ae) {
    let o = eo.get(e);
    o || eo.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Ht());
    const r = process.env.NODE_ENV !== "production" ? { effect: ae, target: e, type: t, key: n } : void 0;
    oo(s, r);
  }
}
function oo(e, t) {
  let n = !1;
  It <= to ? ks(e) || (e.n |= Xe, n = !js(e)) : n = !e.has(ae), n && (e.add(ae), ae.deps.push(e), process.env.NODE_ENV !== "production" && ae.onTrack && ae.onTrack(Object.assign({ effect: ae }, t)));
}
function Le(e, t, n, o, s, r) {
  const i = eo.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && $(e)) {
    const a = Lt(o);
    i.forEach((g, d) => {
      (d === "length" || d >= a) && c.push(g);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        $(e) ? Vo(n) && c.push(i.get("length")) : (c.push(i.get(ct)), lt(e) && c.push(i.get(no)));
        break;
      case "delete":
        $(e) || (c.push(i.get(ct)), lt(e) && c.push(i.get(no)));
        break;
      case "set":
        lt(e) && c.push(i.get(ct));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? Ot(c[0], u) : Ot(c[0]));
  else {
    const a = [];
    for (const g of c)
      g && a.push(...g);
    process.env.NODE_ENV !== "production" ? Ot(Ht(a), u) : Ot(Ht(a));
  }
}
function Ot(e, t) {
  const n = $(e) ? e : [...e];
  for (const o of n)
    o.computed && Go(o, t);
  for (const o of n)
    o.computed || Go(o, t);
}
function Go(e, t) {
  (e !== ae || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Q({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ai = /* @__PURE__ */ Qe("__proto__,__v_isRef,__isVue"), Hs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(jt)
), di = /* @__PURE__ */ Tn(), pi = /* @__PURE__ */ Tn(!1, !0), hi = /* @__PURE__ */ Tn(!0), gi = /* @__PURE__ */ Tn(!0, !0), es = /* @__PURE__ */ mi();
function mi() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = M(this);
      for (let r = 0, i = this.length; r < i; r++)
        me(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(M)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      mt();
      const o = M(this)[t].apply(this, n);
      return _t(), o;
    };
  }), e;
}
function Tn(e = !1, t = !1) {
  return function(o, s, r) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && r === (e ? t ? Ys : Js : t ? qs : zs).get(o))
      return o;
    const i = $(o);
    if (!e && i && R(es, s))
      return Reflect.get(es, s, r);
    const c = Reflect.get(o, s, r);
    return (jt(s) ? Hs.has(s) : ai(s)) || (e || me(o, "get", s), t) ? c : ne(c) ? i && Vo(s) ? c : c.value : H(c) ? e ? Xs(c) : $o(c) : c;
  };
}
const _i = /* @__PURE__ */ Us(), Ei = /* @__PURE__ */ Us(!0);
function Us(e = !1) {
  return function(n, o, s, r) {
    let i = n[o];
    if (Ze(i) && ne(i) && !ne(s))
      return !1;
    if (!e && (!vn(s) && !Ze(s) && (i = M(i), s = M(s)), !$(n) && ne(i) && !ne(s)))
      return i.value = s, !0;
    const c = $(n) && Vo(o) ? Number(o) < n.length : R(n, o), u = Reflect.set(n, o, s, r);
    return n === M(r) && (c ? kt(s, i) && Le(n, "set", o, s, i) : Le(n, "add", o, s)), u;
  };
}
function vi(e, t) {
  const n = R(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && Le(e, "delete", t, void 0, o), s;
}
function bi(e, t) {
  const n = Reflect.has(e, t);
  return (!jt(t) || !Hs.has(t)) && me(e, "has", t), n;
}
function Ni(e) {
  return me(e, "iterate", $(e) ? "length" : ct), Reflect.ownKeys(e);
}
const Bs = {
  get: di,
  set: _i,
  deleteProperty: vi,
  has: bi,
  ownKeys: Ni
}, Ks = {
  get: hi,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Gn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Gn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, yi = /* @__PURE__ */ Q({}, Bs, {
  get: pi,
  set: Ei
}), Oi = /* @__PURE__ */ Q({}, Ks, {
  get: gi
}), To = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function nn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = M(e), r = M(t);
  n || (t !== r && me(s, "get", t), me(s, "get", r));
  const { has: i } = $n(s), c = o ? To : n ? So : Ut;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, r))
    return c(e.get(r));
  e !== s && e.get(t);
}
function on(e, t = !1) {
  const n = this.__v_raw, o = M(n), s = M(e);
  return t || (e !== s && me(o, "has", e), me(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function sn(e, t = !1) {
  return e = e.__v_raw, !t && me(M(e), "iterate", ct), Reflect.get(e, "size", e);
}
function ts(e) {
  e = M(e);
  const t = M(this);
  return $n(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function ns(e, t) {
  t = M(t);
  const n = M(this), { has: o, get: s } = $n(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Ws(n, o, e) : (e = M(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? kt(t, i) && Le(n, "set", e, t, i) : Le(n, "add", e, t), this;
}
function os(e) {
  const t = M(this), { has: n, get: o } = $n(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Ws(t, n, e) : (e = M(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && Le(t, "delete", e, void 0, r), i;
}
function ss() {
  const e = M(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? lt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Le(e, "clear", void 0, void 0, n), o;
}
function rn(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, c = M(i), u = t ? To : e ? So : Ut;
    return !e && me(c, "iterate", ct), i.forEach((a, g) => o.call(s, u(a), u(g), r));
  };
}
function ln(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = M(s), i = lt(r), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = s[e](...o), g = n ? To : t ? So : Ut;
    return !t && me(r, "iterate", u ? no : ct), {
      // iterator protocol
      next() {
        const { value: d, done: h } = a.next();
        return h ? { value: d, done: h } : {
          value: c ? [g(d[0]), g(d[1])] : g(d),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ke(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${ht(e)} operation ${n}failed: target is readonly.`, M(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function xi() {
  const e = {
    get(r) {
      return nn(this, r);
    },
    get size() {
      return sn(this);
    },
    has: on,
    add: ts,
    set: ns,
    delete: os,
    clear: ss,
    forEach: rn(!1, !1)
  }, t = {
    get(r) {
      return nn(this, r, !1, !0);
    },
    get size() {
      return sn(this);
    },
    has: on,
    add: ts,
    set: ns,
    delete: os,
    clear: ss,
    forEach: rn(!1, !0)
  }, n = {
    get(r) {
      return nn(this, r, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(r) {
      return on.call(this, r, !0);
    },
    add: Ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: rn(!0, !1)
  }, o = {
    get(r) {
      return nn(this, r, !0, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(r) {
      return on.call(this, r, !0);
    },
    add: Ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: rn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = ln(r, !1, !1), n[r] = ln(r, !0, !1), t[r] = ln(r, !1, !0), o[r] = ln(r, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [wi, Di, Vi, Ci] = /* @__PURE__ */ xi();
function Sn(e, t) {
  const n = t ? e ? Ci : Vi : e ? Di : wi;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(R(n, s) && s in o ? n : o, s, r);
}
const Ti = {
  get: /* @__PURE__ */ Sn(!1, !1)
}, $i = {
  get: /* @__PURE__ */ Sn(!1, !0)
}, Si = {
  get: /* @__PURE__ */ Sn(!0, !1)
}, Ii = {
  get: /* @__PURE__ */ Sn(!0, !0)
};
function Ws(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const s = Do(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const zs = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap();
function Ai(e) {
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
function Mi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ai(Do(e));
}
function $o(e) {
  return Ze(e) ? e : In(e, !1, Bs, Ti, zs);
}
function Pi(e) {
  return In(e, !1, yi, $i, qs);
}
function Xs(e) {
  return In(e, !0, Ks, Si, Js);
}
function xt(e) {
  return In(e, !0, Oi, Ii, Ys);
}
function In(e, t, n, o, s) {
  if (!H(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = Mi(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return s.set(e, c), c;
}
function ut(e) {
  return Ze(e) ? ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function vn(e) {
  return !!(e && e.__v_isShallow);
}
function so(e) {
  return ut(e) || Ze(e);
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Zs(e) {
  return En(e, "__v_skip", !0), e;
}
const Ut = (e) => H(e) ? $o(e) : e, So = (e) => H(e) ? Xs(e) : e;
function Qs(e) {
  Je && ae && (e = M(e), process.env.NODE_ENV !== "production" ? oo(e.dep || (e.dep = Ht()), {
    target: e,
    type: "get",
    key: "value"
  }) : oo(e.dep || (e.dep = Ht())));
}
function Gs(e, t) {
  e = M(e), e.dep && (process.env.NODE_ENV !== "production" ? Ot(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Ot(e.dep));
}
function ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function cn(e) {
  return Fi(e, !1);
}
function Fi(e, t) {
  return ne(e) ? e : new Ri(e, t);
}
class Ri {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : M(t), this._value = n ? t : Ut(t);
  }
  get value() {
    return Qs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || vn(t) || Ze(t);
    t = n ? t : M(t), kt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ut(t), Gs(this, t));
  }
}
function Io(e) {
  return ne(e) ? e.value : e;
}
const ji = {
  get: (e, t, n) => Io(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return ne(s) && !ne(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function er(e) {
  return ut(e) ? e : new Proxy(e, ji);
}
var tr;
class ki {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[tr] = !1, this._dirty = !0, this.effect = new Co(t, () => {
      this._dirty || (this._dirty = !0, Gs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = M(this);
    return Qs(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
tr = "__v_isReadonly";
function Li(e, t, n = !1) {
  let o, s;
  const r = S(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : se) : (o = e.get, s = e.set);
  const i = new ki(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const ft = [];
function an(e) {
  ft.push(e);
}
function dn() {
  ft.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  mt();
  const n = ft.length ? ft[ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Hi();
  if (o)
    ke(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: r }) => `at <${kn(n, r.type)}>`).join(`
`),
      s
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Ui(s)), console.warn(...r);
  }
  _t();
}
function Hi() {
  let e = ft[ft.length - 1];
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
function Ui(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Bi(n));
  }), t;
}
function Bi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${kn(e.component, e.type, o)}`, r = ">" + n;
  return e.props ? [s, ...Ki(e.props), r] : [s + r];
}
function Ki(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...nr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function nr(e, t, n) {
  return X(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ne(t) ? (t = nr(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : S(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const Ao = {
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
function ke(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    An(r, t, n);
  }
  return s;
}
function Ee(e, t, n, o) {
  if (S(e)) {
    const r = ke(e, t, n, o);
    return r && wo(r) && r.catch((i) => {
      An(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Ee(e[r], t, n, o));
  return s;
}
function An(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Ao[n] : n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let g = 0; g < a.length; g++)
          if (a[g](e, i, c) === !1)
            return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      ke(u, null, 10, [e, i, c]);
      return;
    }
  }
  Wi(e, n, s, o);
}
function Wi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Ao[t];
    if (n && an(n), b(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && dn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Bt = !1, ro = !1;
const le = [];
let Te = 0;
const Dt = [];
let Ce = null, We = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Mo = null;
const zi = 100;
function qi(e) {
  const t = Mo || or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ji(e) {
  let t = Te + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Kt(le[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Mn(e) {
  (!le.length || !le.includes(e, Bt && e.allowRecurse ? Te + 1 : Te)) && (e.id == null ? le.push(e) : le.splice(Ji(e.id), 0, e), sr());
}
function sr() {
  !Bt && !ro && (ro = !0, Mo = or.then(lr));
}
function Yi(e) {
  const t = le.indexOf(e);
  t > Te && le.splice(t, 1);
}
function rr(e) {
  $(e) ? Dt.push(...e) : (!Ce || !Ce.includes(e, e.allowRecurse ? We + 1 : We)) && Dt.push(e), sr();
}
function rs(e, t = Bt ? Te + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < le.length; t++) {
    const n = le[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Po(e, n))
        continue;
      le.splice(t, 1), t--, n();
    }
  }
}
function ir(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)];
    if (Dt.length = 0, Ce) {
      Ce.push(...t);
      return;
    }
    for (Ce = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ce.sort((n, o) => Kt(n) - Kt(o)), We = 0; We < Ce.length; We++)
      process.env.NODE_ENV !== "production" && Po(e, Ce[We]) || Ce[We]();
    Ce = null, We = 0;
  }
}
const Kt = (e) => e.id == null ? 1 / 0 : e.id, Xi = (e, t) => {
  const n = Kt(e) - Kt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function lr(e) {
  ro = !1, Bt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), le.sort(Xi);
  const t = process.env.NODE_ENV !== "production" ? (n) => Po(e, n) : se;
  try {
    for (Te = 0; Te < le.length; Te++) {
      const n = le[Te];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        ke(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    Te = 0, le.length = 0, ir(e), Bt = !1, Mo = null, (le.length || Dt.length) && lr(e);
  }
}
function Po(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > zi) {
      const o = t.ownerInstance, s = o && Bo(o.type);
      return b(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let at = !1;
const yt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Rs().__VUE_HMR_RUNTIME__ = {
  createRecord: Kn(cr),
  rerender: Kn(Gi),
  reload: Kn(el)
});
const gt = /* @__PURE__ */ new Map();
function Zi(e) {
  const t = e.type.__hmrId;
  let n = gt.get(t);
  n || (cr(t, e.type), n = gt.get(t)), n.instances.add(e);
}
function Qi(e) {
  gt.get(e.type.__hmrId).instances.delete(e);
}
function cr(e, t) {
  return gt.has(e) ? !1 : (gt.set(e, {
    initialDef: Mt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Mt(e) {
  return Lr(e) ? e.__vccOpts : e;
}
function Gi(e, t) {
  const n = gt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Mt(o.type).render = t), o.renderCache = [], at = !0, o.update(), at = !1;
  }));
}
function el(e, t) {
  const n = gt.get(e);
  if (!n)
    return;
  t = Mt(t), is(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Mt(s.type);
    yt.has(r) || (r !== n.initialDef && is(r, t), yt.add(r)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (yt.add(r), s.ceReload(t.styles), yt.delete(r)) : s.parent ? Mn(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  rr(() => {
    for (const s of o)
      yt.delete(Mt(s.type));
  });
}
function is(e, t) {
  Q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Kn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let $e, At = [], io = !1;
function Xt(e, ...t) {
  $e ? $e.emit(e, ...t) : io || At.push({ event: e, args: t });
}
function ur(e, t) {
  var n, o;
  $e = e, $e ? ($e.enabled = !0, At.forEach(({ event: s, args: r }) => $e.emit(s, ...r)), At = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ur(r, t);
  }), setTimeout(() => {
    $e || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, io = !0, At = []);
  }, 3e3)) : (io = !0, At = []);
}
function tl(e, t) {
  Xt("app:init", e, t, {
    Fragment: ge,
    Text: Gt,
    Comment: re,
    Static: Ft
  });
}
function nl(e) {
  Xt("app:unmount", e);
}
const ol = /* @__PURE__ */ Fo(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), fr = /* @__PURE__ */ Fo(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), sl = /* @__PURE__ */ Fo(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), rl = (e) => {
  $e && typeof $e.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !$e.cleanupBuffer(e) && sl(e);
};
function Fo(e) {
  return (t) => {
    Xt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const il = /* @__PURE__ */ ar(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), ll = /* @__PURE__ */ ar(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function ar(e) {
  return (t, n, o) => {
    Xt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function cl(e, t, n) {
  Xt("component:emit", e.appContext.app, e, t, n);
}
function ul(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || K;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: g, propsOptions: [d] } = e;
    if (g)
      if (!(t in g))
        (!d || !(tt(t) in d)) && b(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${tt(t)}" prop.`);
      else {
        const h = g[t];
        S(h) && (h(...n) || b(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const g = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: h } = o[g] || K;
    h && (s = n.map((O) => X(O) ? O.trim() : O)), d && (s = n.map(Lt));
  }
  if (process.env.NODE_ENV !== "production" && cl(e, t, s), process.env.NODE_ENV !== "production") {
    const g = t.toLowerCase();
    g !== t && o[tt(g)] && b(`Event "${g}" is emitted in component ${kn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ye(t)}" instead of "${t}".`);
  }
  let c, u = o[c = tt(t)] || // also try camelCase event handler (#2249)
  o[c = tt(Ie(t))];
  !u && r && (u = o[c = tt(Ye(t))]), u && Ee(u, e, 6, s);
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ee(a, e, 6, s);
  }
}
function dr(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, c = !1;
  if (!S(e)) {
    const u = (a) => {
      const g = dr(a, t, !0);
      g && (c = !0, Q(i, g));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (H(e) && o.set(e, null), null) : ($(r) ? r.forEach((u) => i[u] = null) : Q(i, r), H(e) && o.set(e, i), i);
}
function Pn(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, Ye(t)) || R(e, t));
}
let de = null, pr = null;
function bn(e) {
  const t = de;
  return de = e, pr = e && e.type.__scopeId || null, t;
}
function fl(e, t = de, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Es(-1);
    const r = bn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      bn(r), o._d && Es(1);
    }
    return process.env.NODE_ENV !== "production" && fr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let lo = !1;
function Nn() {
  lo = !0;
}
function Wn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: s, props: r, propsOptions: [i], slots: c, attrs: u, emit: a, render: g, renderCache: d, data: h, setupState: O, ctx: T, inheritAttrs: V } = e;
  let U, G;
  const Z = bn(e);
  process.env.NODE_ENV !== "production" && (lo = !1);
  try {
    if (n.shapeFlag & 4) {
      const W = s || o;
      U = be(g.call(W, W, d, r, O, h, T)), G = u;
    } else {
      const W = t;
      process.env.NODE_ENV !== "production" && u === r && Nn(), U = be(W.length > 1 ? W(r, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return Nn(), u;
        },
        slots: c,
        emit: a
      } : { attrs: u, slots: c, emit: a }) : W(
        r,
        null
        /* we know it doesn't need it */
      )), G = t.props ? u : dl(u);
    }
  } catch (W) {
    Rt.length = 0, An(
      W,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), U = Se(re);
  }
  let J = U, P;
  if (process.env.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && ([J, P] = al(U)), G && V !== !1) {
    const W = Object.keys(G), { shapeFlag: ye } = J;
    if (W.length) {
      if (ye & 7)
        i && W.some(_n) && (G = pl(G, i)), J = Ae(J, G);
      else if (process.env.NODE_ENV !== "production" && !lo && J.type !== re) {
        const Oe = Object.keys(u), F = [], q = [];
        for (let Y = 0, ie = Oe.length; Y < ie; Y++) {
          const oe = Oe[Y];
          Jt(oe) ? _n(oe) || F.push(oe[2].toLowerCase() + oe.slice(3)) : q.push(oe);
        }
        q.length && b(`Extraneous non-props attributes (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), F.length && b(`Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !ls(J) && b("Runtime directive used on component with non-element root node. The directives will not function as intended."), J = Ae(J), J.dirs = J.dirs ? J.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !ls(J) && b("Component inside <Transition> renders non-element root node that cannot be animated."), J.transition = n.transition), process.env.NODE_ENV !== "production" && P ? P(J) : U = J, bn(Z), U;
}
const al = (e) => {
  const t = e.children, n = e.dynamicChildren, o = hr(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (c) => {
    t[s] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [be(o), i];
};
function hr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Ho(o)) {
      if (o.type !== re || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const dl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pl = (e, t) => {
  const n = {};
  for (const o in e)
    (!_n(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ls = (e) => e.shapeFlag & 7 || e.type === re;
function hl(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: c, patchFlag: u } = t, a = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || c) && at || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? cs(o, i, a) : !!i;
    if (u & 8) {
      const g = t.dynamicProps;
      for (let d = 0; d < g.length; d++) {
        const h = g[d];
        if (i[h] !== o[h] && !Pn(a, h))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? cs(o, i, a) : !0 : !!i;
  return !1;
}
function cs(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Pn(n, r))
      return !0;
  }
  return !1;
}
function gl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const ml = (e) => e.__isSuspense;
function _l(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : rr(e);
}
function El(e, t) {
  if (!te)
    process.env.NODE_ENV !== "production" && b("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const o = te || de;
  if (o) {
    const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && S(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const un = {};
function zn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !S(t) && b("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), gr(e, t, n);
}
function gr(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = K) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (P) => {
    b("Invalid watch source: ", P, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = te;
  let a, g = !1, d = !1;
  if (ne(e) ? (a = () => e.value, g = vn(e)) : ut(e) ? (a = () => e, o = !0) : $(e) ? (d = !0, g = e.some((P) => ut(P) || vn(P)), a = () => e.map((P) => {
    if (ne(P))
      return P.value;
    if (ut(P))
      return it(P);
    if (S(P))
      return ke(
        P,
        u,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && c(P);
  })) : S(e) ? t ? a = () => ke(
    e,
    u,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : a = () => {
    if (!(u && u.isUnmounted))
      return h && h(), Ee(e, u, 3, [O]);
  } : (a = se, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const P = a;
    a = () => it(P());
  }
  let h, O = (P) => {
    h = Z.onStop = () => {
      ke(
        P,
        u,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, T;
  if (zt)
    if (O = se, t ? n && Ee(t, u, 3, [
      a(),
      d ? [] : void 0,
      O
    ]) : a(), s === "sync") {
      const P = wc();
      T = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return se;
  let V = d ? new Array(e.length).fill(un) : un;
  const U = () => {
    if (Z.active)
      if (t) {
        const P = Z.run();
        (o || g || (d ? P.some((W, ye) => kt(W, V[ye])) : kt(P, V))) && (h && h(), Ee(t, u, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          V === un ? void 0 : d && V[0] === un ? [] : V,
          O
        ]), V = P);
      } else
        Z.run();
  };
  U.allowRecurse = !!t;
  let G;
  s === "sync" ? G = U : s === "post" ? G = () => he(U, u && u.suspense) : (U.pre = !0, u && (U.id = u.uid), G = () => Mn(U));
  const Z = new Co(a, G);
  process.env.NODE_ENV !== "production" && (Z.onTrack = r, Z.onTrigger = i), t ? n ? U() : V = Z.run() : s === "post" ? he(Z.run.bind(Z), u && u.suspense) : Z.run();
  const J = () => {
    Z.stop(), u && u.scope && xo(u.scope.effects, Z);
  };
  return T && T.push(J), J;
}
function vl(e, t, n) {
  const o = this.proxy, s = X(e) ? e.includes(".") ? mr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  S(t) ? r = t : (r = t.handler, n = t);
  const i = te;
  Ct(this);
  const c = gr(s, r.bind(o), n);
  return i ? Ct(i) : pt(), c;
}
function mr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function it(e, t) {
  if (!H(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ne(e))
    it(e.value, t);
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      it(e[n], t);
  else if (Vn(e) || lt(e))
    e.forEach((n) => {
      it(n, t);
    });
  else if (Fs(e))
    for (const n in e)
      it(e[n], t);
  return e;
}
function bl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ro(() => {
    e.isMounted = !0;
  }), br(() => {
    e.isUnmounting = !0;
  }), e;
}
const _e = [Function, Array], Nl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: _e,
    onEnter: _e,
    onAfterEnter: _e,
    onEnterCancelled: _e,
    // leave
    onBeforeLeave: _e,
    onLeave: _e,
    onAfterLeave: _e,
    onLeaveCancelled: _e,
    // appear
    onBeforeAppear: _e,
    onAppear: _e,
    onAfterAppear: _e,
    onAppearCancelled: _e
  },
  setup(e, { slots: t }) {
    const n = _c(), o = bl();
    let s;
    return () => {
      const r = t.default && Er(t.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        let V = !1;
        for (const U of r)
          if (U.type !== re) {
            if (process.env.NODE_ENV !== "production" && V) {
              b("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = U, V = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const c = M(e), { mode: u } = c;
      if (process.env.NODE_ENV !== "production" && u && u !== "in-out" && u !== "out-in" && u !== "default" && b(`invalid <transition> mode: ${u}`), o.isLeaving)
        return qn(i);
      const a = us(i);
      if (!a)
        return qn(i);
      const g = co(a, c, o, n);
      uo(a, g);
      const d = n.subTree, h = d && us(d);
      let O = !1;
      const { getTransitionKey: T } = a.type;
      if (T) {
        const V = T();
        s === void 0 ? s = V : V !== s && (s = V, O = !0);
      }
      if (h && h.type !== re && (!ot(a, h) || O)) {
        const V = co(h, c, o, n);
        if (uo(h, V), u === "out-in")
          return o.isLeaving = !0, V.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, qn(i);
        u === "in-out" && a.type !== re && (V.delayLeave = (U, G, Z) => {
          const J = _r(o, h);
          J[String(h.key)] = h, U._leaveCb = () => {
            G(), U._leaveCb = void 0, delete g.delayedLeave;
          }, g.delayedLeave = Z;
        });
      }
      return i;
    };
  }
}, yl = Nl;
function _r(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function co(e, t, n, o) {
  const { appear: s, mode: r, persisted: i = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: a, onEnterCancelled: g, onBeforeLeave: d, onLeave: h, onAfterLeave: O, onLeaveCancelled: T, onBeforeAppear: V, onAppear: U, onAfterAppear: G, onAppearCancelled: Z } = t, J = String(e.key), P = _r(n, e), W = (F, q) => {
    F && Ee(F, o, 9, q);
  }, ye = (F, q) => {
    const Y = q[1];
    W(F, q), $(F) ? F.every((ie) => ie.length <= 1) && Y() : F.length <= 1 && Y();
  }, Oe = {
    mode: r,
    persisted: i,
    beforeEnter(F) {
      let q = c;
      if (!n.isMounted)
        if (s)
          q = V || c;
        else
          return;
      F._leaveCb && F._leaveCb(
        !0
        /* cancelled */
      );
      const Y = P[J];
      Y && ot(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), W(q, [F]);
    },
    enter(F) {
      let q = u, Y = a, ie = g;
      if (!n.isMounted)
        if (s)
          q = U || u, Y = G || a, ie = Z || g;
        else
          return;
      let oe = !1;
      const Me = F._enterCb = (en) => {
        oe || (oe = !0, en ? W(ie, [F]) : W(Y, [F]), Oe.delayedLeave && Oe.delayedLeave(), F._enterCb = void 0);
      };
      q ? ye(q, [F, Me]) : Me();
    },
    leave(F, q) {
      const Y = String(e.key);
      if (F._enterCb && F._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return q();
      W(d, [F]);
      let ie = !1;
      const oe = F._leaveCb = (Me) => {
        ie || (ie = !0, q(), Me ? W(T, [F]) : W(O, [F]), F._leaveCb = void 0, P[Y] === e && delete P[Y]);
      };
      P[Y] = e, h ? ye(h, [F, oe]) : oe();
    },
    clone(F) {
      return co(F, t, n, o);
    }
  };
  return Oe;
}
function qn(e) {
  if (Qt(e))
    return e = Ae(e), e.children = null, e;
}
function us(e) {
  return Qt(e) ? e.children ? e.children[0] : void 0 : e;
}
function uo(e, t) {
  e.shapeFlag & 6 && e.component ? uo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Er(e, t = !1, n) {
  let o = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ge ? (i.patchFlag & 128 && s++, o = o.concat(Er(i.children, t, c))) : (t || i.type !== re) && o.push(c != null ? Ae(i, { key: c }) : i);
  }
  if (s > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
function Zt(e) {
  return S(e) ? { setup: e, name: e.name } : e;
}
const hn = (e) => !!e.type.__asyncLoader, Qt = (e) => e.type.__isKeepAlive;
function Ol(e, t) {
  vr(e, "a", t);
}
function xl(e, t) {
  vr(e, "da", t);
}
function vr(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Fn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Qt(s.parent.vnode) && wl(o, t, n, s), s = s.parent;
  }
}
function wl(e, t, n, o) {
  const s = Fn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Nr(() => {
    xo(o[t], s);
  }, n);
}
function Fn(e, t, n = te, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      mt(), Ct(n);
      const c = Ee(t, n, e, i);
      return pt(), _t(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = tt(Ao[e].replace(/ hook$/, ""));
    b(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const He = (e) => (t, n = te) => (!zt || e === "sp") && Fn(e, (...o) => t(...o), n), Dl = He(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Ro = He(
  "m"
  /* LifecycleHooks.MOUNTED */
), Vl = He(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Cl = He(
  "u"
  /* LifecycleHooks.UPDATED */
), br = He(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Nr = He(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Tl = He(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), $l = He(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Sl = He(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Il(e, t = te) {
  Fn("ec", e, t);
}
function yr(e) {
  si(e) && b("Do not use built-in directive ids as custom directive id: " + e);
}
function Pt(e, t) {
  const n = de;
  if (n === null)
    return process.env.NODE_ENV !== "production" && b("withDirectives can only be used inside render functions."), e;
  const o = jn(n) || n.proxy, s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, c, u, a = K] = t[r];
    i && (S(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && it(c), s.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: a
    }));
  }
  return e;
}
function Ge(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    r && (c.oldValue = r[i].value);
    let u = c.dir[o];
    u && (mt(), Ee(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), _t());
  }
}
const fo = "components", Or = Symbol();
function Al(e) {
  return X(e) ? Ml(fo, e, !1) || e : e || Or;
}
function Ml(e, t, n = !0, o = !1) {
  const s = de || te;
  if (s) {
    const r = s.type;
    if (e === fo) {
      const c = Bo(
        r,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (c && (c === t || c === Ie(t) || c === ht(Ie(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      fs(s[e] || r[e], t) || // global registration
      fs(s.appContext[e], t)
    );
    if (!i && o)
      return r;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const c = e === fo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      b(`Failed to resolve ${e.slice(0, -1)}: ${t}${c}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && b(`resolve${ht(e.slice(0, -1))} can only be used in render() or setup().`);
}
function fs(e, t) {
  return e && (e[t] || e[Ie(t)] || e[ht(Ie(t))]);
}
function ao(e, t, n, o) {
  let s;
  const r = n && n[o];
  if ($(e) || X(e)) {
    s = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      s[i] = t(e[i], i, void 0, r && r[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && b(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, r && r[i]);
  } else if (H(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, c) => t(i, c, void 0, r && r[c]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const a = i[c];
        s[c] = t(e[a], a, c, r && r[c]);
      }
    }
  else
    s = [];
  return n && (n[o] = s), s;
}
const po = (e) => e ? Rr(e) ? jn(e) || e.proxy : po(e.parent) : null, dt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? xt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? xt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? xt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? xt(e.refs) : e.refs,
    $parent: (e) => po(e.parent),
    $root: (e) => po(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ko(e),
    $forceUpdate: (e) => e.f || (e.f = () => Mn(e.update)),
    $nextTick: (e) => e.n || (e.n = qi.bind(e.proxy)),
    $watch: (e) => vl.bind(e)
  })
), jo = (e) => e === "_" || e === "$", Jn = (e, t) => e !== K && !e.__isScriptSetup && R(e, t), xr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const O = i[t];
      if (O !== void 0)
        switch (O) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Jn(o, t))
          return i[t] = 1, o[t];
        if (s !== K && R(s, t))
          return i[t] = 2, s[t];
        if ((a = e.propsOptions[0]) && R(a, t))
          return i[t] = 3, r[t];
        if (n !== K && R(n, t))
          return i[t] = 4, n[t];
        ho && (i[t] = 0);
      }
    }
    const g = dt[t];
    let d, h;
    if (g)
      return t === "$attrs" && (me(e, "get", t), process.env.NODE_ENV !== "production" && Nn()), g(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== K && R(n, t))
      return i[t] = 4, n[t];
    if (h = u.config.globalProperties, R(h, t))
      return h[t];
    process.env.NODE_ENV !== "production" && de && (!X(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== K && jo(t[0]) && R(s, t) ? b(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === de && b(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Jn(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && R(s, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && R(o, t) ? (o[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r } }, i) {
    let c;
    return !!n[i] || e !== K && R(e, i) || Jn(t, i) || (c = r[0]) && R(c, i) || R(o, i) || R(dt, i) || R(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (xr.ownKeys = (e) => (b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Pl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(dt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => dt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: se
    });
  }), t;
}
function Fl(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: se
    });
  });
}
function Rl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (jo(o[0])) {
        b(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: se
      });
    }
  });
}
function jl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? b(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ho = !0;
function kl(e) {
  const t = ko(e), n = e.proxy, o = e.ctx;
  ho = !1, t.beforeCreate && as(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: g,
    beforeMount: d,
    mounted: h,
    beforeUpdate: O,
    updated: T,
    activated: V,
    deactivated: U,
    beforeDestroy: G,
    beforeUnmount: Z,
    destroyed: J,
    unmounted: P,
    render: W,
    renderTracked: ye,
    renderTriggered: Oe,
    errorCaptured: F,
    serverPrefetch: q,
    // public API
    expose: Y,
    inheritAttrs: ie,
    // assets
    components: oe,
    directives: Me,
    filters: en
  } = t, Ue = process.env.NODE_ENV !== "production" ? jl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [k] = e.propsOptions;
    if (k)
      for (const L in k)
        Ue("Props", L);
  }
  if (a && Ll(a, o, Ue, e.appContext.config.unwrapInjectedRef), i)
    for (const k in i) {
      const L = i[k];
      S(L) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, k, {
        value: L.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[k] = L.bind(n), process.env.NODE_ENV !== "production" && Ue("Methods", k)) : process.env.NODE_ENV !== "production" && b(`Method "${k}" has type "${typeof L}" in the component definition. Did you reference the function correctly?`);
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !S(s) && b("The data option must be a function. Plain object usage is no longer supported.");
    const k = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && wo(k) && b("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !H(k))
      process.env.NODE_ENV !== "production" && b("data() should return an object.");
    else if (e.data = $o(k), process.env.NODE_ENV !== "production")
      for (const L in k)
        Ue("Data", L), jo(L[0]) || Object.defineProperty(o, L, {
          configurable: !0,
          enumerable: !0,
          get: () => k[L],
          set: se
        });
  }
  if (ho = !0, r)
    for (const k in r) {
      const L = r[k], xe = S(L) ? L.bind(n, n) : S(L.get) ? L.get.bind(n, n) : se;
      process.env.NODE_ENV !== "production" && xe === se && b(`Computed property "${k}" has no getter.`);
      const Ln = !S(L) && S(L.set) ? L.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        b(`Write operation failed: computed property "${k}" is readonly.`);
      } : se, Tt = Ko({
        get: xe,
        set: Ln
      });
      Object.defineProperty(o, k, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (Et) => Tt.value = Et
      }), process.env.NODE_ENV !== "production" && Ue("Computed", k);
    }
  if (c)
    for (const k in c)
      wr(c[k], o, n, k);
  if (u) {
    const k = S(u) ? u.call(n) : u;
    Reflect.ownKeys(k).forEach((L) => {
      El(L, k[L]);
    });
  }
  g && as(
    g,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function pe(k, L) {
    $(L) ? L.forEach((xe) => k(xe.bind(n))) : L && k(L.bind(n));
  }
  if (pe(Dl, d), pe(Ro, h), pe(Vl, O), pe(Cl, T), pe(Ol, V), pe(xl, U), pe(Il, F), pe(Sl, ye), pe($l, Oe), pe(br, Z), pe(Nr, P), pe(Tl, q), $(Y))
    if (Y.length) {
      const k = e.exposed || (e.exposed = {});
      Y.forEach((L) => {
        Object.defineProperty(k, L, {
          get: () => n[L],
          set: (xe) => n[L] = xe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  W && e.render === se && (e.render = W), ie != null && (e.inheritAttrs = ie), oe && (e.components = oe), Me && (e.directives = Me);
}
function Ll(e, t, n = se, o = !1) {
  $(e) && (e = go(e));
  for (const s in e) {
    const r = e[s];
    let i;
    H(r) ? "default" in r ? i = pn(
      r.from || s,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = pn(r.from || s) : i = pn(r), ne(i) ? o ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && b(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function as(e, t, n) {
  Ee($(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function wr(e, t, n, o) {
  const s = o.includes(".") ? mr(n, o) : () => n[o];
  if (X(e)) {
    const r = t[e];
    S(r) ? zn(s, r) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e}"`, r);
  } else if (S(e))
    zn(s, e.bind(n));
  else if (H(e))
    if ($(e))
      e.forEach((r) => wr(r, t, n, o));
    else {
      const r = S(e.handler) ? e.handler.bind(n) : t[e.handler];
      S(r) ? zn(s, r, e) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && b(`Invalid watch option: "${o}"`, e);
}
function ko(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach((a) => yn(u, a, i, !0)), yn(u, t, i)), H(t) && r.set(t, u), u;
}
function yn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && yn(e, r, n, !0), s && s.forEach((i) => yn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = Hl[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Hl = {
  data: ds,
  props: nt,
  emits: nt,
  // objects
  methods: nt,
  computed: nt,
  // lifecycle
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  // assets
  components: nt,
  directives: nt,
  // watch
  watch: Bl,
  // provide / inject
  provide: ds,
  inject: Ul
};
function ds(e, t) {
  return t ? e ? function() {
    return Q(S(e) ? e.call(this, this) : e, S(t) ? t.call(this, this) : t);
  } : t : e;
}
function Ul(e, t) {
  return nt(go(e), go(t));
}
function go(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nt(e, t) {
  return e ? Q(Q(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Bl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ue(e[o], t[o]);
  return n;
}
function Kl(e, t, n, o = !1) {
  const s = {}, r = {};
  En(r, Rn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Dr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && Cr(t || {}, s, e), n ? e.props = o ? s : Pi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Wl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function zl(e, t, n, o) {
  const { props: s, attrs: r, vnode: { patchFlag: i } } = e, c = M(s), [u] = e.propsOptions;
  let a = !1;
  if (// always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !(process.env.NODE_ENV !== "production" && Wl(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const g = e.vnode.dynamicProps;
      for (let d = 0; d < g.length; d++) {
        let h = g[d];
        if (Pn(e.emitsOptions, h))
          continue;
        const O = t[h];
        if (u)
          if (R(r, h))
            O !== r[h] && (r[h] = O, a = !0);
          else {
            const T = Ie(h);
            s[T] = mo(
              u,
              c,
              T,
              O,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          O !== r[h] && (r[h] = O, a = !0);
      }
    }
  } else {
    Dr(e, t, s, r) && (a = !0);
    let g;
    for (const d in c)
      (!t || !R(t, d) && ((g = Ye(d)) === d || !R(t, g))) && (u ? n && (n[d] !== void 0 || // for kebab-case
      n[g] !== void 0) && (s[d] = mo(
        u,
        c,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete s[d]);
    if (r !== c)
      for (const d in r)
        (!t || !R(t, d)) && (delete r[d], a = !0);
  }
  a && Le(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Cr(t || {}, s, e);
}
function Dr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (fn(u))
        continue;
      const a = t[u];
      let g;
      s && R(s, g = Ie(u)) ? !r || !r.includes(g) ? n[g] = a : (c || (c = {}))[g] = a : Pn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, i = !0);
    }
  if (r) {
    const u = M(n), a = c || K;
    for (let g = 0; g < r.length; g++) {
      const d = r[g];
      n[d] = mo(s, u, d, a[d], e, !R(a, d));
    }
  }
  return i;
}
function mo(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const c = R(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && S(u)) {
        const { propsDefaults: a } = s;
        n in a ? o = a[n] : (Ct(s), o = a[n] = u.call(null, t), pt());
      } else
        o = u;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (r && !c ? o = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Ye(n)) && (o = !0));
  }
  return o;
}
function Vr(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, c = [];
  let u = !1;
  if (!S(e)) {
    const g = (d) => {
      u = !0;
      const [h, O] = Vr(d, t, !0);
      Q(i, h), O && c.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!r && !u)
    return H(e) && o.set(e, wt), wt;
  if ($(r))
    for (let g = 0; g < r.length; g++) {
      process.env.NODE_ENV !== "production" && !X(r[g]) && b("props must be strings when using array syntax.", r[g]);
      const d = Ie(r[g]);
      ps(d) && (i[d] = K);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !H(r) && b("invalid props options", r);
    for (const g in r) {
      const d = Ie(g);
      if (ps(d)) {
        const h = r[g], O = i[d] = $(h) || S(h) ? { type: h } : Object.assign({}, h);
        if (O) {
          const T = gs(Boolean, O.type), V = gs(String, O.type);
          O[
            0
            /* BooleanFlags.shouldCast */
          ] = T > -1, O[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = V < 0 || T < V, (T > -1 || R(O, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [i, c];
  return H(e) && o.set(e, a), a;
}
function ps(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && b(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function _o(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function hs(e, t) {
  return _o(e) === _o(t);
}
function gs(e, t) {
  return $(t) ? t.findIndex((n) => hs(n, e)) : S(t) && hs(t, e) ? 0 : -1;
}
function Cr(e, t, n) {
  const o = M(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && ql(r, o[r], i, !R(e, r) && !R(e, Ye(r)));
  }
}
function ql(e, t, n, o) {
  const { type: s, required: r, validator: i } = n;
  if (r && o) {
    b('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (s != null && s !== !0) {
      let c = !1;
      const u = $(s) ? s : [s], a = [];
      for (let g = 0; g < u.length && !c; g++) {
        const { valid: d, expectedType: h } = Yl(t, u[g]);
        a.push(h || ""), c = d;
      }
      if (!c) {
        b(Xl(e, t, a));
        return;
      }
    }
    i && !i(t) && b('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Jl = /* @__PURE__ */ Qe("String,Number,Boolean,Function,Symbol,BigInt");
function Yl(e, t) {
  let n;
  const o = _o(t);
  if (Jl(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = H(e) : o === "Array" ? n = $(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Xl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ht).join(" | ")}`;
  const s = n[0], r = Do(t), i = ms(t, s), c = ms(t, r);
  return n.length === 1 && _s(s) && !Zl(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, _s(r) && (o += `with value ${c}.`), o;
}
function ms(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function _s(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Zl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Tr = (e) => e[0] === "_" || e === "$stable", Lo = (e) => $(e) ? e.map(be) : [be(e)], Ql = (e, t, n) => {
  if (t._n)
    return t;
  const o = fl((...s) => (process.env.NODE_ENV !== "production" && te && b(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Lo(t(...s))), n);
  return o._c = !1, o;
}, $r = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Tr(s))
      continue;
    const r = e[s];
    if (S(r))
      t[s] = Ql(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && b(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
      const i = Lo(r);
      t[s] = () => i;
    }
  }
}, Sr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Qt(e.vnode) && b("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Lo(t);
  e.slots.default = () => n;
}, Gl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = M(t), En(t, "_", n)) : $r(t, e.slots = {});
  } else
    e.slots = {}, t && Sr(e, t);
  En(e.slots, Rn, 1);
}, ec = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = K;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && at ? Q(s, t) : n && c === 1 ? r = !1 : (Q(s, t), !n && c === 1 && delete s._) : (r = !t.$stable, $r(t, s)), i = t;
  } else
    t && (Sr(e, t), i = { default: 1 });
  if (r)
    for (const c in s)
      !Tr(c) && !(c in i) && delete s[c];
};
function Ir() {
  return {
    app: null,
    config: {
      isNativeTag: Ms,
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
let tc = 0;
function nc(e, t) {
  return function(o, s = null) {
    S(o) || (o = Object.assign({}, o)), s != null && !H(s) && (process.env.NODE_ENV !== "production" && b("root props passed to app.mount() must be an object."), s = null);
    const r = Ir(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const u = r.app = {
      _uid: tc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Ns,
      get config() {
        return r.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && b("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...g) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && b("Plugin has already been applied to target app.") : a && S(a.install) ? (i.add(a), a.install(u, ...g)) : S(a) ? (i.add(a), a(u, ...g)) : process.env.NODE_ENV !== "production" && b('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(a) {
        return r.mixins.includes(a) ? process.env.NODE_ENV !== "production" && b("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : r.mixins.push(a), u;
      },
      component(a, g) {
        return process.env.NODE_ENV !== "production" && vo(a, r.config), g ? (process.env.NODE_ENV !== "production" && r.components[a] && b(`Component "${a}" has already been registered in target app.`), r.components[a] = g, u) : r.components[a];
      },
      directive(a, g) {
        return process.env.NODE_ENV !== "production" && yr(a), g ? (process.env.NODE_ENV !== "production" && r.directives[a] && b(`Directive "${a}" has already been registered in target app.`), r.directives[a] = g, u) : r.directives[a];
      },
      mount(a, g, d) {
        if (c)
          process.env.NODE_ENV !== "production" && b("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && b("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const h = Se(o, s);
          return h.appContext = r, process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(Ae(h), a, d);
          }), g && t ? t(h, a) : e(h, a, d), c = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = h.component, tl(u, Ns)), jn(h.component) || h.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, nl(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && b("Cannot unmount an app that is not mounted.");
      },
      provide(a, g) {
        return process.env.NODE_ENV !== "production" && a in r.provides && b(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), r.provides[a] = g, u;
      }
    };
    return u;
  };
}
function Eo(e, t, n, o, s = !1) {
  if ($(e)) {
    e.forEach((h, O) => Eo(h, t && ($(t) ? t[O] : t), n, o, s));
    return;
  }
  if (hn(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? jn(o.component) || o.component.proxy : o.el, i = s ? null : r, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    b("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, g = c.refs === K ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== u && (X(a) ? (g[a] = null, R(d, a) && (d[a] = null)) : ne(a) && (a.value = null)), S(u))
    ke(u, c, 12, [i, g]);
  else {
    const h = X(u), O = ne(u);
    if (h || O) {
      const T = () => {
        if (e.f) {
          const V = h ? R(d, u) ? d[u] : g[u] : u.value;
          s ? $(V) && xo(V, r) : $(V) ? V.includes(r) || V.push(r) : h ? (g[u] = [r], R(d, u) && (d[u] = g[u])) : (u.value = [r], e.k && (g[e.k] = u.value));
        } else
          h ? (g[u] = i, R(d, u) && (d[u] = i)) : O ? (u.value = i, e.k && (g[e.k] = i)) : process.env.NODE_ENV !== "production" && b("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (T.id = -1, he(T, n)) : T();
    } else
      process.env.NODE_ENV !== "production" && b("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let St, qe;
function Fe(e, t) {
  e.appContext.config.performance && On() && qe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && il(e, t, On() ? qe.now() : Date.now());
}
function Re(e, t) {
  if (e.appContext.config.performance && On()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    qe.mark(o), qe.measure(`<${kn(e, e.type)}> ${t}`, n, o), qe.clearMarks(n), qe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && ll(e, t, On() ? qe.now() : Date.now());
}
function On() {
  return St !== void 0 || (typeof window < "u" && window.performance ? (St = !0, qe = window.performance) : St = !1), St;
}
function oc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const he = _l;
function sc(e) {
  return rc(e);
}
function rc(e, t) {
  oc();
  const n = Rs();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && ur(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: s, patchProp: r, createElement: i, createText: c, createComment: u, setText: a, setElementText: g, parentNode: d, nextSibling: h, setScopeId: O = se, insertStaticContent: T } = e, V = (l, f, p, _ = null, m = null, N = null, x = !1, v = null, y = process.env.NODE_ENV !== "production" && at ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !ot(l, f) && (_ = tn(l), Be(l, m, N, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: E, ref: D, shapeFlag: w } = f;
    switch (E) {
      case Gt:
        U(l, f, p, _);
        break;
      case re:
        G(l, f, p, _);
        break;
      case Ft:
        l == null ? Z(f, p, _, x) : process.env.NODE_ENV !== "production" && J(l, f, p, x);
        break;
      case ge:
        Me(l, f, p, _, m, N, x, v, y);
        break;
      default:
        w & 1 ? ye(l, f, p, _, m, N, x, v, y) : w & 6 ? en(l, f, p, _, m, N, x, v, y) : w & 64 || w & 128 ? E.process(l, f, p, _, m, N, x, v, y, vt) : process.env.NODE_ENV !== "production" && b("Invalid VNode type:", E, `(${typeof E})`);
    }
    D != null && m && Eo(D, l && l.ref, N, f || l, !f);
  }, U = (l, f, p, _) => {
    if (l == null)
      o(f.el = c(f.children), p, _);
    else {
      const m = f.el = l.el;
      f.children !== l.children && a(m, f.children);
    }
  }, G = (l, f, p, _) => {
    l == null ? o(f.el = u(f.children || ""), p, _) : f.el = l.el;
  }, Z = (l, f, p, _) => {
    [l.el, l.anchor] = T(l.children, f, p, _, l.el, l.anchor);
  }, J = (l, f, p, _) => {
    if (f.children !== l.children) {
      const m = h(l.anchor);
      W(l), [f.el, f.anchor] = T(f.children, p, m, _);
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, P = ({ el: l, anchor: f }, p, _) => {
    let m;
    for (; l && l !== f; )
      m = h(l), o(l, p, _), l = m;
    o(f, p, _);
  }, W = ({ el: l, anchor: f }) => {
    let p;
    for (; l && l !== f; )
      p = h(l), s(l), l = p;
    s(f);
  }, ye = (l, f, p, _, m, N, x, v, y) => {
    x = x || f.type === "svg", l == null ? Oe(f, p, _, m, N, x, v, y) : Y(l, f, m, N, x, v, y);
  }, Oe = (l, f, p, _, m, N, x, v) => {
    let y, E;
    const { type: D, props: w, shapeFlag: C, transition: I, dirs: j } = l;
    if (y = l.el = i(l.type, N, w && w.is, w), C & 8 ? g(y, l.children) : C & 16 && q(l.children, y, null, _, m, N && D !== "foreignObject", x, v), j && Ge(l, null, _, "created"), w) {
      for (const B in w)
        B !== "value" && !fn(B) && r(y, B, null, w[B], N, l.children, _, m, Pe);
      "value" in w && r(y, "value", null, w.value), (E = w.onVnodeBeforeMount) && De(E, _, l);
    }
    F(y, l, l.scopeId, x, _), process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), j && Ge(l, null, _, "beforeMount");
    const z = (!m || m && !m.pendingBranch) && I && !I.persisted;
    z && I.beforeEnter(y), o(y, f, p), ((E = w && w.onVnodeMounted) || z || j) && he(() => {
      E && De(E, _, l), z && I.enter(y), j && Ge(l, null, _, "mounted");
    }, m);
  }, F = (l, f, p, _, m) => {
    if (p && O(l, p), _)
      for (let N = 0; N < _.length; N++)
        O(l, _[N]);
    if (m) {
      let N = m.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = hr(N.children) || N), f === N) {
        const x = m.vnode;
        F(l, x, x.scopeId, x.slotScopeIds, m.parent);
      }
    }
  }, q = (l, f, p, _, m, N, x, v, y = 0) => {
    for (let E = y; E < l.length; E++) {
      const D = l[E] = v ? ze(l[E]) : be(l[E]);
      V(null, D, f, p, _, m, N, x, v);
    }
  }, Y = (l, f, p, _, m, N, x) => {
    const v = f.el = l.el;
    let { patchFlag: y, dynamicChildren: E, dirs: D } = f;
    y |= l.patchFlag & 16;
    const w = l.props || K, C = f.props || K;
    let I;
    p && et(p, !1), (I = C.onVnodeBeforeUpdate) && De(I, p, f, l), D && Ge(f, l, p, "beforeUpdate"), p && et(p, !0), process.env.NODE_ENV !== "production" && at && (y = 0, x = !1, E = null);
    const j = m && f.type !== "foreignObject";
    if (E ? (ie(l.dynamicChildren, E, v, p, _, j, N), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && gn(l, f)) : x || xe(l, f, v, null, p, _, j, N, !1), y > 0) {
      if (y & 16)
        oe(v, f, w, C, p, _, m);
      else if (y & 2 && w.class !== C.class && r(v, "class", null, C.class, m), y & 4 && r(v, "style", w.style, C.style, m), y & 8) {
        const z = f.dynamicProps;
        for (let B = 0; B < z.length; B++) {
          const ee = z[B], ve = w[ee], bt = C[ee];
          (bt !== ve || ee === "value") && r(v, ee, ve, bt, m, l.children, p, _, Pe);
        }
      }
      y & 1 && l.children !== f.children && g(v, f.children);
    } else
      !x && E == null && oe(v, f, w, C, p, _, m);
    ((I = C.onVnodeUpdated) || D) && he(() => {
      I && De(I, p, f, l), D && Ge(f, l, p, "updated");
    }, _);
  }, ie = (l, f, p, _, m, N, x) => {
    for (let v = 0; v < f.length; v++) {
      const y = l[v], E = f[v], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && (y.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ot(y, E) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? d(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      V(y, E, D, null, _, m, N, x, !0);
    }
  }, oe = (l, f, p, _, m, N, x) => {
    if (p !== _) {
      if (p !== K)
        for (const v in p)
          !fn(v) && !(v in _) && r(l, v, p[v], null, x, f.children, m, N, Pe);
      for (const v in _) {
        if (fn(v))
          continue;
        const y = _[v], E = p[v];
        y !== E && v !== "value" && r(l, v, E, y, x, f.children, m, N, Pe);
      }
      "value" in _ && r(l, "value", p.value, _.value);
    }
  }, Me = (l, f, p, _, m, N, x, v, y) => {
    const E = f.el = l ? l.el : c(""), D = f.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: C, slotScopeIds: I } = f;
    process.env.NODE_ENV !== "production" && (at || w & 2048) && (w = 0, y = !1, C = null), I && (v = v ? v.concat(I) : I), l == null ? (o(E, p, _), o(D, p, _), q(f.children, p, D, m, N, x, v, y)) : w > 0 && w & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (ie(l.dynamicChildren, C, p, m, N, x, v), process.env.NODE_ENV !== "production" && m && m.type.__hmrId ? gn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && gn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : xe(l, f, p, D, m, N, x, v, y);
  }, en = (l, f, p, _, m, N, x, v, y) => {
    f.slotScopeIds = v, l == null ? f.shapeFlag & 512 ? m.ctx.activate(f, p, _, x, y) : Ue(f, p, _, m, N, x, y) : pe(l, f, y);
  }, Ue = (l, f, p, _, m, N, x) => {
    const v = l.component = mc(l, _, m);
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && Zi(v), process.env.NODE_ENV !== "production" && (an(l), Fe(v, "mount")), Qt(l) && (v.ctx.renderer = vt), process.env.NODE_ENV !== "production" && Fe(v, "init"), vc(v), process.env.NODE_ENV !== "production" && Re(v, "init"), v.asyncDep) {
      if (m && m.registerDep(v, k), !l.el) {
        const y = v.subTree = Se(re);
        G(null, y, f, p);
      }
      return;
    }
    k(v, l, f, p, m, N, x), process.env.NODE_ENV !== "production" && (dn(), Re(v, "mount"));
  }, pe = (l, f, p) => {
    const _ = f.component = l.component;
    if (hl(l, f, p))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && an(f), L(_, f, p), process.env.NODE_ENV !== "production" && dn();
        return;
      } else
        _.next = f, Yi(_.update), _.update();
    else
      f.el = l.el, _.vnode = f;
  }, k = (l, f, p, _, m, N, x) => {
    const v = () => {
      if (l.isMounted) {
        let { next: D, bu: w, u: C, parent: I, vnode: j } = l, z = D, B;
        process.env.NODE_ENV !== "production" && an(D || l.vnode), et(l, !1), D ? (D.el = j.el, L(l, D, x)) : D = j, w && Nt(w), (B = D.props && D.props.onVnodeBeforeUpdate) && De(B, I, D, j), et(l, !0), process.env.NODE_ENV !== "production" && Fe(l, "render");
        const ee = Wn(l);
        process.env.NODE_ENV !== "production" && Re(l, "render");
        const ve = l.subTree;
        l.subTree = ee, process.env.NODE_ENV !== "production" && Fe(l, "patch"), V(
          ve,
          ee,
          // parent may have changed if it's in a teleport
          d(ve.el),
          // anchor may have changed if it's in a fragment
          tn(ve),
          l,
          m,
          N
        ), process.env.NODE_ENV !== "production" && Re(l, "patch"), D.el = ee.el, z === null && gl(l, ee.el), C && he(C, m), (B = D.props && D.props.onVnodeUpdated) && he(() => De(B, I, D, j), m), process.env.NODE_ENV !== "production" && fr(l), process.env.NODE_ENV !== "production" && dn();
      } else {
        let D;
        const { el: w, props: C } = f, { bm: I, m: j, parent: z } = l, B = hn(f);
        if (et(l, !1), I && Nt(I), !B && (D = C && C.onVnodeBeforeMount) && De(D, z, f), et(l, !0), w && Bn) {
          const ee = () => {
            process.env.NODE_ENV !== "production" && Fe(l, "render"), l.subTree = Wn(l), process.env.NODE_ENV !== "production" && Re(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "hydrate"), Bn(w, l.subTree, l, m, null), process.env.NODE_ENV !== "production" && Re(l, "hydrate");
          };
          B ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && ee()
          ) : ee();
        } else {
          process.env.NODE_ENV !== "production" && Fe(l, "render");
          const ee = l.subTree = Wn(l);
          process.env.NODE_ENV !== "production" && Re(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "patch"), V(null, ee, p, _, l, m, N), process.env.NODE_ENV !== "production" && Re(l, "patch"), f.el = ee.el;
        }
        if (j && he(j, m), !B && (D = C && C.onVnodeMounted)) {
          const ee = f;
          he(() => De(D, z, ee), m);
        }
        (f.shapeFlag & 256 || z && hn(z.vnode) && z.vnode.shapeFlag & 256) && l.a && he(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && ol(l), f = p = _ = null;
      }
    }, y = l.effect = new Co(
      v,
      () => Mn(E),
      l.scope
      // track it in component's effect scope
    ), E = l.update = () => y.run();
    E.id = l.uid, et(l, !0), process.env.NODE_ENV !== "production" && (y.onTrack = l.rtc ? (D) => Nt(l.rtc, D) : void 0, y.onTrigger = l.rtg ? (D) => Nt(l.rtg, D) : void 0, E.ownerInstance = l), E();
  }, L = (l, f, p) => {
    f.component = l;
    const _ = l.vnode.props;
    l.vnode = f, l.next = null, zl(l, f.props, _, p), ec(l, f.children, p), mt(), rs(), _t();
  }, xe = (l, f, p, _, m, N, x, v, y = !1) => {
    const E = l && l.children, D = l ? l.shapeFlag : 0, w = f.children, { patchFlag: C, shapeFlag: I } = f;
    if (C > 0) {
      if (C & 128) {
        Tt(E, w, p, _, m, N, x, v, y);
        return;
      } else if (C & 256) {
        Ln(E, w, p, _, m, N, x, v, y);
        return;
      }
    }
    I & 8 ? (D & 16 && Pe(E, m, N), w !== E && g(p, w)) : D & 16 ? I & 16 ? Tt(E, w, p, _, m, N, x, v, y) : Pe(E, m, N, !0) : (D & 8 && g(p, ""), I & 16 && q(w, p, _, m, N, x, v, y));
  }, Ln = (l, f, p, _, m, N, x, v, y) => {
    l = l || wt, f = f || wt;
    const E = l.length, D = f.length, w = Math.min(E, D);
    let C;
    for (C = 0; C < w; C++) {
      const I = f[C] = y ? ze(f[C]) : be(f[C]);
      V(l[C], I, p, null, m, N, x, v, y);
    }
    E > D ? Pe(l, m, N, !0, !1, w) : q(f, p, _, m, N, x, v, y, w);
  }, Tt = (l, f, p, _, m, N, x, v, y) => {
    let E = 0;
    const D = f.length;
    let w = l.length - 1, C = D - 1;
    for (; E <= w && E <= C; ) {
      const I = l[E], j = f[E] = y ? ze(f[E]) : be(f[E]);
      if (ot(I, j))
        V(I, j, p, null, m, N, x, v, y);
      else
        break;
      E++;
    }
    for (; E <= w && E <= C; ) {
      const I = l[w], j = f[C] = y ? ze(f[C]) : be(f[C]);
      if (ot(I, j))
        V(I, j, p, null, m, N, x, v, y);
      else
        break;
      w--, C--;
    }
    if (E > w) {
      if (E <= C) {
        const I = C + 1, j = I < D ? f[I].el : _;
        for (; E <= C; )
          V(null, f[E] = y ? ze(f[E]) : be(f[E]), p, j, m, N, x, v, y), E++;
      }
    } else if (E > C)
      for (; E <= w; )
        Be(l[E], m, N, !0), E++;
    else {
      const I = E, j = E, z = /* @__PURE__ */ new Map();
      for (E = j; E <= C; E++) {
        const ce = f[E] = y ? ze(f[E]) : be(f[E]);
        ce.key != null && (process.env.NODE_ENV !== "production" && z.has(ce.key) && b("Duplicate keys found during update:", JSON.stringify(ce.key), "Make sure keys are unique."), z.set(ce.key, E));
      }
      let B, ee = 0;
      const ve = C - j + 1;
      let bt = !1, zo = 0;
      const $t = new Array(ve);
      for (E = 0; E < ve; E++)
        $t[E] = 0;
      for (E = I; E <= w; E++) {
        const ce = l[E];
        if (ee >= ve) {
          Be(ce, m, N, !0);
          continue;
        }
        let we;
        if (ce.key != null)
          we = z.get(ce.key);
        else
          for (B = j; B <= C; B++)
            if ($t[B - j] === 0 && ot(ce, f[B])) {
              we = B;
              break;
            }
        we === void 0 ? Be(ce, m, N, !0) : ($t[we - j] = E + 1, we >= zo ? zo = we : bt = !0, V(ce, f[we], p, null, m, N, x, v, y), ee++);
      }
      const qo = bt ? ic($t) : wt;
      for (B = qo.length - 1, E = ve - 1; E >= 0; E--) {
        const ce = j + E, we = f[ce], Jo = ce + 1 < D ? f[ce + 1].el : _;
        $t[E] === 0 ? V(null, we, p, Jo, m, N, x, v, y) : bt && (B < 0 || E !== qo[B] ? Et(
          we,
          p,
          Jo,
          2
          /* MoveType.REORDER */
        ) : B--);
      }
    }
  }, Et = (l, f, p, _, m = null) => {
    const { el: N, type: x, transition: v, children: y, shapeFlag: E } = l;
    if (E & 6) {
      Et(l.component.subTree, f, p, _);
      return;
    }
    if (E & 128) {
      l.suspense.move(f, p, _);
      return;
    }
    if (E & 64) {
      x.move(l, f, p, vt);
      return;
    }
    if (x === ge) {
      o(N, f, p);
      for (let w = 0; w < y.length; w++)
        Et(y[w], f, p, _);
      o(l.anchor, f, p);
      return;
    }
    if (x === Ft) {
      P(l, f, p);
      return;
    }
    if (_ !== 2 && E & 1 && v)
      if (_ === 0)
        v.beforeEnter(N), o(N, f, p), he(() => v.enter(N), m);
      else {
        const { leave: w, delayLeave: C, afterLeave: I } = v, j = () => o(N, f, p), z = () => {
          w(N, () => {
            j(), I && I();
          });
        };
        C ? C(N, j, z) : z();
      }
    else
      o(N, f, p);
  }, Be = (l, f, p, _ = !1, m = !1) => {
    const { type: N, props: x, ref: v, children: y, dynamicChildren: E, shapeFlag: D, patchFlag: w, dirs: C } = l;
    if (v != null && Eo(v, null, p, l, !0), D & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const I = D & 1 && C, j = !hn(l);
    let z;
    if (j && (z = x && x.onVnodeBeforeUnmount) && De(z, f, l), D & 6)
      Br(l.component, p, _);
    else {
      if (D & 128) {
        l.suspense.unmount(p, _);
        return;
      }
      I && Ge(l, null, f, "beforeUnmount"), D & 64 ? l.type.remove(l, f, p, m, vt, _) : E && (N !== ge || w > 0 && w & 64) ? Pe(E, f, p, !1, !0) : (N === ge && w & 384 || !m && D & 16) && Pe(y, f, p), _ && Hn(l);
    }
    (j && (z = x && x.onVnodeUnmounted) || I) && he(() => {
      z && De(z, f, l), I && Ge(l, null, f, "unmounted");
    }, p);
  }, Hn = (l) => {
    const { type: f, el: p, anchor: _, transition: m } = l;
    if (f === ge) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((x) => {
        x.type === re ? s(x.el) : Hn(x);
      }) : Ur(p, _);
      return;
    }
    if (f === Ft) {
      W(l);
      return;
    }
    const N = () => {
      s(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: x, delayLeave: v } = m, y = () => x(p, N);
      v ? v(l.el, N, y) : y();
    } else
      N();
  }, Ur = (l, f) => {
    let p;
    for (; l !== f; )
      p = h(l), s(l), l = p;
    s(f);
  }, Br = (l, f, p) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Qi(l);
    const { bum: _, scope: m, update: N, subTree: x, um: v } = l;
    _ && Nt(_), m.stop(), N && (N.active = !1, Be(x, l, f, p)), v && he(v, f), he(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && rl(l);
  }, Pe = (l, f, p, _ = !1, m = !1, N = 0) => {
    for (let x = N; x < l.length; x++)
      Be(l[x], f, p, _, m);
  }, tn = (l) => l.shapeFlag & 6 ? tn(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : h(l.anchor || l.el), Wo = (l, f, p) => {
    l == null ? f._vnode && Be(f._vnode, null, null, !0) : V(f._vnode || null, l, f, null, null, null, p), rs(), ir(), f._vnode = l;
  }, vt = {
    p: V,
    um: Be,
    m: Et,
    r: Hn,
    mt: Ue,
    mc: q,
    pc: xe,
    pbc: ie,
    n: tn,
    o: e
  };
  let Un, Bn;
  return t && ([Un, Bn] = t(vt)), {
    render: Wo,
    hydrate: Un,
    createApp: nc(Wo, Un)
  };
}
function et({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function gn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if ($(o) && $(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let c = s[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[r] = ze(s[r]), c.el = i.el), n || gn(i, c)), c.type === Gt && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === re && !c.el && (c.el = i.el);
    }
}
function ic(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < a ? r = c + 1 : i = c;
      a < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
const lc = (e) => e.__isTeleport, ge = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Gt = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), re = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Ft = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Rt = [];
let Ne = null;
function fe(e = !1) {
  Rt.push(Ne = e ? null : []);
}
function cc() {
  Rt.pop(), Ne = Rt[Rt.length - 1] || null;
}
let Wt = 1;
function Es(e) {
  Wt += e;
}
function Ar(e) {
  return e.dynamicChildren = Wt > 0 ? Ne || wt : null, cc(), Wt > 0 && Ne && Ne.push(e), e;
}
function je(e, t, n, o, s, r) {
  return Ar(A(
    e,
    t,
    n,
    o,
    s,
    r,
    !0
    /* isBlock */
  ));
}
function Vt(e, t, n, o, s) {
  return Ar(Se(
    e,
    t,
    n,
    o,
    s,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Ho(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && yt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const uc = (...e) => Pr(...e), Rn = "__vInternal", Mr = ({ key: e }) => e ?? null, mn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? X(e) || ne(e) || S(e) ? { i: de, r: e, k: t, f: !!n } : e : null;
function A(e, t = null, n = null, o = 0, s = null, r = e === ge ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mr(t),
    ref: t && mn(t),
    scopeId: pr,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return c ? (Uo(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= X(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && b("VNode created with invalid key (NaN). VNode type:", u.type), Wt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ne && (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ne.push(u), u;
}
const Se = process.env.NODE_ENV !== "production" ? uc : Pr;
function Pr(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Or) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = re), Ho(e)) {
    const c = Ae(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Uo(c, n), Wt > 0 && !r && Ne && (c.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = c : Ne.push(c)), c.patchFlag |= -2, c;
  }
  if (Lr(e) && (e = e.__vccOpts), t) {
    t = fc(t);
    let { class: c, style: u } = t;
    c && !X(c) && (t.class = qt(c)), H(u) && (so(u) && !$(u) && (u = Q({}, u)), t.style = Oo(u));
  }
  const i = X(e) ? 1 : ml(e) ? 128 : lc(e) ? 64 : H(e) ? 4 : S(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && so(e) && (e = M(e), b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), A(e, t, n, o, s, i, r, !0);
}
function fc(e) {
  return e ? so(e) || Rn in e ? Q({}, e) : e : null;
}
function Ae(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, c = t ? pc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Mr(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? $(s) ? s.concat(mn(t)) : [s, mn(t)] : mn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && $(i) ? i.map(Fr) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Ae(e.ssContent),
    ssFallback: e.ssFallback && Ae(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function Fr(e) {
  const t = Ae(e);
  return $(e.children) && (t.children = e.children.map(Fr)), t;
}
function ac(e = " ", t = 0) {
  return Se(Gt, null, e, t);
}
function dc(e, t) {
  const n = Se(Ft, null, e);
  return n.staticCount = t, n;
}
function Yn(e = "", t = !1) {
  return t ? (fe(), Vt(re, null, e)) : Se(re, null, e);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Se(re) : $(e) ? Se(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ze(e) : Se(Gt, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ae(e);
}
function Uo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Uo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Rn in t) ? t._ctx = de : s === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    S(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ac(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = qt([t.class, o.class]));
      else if (s === "style")
        t.style = Oo([t.style, o.style]);
      else if (Jt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !($(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function De(e, t, n, o = null) {
  Ee(e, t, 7, [
    n,
    o
  ]);
}
const hc = Ir();
let gc = 0;
function mc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || hc, r = {
    uid: gc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new li(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Vr(o, s),
    emitsOptions: dr(o, s),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = Pl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ul.bind(null, r), e.ce && e.ce(r), r;
}
let te = null;
const _c = () => te || de, Ct = (e) => {
  te = e, e.scope.on();
}, pt = () => {
  te && te.scope.off(), te = null;
}, Ec = /* @__PURE__ */ Qe("slot,component");
function vo(e, t) {
  const n = t.isNativeTag || Ms;
  (Ec(e) || n(e)) && b("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Rr(e) {
  return e.vnode.shapeFlag & 4;
}
let zt = !1;
function vc(e, t = !1) {
  zt = t;
  const { props: n, children: o } = e.vnode, s = Rr(e);
  Kl(e, n, s, t), Gl(e, o);
  const r = s ? bc(e, t) : void 0;
  return zt = !1, r;
}
function bc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && vo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        vo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        yr(r[i]);
    }
    o.compilerOptions && jr() && b('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Zs(new Proxy(e.ctx, xr)), process.env.NODE_ENV !== "production" && Fl(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Nc(e) : null;
    Ct(e), mt();
    const i = ke(s, e, 0, [process.env.NODE_ENV !== "production" ? xt(e.props) : e.props, r]);
    if (_t(), pt(), wo(i)) {
      if (i.then(pt, pt), t)
        return i.then((c) => {
          vs(e, c, t);
        }).catch((c) => {
          An(
            c,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        b(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      vs(e, i, t);
  } else
    kr(e, t);
}
function vs(e, t, n) {
  S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : H(t) ? (process.env.NODE_ENV !== "production" && Ho(t) && b("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = er(t), process.env.NODE_ENV !== "production" && Rl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && b(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), kr(e, n);
}
let bo;
const jr = () => !bo;
function kr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && bo && !o.render) {
      const s = o.template || ko(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && Fe(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, a = Q(Q({
          isCustomElement: r,
          delimiters: c
        }, i), u);
        o.render = bo(s, a), process.env.NODE_ENV !== "production" && Re(e, "compile");
      }
    }
    e.render = o.render || se;
  }
  Ct(e), mt(), kl(e), _t(), pt(), process.env.NODE_ENV !== "production" && !o.render && e.render === se && !t && (o.template ? b(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : b("Component is missing template or render function."));
}
function bs(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return Nn(), me(e, "get", "$attrs"), t[n];
    },
    set() {
      return b("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return b("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return me(e, "get", "$attrs"), t[n];
    }
  });
}
function Nc(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && b("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = bs(e));
    },
    get slots() {
      return xt(e.slots);
    },
    get emit() {
      return (o, ...s) => e.emit(o, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = bs(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(er(Zs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in dt)
          return dt[n](e);
      },
      has(t, n) {
        return n in t || n in dt;
      }
    }));
}
const yc = /(?:^|[-_])(\w)/g, Oc = (e) => e.replace(yc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Bo(e, t = !0) {
  return S(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kn(e, t, n = !1) {
  let o = Bo(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return o ? Oc(o) : n ? "App" : "Anonymous";
}
function Lr(e) {
  return S(e) && "__vccOpts" in e;
}
const Ko = (e, t) => Li(e, t, zt), xc = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), wc = () => {
  {
    const e = pn(xc);
    return e || process.env.NODE_ENV !== "production" && b("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Xn(e) {
  return !!(e && e.__v_isShallow);
}
function Dc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(d) {
      return H(d) ? d.__isVue ? ["div", e, "VueInstance"] : ne(d) ? [
        "div",
        {},
        ["span", e, g(d)],
        "<",
        c(d.value),
        ">"
      ] : ut(d) ? [
        "div",
        {},
        ["span", e, Xn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Ze(d) ? " (readonly)" : ""}`
      ] : Ze(d) ? [
        "div",
        {},
        ["span", e, Xn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const h = [];
    d.type.props && d.props && h.push(i("props", M(d.props))), d.setupState !== K && h.push(i("setup", d.setupState)), d.data !== K && h.push(i("data", M(d.data)));
    const O = u(d, "computed");
    O && h.push(i("computed", O));
    const T = u(d, "inject");
    return T && h.push(i("injected", T)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), h;
  }
  function i(d, h) {
    return h = Q({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((O) => [
          "div",
          {},
          ["span", o, O + ": "],
          c(h[O], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, h = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : H(d) ? ["object", { object: h ? M(d) : d }] : ["span", n, String(d)];
  }
  function u(d, h) {
    const O = d.type;
    if (S(O))
      return;
    const T = {};
    for (const V in d.ctx)
      a(O, V, h) && (T[V] = d.ctx[V]);
    return T;
  }
  function a(d, h, O) {
    const T = d[O];
    if ($(T) && T.includes(h) || H(T) && h in T || d.extends && a(d.extends, h, O) || d.mixins && d.mixins.some((V) => a(V, h, O)))
      return !0;
  }
  function g(d) {
    return Xn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Ns = "3.2.45", Vc = "http://www.w3.org/2000/svg", st = typeof document < "u" ? document : null, ys = st && /* @__PURE__ */ st.createElement("template"), Cc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? st.createElementNS(Vc, e) : st.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      ys.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = ys.content;
      if (o) {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Tc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function $c(e, t, n) {
  const o = e.style, s = X(n);
  if (n && !s) {
    for (const r in n)
      No(o, r, n[r]);
    if (t && !X(t))
      for (const r in t)
        n[r] == null && No(o, r, "");
  } else {
    const r = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = r);
  }
}
const Sc = /[^\\];\s*$/, Os = /\s*!important$/;
function No(e, t, n) {
  if ($(n))
    n.forEach((o) => No(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Sc.test(n) && b(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Ic(e, t);
    Os.test(n) ? e.setProperty(Ye(o), n.replace(Os, ""), "important") : e[o] = n;
  }
}
const xs = ["Webkit", "Moz", "ms"], Zn = {};
function Ic(e, t) {
  const n = Zn[t];
  if (n)
    return n;
  let o = Ie(t);
  if (o !== "filter" && o in e)
    return Zn[t] = o;
  o = ht(o);
  for (let s = 0; s < xs.length; s++) {
    const r = xs[s] + o;
    if (r in e)
      return Zn[t] = r;
  }
  return t;
}
const ws = "http://www.w3.org/1999/xlink";
function Ac(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ws, t.slice(6, t.length)) : e.setAttributeNS(ws, t, n);
  else {
    const r = Gr(t);
    n == null || r && !Is(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function Mc(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const u = n ?? "";
    (e.value !== u || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Is(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !c && b(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  c && e.removeAttribute(t);
}
function rt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Pc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Fc(e, t, n, o, s = null) {
  const r = e._vei || (e._vei = {}), i = r[t];
  if (o && i)
    i.value = o;
  else {
    const [c, u] = Rc(t);
    if (o) {
      const a = r[t] = Lc(o, s);
      rt(e, c, a, u);
    } else
      i && (Pc(e, c, i, u), r[t] = void 0);
  }
}
const Ds = /(?:Once|Passive|Capture)$/;
function Rc(e) {
  let t;
  if (Ds.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ds); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let Qn = 0;
const jc = /* @__PURE__ */ Promise.resolve(), kc = () => Qn || (jc.then(() => Qn = 0), Qn = Date.now());
function Lc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ee(Hc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = kc(), n;
}
function Hc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const Vs = /^on[a-z]/, Uc = (e, t, n, o, s = !1, r, i, c, u) => {
  t === "class" ? Tc(e, o, s) : t === "style" ? $c(e, n, o) : Jt(t) ? _n(t) || Fc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bc(e, t, o, s)) ? Mc(e, t, o, r, i, c, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ac(e, t, o, s));
};
function Bc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Vs.test(t) && S(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Vs.test(t) && X(n) ? !1 : t in e;
}
const Kc = {
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
yl.props;
const xn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return $(t) ? (n) => Nt(t, n) : t;
};
function Wc(e) {
  e.target.composing = !0;
}
function Cs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Hr = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
    e._assign = xn(s);
    const r = o || s.props && s.props.type === "number";
    rt(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let c = e.value;
      n && (c = c.trim()), r && (c = Lt(c)), e._assign(c);
    }), n && rt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (rt(e, "compositionstart", Wc), rt(e, "compositionend", Cs), rt(e, "change", Cs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: s } }, r) {
    if (e._assign = xn(r), e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (s || e.type === "number") && Lt(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
}, yo = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const s = Vn(t);
    rt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map((i) => n ? Lt(wn(i)) : wn(i));
      e._assign(e.multiple ? s ? new Set(r) : r : r[0]);
    }), e._assign = xn(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ts(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = xn(n);
  },
  updated(e, { value: t }) {
    Ts(e, t);
  }
};
function Ts(e, t) {
  const n = e.multiple;
  if (n && !$(t) && !Vn(t)) {
    process.env.NODE_ENV !== "production" && b(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
    return;
  }
  for (let o = 0, s = e.options.length; o < s; o++) {
    const r = e.options[o], i = wn(r);
    if (n)
      $(t) ? r.selected = ti(t, i) > -1 : r.selected = t.has(i);
    else if (Dn(wn(r), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function wn(e) {
  return "_value" in e ? e._value : e.value;
}
const zc = ["ctrl", "shift", "alt", "meta"], qc = {
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
  exact: (e, t) => zc.some((n) => e[`${n}Key`] && !t.includes(n))
}, $s = (e, t) => (n, ...o) => {
  for (let s = 0; s < t.length; s++) {
    const r = qc[t[s]];
    if (r && r(n, t))
      return;
  }
  return e(n, ...o);
}, Jc = /* @__PURE__ */ Q({ patchProp: Uc }, Cc);
let Ss;
function Yc() {
  return Ss || (Ss = sc(Jc));
}
const Xc = (...e) => {
  const t = Yc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Zc(t), Qc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Gc(o);
    if (!s)
      return;
    const r = t._component;
    !S(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Zc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Xr(t) || Zr(t),
    writable: !1
  });
}
function Qc(e) {
  if (jr()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        b("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return b(o), n;
      },
      set() {
        b(o);
      }
    });
  }
}
function Gc(e) {
  if (X(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && b(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && b('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function eu() {
  Dc();
}
process.env.NODE_ENV !== "production" && eu();
const tu = /* @__PURE__ */ Zt({
  __name: "ElementItem",
  props: {
    element: null
  },
  setup(e) {
    const t = e, n = Ko(() => {
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
      let s;
      switch (t.element.size) {
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
        o,
        s
      ].join(" ");
    });
    return (o, s) => (fe(), Vt(Al(t.element.type), {
      class: qt(Io(n)),
      key: t.element.id,
      innerHTML: t.element.content
    }, null, 8, ["class", "innerHTML"]));
  }
}), nu = /* @__PURE__ */ Zt({
  __name: "ContainerElement",
  props: {
    container: null
  },
  setup(e) {
    const t = e, n = Ko(() => {
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
      const s = [
        o,
        t.container.textAlign,
        "p-5"
      ];
      return `${t.container.classes} ${s.join(" ")}`;
    });
    return (o, s) => (fe(), je("div", {
      key: t.container.id,
      class: qt(Io(n))
    }, [
      (fe(!0), je(ge, null, ao(t.container.elements, (r) => (fe(), Vt(tu, {
        onClick: (i) => o.$emit("selectElement", r),
        element: r
      }, null, 8, ["onClick", "element"]))), 256))
    ], 2));
  }
}), ou = /* @__PURE__ */ A("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Element Configuration ", -1), su = { class: "flex flex-col gap-3 p-3 bg-white" }, ru = { class: "flex flex-col gap-1" }, iu = /* @__PURE__ */ A("label", null, "Text Size", -1), lu = /* @__PURE__ */ dc('<option value="xs">Extra Small</option><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option><option value="xl">Extra Large</option><option value="2xl">2x Extra Large</option><option value="3xl">3x Extra Large</option><option value="4xl">4x Extra Large</option>', 8), cu = [
  lu
], uu = { class: "flex flex-col gap-1" }, fu = /* @__PURE__ */ A("label", null, "Font Weight", -1), au = /* @__PURE__ */ A("option", { value: "normal" }, "Normal", -1), du = /* @__PURE__ */ A("option", { value: "bold" }, "Bold", -1), pu = [
  au,
  du
], hu = { class: "flex flex-col gap-1" }, gu = /* @__PURE__ */ A("label", null, "Content", -1), mu = /* @__PURE__ */ A("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Element ", -1), _u = /* @__PURE__ */ Zt({
  __name: "ElementConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (fe(), je("details", null, [
      ou,
      A("div", su, [
        A("div", ru, [
          iu,
          Pt(A("select", {
            "onUpdate:modelValue": o[0] || (o[0] = (s) => t.modelValue.size = s),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, cu, 512), [
            [yo, t.modelValue.size]
          ])
        ]),
        A("div", uu, [
          fu,
          Pt(A("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (s) => t.modelValue.weight = s),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, pu, 512), [
            [yo, t.modelValue.weight]
          ])
        ]),
        A("div", hu, [
          gu,
          Pt(A("textarea", {
            "onUpdate:modelValue": o[2] || (o[2] = (s) => t.modelValue.content = s),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, null, 512), [
            [Hr, t.modelValue.content]
          ])
        ]),
        mu
      ])
    ]));
  }
}), Eu = /* @__PURE__ */ A("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, " Container Configuration ", -1), vu = { class: "flex flex-col gap-3 p-3 bg-white" }, bu = { class: "flex flex-col gap-1" }, Nu = /* @__PURE__ */ A("label", null, "Span", -1), yu = { class: "flex flex-col gap-1" }, Ou = /* @__PURE__ */ A("label", null, "Text Align", -1), xu = /* @__PURE__ */ A("option", { value: "text-left" }, "Left", -1), wu = /* @__PURE__ */ A("option", { value: "text-center" }, "Center", -1), Du = /* @__PURE__ */ A("option", { value: "text-right" }, "Right", -1), Vu = /* @__PURE__ */ A("option", { value: "text-justify" }, "Justify", -1), Cu = [
  xu,
  wu,
  Du,
  Vu
], Tu = /* @__PURE__ */ A("button", { class: "border bg-red-600 text-white rounded-md p-2 col-span-4" }, " Delete Container ", -1), $u = /* @__PURE__ */ Zt({
  __name: "ContainerConfiguration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (n, o) => (fe(), je("details", null, [
      Eu,
      A("div", vu, [
        A("div", bu, [
          Nu,
          Pt(A("input", {
            "onUpdate:modelValue": o[0] || (o[0] = (s) => t.modelValue.colSpan = s),
            type: "number",
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
            max: "4",
            min: "1"
          }, null, 512), [
            [Hr, t.modelValue.colSpan]
          ])
        ]),
        A("div", yu, [
          Ou,
          Pt(A("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (s) => t.modelValue.textAlign = s),
            class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          }, Cu, 512), [
            [yo, t.modelValue.textAlign]
          ])
        ]),
        Tu
      ])
    ]));
  }
}), Su = { class: "grid grid-cols-5 min-h-screen" }, Iu = { class: "col-span-1 bg-gray-100 flex flex-col" }, Au = { key: 0 }, Mu = /* @__PURE__ */ A("summary", { class: "bg-gray-200 p-4 border-b cursor-pointer" }, "Components", -1), Pu = { class: "flex flex-col gap-3 p-3 bg-white" }, Fu = ["onDragstart"], Ru = { class: "min-w-0 flex-1" }, ju = {
  href: "#",
  class: "focus:outline-none"
}, ku = /* @__PURE__ */ A("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Lu = { class: "text-sm font-medium text-gray-900" }, Hu = { class: "truncate text-sm text-gray-500" }, Uu = { class: "col-span-4 grid grid-cols-4 gap-4 p-5 content-start" }, Bu = /* @__PURE__ */ Zt({
  __name: "App",
  setup(e) {
    const t = cn(null), n = cn([]), o = cn(null), s = cn([
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
      }
    ]), r = () => {
      const O = JSON.parse(JSON.stringify({
        id: 0,
        classes: "border border-gray-300",
        colSpan: 4,
        textAlign: "text-left",
        elements: []
      }));
      O.id = n.value.length, n.value.push(O);
    }, i = (h, O) => {
      h.dataTransfer.dropEffect = "move", h.dataTransfer.effectAllowed = "move", h.dataTransfer.setData("item", JSON.stringify(O));
    }, c = (h, O) => {
      h.preventDefault();
      const T = JSON.parse(h.dataTransfer.getData("item"));
      O.elements.push({ ...T });
    }, u = (h) => {
      t.value = h;
    }, a = (h) => {
      o.value = h;
    }, g = () => {
      localStorage.setItem("page", JSON.stringify(n.value));
    }, d = () => {
      localStorage.removeItem("page"), n.value = [];
    };
    return Ro(() => {
      const h = localStorage.getItem("page");
      h && (n.value = JSON.parse(h)), window.addEventListener("keypress", (O) => {
        O.ctrlKey && O.key === "s" && (O.preventDefault(), g());
      });
    }), (h, O) => (fe(), je("div", Su, [
      A("div", Iu, [
        A("div", { class: "flex flex-col" }, [
          A("button", {
            onClick: d,
            class: "bg-red-600 hover:bg-red-500 text-white p-2 col-span-4"
          }, " Clear All "),
          A("button", {
            onClick: g,
            class: "bg-green-600 hover:bg-green-500 text-white p-2 col-span-4"
          }, " Save Page "),
          A("button", {
            onClick: r,
            class: "bg-amber-600 hover:bg-amber-500 text-white p-2 col-span-4"
          }, " Add Container ")
        ]),
        n.value.length ? (fe(), je("details", Au, [
          Mu,
          A("div", Pu, [
            (fe(!0), je(ge, null, ao(s.value, (T) => (fe(), je("div", {
              class: "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400",
              draggable: "true",
              key: T.id,
              onDragstart: (V) => i(V, T)
            }, [
              A("div", Ru, [
                A("a", ju, [
                  ku,
                  A("p", Lu, Yo(T.name), 1),
                  A("p", Hu, Yo(T.description), 1)
                ])
              ])
            ], 40, Fu))), 128))
          ])
        ])) : Yn("", !0),
        t.value ? (fe(), Vt($u, {
          key: 1,
          modelValue: t.value,
          "onUpdate:modelValue": O[0] || (O[0] = (T) => t.value = T)
        }, null, 8, ["modelValue"])) : Yn("", !0),
        o.value ? (fe(), Vt(_u, {
          key: 2,
          modelValue: o.value,
          "onUpdate:modelValue": O[1] || (O[1] = (T) => o.value = T)
        }, null, 8, ["modelValue"])) : Yn("", !0)
      ]),
      A("div", Uu, [
        (fe(!0), je(ge, null, ao(n.value, (T) => (fe(), Vt(nu, {
          onClick: (V) => u(T),
          onDragover: O[2] || (O[2] = $s(() => {
          }, ["prevent"])),
          onDragenter: O[3] || (O[3] = $s(() => {
          }, ["prevent"])),
          onDrop: (V) => c(V, T),
          key: T.id,
          container: T,
          onSelectElement: a
        }, null, 8, ["onClick", "onDrop", "container"]))), 128))
      ])
    ]));
  }
});
Xc(Bu).mount("#page-builder");
