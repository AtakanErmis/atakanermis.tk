var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function m(t){g=t}const p=[],h=[],$=[],k=[],b=Promise.resolve();let y=!1;function v(t){$.push(t)}let w=!1;const _=new Set;function x(){if(!w){w=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];m(e),A(e.$$)}for(p.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];_.has(e)||(_.add(e),e())}$.length=0}while(p.length);for(;k.length;)k.pop()();y=!1,w=!1,_.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const E=new Set;function L(t,e){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,b.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(i,c,l,a,u,f,d=[-1]){const p=g;m(i);const h=c.props||{},$=i.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:d};let k=!1;if($.ctx=l?l(i,h,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),k&&L(i,t)),e}):[],$.update(),k=!0,o($.before_update),$.fragment=!!a&&a($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();c.intro&&((b=i.$$.fragment)&&b.i&&(E.delete(b),b.i(y))),function(t,n,i){const{fragment:c,on_mount:l,on_destroy:a,after_update:s}=t.$$;c&&c.m(n,i),v(()=>{const n=l.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(v)}(i,c.target,c.anchor),x()}var b,y;m(p)}function T(t,e,n){const o=t.slice();return o[1]=e[n].name,o[2]=e[n].link,o[3]=e[n].icon,o}function N(t){let e,n,o,r,i,g,m;return{c(){e=u("li"),n=u("a"),o=u("i"),m=f(),d(o,"class",r=c(t[3])+" svelte-1gdeg4"),d(n,"href",i=t[2]),d(n,"aria-label",g=t[1]),d(n,"rel","noopener noreferrer"),d(n,"target","_blank"),d(n,"class","svelte-1gdeg4"),d(e,"class","svelte-1gdeg4")},m(t,r){a(t,e,r),l(e,n),l(n,o),l(e,m)},p(t,e){1&e&&r!==(r=c(t[3])+" svelte-1gdeg4")&&d(o,"class",r),1&e&&i!==(i=t[2])&&d(n,"href",i),1&e&&g!==(g=t[1])&&d(n,"aria-label",g)},d(t){t&&s(e)}}}function C(e){let n,o,r,i,c,g,m,p=e[0],h=[];for(let t=0;t<p.length;t+=1)h[t]=N(T(e,p,t));return{c(){n=u("main"),o=u("div"),r=u("h1"),r.textContent="ATAKAN ERMİŞ",i=f(),c=u("h2"),c.textContent="Software Developer",g=f(),m=u("ul");for(let t=0;t<h.length;t+=1)h[t].c();d(r,"class","svelte-1gdeg4"),d(c,"class","svelte-1gdeg4"),d(m,"class","svelte-1gdeg4"),d(o,"class","content svelte-1gdeg4"),d(n,"class","svelte-1gdeg4")},m(t,e){a(t,n,e),l(n,o),l(o,r),l(o,i),l(o,c),l(o,g),l(o,m);for(let t=0;t<h.length;t+=1)h[t].m(m,null)},p(t,[e]){if(1&e){let n;for(p=t[0],n=0;n<p.length;n+=1){const o=T(t,p,n);h[n]?h[n].p(o,e):(h[n]=N(o),h[n].c(),h[n].m(m,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=p.length}},i:t,o:t,d(t){t&&s(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(h,t)}}}function S(t,e,n){let{socialLinks:o}=e;return t.$set=t=>{"socialLinks"in t&&n(0,o=t.socialLinks)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),M(this,t,S,C,i,{socialLinks:0})}}({target:document.body,props:{socialLinks:[{name:"Twitter",icon:"icon-twitter",link:"https://twitter.com/atakan_ermis"},{name:"Reddit",icon:"icon-reddit-alien",link:"https://www.reddit.com/user/AtakanErmis"},{name:"Github",icon:"icon-github",link:"https://github.com/AtakanErmis"},{name:"Telegram",icon:"icon-telegram",link:"https://t.me/AtakanErmis"},{name:"Last.FM",icon:"icon-lastfm",link:"https://www.last.fm/user/AtakanErmis"},{name:"Spotify",icon:"icon-spotify",link:"https://open.spotify.com/user/5c9in3cvvftwlkbaeqcfvsdok?si=g6Llj8FyQTmMMN40HUgTOg"},{name:"E-Mail",icon:"icon-email\t",link:"mailto:ataerms@gmail.com"}]}})}();
//# sourceMappingURL=bundle.js.map
