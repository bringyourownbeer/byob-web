import{S as D,i as q,s as K,k as v,e as p,t as S,Q as N,L as A,d as c,n as w,c as y,a as P,g as k,R as C,b,f as x,D as m,E as B}from"../../chunks/vendor-7dbd12eb.js";import{b as E}from"../../chunks/paths-28a87002.js";function I(o){let a,e,s,n,l,_,d=o[0].content+"",f,i,u,g;return{c(){a=v(),e=p("div"),s=p("h1"),n=S("SvelteKit Blog"),l=v(),_=new N,f=v(),i=p("a"),u=S("News"),this.h()},l(t){A('[data-svelte="svelte-n3ior8"]',document.head).forEach(c),a=w(t),e=y(t,"DIV",{});var h=P(e);s=y(h,"H1",{class:!0});var j=P(s);n=k(j,"SvelteKit Blog"),j.forEach(c),l=w(h),_=C(h),f=w(h),i=y(h,"A",{href:!0});var H=P(i);u=k(H,"News"),H.forEach(c),h.forEach(c),this.h()},h(){document.title="Home",b(s,"class","svelte-1i98gyn"),_.a=f,b(i,"href",g=""+(E+"/"+o[1]+"/news"))},m(t,r){x(t,a,r),x(t,e,r),m(e,s),m(s,n),m(e,l),_.m(d,e),m(e,f),m(e,i),m(i,u)},p(t,[r]){r&1&&d!==(d=t[0].content+"")&&_.p(d),r&2&&g!==(g=""+(E+"/"+t[1]+"/news"))&&b(i,"href",g)},i:B,o:B,d(t){t&&c(a),t&&c(e)}}}async function T({page:o,fetch:a}){const e=o.params.lang;return{props:{homePage:await a(`${E}/${e}/home.json`).then(n=>n.json()),lang:e}}}function L(o,a,e){let{homePage:s}=a,{lang:n}=a;return o.$$set=l=>{"homePage"in l&&e(0,s=l.homePage),"lang"in l&&e(1,n=l.lang)},[s,n]}class U extends D{constructor(a){super();q(this,a,L,I,K,{homePage:0,lang:1})}}export{U as default,T as load};