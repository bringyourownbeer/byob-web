import{S,i as U,s as z,j as v,e as E,t as b,Q as B,k,L,d as o,l as j,c as H,a as $,g,R as P,b as q,f,D as C,h as Q,E as D}from"../../../chunks/vendor-f0214d86.js";import{b as R}from"../../../chunks/paths-28a87002.js";function T(s){let l,i,e,m=s[0].metadata.title+"",n,c,_,h,r,u,d=s[0].content+"",p;return document.title=l=s[0].metadata.title,{c(){i=v(),e=E("h1"),n=b(m),c=v(),_=E("p"),h=b(s[1]),r=v(),u=new B,p=k(),this.h()},l(t){L('[data-svelte="svelte-18mmgjc"]',document.head).forEach(o),i=j(t),e=H(t,"H1",{class:!0});var y=$(e);n=g(y,m),y.forEach(o),c=j(t),_=H(t,"P",{class:!0});var w=$(_);h=g(w,s[1]),w.forEach(o),r=j(t),u=P(t),p=k(),this.h()},h(){q(e,"class","title svelte-1mgzh8t"),q(_,"class","info"),u.a=p},m(t,a){f(t,i,a),f(t,e,a),C(e,n),f(t,c,a),f(t,_,a),C(_,h),f(t,r,a),u.m(d,t,a),f(t,p,a)},p(t,[a]){a&1&&l!==(l=t[0].metadata.title)&&(document.title=l),a&1&&m!==(m=t[0].metadata.title+"")&&Q(n,m),a&1&&d!==(d=t[0].content+"")&&u.p(d)},i:D,o:D,d(t){t&&o(i),t&&o(e),t&&o(c),t&&o(_),t&&o(r),t&&o(p),t&&u.d()}}}async function I({params:s,fetch:l}){const i=s.lang,e=s.slug;return{props:{post:await l(`${R}/${i}/news/${e}.json`).then(n=>n.json())}}}function A(s,l,i){let{post:e}=l,m=e.metadata.date.toUpperCase();return s.$$set=n=>{"post"in n&&i(0,e=n.post)},[e,m]}class J extends S{constructor(l){super();U(this,l,A,T,z,{post:0})}}export{J as default,I as load};