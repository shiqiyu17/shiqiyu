import {
  g as E,
  m as B,
  _ as u,
  r as V,
  w as H,
  d as y,
  u as G,
  c as h,
  f as W,
  a as d,
  b,
  e as v,
  h as _,
  o as k,
  i as f,
  j as n,
  k as T,
  I as D,
  t as s,
  F as z,
  l as g,
  n as S
} from "./index-DcDH98en.js";
const L = e => {
    const {
      componentCls: t,
      sizePaddingEdgeHorizontal: r,
      colorSplit: i,
      lineWidth: o
    } = e;
    return {
      [t]: u(u({}, V(e)), {
        borderBlockStart: `${o}px solid ${i}`,
        "&-vertical": {
          position: "relative",
          top: "-0.06em",
          display: "inline-block",
          height: "0.9em",
          margin: `0 ${e.dividerVerticalGutterMargin}px`,
          verticalAlign: "middle",
          borderTop: 0,
          borderInlineStart: `${o}px solid ${i}`
        },
        "&-horizontal": {
          display: "flex",
          clear: "both",
          width: "100%",
          minWidth: "100%",
          margin: `${e.dividerHorizontalGutterMargin}px 0`
        },
        [`&-horizontal${t}-with-text`]: {
          display: "flex",
          alignItems: "center",
          margin: `${e.dividerHorizontalWithTextGutterMargin}px 0`,
          color: e.colorTextHeading,
          fontWeight: 500,
          fontSize: e.fontSizeLG,
          whiteSpace: "nowrap",
          textAlign: "center",
          borderBlockStart: `0 ${i}`,
          "&::before, &::after": {
            position: "relative",
            width: "50%",
            borderBlockStart: `${o}px solid transparent`,
            borderBlockStartColor: "inherit",
            borderBlockEnd: 0,
            transform: "translateY(50%)",
            content: "''"
          }
        },
        [`&-horizontal${t}-with-text-left`]: {
          "&::before": {
            width: "5%"
          },
          "&::after": {
            width: "95%"
          }
        },
        [`&-horizontal${t}-with-text-right`]: {
          "&::before": {
            width: "95%"
          },
          "&::after": {
            width: "5%"
          }
        },
        [`${t}-inner-text`]: {
          display: "inline-block",
          padding: "0 1em"
        },
        "&-dashed": {
          background: "none",
          borderColor: i,
          borderStyle: "dashed",
          borderWidth: `${o}px 0 0`
        },
        [`&-horizontal${t}-with-text${t}-dashed`]: {
          "&::before, &::after": {
            borderStyle: "dashed none none"
          }
        },
        [`&-vertical${t}-dashed`]: {
          borderInlineStartWidth: o,
          borderInlineEnd: 0,
          borderBlockStart: 0,
          borderBlockEnd: 0
        },
        [`&-plain${t}-with-text`]: {
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize
        },
        [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
          "&::before": {
            width: 0
          },
          "&::after": {
            width: "100%"
          },
          [`${t}-inner-text`]: {
            paddingInlineStart: r
          }
        },
        [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
          "&::before": {
            width: "100%"
          },
          "&::after": {
            width: 0
          },
          [`${t}-inner-text`]: {
            paddingInlineEnd: r
          }
        }
      })
    }
  },
  P = E("Divider", e => {
    const t = B(e, {
      dividerVerticalGutterMargin: e.marginXS,
      dividerHorizontalWithTextGutterMargin: e.margin,
      dividerHorizontalGutterMargin: e.marginLG
    });
    return [L(t)]
  }, {
    sizePaddingEdgeHorizontal: 0
  }),
  F = () => ({
    prefixCls: String,
    type: {
      type: String,
      default: "horizontal"
    },
    dashed: {
      type: Boolean,
      default: !1
    },
    orientation: {
      type: String,
      default: "center"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    orientationMargin: [String, Number]
  }),
  N = y({
    name: "ADivider",
    inheritAttrs: !1,
    compatConfig: {
      MODE: 3
    },
    props: F(),
    setup(e, t) {
      let {
        slots: r,
        attrs: i
      } = t;
      const {
        prefixCls: o,
        direction: p
      } = G("divider", e), [m, x] = P(o), $ = h(() => e.orientation === "left" && e.orientationMargin != null),
        w = h(() => e.orientation === "right" && e.orientationMargin != null),
        I = h(() => {
          const {
            type: a,
            dashed: c,
            plain: M
          } = e, l = o.value;
          return {
            [l]: !0,
            [x.value]: !!x.value,
            [`${l}-${a}`]: !0,
            [`${l}-dashed`]: !!c,
            [`${l}-plain`]: !!M,
            [`${l}-rtl`]: p.value === "rtl",
            [`${l}-no-default-orientation-margin-left`]: $.value,
            [`${l}-no-default-orientation-margin-right`]: w.value
          }
        }),
        j = h(() => {
          const a = typeof e.orientationMargin == "number" ? `${e.orientationMargin}px` : e.orientationMargin;
          return u(u({}, $.value && {
            marginLeft: a
          }), w.value && {
            marginRight: a
          })
        }),
        C = h(() => e.orientation.length > 0 ? "-" + e.orientation : e.orientation);
      return () => {
        var a;
        const c = W((a = r.default) === null || a === void 0 ? void 0 : a.call(r));
        return m(d("div", b(b({}, i), {}, {
          class: [I.value, c.length ? `${o.value}-with-text ${o.value}-with-text${C.value}` : "", i.class],
          role: "separator"
        }), [c.length ? d("span", {
          class: `${o.value}-inner-text`,
          style: j.value
        }, [c]) : null]))
      }
    }
  }),
  A = H(N),
  R = {};

function O(e, t) {
  return null
}
const X = v(R, [
    ["render", O],
    ["__scopeId", "data-v-6195d602"]
  ]),
  Y = {
    key: 0,
    class: "pure-g flex-g",
    id: "section-1"
  },
  q = {
    class: "pure-2 flex-2"
  },
  J = {
    class: "pure-2-2 profile-pic"
  },
  K = {
    class: "item"
  },
  Q = {
    class: "highlight"
  },
  U = {
    class: "normal"
  },
  Z = ["href"],
  tt = {
    class: "item1 normal"
  },
  et = ["href"],
  nt = {
    __name: "PersonInfo",
    setup(e) {
      const t = _(null),
        r = _([]);
      return k(async () => {
        try {
          const i = await fetch("./public/info.json"); // Changed path
          if (!i.ok) throw new Error("Failed to fetch info.json");
          t.value = await i.json();
          const o = await fetch("./public/books.json"); // Changed path
          if (!o.ok) throw new Error("Failed to fetch books.json");
          r.value = await o.json()
        } catch (i) {
          console.error("Error loading data:", i)
        }
      }), (i, o) => {
        const p = D,
          m = A;
        return g(), f(z, null, [o[4] || (o[4] = n("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        }, null, -1)), t.value ? (g(), f("div", Y, [n("div", q, [n("div", J, [d(p, {
          width: 110,
          "img:": "",
          src: "../../public/image/生活照.jpg"
        })]), n("div", K, [o[1] || (o[1] = n("p", {
          class: "highlight"
        }, "hello world", -1)), o[2] || (o[2] = n("span", {
          class: "normal"
        }, "I'm ", -1)), n("span", Q, s(t.value.name), 1), n("p", U, " (" + s(t.value.name1) + ")", 1), n("a", {
          href: `mailto:${t.value.email}`,
          class: "link hover-link"
        }, o[0] || (o[0] = [n("i", {
          class: "fas fa-envelope"
        }, null, -1)]), 8, Z)]), o[3] || (o[3] = n("div", {
          class: "container blank"
        }, null, -1)), n("div", tt, [n("span", null, s(t.value.else), 1), n("p", null, [n("a", {
          href: t.value.schoollink,
          class: "highlight hover-link1 link",
          target: "_blank"
        }, s(t.value.school), 9, et)]), n("p", null, s(t.value.major), 1)]), d(m, {
          style: {
            "border-color": "#770e1c"
          },
          dashed: ""
        })])) : T("", !0)], 64)
      }
    }
  },
  ot = v(nt, [
    ["__scopeId", "data-v-b9eb3c25"]
  ]),
  it = {
    class: "flex-exp"
  },
  rt = {
    class: "picture profile-pic"
  },
  at = ["src"],
  lt = {
    class: "image-mask"
  },
  st = {
    class: "word highlight text"
  },
  dt = {
    class: "normal"
  },
  ct = {
    class: "picture profile-pic"
  },
  ht = ["src"],
  ut = {
    class: "image-mask"
  },
  ft = {
    class: "word highlight text"
  },
  gt = {
    class: "normal"
  },
  pt = {
    __name: "VolunExp",
    setup(e) {
      const t = _([]);
      return k(async () => {
        try {
          const r = await fetch("./public/volunteer.json"); // Changed path
          if (!r.ok) throw new Error("Failed to fetch volunteer.json");
          t.value = await r.json()
        } catch (r) {
          console.error("Error loading data:", r)
        }
      }), (r, i) => (g(), f(z, null, [i[2] || (i[2] = n("div", {
        class: "exp highlight"
      }, "回忆手册", -1)), n("div", it, [n("div", rt, [n("img", {
        src: t.value.volpic,
        alt: ""
      }, null, 8, at), n("div", lt, [n("span", st, [i[0] || (i[0] = S("支教与志愿：", -1)), n("span", dt, s(t.value.intro1), 1)])])]), n("div", ct, [n("img", {
        src: t.value.pic2,
        alt: ""
      }, null, 8, ht), n("div", ut, [n("span", ft, [i[1] || (i[1] = S("旅途记忆：", -1)), n("span", gt, s(t.value.intro2), 1)])])])])], 64))
    }
  },
  mt = v(pt, [
    ["__scopeId", "data-v-d1947fcd"]
  ]),
  _t = {
    class: "led"
  },
  xt = y({
    __name: "HomeView",
    setup(e) {
      return (t, r) => (g(), f("main", null, [d(ot), n("div", _t, [d(X)]), d(mt), r[0] || (r[0] = n("div", {
        class: "blank"
      }, null, -1))]))
    }
  });
export {
  xt as default
};
