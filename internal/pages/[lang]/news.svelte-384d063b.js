import{S as z,i as B,s as F,e as j,t as b,k as D,c as N,a as P,g as y,d,n as H,b as q,f as C,D as h,h as S,L as G,E as L,R as J}from"../../chunks/vendor-0b7027d3.js";import{b as I}from"../../chunks/paths-28a87002.js";function R(r,t,a){const o=r.slice();return o[2]=t[a],o}function V(r){let t,a,o=r[2].metadata.title+"",c,f,i,_=r[2].metadata.date+"",v,k,u,g=r[2].metadata.excerpt+"",m,p,n;return{c(){t=j("a"),a=j("h2"),c=b(o),f=D(),i=j("p"),v=b(_),k=D(),u=j("p"),m=b(g),p=D(),this.h()},l(e){t=N(e,"A",{href:!0});var l=P(t);a=N(l,"H2",{class:!0});var s=P(a);c=y(s,o),s.forEach(d),f=H(l),i=N(l,"P",{class:!0});var w=P(i);v=y(w,_),w.forEach(d),k=H(l),u=N(l,"P",{class:!0});var E=P(u);m=y(E,g),E.forEach(d),p=H(l),l.forEach(d),this.h()},h(){q(a,"class","title svelte-1i98gyn"),q(i,"class","svelte-1i98gyn"),q(u,"class","svelte-1i98gyn"),q(t,"href",n=`${I}/${r[1]}/news/${r[2].slug}`)},m(e,l){C(e,t,l),h(t,a),h(a,c),h(t,f),h(t,i),h(i,v),h(t,k),h(t,u),h(u,m),h(t,p)},p(e,l){l&1&&o!==(o=e[2].metadata.title+"")&&S(c,o),l&1&&_!==(_=e[2].metadata.date+"")&&S(v,_),l&1&&g!==(g=e[2].metadata.excerpt+"")&&S(m,g),l&3&&n!==(n=`${I}/${e[1]}/news/${e[2].slug}`)&&q(t,"href",n)},d(e){e&&d(t)}}}function K(r){let t,a,o,c,f,i,_=r[0].length+"",v,k,u,g,m,p=r[0],n=[];for(let e=0;e<p.length;e+=1)n[e]=V(R(r,p,e));return{c(){t=D(),a=j("div"),o=j("h1"),c=b("News"),f=D(),i=j("p"),v=b(_),k=b(" posts "),u=b(r[1]),g=b("."),m=D();for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){G('[data-svelte="svelte-anr6c4"]',document.head).forEach(d),t=H(e),a=N(e,"DIV",{});var s=P(a);o=N(s,"H1",{class:!0});var w=P(o);c=y(w,"News"),w.forEach(d),f=H(s),i=N(s,"P",{class:!0});var E=P(i);v=y(E,_),k=y(E," posts "),u=y(E,r[1]),g=y(E,"."),E.forEach(d),m=H(s);for(let A=0;A<n.length;A+=1)n[A].l(s);s.forEach(d),this.h()},h(){document.title="News",q(o,"class","svelte-1i98gyn"),q(i,"class","info svelte-1i98gyn")},m(e,l){C(e,t,l),C(e,a,l),h(a,o),h(o,c),h(a,f),h(a,i),h(i,v),h(i,k),h(i,u),h(i,g),h(a,m);for(let s=0;s<n.length;s+=1)n[s].m(a,null)},p(e,[l]){if(l&1&&_!==(_=e[0].length+"")&&S(v,_),l&2&&S(u,e[1]),l&3){p=e[0];let s;for(s=0;s<p.length;s+=1){const w=R(e,p,s);n[s]?n[s].p(w,l):(n[s]=V(w),n[s].c(),n[s].m(a,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=p.length}},i:L,o:L,d(e){e&&d(t),e&&d(a),J(n,e)}}}async function T({page:r,fetch:t}){const a=r.params.lang;return{props:{posts:await t(`${I}/${a}/news/preview.json`).then(c=>c.json()),lang:a}}}function M(r,t,a){let{posts:o}=t,{lang:c}=t;return r.$$set=f=>{"posts"in f&&a(0,o=f.posts),"lang"in f&&a(1,c=f.lang)},[o,c]}class U extends z{constructor(t){super();B(this,t,M,K,F,{posts:0,lang:1})}}export{U as default,T as load};