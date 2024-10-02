var Zc = Object.defineProperty;
var e1 = (e, t, n) => t in e ? Zc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Mo = (e, t, n) => (e1(e, typeof t != "symbol" ? t + "" : t, n), n);
/**
* @vue/shared v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const se = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _n = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ne = () => {
}, t1 = () => !1, lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Pr = (e) => e.startsWith("onUpdate:"), we = Object.assign, Ms = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, n1 = Object.prototype.hasOwnProperty, oe = (e, t) => n1.call(e, t), $ = Array.isArray, on = (e) => cr(e) === "[object Map]", ro = (e) => cr(e) === "[object Set]", _i = (e) => cr(e) === "[object Date]", q = (e) => typeof e == "function", ve = (e) => typeof e == "string", wt = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", Hs = (e) => (ce(e) || q(e)) && q(e.then) && q(e.catch), Il = Object.prototype.toString, cr = (e) => Il.call(e), Ls = (e) => cr(e).slice(8, -1), Bl = (e) => cr(e) === "[object Object]", Ds = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xn = /* @__PURE__ */ Dt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), r1 = /* @__PURE__ */ Dt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), oo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, o1 = /-(\w)/g, je = oo(
  (e) => e.replace(o1, (t, n) => n ? n.toUpperCase() : "")
), s1 = /\B([A-Z])/g, _t = oo(
  (e) => e.replace(s1, "-$1").toLowerCase()
), un = oo((e) => e.charAt(0).toUpperCase() + e.slice(1)), en = oo(
  (e) => e ? `on${un(e)}` : ""
), Be = (e, t) => !Object.is(e, t), bn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ar = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, kr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ei;
const zs = () => Ei || (Ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ve(r) ? a1(r) : Rs(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (ve(e) || ce(e))
    return e;
}
const i1 = /;(?![^(]*\))/g, l1 = /:([^]+)/, c1 = /\/\*[^]*?\*\//g;
function a1(e) {
  const t = {};
  return e.replace(c1, "").split(i1).forEach((n) => {
    if (n) {
      const r = n.split(l1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ar(e) {
  let t = "";
  if (ve(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const r = ar(e[n]);
      r && (t += r + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const u1 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", f1 = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", d1 = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", p1 = /* @__PURE__ */ Dt(u1), h1 = /* @__PURE__ */ Dt(f1), m1 = /* @__PURE__ */ Dt(d1), g1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", v1 = /* @__PURE__ */ Dt(g1);
function jl(e) {
  return !!e || e === "";
}
function b1(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = so(e[r], t[r]);
  return n;
}
function so(e, t) {
  if (e === t)
    return !0;
  let n = _i(e), r = _i(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = wt(e), r = wt(t), n || r)
    return e === t;
  if (n = $(e), r = $(t), n || r)
    return n && r ? b1(e, t) : !1;
  if (n = ce(e), r = ce(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const c = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (c && !l || !c && l || !so(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function y1(e, t) {
  return e.findIndex((n) => so(n, t));
}
const Fl = (e) => !!(e && e.__v_isRef === !0), Te = (e) => ve(e) ? e : e == null ? "" : $(e) || ce(e) && (e.toString === Il || !q(e.toString)) ? Fl(e) ? Te(e.value) : JSON.stringify(e, Ul, 2) : String(e), Ul = (e, t) => Fl(t) ? Ul(e, t.value) : on(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[Ho(r, s) + " =>"] = o, n),
    {}
  )
} : ro(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ho(n))
} : wt(t) ? Ho(t) : ce(t) && !$(t) && !Bl(t) ? String(t) : t, Ho = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Et(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Je;
class w1 {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Je, !t && Je && (this.index = (Je.scopes || (Je.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Je;
      try {
        return Je = this, t();
      } finally {
        Je = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Et("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Je = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Je = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function _1() {
  return Je;
}
let ae;
const Lo = /* @__PURE__ */ new WeakSet();
class ql {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && Je.active && Je.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Lo.has(this) && (Lo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xi(this), Gl(this);
    const t = ae, n = lt;
    ae = this, lt = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && ae !== this && Et(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Jl(this), ae = t, lt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        As(t);
      this.deps = this.depsTail = void 0, xi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Lo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yo(this) && this.run();
  }
  get dirty() {
    return Yo(this);
  }
}
let Kl = 0, wn;
function Wl(e) {
  e.flags |= 8, e.next = wn, wn = e;
}
function Ts() {
  Kl++;
}
function Ps() {
  if (--Kl > 0)
    return;
  let e;
  for (; wn; ) {
    let t = wn, n;
    for (; t; )
      t.flags &= -9, t = t.next;
    for (t = wn, wn = void 0; t; ) {
      if (t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      n = t.next, t.next = void 0, t = n;
    }
  }
  if (e)
    throw e;
}
function Gl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jl(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), As(r), E1(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === er))
    return;
  e.globalVersion = er;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Yo(e)) {
    e.flags &= -3;
    return;
  }
  const n = ae, r = lt;
  ae = e, lt = !0;
  try {
    Gl(e);
    const o = e.fn(e._value);
    (t.version === 0 || Be(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ae = n, lt = r, Jl(e), e.flags &= -3;
  }
}
function As(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      As(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function E1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lt = !0;
const Yl = [];
function zt() {
  Yl.push(lt), lt = !1;
}
function Rt() {
  const e = Yl.pop();
  lt = e === void 0 ? !0 : e;
}
function xi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ae;
    ae = void 0;
    try {
      t();
    } finally {
      ae = n;
    }
  }
}
let er = 0;
class x1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class io {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!ae || !lt || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new x1(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, Ql(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ae.depsTail, n.nextDep = void 0, ae.depsTail.nextDep = n, ae.depsTail = n, ae.deps === n && (ae.deps = r);
    }
    return process.env.NODE_ENV !== "production" && ae.onTrack && ae.onTrack(
      we(
        {
          effect: ae
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, er++, this.notify(t);
  }
  notify(t) {
    Ts();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            we(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ps();
    }
  }
}
function Ql(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ql(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Qo = /* @__PURE__ */ new WeakMap(), sn = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Zo = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), tr = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Me(e, t, n) {
  if (lt && ae) {
    let r = Qo.get(e);
    r || Qo.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new io()), o.target = e, o.map = r, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function bt(e, t, n, r, o, s) {
  const i = Qo.get(e);
  if (!i) {
    er++;
    return;
  }
  const c = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: s
    }) : l.trigger());
  };
  if (Ts(), t === "clear")
    i.forEach(c);
  else {
    const l = $(e), f = l && Ds(n);
    if (l && n === "length") {
      const u = Number(r);
      i.forEach((a, d) => {
        (d === "length" || d === tr || !wt(d) && d >= u) && c(a);
      });
    } else
      switch (n !== void 0 && c(i.get(n)), f && c(i.get(tr)), t) {
        case "add":
          l ? f && c(i.get("length")) : (c(i.get(sn)), on(e) && c(i.get(Zo)));
          break;
        case "delete":
          l || (c(i.get(sn)), on(e) && c(i.get(Zo)));
          break;
        case "set":
          on(e) && c(i.get(sn));
          break;
      }
  }
  Ps();
}
function gn(e) {
  const t = Y(e);
  return t === e ? t : (Me(t, "iterate", tr), $e(e) ? t : t.map(Re));
}
function lo(e) {
  return Me(e = Y(e), "iterate", tr), e;
}
const C1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Do(this, Symbol.iterator, Re);
  },
  concat(...e) {
    return gn(this).concat(
      ...e.map((t) => $(t) ? gn(t) : t)
    );
  },
  entries() {
    return Do(this, "entries", (e) => (e[1] = Re(e[1]), e));
  },
  every(e, t) {
    return Ct(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ct(this, "filter", e, t, (n) => n.map(Re), arguments);
  },
  find(e, t) {
    return Ct(this, "find", e, t, Re, arguments);
  },
  findIndex(e, t) {
    return Ct(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ct(this, "findLast", e, t, Re, arguments);
  },
  findLastIndex(e, t) {
    return Ct(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ct(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return zo(this, "includes", e);
  },
  indexOf(...e) {
    return zo(this, "indexOf", e);
  },
  join(e) {
    return gn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return zo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ct(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return kn(this, "pop");
  },
  push(...e) {
    return kn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ci(this, "reduceRight", e, t);
  },
  shift() {
    return kn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ct(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return kn(this, "splice", e);
  },
  toReversed() {
    return gn(this).toReversed();
  },
  toSorted(e) {
    return gn(this).toSorted(e);
  },
  toSpliced(...e) {
    return gn(this).toSpliced(...e);
  },
  unshift(...e) {
    return kn(this, "unshift", e);
  },
  values() {
    return Do(this, "values", Re);
  }
};
function Do(e, t, n) {
  const r = lo(e), o = r[t]();
  return r !== e && !$e(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const V1 = Array.prototype;
function Ct(e, t, n, r, o, s) {
  const i = lo(e), c = i !== e && !$e(e), l = i[t];
  if (l !== V1[t]) {
    const a = l.apply(e, s);
    return c ? Re(a) : a;
  }
  let f = n;
  i !== e && (c ? f = function(a, d) {
    return n.call(this, Re(a), d, e);
  } : n.length > 2 && (f = function(a, d) {
    return n.call(this, a, d, e);
  }));
  const u = l.call(i, f, r);
  return c && o ? o(u) : u;
}
function Ci(e, t, n, r) {
  const o = lo(e);
  let s = n;
  return o !== e && ($e(e) ? n.length > 3 && (s = function(i, c, l) {
    return n.call(this, i, c, l, e);
  }) : s = function(i, c, l) {
    return n.call(this, i, Re(c), l, e);
  }), o[t](s, ...r);
}
function zo(e, t, n) {
  const r = Y(e);
  Me(r, "iterate", tr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && $r(n[0]) ? (n[0] = Y(n[0]), r[t](...n)) : o;
}
function kn(e, t, n = []) {
  zt(), Ts();
  const r = Y(e)[t].apply(e, n);
  return Ps(), Rt(), r;
}
const N1 = /* @__PURE__ */ Dt("__proto__,__v_isRef,__isVue"), Zl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wt)
);
function O1(e) {
  wt(e) || (e = String(e));
  const t = Y(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class e2 {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (o ? s ? l2 : i2 : s ? s2 : o2).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = $(t);
    if (!o) {
      let l;
      if (i && (l = C1[n]))
        return l;
      if (n === "hasOwnProperty")
        return O1;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Se(t) ? t : r
    );
    return (wt(n) ? Zl.has(n) : N1(n)) || (o || Me(t, "get", n), s) ? c : Se(c) ? i && Ds(n) ? c : c.value : ce(c) ? o ? a2(c) : uo(c) : c;
  }
}
class t2 extends e2 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const l = Lt(s);
      if (!$e(r) && !Lt(r) && (s = Y(s), r = Y(r)), !$(t) && Se(s) && !Se(r))
        return l ? !1 : (s.value = r, !0);
    }
    const i = $(t) && Ds(n) ? Number(n) < t.length : oe(t, n), c = Reflect.set(
      t,
      n,
      r,
      Se(t) ? t : o
    );
    return t === Y(o) && (i ? Be(r, s) && bt(t, "set", n, r, s) : bt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = oe(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && bt(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!wt(n) || !Zl.has(n)) && Me(t, "has", n), r;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      $(t) ? "length" : sn
    ), Reflect.ownKeys(t);
  }
}
class n2 extends e2 {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Et(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Et(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const S1 = /* @__PURE__ */ new t2(), M1 = /* @__PURE__ */ new n2(), H1 = /* @__PURE__ */ new t2(!0), L1 = /* @__PURE__ */ new n2(!0), ks = (e) => e, co = (e) => Reflect.getPrototypeOf(e);
function vr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = Y(e), s = Y(t);
  n || (Be(t, s) && Me(o, "get", t), Me(o, "get", s));
  const { has: i } = co(o), c = r ? ks : n ? $s : Re;
  if (i.call(o, t))
    return c(e.get(t));
  if (i.call(o, s))
    return c(e.get(s));
  e !== o && e.get(t);
}
function br(e, t = !1) {
  const n = this.__v_raw, r = Y(n), o = Y(e);
  return t || (Be(e, o) && Me(r, "has", e), Me(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function yr(e, t = !1) {
  return e = e.__v_raw, !t && Me(Y(e), "iterate", sn), Reflect.get(e, "size", e);
}
function Vi(e, t = !1) {
  !t && !$e(e) && !Lt(e) && (e = Y(e));
  const n = Y(this);
  return co(n).has.call(n, e) || (n.add(e), bt(n, "add", e, e)), this;
}
function Ni(e, t, n = !1) {
  !n && !$e(t) && !Lt(t) && (t = Y(t));
  const r = Y(this), { has: o, get: s } = co(r);
  let i = o.call(r, e);
  i ? process.env.NODE_ENV !== "production" && r2(r, o, e) : (e = Y(e), i = o.call(r, e));
  const c = s.call(r, e);
  return r.set(e, t), i ? Be(t, c) && bt(r, "set", e, t, c) : bt(r, "add", e, t), this;
}
function Oi(e) {
  const t = Y(this), { has: n, get: r } = co(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && r2(t, n, e) : (e = Y(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && bt(t, "delete", e, void 0, s), i;
}
function Si() {
  const e = Y(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? on(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && bt(e, "clear", void 0, void 0, n), r;
}
function wr(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, c = Y(i), l = t ? ks : e ? $s : Re;
    return !e && Me(c, "iterate", sn), i.forEach((f, u) => r.call(o, l(f), l(u), s));
  };
}
function _r(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Y(o), i = on(s), c = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = o[e](...r), u = n ? ks : t ? $s : Re;
    return !t && Me(
      s,
      "iterate",
      l ? Zo : sn
    ), {
      // iterator protocol
      next() {
        const { value: a, done: d } = f.next();
        return d ? { value: a, done: d } : {
          value: c ? [u(a[0]), u(a[1])] : u(a),
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
function $t(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Et(
        `${un(e)} operation ${n}failed: target is readonly.`,
        Y(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function D1() {
  const e = {
    get(s) {
      return vr(this, s);
    },
    get size() {
      return yr(this);
    },
    has: br,
    add: Vi,
    set: Ni,
    delete: Oi,
    clear: Si,
    forEach: wr(!1, !1)
  }, t = {
    get(s) {
      return vr(this, s, !1, !0);
    },
    get size() {
      return yr(this);
    },
    has: br,
    add(s) {
      return Vi.call(this, s, !0);
    },
    set(s, i) {
      return Ni.call(this, s, i, !0);
    },
    delete: Oi,
    clear: Si,
    forEach: wr(!1, !0)
  }, n = {
    get(s) {
      return vr(this, s, !0);
    },
    get size() {
      return yr(this, !0);
    },
    has(s) {
      return br.call(this, s, !0);
    },
    add: $t("add"),
    set: $t("set"),
    delete: $t("delete"),
    clear: $t("clear"),
    forEach: wr(!0, !1)
  }, r = {
    get(s) {
      return vr(this, s, !0, !0);
    },
    get size() {
      return yr(this, !0);
    },
    has(s) {
      return br.call(this, s, !0);
    },
    add: $t("add"),
    set: $t("set"),
    delete: $t("delete"),
    clear: $t("clear"),
    forEach: wr(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = _r(s, !1, !1), n[s] = _r(s, !0, !1), t[s] = _r(s, !1, !0), r[s] = _r(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  z1,
  R1,
  T1,
  P1
] = /* @__PURE__ */ D1();
function ao(e, t) {
  const n = t ? e ? P1 : T1 : e ? R1 : z1;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    oe(n, o) && o in r ? n : r,
    o,
    s
  );
}
const A1 = {
  get: /* @__PURE__ */ ao(!1, !1)
}, k1 = {
  get: /* @__PURE__ */ ao(!1, !0)
}, $1 = {
  get: /* @__PURE__ */ ao(!0, !1)
}, I1 = {
  get: /* @__PURE__ */ ao(!0, !0)
};
function r2(e, t, n) {
  const r = Y(n);
  if (r !== n && t.call(e, r)) {
    const o = Ls(e);
    Et(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const o2 = /* @__PURE__ */ new WeakMap(), s2 = /* @__PURE__ */ new WeakMap(), i2 = /* @__PURE__ */ new WeakMap(), l2 = /* @__PURE__ */ new WeakMap();
function B1(e) {
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
function j1(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : B1(Ls(e));
}
function uo(e) {
  return Lt(e) ? e : fo(
    e,
    !1,
    S1,
    A1,
    o2
  );
}
function c2(e) {
  return fo(
    e,
    !1,
    H1,
    k1,
    s2
  );
}
function a2(e) {
  return fo(
    e,
    !0,
    M1,
    $1,
    i2
  );
}
function gt(e) {
  return fo(
    e,
    !0,
    L1,
    I1,
    l2
  );
}
function fo(e, t, n, r, o) {
  if (!ce(e))
    return process.env.NODE_ENV !== "production" && Et(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = j1(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, c), c;
}
function ln(e) {
  return Lt(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Lt(e) {
  return !!(e && e.__v_isReadonly);
}
function $e(e) {
  return !!(e && e.__v_isShallow);
}
function $r(e) {
  return e ? !!e.__v_raw : !1;
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
function F1(e) {
  return !oe(e, "__v_skip") && Object.isExtensible(e) && Ar(e, "__v_skip", !0), e;
}
const Re = (e) => ce(e) ? uo(e) : e, $s = (e) => ce(e) ? a2(e) : e;
function Se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Gt(e) {
  return u2(e, !1);
}
function U1(e) {
  return u2(e, !0);
}
function u2(e, t) {
  return Se(e) ? e : new q1(e, t);
}
class q1 {
  constructor(t, n) {
    this.dep = new io(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Y(t), this._value = n ? t : Re(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || $e(t) || Lt(t);
    t = r ? t : Y(t), Be(t, n) && (this._rawValue = t, this._value = r ? t : Re(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function it(e) {
  return Se(e) ? e.value : e;
}
const K1 = {
  get: (e, t, n) => t === "__v_raw" ? e : it(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Se(o) && !Se(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function f2(e) {
  return ln(e) ? e : new Proxy(e, K1);
}
class W1 {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new io(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function G1(e) {
  return new W1(e);
}
class J1 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new io(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = er - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return Wl(this), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Xl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Et("Write operation failed: computed value is readonly");
  }
}
function X1(e, t, n = !1) {
  let r, o;
  q(e) ? r = e : (r = e.get, o = e.set);
  const s = new J1(r, o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.onTrack = t.onTrack, s.onTrigger = t.onTrigger), s;
}
const Er = {}, Ir = /* @__PURE__ */ new WeakMap();
let tn;
function Y1(e, t = !1, n = tn) {
  if (n) {
    let r = Ir.get(n);
    r || Ir.set(n, r = []), r.push(e);
  } else
    process.env.NODE_ENV !== "production" && !t && Et(
      "onWatcherCleanup() was called when there was no active watcher to associate with."
    );
}
function Q1(e, t, n = se) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: c, call: l } = n, f = (x) => {
    (n.onWarn || Et)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (x) => o ? x : $e(x) || o === !1 || o === 0 ? Ht(x, 1) : Ht(x);
  let a, d, h, m, v = !1, b = !1;
  if (Se(e) ? (d = () => e.value, v = $e(e)) : ln(e) ? (d = () => u(e), v = !0) : $(e) ? (b = !0, v = e.some((x) => ln(x) || $e(x)), d = () => e.map((x) => {
    if (Se(x))
      return x.value;
    if (ln(x))
      return u(x);
    if (q(x))
      return l ? l(x, 2) : x();
    process.env.NODE_ENV !== "production" && f(x);
  })) : q(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (h) {
      zt();
      try {
        h();
      } finally {
        Rt();
      }
    }
    const x = tn;
    tn = a;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      tn = x;
    }
  } : (d = Ne, process.env.NODE_ENV !== "production" && f(e)), t && o) {
    const x = d, F = o === !0 ? 1 / 0 : o;
    d = () => Ht(x(), F);
  }
  const N = _1(), H = () => {
    a.stop(), N && Ms(N.effects, a);
  };
  if (s && t) {
    const x = t;
    t = (...F) => {
      x(...F), H();
    };
  }
  let S = b ? new Array(e.length).fill(Er) : Er;
  const A = (x) => {
    if (!(!(a.flags & 1) || !a.dirty && !x))
      if (t) {
        const F = a.run();
        if (o || v || (b ? F.some((j, G) => Be(j, S[G])) : Be(F, S))) {
          h && h();
          const j = tn;
          tn = a;
          try {
            const G = [
              F,
              // pass undefined as the old value when it's changed for the first time
              S === Er ? void 0 : b && S[0] === Er ? [] : S,
              m
            ];
            l ? l(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            ), S = F;
          } finally {
            tn = j;
          }
        }
      } else
        a.run();
  };
  return c && c(A), a = new ql(d), a.scheduler = i ? () => i(A, !1) : A, m = (x) => Y1(x, !1, a), h = a.onStop = () => {
    const x = Ir.get(a);
    if (x) {
      if (l)
        l(x, 4);
      else
        for (const F of x)
          F();
      Ir.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? r ? A(!0) : S = a.run() : i ? i(A.bind(null, !0), !0) : a.run(), H.pause = a.pause.bind(a), H.resume = a.resume.bind(a), H.stop = H, H;
}
function Ht(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Se(e))
    Ht(e.value, t, n);
  else if ($(e))
    for (let r = 0; r < e.length; r++)
      Ht(e[r], t, n);
  else if (ro(e) || on(e))
    e.forEach((r) => {
      Ht(r, t, n);
    });
  else if (Bl(e)) {
    for (const r in e)
      Ht(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ht(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const cn = [];
function Vr(e) {
  cn.push(e);
}
function Nr() {
  cn.pop();
}
let Ro = !1;
function M(e, ...t) {
  if (Ro)
    return;
  Ro = !0, zt();
  const n = cn.length ? cn[cn.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Z1();
  if (r)
    Dn(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, c;
          return (c = (i = s.toString) == null ? void 0 : i.call(s)) != null ? c : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${wo(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...ea(o)), console.warn(...s);
  }
  Rt(), Ro = !1;
}
function Z1() {
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
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function ea(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...ta(n));
  }), t;
}
function ta({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${wo(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...na(e.props), s] : [o + s];
}
function na(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...d2(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function d2(e, t, n) {
  return ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Se(t) ? (t = d2(e, Y(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : q(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Y(t), n ? t : [`${e}=`, t]);
}
const Is = {
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
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Dn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    ur(o, t, n);
  }
}
function xt(e, t, n, r) {
  if (q(e)) {
    const o = Dn(e, t, n, r);
    return o && Hs(o) && o.catch((s) => {
      ur(s, t, n);
    }), o;
  }
  if ($(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(xt(e[s], t, n, r));
    return o;
  } else
    process.env.NODE_ENV !== "production" && M(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function ur(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || se;
  if (t) {
    let c = t.parent;
    const l = t.proxy, f = process.env.NODE_ENV !== "production" ? Is[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const u = c.ec;
      if (u) {
        for (let a = 0; a < u.length; a++)
          if (u[a](e, l, f) === !1)
            return;
      }
      c = c.parent;
    }
    if (s) {
      zt(), Dn(s, null, 10, [
        e,
        l,
        f
      ]), Rt();
      return;
    }
  }
  ra(e, n, o, r, i);
}
function ra(e, t, n, r = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = Is[t];
    if (n && Vr(n), M(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Nr(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
let nr = !1, es = !1;
const ke = [];
let mt = 0;
const En = [];
let Ft = null, yn = 0;
const p2 = /* @__PURE__ */ Promise.resolve();
let Bs = null;
const oa = 100;
function js(e) {
  const t = Bs || p2;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sa(e) {
  let t = nr ? mt + 1 : 0, n = ke.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = ke[r], s = rr(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function po(e) {
  if (!(e.flags & 1)) {
    const t = rr(e), n = ke[ke.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rr(n) ? ke.push(e) : ke.splice(sa(t), 0, e), e.flags |= 1, h2();
  }
}
function h2() {
  !nr && !es && (es = !0, Bs = p2.then(v2));
}
function m2(e) {
  $(e) ? En.push(...e) : Ft && e.id === -1 ? Ft.splice(yn + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1), h2();
}
function Mi(e, t, n = nr ? mt + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ke.length; n++) {
    const r = ke[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && Fs(t, r))
        continue;
      ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function g2(e) {
  if (En.length) {
    const t = [...new Set(En)].sort(
      (n, r) => rr(n) - rr(r)
    );
    if (En.length = 0, Ft) {
      Ft.push(...t);
      return;
    }
    for (Ft = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), yn = 0; yn < Ft.length; yn++) {
      const n = Ft[yn];
      process.env.NODE_ENV !== "production" && Fs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ft = null, yn = 0;
  }
}
const rr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function v2(e) {
  es = !1, nr = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Fs(e, n) : Ne;
  try {
    for (mt = 0; mt < ke.length; mt++) {
      const n = ke[mt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Dn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; mt < ke.length; mt++) {
      const n = ke[mt];
      n && (n.flags &= -2);
    }
    mt = 0, ke.length = 0, g2(e), nr = !1, Bs = null, (ke.length || En.length) && v2(e);
  }
}
function Fs(e, t) {
  const n = e.get(t) || 0;
  if (n > oa) {
    const r = t.i, o = r && ni(r.type);
    return ur(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let vt = !1;
const Or = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (zs().__VUE_HMR_RUNTIME__ = {
  createRecord: To(b2),
  rerender: To(ca),
  reload: To(aa)
});
const fn = /* @__PURE__ */ new Map();
function ia(e) {
  const t = e.type.__hmrId;
  let n = fn.get(t);
  n || (b2(t, e.type), n = fn.get(t)), n.instances.add(e);
}
function la(e) {
  fn.get(e.type.__hmrId).instances.delete(e);
}
function b2(e, t) {
  return fn.has(e) ? !1 : (fn.set(e, {
    initialDef: Br(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Br(e) {
  return nc(e) ? e.__vccOpts : e;
}
function ca(e, t) {
  const n = fn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Br(r.type).render = t), r.renderCache = [], vt = !0, r.update(), vt = !1;
  }));
}
function aa(e, t) {
  const n = fn.get(e);
  if (!n)
    return;
  t = Br(t), Hi(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = Br(s.type);
    let c = Or.get(i);
    c || (i !== n.initialDef && Hi(i, t), Or.set(i, c = /* @__PURE__ */ new Set())), c.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (c.add(s), s.ceReload(t.styles), c.delete(s)) : s.parent ? po(() => {
      vt = !0, s.parent.update(), vt = !1, c.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  m2(() => {
    Or.clear();
  });
}
function Hi(e, t) {
  we(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function To(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let st, Gn = [], ts = !1;
function fr(e, ...t) {
  st ? st.emit(e, ...t) : ts || Gn.push({ event: e, args: t });
}
function Us(e, t) {
  var n, r;
  st = e, st ? (st.enabled = !0, Gn.forEach(({ event: o, args: s }) => st.emit(o, ...s)), Gn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Us(s, t);
  }), setTimeout(() => {
    st || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ts = !0, Gn = []);
  }, 3e3)) : (ts = !0, Gn = []);
}
function ua(e, t) {
  fr("app:init", e, t, {
    Fragment: ge,
    Text: pr,
    Comment: Fe,
    Static: Hr
  });
}
function fa(e) {
  fr("app:unmount", e);
}
const da = /* @__PURE__ */ qs(
  "component:added"
  /* COMPONENT_ADDED */
), y2 = /* @__PURE__ */ qs(
  "component:updated"
  /* COMPONENT_UPDATED */
), pa = /* @__PURE__ */ qs(
  "component:removed"
  /* COMPONENT_REMOVED */
), ha = (e) => {
  st && typeof st.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !st.cleanupBuffer(e) && pa(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qs(e) {
  return (t) => {
    fr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ma = /* @__PURE__ */ w2(
  "perf:start"
  /* PERFORMANCE_START */
), ga = /* @__PURE__ */ w2(
  "perf:end"
  /* PERFORMANCE_END */
);
function w2(e) {
  return (t, n, r) => {
    fr(e, t.appContext.app, t.uid, t, n, r);
  };
}
function va(e, t, n) {
  fr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ce = null, _2 = null;
function jr(e) {
  const t = Ce;
  return Ce = e, _2 = e && e.type.__scopeId || null, t;
}
function Qe(e, t = Ce, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ji(-1);
    const s = jr(t);
    let i;
    try {
      i = e(...o);
    } finally {
      jr(s), r._d && ji(1);
    }
    return process.env.NODE_ENV !== "production" && y2(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function E2(e) {
  r1(e) && M("Do not use built-in directive ids as custom directive id: " + e);
}
function Ks(e, t) {
  if (Ce === null)
    return process.env.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
  const n = yo(Ce), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, c, l = se] = t[o];
    s && (q(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ht(i), r.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: l
    }));
  }
  return e;
}
function Qt(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    s && (c.oldValue = s[i].value);
    let l = c.dir[r];
    l && (zt(), xt(l, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Rt());
  }
}
const ba = Symbol("_vte"), ya = (e) => e.__isTeleport;
function Ws(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ws(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _e(e, t) {
  return q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => we({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function x2(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const wa = /* @__PURE__ */ new WeakSet();
function ns(e, t, n, r, o = !1) {
  if ($(e)) {
    e.forEach(
      (m, v) => ns(
        m,
        t && ($(t) ? t[v] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (xn(r) && !o)
    return;
  const s = r.shapeFlag & 4 ? yo(r.component) : r.el, i = o ? null : s, { i: c, r: l } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = c.refs === se ? c.refs = {} : c.refs, a = c.setupState, d = Y(a), h = a === se ? () => !1 : (m) => process.env.NODE_ENV !== "production" && wa.has(d[m]) ? !1 : oe(d, m);
  if (f != null && f !== l && (ve(f) ? (u[f] = null, h(f) && (a[f] = null)) : Se(f) && (f.value = null)), q(l))
    Dn(l, c, 12, [i, u]);
  else {
    const m = ve(l), v = Se(l);
    if (m || v) {
      const b = () => {
        if (e.f) {
          const N = m ? h(l) ? a[l] : u[l] : l.value;
          o ? $(N) && Ms(N, s) : $(N) ? N.includes(s) || N.push(s) : m ? (u[l] = [s], h(l) && (a[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else
          m ? (u[l] = i, h(l) && (a[l] = i)) : v ? (l.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && M("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (b.id = -1, Ge(b, n)) : b();
    } else
      process.env.NODE_ENV !== "production" && M("Invalid template ref type:", l, `(${typeof l})`);
  }
}
const xn = (e) => !!e.type.__asyncLoader, Gs = (e) => e.type.__isKeepAlive;
function _a(e, t) {
  C2(e, "a", t);
}
function Ea(e, t) {
  C2(e, "da", t);
}
function C2(e, t, n = Oe) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ho(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Gs(o.parent.vnode) && xa(r, t, n, o), o = o.parent;
  }
}
function xa(e, t, n, r) {
  const o = ho(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  N2(() => {
    Ms(r[t], o);
  }, n);
}
function ho(e, t, n = Oe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      zt();
      const c = hr(n), l = xt(t, n, e, i);
      return c(), Rt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = en(Is[e].replace(/ hook$/, ""));
    M(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Tt = (e) => (t, n = Oe) => {
  (!bo || e === "sp") && ho(e, (...r) => t(...r), n);
}, V2 = Tt("bm"), Ca = Tt("m"), Va = Tt(
  "bu"
), Na = Tt("u"), Oa = Tt(
  "bum"
), N2 = Tt("um"), Sa = Tt(
  "sp"
), Ma = Tt("rtg"), Ha = Tt("rtc");
function La(e, t = Oe) {
  ho("ec", e, t);
}
const Fr = "components";
function Js(e, t) {
  return M2(Fr, e, !0, t) || e;
}
const O2 = Symbol.for("v-ndc");
function S2(e) {
  return ve(e) ? M2(Fr, e, !1) || e : e || O2;
}
function M2(e, t, n = !0, r = !1) {
  const o = Ce || Oe;
  if (o) {
    const s = o.type;
    if (e === Fr) {
      const c = ni(
        s,
        !1
      );
      if (c && (c === t || c === je(t) || c === un(je(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Li(o[e] || s[e], t) || // global registration
      Li(o.appContext[e], t)
    );
    if (!i && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const c = e === Fr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      M(`Failed to resolve ${e.slice(0, -1)}: ${t}${c}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && M(
      `resolve${un(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Li(e, t) {
  return e && (e[t] || e[je(t)] || e[un(je(t))]);
}
function Kt(e, t, n, r) {
  let o;
  const s = n && n[r], i = $(e);
  if (i || ve(e)) {
    const c = i && ln(e);
    let l = !1;
    c && (l = !$e(e), e = lo(e)), o = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++)
      o[f] = t(
        l ? Re(e[f]) : e[f],
        f,
        void 0,
        s && s[f]
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let c = 0; c < e; c++)
      o[c] = t(c + 1, c, void 0, s && s[c]);
  } else if (ce(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (c, l) => t(c, l, void 0, s && s[l])
      );
    else {
      const c = Object.keys(e);
      o = new Array(c.length);
      for (let l = 0, f = c.length; l < f; l++) {
        const u = c[l];
        o[l] = t(e[u], u, l, s && s[l]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function Di(e, t, n = {}, r, o) {
  if (Ce.ce || Ce.parent && xn(Ce.parent) && Ce.parent.ce)
    return t !== "default" && (n.name = t), W(), xe(
      ge,
      null,
      [ie("slot", n, r && r())],
      64
    );
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (M(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), W();
  const i = s && H2(s(n)), c = xe(
    ge,
    {
      key: (n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function H2(e) {
  return e.some((t) => dn(t) ? !(t.type === Fe || t.type === ge && !H2(t.children)) : !0) ? e : null;
}
const rs = (e) => e ? Z2(e) ? yo(e) : rs(e.parent) : null, an = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ we(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? gt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? gt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? gt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? gt(e.refs) : e.refs,
    $parent: (e) => rs(e.parent),
    $root: (e) => rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ys(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      po(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = js.bind(e.proxy)),
    $watch: (e) => f4.bind(e)
  })
), Xs = (e) => e === "_" || e === "$", Po = (e, t) => e !== se && !e.__isScriptSetup && oe(e, t), L2 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: c, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const h = i[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Po(r, t))
          return i[t] = 1, r[t];
        if (o !== se && oe(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && oe(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== se && oe(n, t))
          return i[t] = 4, n[t];
        os && (i[t] = 0);
      }
    }
    const u = an[t];
    let a, d;
    if (u)
      return t === "$attrs" ? (Me(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Wr()) : process.env.NODE_ENV !== "production" && t === "$slots" && Me(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== se && oe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, oe(d, t)
    )
      return d[t];
    process.env.NODE_ENV !== "production" && Ce && (!ve(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== se && Xs(t[0]) && oe(o, t) ? M(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ce && M(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Po(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && oe(o, t) ? (M(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== se && oe(r, t) ? (r[t] = n, !0) : oe(e.props, t) ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let c;
    return !!n[i] || e !== se && oe(e, i) || Po(t, i) || (c = s[0]) && oe(c, i) || oe(r, i) || oe(an, i) || oe(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (L2.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Da(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(an).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => an[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ne
    });
  }), t;
}
function za(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: Ne
    });
  });
}
function Ra(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Y(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Xs(r[0])) {
        M(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: Ne
      });
    }
  });
}
function Ur(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function dr(e, t) {
  return !e || !t ? e || t : $(e) && $(t) ? e.concat(t) : we({}, Ur(e), Ur(t));
}
function Ta() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? M(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let os = !0;
function Pa(e) {
  const t = Ys(e), n = e.proxy, r = e.ctx;
  os = !1, t.beforeCreate && zi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: c,
    provide: l,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: a,
    mounted: d,
    beforeUpdate: h,
    updated: m,
    activated: v,
    deactivated: b,
    beforeDestroy: N,
    beforeUnmount: H,
    destroyed: S,
    unmounted: A,
    render: x,
    renderTracked: F,
    renderTriggered: j,
    errorCaptured: G,
    serverPrefetch: ne,
    // public API
    expose: de,
    inheritAttrs: pe,
    // assets
    components: he,
    directives: Ee,
    filters: qe
  } = t, He = process.env.NODE_ENV !== "production" ? Ta() : null;
  if (process.env.NODE_ENV !== "production") {
    const [Q] = e.propsOptions;
    if (Q)
      for (const Z in Q)
        He("Props", Z);
  }
  if (f && Aa(f, r, He), i)
    for (const Q in i) {
      const Z = i[Q];
      q(Z) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, Q, {
        value: Z.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[Q] = Z.bind(n), process.env.NODE_ENV !== "production" && He("Methods", Q)) : process.env.NODE_ENV !== "production" && M(
        `Method "${Q}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !q(o) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Q = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Hs(Q) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ce(Q))
      process.env.NODE_ENV !== "production" && M("data() should return an object.");
    else if (e.data = uo(Q), process.env.NODE_ENV !== "production")
      for (const Z in Q)
        He("Data", Z), Xs(Z[0]) || Object.defineProperty(r, Z, {
          configurable: !0,
          enumerable: !0,
          get: () => Q[Z],
          set: Ne
        });
  }
  if (os = !0, s)
    for (const Q in s) {
      const Z = s[Q], et = q(Z) ? Z.bind(n, n) : q(Z.get) ? Z.get.bind(n, n) : Ne;
      process.env.NODE_ENV !== "production" && et === Ne && M(`Computed property "${Q}" has no getter.`);
      const Yt = !q(Z) && q(Z.set) ? Z.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${Q}" is readonly.`
        );
      } : Ne, Pt = De({
        get: et,
        set: Yt
      });
      Object.defineProperty(r, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Pt.value,
        set: (dt) => Pt.value = dt
      }), process.env.NODE_ENV !== "production" && He("Computed", Q);
    }
  if (c)
    for (const Q in c)
      D2(c[Q], r, n, Q);
  if (l) {
    const Q = q(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((Z) => {
      Sr(Z, Q[Z]);
    });
  }
  u && zi(u, e, "c");
  function be(Q, Z) {
    $(Z) ? Z.forEach((et) => Q(et.bind(n))) : Z && Q(Z.bind(n));
  }
  if (be(V2, a), be(Ca, d), be(Va, h), be(Na, m), be(_a, v), be(Ea, b), be(La, G), be(Ha, F), be(Ma, j), be(Oa, H), be(N2, A), be(Sa, ne), $(de))
    if (de.length) {
      const Q = e.exposed || (e.exposed = {});
      de.forEach((Z) => {
        Object.defineProperty(Q, Z, {
          get: () => n[Z],
          set: (et) => n[Z] = et
        });
      });
    } else
      e.exposed || (e.exposed = {});
  x && e.render === Ne && (e.render = x), pe != null && (e.inheritAttrs = pe), he && (e.components = he), Ee && (e.directives = Ee), ne && x2(e);
}
function Aa(e, t, n = Ne) {
  $(e) && (e = ss(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ce(o) ? "default" in o ? s = ct(
      o.from || r,
      o.default,
      !0
    ) : s = ct(o.from || r) : s = ct(o), Se(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function zi(e, t, n) {
  xt(
    $(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function D2(e, t, n, r) {
  let o = r.includes(".") ? U2(n, r) : () => n[r];
  if (ve(e)) {
    const s = t[e];
    q(s) ? Vn(o, s) : process.env.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e}"`, s);
  } else if (q(e))
    Vn(o, e.bind(n));
  else if (ce(e))
    if ($(e))
      e.forEach((s) => D2(s, t, n, r));
    else {
      const s = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(s) ? Vn(o, s, e) : process.env.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && M(`Invalid watch option: "${r}"`, e);
}
function Ys(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let l;
  return c ? l = c : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (f) => qr(l, f, i, !0)
  ), qr(l, t, i)), ce(t) && s.set(t, l), l;
}
function qr(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && qr(e, s, n, !0), o && o.forEach(
    (i) => qr(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = ka[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ka = {
  data: Ri,
  props: Ti,
  emits: Ti,
  // objects
  methods: Jn,
  computed: Jn,
  // lifecycle
  beforeCreate: Ae,
  created: Ae,
  beforeMount: Ae,
  mounted: Ae,
  beforeUpdate: Ae,
  updated: Ae,
  beforeDestroy: Ae,
  beforeUnmount: Ae,
  destroyed: Ae,
  unmounted: Ae,
  activated: Ae,
  deactivated: Ae,
  errorCaptured: Ae,
  serverPrefetch: Ae,
  // assets
  components: Jn,
  directives: Jn,
  // watch
  watch: Ia,
  // provide / inject
  provide: Ri,
  inject: $a
};
function Ri(e, t) {
  return t ? e ? function() {
    return we(
      q(e) ? e.call(this, this) : e,
      q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $a(e, t) {
  return Jn(ss(e), ss(t));
}
function ss(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jn(e, t) {
  return e ? we(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ti(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : we(
    /* @__PURE__ */ Object.create(null),
    Ur(e),
    Ur(t ?? {})
  ) : t;
}
function Ia(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = we(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ae(e[r], t[r]);
  return n;
}
function z2() {
  return {
    app: null,
    config: {
      isNativeTag: t1,
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
let Ba = 0;
function ja(e, t) {
  return function(r, o = null) {
    q(r) || (r = we({}, r)), o != null && !ce(o) && (process.env.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), o = null);
    const s = z2(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let l = !1;
    const f = s.app = {
      _uid: Ba++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Ki,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...a) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : u && q(u.install) ? (i.add(u), u.install(f, ...a)) : q(u) ? (i.add(u), u(f, ...a)) : process.env.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), f;
      },
      component(u, a) {
        return process.env.NODE_ENV !== "production" && us(u, s.config), a ? (process.env.NODE_ENV !== "production" && s.components[u] && M(`Component "${u}" has already been registered in target app.`), s.components[u] = a, f) : s.components[u];
      },
      directive(u, a) {
        return process.env.NODE_ENV !== "production" && E2(u), a ? (process.env.NODE_ENV !== "production" && s.directives[u] && M(`Directive "${u}" has already been registered in target app.`), s.directives[u] = a, f) : s.directives[u];
      },
      mount(u, a, d) {
        if (l)
          process.env.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = f._ceVNode || ie(r, o);
          return h.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(
              Jt(h),
              u,
              d
            );
          }), a && t ? t(h, u) : e(h, u, d), l = !0, f._container = u, u.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = h.component, ua(f, Ki)), yo(h.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), c.push(u);
      },
      unmount() {
        l ? (xt(
          c,
          f._instance,
          16
        ), e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, fa(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(u, a) {
        return process.env.NODE_ENV !== "production" && u in s.provides && M(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = a, f;
      },
      runWithContext(u) {
        const a = Cn;
        Cn = f;
        try {
          return u();
        } finally {
          Cn = a;
        }
      }
    };
    return f;
  };
}
let Cn = null;
function Sr(e, t) {
  if (!Oe)
    process.env.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = Oe.provides;
    const r = Oe.parent && Oe.parent.provides;
    r === n && (n = Oe.provides = Object.create(r)), n[e] = t;
  }
}
function ct(e, t, n = !1) {
  const r = Oe || Ce;
  if (r || Cn) {
    const o = Cn ? Cn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && q(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const R2 = {}, T2 = () => Object.create(R2), P2 = (e) => Object.getPrototypeOf(e) === R2;
function Fa(e, t, n, r = !1) {
  const o = {}, s = T2();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), A2(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && $2(t || {}, o, e), n ? e.props = r ? o : c2(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Ua(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function qa(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, c = Y(o), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Ua(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        let d = u[a];
        if (go(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (oe(s, d))
            h !== s[d] && (s[d] = h, f = !0);
          else {
            const m = je(d);
            o[m] = is(
              l,
              c,
              m,
              h,
              e,
              !1
            );
          }
        else
          h !== s[d] && (s[d] = h, f = !0);
      }
    }
  } else {
    A2(e, t, o, s) && (f = !0);
    let u;
    for (const a in c)
      (!t || // for camelCase
      !oe(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = _t(a)) === a || !oe(t, u))) && (l ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[a] = is(
        l,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete o[a]);
    if (s !== c)
      for (const a in s)
        (!t || !oe(t, a)) && (delete s[a], f = !0);
  }
  f && bt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && $2(t || {}, o, e);
}
function A2(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let l in t) {
      if (Xn(l))
        continue;
      const f = t[l];
      let u;
      o && oe(o, u = je(l)) ? !s || !s.includes(u) ? n[u] = f : (c || (c = {}))[u] = f : go(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, i = !0);
    }
  if (s) {
    const l = Y(n), f = c || se;
    for (let u = 0; u < s.length; u++) {
      const a = s[u];
      n[a] = is(
        o,
        l,
        a,
        f[a],
        e,
        !oe(f, a)
      );
    }
  }
  return i;
}
function is(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const c = oe(i, "default");
    if (c && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && q(l)) {
        const { propsDefaults: f } = o;
        if (n in f)
          r = f[n];
        else {
          const u = hr(o);
          r = f[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
      o.ce && o.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !c ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === _t(n)) && (r = !0));
  }
  return r;
}
const Ka = /* @__PURE__ */ new WeakMap();
function k2(e, t, n = !1) {
  const r = n ? Ka : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, c = [];
  let l = !1;
  if (!q(e)) {
    const u = (a) => {
      l = !0;
      const [d, h] = k2(a, t, !0);
      we(i, d), h && c.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return ce(e) && r.set(e, _n), _n;
  if ($(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !ve(s[u]) && M("props must be strings when using array syntax.", s[u]);
      const a = je(s[u]);
      Pi(a) && (i[a] = se);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !ce(s) && M("invalid props options", s);
    for (const u in s) {
      const a = je(u);
      if (Pi(a)) {
        const d = s[u], h = i[a] = $(d) || q(d) ? { type: d } : we({}, d), m = h.type;
        let v = !1, b = !0;
        if ($(m))
          for (let N = 0; N < m.length; ++N) {
            const H = m[N], S = q(H) && H.name;
            if (S === "Boolean") {
              v = !0;
              break;
            } else
              S === "String" && (b = !1);
          }
        else
          v = q(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = v, h[
          1
          /* shouldCastTrue */
        ] = b, (v || oe(h, "default")) && c.push(a);
      }
    }
  }
  const f = [i, c];
  return ce(e) && r.set(e, f), f;
}
function Pi(e) {
  return e[0] !== "$" && !Xn(e) ? !0 : (process.env.NODE_ENV !== "production" && M(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Wa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function $2(e, t, n) {
  const r = Y(t), o = n.propsOptions[0];
  for (const s in o) {
    let i = o[s];
    i != null && Ga(
      s,
      r[s],
      i,
      process.env.NODE_ENV !== "production" ? gt(r) : r,
      !oe(e, s) && !oe(e, _t(s))
    );
  }
}
function Ga(e, t, n, r, o) {
  const { type: s, required: i, validator: c, skipCheck: l } = n;
  if (i && o) {
    M('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !l) {
      let f = !1;
      const u = $(s) ? s : [s], a = [];
      for (let d = 0; d < u.length && !f; d++) {
        const { valid: h, expectedType: m } = Xa(t, u[d]);
        a.push(m || ""), f = h;
      }
      if (!f) {
        M(Ya(e, t, a));
        return;
      }
    }
    c && !c(t, r) && M('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ja = /* @__PURE__ */ Dt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Xa(e, t) {
  let n;
  const r = Wa(t);
  if (r === "null")
    n = e === null;
  else if (Ja(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else
    r === "Object" ? n = ce(e) : r === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Ya(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(un).join(" | ")}`;
  const o = n[0], s = Ls(t), i = Ai(t, o), c = Ai(t, s);
  return n.length === 1 && ki(o) && !Qa(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, ki(s) && (r += `with value ${c}.`), r;
}
function Ai(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ki(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Qa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const I2 = (e) => e[0] === "_" || e === "$stable", Qs = (e) => $(e) ? e.map(ot) : [ot(e)], Za = (e, t, n) => {
  if (t._n)
    return t;
  const r = Qe((...o) => (process.env.NODE_ENV !== "production" && Oe && (!n || n.root === Oe.root) && M(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Qs(t(...o))), n);
  return r._c = !1, r;
}, B2 = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (I2(o))
      continue;
    const s = e[o];
    if (q(s))
      t[o] = Za(o, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Qs(s);
      t[o] = () => i;
    }
  }
}, j2 = (e, t) => {
  process.env.NODE_ENV !== "production" && !Gs(e.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Qs(t);
  e.slots.default = () => n;
}, ls = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, e4 = (e, t, n) => {
  const r = e.slots = T2();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ls(r, t, n), n && Ar(r, "_", o, !0)) : B2(t, r);
  } else
    t && j2(e, t);
}, t4 = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = se;
  if (r.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && vt ? (ls(o, t, n), bt(e, "set", "$slots")) : n && c === 1 ? s = !1 : ls(o, t, n) : (s = !t.$stable, B2(t, o)), i = t;
  } else
    t && (j2(e, t), i = { default: 1 });
  if (s)
    for (const c in o)
      !I2(c) && i[c] == null && delete o[c];
};
let $n, Wt;
function Nt(e, t) {
  e.appContext.config.performance && Kr() && Wt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && ma(e, t, Kr() ? Wt.now() : Date.now());
}
function Ot(e, t) {
  if (e.appContext.config.performance && Kr()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Wt.mark(r), Wt.measure(
      `<${wo(e, e.type)}> ${t}`,
      n,
      r
    ), Wt.clearMarks(n), Wt.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && ga(e, t, Kr() ? Wt.now() : Date.now());
}
function Kr() {
  return $n !== void 0 || (typeof window < "u" && window.performance ? ($n = !0, Wt = window.performance) : $n = !1), $n;
}
function n4() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ge = v4;
function r4(e) {
  return o4(e);
}
function o4(e, t) {
  n4();
  const n = zs();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Us(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: i,
    createText: c,
    createComment: l,
    setText: f,
    setElementText: u,
    parentNode: a,
    nextSibling: d,
    setScopeId: h = Ne,
    insertStaticContent: m
  } = e, v = (p, g, y, E = null, C = null, V = null, z = void 0, D = null, L = process.env.NODE_ENV !== "production" && vt ? !1 : !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !In(p, g) && (E = P(p), tt(p, C, V, !0), p = null), g.patchFlag === -2 && (L = !1, g.dynamicChildren = null);
    const { type: O, ref: U, shapeFlag: R } = g;
    switch (O) {
      case pr:
        b(p, g, y, E);
        break;
      case Fe:
        N(p, g, y, E);
        break;
      case Hr:
        p == null ? H(g, y, E, z) : process.env.NODE_ENV !== "production" && S(p, g, y, z);
        break;
      case ge:
        Ee(
          p,
          g,
          y,
          E,
          C,
          V,
          z,
          D,
          L
        );
        break;
      default:
        R & 1 ? F(
          p,
          g,
          y,
          E,
          C,
          V,
          z,
          D,
          L
        ) : R & 6 ? qe(
          p,
          g,
          y,
          E,
          C,
          V,
          z,
          D,
          L
        ) : R & 64 || R & 128 ? O.process(
          p,
          g,
          y,
          E,
          C,
          V,
          z,
          D,
          L,
          te
        ) : process.env.NODE_ENV !== "production" && M("Invalid VNode type:", O, `(${typeof O})`);
    }
    U != null && C && ns(U, p && p.ref, V, g || p, !g);
  }, b = (p, g, y, E) => {
    if (p == null)
      r(
        g.el = c(g.children),
        y,
        E
      );
    else {
      const C = g.el = p.el;
      g.children !== p.children && f(C, g.children);
    }
  }, N = (p, g, y, E) => {
    p == null ? r(
      g.el = l(g.children || ""),
      y,
      E
    ) : g.el = p.el;
  }, H = (p, g, y, E) => {
    [p.el, p.anchor] = m(
      p.children,
      g,
      y,
      E,
      p.el,
      p.anchor
    );
  }, S = (p, g, y, E) => {
    if (g.children !== p.children) {
      const C = d(p.anchor);
      x(p), [g.el, g.anchor] = m(
        g.children,
        y,
        C,
        E
      );
    } else
      g.el = p.el, g.anchor = p.anchor;
  }, A = ({ el: p, anchor: g }, y, E) => {
    let C;
    for (; p && p !== g; )
      C = d(p), r(p, y, E), p = C;
    r(g, y, E);
  }, x = ({ el: p, anchor: g }) => {
    let y;
    for (; p && p !== g; )
      y = d(p), o(p), p = y;
    o(g);
  }, F = (p, g, y, E, C, V, z, D, L) => {
    g.type === "svg" ? z = "svg" : g.type === "math" && (z = "mathml"), p == null ? j(
      g,
      y,
      E,
      C,
      V,
      z,
      D,
      L
    ) : de(
      p,
      g,
      C,
      V,
      z,
      D,
      L
    );
  }, j = (p, g, y, E, C, V, z, D) => {
    let L, O;
    const { props: U, shapeFlag: R, transition: I, dirs: K } = p;
    if (L = p.el = i(
      p.type,
      V,
      U && U.is,
      U
    ), R & 8 ? u(L, p.children) : R & 16 && ne(
      p.children,
      L,
      null,
      E,
      C,
      Ao(p, V),
      z,
      D
    ), K && Qt(p, null, E, "created"), G(L, p, p.scopeId, z, E), U) {
      for (const fe in U)
        fe !== "value" && !Xn(fe) && s(L, fe, null, U[fe], V, E);
      "value" in U && s(L, "value", null, U.value, V), (O = U.onVnodeBeforeMount) && ht(O, E, p);
    }
    process.env.NODE_ENV !== "production" && (Ar(L, "__vnode", p, !0), Ar(L, "__vueParentComponent", E, !0)), K && Qt(p, null, E, "beforeMount");
    const re = s4(C, I);
    re && I.beforeEnter(L), r(L, g, y), ((O = U && U.onVnodeMounted) || re || K) && Ge(() => {
      O && ht(O, E, p), re && I.enter(L), K && Qt(p, null, E, "mounted");
    }, C);
  }, G = (p, g, y, E, C) => {
    if (y && h(p, y), E)
      for (let V = 0; V < E.length; V++)
        h(p, E[V]);
    if (C) {
      let V = C.subTree;
      if (process.env.NODE_ENV !== "production" && V.patchFlag > 0 && V.patchFlag & 2048 && (V = Zs(V.children) || V), g === V || G2(V.type) && (V.ssContent === g || V.ssFallback === g)) {
        const z = C.vnode;
        G(
          p,
          z,
          z.scopeId,
          z.slotScopeIds,
          C.parent
        );
      }
    }
  }, ne = (p, g, y, E, C, V, z, D, L = 0) => {
    for (let O = L; O < p.length; O++) {
      const U = p[O] = D ? Ut(p[O]) : ot(p[O]);
      v(
        null,
        U,
        g,
        y,
        E,
        C,
        V,
        z,
        D
      );
    }
  }, de = (p, g, y, E, C, V, z) => {
    const D = g.el = p.el;
    process.env.NODE_ENV !== "production" && (D.__vnode = g);
    let { patchFlag: L, dynamicChildren: O, dirs: U } = g;
    L |= p.patchFlag & 16;
    const R = p.props || se, I = g.props || se;
    let K;
    if (y && Zt(y, !1), (K = I.onVnodeBeforeUpdate) && ht(K, y, g, p), U && Qt(g, p, y, "beforeUpdate"), y && Zt(y, !0), process.env.NODE_ENV !== "production" && vt && (L = 0, z = !1, O = null), (R.innerHTML && I.innerHTML == null || R.textContent && I.textContent == null) && u(D, ""), O ? (pe(
      p.dynamicChildren,
      O,
      D,
      y,
      E,
      Ao(g, C),
      V
    ), process.env.NODE_ENV !== "production" && Mr(p, g)) : z || et(
      p,
      g,
      D,
      null,
      y,
      E,
      Ao(g, C),
      V,
      !1
    ), L > 0) {
      if (L & 16)
        he(D, R, I, y, C);
      else if (L & 2 && R.class !== I.class && s(D, "class", null, I.class, C), L & 4 && s(D, "style", R.style, I.style, C), L & 8) {
        const re = g.dynamicProps;
        for (let fe = 0; fe < re.length; fe++) {
          const ue = re[fe], Ke = R[ue], ze = I[ue];
          (ze !== Ke || ue === "value") && s(D, ue, Ke, ze, C, y);
        }
      }
      L & 1 && p.children !== g.children && u(D, g.children);
    } else
      !z && O == null && he(D, R, I, y, C);
    ((K = I.onVnodeUpdated) || U) && Ge(() => {
      K && ht(K, y, g, p), U && Qt(g, p, y, "updated");
    }, E);
  }, pe = (p, g, y, E, C, V, z) => {
    for (let D = 0; D < g.length; D++) {
      const L = p[D], O = g[D], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !In(L, O) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 70) ? a(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          y
        )
      );
      v(
        L,
        O,
        U,
        null,
        E,
        C,
        V,
        z,
        !0
      );
    }
  }, he = (p, g, y, E, C) => {
    if (g !== y) {
      if (g !== se)
        for (const V in g)
          !Xn(V) && !(V in y) && s(
            p,
            V,
            g[V],
            null,
            C,
            E
          );
      for (const V in y) {
        if (Xn(V))
          continue;
        const z = y[V], D = g[V];
        z !== D && V !== "value" && s(p, V, D, z, C, E);
      }
      "value" in y && s(p, "value", g.value, y.value, C);
    }
  }, Ee = (p, g, y, E, C, V, z, D, L) => {
    const O = g.el = p ? p.el : c(""), U = g.anchor = p ? p.anchor : c("");
    let { patchFlag: R, dynamicChildren: I, slotScopeIds: K } = g;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (vt || R & 2048) && (R = 0, L = !1, I = null), K && (D = D ? D.concat(K) : K), p == null ? (r(O, y, E), r(U, y, E), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      y,
      U,
      C,
      V,
      z,
      D,
      L
    )) : R > 0 && R & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (pe(
      p.dynamicChildren,
      I,
      y,
      C,
      V,
      z,
      D
    ), process.env.NODE_ENV !== "production" ? Mr(p, g) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (g.key != null || C && g === C.subTree) && Mr(
        p,
        g,
        !0
        /* shallow */
      )
    )) : et(
      p,
      g,
      y,
      U,
      C,
      V,
      z,
      D,
      L
    );
  }, qe = (p, g, y, E, C, V, z, D, L) => {
    g.slotScopeIds = D, p == null ? g.shapeFlag & 512 ? C.ctx.activate(
      g,
      y,
      E,
      z,
      L
    ) : He(
      g,
      y,
      E,
      C,
      V,
      z,
      L
    ) : be(p, g, L);
  }, He = (p, g, y, E, C, V, z) => {
    const D = p.component = C4(
      p,
      E,
      C
    );
    if (process.env.NODE_ENV !== "production" && D.type.__hmrId && ia(D), process.env.NODE_ENV !== "production" && (Vr(p), Nt(D, "mount")), Gs(p) && (D.ctx.renderer = te), process.env.NODE_ENV !== "production" && Nt(D, "init"), N4(D, !1, z), process.env.NODE_ENV !== "production" && Ot(D, "init"), D.asyncDep) {
      if (process.env.NODE_ENV !== "production" && vt && (p.el = null), C && C.registerDep(D, Q, z), !p.el) {
        const L = D.subTree = ie(Fe);
        N(null, L, g, y);
      }
    } else
      Q(
        D,
        p,
        g,
        y,
        C,
        V,
        z
      );
    process.env.NODE_ENV !== "production" && (Nr(), Ot(D, "mount"));
  }, be = (p, g, y) => {
    const E = g.component = p.component;
    if (m4(p, g, y))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Vr(g), Z(E, g, y), process.env.NODE_ENV !== "production" && Nr();
        return;
      } else
        E.next = g, E.update();
    else
      g.el = p.el, E.vnode = g;
  }, Q = (p, g, y, E, C, V, z) => {
    const D = () => {
      if (p.isMounted) {
        let { next: R, bu: I, u: K, parent: re, vnode: fe } = p;
        {
          const We = F2(p);
          if (We) {
            R && (R.el = fe.el, Z(p, R, z)), We.asyncDep.then(() => {
              p.isUnmounted || D();
            });
            return;
          }
        }
        let ue = R, Ke;
        process.env.NODE_ENV !== "production" && Vr(R || p.vnode), Zt(p, !1), R ? (R.el = fe.el, Z(p, R, z)) : R = fe, I && bn(I), (Ke = R.props && R.props.onVnodeBeforeUpdate) && ht(Ke, re, R, fe), Zt(p, !0), process.env.NODE_ENV !== "production" && Nt(p, "render");
        const ze = ko(p);
        process.env.NODE_ENV !== "production" && Ot(p, "render");
        const rt = p.subTree;
        p.subTree = ze, process.env.NODE_ENV !== "production" && Nt(p, "patch"), v(
          rt,
          ze,
          // parent may have changed if it's in a teleport
          a(rt.el),
          // anchor may have changed if it's in a fragment
          P(rt),
          p,
          C,
          V
        ), process.env.NODE_ENV !== "production" && Ot(p, "patch"), R.el = ze.el, ue === null && g4(p, ze.el), K && Ge(K, C), (Ke = R.props && R.props.onVnodeUpdated) && Ge(
          () => ht(Ke, re, R, fe),
          C
        ), process.env.NODE_ENV !== "production" && y2(p), process.env.NODE_ENV !== "production" && Nr();
      } else {
        let R;
        const { el: I, props: K } = g, { bm: re, m: fe, parent: ue, root: Ke, type: ze } = p, rt = xn(g);
        if (Zt(p, !1), re && bn(re), !rt && (R = K && K.onVnodeBeforeMount) && ht(R, ue, g), Zt(p, !0), I && X) {
          const We = () => {
            process.env.NODE_ENV !== "production" && Nt(p, "render"), p.subTree = ko(p), process.env.NODE_ENV !== "production" && Ot(p, "render"), process.env.NODE_ENV !== "production" && Nt(p, "hydrate"), X(
              I,
              p.subTree,
              p,
              C,
              null
            ), process.env.NODE_ENV !== "production" && Ot(p, "hydrate");
          };
          rt && ze.__asyncHydrate ? ze.__asyncHydrate(
            I,
            p,
            We
          ) : We();
        } else {
          Ke.ce && Ke.ce._injectChildStyle(ze), process.env.NODE_ENV !== "production" && Nt(p, "render");
          const We = p.subTree = ko(p);
          process.env.NODE_ENV !== "production" && Ot(p, "render"), process.env.NODE_ENV !== "production" && Nt(p, "patch"), v(
            null,
            We,
            y,
            E,
            p,
            C,
            V
          ), process.env.NODE_ENV !== "production" && Ot(p, "patch"), g.el = We.el;
        }
        if (fe && Ge(fe, C), !rt && (R = K && K.onVnodeMounted)) {
          const We = g;
          Ge(
            () => ht(R, ue, We),
            C
          );
        }
        (g.shapeFlag & 256 || ue && xn(ue.vnode) && ue.vnode.shapeFlag & 256) && p.a && Ge(p.a, C), p.isMounted = !0, process.env.NODE_ENV !== "production" && da(p), g = y = E = null;
      }
    };
    p.scope.on();
    const L = p.effect = new ql(D);
    p.scope.off();
    const O = p.update = L.run.bind(L), U = p.job = L.runIfDirty.bind(L);
    U.i = p, U.id = p.uid, L.scheduler = () => po(U), Zt(p, !0), process.env.NODE_ENV !== "production" && (L.onTrack = p.rtc ? (R) => bn(p.rtc, R) : void 0, L.onTrigger = p.rtg ? (R) => bn(p.rtg, R) : void 0), O();
  }, Z = (p, g, y) => {
    g.component = p;
    const E = p.vnode.props;
    p.vnode = g, p.next = null, qa(p, g.props, E, y), t4(p, g.children, y), zt(), Mi(p), Rt();
  }, et = (p, g, y, E, C, V, z, D, L = !1) => {
    const O = p && p.children, U = p ? p.shapeFlag : 0, R = g.children, { patchFlag: I, shapeFlag: K } = g;
    if (I > 0) {
      if (I & 128) {
        Pt(
          O,
          R,
          y,
          E,
          C,
          V,
          z,
          D,
          L
        );
        return;
      } else if (I & 256) {
        Yt(
          O,
          R,
          y,
          E,
          C,
          V,
          z,
          D,
          L
        );
        return;
      }
    }
    K & 8 ? (U & 16 && _(O, C, V), R !== O && u(y, R)) : U & 16 ? K & 16 ? Pt(
      O,
      R,
      y,
      E,
      C,
      V,
      z,
      D,
      L
    ) : _(O, C, V, !0) : (U & 8 && u(y, ""), K & 16 && ne(
      R,
      y,
      E,
      C,
      V,
      z,
      D,
      L
    ));
  }, Yt = (p, g, y, E, C, V, z, D, L) => {
    p = p || _n, g = g || _n;
    const O = p.length, U = g.length, R = Math.min(O, U);
    let I;
    for (I = 0; I < R; I++) {
      const K = g[I] = L ? Ut(g[I]) : ot(g[I]);
      v(
        p[I],
        K,
        y,
        null,
        C,
        V,
        z,
        D,
        L
      );
    }
    O > U ? _(
      p,
      C,
      V,
      !0,
      !1,
      R
    ) : ne(
      g,
      y,
      E,
      C,
      V,
      z,
      D,
      L,
      R
    );
  }, Pt = (p, g, y, E, C, V, z, D, L) => {
    let O = 0;
    const U = g.length;
    let R = p.length - 1, I = U - 1;
    for (; O <= R && O <= I; ) {
      const K = p[O], re = g[O] = L ? Ut(g[O]) : ot(g[O]);
      if (In(K, re))
        v(
          K,
          re,
          y,
          null,
          C,
          V,
          z,
          D,
          L
        );
      else
        break;
      O++;
    }
    for (; O <= R && O <= I; ) {
      const K = p[R], re = g[I] = L ? Ut(g[I]) : ot(g[I]);
      if (In(K, re))
        v(
          K,
          re,
          y,
          null,
          C,
          V,
          z,
          D,
          L
        );
      else
        break;
      R--, I--;
    }
    if (O > R) {
      if (O <= I) {
        const K = I + 1, re = K < U ? g[K].el : E;
        for (; O <= I; )
          v(
            null,
            g[O] = L ? Ut(g[O]) : ot(g[O]),
            y,
            re,
            C,
            V,
            z,
            D,
            L
          ), O++;
      }
    } else if (O > I)
      for (; O <= R; )
        tt(p[O], C, V, !0), O++;
    else {
      const K = O, re = O, fe = /* @__PURE__ */ new Map();
      for (O = re; O <= I; O++) {
        const Pe = g[O] = L ? Ut(g[O]) : ot(g[O]);
        Pe.key != null && (process.env.NODE_ENV !== "production" && fe.has(Pe.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(Pe.key),
          "Make sure keys are unique."
        ), fe.set(Pe.key, O));
      }
      let ue, Ke = 0;
      const ze = I - re + 1;
      let rt = !1, We = 0;
      const An = new Array(ze);
      for (O = 0; O < ze; O++)
        An[O] = 0;
      for (O = K; O <= R; O++) {
        const Pe = p[O];
        if (Ke >= ze) {
          tt(Pe, C, V, !0);
          continue;
        }
        let pt;
        if (Pe.key != null)
          pt = fe.get(Pe.key);
        else
          for (ue = re; ue <= I; ue++)
            if (An[ue - re] === 0 && In(Pe, g[ue])) {
              pt = ue;
              break;
            }
        pt === void 0 ? tt(Pe, C, V, !0) : (An[pt - re] = O + 1, pt >= We ? We = pt : rt = !0, v(
          Pe,
          g[pt],
          y,
          null,
          C,
          V,
          z,
          D,
          L
        ), Ke++);
      }
      const yi = rt ? i4(An) : _n;
      for (ue = yi.length - 1, O = ze - 1; O >= 0; O--) {
        const Pe = re + O, pt = g[Pe], wi = Pe + 1 < U ? g[Pe + 1].el : E;
        An[O] === 0 ? v(
          null,
          pt,
          y,
          wi,
          C,
          V,
          z,
          D,
          L
        ) : rt && (ue < 0 || O !== yi[ue] ? dt(pt, y, wi, 2) : ue--);
      }
    }
  }, dt = (p, g, y, E, C = null) => {
    const { el: V, type: z, transition: D, children: L, shapeFlag: O } = p;
    if (O & 6) {
      dt(p.component.subTree, g, y, E);
      return;
    }
    if (O & 128) {
      p.suspense.move(g, y, E);
      return;
    }
    if (O & 64) {
      z.move(p, g, y, te);
      return;
    }
    if (z === ge) {
      r(V, g, y);
      for (let R = 0; R < L.length; R++)
        dt(L[R], g, y, E);
      r(p.anchor, g, y);
      return;
    }
    if (z === Hr) {
      A(p, g, y);
      return;
    }
    if (E !== 2 && O & 1 && D)
      if (E === 0)
        D.beforeEnter(V), r(V, g, y), Ge(() => D.enter(V), C);
      else {
        const { leave: R, delayLeave: I, afterLeave: K } = D, re = () => r(V, g, y), fe = () => {
          R(V, () => {
            re(), K && K();
          });
        };
        I ? I(V, re, fe) : fe();
      }
    else
      r(V, g, y);
  }, tt = (p, g, y, E = !1, C = !1) => {
    const {
      type: V,
      props: z,
      ref: D,
      children: L,
      dynamicChildren: O,
      shapeFlag: U,
      patchFlag: R,
      dirs: I,
      cacheIndex: K
    } = p;
    if (R === -2 && (C = !1), D != null && ns(D, null, y, p, !0), K != null && (g.renderCache[K] = void 0), U & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const re = U & 1 && I, fe = !xn(p);
    let ue;
    if (fe && (ue = z && z.onVnodeBeforeUnmount) && ht(ue, g, p), U & 6)
      kt(p.component, y, E);
    else {
      if (U & 128) {
        p.suspense.unmount(y, E);
        return;
      }
      re && Qt(p, null, g, "beforeUnmount"), U & 64 ? p.type.remove(
        p,
        g,
        y,
        te,
        E
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== ge || R > 0 && R & 64) ? _(
        O,
        g,
        y,
        !1,
        !0
      ) : (V === ge && R & 384 || !C && U & 16) && _(L, g, y), E && At(p);
    }
    (fe && (ue = z && z.onVnodeUnmounted) || re) && Ge(() => {
      ue && ht(ue, g, p), re && Qt(p, null, g, "unmounted");
    }, y);
  }, At = (p) => {
    const { type: g, el: y, anchor: E, transition: C } = p;
    if (g === ge) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && C && !C.persisted ? p.children.forEach((z) => {
        z.type === Fe ? o(z.el) : At(z);
      }) : gr(y, E);
      return;
    }
    if (g === Hr) {
      x(p);
      return;
    }
    const V = () => {
      o(y), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (p.shapeFlag & 1 && C && !C.persisted) {
      const { leave: z, delayLeave: D } = C, L = () => z(y, V);
      D ? D(p.el, V, L) : L();
    } else
      V();
  }, gr = (p, g) => {
    let y;
    for (; p !== g; )
      y = d(p), o(p), p = y;
    o(g);
  }, kt = (p, g, y) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && la(p);
    const { bum: E, scope: C, job: V, subTree: z, um: D, m: L, a: O } = p;
    $i(L), $i(O), E && bn(E), C.stop(), V && (V.flags |= 8, tt(z, p, g, y)), D && Ge(D, g), Ge(() => {
      p.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve()), process.env.NODE_ENV !== "production" && ha(p);
  }, _ = (p, g, y, E = !1, C = !1, V = 0) => {
    for (let z = V; z < p.length; z++)
      tt(p[z], g, y, E, C);
  }, P = (p) => {
    if (p.shapeFlag & 6)
      return P(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = d(p.anchor || p.el), y = g && g[ba];
    return y ? d(y) : g;
  };
  let T = !1;
  const k = (p, g, y) => {
    p == null ? g._vnode && tt(g._vnode, null, null, !0) : v(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      y
    ), g._vnode = p, T || (T = !0, Mi(), g2(), T = !1);
  }, te = {
    p: v,
    um: tt,
    m: dt,
    r: At,
    mt: He,
    mc: ne,
    pc: et,
    pbc: pe,
    n: P,
    o: e
  };
  let me, X;
  return t && ([me, X] = t(
    te
  )), {
    render: k,
    hydrate: me,
    createApp: ja(k, me)
  };
}
function Ao({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Zt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function s4(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mr(e, t, n = !1) {
  const r = e.children, o = t.children;
  if ($(r) && $(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let c = o[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[s] = Ut(o[s]), c.el = i.el), !n && c.patchFlag !== -2 && Mr(i, c)), c.type === pr && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === Fe && !c.el && (c.el = i.el);
    }
}
function i4(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, c;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < f ? s = c + 1 : i = c;
      f < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function F2(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : F2(t);
}
function $i(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const l4 = Symbol.for("v-scx"), c4 = () => {
  {
    const e = ct(l4);
    return e || process.env.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function a4(e, t) {
  return mo(e, null, t);
}
function u4(e, t) {
  return mo(
    e,
    null,
    process.env.NODE_ENV !== "production" ? we({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Vn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !q(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), mo(e, t, n);
}
function mo(e, t, n = se) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (r !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = we({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = M);
  let l;
  if (bo)
    if (s === "sync") {
      const d = c4();
      l = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!t || r)
      c.once = !0;
    else {
      const d = () => {
      };
      return d.stop = Ne, d.resume = Ne, d.pause = Ne, d;
    }
  const f = Oe;
  c.call = (d, h, m) => xt(d, f, h, m);
  let u = !1;
  s === "post" ? c.scheduler = (d) => {
    Ge(d, f && f.suspense);
  } : s !== "sync" && (u = !0, c.scheduler = (d, h) => {
    h ? d() : po(d);
  }), c.augmentJob = (d) => {
    t && (d.flags |= 4), u && (d.flags |= 2, f && (d.id = f.uid, d.i = f));
  };
  const a = Q1(e, t, c);
  return l && l.push(a), a;
}
function f4(e, t, n) {
  const r = this.proxy, o = ve(e) ? e.includes(".") ? U2(r, e) : () => r[e] : e.bind(r, r);
  let s;
  q(t) ? s = t : (s = t.handler, n = t);
  const i = hr(this), c = mo(o, s.bind(r), n);
  return i(), c;
}
function U2(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function nt(e, t, n = se) {
  const r = vo();
  if (process.env.NODE_ENV !== "production" && !r)
    return M("useModel() called without active instance."), Gt();
  if (process.env.NODE_ENV !== "production" && !r.propsOptions[0][t])
    return M(`useModel() called with prop "${t}" which is not declared.`), Gt();
  const o = je(t), s = _t(t), i = q2(e, t), c = G1((l, f) => {
    let u, a = se, d;
    return u4(() => {
      const h = e[t];
      Be(u, h) && (u = h, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(h) {
        const m = n.set ? n.set(h) : h;
        if (!Be(m, u) && !(a !== se && Be(h, a)))
          return;
        const v = r.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || s in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${s}` in v) || (u = h, f()), r.emit(`update:${t}`, m), Be(h, m) && Be(h, a) && !Be(m, d) && f(), a = h, d = m;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || se : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const q2 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${_t(t)}Modifiers`];
function d4(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || se;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [a]
    } = e;
    if (u)
      if (!(t in u))
        (!a || !(en(je(t)) in a)) && M(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${en(je(t))}" prop.`
        );
      else {
        const d = u[t];
        q(d) && (d(...n) || M(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && q2(r, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => ve(u) ? u.trim() : u)), i.number && (o = n.map(kr))), process.env.NODE_ENV !== "production" && va(e, t, o), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && r[en(u)] && M(
      `Event "${u}" is emitted in component ${wo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_t(
        t
      )}" instead of "${t}".`
    );
  }
  let c, l = r[c = en(t)] || // also try camelCase event handler (#2249)
  r[c = en(je(t))];
  !l && s && (l = r[c = en(_t(t))]), l && xt(
    l,
    e,
    6,
    o
  );
  const f = r[c + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, xt(
      f,
      e,
      6,
      o
    );
  }
}
function K2(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, c = !1;
  if (!q(e)) {
    const l = (f) => {
      const u = K2(f, t, !0);
      u && (c = !0, we(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !c ? (ce(e) && r.set(e, null), null) : ($(s) ? s.forEach((l) => i[l] = null) : we(i, s), ce(e) && r.set(e, i), i);
}
function go(e, t) {
  return !e || !lr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, _t(t)) || oe(e, t));
}
let cs = !1;
function Wr() {
  cs = !0;
}
function ko(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: i,
    attrs: c,
    emit: l,
    render: f,
    renderCache: u,
    props: a,
    data: d,
    setupState: h,
    ctx: m,
    inheritAttrs: v
  } = e, b = jr(e);
  let N, H;
  process.env.NODE_ENV !== "production" && (cs = !1);
  try {
    if (n.shapeFlag & 4) {
      const x = o || r, F = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(x, {
        get(j, G, ne) {
          return M(
            `Property '${String(
              G
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(j, G, ne);
        }
      }) : x;
      N = ot(
        f.call(
          F,
          x,
          u,
          process.env.NODE_ENV !== "production" ? gt(a) : a,
          h,
          d,
          m
        )
      ), H = c;
    } else {
      const x = t;
      process.env.NODE_ENV !== "production" && c === a && Wr(), N = ot(
        x.length > 1 ? x(
          process.env.NODE_ENV !== "production" ? gt(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Wr(), gt(c);
            },
            slots: i,
            emit: l
          } : { attrs: c, slots: i, emit: l }
        ) : x(
          process.env.NODE_ENV !== "production" ? gt(a) : a,
          null
        )
      ), H = t.props ? c : p4(c);
    }
  } catch (x) {
    Yn.length = 0, ur(x, e, 1), N = ie(Fe);
  }
  let S = N, A;
  if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && ([S, A] = W2(N)), H && v !== !1) {
    const x = Object.keys(H), { shapeFlag: F } = S;
    if (x.length) {
      if (F & 7)
        s && x.some(Pr) && (H = h4(
          H,
          s
        )), S = Jt(S, H, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !cs && S.type !== Fe) {
        const j = Object.keys(c), G = [], ne = [];
        for (let de = 0, pe = j.length; de < pe; de++) {
          const he = j[de];
          lr(he) ? Pr(he) || G.push(he[2].toLowerCase() + he.slice(3)) : ne.push(he);
        }
        ne.length && M(
          `Extraneous non-props attributes (${ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), G.length && M(
          `Extraneous non-emits event listeners (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ii(S) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), S = Jt(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ii(S) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Ws(S, n.transition)), process.env.NODE_ENV !== "production" && A ? A(S) : N = S, jr(b), N;
}
const W2 = (e) => {
  const t = e.children, n = e.dynamicChildren, r = Zs(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return W2(r);
  } else
    return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (c) => {
    t[o] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ot(r), i];
};
function Zs(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (dn(o)) {
      if (o.type !== Fe || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Zs(n.children);
      }
    } else
      return;
  }
  return n;
}
const p4 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || lr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, h4 = (e, t) => {
  const n = {};
  for (const r in e)
    (!Pr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Ii = (e) => e.shapeFlag & 7 || e.type === Fe;
function m4(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: c, patchFlag: l } = t, f = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || c) && vt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Bi(r, i, f) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        const d = u[a];
        if (i[d] !== r[d] && !go(f, d))
          return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? i ? Bi(r, i, f) : !0 : !!i;
  return !1;
}
function Bi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !go(n, s))
      return !0;
  }
  return !1;
}
function g4({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const G2 = (e) => e.__isSuspense;
function v4(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : m2(e);
}
const ge = Symbol.for("v-fgt"), pr = Symbol.for("v-txt"), Fe = Symbol.for("v-cmt"), Hr = Symbol.for("v-stc"), Yn = [];
let Xe = null;
function W(e = !1) {
  Yn.push(Xe = e ? null : []);
}
function b4() {
  Yn.pop(), Xe = Yn[Yn.length - 1] || null;
}
let or = 1;
function ji(e) {
  or += e, e < 0 && Xe && (Xe.hasOnce = !0);
}
function J2(e) {
  return e.dynamicChildren = or > 0 ? Xe || _n : null, b4(), or > 0 && Xe && Xe.push(e), e;
}
function ye(e, t, n, r, o, s) {
  return J2(
    B(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
    )
  );
}
function xe(e, t, n, r, o) {
  return J2(
    ie(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function dn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function In(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Or.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const y4 = (...e) => Y2(
  ...e
), X2 = ({ key: e }) => e ?? null, Lr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ve(e) || Se(e) || q(e) ? { i: Ce, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, s = e === ge ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && X2(t),
    ref: t && Lr(t),
    scopeId: _2,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return c ? (ti(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ve(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && M("VNode created with invalid key (NaN). VNode type:", l.type), or > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Xe.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? y4 : Y2;
function Y2(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === O2) && (process.env.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Fe), dn(e)) {
    const c = Jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ti(c, n), or > 0 && !s && Xe && (c.shapeFlag & 6 ? Xe[Xe.indexOf(e)] = c : Xe.push(c)), c.patchFlag = -2, c;
  }
  if (nc(e) && (e = e.__vccOpts), t) {
    t = w4(t);
    let { class: c, style: l } = t;
    c && !ve(c) && (t.class = ar(c)), ce(l) && ($r(l) && !$(l) && (l = we({}, l)), t.style = Rs(l));
  }
  const i = ve(e) ? 1 : G2(e) ? 128 : ya(e) ? 64 : ce(e) ? 4 : q(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && $r(e) && (e = Y(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), B(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function w4(e) {
  return e ? $r(e) || P2(e) ? we({}, e) : e : null;
}
function Jt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: c, transition: l } = e, f = t ? _4(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && X2(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? $(s) ? s.concat(Lr(t)) : [s, Lr(t)] : Lr(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && $(c) ? c.map(Q2) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jt(e.ssContent),
    ssFallback: e.ssFallback && Jt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Ws(
    u,
    l.clone(u)
  ), u;
}
function Q2(e) {
  const t = Jt(e);
  return $(e.children) && (t.children = e.children.map(Q2)), t;
}
function ei(e = " ", t = 0) {
  return ie(pr, null, e, t);
}
function Sn(e = "", t = !1) {
  return t ? (W(), xe(Fe, null, e)) : ie(Fe, null, e);
}
function ot(e) {
  return e == null || typeof e == "boolean" ? ie(Fe) : $(e) ? ie(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dn(e) ? Ut(e) : ie(pr, null, String(e));
}
function Ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jt(e);
}
function ti(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ti(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !P2(t) ? t._ctx = Ce : o === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    q(t) ? (t = { default: t, _ctx: Ce }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ei(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _4(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ar([t.class, r.class]));
      else if (o === "style")
        t.style = Rs([t.style, r.style]);
      else if (lr(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !($(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
function ht(e, t, n, r = null) {
  xt(e, t, 7, [
    n,
    r
  ]);
}
const E4 = z2();
let x4 = 0;
function C4(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || E4, s = {
    uid: x4++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new w1(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: k2(r, o),
    emitsOptions: K2(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: se,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: se,
    data: se,
    props: se,
    attrs: se,
    slots: se,
    refs: se,
    setupState: se,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = Da(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = d4.bind(null, s), e.ce && e.ce(s), s;
}
let Oe = null;
const vo = () => Oe || Ce;
let Gr, as;
{
  const e = zs(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  Gr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Oe = n
  ), as = t(
    "__VUE_SSR_SETTERS__",
    (n) => bo = n
  );
}
const hr = (e) => {
  const t = Oe;
  return Gr(e), e.scope.on(), () => {
    e.scope.off(), Gr(t);
  };
}, Fi = () => {
  Oe && Oe.scope.off(), Gr(null);
}, V4 = /* @__PURE__ */ Dt("slot,component");
function us(e, { isNativeTag: t }) {
  (V4(e) || t(e)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Z2(e) {
  return e.vnode.shapeFlag & 4;
}
let bo = !1;
function N4(e, t = !1, n = !1) {
  t && as(t);
  const { props: r, children: o } = e.vnode, s = Z2(e);
  Fa(e, r, s, t), e4(e, o, n);
  const i = s ? O4(e, t) : void 0;
  return t && as(!1), i;
}
function O4(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && us(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        us(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        E2(s[i]);
    }
    r.compilerOptions && ec() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, L2), process.env.NODE_ENV !== "production" && za(e);
  const { setup: o } = r;
  if (o) {
    const s = e.setupContext = o.length > 1 ? M4(e) : null, i = hr(e);
    zt();
    const c = Dn(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? gt(e.props) : e.props,
        s
      ]
    );
    if (Rt(), i(), Hs(c)) {
      if (xn(e) || x2(e), c.then(Fi, Fi), t)
        return c.then((l) => {
          Ui(e, l, t);
        }).catch((l) => {
          ur(l, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = r.name) != null ? n : "Anonymous";
        M(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ui(e, c, t);
  } else
    tc(e, t);
}
function Ui(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) ? (process.env.NODE_ENV !== "production" && dn(t) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = f2(t), process.env.NODE_ENV !== "production" && Ra(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && M(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), tc(e, n);
}
let fs;
const ec = () => !fs;
function tc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && fs && !r.render) {
      const o = r.template || Ys(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Nt(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: l } = r, f = we(
          we(
            {
              isCustomElement: s,
              delimiters: c
            },
            i
          ),
          l
        );
        r.render = fs(o, f), process.env.NODE_ENV !== "production" && Ot(e, "compile");
      }
    }
    e.render = r.render || Ne;
  }
  {
    const o = hr(e);
    zt();
    try {
      Pa(e);
    } finally {
      Rt(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === Ne && !t && (r.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", r));
}
const qi = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Wr(), Me(e, "get", ""), e[t];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function S4(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Me(e, "get", "$slots"), t[n];
    }
  });
}
function M4(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && ($(n) ? r = "array" : Se(n) && (r = "ref")), r !== "object" && M(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, qi));
      },
      get slots() {
        return r || (r = S4(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, qi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function yo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(f2(F1(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in an)
        return an[n](e);
    },
    has(t, n) {
      return n in t || n in an;
    }
  })) : e.proxy;
}
const H4 = /(?:^|[-_])(\w)/g, L4 = (e) => e.replace(H4, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ni(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wo(e, t, n = !1) {
  let r = ni(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? L4(r) : n ? "App" : "Anonymous";
}
function nc(e) {
  return q(e) && "__vccOpts" in e;
}
const De = (e, t) => {
  const n = X1(e, t, bo);
  if (process.env.NODE_ENV !== "production") {
    const r = vo();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function rc(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ce(t) && !$(t) ? dn(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && dn(n) && (n = [n]), ie(e, t, n));
}
function D4() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(a) {
      return ce(a) ? a.__isVue ? ["div", e, "VueInstance"] : Se(a) ? [
        "div",
        {},
        ["span", e, u(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in a ? a._value : a),
        ">"
      ] : ln(a) ? [
        "div",
        {},
        ["span", e, $e(a) ? "ShallowReactive" : "Reactive"],
        "<",
        c(a),
        `>${Lt(a) ? " (readonly)" : ""}`
      ] : Lt(a) ? [
        "div",
        {},
        ["span", e, $e(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const d = [];
    a.type.props && a.props && d.push(i("props", Y(a.props))), a.setupState !== se && d.push(i("setup", a.setupState)), a.data !== se && d.push(i("data", Y(a.data)));
    const h = l(a, "computed");
    h && d.push(i("computed", h));
    const m = l(a, "inject");
    return m && d.push(i("injected", m)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), d;
  }
  function i(a, d) {
    return d = we({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((h) => [
          "div",
          {},
          ["span", r, h + ": "],
          c(d[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, d = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", r, a] : ce(a) ? ["object", { object: d ? Y(a) : a }] : ["span", n, String(a)];
  }
  function l(a, d) {
    const h = a.type;
    if (q(h))
      return;
    const m = {};
    for (const v in a.ctx)
      f(h, v, d) && (m[v] = a.ctx[v]);
    return m;
  }
  function f(a, d, h) {
    const m = a[h];
    if ($(m) && m.includes(d) || ce(m) && d in m || a.extends && f(a.extends, d, h) || a.mixins && a.mixins.some((v) => f(v, d, h)))
      return !0;
  }
  function u(a) {
    return $e(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Ki = "3.5.9", yt = process.env.NODE_ENV !== "production" ? M : Ne;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ds;
const Wi = typeof window < "u" && window.trustedTypes;
if (Wi)
  try {
    ds = /* @__PURE__ */ Wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && yt(`Error creating trusted types policy: ${e}`);
  }
const oc = ds ? (e) => ds.createHTML(e) : (e) => e, z4 = "http://www.w3.org/2000/svg", R4 = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Gi = St && /* @__PURE__ */ St.createElement("template"), T4 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? St.createElementNS(z4, e) : t === "mathml" ? St.createElementNS(R4, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => St.createTextNode(e),
  createComment: (e) => St.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => St.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      Gi.innerHTML = oc(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Gi.content;
      if (r === "svg" || r === "mathml") {
        const l = c.firstChild;
        for (; l.firstChild; )
          c.appendChild(l.firstChild);
        c.removeChild(l);
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
}, P4 = Symbol("_vtc");
function A4(e, t, n) {
  const r = e[P4];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ji = Symbol("_vod"), k4 = Symbol("_vsh");
process.env.NODE_ENV;
const $4 = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), I4 = /(^|;)\s*display\s*:/;
function B4(e, t, n) {
  const r = e.style, o = ve(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (ve(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && Dr(r, c, "");
        }
      else
        for (const i in t)
          n[i] == null && Dr(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), Dr(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[$4];
      i && (n += ";" + i), r.cssText = n, s = I4.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ji in e && (e[Ji] = s ? r.display : "", e[k4] && (r.display = "none"));
}
const j4 = /[^\\];\s*$/, Xi = /\s*!important$/;
function Dr(e, t, n) {
  if ($(n))
    n.forEach((r) => Dr(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && j4.test(n) && yt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = F4(e, t);
    Xi.test(n) ? e.setProperty(
      _t(r),
      n.replace(Xi, ""),
      "important"
    ) : e[r] = n;
  }
}
const Yi = ["Webkit", "Moz", "ms"], $o = {};
function F4(e, t) {
  const n = $o[t];
  if (n)
    return n;
  let r = je(t);
  if (r !== "filter" && r in e)
    return $o[t] = r;
  r = un(r);
  for (let o = 0; o < Yi.length; o++) {
    const s = Yi[o] + r;
    if (s in e)
      return $o[t] = s;
  }
  return t;
}
const Qi = "http://www.w3.org/1999/xlink";
function Zi(e, t, n, r, o, s = v1(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qi, t.slice(6, t.length)) : e.setAttributeNS(Qi, t, n) : n == null || s && !jl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : wt(n) ? String(n) : n
  );
}
function U4(e, t, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? oc(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const i = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = jl(n) : n == null && i === "string" ? (n = "", s = !0) : i === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (i) {
    process.env.NODE_ENV !== "production" && !s && yt(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      i
    );
  }
  s && e.removeAttribute(t);
}
function nn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function q4(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const el = Symbol("_vei");
function K4(e, t, n, r, o = null) {
  const s = e[el] || (e[el] = {}), i = s[t];
  if (r && i)
    i.value = process.env.NODE_ENV !== "production" ? nl(r, t) : r;
  else {
    const [c, l] = W4(t);
    if (r) {
      const f = s[t] = X4(
        process.env.NODE_ENV !== "production" ? nl(r, t) : r,
        o
      );
      nn(e, c, f, l);
    } else
      i && (q4(e, c, i, l), s[t] = void 0);
  }
}
const tl = /(?:Once|Passive|Capture)$/;
function W4(e) {
  let t;
  if (tl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(tl); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _t(e.slice(2)), t];
}
let Io = 0;
const G4 = /* @__PURE__ */ Promise.resolve(), J4 = () => Io || (G4.then(() => Io = 0), Io = Date.now());
function X4(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xt(
      Y4(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = J4(), n;
}
function nl(e, t) {
  return q(e) || $(e) ? e : (yt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ne);
}
function Y4(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const rl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Q4 = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? A4(e, r, i) : t === "style" ? B4(e, n, r) : lr(t) ? Pr(t) || K4(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Z4(e, t, r, i)) ? (U4(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zi(e, t, r, i, s, t !== "value")) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Zi(e, t, r, i));
};
function Z4(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rl(t) && q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return rl(t) && ve(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !ve(n)));
}
const Jr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return $(t) ? (n) => bn(t, n) : t;
};
function eu(e) {
  e.target.composing = !0;
}
function ol(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Nn = Symbol("_assign"), sc = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Nn] = Jr(o);
    const s = r || o.props && o.props.type === "number";
    nn(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let c = e.value;
      n && (c = c.trim()), s && (c = kr(c)), e[Nn](c);
    }), n && nn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (nn(e, "compositionstart", eu), nn(e, "compositionend", ol), nn(e, "change", ol));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[Nn] = Jr(i), e.composing)
      return;
    const c = (s || e.type === "number") && !/^0\d/.test(e.value) ? kr(e.value) : e.value, l = t ?? "";
    c !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, tu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = ro(t);
    nn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? kr(Xr(i)) : Xr(i)
      );
      e[Nn](
        e.multiple ? o ? new Set(s) : s : s[0]
      ), e._assigning = !0, js(() => {
        e._assigning = !1;
      });
    }), e[Nn] = Jr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    sl(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Nn] = Jr(n);
  },
  updated(e, { value: t }) {
    e._assigning || sl(e, t);
  }
};
function sl(e, t) {
  const n = e.multiple, r = $(t);
  if (n && !r && !ro(t)) {
    process.env.NODE_ENV !== "production" && yt(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, s = e.options.length; o < s; o++) {
    const i = e.options[o], c = Xr(i);
    if (n)
      if (r) {
        const l = typeof c;
        l === "string" || l === "number" ? i.selected = t.some((f) => String(f) === String(c)) : i.selected = y1(t, c) > -1;
      } else
        i.selected = t.has(c);
    else if (so(Xr(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Xr(e) {
  return "_value" in e ? e._value : e.value;
}
const nu = ["ctrl", "shift", "alt", "meta"], ru = {
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
  exact: (e, t) => nu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Yr = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const c = ru[t[i]];
      if (c && c(o, t))
        return;
    }
    return e(o, ...s);
  });
}, ou = /* @__PURE__ */ we({ patchProp: Q4 }, T4);
let il;
function su() {
  return il || (il = r4(ou));
}
const iu = (...e) => {
  const t = su().createApp(...e);
  process.env.NODE_ENV !== "production" && (cu(t), au(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = uu(r);
    if (!o)
      return;
    const s = t._component;
    !q(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, lu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function lu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => p1(t) || h1(t) || m1(t),
    writable: !1
  });
}
function au(e) {
  if (ec()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        yt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return yt(r), n;
      },
      set() {
        yt(r);
      }
    });
  }
}
function uu(e) {
  if (ve(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && yt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && yt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fu() {
  D4();
}
process.env.NODE_ENV !== "production" && fu();
function ic(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: du } = Object.prototype, { getPrototypeOf: ri } = Object, _o = ((e) => (t) => {
  const n = du.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ft = (e) => (e = e.toLowerCase(), (t) => _o(t) === e), Eo = (e) => (t) => typeof t === e, { isArray: zn } = Array, sr = Eo("undefined");
function pu(e) {
  return e !== null && !sr(e) && e.constructor !== null && !sr(e.constructor) && Ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const lc = ft("ArrayBuffer");
function hu(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && lc(e.buffer), t;
}
const mu = Eo("string"), Ye = Eo("function"), cc = Eo("number"), xo = (e) => e !== null && typeof e == "object", gu = (e) => e === !0 || e === !1, zr = (e) => {
  if (_o(e) !== "object")
    return !1;
  const t = ri(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, vu = ft("Date"), bu = ft("File"), yu = ft("Blob"), wu = ft("FileList"), _u = (e) => xo(e) && Ye(e.pipe), Eu = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ye(e.append) && ((t = _o(e)) === "formdata" || // detect form-data instance
  t === "object" && Ye(e.toString) && e.toString() === "[object FormData]"));
}, xu = ft("URLSearchParams"), [Cu, Vu, Nu, Ou] = ["ReadableStream", "Request", "Response", "Headers"].map(ft), Su = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), zn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let c;
    for (r = 0; r < i; r++)
      c = s[r], t.call(null, e[c], c, e);
  }
}
function ac(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const rn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), uc = (e) => !sr(e) && e !== rn;
function ps() {
  const { caseless: e } = uc(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && ac(t, o) || o;
    zr(t[s]) && zr(r) ? t[s] = ps(t[s], r) : zr(r) ? t[s] = ps({}, r) : zn(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && mr(arguments[r], n);
  return t;
}
const Mu = (e, t, n, { allOwnKeys: r } = {}) => (mr(t, (o, s) => {
  n && Ye(o) ? e[s] = ic(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), Hu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lu = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Du = (e, t, n, r) => {
  let o, s, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ri(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zu = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ru = (e) => {
  if (!e)
    return null;
  if (zn(e))
    return e;
  let t = e.length;
  if (!cc(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Tu = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ri(Uint8Array)), Pu = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Au = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ku = ft("HTMLFormElement"), $u = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), ll = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Iu = ft("RegExp"), fc = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  mr(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, Bu = (e) => {
  fc(e, (t, n) => {
    if (Ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ye(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ju = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return zn(e) ? r(e) : r(String(e).split(t)), n;
}, Fu = () => {
}, Uu = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Bo = "abcdefghijklmnopqrstuvwxyz", cl = "0123456789", dc = {
  DIGIT: cl,
  ALPHA: Bo,
  ALPHA_DIGIT: Bo + Bo.toUpperCase() + cl
}, qu = (e = 16, t = dc.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ku(e) {
  return !!(e && Ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Wu = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (xo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = zn(r) ? [] : {};
        return mr(r, (i, c) => {
          const l = n(i, o + 1);
          !sr(l) && (s[c] = l);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Gu = ft("AsyncFunction"), Ju = (e) => e && (xo(e) || Ye(e)) && Ye(e.then) && Ye(e.catch), pc = ((e, t) => e ? setImmediate : t ? ((n, r) => (rn.addEventListener("message", ({ source: o, data: s }) => {
  o === rn && s === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), rn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ye(rn.postMessage)
), Xu = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof process < "u" && process.nextTick || pc, w = {
  isArray: zn,
  isArrayBuffer: lc,
  isBuffer: pu,
  isFormData: Eu,
  isArrayBufferView: hu,
  isString: mu,
  isNumber: cc,
  isBoolean: gu,
  isObject: xo,
  isPlainObject: zr,
  isReadableStream: Cu,
  isRequest: Vu,
  isResponse: Nu,
  isHeaders: Ou,
  isUndefined: sr,
  isDate: vu,
  isFile: bu,
  isBlob: yu,
  isRegExp: Iu,
  isFunction: Ye,
  isStream: _u,
  isURLSearchParams: xu,
  isTypedArray: Tu,
  isFileList: wu,
  forEach: mr,
  merge: ps,
  extend: Mu,
  trim: Su,
  stripBOM: Hu,
  inherits: Lu,
  toFlatObject: Du,
  kindOf: _o,
  kindOfTest: ft,
  endsWith: zu,
  toArray: Ru,
  forEachEntry: Pu,
  matchAll: Au,
  isHTMLForm: ku,
  hasOwnProperty: ll,
  hasOwnProp: ll,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: fc,
  freezeMethods: Bu,
  toObjectSet: ju,
  toCamelCase: $u,
  noop: Fu,
  toFiniteNumber: Uu,
  findKey: ac,
  global: rn,
  isContextDefined: uc,
  ALPHABET: dc,
  generateString: qu,
  isSpecCompliantForm: Ku,
  toJSONObject: Wu,
  isAsyncFn: Gu,
  isThenable: Ju,
  setImmediate: pc,
  asap: Xu
};
function J(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
w.inherits(J, Error, {
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
      config: w.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const hc = J.prototype, mc = {};
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
  mc[e] = { value: e };
});
Object.defineProperties(J, mc);
Object.defineProperty(hc, "isAxiosError", { value: !0 });
J.from = (e, t, n, r, o, s) => {
  const i = Object.create(hc);
  return w.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError"), J.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Yu = null;
function hs(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function gc(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function al(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = gc(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Qu(e) {
  return w.isArray(e) && !e.some(hs);
}
const Zu = w.toFlatObject(w, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Co(e, t, n) {
  if (!w.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = w.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, b) {
    return !w.isUndefined(b[v]);
  });
  const r = n.metaTokens, o = n.visitor || u, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
  if (!w.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(m) {
    if (m === null)
      return "";
    if (w.isDate(m))
      return m.toISOString();
    if (!l && w.isBlob(m))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(m) || w.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, v, b) {
    let N = m;
    if (m && !b && typeof m == "object") {
      if (w.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), m = JSON.stringify(m);
      else if (w.isArray(m) && Qu(m) || (w.isFileList(m) || w.endsWith(v, "[]")) && (N = w.toArray(m)))
        return v = gc(v), N.forEach(function(S, A) {
          !(w.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? al([v], A, s) : i === null ? v : v + "[]",
            f(S)
          );
        }), !1;
    }
    return hs(m) ? !0 : (t.append(al(b, v, s), f(m)), !1);
  }
  const a = [], d = Object.assign(Zu, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: hs
  });
  function h(m, v) {
    if (!w.isUndefined(m)) {
      if (a.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      a.push(m), w.forEach(m, function(N, H) {
        (!(w.isUndefined(N) || N === null) && o.call(
          t,
          N,
          w.isString(H) ? H.trim() : H,
          v,
          d
        )) === !0 && h(N, v ? v.concat(H) : [H]);
      }), a.pop();
    }
  }
  if (!w.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function ul(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function oi(e, t) {
  this._pairs = [], e && Co(e, this, t);
}
const vc = oi.prototype;
vc.append = function(t, n) {
  this._pairs.push([t, n]);
};
vc.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ul);
  } : ul;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function e3(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function bc(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || e3, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = w.isURLSearchParams(t) ? t.toString() : new oi(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class t3 {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    w.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const fl = t3, yc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, n3 = typeof URLSearchParams < "u" ? URLSearchParams : oi, r3 = typeof FormData < "u" ? FormData : null, o3 = typeof Blob < "u" ? Blob : null, s3 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: n3,
    FormData: r3,
    Blob: o3
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, si = typeof window < "u" && typeof document < "u", ms = typeof navigator == "object" && navigator || void 0, i3 = si && (!ms || ["ReactNative", "NativeScript", "NS"].indexOf(ms.product) < 0), l3 = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), c3 = si && window.location.href || "http://localhost", a3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: si,
  hasStandardBrowserEnv: i3,
  hasStandardBrowserWebWorkerEnv: l3,
  navigator: ms,
  origin: c3
}, Symbol.toStringTag, { value: "Module" })), Ue = {
  ...a3,
  ...s3
};
function u3(e, t) {
  return Co(e, new Ue.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return Ue.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function f3(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function d3(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function wc(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), l = s >= n.length;
    return i = !i && w.isArray(o) ? o.length : i, l ? (w.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !c) : ((!o[i] || !w.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && w.isArray(o[i]) && (o[i] = d3(o[i])), !c);
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return w.forEachEntry(e, (r, o) => {
      t(f3(r), o, n, 0);
    }), n;
  }
  return null;
}
function p3(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ii = {
  transitional: yc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = w.isObject(t);
    if (s && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t))
      return o ? JSON.stringify(wc(t)) : t;
    if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t) || w.isReadableStream(t))
      return t;
    if (w.isArrayBufferView(t))
      return t.buffer;
    if (w.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return u3(t, this.formSerializer).toString();
      if ((c = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Co(
          c ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), p3(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ii.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (w.isResponse(t) || w.isReadableStream(t))
      return t;
    if (t && w.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? J.from(c, J.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: Ue.classes.FormData,
    Blob: Ue.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ii.headers[e] = {};
});
const li = ii, h3 = w.toObjectSet([
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
]), m3 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && h3[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, dl = Symbol("internals");
function Bn(e) {
  return e && String(e).trim().toLowerCase();
}
function Rr(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(Rr) : String(e);
}
function g3(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const v3 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function jo(e, t, n, r, o) {
  if (w.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!w.isString(t)) {
    if (w.isString(r))
      return t.indexOf(r) !== -1;
    if (w.isRegExp(r))
      return r.test(t);
  }
}
function b3(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function y3(e, t) {
  const n = w.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class Vo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(c, l, f) {
      const u = Bn(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const a = w.findKey(o, u);
      (!a || o[a] === void 0 || f === !0 || f === void 0 && o[a] !== !1) && (o[a || l] = Rr(c));
    }
    const i = (c, l) => w.forEach(c, (f, u) => s(f, u, l));
    if (w.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (w.isString(t) && (t = t.trim()) && !v3(t))
      i(m3(t), n);
    else if (w.isHeaders(t))
      for (const [c, l] of t.entries())
        s(l, c, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Bn(t), t) {
      const r = w.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return g3(o);
        if (w.isFunction(n))
          return n.call(this, o, r);
        if (w.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Bn(t), t) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || jo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Bn(i), i) {
        const c = w.findKey(r, i);
        c && (!n || jo(r, r[c], c, n)) && (delete r[c], o = !0);
      }
    }
    return w.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || jo(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return w.forEach(this, (o, s) => {
      const i = w.findKey(r, s);
      if (i) {
        n[i] = Rr(o), delete n[s];
        return;
      }
      const c = t ? b3(s) : String(s).trim();
      c !== s && delete n[s], n[c] = Rr(o), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return w.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && w.isArray(r) ? r.join(", ") : r);
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
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[dl] = this[dl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const c = Bn(i);
      r[c] || (y3(o, i), r[c] = !0);
    }
    return w.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Vo.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(Vo.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
w.freezeMethods(Vo);
const at = Vo;
function Fo(e, t) {
  const n = this || li, r = t || n, o = at.from(r.headers);
  let s = r.data;
  return w.forEach(e, function(c) {
    s = c.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function _c(e) {
  return !!(e && e.__CANCEL__);
}
function Rn(e, t, n) {
  J.call(this, e ?? "canceled", J.ERR_CANCELED, t, n), this.name = "CanceledError";
}
w.inherits(Rn, J, {
  __CANCEL__: !0
});
function Ec(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new J(
    "Request failed with status code " + n.status,
    [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function w3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _3(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const f = Date.now(), u = r[s];
    i || (i = f), n[o] = l, r[o] = f;
    let a = s, d = 0;
    for (; a !== o; )
      d += n[a++], a = a % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), f - i < t)
      return;
    const h = u && f - u;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function E3(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const i = (f, u = Date.now()) => {
    n = u, o = null, s && (clearTimeout(s), s = null), e.apply(null, f);
  };
  return [(...f) => {
    const u = Date.now(), a = u - n;
    a >= r ? i(f, u) : (o = f, s || (s = setTimeout(() => {
      s = null, i(o);
    }, r - a)));
  }, () => o && i(o)];
}
const Qr = (e, t, n = 3) => {
  let r = 0;
  const o = _3(50, 250);
  return E3((s) => {
    const i = s.loaded, c = s.lengthComputable ? s.total : void 0, l = i - r, f = o(l), u = i <= c;
    r = i;
    const a = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && c && u ? (c - i) / f : void 0,
      event: s,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(a);
  }, n);
}, pl = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, hl = (e) => (...t) => w.asap(() => e(...t)), x3 = Ue.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Ue.navigator && /(msie|trident)/i.test(Ue.navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
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
    return r = o(window.location.href), function(i) {
      const c = w.isString(i) ? o(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
), C3 = Ue.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      w.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), w.isString(r) && i.push("path=" + r), w.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function V3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function N3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xc(e, t) {
  return e && !V3(t) ? N3(e, t) : t;
}
const ml = (e) => e instanceof at ? { ...e } : e;
function pn(e, t) {
  t = t || {};
  const n = {};
  function r(f, u, a) {
    return w.isPlainObject(f) && w.isPlainObject(u) ? w.merge.call({ caseless: a }, f, u) : w.isPlainObject(u) ? w.merge({}, u) : w.isArray(u) ? u.slice() : u;
  }
  function o(f, u, a) {
    if (w.isUndefined(u)) {
      if (!w.isUndefined(f))
        return r(void 0, f, a);
    } else
      return r(f, u, a);
  }
  function s(f, u) {
    if (!w.isUndefined(u))
      return r(void 0, u);
  }
  function i(f, u) {
    if (w.isUndefined(u)) {
      if (!w.isUndefined(f))
        return r(void 0, f);
    } else
      return r(void 0, u);
  }
  function c(f, u, a) {
    if (a in t)
      return r(f, u);
    if (a in e)
      return r(void 0, f);
  }
  const l = {
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
    withXSRFToken: i,
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
    validateStatus: c,
    headers: (f, u) => o(ml(f), ml(u), !0)
  };
  return w.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const a = l[u] || o, d = a(e[u], t[u], u);
    w.isUndefined(d) && a !== c || (n[u] = d);
  }), n;
}
const Cc = (e) => {
  const t = pn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: c } = t;
  t.headers = i = at.from(i), t.url = bc(xc(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let l;
  if (w.isFormData(n)) {
    if (Ue.hasStandardBrowserEnv || Ue.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [f, ...u] = l ? l.split(";").map((a) => a.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ue.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)), r || r !== !1 && x3(t.url))) {
    const f = o && s && C3.read(s);
    f && i.set(o, f);
  }
  return t;
}, O3 = typeof XMLHttpRequest < "u", S3 = O3 && function(e) {
  return new Promise(function(n, r) {
    const o = Cc(e);
    let s = o.data;
    const i = at.from(o.headers).normalize();
    let { responseType: c, onUploadProgress: l, onDownloadProgress: f } = o, u, a, d, h, m;
    function v() {
      h && h(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let b = new XMLHttpRequest();
    b.open(o.method.toUpperCase(), o.url, !0), b.timeout = o.timeout;
    function N() {
      if (!b)
        return;
      const S = at.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), x = {
        data: !c || c === "text" || c === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: S,
        config: e,
        request: b
      };
      Ec(function(j) {
        n(j), v();
      }, function(j) {
        r(j), v();
      }, x), b = null;
    }
    "onloadend" in b ? b.onloadend = N : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(N);
    }, b.onabort = function() {
      b && (r(new J("Request aborted", J.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      r(new J("Network Error", J.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || yc;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), r(new J(
        A,
        x.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
        e,
        b
      )), b = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in b && w.forEach(i.toJSON(), function(A, x) {
      b.setRequestHeader(x, A);
    }), w.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials), c && c !== "json" && (b.responseType = o.responseType), f && ([d, m] = Qr(f, !0), b.addEventListener("progress", d)), l && b.upload && ([a, h] = Qr(l), b.upload.addEventListener("progress", a), b.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (S) => {
      b && (r(!S || S.type ? new Rn(null, e, b) : S), b.abort(), b = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const H = w3(o.url);
    if (H && Ue.protocols.indexOf(H) === -1) {
      r(new J("Unsupported protocol " + H + ":", J.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(s || null);
  });
}, M3 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const s = function(f) {
      if (!o) {
        o = !0, c();
        const u = f instanceof Error ? f : this.reason;
        r.abort(u instanceof J ? u : new Rn(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new J(`timeout ${t} of ms exceeded`, J.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", s));
    const { signal: l } = r;
    return l.unsubscribe = () => w.asap(c), l;
  }
}, H3 = M3, L3 = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, D3 = async function* (e, t) {
  for await (const n of z3(e))
    yield* L3(n, t);
}, z3 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, gl = (e, t, n, r) => {
  const o = D3(e, t);
  let s = 0, i, c = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: f, value: u } = await o.next();
        if (f) {
          c(), l.close();
          return;
        }
        let a = u.byteLength;
        if (n) {
          let d = s += a;
          n(d);
        }
        l.enqueue(new Uint8Array(u));
      } catch (f) {
        throw c(f), f;
      }
    },
    cancel(l) {
      return c(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, No = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Vc = No && typeof ReadableStream == "function", R3 = No && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Nc = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, T3 = Vc && Nc(() => {
  let e = !1;
  const t = new Request(Ue.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), vl = 64 * 1024, gs = Vc && Nc(() => w.isReadableStream(new Response("").body)), Zr = {
  stream: gs && ((e) => e.body)
};
No && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Zr[t] && (Zr[t] = w.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new J(`Response type '${t}' is not supported`, J.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const P3 = async (e) => {
  if (e == null)
    return 0;
  if (w.isBlob(e))
    return e.size;
  if (w.isSpecCompliantForm(e))
    return (await new Request(Ue.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (w.isArrayBufferView(e) || w.isArrayBuffer(e))
    return e.byteLength;
  if (w.isURLSearchParams(e) && (e = e + ""), w.isString(e))
    return (await R3(e)).byteLength;
}, A3 = async (e, t) => {
  const n = w.toFiniteNumber(e.getContentLength());
  return n ?? P3(t);
}, k3 = No && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: l,
    responseType: f,
    headers: u,
    withCredentials: a = "same-origin",
    fetchOptions: d
  } = Cc(e);
  f = f ? (f + "").toLowerCase() : "text";
  let h = H3([o, s && s.toAbortSignal()], i), m;
  const v = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let b;
  try {
    if (l && T3 && n !== "get" && n !== "head" && (b = await A3(u, r)) !== 0) {
      let x = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), F;
      if (w.isFormData(r) && (F = x.headers.get("content-type")) && u.setContentType(F), x.body) {
        const [j, G] = pl(
          b,
          Qr(hl(l))
        );
        r = gl(x.body, vl, j, G);
      }
    }
    w.isString(a) || (a = a ? "include" : "omit");
    const N = "credentials" in Request.prototype;
    m = new Request(t, {
      ...d,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: N ? a : void 0
    });
    let H = await fetch(m);
    const S = gs && (f === "stream" || f === "response");
    if (gs && (c || S && v)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((ne) => {
        x[ne] = H[ne];
      });
      const F = w.toFiniteNumber(H.headers.get("content-length")), [j, G] = c && pl(
        F,
        Qr(hl(c), !0)
      ) || [];
      H = new Response(
        gl(H.body, vl, j, () => {
          G && G(), v && v();
        }),
        x
      );
    }
    f = f || "text";
    let A = await Zr[w.findKey(Zr, f) || "text"](H, e);
    return !S && v && v(), await new Promise((x, F) => {
      Ec(x, F, {
        data: A,
        headers: at.from(H.headers),
        status: H.status,
        statusText: H.statusText,
        config: e,
        request: m
      });
    });
  } catch (N) {
    throw v && v(), N && N.name === "TypeError" && /fetch/i.test(N.message) ? Object.assign(
      new J("Network Error", J.ERR_NETWORK, e, m),
      {
        cause: N.cause || N
      }
    ) : J.from(N, N && N.code, e, m);
  }
}), vs = {
  http: Yu,
  xhr: S3,
  fetch: k3
};
w.forEach(vs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bl = (e) => `- ${e}`, $3 = (e) => w.isFunction(e) || e === null || e === !1, Oc = {
  getAdapter: (e) => {
    e = w.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !$3(n) && (r = vs[(i = String(n)).toLowerCase()], r === void 0))
        throw new J(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(bl).join(`
`) : " " + bl(s[0]) : "as no adapter specified";
      throw new J(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: vs
};
function Uo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Rn(null, e);
}
function yl(e) {
  return Uo(e), e.headers = at.from(e.headers), e.data = Fo.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Oc.getAdapter(e.adapter || li.adapter)(e).then(function(r) {
    return Uo(e), r.data = Fo.call(
      e,
      e.transformResponse,
      r
    ), r.headers = at.from(r.headers), r;
  }, function(r) {
    return _c(r) || (Uo(e), r && r.response && (r.response.data = Fo.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = at.from(r.response.headers))), Promise.reject(r);
  });
}
const Sc = "1.7.7", ci = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ci[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wl = {};
ci.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Sc + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, c) => {
    if (t === !1)
      throw new J(
        o(i, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED
      );
    return n && !wl[i] && (wl[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, c) : !0;
  };
};
function I3(e, t, n) {
  if (typeof e != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const c = e[s], l = c === void 0 || i(c, s, e);
      if (l !== !0)
        throw new J("option " + s + " must be " + l, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new J("Unknown option " + s, J.ERR_BAD_OPTION);
  }
}
const bs = {
  assertOptions: I3,
  validators: ci
}, It = bs.validators;
class eo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new fl(),
      response: new fl()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = pn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && bs.assertOptions(r, {
      silentJSONParsing: It.transitional(It.boolean),
      forcedJSONParsing: It.transitional(It.boolean),
      clarifyTimeoutError: It.transitional(It.boolean)
    }, !1), o != null && (w.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : bs.assertOptions(o, {
      encode: It.function,
      serialize: It.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && w.merge(
      s.common,
      s[n.method]
    );
    s && w.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), n.headers = at.concat(i, s);
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, c.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let u, a = 0, d;
    if (!l) {
      const m = [yl.bind(this), void 0];
      for (m.unshift.apply(m, c), m.push.apply(m, f), d = m.length, u = Promise.resolve(n); a < d; )
        u = u.then(m[a++], m[a++]);
      return u;
    }
    d = c.length;
    let h = n;
    for (a = 0; a < d; ) {
      const m = c[a++], v = c[a++];
      try {
        h = m(h);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      u = yl.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (a = 0, d = f.length; a < d; )
      u = u.then(f[a++], f[a++]);
    return u;
  }
  getUri(t) {
    t = pn(this.defaults, t);
    const n = xc(t.baseURL, t.url);
    return bc(n, t.params, t.paramsSerializer);
  }
}
w.forEach(["delete", "get", "head", "options"], function(t) {
  eo.prototype[t] = function(n, r) {
    return this.request(pn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
w.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, c) {
      return this.request(pn(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  eo.prototype[t] = n(), eo.prototype[t + "Form"] = n(!0);
});
const Tr = eo;
class ai {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((c) => {
        r.subscribe(c), s = c;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, c) {
      r.reason || (r.reason = new Rn(s, i, c), n(r.reason));
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
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ai(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const B3 = ai;
function j3(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function F3(e) {
  return w.isObject(e) && e.isAxiosError === !0;
}
const ys = {
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
Object.entries(ys).forEach(([e, t]) => {
  ys[t] = e;
});
const U3 = ys;
function Mc(e) {
  const t = new Tr(e), n = ic(Tr.prototype.request, t);
  return w.extend(n, Tr.prototype, t, { allOwnKeys: !0 }), w.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Mc(pn(e, o));
  }, n;
}
const Ve = Mc(li);
Ve.Axios = Tr;
Ve.CanceledError = Rn;
Ve.CancelToken = B3;
Ve.isCancel = _c;
Ve.VERSION = Sc;
Ve.toFormData = Co;
Ve.AxiosError = J;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) {
  return Promise.all(t);
};
Ve.spread = j3;
Ve.isAxiosError = F3;
Ve.mergeConfig = pn;
Ve.AxiosHeaders = at;
Ve.formToJSON = (e) => wc(w.isHTMLForm(e) ? new FormData(e) : e);
Ve.getAdapter = Oc.getAdapter;
Ve.HttpStatusCode = U3;
Ve.default = Ve;
const ws = Ve;
class Hc {
  constructor() {
    Mo(this, "client");
    let t = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.client = ws.create(t);
  }
  async loadPages() {
    return (await this.client.get("/page-builder/data/pages")).data.pages;
  }
  async loadPage(t) {
    return (await this.client.get(`/page-builder/data/pages/${t}`)).data;
  }
  async createPage(t) {
    await this.client.post("/page-builder/data/pages", { title: t });
  }
  async savePage(t) {
    await this.client.put(`/page-builder/data/pages/${t.uuid}`, t);
  }
  async storeFile(t, n, r) {
    return (await this.client.post("/page-builder/files", { uuid: t, key: n, bucket: r })).data.file;
  }
}
const q3 = ["viewBox"], K3 = ["d"], ui = /* @__PURE__ */ _e({
  __name: "Icon",
  props: ["icon"],
  setup(e) {
    const t = e, n = {
      upload: {
        d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z",
        viewBox: "0 0 640 512"
      },
      image: {
        d: "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z",
        viewBox: "0 0 512 512"
      },
      ellipsis: {
        d: "M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z",
        viewBox: "0 0 448 512"
      },
      redo: {
        d: "M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z",
        viewBox: "0 0 512 512"
      },
      undo: {
        d: "M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z",
        viewBox: "0 0 512 512"
      },
      save: {
        d: "M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z",
        viewBox: "0 0 448 512"
      },
      cross: {
        d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z",
        viewBox: "0 0 320 512"
      },
      plus: {
        d: "M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z",
        viewBox: "0 0 448 512"
      },
      minus: {
        d: "M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z",
        viewBox: "0 0 448 512"
      },
      eyeOpen: {
        d: "M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z",
        viewBox: "0 0 576 512"
      },
      eyeClosed: {
        d: "M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z",
        viewBox: "0 0 640 512"
      },
      trash: {
        d: "M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z",
        viewBox: "0 0 448 512"
      },
      grid: {
        d: "M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232zM128 440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440zM160 72C160 49.91 177.9 32 200 32H248C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM448 120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120zM320 232C320 209.9 337.9 192 360 192H408C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z",
        viewBox: "0 0 448 512"
      },
      textIcon: {
        d: "M448 64.01v64c0 17.69-14.31 32-32 32s-32-14.31-32-32v-32h-128v320h48c17.69 0 32 14.31 32 32s-14.31 31.1-32 31.1h-160c-17.69 0-32-14.31-32-31.1s14.31-32 32-32H192v-320H64v32c0 17.69-14.31 32-32 32s-32-14.31-32-32v-64c0-17.69 14.31-32 32-32h384C433.7 32.01 448 46.33 448 64.01z",
        viewBox: "0 0 448 512"
      },
      lineChart: {
        d: "M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z",
        viewBox: "0 0 512 512"
      },
      hashtag: {
        d: "M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z",
        viewBox: "0 0 448 512"
      },
      squareBorder: {
        d: "M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z",
        viewBox: "0 0 448 512"
      },
      table: {
        d: "M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM232 264V160H48V264H232zM48 312V416C48 424.8 55.16 432 64 432H232V312H48zM280 432H448C456.8 432 464 424.8 464 416V312H280V432zM464 264V160H280V264H464z",
        viewBox: "0 0 512 512"
      },
      check: {
        d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z",
        viewBox: "0 0 448 512"
      },
      loadingSpinner: {
        d: "M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z",
        viewBox: "0 0 512 512"
      },
      barsFilter: {
        d: "M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H352C369.7 224 384 238.3 384 256C384 273.7 369.7 288 352 288H96C78.33 288 64 273.7 64 256zM256 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H256C273.7 384 288 398.3 288 416C288 433.7 273.7 448 256 448z",
        viewBox: "0 0 448 512"
      },
      chevronUp: {
        d: "M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z",
        viewBox: "0 0 384 512"
      },
      doubleChevronUp: {
        d: "M278.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3 425.4 278.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-192-192zm192 384l-192-192c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 301.3 425.4 470.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z",
        viewBox: "0 0 512 512"
      },
      pen: {
        d: "M58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L58.57 323.5zM82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L383 191L320.1 128.1L92.51 357.4C91.92 358 91.35 358.6 90.8 359.3C86.94 363.6 84.07 368.8 82.42 374.4L82.42 374.4z",
        viewBox: "0 0 512 512"
      },
      chat: {
        d: "M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z",
        viewBox: "0 0 512 512"
      },
      video: {
        d: "M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z",
        viewBox: "0 0 576 512"
      },
      phone: {
        d: "M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z",
        viewBox: "0 0 512 512"
      },
      cobrowse: {
        d: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z",
        viewBox: "0 0 576 512"
      },
      hourglass: {
        d: "M0 32C0 14.33 14.33 0 32 0H352C369.7 0 384 14.33 384 32C384 49.67 369.7 64 352 64V74.98C352 117.4 335.1 158.1 305.1 188.1L237.3 256L305.1 323.9C335.1 353.9 352 394.6 352 437V448C369.7 448 384 462.3 384 480C384 497.7 369.7 512 352 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V437C32 394.6 48.86 353.9 78.86 323.9L146.7 256L78.86 188.1C48.86 158.1 32 117.4 32 74.98V64C14.33 64 0 49.67 0 32zM96 64V74.98C96 100.4 106.1 124.9 124.1 142.9L192 210.7L259.9 142.9C277.9 124.9 288 100.4 288 74.98V64H96zM96 448H288V437C288 411.6 277.9 387.1 259.9 369.1L192 301.3L124.1 369.1C106.1 387.1 96 411.6 96 437V448z",
        viewBox: "0 0 384 512"
      },
      cog: {
        d: "M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z",
        viewBox: "0 0 512 512"
      },
      arrowLeft: {
        d: "M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z",
        viewBox: "0 0 448 512"
      },
      sparkles: {
        d: "M327.5 85.2c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L384 128l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L448 128l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L448 64 426.8 7.5C425.1 3 420.8 0 416 0s-9.1 3-10.8 7.5L384 64 327.5 85.2zM205.1 73.3c-2.6-5.7-8.3-9.3-14.5-9.3s-11.9 3.6-14.5 9.3L123.3 187.3 9.3 240C3.6 242.6 0 248.3 0 254.6s3.6 11.9 9.3 14.5l114.1 52.7L176 435.8c2.6 5.7 8.3 9.3 14.5 9.3s11.9-3.6 14.5-9.3l52.7-114.1 114.1-52.7c5.7-2.6 9.3-8.3 9.3-14.5s-3.6-11.9-9.3-14.5L257.8 187.4 205.1 73.3zM384 384l-56.5 21.2c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L384 448l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L448 448l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L448 384l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L384 384z",
        viewBox: "0 0 512 512"
      },
      magnifyingGlass: {
        d: "M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z",
        viewBox: "0 0 512 512"
      },
      triangleExclamation: {
        d: "M506.3 417l-213.3-364C284.8 39 270.4 32 256 32C241.6 32 227.2 39 218.1 53l-213.2 364C-10.59 444.9 9.851 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM52.58 432L255.1 84.8L459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44c0 17.36 14.11 31.44 31.48 31.44s31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96C232 293.3 242.8 304 256 304s24-10.75 24-24v-96C280 170.8 269.3 160 256 160S232 170.8 232 184z",
        viewBox: "0 0 512 512"
      },
      sync: {
        d: "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z",
        viewBox: "0 0 512 512"
      },
      fire: {
        d: "M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM224 464c-97 0-176-81.88-176-182.4c0-45.38 44.25-133.2 120.1-214.1C190.5 90.88 211 115.2 228.5 139.4l36.63 50.38l39.38-48.25c5.875-7.125 11.88-14.12 18-21C368.9 178 400 250.4 400 281.6C400 382.1 321 464 224 464zM313.5 243.1l-51.38 58.5c0 0-80.37-102.6-86.37-109.6C133.2 242.9 112 272.6 112 306.4C112 374.3 163.4 416 226.5 416c25.25 0 48.63-7.875 67.63-21.12c43-30.12 53.12-88.63 29.25-134.3C320.4 255 317.1 249.1 313.5 243.1z",
        viewBox: "0 0 448 512"
      },
      lightbulb: {
        d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z",
        viewBox: "0 0 384 512"
      },
      play: {
        d: "M384 256L0 32V480L384 256z",
        viewBox: "0 0 384 512"
      },
      pause: {
        d: "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z",
        viewBox: "0 0 320 512"
      },
      bell: {
        d: "M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z",
        viewBox: "0 0 448 512"
      },
      bells: {
        d: "M230.8 245.5l18.7 51.2c11.7 31.8 12.9 66.5 3.5 99.1l-1.1 3.9L21.4 315.8C10 311.7 2 301.5 .6 289.5s4.1-23.8 14.3-30.4l8.2-5.4C57.6 231 84 197.8 98.2 159l14.7-40C138 50.4 214 15.1 282.6 40.1c4.8 1.7 9.4 3.7 13.9 6c-64.1 42.2-93.3 124.2-65.7 199.5zm30.1-10.9c-26.1-71.3 10.5-150.2 81.9-176.2s150.4 10.8 176.5 82.1L538 191.7c14 38.2 39.8 71 73.6 93.6l13.7 9.2c10 6.7 15.4 18.5 14 30.4s-9.5 22.1-20.8 26.2L321.1 459.4c-11.3 4.1-24 1.5-32.8-6.7s-12.3-20.7-9-32.2l4.6-15.8c11.2-39 9.7-80.7-4.3-118.9l-18.8-51.2zM480.8 480c-21.2 0-40-10.2-51.7-25.9l116.1-42.3c.1 1.3 .1 2.6 .1 3.9c0 35.5-28.9 64.3-64.5 64.3zM94.3 376.1l117.6 43.4c-11.6 17.1-31.2 28.4-53.5 28.4c-35.6 0-64.5-28.8-64.5-64.3c0-2.5 .1-5.1 .4-7.5z",
        viewBox: "0 0 640 512"
      },
      transfer: {
        d: "M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z",
        viewBox: "0 0 512 512"
      },
      customerView: {
        d: "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 32c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32zm384 0c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24z",
        viewBox: "0 0 512 512"
      },
      language: {
        d: "M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z",
        viewBox: "0 0 640 512"
      },
      circle: {
        d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z",
        viewBox: "0 0 512 512"
      },
      circleInfo: {
        d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z",
        viewBox: "0 0 512 512"
      },
      microphone: {
        d: "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z",
        viewBox: "0 0 384 512"
      },
      microphoneSlash: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zM344 430.4c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4z",
        viewBox: "0 0 640 512"
      },
      videoSlash: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9V192 320v5.8l-32-25.1V128c0-35.3-28.7-64-64-64H113.9L38.8 5.1zM32 128V384c0 35.3 28.7 64 64 64H352c23.4 0 43.9-12.6 55-31.3L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5z",
        viewBox: "0 0 640 512"
      },
      speaker: {
        d: "M333.1 34.8C344.6 40 352 51.4 352 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352H96c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z",
        viewBox: "0 0 576 512"
      },
      speakerSlash: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-88-69C582.8 365 608 313.4 608 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C539.3 170.7 560 210.9 560 256s-20.7 85.3-53.2 111.8c-.9 .7-1.7 1.5-2.4 2.3l-43.6-34.2c5.5 .1 11.1-1.6 15.7-5.4C498.1 312.9 512 286.1 512 256s-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C457.1 227.6 464 241 464 256s-6.9 28.4-17.7 37.3c-7.6 6.2-10.4 16-8 24.9L384 275.7V64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3l-115.9 103L38.8 5.1zM64 224v64c0 35.3 28.7 64 64 64h67.8L330.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S384 460.6 384 448V398.5L93.8 169.9C75.9 181.2 64 201.2 64 224z",
        viewBox: "0 0 640 512"
      },
      bars: {
        d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
        viewBox: "0 0 448 512"
      },
      grid2Plus: {
        d: "M80 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm0 256h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48zM288 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V80zm96 192c13.3 0 24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H408v64c0 13.3-10.7 24-24 24s-24-10.7-24-24V408H296c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V296c0-13.3 10.7-24 24-24z",
        viewBox: "0 0 512 512"
      },
      filterList: {
        d: "M40 64C24.2 64 9.9 73.3 3.5 87.7s-3.8 31.3 6.8 43L112 243.8V368c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6V243.8l101.7-113c10.6-11.7 13.2-28.6 6.8-43S327.8 64 312 64H40zM352 384c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H352zM320 256c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H352c-17.7 0-32 14.3-32 32zM416 64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H416z",
        viewBox: "0 0 512 512"
      },
      paperPlane: {
        d: "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z",
        viewBox: "0 0 512 512"
      },
      faceSmile: {
        d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z",
        viewBox: "0 0 512 512"
      },
      user: {
        d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z",
        viewBox: "0 0 448 512"
      },
      users: {
        d: "M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z",
        viewBox: "0 0 640 512"
      },
      lock: {
        d: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z",
        viewBox: "0 0 448 512"
      },
      browser: {
        d: "M.3 89.5C.1 91.6 0 93.8 0 96v64V416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V160 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 160H464l0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-256z",
        viewBox: "0 0 512 512"
      },
      tableColumns: {
        d: "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z",
        viewBox: "0 0 512 512"
      },
      expand: {
        d: "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z",
        viewBox: "0 0 448 512"
      },
      compress: {
        d: "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z",
        viewBox: "0 0 448 512"
      },
      paperclip: {
        d: "M360.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z",
        viewBox: "0 0 448 512"
      },
      clockRotateLeft: {
        d: "M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z",
        viewBox: "0 0 512 512"
      },
      arrowUpRightFromSquare: {
        d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z",
        viewBox: "0 0 512 512"
      },
      locationPin: {
        d: "M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z",
        viewBox: "0 0 384 512"
      },
      eraser: {
        d: "M258.7 57.4L25.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H256h9.4H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H355.9L486.6 285.3c25-25 25-65.5 0-90.5L349.3 57.4c-25-25-65.5-25-90.5 0zM265.4 416H256l-105.4 0-80-80L195.3 211.3 332.7 348.7 265.4 416z",
        viewBox: "0 0 512 512"
      },
      eyeDropper: {
        d: "M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z",
        viewBox: "0 0 512 512"
      },
      arrowPointer: {
        d: "M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z",
        viewBox: "0 0 320 512"
      },
      videoPlus: {
        d: "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm512 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L416 174.9V192 320v17.1l14.2 9.5 96 64c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128zM216 184v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V184c0-13.3 10.7-24 24-24s24 10.7 24 24z",
        viewBox: "0 0 576 512"
      },
      download: {
        d: "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z",
        viewBox: "0 0 512 512"
      },
      windowMaximise: {
        d: "M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z",
        viewBox: "0 0 512 512"
      },
      windowMinimise: {
        d: "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z",
        viewBox: "0 0 512 512"
      },
      mobilePhone: {
        d: "M80 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H80zM16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
        viewBox: "0 0 384 512"
      },
      sitemap: {
        d: "M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z",
        viewBox: "0 0 576 512"
      },
      link: {
        d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z",
        viewBox: "0 0 640 512"
      },
      linkBroken: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM406.6 416.4L220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3zm-290-228.5L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9z",
        viewBox: "0 0 640 512"
      },
      sort: {
        d: "M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z",
        viewBox: "0 0 320 512"
      },
      pencil: {
        d: "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z",
        viewBox: "0 0 512 512"
      },
      webcam: {
        d: "M224 384a168 168 0 1 0 0-336 168 168 0 1 0 0 336zm0 48c-29.1 0-56.9-5.8-82.2-16.2L104.7 464H343.3l-37.1-48.2C280.9 426.2 253.1 432 224 432zM440 216c0 72.8-36 137.2-91.3 176.4l62.3 81c5.6 7.2 6.5 17 2.5 25.2s-12.4 13.4-21.5 13.4H56c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l62.3-81C44 353.2 8 288.8 8 216C8 96.7 104.7 0 224 0S440 96.7 440 216zm-144 0a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zm-192 0a120 120 0 1 1 240 0 120 120 0 1 1 -240 0z",
        viewBox: "0 0 448 512"
      },
      webcamSlash: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-135.2-106C525.9 324.9 544 276.6 544 224C544 100.3 443.7 0 320 0C248 0 183.9 34 143 86.7L38.8 5.1zM193.3 126.2C222.6 88.4 268.5 64 320 64c88.4 0 160 71.6 160 160c0 37.7-13 72.3-34.8 99.6L420 303.9c17.5-21.9 28-49.7 28-79.9c0-70.7-57.3-128-128-128c-41.3 0-78.1 19.6-101.5 50l-25.2-19.7zm88.2 69.1l-25.2-19.7C270.9 156.4 294 144 320 144c8.8 0 16 7.2 16 16s-7.2 16-16 16c-15.8 0-29.8 7.6-38.5 19.3zM507.7 496L359.4 379.1c-12.6 3.2-25.8 4.9-39.4 4.9c-88.4 0-160-71.6-160-160c0-.6 0-1.3 0-1.9l-58.8-46.3C97.8 191.3 96 207.4 96 224c0 79.5 41.4 149.3 103.8 189.1l-58.2 40.7c-11.4 8-16.4 22.5-12.2 35.8S146 512 160 512H480c11.6 0 22.1-6.2 27.7-16zM324.8 351.9L194.5 249.2C206.2 307.8 257.9 352 320 352c1.6 0 3.2 0 4.8-.1z",
        viewBox: "0 0 640 512"
      },
      file: {
        d: "M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z",
        viewBox: "0 0 384 512"
      },
      messageSlash: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-82.3-64.5C565.1 393 576 373.8 576 352V64c0-35.3-28.7-64-64-64H128C104.4 0 83.8 12.7 72.7 31.7L38.8 5.1zM64 352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416h32.8L64 146.4V352z",
        viewBox: "0 0 640 512"
      },
      deleteLeft: {
        d: "M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z",
        viewBox: "0 0 576 512"
      },
      monocle: {
        d: "M427.2 446.3C381.9 487.2 321.8 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256c0 62.8-22.6 120.3-60.1 164.9c-2.5-8.6-3.9-17.7-3.9-26.9V224c0-61.9-50.1-112-112-112s-112 50.1-112 112s50.1 112 112 112c31.3 0 59.7-12.9 80-33.6v91.5c0 18.4 3.9 36.2 11.2 52.4zM256 224a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm-79.6-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm144 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM144 352c0 8.8 7.2 16 16 16c14.3 0 37.9 2.9 60.6 11.7c22.8 8.8 42.7 22.7 53.1 43.4c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5c-15.3-30.5-43.3-48.6-70.1-59C205.3 339.5 177.7 336 160 336c-8.8 0-16 7.2-16 16zM305.2 89.9c8-6.4 18-9.9 28.2-9.9c8.9 0 17.6 2.6 25.1 7.6l8.6 5.7c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L376.3 61c-12.7-8.5-27.6-13-42.8-13c-17.5 0-34.5 6-48.2 16.9L262 83.5c-6.9 5.5-8 15.6-2.5 22.5s15.6 8 22.5 2.5l23.2-18.6z",
        viewBox: "0 0 512 512"
      },
      split: {
        d: "M391 31c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H346.5c-10.6 0-20.8 4.2-28.3 11.7L225.9 256l92.3 92.3c7.5 7.5 17.7 11.7 28.3 11.7h83.5l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H346.5c-23.3 0-45.7-9.3-62.2-25.8L182.1 280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H182.1L284.3 129.8c16.5-16.5 38.9-25.8 62.2-25.8h83.5L391 65c-9.4-9.4-9.4-24.6 0-33.9z",
        viewBox: "0 0 512 512"
      },
      minimize: {
        d: "M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z",
        viewBox: "0 0 512 512"
      },
      maximize: {
        d: "M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z",
        viewBox: "0 0 512 512"
      },
      locationCrosshairs: {
        d: "M256 0c13.3 0 24 10.7 24 24V65.5C366.8 76.3 435.7 145.2 446.5 232H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H446.5C435.7 366.8 366.8 435.7 280 446.5V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V446.5C145.2 435.7 76.3 366.8 65.5 280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H65.5C76.3 145.2 145.2 76.3 232 65.5V24c0-13.3 10.7-24 24-24zM112 256a144 144 0 1 0 288 0 144 144 0 1 0 -288 0zm192 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-144 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z",
        viewBox: "0 0 512 512"
      },
      inboxIn: {
        d: "M280 24V230.1l63-63c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 305c-9.4 9.4-24.6 9.4-33.9 0L135 201c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l63 63V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM149.1 405.5L130.3 368H48v96H464V368H381.7l-18.7 37.5C354.8 421.7 338.2 432 320 432H192c-18.2 0-34.8-10.3-42.9-26.5zm24.2-58.9L192 384H320l18.7-37.5c8.1-16.3 24.8-26.5 42.9-26.5H464c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h82.3c18.2 0 34.8 10.3 42.9 26.5z",
        viewBox: "0 0 512 512"
      },
      questionMark: {
        d: "M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
        viewBox: "0 0 320 512"
      },
      arrowTurnRight: {
        d: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V224c0 53 43 96 96 96H402.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256H96c-17.7 0-32-14.3-32-32V64z",
        viewBox: "0 0 512 512"
      },
      gripDots: {
        d: "M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",
        viewBox: "0 0 320 512"
      },
      eyeSlash: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z",
        viewBox: "0 0 640 512"
      },
      arrowsRotate: {
        d: "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z",
        viewBox: "0 0 512 512"
      },
      locationCrosshairsSlash: {
        d: "M344 24V0H296V24 65.5c-43.4 5.4-82.4 25.3-111.8 54.8L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L485.2 353.9c13.2-22.2 22-47.2 25.3-73.9H552h24V232H552 510.5C499.7 145.2 430.8 76.3 344 65.5V24zM446.9 324.2l-38.7-30.1c5.1-11.7 7.9-24.6 7.9-38.1c0-53-43-96-96-96c-22.1 0-42.5 7.5-58.7 20.1L222.5 150c25.6-23.6 59.9-38 97.5-38c79.5 0 144 64.5 144 144c0 24.7-6.2 47.9-17.1 68.2zm-79.3-61.6l-65.7-51c5.6-2.3 11.7-3.6 18.2-3.6c26.5 0 48 21.5 48 48c0 2.2-.2 4.4-.4 6.6zm47.4 160.3l-41.9-33c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2l-41.9-33c-2.7 9.5-4.7 19.2-6 29.3H88 64v48H88h41.5c10.8 86.8 79.7 155.7 166.5 166.5V488v24h48V488 446.5c25.5-3.2 49.5-11.4 70.9-23.6z",
        viewBox: "0 0 640 512"
      },
      thumbtackSolid: {
        d: "M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z",
        viewBox: "0 0 384 512"
      },
      thumbtackOutline: {
        d: "M134.6 51.7L123.8 192.6c-1.1 14.6-8.8 27.8-20.9 36C79 244.8 61.1 269.4 53.8 298.9L52.5 304H168V216c0-13.3 10.7-24 24-24s24 10.7 24 24v88H331.5l-1.3-5.1c-7.4-29.5-25.2-54.1-49.1-70.2c-12.1-8.2-19.8-21.5-20.9-36L249.4 51.7c-.1-1.2-.1-2.5-.1-3.7H134.8c0 1.2 0 2.5-.1 3.7zM168 352H32c-9.9 0-19.2-4.5-25.2-12.3S-1.4 321.8 1 312.2l6.2-25c10.3-41.3 35.4-75.7 68.7-98.3L83.1 96l3.7-48H56c-4.4 0-8.6-1.2-12.2-3.3C36.8 40.5 32 32.8 32 24C32 10.7 42.7 0 56 0H86.8 297.2 328c13.3 0 24 10.7 24 24c0 8.8-4.8 16.5-11.8 20.7c-3.6 2.1-7.7 3.3-12.2 3.3H297.2l3.7 48 7.1 92.9c33.3 22.6 58.4 57.1 68.7 98.3l6.2 25c2.4 9.6 .2 19.7-5.8 27.5s-15.4 12.3-25.2 12.3H216V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V352z",
        viewBox: "0 0 384 512"
      },
      envelopeOpen: {
        d: "M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z",
        viewBox: "0 0 512 512"
      },
      copy: {
        d: "M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z",
        viewBox: "0 0 448 512"
      },
      commentPlus: {
        d: "M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM232 328V264H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V152c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z",
        viewBox: "0 0 512 512"
      },
      arrowsFromLine: {
        d: "M241 7c-9.4-9.4-24.6-9.4-33.9 0L135 79c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V168c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L241 7zm7 337c0-13.3-10.7-24-24-24s-24 10.7-24 24v86.1l-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31V344zM24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z",
        viewBox: "0 0 448 512"
      },
      arrowsToLine: {
        d: "M241 185l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1L169 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0zM0 256c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24zm241 71c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V488c0 13.3 10.7 24 24 24s24-10.7 24-24V401.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z",
        viewBox: "0 0 448 512"
      },
      home: {
        d: "M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z",
        viewBox: "0 0 576 512"
      },
      aiKnowledgeBases: {
        d: "M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zM264 200l16.6-38.8c2.8-6.5 11.9-6.5 14.7 0L312 200l38.8 16.6c6.5 2.8 6.5 11.9 0 14.7L312 248l-16.6 38.8c-2.8 6.5-11.9 6.5-14.7 0L264 248l-38.8-16.6c-6.5-2.8-6.5-11.9 0-14.7L264 200zM168.8 78.3c2.9-5.9 11.4-5.9 14.3 0L192 96l17.7 8.8c5.9 2.9 5.9 11.4 0 14.3L192 128l-8.8 17.7c-2.9 5.9-11.4 5.9-14.3 0L160 128l-17.7-8.8c-5.9-2.9-5.9-11.4 0-14.3L160 96l8.8-17.7z",
        viewBox: "0 0 448 512"
      },
      talkativeChatbots: {
        d: "M160 0C124.7 0 96 28.7 96 64l0 112-36.3 0c-5.5-9.6-15.9-16-27.7-16c-17.7 0-32 14.3-32 32s14.3 32 32 32c11.8 0 22.2-6.4 27.7-16L96 208l0 144c0 35.3 28.7 64 64 64l64 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416 480 416c35.3 0 64-28.7 64-64l0-144 36.3 0c5.5 9.6 15.9 16 27.7 16c17.7 0 32-14.3 32-32s-14.3-32-32-32c-11.8 0-22.2 6.4-27.7 16L544 176l0-112c0-35.3-28.7-64-64-64L160 0zm0 128c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-128zm64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
        viewBox: "0 0 640 512"
      },
      oldConsole: {
        d: "M592 0h-384C181.5 0 160 22.25 160 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288h-64V304c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16V352H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9C618.5 416 640 393.8 640 366.4V49.63C640 22.25 618.5 0 592 0zM160 320c53.02 0 96-42.98 96-96c0-53.02-42.98-96-96-96C106.1 128 64 170.1 64 224C64 277 106.1 320 160 320zM192 352H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32C320 409.3 262.7 352 192 352z",
        viewBox: "0 0 640 512"
      },
      agentConsole: {
        d: "M592 0h-384C181.5 0 160 22.25 160 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288h-64V304c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16V352H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9C618.5 416 640 393.8 640 366.4V49.63C640 22.25 618.5 0 592 0zM160 320c53.02 0 96-42.98 96-96c0-53.02-42.98-96-96-96C106.1 128 64 170.1 64 224C64 277 106.1 320 160 320zM192 352H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32C320 409.3 262.7 352 192 352z",
        viewBox: "0 0 640 512"
      },
      interactionLogs: {
        d: "M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM448 96H64V160H448V96zM64 416H128V224H64V416zM448 224H192V416H448V224z",
        viewBox: "0 0 512 512"
      },
      outboundSmsInteractions: {
        d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z",
        viewBox: "0 0 640 512"
      },
      outboundWhatsAppInteractions: {
        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        viewBox: "0 0 448 512"
      },
      scheduledInteractions: {
        d: "M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 192.7C442.7 192.2 437.4 192 432 192C334.8 192 256 270.8 256 368C256 427.5 285.6 480.1 330.8 512H48C21.49 512 0 490.5 0 464V192H432H448V192.7zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM415.1 304V368C415.1 376.8 423.2 384 431.1 384H480C488.8 384 496 376.8 496 368C496 359.2 488.8 352 480 352H447.1V304C447.1 295.2 440.8 288 431.1 288C423.2 288 415.1 295.2 415.1 304V304z",
        viewBox: "0 0 576 512"
      },
      analytics: {
        d: "M339.1 216.1C328.6 226.1 312.5 226.4 300.8 217.6L192.6 136.5L51.99 248.1C38.19 260 18.05 257.8 7.013 243.1C-4.028 230.2-1.79 210.1 12.01 199L172 71.01C183.4 61.9 199.5 61.65 211.2 70.4L319.4 151.5L460 39.01C473.8 27.97 493.9 30.21 504.1 44.01C516 57.81 513.8 77.95 499.1 88.99L339.1 216.1zM160 256C160 238.3 174.3 224 192 224C209.7 224 224 238.3 224 256V448C224 465.7 209.7 480 192 480C174.3 480 160 465.7 160 448V256zM32 352C32 334.3 46.33 320 64 320C81.67 320 96 334.3 96 352V448C96 465.7 81.67 480 64 480C46.33 480 32 465.7 32 448V352zM352 320V448C352 465.7 337.7 480 320 480C302.3 480 288 465.7 288 448V320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320zM416 256C416 238.3 430.3 224 448 224C465.7 224 480 238.3 480 256V448C480 465.7 465.7 480 448 480C430.3 480 416 465.7 416 448V256z",
        viewBox: "0 0 512 512"
      },
      reporting: {
        d: "M147.8 192H480V144C480 117.5 458.5 96 432 96h-160l-64-64h-160C21.49 32 0 53.49 0 80v328.4l90.54-181.1C101.4 205.6 123.4 192 147.8 192zM543.1 224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480h447.1c12.12 0 23.2-6.852 28.62-17.69l96-192C583.2 249 567.7 224 543.1 224z",
        viewBox: "0 0 576 512"
      },
      supervisorDashboard: {
        d: "M128 48C128 74.51 106.5 96 80 96C53.49 96 32 74.51 32 48C32 21.49 53.49 0 80 0C106.5 0 128 21.49 128 48zM592 32C618.5 32 640 53.49 640 80V144C640 170.5 618.5 192 592 192H272C245.5 192 224 170.5 224 144V80C224 53.49 245.5 32 272 32H592zM576 96H480V128H576V96zM592 320C618.5 320 640 341.5 640 368V432C640 458.5 618.5 480 592 480H272C245.5 480 224 458.5 224 432V368C224 341.5 245.5 320 272 320H592zM576 384H352V416H576V384zM96 128C131.3 128 160 156.7 160 192C160 209.7 145.7 224 128 224H32C14.33 224 0 209.7 0 192C0 156.7 28.65 128 64 128H96zM128 336C128 362.5 106.5 384 80 384C53.49 384 32 362.5 32 336C32 309.5 53.49 288 80 288C106.5 288 128 309.5 128 336zM96 416C131.3 416 160 444.7 160 480C160 497.7 145.7 512 128 512H32C14.33 512 0 497.7 0 480C0 444.7 28.65 416 64 416H96z",
        viewBox: "0 0 640 512"
      },
      chatWidgets: {
        d: "M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z",
        viewBox: "0 0 640 512"
      },
      settings: {
        d: "M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z",
        viewBox: "0 0 512 512"
      },
      burgerMenu: {
        d: "M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H288C305.7 224 320 238.3 320 256C320 273.7 305.7 288 288 288H32C14.33 288 0 273.7 0 256zM160 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H160C177.7 384 192 398.3 192 416C192 433.7 177.7 448 160 448z",
        viewBox: "0 0 448 512"
      },
      impersonating: {
        d: "M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z",
        viewBox: "0 0 448 512"
      },
      webhook: {
        d: "M306 50c-43.1-9.9-86 16.9-95.9 60c-7.9 34.1 7.4 68.2 35.5 85.9c5.4 3.4 9.2 8.8 10.7 15s.3 12.7-3 18.1L170.4 361.5c3.6 6.7 5.6 14.4 5.6 22.5c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c.6 0 1.1 0 1.7 0L201 221.9c-32.5-30.2-48.4-76.4-37.7-122.7C179.2 30.3 247.9-12.6 316.8 3.3c65.9 15.2 108 78.7 97.7 144.4c-2.1 13.1-14.3 22-27.4 20s-22-14.3-20-27.4C373.5 99.2 347.1 59.5 306 50zM289.7 176c-.6 0-1.1 0-1.7 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48c0 8.1-2 15.8-5.6 22.5l71.3 114.1c45.8-17.7 99.8-8.2 136.8 28.9c50 50 50 131 0 181c-43 43-109 49-158.4 18c-11.2-7-14.6-21.8-7.6-33.1s21.8-14.6 33.1-7.6c30.9 19.3 72.1 15.5 99-11.3c31.2-31.2 31.2-81.9 0-113.1c-26.8-26.8-68.1-30.6-99-11.3c-5.4 3.4-11.9 4.5-18.1 3s-11.6-5.3-15-10.7L289.7 176zM448 432c-17.8 0-33.3-9.7-41.6-24H253.8c-9.2 48.3-46 88.9-97 100.7c-68.9 15.9-137.6-27-153.5-95.9C-11 351 22.1 289.4 78.7 265.8c12.2-5.1 26.3 .7 31.4 12.9s-.7 26.3-12.9 31.4c-35.4 14.7-56 53.3-47.1 91.8c9.9 43.1 52.9 69.9 95.9 60c37-8.5 62.1-41.5 62-77.9c0-6.4 2.5-12.5 7-17s10.6-7 17-7H406.4c8.3-14.3 23.8-24 41.6-24c26.5 0 48 21.5 48 48s-21.5 48-48 48z",
        viewBox: "0 0 576 512"
      },
      phoneArrowDownLeft: {
        d: "M144 0L0 32 0 64C0 311.4 200.6 512 448 512h32l32-144L368 288l-67 83.8C232.5 335.7 176.3 279.5 140.2 211L224 144 144 0zM489 57l17-17L472 6.1 455 23l-119 119V88 64H288V88 200v24h24H424h24V176H424 369.9L489 57z",
        viewBox: "0 0 512 512"
      },
      magnifyingGlassPlus: {
        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z",
        viewBox: "0 0 512 512"
      },
      magnifyingGlassMinus: {
        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z",
        viewBox: "0 0 512 512"
      },
      messageBot: {
        d: "M160 0C124.7 0 96 28.7 96 64V176H59.7c-5.5-9.6-15.9-16-27.7-16c-17.7 0-32 14.3-32 32s14.3 32 32 32c11.8 0 22.2-6.4 27.7-16H96V352c0 35.3 28.7 64 64 64h64v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416H480c35.3 0 64-28.7 64-64V208h36.3c5.5 9.6 15.9 16 27.7 16c17.7 0 32-14.3 32-32s-14.3-32-32-32c-11.8 0-22.2 6.4-27.7 16H544V64c0-35.3-28.7-64-64-64H160zm0 128c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V128zm64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
        viewBox: "0 0 640 512"
      },
      paintbrushPencil: {
        d: "M181.3 19.3c-25-25-65.5-25-90.5 0L51.3 58.7c-3.1 3.1-5.9 6.5-8.2 10c-16.4 24.8-13.7 58.6 8.2 80.5l88.8 88.8c13.9-4 28.6-6.1 43.9-6.1l1.5 0 8.2-8.2L161 191 223 129l32.8 32.8 33.9-33.9L181.3 19.3zM414.2 320.1l37.3 37.3c.6 .6 1.2 1.2 1.7 1.8c3.9 4.4 6.7 9.6 8.4 15.2l6.9 23.4 16.1 54.8-54.8-16.1-23.4-6.9c-6.4-1.9-12.3-5.4-17-10.1l-37.3-37.3-8.1 8.1 0 1.7c0 15.2-2.1 29.9-6.1 43.9l17.6 17.6c1.3 1.3 2.6 2.6 4 3.8c9.6 8.5 21 14.8 33.4 18.4l78.1 23L513.2 511c8.4 2.5 17.5 .2 23.7-6.1s8.5-15.3 6.1-23.7L530.6 439l-23-78.1c-4.2-14.1-11.8-27-22.2-37.4l-37.3-37.3-33.9 33.9zM519 57c8.3 8.3 8.3 21.8 0 30.1L336.3 269.8l-30.1-30.1L489 57c8.3-8.3 21.8-8.3 30.1 0zM184 320c9.4 0 18.3 1.8 26.5 5L251 365.5c3.3 8.2 5 17.2 5 26.5c0 39.8-32.2 72-72 72H98.4l.7-.9c11.6-16.9 17.1-38.6 13.8-60c-.5-3.6-.8-7.3-.8-11.1c0-39.8 32.2-72 72-72zM455 23L204.3 273.7c-6.6-1.1-13.4-1.7-20.3-1.7c-66.3 0-120 53.7-120 120c0 6.2 .5 12.4 1.4 18.4C68.1 428.2 56.1 448 38 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H184c66.3 0 120-53.7 120-120c0-6.9-.6-13.7-1.7-20.3L553 121c27-27 27-70.9 0-97.9s-70.9-27-97.9 0z",
        viewBox: "0 0 576 512"
      },
      idCard: {
        d: "M64 64C46.3 64 32 78.3 32 96l512 0c0-17.7-14.3-32-32-32H64zM0 112V96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64v16V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V112zm544 16H32V416c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32V128zM192 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM160 352c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48H160zM336 208c0-8.8 7.2-16 16-16H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16z",
        viewBox: "0 0 576 512"
      },
      lightbulbSlash: {
        d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-195-152.8c4.4-6.2 8.9-12.4 13.4-18.6l0 0 0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0C249.7 0 189.1 41.2 160.8 100.8L38.8 5.1zM200 131.4C218.1 82.7 265 48 320 48c70.7 0 128 57.3 128 128c0 27.2-8.4 52.3-22.8 72.9c-3.7 5.3-8.1 11.3-12.7 17.7l0 0 0 0 0 0 0 0c-4.6 6.3-9.5 13-14.4 20L268.9 185.5c1.9-2.6 3.1-5.9 3.1-9.5c0-26.5 21.5-48 48-48c8.8 0 16-7.2 16-16s-7.2-16-16-16c-40 0-73.1 29.3-79 67.6l-41-32.1zM400 424.9L388.7 416H240v16c0 44.2 35.8 80 80 80s80-35.8 80-80v-7.1zM152.4 229.8c5.4 16.8 13.2 32.4 23 46.6c5 7.2 10.2 14.3 15.4 21.4l0 0 0 0c12.3 16.8 24.6 33.7 34.5 51.8c5.9 10.8 9.6 22.5 11.8 34.5h48.6c-2.6-18.7-7.9-38.6-18.3-57.5c-2-3.7-4.2-7.5-6.5-11.2L152.4 229.8z",
        viewBox: "0 0 640 512"
      },
      ghost: {
        d: "M48 192V415.5c26.3-4.9 54.6 3.7 73.6 25.5l6.4 7.3 3.8-4.3c31.9-36.4 88.5-36.4 120.4 0l3.8 4.3 6.4-7.3c19.1-21.8 47.3-30.4 73.6-25.5V192c0-79.5-64.5-144-144-144S48 112.5 48 192zM256 512c-5.1 0-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L85.5 472.5c-11.6-13.3-32.1-14-44.5-1.5l-2.3 2.3c-4.2 4.2-10 6.6-16 6.6C10.1 480 0 469.9 0 457.4V192C0 86 86 0 192 0S384 86 384 192V457.4c0 12.5-10.1 22.6-22.6 22.6c-6 0-11.8-2.4-16-6.6l-2.3-2.3c-12.5-12.5-32.9-11.8-44.5 1.5L269.3 506c-3.3 3.8-8.2 6-13.3 6zM96 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z",
        viewBox: "0 0 384 512"
      },
      ellipsisVertical: {
        d: "M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z",
        viewBox: "0 0 128 512"
      },
      messageExclamation: {
        d: "M208 416c0-26.5-21.5-48-48-48l-96 0c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16l-138.7 0c-10.4 0-20.5 3.4-28.8 9.6L208 432l0-16zm-.2 76.2l.2-.2 101.3-76L448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l48 0 48 0 0 48 0 4 0 .3 0 6.4 0 21.3c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM256 80c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",
        viewBox: "0 0 512 512"
      },
      moneyCheckPen: {
        d: "M64 112l448 0c8.8 0 16 7.2 16 16l0 91.6 6.6-6.6c11.6-11.6 26.3-18.5 41.4-20.5l0-64.6c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l266.5 0 6-23.9c2.2-8.8 6.2-17 11.8-24.1L64 400c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16zm56 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-208 0zM96 200c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-304 0c-13.3 0-24 10.7-24 24zm517.8 35.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z",
        viewBox: "0 0 640 512"
      },
      textLeft: {
        d: "M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z",
        viewBox: "0 0 448 512"
      },
      textRight: {
        d: "M448 64c0 17.7-14.3 32-32 32L192 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z",
        viewBox: "0 0 448 512"
      },
      textCenter: {
        d: "M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z",
        viewBox: "0 0 448 512"
      },
      textJustify: {
        d: "M448 32L0 32 0 96l448 0 0-64zm0 256L0 288l0 64 448 0 0-64zM0 160l0 64 448 0 0-64L0 160zM448 416L0 416l0 64 448 0 0-64z",
        viewBox: "0 0 448 512"
      },
      bold: {
        d: "M0 64C0 46.3 14.3 32 32 32l48 0 16 0 128 0c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128L96 480l-16 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-160L48 96 32 96C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64L112 96l0 128 112 0zM112 288l0 128 144 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0-112 0z",
        viewBox: "0 0 384 512"
      },
      text: {
        d: "M64 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 80C0 53.5 21.5 32 48 32l176 0 176 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L256 96l0 320 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-320L64 96z",
        viewBox: "0 0 448 512"
      },
      palette: {
        d: "M464 258.2c0 2.7-1 5.2-4.2 8c-3.8 3.1-10.1 5.8-17.8 5.8L344 272c-53 0-96 43-96 96c0 6.8 .7 13.4 2.1 19.8c3.3 15.7 10.2 31.1 14.4 40.6c0 0 0 0 0 0c.7 1.6 1.4 3 1.9 4.3c5 11.5 5.6 15.4 5.6 17.1c0 5.3-1.9 9.5-3.8 11.8c-.9 1.1-1.6 1.6-2 1.8c-.3 .2-.8 .3-1.6 .4c-2.9 .1-5.7 .2-8.6 .2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 .7 0 1.4 0 2.2zm48 .5c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48l97.9 0c36.5 0 69.7-24.8 70.1-61.3zM160 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
        viewBox: "0 0 512 512"
      },
      textSize: {
        d: "M64 128l0-32 96 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320 96 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L192 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM384 304l0-16 64 0 0 128-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128 64 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32z",
        viewBox: "0 0 640 512"
      },
      arrowToUpLine: {
        d: "M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 32zM209.5 167.6c-4.5-4.8-10.9-7.6-17.5-7.6s-12.9 2.7-17.5 7.6l-128 136c-9.1 9.7-8.6 24.8 1 33.9s24.8 8.6 33.9-1L168 244.5l0 83.5 0 128c0 13.3 10.7 24 24 24s24-10.7 24-24l0-128 0-83.5 86.5 91.9c9.1 9.7 24.3 10.1 33.9 1s10.1-24.3 1-33.9l-128-136z",
        viewBox: "0 0 384 512"
      },
      lockOpen: {
        d: "M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48C576 64.5 511.5 0 432 0S288 64.5 288 144l0 48L64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-48z",
        viewBox: "0 0 576 512"
      },
      arrowsLeftRight: {
        d: "M505 273c9.4-9.4 9.4-24.6 0-33.9l-96-96c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55L81.9 232l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 239c-9.4 9.4-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 348.1 0-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l96-96z",
        viewBox: "0 0 512 512"
      },
      objectsAlignLeft: {
        d: "M0 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24L48 24C48 10.7 37.3 0 24 0S0 10.7 0 24zM176 64c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L176 64zm0 224c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-160 0z",
        viewBox: "0 0 512 512"
      },
      objectsAlignCenter: {
        d: "M256 0c-13.3 0-24 10.7-24 24l0 40L80 64c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l152 0 0 64-88 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l88 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 88 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-88 0 0-64 152 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L280 64l0-40c0-13.3-10.7-24-24-24z",
        viewBox: "0 0 512 512"
      },
      objectsAlignRight: {
        d: "M512 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-464c0-13.3 10.7-24 24-24s24 10.7 24 24zM336 64c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 224c-26.5 0-48-21.5-48-48l0-64C0 85.5 21.5 64 48 64l288 0zm0 224c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l160 0z",
        viewBox: "0 0 512 512"
      }
    }, r = De(() => n[t.icon]);
    return (o, s) => (W(), ye("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: r.value.viewBox,
      class: "fill-current"
    }, [
      B("path", {
        d: r.value.d
      }, null, 8, K3)
    ], 8, q3));
  }
}), W3 = { class: "flex items-stretch overflow-hidden" }, G3 = { class: "w-8 flex items-center justify-center" }, J3 = { class: "self-center truncate" }, X3 = {
  key: 0,
  class: "border-b border-gray-200"
}, ut = /* @__PURE__ */ _e({
  __name: "AccordionItem",
  props: {
    title: {}
  },
  setup(e) {
    const t = Gt(!1);
    return (n, r) => (W(), ye(ge, null, [
      B("div", {
        class: "shrink-0 w-full bg-gradient-to-r cursor-pointer from-gray-50 to-gray-200 border-b border-gray-300 h-8 flex items-stretch justify-between",
        onClick: r[0] || (r[0] = (o) => t.value = !t.value)
      }, [
        B("div", W3, [
          B("div", G3, [
            ie(ui, {
              icon: "chevronUp",
              class: ar(["w-3 h-3 text-gray-500 transition-transform", t.value ? "rotate-180" : "rotate-90"])
            }, null, 8, ["class"])
          ]),
          B("p", J3, Te(n.title), 1)
        ]),
        Di(n.$slots, "header-right")
      ]),
      t.value ? (W(), ye("div", X3, [
        Di(n.$slots, "default")
      ])) : Sn("", !0)
    ], 64));
  }
}), Y3 = { class: "flex flex-col gap-1" }, Q3 = { class: "text-sm font-bold" }, On = /* @__PURE__ */ _e({
  __name: "TextInput",
  props: /* @__PURE__ */ dr({
    title: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (n, r) => (W(), ye("div", Y3, [
      B("label", Q3, Te(n.title), 1),
      Ks(B("input", {
        type: "text",
        "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
        class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
      }, null, 512), [
        [sc, t.value]
      ])
    ]));
  }
}), Z3 = { class: "flex flex-col gap-2 p-2" }, Bt = /* @__PURE__ */ _e({
  __name: "ElementProperties",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (n, r) => (W(), xe(ut, { title: "General Properties" }, {
      default: Qe(() => [
        B("div", Z3, [
          ie(On, {
            title: "Element ID",
            modelValue: t.value.id,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value.id = o)
          }, null, 8, ["modelValue"]),
          ie(On, {
            title: "Element UUID",
            modelValue: t.value.uuid,
            "onUpdate:modelValue": r[1] || (r[1] = (o) => t.value.uuid = o)
          }, null, 8, ["modelValue"]),
          ie(On, {
            title: "Sort Order",
            modelValue: t.value.order,
            "onUpdate:modelValue": r[2] || (r[2] = (o) => t.value.order = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
}), jn = /* @__PURE__ */ _e({
  __name: "Colour",
  setup(e) {
    return (t, n) => (W(), xe(ut, { title: "Colouring" }, {
      default: Qe(() => n[0] || (n[0] = [
        ei(" Colour ")
      ])),
      _: 1
    }));
  }
}), Fn = /* @__PURE__ */ _e({
  __name: "TextAlignment",
  setup(e) {
    return (t, n) => (W(), xe(ut, { title: "Text Alignment" }, {
      default: Qe(() => n[0] || (n[0] = [
        B("div", null, [
          B("label", { for: "text-alignment" }, "Text Alignment"),
          B("select", {
            name: "text-alignment",
            id: "text-alignment"
          }, [
            B("option", { value: "text-left" }, "Left"),
            B("option", { value: "text-center" }, "Center"),
            B("option", { value: "text-right" }, "Right"),
            B("option", { value: "text-justify" }, "Justify")
          ])
        ], -1)
      ])),
      _: 1
    }));
  }
}), e0 = { class: "flex flex-col gap-1" }, t0 = { class: "text-sm font-bold" }, n0 = {
  key: 0,
  value: ""
}, r0 = ["value"], o0 = /* @__PURE__ */ _e({
  __name: "SelectInput",
  props: /* @__PURE__ */ dr({
    title: {},
    options: {},
    canBeEmpty: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = nt(e, "modelValue");
    return (r, o) => (W(), ye("div", e0, [
      B("label", t0, Te(t.title), 1),
      Ks(B("select", {
        "onUpdate:modelValue": o[0] || (o[0] = (s) => n.value = s),
        class: "text-sm border border-gray-300 rounded p-1 w-full"
      }, [
        t.canBeEmpty ? (W(), ye("option", n0)) : Sn("", !0),
        (W(!0), ye(ge, null, Kt(t.options, (s) => (W(), ye("option", {
          value: s.value,
          key: s.value
        }, Te(s.label), 9, r0))), 128))
      ], 512), [
        [tu, n.value]
      ])
    ]));
  }
}), Mn = /* @__PURE__ */ _e({
  __name: "ClassListSelector",
  props: /* @__PURE__ */ dr({
    title: {},
    options: {},
    canBeEmpty: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = nt(e, "modelValue"), r = De({
      get() {
        var i;
        const s = (((i = n.value.attributes) == null ? void 0 : i.classes) ?? []).filter((c) => t.options.some((l) => l.value === c));
        return s.length > 1 && console.error("More than one class found in model.attributes.classes", s), s.length > 0 ? s[0] : t.canBeEmpty ? "" : t.options[0].value;
      },
      set(o) {
        var s;
        (s = n.value.attributes) != null && s.classes || (n.value.attributes.classes = []), n.value.attributes.classes = n.value.attributes.classes.filter(
          (i) => !t.options.some((c) => c.value === i)
        ), n.value.attributes.classes.push(o);
      }
    });
    return (o, s) => (W(), xe(o0, {
      canBeEmpty: t.canBeEmpty,
      modelValue: r.value,
      "onUpdate:modelValue": s[0] || (s[0] = (i) => r.value = i),
      options: t.options,
      title: t.title
    }, null, 8, ["canBeEmpty", "modelValue", "options", "title"]));
  }
}), s0 = { class: "flex flex-col gap-2 p-2" }, Un = /* @__PURE__ */ _e({
  __name: "FontSize",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue"), n = [
      { label: "XS (12px)", value: "text-xs" },
      { label: "SM (14px)", value: "text-sm" },
      { label: "Base (16px)", value: "text-base" },
      { label: "LG (18px)", value: "text-lg" },
      { label: "XL (20px)", value: "text-xl" },
      { label: "2XL (24px)", value: "text-2xl" },
      { label: "3XL (30px)", value: "text-3xl" },
      { label: "4XL (36px)", value: "text-4xl" },
      { label: "5XL (48px)", value: "text-5xl" },
      { label: "6XL (60px)", value: "text-6xl" },
      { label: "7XL (72px)", value: "text-7xl" },
      { label: "8XL (96px)", value: "text-8xl" },
      { label: "9XL (128px)", value: "text-9xl" }
    ];
    return (r, o) => (W(), xe(ut, { title: "Font Size" }, {
      default: Qe(() => [
        B("div", s0, [
          ie(Mn, {
            title: "Font Size",
            options: n,
            "can-be-empty": !0,
            modelValue: t.value,
            "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
});
var Ie = /* @__PURE__ */ ((e) => (e.Div = "div", e.Img = "img", e.A = "a", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.P = "p", e))(Ie || {}), hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function i0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function l0(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var fi = { exports: {} };
fi.exports;
(function(e) {
  (function(t, n, r) {
    function o(l) {
      var f = this, u = c();
      f.next = function() {
        var a = 2091639 * f.s0 + f.c * 23283064365386963e-26;
        return f.s0 = f.s1, f.s1 = f.s2, f.s2 = a - (f.c = a | 0);
      }, f.c = 1, f.s0 = u(" "), f.s1 = u(" "), f.s2 = u(" "), f.s0 -= u(l), f.s0 < 0 && (f.s0 += 1), f.s1 -= u(l), f.s1 < 0 && (f.s1 += 1), f.s2 -= u(l), f.s2 < 0 && (f.s2 += 1), u = null;
    }
    function s(l, f) {
      return f.c = l.c, f.s0 = l.s0, f.s1 = l.s1, f.s2 = l.s2, f;
    }
    function i(l, f) {
      var u = new o(l), a = f && f.state, d = u.next;
      return d.int32 = function() {
        return u.next() * 4294967296 | 0;
      }, d.double = function() {
        return d() + (d() * 2097152 | 0) * 11102230246251565e-32;
      }, d.quick = d, a && (typeof a == "object" && s(a, u), d.state = function() {
        return s(u, {});
      }), d;
    }
    function c() {
      var l = 4022871197, f = function(u) {
        u = String(u);
        for (var a = 0; a < u.length; a++) {
          l += u.charCodeAt(a);
          var d = 0.02519603282416938 * l;
          l = d >>> 0, d -= l, d *= l, l = d >>> 0, d -= l, l += d * 4294967296;
        }
        return (l >>> 0) * 23283064365386963e-26;
      };
      return f;
    }
    n && n.exports ? n.exports = i : r && r.amd ? r(function() {
      return i;
    }) : this.alea = i;
  })(
    hn,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(fi);
var c0 = fi.exports, di = { exports: {} };
di.exports;
(function(e) {
  (function(t, n, r) {
    function o(c) {
      var l = this, f = "";
      l.x = 0, l.y = 0, l.z = 0, l.w = 0, l.next = function() {
        var a = l.x ^ l.x << 11;
        return l.x = l.y, l.y = l.z, l.z = l.w, l.w ^= l.w >>> 19 ^ a ^ a >>> 8;
      }, c === (c | 0) ? l.x = c : f += c;
      for (var u = 0; u < f.length + 64; u++)
        l.x ^= f.charCodeAt(u) | 0, l.next();
    }
    function s(c, l) {
      return l.x = c.x, l.y = c.y, l.z = c.z, l.w = c.w, l;
    }
    function i(c, l) {
      var f = new o(c), u = l && l.state, a = function() {
        return (f.next() >>> 0) / 4294967296;
      };
      return a.double = function() {
        do
          var d = f.next() >>> 11, h = (f.next() >>> 0) / 4294967296, m = (d + h) / (1 << 21);
        while (m === 0);
        return m;
      }, a.int32 = f.next, a.quick = a, u && (typeof u == "object" && s(u, f), a.state = function() {
        return s(f, {});
      }), a;
    }
    n && n.exports ? n.exports = i : r && r.amd ? r(function() {
      return i;
    }) : this.xor128 = i;
  })(
    hn,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(di);
var a0 = di.exports, pi = { exports: {} };
pi.exports;
(function(e) {
  (function(t, n, r) {
    function o(c) {
      var l = this, f = "";
      l.next = function() {
        var a = l.x ^ l.x >>> 2;
        return l.x = l.y, l.y = l.z, l.z = l.w, l.w = l.v, (l.d = l.d + 362437 | 0) + (l.v = l.v ^ l.v << 4 ^ (a ^ a << 1)) | 0;
      }, l.x = 0, l.y = 0, l.z = 0, l.w = 0, l.v = 0, c === (c | 0) ? l.x = c : f += c;
      for (var u = 0; u < f.length + 64; u++)
        l.x ^= f.charCodeAt(u) | 0, u == f.length && (l.d = l.x << 10 ^ l.x >>> 4), l.next();
    }
    function s(c, l) {
      return l.x = c.x, l.y = c.y, l.z = c.z, l.w = c.w, l.v = c.v, l.d = c.d, l;
    }
    function i(c, l) {
      var f = new o(c), u = l && l.state, a = function() {
        return (f.next() >>> 0) / 4294967296;
      };
      return a.double = function() {
        do
          var d = f.next() >>> 11, h = (f.next() >>> 0) / 4294967296, m = (d + h) / (1 << 21);
        while (m === 0);
        return m;
      }, a.int32 = f.next, a.quick = a, u && (typeof u == "object" && s(u, f), a.state = function() {
        return s(f, {});
      }), a;
    }
    n && n.exports ? n.exports = i : r && r.amd ? r(function() {
      return i;
    }) : this.xorwow = i;
  })(
    hn,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(pi);
var u0 = pi.exports, hi = { exports: {} };
hi.exports;
(function(e) {
  (function(t, n, r) {
    function o(c) {
      var l = this;
      l.next = function() {
        var u = l.x, a = l.i, d, h;
        return d = u[a], d ^= d >>> 7, h = d ^ d << 24, d = u[a + 1 & 7], h ^= d ^ d >>> 10, d = u[a + 3 & 7], h ^= d ^ d >>> 3, d = u[a + 4 & 7], h ^= d ^ d << 7, d = u[a + 7 & 7], d = d ^ d << 13, h ^= d ^ d << 9, u[a] = h, l.i = a + 1 & 7, h;
      };
      function f(u, a) {
        var d, h = [];
        if (a === (a | 0))
          h[0] = a;
        else
          for (a = "" + a, d = 0; d < a.length; ++d)
            h[d & 7] = h[d & 7] << 15 ^ a.charCodeAt(d) + h[d + 1 & 7] << 13;
        for (; h.length < 8; )
          h.push(0);
        for (d = 0; d < 8 && h[d] === 0; ++d)
          ;
        for (d == 8 ? h[7] = -1 : h[d], u.x = h, u.i = 0, d = 256; d > 0; --d)
          u.next();
      }
      f(l, c);
    }
    function s(c, l) {
      return l.x = c.x.slice(), l.i = c.i, l;
    }
    function i(c, l) {
      c == null && (c = +/* @__PURE__ */ new Date());
      var f = new o(c), u = l && l.state, a = function() {
        return (f.next() >>> 0) / 4294967296;
      };
      return a.double = function() {
        do
          var d = f.next() >>> 11, h = (f.next() >>> 0) / 4294967296, m = (d + h) / (1 << 21);
        while (m === 0);
        return m;
      }, a.int32 = f.next, a.quick = a, u && (u.x && s(u, f), a.state = function() {
        return s(f, {});
      }), a;
    }
    n && n.exports ? n.exports = i : r && r.amd ? r(function() {
      return i;
    }) : this.xorshift7 = i;
  })(
    hn,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(hi);
var f0 = hi.exports, mi = { exports: {} };
mi.exports;
(function(e) {
  (function(t, n, r) {
    function o(c) {
      var l = this;
      l.next = function() {
        var u = l.w, a = l.X, d = l.i, h, m;
        return l.w = u = u + 1640531527 | 0, m = a[d + 34 & 127], h = a[d = d + 1 & 127], m ^= m << 13, h ^= h << 17, m ^= m >>> 15, h ^= h >>> 12, m = a[d] = m ^ h, l.i = d, m + (u ^ u >>> 16) | 0;
      };
      function f(u, a) {
        var d, h, m, v, b, N = [], H = 128;
        for (a === (a | 0) ? (h = a, a = null) : (a = a + "\0", h = 0, H = Math.max(H, a.length)), m = 0, v = -32; v < H; ++v)
          a && (h ^= a.charCodeAt((v + 32) % a.length)), v === 0 && (b = h), h ^= h << 10, h ^= h >>> 15, h ^= h << 4, h ^= h >>> 13, v >= 0 && (b = b + 1640531527 | 0, d = N[v & 127] ^= h + b, m = d == 0 ? m + 1 : 0);
        for (m >= 128 && (N[(a && a.length || 0) & 127] = -1), m = 127, v = 4 * 128; v > 0; --v)
          h = N[m + 34 & 127], d = N[m = m + 1 & 127], h ^= h << 13, d ^= d << 17, h ^= h >>> 15, d ^= d >>> 12, N[m] = h ^ d;
        u.w = b, u.X = N, u.i = m;
      }
      f(l, c);
    }
    function s(c, l) {
      return l.i = c.i, l.w = c.w, l.X = c.X.slice(), l;
    }
    function i(c, l) {
      c == null && (c = +/* @__PURE__ */ new Date());
      var f = new o(c), u = l && l.state, a = function() {
        return (f.next() >>> 0) / 4294967296;
      };
      return a.double = function() {
        do
          var d = f.next() >>> 11, h = (f.next() >>> 0) / 4294967296, m = (d + h) / (1 << 21);
        while (m === 0);
        return m;
      }, a.int32 = f.next, a.quick = a, u && (u.X && s(u, f), a.state = function() {
        return s(f, {});
      }), a;
    }
    n && n.exports ? n.exports = i : r && r.amd ? r(function() {
      return i;
    }) : this.xor4096 = i;
  })(
    hn,
    // window object or global
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(mi);
var d0 = mi.exports, gi = { exports: {} };
gi.exports;
(function(e) {
  (function(t, n, r) {
    function o(c) {
      var l = this, f = "";
      l.next = function() {
        var a = l.b, d = l.c, h = l.d, m = l.a;
        return a = a << 25 ^ a >>> 7 ^ d, d = d - h | 0, h = h << 24 ^ h >>> 8 ^ m, m = m - a | 0, l.b = a = a << 20 ^ a >>> 12 ^ d, l.c = d = d - h | 0, l.d = h << 16 ^ d >>> 16 ^ m, l.a = m - a | 0;
      }, l.a = 0, l.b = 0, l.c = -1640531527, l.d = 1367130551, c === Math.floor(c) ? (l.a = c / 4294967296 | 0, l.b = c | 0) : f += c;
      for (var u = 0; u < f.length + 20; u++)
        l.b ^= f.charCodeAt(u) | 0, l.next();
    }
    function s(c, l) {
      return l.a = c.a, l.b = c.b, l.c = c.c, l.d = c.d, l;
    }
    function i(c, l) {
      var f = new o(c), u = l && l.state, a = function() {
        return (f.next() >>> 0) / 4294967296;
      };
      return a.double = function() {
        do
          var d = f.next() >>> 11, h = (f.next() >>> 0) / 4294967296, m = (d + h) / (1 << 21);
        while (m === 0);
        return m;
      }, a.int32 = f.next, a.quick = a, u && (typeof u == "object" && s(u, f), a.state = function() {
        return s(f, {});
      }), a;
    }
    n && n.exports ? n.exports = i : r && r.amd ? r(function() {
      return i;
    }) : this.tychei = i;
  })(
    hn,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(gi);
var p0 = gi.exports, Lc = { exports: {} };
const h0 = {}, m0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h0
}, Symbol.toStringTag, { value: "Module" })), g0 = /* @__PURE__ */ l0(m0);
(function(e) {
  (function(t, n, r) {
    var o = 256, s = 6, i = 52, c = "random", l = r.pow(o, s), f = r.pow(2, i), u = f * 2, a = o - 1, d;
    function h(A, x, F) {
      var j = [];
      x = x == !0 ? { entropy: !0 } : x || {};
      var G = N(b(
        x.entropy ? [A, S(n)] : A ?? H(),
        3
      ), j), ne = new m(j), de = function() {
        for (var pe = ne.g(s), he = l, Ee = 0; pe < f; )
          pe = (pe + Ee) * o, he *= o, Ee = ne.g(1);
        for (; pe >= u; )
          pe /= 2, he /= 2, Ee >>>= 1;
        return (pe + Ee) / he;
      };
      return de.int32 = function() {
        return ne.g(4) | 0;
      }, de.quick = function() {
        return ne.g(4) / 4294967296;
      }, de.double = de, N(S(ne.S), n), (x.pass || F || function(pe, he, Ee, qe) {
        return qe && (qe.S && v(qe, ne), pe.state = function() {
          return v(ne, {});
        }), Ee ? (r[c] = pe, he) : pe;
      })(
        de,
        G,
        "global" in x ? x.global : this == r,
        x.state
      );
    }
    function m(A) {
      var x, F = A.length, j = this, G = 0, ne = j.i = j.j = 0, de = j.S = [];
      for (F || (A = [F++]); G < o; )
        de[G] = G++;
      for (G = 0; G < o; G++)
        de[G] = de[ne = a & ne + A[G % F] + (x = de[G])], de[ne] = x;
      (j.g = function(pe) {
        for (var he, Ee = 0, qe = j.i, He = j.j, be = j.S; pe--; )
          he = be[qe = a & qe + 1], Ee = Ee * o + be[a & (be[qe] = be[He = a & He + he]) + (be[He] = he)];
        return j.i = qe, j.j = He, Ee;
      })(o);
    }
    function v(A, x) {
      return x.i = A.i, x.j = A.j, x.S = A.S.slice(), x;
    }
    function b(A, x) {
      var F = [], j = typeof A, G;
      if (x && j == "object")
        for (G in A)
          try {
            F.push(b(A[G], x - 1));
          } catch {
          }
      return F.length ? F : j == "string" ? A : A + "\0";
    }
    function N(A, x) {
      for (var F = A + "", j, G = 0; G < F.length; )
        x[a & G] = a & (j ^= x[a & G] * 19) + F.charCodeAt(G++);
      return S(x);
    }
    function H() {
      try {
        var A;
        return d && (A = d.randomBytes) ? A = A(o) : (A = new Uint8Array(o), (t.crypto || t.msCrypto).getRandomValues(A)), S(A);
      } catch {
        var x = t.navigator, F = x && x.plugins;
        return [+/* @__PURE__ */ new Date(), t, F, t.screen, S(n)];
      }
    }
    function S(A) {
      return String.fromCharCode.apply(0, A);
    }
    if (N(r.random(), n), e.exports) {
      e.exports = h;
      try {
        d = g0;
      } catch {
      }
    } else
      r["seed" + c] = h;
  })(
    // global: `self` in browsers (including strict mode and web workers),
    // otherwise `this` in Node and other environments
    typeof self < "u" ? self : hn,
    [],
    // pool: entropy pool starts empty
    Math
    // math: package containing random, pow, and seedrandom
  );
})(Lc);
var v0 = Lc.exports, b0 = c0, y0 = a0, w0 = u0, _0 = f0, E0 = d0, x0 = p0, mn = v0;
mn.alea = b0;
mn.xor128 = y0;
mn.xorwow = w0;
mn.xorshift7 = _0;
mn.xor4096 = E0;
mn.tychei = x0;
var C0 = mn;
const V0 = /* @__PURE__ */ i0(C0), to = [
  "ability",
  "able",
  "aboard",
  "about",
  "above",
  "accept",
  "accident",
  "according",
  "account",
  "accurate",
  "acres",
  "across",
  "act",
  "action",
  "active",
  "activity",
  "actual",
  "actually",
  "add",
  "addition",
  "additional",
  "adjective",
  "adult",
  "adventure",
  "advice",
  "affect",
  "afraid",
  "after",
  "afternoon",
  "again",
  "against",
  "age",
  "ago",
  "agree",
  "ahead",
  "aid",
  "air",
  "airplane",
  "alike",
  "alive",
  "all",
  "allow",
  "almost",
  "alone",
  "along",
  "aloud",
  "alphabet",
  "already",
  "also",
  "although",
  "am",
  "among",
  "amount",
  "ancient",
  "angle",
  "angry",
  "animal",
  "announced",
  "another",
  "answer",
  "ants",
  "any",
  "anybody",
  "anyone",
  "anything",
  "anyway",
  "anywhere",
  "apart",
  "apartment",
  "appearance",
  "apple",
  "applied",
  "appropriate",
  "are",
  "area",
  "arm",
  "army",
  "around",
  "arrange",
  "arrangement",
  "arrive",
  "arrow",
  "art",
  "article",
  "as",
  "aside",
  "ask",
  "asleep",
  "at",
  "ate",
  "atmosphere",
  "atom",
  "atomic",
  "attached",
  "attack",
  "attempt",
  "attention",
  "audience",
  "author",
  "automobile",
  "available",
  "average",
  "avoid",
  "aware",
  "away",
  "baby",
  "back",
  "bad",
  "badly",
  "bag",
  "balance",
  "ball",
  "balloon",
  "band",
  "bank",
  "bar",
  "bare",
  "bark",
  "barn",
  "base",
  "baseball",
  "basic",
  "basis",
  "basket",
  "bat",
  "battle",
  "be",
  "bean",
  "bear",
  "beat",
  "beautiful",
  "beauty",
  "became",
  "because",
  "become",
  "becoming",
  "bee",
  "been",
  "before",
  "began",
  "beginning",
  "begun",
  "behavior",
  "behind",
  "being",
  "believed",
  "bell",
  "belong",
  "below",
  "belt",
  "bend",
  "beneath",
  "bent",
  "beside",
  "best",
  "bet",
  "better",
  "between",
  "beyond",
  "bicycle",
  "bigger",
  "biggest",
  "bill",
  "birds",
  "birth",
  "birthday",
  "bit",
  "bite",
  "black",
  "blank",
  "blanket",
  "blew",
  "blind",
  "block",
  "blood",
  "blow",
  "blue",
  "board",
  "boat",
  "body",
  "bone",
  "book",
  "border",
  "born",
  "both",
  "bottle",
  "bottom",
  "bound",
  "bow",
  "bowl",
  "box",
  "boy",
  "brain",
  "branch",
  "brass",
  "brave",
  "bread",
  "break",
  "breakfast",
  "breath",
  "breathe",
  "breathing",
  "breeze",
  "brick",
  "bridge",
  "brief",
  "bright",
  "bring",
  "broad",
  "broke",
  "broken",
  "brother",
  "brought",
  "brown",
  "brush",
  "buffalo",
  "build",
  "building",
  "built",
  "buried",
  "burn",
  "burst",
  "bus",
  "bush",
  "business",
  "busy",
  "but",
  "butter",
  "buy",
  "by",
  "cabin",
  "cage",
  "cake",
  "call",
  "calm",
  "came",
  "camera",
  "camp",
  "can",
  "canal",
  "cannot",
  "cap",
  "capital",
  "captain",
  "captured",
  "car",
  "carbon",
  "card",
  "care",
  "careful",
  "carefully",
  "carried",
  "carry",
  "case",
  "cast",
  "castle",
  "cat",
  "catch",
  "cattle",
  "caught",
  "cause",
  "cave",
  "cell",
  "cent",
  "center",
  "central",
  "century",
  "certain",
  "certainly",
  "chain",
  "chair",
  "chamber",
  "chance",
  "change",
  "changing",
  "chapter",
  "character",
  "characteristic",
  "charge",
  "chart",
  "check",
  "cheese",
  "chemical",
  "chest",
  "chicken",
  "chief",
  "child",
  "children",
  "choice",
  "choose",
  "chose",
  "chosen",
  "church",
  "circle",
  "circus",
  "citizen",
  "city",
  "class",
  "classroom",
  "claws",
  "clay",
  "clean",
  "clear",
  "clearly",
  "climate",
  "climb",
  "clock",
  "close",
  "closely",
  "closer",
  "cloth",
  "clothes",
  "clothing",
  "cloud",
  "club",
  "coach",
  "coal",
  "coast",
  "coat",
  "coffee",
  "cold",
  "collect",
  "college",
  "colony",
  "color",
  "column",
  "combination",
  "combine",
  "come",
  "comfortable",
  "coming",
  "command",
  "common",
  "community",
  "company",
  "compare",
  "compass",
  "complete",
  "completely",
  "complex",
  "composed",
  "composition",
  "compound",
  "concerned",
  "condition",
  "congress",
  "connected",
  "consider",
  "consist",
  "consonant",
  "constantly",
  "construction",
  "contain",
  "continent",
  "continued",
  "contrast",
  "control",
  "conversation",
  "cook",
  "cookies",
  "cool",
  "copper",
  "copy",
  "corn",
  "corner",
  "correct",
  "correctly",
  "cost",
  "cotton",
  "could",
  "count",
  "country",
  "couple",
  "courage",
  "course",
  "court",
  "cover",
  "cow",
  "cowboy",
  "crack",
  "cream",
  "create",
  "creature",
  "crew",
  "crop",
  "cross",
  "crowd",
  "cry",
  "cup",
  "curious",
  "current",
  "curve",
  "customs",
  "cut",
  "cutting",
  "daily",
  "damage",
  "dance",
  "danger",
  "dangerous",
  "dark",
  "darkness",
  "date",
  "daughter",
  "dawn",
  "day",
  "dead",
  "deal",
  "dear",
  "death",
  "decide",
  "declared",
  "deep",
  "deeply",
  "deer",
  "definition",
  "degree",
  "depend",
  "depth",
  "describe",
  "desert",
  "design",
  "desk",
  "detail",
  "determine",
  "develop",
  "development",
  "diagram",
  "diameter",
  "did",
  "die",
  "differ",
  "difference",
  "different",
  "difficult",
  "difficulty",
  "dig",
  "dinner",
  "direct",
  "direction",
  "directly",
  "dirt",
  "dirty",
  "disappear",
  "discover",
  "discovery",
  "discuss",
  "discussion",
  "disease",
  "dish",
  "distance",
  "distant",
  "divide",
  "division",
  "do",
  "doctor",
  "does",
  "dog",
  "doing",
  "doll",
  "dollar",
  "done",
  "donkey",
  "door",
  "dot",
  "double",
  "doubt",
  "down",
  "dozen",
  "draw",
  "drawn",
  "dream",
  "dress",
  "drew",
  "dried",
  "drink",
  "drive",
  "driven",
  "driver",
  "driving",
  "drop",
  "dropped",
  "drove",
  "dry",
  "duck",
  "due",
  "dug",
  "dull",
  "during",
  "dust",
  "duty",
  "each",
  "eager",
  "ear",
  "earlier",
  "early",
  "earn",
  "earth",
  "easier",
  "easily",
  "east",
  "easy",
  "eat",
  "eaten",
  "edge",
  "education",
  "effect",
  "effort",
  "egg",
  "eight",
  "either",
  "electric",
  "electricity",
  "element",
  "elephant",
  "eleven",
  "else",
  "empty",
  "end",
  "enemy",
  "energy",
  "engine",
  "engineer",
  "enjoy",
  "enough",
  "enter",
  "entire",
  "entirely",
  "environment",
  "equal",
  "equally",
  "equator",
  "equipment",
  "escape",
  "especially",
  "essential",
  "establish",
  "even",
  "evening",
  "event",
  "eventually",
  "ever",
  "every",
  "everybody",
  "everyone",
  "everything",
  "everywhere",
  "evidence",
  "exact",
  "exactly",
  "examine",
  "example",
  "excellent",
  "except",
  "exchange",
  "excited",
  "excitement",
  "exciting",
  "exclaimed",
  "exercise",
  "exist",
  "expect",
  "experience",
  "experiment",
  "explain",
  "explanation",
  "explore",
  "express",
  "expression",
  "extra",
  "eye",
  "face",
  "facing",
  "fact",
  "factor",
  "factory",
  "failed",
  "fair",
  "fairly",
  "fall",
  "fallen",
  "familiar",
  "family",
  "famous",
  "far",
  "farm",
  "farmer",
  "farther",
  "fast",
  "fastened",
  "faster",
  "fat",
  "father",
  "favorite",
  "fear",
  "feathers",
  "feature",
  "fed",
  "feed",
  "feel",
  "feet",
  "fell",
  "fellow",
  "felt",
  "fence",
  "few",
  "fewer",
  "field",
  "fierce",
  "fifteen",
  "fifth",
  "fifty",
  "fight",
  "fighting",
  "figure",
  "fill",
  "film",
  "final",
  "finally",
  "find",
  "fine",
  "finest",
  "finger",
  "finish",
  "fire",
  "fireplace",
  "firm",
  "first",
  "fish",
  "five",
  "fix",
  "flag",
  "flame",
  "flat",
  "flew",
  "flies",
  "flight",
  "floating",
  "floor",
  "flow",
  "flower",
  "fly",
  "fog",
  "folks",
  "follow",
  "food",
  "foot",
  "football",
  "for",
  "force",
  "foreign",
  "forest",
  "forget",
  "forgot",
  "forgotten",
  "form",
  "former",
  "fort",
  "forth",
  "forty",
  "forward",
  "fought",
  "found",
  "four",
  "fourth",
  "fox",
  "frame",
  "free",
  "freedom",
  "frequently",
  "fresh",
  "friend",
  "friendly",
  "frighten",
  "frog",
  "from",
  "front",
  "frozen",
  "fruit",
  "fuel",
  "full",
  "fully",
  "fun",
  "function",
  "funny",
  "fur",
  "furniture",
  "further",
  "future",
  "gain",
  "game",
  "garage",
  "garden",
  "gas",
  "gasoline",
  "gate",
  "gather",
  "gave",
  "general",
  "generally",
  "gentle",
  "gently",
  "get",
  "getting",
  "giant",
  "gift",
  "girl",
  "give",
  "given",
  "giving",
  "glad",
  "glass",
  "globe",
  "go",
  "goes",
  "gold",
  "golden",
  "gone",
  "good",
  "goose",
  "got",
  "government",
  "grabbed",
  "grade",
  "gradually",
  "grain",
  "grandfather",
  "grandmother",
  "graph",
  "grass",
  "gravity",
  "gray",
  "great",
  "greater",
  "greatest",
  "greatly",
  "green",
  "grew",
  "ground",
  "group",
  "grow",
  "grown",
  "growth",
  "guard",
  "guess",
  "guide",
  "gulf",
  "gun",
  "habit",
  "had",
  "hair",
  "half",
  "halfway",
  "hall",
  "hand",
  "handle",
  "handsome",
  "hang",
  "happen",
  "happened",
  "happily",
  "happy",
  "harbor",
  "hard",
  "harder",
  "hardly",
  "has",
  "hat",
  "have",
  "having",
  "hay",
  "he",
  "headed",
  "heading",
  "health",
  "heard",
  "hearing",
  "heart",
  "heat",
  "heavy",
  "height",
  "held",
  "hello",
  "help",
  "helpful",
  "her",
  "herd",
  "here",
  "herself",
  "hidden",
  "hide",
  "high",
  "higher",
  "highest",
  "highway",
  "hill",
  "him",
  "himself",
  "his",
  "history",
  "hit",
  "hold",
  "hole",
  "hollow",
  "home",
  "honor",
  "hope",
  "horn",
  "horse",
  "hospital",
  "hot",
  "hour",
  "house",
  "how",
  "however",
  "huge",
  "human",
  "hundred",
  "hung",
  "hungry",
  "hunt",
  "hunter",
  "hurried",
  "hurry",
  "hurt",
  "husband",
  "ice",
  "idea",
  "identity",
  "if",
  "ill",
  "image",
  "imagine",
  "immediately",
  "importance",
  "important",
  "impossible",
  "improve",
  "in",
  "inch",
  "include",
  "including",
  "income",
  "increase",
  "indeed",
  "independent",
  "indicate",
  "individual",
  "industrial",
  "industry",
  "influence",
  "information",
  "inside",
  "instance",
  "instant",
  "instead",
  "instrument",
  "interest",
  "interior",
  "into",
  "introduced",
  "invented",
  "involved",
  "iron",
  "is",
  "island",
  "it",
  "its",
  "itself",
  "jack",
  "jar",
  "jet",
  "job",
  "join",
  "joined",
  "journey",
  "joy",
  "judge",
  "jump",
  "jungle",
  "just",
  "keep",
  "kept",
  "key",
  "kids",
  "kill",
  "kind",
  "kitchen",
  "knew",
  "knife",
  "know",
  "knowledge",
  "known",
  "label",
  "labor",
  "lack",
  "lady",
  "laid",
  "lake",
  "lamp",
  "land",
  "language",
  "large",
  "larger",
  "largest",
  "last",
  "late",
  "later",
  "laugh",
  "law",
  "lay",
  "layers",
  "lead",
  "leader",
  "leaf",
  "learn",
  "least",
  "leather",
  "leave",
  "leaving",
  "led",
  "left",
  "leg",
  "length",
  "lesson",
  "let",
  "letter",
  "level",
  "library",
  "lie",
  "life",
  "lift",
  "light",
  "like",
  "likely",
  "limited",
  "line",
  "lion",
  "lips",
  "liquid",
  "list",
  "listen",
  "little",
  "live",
  "living",
  "load",
  "local",
  "locate",
  "location",
  "log",
  "lonely",
  "long",
  "longer",
  "look",
  "loose",
  "lose",
  "loss",
  "lost",
  "lot",
  "loud",
  "love",
  "lovely",
  "low",
  "lower",
  "luck",
  "lucky",
  "lunch",
  "lungs",
  "lying",
  "machine",
  "machinery",
  "mad",
  "made",
  "magic",
  "magnet",
  "mail",
  "main",
  "mainly",
  "major",
  "make",
  "making",
  "man",
  "managed",
  "manner",
  "manufacturing",
  "many",
  "map",
  "mark",
  "market",
  "married",
  "mass",
  "massage",
  "master",
  "material",
  "mathematics",
  "matter",
  "may",
  "maybe",
  "me",
  "meal",
  "mean",
  "means",
  "meant",
  "measure",
  "meat",
  "medicine",
  "meet",
  "melted",
  "member",
  "memory",
  "men",
  "mental",
  "merely",
  "met",
  "metal",
  "method",
  "mice",
  "middle",
  "might",
  "mighty",
  "mile",
  "military",
  "milk",
  "mill",
  "mind",
  "mine",
  "minerals",
  "minute",
  "mirror",
  "missing",
  "mission",
  "mistake",
  "mix",
  "mixture",
  "model",
  "modern",
  "molecular",
  "moment",
  "money",
  "monkey",
  "month",
  "mood",
  "moon",
  "more",
  "morning",
  "most",
  "mostly",
  "mother",
  "motion",
  "motor",
  "mountain",
  "mouse",
  "mouth",
  "move",
  "movement",
  "movie",
  "moving",
  "mud",
  "muscle",
  "music",
  "musical",
  "must",
  "my",
  "myself",
  "mysterious",
  "nails",
  "name",
  "nation",
  "national",
  "native",
  "natural",
  "naturally",
  "nature",
  "near",
  "nearby",
  "nearer",
  "nearest",
  "nearly",
  "necessary",
  "neck",
  "needed",
  "needle",
  "needs",
  "negative",
  "neighbor",
  "neighborhood",
  "nervous",
  "nest",
  "never",
  "new",
  "news",
  "newspaper",
  "next",
  "nice",
  "night",
  "nine",
  "no",
  "nobody",
  "nodded",
  "noise",
  "none",
  "noon",
  "nor",
  "north",
  "nose",
  "not",
  "note",
  "noted",
  "nothing",
  "notice",
  "noun",
  "now",
  "number",
  "numeral",
  "nuts",
  "object",
  "observe",
  "obtain",
  "occasionally",
  "occur",
  "ocean",
  "of",
  "off",
  "offer",
  "office",
  "officer",
  "official",
  "oil",
  "old",
  "older",
  "oldest",
  "on",
  "once",
  "one",
  "only",
  "onto",
  "open",
  "operation",
  "opinion",
  "opportunity",
  "opposite",
  "or",
  "orange",
  "orbit",
  "order",
  "ordinary",
  "organization",
  "organized",
  "origin",
  "original",
  "other",
  "ought",
  "our",
  "ourselves",
  "out",
  "outer",
  "outline",
  "outside",
  "over",
  "own",
  "owner",
  "oxygen",
  "pack",
  "package",
  "page",
  "paid",
  "pain",
  "paint",
  "pair",
  "palace",
  "pale",
  "pan",
  "paper",
  "paragraph",
  "parallel",
  "parent",
  "park",
  "part",
  "particles",
  "particular",
  "particularly",
  "partly",
  "parts",
  "party",
  "pass",
  "passage",
  "past",
  "path",
  "pattern",
  "pay",
  "peace",
  "pen",
  "pencil",
  "people",
  "per",
  "percent",
  "perfect",
  "perfectly",
  "perhaps",
  "period",
  "person",
  "personal",
  "pet",
  "phrase",
  "physical",
  "piano",
  "pick",
  "picture",
  "pictured",
  "pie",
  "piece",
  "pig",
  "pile",
  "pilot",
  "pine",
  "pink",
  "pipe",
  "pitch",
  "place",
  "plain",
  "plan",
  "plane",
  "planet",
  "planned",
  "planning",
  "plant",
  "plastic",
  "plate",
  "plates",
  "play",
  "pleasant",
  "please",
  "pleasure",
  "plenty",
  "plural",
  "plus",
  "pocket",
  "poem",
  "poet",
  "poetry",
  "point",
  "pole",
  "police",
  "policeman",
  "political",
  "pond",
  "pony",
  "pool",
  "poor",
  "popular",
  "population",
  "porch",
  "port",
  "position",
  "positive",
  "possible",
  "possibly",
  "post",
  "pot",
  "potatoes",
  "pound",
  "pour",
  "powder",
  "power",
  "powerful",
  "practical",
  "practice",
  "prepare",
  "present",
  "president",
  "press",
  "pressure",
  "pretty",
  "prevent",
  "previous",
  "price",
  "pride",
  "primitive",
  "principal",
  "principle",
  "printed",
  "private",
  "prize",
  "probably",
  "problem",
  "process",
  "produce",
  "product",
  "production",
  "program",
  "progress",
  "promised",
  "proper",
  "properly",
  "property",
  "protection",
  "proud",
  "prove",
  "provide",
  "public",
  "pull",
  "pupil",
  "pure",
  "purple",
  "purpose",
  "push",
  "put",
  "putting",
  "quarter",
  "queen",
  "question",
  "quick",
  "quickly",
  "quiet",
  "quietly",
  "quite",
  "rabbit",
  "race",
  "radio",
  "railroad",
  "rain",
  "raise",
  "ran",
  "ranch",
  "range",
  "rapidly",
  "rate",
  "rather",
  "raw",
  "rays",
  "reach",
  "read",
  "reader",
  "ready",
  "real",
  "realize",
  "rear",
  "reason",
  "recall",
  "receive",
  "recent",
  "recently",
  "recognize",
  "record",
  "red",
  "refer",
  "refused",
  "region",
  "regular",
  "related",
  "relationship",
  "religious",
  "remain",
  "remarkable",
  "remember",
  "remove",
  "repeat",
  "replace",
  "replied",
  "report",
  "represent",
  "require",
  "research",
  "respect",
  "rest",
  "result",
  "return",
  "review",
  "rhyme",
  "rhythm",
  "rice",
  "rich",
  "ride",
  "riding",
  "right",
  "ring",
  "rise",
  "rising",
  "river",
  "road",
  "roar",
  "rock",
  "rocket",
  "rocky",
  "rod",
  "roll",
  "roof",
  "room",
  "root",
  "rope",
  "rose",
  "rough",
  "round",
  "route",
  "row",
  "rubbed",
  "rubber",
  "rule",
  "ruler",
  "run",
  "running",
  "rush",
  "sad",
  "saddle",
  "safe",
  "safety",
  "said",
  "sail",
  "sale",
  "salmon",
  "salt",
  "same",
  "sand",
  "sang",
  "sat",
  "satellites",
  "satisfied",
  "save",
  "saved",
  "saw",
  "say",
  "scale",
  "scared",
  "scene",
  "school",
  "science",
  "scientific",
  "scientist",
  "score",
  "screen",
  "sea",
  "search",
  "season",
  "seat",
  "second",
  "secret",
  "section",
  "see",
  "seed",
  "seeing",
  "seems",
  "seen",
  "seldom",
  "select",
  "selection",
  "sell",
  "send",
  "sense",
  "sent",
  "sentence",
  "separate",
  "series",
  "serious",
  "serve",
  "service",
  "sets",
  "setting",
  "settle",
  "settlers",
  "seven",
  "several",
  "shade",
  "shadow",
  "shake",
  "shaking",
  "shall",
  "shallow",
  "shape",
  "share",
  "sharp",
  "she",
  "sheep",
  "sheet",
  "shelf",
  "shells",
  "shelter",
  "shine",
  "shinning",
  "ship",
  "shirt",
  "shoe",
  "shoot",
  "shop",
  "shore",
  "short",
  "shorter",
  "shot",
  "should",
  "shoulder",
  "shout",
  "show",
  "shown",
  "shut",
  "sick",
  "sides",
  "sight",
  "sign",
  "signal",
  "silence",
  "silent",
  "silk",
  "silly",
  "silver",
  "similar",
  "simple",
  "simplest",
  "simply",
  "since",
  "sing",
  "single",
  "sink",
  "sister",
  "sit",
  "sitting",
  "situation",
  "six",
  "size",
  "skill",
  "skin",
  "sky",
  "slabs",
  "slave",
  "sleep",
  "slept",
  "slide",
  "slight",
  "slightly",
  "slip",
  "slipped",
  "slope",
  "slow",
  "slowly",
  "small",
  "smaller",
  "smallest",
  "smell",
  "smile",
  "smoke",
  "smooth",
  "snake",
  "snow",
  "so",
  "soap",
  "social",
  "society",
  "soft",
  "softly",
  "soil",
  "solar",
  "sold",
  "soldier",
  "solid",
  "solution",
  "solve",
  "some",
  "somebody",
  "somehow",
  "someone",
  "something",
  "sometime",
  "somewhere",
  "son",
  "song",
  "soon",
  "sort",
  "sound",
  "source",
  "south",
  "southern",
  "space",
  "speak",
  "special",
  "species",
  "specific",
  "speech",
  "speed",
  "spell",
  "spend",
  "spent",
  "spider",
  "spin",
  "spirit",
  "spite",
  "split",
  "spoken",
  "sport",
  "spread",
  "spring",
  "square",
  "stage",
  "stairs",
  "stand",
  "standard",
  "star",
  "stared",
  "start",
  "state",
  "statement",
  "station",
  "stay",
  "steady",
  "steam",
  "steel",
  "steep",
  "stems",
  "step",
  "stepped",
  "stick",
  "stiff",
  "still",
  "stock",
  "stomach",
  "stone",
  "stood",
  "stop",
  "stopped",
  "store",
  "storm",
  "story",
  "stove",
  "straight",
  "strange",
  "stranger",
  "straw",
  "stream",
  "street",
  "strength",
  "stretch",
  "strike",
  "string",
  "strip",
  "strong",
  "stronger",
  "struck",
  "structure",
  "struggle",
  "stuck",
  "student",
  "studied",
  "studying",
  "subject",
  "substance",
  "success",
  "successful",
  "such",
  "sudden",
  "suddenly",
  "sugar",
  "suggest",
  "suit",
  "sum",
  "summer",
  "sun",
  "sunlight",
  "supper",
  "supply",
  "support",
  "suppose",
  "sure",
  "surface",
  "surprise",
  "surrounded",
  "swam",
  "sweet",
  "swept",
  "swim",
  "swimming",
  "swing",
  "swung",
  "syllable",
  "symbol",
  "system",
  "table",
  "tail",
  "take",
  "taken",
  "tales",
  "talk",
  "tall",
  "tank",
  "tape",
  "task",
  "taste",
  "taught",
  "tax",
  "tea",
  "teach",
  "teacher",
  "team",
  "tears",
  "teeth",
  "telephone",
  "television",
  "tell",
  "temperature",
  "ten",
  "tent",
  "term",
  "terrible",
  "test",
  "than",
  "thank",
  "that",
  "thee",
  "them",
  "themselves",
  "then",
  "theory",
  "there",
  "therefore",
  "these",
  "they",
  "thick",
  "thin",
  "thing",
  "think",
  "third",
  "thirty",
  "this",
  "those",
  "thou",
  "though",
  "thought",
  "thousand",
  "thread",
  "three",
  "threw",
  "throat",
  "through",
  "throughout",
  "throw",
  "thrown",
  "thumb",
  "thus",
  "thy",
  "tide",
  "tie",
  "tight",
  "tightly",
  "till",
  "time",
  "tin",
  "tiny",
  "tip",
  "tired",
  "title",
  "to",
  "tobacco",
  "today",
  "together",
  "told",
  "tomorrow",
  "tone",
  "tongue",
  "tonight",
  "too",
  "took",
  "tool",
  "top",
  "topic",
  "torn",
  "total",
  "touch",
  "toward",
  "tower",
  "town",
  "toy",
  "trace",
  "track",
  "trade",
  "traffic",
  "trail",
  "train",
  "transportation",
  "trap",
  "travel",
  "treated",
  "tree",
  "triangle",
  "tribe",
  "trick",
  "tried",
  "trip",
  "troops",
  "tropical",
  "trouble",
  "truck",
  "trunk",
  "truth",
  "try",
  "tube",
  "tune",
  "turn",
  "twelve",
  "twenty",
  "twice",
  "two",
  "type",
  "typical",
  "uncle",
  "under",
  "underline",
  "understanding",
  "unhappy",
  "union",
  "unit",
  "universe",
  "unknown",
  "unless",
  "until",
  "unusual",
  "up",
  "upon",
  "upper",
  "upward",
  "us",
  "use",
  "useful",
  "using",
  "usual",
  "usually",
  "valley",
  "valuable",
  "value",
  "vapor",
  "variety",
  "various",
  "vast",
  "vegetable",
  "verb",
  "vertical",
  "very",
  "vessels",
  "victory",
  "view",
  "village",
  "visit",
  "visitor",
  "voice",
  "volume",
  "vote",
  "vowel",
  "voyage",
  "wagon",
  "wait",
  "walk",
  "wall",
  "want",
  "war",
  "warm",
  "warn",
  "was",
  "wash",
  "waste",
  "watch",
  "water",
  "wave",
  "way",
  "we",
  "weak",
  "wealth",
  "wear",
  "weather",
  "week",
  "weigh",
  "weight",
  "welcome",
  "well",
  "went",
  "were",
  "west",
  "western",
  "wet",
  "whale",
  "what",
  "whatever",
  "wheat",
  "wheel",
  "when",
  "whenever",
  "where",
  "wherever",
  "whether",
  "which",
  "while",
  "whispered",
  "whistle",
  "white",
  "who",
  "whole",
  "whom",
  "whose",
  "why",
  "wide",
  "widely",
  "wife",
  "wild",
  "will",
  "willing",
  "win",
  "wind",
  "window",
  "wing",
  "winter",
  "wire",
  "wise",
  "wish",
  "with",
  "within",
  "without",
  "wolf",
  "women",
  "won",
  "wonder",
  "wonderful",
  "wood",
  "wooden",
  "wool",
  "word",
  "wore",
  "work",
  "worker",
  "world",
  "worried",
  "worry",
  "worse",
  "worth",
  "would",
  "wrapped",
  "write",
  "writer",
  "writing",
  "written",
  "wrong",
  "wrote",
  "yard",
  "year",
  "yellow",
  "yes",
  "yesterday",
  "yet",
  "you",
  "young",
  "younger",
  "your",
  "yourself",
  "youth",
  "zero",
  "zebra",
  "zipper",
  "zoo",
  "zulu"
], qo = to.reduce(
  (e, t) => t.length < e.length ? t : e
).length, Ko = to.reduce(
  (e, t) => t.length > e.length ? t : e
).length;
function Tn(e) {
  const t = e != null && e.seed ? new V0(e.seed) : null, { minLength: n, maxLength: r, ...o } = e || {};
  function s() {
    let h = typeof n != "number" ? qo : c(n);
    const m = typeof r != "number" ? Ko : c(r);
    h > m && (h = m);
    let v = !1, b;
    for (; !v; )
      b = i(), v = b.length <= m && b.length >= h;
    return b;
  }
  function i() {
    return to[l(to.length)];
  }
  function c(h) {
    return h < qo && (h = qo), h > Ko && (h = Ko), h;
  }
  function l(h) {
    const m = t ? t() : Math.random();
    return Math.floor(m * h);
  }
  if (e === void 0)
    return s();
  if (typeof e == "number")
    e = { exactly: e };
  else if (Object.keys(o).length === 0)
    return s();
  e.exactly && (e.min = e.exactly, e.max = e.exactly), typeof e.wordsPerString != "number" && (e.wordsPerString = 1), typeof e.formatter != "function" && (e.formatter = (h) => h), typeof e.separator != "string" && (e.separator = " ");
  const f = e.min + l(e.max + 1 - e.min);
  let u = [], a = "", d = 0;
  for (let h = 0; h < f * e.wordsPerString; h++)
    d === e.wordsPerString - 1 ? a += e.formatter(s(), d) : a += e.formatter(s(), d) + e.separator, d++, (h + 1) % e.wordsPerString === 0 && (u.push(a), a = "", d = 0);
  return typeof e.join == "string" && (u = u.join(e.join)), u;
}
var Le = [];
for (var Wo = 0; Wo < 256; ++Wo)
  Le.push((Wo + 256).toString(16).slice(1));
function N0(e, t = 0) {
  return (Le[e[t + 0]] + Le[e[t + 1]] + Le[e[t + 2]] + Le[e[t + 3]] + "-" + Le[e[t + 4]] + Le[e[t + 5]] + "-" + Le[e[t + 6]] + Le[e[t + 7]] + "-" + Le[e[t + 8]] + Le[e[t + 9]] + "-" + Le[e[t + 10]] + Le[e[t + 11]] + Le[e[t + 12]] + Le[e[t + 13]] + Le[e[t + 14]] + Le[e[t + 15]]).toLowerCase();
}
var xr, O0 = new Uint8Array(16);
function S0() {
  if (!xr && (xr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !xr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return xr(O0);
}
var M0 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const _l = {
  randomUUID: M0
};
function Pn(e, t, n) {
  if (_l.randomUUID && !t && !e)
    return _l.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || S0)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (var o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return N0(r);
}
const H0 = { class: "flex flex-col gap-1" }, L0 = { class: "text-sm font-bold" }, _s = /* @__PURE__ */ _e({
  __name: "TextareaInput",
  props: /* @__PURE__ */ dr({
    title: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (n, r) => (W(), ye("div", H0, [
      B("label", L0, Te(n.title), 1),
      Ks(B("textarea", {
        "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
        class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
      }, null, 512), [
        [sc, t.value]
      ])
    ]));
  }
}), D0 = { class: "flex flex-col gap-2 p-2" }, qn = /* @__PURE__ */ _e({
  __name: "TextNode",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (n, r) => (W(), xe(ut, { title: "Content" }, {
      default: Qe(() => [
        B("div", D0, [
          ie(_s, {
            title: "Content",
            modelValue: t.value.content,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value.content = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
});
class z0 {
  constructor() {
    Mo(this, "client");
    let t = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.client = ws.create(t);
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
    const r = await this.client.post("/page-builder/storage-url", {
      bucket: n.bucket || "",
      content_type: n.contentType || t.type,
      expires: n.expires || "",
      visibility: n.visibility || "",
      ...n.data
    }, {
      headers: n.headers || {},
      ...n.options
    });
    let o = r.data.headers;
    return "Host" in o && delete o.Host, typeof n.progress > "u" && (n.progress = () => {
    }), await ws.put(r.data.url, t, {
      headers: o,
      onUploadProgress: (s) => {
      }
    }), r.data.extension = t.name.split(".").pop(), r.data;
  }
}
const R0 = new z0(), T0 = { class: "flex flex-col gap-1" }, P0 = { class: "text-sm font-bold" }, A0 = ["value"], k0 = /* @__PURE__ */ _e({
  __name: "FileUploaderInput",
  props: /* @__PURE__ */ dr({
    title: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = new Hc(), n = nt(e, "modelValue"), r = e, o = Gt(null), s = Gt(0), i = () => {
      o.value && "click" in o.value && o.value.click();
    }, c = async (l) => {
      const f = await R0.store(l.target.files[0], {
        progress: (u) => {
          s.value = Math.round(u * 100);
        }
      });
      n.value = await t.storeFile(f.uuid, f.key, f.bucket);
    };
    return (l, f) => (W(), ye("div", T0, [
      B("label", P0, Te(r.title), 1),
      B("input", {
        type: "text",
        value: n.value,
        class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
      }, null, 8, A0),
      B("input", {
        onChange: c,
        ref_key: "fileSelection",
        ref: o,
        type: "file",
        class: "hidden"
      }, null, 544),
      B("button", {
        onClick: f[0] || (f[0] = (u) => i()),
        class: "border bg-blue-600 hover:bg-blue-700 text-white rounded-md py-1 text-xs col-span-4"
      }, " Upload File ")
    ]));
  }
}), $0 = { class: "flex flex-col gap-2 p-2" }, I0 = /* @__PURE__ */ _e({
  __name: "ImageOptions",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue"), n = [
      { label: "Fill", value: "object-fill" },
      { label: "Contain", value: "object-contain" },
      { label: "Cover", value: "object-cover" },
      { label: "None", value: "object-none" },
      { label: "Scale Down", value: "object-scale-down" }
    ];
    return (r, o) => (W(), xe(ut, { title: "Image Options" }, {
      default: Qe(() => [
        B("div", $0, [
          ie(k0, {
            title: "Image Source",
            modelValue: t.value.attributes.src,
            "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value.attributes.src = s)
          }, null, 8, ["modelValue"]),
          ie(On, {
            title: "Image Alt",
            modelValue: t.value.attributes.alt,
            "onUpdate:modelValue": o[1] || (o[1] = (s) => t.value.attributes.alt = s)
          }, null, 8, ["modelValue"]),
          ie(Mn, {
            title: "Object Fit",
            options: n,
            modelValue: t.value,
            "onUpdate:modelValue": o[2] || (o[2] = (s) => t.value = s),
            "can-be-empty": !0
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
}), B0 = { class: "flex flex-col gap-2 p-2" }, j0 = /* @__PURE__ */ _e({
  __name: "GridSettings",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue"), n = [
      { label: "1", value: "col-span-1" },
      { label: "2", value: "col-span-2" },
      { label: "3", value: "col-span-3" },
      { label: "4", value: "col-span-4" }
    ];
    return (r, o) => (W(), xe(ut, { title: "Grid Settings" }, {
      default: Qe(() => [
        B("div", B0, [
          ie(Mn, {
            "can-be-empty": !1,
            title: "Grid Col Span",
            options: n,
            modelValue: t.value,
            "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
}), F0 = { class: "flex flex-col gap-2 p-2" }, U0 = /* @__PURE__ */ _e({
  __name: "Sizing",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue"), n = [
      { label: "0", value: "w-0" },
      { label: "Px", value: "w-px" },
      { label: "0.5 (2px)", value: "w-0.5" },
      { label: "1 (4px)", value: "w-1" },
      { label: "1.5 (6px)", value: "w-1.5" },
      { label: "2 (8px)", value: "w-2" },
      { label: "2.5 (10px)", value: "w-2.5" },
      { label: "3 (12px)", value: "w-3" },
      { label: "3.5 (14px)", value: "w-3.5" },
      { label: "4 (16px)", value: "w-4" },
      { label: "5 (20px)", value: "w-5" },
      { label: "6 (24px)", value: "w-6" },
      { label: "7 (28px)", value: "w-7" },
      { label: "8 (32px)", value: "w-8" },
      { label: "9 (36px)", value: "w-9" },
      { label: "10 (40px)", value: "w-10" },
      { label: "11 (44px)", value: "w-11" },
      { label: "12 (48px)", value: "w-12" },
      { label: "14 (56px)", value: "w-14" },
      { label: "16 (64px)", value: "w-16" },
      { label: "20 (80px)", value: "w-20" },
      { label: "24 (96px)", value: "w-24" },
      { label: "28 (112px)", value: "w-28" },
      { label: "32 (128px)", value: "w-32" },
      { label: "36 (144px)", value: "w-36" },
      { label: "40 (160px)", value: "w-40" },
      { label: "44 (176px)", value: "w-44" },
      { label: "48 (192px)", value: "w-48" },
      { label: "52 (208px)", value: "w-52" },
      { label: "56 (224px)", value: "w-56" },
      { label: "60 (240px)", value: "w-60" },
      { label: "64 (256px)", value: "w-64" },
      { label: "72 (288px)", value: "w-72" },
      { label: "80 (320px)", value: "w-80" },
      { label: "96 (384px)", value: "w-96" },
      { label: "Auto", value: "w-auto" },
      { label: "1/2", value: "w-1/2" },
      { label: "1/3", value: "w-1/3" },
      { label: "2/3", value: "w-2/3" },
      { label: "1/4", value: "w-1/4" },
      { label: "2/4", value: "w-2/4" },
      { label: "3/4", value: "w-3/4" },
      { label: "1/5", value: "w-1/5" },
      { label: "2/5", value: "w-2/5" },
      { label: "3/5", value: "w-3/5" },
      { label: "4/5", value: "w-4/5" },
      { label: "1/6", value: "w-1/6" },
      { label: "2/6", value: "w-2/6" },
      { label: "3/6", value: "w-3/6" },
      { label: "4/6", value: "w-4/6" },
      { label: "5/6", value: "w-5/6" },
      { label: "1/12", value: "w-1/12" },
      { label: "2/12", value: "w-2/12" },
      { label: "3/12", value: "w-3/12" },
      { label: "4/12", value: "w-4/12" },
      { label: "5/12", value: "w-5/12" },
      { label: "6/12", value: "w-6/12" },
      { label: "7/12", value: "w-7/12" },
      { label: "8/12", value: "w-8/12" },
      { label: "9/12", value: "w-9/12" },
      { label: "10/12", value: "w-10/12" },
      { label: "11/12", value: "w-11/12" },
      { label: "Full", value: "w-full" },
      { label: "Screen", value: "w-screen" },
      { label: "SVW", value: "w-svw" },
      { label: "LVW", value: "w-lvw" },
      { label: "DVW", value: "w-dvw" },
      { label: "Min Content", value: "w-min" },
      { label: "Max Content", value: "w-max" },
      { label: "Fit Content", value: "w-fit" }
    ], r = [
      { label: "0", value: "h-0" },
      { label: "Px", value: "h-px" },
      { label: "0.5 (2px)", value: "h-0.5" },
      { label: "1 (4px)", value: "h-1" },
      { label: "1.5 (6px)", value: "h-1.5" },
      { label: "2 (8px)", value: "h-2" },
      { label: "2.5 (10px)", value: "h-2.5" },
      { label: "3 (12px)", value: "h-3" },
      { label: "3.5 (14px)", value: "h-3.5" },
      { label: "4 (16px)", value: "h-4" },
      { label: "5 (20px)", value: "h-5" },
      { label: "6 (24px)", value: "h-6" },
      { label: "7 (28px)", value: "h-7" },
      { label: "8 (32px)", value: "h-8" },
      { label: "9 (36px)", value: "h-9" },
      { label: "10 (40px)", value: "h-10" },
      { label: "11 (44px)", value: "h-11" },
      { label: "12 (48px)", value: "h-12" },
      { label: "14 (56px)", value: "h-14" },
      { label: "16 (64px)", value: "h-16" },
      { label: "20 (80px)", value: "h-20" },
      { label: "24 (96px)", value: "h-24" },
      { label: "28 (112px)", value: "h-28" },
      { label: "32 (128px)", value: "h-32" },
      { label: "36 (144px)", value: "h-36" },
      { label: "40 (160px)", value: "h-40" },
      { label: "44 (176px)", value: "h-44" },
      { label: "48 (192px)", value: "h-48" },
      { label: "52 (208px)", value: "h-52" },
      { label: "56 (224px)", value: "h-56" },
      { label: "60 (240px)", value: "h-60" },
      { label: "64 (256px)", value: "h-64" },
      { label: "72 (288px)", value: "h-72" },
      { label: "80 (320px)", value: "h-80" },
      { label: "96 (384px)", value: "h-96" },
      { label: "Auto", value: "h-auto" },
      { label: "1/2", value: "h-1/2" },
      { label: "1/3", value: "h-1/3" },
      { label: "2/3", value: "h-2/3" },
      { label: "1/4", value: "h-1/4" },
      { label: "2/4", value: "h-2/4" },
      { label: "3/4", value: "h-3/4" },
      { label: "1/5", value: "h-1/5" },
      { label: "2/5", value: "h-2/5" },
      { label: "3/5", value: "h-3/5" },
      { label: "4/5", value: "h-4/5" },
      { label: "1/6", value: "h-1/6" },
      { label: "2/6", value: "h-2/6" },
      { label: "3/6", value: "h-3/6" },
      { label: "4/6", value: "h-4/6" },
      { label: "5/6", value: "h-5/6" },
      { label: "Full", value: "h-full" },
      { label: "Screen", value: "h-screen" },
      { label: "SVH", value: "h-svh" },
      { label: "LVH", value: "h-lvh" },
      { label: "DVH", value: "h-dvh" },
      { label: "Min Content", value: "h-min" },
      { label: "Max Content", value: "h-max" },
      { label: "Fit Content", value: "h-fit" }
    ];
    return (o, s) => (W(), xe(ut, { title: "Sizing" }, {
      default: Qe(() => [
        B("div", F0, [
          ie(Mn, {
            title: "Width",
            options: n,
            modelValue: t.value,
            "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value = i),
            "can-be-empty": !0
          }, null, 8, ["modelValue"]),
          ie(Mn, {
            title: "Height",
            options: r,
            modelValue: t.value,
            "onUpdate:modelValue": s[1] || (s[1] = (i) => t.value = i),
            "can-be-empty": !0
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
}), q0 = { class: "flex flex-col gap-2 p-2" }, K0 = /* @__PURE__ */ _e({
  __name: "FlexSettings",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue"), n = [
      { label: "0px", value: "gap-0" },
      { label: "1px", value: "gap-px" },
      { label: "2px", value: "gap-0.5" },
      { label: "4px", value: "gap-1" },
      { label: "6px", value: "gap-1.5" },
      { label: "8px", value: "gap-2" },
      { label: "10px", value: "gap-2.5" },
      { label: "12px", value: "gap-3" },
      { label: "14px", value: "gap-3.5" },
      { label: "16px", value: "gap-4" },
      { label: "20px", value: "gap-5" },
      { label: "24px", value: "gap-6" },
      { label: "28px", value: "gap-7" },
      { label: "32px", value: "gap-8" },
      { label: "36px", value: "gap-9" },
      { label: "40px", value: "gap-10" },
      { label: "44px", value: "gap-11" },
      { label: "48px", value: "gap-12" },
      { label: "56px", value: "gap-14" },
      { label: "64px", value: "gap-16" },
      { label: "80px", value: "gap-20" },
      { label: "96px", value: "gap-24" },
      { label: "112px", value: "gap-28" },
      { label: "128px", value: "gap-32" },
      { label: "144px", value: "gap-36" },
      { label: "160px", value: "gap-40" },
      { label: "176px", value: "gap-44" },
      { label: "192px", value: "gap-48" },
      { label: "208px", value: "gap-52" },
      { label: "224px", value: "gap-56" },
      { label: "240px", value: "gap-60" },
      { label: "256px", value: "gap-64" },
      { label: "288px", value: "gap-72" },
      { label: "320px", value: "gap-80" },
      { label: "384px", value: "gap-96" }
    ];
    return (r, o) => (W(), xe(ut, { title: "Flex Settings" }, {
      default: Qe(() => [
        B("div", q0, [
          ie(Mn, {
            title: "Gap",
            options: n,
            "can-be-empty": !0,
            modelValue: t.value,
            "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
}), W0 = (e) => {
  switch (e) {
    case Ie.Div:
      return [Bt, j0, K0];
    case Ie.Img:
      return [Bt, I0, U0];
    case Ie.H1:
      return [Un, Fn, jn, Bt, qn];
    case Ie.H2:
      return [Un, Fn, jn, Bt, qn];
    case Ie.H3:
      return [Un, Fn, jn, Bt, qn];
    case Ie.H4:
      return [Un, Fn, jn, Bt, qn];
    case Ie.P:
      return [Un, Fn, jn, Bt, qn];
    default:
      return [Bt];
  }
}, G0 = () => ({
  id: Tn({ exactly: 3, join: "-" }),
  order: 0,
  uuid: Pn(),
  attributes: {
    classes: ["col-span-4"]
  },
  as: Ie.Div,
  elements: []
}), J0 = () => ({
  id: Tn({ exactly: 3, join: "-" }),
  order: 0,
  uuid: Pn(),
  attributes: {
    classes: ["flex", "flex-col", "gap-2"]
  },
  as: Ie.Div,
  elements: []
}), X0 = () => ({
  id: Tn({ exactly: 3, join: "-" }),
  order: 0,
  attributes: {},
  uuid: Pn(),
  as: Ie.P,
  elements: [],
  content: "Paragraph"
}), Y0 = () => ({
  id: Tn({ exactly: 3, join: "-" }),
  order: 0,
  attributes: {},
  uuid: Pn(),
  as: Ie.H1,
  elements: [],
  content: "Header 1"
}), Q0 = () => ({
  id: Tn({ exactly: 3, join: "-" }),
  order: 0,
  uuid: Pn(),
  attributes: {},
  as: Ie.H2,
  elements: [],
  content: "Header 2"
}), Z0 = () => ({
  id: Tn({ exactly: 3, join: "-" }),
  order: 0,
  uuid: Pn(),
  as: Ie.Img,
  elements: [],
  attributes: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image"
  }
}), Dc = {
  div: G0,
  headerOne: Y0,
  headerTwo: Q0,
  image: Z0,
  p: X0,
  stack: J0
}, ef = {
  Layouts: [
    {
      label: "Div Column",
      description: "A column that can contain other elements",
      function: "div"
    },
    {
      label: "Stack",
      description: "A stack of elements with some configurable gap between them",
      function: "stack"
    }
  ],
  "Headers and Paragraphs": [
    {
      label: "Header 1",
      description: "A header with the H1 tag",
      function: "headerOne"
    },
    {
      label: "Header 2",
      description: "A header with the H2 tag",
      function: "headerTwo"
    },
    {
      label: "Paragraph",
      description: "A paragraph element",
      function: "p"
    }
  ],
  Media: [
    {
      label: "Image",
      description: "An image element",
      function: "image"
    }
  ]
}, tf = { class: "self-center truncate" }, nf = /* @__PURE__ */ _e({
  __name: "ElementTreeEntry",
  props: {
    element: {},
    depth: {}
  },
  emits: ["selectedElement", "deleteElement"],
  setup(e, { emit: t }) {
    const n = t, r = (l) => {
      n("selectedElement", l);
    }, o = (l) => {
      n("deleteElement", l);
    }, s = /* @__PURE__ */ new Map(), i = (l) => {
      const f = document.querySelector(`[data-uuid="${l.uuid}"]`);
      !f || s.has(l.uuid) || (s.set(l.uuid, f.style.border), f.style.border = "1px solid red");
    }, c = (l) => {
      const f = document.querySelector(`[data-uuid="${l.uuid}"]`);
      !f || !s.has(l.uuid) || (f.style.border = s.get(l.uuid) || "", s.delete(l.uuid));
    };
    return (l, f) => {
      var a;
      const u = Js("ElementTreeEntry", !0);
      return W(), ye(ge, null, [
        B("div", {
          onClick: f[1] || (f[1] = (d) => r(l.element)),
          onMouseover: f[2] || (f[2] = (d) => i(l.element)),
          onMouseleave: f[3] || (f[3] = (d) => c(l.element)),
          class: "p-2 relative z-5 shrink-0 w-full bg-gradient-to-r cursor-pointer from-gray-50 to-gray-200 border-b border-gray-300 h-8 flex items-stretch justify-between"
        }, [
          B("p", tf, Te(" > ".repeat(l.depth)) + " " + Te(l.element.as) + ": " + Te(l.element.id), 1),
          B("button", {
            type: "button",
            class: "flex items-center justify-center z-10 relative p-2 hover:bg-gray-50",
            onClick: f[0] || (f[0] = (d) => o(l.element))
          }, [
            ie(ui, {
              icon: "trash",
              class: "w-3 h-3 text-gray-500 transition-transform"
            })
          ])
        ], 32),
        ((a = l.element.elements) == null ? void 0 : a.length) > 0 ? (W(!0), ye(ge, { key: 0 }, Kt(l.element.elements, (d) => (W(), xe(u, {
          key: d.id,
          onSelectedElement: r,
          onDeleteElement: o,
          element: d,
          depth: l.depth + 1
        }, null, 8, ["element", "depth"]))), 128)) : Sn("", !0)
      ], 64);
    };
  }
});
const zc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, rf = /* @__PURE__ */ zc(nf, [["__scopeId", "data-v-de5887e8"]]), of = /* @__PURE__ */ _e({
  __name: "ElementRenderer",
  props: {
    element: {},
    showOutlines: { type: Boolean }
  },
  setup(e) {
    const t = e, n = (s) => {
      s.preventDefault(), s.stopPropagation();
      const i = s.dataTransfer.getData("item"), c = Dc[i](), l = t.element.elements ?? [];
      t.element.elements = [
        ...l,
        c
      ];
    }, r = De(() => {
      var i;
      return [
        "relative",
        ...t.showOutlines ? [
          "p-5",
          "outline-dashed",
          "outline-1",
          "outline-blue-500/50"
        ] : [],
        ...((i = t.element.attributes) == null ? void 0 : i.classes) ?? []
      ].join(" ");
    }), o = De(() => {
      var s;
      return ((s = t.element.elements) == null ? void 0 : s.sort((i, c) => i.order - c.order)) ?? [];
    });
    return (s, i) => {
      var l, f;
      const c = Js("ElementRenderer", !0);
      return W(), xe(S2(s.element.as), {
        src: (l = s.element.attributes) == null ? void 0 : l.src,
        alt: (f = s.element.attributes) == null ? void 0 : f.alt,
        "data-uuid": s.element.uuid,
        key: s.element.uuid,
        id: s.element.id,
        class: ar(r.value),
        onDragover: i[0] || (i[0] = Yr(() => {
        }, ["prevent"])),
        onDragenter: i[1] || (i[1] = Yr(() => {
        }, ["prevent"])),
        onDrop: n
      }, {
        default: Qe(() => [
          s.element.content ? (W(), ye(ge, { key: 0 }, [
            ei(Te(s.element.content), 1)
          ], 64)) : Sn("", !0),
          (W(!0), ye(ge, null, Kt(o.value, (u) => (W(), xe(c, {
            key: u.uuid,
            element: u,
            "show-outlines": s.showOutlines
          }, null, 8, ["element", "show-outlines"]))), 128))
        ]),
        _: 1
      }, 40, ["src", "alt", "data-uuid", "id", "class"]);
    };
  }
});
function sf() {
  return Rc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Rc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const lf = typeof Proxy == "function", cf = "devtools-plugin:setup", af = "plugin:settings:set";
let vn, Es;
function uf() {
  var e;
  return vn !== void 0 || (typeof window < "u" && window.performance ? (vn = !0, Es = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (vn = !0, Es = globalThis.perf_hooks.performance) : vn = !1), vn;
}
function ff() {
  return uf() ? Es.now() : Date.now();
}
class df {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        r[i] = c.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o), c = JSON.parse(i);
      Object.assign(s, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return ff();
      }
    }, n && n.on(af, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...l) => {
        this.onQueue.push({
          method: c,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...l) => (this.targetQueue.push({
        method: c,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[c](...l)) : (...l) => new Promise((f) => {
        this.targetQueue.push({
          method: c,
          args: l,
          resolve: f
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
function pf(e, t) {
  const n = e, r = Rc(), o = sf(), s = lf && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(cf, e, t);
  else {
    const i = s ? new df(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Mt = typeof document < "u";
function Tc(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function hf(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && Tc(e.default);
}
const le = Object.assign;
function Go(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Ze(o) ? o.map(e) : e(o);
  }
  return n;
}
const Qn = () => {
}, Ze = Array.isArray;
function ee(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Pc = /#/g, mf = /&/g, gf = /\//g, vf = /=/g, bf = /\?/g, Ac = /\+/g, yf = /%5B/g, wf = /%5D/g, kc = /%5E/g, _f = /%60/g, $c = /%7B/g, Ef = /%7C/g, Ic = /%7D/g, xf = /%20/g;
function vi(e) {
  return encodeURI("" + e).replace(Ef, "|").replace(yf, "[").replace(wf, "]");
}
function Cf(e) {
  return vi(e).replace($c, "{").replace(Ic, "}").replace(kc, "^");
}
function xs(e) {
  return vi(e).replace(Ac, "%2B").replace(xf, "+").replace(Pc, "%23").replace(mf, "%26").replace(_f, "`").replace($c, "{").replace(Ic, "}").replace(kc, "^");
}
function Vf(e) {
  return xs(e).replace(vf, "%3D");
}
function Nf(e) {
  return vi(e).replace(Pc, "%23").replace(bf, "%3F");
}
function Of(e) {
  return e == null ? "" : Nf(e).replace(gf, "%2F");
}
function Hn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && ee(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Sf = /\/$/, Mf = (e) => e.replace(Sf, "");
function Jo(e, t, n = "/") {
  let r, o = {}, s = "", i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return c < l && c >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, c > -1 ? c : t.length), o = e(s)), c > -1 && (r = r || t.slice(0, c), i = t.slice(c, t.length)), r = Df(r ?? t, n), {
    fullPath: r + (s && "?") + s + i,
    path: r,
    query: o,
    hash: Hn(i)
  };
}
function Hf(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function El(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function xl(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && Xt(t.matched[r], n.matched[o]) && Bc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Xt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Bc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Lf(e[n], t[n]))
      return !1;
  return !0;
}
function Lf(e, t) {
  return Ze(e) ? Cl(e, t) : Ze(t) ? Cl(t, e) : e === t;
}
function Cl(e, t) {
  return Ze(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Df(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1, i, c;
  for (i = 0; i < r.length; i++)
    if (c = r[i], c !== ".")
      if (c === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
}
const jt = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var ir;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ir || (ir = {}));
var Zn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Zn || (Zn = {}));
function zf(e) {
  if (!e)
    if (Mt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Mf(e);
}
const Rf = /^[^#]+#/;
function Tf(e, t) {
  return e.replace(Rf, "#") + t;
}
function Pf(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const Oo = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Af(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (r && s) {
          ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      process.env.NODE_ENV !== "production" && ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Pf(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Vl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Cs = /* @__PURE__ */ new Map();
function kf(e, t) {
  Cs.set(e, t);
}
function $f(e) {
  const t = Cs.get(e);
  return Cs.delete(e), t;
}
let If = () => location.protocol + "//" + location.host;
function jc(e, t) {
  const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
  if (s > -1) {
    let c = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(c);
    return l[0] !== "/" && (l = "/" + l), El(l, "");
  }
  return El(n, e) + r + o;
}
function Bf(e, t, n, r) {
  let o = [], s = [], i = null;
  const c = ({ state: d }) => {
    const h = jc(e, location), m = n.value, v = t.value;
    let b = 0;
    if (d) {
      if (n.value = h, t.value = d, i && i === m) {
        i = null;
        return;
      }
      b = v ? d.position - v.position : 0;
    } else
      r(h);
    o.forEach((N) => {
      N(n.value, m, {
        delta: b,
        type: ir.pop,
        direction: b ? b > 0 ? Zn.forward : Zn.back : Zn.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(d) {
    o.push(d);
    const h = () => {
      const m = o.indexOf(d);
      m > -1 && o.splice(m, 1);
    };
    return s.push(h), h;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(le({}, d.state, { scroll: Oo() }), "");
  }
  function a() {
    for (const d of s)
      d();
    s = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: f,
    destroy: a
  };
}
function Nl(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? Oo() : null
  };
}
function jf(e) {
  const { history: t, location: n } = window, r = {
    value: jc(e, n)
  }, o = { value: t.state };
  o.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function s(l, f, u) {
    const a = e.indexOf("#"), d = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + l : If() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](f, "", d), o.value = f;
    } catch (h) {
      process.env.NODE_ENV !== "production" ? ee("Error with push/replace State", h) : console.error(h), n[u ? "replace" : "assign"](d);
    }
  }
  function i(l, f) {
    const u = le({}, t.state, Nl(
      o.value.back,
      // keep back and forward entries but override current position
      l,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    s(l, u, !0), r.value = l;
  }
  function c(l, f) {
    const u = le(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: l,
        scroll: Oo()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(u.current, u, !0);
    const a = le({}, Nl(r.value, l, null), { position: u.position + 1 }, f);
    s(l, a, !1), r.value = l;
  }
  return {
    location: r,
    state: o,
    push: c,
    replace: i
  };
}
function Ff(e) {
  e = zf(e);
  const t = jf(e), n = Bf(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = le({
    // it's overridden right after
    location: "",
    base: e,
    go: r,
    createHref: Tf.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function no(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Fc(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Vs = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Ol;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ol || (Ol = {}));
const Uf = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Kf(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function Ln(e, t) {
  return process.env.NODE_ENV !== "production" ? le(new Error(Uf[e](t)), {
    type: e,
    [Vs]: !0
  }, t) : le(new Error(), {
    type: e,
    [Vs]: !0
  }, t);
}
function Vt(e, t) {
  return e instanceof Error && Vs in e && (t == null || !!(e.type & t));
}
const qf = ["params", "query", "hash"];
function Kf(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of qf)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Sl = "[^/]+?", Wf = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Gf = /[.+*?^${}()[\]/\\]/g;
function Jf(e, t) {
  const n = le({}, Wf, t), r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const f of e) {
    const u = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (o += "/");
    for (let a = 0; a < f.length; a++) {
      const d = f[a];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        a || (o += "/"), o += d.value.replace(Gf, "\\$&"), h += 40;
      else if (d.type === 1) {
        const { value: m, repeatable: v, optional: b, regexp: N } = d;
        s.push({
          name: m,
          repeatable: v,
          optional: b
        });
        const H = N || Sl;
        if (H !== Sl) {
          h += 10;
          try {
            new RegExp(`(${H})`);
          } catch (A) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${H}): ` + A.message);
          }
        }
        let S = v ? `((?:${H})(?:/(?:${H}))*)` : `(${H})`;
        a || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        b && f.length < 2 ? `(?:/${S})` : "/" + S), b && (S += "?"), o += S, h += 20, b && (h += -8), v && (h += -20), H === ".*" && (h += -50);
      }
      u.push(h);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function c(f) {
    const u = f.match(i), a = {};
    if (!u)
      return null;
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || "", m = s[d - 1];
      a[m.name] = h && m.repeatable ? h.split("/") : h;
    }
    return a;
  }
  function l(f) {
    let u = "", a = !1;
    for (const d of e) {
      (!a || !u.endsWith("/")) && (u += "/"), a = !1;
      for (const h of d)
        if (h.type === 0)
          u += h.value;
        else if (h.type === 1) {
          const { value: m, repeatable: v, optional: b } = h, N = m in f ? f[m] : "";
          if (Ze(N) && !v)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const H = Ze(N) ? N.join("/") : N;
          if (!H)
            if (b)
              d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : a = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          u += H;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: r,
    keys: s,
    parse: c,
    stringify: l
  };
}
function Xf(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r)
      return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Uc(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Xf(r[n], o[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Ml(r))
      return 1;
    if (Ml(o))
      return -1;
  }
  return o.length - r.length;
}
function Ml(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Yf = {
  type: 0,
  value: ""
}, Qf = /[a-zA-Z0-9_]/;
function Zf(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Yf]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${f}": ${h}`);
  }
  let n = 0, r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), s = [];
  }
  let c = 0, l, f = "", u = "";
  function a() {
    f && (n === 0 ? s.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: f,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function d() {
    f += l;
  }
  for (; c < e.length; ) {
    if (l = e[c++], l === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (f && a(), i()) : l === ":" ? (a(), n = 1) : d();
        break;
      case 4:
        d(), n = r;
        break;
      case 1:
        l === "(" ? n = 2 : Qf.test(l) ? d() : (a(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
        break;
      case 3:
        a(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), a(), i(), o;
}
function ed(e, t, n) {
  const r = Jf(Zf(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of r.keys)
      s.has(i.name) && ee(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const o = le(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function td(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = zl({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(a) {
    return r.get(a);
  }
  function s(a, d, h) {
    const m = !h, v = Ll(a);
    process.env.NODE_ENV !== "production" && sd(v, d), v.aliasOf = h && h.record;
    const b = zl(t, a), N = [v];
    if ("alias" in a) {
      const A = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const x of A)
        N.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Ll(le({}, v, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: h ? h.record.components : v.components,
            path: x,
            // we might be the child of an alias
            aliasOf: h ? h.record : v
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let H, S;
    for (const A of N) {
      const { path: x } = A;
      if (d && x[0] !== "/") {
        const F = d.record.path, j = F[F.length - 1] === "/" ? "" : "/";
        A.path = d.record.path + (x && j + x);
      }
      if (process.env.NODE_ENV !== "production" && A.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (H = ed(A, d, b), process.env.NODE_ENV !== "production" && d && x[0] === "/" && id(H, d), h ? (h.alias.push(H), process.env.NODE_ENV !== "production" && od(h, H)) : (S = S || H, S !== H && S.alias.push(H), m && a.name && !Dl(H) && i(a.name)), qc(H) && l(H), v.children) {
        const F = v.children;
        for (let j = 0; j < F.length; j++)
          s(F[j], H, h && h.children[j]);
      }
      h = h || H;
    }
    return S ? () => {
      i(S);
    } : Qn;
  }
  function i(a) {
    if (Fc(a)) {
      const d = r.get(a);
      d && (r.delete(a), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = n.indexOf(a);
      d > -1 && (n.splice(d, 1), a.record.name && r.delete(a.record.name), a.children.forEach(i), a.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function l(a) {
    const d = ld(a, n);
    n.splice(d, 0, a), a.record.name && !Dl(a) && r.set(a.record.name, a);
  }
  function f(a, d) {
    let h, m = {}, v, b;
    if ("name" in a && a.name) {
      if (h = r.get(a.name), !h)
        throw Ln(1, {
          location: a
        });
      if (process.env.NODE_ENV !== "production") {
        const S = Object.keys(a.params || {}).filter((A) => !h.keys.find((x) => x.name === A));
        S.length && ee(`Discarded invalid param(s) "${S.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      b = h.record.name, m = le(
        // paramsFromLocation is a new object
        Hl(
          d.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((S) => !S.optional).concat(h.parent ? h.parent.keys.filter((S) => S.optional) : []).map((S) => S.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        a.params && Hl(a.params, h.keys.map((S) => S.name))
      ), v = h.stringify(m);
    } else if (a.path != null)
      v = a.path, process.env.NODE_ENV !== "production" && !v.startsWith("/") && ee(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((S) => S.re.test(v)), h && (m = h.parse(v), b = h.record.name);
    else {
      if (h = d.name ? r.get(d.name) : n.find((S) => S.re.test(d.path)), !h)
        throw Ln(1, {
          location: a,
          currentLocation: d
        });
      b = h.record.name, m = le({}, d.params, a.params), v = h.stringify(m);
    }
    const N = [];
    let H = h;
    for (; H; )
      N.unshift(H.record), H = H.parent;
    return {
      name: b,
      path: v,
      params: m,
      matched: N,
      meta: rd(N)
    };
  }
  e.forEach((a) => s(a));
  function u() {
    n.length = 0, r.clear();
  }
  return {
    addRoute: s,
    resolve: f,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: c,
    getRecordMatcher: o
  };
}
function Hl(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function Ll(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: nd(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t;
}
function nd(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const r in e.components)
      t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Dl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function rd(e) {
  return e.reduce((t, n) => le(t, n.meta), {});
}
function zl(e, t) {
  const n = {};
  for (const r in e)
    n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ns(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function od(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ns.bind(null, n)))
      return ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ns.bind(null, n)))
      return ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function sd(e, t) {
  t && t.record.name && !e.name && !e.path && ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function id(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ns.bind(null, n)))
      return ee(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function ld(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const s = n + r >> 1;
    Uc(e, t[s]) < 0 ? r = s : n = s + 1;
  }
  const o = cd(e);
  return o && (r = t.lastIndexOf(o, r - 1), process.env.NODE_ENV !== "production" && r < 0 && ee(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), r;
}
function cd(e) {
  let t = e;
  for (; t = t.parent; )
    if (qc(t) && Uc(e, t) === 0)
      return t;
}
function qc({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function ad(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Ac, " "), i = s.indexOf("="), c = Hn(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : Hn(s.slice(i + 1));
    if (c in t) {
      let f = t[c];
      Ze(f) || (f = t[c] = [f]), f.push(l);
    } else
      t[c] = l;
  }
  return t;
}
function Rl(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Vf(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ze(r) ? r.map((s) => s && xs(s)) : [r && xs(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function ud(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Ze(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const fd = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Tl = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), So = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), bi = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Os = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Kn() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function qt(e, t, n, r, o, s = (i) => i()) {
  const i = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((c, l) => {
    const f = (d) => {
      d === !1 ? l(Ln(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : no(d) ? l(Ln(2, {
        from: t,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[o] === i && typeof d == "function" && i.push(d), c());
    }, u = s(() => e.call(r && r.instances[o], t, n, process.env.NODE_ENV !== "production" ? dd(f, t, n) : f));
    let a = Promise.resolve(u);
    if (e.length < 3 && (a = a.then(f)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        a = a.then((h) => f._called ? h : (ee(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        ee(d), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    a.catch((d) => l(d));
  });
}
function dd(e, t, n) {
  let r = 0;
  return function() {
    r++ === 1 && ee(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function Xo(e, t, n, r, o = (s) => s()) {
  const s = [];
  for (const i of e) {
    process.env.NODE_ENV !== "production" && !i.components && !i.children.length && ee(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const c in i.components) {
      let l = i.components[c];
      if (process.env.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw ee(`Component "${c}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          ee(`Component "${c}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = l;
          l = () => f;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, ee(`Component "${c}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[c]))
        if (Tc(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(qt(u, n, r, i, c, o));
        } else {
          let f = l();
          process.env.NODE_ENV !== "production" && !("catch" in f) && (ee(`Component "${c}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), s.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);
            const a = hf(u) ? u.default : u;
            i.mods[c] = u, i.components[c] = a;
            const h = (a.__vccOpts || a)[t];
            return h && qt(h, n, r, i, c, o)();
          }));
        }
    }
  }
  return s;
}
function Pl(e) {
  const t = ct(So), n = ct(bi);
  let r = !1, o = null;
  const s = De(() => {
    const u = it(e.to);
    return process.env.NODE_ENV !== "production" && (!r || u !== o) && (no(u) || (r ? ee(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : ee(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, r = !0), t.resolve(u);
  }), i = De(() => {
    const { matched: u } = s.value, { length: a } = u, d = u[a - 1], h = n.matched;
    if (!d || !h.length)
      return -1;
    const m = h.findIndex(Xt.bind(null, d));
    if (m > -1)
      return m;
    const v = Al(u[a - 2]);
    return (
      // we are dealing with nested routes
      a > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Al(d) === v && // avoid comparing the child with its parent
      h[h.length - 1].path !== v ? h.findIndex(Xt.bind(null, u[a - 2])) : m
    );
  }), c = De(() => i.value > -1 && gd(n.params, s.value.params)), l = De(() => i.value > -1 && i.value === n.matched.length - 1 && Bc(n.params, s.value.params));
  function f(u = {}) {
    return md(u) ? t[it(e.replace) ? "replace" : "push"](
      it(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Qn) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Mt) {
    const u = vo();
    if (u) {
      const a = {
        route: s.value,
        isActive: c.value,
        isExactActive: l.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(a), a4(() => {
        a.route = s.value, a.isActive = c.value, a.isExactActive = l.value, a.error = no(it(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: De(() => s.value.href),
    isActive: c,
    isExactActive: l,
    navigate: f
  };
}
const pd = /* @__PURE__ */ _e({
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
  useLink: Pl,
  setup(e, { slots: t }) {
    const n = uo(Pl(e)), { options: r } = ct(So), o = De(() => ({
      [kl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [kl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : rc("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), hd = pd;
function md(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function gd(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o)
        return !1;
    } else if (!Ze(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function Al(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const kl = (e, t, n) => e ?? t ?? n, vd = /* @__PURE__ */ _e({
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
    process.env.NODE_ENV !== "production" && yd();
    const r = ct(Os), o = De(() => e.route || r.value), s = ct(Tl, 0), i = De(() => {
      let f = it(s);
      const { matched: u } = o.value;
      let a;
      for (; (a = u[f]) && !a.components; )
        f++;
      return f;
    }), c = De(() => o.value.matched[i.value]);
    Sr(Tl, De(() => i.value + 1)), Sr(fd, c), Sr(Os, o);
    const l = Gt();
    return Vn(() => [l.value, c.value, e.name], ([f, u, a], [d, h, m]) => {
      u && (u.instances[a] = f, h && h !== u && f && f === d && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !Xt(u, h) || !d) && (u.enterCallbacks[a] || []).forEach((v) => v(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, a = c.value, d = a && a.components[u];
      if (!d)
        return $l(n.default, { Component: d, route: f });
      const h = a.props[u], m = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null, b = rc(d, le({}, m, t, {
        onVnodeUnmounted: (N) => {
          N.component.isUnmounted && (a.instances[u] = null);
        },
        ref: l
      }));
      if (process.env.NODE_ENV !== "production" && Mt && b.ref) {
        const N = {
          depth: i.value,
          name: a.name,
          path: a.path,
          meta: a.meta
        };
        (Ze(b.ref) ? b.ref.map((S) => S.i) : [b.ref.i]).forEach((S) => {
          S.__vrv_devtools = N;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        $l(n.default, { Component: b, route: f }) || b
      );
    };
  }
});
function $l(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const bd = vd;
function yd() {
  const e = vo(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function Wn(e, t) {
  const n = le({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => Hd(r, ["instances", "children", "aliasOf"]))
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
function Cr(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let wd = 0;
function _d(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = wd++;
  pf({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((u, a) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Wn(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: a }) => {
      if (a.__vrv_devtools) {
        const d = a.__vrv_devtools;
        u.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Kc
        });
      }
      Ze(a.__vrl_devtools) && (a.__devtoolsApi = o, a.__vrl_devtools.forEach((d) => {
        let h = d.route.path, m = Jc, v = "", b = 0;
        d.error ? (h = d.error, m = Nd, b = Od) : d.isExactActive ? (m = Gc, v = "This is exactly active") : d.isActive && (m = Wc, v = "This link is active"), u.tags.push({
          label: h,
          textColor: b,
          tooltip: v,
          backgroundColor: m
        });
      }));
    }), Vn(t.currentRoute, () => {
      l(), o.notifyComponentUpdate(), o.sendInspectorTree(c), o.sendInspectorState(c);
    });
    const s = "router:navigations:" + r;
    o.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((u, a) => {
      o.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: a.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: u },
          groupId: a.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((u, a) => {
      const d = {
        guard: Cr("beforeEach"),
        from: Wn(a, "Current Location during this navigation"),
        to: Wn(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), o.addTimelineEvent({
        layerId: s,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: d,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, a, d) => {
      const h = {
        guard: Cr("afterEach")
      };
      d ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, h.status = Cr("❌")) : h.status = Cr("✅"), h.from = Wn(a, "Current Location during this navigation"), h.to = Wn(u, "Target location"), o.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: o.now(),
          data: h,
          logType: d ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const c = "router-inspector:" + r;
    o.addInspector({
      id: c,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!f)
        return;
      const u = f;
      let a = n.getRoutes().filter((d) => !d.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !d.parent.record.components);
      a.forEach(Qc), u.filter && (a = a.filter((d) => (
        // save matches state based on the payload
        Ss(d, u.filter.toLowerCase())
      ))), a.forEach((d) => Yc(d, t.currentRoute.value)), u.rootNodes = a.map(Xc);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === c && l();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === c) {
        const d = n.getRoutes().find((h) => h.record.__vd_id === u.nodeId);
        d && (u.state = {
          options: xd(d)
        });
      }
    }), o.sendInspectorTree(c), o.sendInspectorState(c);
  });
}
function Ed(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function xd(e) {
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
        display: e.keys.map((r) => `${r.name}${Ed(r)}`).join(" "),
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
    value: e.alias.map((r) => r.record.path)
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
        display: e.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Kc = 15485081, Wc = 2450411, Gc = 8702998, Cd = 2282478, Jc = 16486972, Vd = 6710886, Nd = 16704226, Od = 12131356;
function Xc(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Cd
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Jc
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Kc
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Gc
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Wc
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Vd
  });
  let r = n.__vd_id;
  return r == null && (r = String(Sd++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(Xc)
  };
}
let Sd = 0;
const Md = /^\/(.*)\/([a-z]*)$/;
function Yc(e, t) {
  const n = t.matched.length && Xt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => Xt(r, e.record))), e.children.forEach((r) => Yc(r, t));
}
function Qc(e) {
  e.__vd_match = !1, e.children.forEach(Qc);
}
function Ss(e, t) {
  const n = String(e.re).match(Md);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Ss(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), s = Hn(o);
  return !t.startsWith("/") && (s.includes(t) || o.includes(t)) || s.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Ss(i, t));
}
function Hd(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Ld(e) {
  const t = td(e.routes, e), n = e.parseQuery || ad, r = e.stringifyQuery || Rl, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = Kn(), i = Kn(), c = Kn(), l = U1(jt);
  let f = jt;
  Mt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Go.bind(null, (_) => "" + _), a = Go.bind(null, Of), d = (
    // @ts-expect-error: intentionally avoid the type check
    Go.bind(null, Hn)
  );
  function h(_, P) {
    let T, k;
    return Fc(_) ? (T = t.getRecordMatcher(_), process.env.NODE_ENV !== "production" && !T && ee(`Parent route "${String(_)}" not found when adding child route`, P), k = P) : k = _, t.addRoute(k, T);
  }
  function m(_) {
    const P = t.getRecordMatcher(_);
    P ? t.removeRoute(P) : process.env.NODE_ENV !== "production" && ee(`Cannot remove non-existent route "${String(_)}"`);
  }
  function v() {
    return t.getRoutes().map((_) => _.record);
  }
  function b(_) {
    return !!t.getRecordMatcher(_);
  }
  function N(_, P) {
    if (P = le({}, P || l.value), typeof _ == "string") {
      const p = Jo(n, _, P.path), g = t.resolve({ path: p.path }, P), y = o.createHref(p.fullPath);
      return process.env.NODE_ENV !== "production" && (y.startsWith("//") ? ee(`Location "${_}" resolved to "${y}". A resolved location cannot start with multiple slashes.`) : g.matched.length || ee(`No match found for location with path "${_}"`)), le(p, g, {
        params: d(g.params),
        hash: Hn(p.hash),
        redirectedFrom: void 0,
        href: y
      });
    }
    if (process.env.NODE_ENV !== "production" && !no(_))
      return ee(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, _), N({});
    let T;
    if (_.path != null)
      process.env.NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && ee(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = le({}, _, {
        path: Jo(n, _.path, P.path).path
      });
    else {
      const p = le({}, _.params);
      for (const g in p)
        p[g] == null && delete p[g];
      T = le({}, _, {
        params: a(p)
      }), P.params = a(P.params);
    }
    const k = t.resolve(T, P), te = _.hash || "";
    process.env.NODE_ENV !== "production" && te && !te.startsWith("#") && ee(`A \`hash\` should always start with the character "#". Replace "${te}" with "#${te}".`), k.params = u(d(k.params));
    const me = Hf(r, le({}, _, {
      hash: Cf(te),
      path: k.path
    })), X = o.createHref(me);
    return process.env.NODE_ENV !== "production" && (X.startsWith("//") ? ee(`Location "${_}" resolved to "${X}". A resolved location cannot start with multiple slashes.`) : k.matched.length || ee(`No match found for location with path "${_.path != null ? _.path : _}"`)), le({
      fullPath: me,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: te,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === Rl ? ud(_.query) : _.query || {}
      )
    }, k, {
      redirectedFrom: void 0,
      href: X
    });
  }
  function H(_) {
    return typeof _ == "string" ? Jo(n, _, l.value.path) : le({}, _);
  }
  function S(_, P) {
    if (f !== _)
      return Ln(8, {
        from: P,
        to: _
      });
  }
  function A(_) {
    return j(_);
  }
  function x(_) {
    return A(le(H(_), { replace: !0 }));
  }
  function F(_) {
    const P = _.matched[_.matched.length - 1];
    if (P && P.redirect) {
      const { redirect: T } = P;
      let k = typeof T == "function" ? T(_) : T;
      if (typeof k == "string" && (k = k.includes("?") || k.includes("#") ? k = H(k) : (
        // force empty params
        { path: k }
      ), k.params = {}), process.env.NODE_ENV !== "production" && k.path == null && !("name" in k))
        throw ee(`Invalid redirect found:
${JSON.stringify(k, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return le({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: k.path != null ? {} : _.params
      }, k);
    }
  }
  function j(_, P) {
    const T = f = N(_), k = l.value, te = _.state, me = _.force, X = _.replace === !0, p = F(T);
    if (p)
      return j(
        le(H(p), {
          state: typeof p == "object" ? le({}, te, p.state) : te,
          force: me,
          replace: X
        }),
        // keep original redirectedFrom if it exists
        P || T
      );
    const g = T;
    g.redirectedFrom = P;
    let y;
    return !me && xl(r, k, T) && (y = Ln(16, { to: g, from: k }), Pt(
      k,
      k,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (y ? Promise.resolve(y) : de(g, k)).catch((E) => Vt(E) ? (
      // navigation redirects still mark the router as ready
      Vt(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? E : Yt(E)
    ) : (
      // reject any unknown error
      Z(E, g, k)
    )).then((E) => {
      if (E) {
        if (Vt(
          E,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          xl(r, N(E.to), g) && // and we have done it a couple of times
          P && // @ts-expect-error: added only in dev
          (P._count = P._count ? (
            // @ts-expect-error
            P._count + 1
          ) : 1) > 30 ? (ee(`Detected a possibly infinite redirection in a navigation guard when going from "${k.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : j(
            // keep options
            le({
              // preserve an existing replacement but allow the redirect to override it
              replace: X
            }, H(E.to), {
              state: typeof E.to == "object" ? le({}, te, E.to.state) : te,
              force: me
            }),
            // preserve the original redirectedFrom if any
            P || g
          );
      } else
        E = he(g, k, !0, X, te);
      return pe(g, k, E), E;
    });
  }
  function G(_, P) {
    const T = S(_, P);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function ne(_) {
    const P = At.values().next().value;
    return P && typeof P.runWithContext == "function" ? P.runWithContext(_) : _();
  }
  function de(_, P) {
    let T;
    const [k, te, me] = Dd(_, P);
    T = Xo(k.reverse(), "beforeRouteLeave", _, P);
    for (const p of k)
      p.leaveGuards.forEach((g) => {
        T.push(qt(g, _, P));
      });
    const X = G.bind(null, _, P);
    return T.push(X), kt(T).then(() => {
      T = [];
      for (const p of s.list())
        T.push(qt(p, _, P));
      return T.push(X), kt(T);
    }).then(() => {
      T = Xo(te, "beforeRouteUpdate", _, P);
      for (const p of te)
        p.updateGuards.forEach((g) => {
          T.push(qt(g, _, P));
        });
      return T.push(X), kt(T);
    }).then(() => {
      T = [];
      for (const p of me)
        if (p.beforeEnter)
          if (Ze(p.beforeEnter))
            for (const g of p.beforeEnter)
              T.push(qt(g, _, P));
          else
            T.push(qt(p.beforeEnter, _, P));
      return T.push(X), kt(T);
    }).then(() => (_.matched.forEach((p) => p.enterCallbacks = {}), T = Xo(me, "beforeRouteEnter", _, P, ne), T.push(X), kt(T))).then(() => {
      T = [];
      for (const p of i.list())
        T.push(qt(p, _, P));
      return T.push(X), kt(T);
    }).catch((p) => Vt(
      p,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? p : Promise.reject(p));
  }
  function pe(_, P, T) {
    c.list().forEach((k) => ne(() => k(_, P, T)));
  }
  function he(_, P, T, k, te) {
    const me = S(_, P);
    if (me)
      return me;
    const X = P === jt, p = Mt ? history.state : {};
    T && (k || X ? o.replace(_.fullPath, le({
      scroll: X && p && p.scroll
    }, te)) : o.push(_.fullPath, te)), l.value = _, Pt(_, P, T, X), Yt();
  }
  let Ee;
  function qe() {
    Ee || (Ee = o.listen((_, P, T) => {
      if (!gr.listening)
        return;
      const k = N(_), te = F(k);
      if (te) {
        j(le(te, { replace: !0 }), k).catch(Qn);
        return;
      }
      f = k;
      const me = l.value;
      Mt && kf(Vl(me.fullPath, T.delta), Oo()), de(k, me).catch((X) => Vt(
        X,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? X : Vt(
        X,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (j(
        X.to,
        k
        // avoid an uncaught rejection, let push call triggerError
      ).then((p) => {
        Vt(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !T.delta && T.type === ir.pop && o.go(-1, !1);
      }).catch(Qn), Promise.reject()) : (T.delta && o.go(-T.delta, !1), Z(X, k, me))).then((X) => {
        X = X || he(
          // after navigation, all matched components are resolved
          k,
          me,
          !1
        ), X && (T.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Vt(
          X,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-T.delta, !1) : T.type === ir.pop && Vt(
          X,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), pe(k, me, X);
      }).catch(Qn);
    }));
  }
  let He = Kn(), be = Kn(), Q;
  function Z(_, P, T) {
    Yt(_);
    const k = be.list();
    return k.length ? k.forEach((te) => te(_, P, T)) : (process.env.NODE_ENV !== "production" && ee("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function et() {
    return Q && l.value !== jt ? Promise.resolve() : new Promise((_, P) => {
      He.add([_, P]);
    });
  }
  function Yt(_) {
    return Q || (Q = !_, qe(), He.list().forEach(([P, T]) => _ ? T(_) : P()), He.reset()), _;
  }
  function Pt(_, P, T, k) {
    const { scrollBehavior: te } = e;
    if (!Mt || !te)
      return Promise.resolve();
    const me = !T && $f(Vl(_.fullPath, 0)) || (k || !T) && history.state && history.state.scroll || null;
    return js().then(() => te(_, P, me)).then((X) => X && Af(X)).catch((X) => Z(X, _, P));
  }
  const dt = (_) => o.go(_);
  let tt;
  const At = /* @__PURE__ */ new Set(), gr = {
    currentRoute: l,
    listening: !0,
    addRoute: h,
    removeRoute: m,
    clearRoutes: t.clearRoutes,
    hasRoute: b,
    getRoutes: v,
    resolve: N,
    options: e,
    push: A,
    replace: x,
    go: dt,
    back: () => dt(-1),
    forward: () => dt(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: be.add,
    isReady: et,
    install(_) {
      const P = this;
      _.component("RouterLink", hd), _.component("RouterView", bd), _.config.globalProperties.$router = P, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => it(l)
      }), Mt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !tt && l.value === jt && (tt = !0, A(o.location).catch((te) => {
        process.env.NODE_ENV !== "production" && ee("Unexpected error when starting the router:", te);
      }));
      const T = {};
      for (const te in jt)
        Object.defineProperty(T, te, {
          get: () => l.value[te],
          enumerable: !0
        });
      _.provide(So, P), _.provide(bi, c2(T)), _.provide(Os, l);
      const k = _.unmount;
      At.add(_), _.unmount = function() {
        At.delete(_), At.size < 1 && (f = jt, Ee && Ee(), Ee = null, l.value = jt, tt = !1, Q = !1), k();
      }, process.env.NODE_ENV !== "production" && Mt && _d(_, P, t);
    }
  };
  function kt(_) {
    return _.reduce((P, T) => P.then(() => ne(T)), Promise.resolve());
  }
  return gr;
}
function Dd(e, t) {
  const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const c = t.matched[i];
    c && (e.matched.find((f) => Xt(f, c)) ? r.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((f) => Xt(f, l)) || o.push(l));
  }
  return [n, r, o];
}
function zd() {
  return ct(So);
}
function Rd(e) {
  return ct(bi);
}
const Td = { class: "grid grid-cols-5 min-h-screen" }, Pd = { class: "col-span-1 flex flex-col h-screen overflow-auto border-r" }, Ad = { class: "flex gap-1 p-1" }, kd = { class: "flex flex-col gap-2 p-2" }, $d = { class: "flex flex-col gap-3 p-3 bg-white" }, Id = ["onDragstart"], Bd = { class: "min-w-0 flex-1" }, jd = { class: "focus:outline-none" }, Fd = { class: "text-sm font-medium text-gray-900" }, Ud = { class: "truncate text-sm text-gray-500" }, qd = { class: "grid grid-cols-4 gap-4 p-5 content-start" }, Kd = { class: "border-l" }, Wd = { class: "grid grid-rows-2 grid-cols-1 h-screen" }, Gd = { class: "overflow-auto" }, Jd = { class: "overflow-auto" }, Xd = {
  key: 0,
  class: "p-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900"
}, Yd = /* @__PURE__ */ _e({
  __name: "PageBuilder",
  setup(e) {
    const t = Rd(), n = new Hc(), r = Gt({
      id: 0,
      uuid: "",
      slug: "",
      label: "",
      meta_description: "",
      meta_keywords: "",
      allowedChildren: [],
      head: {},
      body: [],
      foot: {}
    }), o = Gt(null), s = (m, v) => {
      m.dataTransfer.dropEffect = "move", m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("item", v);
    }, i = (m, v) => {
      m.forEach((b) => {
        v(b), b.elements && i(b.elements, v);
      });
    }, c = (m) => {
      o.value = m;
    }, l = (m) => {
      var v;
      ((v = o.value) == null ? void 0 : v.uuid) === m.uuid && (o.value = null), r.value && (r.value.body = r.value.body.filter((b) => b.uuid !== m.uuid), i(r.value.body, (b) => {
        b.elements && (b.elements = b.elements.filter((N) => N.uuid !== m.uuid));
      }));
    }, f = async (m) => {
      const v = localStorage.getItem(`page:${m}`);
      if (v) {
        r.value = JSON.parse(v);
        return;
      }
      r.value = await n.loadPage(m);
    }, u = async () => {
      try {
        await n.savePage(r.value), localStorage.removeItem(`page:${r.value.uuid}`), localStorage.removeItem(`page-history:${r.value.uuid}`);
      } catch (m) {
        console.error(m);
      }
    };
    V2(async () => {
      await f(t.params.uuid);
    }), Vn(r, (m, v) => {
      m && localStorage.setItem(`page:${m.uuid}`, JSON.stringify(m));
      const b = JSON.parse(localStorage.getItem(`page-history:${m.uuid}`) ?? "[]");
      b.push(m), b.length > 5 && b.shift(), localStorage.setItem(`page-history:${m.uuid}`, JSON.stringify(b));
    }, { deep: !0 });
    const a = (m) => {
      m.preventDefault();
      const v = m.dataTransfer.getData("item"), b = Dc[v](), N = r.value.body ?? [];
      b.order = N.length + 1, r.value.body = [
        ...N,
        b
      ];
    }, d = De(() => {
      var m;
      return ((m = r.value) == null ? void 0 : m.body.sort((v, b) => v.order - b.order)) ?? [];
    }), h = De(() => {
      var m;
      return W0(((m = o.value) == null ? void 0 : m.as) ?? "");
    });
    return (m, v) => (W(), ye("div", Td, [
      B("div", Pd, [
        v[8] || (v[8] = B("div", { class: "p-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900" }, " Actions ", -1)),
        B("div", Ad, [
          B("button", {
            class: "bg-gray-200 hover:bg-gray-100 text-black border border-black p-2 w-8 h-8",
            title: "Save Page",
            onClick: u
          }, [
            ie(ui, {
              icon: "save",
              class: "text-gray-800"
            })
          ])
        ]),
        ie(ut, { title: "Page Properties" }, {
          default: Qe(() => [
            B("div", kd, [
              ie(On, {
                title: "Page Slug",
                modelValue: r.value.slug,
                "onUpdate:modelValue": v[0] || (v[0] = (b) => r.value.slug = b)
              }, null, 8, ["modelValue"]),
              ie(On, {
                title: "Page Label",
                modelValue: r.value.label,
                "onUpdate:modelValue": v[1] || (v[1] = (b) => r.value.label = b)
              }, null, 8, ["modelValue"]),
              ie(_s, {
                title: "Meta Description",
                modelValue: r.value.meta_description,
                "onUpdate:modelValue": v[2] || (v[2] = (b) => r.value.meta_description = b)
              }, null, 8, ["modelValue"]),
              ie(_s, {
                title: "Meta Keywords",
                modelValue: r.value.meta_keywords,
                "onUpdate:modelValue": v[3] || (v[3] = (b) => r.value.meta_keywords = b)
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }),
        (W(!0), ye(ge, null, Kt(it(ef), (b, N) => (W(), xe(ut, {
          title: N
        }, {
          default: Qe(() => [
            B("div", $d, [
              (W(!0), ye(ge, null, Kt(b, (H, S) => (W(), ye("div", {
                key: S,
                class: "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400",
                draggable: "true",
                onDragstart: (A) => s(A, H.function)
              }, [
                B("div", Bd, [
                  B("div", jd, [
                    v[7] || (v[7] = B("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    }, null, -1)),
                    B("p", Fd, Te(H.label), 1),
                    B("p", Ud, Te(H.description), 1)
                  ])
                ])
              ], 40, Id))), 128))
            ])
          ]),
          _: 2
        }, 1032, ["title"]))), 256))
      ]),
      B("div", {
        class: "col-span-3 overflow-auto h-screen",
        onDragover: v[4] || (v[4] = Yr(() => {
        }, ["prevent"])),
        onDragenter: v[5] || (v[5] = Yr(() => {
        }, ["prevent"])),
        onDrop: a
      }, [
        B("div", qd, [
          r.value ? (W(!0), ye(ge, { key: 0 }, Kt(r.value.body, (b) => (W(), xe(of, {
            key: b.uuid,
            "show-outlines": !0,
            element: b
          }, null, 8, ["element"]))), 128)) : Sn("", !0)
        ])
      ], 32),
      B("div", Kd, [
        B("div", Wd, [
          B("div", Gd, [
            v[9] || (v[9] = B("div", { class: "p-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900" }, " Element Explorer ", -1)),
            (W(!0), ye(ge, null, Kt(d.value, (b) => (W(), xe(rf, {
              key: b.uuid,
              depth: 0,
              element: b,
              onSelectedElement: c,
              onDeleteElement: l
            }, null, 8, ["element"]))), 128))
          ]),
          B("div", Jd, [
            o.value ? (W(), ye("div", Xd, " Element Properties ")) : Sn("", !0),
            (W(!0), ye(ge, null, Kt(h.value, (b) => (W(), xe(S2(b), {
              modelValue: o.value,
              "onUpdate:modelValue": v[6] || (v[6] = (N) => o.value = N)
            }, null, 8, ["modelValue"]))), 256))
          ])
        ])
      ])
    ]));
  }
}), Qd = {};
function Zd(e, t) {
  const n = Js("router-view");
  return W(), xe(n);
}
const e6 = /* @__PURE__ */ zc(Qd, [["render", Zd]]), t6 = { class: "grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8" }, n6 = { class: "text-center" }, r6 = { class: "text-base font-semibold text-indigo-600" }, o6 = { class: "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, s6 = { class: "mt-6 text-base leading-7 text-gray-600" }, i6 = /* @__PURE__ */ _e({
  __name: "ErrorPage",
  setup(e) {
    const t = zd(), n = parseInt(t.currentRoute.value.params.code), r = {
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
    }, o = r[n].header, s = r[n].subtitle;
    return (i, c) => (W(), ye("main", t6, [
      B("div", n6, [
        B("p", r6, Te(it(n)), 1),
        B("h1", o6, Te(it(o)), 1),
        B("p", s6, Te(it(s)), 1)
      ])
    ]));
  }
}), l6 = [
  { path: "/page-builder/pages/:uuid", component: Yd },
  { path: "/page-builder/error/:code", component: i6, name: "error" }
], c6 = Ld({
  history: Ff(),
  routes: l6
});
iu(e6).use(c6).mount("#app");
