import{C as P,S as x,i as M,s as H,e as $,t as V,k,c as y,a as v,g as D,d as c,n as L,b as r,f as E,D as p,E as w,F as q,G as j,H as N,I as C,J as Q,K as R,j as z,L as T,m as B,o as F,M as U,N as W,O as X,x as I,u as A,v as Z}from"../chunks/vendor-0b7027d3.js";import{b as G}from"../chunks/paths-28a87002.js";import{r as Y}from"../chunks/singletons-12a22614.js";const ee=Y,te=se;async function se(n,e){return ee.goto(n,e,[])}const K=P("en");function J(n){let e=location.pathname.split("/");e[1]&&(e[1]=="en"||e[1]=="de")&&(e[1]=n,K.set(n)),te(`${e.join("/")}`,{replaceState:!0,noscroll:!0,keepfocus:!0})}function ae(n){let e,t,a,l,o,d,i,u,m,f;return{c(){e=$("div"),t=$("nav"),a=$("a"),l=$("h3"),o=V("HOME"),d=k(),i=$("a"),u=$("h3"),m=V("about"),this.h()},l(g){e=y(g,"DIV",{});var h=v(e);t=y(h,"NAV",{class:!0});var s=v(t);a=y(s,"A",{href:!0,class:!0});var _=v(a);l=y(_,"H3",{class:!0});var b=v(l);o=D(b,"HOME"),b.forEach(c),_.forEach(c),d=L(s),i=y(s,"A",{href:!0,class:!0});var O=v(i);u=y(O,"H3",{class:!0});var S=v(u);m=D(S,"about"),S.forEach(c),O.forEach(c),s.forEach(c),h.forEach(c),this.h()},h(){r(l,"class","home svelte-1wyi25t"),r(a,"href",""+(G+"/")),r(a,"class","svelte-1wyi25t"),r(u,"class","about svelte-1wyi25t"),r(i,"href",f=""+(G+"/"+n[0]+"/about")),r(i,"class","svelte-1wyi25t"),r(t,"class","svelte-1wyi25t")},m(g,h){E(g,e,h),p(e,t),p(t,a),p(a,l),p(l,o),p(t,d),p(t,i),p(i,u),p(u,m)},p(g,[h]){h&1&&f!==(f=""+(G+"/"+g[0]+"/about"))&&r(i,"href",f)},i:w,o:w,d(g){g&&c(e)}}}function re(n,e,t){let a;return q(n,K,l=>t(0,a=l)),[a]}class le extends x{constructor(e){super();M(this,e,re,ae,H,{})}}function oe(n){let e,t,a,l,o,d,i;return{c(){e=$("span"),t=j("svg"),a=j("path"),l=j("path"),o=j("path"),this.h()},l(u){e=y(u,"SPAN",{class:!0,"aria-label":!0});var m=v(e);t=N(m,"svg",{width:!0,height:!0,viewBox:!0,style:!0,"aria-hidden":!0});var f=v(t);a=N(f,"path",{d:!0}),v(a).forEach(c),l=N(f,"path",{d:!0,fill:!0,style:!0,class:!0}),v(l).forEach(c),o=N(f,"path",{d:!0,fill:!0,class:!0}),v(o).forEach(c),f.forEach(c),m.forEach(c),this.h()},h(){r(a,"d","M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"),r(l,"d","M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"),r(l,"fill","currentColor"),C(l,"transform-origin","130px 106px"),r(l,"class","octo-arm svelte-1guzc3f"),r(o,"d","M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"),r(o,"fill","currentColor"),r(o,"class","octo-body"),r(t,"width","60"),r(t,"height","60"),r(t,"viewBox","0 0 250 250"),C(t,"fill","#444"),C(t,"color","#fff"),C(t,"position","absolute"),C(t,"top","0"),C(t,"border","0"),C(t,"right","0"),r(t,"aria-hidden","true"),r(e,"class","github-corner svelte-1guzc3f"),r(e,"aria-label","View source on GitHub")},m(u,m){E(u,e,m),p(e,t),p(t,a),p(t,l),p(t,o),d||(i=Q(e,"click",n[0]),d=!0)},p:w,i:w,o:w,d(u){u&&c(e),d=!1,i()}}}function ne(n,e,t){let a;q(n,K,o=>t(1,a=o));function l(){a=="en"?J("de"):J("en")}return[l]}class ie extends x{constructor(e){super();M(this,e,ne,oe,H,{})}}function ce(n){let e,t,a,l,o,d,i,u,m,f;o=new ie({}),u=new le({});const g=n[1].default,h=R(g,n,n[0],null);return{c(){e=$("link"),t=$("link"),a=$("link"),l=k(),z(o.$$.fragment),d=k(),i=$("div"),z(u.$$.fragment),m=k(),h&&h.c(),this.h()},l(s){const _=T('[data-svelte="svelte-dd1lau"]',document.head);e=y(_,"LINK",{rel:!0,href:!0}),t=y(_,"LINK",{rel:!0,href:!0}),a=y(_,"LINK",{rel:!0,href:!0}),_.forEach(c),l=L(s),B(o.$$.fragment,s),d=L(s),i=y(s,"DIV",{class:!0});var b=v(i);B(u.$$.fragment,b),m=L(b),h&&h.l(b),b.forEach(c),this.h()},h(){r(e,"rel","stylesheet"),r(e,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css"),r(t,"rel","stylesheet"),r(t,"href","https://fonts.googleapis.com/css2?family=Overpass"),r(a,"rel","stylesheet"),r(a,"href","https://fonts.googleapis.com/css2?family=Fira+Mono"),r(i,"class","g-app-wrapper svelte-1b6ygo1")},m(s,_){p(document.head,e),p(document.head,t),p(document.head,a),E(s,l,_),F(o,s,_),E(s,d,_),E(s,i,_),F(u,i,null),p(i,m),h&&h.m(i,null),f=!0},p(s,[_]){h&&h.p&&(!f||_&1)&&U(h,g,s,s[0],f?X(g,s[0],_,null):W(s[0]),null)},i(s){f||(I(o.$$.fragment,s),I(u.$$.fragment,s),I(h,s),f=!0)},o(s){A(o.$$.fragment,s),A(u.$$.fragment,s),A(h,s),f=!1},d(s){c(e),c(t),c(a),s&&c(l),Z(o,s),s&&c(d),s&&c(i),Z(u),h&&h.d(s)}}}function ue(n,e,t){let{$$slots:a={},$$scope:l}=e;return n.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,a]}class _e extends x{constructor(e){super();M(this,e,ue,ce,H,{})}}export{_e as default};
