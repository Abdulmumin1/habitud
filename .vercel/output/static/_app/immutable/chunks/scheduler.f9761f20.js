var R=Object.defineProperty;var q=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(q(t,typeof e!="symbol"?e+"":e,n),n);function H(){}const ot=t=>t;function F(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function G(t){return t()}function at(){return Object.create(null)}function z(t){t.forEach(G)}function I(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function U(t,...e){if(t==null){for(const i of e)i(void 0);return H}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(U(e,n))}function dt(t,e,n,i){if(t){const s=j(t,e,n,i);return t[0](s)}}function j(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function pt(t,e,n,i,s,l){if(s){const r=j(e,n,i,l);t.p(r,s)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function bt(t){return t??""}function xt(t){return t&&I(t.destroy)?t.destroy:H}function Et(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function Tt(){p=!0}function wt(){p=!1}function W(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=u?s+1:W(1,s,B=>e[n[B]].claim_order,u))-1;i[c]=n[a]+1;const N=a+1;n[N]=c,s=Math.max(N,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(r[c],a)}}function K(t,e){t.appendChild(e)}function Q(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=T("style");return e.textContent="/* empty */",V(Q(t),e),e.sheet}function V(t,e){return K(t.head||t,e),e.sheet}function X(t,e){if(p){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Y(t,e,n){t.insertBefore(e,n||null)}function Z(t,e,n){p&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function At(){return w(" ")}function kt(){return w("")}function Dt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function M(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const $=["width","height"];function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&$.indexOf(i)===-1?t[i]=e[i]:M(t,i,e[i])}function jt(t,e){for(const n in e)M(t,n,e[n])}function Lt(t){return t.dataset.svelteH}function Mt(t){return t===""?null:+t}function Ct(t){return Array.from(t.childNodes)}function C(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){C(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function S(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Pt(t,e,n){return S(t,e,n,T)}function St(t,e,n){return S(t,e,n,L)}function tt(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function Ot(t){return tt(t," ")}function v(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Bt(t,e){const n=v(t,"HTML_TAG_START",0),i=v(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new A(e);C(t);const s=t.splice(n,i-n+1);x(s[0]),x(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(e,l)}function Rt(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e){t.value=e??""}function Ft(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Gt(t,e,n){t.classList.toggle(e,!!n)}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function zt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class nt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=L(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Y(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class A extends nt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Z(this.t,this.n[i],n)}}function It(t,e){return new t(e)}let m;function g(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Ut(t){y().$$.on_mount.push(t)}function Wt(t){y().$$.after_update.push(t)}function Jt(t){y().$$.on_destroy.push(t)}function Kt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=et(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}const d=[],k=[];let h=[];const D=[],O=Promise.resolve();let E=!1;function it(){E||(E=!0,O.then(rt))}function Qt(){return it(),O}function st(t){h.push(t)}const b=new Set;let _=0;function rt(){if(_!==0)return;const t=m;do{try{for(;_<d.length;){const e=d[_];_++,g(e),ct(e.$$)}}catch(e){throw d.length=0,_=0,e}for(g(null),d.length=0,_=0;k.length;)k.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];b.has(n)||(b.add(n),n())}h.length=0}while(d.length);for(;D.length;)D.pop()();E=!1,b.clear(),g(t)}function ct(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}function Vt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{Et as $,F as A,Gt as B,X as C,Dt as D,z as E,ht as F,Jt as G,A as H,Bt as I,bt as J,st as K,dt as L,zt as M,pt as N,yt as O,mt as P,Lt as Q,vt as R,xt as S,qt as T,Mt as U,gt as V,Ht as W,L as X,St as Y,jt as Z,Kt as _,At as a,Q as a0,Nt as a1,et as a2,at as a3,_t as a4,Vt as a5,m as a6,G as a7,d as a8,it as a9,Tt as aa,wt as ab,Wt as b,Ot as c,x as d,kt as e,T as f,Pt as g,Ct as h,Z as i,M as j,Ft as k,w as l,tt as m,Rt as n,Ut as o,k as p,It as q,H as r,ft as s,Qt as t,ot as u,ut as v,y as w,g as x,rt as y,I as z};
