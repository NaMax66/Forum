module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"64b29505dea3cd9f0349",2:"94dd50b49aac5b9aa1ec"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/_nuxt/",r.oe=function(t){process.nextTick((function(){throw t}))},r(r.s=15)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,h){var d,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=d):o&&(d=h?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(f.functional){f._injectStyles=d;var m=f.render;f.render=function(t,e){return d.call(e),m(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,d):[d]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=require("vue-router")},function(t,e,n){var content=n(18);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(8).default;t.exports.__inject__=function(t){r("72daabed",content,!0,t)}},function(t,e,n){var content=n(20);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(8).default;t.exports.__inject__=function(t){r("3191d5ad",content,!0,t)}},function(t,e,n){var content=n(22);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(8).default;t.exports.__inject__=function(t){r("932a8f60",content,!0,t)}},function(t,e){t.exports=require("vue-no-ssr")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),o=n.sources.map((function(source){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(source," */")}));return[content].concat(o).concat([r]).join("\n")}var c,l,data;return[content].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(content,"}"):content})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);r&&o[h[0]]||(n&&(h[2]?h[2]="".concat(n," and ").concat(h[2]):h[2]=n),e.push(h))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e){t.exports=require("vuex")},function(t,e){},function(t,e){t.exports=require("vue-client-only")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e,n){t.exports=n(24)},function(t,e,n){"use strict";n.r(e),e.default=function({store:t,redirect:e}){Object.keys(t.state.user).length||e("/?message=noUser")}},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(7)(!1)).push([t.i,"\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(7)(!1)).push([t.i,"\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: #3B8070;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(7)(!1)).push([t.i,'\n:root {\n  --admin-color: #455A64;\n  --white: #ECEFF1;\n  --black: #263238;\n  --current-user-color: #FFCC80;\n  --other-user-color: #C8E6C9;\n  --border-radius: 3px;\n}\nhtml {\n  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-size: 62.5%;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n.body {\n  background-color: var(--white);\n}\n.wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n',""]),t.exports=e},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c}));const r=()=>({chatMessages:"Hi",user:{},messages:[],users:[]}),o={SET_MESSAGE(t,e){t.chatMessages+=e},setUser(t,e){t.user=e},clearData(t){t.user={},t.messages=[],t.users=[]},SOCKET_newMessage(t,e){t.messages.push(e)},SOCKET_updateUsers(t,e){t.users=e}},c={FORMAT_MESSAGE({commit:t},e){t("SET_MESSAGE",`${(new Date).toLocaleString()}: ${e}\r\n`)}}},function(t,e,n){"use strict";n.r(e);var r=n(12),o=n(0),c=n.n(o),l=n(13),h=n.n(l);const d={};d.chat=n(16),d.chat=d.chat.default||d.chat;var f=d;function m(t){return t.then(t=>t.default||t)}function x(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function y(t,e=!1,n="components"){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t[n]).map(o=>(e&&e.push(r),t[n][o]))))}function v(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,n,r,o)=>("function"!=typeof t||t.options||(t=await t()),r.components[o]=t=x(t),"function"==typeof e?e(t,n,r,o):t)))}async function _(t){if(t)return await v(t),{...t,meta:y(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function w(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,store:t.store,payload:e.payload,error:e.error,base:"/",env:{FOO:"test",APP_IP:"localhost",APP_PORT:"4000"}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");c=path.split("#"),2===c.length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:"",l}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([_(e.route),_(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function $(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():C(t[0],e).then(()=>$(t.slice(1),e))}function C(t,e){let n;return n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e),n&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function S(t,e){return function(t,e){const n=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",N(e)));return function(e,r){let path="";const data=e||{},o=(r||{}).pretty?k:encodeURIComponent;for(let i=0;i<t.length;i++){const e=t[i];if("string"==typeof e){path+=e;continue}const r=data[e.name||"pathMatch"];let c;if(null==r){if(e.optional){e.partial&&(path+=e.prefix);continue}throw new TypeError('Expected "'+e.name+'" to be defined')}if(Array.isArray(r)){if(!e.repeat)throw new TypeError('Expected "'+e.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(e.optional)continue;throw new TypeError('Expected "'+e.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!n[i].test(c))throw new TypeError('Expected all "'+e.name+'" to match "'+e.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?e.prefix:e.delimiter)+c}}else{if(c=e.asterisk?k(r,!0):o(r),!n[i].test(c))throw new TypeError('Expected "'+e.name+'" to match "'+e.pattern+'", but received "'+c+'"');path+=e.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=E.exec(t));){const e=l[0],h=l[1],d=l.index;if(path+=t.slice(o,d),o=d+e.length,h){path+=h[1];continue}const f=t[o],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const $=null!=m&&null!=f&&f!==m,C="+"===_||"*"===_,S="?"===_||"*"===_,j=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:j,optional:S,repeat:C,partial:$,asterisk:Boolean(w),pattern:pattern?T(pattern):w?".*":"[^"+O(j)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e),e)}function j(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}const E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function k(t,e){const n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function O(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$/()])/g,"\\$1")}function N(t){return t&&t.sensitive?"":"i"}async function P(){if(!this._fetchOnServer)return;try{await this.$options.fetch.call(this)}catch(t){this.$fetchState.error=j(t)}this.$fetchState.pending=!1,this._fetchKey=this.$ssrContext.nuxt.fetch.length,(this.$vnode.data.attrs=this.$vnode.data.attrs||{})["data-fetch-key"]=this._fetchKey,this.$ssrContext.nuxt.fetch.push(this.$fetchState.error?{_error:this.$fetchState.error}:this._data)}var A={beforeCreate(){var t;(t=this).$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length&&("function"==typeof this.$options.fetchOnServer?this._fetchOnServer=!1!==this.$options.fetchOnServer.call(this):this._fetchOnServer=!1!==this.$options.fetchOnServer,c.a.util.defineReactive(this,"$fetchState",{pending:!0,error:null,timestamp:Date.now()}),function(t,e,n){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(n)||t.$options[e].push(n)}(this,"serverPrefetch",P))}},R=n(14),M=n.n(R),F=n(11),D=n.n(F),U=n(6),L=n.n(U),B=n(2),I=n.n(B);const z=()=>{},K=I.a.prototype.push;I.a.prototype.push=function(t,e=z,n){return K.call(this,t,e,n)},c.a.use(I.a);const V={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){let r=!1;const o=y(t);(o.length<2&&o.every(t=>!1!==t.options.scrollToTop)||o.some(t=>t.options.scrollToTop))&&(r={x:0,y:0}),n&&(r=n);const c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})},routes:[{path:"/chat",component:()=>m(n.e(1).then(n.bind(null,31))),name:"chat"},{path:"/",component:()=>m(n.e(2).then(n.bind(null,32))),name:"index"}],fallback:!1};var H={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){const r=e.$createElement;data.nuxtChild=!0;const o=e,c=e.$nuxt.nuxt.transitions,l=e.$nuxt.nuxt.defaultTransition;let h=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&h++,e=e.$parent;data.nuxtChildDepth=h;const d=c[h]||l,f={};J.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const m={};if(G.forEach(t=>{"function"==typeof d[t]&&(m[t]=d[t].bind(o))}),!1===d.css){const t=m.leave;(!t||t.length<2)&&(m.leave=(e,n)=>{t&&t.call(o,e),o.$nextTick(n)})}let x=r("routerView",data);return n.keepAlive&&(x=r("keep-alive",{props:n.keepAliveProps},[x])),r("transition",{props:f,on:m},[x])}};const J=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],G=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var X={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},W=n(1);var Q=Object(W.a)(X,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=n(17);e.__inject__&&e.__inject__(t)}),null,"09ca533d").exports,Y={name:"Nuxt",components:{NuxtChild:H,NuxtError:Q},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||S(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: "+this.errorFromNuxtError.toString()),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(Q,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},Z={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(t){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100||this.percent<=0)&&(this.skipTimerCount=1,this.reversed=!this.reversed))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var tt=Object(W.a)(Z,void 0,void 0,!1,(function(t){var e=n(19);e.__inject__&&e.__inject__(t)}),null,"36d97531").exports;const et={_default:x(Object(W.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("nuxt")],1)}),[],!1,(function(t){var e=n(21);e.__inject__&&e.__inject__(t)}),null,"3cb104d2").exports)};var nt={render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:"",nbFetching:0}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline},isFetching(){return this.nbFetching>0}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return y(t,e,"instances")}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(t=>{const p=[];if(t.$options.fetch&&t.$options.fetch.length&&p.push(C(t.$options.fetch,this.context)),t.$fetch)p.push(t.$fetch());else for(const component of function t(e,n=[]){const r=e.$children||[];for(const e of r)e.$fetch?n.push(e):e.$children&&t(e,n);return n}(t.$vnode.componentInstance))p.push(component.$fetch());return t.$options.asyncData&&p.push(C(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(t),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(this.nuxt.err),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&et["_"+t]||(t="default"),this.layoutName=t,this.layout=et["_"+t],this.layout},loadLayout:t=>(t&&et["_"+t]||(t="default"),Promise.resolve(et["_"+t]))},components:{NuxtLoading:tt}},ot=n(9),it=n.n(ot);c.a.use(it.a);let st={};st=function(t,e){if((t=t.default||t).commit)throw new Error(`[nuxt] ${e} should export a method that returns a Vuex instance.`);return"function"!=typeof t&&(t=Object.assign({},t)),function(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in "+e);const n=Object.assign({},t.state);t=Object.assign({},t,{state:()=>n})}return t}(t,e)}(n(23),"store/index.js"),st.modules=st.modules||{};const at=st instanceof Function?st:()=>new it.a.Store(Object.assign({strict:!1},st));n(10);c.a.component(D.a.name,D.a),c.a.component(L.a.name,{...L.a,render:(t,e)=>L.a.render(t,e)}),c.a.component(H.name,H),c.a.component("NChild",H),c.a.component(Y.name,Y),c.a.use(M.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ct={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function ut(t){const e=await new I.a(V),n=at(t);n.$router=e;const r=n.registerModule;n.registerModule=(path,t,e)=>r.call(n,path,t,Object.assign({preserveState:!1},e));const o={head:{title:"forum-app",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"forum-app"},{hid:"author",name:"author",content:"Максим Найдович"},{hid:"theme-color",name:"theme-color",content:"#3B8070"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"forum-app"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"forum-app"},{hid:"og:description",name:"og:description",property:"og:description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/_nuxt/manifest.de530182.json"}],style:[],script:[],htmlAttrs:{lang:"en"}},store:n,router:e,nuxt:{defaultTransition:ct,transitions:[ct],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},ct,{name:t}):Object.assign({},ct,t):ct),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,o.context._errored=Boolean(e),e=e?j(e):null;let n=o.nuxt;return this&&(n=this.nuxt||this.$options.nuxt),n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...nt};n.app=o;const c=t?t.next:t=>o.router.push(t);let l;if(t)l=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base,e.options.mode);l=e.resolve(path).route}await w(o,{store:n,route:l,next:c,error:o.nuxt.error.bind(o),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});return t&&t.url&&await new Promise((n,r)=>{e.push(t.url,n,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,o.context.route=await _(e),o.context.params=e.params||{},o.context.query=e.query||{},r(),n()})})}),{store:n,app:o,router:e}}var lt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.config.optionMergeStrategies.serverPrefetch=c.a.config.optionMergeStrategies.created,c.a.__nuxt__fetch__mixin__||(c.a.mixin(A),c.a.__nuxt__fetch__mixin__=!0),c.a.component(lt.name,lt),c.a.component("NLink",lt),global.fetch||(global.fetch=h.a);const pt=()=>new c.a({render:t=>t("div")});const ht=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=ht(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],fetch:[],error:null,state:null,serverRendered:!0,routePath:""};const{app:e,router:n,store:r}=await ut(t),o=new c.a(e);t.nuxt.routePath=e.context.route.path,t.meta=o.$meta(),t.asyncData={};const l=async()=>{await Promise.all(t.beforeRenderFns.map(e=>C(e,{Components:m,nuxtState:t.nuxt}))),t.rendered=()=>{t.nuxt.state=r.state}},h=async()=>{const n=(Q.options||Q).layout,r="function"==typeof n?n.call(Q,e.context):n;return t.nuxt.layout=r||"default",await o.loadLayout(r),o.setLayout(r),await l(),o},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),h()),m=y(n.match(t.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",e.context)}catch(t){throw console.debug("Error occurred when calling nuxtServerInit: ",t.message),t}if(t.redirected)return pt();if(t.nuxt.error)return h();let v=[];if(v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await $(v,e.context),t.redirected)return pt();if(t.nuxt.error)return h();let _=m.length?m[0].options.layout:Q.layout;if("function"==typeof _&&(_=_(e.context)),await o.loadLayout(_),t.nuxt.error)return h();if(_=o.setLayout(_),t.nuxt.layout=o.layoutName,v=[],_=x(_),_.options.middleware&&(v=v.concat(_.options.middleware)),m.forEach(t=>{t.options.middleware&&(v=v.concat(t.options.middleware))}),v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await $(v,e.context),t.redirected)return pt();if(t.nuxt.error)return h();let w=!0;try{for(const t of m)if("function"==typeof t.options.validate&&(w=await t.options.validate(e.context),!w))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),h()}if(!w)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!m.length)return d();const S=await Promise.all(m.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=C(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch&&n.options.fetch.length?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=S.map(t=>t[0]||{}),t.redirected?pt():t.nuxt.error?h():(await l(),o)}}]);