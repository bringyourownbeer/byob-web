import{S,i as z,s as B,k as v,e as j,t as E,Q as C,l as g,L,d as n,n as P,c as k,a as w,g as H,R as Q,b as $,f,D as q,h as R,E as D}from"../../chunks/vendor-7dbd12eb.js";import{b as T}from"../../chunks/paths-28a87002.js";function U(l){let s,i,e,m=l[0].metadata.title+"",_,r,o,h,u,d,p=l[0].content+"",c;return document.title=s=l[0].metadata.title,{c(){i=v(),e=j("h1"),_=E(m),r=v(),o=j("p"),h=E("..."),u=v(),d=new C,c=g(),this.h()},l(t){L('[data-svelte="svelte-1hmtga4"]',document.head).forEach(n),i=P(t),e=k(t,"H1",{class:!0});var y=w(e);_=H(y,m),y.forEach(n),r=P(t),o=k(t,"P",{class:!0});var b=w(o);h=H(b,"..."),b.forEach(n),u=P(t),d=Q(t),c=g(),this.h()},h(){$(e,"class","title svelte-1mgzh8t"),$(o,"class","info"),d.a=c},m(t,a){f(t,i,a),f(t,e,a),q(e,_),f(t,r,a),f(t,o,a),q(o,h),f(t,u,a),d.m(p,t,a),f(t,c,a)},p(t,[a]){a&1&&s!==(s=t[0].metadata.title)&&(document.title=s),a&1&&m!==(m=t[0].metadata.title+"")&&R(_,m),a&1&&p!==(p=t[0].content+"")&&d.p(p)},i:D,o:D,d(t){t&&n(i),t&&n(e),t&&n(r),t&&n(o),t&&n(u),t&&n(c),t&&d.d()}}}async function G({page:l,fetch:s}){const i=l.params.lang,e=l.params.md;return{props:{mdPage:await s(`${T}/${i}/${e}.json`).then(_=>_.json())}}}function x(l,s,i){let{mdPage:e}=s;return l.$$set=m=>{"mdPage"in m&&i(0,e=m.mdPage)},[e]}class I extends S{constructor(s){super();z(this,s,x,U,B,{mdPage:0})}}export{I as default,G as load};