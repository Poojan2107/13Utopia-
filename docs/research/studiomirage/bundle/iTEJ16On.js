import{$ as Wu,aE as ep,ab as ul,j as np,g as ue,aF as Yh,ad as H_,ac as ia,aG as G_,af as W_,aH as ip,ar as X_,aI as Xu,aJ as qu,aK as q_,at as Zh,aL as Y_,aM as Z_,U as K_,k as Ie,B as Zs,aN as Hr,l as pc,z as J_,aO as j_,A as Kh,C as Ks,D as Wr,aP as rp,aQ as $_,aR as Xn,al as Q_,a8 as sp,aa as ap,aS as hl,aT as tg,aU as eg,aV as ng,ae as ig,a9 as Eo,aW as op,t as cr,K as rg,aX as fl,aY as sg,aZ as ag,a_ as og,a$ as lg,b0 as cg,b1 as ug,E as hg,b2 as lp,G as cp,b3 as Jh,b4 as jh,b5 as fg,b6 as up,a6 as dg,b7 as pg,b8 as mg,b9 as Xo,ba as _g,Q as hp,N as fp,bb as gg,bc as vg,bd as xg,be as yg,bf as Sg,bg as Mg,bh as bg,bi as Tg,bj as Eg,F as Ag,aA as wg,bk as $h,u as Qh,n as Cg,bl as Rg,m as Pg,aq as Lg,bm as Dg,bn as Yu,x as Zn,w as Me,bo as qo,R as Ig,a as Ce,M as Ng,v as fi,q as Di,c as gs,r as Fn,p as dp,b as pp,y as Li,f as bn,a0 as zs,aC as mp,d as mc,V as dl,o as Ug,s as Fg}from"./DUwSgNYY.js";import{b as Og}from"./CipfE1cU.js";import{r as Bg}from"./CAIm1TKL.js";import{B as zg,_ as kg,l as Vg,p as un,i as nr,r as Hg}from"./C5Pc8oZ8.js";import"./DsnmJJEf.js";function Gg(r,t){if(t){const e=document.body;r.autofocus=!0,Wu(()=>{document.activeElement===e&&r.focus()})}}let tf=!1;function Wg(){tf||(tf=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{if(!r.defaultPrevented)for(const t of r.target.elements)t[ep]?.()})},{capture:!0}))}function y1(r,t){return t}function Xg(r,t,e){for(var n=[],i=t.length,s,a=t.length,o=0;o<i;o++){let h=t[o];ap(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var f=r.outrogroups;_c(r,qu(s.done)),f.delete(s),f.size===0&&(r.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&e!==null&&r.pending.size===0;if(l){var c=e,u=c.parentNode;ng(u),u.append(c),r.items.clear()}_c(r,t,!l)}else s={pending:new Set(t),done:new Set},(r.outrogroups??=new Set).add(s)}function _c(r,t,e=!0){var n;if(r.pending.size>0){n=new Set;for(const a of r.pending.values())for(const o of a)n.add(r.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n?.has(s)){s.f|=Xn;const a=document.createDocumentFragment();ig(s,a)}else Eo(t[i],e)}}var ef;function S1(r,t,e,n,i,s=null){var a=r,o=new Map,l=(t&ip)!==0;if(l){var c=r;a=Ie?Zs(Hr(c)):c.appendChild(ul())}Ie&&pc();var u=null,h=X_(()=>{var x=e();return Xu(x)?x:x==null?[]:qu(x)}),f,d=new Map,g=!0;function _(x){(S.effect.f&Q_)===0&&(S.pending.delete(x),S.fallback=u,qg(S,f,a,t,n),u!==null&&(f.length===0?(u.f&Xn)===0?sp(u):(u.f^=Xn,ks(u,null,a)):ap(u,()=>{u=null})))}function p(x){S.pending.delete(x)}var m=np(()=>{f=ue(h);var x=f.length;let y=!1;if(Ie){var T=J_(a)===j_;T!==(x===0)&&(a=Kh(),Zs(a),Ks(!1),y=!0)}for(var E=new Set,w=H_,R=W_(),v=0;v<x;v+=1){Ie&&Wr.nodeType===rp&&Wr.data===$_&&(a=Wr,y=!0,Ks(!1));var b=f[v],P=n(b,v),F=g?null:o.get(P);F?(F.v&&Yh(F.v,b),F.i&&Yh(F.i,v),R&&w.unskip_effect(F.e)):(F=Yg(o,g?a:ef??=ul(),b,P,v,i,t,e),g||(F.e.f|=Xn),o.set(P,F)),E.add(P)}if(x===0&&s&&!u&&(g?u=ia(()=>s(a)):(u=ia(()=>s(ef??=ul())),u.f|=Xn)),x>E.size&&G_(),Ie&&x>0&&Zs(Kh()),!g)if(d.set(w,E),R){for(const[O,V]of o)E.has(O)||w.skip_effect(V.e);w.oncommit(_),w.ondiscard(p)}else _(w);y&&Ks(!0),ue(h)}),S={effect:m,items:o,pending:d,outrogroups:null,fallback:u};g=!1,Ie&&(a=Wr)}function Es(r){for(;r!==null&&(r.f&tg)===0;)r=r.next;return r}function qg(r,t,e,n,i){var s=(n&eg)!==0,a=t.length,o=r.items,l=Es(r.effect.first),c,u=null,h,f=[],d=[],g,_,p,m;if(s)for(m=0;m<a;m+=1)g=t[m],_=i(g,m),p=o.get(_).e,(p.f&Xn)===0&&(p.nodes?.a?.measure(),(h??=new Set).add(p));for(m=0;m<a;m+=1){if(g=t[m],_=i(g,m),p=o.get(_).e,r.outrogroups!==null)for(const b of r.outrogroups)b.pending.delete(p),b.done.delete(p);if((p.f&hl)!==0&&(sp(p),s&&(p.nodes?.a?.unfix(),(h??=new Set).delete(p))),(p.f&Xn)!==0)if(p.f^=Xn,p===l)ks(p,null,e);else{var S=u?u.next:l;p===r.effect.last&&(r.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Ti(r,u,p),Ti(r,p,S),ks(p,S,e),u=p,f=[],d=[],l=Es(u.next);continue}if(p!==l){if(c!==void 0&&c.has(p)){if(f.length<d.length){var x=d[0],y;u=x.prev;var T=f[0],E=f[f.length-1];for(y=0;y<f.length;y+=1)ks(f[y],x,e);for(y=0;y<d.length;y+=1)c.delete(d[y]);Ti(r,T.prev,E.next),Ti(r,u,T),Ti(r,E,x),l=x,u=E,m-=1,f=[],d=[]}else c.delete(p),ks(p,l,e),Ti(r,p.prev,p.next),Ti(r,p,u===null?r.effect.first:u.next),Ti(r,u,p),u=p;continue}for(f=[],d=[];l!==null&&l!==p;)(c??=new Set).add(l),d.push(l),l=Es(l.next);if(l===null)continue}(p.f&Xn)===0&&f.push(p),u=p,l=Es(p.next)}if(r.outrogroups!==null){for(const b of r.outrogroups)b.pending.size===0&&(_c(r,qu(b.done)),r.outrogroups?.delete(b));r.outrogroups.size===0&&(r.outrogroups=null)}if(l!==null||c!==void 0){var w=[];if(c!==void 0)for(p of c)(p.f&hl)===0&&w.push(p);for(;l!==null;)(l.f&hl)===0&&l!==r.fallback&&w.push(l),l=Es(l.next);var R=w.length;if(R>0){var v=(n&ip)!==0&&a===0?e:null;if(s){for(m=0;m<R;m+=1)w[m].nodes?.a?.measure();for(m=0;m<R;m+=1)w[m].nodes?.a?.fix()}Xg(r,w,v)}}s&&Wu(()=>{if(h!==void 0)for(p of h)p.nodes?.a?.apply()})}function Yg(r,t,e,n,i,s,a,o){var l=(a&Y_)!==0?(a&Z_)===0?K_(e,!1,!1):Zh(e):null,c=(a&q_)!==0?Zh(i):null;return{v:l,i:c,e:ia(()=>(s(t,l??e,c??i,o),()=>{r.delete(n)}))}}function ks(r,t,e){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=t&&(t.f&Xn)===0?t.nodes.start:e;n!==null;){var a=op(n);if(s.before(n),n===i)return;n=a}}function Ti(r,t,e){t===null?r.effect.first=e:t.next=e,e===null?r.effect.last=t:e.prev=t}function Zg(r,t,e=!1,n=!1,i=!1,s=!1){var a=r,o="";if(e){var l=r;Ie&&(a=Zs(Hr(l)))}cr(()=>{var c=rg;if(o===(o=t()??"")){Ie&&pc();return}if(e&&!Ie){c.nodes=null,l.innerHTML=o,o!==""&&fl(Hr(l),l.lastChild);return}if(c.nodes!==null&&(sg(c.nodes.start,c.nodes.end),c.nodes=null),o!==""){if(Ie){Wr.data;for(var u=pc(),h=u;u!==null&&(u.nodeType!==rp||u.data!=="");)h=u,u=op(u);if(u===null)throw ag(),og;fl(Wr,h),a=Zs(u);return}var f=n?cg:i?ug:void 0,d=lg(n?"svg":i?"math":"template",f);d.innerHTML=o;var g=n||i?d:d.content;if(fl(Hr(g),g.lastChild),n||i)for(;Hr(g);)a.before(Hr(g));else a.before(g)}})}function ir(r,t,...e){var n=new zg(r);np(()=>{const i=t()??null;n.ensure(i,i&&(s=>i(s,...e)))},hg)}function Kg(r,t){var e=void 0,n;lp(()=>{e!==(e=t())&&(n&&(Eo(n),n=null),e&&(n=ia(()=>{cp(()=>e(r))})))})}function _p(r){var t,e,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(e=_p(r[t]))&&(n&&(n+=" "),n+=e)}else for(e in r)r[e]&&(n&&(n+=" "),n+=e);return n}function Jg(){for(var r,t,e=0,n="",i=arguments.length;e<i;e++)(r=arguments[e])&&(t=_p(r))&&(n&&(n+=" "),n+=t);return n}function Ao(r){return typeof r=="object"?Jg(r):r??""}const nf=[...` 	
\r\f \v\uFEFF`];function jg(r,t,e){var n=r==null?"":""+r;if(t&&(n=n?n+" "+t:t),e){for(var i of Object.keys(e))if(e[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||nf.includes(n[a-1]))&&(o===n.length||nf.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function rf(r,t=!1){var e=t?" !important;":";",n="";for(var i of Object.keys(r)){var s=r[i];s!=null&&s!==""&&(n+=" "+i+": "+s+e)}return n}function pl(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function $g(r,t){if(t){var e="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,r){r=String(r).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(pl)),i&&l.push(...Object.keys(i).map(pl));var c=0,u=-1;const _=r.length;for(var h=0;h<_;h++){var f=r[h];if(o?f==="/"&&r[h-1]==="*"&&(o=!1):s?s===f&&(s=!1):f==="/"&&r[h+1]==="*"?o=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!o&&s===!1&&a===0){if(f===":"&&u===-1)u=h;else if(f===";"||h===_-1){if(u!==-1){var d=pl(r.substring(c,u).trim());if(!l.includes(d)){f!==";"&&h++;var g=r.substring(c,h).trim();e+=" "+g+";"}}c=h+1,u=-1}}}}return n&&(e+=rf(n)),i&&(e+=rf(i,!0)),e=e.trim(),e===""?null:e}return r==null?null:String(r)}function wo(r,t,e,n,i,s){var a=r[Jh];if(Ie||a!==e||a===void 0){var o=jg(e,n,s);(!Ie||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):t?r.className=o:r.setAttribute("class",o)),r[Jh]=e}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&r.classList.toggle(l,c)}return s}function ml(r,t={},e,n){for(var i in e){var s=e[i];t[i]!==s&&(e[i]==null?r.style.removeProperty(i):r.style.setProperty(i,s,n))}}function gc(r,t,e,n){var i=r[jh];if(Ie||i!==t){var s=$g(t,n);(!Ie||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r[jh]=t}else n&&(Array.isArray(n)?(ml(r,e?.[0],n[0]),ml(r,e?.[1],n[1],"important")):ml(r,e,n));return n}function gp(r,t){t?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function sf(r,t){var e=!("__defaultValue"in r);!e&&r.__defaultValue===t||(r.__defaultValue=t,vp(r,!e||"__value"in r))}function vp(r,t){var e=r.__defaultValue,n=r.multiple,i=n?e??[]:null;if(!(n&&!Xu(i))){var s=r.selectedIndex,a=t&&n?new Set(r.selectedOptions):null;for(var o of r.options){var l=xc(o);gp(o,n?i.includes(l):up(l,e))}if(t)if(a!==null)for(o of r.options){var c=a.has(o);o.selected!==c&&(o.selected=c)}else r.selectedIndex!==s&&(r.selectedIndex=s)}}function vc(r,t,e=!1){if(r.multiple){if(t==null)return;if(!Xu(t))return fg();for(var n of r.options)n.selected=t.includes(xc(n));return}for(n of r.options){var i=xc(n);if(up(i,t)){n.selected=!0;return}}(!e||t!==void 0)&&(r.selectedIndex=-1)}function Qg(r){var t=new MutationObserver(e=>{e.every(t0)||("__defaultValue"in r&&vp(r,!1),"__value"in r&&vc(r,r.__value))});t.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),dg(()=>{t.disconnect()})}function xc(r){return"__value"in r?r.__value:r.value}function t0(r){if(r.target.closest("selectedcontent")!==null)return!0;if(r.type==="childList"){var t=[...r.addedNodes,...r.removedNodes];return t.length>0&&t.every(e=>e.nodeName==="SELECTEDCONTENT")}return!1}const As=Symbol("class"),ws=Symbol("style"),xp=Symbol("is custom element"),yp=Symbol("is html"),e0=Xo?"link":"LINK",af=Xo?"input":"INPUT",n0=Xo?"option":"OPTION",Sp=Xo?"select":"SELECT";function i0(r){if(Ie){var t=!1,e=()=>{if(!t){if(t=!0,r.hasAttribute("value")){var n=r.value;cn(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var i=r.checked;cn(r,"checked",null),r.checked=i}}};r[ep]=e,Wu(e),Wg()}}function M1(r,t){var e=Zu(r);e.checked!==(e.checked=t??void 0)&&(r.checked=t)}function cn(r,t,e,n){var i=Zu(r);Ie&&(i[t]=r.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&r.nodeName===e0)||i[t]!==(i[t]=e)&&(t==="loading"&&(r[bg]=e),e==null?r.removeAttribute(t):typeof e!="string"&&bp(r).has(t)?r[t]=e:r.setAttribute(t,e))}function r0(r,t,e,n,i=!1,s=!1){Ie&&i&&r.nodeName===af&&("defaultValue"in e||"defaultChecked"in e||i0(r));var a=Zu(r),o=a[xp],l=!a[yp];let c=Ie&&o;c&&Ks(!1);var u=t||{},h=r.nodeName===n0,f=r.nodeName===Sp;for(var d in t)!(d in e)&&d[0]+d[1]!=="$$"&&(e[d]=null);e.class?e.class=Ao(e.class):e[As]&&(e.class=null),e[ws]&&(e.style??=null);var g=bp(r);if(r.nodeName===af&&"type"in e&&("value"in e||"__value"in e)){var _=e.type;(_!==u.type||_===void 0&&r.hasAttribute("type"))&&(u.type=_,cn(r,"type",_))}for(const E in e){let w=e[E];if(h&&E==="value"&&w==null){r.value=r.__value="",u[E]=w;continue}if(E==="class"){var p=r.namespaceURI==="http://www.w3.org/1999/xhtml";wo(r,p,w,n,t?.[As],e[As]),u[E]=w,u[As]=e[As];continue}if(E==="style"){gc(r,w,t?.[ws],e[ws]),u[E]=w,u[ws]=e[ws];continue}var m=u[E];if(!(w===m&&!(w===void 0&&r.hasAttribute(E)))){u[E]=w;var S=E[0]+E[1];if(S!=="$$")if(S==="on"){const R={},v="$$"+E;let b=E.slice(2);var x=Tg(b);if(_g(b)&&(b=b.slice(0,-7),R.capture=!0),!x&&m){if(w!=null)continue;r.removeEventListener(b,u[v],R),u[v]=null}if(x)hp(b,r,w),fp([b]);else if(w!=null){let P=function(F){u[E].call(this,F)};u[v]=gg(b,r,P,R)}}else if(E==="style")cn(r,E,w);else if(E==="autofocus")Gg(r,!!w);else if(!o&&(E==="__value"||E==="value"&&w!=null))r.value=r.__value=w;else if(E==="selected"&&h)gp(r,w);else{var y=E;l||(y=vg(y));var T=y==="defaultValue"||y==="defaultChecked";if(f&&y==="defaultValue")continue;if(w==null&&!o&&!T)if(a[E]=null,y==="value"||y==="checked"){let R=r;const v=t===void 0;if(y==="value"){let b=R.defaultValue;R.removeAttribute(y),R.defaultValue=b,R.value=R.__value=v?b:null}else{let b=R.defaultChecked;R.removeAttribute(y),R.defaultChecked=b,R.checked=v?b:!1}}else r.removeAttribute(E);else T||(o||typeof w!="string")&&g.has(y)?(r[y]=w,y in a&&(a[y]=xg)):typeof w!="function"&&cn(r,y,w)}}}return c&&Ks(!0),u}function Mp(r,t,e=[],n=[],i=[],s,a=!1,o=!1){pg(i,e,n,l=>{var c=void 0,u={},h=r.nodeName===Sp,f=!1;if(lp(()=>{var g=t(...l.map(ue)),_=r0(r,c,g,s,a,o);if(f&&h){var p=r;"defaultValue"in g&&sf(p,g.defaultValue),"value"in g&&vc(p,g.value)}for(let S of Object.getOwnPropertySymbols(u))g[S]||Eo(u[S]);for(let S of Object.getOwnPropertySymbols(g)){var m=g[S];S.description===mg&&(!c||m!==c[S])&&(u[S]&&Eo(u[S]),u[S]=ia(()=>Kg(r,()=>m))),_[S]=m}c=_}),h){var d=r;cp(()=>{var g=c;"defaultValue"in g&&sf(d,g.defaultValue),vc(d,g.value,!0),Qg(d)})}f=!0})}function Zu(r){return r[yg]??={[xp]:r.nodeName.includes("-"),[yp]:r.namespaceURI===Sg}}var of=new Map;function bp(r){var t=r.getAttribute("is")||r.nodeName,e=of.get(t);if(e)return e;of.set(t,e=new Set);for(var n,i=r,s=Element.prototype;s!==i;){n=Eg(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&e.add(a);i=Mg(i)}return e}function b1(r=!1){const t=Ag,e=t.l.u;if(!e)return;let n=()=>Pg(t.s);if(r){let i=0,s={};const a=Lg(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&i++,i});n=()=>ue(a)}e.b.length&&wg(()=>{lf(t,n),$h(e.b)}),Qh(()=>{const i=Cg(()=>e.m.map(Rg));return()=>{for(const s of i)typeof s=="function"&&s()}}),e.a.length&&Qh(()=>{lf(t,n),$h(e.a)})}function lf(r,t){if(r.l.s)for(const e of r.l.s)ue(e);t()}const s0="";function T1(...r){if(!r[0].startsWith("/"))throw new Error(`Cannot use \`resolve(...)\` with a non-absolute pathname or route ID (got "${r[0]}"). \`resolve\` is only for internal pathnames and route IDs; external URLs should be used directly.`);return Og+s0+Bg(r[0],r[1])}const Vs={Any:"Any",Document:"Document",Media:"Media",Web:"Web"},a0=r=>({link_type:Vs.Document,id:r.id,uid:r.uid||void 0,type:r.type,tags:r.tags,lang:r.lang,url:r.url==null?void 0:r.url,slug:r.slugs?.[0],...r.data&&Object.keys(r.data).length>0?{data:r.data}:{}}),o0=(r,...t)=>{if(!r)return null;const e="link_type"in r?r:a0(r),[n]=t;let i;switch(typeof n=="function"||n==null?i={linkResolver:n}:i={...n},e.link_type){case Vs.Media:case Vs.Web:return"url"in e?e.url:null;case Vs.Document:if("id"in e&&i.linkResolver){const s=i.linkResolver(e);if(s!=null)return s}return"url"in e&&e.url?e.url:null;case Vs.Any:default:return null}};var cf=Object.defineProperty,l0=(r,t)=>{let e={};for(var n in r)cf(e,n,{get:r[n],enumerable:!0});return cf(e,Symbol.toStringTag,{value:"Module"}),e},E1=l0({color:()=>m0,contentRelationship:()=>f0,date:()=>d0,embed:()=>x0,geoPoint:()=>y0,group:()=>E0,image:()=>u0,imageThumbnail:()=>Ep,integration:()=>Ju,integrationField:()=>M0,integrationFields:()=>b0,keyText:()=>g0,link:()=>Yo,linkToMedia:()=>h0,number:()=>_0,repeatable:()=>T0,richText:()=>Tp,select:()=>v0,sliceZone:()=>A0,table:()=>S0,timestamp:()=>p0,title:()=>c0});const Ye=r=>r!=null,Ku=r=>!!r.length,Tp=r=>Ye(r)?r.length===1&&"text"in r[0]?!!r[0].text:!!r.length:!1,c0=Tp,Ep=r=>Ye(r)&&!!r.url,u0=Ep,Yo=r=>Ye(r)&&("id"in r||"url"in r),h0=Yo,f0=Yo,d0=Ye,p0=Ye,m0=Ye,_0=Ye,g0=r=>!!r,v0=Ye,x0=r=>Ye(r)&&!!r.embed_url,y0=r=>Ye(r)&&"longitude"in r,S0=Ye,Ju=Ye,M0=Ju,b0=Ju,T0=r=>Ye(r)&&Ku(r),E0=r=>Ye(r)&&Ku(r),A0=r=>Ye(r)&&Ku(r),w0=r=>{const t=/^(\/(?!\/)|#)/.test(r),e=!t&&!/^https?:\/\//.test(r);return t&&!e},C0=(r,t={})=>{if(r&&("link_type"in r?Yo(r):r)){const e="target"in r?r.target:void 0,n=o0(r,t.linkResolver),i=n??void 0,s=typeof i=="string"?!w0(i):!1,a=t.rel?t.rel({href:i,isExternal:s,target:e}):s?"noreferrer":void 0;return{href:i,target:e,rel:a??void 0}}return{}};const ju="182",R0=0,uf=1,P0=2,uo=1,L0=2,Hs=3,ki=0,Je=1,di=2,_i=0,Zr=1,hf=2,ff=3,df=4,D0=5,ar=100,I0=101,N0=102,U0=103,F0=104,O0=200,B0=201,z0=202,k0=203,yc=204,Sc=205,V0=206,H0=207,G0=208,W0=209,X0=210,q0=211,Y0=212,Z0=213,K0=214,Mc=0,bc=1,Tc=2,rs=3,Ec=4,Ac=5,wc=6,Cc=7,Ap=0,J0=1,j0=2,Kn=0,wp=1,Cp=2,Rp=3,Pp=4,Lp=5,Dp=6,Ip=7,pf="attached",$0="detached",Np=300,vr=301,ss=302,Rc=303,Pc=304,Zo=306,Lc=1e3,pi=1001,Dc=1002,Fe=1003,Q0=1004,Ea=1005,Ne=1006,_l=1007,ur=1008,dn=1009,Up=1010,Fp=1011,ra=1012,$u=1013,jn=1014,An=1015,vi=1016,Qu=1017,th=1018,sa=1020,Op=35902,Bp=35899,zp=1021,kp=1022,wn=1023,xi=1026,hr=1027,eh=1028,nh=1029,as=1030,ih=1031,rh=1033,ho=33776,fo=33777,po=33778,mo=33779,Ic=35840,Nc=35841,Uc=35842,Fc=35843,Oc=36196,Bc=37492,zc=37496,kc=37488,Vc=37489,Hc=37490,Gc=37491,Wc=37808,Xc=37809,qc=37810,Yc=37811,Zc=37812,Kc=37813,Jc=37814,jc=37815,$c=37816,Qc=37817,tu=37818,eu=37819,nu=37820,iu=37821,ru=36492,su=36494,au=36495,ou=36283,lu=36284,cu=36285,uu=36286,Co=2300,hu=2301,gl=2302,mf=2400,_f=2401,gf=2402,tv=2500,A1=0,w1=1,C1=2,ev=3200,Vp=0,nv=1,Ii="",En="srgb",os="srgb-linear",Ro="linear",Qt="srgb",br=7680,vf=519,iv=512,rv=513,sv=514,sh=515,av=516,ov=517,ah=518,lv=519,fu=35044,R1=35048,xf="300 es",qn=2e3,Po=2001;function Hp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uv(){const r=aa("canvas");return r.style.display="block",r}const yf={};function Lo(...r){const t="THREE."+r.shift();console.log(t,...r)}function Tt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ct(...r){const t="THREE."+r.shift();console.error(t,...r)}function oa(...r){const t=r.join(" ");t in yf||(yf[t]=!0,Tt(...r))}function hv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sf=1234567;const Js=Math.PI/180,ls=180/Math.PI;function Pn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[r&255]+ze[r>>8&255]+ze[r>>16&255]+ze[r>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Lt(r,t,e){return Math.max(t,Math.min(e,r))}function oh(r,t){return(r%t+t)%t}function fv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function dv(r,t,e){return r!==t?(e-r)/(t-r):0}function js(r,t,e){return(1-e)*r+e*t}function pv(r,t,e,n){return js(r,t,1-Math.exp(-e*n))}function mv(r,t=1){return t-Math.abs(oh(r,t*2)-t)}function _v(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function gv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function vv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function xv(r,t){return r+Math.random()*(t-r)}function yv(r){return r*(.5-Math.random())}function Sv(r){r!==void 0&&(Sf=r);let t=Sf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mv(r){return r*Js}function bv(r){return r*ls}function Tv(r){return(r&r-1)===0&&r!==0}function Ev(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Av(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wv(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*u,o*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const P1={DEG2RAD:Js,RAD2DEG:ls,generateUUID:Pn,clamp:Lt,euclideanModulo:oh,mapLinear:fv,inverseLerp:dv,lerp:js,damp:pv,pingpong:mv,smoothstep:_v,smootherstep:gv,randInt:vv,randFloat:xv,randFloatSpread:yv,seededRandom:Sv,degToRad:Mv,radToDeg:bv,isPowerOfTwo:Tv,ceilPowerOfTwo:Ev,floorPowerOfTwo:Av,setQuaternionFromProperEuler:wv,normalize:te,denormalize:On};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=l*f+c*d+u*g+h*_;p<0&&(f=-f,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),x=Math.sin(S);m=Math.sin(m*S)/x,o=Math.sin(o*S)/x,l=l*m+f*o,c=c*m+d*o,u=u*m+g*o,h=h*m+_*o}else{l=l*m+f*o,c=c*m+d*o,u=u*m+g*o,h=h*m+_*o;const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Lt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new D,Mf=new xs;class Ut{constructor(t,e,n,i,s,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],x=i[4],y=i[7],T=i[2],E=i[5],w=i[8];return s[0]=a*_+o*S+l*T,s[3]=a*p+o*x+l*E,s[6]=a*m+o*y+l*w,s[1]=c*_+u*S+h*T,s[4]=c*p+u*x+h*E,s[7]=c*m+u*y+h*w,s[2]=f*_+d*S+g*T,s[5]=f*p+d*x+g*E,s[8]=f*m+d*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new Ut,bf=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cv(){const r={enabled:!0,workingColorSpace:os,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(i.r=Kr(i.r),i.g=Kr(i.g),i.b=Kr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Ro:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[os]:{primaries:t,whitePoint:n,transfer:Ro,toXYZ:bf,fromXYZ:Tf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:bf,fromXYZ:Tf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}const qt=Cv();function gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class Rv{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Tr===void 0&&(Tr=aa("canvas")),Tr.width=t.width,Tr.height=t.height;const i=Tr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=gi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pv=0;class lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(yl(i[a].image)):s.push(yl(i[a]))}else s=yl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function yl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}let Lv=0;const Sl=new D;class Oe extends vs{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=pi,i=pi,s=Ne,a=ur,o=wn,l=dn,c=Oe.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Pn(),this.name="",this.source=new lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Np)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lc:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lc:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Np;Oe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(d+1)/2,T=(m+1)/2,E=(u+f)/4,w=(h+_)/4,R=(g+p)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=w/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=R/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=R/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this.w=Lt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this.w=Lt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends vs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Oe(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new lh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Dv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gp extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iv extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),wa.subVectors(this.max,Cs),Er.subVectors(t.a,Cs),Ar.subVectors(t.b,Cs),wr.subVectors(t.c,Cs),Ei.subVectors(Ar,Er),Ai.subVectors(wr,Ar),Zi.subVectors(Er,wr);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!Ml(e,Er,Ar,wr,wa)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,Er,Ar,wr,wa))?!1:(Ca.crossVectors(Ei,Ai),e=[Ca.x,Ca.y,Ca.z],Ml(e,Er,Ar,wr,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ii=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,Aa=new Mi,Er=new D,Ar=new D,wr=new D,Ei=new D,Ai=new D,Zi=new D,Cs=new D,wa=new D,Ca=new D,Ki=new D;function Ml(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ki.fromArray(r,s);const o=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nv=new Mi,Rs=new D,bl=new D;class bi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(bl)),this.expandByPoint(Rs.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ri=new D,Tl=new D,Ra=new D,wi=new D,El=new D,Pa=new D,Al=new D;class Ko{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Tl.copy(t).add(e).multiplyScalar(.5),Ra.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Tl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ra),o=wi.dot(this.direction),l=-wi.dot(Ra),c=wi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Tl).addScaledVector(Ra,f),d}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,s){El.subVectors(e,t),Pa.subVectors(n,t),Al.crossVectors(El,Pa);let a=this.direction.dot(Al),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);const l=o*this.direction.dot(Pa.crossVectors(wi,Pa));if(l<0)return null;const c=o*this.direction.dot(El.cross(wi));if(c<0||l+c>a)return null;const u=-o*wi.dot(Al);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,p){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,p)}set(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Cr.setFromMatrixColumn(t,0).length(),s=1/Cr.setFromMatrixColumn(t,1).length(),a=1/Cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uv,t,Fv)}lookAt(t,e,n){const i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Ci.crossVectors(n,on),Ci.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ci.crossVectors(n,on)),Ci.normalize(),La.crossVectors(on,Ci),i[0]=Ci.x,i[4]=La.x,i[8]=on.x,i[1]=Ci.y,i[5]=La.y,i[9]=on.y,i[2]=Ci.z,i[6]=La.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],x=n[7],y=n[11],T=n[15],E=i[0],w=i[4],R=i[8],v=i[12],b=i[1],P=i[5],F=i[9],O=i[13],V=i[2],G=i[6],z=i[10],B=i[14],q=i[3],nt=i[7],et=i[11],ct=i[15];return s[0]=a*E+o*b+l*V+c*q,s[4]=a*w+o*P+l*G+c*nt,s[8]=a*R+o*F+l*z+c*et,s[12]=a*v+o*O+l*B+c*ct,s[1]=u*E+h*b+f*V+d*q,s[5]=u*w+h*P+f*G+d*nt,s[9]=u*R+h*F+f*z+d*et,s[13]=u*v+h*O+f*B+d*ct,s[2]=g*E+_*b+p*V+m*q,s[6]=g*w+_*P+p*G+m*nt,s[10]=g*R+_*F+p*z+m*et,s[14]=g*v+_*O+p*B+m*ct,s[3]=S*E+x*b+y*V+T*q,s[7]=S*w+x*P+y*G+T*nt,s[11]=S*R+x*F+y*z+T*et,s[15]=S*v+x*O+y*B+T*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15],S=l*d-c*f,x=o*d-c*h,y=o*f-l*h,T=a*d-c*u,E=a*f-l*u,w=a*h-o*u;return e*(_*S-p*x+m*y)-n*(g*S-p*T+m*E)+i*(g*x-_*T+m*w)-s*(g*y-_*E+p*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],S=h*p*c-_*f*c+_*l*d-o*p*d-h*l*m+o*f*m,x=g*f*c-u*p*c-g*l*d+a*p*d+u*l*m-a*f*m,y=u*_*c-g*h*c+g*o*d-a*_*d-u*o*m+a*h*m,T=g*h*l-u*_*l-g*o*f+a*_*f+u*o*p-a*h*p,E=e*S+n*x+i*y+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=S*w,t[1]=(_*f*s-h*p*s-_*i*d+n*p*d+h*i*m-n*f*m)*w,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*w,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*w,t[4]=x*w,t[5]=(u*p*s-g*f*s+g*i*d-e*p*d-u*i*m+e*f*m)*w,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*m-e*l*m)*w,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*d+e*l*d)*w,t[8]=y*w,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*m-e*h*m)*w,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*m+e*o*m)*w,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*d-e*o*d)*w,t[12]=T*w,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*p+e*h*p)*w,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*w,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,p=a*h,m=o*h,S=l*c,x=l*u,y=l*h,T=n.x,E=n.y,w=n.z;return i[0]=(1-(_+m))*T,i[1]=(d+y)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+m))*E,i[6]=(p+S)*E,i[7]=0,i[8]=(g+x)*w,i[9]=(p-S)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Cr.set(i[0],i[1],i[2]).length();const a=Cr.set(i[4],i[5],i[6]).length(),o=Cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),In.copy(this);const c=1/s,u=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=qn,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===qn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Po)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=qn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===qn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Po)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Cr=new D,In=new Vt,Uv=new D(0,0,0),Fv=new D(1,1,1),Ci=new D,La=new D,on=new D,Ef=new Vt,Af=new xs;class $n{constructor(t=0,e=0,n=0,i=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ef,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Af.setFromEuler(this),this.setFromQuaternion(Af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ov=0;const wf=new D,Rr=new xs,si=new Vt,Da=new D,Ps=new D,Bv=new D,zv=new xs,Cf=new D(1,0,0),Rf=new D(0,1,0),Pf=new D(0,0,1),Lf={type:"added"},kv={type:"removed"},Pr={type:"childadded",child:null},wl={type:"childremoved",child:null};class Se extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new $n,n=new xs,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Ut}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Cf,t)}rotateY(t){return this.rotateOnAxis(Rf,t)}rotateZ(t){return this.rotateOnAxis(Pf,t)}translateOnAxis(t,e){return wf.copy(t).applyQuaternion(this.quaternion),this.position.add(wf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cf,t)}translateY(t){return this.translateOnAxis(Rf,t)}translateZ(t){return this.translateOnAxis(Pf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Da.copy(t):Da.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ps,Da,this.up):si.lookAt(Da,Ps,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Rr.setFromRotationMatrix(si),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ct("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lf),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kv),wl.child=t,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lf),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Bv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,zv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new D,ai=new D,Cl=new D,oi=new D,Lr=new D,Dr=new D,Df=new D,Rl=new D,Pl=new D,Ll=new D,Dl=new he,Il=new he,Nl=new he;class Bn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Nn.subVectors(t,e),i.cross(Nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Nn.subVectors(i,e),ai.subVectors(n,e),Cl.subVectors(t,e);const a=Nn.dot(Nn),o=Nn.dot(ai),l=Nn.dot(Cl),c=ai.dot(ai),u=ai.dot(Cl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Dl.setScalar(0),Il.setScalar(0),Nl.setScalar(0),Dl.fromBufferAttribute(t,e),Il.fromBufferAttribute(t,n),Nl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Dl,s.x),a.addScaledVector(Il,s.y),a.addScaledVector(Nl,s.z),a}static isFrontFacing(t,e,n,i){return Nn.subVectors(n,e),ai.subVectors(t,e),Nn.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Nn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Lr.subVectors(i,n),Dr.subVectors(s,n),Rl.subVectors(t,n);const l=Lr.dot(Rl),c=Dr.dot(Rl);if(l<=0&&c<=0)return e.copy(n);Pl.subVectors(t,i);const u=Lr.dot(Pl),h=Dr.dot(Pl);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Lr,a);Ll.subVectors(t,s);const d=Lr.dot(Ll),g=Dr.dot(Ll);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Dr,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Df.subVectors(s,i),o=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(Df,o);const m=1/(p+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(Lr,a).addScaledVector(Dr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Ul(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=oh(t,1),e=Lt(e,0,1),n=Lt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ul(a,s,t+1/3),this.g=Ul(a,s,t),this.b=Ul(a,s,t-1/3)}return qt.colorSpaceToWorking(this,i),this}setStyle(t,e=En){function n(s){s!==void 0&&parseFloat(s)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Xp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return qt.workingToColorSpace(ke.copy(this),t),Math.round(Lt(ke.r*255,0,255))*65536+Math.round(Lt(ke.g*255,0,255))*256+Math.round(Lt(ke.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,s=ke.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=En){qt.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Ia);const n=js(Ri.h,Ia.h,e),i=js(Ri.s,Ia.s,e),s=js(Ri.l,Ia.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new kt;kt.NAMES=Xp;let Vv=0;class yr extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Zr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=Sc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qp extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,Na=new gt;let Hv=0;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fu&&(t.usage=this.usage),t}}class Yp extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zp extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $e extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gv=0;const Mn=new Vt,Fl=new Se,Ir=new D,ln=new Mi,Ls=new Mi,De=new D;class yn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?Zp:Yp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ut().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Fl.lookAt(t),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(ln.min,Ls.min),ln.expandByPoint(De),De.addVectors(ln.max,Ls.max),ln.expandByPoint(De)):(ln.expandByPoint(Ls.min),ln.expandByPoint(Ls.max))}ln.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)De.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(De));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)De.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(t,c),De.add(Ir)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new D,l[R]=new D;const c=new D,u=new D,h=new D,f=new gt,d=new gt,g=new gt,_=new D,p=new D;function m(R,v,b){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,b),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[R].add(_),o[v].add(_),o[b].add(_),l[R].add(p),l[v].add(p),l[b].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,v=S.length;R<v;++R){const b=S[R],P=b.start,F=b.count;for(let O=P,V=P+F;O<V;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new D,y=new D,T=new D,E=new D;function w(R){T.fromBufferAttribute(i,R),E.copy(T);const v=o[R];x.copy(v),x.sub(T.multiplyScalar(T.dot(v))).normalize(),y.crossVectors(E,v);const P=y.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,v=S.length;R<v;++R){const b=S[R],P=b.start,F=b.count;for(let O=P,V=P+F;O<V;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new je(f,u,h)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const If=new Vt,Ji=new Ko,Ua=new bi,Nf=new D,Fa=new D,Oa=new D,Ba=new D,Ol=new D,za=new D,Uf=new D,ka=new D;class Ln extends Se{constructor(t=new yn,e=new qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ol.fromBufferAttribute(h,t),a?za.addScaledVector(Ol,u):za.addScaledVector(Ol.sub(e),u))}e.add(za)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ji.copy(t.ray).recast(t.near),!(Ua.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ua,Nf)===null||Ji.origin.distanceToSquared(Nf)>(t.far-t.near)**2))&&(If.copy(s).invert(),Ji.copy(t.ray).applyMatrix4(If),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,T=x;y<T;y+=3){const E=o.getX(y),w=o.getX(y+1),R=o.getX(y+2);i=Va(this,m,t,n,c,u,h,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);i=Va(this,a,t,n,c,u,h,S,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,T=x;y<T;y+=3){const E=y,w=y+1,R=y+2;i=Va(this,m,t,n,c,u,h,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=p,x=p+1,y=p+2;i=Va(this,a,t,n,c,u,h,S,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Wv(r,t,e,n,i,s,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ki,o),l===null)return null;ka.copy(o),ka.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ka);return c<e.near||c>e.far?null:{distance:c,point:ka.clone(),object:r}}function Va(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Fa),r.getVertexPosition(l,Oa),r.getVertexPosition(c,Ba);const u=Wv(r,t,e,n,Fa,Oa,Ba,Uf);if(u){const h=new D;Bn.getBarycoord(Uf,Fa,Oa,Ba,h),i&&(u.uv=Bn.getInterpolatedAttribute(i,o,l,c,h,new gt)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,o,l,c,h,new gt)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Bn.getNormal(Fa,Oa,Ba,f.normal),u.face=f,u.barycoord=h}return u}class ya extends yn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2));function g(_,p,m,S,x,y,T,E,w,R,v){const b=y/w,P=T/R,F=y/2,O=T/2,V=E/2,G=w+1,z=R+1;let B=0,q=0;const nt=new D;for(let et=0;et<z;et++){const ct=et*P-O;for(let Pt=0;Pt<G;Pt++){const It=Pt*b-F;nt[_]=It*S,nt[p]=ct*x,nt[m]=V,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[p]=0,nt[m]=E>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Pt/w),h.push(1-et/R),B+=1}}for(let et=0;et<R;et++)for(let ct=0;ct<w;ct++){const Pt=f+ct+G*et,It=f+ct+G*(et+1),Gt=f+(ct+1)+G*(et+1),Wt=f+(ct+1)+G*et;l.push(Pt,It,Wt),l.push(It,Gt,Wt),q+=6}o.addGroup(d,q,v),d+=q,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(r){const t={};for(let e=0;e<r.length;e++){const n=cs(r[e]);for(const i in n)t[i]=n[i]}return t}function Xv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Kp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const qv={clone:cs,merge:Xe};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Xv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jp extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new D,Ff=new gt,Of=new gt;class fn extends Jp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Ff,Of),e.subVectors(Of,Ff)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Nr=-90,Ur=1;class Kv extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(Nr,Ur,t,e);i.layers=this.layers,this.add(i);const s=new fn(Nr,Ur,t,e);s.layers=this.layers,this.add(s);const a=new fn(Nr,Ur,t,e);a.layers=this.layers,this.add(a);const o=new fn(Nr,Ur,t,e);o.layers=this.layers,this.add(o);const l=new fn(Nr,Ur,t,e);l.layers=this.layers,this.add(l);const c=new fn(Nr,Ur,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jp extends Oe{constructor(t=[],e=vr,n,i,s,a,o,l,c,u){super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $p extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jp(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ya(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:_i});s.uniforms.tEquirect.value=e;const a=new Ln(i,s),o=e.minFilter;return e.minFilter===ur&&(e.minFilter=Ne),new Kv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Ha extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ha;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class L1 extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class D1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new D;class Qp{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qp(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bf=new D,zf=new he,kf=new he,jv=new D,Vf=new Vt,Ga=new D,zl=new bi,Hf=new Vt,kl=new Ko;class I1 extends Ln{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pf,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ga),this.boundingSphere.expandByPoint(Ga)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(i),t.ray.intersectsSphere(zl)!==!1&&(Hf.copy(i).invert(),kl.copy(t.ray).applyMatrix4(Hf),!(this.boundingBox!==null&&kl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,kl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===pf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;zf.fromBufferAttribute(i.attributes.skinIndex,t),kf.fromBufferAttribute(i.attributes.skinWeight,t),Bf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=kf.getComponent(s);if(a!==0){const o=zf.getComponent(s);Vf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(jv.copy(Bf).applyMatrix4(Vf),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class $v extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ch extends Oe{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Fe,u=Fe,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gf=new Vt,Qv=new Vt;class tm{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Qv;Gf.multiplyMatrices(o,e[s]),Gf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tm(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ch(e,t,t,wn,An);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let a=e[s];a===void 0&&(Tt("Skeleton: No bone found with UUID:",s),a=new $v),this.bones.push(a),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Wf extends je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fr=new Vt,Xf=new Vt,Wa=[],qf=new Mi,tx=new Vt,Ds=new Ln,Is=new bi;class N1 extends Ln{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fr),qf.copy(t.boundingBox).applyMatrix4(Fr),this.boundingBox.union(qf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fr),Is.copy(t.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fr),Xf.multiplyMatrices(n,Fr),Ds.matrixWorld=Xf,Ds.raycast(t,Wa);for(let a=0,o=Wa.length;a<o;a++){const l=Wa[a];l.instanceId=s,l.object=this,e.push(l)}Wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ch(new Float32Array(i*this.count),i,this.count,eh,An));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vl=new D,ex=new D,nx=new Ut;class rr{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vl.subVectors(n,e).cross(ex.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nx.getNormalMatrix(t),i=this.coplanarPoint(Vl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new bi,ix=new gt(.5,.5),Xa=new D;class uh{constructor(t=new rr,e=new rr,n=new rr,i=new rr,s=new rr,a=new rr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],S=s[12],x=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-a,d-u,m-g,T-S).normalize(),i[1].setComponents(c+a,d+u,m+g,T+S).normalize(),i[2].setComponents(c+o,d+h,m+_,T+x).normalize(),i[3].setComponents(c-o,d-h,m-_,T-x).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,d-f,m-p,T-y).normalize();else if(i[4].setComponents(c-l,d-f,m-p,T-y).normalize(),e===qn)i[5].setComponents(c+l,d+f,m+p,T+y).normalize();else if(e===Po)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);const e=ix.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xa.x=i.normal.x>0?t.max.x:t.min.x,Xa.y=i.normal.y>0?t.max.y:t.min.y,Xa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class em extends yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Do=new D,Io=new D,Yf=new Vt,Ns=new Ko,qa=new bi,Hl=new D,Zf=new D;class nm extends Se{constructor(t=new yn,e=new em){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Do.fromBufferAttribute(e,i-1),Io.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Do.distanceTo(Io);t.setAttribute("lineDistance",new $e(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=s,t.ray.intersectsSphere(qa)===!1)return;Yf.copy(i).invert(),Ns.copy(t.ray).applyMatrix4(Yf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),S=u.getX(_+1),x=Ya(this,t,Ns,l,m,S,_);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=Ya(this,t,Ns,l,_,p,g-1);m&&e.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=Ya(this,t,Ns,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=Ya(this,t,Ns,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ya(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(Do.fromBufferAttribute(o,i),Io.fromBufferAttribute(o,s),e.distanceSqToSegment(Do,Io,Hl,Zf)>n)return;Hl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Hl);if(!(c<t.near||c>t.far))return{distance:c,point:Zf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Kf=new D,Jf=new D;class rx extends nm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Kf.fromBufferAttribute(e,i),Jf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kf.distanceTo(Jf);t.setAttribute("lineDistance",new $e(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U1 extends nm{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}let sx=class extends yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};const jf=new Vt,du=new Ko,Za=new bi,Ka=new D;class O1 extends Se{constructor(t=new yn,e=new sx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=s,t.ray.intersectsSphere(Za)===!1)return;jf.copy(i).invert(),du.copy(t.ray).applyMatrix4(jf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Ka.fromBufferAttribute(h,p),$f(Ka,p,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Ka.fromBufferAttribute(h,g),$f(Ka,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $f(r,t,e,n,i,s,a){const o=du.distanceSqToPoint(r);if(o<e){const l=new D;du.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class B1 extends Oe{constructor(t,e,n,i,s=Ne,a=Ne,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class la extends Oe{constructor(t,e,n=jn,i,s,a,o=Fe,l=Fe,c,u=xi,h=1){if(u!==xi&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ax extends la{constructor(t,e=jn,n=vr,i,s,a=Fe,o=Fe,l,c=xi){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class im extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new gt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,i=[],s=[],a=[],o=new D,l=new Vt;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Lt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Lt(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hh extends ei{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ox extends hh{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fh(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Ja=new D,Gl=new fh,Wl=new fh,Xl=new fh;class lx extends ei{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Ja.subVectors(i[0],i[1]).add(i[0]),c=Ja);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Ja.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Gl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),Wl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),Xl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Wl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Xl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Gl.calc(l),Wl.calc(l),Xl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qf(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function cx(r,t){const e=1-r;return e*e*t}function ux(r,t){return 2*(1-r)*r*t}function hx(r,t){return r*r*t}function $s(r,t,e,n){return cx(r,t)+ux(r,e)+hx(r,n)}function fx(r,t){const e=1-r;return e*e*e*t}function dx(r,t){const e=1-r;return 3*e*e*r*t}function px(r,t){return 3*(1-r)*r*r*t}function mx(r,t){return r*r*r*t}function Qs(r,t,e,n,i){return fx(r,t)+dx(r,e)+px(r,n)+mx(r,i)}class rm extends ei{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qs(t,i.x,s.x,a.x,o.x),Qs(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _x extends ei{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qs(t,i.x,s.x,a.x,o.x),Qs(t,i.y,s.y,a.y,o.y),Qs(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sm extends ei{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gx extends ei{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class am extends ei{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set($s(t,i.x,s.x,a.x),$s(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vx extends ei{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set($s(t,i.x,s.x,a.x),$s(t,i.y,s.y,a.y),$s(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class om extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Qf(o,l.x,c.x,u.x,h.x),Qf(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var td=Object.freeze({__proto__:null,ArcCurve:ox,CatmullRomCurve3:lx,CubicBezierCurve:rm,CubicBezierCurve3:_x,EllipseCurve:hh,LineCurve:sm,LineCurve3:gx,QuadraticBezierCurve:am,QuadraticBezierCurve3:vx,SplineCurve:om});class xx extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new td[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new td[i.type]().fromJSON(i))}return this}}class pu extends xx{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new sm(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new am(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new rm(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new om(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new hh(t,e,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _o extends pu{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new pu().fromJSON(i))}return this}}function yx(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=lm(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Ex(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let u=o,h=l;for(let f=e;f<i;f+=e){const d=r[f],g=r[f+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return ca(s,a,e,o,l,c,0),a}function lm(r,t,e,n,i){let s;if(i===Fx(r,t,e,n)>0)for(let a=t;a<e;a+=n)s=ed(a/n|0,r[a],r[a+1],s);else for(let a=e-n;a>=t;a-=n)s=ed(a/n|0,r[a],r[a+1],s);return s&&us(s,s.next)&&(ha(s),s=s.next),s}function xr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(us(e,e.next)||me(e.prev,e,e.next)===0)){if(ha(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ca(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Px(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Mx(r,n,i,s):Sx(r)){t.push(l.i,r.i,c.i),ha(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=bx(xr(r),t),ca(r,t,e,n,i,s,2)):a===2&&Tx(r,t,e,n,i,s):ca(xr(r),t,e,n,i,s,1);break}}}function Sx(r){const t=r.prev,e=r,n=r.next;if(me(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(i,s,a),h=Math.min(o,l,c),f=Math.max(i,s,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Gs(i,o,s,l,a,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mx(r,t,e,n){const i=r.prev,s=r,a=r.next;if(me(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,d=Math.min(o,l,c),g=Math.min(u,h,f),_=Math.max(o,l,c),p=Math.max(u,h,f),m=mu(d,g,t,e,n),S=mu(_,p,t,e,n);let x=r.prevZ,y=r.nextZ;for(;x&&x.z>=m&&y&&y.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&Gs(o,u,l,h,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&Gs(o,u,l,h,c,f,y.x,y.y)&&me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&Gs(o,u,l,h,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&Gs(o,u,l,h,c,f,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bx(r,t){let e=r;do{const n=e.prev,i=e.next.next;!us(n,i)&&um(n,e,e.next,i)&&ua(n,i)&&ua(i,n)&&(t.push(n.i,e.i,i.i),ha(e),ha(e.next),e=r=i),e=e.next}while(e!==r);return xr(e)}function Tx(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ix(a,o)){let l=hm(a,o);a=xr(a,a.next),l=xr(l,l.next),ca(a,t,e,n,i,s,0),ca(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Ex(r,t,e,n){const i=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=lm(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Dx(c))}i.sort(Ax);for(let s=0;s<i.length;s++)e=wx(i[s],e);return e}function Ax(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function wx(r,t){const e=Cx(r,t);if(!e)return t;const n=hm(e,r);return xr(n,n.next),xr(e,e.next)}function Cx(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,a;if(us(r,e))return e;do{if(us(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cm(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const h=Math.abs(i-e.y)/(n-e.x);ua(e,r)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&Rx(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function Rx(r,t){return me(r.prev,r,t.prev)<0&&me(t.next,r,r.next)<0}function Px(r,t,e,n){let i=r;do i.z===0&&(i.z=mu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Lx(i)}function Lx(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,e*=2}while(t>1);return r}function mu(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Dx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function cm(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Gs(r,t,e,n,i,s,a,o){return!(r===a&&t===o)&&cm(r,t,e,n,i,s,a,o)}function Ix(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Nx(r,t)&&(ua(r,t)&&ua(t,r)&&Ux(r,t)&&(me(r.prev,r,t.prev)||me(r,t.prev,t))||us(r,t)&&me(r.prev,r,r.next)>0&&me(t.prev,t,t.next)>0)}function me(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function us(r,t){return r.x===t.x&&r.y===t.y}function um(r,t,e,n){const i=$a(me(r,t,e)),s=$a(me(r,t,n)),a=$a(me(e,n,r)),o=$a(me(e,n,t));return!!(i!==s&&a!==o||i===0&&ja(r,e,t)||s===0&&ja(r,n,t)||a===0&&ja(e,r,n)||o===0&&ja(e,t,n))}function ja(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function $a(r){return r>0?1:r<0?-1:0}function Nx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&um(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ua(r,t){return me(r.prev,r,r.next)<0?me(r,t,r.next)>=0&&me(r,r.prev,t)>=0:me(r,t,r.prev)<0||me(r,r.next,t)<0}function Ux(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function hm(r,t){const e=_u(r.i,r.x,r.y),n=_u(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ed(r,t,e,n){const i=_u(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ha(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _u(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fx(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Ox{static triangulate(t,e,n=2){return yx(t,e,n)}}class Jr{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Jr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];nd(t),id(n,t);let a=t.length;e.forEach(nd);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,id(n,e[l]);const o=Ox.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function nd(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function id(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Jo extends yn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-S,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const x=S+c*m,y=S+c*(m+1),T=S+1+c*(m+1),E=S+1+c*m;d.push(x,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}class fm extends yn{constructor(t=new _o([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new $e(i,3)),this.setAttribute("normal",new $e(s,3)),this.setAttribute("uv",new $e(a,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Jr.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];Jr.isClockWise(S)===!0&&(g[p]=S.reverse())}const _=Jr.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];d=d.concat(S)}for(let p=0,m=d.length;p<m;p++){const S=d[p];i.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=_.length;p<m;p++){const S=_[p],x=S[0]+h,y=S[1]+h,T=S[2]+h;n.push(x,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Bx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new fm(n,t.curveSegments)}}function Bx(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class zx extends Qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kx extends yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class z1 extends kx{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Vx extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hx extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Qa(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Gx(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function rd(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i}function dm(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}class jo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wx extends jo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mf,endingEnd:mf}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case _f:s=t,o=2*e-n;break;case gf:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _f:a=t,l=2*n-e;break;case gf:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*_+.5*g,y=d*p-d*_;for(let T=0;T!==o;++T)s[T]=m*a[u+T]+S*a[c+T]+x*a[l+T]+y*a[h+T];return s}}class Xx extends jo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class qx extends jo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class zn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qa(e,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qa(t.times,Array),values:Qa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Co:e=this.InterpolantFactoryMethodDiscrete;break;case hu:e=this.InterpolantFactoryMethodLinear;break;case gl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return hu;case this.InterpolantFactoryMethodSmooth:return gl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ct("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ct("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ct("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ct("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&cv(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ct("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===gl,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=hu;class ys extends zn{constructor(t,e,n){super(t,e,n)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Co;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class pm extends zn{constructor(t,e,n,i){super(t,e,n,i)}}pm.prototype.ValueTypeName="color";class No extends zn{constructor(t,e,n,i){super(t,e,n,i)}}No.prototype.ValueTypeName="number";class Yx extends jo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let u=c+o;c!==u;c+=4)xs.slerpFlat(s,0,a,c-o,a,c,l);return s}}class $o extends zn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Yx(this.times,this.values,this.getValueSize(),t)}}$o.prototype.ValueTypeName="quaternion";$o.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends zn{constructor(t,e,n){super(t,e,n)}}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Co;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends zn{constructor(t,e,n,i){super(t,e,n,i)}}Uo.prototype.ValueTypeName="vector";class k1{constructor(t="",e=-1,n=[],i=tv){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Kx(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=n.length;s!==a;++s)e.push(zn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Gx(l);l=rd(l,1,u),c=rd(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new No(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(Tt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Ct("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];dm(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let S=0;S!==f[g].morphTargets.length;++S){const x=f[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new No(".morphTargetInfluence["+_+"]",p,m))}l=d.length*a}else{const d=".bones["+e[h].name+"]";n(Uo,d+".position",f,"pos",i),n($o,d+".quaternion",f,"rot",i),n(Uo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Zx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return No;case"vector":case"vector2":case"vector3":case"vector4":return Uo;case"color":return pm;case"quaternion":return $o;case"bool":case"boolean":return ys;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Kx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Zx(r.type);if(r.times===void 0){const e=[],n=[];dm(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const mi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jx{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jx=new Jx;class Sa{constructor(t){this.manager=t!==void 0?t:jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class $x extends Error{constructor(t,e){super(t),this.response=e}}class V1 extends Sa{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=mi.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(li[t]!==void 0){li[t].push({onLoad:e,onProgress:n,onError:i});return}li[t]=[],li[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=li[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,w=u.length;E<w;E++){const R=u[E];R.onProgress&&R.onProgress(T)}m.enqueue(y),S()}},x=>{m.error(x)})}}});return new Response(p)}else throw new $x(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{mi.add(`file:${t}`,c);const u=li[t];delete li[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=li[t];if(u===void 0)throw this.manager.itemError(t),c;delete li[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Or=new WeakMap;class Qx extends Sa{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=mi.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let h=Or.get(a);h===void 0&&(h=[],Or.set(a,h)),h.push({onLoad:e,onError:i})}return a}const o=aa("img");function l(){u(),e&&e(this);const h=Or.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Or.delete(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),mi.remove(`image:${t}`);const f=Or.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Or.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mi.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class H1 extends Sa{constructor(t){super(t)}load(t,e,n,i){const s=new Oe,a=new Qx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class dh extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const ql=new Vt,sd=new D,ad=new D;class ph{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(sd),ad.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ad),e.updateMatrixWorld(),ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ty extends ph{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ls*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class G1 extends dh{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ty}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class ey extends ph{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class W1 extends dh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ey}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class mh extends Jp{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ny extends ph{constructor(){super(new mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X1 extends dh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ny}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class q1{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Yl=new WeakMap;class Y1 extends Sa{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=mi.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{if(Yl.has(a)===!0)i&&i(Yl.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Yl.set(l,c),mi.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});mi.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class iy extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const _h="\\[\\]\\.:\\/",ry=new RegExp("["+_h+"]","g"),gh="[^"+_h+"]",sy="[^"+_h.replace("\\.","")+"]",ay=/((?:WC+[\/:])*)/.source.replace("WC",gh),oy=/(WCOD+)?/.source.replace("WCOD",sy),ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),uy=new RegExp("^"+ay+oy+ly+cy+"$"),hy=["material","materials","bones","map"];class fy{constructor(t,e,n){const i=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ne{constructor(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ne.Composite(t,e,n):new ne(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ry,"")}static parseTrackName(t){const e=uy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);hy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ne.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;Ct("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ne.Composite=fy;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class mm{constructor(t){this.value=t}clone(){return new mm(this.value.clone===void 0?this.value:this.value.clone())}}const od=new gt;class Z1{constructor(t=new gt(1/0,1/0),e=new gt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=od.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,od).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ld=new D,to=new D,Br=new D,zr=new D,Zl=new D,dy=new D,py=new D;class K1{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ld.subVectors(t,this.start),to.subVectors(this.end,this.start);const n=to.dot(to);let s=to.dot(ld)/n;return e&&(s=Lt(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=dy,n=py){const i=10000000000000001e-32;let s,a;const o=this.start,l=t.start,c=this.end,u=t.end;Br.subVectors(c,o),zr.subVectors(u,l),Zl.subVectors(o,l);const h=Br.dot(Br),f=zr.dot(zr),d=zr.dot(Zl);if(h<=i&&f<=i)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(h<=i)s=0,a=d/f,a=Lt(a,0,1);else{const g=Br.dot(Zl);if(f<=i)a=0,s=Lt(-g/h,0,1);else{const _=Br.dot(zr),p=h*f-_*_;p!==0?s=Lt((_*d-g*f)/p,0,1):s=0,a=(_*s+d)/f,a<0?(a=0,s=Lt(-g/h,0,1)):a>1&&(a=1,s=Lt((_-g)/h,0,1))}}return e.copy(o).add(Br.multiplyScalar(s)),n.copy(l).add(zr.multiplyScalar(a)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const eo=new Mi;class J1 extends rx{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new yn;s.setIndex(new je(n,1)),s.setAttribute("position",new je(i,3)),super(s,new em({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&eo.setFromObject(this.object),eo.isEmpty())return;const t=eo.min,e=eo.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class j1{constructor(){this.type="ShapePath",this.color=new kt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new pu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,a){return this.currentPath.bezierCurveTo(t,e,n,i,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const S=[];for(let x=0,y=m.length;x<y;x++){const T=m[x],E=new _o;E.curves=T.curves,S.push(E)}return S}function n(m,S){const x=S.length;let y=!1;for(let T=x-1,E=0;E<x;T=E++){let w=S[T],R=S[E],v=R.x-w.x,b=R.y-w.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(w=S[E],v=-v,R=S[T],b=-b),m.y<w.y||m.y>R.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const P=b*(m.x-w.x)-v*(m.y-w.y);if(P===0)return!0;if(P<0)continue;y=!y}}else{if(m.y!==w.y)continue;if(R.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=R.x)return!0}}return y}const i=Jr.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new _o,l.curves=o.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let m=0,S=s.length;m<S;m++)o=s[m],_=o.getPoints(),a=i(_),a=t?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new _o,p:_},f[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:_[0]});if(!f[0])return e(s);if(f.length>1){let m=!1,S=0;for(let x=0,y=f.length;x<y;x++)h[x]=[];for(let x=0,y=f.length;x<y;x++){const T=d[x];for(let E=0;E<T.length;E++){const w=T[E];let R=!0;for(let v=0;v<f.length;v++)n(w.p,f[v].p)&&(x!==v&&S++,R?(R=!1,h[v].push(w)):m=!0);R&&h[x].push(w)}}S>0&&m===!1&&(d=h)}let p;for(let m=0,S=f.length;m<S;m++){l=f[m].s,c.push(l),p=d[m];for(let x=0,y=p.length;x<y;x++)l.holes.push(p[x].h)}return c}}function cd(r,t,e,n){const i=my(n);switch(e){case zp:return r*t;case eh:return r*t/i.components*i.byteLength;case nh:return r*t/i.components*i.byteLength;case as:return r*t*2/i.components*i.byteLength;case ih:return r*t*2/i.components*i.byteLength;case kp:return r*t*3/i.components*i.byteLength;case wn:return r*t*4/i.components*i.byteLength;case rh:return r*t*4/i.components*i.byteLength;case ho:case fo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Fc:return Math.max(r,16)*Math.max(t,8)/4;case Ic:case Uc:return Math.max(r,8)*Math.max(t,8)/2;case Oc:case Bc:case kc:case Vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zc:case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case qc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case tu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case eu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case nu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case iu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ru:case su:case au:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ou:case lu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case cu:case uu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function my(r){switch(r){case dn:case Up:return{byteLength:1,components:1};case ra:case Fp:case vi:return{byteLength:2,components:1};case Qu:case th:return{byteLength:2,components:4};case jn:case $u:case An:return{byteLength:4,components:1};case Op:case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);function _m(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _y(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,My=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,by=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ry=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Py=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ly=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_S=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ES=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,US=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,EM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:gy,alphahash_pars_fragment:vy,alphamap_fragment:xy,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:My,aomap_fragment:by,aomap_pars_fragment:Ty,batching_pars_vertex:Ey,batching_vertex:Ay,begin_vertex:wy,beginnormal_vertex:Cy,bsdfs:Ry,iridescence_fragment:Py,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:Ny,clipping_planes_vertex:Uy,color_fragment:Fy,color_pars_fragment:Oy,color_pars_vertex:By,color_vertex:zy,common:ky,cube_uv_reflection_fragment:Vy,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Wy,emissivemap_fragment:Xy,emissivemap_pars_fragment:qy,colorspace_fragment:Yy,colorspace_pars_fragment:Zy,envmap_fragment:Ky,envmap_common_pars_fragment:Jy,envmap_pars_fragment:jy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:cS,envmap_vertex:Qy,fog_vertex:tS,fog_pars_vertex:eS,fog_fragment:nS,fog_pars_fragment:iS,gradientmap_pars_fragment:rS,lightmap_pars_fragment:sS,lights_lambert_fragment:aS,lights_lambert_pars_fragment:oS,lights_pars_begin:lS,lights_toon_fragment:uS,lights_toon_pars_fragment:hS,lights_phong_fragment:fS,lights_phong_pars_fragment:dS,lights_physical_fragment:pS,lights_physical_pars_fragment:mS,lights_fragment_begin:_S,lights_fragment_maps:gS,lights_fragment_end:vS,logdepthbuf_fragment:xS,logdepthbuf_pars_fragment:yS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:MS,map_fragment:bS,map_pars_fragment:TS,map_particle_fragment:ES,map_particle_pars_fragment:AS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:CS,morphinstance_vertex:RS,morphcolor_vertex:PS,morphnormal_vertex:LS,morphtarget_pars_vertex:DS,morphtarget_vertex:IS,normal_fragment_begin:NS,normal_fragment_maps:US,normal_pars_fragment:FS,normal_pars_vertex:OS,normal_vertex:BS,normalmap_pars_fragment:zS,clearcoat_normal_fragment_begin:kS,clearcoat_normal_fragment_maps:VS,clearcoat_pars_fragment:HS,iridescence_pars_fragment:GS,opaque_fragment:WS,packing:XS,premultiplied_alpha_fragment:qS,project_vertex:YS,dithering_fragment:ZS,dithering_pars_fragment:KS,roughnessmap_fragment:JS,roughnessmap_pars_fragment:jS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:QS,shadowmap_vertex:tM,shadowmask_pars_fragment:eM,skinbase_vertex:nM,skinning_pars_vertex:iM,skinning_vertex:rM,skinnormal_vertex:sM,specularmap_fragment:aM,specularmap_pars_fragment:oM,tonemapping_fragment:lM,tonemapping_pars_fragment:cM,transmission_fragment:uM,transmission_pars_fragment:hM,uv_pars_fragment:fM,uv_pars_vertex:dM,uv_vertex:pM,worldpos_vertex:mM,background_vert:_M,background_frag:gM,backgroundCube_vert:vM,backgroundCube_frag:xM,cube_vert:yM,cube_frag:SM,depth_vert:MM,depth_frag:bM,distance_vert:TM,distance_frag:EM,equirect_vert:AM,equirect_frag:wM,linedashed_vert:CM,linedashed_frag:RM,meshbasic_vert:PM,meshbasic_frag:LM,meshlambert_vert:DM,meshlambert_frag:IM,meshmatcap_vert:NM,meshmatcap_frag:UM,meshnormal_vert:FM,meshnormal_frag:OM,meshphong_vert:BM,meshphong_frag:zM,meshphysical_vert:kM,meshphysical_frag:VM,meshtoon_vert:HM,meshtoon_frag:GM,points_vert:WM,points_frag:XM,shadow_vert:qM,shadow_frag:YM,sprite_vert:ZM,sprite_frag:KM},lt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Gn={basic:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Xe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Xe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Xe([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Xe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Xe([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Xe([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Xe([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Xe([lt.lights,lt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Gn.physical={uniforms:Xe([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const no={r:0,b:0,g:0},$i=new $n,JM=new Vt;function jM(r,t,e,n,i,s,a){const o=new kt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const T=g(x);T===null?m(o,l):T&&T.isColor&&(m(T,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===Zo)?(u===void 0&&(u=new Ln(new ya(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:cs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler($i)),u.material.toneMapped=qt.getTransfer(T.colorSpace)!==Qt,(h!==T||f!==T.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ln(new Jo(2,2),new Qn({name:"BackgroundMaterial",uniforms:cs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qt.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(no,Kp(r)),n.buffers.color.setClear(no.r,no.g,no.b,y,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:_,addToRenderList:p,dispose:S}}function $M(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(b,P,F,O,V){let G=!1;const z=h(O,F,P);s!==z&&(s=z,c(s.object)),G=d(b,O,F,V),G&&g(b,O,F,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(b,P,F,O),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,P,F){const O=F.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let G=V[P.id];G===void 0&&(G={},V[P.id]=G);let z=G[O];return z===void 0&&(z=f(l()),G[O]=z),z}function f(b){const P=[],F=[],O=[];for(let V=0;V<e;V++)P[V]=0,F[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:b,attributes:{},index:null}}function d(b,P,F,O){const V=s.attributes,G=P.attributes;let z=0;const B=F.getAttributes();for(const q in B)if(B[q].location>=0){const et=V[q];let ct=G[q];if(ct===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function g(b,P,F,O){const V={},G=P.attributes;let z=0;const B=F.getAttributes();for(const q in B)if(B[q].location>=0){let et=G[q];et===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),V[q]=ct,z++}s.attributes=V,s.attributesNum=z,s.index=O}function _(){const b=s.newAttributes;for(let P=0,F=b.length;P<F;P++)b[P]=0}function p(b){m(b,0)}function m(b,P){const F=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;F[b]=1,O[b]===0&&(r.enableVertexAttribArray(b),O[b]=1),V[b]!==P&&(r.vertexAttribDivisor(b,P),V[b]=P)}function S(){const b=s.newAttributes,P=s.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==b[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function x(b,P,F,O,V,G,z){z===!0?r.vertexAttribIPointer(b,P,F,V,G):r.vertexAttribPointer(b,P,F,O,V,G)}function y(b,P,F,O){_();const V=O.attributes,G=F.getAttributes(),z=P.defaultAttributeValues;for(const B in G){const q=G[B];if(q.location>=0){let nt=V[B];if(nt===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const et=nt.normalized,ct=nt.itemSize,Pt=t.get(nt);if(Pt===void 0)continue;const It=Pt.buffer,Gt=Pt.type,Wt=Pt.bytesPerElement,Z=Gt===r.INT||Gt===r.UNSIGNED_INT||nt.gpuType===$u;if(nt.isInterleavedBufferAttribute){const j=nt.data,pt=j.stride,Nt=nt.offset;if(j.isInstancedInterleavedBuffer){for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt,j.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let vt=0;vt<q.locationSize;vt++)p(q.location+vt);r.bindBuffer(r.ARRAY_BUFFER,It);for(let vt=0;vt<q.locationSize;vt++)x(q.location+vt,ct/q.locationSize,Gt,et,pt*Wt,(Nt+ct/q.locationSize*vt)*Wt,Z)}else{if(nt.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)m(q.location+j,nt.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let j=0;j<q.locationSize;j++)p(q.location+j);r.bindBuffer(r.ARRAY_BUFFER,It);for(let j=0;j<q.locationSize;j++)x(q.location+j,ct/q.locationSize,Gt,et,ct*Wt,ct/q.locationSize*j*Wt,Z)}}else if(z!==void 0){const et=z[B];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(q.location,et);break;case 3:r.vertexAttrib3fv(q.location,et);break;case 4:r.vertexAttrib4fv(q.location,et);break;default:r.vertexAttrib1fv(q.location,et)}}}}S()}function T(){R();for(const b in n){const P=n[b];for(const F in P){const O=P[F];for(const V in O)u(O[V].object),delete O[V];delete P[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const F in P){const O=P[F];for(const V in O)u(O[V].object),delete O[V];delete P[F]}delete n[b.id]}function w(b){for(const P in n){const F=n[P];if(F[b.id]===void 0)continue;const O=F[b.id];for(const V in O)u(O[V].object),delete O[V];delete F[b.id]}}function R(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function QM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tb(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==wn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==dn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,maxSamples:T,samples:E}}function eb(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new rr,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,x=S*4;let y=m.clippingState||null;l.value=y,y=u(g,f,x,d);for(let T=0;T!==x;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==_;++x,y+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function nb(r){let t=new WeakMap;function e(a,o){return o===Rc?a.mapping=vr:o===Pc&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rc||o===Pc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $p(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ni=4,ud=[.125,.215,.35,.446,.526,.582],or=20,ib=256,Us=new mh,hd=new kt;let Kl=null,Jl=0,jl=0,$l=!1;const rb=new D;class fd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=rb}=s;Kl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kl,Jl,jl),this._renderer.xr.enabled=$l,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:vi,format:wn,colorSpace:os,depthBuffer:!1},i=dd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sb(s)),this._blurMaterial=ob(s,t,e),this._ggxMaterial=ab(s,t,e)}return i}_compileMaterial(t){const e=new Ln(new yn,t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,n,i,s){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(hd),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new ya,new qp({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy(hd),m=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const T=this._cubeSize;kr(i,y*T,x>2?T:0,T,T),h.setRenderTarget(i),m&&h.render(_,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===vr||t.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Us)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ni?n-g+Ni:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,kr(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,Us),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,kr(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,Us)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*or-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):or;p>or&&Tt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${or}`);const m=[];let S=0;for(let w=0;w<or;++w){const R=w/_,v=Math.exp(-R*R/2);m.push(v),w===0?S+=v:w<p&&(S+=2*v)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],T=3*y*(i>x-Ni?i-x+Ni:0),E=4*(this._cubeSize-y);kr(e,T,E,3*y,2*y),l.setRenderTarget(e),l.render(h,Us)}}function sb(r){const t=[],e=[],n=[];let i=r;const s=r-Ni+1+ud.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ni?l=ud[a-r+Ni-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*d),x=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,R=E>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(v,_*g*E),x.set(f,p*g*E);const b=[E,E,E,E,E,E];y.set(b,m*g*E)}const T=new yn;T.setAttribute("position",new je(S,_)),T.setAttribute("uv",new je(x,p)),T.setAttribute("faceIndex",new je(y,m)),n.push(new Ln(T,null)),i>Ni&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function dd(r,t,e){const n=new Jn(r,t,e);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ab(r,t,e){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ob(r,t,e){const n=new Float32Array(or),i=new D(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function pd(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function md(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lb(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rc||l===Pc,u=l===vr||l===ss;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new fd(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new fd(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cb(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&oa("WebGLRenderer: "+n+" extension not supported."),i}}}function ub(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,y=S.length;x<y;x+=3){const T=S[x+0],E=S[x+1],w=S[x+2];f.push(T,E,E,w,w,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const T=x+0,E=x+1,w=x+2;f.push(T,E,E,w,w,T)}}else return;const p=new(Hp(f)?Zp:Yp)(f,1);p.version=_;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function hb(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S]*_[S];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fb(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Ct("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function db(r,t,e){const n=new WeakMap,i=new he;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*T*4*h),w=new Gp(E,y,T,h);w.type=An,w.needsUpdate=!0;const R=x*4;for(let b=0;b<h;b++){const P=p[b],F=m[b],O=S[b],V=y*T*4*b;for(let G=0;G<P.count;G++){const z=G*R;d===!0&&(i.fromBufferAttribute(P,G),E[V+z+0]=i.x,E[V+z+1]=i.y,E[V+z+2]=i.z,E[V+z+3]=0),g===!0&&(i.fromBufferAttribute(F,G),E[V+z+4]=i.x,E[V+z+5]=i.y,E[V+z+6]=i.z,E[V+z+7]=0),_===!0&&(i.fromBufferAttribute(O,G),E[V+z+8]=i.x,E[V+z+9]=i.y,E[V+z+10]=i.z,E[V+z+11]=O.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new gt(y,T)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function pb(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const mb={[wp]:"LINEAR_TONE_MAPPING",[Cp]:"REINHARD_TONE_MAPPING",[Rp]:"CINEON_TONE_MAPPING",[Pp]:"ACES_FILMIC_TONE_MAPPING",[Dp]:"AGX_TONE_MAPPING",[Ip]:"NEUTRAL_TONE_MAPPING",[Lp]:"CUSTOM_TONE_MAPPING"};function _b(r,t,e,n,i){const s=new Jn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Jn(t,e,{type:vi,depthBuffer:!1,stencilBuffer:!1}),o=new yn;o.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $e([0,2,0,0,2,0],2));const l=new zx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ln(o,l),u=new mh(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,p=[],m=!1;this.setSize=function(S,x){s.setSize(S,x),a.setSize(S,x);for(let y=0;y<p.length;y++){const T=p[y];T.setSize&&T.setSize(S,x)}},this.setEffects=function(S){p=S,m=p.length>0&&p[0].isRenderPass===!0;const x=s.width,y=s.height;for(let T=0;T<p.length;T++){const E=p[T];E.setSize&&E.setSize(x,y)}},this.begin=function(S,x){if(d||S.toneMapping===Kn&&p.length===0)return!1;if(_=x,x!==null){const y=x.width,T=x.height;(s.width!==y||s.height!==T)&&this.setSize(y,T)}return m===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=Kn,!0},this.hasRenderPass=function(){return m},this.end=function(S,x){S.toneMapping=g,d=!0;let y=s,T=a;for(let E=0;E<p.length;E++){const w=p[E];if(w.enabled!==!1&&(w.render(S,T,y,x),w.needsSwap!==!1)){const R=y;y=T,T=R}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},qt.getTransfer(h)===Qt&&(l.defines.SRGB_TRANSFER="");const E=mb[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(_),S.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const gm=new Oe,gu=new la(1,1),vm=new Gp,xm=new Iv,ym=new jp,_d=[],gd=[],vd=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);function Ms(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=_d[i];if(s===void 0&&(s=new Float32Array(i),_d[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Re(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function tl(r,t){let e=gd[t];e===void 0&&(e=new Int32Array(t),gd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function gb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2fv(this.addr,t),Pe(e,t)}}function xb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;r.uniform3fv(this.addr,t),Pe(e,t)}}function yb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4fv(this.addr,t),Pe(e,t)}}function Sb(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;yd.set(n),r.uniformMatrix2fv(this.addr,!1,yd),Pe(e,n)}}function Mb(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;xd.set(n),r.uniformMatrix3fv(this.addr,!1,xd),Pe(e,n)}}function bb(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;vd.set(n),r.uniformMatrix4fv(this.addr,!1,vd),Pe(e,n)}}function Tb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Eb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2iv(this.addr,t),Pe(e,t)}}function Ab(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3iv(this.addr,t),Pe(e,t)}}function wb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4iv(this.addr,t),Pe(e,t)}}function Cb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Rb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2uiv(this.addr,t),Pe(e,t)}}function Pb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3uiv(this.addr,t),Pe(e,t)}}function Lb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4uiv(this.addr,t),Pe(e,t)}}function Db(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gu.compareFunction=e.isReversedDepthBuffer()?ah:sh,s=gu):s=gm,e.setTexture2D(t||s,i)}function Ib(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xm,i)}function Nb(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ym,i)}function Ub(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vm,i)}function Fb(r){switch(r){case 5126:return gb;case 35664:return vb;case 35665:return xb;case 35666:return yb;case 35674:return Sb;case 35675:return Mb;case 35676:return bb;case 5124:case 35670:return Tb;case 35667:case 35671:return Eb;case 35668:case 35672:return Ab;case 35669:case 35673:return wb;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ub}}function Ob(r,t){r.uniform1fv(this.addr,t)}function Bb(r,t){const e=Ms(t,this.size,2);r.uniform2fv(this.addr,e)}function zb(r,t){const e=Ms(t,this.size,3);r.uniform3fv(this.addr,e)}function kb(r,t){const e=Ms(t,this.size,4);r.uniform4fv(this.addr,e)}function Vb(r,t){const e=Ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Hb(r,t){const e=Ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gb(r,t){const e=Ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Wb(r,t){r.uniform1iv(this.addr,t)}function Xb(r,t){r.uniform2iv(this.addr,t)}function qb(r,t){r.uniform3iv(this.addr,t)}function Yb(r,t){r.uniform4iv(this.addr,t)}function Zb(r,t){r.uniform1uiv(this.addr,t)}function Kb(r,t){r.uniform2uiv(this.addr,t)}function Jb(r,t){r.uniform3uiv(this.addr,t)}function jb(r,t){r.uniform4uiv(this.addr,t)}function $b(r,t,e){const n=this.cache,i=t.length,s=tl(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=gu:a=gm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Qb(r,t,e){const n=this.cache,i=t.length,s=tl(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||xm,s[a])}function tT(r,t,e){const n=this.cache,i=t.length,s=tl(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ym,s[a])}function eT(r,t,e){const n=this.cache,i=t.length,s=tl(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||vm,s[a])}function nT(r){switch(r){case 5126:return Ob;case 35664:return Bb;case 35665:return zb;case 35666:return kb;case 35674:return Vb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return Kb;case 36295:return Jb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}class iT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fb(e.type)}}class rT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nT(e.type)}}class sT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function Sd(r,t){r.seq.push(t),r.map[t.id]=t}function aT(r,t,e){const n=r.name,i=n.length;for(Ql.lastIndex=0;;){const s=Ql.exec(n),a=Ql.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Sd(e,c===void 0?new iT(o,r,t):new rT(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new sT(o),Sd(e,h)),e=h}}}class go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);aT(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Md(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const oT=37297;let lT=0;function cT(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const bd=new Ut;function uT(r){qt._getMatrix(bd,qt.workingColorSpace,r);const t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case Ro:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Td(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+cT(r.getShaderSource(t),o)}else return s}function hT(r,t){const e=uT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fT={[wp]:"Linear",[Cp]:"Reinhard",[Rp]:"Cineon",[Pp]:"ACESFilmic",[Dp]:"AgX",[Ip]:"Neutral",[Lp]:"Custom"};function dT(r,t){const e=fT[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const io=new D;function pT(){qt.getLuminanceCoefficients(io);const r=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function _T(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gT(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ws(r){return r!==""}function Ed(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(r){return r.replace(vT,yT)}const xT=new Map;function yT(r,t){let e=Ft[t];if(e===void 0){const n=xT.get(t);if(n!==void 0)e=Ft[n],Tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vu(e)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(r){return r.replace(ST,MT)}function MT(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const bT={[uo]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function TT(r){return bT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ET={[vr]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE_UV"};function AT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ET[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const wT={[ss]:"ENVMAP_MODE_REFRACTION"};function CT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":wT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RT={[Ap]:"ENVMAP_BLENDING_MULTIPLY",[J0]:"ENVMAP_BLENDING_MIX",[j0]:"ENVMAP_BLENDING_ADD"};function PT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":RT[r.combine]||"ENVMAP_BLENDING_NONE"}function LT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function DT(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=TT(e),c=AT(e),u=CT(e),h=PT(e),f=LT(e),d=mT(e),g=_T(s),_=i.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`)):(p=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Kn?dT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,hT("linearToOutputTexel",e.outputColorSpace),pT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),a=vu(a),a=Ed(a,e),a=Ad(a,e),o=vu(o),o=Ed(o,e),o=Ad(o,e),a=wd(a),o=wd(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+p+a,y=S+m+o,T=Md(i,i.VERTEX_SHADER,x),E=Md(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(T)||"",V=i.getShaderInfoLog(E)||"",G=F.trim(),z=O.trim(),B=V.trim();let q=!0,nt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,E);else{const et=Td(i,T,"vertex"),ct=Td(i,E,"fragment");Ct("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+et+`
`+ct)}else G!==""?Tt("WebGLProgram: Program Info Log:",G):(z===""||B==="")&&(nt=!1);nt&&(P.diagnostics={runnable:q,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(T),i.deleteShader(E),R=new go(i,_),v=gT(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,oT)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let IT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new UT(t),e.set(t,n)),n}}class UT{constructor(t){this.id=IT++,this.code=t,this.usedTimes=0}}function FT(r,t,e,n,i,s,a){const o=new Wp,l=new NT,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,b,P,F,O){const V=F.fog,G=O.geometry,z=v.isMeshStandardMaterial?F.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),q=B&&B.mapping===Zo?B.image.height:null,nt=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Tt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=et!==void 0?et.length:0;let Pt=0;G.morphAttributes.position!==void 0&&(Pt=1),G.morphAttributes.normal!==void 0&&(Pt=2),G.morphAttributes.color!==void 0&&(Pt=3);let It,Gt,Wt,Z;if(nt){const jt=Gn[nt];It=jt.vertexShader,Gt=jt.fragmentShader}else It=v.vertexShader,Gt=v.fragmentShader,l.update(v),Wt=l.getVertexShaderID(v),Z=l.getFragmentShaderID(v);const j=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,vt=O.isBatchedMesh===!0,Yt=!!v.map,Le=!!v.matcap,Xt=!!B,Jt=!!v.aoMap,ie=!!v.lightMap,Ot=!!v.bumpMap,be=!!v.normalMap,L=!!v.displacementMap,Te=!!v.emissiveMap,Kt=!!v.metalnessMap,oe=!!v.roughnessMap,yt=v.anisotropy>0,C=v.clearcoat>0,M=v.dispersion>0,N=v.iridescence>0,Y=v.sheen>0,J=v.transmission>0,X=yt&&!!v.anisotropyMap,Mt=C&&!!v.clearcoatMap,rt=C&&!!v.clearcoatNormalMap,xt=C&&!!v.clearcoatRoughnessMap,Rt=N&&!!v.iridescenceMap,Q=N&&!!v.iridescenceThicknessMap,at=Y&&!!v.sheenColorMap,_t=Y&&!!v.sheenRoughnessMap,St=!!v.specularMap,st=!!v.specularColorMap,Bt=!!v.specularIntensityMap,I=J&&!!v.transmissionMap,ht=J&&!!v.thicknessMap,tt=!!v.gradientMap,ft=!!v.alphaMap,$=v.alphaTest>0,K=!!v.alphaHash,it=!!v.extensions;let Dt=Kn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Dt=r.toneMapping);const le={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:It,fragmentShader:Gt,defines:v.defines,customVertexShaderID:Wt,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:vt,batchingColor:vt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:os,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Le,envMap:Xt,envMapMode:Xt&&B.mapping,envMapCubeUVHeight:q,aoMap:Jt,lightMap:ie,bumpMap:Ot,normalMap:be,displacementMap:L,emissiveMap:Te,normalMapObjectSpace:be&&v.normalMapType===nv,normalMapTangentSpace:be&&v.normalMapType===Vp,metalnessMap:Kt,roughnessMap:oe,anisotropy:yt,anisotropyMap:X,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:rt,clearcoatRoughnessMap:xt,dispersion:M,iridescence:N,iridescenceMap:Rt,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:at,sheenRoughnessMap:_t,specularMap:St,specularColorMap:st,specularIntensityMap:Bt,transmission:J,transmissionMap:I,thicknessMap:ht,gradientMap:tt,opaque:v.transparent===!1&&v.blending===Zr&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:$,alphaHash:K,combine:v.combine,mapUv:Yt&&_(v.map.channel),aoMapUv:Jt&&_(v.aoMap.channel),lightMapUv:ie&&_(v.lightMap.channel),bumpMapUv:Ot&&_(v.bumpMap.channel),normalMapUv:be&&_(v.normalMap.channel),displacementMapUv:L&&_(v.displacementMap.channel),emissiveMapUv:Te&&_(v.emissiveMap.channel),metalnessMapUv:Kt&&_(v.metalnessMap.channel),roughnessMapUv:oe&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:Mt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(v.sheenRoughnessMap.channel),specularMapUv:St&&_(v.specularMap.channel),specularColorMapUv:st&&_(v.specularColorMap.channel),specularIntensityMapUv:Bt&&_(v.specularIntensityMap.channel),transmissionMapUv:I&&_(v.transmissionMap.channel),thicknessMapUv:ht&&_(v.thicknessMap.channel),alphaMapUv:ft&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||yt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Yt||ft),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&qt.getTransfer(v.map.colorSpace)===Qt,decodeVideoTextureEmissive:Te&&v.emissiveMap.isVideoTexture===!0&&qt.getTransfer(v.emissiveMap.colorSpace)===Qt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===Je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(S(b,v),x(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const b=g[v.type];let P;if(b){const F=Gn[b];P=qv.clone(F.uniforms)}else P=v.uniforms;return P}function T(v,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new DT(r,b,v,s),u.push(P),h.set(b,P)),P}function E(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){l.remove(v)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:R}}function OT(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function BT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Rd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),t++,m}function o(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||BT),n.length>1&&n.sort(f||Rd),i.length>1&&i.sort(f||Rd)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function zT(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Pd,r.set(n,[a])):i>=s.length?(a=new Pd,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function kT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new kt};break;case"SpotLight":e={position:new D,direction:new D,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function VT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let HT=0;function GT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function WT(r){const t=new kT,e=VT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Vt,a=new Vt;function o(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,S=0,x=0,y=0,T=0,E=0,w=0;c.sort(GT);for(let v=0,b=c.length;v<b;v++){const P=c[v],F=P.color,O=P.intensity,V=P.distance;let G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===as?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=F.r*O,h+=F.g*O,f+=F.b*O;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],O);w++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,q=e.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=z,d++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(F).multiplyScalar(O),z.distance=V,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const B=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=B.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=G,y++}_++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(F).multiplyScalar(O),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=z,p++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const B=P.shadow,q=e.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=z,g++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(O),z.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[m]=z,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==T||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=T,R.numLightProbes=w,n.version=HT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Ld(r){const t=new WT(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function XT(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Ld(r),t.set(i,[o])):s>=a.length?(o=new Ld(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const qT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZT=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],KT=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Dd=new Vt,Fs=new D,tc=new D;function JT(r,t,e){let n=new uh;const i=new gt,s=new gt,a=new he,o=new Vx,l=new Hx,c={},u=e.maxTextureSize,h={[ki]:Je,[Je]:ki,[di]:di},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:qT,fragmentShader:YT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ln(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let m=this.type;this.render=function(E,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;E.type===L0&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=uo);const v=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(_i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==this.type;O&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(G=>G.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,G=E.length;V<G;V++){const z=E[V],B=z.shadow;if(B===void 0){Tt("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const q=B.getFrameExtents();if(i.multiply(q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,B.mapSize.y=s.y)),B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Hs){if(z.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Jn(i.x,i.y,{format:as,type:vi,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new la(i.x,i.y,An),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=xi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fe,B.map.depthTexture.magFilter=Fe}else{z.isPointLight?(B.map=new $p(i.x),B.map.depthTexture=new ax(i.x,jn)):(B.map=new Jn(i.x,i.y),B.map.depthTexture=new la(i.x,i.y,jn)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=xi;const et=r.state.buffers.depth.getReversed();this.type===uo?(B.map.depthTexture.compareFunction=et?ah:sh,B.map.depthTexture.minFilter=Ne,B.map.depthTexture.magFilter=Ne):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fe,B.map.depthTexture.magFilter=Fe)}B.camera.updateProjectionMatrix()}const nt=B.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<nt;et++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,et),r.clear();else{et===0&&(r.setRenderTarget(B.map),r.clear());const ct=B.getViewport(et);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),F.viewport(a)}if(z.isPointLight){const ct=B.camera,Pt=B.matrix,It=z.distance||ct.far;It!==ct.far&&(ct.far=It,ct.updateProjectionMatrix()),Fs.setFromMatrixPosition(z.matrixWorld),ct.position.copy(Fs),tc.copy(ct.position),tc.add(ZT[et]),ct.up.copy(KT[et]),ct.lookAt(tc),ct.updateMatrixWorld(),Pt.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Dd.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Dd,ct.coordinateSystem,ct.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),y(w,R,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Hs&&S(B,R),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(v,b,P)};function S(E,w){const R=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(i.x,i.y,{format:as,type:vi})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,R,d,_,null)}function x(E,w,R,v){let b=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=b.uuid,O=w.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let G=V[O];G===void 0&&(G=b.clone(),V[O]=G,w.addEventListener("dispose",T)),b=G}if(b.visible=w.visible,b.wireframe=w.wireframe,v===Hs?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=r.properties.get(b);F.light=R}return b}function y(E,w,R,v,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Hs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=t.update(E),V=E.material;if(Array.isArray(V)){const G=O.groups;for(let z=0,B=G.length;z<B;z++){const q=G[z],nt=V[q.materialIndex];if(nt&&nt.visible){const et=x(E,nt,v,b);E.onBeforeShadow(r,E,w,R,O,et,q),r.renderBufferDirect(R,null,O,et,E,q),E.onAfterShadow(r,E,w,R,O,et,q)}}}else if(V.visible){const G=x(E,V,v,b);E.onBeforeShadow(r,E,w,R,O,G,null),r.renderBufferDirect(R,null,O,G,E,null),E.onAfterShadow(r,E,w,R,O,G,null)}}const F=E.children;for(let O=0,V=F.length;O<V;O++)y(F[O],w,R,v,b)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const v=c[R],b=E.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const jT={[Mc]:bc,[Tc]:wc,[Ec]:Cc,[rs]:Ac,[bc]:Mc,[wc]:Tc,[Cc]:Ec,[Ac]:rs};function $T(r,t){function e(){let I=!1;const ht=new he;let tt=null;const ft=new he(0,0,0,0);return{setMask:function($){tt!==$&&!I&&(r.colorMask($,$,$,$),tt=$)},setLocked:function($){I=$},setClear:function($,K,it,Dt,le){le===!0&&($*=Dt,K*=Dt,it*=Dt),ht.set($,K,it,Dt),ft.equals(ht)===!1&&(r.clearColor($,K,it,Dt),ft.copy(ht))},reset:function(){I=!1,tt=null,ft.set(-1,0,0,0)}}}function n(){let I=!1,ht=!1,tt=null,ft=null,$=null;return{setReversed:function(K){if(ht!==K){const it=t.get("EXT_clip_control");K?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),ht=K;const Dt=$;$=null,this.setClear(Dt)}},getReversed:function(){return ht},setTest:function(K){K?j(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(K){tt!==K&&!I&&(r.depthMask(K),tt=K)},setFunc:function(K){if(ht&&(K=jT[K]),ft!==K){switch(K){case Mc:r.depthFunc(r.NEVER);break;case bc:r.depthFunc(r.ALWAYS);break;case Tc:r.depthFunc(r.LESS);break;case rs:r.depthFunc(r.LEQUAL);break;case Ec:r.depthFunc(r.EQUAL);break;case Ac:r.depthFunc(r.GEQUAL);break;case wc:r.depthFunc(r.GREATER);break;case Cc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=K}},setLocked:function(K){I=K},setClear:function(K){$!==K&&(ht&&(K=1-K),r.clearDepth(K),$=K)},reset:function(){I=!1,tt=null,ft=null,$=null,ht=!1}}}function i(){let I=!1,ht=null,tt=null,ft=null,$=null,K=null,it=null,Dt=null,le=null;return{setTest:function(jt){I||(jt?j(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(jt){ht!==jt&&!I&&(r.stencilMask(jt),ht=jt)},setFunc:function(jt,kn,ni){(tt!==jt||ft!==kn||$!==ni)&&(r.stencilFunc(jt,kn,ni),tt=jt,ft=kn,$=ni)},setOp:function(jt,kn,ni){(K!==jt||it!==kn||Dt!==ni)&&(r.stencilOp(jt,kn,ni),K=jt,it=kn,Dt=ni)},setLocked:function(jt){I=jt},setClear:function(jt){le!==jt&&(r.clearStencil(jt),le=jt)},reset:function(){I=!1,ht=null,tt=null,ft=null,$=null,K=null,it=null,Dt=null,le=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,S=null,x=null,y=null,T=null,E=null,w=new kt(0,0,0),R=0,v=!1,b=null,P=null,F=null,O=null,V=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=B>=2);let nt=null,et={};const ct=r.getParameter(r.SCISSOR_BOX),Pt=r.getParameter(r.VIEWPORT),It=new he().fromArray(ct),Gt=new he().fromArray(Pt);function Wt(I,ht,tt,ft){const $=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<tt;it++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(ht+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return K}const Z={};Z[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(r.DEPTH_TEST),a.setFunc(rs),Ot(!1),be(uf),j(r.CULL_FACE),Jt(_i);function j(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function pt(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Nt(I,ht){return h[I]!==ht?(r.bindFramebuffer(I,ht),h[I]=ht,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ht),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function vt(I,ht){let tt=d,ft=!1;if(I){tt=f.get(ht),tt===void 0&&(tt=[],f.set(ht,tt));const $=I.textures;if(tt.length!==$.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let K=0,it=$.length;K<it;K++)tt[K]=r.COLOR_ATTACHMENT0+K;tt.length=$.length,ft=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,ft=!0);ft&&r.drawBuffers(tt)}function Yt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Le={[ar]:r.FUNC_ADD,[I0]:r.FUNC_SUBTRACT,[N0]:r.FUNC_REVERSE_SUBTRACT};Le[U0]=r.MIN,Le[F0]=r.MAX;const Xt={[O0]:r.ZERO,[B0]:r.ONE,[z0]:r.SRC_COLOR,[yc]:r.SRC_ALPHA,[X0]:r.SRC_ALPHA_SATURATE,[G0]:r.DST_COLOR,[V0]:r.DST_ALPHA,[k0]:r.ONE_MINUS_SRC_COLOR,[Sc]:r.ONE_MINUS_SRC_ALPHA,[W0]:r.ONE_MINUS_DST_COLOR,[H0]:r.ONE_MINUS_DST_ALPHA,[q0]:r.CONSTANT_COLOR,[Y0]:r.ONE_MINUS_CONSTANT_COLOR,[Z0]:r.CONSTANT_ALPHA,[K0]:r.ONE_MINUS_CONSTANT_ALPHA};function Jt(I,ht,tt,ft,$,K,it,Dt,le,jt){if(I===_i){_===!0&&(pt(r.BLEND),_=!1);return}if(_===!1&&(j(r.BLEND),_=!0),I!==D0){if(I!==p||jt!==v){if((m!==ar||y!==ar)&&(r.blendEquation(r.FUNC_ADD),m=ar,y=ar),jt)switch(I){case Zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hf:r.blendFunc(r.ONE,r.ONE);break;case ff:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case df:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",I);break}else switch(I){case Zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ff:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case df:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",I);break}S=null,x=null,T=null,E=null,w.set(0,0,0),R=0,p=I,v=jt}return}$=$||ht,K=K||tt,it=it||ft,(ht!==m||$!==y)&&(r.blendEquationSeparate(Le[ht],Le[$]),m=ht,y=$),(tt!==S||ft!==x||K!==T||it!==E)&&(r.blendFuncSeparate(Xt[tt],Xt[ft],Xt[K],Xt[it]),S=tt,x=ft,T=K,E=it),(Dt.equals(w)===!1||le!==R)&&(r.blendColor(Dt.r,Dt.g,Dt.b,le),w.copy(Dt),R=le),p=I,v=!1}function ie(I,ht){I.side===di?pt(r.CULL_FACE):j(r.CULL_FACE);let tt=I.side===Je;ht&&(tt=!tt),Ot(tt),I.blending===Zr&&I.transparent===!1?Jt(_i):Jt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ft=I.stencilWrite;o.setTest(ft),ft&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Te(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(I){b!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),b=I)}function be(I){I!==R0?(j(r.CULL_FACE),I!==P&&(I===uf?r.cullFace(r.BACK):I===P0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),P=I}function L(I){I!==F&&(z&&r.lineWidth(I),F=I)}function Te(I,ht,tt){I?(j(r.POLYGON_OFFSET_FILL),(O!==ht||V!==tt)&&(r.polygonOffset(ht,tt),O=ht,V=tt)):pt(r.POLYGON_OFFSET_FILL)}function Kt(I){I?j(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function oe(I){I===void 0&&(I=r.TEXTURE0+G-1),nt!==I&&(r.activeTexture(I),nt=I)}function yt(I,ht,tt){tt===void 0&&(nt===null?tt=r.TEXTURE0+G-1:tt=nt);let ft=et[tt];ft===void 0&&(ft={type:void 0,texture:void 0},et[tt]=ft),(ft.type!==I||ft.texture!==ht)&&(nt!==tt&&(r.activeTexture(tt),nt=tt),r.bindTexture(I,ht||Z[I]),ft.type=I,ft.texture=ht)}function C(){const I=et[nt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function Y(){try{r.texSubImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function J(){try{r.texSubImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function rt(){try{r.texStorage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function xt(){try{r.texStorage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function Rt(){try{r.texImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function Q(){try{r.texImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function at(I){It.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),It.copy(I))}function _t(I){Gt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Gt.copy(I))}function St(I,ht){let tt=c.get(ht);tt===void 0&&(tt=new WeakMap,c.set(ht,tt));let ft=tt.get(I);ft===void 0&&(ft=r.getUniformBlockIndex(ht,I.name),tt.set(I,ft))}function st(I,ht){const ft=c.get(ht).get(I);l.get(ht)!==ft&&(r.uniformBlockBinding(ht,ft,I.__bindingPointIndex),l.set(ht,ft))}function Bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},nt=null,et={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,S=null,x=null,y=null,T=null,E=null,w=new kt(0,0,0),R=0,v=!1,b=null,P=null,F=null,O=null,V=null,It.set(0,0,r.canvas.width,r.canvas.height),Gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:pt,bindFramebuffer:Nt,drawBuffers:vt,useProgram:Yt,setBlending:Jt,setMaterial:ie,setFlipSided:Ot,setCullFace:be,setLineWidth:L,setPolygonOffset:Te,setScissorTest:Kt,activeTexture:oe,bindTexture:yt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:N,texImage2D:Rt,texImage3D:Q,updateUBOMapping:St,uniformBlockBinding:st,texStorage2D:rt,texStorage3D:xt,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:at,viewport:_t,reset:Bt}}function QT(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return d?new OffscreenCanvas(C,M):aa("canvas")}function _(C,M,N){let Y=1;const J=yt(C);if((J.width>N||J.height>N)&&(Y=N/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*J.width),Mt=Math.floor(Y*J.height);h===void 0&&(h=g(X,Mt));const rt=M?g(X,Mt):h;return rt.width=X,rt.height=Mt,rt.getContext("2d").drawImage(C,0,0,X,Mt),Tt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Mt+")."),rt}else return"data"in C&&Tt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(C,M,N,Y,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=M;if(M===r.RED&&(N===r.FLOAT&&(X=r.R32F),N===r.HALF_FLOAT&&(X=r.R16F),N===r.UNSIGNED_BYTE&&(X=r.R8)),M===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.R8UI),N===r.UNSIGNED_SHORT&&(X=r.R16UI),N===r.UNSIGNED_INT&&(X=r.R32UI),N===r.BYTE&&(X=r.R8I),N===r.SHORT&&(X=r.R16I),N===r.INT&&(X=r.R32I)),M===r.RG&&(N===r.FLOAT&&(X=r.RG32F),N===r.HALF_FLOAT&&(X=r.RG16F),N===r.UNSIGNED_BYTE&&(X=r.RG8)),M===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RG8UI),N===r.UNSIGNED_SHORT&&(X=r.RG16UI),N===r.UNSIGNED_INT&&(X=r.RG32UI),N===r.BYTE&&(X=r.RG8I),N===r.SHORT&&(X=r.RG16I),N===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGB8UI),N===r.UNSIGNED_SHORT&&(X=r.RGB16UI),N===r.UNSIGNED_INT&&(X=r.RGB32UI),N===r.BYTE&&(X=r.RGB8I),N===r.SHORT&&(X=r.RGB16I),N===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),N===r.UNSIGNED_INT&&(X=r.RGBA32UI),N===r.BYTE&&(X=r.RGBA8I),N===r.SHORT&&(X=r.RGBA16I),N===r.INT&&(X=r.RGBA32I)),M===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),M===r.RGBA){const Mt=J?Ro:qt.getTransfer(Y);N===r.FLOAT&&(X=r.RGBA32F),N===r.HALF_FLOAT&&(X=r.RGBA16F),N===r.UNSIGNED_BYTE&&(X=Mt===Qt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(C,M){let N;return C?M===null||M===jn||M===sa?N=r.DEPTH24_STENCIL8:M===An?N=r.DEPTH32F_STENCIL8:M===ra&&(N=r.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jn||M===sa?N=r.DEPTH_COMPONENT24:M===An?N=r.DEPTH_COMPONENT32F:M===ra&&(N=r.DEPTH_COMPONENT16),N}function T(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fe&&C.minFilter!==Ne?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){const M=C.target;M.removeEventListener("dispose",E),R(M),M.isVideoTexture&&u.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),b(M)}function R(C){const M=n.get(C);if(M.__webglInit===void 0)return;const N=C.source,Y=f.get(N);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(C),Object.keys(Y).length===0&&f.delete(N)}n.remove(C)}function v(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const N=C.source,Y=f.get(N);delete Y[M.__cacheKey],a.memory.textures--}function b(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const N=C.textures;for(let Y=0,J=N.length;Y<J;Y++){const X=n.get(N[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(C)}let P=0;function F(){P=0}function O(){const C=P;return C>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const N=n.get(C);if(C.isVideoTexture&&Kt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const Y=C.image;if(Y===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(N,C,M);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+M)}function z(C,M){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Z(N,C,M);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+M)}function B(C,M){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Z(N,C,M);return}e.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+M)}function q(C,M){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){j(N,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+M)}const nt={[Lc]:r.REPEAT,[pi]:r.CLAMP_TO_EDGE,[Dc]:r.MIRRORED_REPEAT},et={[Fe]:r.NEAREST,[Q0]:r.NEAREST_MIPMAP_NEAREST,[Ea]:r.NEAREST_MIPMAP_LINEAR,[Ne]:r.LINEAR,[_l]:r.LINEAR_MIPMAP_NEAREST,[ur]:r.LINEAR_MIPMAP_LINEAR},ct={[iv]:r.NEVER,[lv]:r.ALWAYS,[rv]:r.LESS,[sh]:r.LEQUAL,[sv]:r.EQUAL,[ah]:r.GEQUAL,[av]:r.GREATER,[ov]:r.NOTEQUAL};function Pt(C,M){if(M.type===An&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ne||M.magFilter===_l||M.magFilter===Ea||M.magFilter===ur||M.minFilter===Ne||M.minFilter===_l||M.minFilter===Ea||M.minFilter===ur)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,nt[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,nt[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,nt[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,et[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,et[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fe||M.minFilter!==Ea&&M.minFilter!==ur||M.type===An&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function It(C,M){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));const Y=M.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const X=V(M);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[X].usedTimes++;const Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&v(M)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return N}function Gt(C,M,N){return Math.floor(Math.floor(C/N)/M)}function Wt(C,M,N,Y){const X=C.updateRanges;if(X.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,N,Y,M.data);else{X.sort((Q,at)=>Q.start-at.start);let Mt=0;for(let Q=1;Q<X.length;Q++){const at=X[Mt],_t=X[Q],St=at.start+at.count,st=Gt(_t.start,M.width,4),Bt=Gt(at.start,M.width,4);_t.start<=St+1&&st===Bt&&Gt(_t.start+_t.count-1,M.width,4)===st?at.count=Math.max(at.count,_t.start+_t.count-at.start):(++Mt,X[Mt]=_t)}X.length=Mt+1;const rt=r.getParameter(r.UNPACK_ROW_LENGTH),xt=r.getParameter(r.UNPACK_SKIP_PIXELS),Rt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Q=0,at=X.length;Q<at;Q++){const _t=X[Q],St=Math.floor(_t.start/4),st=Math.ceil(_t.count/4),Bt=St%M.width,I=Math.floor(St/M.width),ht=st,tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Bt),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),e.texSubImage2D(r.TEXTURE_2D,0,Bt,I,ht,tt,N,Y,M.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Rt)}}function Z(C,M,N){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const J=It(C,M),X=M.source;e.bindTexture(Y,C.__webglTexture,r.TEXTURE0+N);const Mt=n.get(X);if(X.version!==Mt.__version||J===!0){e.activeTexture(r.TEXTURE0+N);const rt=qt.getPrimaries(qt.workingColorSpace),xt=M.colorSpace===Ii?null:qt.getPrimaries(M.colorSpace),Rt=M.colorSpace===Ii||rt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Q=_(M.image,!1,i.maxTextureSize);Q=oe(M,Q);const at=s.convert(M.format,M.colorSpace),_t=s.convert(M.type);let St=x(M.internalFormat,at,_t,M.colorSpace,M.isVideoTexture);Pt(Y,M);let st;const Bt=M.mipmaps,I=M.isVideoTexture!==!0,ht=Mt.__version===void 0||J===!0,tt=X.dataReady,ft=T(M,Q);if(M.isDepthTexture)St=y(M.format===hr,M.type),ht&&(I?e.texStorage2D(r.TEXTURE_2D,1,St,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,St,Q.width,Q.height,0,at,_t,null));else if(M.isDataTexture)if(Bt.length>0){I&&ht&&e.texStorage2D(r.TEXTURE_2D,ft,St,Bt[0].width,Bt[0].height);for(let $=0,K=Bt.length;$<K;$++)st=Bt[$],I?tt&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,st.width,st.height,at,_t,st.data):e.texImage2D(r.TEXTURE_2D,$,St,st.width,st.height,0,at,_t,st.data);M.generateMipmaps=!1}else I?(ht&&e.texStorage2D(r.TEXTURE_2D,ft,St,Q.width,Q.height),tt&&Wt(M,Q,at,_t)):e.texImage2D(r.TEXTURE_2D,0,St,Q.width,Q.height,0,at,_t,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,St,Bt[0].width,Bt[0].height,Q.depth);for(let $=0,K=Bt.length;$<K;$++)if(st=Bt[$],M.format!==wn)if(at!==null)if(I){if(tt)if(M.layerUpdates.size>0){const it=cd(st.width,st.height,M.format,M.type);for(const Dt of M.layerUpdates){const le=st.data.subarray(Dt*it/st.data.BYTES_PER_ELEMENT,(Dt+1)*it/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Dt,st.width,st.height,1,at,le)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,st.width,st.height,Q.depth,at,st.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,St,st.width,st.height,Q.depth,0,st.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?tt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,st.width,st.height,Q.depth,at,_t,st.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,St,st.width,st.height,Q.depth,0,at,_t,st.data)}else{I&&ht&&e.texStorage2D(r.TEXTURE_2D,ft,St,Bt[0].width,Bt[0].height);for(let $=0,K=Bt.length;$<K;$++)st=Bt[$],M.format!==wn?at!==null?I?tt&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,st.width,st.height,at,st.data):e.compressedTexImage2D(r.TEXTURE_2D,$,St,st.width,st.height,0,st.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?tt&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,st.width,st.height,at,_t,st.data):e.texImage2D(r.TEXTURE_2D,$,St,st.width,st.height,0,at,_t,st.data)}else if(M.isDataArrayTexture)if(I){if(ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,St,Q.width,Q.height,Q.depth),tt)if(M.layerUpdates.size>0){const $=cd(Q.width,Q.height,M.format,M.type);for(const K of M.layerUpdates){const it=Q.data.subarray(K*$/Q.data.BYTES_PER_ELEMENT,(K+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,at,_t,it)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,_t,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,St,Q.width,Q.height,Q.depth,0,at,_t,Q.data);else if(M.isData3DTexture)I?(ht&&e.texStorage3D(r.TEXTURE_3D,ft,St,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,_t,Q.data)):e.texImage3D(r.TEXTURE_3D,0,St,Q.width,Q.height,Q.depth,0,at,_t,Q.data);else if(M.isFramebufferTexture){if(ht)if(I)e.texStorage2D(r.TEXTURE_2D,ft,St,Q.width,Q.height);else{let $=Q.width,K=Q.height;for(let it=0;it<ft;it++)e.texImage2D(r.TEXTURE_2D,it,St,$,K,0,at,_t,null),$>>=1,K>>=1}}else if(Bt.length>0){if(I&&ht){const $=yt(Bt[0]);e.texStorage2D(r.TEXTURE_2D,ft,St,$.width,$.height)}for(let $=0,K=Bt.length;$<K;$++)st=Bt[$],I?tt&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,at,_t,st):e.texImage2D(r.TEXTURE_2D,$,St,at,_t,st);M.generateMipmaps=!1}else if(I){if(ht){const $=yt(Q);e.texStorage2D(r.TEXTURE_2D,ft,St,$.width,$.height)}tt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,_t,Q)}else e.texImage2D(r.TEXTURE_2D,0,St,at,_t,Q);p(M)&&m(Y),Mt.__version=X.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,N){if(M.image.length!==6)return;const Y=It(C,M),J=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const X=n.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(r.TEXTURE0+N);const Mt=qt.getPrimaries(qt.workingColorSpace),rt=M.colorSpace===Ii?null:qt.getPrimaries(M.colorSpace),xt=M.colorSpace===Ii||Mt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Rt=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,at=[];for(let K=0;K<6;K++)!Rt&&!Q?at[K]=_(M.image[K],!0,i.maxCubemapSize):at[K]=Q?M.image[K].image:M.image[K],at[K]=oe(M,at[K]);const _t=at[0],St=s.convert(M.format,M.colorSpace),st=s.convert(M.type),Bt=x(M.internalFormat,St,st,M.colorSpace),I=M.isVideoTexture!==!0,ht=X.__version===void 0||Y===!0,tt=J.dataReady;let ft=T(M,_t);Pt(r.TEXTURE_CUBE_MAP,M);let $;if(Rt){I&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Bt,_t.width,_t.height);for(let K=0;K<6;K++){$=at[K].mipmaps;for(let it=0;it<$.length;it++){const Dt=$[it];M.format!==wn?St!==null?I?tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Dt.width,Dt.height,St,Dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Bt,Dt.width,Dt.height,0,Dt.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Dt.width,Dt.height,St,st,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Bt,Dt.width,Dt.height,0,St,st,Dt.data)}}}else{if($=M.mipmaps,I&&ht){$.length>0&&ft++;const K=yt(at[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,at[K].width,at[K].height,St,st,at[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,at[K].width,at[K].height,0,St,st,at[K].data);for(let it=0;it<$.length;it++){const le=$[it].image[K].image;I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,le.width,le.height,St,st,le.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Bt,le.width,le.height,0,St,st,le.data)}}else{I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,st,at[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,St,st,at[K]);for(let it=0;it<$.length;it++){const Dt=$[it];I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,St,st,Dt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Bt,St,st,Dt.image[K])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),X.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function pt(C,M,N,Y,J,X){const Mt=s.convert(N.format,N.colorSpace),rt=s.convert(N.type),xt=x(N.internalFormat,Mt,rt,N.colorSpace),Rt=n.get(M),Q=n.get(N);if(Q.__renderTarget=M,!Rt.__hasExternalTextures){const at=Math.max(1,M.width>>X),_t=Math.max(1,M.height>>X);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,X,xt,at,_t,M.depth,0,Mt,rt,null):e.texImage2D(J,X,xt,at,_t,0,Mt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Te(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,Q.__webglTexture,0,L(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,Q.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(C,M,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=y(M.stencilBuffer,J),Mt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(M),X,M.width,M.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(M),X,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,X,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,C)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const X=Y[J],Mt=s.convert(X.format,X.colorSpace),rt=s.convert(X.type),xt=x(X.internalFormat,Mt,rt,X.colorSpace);Te(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(M),xt,M.width,M.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(M),xt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,xt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(C,M,N){const Y=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,M.depthTexture);const Rt=s.convert(M.depthTexture.format),Q=s.convert(M.depthTexture.type);let at;M.depthTexture.format===xi?at=r.DEPTH_COMPONENT24:M.depthTexture.format===hr&&(at=r.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,at,M.width,M.height,0,Rt,Q,null)}}else G(M.depthTexture,0);const X=J.__webglTexture,Mt=L(M),rt=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,xt=M.depthTexture.format===hr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===xi)Te(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,rt,X,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,xt,rt,X,0);else if(M.depthTexture.format===hr)Te(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,rt,X,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,xt,rt,X,0);else throw new Error("Unknown depthTexture format")}function Yt(C){const M=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)vt(M.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?vt(M.__webglFramebuffer[0],C,0):vt(M.__webglFramebuffer,C,0)}else if(N){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),Nt(M.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Nt(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,M,N){const Y=n.get(C);M!==void 0&&pt(Y.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Yt(C)}function Xt(C){const M=C.texture,N=n.get(C),Y=n.get(M);C.addEventListener("dispose",w);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let xt=0;xt<M.mipmaps.length;xt++)N.__webglFramebuffer[rt][xt]=r.createFramebuffer()}else N.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)N.__webglFramebuffer[rt]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let rt=0,xt=J.length;rt<xt;rt++){const Rt=n.get(J[rt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Te(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const xt=J[rt];N.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);const Rt=s.convert(xt.format,xt.colorSpace),Q=s.convert(xt.type),at=x(xt.internalFormat,Rt,Q,xt.colorSpace,C.isXRRenderTarget===!0),_t=L(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,at,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)pt(N.__webglFramebuffer[rt][xt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt);else pt(N.__webglFramebuffer[rt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let rt=0,xt=J.length;rt<xt;rt++){const Rt=J[rt],Q=n.get(Rt);let at=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),Pt(at,Rt),pt(N.__webglFramebuffer,C,Rt,r.COLOR_ATTACHMENT0+rt,at,0),p(Rt)&&m(at)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Pt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)pt(N.__webglFramebuffer[xt],C,M,r.COLOR_ATTACHMENT0,rt,xt);else pt(N.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,rt,0);p(M)&&m(rt),e.unbindTexture()}C.depthBuffer&&Yt(C)}function Jt(C){const M=C.textures;for(let N=0,Y=M.length;N<Y;N++){const J=M[N];if(p(J)){const X=S(C),Mt=n.get(J).__webglTexture;e.bindTexture(X,Mt),m(X),e.unbindTexture()}}}const ie=[],Ot=[];function be(C){if(C.samples>0){if(Te(C)===!1){const M=C.textures,N=C.width,Y=C.height;let J=r.COLOR_BUFFER_BIT;const X=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(C),rt=M.length>1;if(rt)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const xt=C.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);const Q=n.get(M[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,N,Y,0,0,N,Y,J,r.NEAREST),l===!0&&(ie.length=0,Ot.length=0,ie.push(r.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(X),Ot.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);const Q=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function L(C){return Math.min(i.maxSamples,C.samples)}function Te(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Kt(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function oe(C,M){const N=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==os&&N!==Ii&&(qt.getTransfer(N)===Qt?(Y!==wn||J!==dn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",N)),M}function yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Le,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tE(r,t){function e(n,i=Ii){let s;const a=qt.getTransfer(i);if(n===dn)return r.UNSIGNED_BYTE;if(n===Qu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===th)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Op)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Bp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Up)return r.BYTE;if(n===Fp)return r.SHORT;if(n===ra)return r.UNSIGNED_SHORT;if(n===$u)return r.INT;if(n===jn)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===vi)return r.HALF_FLOAT;if(n===zp)return r.ALPHA;if(n===kp)return r.RGB;if(n===wn)return r.RGBA;if(n===xi)return r.DEPTH_COMPONENT;if(n===hr)return r.DEPTH_STENCIL;if(n===eh)return r.RED;if(n===nh)return r.RED_INTEGER;if(n===as)return r.RG;if(n===ih)return r.RG_INTEGER;if(n===rh)return r.RGBA_INTEGER;if(n===ho||n===fo||n===po||n===mo)if(a===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Nc||n===Uc||n===Fc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Hc||n===Gc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oc||n===Bc)return a===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===kc)return s.COMPRESSED_R11_EAC;if(n===Vc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Hc)return s.COMPRESSED_RG11_EAC;if(n===Gc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===jc||n===$c||n===Qc||n===tu||n===eu||n===nu||n===iu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eu)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nu)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===iu)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ru||n===su||n===au)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ru)return a===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===lu||n===cu||n===uu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ou)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new im(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:eE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ln(new Jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rE extends vs{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new iE,m={},S=e.getContextAttributes();let x=null,y=null;const T=[],E=[],w=new gt;let R=null;const v=new fn;v.viewport=new he;const b=new fn;b.viewport=new he;const P=[v,b],F=new iy;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=T[Z];return j===void 0&&(j=new Bl,T[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=T[Z];return j===void 0&&(j=new Bl,T[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=T[Z];return j===void 0&&(j=new Bl,T[Z]=j),j.getHandSpace()};function G(Z){const j=E.indexOf(Z.inputSource);if(j===-1)return;const pt=T[j];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||a),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let Z=0;Z<T.length;Z++){const j=E[Z];j!==null&&(E[Z]=null,T[Z].disconnect(j))}O=null,V=null,p.reset();for(const Z in m)delete m[Z];t.setRenderTarget(x),d=null,f=null,h=null,i=null,y=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=S.stencil?hr:xi,Nt=S.stencil?sa:jn);const Yt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Yt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Jn(f.textureWidth,f.textureHeight,{format:wn,type:dn,depthTexture:new la(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Jn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(Z){for(let j=0;j<Z.removed.length;j++){const pt=Z.removed[j],Nt=E.indexOf(pt);Nt>=0&&(E[Nt]=null,T[Nt].disconnect(pt))}for(let j=0;j<Z.added.length;j++){const pt=Z.added[j];let Nt=E.indexOf(pt);if(Nt===-1){for(let Yt=0;Yt<T.length;Yt++)if(Yt>=E.length){E.push(pt),Nt=Yt;break}else if(E[Yt]===null){E[Yt]=pt,Nt=Yt;break}if(Nt===-1)break}const vt=T[Nt];vt&&vt.connect(pt)}}const q=new D,nt=new D;function et(Z,j,pt){q.setFromMatrixPosition(j.matrixWorld),nt.setFromMatrixPosition(pt.matrixWorld);const Nt=q.distanceTo(nt),vt=j.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,Le=vt[14]/(vt[10]-1),Xt=vt[14]/(vt[10]+1),Jt=(vt[9]+1)/vt[5],ie=(vt[9]-1)/vt[5],Ot=(vt[8]-1)/vt[0],be=(Yt[8]+1)/Yt[0],L=Le*Ot,Te=Le*be,Kt=Nt/(-Ot+be),oe=Kt*-Ot;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(oe),Z.translateZ(Kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),vt[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const yt=Le+Kt,C=Xt+Kt,M=L-oe,N=Te+(Nt-oe),Y=Jt*Xt/C*yt,J=ie*Xt/C*yt;Z.projectionMatrix.makePerspective(M,N,Y,J,yt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let j=Z.near,pt=Z.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(pt=p.depthFar)),F.near=b.near=v.near=j,F.far=b.far=v.far=pt,(O!==F.near||V!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,V=F.far),F.layers.mask=Z.layers.mask|6,v.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;const Nt=Z.parent,vt=F.cameras;ct(F,Nt);for(let Yt=0;Yt<vt.length;Yt++)ct(vt[Yt],Nt);vt.length===2?et(F,v,b):F.projectionMatrix.copy(v.projectionMatrix),Pt(Z,F,Nt)};function Pt(Z,j,pt){pt===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ls*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Z){return m[Z]};let It=null;function Gt(Z,j){if(u=j.getViewerPose(c||a),g=j,u!==null){const pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Nt=!1;pt.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let Xt=0;Xt<pt.length;Xt++){const Jt=pt[Xt];let ie=null;if(d!==null)ie=d.getViewport(Jt);else{const be=h.getViewSubImage(f,Jt);ie=be.viewport,Xt===0&&(t.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(y))}let Ot=P[Xt];Ot===void 0&&(Ot=new fn,Ot.layers.enable(Xt),Ot.viewport=new he,P[Xt]=Ot),Ot.matrix.fromArray(Jt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Jt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(ie.x,ie.y,ie.width,ie.height),Xt===0&&(F.matrix.copy(Ot.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(Ot)}const vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Xt=h.getDepthInformation(pt[0]);Xt&&Xt.isValid&&Xt.texture&&p.init(Xt,i.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let Xt=0;Xt<pt.length;Xt++){const Jt=pt[Xt].camera;if(Jt){let ie=m[Jt];ie||(ie=new im,m[Jt]=ie);const Ot=h.getCameraImage(Jt);ie.sourceTexture=Ot}}}}for(let pt=0;pt<T.length;pt++){const Nt=E[pt],vt=T[pt];Nt!==null&&vt!==void 0&&vt.update(Nt,j,c||a)}It&&It(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Wt=new _m;Wt.setAnimationLoop(Gt),this.setAnimationLoop=function(Z){It=Z},this.dispose=function(){}}}const Qi=new $n,sE=new Vt;function aE(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Kp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,y=S.envMapRotation;x&&(p.envMap.value=x,Qi.copy(y),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),p.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(Qi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oE(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function c(S,x){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(S,T);const E=t.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function u(S){const x=h();S.__bindingPointIndex=x;const y=r.createBuffer(),T=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],y=S.uniforms,T=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let E=0,w=y.length;E<w;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,b=R.length;v<b;v++){const P=R[v];if(d(P,E,v,T)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let G=0;G<O.length;G++){const z=O[G],B=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,F+V,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,y,T){const E=S.value,w=x+"_"+y;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const R=T[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(S){const x=S.uniforms;let y=0;const T=16;for(let w=0,R=x.length;w<R;w++){const v=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,P=v.length;b<P;b++){const F=v[b],O=Array.isArray(F.value)?F.value:[F.value];for(let V=0,G=O.length;V<G;V++){const z=O[V],B=_(z),q=y%T,nt=q%B.boundary,et=q+nt;y+=nt,et!==0&&T-et<B.storage&&(y+=T-et),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=B.storage}}}const E=y%T;return E>0&&(y+=T-E),S.__size=y,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Tt("WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function cE(){return Vn===null&&(Vn=new ch(lE,16,16,as,vi),Vn.name="DFG_LUT",Vn.minFilter=Ne,Vn.magFilter=Ne,Vn.wrapS=pi,Vn.wrapT=pi,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class $1{constructor(t={}){const{canvas:e=uv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,p=new Set([rh,ih,nh]),m=new Set([dn,jn,ra,sa,Qu,th]),S=new Uint32Array(4),x=new Int32Array(4);let y=null,T=null;const E=[],w=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=En;let P=0,F=0,O=null,V=-1,G=null;const z=new he,B=new he;let q=null;const nt=new kt(0);let et=0,ct=e.width,Pt=e.height,It=1,Gt=null,Wt=null;const Z=new he(0,0,ct,Pt),j=new he(0,0,ct,Pt);let pt=!1;const Nt=new uh;let vt=!1,Yt=!1;const Le=new Vt,Xt=new D,Jt=new he,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function be(){return O===null?It:1}let L=n;function Te(A,U){return e.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ju}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",jt,!1),L===null){const U="webgl2";if(L=Te(U,A),L===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let Kt,oe,yt,C,M,N,Y,J,X,Mt,rt,xt,Rt,Q,at,_t,St,st,Bt,I,ht,tt,ft,$;function K(){Kt=new cb(L),Kt.init(),tt=new tE(L,Kt),oe=new tb(L,Kt,t,tt),yt=new $T(L,Kt),oe.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),C=new fb(L),M=new OT,N=new QT(L,Kt,yt,M,oe,tt,C),Y=new nb(v),J=new lb(v),X=new _y(L),ft=new $M(L,X),Mt=new ub(L,X,C,ft),rt=new pb(L,Mt,X,C),Bt=new db(L,oe,N),_t=new eb(M),xt=new FT(v,Y,J,Kt,oe,ft,_t),Rt=new aE(v,M),Q=new zT,at=new XT(Kt),st=new jM(v,Y,J,yt,rt,g,l),St=new JT(v,rt,oe),$=new oE(L,C,oe,yt),I=new QM(L,Kt,C),ht=new hb(L,Kt,C),C.programs=xt.programs,v.capabilities=oe,v.extensions=Kt,v.properties=M,v.renderLists=Q,v.shadowMap=St,v.state=yt,v.info=C}K(),_!==dn&&(R=new _b(_,e.width,e.height,i,s));const it=new rE(v,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(A){A!==void 0&&(It=A,this.setSize(ct,Pt,!1))},this.getSize=function(A){return A.set(ct,Pt)},this.setSize=function(A,U,W=!0){if(it.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=A,Pt=U,e.width=Math.floor(A*It),e.height=Math.floor(U*It),W===!0&&(e.style.width=A+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(ct*It,Pt*It).floor()},this.setDrawingBufferSize=function(A,U,W){ct=A,Pt=U,It=W,e.width=Math.floor(A*W),e.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(_===dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,U,W,H){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,U,W,H),yt.viewport(z.copy(Z).multiplyScalar(It).round())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,U,W,H){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,U,W,H),yt.scissor(B.copy(j).multiplyScalar(It).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){yt.setScissorTest(pt=A)},this.setOpaqueSort=function(A){Gt=A},this.setTransparentSort=function(A){Wt=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,W=!0){let H=0;if(A){let k=!1;if(O!==null){const ot=O.texture.format;k=p.has(ot)}if(k){const ot=O.texture.type,dt=m.has(ot),ut=st.getClearColor(),mt=st.getClearAlpha(),bt=ut.r,wt=ut.g,Et=ut.b;dt?(S[0]=bt,S[1]=wt,S[2]=Et,S[3]=mt,L.clearBufferuiv(L.COLOR,0,S)):(x[0]=bt,x[1]=wt,x[2]=Et,x[3]=mt,L.clearBufferiv(L.COLOR,0,x))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),st.dispose(),Q.dispose(),at.dispose(),M.dispose(),Y.dispose(),J.dispose(),rt.dispose(),ft.dispose(),$.dispose(),xt.dispose(),it.dispose(),it.removeEventListener("sessionstart",kh),it.removeEventListener("sessionend",Vh),qi.stop()};function Dt(A){A.preventDefault(),Lo("WebGLRenderer: Context Lost."),b=!0}function le(){Lo("WebGLRenderer: Context Restored."),b=!1;const A=C.autoReset,U=St.enabled,W=St.autoUpdate,H=St.needsUpdate,k=St.type;K(),C.autoReset=A,St.enabled=U,St.autoUpdate=W,St.needsUpdate=H,St.type=k}function jt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function kn(A){const U=A.target;U.removeEventListener("dispose",kn),ni(U)}function ni(A){N_(A),M.remove(A)}function N_(A){const U=M.get(A).programs;U!==void 0&&(U.forEach(function(W){xt.releaseProgram(W)}),A.isShaderMaterial&&xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,H,k,ot){U===null&&(U=ie);const dt=k.isMesh&&k.matrixWorld.determinant()<0,ut=F_(A,U,W,H,k);yt.setMaterial(H,dt);let mt=W.index,bt=1;if(H.wireframe===!0){if(mt=Mt.getWireframeAttribute(W),mt===void 0)return;bt=2}const wt=W.drawRange,Et=W.attributes.position;let zt=wt.start*bt,ee=(wt.start+wt.count)*bt;ot!==null&&(zt=Math.max(zt,ot.start*bt),ee=Math.min(ee,(ot.start+ot.count)*bt)),mt!==null?(zt=Math.max(zt,0),ee=Math.min(ee,mt.count)):Et!=null&&(zt=Math.max(zt,0),ee=Math.min(ee,Et.count));const ge=ee-zt;if(ge<0||ge===1/0)return;ft.setup(k,H,ut,W,mt);let ve,re=I;if(mt!==null&&(ve=X.get(mt),re=ht,re.setIndex(ve)),k.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*be()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(k.isLine){let At=H.linewidth;At===void 0&&(At=1),yt.setLineWidth(At*be()),k.isLineSegments?re.setMode(L.LINES):k.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else k.isPoints?re.setMode(L.POINTS):k.isSprite&&re.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)oa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const At=k._multiDrawStarts,$t=k._multiDrawCounts,Zt=k._multiDrawCount,sn=mt?X.get(mt).bytesPerElement:1,Mr=M.get(H).currentProgram.getUniforms();for(let an=0;an<Zt;an++)Mr.setValue(L,"_gl_DrawID",an),re.render(At[an]/sn,$t[an])}else if(k.isInstancedMesh)re.renderInstances(zt,ge,k.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,$t=Math.min(W.instanceCount,At);re.renderInstances(zt,ge,$t)}else re.render(zt,ge)};function zh(A,U,W){A.transparent===!0&&A.side===di&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,Ta(A,U,W),A.side=ki,A.needsUpdate=!0,Ta(A,U,W),A.side=di):Ta(A,U,W)}this.compile=function(A,U,W=null){W===null&&(W=A),T=at.get(W),T.init(U),w.push(T),W.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),A!==W&&A.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const H=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const ut=ot[dt];zh(ut,W,k),H.add(ut)}else zh(ot,W,k),H.add(ot)}),T=w.pop(),H},this.compileAsync=function(A,U,W=null){const H=this.compile(A,U,W);return new Promise(k=>{function ot(){if(H.forEach(function(dt){M.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){k(A);return}setTimeout(ot,10)}Kt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ol=null;function U_(A){ol&&ol(A)}function kh(){qi.stop()}function Vh(){qi.start()}const qi=new _m;qi.setAnimationLoop(U_),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(A){ol=A,it.setAnimationLoop(A),A===null?qi.stop():qi.start()},it.addEventListener("sessionstart",kh),it.addEventListener("sessionend",Vh),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const W=it.enabled===!0&&it.isPresenting===!0,H=R!==null&&(O===null||W)&&R.begin(v,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,O),T=at.get(A,w.length),T.init(U),w.push(T),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Nt.setFromProjectionMatrix(Le,qn,U.reversedDepth),Yt=this.localClippingEnabled,vt=_t.init(this.clippingPlanes,Yt),y=Q.get(A,E.length),y.init(),E.push(y),it.enabled===!0&&it.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&ll(dt,U,-1/0,v.sortObjects)}ll(A,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Gt,Wt),Ot=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ot&&st.addToRenderList(y,A),this.info.render.frame++,vt===!0&&_t.beginShadows();const k=T.state.shadowsArray;if(St.render(k,A,U),vt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&R.hasRenderPass())===!1){const dt=y.opaque,ut=y.transmissive;if(T.setupLights(),U.isArrayCamera){const mt=U.cameras;if(ut.length>0)for(let bt=0,wt=mt.length;bt<wt;bt++){const Et=mt[bt];Gh(dt,ut,A,Et)}Ot&&st.render(A);for(let bt=0,wt=mt.length;bt<wt;bt++){const Et=mt[bt];Hh(y,A,Et,Et.viewport)}}else ut.length>0&&Gh(dt,ut,A,U),Ot&&st.render(A),Hh(y,A,U)}O!==null&&F===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),H&&R.end(v),A.isScene===!0&&A.onAfterRender(v,A,U),ft.resetDefaultState(),V=-1,G=null,w.pop(),w.length>0?(T=w[w.length-1],vt===!0&&_t.setGlobalState(v.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function ll(A,U,W,H){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Nt.intersectsSprite(A)){H&&Jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const dt=rt.update(A),ut=A.material;ut.visible&&y.push(A,dt,ut,W,Jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Nt.intersectsObject(A))){const dt=rt.update(A),ut=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Jt.copy(A.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Jt.copy(dt.boundingSphere.center)),Jt.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(ut)){const mt=dt.groups;for(let bt=0,wt=mt.length;bt<wt;bt++){const Et=mt[bt],zt=ut[Et.materialIndex];zt&&zt.visible&&y.push(A,dt,zt,W,Jt.z,Et)}}else ut.visible&&y.push(A,dt,ut,W,Jt.z,null)}}const ot=A.children;for(let dt=0,ut=ot.length;dt<ut;dt++)ll(ot[dt],U,W,H)}function Hh(A,U,W,H){const{opaque:k,transmissive:ot,transparent:dt}=A;T.setupLightsView(W),vt===!0&&_t.setGlobalState(v.clippingPlanes,W),H&&yt.viewport(z.copy(H)),k.length>0&&ba(k,U,W),ot.length>0&&ba(ot,U,W),dt.length>0&&ba(dt,U,W),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Gh(A,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const zt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Jn(1,1,{generateMipmaps:!0,type:zt?vi:dn,minFilter:ur,samples:oe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ot=T.state.transmissionRenderTarget[H.id],dt=H.viewport||z;ot.setSize(dt.z*v.transmissionResolutionScale,dt.w*v.transmissionResolutionScale);const ut=v.getRenderTarget(),mt=v.getActiveCubeFace(),bt=v.getActiveMipmapLevel();v.setRenderTarget(ot),v.getClearColor(nt),et=v.getClearAlpha(),et<1&&v.setClearColor(16777215,.5),v.clear(),Ot&&st.render(W);const wt=v.toneMapping;v.toneMapping=Kn;const Et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),vt===!0&&_t.setGlobalState(v.clippingPlanes,H),ba(A,W,H),N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ee=0,ge=U.length;ee<ge;ee++){const ve=U[ee],{object:re,geometry:At,material:$t,group:Zt}=ve;if($t.side===di&&re.layers.test(H.layers)){const sn=$t.side;$t.side=Je,$t.needsUpdate=!0,Wh(re,W,H,At,$t,Zt),$t.side=sn,$t.needsUpdate=!0,zt=!0}}zt===!0&&(N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot))}v.setRenderTarget(ut,mt,bt),v.setClearColor(nt,et),Et!==void 0&&(H.viewport=Et),v.toneMapping=wt}function ba(A,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ot=A.length;k<ot;k++){const dt=A[k],{object:ut,geometry:mt,group:bt}=dt;let wt=dt.material;wt.allowOverride===!0&&H!==null&&(wt=H),ut.layers.test(W.layers)&&Wh(ut,U,W,mt,wt,bt)}}function Wh(A,U,W,H,k,ot){A.onBeforeRender(v,U,W,H,k,ot),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,U,W,H,A,ot),k.transparent===!0&&k.side===di&&k.forceSinglePass===!1?(k.side=Je,k.needsUpdate=!0,v.renderBufferDirect(W,U,H,k,A,ot),k.side=ki,k.needsUpdate=!0,v.renderBufferDirect(W,U,H,k,A,ot),k.side=di):v.renderBufferDirect(W,U,H,k,A,ot),A.onAfterRender(v,U,W,H,k,ot)}function Ta(A,U,W){U.isScene!==!0&&(U=ie);const H=M.get(A),k=T.state.lights,ot=T.state.shadowsArray,dt=k.state.version,ut=xt.getParameters(A,k.state,ot,U,W),mt=xt.getProgramCacheKey(ut);let bt=H.programs;H.environment=A.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(A.isMeshStandardMaterial?J:Y).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,bt===void 0&&(A.addEventListener("dispose",kn),bt=new Map,H.programs=bt);let wt=bt.get(mt);if(wt!==void 0){if(H.currentProgram===wt&&H.lightsStateVersion===dt)return qh(A,ut),wt}else ut.uniforms=xt.getUniforms(A),A.onBeforeCompile(ut,v),wt=xt.acquireProgram(ut,mt),bt.set(mt,wt),H.uniforms=ut.uniforms;const Et=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Et.clippingPlanes=_t.uniform),qh(A,ut),H.needsLights=B_(A),H.lightsStateVersion=dt,H.needsLights&&(Et.ambientLightColor.value=k.state.ambient,Et.lightProbe.value=k.state.probe,Et.directionalLights.value=k.state.directional,Et.directionalLightShadows.value=k.state.directionalShadow,Et.spotLights.value=k.state.spot,Et.spotLightShadows.value=k.state.spotShadow,Et.rectAreaLights.value=k.state.rectArea,Et.ltc_1.value=k.state.rectAreaLTC1,Et.ltc_2.value=k.state.rectAreaLTC2,Et.pointLights.value=k.state.point,Et.pointLightShadows.value=k.state.pointShadow,Et.hemisphereLights.value=k.state.hemi,Et.directionalShadowMap.value=k.state.directionalShadowMap,Et.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Et.spotShadowMap.value=k.state.spotShadowMap,Et.spotLightMatrix.value=k.state.spotLightMatrix,Et.spotLightMap.value=k.state.spotLightMap,Et.pointShadowMap.value=k.state.pointShadowMap,Et.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=wt,H.uniformsList=null,wt}function Xh(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=go.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function qh(A,U){const W=M.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function F_(A,U,W,H,k){U.isScene!==!0&&(U=ie),N.resetTextureUnits();const ot=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,ut=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:os,mt=(H.isMeshStandardMaterial?J:Y).get(H.envMap||dt),bt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,wt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!W.morphAttributes.position,zt=!!W.morphAttributes.normal,ee=!!W.morphAttributes.color;let ge=Kn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ge=v.toneMapping);const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=ve!==void 0?ve.length:0,At=M.get(H),$t=T.state.lights;if(vt===!0&&(Yt===!0||A!==G)){const Ge=A===G&&H.id===V;_t.setState(H,A,Ge)}let Zt=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==$t.state.version||At.outputColorSpace!==ut||k.isBatchedMesh&&At.batching===!1||!k.isBatchedMesh&&At.batching===!0||k.isBatchedMesh&&At.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&At.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&At.instancing===!1||!k.isInstancedMesh&&At.instancing===!0||k.isSkinnedMesh&&At.skinning===!1||!k.isSkinnedMesh&&At.skinning===!0||k.isInstancedMesh&&At.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&At.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&At.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&At.instancingMorph===!1&&k.morphTexture!==null||At.envMap!==mt||H.fog===!0&&At.fog!==ot||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==_t.numPlanes||At.numIntersection!==_t.numIntersection)||At.vertexAlphas!==bt||At.vertexTangents!==wt||At.morphTargets!==Et||At.morphNormals!==zt||At.morphColors!==ee||At.toneMapping!==ge||At.morphTargetsCount!==re)&&(Zt=!0):(Zt=!0,At.__version=H.version);let sn=At.currentProgram;Zt===!0&&(sn=Ta(H,U,k));let Mr=!1,an=!1,Ts=!1;const ce=sn.getUniforms(),Ze=At.uniforms;if(yt.useProgram(sn.program)&&(Mr=!0,an=!0,Ts=!0),H.id!==V&&(V=H.id,an=!0),Mr||G!==A){yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ce.setValue(L,"projectionMatrix",A.projectionMatrix),ce.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ke=ce.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,Xt.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&ce.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,an=!0,Ts=!0)}if(At.needsLights&&($t.state.directionalShadowMap.length>0&&ce.setValue(L,"directionalShadowMap",$t.state.directionalShadowMap,N),$t.state.spotShadowMap.length>0&&ce.setValue(L,"spotShadowMap",$t.state.spotShadowMap,N),$t.state.pointShadowMap.length>0&&ce.setValue(L,"pointShadowMap",$t.state.pointShadowMap,N)),k.isSkinnedMesh){ce.setOptional(L,k,"bindMatrix"),ce.setOptional(L,k,"bindMatrixInverse");const Ge=k.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ce.setValue(L,"boneTexture",Ge.boneTexture,N))}k.isBatchedMesh&&(ce.setOptional(L,k,"batchingTexture"),ce.setValue(L,"batchingTexture",k._matricesTexture,N),ce.setOptional(L,k,"batchingIdTexture"),ce.setValue(L,"batchingIdTexture",k._indirectTexture,N),ce.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&ce.setValue(L,"batchingColorTexture",k._colorsTexture,N));const Sn=W.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Bt.update(k,W,sn),(an||At.receiveShadow!==k.receiveShadow)&&(At.receiveShadow=k.receiveShadow,ce.setValue(L,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ze.envMap.value=mt,Ze.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Ze.envMapIntensity.value=U.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=cE()),an&&(ce.setValue(L,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&O_(Ze,Ts),ot&&H.fog===!0&&Rt.refreshFogUniforms(Ze,ot),Rt.refreshMaterialUniforms(Ze,H,It,Pt,T.state.transmissionRenderTarget[A.id]),go.upload(L,Xh(At),Ze,N)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(go.upload(L,Xh(At),Ze,N),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(L,"center",k.center),ce.setValue(L,"modelViewMatrix",k.modelViewMatrix),ce.setValue(L,"normalMatrix",k.normalMatrix),ce.setValue(L,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ge=H.uniformsGroups;for(let Ke=0,cl=Ge.length;Ke<cl;Ke++){const Yi=Ge[Ke];$.update(Yi,sn),$.bind(Yi,sn)}}return sn}function O_(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function B_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,U,W){const H=M.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=U,M.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const W=M.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const z_=L.createFramebuffer();this.setRenderTarget=function(A,U=0,W=0){O=A,P=U,F=W;let H=null,k=!1,ot=!1;if(A){const ut=M.get(A);if(ut.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(L.FRAMEBUFFER,ut.__webglFramebuffer),z.copy(A.viewport),B.copy(A.scissor),q=A.scissorTest,yt.viewport(z),yt.scissor(B),yt.setScissorTest(q),V=-1;return}else if(ut.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(ut.__hasExternalTextures)N.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const wt=A.depthTexture;if(ut.__boundDepthTexture!==wt){if(wt!==null&&M.has(wt)&&(A.width!==wt.image.width||A.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const mt=A.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(ot=!0);const bt=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(bt[U])?H=bt[U][W]:H=bt[U],k=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?H=M.get(A).__webglMultisampledFramebuffer:Array.isArray(bt)?H=bt[W]:H=bt,z.copy(A.viewport),B.copy(A.scissor),q=A.scissorTest}else z.copy(Z).multiplyScalar(It).floor(),B.copy(j).multiplyScalar(It).floor(),q=pt;if(W!==0&&(H=z_),yt.bindFramebuffer(L.FRAMEBUFFER,H)&&yt.drawBuffers(A,H),yt.viewport(z),yt.scissor(B),yt.setScissorTest(q),k){const ut=M.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,W)}else if(ot){const ut=U;for(let mt=0;mt<A.textures.length;mt++){const bt=M.get(A.textures[mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+mt,bt.__webglTexture,W,ut)}}else if(A!==null&&W!==0){const ut=M.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(A,U,W,H,k,ot,dt,ut=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt){yt.bindFramebuffer(L.FRAMEBUFFER,mt);try{const bt=A.textures[ut],wt=bt.format,Et=bt.type;if(!oe.textureFormatReadable(wt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Et)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-H&&W>=0&&W<=A.height-k&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut),L.readPixels(U,W,H,k,tt.convert(wt),tt.convert(Et),ot))}finally{const bt=O!==null?M.get(O).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(A,U,W,H,k,ot,dt,ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt)if(U>=0&&U<=A.width-H&&W>=0&&W<=A.height-k){yt.bindFramebuffer(L.FRAMEBUFFER,mt);const bt=A.textures[ut],wt=bt.format,Et=bt.type;if(!oe.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut),L.readPixels(U,W,H,k,tt.convert(wt),tt.convert(Et),0);const ee=O!==null?M.get(O).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,ee);const ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await hv(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(zt),L.deleteSync(ge),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,W=0){const H=Math.pow(2,-W),k=Math.floor(A.image.width*H),ot=Math.floor(A.image.height*H),dt=U!==null?U.x:0,ut=U!==null?U.y:0;N.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,dt,ut,k,ot),yt.unbindTexture()};const k_=L.createFramebuffer(),V_=L.createFramebuffer();this.copyTextureToTexture=function(A,U,W=null,H=null,k=0,ot=null){ot===null&&(k!==0?(oa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=k,k=0):ot=0);let dt,ut,mt,bt,wt,Et,zt,ee,ge;const ve=A.isCompressedTexture?A.mipmaps[ot]:A.image;if(W!==null)dt=W.max.x-W.min.x,ut=W.max.y-W.min.y,mt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,wt=W.min.y,Et=W.isBox3?W.min.z:0;else{const Sn=Math.pow(2,-k);dt=Math.floor(ve.width*Sn),ut=Math.floor(ve.height*Sn),A.isDataArrayTexture?mt=ve.depth:A.isData3DTexture?mt=Math.floor(ve.depth*Sn):mt=1,bt=0,wt=0,Et=0}H!==null?(zt=H.x,ee=H.y,ge=H.z):(zt=0,ee=0,ge=0);const re=tt.convert(U.format),At=tt.convert(U.type);let $t;U.isData3DTexture?(N.setTexture3D(U,0),$t=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),$t=L.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),$t=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mr=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),Ts=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et);const ce=A.isDataArrayTexture||A.isData3DTexture,Ze=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const Sn=M.get(A),Ge=M.get(U),Ke=M.get(Sn.__renderTarget),cl=M.get(Ge.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Ke.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,cl.__webglFramebuffer);for(let Yi=0;Yi<mt;Yi++)ce&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(A).__webglTexture,k,Et+Yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(U).__webglTexture,ot,ge+Yi)),L.blitFramebuffer(bt,wt,dt,ut,zt,ee,dt,ut,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||M.has(A)){const Sn=M.get(A),Ge=M.get(U);yt.bindFramebuffer(L.READ_FRAMEBUFFER,k_),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,V_);for(let Ke=0;Ke<mt;Ke++)ce?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Sn.__webglTexture,k,Et+Ke):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Sn.__webglTexture,k),Ze?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,ot,ge+Ke):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,ot),k!==0?L.blitFramebuffer(bt,wt,dt,ut,zt,ee,dt,ut,L.COLOR_BUFFER_BIT,L.NEAREST):Ze?L.copyTexSubImage3D($t,ot,zt,ee,ge+Ke,bt,wt,dt,ut):L.copyTexSubImage2D($t,ot,zt,ee,bt,wt,dt,ut);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ze?A.isDataTexture||A.isData3DTexture?L.texSubImage3D($t,ot,zt,ee,ge,dt,ut,mt,re,At,ve.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D($t,ot,zt,ee,ge,dt,ut,mt,re,ve.data):L.texSubImage3D($t,ot,zt,ee,ge,dt,ut,mt,re,At,ve):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ot,zt,ee,dt,ut,re,At,ve.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ot,zt,ee,ve.width,ve.height,re,ve.data):L.texSubImage2D(L.TEXTURE_2D,ot,zt,ee,dt,ut,re,At,ve);L.pixelStorei(L.UNPACK_ROW_LENGTH,Zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mr),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ts),ot===0&&U.generateMipmaps&&L.generateMipmap($t),yt.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),yt.unbindTexture()},this.resetState=function(){P=0,F=0,O=null,yt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}Dg();const Q1=Me(0),Sm=Me(0),tw=Me(!1),ew=Me(null),uE=["ground","sceneReady"];function hE(r){const t=Me(new Set),e=Yu(t,n=>n.size/r.length);return{progress:e,subscribe:e.subscribe,complete(n){t.update(i=>i.has(n)?i:new Set(i).add(n))},pending(){const n=Zn(t);return r.filter(i=>!n.has(i))},reset(){t.set(new Set)}}}const fE=hE(uE),dE=fE.progress,pE=Yu(dE,r=>r>=1);function nw(){Sm.update(r=>r+1)}function iw(){Sm.update(r=>r-1)}function rw(r="home"){return{home:{color:16711680,intensity:1},"about-us":{color:65280,intensity:.5},works:{color:255,intensity:.8}}[r]}const sw=Me({pageId:"",params:{}});function mE(){return"maxTouchPoints"in navigator?navigator.maxTouchPoints>0:window.matchMedia?.("(any-pointer: coarse)").matches?!0:"ontouchstart"in window}function _E(){const r=navigator.userAgent,t=/Android.*Mobile|iPhone|iPod/i.test(r),e=/iPad|Android(?!.*Mobile)/i.test(r),n=mE(),i=window.matchMedia("(any-pointer: coarse)").matches,s=window.matchMedia("(max-width: 768px)").matches,a=window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches,o=/^((?!chrome|android).)*safari/i.test(r),l=t||n&&i&&s,c=e||n&&i&&a;return{isMobile:l,isTablet:c,isTouch:l||c,isSafariBrowser:o}}const el=qo(_E()),aw=qo({x:0,y:0,v:0,d:0,rx:.5,ry:.5},r=>{let t=0,e=0,n=0;function i(s){const a=Date.now(),o=a-n;if(o===0)return;const l=s.clientX,c=s.clientY,u=l/window.innerWidth,h=1-c/window.innerHeight,f=l-t,d=c-e,g=Math.sqrt(f*f+d*d),_=g/Math.max(o,1);r({x:l,y:c,v:_,d:g,rx:u,ry:h}),t=l,e=c,n=a}return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}}),ow=qo({width:0,height:0},r=>{function t(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}});let xu=0,yu=0;const Su=new Set;function Mm(){return xu||document.documentElement.clientWidth||window.innerWidth}function Gr(){return yu||document.documentElement.clientHeight||window.innerHeight}function lw(r,t){r===xu&&t===yu||(xu=r,yu=t,Su.forEach(e=>e()))}function gE(r){return Su.add(r),()=>{Su.delete(r)}}const bs=Me(null);function cw(r){bs.set(r)}const bm=Me(null);function uw(r,t=0){bm.set({deltaX:t,deltaY:r})}const Tm=Me(null),Em=Me(null);function hw(){Tm.set({})}function fw(){Em.set({})}const dw=qo({virtualY:0,thresholdY:0,virtualSlide:0,deltaY:0,phase:"cameraMove"},r=>{const e=Zn(el).isTouch,n=e?1:.4;let i=0,s=0,a="cameraMove",o=null,l=!1,c=()=>{},u,h,f,d;function g(){i=0,s=0,a="cameraMove",r({virtualY:0,thresholdY:0,virtualSlide:0,phase:"cameraMove",deltaY:0})}function _(){s=0,r({virtualY:i,thresholdY:i/Gr(),virtualSlide:0,phase:a,deltaY:0})}function p({deltaY:S,deltaX:x}){a==="cameraMove"&&(i=Math.max(0,Math.min(i+S,Gr())),i>=Gr()&&(a="carouselRotate"),r({virtualY:i,thresholdY:i/Gr(),virtualSlide:0,deltaY:0,phase:a})),a==="carouselRotate"&&(s=s+(e?x:S)*n,r({virtualY:Gr(),thresholdY:1,virtualSlide:s,phase:a,deltaY:S}))}function m(){o&&l&&o.on("virtual-scroll",p)}return c=bs.subscribe(S=>{o=S,m(),c()}),u=pE.subscribe(S=>{l=S,m(),S===!0&&u()}),h=bm.subscribe(S=>{S&&p(S)}),f=Tm.subscribe(S=>{S&&g()}),d=Em.subscribe(S=>{S&&_()}),()=>{o?.off("virtual-scroll",p),c(),u(),h(),f(),d(),g()}});function pw(r){let t=null;const e=bs.subscribe(n=>{t?.off("scroll",r),t=n,t?.on("scroll",r)});Ig(()=>()=>{t?.off("scroll",r),e()})}function ci(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Am(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hs={duration:.5,overwrite:!1,delay:0},vh,Be,fe,Cn=1e8,ae=1/Cn,Mu=Math.PI*2,vE=Mu/4,xE=0,wm=Math.sqrt,yE=Math.cos,SE=Math.sin,Ue=function(t){return typeof t=="string"},xe=function(t){return typeof t=="function"},yi=function(t){return typeof t=="number"},xh=function(t){return typeof t>"u"},ti=function(t){return typeof t=="object"},Qe=function(t){return t!==!1},yh=function(){return typeof window<"u"},ro=function(t){return xe(t)||Ue(t)},Cm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,ME=/random\([^)]+\)/g,bE=/,\s*/g,Id=/(?:-?\.?\d|\.)+/gi,Rm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pm=/[+-]=-?[.\d]+/,TE=/[^,'"\[\]\s]+/gi,EE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pe,Hn,bu,Sh,vn={},Fo={},Lm,Dm=function(t){return(Fo=fs(t,vn))&&rn},Mh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},fa=function(t,e){return!e&&console.warn(t)},Im=function(t,e){return t&&(vn[t]=e)&&Fo&&(Fo[t]=e)||vn},da=function(){return 0},AE={suppressEvents:!0,isStart:!0,kill:!1},vo={suppressEvents:!0,kill:!1},wE={suppressEvents:!0},bh={},Bi=[],Tu={},Nm,hn={},nc={},Nd=30,xo=[],Th="",Eh=function(t){var e=t[0],n,i;if(ti(e)||xe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=xo.length;i--&&!xo[i].targetTest(e););n=xo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new r_(t[i],n)))||t.splice(i,1);return t},pr=function(t){return t._gsap||Eh(Rn(t))[0]._gsap},Um=function(t,e,n){return(n=t[e])&&xe(n)?t[e]():xh(n)&&t.getAttribute&&t.getAttribute(e)||n},tn=function(t,e){return(t=t.split(",")).forEach(e)||t},ye=function(t){return Math.round(t*1e5)/1e5||0},de=function(t){return Math.round(t*1e7)/1e7||0},jr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},CE=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Oo=function(){var t=Bi.length,e=Bi.slice(0),n,i;for(Tu={},Bi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ah=function(t){return!!(t._initted||t._startAt||t.add)},Fm=function(t,e,n,i){Bi.length&&!Be&&Oo(),t.render(e,n,!!(Be&&e<0&&Ah(t))),Bi.length&&!Be&&Oo()},Om=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(TE).length<2?e:Ue(t)?t.trim():t},Bm=function(t){return t},xn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},RE=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},fs=function(t,e){for(var n in e)t[n]=e[n];return t},Ud=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ti(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Bo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ta=function(t){var e=t.parent||pe,n=t.keyframes?RE(He(t.keyframes)):xn;if(Qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},PE=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},zm=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},nl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Vi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},mr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},LE=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Eu=function(t,e,n,i){return t._startAt&&(Be?t._startAt.revert(vo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},DE=function r(t){return!t||t._ts&&r(t.parent)},Fd=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var n=Math.floor(t=de(t/e));return t&&n===t?n-1:n},zo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},il=function(t){return t._end=de(t._start+(t._tDur/Math.abs(t._ts||t._rts||ae)||0))},rl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=de(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),il(t),n._dirty||mr(n,t)),t},km=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=zo(t.rawTime(),e),(!e._dur||Ma(0,e.totalDuration(),n)-e._tTime>ae)&&e.render(n,!0)),mr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ae}},Wn=function(t,e,n,i){return e.parent&&Vi(e),e._start=de((yi(n)?n:n||t!==pe?Tn(t,n,e):t._time)+e._delay),e._end=de(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zm(t,e,"_first","_last",t._sort?"_start":0),Au(e)||(t._recent=e),i||km(t,e),t._ts<0&&rl(t,t._tTime),t},Vm=function(t,e){return(vn.ScrollTrigger||Mh("scrollTrigger",e))&&vn.ScrollTrigger.create(e,t)},Hm=function(t,e,n,i,s){if(Ch(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Nm!==pn.frame)return Bi.push(t),t._lazy=[s,i],1},IE=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Au=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},NE=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&IE(t)&&!(!t._initted&&Au(t))||(t._ts<0||t._dp._ts<0)&&!Au(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Ma(0,t._tDur,e),u=ds(l,o),t._yoyo&&u&1&&(a=1-a),u!==ds(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Be||i||t._zTime===ae||!e&&t._zTime){if(!t._initted&&Hm(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?ae:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Eu(t,e,n,!0),t._onUpdate&&!n&&mn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Vi(t,1),!n&&!Be&&(mn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},UE=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ps=function(t,e,n,i){var s=t._repeat,a=de(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:de(a*(s+1)+t._rDelay*s):a,o>0&&!i&&rl(t,t._tTime=t._tDur*o),t.parent&&il(t),n||mr(t.parent,t),t},Od=function(t){return t instanceof qe?mr(t):ps(t,t._dur)},FE={_start:0,endTime:da,totalDuration:da},Tn=function r(t,e,n){var i=t.labels,s=t._recent||FE,a=t.duration()>=Cn?s.endTime(!1):t._dur,o,l,c;return Ue(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(He(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ea=function(t,e,n){var i=yi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qe(l.vars.inherit)&&l.parent;a.immediateRender=Qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ae(e[0],a,e[s+1])},Xi=function(t,e){return t||t===0?e(t):e},Ma=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!Ue(t)||!(e=EE.exec(t))?"":e[1]},OE=function(t,e,n){return Xi(n,function(i){return Ma(t,e,i)})},wu=[].slice,Gm=function(t,e){return t&&ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ti(t[0]))&&!t.nodeType&&t!==Hn},BE=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ue(i)&&!e||Gm(i,1)?(s=n).push.apply(s,Rn(i)):n.push(i)})||n},Rn=function(t,e,n){return fe&&!e&&fe.selector?fe.selector(t):Ue(t)&&!n&&(bu||!ms())?wu.call((e||Sh).querySelectorAll(t),0):He(t)?BE(t,n):Gm(t)?wu.call(t,0):t?[t]:[]},Cu=function(t){return t=Rn(t)[0]||fa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Rn(e,n.querySelectorAll?n:n===t?fa("Invalid scope")||Sh.createElement("div"):t)}},Wm=function(t){return t.sort(function(){return .5-Math.random()})},Xm=function(t){if(xe(t))return t;var e=ti(t)?t:{each:t},n=_r(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Ue(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,p=a[_],m,S,x,y,T,E,w,R,v;if(!p){if(v=e.grid==="auto"?0:(e.grid||[1,Cn])[1],!v){for(w=-Cn;w<(w=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=a[_]=[],m=l?Math.min(v,_)*u-.5:i%v,S=v===Cn?0:l?_*h/v-.5:i/v|0,w=0,R=Cn,E=0;E<_;E++)x=E%v-m,y=S-(E/v|0),p[E]=T=c?Math.abs(c==="y"?y:x):wm(x*x+y*y),T>w&&(w=T),T<R&&(R=T);i==="random"&&Wm(p),p.max=w-R,p.min=R,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Ve(e.amount||e.each)||0,n=n&&_<0?e_(n):n}return _=(p[f]-p.min)/p.max||0,de(p.b+(n?n(_):_)*p.v)+p.u}},Ru=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=de(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(yi(n)?0:Ve(n))}},qm=function(t,e){var n=He(t),i,s;return!n&&ti(t)&&(i=n=t.radius||Cn,t.values?(t=Rn(t.values),(s=!yi(t[0]))&&(i*=i)):t=Ru(t.increment)),Xi(e,n?xe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Cn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||yi(a)?u:u+Ve(a)}:Ru(t))},Ym=function(t,e,n,i){return Xi(He(t)?!e:n===!0?!!(n=0):!i,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},zE=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},kE=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},VE=function(t,e,n){return Km(t,e,0,1,n)},Zm=function(t,e,n){return Xi(n,function(i){return t[~~e(i)]})},HE=function r(t,e,n){var i=e-t;return He(t)?Zm(t,r(0,t.length),e):Xi(n,function(s){return(i+(s-t)%i)%i+t})},GE=function r(t,e,n){var i=e-t,s=i*2;return He(t)?Zm(t,r(0,t.length-1),e):Xi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},pa=function(t){return t.replace(ME,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(bE);return Ym(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Km=function(t,e,n,i,s){var a=e-t,o=i-n;return Xi(s,function(l){return n+((l-t)/a*o||0)})},WE=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ue(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=fs(He(t)?[]:{},t));if(!u){for(l in e)wh.call(o,t,l,"get",e[l]);s=function(g){return Lh(g,o)||(a?t.p:t)}}}return Xi(n,s)},Bd=function(t,e,n){var i=t.labels,s=Cn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},mn=function(t,e,n){var i=t.vars,s=i[e],a=fe,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Bi.length&&Oo(),o&&(fe=o),u=l?s.apply(c,l):s.call(c),fe=a,u},Xs=function(t){return Vi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Be),t.progress()<1&&mn(t,"onInterrupt"),t},qr,Jm=[],jm=function(t){if(t)if(t=!t.name&&t.default||t,yh()||t.headless){var e=t.name,n=xe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:da,render:Lh,add:wh,kill:aA,modifier:sA,rawVars:0},a={targetTest:0,get:0,getSetter:Ph,aliases:{},register:0};if(ms(),t!==i){if(hn[e])return;xn(i,xn(Bo(t,s),a)),fs(i.prototype,fs(s,Bo(t,a))),hn[i.prop=e]=i,t.targetTest&&(xo.push(i),bh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Im(e,i),t.register&&t.register(rn,i,en)}else Jm.push(t)},se=255,qs={aqua:[0,se,se],lime:[0,se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,se],navy:[0,0,128],white:[se,se,se],olive:[128,128,0],yellow:[se,se,0],orange:[se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[se,0,0],pink:[se,192,203],cyan:[0,se,se],transparent:[se,se,se,0]},ic=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*se+.5|0},$m=function(t,e,n){var i=t?yi(t)?[t>>16,t>>8&se,t&se]:0:qs.black,s,a,o,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),qs[t])i=qs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&se,i&se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&se,t&se]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Id),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ic(l+1/3,s,a),i[1]=ic(l,s,a),i[2]=ic(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Rm),n&&i.length<4&&(i[3]=1),i}else i=t.match(Id)||qs.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/se,a=i[1]/se,o=i[2]/se,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Qm=function(t){var e=[],n=[],i=-1;return t.split(zi).forEach(function(s){var a=s.match(Xr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},zd=function(t,e,n){var i="",s=(t+i).match(zi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=$m(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Qm(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(zi,"1").split(Xr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(zi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},zi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in qs)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),XE=/hsl[a]?\(/,t_=function(t){var e=t.join(" "),n;if(zi.lastIndex=0,zi.test(e))return n=XE.test(e),t[1]=zd(t[1],n),t[0]=zd(t[0],n,Qm(t[1])),!0},ma,pn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(p){var m=r()-i,S=p===!0,x,y,T,E;if((m>t||m<0)&&(n+=m-e),i+=m,T=i-n,x=T-a,(x>0||S)&&(E=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,a+=x+(x>=s?4:s-x),y=1),S||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](T,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Lm&&(!bu&&yh()&&(Hn=bu=window,Sh=Hn.document||{},vn.gsap=rn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(rn.version),Dm(Fo||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Jm.forEach(jm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ma=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ma=0,c=da},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,S){var x=m?function(y,T,E,w){p(y,T,E,w),h.remove(x)}:p;return h.remove(p),o[S?"unshift":"push"](x),ms(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h})(),ms=function(){return!ma&&pn.wake()},Ht={},qE=/^[\d.\-M][\d.\-,\s]/,YE=/["']/g,ZE=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(YE,"").trim():+c,i=l.substr(o+1).trim();return e},KE=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},JE=function(t){var e=(t+"").split("("),n=Ht[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ZE(e[1])]:KE(t).split(",").map(Om)):Ht._CE&&qE.test(t)?Ht._CE("",t):n},e_=function(t){return function(e){return 1-t(1-e)}},n_=function r(t,e){for(var n=t._first,i;n;)n instanceof qe?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},_r=function(t,e){return t&&(xe(t)?t:Ht[t]||JE(t))||e},Sr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return tn(t,function(o){Ht[o]=vn[o]=s,Ht[a=o.toLowerCase()]=n;for(var l in s)Ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ht[o+"."+l]=s[l]}),s},i_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},rc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Mu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*SE((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:i_(o);return s=Mu/s,l.config=function(c,u){return r(t,c,u)},l},sc=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:i_(n);return i.config=function(s){return r(t,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Sr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;Sr("Elastic",rc("in"),rc("out"),rc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Sr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Sr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Sr("Circ",function(r){return-(wm(1-r*r)-1)});Sr("Sine",function(r){return r===1?1:-yE(r*vE)+1});Sr("Back",sc("in"),sc("out"),sc());Ht.SteppedEase=Ht.steps=vn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ae;return function(o){return((i*Ma(0,a,o)|0)+s)*n}}};hs.ease=Ht["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Th+=r+","+r+"Params,"});var r_=function(t,e){this.id=xE++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Um,this.set=e?e.getSetter:Ph},_a=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,fe&&(this._ctx=fe,fe.data.push(this)),ma||pn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(rl(this,n),!s._dp||s.parent||km(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ae||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ae?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ae?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),il(this),LE(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ae&&(this._tTime-=ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=de(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=wE);var i=Be;return Be=n,Ah(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Be=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Od(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Od(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Tn(this,n),Qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qe(i)),this._dur||(this._zTime=-ae),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ae,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ae)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=xe(n)?n:Bm,l=function(){var u=i.then;i.then=null,s&&s(),xe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Xs(this)},r})();xn(_a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ae,_prom:0,_ps:!1,_rts:1});var qe=(function(r){Am(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qe(n.sortChildren),pe&&Wn(n.parent||pe,ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vm(ci(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ea(0,arguments,this),this},e.from=function(i,s,a){return ea(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ea(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ae(i,s,Tn(this,a),1),this},e.call=function(i,s,a){return Wn(this,Ae.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ae(i,a,Tn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ta(a).immediateRender=Qe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ta(o).immediateRender=Qe(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:de(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,S,x,y,T,E,w;if(this!==pe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,x=this._ts,m=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=de(u%p),u===l?(_=this._repeat,f=c):(T=de(u/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=ds(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),E&&_&1&&(f=c-f,w=1),_!==T&&!this._lock){var R=E&&T&1,v=R===(E&&_&1);if(_<T&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(w?0:de(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;n_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=UE(this,de(o),de(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!T&&(mn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-ae);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||Be&&Ah(d)),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=b?-ae:ae);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-ae)._zTime=f>=o?1:-1,this._ts))return this._start=y,il(this),this.render(i,s,a);this._onUpdate&&!s&&mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(mn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(yi(s)||(s=Tn(this,s,i)),!(i instanceof _a)){if(He(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ue(i))return this.addLabel(i,s);if(xe(i))i=Ae.delayedCall(0,i);else return this}return this!==i?Wn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Cn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ae?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ue(i)?this.removeLabel(i):xe(i)?this.killTweensOf(i):(i.parent===this&&nl(this,i),i===this._recent&&(this._recent=this._last),mr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=de(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Tn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ae.delayedCall(0,s||da,a);return o.data="isPause",this._hasPause=1,Wn(this,o,Tn(this,i))},e.removePause=function(i){var s=this._first;for(i=Tn(this,i);s;)s._start===i&&s.data==="isPause"&&Vi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ui!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Rn(i),l=this._first,c=yi(s),u;l;)l instanceof Ae?CE(l._targets,o)&&(c?(!Ui||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Tn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ae.to(a,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ae,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&ps(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,xn({startAt:{time:Tn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Bd(this,Tn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Bd(this,Tn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ae)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=de(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return mr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Cn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=de(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ps(a,a===pe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(pe._ts&&(Fm(pe,zo(i,pe)),Nm=pn.frame),pn.frame>=Nd){Nd+=gn.autoSleep||120;var s=pe._first;if((!s||!s._ts)&&gn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},t})(_a);xn(qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var jE=function(t,e,n,i,s,a,o){var l=new en(this._pt,t,e,0,1,u_,null,s),c=0,u=0,h,f,d,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=pa(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(ec)||[];h=ec.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?jr(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=ec.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Pm.test(i)||m)&&(l.e=0),this._pt=l,l},wh=function(t,e,n,i,s,a,o,l,c,u){xe(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:xe(h)?c?t[e.indexOf("set")||!xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=xe(h)?c?nA:l_:Rh,g;if(Ue(i)&&(~i.indexOf("random(")&&(i=pa(i)),i.charAt(1)==="="&&(g=jr(f,i)+(Ve(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Pu)return!isNaN(f*i)&&i!==""?(g=new en(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?rA:c_,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&Mh(e,i),jE.call(this,t,e,f,i,d,l||gn.stringFilter,c))},$E=function(t,e,n,i,s){if(xe(t)&&(t=na(t,s,e,n,i)),!ti(t)||t.style&&t.nodeType||He(t)||Cm(t))return Ue(t)?na(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=na(t[o],s,e,n,i);return a},s_=function(t,e,n,i,s,a){var o,l,c,u;if(hn[t]&&(o=new hn[t]).init(s,o.rawVars?e[t]:$E(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new en(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==qr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ui,Pu,Ch=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!vh,y=t.timeline,T,E,w,R,v,b,P,F,O,V,G,z,B;if(y&&(!f||!s)&&(s="none"),t._ease=_r(s,hs.ease),t._yEase=h?e_(_r(h===!0?s:h,hs.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(F=p[0]?pr(p[0]).harness:0,z=F&&i[F.prop],T=Bo(i,bh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?vo:AE),_._lazy=0),a){if(Vi(t._startAt=Ae.set(p,xn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Qe(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be||!o&&!d)&&t._startAt.revert(vo),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),w=xn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Qe(l),immediateRender:o,stagger:0,parent:m},T),z&&(w[F.prop]=z),Vi(t._startAt=Ae.set(p,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be?t._startAt.revert(vo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ae,ae);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Qe(l)||l&&!g,E=0;E<p.length;E++){if(v=p[E],P=v._gsap||Eh(p)[E]._gsap,t._ptLookup[E]=V={},Tu[P.id]&&Bi.length&&Oo(),G=S===p?E:S.indexOf(v),F&&(O=new F).init(v,z||T,t,G,S)!==!1&&(t._pt=R=new en(t._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(q){V[q]=R}),O.priority&&(b=1)),!F||z)for(w in T)hn[w]&&(O=s_(w,T,t,G,v,S))?O.priority&&(b=1):V[w]=R=wh.call(t,v,w,"get",T[w],G,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),x&&t._pt&&(Ui=t,pe.killTweensOf(v,V,t.globalTime(e)),B=!t.parent,Ui=0),t._pt&&l&&(Tu[P.id]=1)}b&&h_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,f&&e<=0&&y.render(Cn,!0,!0)},QE=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Pu=1,t.vars[e]="+=0",Ch(t,o),Pu=0,l?fa(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=ye(n)+Ve(h.e)),h.b&&(h.b=u.s+Ve(h.b))},tA=function(t,e){var n=t[0]?pr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=fs({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},eA=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(He(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},na=function(t,e,n,i,s){return xe(t)?t.call(e,n,i,s):Ue(t)&&~t.indexOf("random(")?pa(t):t},a_=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",o_={};tn(a_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return o_[r]=1});var Ae=(function(r){Am(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ta(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||pe,x=(He(n)||Cm(n)?yi(n[0]):"length"in i)?[n]:Rn(n),y,T,E,w,R,v,b,P;if(o._targets=x.length?Eh(x):fa("GSAP target "+n+" not found. https://gsap.com",!gn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||ro(c)||ro(u)){if(i=o.vars,y=o.timeline=new qe({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),y.kill(),y.parent=y._dp=ci(o),y._start=0,f||ro(c)||ro(u)){if(w=x.length,b=f&&Xm(f),ti(f))for(R in f)~a_.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(T=0;T<w;T++)E=Bo(i,o_),E.stagger=0,m&&(E.yoyoEase=m),P&&fs(E,P),v=x[T],E.duration=+na(c,ci(o),T,v,x),E.delay=(+na(u,ci(o),T,v,x)||0)-o._delay,!f&&w===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),y.to(v,E,b?b(T,v,x):0),y._ease=Ht.none;y.duration()?c=u=0:o.timeline=0}else if(g){ta(xn(y.vars.defaults,{ease:"none"})),y._ease=_r(g.ease||i.ease||"none");var F=0,O,V,G;if(He(g))g.forEach(function(z){return y.to(x,z,">")}),y.duration();else{E={};for(R in g)R==="ease"||R==="easeEach"||eA(R,g[R],E,g.easeEach);for(R in E)for(O=E[R].sort(function(z,B){return z.t-B.t}),F=0,T=0;T<O.length;T++)V=O[T],G={ease:V.e,duration:(V.t-(T?O[T-1].t:0))/100*c},G[R]=V.v,y.to(x,G,F),F+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!vh&&(Ui=ci(o),pe.killTweensOf(x),Ui=0),Wn(S,ci(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===de(S._time)&&Qe(h)&&DE(ci(o))&&S.data!=="nested")&&(o._tTime=-ae,o.render(Math.max(0,-u)||0)),p&&Vm(ci(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ae&&!u?l:i<ae?0:i,f,d,g,_,p,m,S,x,y;if(!c)NE(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=de(h%_),h===l?(g=this._repeat,f=c):(p=de(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(y=this._yEase,f=c-f),p=ds(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&n_(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(de(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Hm(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!o&&h&&!s&&!p&&(mn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Eu(this,i,s,a),mn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Eu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vi(this,1),!s&&!(u&&!o)&&(h||o||m)&&(mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ma||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ch(this,c),u=this._ease(c/this._dur),QE(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(rl(this,0),this.parent||zm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Xs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Be),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ui&&Ui.vars.overwrite!==!0)._first||Xs(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Rn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&PE(o,l))return s==="all"&&(this._pt=0),Xs(this);for(h=this._op=this._op||[],s!=="all"&&(Ue(s)&&(_={},tn(s,function(S){return _[S]=1}),s=_),s=tA(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&nl(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Xs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ea(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ea(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return pe.killTweensOf(i,s,a)},t})(_a);xn(Ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(r){Ae[r]=function(){var t=new qe,e=wu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Rh=function(t,e,n){return t[e]=n},l_=function(t,e,n){return t[e](n)},nA=function(t,e,n,i){return t[e](i.fp,n)},iA=function(t,e,n){return t.setAttribute(e,n)},Ph=function(t,e){return xe(t[e])?l_:xh(t[e])&&t.setAttribute?iA:Rh},c_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},rA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},u_=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Lh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},sA=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},aA=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?nl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},oA=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},h_=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},en=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||c_,this.d=l||this,this.set=c||Rh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=oA,this.m=n,this.mt=s,this.tween=i},r})();tn(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return bh[r]=1});vn.TweenMax=vn.TweenLite=Ae;vn.TimelineLite=vn.TimelineMax=qe;pe=new qe({sortChildren:!1,defaults:hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=t_;var gr=[],yo={},lA=[],kd=0,cA=0,ac=function(t){return(yo[t]||lA).map(function(e){return e()})},Lu=function(){var t=Date.now(),e=[];t-kd>2&&(ac("matchMediaInit"),gr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Hn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ac("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kd=t,ac("matchMedia"))},f_=(function(){function r(e,n){this.selector=n&&Cu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cA++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){xe(n)&&(s=i,i=n,n=xe);var a=this,o=function(){var c=fe,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Cu(s)),fe=a,h=i.apply(a,arguments),xe(h)&&a._r.push(h),fe=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===xe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=fe;fe=null,n(this),fe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ae&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ae)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=gr.length;a--;)gr[a].id===this.id&&gr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),uA=(function(){function r(e){this.contexts=[],this.scope=e,fe&&fe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ti(n)||(n={matches:n});var a=new f_(0,s||this.scope),o=a.conditions={},l,c,u;fe&&!a.selector&&(a.selector=fe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Hn.matchMedia(n[c]),l&&(gr.indexOf(a)<0&&gr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lu):l.addEventListener("change",Lu)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ko={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return jm(i)})},timeline:function(t){return new qe(t)},getTweensOf:function(t,e){return pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ue(t)&&(t=Rn(t)[0]);var s=pr(t||{}).get,a=n?Bm:Om;return n==="native"&&(n=""),t&&(e?a((hn[e]&&hn[e].get||s)(t,e,n,i)):function(o,l,c){return a((hn[o]&&hn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Rn(t),t.length>1){var i=t.map(function(u){return rn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=hn[e],o=pr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;qr._pt=0,h.init(t,n?u+n:u,qr,0,[t]),h.render(1,h),qr._pt&&Lh(1,qr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=rn.to(t,xn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_r(t.ease,hs.ease)),Ud(hs,t||{})},config:function(t){return Ud(gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!hn[o]&&!vn[o]&&fa(e+" effect requires "+o+" plugin.")}),nc[e]=function(o,l,c){return n(Rn(o),xn(l||{},s),c)},a&&(qe.prototype[e]=function(o,l,c){return this.add(nc[e](o,ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ht[t]=_r(e)},parseEase:function(t,e){return arguments.length?_r(t,e):Ht},getById:function(t){return pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new qe(t),i,s;for(n.smoothChildTiming=Qe(t.smoothChildTiming),pe.remove(n),n._dp=0,n._time=n._tTime=pe._time,i=pe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ae&&i.vars.onComplete===i._targets[0]))&&Wn(n,i,i._start-i._delay),i=s;return Wn(pe,n,0),n},context:function(t,e){return t?new f_(t,e):fe},matchMedia:function(t){return new uA(t)},matchMediaRefresh:function(){return gr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Lu()},addEventListener:function(t,e){var n=yo[t]||(yo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=yo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:HE,wrapYoyo:GE,distribute:Xm,random:Ym,snap:qm,normalize:VE,getUnit:Ve,clamp:OE,splitColor:$m,toArray:Rn,selector:Cu,mapRange:Km,pipe:zE,unitize:kE,interpolate:WE,shuffle:Wm},install:Dm,effects:nc,ticker:pn,updateRoot:qe.updateRoot,plugins:hn,globalTimeline:pe,core:{PropTween:en,globals:Im,Tween:Ae,Timeline:qe,Animation:_a,getCache:pr,_removeLinkedListItem:nl,reverting:function(){return Be},context:function(t){return t&&fe&&(fe.data.push(t),t._ctx=fe),fe},suppressOverwrites:function(t){return vh=t}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ko[r]=Ae[r]});pn.add(qe.updateRoot);qr=ko.to({},{duration:0});var hA=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},fA=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=hA(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},oc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ue(s)&&(l={},tn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}fA(o,s)}}}},rn=ko.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oc("roundProps",Ru),oc("modifiers"),oc("snap",qm))||ko;Ae.version=qe.version=rn.version="3.14.2";Lm=1;yh()&&ms();Ht.Power0;Ht.Power1;Ht.Power2;Ht.Power3;Ht.Power4;Ht.Linear;Ht.Quad;Ht.Cubic;Ht.Quart;Ht.Quint;Ht.Strong;Ht.Elastic;Ht.Back;Ht.SteppedEase;Ht.Bounce;Ht.Sine;Ht.Expo;Ht.Circ;var Vd,Fi,$r,Dh,fr,Hd,Ih,dA=function(){return typeof window<"u"},Si={},sr=180/Math.PI,Qr=Math.PI/180,Vr=Math.atan2,Gd=1e8,Nh=/([A-Z])/g,pA=/(left|right|width|margin|padding|x)/i,mA=/[\s,\(]\S/,Yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Du=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_A=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},vA=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xA=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},d_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},p_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yA=function(t,e,n){return t.style[e]=n},SA=function(t,e,n){return t.style.setProperty(e,n)},MA=function(t,e,n){return t._gsap[e]=n},bA=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},TA=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},EA=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},_e="transform",nn=_e+"Origin",AA=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Si&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Yn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=hi(i,o)}):this.tfm[t]=a.x?a[t]:hi(i,t),t===nn&&(this.tfm.zOrigin=a.zOrigin);else return Yn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(_e)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,e,"")),t=_e}(s||e)&&this.props.push(t,e,s[t])},m_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},wA=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Nh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ih(),(!s||!s.isStart)&&!n[_e]&&(m_(n),i.zOrigin&&n[nn]&&(n[nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},__=function(t,e){var n={target:t,props:[],revert:wA,save:AA};return t._gsap||rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},g_,Iu=function(t,e){var n=Fi.createElementNS?Fi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Fi.createElement(t);return n&&n.style?n:Fi.createElement(t)},_n=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Nh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,_s(e)||e,1)||""},Wd="O,Moz,ms,Ms,Webkit".split(","),_s=function(t,e,n){var i=e||fr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Wd[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Wd[a]:"")+t},Nu=function(){dA()&&window.document&&(Vd=window,Fi=Vd.document,$r=Fi.documentElement,fr=Iu("div")||{style:{}},Iu("div"),_e=_s(_e),nn=_e+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",g_=!!_s("perspective"),Ih=rn.core.reverting,Dh=1)},Xd=function(t){var e=t.ownerSVGElement,n=Iu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),$r.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),$r.removeChild(n),s},qd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},v_=function(t){var e,n;try{e=t.getBBox()}catch{e=Xd(t),n=1}return e&&(e.width||e.height)||n||(e=Xd(t)),e&&!e.width&&!e.x&&!e.y?{x:+qd(t,["x","cx","x1"])||0,y:+qd(t,["y","cy","y1"])||0,width:0,height:0}:e},x_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&v_(t))},Hi=function(t,e){if(e){var n=t.style,i;e in Si&&e!==nn&&(e=_e),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Nh,"-$1").toLowerCase())):n.removeAttribute(e)}},Oi=function(t,e,n,i,s,a){var o=new en(t._pt,e,n,0,1,a?p_:d_);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Yd={deg:1,rad:1,turn:1},CA={grid:1,flex:1},Gi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=fr.style,l=pA.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===a||!s||Yd[i]||Yd[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&x_(t),(d||a==="%")&&(Si[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],ye(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Fi||!_.appendChild)&&(_=Fi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===pn.time&&!p.uncache)return ye(s/p.width*h);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=h+i,g=t[u],S?t.style[e]=S:Hi(t,e)}else(d||a==="%")&&!CA[_n(_,"display")]&&(o.position=_n(t,"position")),_===t&&(o.position="static"),_.appendChild(fr),g=fr[u],_.removeChild(fr),o.position="absolute";return l&&d&&(p=pr(_),p.time=pn.time,p.width=_[u]),ye(f?g*s/h:g&&s?h/g*s:0)},hi=function(t,e,n,i){var s;return Dh||Nu(),e in Yn&&e!=="transform"&&(e=Yn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Si[e]&&e!=="transform"?(s=va(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ho(_n(t,nn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Vo[e]&&Vo[e](t,e,n)||_n(t,e)||Um(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Gi(t,e,s,n)+n:s},RA=function(t,e,n,i){if(!n||n==="none"){var s=_s(e,t,1),a=s&&_n(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var o=new en(this._pt,t.style,e,0,1,u_),l=0,c=0,u,h,f,d,g,_,p,m,S,x,y,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_n(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=_n(t,e)||i,_?t.style[e]=_:Hi(t,e)),u=[n,i],t_(u),n=u[0],i=u[1],f=n.match(Xr)||[],T=i.match(Xr)||[],T.length){for(;h=Xr.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=jr(d,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=Xr.lastIndex-x.length,x||(x=x||gn.units[e]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(d=Gi(t,e,_,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?p_:d_;return Pm.test(i)&&(o.e=0),this._pt=o,o},Zd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PA=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Zd[n]||n,e[1]=Zd[i]||i,e.join(" ")},LA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Si[o]&&(l=1,o=o==="transformOrigin"?nn:_e),Hi(n,o);l&&(Hi(n,_e),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",va(n,1),a.uncache=1,m_(i)))}},Vo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new en(t._pt,e,n,0,0,LA);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ga=[1,0,0,1,0,0],y_={},S_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Kd=function(t){var e=_n(t,_e);return S_(e)?ga:e.substr(7).match(Rm).map(ye)},Uh=function(t,e){var n=t._gsap||pr(t),i=t.style,s=Kd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ga:s):(s===ga&&!t.offsetParent&&t!==$r&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,$r.appendChild(t)),s=Kd(t),l?i.display=l:Hi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):$r.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Uu=function(t,e,n,i,s,a){var o=t._gsap,l=s||Uh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],x=e.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,E,w,R,v;n?l!==ga&&(w=d*p-g*_)&&(R=y*(p/w)+T*(-_/w)+(_*S-p*m)/w,v=y*(-g/w)+T*(d/w)-(d*S-g*m)/w,y=R,T=v):(E=v_(t),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(x[1]||x[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&o.smooth?(m=y-c,S=T-u,o.xOffset=h+(m*d+S*_)-m,o.yOffset=f+(m*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[nn]="0px 0px",a&&(Oi(a,o,"xOrigin",c,y),Oi(a,o,"yOrigin",u,T),Oi(a,o,"xOffset",h,o.xOffset),Oi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},va=function(t,e){var n=t._gsap||new r_(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=_n(t,nn)||"0",u,h,f,d,g,_,p,m,S,x,y,T,E,w,R,v,b,P,F,O,V,G,z,B,q,nt,et,ct,Pt,It,Gt,Wt;return u=h=f=_=p=m=S=x=y=0,d=g=1,n.svg=!!(t.getCTM&&x_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[_e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_e]!=="none"?l[_e]:"")),i.scale=i.rotate=i.translate="none"),w=Uh(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Uu(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,E=n.yOrigin||0,w!==ga&&(P=w[0],F=w[1],O=w[2],V=w[3],u=G=w[4],h=z=w[5],w.length===6?(d=Math.sqrt(P*P+F*F),g=Math.sqrt(V*V+O*O),_=P||F?Vr(F,P)*sr:0,S=O||V?Vr(O,V)*sr+_:0,S&&(g*=Math.abs(Math.cos(S*Qr))),n.svg&&(u-=T-(T*P+E*O),h-=E-(T*F+E*V))):(Wt=w[6],It=w[7],et=w[8],ct=w[9],Pt=w[10],Gt=w[11],u=w[12],h=w[13],f=w[14],R=Vr(Wt,Pt),p=R*sr,R&&(v=Math.cos(-R),b=Math.sin(-R),B=G*v+et*b,q=z*v+ct*b,nt=Wt*v+Pt*b,et=G*-b+et*v,ct=z*-b+ct*v,Pt=Wt*-b+Pt*v,Gt=It*-b+Gt*v,G=B,z=q,Wt=nt),R=Vr(-O,Pt),m=R*sr,R&&(v=Math.cos(-R),b=Math.sin(-R),B=P*v-et*b,q=F*v-ct*b,nt=O*v-Pt*b,Gt=V*b+Gt*v,P=B,F=q,O=nt),R=Vr(F,P),_=R*sr,R&&(v=Math.cos(R),b=Math.sin(R),B=P*v+F*b,q=G*v+z*b,F=F*v-P*b,z=z*v-G*b,P=B,G=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=ye(Math.sqrt(P*P+F*F+O*O)),g=ye(Math.sqrt(z*z+Wt*Wt)),R=Vr(G,z),S=Math.abs(R)>2e-4?R*sr:0,y=Gt?1/(Gt<0?-Gt:Gt):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!S_(_n(t,_e)),B&&t.setAttribute("transform",B))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ye(d),n.scaleY=ye(g),n.rotation=ye(_)+o,n.rotationX=ye(p)+o,n.rotationY=ye(m)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[nn]=Ho(c)),n.xOffset=n.yOffset=0,n.force3D=gn.force3D,n.renderTransform=n.svg?IA:g_?M_:DA,n.uncache=0,n},Ho=function(t){return(t=t.split(" "))[0]+" "+t[1]},lc=function(t,e,n){var i=Ve(e);return ye(parseFloat(e)+parseFloat(Gi(t,"x",n+"px",i)))+i},DA=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,M_(t,e)},tr="0deg",Os="0px",er=") ",M_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,x=n.zOrigin,y="",T=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==tr||u!==tr)){var E=parseFloat(u)*Qr,w=Math.sin(E),R=Math.cos(E),v;E=parseFloat(h)*Qr,v=Math.cos(E),a=lc(S,a,w*v*-x),o=lc(S,o,-Math.sin(E)*-x),l=lc(S,l,R*v*-x+x)}p!==Os&&(y+="perspective("+p+er),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||a!==Os||o!==Os||l!==Os)&&(y+=l!==Os||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+er),c!==tr&&(y+="rotate("+c+er),u!==tr&&(y+="rotateY("+u+er),h!==tr&&(y+="rotateX("+h+er),(f!==tr||d!==tr)&&(y+="skew("+f+", "+d+er),(g!==1||_!==1)&&(y+="scale("+g+", "+_+er),S.style[_e]=y||"translate(0, 0)"},IA=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,x=parseFloat(a),y=parseFloat(o),T,E,w,R,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Qr,c*=Qr,T=Math.cos(l)*h,E=Math.sin(l)*h,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=Qr,v=Math.tan(c-u),v=Math.sqrt(1+v*v),w*=v,R*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),T*=v,E*=v)),T=ye(T),E=ye(E),w=ye(w),R=ye(R)):(T=h,R=f,E=w=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Gi(d,"x",a,"px"),y=Gi(d,"y",o,"px")),(g||_||p||m)&&(x=ye(x+g-(g*T+_*w)+p),y=ye(y+_-(g*E+_*R)+m)),(i||s)&&(v=d.getBBox(),x=ye(x+i/100*v.width),y=ye(y+s/100*v.height)),v="matrix("+T+","+E+","+w+","+R+","+x+","+y+")",d.setAttribute("transform",v),S&&(d.style[_e]=v)},NA=function(t,e,n,i,s){var a=360,o=Ue(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?sr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Gd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Gd)%a-~~(c/a)*a)),t._pt=f=new en(t._pt,e,n,i,c,_A),f.e=u,f.u="deg",t._props.push(n),f},Jd=function(t,e){for(var n in e)t[n]=e[n];return t},UA=function(t,e,n){var i=Jd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[_e]=e,o=va(n,1),Hi(n,_e),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_e],a[_e]=e,o=va(n,1),a[_e]=c);for(l in Si)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Ve(c),g=Ve(u),h=d!==g?Gi(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new en(t._pt,o,l,h,f-h,Du),t._pt.u=g||0,t._props.push(l));Jd(o,i)};tn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Vo[t>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return hi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var b_={name:"css",register:Nu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,S,x,y,T,E,w,R,v;Dh||Nu(),this.styles=this.styles||__(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(hn[_]&&s_(_,e,n,i,t,s)))){if(d=typeof u,g=Vo[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=pa(u)),g)g(this,t,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",zi.lastIndex=0,zi.test(c)||(p=Ve(c),m=Ve(u),m?p!==m&&(c=Gi(t,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ue(c)&&~c.indexOf("random(")&&(c=pa(c)),Ve(c+"")||c==="auto"||(c+=gn.units[_]||Ve(hi(t,_))||""),(c+"").charAt(1)==="="&&(c=hi(t,_))):c=hi(t,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in Yn&&(_==="autoAlpha"&&(f===1&&hi(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,o.visibility),Oi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Yn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Si,x){if(this.styles.save(_),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=_n(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=_n(t,"perspective"),b?t.style.perspective=b:Hi(t,"perspective")}h=parseFloat(u)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||va(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new en(this._pt,o,_e,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new en(this._pt,T,"scaleY",T.scaleY,(S?jr(T.scaleY,S+h):h)-T.scaleY||0,Du),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(nn,0,o[nn]),u=PA(u),T.svg?Uu(t,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==T.zOrigin&&Oi(this,T,"zOrigin",T.zOrigin,m),Oi(this,o,_,Ho(c),Ho(u)));continue}else if(_==="svgOrigin"){Uu(t,u,1,E,0,this);continue}else if(_ in y_){NA(this,T,_,f,S?jr(f,S+u):u);continue}else if(_==="smoothOrigin"){Oi(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){UA(this,u,t);continue}}else _ in o||(_=_s(_)||_);if(x||(h||h===0)&&(f||f===0)&&!mA.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),m=Ve(u)||(_ in gn.units?gn.units[_]:p),p!==m&&(f=Gi(t,_,c,m)),this._pt=new en(this._pt,x?T:o,_,f,(S?jr(f,S+h):h)-f,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?xA:Du),this._pt.u=m||0,x&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=vA):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=gA);else if(_ in o)RA.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Mh(_,u);continue}x||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),a.push(_)}}w&&h_(this)},render:function(t,e){if(e.tween._time||!Ih())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:hi,aliases:Yn,getSetter:function(t,e,n){var i=Yn[e];return i&&i.indexOf(",")<0&&(e=i),e in Si&&e!==nn&&(t._gsap.x||hi(t,"x"))?n&&Hd===n?e==="scale"?bA:MA:(Hd=n||{})&&(e==="scale"?TA:EA):t.style&&!xh(t.style[e])?yA:~e.indexOf("-")?SA:Ph(t,e)},core:{_removeProperty:Hi,_getMatrix:Uh}};rn.utils.checkPrefix=_s;rn.core.getStyleSaver=__;(function(r,t,e,n){var i=tn(r+","+t+","+e,function(s){Si[s]=1});tn(t,function(s){gn.units[s]="deg",y_[s]=1}),Yn[i[13]]=r+","+t,tn(n,function(s){var a=s.split(":");Yn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){gn.units[r]="px"});rn.registerPlugin(b_);var T_=rn.registerPlugin(b_)||rn;T_.core.Tween;const FA=120,OA=150,BA=250,zA=500,so=1;let ao=null,xa=null;function kA(){return ao||(ao=kg(async()=>{const{ScrollTrigger:r}=await import("./Heh74mPD.js");return{ScrollTrigger:r}},[],import.meta.url).then(({ScrollTrigger:r})=>(T_.registerPlugin(r),xa=r,r.config({autoRefreshEvents:"visibilitychange,DOMContentLoaded,load"}),VA(),HA(),r)),ao)}let oo=null;const jd=()=>xa?.update();function VA(){bs.subscribe(r=>{r!==oo&&(oo?.off("scroll",jd),oo=r,oo?.on("scroll",jd))})}let Fu=0,Ou=0,lo=null;function HA(){Fu=window.innerWidth,Ou=window.innerHeight,window.addEventListener("resize",$d,{passive:!0}),window.addEventListener("orientationchange",$d,{passive:!0})}function $d(){const r=window.innerWidth,t=window.innerHeight,e=r!==Fu,n=Math.abs(t-Ou);n!==0&&(w_=performance.now()),!(!e&&(n===0||Zn(el).isTouch&&n<t*.25))&&(Fu=r,Ou=t,lo&&clearTimeout(lo),lo=setTimeout(()=>{lo=null,Zn(bs)?.resize(),E_()},OA))}let ts=null;function Go(){ts&&clearTimeout(ts),ts=setTimeout(E_,FA)}function E_(){if(ts&&clearTimeout(ts),ts=null,!Wo){xa&&(xa.refresh(),A_=performance.now(),Zn(bs)?.resize());for(const r of Bu)r()}}const Bu=new Set;function mw(r){return Bu.add(r),()=>Bu.delete(r)}let Wo=!1,es=null;const zu=new Set,ku=new Set;function _w(r=3e3){Wo=!0,es&&clearTimeout(es),es=setTimeout(GA,r)}function GA(){if(es&&clearTimeout(es),es=null,!!Wo){Wo=!1,xa?.clearScrollMemory(),Go();for(const r of zu)r()}}function gw(){for(const r of ku)r()}function vw(r){return ku.add(r),()=>ku.delete(r)}function xw(r){return zu.add(r),()=>zu.delete(r)}let cc=null,A_=0,w_=-1/0;const Bs=new Map,uc=new WeakMap;function yw(r){cc??=new ResizeObserver(e=>{if(performance.now()-A_<BA)return;let n=!1,i=!1;for(const s of e){const a=s.borderBoxSize?.[0],o=a?a.inlineSize:s.contentRect.width,l=a?a.blockSize:s.contentRect.height,c=uc.get(s.target);if(!c){uc.set(s.target,{w:o,h:l});continue}const u=Math.abs(o-c.w),h=Math.abs(l-c.h);u<=so&&h<=so||(uc.set(s.target,{w:o,h:l}),u>so&&(n=!0),h>so&&(i=!0))}!n&&Zn(el).isTouch&&performance.now()-w_<zA||!n&&!i||Go()});const t=r.filter(e=>!!e);for(const e of t){const n=Bs.get(e)??0;Bs.set(e,n+1),n===0&&cc.observe(e)}return()=>{for(const e of t){const n=(Bs.get(e)??1)-1;n<=0?(Bs.delete(e),cc?.unobserve(e)):Bs.set(e,n)}}}function Sw(r){let t=!1,e;return kA().then(n=>{if(!t){if(e=r(n),t){e?.(),e=void 0;return}Go()}}),()=>{t=!0,e?.(),e=void 0,Go()}}const Vu=new Set;function Mw(r){return Vu.add(r),()=>Vu.delete(r)}const WA=2;function bw(r){for(const t of Vu){const e=t();if(e&&r>=e.top-WA&&r<e.settled)return e.settled}return r}var XA=Ng("<svg></svg>");function qA(r,t){const e=Vg(t,["children","$$slots","$$events","$$legacy"]);var n=XA();Mp(n,()=>({xmlns:"http://www.w3.org/2000/svg",width:"12",height:"13",fill:"none",viewBox:"0 0 12 13",...e})),Zg(n,()=>'<path stroke="currentColor" stroke-linecap="round" stroke-width="1.8" d="m10.7 6.117-5 5-5-5M5.7.7v10"/>',!0),fi(n),Ce(r,n)}var YA=gs('<span aria-hidden="true"><span class="IconAnimatedArrow-rotor svelte-1fujrtx"><!></span></span>');function ZA(r,t){let e=un(t,"direction",3,"bottom"),n=un(t,"class",3,""),i=un(t,"size",3,"12px"),s=un(t,"distance",3,4),a=un(t,"duration",3,1.6),o=un(t,"animate",3,!0);const l={bottom:0,left:90,top:180,right:-90},c={bottom:[0,1],left:[-1,0],top:[0,-1],right:[1,0]},u=Fn(()=>l[e()]),h=Fn(()=>c[e()][0]*s()),f=Fn(()=>c[e()][1]*s());var d=YA();let g;var _=Di(d);let p;var m=Di(_);qA(m,{}),fi(_),fi(d),cr(()=>{wo(d,1,Ao(["IconAnimatedArrow",o()&&"IconAnimatedArrow--animated",n()]),"svelte-1fujrtx"),g=gc(d,"",g,{"--arrow-size":i(),"--arrow-shift-x":`${ue(h)??""}px`,"--arrow-shift-y":`${ue(f)??""}px`,"--arrow-duration":`${a()??""}s`}),p=gc(_,"",p,{"--arrow-rotation":`${ue(u)??""}deg`})}),Ce(r,d)}var KA=new Set(["$$slots","$$events","$$legacy","field","document","rel","children"]),JA=gs("<a><!></a>");function jA(r,t){dp(t,!0);const e=Hg(t,KA),n=Fn(()=>C0(t.field??t.document,{rel:typeof t.rel=="function"?t.rel:void 0})),i=Fn(()=>("href"in e?t.href:ue(n).href)||""),s=Fn(()=>typeof t.rel=="string"?t.rel:ue(n).rel);var a=JA();Mp(a,()=>({...ue(n),rel:ue(s),href:ue(i),...e}));var o=Di(a);{var l=u=>{var h=Li(),f=bn(h);ir(f,()=>t.children??zs),Ce(u,h)},c=u=>{var h=mp();cr(()=>mc(h,t.field?.text)),Ce(u,h)};nr(o,u=>{t.children?u(l):u(c,-1)})}fi(a),Ce(r,a),pp()}var hc=gs('<div class="Button-label svelte-18sv61c"><!></div> <div class="Button-bg svelte-18sv61c"></div>',1),$A=gs("<span> </span> <!>",1),QA=gs("<a><!></a>"),t1=gs("<button><!></button>");function Tw(r,t){dp(t,!0);let e=un(t,"href",3,null),n=un(t,"prismicLink",3,null),i=un(t,"isExternal",3,!1),s=un(t,"type",3,"button"),a=un(t,"disabled",3,!1),o=un(t,"variant",3,"default"),l=un(t,"className",3,"");const c=Fn(()=>n()?.url??e()??void 0),u=Fn(()=>i()||n()?.target==="_blank"),h=Fn(()=>[o()==="primary"?"Button Button--primary":"Button",o()==="outlined"?"outlined":"",l()].filter(Boolean).join(" ")),f=Fn(()=>t.umamiEvent??void 0),d=Fn(()=>t.umamiEventUrl??ue(c)??void 0);var g=Li(),_=bn(g);{var p=x=>{jA(x,{get field(){return n()},get class(){return ue(h)},get"data-umami-event"(){return ue(f)},get"data-umami-event-url"(){return ue(d)},children:(y,T)=>{var E=Li(),w=bn(E);{var R=b=>{var P=hc(),F=bn(P),O=Di(F);{var V=z=>{var B=Li(),q=bn(B);ir(q,()=>t.children),Ce(z,B)},G=z=>{var B=mp();cr(()=>mc(B,n().text)),Ce(z,B)};nr(O,z=>{t.children?z(V):z(G,-1)})}fi(F),dl(2),Ce(b,P)},v=b=>{var P=Li(),F=bn(P);{var O=G=>{var z=Li(),B=bn(z);ir(B,()=>t.children),Ce(G,z)},V=G=>{var z=$A(),B=bn(z),q=Ug(B,!0),nt=Fg(B,2);ZA(nt,{direction:"right"}),cr(()=>mc(q,n().text)),Ce(G,z)};nr(F,G=>{t.children?G(O):G(V,-1)})}Ce(b,P)};nr(w,b=>{o()==="primary"?b(R):b(v,-1)})}Ce(y,E)},$$slots:{default:!0}})},m=x=>{var y=QA(),T=Di(y);{var E=R=>{var v=hc(),b=bn(v),P=Di(b);ir(P,()=>t.children??zs),fi(b),dl(2),Ce(R,v)},w=R=>{var v=Li(),b=bn(v);ir(b,()=>t.children??zs),Ce(R,v)};nr(T,R=>{o()==="primary"?R(E):R(w,-1)})}fi(y),cr(()=>{cn(y,"href",ue(c)),wo(y,1,Ao(ue(h)),"svelte-18sv61c"),cn(y,"target",ue(u)?"_blank":void 0),cn(y,"rel",ue(u)?"noopener noreferrer":void 0),cn(y,"data-umami-event",ue(f)),cn(y,"data-umami-event-url",ue(d))}),Ce(x,y)},S=x=>{var y=t1(),T=Di(y);{var E=R=>{var v=hc(),b=bn(v),P=Di(b);ir(P,()=>t.children??zs),fi(b),dl(2),Ce(R,v)},w=R=>{var v=Li(),b=bn(v);ir(b,()=>t.children??zs),Ce(R,v)};nr(T,R=>{o()==="primary"?R(E):R(w,-1)})}fi(y),cr(()=>{cn(y,"type",s()),y.disabled=a(),wo(y,1,Ao(ue(h)),"svelte-18sv61c"),cn(y,"data-umami-event",ue(f)),cn(y,"data-umami-event-url",ue(d))}),hp("click",y,function(...R){t.onclick?.apply(this,R)}),Ce(x,y)};nr(_,x=>{n()?x(p):e()?x(m,1):x(S,-1)})}Ce(r,g),pp()}fp(["click"]);const Wi={screenFade:1,groundFade:0,saturation:0,screenSaturation:1,intensity:.04,speed:.36},Yr=Object.keys(Wi),fc=.1;function Un(r,t,e,n,i={},s){return{pose:{target:r?new D(...r):null,radius:t,phi:e,theta:n},params:{...Wi,...i},damp:s}}const Hu={usecaseHero:Un([0,.1,0],7.2,1.434,0,{screenFade:0,saturation:1,intensity:0,speed:.36}),top:Un([0,0,0],34,.05,0,{screenFade:1,saturation:0,intensity:0,speed:.36}),carousel:Un([0,.1,0],7.2,1.434,null,{screenFade:0,saturation:1,intensity:0,speed:.36}),pIndex:Un([0,.1,0],21,1.434,null,{screenFade:0,saturation:1,intensity:0,speed:.36}),topZoomed:Un([3.5,0,0],18,.25,.4,{screenFade:1,saturation:0,intensity:0,speed:.36}),lightsOff:Un([0,-.05,0],10,1.434,null,{screenFade:1,groundFade:1,saturation:0,intensity:.4,speed:.5}),txtCta:Un([0,-.05,0],9.8,1.434,null,{screenFade:.95,groundFade:.9,screenSaturation:0,saturation:0,intensity:.4,speed:.5},.1),footer:Un([0,.1,0],21,1.434,0,{screenFade:1,groundFade:1,saturation:1,intensity:0,speed:.36},.3),nextPage:Un([0,.1,-1],21,1.434,0,{screenFade:0,groundFade:0,saturation:1,intensity:0,speed:.36}),mirageLogo:Un([0,-.35,0],6.5,1.364,1.641,{screenFade:1,saturation:0,intensity:.4,speed:.5}),statement:Un([-1,-2.6,4.55],7.8,.052,.408,{screenFade:1,groundFade:0,saturation:0,intensity:0,speed:.36})},e1={carousel:{target:[0,-.15,0],radius:8.2},pIndex:{target:[0,-1,0],radius:17.2,phi:1.392},footer:{radius:34,theta:null},lightsOff:{radius:28.9},top:{radius:49}};function Qd(r){return{pose:{target:r.pose.target?.clone()??null,radius:r.pose.radius,phi:r.pose.phi,theta:r.pose.theta},params:{...r.params},damp:r.damp}}function n1(r,t){const e=Qd(r);return t?"pose"in t?Qd(t):(t.target!==void 0&&(e.pose.target=t.target?new D(...t.target):null),t.radius!==void 0&&(e.pose.radius=t.radius),t.phi!==void 0&&(e.pose.phi=t.phi),t.theta!==void 0&&(e.pose.theta=t.theta),t.params&&Object.assign(e.params,t.params),t.damp!==void 0&&(e.damp=t.damp),e):e}const i1=Object.fromEntries(Object.keys(Hu).map(r=>[r,n1(Hu[r],e1[r])])),r1=Me(Zn(el).isMobile??!1);let C_=!1;r1.subscribe(r=>{C_=r});function s1(){return C_?i1:Hu}function dr(r){return s1()[r]}const a1=Me("top"),ui={...Wi};function Ew(){return ui}let So=null;function Aw(){return So}let Mo=null;function ww(){return Mo}const Fh=Me(!0),Cw=Me(0),R_=Me(90);function Rw(){R_.update(r=>r>0?r-1:0)}const P_=Me({pose:{target:new D(0,.2,0),radius:10,phi:Math.PI*.315,theta:Math.PI/2},params:{...dr("carousel").params}});let Oh;P_.subscribe(r=>{Oh=r});function Pw(r,t){P_.set({pose:{target:r.target.clone(),radius:r.radius,phi:r.phi,theta:r.theta},params:{...t}})}const ns=Me([]);Yu(ns,r=>r.length>0);let L_=[];ns.subscribe(r=>{L_=r});let sl=()=>window.scrollY;function Lw(r){sl=r}function Dw(){return sl()}let co=!1;const Iw=Me(null),Nw=Me(null),Uw=Me(!1),o1=Me(.5);let D_=.5,tp=!1;o1.subscribe(r=>{D_=r,tp&&Ys(),tp=!0});function I_(r){const t=r.el.getBoundingClientRect(),e=r.el.parentElement,n=e?.classList.contains("pin-spacer")&&getComputedStyle(r.el).position==="fixed"?e.getBoundingClientRect():t,i=Gr(),a=i>Mm()?Math.min(i*(.5-D_),t.height/2):t.height/2;r.anchorY=n.top+sl()+a}function Ys(){ns.update(r=>(r.forEach(I_),[...r].sort((t,e)=>t.anchorY-e.anchorY)))}const Gu=r=>r*r*(3-2*r),l1=r=>r*(2-r),c1=new Set(["screenFade","groundFade"]),we={target:new D,radius:0,phi:0,theta:0};function u1(r){const t=sl(),e=r/2;if(e<=0||r<=Mm())return t+e;const n=Math.max(document.documentElement.scrollHeight-r,0),i=1-Gu(Math.min(Math.max(t/e,0),1)),s=1-Gu(Math.min(Math.max((n-t)/e,0),1));return t+e*(1-i+s)}const lr={pose:{target:new D,radius:0,phi:0,theta:0},params:{...Wi}};let Bh=!1,bo=0;function Fw(){return Bh?lr.pose:null}function dc(){return Zn(Fh)||Zn(R_)>0?Oh:bo>0&&Bh?lr:dr(Zn(a1))??dr("top")}function h1(r,t,e,n){for(let i=0;i<Yr.length;i++){const s=Yr[i],a=r[s]??Wi[s]??0,o=t[s]??Wi[s]??0;ui[s]=a+(o-a)*(c1.has(s)?n:e)}}function Ow(r,t){const e=Oh.pose,n=e.target,i=e.radius,s=e.phi,a=e.theta,o=t?dr(t):void 0;if(o){we.target.copy(o.pose.target??n),we.radius=o.pose.radius??i,we.phi=o.pose.phi??s,we.theta=o.pose.theta??a;const B=o.damp??fc;for(let q=0;q<Yr.length;q++){const nt=Yr[q],et=o.params[nt]??Wi[nt];ui[nt]+=(et-ui[nt])*B}return So=null,Mo=t??null,{pose:we,params:ui,immediate:!1,damp:B}}const l=L_;if(l.length===0){const B=dc();we.target.copy(B.pose.target),we.radius=B.pose.radius,we.phi=B.pose.phi,we.theta=B.pose.theta,Object.assign(ui,Wi,B.params),bo>0&&bo--,So=null,Mo=null;const q={pose:we,params:ui,immediate:co,damp:B.damp??fc};return co=!1,q}const c=u1(r);let u=0;for(;u<l.length-1&&l[u+1].anchorY<=c;)u++;const h=l[u],f=l[Math.min(u+1,l.length-1)],d=f.lead!=null?Math.max(h.anchorY,f.anchorY-f.lead*r):h.anchorY,g=f.anchorY-d,_=g>0?Math.min(Math.max((c-d)/g,0),1):0,p=Gu(_),m=l1(_),S=dr(h.stateKey),x=dr(f.stateKey),y=S?.pose.target??n,T=x?.pose.target??n,E=S?.pose.radius??i,w=x?.pose.radius??i,R=S?.pose.phi??s,v=x?.pose.phi??s,b=S?.pose.theta??a,P=x?.pose.theta??a;we.target.lerpVectors(y,T,p),we.radius=E+(w-E)*p,we.phi=R+(v-R)*p,we.theta=b+(P-b)*p;const F=S?.params??dc().params,O=x?.params??dc().params;h1(F,O,p,m);const V=p<.5?h:f,G=V.immediate||co,z=dr(V.stateKey)?.damp??fc;co=!1,Mo=V.stateKey,So=V.stateKey==="carousel"?V.projectId:null,lr.pose.target.copy(we.target),lr.pose.radius=we.radius,lr.pose.phi=we.phi,lr.pose.theta=we.theta;for(let B=0;B<Yr.length;B++){const q=Yr[B];lr.params[q]=ui[q]}return Bh=!0,bo=8,{pose:we,params:ui,immediate:G,damp:z}}const Bw={v:0},zw={v:0};let al=!1,is;function kw(){return al}function Vw(r=2e3){al=!0,is&&clearTimeout(is),is=setTimeout(f1,r)}function f1(){is&&clearTimeout(is),is=void 0,al=!1,To!==null&&(Fh.set(To),To=null)}let To=null;function Hw(r){if(al){To=r;return}Fh.set(r)}function d1(r){return r.to?.route?.id?.endsWith("/works/[uid]")??!1}function p1(r){const t=/\/works\/[^/]+\/?$/.test(r.from?.url.pathname??""),e=r.to?.url.pathname==="/"||r.to?.url.pathname==="/webgl";return t&&e}function Gw(r){return d1(r)||p1(r)}function Ww(r=document.body){const t=new Map,e=_=>{if(_===void 0)return null;const p=parseFloat(_);return Number.isFinite(p)&&p>0?p:null},n=_=>{if(t.has(_))return;const p={el:_,stateKey:_.dataset.glState,immediate:_.hasAttribute("data-gl-immediate"),anchorY:0,projectId:_.dataset.projectId??null,lead:e(_.dataset.glLead)};I_(p),t.set(_,p),ns.update(m=>[...m,p].sort((S,x)=>S.anchorY-x.anchorY))},i=_=>{const p=t.get(_);p&&(t.delete(_),ns.update(m=>m.filter(S=>S!==p)))},s=()=>{const _=new Set(r.querySelectorAll("[data-gl-state]"));_.forEach(p=>n(p)),t.forEach((p,m)=>{_.has(m)||i(m)})};s();let a=0;const o=()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{s(),Ys()})},l=new MutationObserver(o);l.observe(r,{childList:!0,subtree:!0});let c=0;const u=()=>{cancelAnimationFrame(c),c=requestAnimationFrame(Ys)},h=new ResizeObserver(u);h.observe(r);const f=gE(Ys);return{stop:()=>{cancelAnimationFrame(a),cancelAnimationFrame(c),l.disconnect(),h.disconnect(),f(),t.clear(),ns.set([])},rescan:()=>{s(),Ys()}}}export{K1 as $,Dp as A,Tw as B,qt as C,Wf as D,fm as E,qp as F,Jo as G,Ln as H,ZA as I,Ha as J,jx as K,bi as L,kx as M,Vt as N,mh as O,fn as P,Se as Q,Ko as R,L1 as S,Oe as T,gt as U,D as V,$1 as W,Mi as X,qv as Y,lt as Z,he as _,ew as a,k1 as a$,Gn as a0,kt as a1,ki as a2,Sa as a3,V1 as a4,Ut as a5,Z1 as a6,Jr as a7,_o as a8,pu as a9,X1 as aA,N1 as aB,xs as aC,H1 as aD,Y1 as aE,je as aF,D1 as aG,ur as aH,Ea as aI,_l as aJ,Q0 as aK,Ne as aL,Fe as aM,Lc as aN,Dc as aO,pi as aP,sx as aQ,yr as aR,em as aS,ne as aT,I1 as aU,rx as aV,nm as aW,U1 as aX,O1 as aY,P1 as aZ,tm as a_,$e as aa,En as ab,j1 as ac,di as ad,Ep as ae,jA as af,y1 as ag,T_ as ah,Sw as ai,yw as aj,el as ak,i0 as al,M1 as am,tw as an,Sm as ao,Mw as ap,mw as aq,ju as ar,A1 as as,C1 as at,w1 as au,q1 as av,z1 as aw,os as ax,G1 as ay,W1 as az,E1 as b,Ww as b$,$v as b0,Co as b1,hu as b2,Qp as b3,Uo as b4,No as b5,$o as b6,jo as b7,R1 as b8,Nw as b9,R_ as bA,P_ as bB,Rw as bC,Iw as bD,Pw as bE,Fw as bF,Mm as bG,Dw as bH,la as bI,hr as bJ,sa as bK,jn as bL,Jn as bM,mm as bN,ev as bO,Jx as bP,Je as bQ,vs as bR,Ii as bS,_i as bT,bc as bU,vi as bV,Gw as bW,f1 as bX,dE as bY,lw as bZ,Lw as b_,hw as ba,GA as bb,gw as bc,_w as bd,aw as be,Uw as bf,ow as bg,zw as bh,ch as bi,wn as bj,dn as bk,Qn as bl,B1 as bm,gE as bn,fw as bo,Ew as bp,ww as bq,Bw as br,Cw as bs,Aw as bt,fE as bu,dr as bv,a1 as bw,kw as bx,Ow as by,fc as bz,Mp as c,xw as c0,Vw as c1,Cp as c2,o0 as c3,Hw as c4,cw as c5,vw as c6,sw as c7,rw as c8,wo as d,S1 as e,Fh as f,bw as g,Zg as h,b1 as i,dw as j,Q1 as k,bs as l,gc as m,nw as n,Ao as o,iw as p,L0 as q,T1 as r,cn as s,uw as t,pw as u,Gr as v,ir as w,yn as x,J1 as y,ya as z};
