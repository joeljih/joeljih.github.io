var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(){return t=" ",document.createTextNode(t);var t}function a(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let f;function d(t){f=t}const p=[],$=[],h=[],m=[],g=Promise.resolve();let y=!1;function b(t){h.push(t)}let x=!1;const _=new Set;function v(){if(!x){x=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),k(n.$$)}for(d(null),p.length=0;$.length;)$.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];_.has(n)||(_.add(n),n())}h.length=0}while(p.length);for(;m.length;)m.pop()();y=!1,x=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const w=new Set;function E(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,g.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(c,u,i,l,a,p,$,h=[-1]){const m=f;d(c);const g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:u.context||[]),callbacks:e(),dirty:h,skip_bound:!1,root:u.target||m.$$.root};$&&$(g.root);let y=!1;if(g.ctx=i?i(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&E(c,t)),n})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();u.intro&&((x=c.$$.fragment)&&x.i&&(w.delete(x),x.i(_))),function(t,e,c,u){const{fragment:s,on_mount:i,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,c),u||b((()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(b)}(c,u.target,u.anchor,u.customElement),v()}var x,_;d(m)}function C(n){let e,o,r,c;return{c(){e=i("main"),o=i("h1"),o.textContent="This sucks",r=l(),c=i("p"),c.textContent=`Hello ${j}`,a(o,"class","svelte-yo4o0x"),a(c,"class","svelte-yo4o0x"),a(e,"class","svelte-yo4o0x")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(e,r),u(e,c)},p:t,i:t,o:t,d(t){t&&s(e)}}}let j="it's alive";return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,null,C,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
