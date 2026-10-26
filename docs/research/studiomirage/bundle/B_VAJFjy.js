import{G as kn,n as vt,J as En,m as Tn,bp as Pn,bq as An,x as Cn,br as In,v as Kt,a as fe,M as Xt,w as Ae,bs as ge,O as de,aA as le,u as Ue,g as O,r as te,bn as wt,T as Ve,R as On,aB as Vn,bo as St,p as Yt,y as xe,f as me,b as Jt,a0 as Dn,s as jt,c as Rn}from"./DUwSgNYY.js";import"./DsnmJJEf.js";import{c as Qt,h as en,P as tn,S as jn,W as Nn,A as Nt,q as at,C as zn,w as _n,T as Ln,M as Un,x as Mt,y as Wn,z as Gn,D as Bn,E as Fn,F as nn,O as rn,G as Hn,H as sn,J as on,K as Fe,V as ne,L as kt,N as De,R as an,Q as qn,U as K,X as tt,Y as $n,Z as Je,_ as He,$ as Zn,a0 as Kn,a1 as Xn,a2 as Yn,a3 as Jn,a4 as Qn,a5 as Ie,a6 as er,a7 as tr,a8 as nr,a9 as ct,aa as Ne,ab as rr,ac as Me,e as lt,ad as zt}from"./iTEJ16On.js";import{l as cn,p as Pe,r as ln,s as Re,i as ut,a as sr,b as or}from"./C5Pc8oZ8.js";import{c as ke}from"./BY7TqWkc.js";function Is(e,t,n){kn(()=>{var r=vt(()=>t(e,n?.())||{});if(n&&r?.update){var s=!1,o={};En(()=>{var a=n();Tn(a),s&&Pn(o,a)&&(o=a,r.update(a))}),s=!0}if(r?.destroy)return()=>r.destroy()})}function Qe(e){let t;const n=In(s=>{let o=!1;const a=e.subscribe(u=>{t=u,o&&s()});return o=!0,a});function r(){return An()?(n(),t):Cn(e)}return"set"in e?{get current(){return r()},set current(s){e.set(s)}}:{get current(){return r()}}}var ir=Xt("<svg></svg>");function Os(e,t){const n=cn(t,["children","$$slots","$$events","$$legacy"]);var r=ir();Qt(r,()=>({xmlns:"http://www.w3.org/2000/svg",width:"12",height:"14",fill:"none",viewBox:"0 0 12 14",...n})),en(r,()=>'<path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M9.486 4.814 5.551 8.749 1.616 4.814M5.55.55v7.87M.55 12.883h10"/>',!0),Kt(r),fe(e,r)}var ar=Xt("<svg></svg>");function Vs(e,t){const n=cn(t,["children","$$slots","$$events","$$legacy"]);var r=ar();Qt(r,()=>({xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",...n})),en(r,()=>'<path fill="currentColor" d="M11.34 8.253c-.82 0-1.613-.133-2.353-.373a.65.65 0 0 0-.674.16L7.267 9.353c-1.887-.9-3.654-2.6-4.594-4.553l1.3-1.107a.68.68 0 0 0 .16-.68A7.4 7.4 0 0 1 3.76.66C3.76.3 3.46 0 3.1 0H.793C.433 0 0 .16 0 .66 0 6.853 5.153 12 11.34 12c.473 0 .66-.42.66-.787v-2.3c0-.36-.3-.66-.66-.66"/>',!0),Kt(r),fe(e,r)}const ze=new Set;let pt=0;function un(){for(const e of ze)e.tick()||ze.delete(e);pt=ze.size>0?requestAnimationFrame(un):0}function cr(e){ze.add(e),pt||(pt=requestAnimationFrame(un))}function _t(e,t){let n=0,r=e;for(;r&&r!==t;)n+=r.offsetTop,r=r.offsetParent;return n}const lr=(e,t={})=>{const{ease:n=.05,intensity:r=1,rows:s}=t,o=8;let a=-9999,u=-9999,h=-400,m=-400,w=-400,g=-400,S=NaN,C=NaN;const V={tick(){const M=e.getBoundingClientRect();h=a-M.left,m=u-M.top,w+=(h-w)*n,g+=(m-g)*n;const L=Math.round(w/o)*o,W=Math.round(g/o)*o;return(L!==S||W!==C)&&(e.style.setProperty("--mx",`${L}px`),e.style.setProperty("--my",`${W}px`),S=L,C=W),Math.abs(h-w)>.5||Math.abs(m-g)>.5}},I=M=>{a=M.clientX,u=M.clientY,cr(V)},k=()=>e.style.setProperty("--glow-on",String(r)),N=()=>e.style.setProperty("--glow-on","0");e.addEventListener("pointermove",I,{passive:!0}),e.addEventListener("pointerenter",k),e.addEventListener("pointerleave",N);let G,x;if(s){const M=()=>{const L=Array.from(e.querySelectorAll(s));if(!L.length)return;const W=L.map(B=>_t(B,e)),H=L[L.length-1];W.push(_t(H,e)+H.offsetHeight),e.style.setProperty("--rows-mask",W.map(()=>"linear-gradient(#000,#000)").join(",")),e.style.setProperty("--rows-pos",W.map(B=>`0 ${Math.round(B)}px`).join(","))};G=new ResizeObserver(M),x=new MutationObserver(M),G.observe(e),x.observe(e,{childList:!0,subtree:!0}),requestAnimationFrame(M)}return{destroy(){e.removeEventListener("pointermove",I),e.removeEventListener("pointerenter",k),e.removeEventListener("pointerleave",N),ze.delete(V),G?.disconnect(),x?.disconnect()}}},Ds=e=>lr(e,{rows:"ul > *"}),Rs=Ae(!1);function ur(){const{subscribe:e,update:t}=Ae([]);return{subscribe:e,register(n){t(r=>[...r,n])},unregister(n){t(r=>{const s=r.filter(o=>o.id!==n);return s.length===r.length&&console.warn("[registry] unregister: id not found — double unregister or missing register?",n),s})}}}const js=ur(),Lt=(e,t)=>{if(e===t)return!0;if(!e||!t)return!1;const n=e.length;if(t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0},Ns=()=>{const e=[],r={items:e,remember:(s,o)=>{for(let u=0;u<e.length;u++){const h=e[u];if(Lt(o,h.keys)&&h.promise)return h.promise}const a={promise:s(),keys:o};return e.push(a),a.promise},clear:s=>{for(let o=0;o<e.length;o++){const a=e[o];if(Lt(s,a.keys)){e.splice(o,1);return}}}};return ge("threlte-cache",r),r},fr=()=>{const e=de("threlte-cache");if(!e)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return e},Ut=Symbol(),dr=e=>typeof e?.subscribe=="function",fn=(e,t,n)=>{const r=e().map(a=>dr(a)?Qe(a):Ut),s=te(()=>e().map((a,u)=>r[u]===Ut?a:r[u].current)),o=()=>{O(s);let a;return vt(()=>{a=t(O(s))}),a};n?le(o):Ue(o)},hr=(e,t)=>fn(e,t,!1),pr=(e,t)=>fn(e,t,!0);Object.assign(hr,{pre:pr});const ye=(e,t)=>e?.[`is${t}`]===!0,ft=e=>{const t=Ae(void 0),n=Ae(void 0);return e.then(r=>{t.set(r)}).catch(r=>{console.error("Error in asyncWritable:",r.message),n.set(r)}),Object.assign(Object.assign(e,t),{error:n,promise:e})},mr=typeof window<"u",be=(e,t)=>{const n=wt(e,o=>o);let r;const s=n.subscribe(async o=>{r&&r();const a=await t(o);a&&(r=a)});Ve(()=>{s(),r&&r()})},ce=e=>{const t=Ae(e),n={set:r=>{n.current=r,t.set(r)},subscribe:t.subscribe,update:r=>{const s=r(n.current);n.current=s,t.set(s)},current:e};return n},yr=e=>({subscribe:e.subscribe,get current(){return e.current}}),dn=(e,t)=>{if(t.includes(".")){const n=t.split("."),r=n.pop();for(let s=0;s<n.length;s+=1)e=e[n[s]];return{target:e,key:r}}else return{target:e,key:t}},zs=e=>{const{dom:t,canvas:n}=e,r=ce({width:t.offsetWidth,height:t.offsetHeight});On(()=>{const o=new ResizeObserver(()=>{const{offsetWidth:a,offsetHeight:u}=t;(r.current.width!==a||r.current.height!==u)&&r.set({width:a,height:u})});return o.observe(t),()=>{o.disconnect()}});const s={dom:t,canvas:n,size:yr(r)};return ge("threlte-dom-context",s),s},Et=()=>{const e=de("threlte-dom-context");if(!e)throw new Error("useDOM can only be used in a child component to <Canvas>.");return e};function gr(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(s){s(n)}),(r=e.get("*"))&&r.slice().map(function(s){s(t,n)})}}}class we{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=gr();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(t=>t)}moveToIsolated(t){const n=this.connectedVertices[t];n&&(this.isolatedVertices[t]=n,delete this.connectedVertices[t])}moveToConnected(t){const n=this.isolatedVertices[t];n&&(this.connectedVertices[t]=n,delete this.isolatedVertices[t])}getKey=t=>typeof t=="object"?t.key:t;add(t,n,r){if(this.allVertices[t]&&this.allVertices[t].value!==void 0)throw new Error(`A node with the key ${t.toString()} already exists`);let s=this.allVertices[t];s?s.value===void 0&&(s.value=n):(s={value:n,previous:new Set,next:new Set},this.allVertices[t]=s);const o=s.next.size>0||s.previous.size>0;if(!r?.after&&!r?.before&&!o){this.isolatedVertices[t]=s,this.emit("node:added",{key:t,type:"isolated",value:n});return}else this.connectedVertices[t]=s;if(r?.after){const a=Array.isArray(r.after)?r.after:[r.after];a.forEach(u=>{s.previous.add(this.getKey(u))}),a.forEach(u=>{const h=this.getKey(u),m=this.allVertices[h];m?(m.next.add(t),this.moveToConnected(h)):(this.allVertices[h]={value:void 0,previous:new Set,next:new Set([t])},this.connectedVertices[h]=this.allVertices[h])})}if(r?.before){const a=Array.isArray(r.before)?r.before:[r.before];a.forEach(u=>{s.next.add(this.getKey(u))}),a.forEach(u=>{const h=this.getKey(u),m=this.allVertices[h];m?(m.previous.add(t),this.moveToConnected(h)):(this.allVertices[h]={value:void 0,previous:new Set([t]),next:new Set},this.connectedVertices[h]=this.allVertices[h])})}this.emit("node:added",{key:t,type:"connected",value:n}),this.needsSort=!0}remove(t){const n=this.getKey(t);if(this.isolatedVertices[n]){delete this.isolatedVertices[n],delete this.allVertices[n],this.emit("node:removed",{key:n,type:"isolated"});return}const s=this.connectedVertices[n];s&&(s.next.forEach(o=>{const a=this.connectedVertices[o];a&&(a.previous.delete(n),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(o))}),s.previous.forEach(o=>{const a=this.connectedVertices[o];a&&(a.next.delete(n),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(o))}),delete this.connectedVertices[n],delete this.allVertices[n],this.emit("node:removed",{key:n,type:"connected"}),this.needsSort=!0)}mapNodes(t){this.needsSort&&this.sort();const n=[];return this.forEachNode((r,s)=>{n.push(t(r,s))}),n}forEachNode(t){this.needsSort&&this.sort();let n=0;for(;n<this.sortedConnectedValues.length;n++)t(this.sortedConnectedValues[n],n);Reflect.ownKeys(this.isolatedVertices).forEach(r=>{const s=this.isolatedVertices[r];s.value!==void 0&&t(s.value,n++)})}getValueByKey(t){return this.allVertices[t]?.value}getKeyByValue(t){return Reflect.ownKeys(this.connectedVertices).find(n=>this.connectedVertices[n].value===t)??Reflect.ownKeys(this.isolatedVertices).find(n=>this.isolatedVertices[n].value===t)}sort(){const t=new Map,n=[],r=[],s=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(s.forEach(a=>{t.set(a,0)}),s.forEach(a=>{this.connectedVertices[a].next.forEach(h=>{this.connectedVertices[h]&&t.set(h,(t.get(h)||0)+1)})}),t.forEach((a,u)=>{a===0&&n.push(u)});n.length>0;){const a=n.shift();r.push(a);const u=s.find(h=>h===a);u&&this.connectedVertices[u]?.next.forEach(h=>{const m=(t.get(h)||0)-1;t.set(h,m),m===0&&n.push(h)})}if(r.length!==s.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const o=a=>a!==void 0;this.sortedConnectedValues=r.map(a=>this.connectedVertices[a].value).filter(o),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(t){return typeof t=="string"||typeof t=="symbol"}static isValue(t){return typeof t=="object"&&"key"in t}}class xr{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(t,n,r){this.stage=t,this.key=n,this.callback=r}run(t){this.runTask&&this.callback(t)}}class br extends we{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(t,n)=>n();constructor(t,n,r){super(),this.scheduler=t,this.key=n,this.start=this.start.bind(this),this.stop=this.stop.bind(this),r&&(this.callback=r.bind(this))}createTask(t,n,r){const s=new xr(this,t,n);return this.add(t,s,r),s}getTask(t){return this.getValueByKey(t)}removeTask=this.remove.bind(this);run(t){this.runTask&&this.callback(t,n=>{this.forEachNode(r=>{r.run(n??t)})})}runWithTiming(t){if(!this.runTask)return{};const n={};return this.callback(t,r=>{this.forEachNode(s=>{const o=performance.now();s.run(r??t);const a=performance.now()-o;n[s.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class vr extends we{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(t){super(),t?.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}createStage(t,n){const r=new br(this,t,n?.callback);return this.add(t,r,{after:n?.after,before:n?.before}),r}getStage(t){return this.getValueByKey(t)}removeStage=this.remove.bind(this);run(t){const n=t-this.lastTime;this.forEachNode(r=>{r.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,r={},s=performance.now();return this.forEachNode(o=>{const a=performance.now(),u=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),h=performance.now()-a;r[o.key.toString()]={duration:h,tasks:u}}),{total:performance.now()-s,stages:r}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const _s=e=>{const t=new vr,n=t.createStage(Symbol("threlte-main-stage")),r={scheduler:t,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{r.shouldAdvance=!0},autoRender:ce(e.autoRender??!0),renderMode:ce(e.renderMode??"on-demand"),invalidate(){r.frameInvalidated=!0},mainStage:n,shouldRender:()=>r.renderMode.current==="always"||r.renderMode.current==="on-demand"&&(r.frameInvalidated||r.autoInvalidations.size>0)||r.renderMode.current==="manual"&&r.shouldAdvance,renderStage:t.createStage(Symbol("threlte-render-stage"),{after:n,callback(s,o){r.shouldRender()&&o()}}),resetFrameInvalidation(){r.frameInvalidated=!1,r.shouldAdvance=!1}};return Ue(()=>{r.autoRender.set(e.autoRender??!0)}),Ue(()=>{r.renderMode.set(e.renderMode??"on-demand")}),Ve(()=>{r.scheduler.dispose()}),ge("threlte-scheduler-context",r),r},nt=()=>{const e=de("threlte-scheduler-context");if(!e)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return e},Ls=()=>{const{size:e}=Et(),{invalidate:t}=nt(),n=new tn(75,0,.1,1e3);n.position.z=5,n.lookAt(0,0,0);const r=ce(n);be(e,o=>{if(r.current===n){const a=r.current;a.aspect=o.width/o.height,a.updateProjectionMatrix(),t()}}),be(r,o=>{o===void 0&&r.set(n)});const s={camera:r};return ge("threlte-camera-context",s),s},hn=()=>{const e=de("threlte-camera-context");if(!e)throw new Error("useCamera can only be used in a child component to <Canvas>.");return e},Us=()=>{const e={removeObjectFromDisposal:t=>{e.disposableObjects.delete(t)},disposableObjectMounted:t=>{const n=e.disposableObjects.get(t);n?e.disposableObjects.set(t,n+1):e.disposableObjects.set(t,1)},disposableObjectUnmounted:t=>{const n=e.disposableObjects.get(t);n&&n>0&&(e.disposableObjects.set(t,n-1),n-1<=0&&(e.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(t=!1)=>{await Vn(),!(!e.shouldDispose&&!t)&&(e.disposableObjects.forEach((n,r)=>{(n===0||t)&&(r?.dispose?.(),e.disposableObjects.delete(r))}),e.shouldDispose=!1)}};return Ve(()=>{e.dispose(!0)}),ge("threlte-disposal-context",e),e},pn=()=>{const e=de("threlte-disposal-context");if(!e)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return e},mn=Symbol("threlte-parent-context"),wr=e=>{const t=ce(e);return ge(mn,t),t},Sr=()=>de(mn),et=Symbol("threlte-parent-object3d-context"),Ws=e=>{const t=St(e);return ge(et,t),t},Mr=e=>{const t=de(et),n=Ae(e),r=wt([n,t],([s,o])=>s??o);return ge(et,r),n},kr=()=>de(et);function Er(e,t,n){if(!mr)return{task:void 0,start:()=>{},stop:()=>{},started:St(!1)};let r,s,o;we.isKey(e)?(r=e,s=t,o=n):(r=Symbol("useTask"),s=e,o=t);const a=nt();let u=a.mainStage;if(o){if(o.stage)if(we.isValue(o.stage))u=o.stage;else{const S=a.scheduler.getStage(o.stage);if(!S)throw new Error(`No stage found with key ${o.stage.toString()}`);u=S}else if(o.after)if(Array.isArray(o.after))for(let S=0;S<o.after.length;S++){const C=o.after[S];if(we.isValue(C)){u=C.stage;break}}else we.isValue(o.after)&&(u=o.after.stage);else if(o.before)if(Array.isArray(o.before))for(let S=0;S<o.before.length;S++){const C=o.before[S];if(we.isValue(C)){u=C.stage;break}}else we.isValue(o.before)&&(u=o.before.stage)}const h=Ae(!1),m=u.createTask(r,s,o),w=()=>{h.set(!0),(o?.autoInvalidate??!0)&&a.autoInvalidations.add(s),m.start()},g=()=>{h.set(!1),(o?.autoInvalidate??!0)&&a.autoInvalidations.delete(s),m.stop()};return o?.autoStart??!0?w():g(),Ve(()=>{g(),u.removeTask(r)}),{task:m,start:w,stop:g,started:{subscribe:h.subscribe}}}const Gs=e=>{const t={scene:new jn};return ge("threlte-scene-context",t),t},yn=()=>{const e=de("threlte-scene-context");if(!e)throw new Error("useScene can only be used in a child component to <Canvas>.");return e},Bs=e=>{const{dispose:t}=pn(),{camera:n}=hn(),{scene:r}=yn(),{invalidate:s,renderStage:o,autoRender:a,scheduler:u,resetFrameInvalidation:h}=nt(),{size:m,canvas:w}=Et(),g=e.createRenderer?e.createRenderer(w):new Nn({canvas:w,powerPreference:"high-performance",antialias:!0,alpha:!0}),S=o.createTask(Symbol("threlte-auto-render-task"),()=>{g.render(r,n.current)}),C={renderer:g,colorManagementEnabled:ce(e.colorManagementEnabled??!0),colorSpace:ce(e.colorSpace??"srgb"),dpr:ce(e.dpr??window.devicePixelRatio),shadows:ce(e.shadows??at),toneMapping:ce(e.toneMapping??Nt),autoRenderTask:S};ge("threlte-renderer-context",C),be([C.colorManagementEnabled],([k])=>{zn.enabled=k}),be([C.colorSpace],([k])=>{"outputColorSpace"in g&&(g.outputColorSpace=k)}),be([C.dpr],([k])=>{"setPixelRatio"in g&&g.setPixelRatio(k)});const{start:V,stop:I}=Er(()=>{!("xr"in g)||g.xr?.isPresenting||(g.setSize(m.current.width,m.current.height),s(),I())},{before:S,autoStart:!1,autoInvalidate:!1});return be([m],()=>{V()}),be([C.shadows],([k])=>{"shadowMap"in g&&(g.shadowMap.enabled=!!k,k&&k!==!0?g.shadowMap.type=k:k===!0&&(g.shadowMap.type=at))}),be([C.toneMapping],([k])=>{"toneMapping"in g&&(g.toneMapping=k)}),be([a],([k])=>(k?C.autoRenderTask.start():C.autoRenderTask.stop(),()=>{C.autoRenderTask.stop()})),"setAnimationLoop"in C.renderer&&C.renderer.setAnimationLoop(N=>{t(),u.run(N),h()}),Ve(()=>{if("dispose"in C.renderer){const k=C.renderer.dispose;k()}}),le(()=>{C.colorManagementEnabled.set(e.colorManagementEnabled??!0)}),le(()=>{C.colorSpace.set(e.colorSpace??"srgb")}),le(()=>{C.toneMapping.set(e.toneMapping??Nt)}),le(()=>{C.shadows.set(e.shadows??at)}),le(()=>{C.dpr.set(e.dpr??window.devicePixelRatio)}),C},Tr=()=>{const e=de("threlte-renderer-context");if(!e)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return e},Tt=()=>{const e=nt(),t=Tr(),n=hn(),r=yn(),s=Et();return{advance:e.advance,autoRender:e.autoRender,autoRenderTask:t.autoRenderTask,camera:n.camera,colorManagementEnabled:t.colorManagementEnabled,colorSpace:t.colorSpace,dpr:t.dpr,invalidate:e.invalidate,mainStage:e.mainStage,renderer:t.renderer,renderMode:e.renderMode,renderStage:e.renderStage,scheduler:e.scheduler,shadows:t.shadows,shouldRender:e.shouldRender,dom:s.dom,canvas:s.canvas,size:s.size,toneMapping:t.toneMapping,get scene(){return r.scene},set scene(a){r.scene=a}}},Pr=e=>typeof e=="object"&&e!==null,Ar=(e,t)=>{const{invalidate:n}=Tt(),r=te(e),s=te(t),o=Qe(Sr()),a=Qe(kr()),u=wr(),h=Mr();le(()=>{u.set(O(r)),ye(O(r),"Object3D")&&h.set(O(r)),n()}),le(()=>{n();const m=O(r);if(O(s)===void 0&&ye(m,"Object3D"))return a.current?.add(m),()=>{n(),a.current?.remove(m)};if(O(s)===void 0&&Pr(o.current)){const w=o.current;if(ye(m,"Material")){const g=w.material;return w.material=m,()=>{n(),w.material=g}}else if(ye(m,"BufferGeometry")){const g=w.geometry;return w.geometry=m,()=>{n(),w.geometry=g}}}if(O(s)===!1)return()=>{n()};if(typeof O(s)=="function"){const w=O(s)({ref:m,parent:o.current,parentObject3D:a.current});return()=>{n(),w?.()}}if(typeof O(s)=="string"){const{target:w,key:g}=dn(o.current,O(s));if(g in w){const S=w[g];return w[g]=m,()=>{n(),w[g]=S}}else return w[g]=m,()=>{n(),delete w[g]}}if(ye(O(s),"Object3D")&&ye(m,"Object3D"))return O(s).add(m),()=>{n(),O(s).remove(m)}})},dt=new Set,Cr=(e,t,n)=>{const{invalidate:r,size:s,camera:o}=Tt(),a=te(e),u=Qe(s);le(()=>{if(!n())return;const h=O(a);return dt.add(h),o.set(h),r(),()=>{dt.delete(h),dt.size===0&&(o.set(void 0),r())}}),le(()=>{if(t())return;const{width:h,height:m}=u.current;ye(O(a),"PerspectiveCamera")?O(a).aspect=h/m:ye(O(a),"OrthographicCamera")&&(O(a).left=h/-2,O(a).right=h/2,O(a).top=m/2,O(a).bottom=m/-2),O(a).updateProjectionMatrix(),O(a).updateMatrixWorld(),r()})},mt=Symbol("threlte-disposable-object-context"),Ir=e=>typeof e?.dispose=="function",Or=e=>{const t=de(mt),n=te(()=>e()??t?.()??!0);ge(mt,()=>O(n))},Vr=e=>{const t=te(e),{disposableObjectMounted:n,disposableObjectUnmounted:r,removeObjectFromDisposal:s}=pn(),o=de(mt),a=te(()=>o?.()??!0);Ue(()=>{if(O(a))return n(O(t)),()=>r(O(t));s(O(t))})},Dr=e=>e!==null&&typeof e=="object"&&"addEventListener"in e&&"removeEventListener"in e,Rr=(e,t,n)=>{const r=te(e);for(const s of t){const o=te(()=>n[s]);s.startsWith("on")&&le(()=>{if(typeof O(o)!="function"||!Dr(O(r)))return;const a=s.slice(2);return O(r).addEventListener(a,O(o)),()=>O(r).removeEventListener(a,O(o))})}};let yt;const jr=e=>{yt=e},Nr=()=>{const e=yt;return yt=void 0,e},zr="threlte-plugin-context",_r=e=>{const t=de(zr);if(!t)return;const n=[],r=Object.values(t);if(r.length>0){const s=e();for(let o=0;o<r.length;o++){const a=r[o],u=a(s);u&&u.pluginProps&&n.push(...u.pluginProps)}}return{pluginsProps:n}},Lr=new Set(["$$scope","$$slots","type","args","attach","instance"]),Ur=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),Wr=e=>typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e>"u"||e===null,Wt=(e,t,n)=>!Array.isArray(n)&&typeof n=="number"&&typeof e[t]=="object"&&e[t]!==null&&typeof e[t]?.setScalar=="function"&&!e[t]?.isColor?(r,s,o)=>{r[s].setScalar(o)}:typeof e[t]?.set=="function"&&typeof e[t]=="object"&&e[t]!==null?Array.isArray(n)?(r,s,o)=>{r[s].set(...o)}:(r,s,o)=>{r[s].set(o)}:(r,s,o)=>{r[s]=o},Gr=()=>{const{invalidate:e}=Tt(),t=new Map,n=new Map,r=(o,a,u,h)=>{if(Wr(u)){const g=t.get(a);if(g&&g.instance===o&&g.value===u)return;t.set(a,{instance:o,value:u})}const{key:m,target:w}=dn(o,a);if(u!=null){const g=n.get(a);if(g)g(w,m,u);else{const S=Wt(w,m,u);n.set(a,S),S(w,m,u)}}else Wt(w,m,u)(w,m,u);h||Ur.has(m)&&(w.isPerspectiveCamera||w.isOrthographicCamera)&&w.updateProjectionMatrix()};return{updateProp:(o,a,u,h,m)=>{!Lr.has(a)&&!h?.includes(a)&&r(o,a,u,m),e()}}},Br=e=>typeof e=="function"&&Function.prototype.toString.call(e).startsWith("class "),Fr=(e,t)=>Br(e)?Array.isArray(t)?new e(...t):new e:e;var Hr=new Set(["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);function ht(e,t){Yt(t,!0);let n=Pe(t,"is",19,Nr),r=Pe(t,"manual",3,!1),s=Pe(t,"makeDefault",3,!1),o=Pe(t,"ref",15),a=ln(t,Hr);const u=te(()=>Fr(n(),t.args));le(()=>{o()!==O(u)&&o(O(u))});const h=_r(()=>({get ref(){return O(u)},get args(){return t.args},get attach(){return t.attach},get manual(){return r()},get makeDefault(){return s()},get dispose(){return t.dispose},get props(){return a}})),m=Object.keys(a),{updateProp:w}=Gr();m.forEach(C=>{const V=te(()=>a[C]);le(()=>{w(O(u),C,O(V),h?.pluginsProps,r())})}),Ar(()=>O(u),()=>t.attach),le(()=>{(ye(O(u),"PerspectiveCamera")||ye(O(u),"OrthographicCamera"))&&Cr(()=>O(u),()=>r(),()=>s())}),Or(()=>t.dispose),le(()=>{Ir(O(u))&&Vr(()=>O(u))}),Rr(()=>O(u),m,a),Ue(()=>{O(u);let C;return vt(()=>{C=t.oncreate?.(O(u))}),C});var g=xe(),S=me(g);_n(S,()=>t.children??Dn,()=>({ref:O(u)})),fe(e,g),Jt()}const qr={Group:on,Mesh:sn,PlaneGeometry:Hn,PerspectiveCamera:tn,OrthographicCamera:rn,MeshBasicMaterial:nn,ShapeGeometry:Fn,InstancedBufferAttribute:Bn,BoxGeometry:Gn,BoxHelper:Wn,BufferGeometry:Mt,MeshStandardMaterial:Un,Texture:Ln},$r={},Ee=new Proxy(ht,{get(e,t){if(typeof t!="string")return ht;const n=$r[t]||qr[t];if(n===void 0)throw new Error(`No Three.js module found for ${t}. Did you forget to extend the catalogue?`);return jr(n),ht}});function Zr(e,t){const{remember:n,clear:r}=fr();let s;const o=()=>{const h=new e(...t?.args??[]);return t?.extend?.(h),h};return{load:(h,m)=>{const w=async g=>{if(s||(s=o()),"loadAsync"in s){const S=await s.loadAsync(g,m?.onProgress);return m?.transform?.(S)??S}else return new Promise((S,C)=>{s.load(g,V=>S(m?.transform?.(V)??V),V=>m?.onProgress?.(V),C)})};if(Array.isArray(h)){const g=h.map(C=>n(()=>w(C),[e,C]));return ft(Promise.all(g))}else if(typeof h=="string"){const g=n(()=>w(h),[e,h]);return ft(g)}else{const g=Object.values(h).map(C=>n(()=>w(C),[e,C]));return ft(Promise.all(g).then(C=>Object.fromEntries(Object.entries(h).map(([V],I)=>[V,C[I]]))))}},clear:h=>{Array.isArray(h)?h.forEach(m=>{r([e,m])}):typeof h=="string"?r([e,h]):Object.entries(h).forEach(([m,w])=>{r([e,m,w])})},loader:s}}const Te=e=>({subscribe:e.subscribe,get current(){return e.current}});let _e=0;const Pt=ce(!1),rt=ce(!1),At=ce(void 0),Ct=ce(0),It=ce(0),gn=ce([]),Ot=ce(0),{onStart:Kr,onLoad:Xr,onError:Yr}=Fe;Fe.onStart=(e,t,n)=>{Kr?.(e,t,n),rt.set(!0),At.set(e),Ct.set(t),It.set(n);const r=(t-_e)/(n-_e);Ot.set(r),r===1&&Pt.set(!0)};Fe.onLoad=()=>{Xr?.(),rt.set(!1)};Fe.onError=e=>{Yr?.(e),gn.update(t=>[...t,e])};Fe.onProgress=(e,t,n)=>{t===n&&(_e=n),rt.set(!0),At.set(e),Ct.set(t),It.set(n);const r=(t-_e)/(n-_e)||1;Ot.set(r),r===1&&Pt.set(!0)};Te(rt),Te(At),Te(Ct),Te(It),Te(gn),Te(Ot),Te(Pt);new ne;new ne;new ne;new kt;new De;new an;new ne;const Jr=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),Qr=()=>{const e=de(Jr),t=new Set,n=s=>(e&&(e.suspend(s),t.add(s)),s),r={suspended:wt(e?.suspended??St(!1),s=>s)};return Ve(()=>{if(e){for(const s of t)e.onComponentDestroy(s);t.clear()}}),Object.assign(n,r)};new ne;new De;new ne;new ne;new qn;new ne;new ne;new ne;new K;const es="Right",ts="Top",ns="Front",rs="Left",ss="Bottom",os="Back";[es,ts,ns,rs,ss,os].map(e=>e.toLocaleLowerCase());new tt;new ne;Je.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new K(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Kn.line={uniforms:$n.merge([Je.common,Je.fog,Je.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new He;new ne;new ne;new He;new He;new He;new ne;new De;new Zn;new ne;new tt;new kt;new He;const Gt=new De,Bt=new De,Ke=[],je=new sn;class Fs extends on{color;instancedMesh;instances;constructor(t,n){super(),this.color=new Xn("white"),this.instancedMesh=t,this.instances=n}get geometry(){return this.instancedMesh.current?.geometry}raycast(t,n){const r=this.instancedMesh.current;if(r===void 0||r.geometry===void 0||r.material===void 0)return;je.geometry=r.geometry;const s=r.matrixWorld,o=this.instances.current.indexOf(this);if(!(o===-1||o>r.count)){r.getMatrixAt(o,Gt),Bt.multiplyMatrices(s,Gt),je.matrixWorld=Bt,ye(r.material,"Material")?je.material.side=r.material.side:je.material.side=r.material[0]?.side??Yn,je.raycast(t,Ke);for(let a=0,u=Ke.length;a<u;a++){const h=Ke[a];h.instanceId=o,h.object=this,n.push(h)}Ke.length=0}}}const is=rr;class Le extends Jn{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,n,r,s){const o=this,a=new Qn(o.manager);a.setPath(o.path),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(t,function(u){try{n(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(t)}},r,s)}parse(t){const n=this;function r(p,f){if(p.nodeType!==1)return;const c=M(p);let i=!1,b=null;switch(p.nodeName){case"svg":f=V(p,f);break;case"style":o(p);break;case"g":f=V(p,f);break;case"path":f=V(p,f),p.hasAttribute("d")&&(b=s(p));break;case"rect":f=V(p,f),b=h(p);break;case"polygon":f=V(p,f),b=m(p);break;case"polyline":f=V(p,f),b=w(p);break;case"circle":f=V(p,f),b=g(p);break;case"ellipse":f=V(p,f),b=S(p);break;case"line":f=V(p,f),b=C(p);break;case"defs":i=!0;break;case"use":f=V(p,f);const P=(p.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),D=p.viewportElement.getElementById(P);D?r(D,f):console.warn("SVGLoader: 'use node' references non-existent node id: "+P);break}b&&(f.fill!==void 0&&f.fill!=="none"&&b.color.setStyle(f.fill,is),W(b,se),U.push(b),b.userData={node:p,style:f});const A=p.childNodes;for(let y=0;y<A.length;y++){const P=A[y];i&&P.nodeName!=="style"&&P.nodeName!=="defs"||r(P,f)}c&&(q.pop(),q.length>0?se.copy(q[q.length-1]):se.identity())}function s(p){const f=new Me,c=new K,i=new K,b=new K;let A=!0,y=!1;const P=p.getAttribute("d");if(P===""||P==="none")return null;const D=P.match(/[a-df-z][^a-df-z]*/ig);for(let R=0,v=D.length;R<v;R++){const E=D[R],j=E.charAt(0),z=E.slice(1).trim();A===!0&&(y=!0,A=!1);let d;switch(j){case"M":d=k(z);for(let l=0,_=d.length;l<_;l+=2)c.x=d[l+0],c.y=d[l+1],i.x=c.x,i.y=c.y,l===0?f.moveTo(c.x,c.y):f.lineTo(c.x,c.y),l===0&&b.copy(c);break;case"H":d=k(z);for(let l=0,_=d.length;l<_;l++)c.x=d[l],i.x=c.x,i.y=c.y,f.lineTo(c.x,c.y),l===0&&y===!0&&b.copy(c);break;case"V":d=k(z);for(let l=0,_=d.length;l<_;l++)c.y=d[l],i.x=c.x,i.y=c.y,f.lineTo(c.x,c.y),l===0&&y===!0&&b.copy(c);break;case"L":d=k(z);for(let l=0,_=d.length;l<_;l+=2)c.x=d[l+0],c.y=d[l+1],i.x=c.x,i.y=c.y,f.lineTo(c.x,c.y),l===0&&y===!0&&b.copy(c);break;case"C":d=k(z);for(let l=0,_=d.length;l<_;l+=6)f.bezierCurveTo(d[l+0],d[l+1],d[l+2],d[l+3],d[l+4],d[l+5]),i.x=d[l+2],i.y=d[l+3],c.x=d[l+4],c.y=d[l+5],l===0&&y===!0&&b.copy(c);break;case"S":d=k(z);for(let l=0,_=d.length;l<_;l+=4)f.bezierCurveTo(I(c.x,i.x),I(c.y,i.y),d[l+0],d[l+1],d[l+2],d[l+3]),i.x=d[l+0],i.y=d[l+1],c.x=d[l+2],c.y=d[l+3],l===0&&y===!0&&b.copy(c);break;case"Q":d=k(z);for(let l=0,_=d.length;l<_;l+=4)f.quadraticCurveTo(d[l+0],d[l+1],d[l+2],d[l+3]),i.x=d[l+0],i.y=d[l+1],c.x=d[l+2],c.y=d[l+3],l===0&&y===!0&&b.copy(c);break;case"T":d=k(z);for(let l=0,_=d.length;l<_;l+=2){const Z=I(c.x,i.x),ue=I(c.y,i.y);f.quadraticCurveTo(Z,ue,d[l+0],d[l+1]),i.x=Z,i.y=ue,c.x=d[l+0],c.y=d[l+1],l===0&&y===!0&&b.copy(c)}break;case"A":d=k(z,[3,4],7);for(let l=0,_=d.length;l<_;l+=7){if(d[l+5]==c.x&&d[l+6]==c.y)continue;const Z=c.clone();c.x=d[l+5],c.y=d[l+6],i.x=c.x,i.y=c.y,a(f,d[l],d[l+1],d[l+2],d[l+3],d[l+4],Z,c),l===0&&y===!0&&b.copy(c)}break;case"m":d=k(z);for(let l=0,_=d.length;l<_;l+=2)c.x+=d[l+0],c.y+=d[l+1],i.x=c.x,i.y=c.y,l===0?f.moveTo(c.x,c.y):f.lineTo(c.x,c.y),l===0&&b.copy(c);break;case"h":d=k(z);for(let l=0,_=d.length;l<_;l++)c.x+=d[l],i.x=c.x,i.y=c.y,f.lineTo(c.x,c.y),l===0&&y===!0&&b.copy(c);break;case"v":d=k(z);for(let l=0,_=d.length;l<_;l++)c.y+=d[l],i.x=c.x,i.y=c.y,f.lineTo(c.x,c.y),l===0&&y===!0&&b.copy(c);break;case"l":d=k(z);for(let l=0,_=d.length;l<_;l+=2)c.x+=d[l+0],c.y+=d[l+1],i.x=c.x,i.y=c.y,f.lineTo(c.x,c.y),l===0&&y===!0&&b.copy(c);break;case"c":d=k(z);for(let l=0,_=d.length;l<_;l+=6)f.bezierCurveTo(c.x+d[l+0],c.y+d[l+1],c.x+d[l+2],c.y+d[l+3],c.x+d[l+4],c.y+d[l+5]),i.x=c.x+d[l+2],i.y=c.y+d[l+3],c.x+=d[l+4],c.y+=d[l+5],l===0&&y===!0&&b.copy(c);break;case"s":d=k(z);for(let l=0,_=d.length;l<_;l+=4)f.bezierCurveTo(I(c.x,i.x),I(c.y,i.y),c.x+d[l+0],c.y+d[l+1],c.x+d[l+2],c.y+d[l+3]),i.x=c.x+d[l+0],i.y=c.y+d[l+1],c.x+=d[l+2],c.y+=d[l+3],l===0&&y===!0&&b.copy(c);break;case"q":d=k(z);for(let l=0,_=d.length;l<_;l+=4)f.quadraticCurveTo(c.x+d[l+0],c.y+d[l+1],c.x+d[l+2],c.y+d[l+3]),i.x=c.x+d[l+0],i.y=c.y+d[l+1],c.x+=d[l+2],c.y+=d[l+3],l===0&&y===!0&&b.copy(c);break;case"t":d=k(z);for(let l=0,_=d.length;l<_;l+=2){const Z=I(c.x,i.x),ue=I(c.y,i.y);f.quadraticCurveTo(Z,ue,c.x+d[l+0],c.y+d[l+1]),i.x=Z,i.y=ue,c.x=c.x+d[l+0],c.y=c.y+d[l+1],l===0&&y===!0&&b.copy(c)}break;case"a":d=k(z,[3,4],7);for(let l=0,_=d.length;l<_;l+=7){if(d[l+5]==0&&d[l+6]==0)continue;const Z=c.clone();c.x+=d[l+5],c.y+=d[l+6],i.x=c.x,i.y=c.y,a(f,d[l],d[l+1],d[l+2],d[l+3],d[l+4],Z,c),l===0&&y===!0&&b.copy(c)}break;case"Z":case"z":f.currentPath.autoClose=!0,f.currentPath.curves.length>0&&(c.copy(b),f.currentPath.currentPoint.copy(c),A=!0);break;default:console.warn(E)}y=!1}return f}function o(p){if(!(!p.sheet||!p.sheet.cssRules||!p.sheet.cssRules.length))for(let f=0;f<p.sheet.cssRules.length;f++){const c=p.sheet.cssRules[f];if(c.type!==1)continue;const i=c.selectorText.split(/,/gm).filter(Boolean).map(b=>b.trim());for(let b=0;b<i.length;b++){const A=Object.fromEntries(Object.entries(c.style).filter(([,y])=>y!==""));Y[i[b]]=Object.assign(Y[i[b]]||{},A)}}}function a(p,f,c,i,b,A,y,P){if(f==0||c==0){p.lineTo(P.x,P.y);return}i=i*Math.PI/180,f=Math.abs(f),c=Math.abs(c);const D=(y.x-P.x)/2,R=(y.y-P.y)/2,v=Math.cos(i)*D+Math.sin(i)*R,E=-Math.sin(i)*D+Math.cos(i)*R;let j=f*f,z=c*c;const d=v*v,l=E*E,_=d/j+l/z;if(_>1){const Ze=Math.sqrt(_);f=Ze*f,c=Ze*c,j=f*f,z=c*c}const Z=j*l+z*d,ue=(j*z-Z)/Z;let pe=Math.sqrt(Math.max(0,ue));b===A&&(pe=-pe);const oe=pe*f*E/c,ve=-pe*c*v/f,qe=Math.cos(i)*oe-Math.sin(i)*ve+(y.x+P.x)/2,Vt=Math.sin(i)*oe+Math.cos(i)*ve+(y.y+P.y)/2,$e=u(1,0,(v-oe)/f,(E-ve)/c),it=u((v-oe)/f,(E-ve)/c,(-v-oe)/f,(-E-ve)/c)%(Math.PI*2);p.currentPath.absellipse(qe,Vt,f,c,$e,$e+it,A===0,i)}function u(p,f,c,i){const b=p*c+f*i,A=Math.sqrt(p*p+f*f)*Math.sqrt(c*c+i*i);let y=Math.acos(Math.max(-1,Math.min(1,b/A)));return p*i-f*c<0&&(y=-y),y}function h(p){const f=x(p.getAttribute("x")||0),c=x(p.getAttribute("y")||0),i=x(p.getAttribute("rx")||p.getAttribute("ry")||0),b=x(p.getAttribute("ry")||p.getAttribute("rx")||0),A=x(p.getAttribute("width")),y=x(p.getAttribute("height")),P=1-.551915024494,D=new Me;return D.moveTo(f+i,c),D.lineTo(f+A-i,c),(i!==0||b!==0)&&D.bezierCurveTo(f+A-i*P,c,f+A,c+b*P,f+A,c+b),D.lineTo(f+A,c+y-b),(i!==0||b!==0)&&D.bezierCurveTo(f+A,c+y-b*P,f+A-i*P,c+y,f+A-i,c+y),D.lineTo(f+i,c+y),(i!==0||b!==0)&&D.bezierCurveTo(f+i*P,c+y,f,c+y-b*P,f,c+y-b),D.lineTo(f,c+b),(i!==0||b!==0)&&D.bezierCurveTo(f,c+b*P,f+i*P,c,f+i,c),D}function m(p){function f(A,y,P){const D=x(y),R=x(P);b===0?i.moveTo(D,R):i.lineTo(D,R),b++}const c=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,i=new Me;let b=0;return p.getAttribute("points").replace(c,f),i.currentPath.autoClose=!0,i}function w(p){function f(A,y,P){const D=x(y),R=x(P);b===0?i.moveTo(D,R):i.lineTo(D,R),b++}const c=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,i=new Me;let b=0;return p.getAttribute("points").replace(c,f),i.currentPath.autoClose=!1,i}function g(p){const f=x(p.getAttribute("cx")||0),c=x(p.getAttribute("cy")||0),i=x(p.getAttribute("r")||0),b=new ct;b.absarc(f,c,i,0,Math.PI*2);const A=new Me;return A.subPaths.push(b),A}function S(p){const f=x(p.getAttribute("cx")||0),c=x(p.getAttribute("cy")||0),i=x(p.getAttribute("rx")||0),b=x(p.getAttribute("ry")||0),A=new ct;A.absellipse(f,c,i,b,0,Math.PI*2);const y=new Me;return y.subPaths.push(A),y}function C(p){const f=x(p.getAttribute("x1")||0),c=x(p.getAttribute("y1")||0),i=x(p.getAttribute("x2")||0),b=x(p.getAttribute("y2")||0),A=new Me;return A.moveTo(f,c),A.lineTo(i,b),A.currentPath.autoClose=!1,A}function V(p,f){f=Object.assign({},f);let c={};if(p.hasAttribute("class")){const y=p.getAttribute("class").split(/\s/).filter(Boolean).map(P=>P.trim());for(let P=0;P<y.length;P++)c=Object.assign(c,Y["."+y[P]])}p.hasAttribute("id")&&(c=Object.assign(c,Y["#"+p.getAttribute("id")]));function i(y,P,D){D===void 0&&(D=function(v){return v.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),v}),p.hasAttribute(y)&&(f[P]=D(p.getAttribute(y))),c[P]&&(f[P]=D(c[P])),p.style&&p.style[y]!==""&&(f[P]=D(p.style[y]))}function b(y){return Math.max(0,Math.min(1,x(y)))}function A(y){return Math.max(0,x(y))}return i("fill","fill"),i("fill-opacity","fillOpacity",b),i("fill-rule","fillRule"),i("opacity","opacity",b),i("stroke","stroke"),i("stroke-opacity","strokeOpacity",b),i("stroke-width","strokeWidth",A),i("stroke-linejoin","strokeLineJoin"),i("stroke-linecap","strokeLineCap"),i("stroke-miterlimit","strokeMiterLimit",A),i("visibility","visibility"),f}function I(p,f){return p-(f-p)}function k(p,f,c){if(typeof p!="string")throw new TypeError("Invalid input: "+typeof p);const i={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},b=0,A=1,y=2,P=3;let D=b,R=!0,v="",E="";const j=[];function z(Z,ue,pe){const oe=new SyntaxError('Unexpected character "'+Z+'" at index '+ue+".");throw oe.partial=pe,oe}function d(){v!==""&&(E===""?j.push(Number(v)):j.push(Number(v)*Math.pow(10,Number(E)))),v="",E=""}let l;const _=p.length;for(let Z=0;Z<_;Z++){if(l=p[Z],Array.isArray(f)&&f.includes(j.length%c)&&i.FLAGS.test(l)){D=A,v=l,d();continue}if(D===b){if(i.WHITESPACE.test(l))continue;if(i.DIGIT.test(l)||i.SIGN.test(l)){D=A,v=l;continue}if(i.POINT.test(l)){D=y,v=l;continue}i.COMMA.test(l)&&(R&&z(l,Z,j),R=!0)}if(D===A){if(i.DIGIT.test(l)){v+=l;continue}if(i.POINT.test(l)){v+=l,D=y;continue}if(i.EXP.test(l)){D=P;continue}i.SIGN.test(l)&&v.length===1&&i.SIGN.test(v[0])&&z(l,Z,j)}if(D===y){if(i.DIGIT.test(l)){v+=l;continue}if(i.EXP.test(l)){D=P;continue}i.POINT.test(l)&&v[v.length-1]==="."&&z(l,Z,j)}if(D===P){if(i.DIGIT.test(l)){E+=l;continue}if(i.SIGN.test(l)){if(E===""){E+=l;continue}E.length===1&&i.SIGN.test(E)&&z(l,Z,j)}}i.WHITESPACE.test(l)?(d(),D=b,R=!1):i.COMMA.test(l)?(d(),D=b,R=!0):i.SIGN.test(l)?(d(),D=A,v=l):i.POINT.test(l)?(d(),D=y,v=l):z(l,Z,j)}return d(),j}const N=["mm","cm","in","pt","pc","px"],G={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(p){let f="px";if(typeof p=="string"||p instanceof String)for(let i=0,b=N.length;i<b;i++){const A=N[i];if(p.endsWith(A)){f=A,p=p.substring(0,p.length-A.length);break}}let c;return f==="px"&&n.defaultUnit!=="px"?c=G.in[n.defaultUnit]/n.defaultDPI:(c=G[f][n.defaultUnit],c<0&&(c=G[f].in*n.defaultDPI)),c*parseFloat(p)}function M(p){if(!(p.hasAttribute("transform")||p.nodeName==="use"&&(p.hasAttribute("x")||p.hasAttribute("y"))))return null;const f=L(p);return q.length>0&&f.premultiply(q[q.length-1]),se.copy(f),q.push(f),f}function L(p){const f=new Ie,c=ae;if(p.nodeName==="use"&&(p.hasAttribute("x")||p.hasAttribute("y"))){const i=x(p.getAttribute("x")||0),b=x(p.getAttribute("y")||0);f.translate(i,b)}if(p.hasAttribute("transform")){const i=p.getAttribute("transform").split(")");for(let b=i.length-1;b>=0;b--){const A=i[b].trim();if(A==="")continue;const y=A.indexOf("("),P=A.length;if(y>0&&y<P){const D=A.slice(0,y),R=k(A.slice(y+1));switch(c.identity(),D){case"translate":if(R.length>=1){const v=R[0];let E=0;R.length>=2&&(E=R[1]),c.translate(v,E)}break;case"rotate":if(R.length>=1){let v=0,E=0,j=0;v=R[0]*Math.PI/180,R.length>=3&&(E=R[1],j=R[2]),J.makeTranslation(-E,-j),F.makeRotation(v),T.multiplyMatrices(F,J),J.makeTranslation(E,j),c.multiplyMatrices(J,T)}break;case"scale":if(R.length>=1){const v=R[0];let E=v;R.length>=2&&(E=R[1]),c.scale(v,E)}break;case"skewX":R.length===1&&c.set(1,Math.tan(R[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":R.length===1&&c.set(1,0,0,Math.tan(R[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":R.length===6&&c.set(R[0],R[2],R[4],R[1],R[3],R[5],0,0,1);break}}f.premultiply(c)}}return f}function W(p,f){function c(y){Q.set(y.x,y.y,1).applyMatrix3(f),y.set(Q.x,Q.y)}function i(y){const P=y.xRadius,D=y.yRadius,R=Math.cos(y.aRotation),v=Math.sin(y.aRotation),E=new ne(P*R,P*v,0),j=new ne(-D*v,D*R,0),z=E.applyMatrix3(f),d=j.applyMatrix3(f),l=ae.set(z.x,d.x,0,z.y,d.y,0,0,0,1),_=J.copy(l).invert(),pe=F.copy(_).transpose().multiply(_).elements,oe=ie(pe[0],pe[1],pe[4]),ve=Math.sqrt(oe.rt1),qe=Math.sqrt(oe.rt2);if(y.xRadius=1/ve,y.yRadius=1/qe,y.aRotation=Math.atan2(oe.sn,oe.cs),!((y.aEndAngle-y.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const $e=J.set(ve,0,0,0,qe,0,0,0,1),it=F.set(oe.cs,oe.sn,0,-oe.sn,oe.cs,0,0,0,1),Ze=$e.multiply(it).multiply(l),Dt=Rt=>{const{x:Sn,y:Mn}=new ne(Math.cos(Rt),Math.sin(Rt),0).applyMatrix3(Ze);return Math.atan2(Mn,Sn)};y.aStartAngle=Dt(y.aStartAngle),y.aEndAngle=Dt(y.aEndAngle),H(f)&&(y.aClockwise=!y.aClockwise)}}function b(y){const P=$(f),D=X(f);y.xRadius*=P,y.yRadius*=D;const R=P>Number.EPSILON?Math.atan2(f.elements[1],f.elements[0]):Math.atan2(-f.elements[3],f.elements[4]);y.aRotation+=R,H(f)&&(y.aStartAngle*=-1,y.aEndAngle*=-1,y.aClockwise=!y.aClockwise)}const A=p.subPaths;for(let y=0,P=A.length;y<P;y++){const R=A[y].curves;for(let v=0;v<R.length;v++){const E=R[v];E.isLineCurve?(c(E.v1),c(E.v2)):E.isCubicBezierCurve?(c(E.v0),c(E.v1),c(E.v2),c(E.v3)):E.isQuadraticBezierCurve?(c(E.v0),c(E.v1),c(E.v2)):E.isEllipseCurve&&(re.set(E.aX,E.aY),c(re),E.aX=re.x,E.aY=re.y,B(f)?i(E):b(E))}}}function H(p){const f=p.elements;return f[0]*f[4]-f[1]*f[3]<0}function B(p){const f=p.elements,c=f[0]*f[3]+f[1]*f[4];if(c===0)return!1;const i=$(p),b=X(p);return Math.abs(c/(i*b))>Number.EPSILON}function $(p){const f=p.elements;return Math.sqrt(f[0]*f[0]+f[1]*f[1])}function X(p){const f=p.elements;return Math.sqrt(f[3]*f[3]+f[4]*f[4])}function ie(p,f,c){let i,b,A,y,P;const D=p+c,R=p-c,v=Math.sqrt(R*R+4*f*f);return D>0?(i=.5*(D+v),P=1/i,b=p*P*c-f*P*f):D<0?b=.5*(D-v):(i=.5*v,b=-.5*v),R>0?A=R+v:A=R-v,Math.abs(A)>2*Math.abs(f)?(P=-2*f/A,y=1/Math.sqrt(1+P*P),A=P*y):Math.abs(f)===0?(A=1,y=0):(P=-.5*A/f,A=1/Math.sqrt(1+P*P),y=P*A),R>0&&(P=A,A=-y,y=P),{rt1:i,rt2:b,cs:A,sn:y}}const U=[],Y={},q=[],ae=new Ie,J=new Ie,F=new Ie,T=new Ie,re=new K,Q=new ne,se=new Ie,he=new DOMParser().parseFromString(t,"image/svg+xml");return r(he.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:he.documentElement}}static createShapes(t){const r={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:r.ORIGIN,t:0};function o(I,k,N,G){const x=I.x,M=k.x,L=N.x,W=G.x,H=I.y,B=k.y,$=N.y,X=G.y,ie=(W-L)*(H-$)-(X-$)*(x-L),U=(M-x)*(H-$)-(B-H)*(x-L),Y=(X-$)*(M-x)-(W-L)*(B-H),q=ie/Y,ae=U/Y;if(Y===0&&ie!==0||q<=0||q>=1||ae<0||ae>1)return null;if(ie===0&&Y===0){for(let J=0;J<2;J++)if(a(J===0?N:G,I,k),s.loc==r.ORIGIN){const F=J===0?N:G;return{x:F.x,y:F.y,t:s.t}}else if(s.loc==r.BETWEEN){const F=+(x+s.t*(M-x)).toPrecision(10),T=+(H+s.t*(B-H)).toPrecision(10);return{x:F,y:T,t:s.t}}return null}else{for(let T=0;T<2;T++)if(a(T===0?N:G,I,k),s.loc==r.ORIGIN){const re=T===0?N:G;return{x:re.x,y:re.y,t:s.t}}const J=+(x+q*(M-x)).toPrecision(10),F=+(H+q*(B-H)).toPrecision(10);return{x:J,y:F,t:q}}}function a(I,k,N){const G=N.x-k.x,x=N.y-k.y,M=I.x-k.x,L=I.y-k.y,W=G*L-M*x;if(I.x===k.x&&I.y===k.y){s.loc=r.ORIGIN,s.t=0;return}if(I.x===N.x&&I.y===N.y){s.loc=r.DESTINATION,s.t=1;return}if(W<-Number.EPSILON){s.loc=r.LEFT;return}if(W>Number.EPSILON){s.loc=r.RIGHT;return}if(G*M<0||x*L<0){s.loc=r.BEHIND;return}if(Math.sqrt(G*G+x*x)<Math.sqrt(M*M+L*L)){s.loc=r.BEYOND;return}let H;G!==0?H=M/G:H=L/x,s.loc=r.BETWEEN,s.t=H}function u(I,k){const N=[],G=[];for(let x=1;x<I.length;x++){const M=I[x-1],L=I[x];for(let W=1;W<k.length;W++){const H=k[W-1],B=k[W],$=o(M,L,H,B);$!==null&&N.find(X=>X.t<=$.t+Number.EPSILON&&X.t>=$.t-Number.EPSILON)===void 0&&(N.push($),G.push(new K($.x,$.y)))}}return G}function h(I,k,N){const G=new K;k.getCenter(G);const x=[];return N.forEach(M=>{M.boundingBox.containsPoint(G)&&u(I,M.points).forEach(W=>{x.push({identifier:M.identifier,isCW:M.isCW,point:W})})}),x.sort((M,L)=>M.point.x-L.point.x),x}function m(I,k,N,G,x){(x==null||x==="")&&(x="nonzero");const M=new K;I.boundingBox.getCenter(M);const L=[new K(N,M.y),new K(G,M.y)],W=h(L,I.boundingBox,k);W.sort((U,Y)=>U.point.x-Y.point.x);const H=[],B=[];W.forEach(U=>{U.identifier===I.identifier?H.push(U):B.push(U)});const $=H[0].point.x,X=[];let ie=0;for(;ie<B.length&&B[ie].point.x<$;)X.length>0&&X[X.length-1]===B[ie].identifier?X.pop():X.push(B[ie].identifier),ie++;if(X.push(I.identifier),x==="evenodd"){const U=X.length%2===0,Y=X[X.length-2];return{identifier:I.identifier,isHole:U,for:Y}}else if(x==="nonzero"){let U=!0,Y=null,q=null;for(let ae=0;ae<X.length;ae++){const J=X[ae];U?(q=k[J].isCW,U=!1,Y=J):q!==k[J].isCW&&(q=k[J].isCW,U=!0)}return{identifier:I.identifier,isHole:U,for:Y}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let w=999999999,g=-999999999,S=t.subPaths.map(I=>{const k=I.getPoints();let N=-999999999,G=999999999,x=-999999999,M=999999999;for(let L=0;L<k.length;L++){const W=k[L];W.y>N&&(N=W.y),W.y<G&&(G=W.y),W.x>x&&(x=W.x),W.x<M&&(M=W.x)}return g<=x&&(g=x+1),w>=M&&(w=M-1),{curves:I.curves,points:k,isCW:tr.isClockWise(k),identifier:-1,boundingBox:new er(new K(M,G),new K(x,N))}});S=S.filter(I=>I.points.length>1);for(let I=0;I<S.length;I++)S[I].identifier=I;const C=S.map(I=>m(I,S,w,g,t.userData?t.userData.style.fillRule:void 0)),V=[];return S.forEach(I=>{if(!C[I.identifier].isHole){const N=new nr;N.curves=I.curves,C.filter(x=>x.isHole&&x.for===I.identifier).forEach(x=>{const M=S[x.identifier],L=new ct;L.curves=M.curves,N.holes.push(L)}),V.push(N)}}),V}static getStrokeStyle(t,n,r,s,o){return t=t!==void 0?t:1,n=n!==void 0?n:"#000",r=r!==void 0?r:"miter",s=s!==void 0?s:"butt",o=o!==void 0?o:4,{strokeColor:n,strokeWidth:t,strokeLineJoin:r,strokeLineCap:s,strokeMiterLimit:o}}static pointsToStroke(t,n,r,s){const o=[],a=[],u=[];if(Le.pointsToStrokeWithBuffers(t,n,r,s,o,a,u)===0)return null;const h=new Mt;return h.setAttribute("position",new Ne(o,3)),h.setAttribute("normal",new Ne(a,3)),h.setAttribute("uv",new Ne(u,2)),h}static pointsToStrokeWithBuffers(t,n,r,s,o,a,u,h){const m=new K,w=new K,g=new K,S=new K,C=new K,V=new K,I=new K,k=new K,N=new K,G=new K,x=new K,M=new K,L=new K,W=new K,H=new K,B=new K,$=new K;r=r!==void 0?r:12,s=s!==void 0?s:.001,h=h!==void 0?h:0,t=R(t);const X=t.length;if(X<2)return 0;const ie=t[0].equals(t[X-1]);let U,Y=t[0],q;const ae=n.strokeWidth/2,J=1/(X-1);let F=0,T,re,Q,se,he=!1,Se=0,p=h*3,f=h*2;c(t[0],t[1],m).multiplyScalar(ae),k.copy(t[0]).sub(m),N.copy(t[0]).add(m),G.copy(k),x.copy(N);for(let v=1;v<X;v++){U=t[v],v===X-1?ie?q=t[1]:q=void 0:q=t[v+1];const E=m;if(c(Y,U,E),g.copy(E).multiplyScalar(ae),M.copy(U).sub(g),L.copy(U).add(g),T=F+J,re=!1,q!==void 0){c(U,q,w),g.copy(w).multiplyScalar(ae),W.copy(U).sub(g),H.copy(U).add(g),Q=!0,g.subVectors(q,Y),E.dot(g)<0&&(Q=!1),v===1&&(he=Q),g.subVectors(q,U),g.normalize();const j=Math.abs(E.dot(g));if(j>Number.EPSILON){const z=ae/j;g.multiplyScalar(-z),S.subVectors(U,Y),C.copy(S).setLength(z).add(g),B.copy(C).negate();const d=C.length(),l=S.length();S.divideScalar(l),V.subVectors(q,U);const _=V.length();switch(V.divideScalar(_),S.dot(B)<l&&V.dot(B)<_&&(re=!0),$.copy(C).add(U),B.add(U),se=!1,re?Q?(H.copy(B),L.copy(B)):(W.copy(B),M.copy(B)):A(),n.strokeLineJoin){case"bevel":y(Q,re,T);break;case"round":P(Q,re),Q?b(U,M,W,T,0):b(U,H,L,T,1);break;default:const Z=ae*n.strokeMiterLimit/d;if(Z<1)if(n.strokeLineJoin!=="miter-clip"){y(Q,re,T);break}else P(Q,re),Q?(V.subVectors($,M).multiplyScalar(Z).add(M),I.subVectors($,W).multiplyScalar(Z).add(W),i(M,T,0),i(V,T,0),i(U,T,.5),i(U,T,.5),i(V,T,0),i(I,T,0),i(U,T,.5),i(I,T,0),i(W,T,0)):(V.subVectors($,L).multiplyScalar(Z).add(L),I.subVectors($,H).multiplyScalar(Z).add(H),i(L,T,1),i(V,T,1),i(U,T,.5),i(U,T,.5),i(V,T,1),i(I,T,1),i(U,T,.5),i(I,T,1),i(H,T,1));else re?(Q?(i(N,F,1),i(k,F,0),i($,T,0),i(N,F,1),i($,T,0),i(B,T,1)):(i(N,F,1),i(k,F,0),i($,T,1),i(k,F,0),i(B,T,0),i($,T,1)),Q?W.copy($):H.copy($)):Q?(i(M,T,0),i($,T,0),i(U,T,.5),i(U,T,.5),i($,T,0),i(W,T,0)):(i(L,T,1),i($,T,1),i(U,T,.5),i(U,T,.5),i($,T,1),i(H,T,1)),se=!0;break}}else A()}else A();!ie&&v===X-1&&D(t[0],G,x,Q,!0,F),F=T,Y=U,k.copy(W),N.copy(H)}if(!ie)D(U,M,L,Q,!1,T);else if(re&&o){let v=$,E=B;he!==Q&&(v=B,E=$),Q?(se||he)&&(E.toArray(o,0),E.toArray(o,9),se&&v.toArray(o,3)):(se||!he)&&(E.toArray(o,3),E.toArray(o,9),se&&v.toArray(o,0))}return Se;function c(v,E,j){return j.subVectors(E,v),j.set(-j.y,j.x).normalize()}function i(v,E,j){o&&(o[p]=v.x,o[p+1]=v.y,o[p+2]=0,a&&(a[p]=0,a[p+1]=0,a[p+2]=1),p+=3,u&&(u[f]=E,u[f+1]=j,f+=2)),Se+=3}function b(v,E,j,z,d){m.copy(E).sub(v).normalize(),w.copy(j).sub(v).normalize();let l=Math.PI;const _=m.dot(w);Math.abs(_)<1&&(l=Math.abs(Math.acos(_))),l/=r,g.copy(E);for(let Z=0,ue=r-1;Z<ue;Z++)S.copy(g).rotateAround(v,l),i(g,z,d),i(S,z,d),i(v,z,.5),g.copy(S);i(S,z,d),i(j,z,d),i(v,z,.5)}function A(){i(N,F,1),i(k,F,0),i(M,T,0),i(N,F,1),i(M,T,0),i(L,T,1)}function y(v,E,j){E?v?(i(N,F,1),i(k,F,0),i(M,T,0),i(N,F,1),i(M,T,0),i(B,T,1),i(M,j,0),i(W,j,0),i(B,j,.5)):(i(N,F,1),i(k,F,0),i(L,T,1),i(k,F,0),i(B,T,0),i(L,T,1),i(L,j,1),i(B,j,0),i(H,j,1)):v?(i(M,j,0),i(W,j,0),i(U,j,.5)):(i(L,j,1),i(H,j,0),i(U,j,.5))}function P(v,E){E&&(v?(i(N,F,1),i(k,F,0),i(M,T,0),i(N,F,1),i(M,T,0),i(B,T,1),i(M,F,0),i(U,T,.5),i(B,T,1),i(U,T,.5),i(W,F,0),i(B,T,1)):(i(N,F,1),i(k,F,0),i(L,T,1),i(k,F,0),i(B,T,0),i(L,T,1),i(L,F,1),i(B,T,0),i(U,T,.5),i(U,T,.5),i(B,T,0),i(H,F,1)))}function D(v,E,j,z,d,l){switch(n.strokeLineCap){case"round":d?b(v,j,E,l,.5):b(v,E,j,l,.5);break;case"square":if(d)m.subVectors(E,v),w.set(m.y,-m.x),g.addVectors(m,w).add(v),S.subVectors(w,m).add(v),z?(g.toArray(o,3),S.toArray(o,0),S.toArray(o,9)):(g.toArray(o,3),u[7]===1?S.toArray(o,9):g.toArray(o,9),S.toArray(o,0));else{m.subVectors(j,v),w.set(m.y,-m.x),g.addVectors(m,w).add(v),S.subVectors(w,m).add(v);const _=o.length;z?(g.toArray(o,_-3),S.toArray(o,_-6),S.toArray(o,_-12)):(S.toArray(o,_-6),g.toArray(o,_-3),S.toArray(o,_-12))}break}}function R(v){let E=!1;for(let z=1,d=v.length-1;z<d;z++)if(v[z].distanceTo(v[z+1])<s){E=!0;break}if(!E)return v;const j=[];j.push(v[0]);for(let z=1,d=v.length-1;z<d;z++)v[z].distanceTo(v[z+1])>=s&&j.push(v[z]);return j.push(v[v.length-1]),j}}}var as=new Set(["$$slots","$$events","$$legacy","src","skipFill","skipStrokes","fillMaterialProps","strokeMaterialProps","fillMeshProps","strokeMeshProps","ref"]),Ft=Rn("<!> <!>",1);function Hs(e,t){Yt(t,!0);const n=()=>or(O(g),"$svg",r),[r,s]=sr();let o=Pe(t,"skipFill",3,!1),a=Pe(t,"skipStrokes",3,!1),u=Pe(t,"ref",15),h=ln(t,as);const m=Qr(),w=Zr(Le),g=te(()=>m(w.load(t.src.startsWith("<svg")?`data:image/svg+xml;utf8,${t.src}`:t.src))),S=te(()=>n()?.paths??[]),C=te(()=>a()?[]:O(S).map(N=>N.userData?.style.stroke===void 0||N.userData.style.stroke==="none"?null:N.subPaths.map(G=>Le.pointsToStroke(G.getPoints(),N.userData?.style))));le(()=>()=>{for(const N of O(C))N&&N.map(G=>G.dispose())});let V=0;var I=xe(),k=me(I);ke(k,()=>Ee.Group,(N,G)=>{G(N,Re(()=>h,{get ref(){return u()},set ref(x){u(x)},children:(x,M)=>{var L=xe(),W=me(L);ke(W,()=>Ee.Group,(H,B)=>{B(H,{"scale.y":-1,children:($,X)=>{var ie=xe(),U=me(ie);lt(U,18,()=>O(S),Y=>Y,(Y,q,ae)=>{var J=Ft(),F=me(J);{var T=se=>{var he=xe(),Se=me(he);lt(Se,16,()=>Le.createShapes(q),p=>p,(p,f)=>{var c=xe(),i=me(c);{let b=te(()=>V++);ke(i,()=>Ee.Mesh,(A,y)=>{y(A,Re(()=>t.fillMeshProps,{get renderOrder(){return O(b)},children:(P,D)=>{var R=Ft(),v=me(R);{let j=te(()=>[f]);ke(v,()=>Ee.ShapeGeometry,(z,d)=>{d(z,{get args(){return O(j)}})})}var E=jt(v,2);{let j=te(()=>q.userData?.style.fill),z=te(()=>q.userData?.style.fillOpacity);ke(E,()=>Ee.MeshBasicMaterial,(d,l)=>{l(d,Re({get color(){return O(j)},get opacity(){return O(z)},transparent:!0,get side(){return zt},depthWrite:!1},()=>t.fillMaterialProps))})}fe(P,R)},$$slots:{default:!0}}))})}fe(p,c)}),fe(se,he)};ut(F,se=>{!o()&&q.userData?.style.fill!==void 0&&q.userData.style.fill!=="none"&&se(T)})}var re=jt(F,2);{var Q=se=>{var he=xe(),Se=me(he);lt(Se,18,()=>q.subPaths,p=>p,(p,f,c)=>{var i=xe(),b=me(i);{var A=y=>{var P=xe(),D=me(P);{let R=te(()=>O(C)[O(ae)]?.[O(c)]),v=te(()=>V++);ke(D,()=>Ee.Mesh,(E,j)=>{j(E,Re({get geometry(){return O(R)}},()=>t.strokeMeshProps,{get renderOrder(){return O(v)},children:(z,d)=>{var l=xe(),_=me(l);{let Z=te(()=>q.userData?.style.stroke),ue=te(()=>q.userData?.style.strokeOpacity);ke(_,()=>Ee.MeshBasicMaterial,(pe,oe)=>{oe(pe,Re({get color(){return O(Z)},get opacity(){return O(ue)},transparent:!0,get side(){return zt},depthWrite:!1},()=>t.strokeMaterialProps))})}fe(z,l)},$$slots:{default:!0}}))})}fe(y,P)};ut(b,y=>{O(C)[O(ae)]&&y(A)})}fe(p,i)}),fe(se,he)};ut(re,se=>{!a()&&q.userData?.style.stroke!==void 0&&q.userData.style.stroke!=="none"&&se(Q)})}fe(Y,J)}),fe($,ie)},$$slots:{default:!0}})}),fe(x,L)},$$slots:{default:!0}}))}),fe(e,I),Jt(),s()}new tt;typeof window<"u"&&document.createElement("div");for(let e=0;e<256;e++)(e<16?"0":"")+e.toString(16);new rn(-1,1,1,-1,0,1);class cs extends Mt{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}}new cs;var xn={exports:{}};xn.exports=st;xn.exports.default=st;function st(e,t,n){n=n||2;var r=t&&t.length,s=r?t[0]*n:e.length,o=bn(e,0,s,n,!0),a=[];if(!o||o.next===o.prev)return a;var u,h,m,w,g,S,C;if(r&&(o=hs(e,t,o,n)),e.length>80*n){u=m=e[0],h=w=e[1];for(var V=n;V<s;V+=n)g=e[V],S=e[V+1],g<u&&(u=g),S<h&&(h=S),g>m&&(m=g),S>w&&(w=S);C=Math.max(m-u,w-h),C=C!==0?32767/C:0}return We(o,a,n,u,h,C,0),a}function bn(e,t,n,r,s){var o,a;if(s===bt(e,t,n,r)>0)for(o=t;o<n;o+=r)a=Ht(o,e[o],e[o+1],a);else for(o=n-r;o>=t;o-=r)a=Ht(o,e[o],e[o+1],a);return a&&ot(a,a.next)&&(Be(a),a=a.next),a}function Ce(e,t){if(!e)return e;t||(t=e);var n=e,r;do if(r=!1,!n.steiner&&(ot(n,n.next)||ee(n.prev,n,n.next)===0)){if(Be(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function We(e,t,n,r,s,o,a){if(e){!a&&o&&xs(e,r,s,o);for(var u=e,h,m;e.prev!==e.next;){if(h=e.prev,m=e.next,o?us(e,r,s,o):ls(e)){t.push(h.i/n|0),t.push(e.i/n|0),t.push(m.i/n|0),Be(e),e=m.next,u=m.next;continue}if(e=m,e===u){a?a===1?(e=fs(Ce(e),t,n),We(e,t,n,r,s,o,2)):a===2&&ds(e,t,n,r,s,o):We(Ce(e),t,n,r,s,o,1);break}}}}function ls(e){var t=e.prev,n=e,r=e.next;if(ee(t,n,r)>=0)return!1;for(var s=t.x,o=n.x,a=r.x,u=t.y,h=n.y,m=r.y,w=s<o?s<a?s:a:o<a?o:a,g=u<h?u<m?u:m:h<m?h:m,S=s>o?s>a?s:a:o>a?o:a,C=u>h?u>m?u:m:h>m?h:m,V=r.next;V!==t;){if(V.x>=w&&V.x<=S&&V.y>=g&&V.y<=C&&Oe(s,u,o,h,a,m,V.x,V.y)&&ee(V.prev,V,V.next)>=0)return!1;V=V.next}return!0}function us(e,t,n,r){var s=e.prev,o=e,a=e.next;if(ee(s,o,a)>=0)return!1;for(var u=s.x,h=o.x,m=a.x,w=s.y,g=o.y,S=a.y,C=u<h?u<m?u:m:h<m?h:m,V=w<g?w<S?w:S:g<S?g:S,I=u>h?u>m?u:m:h>m?h:m,k=w>g?w>S?w:S:g>S?g:S,N=gt(C,V,t,n,r),G=gt(I,k,t,n,r),x=e.prevZ,M=e.nextZ;x&&x.z>=N&&M&&M.z<=G;){if(x.x>=C&&x.x<=I&&x.y>=V&&x.y<=k&&x!==s&&x!==a&&Oe(u,w,h,g,m,S,x.x,x.y)&&ee(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=C&&M.x<=I&&M.y>=V&&M.y<=k&&M!==s&&M!==a&&Oe(u,w,h,g,m,S,M.x,M.y)&&ee(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=N;){if(x.x>=C&&x.x<=I&&x.y>=V&&x.y<=k&&x!==s&&x!==a&&Oe(u,w,h,g,m,S,x.x,x.y)&&ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=G;){if(M.x>=C&&M.x<=I&&M.y>=V&&M.y<=k&&M!==s&&M!==a&&Oe(u,w,h,g,m,S,M.x,M.y)&&ee(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fs(e,t,n){var r=e;do{var s=r.prev,o=r.next.next;!ot(s,o)&&vn(s,r,r.next,o)&&Ge(s,o)&&Ge(o,s)&&(t.push(s.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),Be(r),Be(r.next),r=e=o),r=r.next}while(r!==e);return Ce(r)}function ds(e,t,n,r,s,o){var a=e;do{for(var u=a.next.next;u!==a.prev;){if(a.i!==u.i&&ws(a,u)){var h=wn(a,u);a=Ce(a,a.next),h=Ce(h,h.next),We(a,t,n,r,s,o,0),We(h,t,n,r,s,o,0);return}u=u.next}a=a.next}while(a!==e)}function hs(e,t,n,r){var s=[],o,a,u,h,m;for(o=0,a=t.length;o<a;o++)u=t[o]*r,h=o<a-1?t[o+1]*r:e.length,m=bn(e,u,h,r,!1),m===m.next&&(m.steiner=!0),s.push(vs(m));for(s.sort(ps),o=0;o<s.length;o++)n=ms(s[o],n);return n}function ps(e,t){return e.x-t.x}function ms(e,t){var n=ys(e,t);if(!n)return t;var r=wn(n,e);return Ce(r,r.next),Ce(n,n.next)}function ys(e,t){var n=t,r=e.x,s=e.y,o=-1/0,a;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var u=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=r&&u>o&&(o=u,a=n.x<n.next.x?n:n.next,u===r))return a}n=n.next}while(n!==t);if(!a)return null;var h=a,m=a.x,w=a.y,g=1/0,S;n=a;do r>=n.x&&n.x>=m&&r!==n.x&&Oe(s<w?r:o,s,m,w,s<w?o:r,s,n.x,n.y)&&(S=Math.abs(s-n.y)/(r-n.x),Ge(n,e)&&(S<g||S===g&&(n.x>a.x||n.x===a.x&&gs(a,n)))&&(a=n,g=S)),n=n.next;while(n!==h);return a}function gs(e,t){return ee(e.prev,e,t.prev)<0&&ee(t.next,e,e.next)<0}function xs(e,t,n,r){var s=e;do s.z===0&&(s.z=gt(s.x,s.y,t,n,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,bs(s)}function bs(e){var t,n,r,s,o,a,u,h,m=1;do{for(n=e,e=null,o=null,a=0;n;){for(a++,r=n,u=0,t=0;t<m&&(u++,r=r.nextZ,!!r);t++);for(h=m;u>0||h>0&&r;)u!==0&&(h===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,u--):(s=r,r=r.nextZ,h--),o?o.nextZ=s:e=s,s.prevZ=o,o=s;n=r}o.nextZ=null,m*=2}while(a>1);return e}function gt(e,t,n,r,s){return e=(e-n)*s|0,t=(t-r)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function vs(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Oe(e,t,n,r,s,o,a,u){return(s-a)*(t-u)>=(e-a)*(o-u)&&(e-a)*(r-u)>=(n-a)*(t-u)&&(n-a)*(o-u)>=(s-a)*(r-u)}function ws(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ss(e,t)&&(Ge(e,t)&&Ge(t,e)&&Ms(e,t)&&(ee(e.prev,e,t.prev)||ee(e,t.prev,t))||ot(e,t)&&ee(e.prev,e,e.next)>0&&ee(t.prev,t,t.next)>0)}function ee(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ot(e,t){return e.x===t.x&&e.y===t.y}function vn(e,t,n,r){var s=Ye(ee(e,t,n)),o=Ye(ee(e,t,r)),a=Ye(ee(n,r,e)),u=Ye(ee(n,r,t));return!!(s!==o&&a!==u||s===0&&Xe(e,n,t)||o===0&&Xe(e,r,t)||a===0&&Xe(n,e,r)||u===0&&Xe(n,t,r))}function Xe(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ye(e){return e>0?1:e<0?-1:0}function Ss(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&vn(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ge(e,t){return ee(e.prev,e,e.next)<0?ee(e,t,e.next)>=0&&ee(e,e.prev,t)>=0:ee(e,t,e.prev)<0||ee(e,e.next,t)<0}function Ms(e,t){var n=e,r=!1,s=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&s<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function wn(e,t){var n=new xt(e.i,e.x,e.y),r=new xt(t.i,t.x,t.y),s=e.next,o=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function Ht(e,t,n,r){var s=new xt(e,t,n);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function Be(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function xt(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}st.deviation=function(e,t,n,r){var s=t&&t.length,o=s?t[0]*n:e.length,a=Math.abs(bt(e,0,o,n));if(s)for(var u=0,h=t.length;u<h;u++){var m=t[u]*n,w=u<h-1?t[u+1]*n:e.length;a-=Math.abs(bt(e,m,w,n))}var g=0;for(u=0;u<r.length;u+=3){var S=r[u]*n,C=r[u+1]*n,V=r[u+2]*n;g+=Math.abs((e[S]-e[V])*(e[C+1]-e[S+1])-(e[S]-e[C])*(e[V+1]-e[S+1]))}return a===0&&g===0?0:Math.abs((g-a)/a)};function bt(e,t,n,r){for(var s=0,o=t,a=n-r;o<n;o+=r)s+=(e[a]-e[o])*(e[o+1]+e[a+1]),a=o;return s}st.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,s=0;s<e.length;s++){for(var o=0;o<e[s].length;o++)for(var a=0;a<t;a++)n.vertices.push(e[s][o][a]);s>0&&(r+=e[s-1].length,n.holes.push(r))}return n};new K;new K;var qt;(e=>{function t(s){let o=s.slice();return o.sort(e.POINT_COMPARATOR),e.makeHullPresorted(o)}e.makeHull=t;function n(s){if(s.length<=1)return s.slice();let o=[];for(let u=0;u<s.length;u++){const h=s[u];for(;o.length>=2;){const m=o[o.length-1],w=o[o.length-2];if((m.x-w.x)*(h.y-w.y)>=(m.y-w.y)*(h.x-w.x))o.pop();else break}o.push(h)}o.pop();let a=[];for(let u=s.length-1;u>=0;u--){const h=s[u];for(;a.length>=2;){const m=a[a.length-1],w=a[a.length-2];if((m.x-w.x)*(h.y-w.y)>=(m.y-w.y)*(h.x-w.x))a.pop();else break}a.push(h)}return a.pop(),o.length==1&&a.length==1&&o[0].x==a[0].x&&o[0].y==a[0].y?o:o.concat(a)}e.makeHullPresorted=n;function r(s,o){return s.x<o.x?-1:s.x>o.x?1:s.y<o.y?-1:s.y>o.y?1:0}e.POINT_COMPARATOR=r})(qt||(qt={}));new nn;new ne;new De;new an;new kt;new tt;new ne;new ne;const ks={auto:"format",q:55};function $t(e,t={}){const[n,r=""]=e.split("?"),s=new URLSearchParams(r);for(const[a,u]of Object.entries({...ks,...t}))s.set(a,String(u));const o=s.toString();return o?`${n}?${o}`:n}function Zt(e,t){const n=e.dimensions?.width;return n?Math.min(t,n):t}function qs(e,t,n={}){if(!e.url)return;const r=Zt(e,Math.round(t)),s=Zt(e,Math.round(t*2));if(!(s<=r))return[`${$t(e.url,{...n,w:r})} 1x`,`${$t(e.url,{...n,w:s})} 2x`].join(", ")}export{Vs as C,Os as D,Fs as P,Hs as S,Ee as T,Is as a,qs as b,Zt as c,Ds as d,ce as e,Gs as f,Bs as g,Ls as h,$t as i,_s as j,Us as k,Ws as l,wr as m,Ns as n,zs as o,js as p,Tt as q,Er as r,lr as s,mr as t,Zr as u,Rs as v};
