const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};C();function u(){}function L(t){return t()}function E(){return Object.create(null)}function b(t){t.forEach(L)}function O(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function W(t,e){return w||(w=document.createElement("a")),w.href=e,t===w.href}function P(t){return Object.keys(t).length===0}function Z(t,e){t.appendChild(e)}function T(t,e,r){t.insertBefore(e,r||null)}function M(t){t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function tt(){return B(" ")}function et(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function rt(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function F(t){return Array.from(t.childNodes)}function ot(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function nt(t,e,r,n){r===null?t.style.removeProperty(e):t.style.setProperty(e,r,n?"important":"")}let v;function p(t){v=t}const d=[],S=[],g=[],N=[],R=Promise.resolve();let x=!1;function U(){x||(x=!0,R.then(A))}function k(t){g.push(t)}const y=new Set;let f=0;function A(){const t=v;do{for(;f<d.length;){const e=d[f];f++,p(e),H(e.$$)}for(p(null),d.length=0,f=0;S.length;)S.pop()();for(let e=0;e<g.length;e+=1){const r=g[e];y.has(r)||(y.add(r),r())}g.length=0}while(d.length);for(;N.length;)N.pop()();x=!1,y.clear(),p(t)}function H(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const h=new Set;let Y;function K(t,e){t&&t.i&&(h.delete(t),t.i(e))}function at(t,e,r,n){if(t&&t.o){if(h.has(t))return;h.add(t),Y.c.push(()=>{h.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}}function it(t){t&&t.c()}function X(t,e,r,n){const{fragment:o,on_mount:i,on_destroy:s,after_update:m}=t.$$;o&&o.m(e,r),n||k(()=>{const l=i.map(L).filter(O);s?s.push(...l):b(l),t.$$.on_mount=[]}),m.forEach(k)}function D(t,e){const r=t.$$;r.fragment!==null&&(b(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function G(t,e){t.$$.dirty[0]===-1&&(d.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,r,n,o,i,s,m=[-1]){const l=v;p(t);const a=t.$$={fragment:null,ctx:null,props:i,update:u,not_equal:o,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:E(),dirty:m,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let _=!1;if(a.ctx=r?r(t,e.props||{},(c,z,...$)=>{const j=$.length?$[0]:z;return a.ctx&&o(a.ctx[c],a.ctx[c]=j)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](j),_&&G(t,c)),z}):[],a.update(),_=!0,b(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const c=F(e.target);a.fragment&&a.fragment.l(c),c.forEach(M)}else a.fragment&&a.fragment.c();e.intro&&K(t.$$.fragment),X(t,e.target,e.anchor,e.customElement),A()}p(l)}class Q{$destroy(){D(this,1),this.$destroy=u}$on(e,r){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function V(t){let e;return{c(){e=I("main"),e.innerHTML='<h1 class="font-primary text-center text-4xl p-5 font-semibold">(de)Motivator</h1>'},m(r,n){T(r,e,n)},p:u,i:u,o:u,d(r){r&&M(e)}}}class st extends Q{constructor(e){super(),J(this,e,null,V,q,{})}}export{Q as S,st as T,tt as a,W as b,rt as c,T as d,I as e,Z as f,ot as g,M as h,J as i,it as j,K as k,et as l,X as m,u as n,at as o,D as p,nt as q,q as s,B as t};
