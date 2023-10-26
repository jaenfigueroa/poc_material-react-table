import{r as Me,c as ee,j as p,T as Se,C as Ee,L as de,_ as h,a as G}from"./material-544325ae.js";import{c as De,r as P,b as we,a as E}from"./react-ce8bd5b3.js";import{R as Qe,a as Re,H as Le,B as Te,N as $e}from"./router-a90f590c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();var X={},se=De;X.createRoot=se.createRoot,X.hydrateRoot=se.hydrateRoot;const je={components:{MuiBreadcrumbs:{defaultProps:{expandText:"Mostrar ruta"}},MuiTablePagination:{defaultProps:{getItemAriaLabel:s=>s==="first"?"Ir a la primera página":s==="last"?"Ir a la última página":s==="next"?"Ir a la página siguiente":"Ir a la página anterior",labelRowsPerPage:"Filas por página:",labelDisplayedRows:({from:s,to:n,count:r})=>`${s}–${n} de ${r!==-1?r:`más de ${n}`}`}},MuiRating:{defaultProps:{getLabelText:s=>`${s} Estrella${s!==1?"s":""}`,emptyLabelText:"Vacío"}},MuiAutocomplete:{defaultProps:{clearText:"Limpiar",closeText:"Cerrar",loadingText:"Cargando…",noOptionsText:"Sin opciones",openText:"Abierto"}},MuiAlert:{defaultProps:{closeText:"Cerrar"}},MuiPagination:{defaultProps:{"aria-label":"Paginador",getItemAriaLabel:(s,n,r)=>s==="page"?`${r?"":"Ir a la "}página ${n}`:s==="first"?"Ir a la primera página":s==="last"?"Ir a la última página":s==="next"?"Ir a la página siguiente":"Ir a la página anterior"}}}},Ie={light:"#06ABDF",main:"#0099CC",dark:"#0075B0",contrastText:"#fff"},Ke={main:"#EE2C70",contrastText:"#fff"},I=Me(ee({palette:{mode:"light",primary:{...Ie},secondary:{...Ke},common:{white:"#fff",black:"#101010"},background:{paper:"#fff",default:"#fff"}}},je),{factor:5}),Ue=ee({...I,palette:{mode:"dark",primary:{...I.palette.primary},secondary:{...I.palette.secondary},background:{paper:"#151515",default:"#101010"}}});function Ne(s,n){const r=localStorage.getItem(s),e=r?JSON.parse(r):n,[t,i]=P.useState(e);return P.useEffect(()=>{t===null?localStorage.removeItem(s):localStorage.setItem(s,JSON.stringify(t))},[s,t]),[t,i]}const He=P.createContext({toggleColorMode:()=>{}}),Be=({children:s})=>{const[n,r]=Ne("theme","light"),e=P.useMemo(()=>({toggleColorMode:()=>{r(n==="light"?"dark":"light")}}),[n,r]),t=P.useMemo(()=>ee(n==="light"?I:Ue),[n]);return p.jsx(He.Provider,{value:e,children:p.jsxs(Se,{theme:t,children:[p.jsx(Ee,{enableColorScheme:!0}),s]})})},Ge="modulepreload",Ve=function(s,n){return new URL(s,n).href},ae={},V=function(n,r,e){if(!r||r.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Ve(i,e),i in ae)return;ae[i]=!0;const a=i.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!e)for(let f=t.length-1;f>=0;f--){const d=t[f];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Ge,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},ke=!!{}.VITE_IS_HASH,ze=ke?Le:Te,Je=P.lazy(()=>V(()=>import("./Login-b9dcc4a3.js"),["./Login-b9dcc4a3.js","./material-544325ae.js","./react-ce8bd5b3.js","./useForm-364f70f7.js","./router-a90f590c.js"],import.meta.url)),We=P.lazy(()=>V(()=>import("./Admin-aa168ec8.js").then(s=>s.A),["./Admin-aa168ec8.js","./material-544325ae.js","./react-ce8bd5b3.js"],import.meta.url)),Ye=P.lazy(()=>V(()=>import("./NotFound-61ff761f.js"),["./NotFound-61ff761f.js","./material-544325ae.js","./react-ce8bd5b3.js","./router-a90f590c.js"],import.meta.url)),Xe=P.lazy(()=>V(()=>import("./index-130b3282.js"),["./index-130b3282.js","./material-544325ae.js","./react-ce8bd5b3.js","./router-a90f590c.js"],import.meta.url)),Ze=[{path:"/",element:p.jsx($e,{to:"/login"})},{path:"/login",element:p.jsx(Je,{})},{path:"/admin",element:p.jsx(We,{})},{path:"*",element:p.jsx(Ye,{})}],et=()=>p.jsxs(ze,{children:[p.jsx(Xe,{}),p.jsx(Qe,{children:Ze.map((s,n)=>p.jsx(Re,{path:s.path,element:p.jsx(P.Suspense,{fallback:p.jsx(de,{}),children:s.element})},n))})]}),tt=P.createContext({}),nt=({children:s})=>{const[n,r]=P.useState(!1),e=P.useMemo(()=>({isLogged:n,setIsLogged:r}),[n,r]);return p.jsx(tt.Provider,{value:e,children:s})};var k=function(){function s(){this.listeners=[]}var n=s.prototype;return n.subscribe=function(e){var t=this,i=e||function(){};return this.listeners.push(i),this.onSubscribe(),function(){t.listeners=t.listeners.filter(function(a){return a!==i}),t.onUnsubscribe()}},n.hasListeners=function(){return this.listeners.length>0},n.onSubscribe=function(){},n.onUnsubscribe=function(){},s}(),ve=typeof window>"u";function C(){}function rt(s,n){return typeof s=="function"?s(n):s}function it(s){return typeof s=="number"&&s>=0&&s!==1/0}function N(s){return Array.isArray(s)?s:[s]}function st(s,n){return Math.max(s+(n||0)-Date.now(),0)}function W(s,n,r){return z(s)?typeof n=="function"?h({},r,{queryKey:s,queryFn:n}):h({},n,{queryKey:s}):s}function S(s,n,r){return z(s)?[h({},n,{queryKey:s}),r]:[s||{},n]}function at(s,n){if(s===!0&&n===!0||s==null&&n==null)return"all";if(s===!1&&n===!1)return"none";var r=s??!n;return r?"active":"inactive"}function ue(s,n){var r=s.active,e=s.exact,t=s.fetching,i=s.inactive,a=s.predicate,u=s.queryKey,o=s.stale;if(z(u)){if(e){if(n.queryHash!==te(u,n.options))return!1}else if(!H(n.queryKey,u))return!1}var c=at(r,i);if(c==="none")return!1;if(c!=="all"){var f=n.isActive();if(c==="active"&&!f||c==="inactive"&&f)return!1}return!(typeof o=="boolean"&&n.isStale()!==o||typeof t=="boolean"&&n.isFetching()!==t||a&&!a(n))}function oe(s,n){var r=s.exact,e=s.fetching,t=s.predicate,i=s.mutationKey;if(z(i)){if(!n.options.mutationKey)return!1;if(r){if(Q(n.options.mutationKey)!==Q(i))return!1}else if(!H(n.options.mutationKey,i))return!1}return!(typeof e=="boolean"&&n.state.status==="loading"!==e||t&&!t(n))}function te(s,n){var r=(n==null?void 0:n.queryKeyHashFn)||Q;return r(s)}function Q(s){var n=N(s);return ut(n)}function ut(s){return JSON.stringify(s,function(n,r){return Z(r)?Object.keys(r).sort().reduce(function(e,t){return e[t]=r[t],e},{}):r})}function H(s,n){return pe(N(s),N(n))}function pe(s,n){return s===n?!0:typeof s!=typeof n?!1:s&&n&&typeof s=="object"&&typeof n=="object"?!Object.keys(n).some(function(r){return!pe(s[r],n[r])}):!1}function ye(s,n){if(s===n)return s;var r=Array.isArray(s)&&Array.isArray(n);if(r||Z(s)&&Z(n)){for(var e=r?s.length:Object.keys(s).length,t=r?n:Object.keys(n),i=t.length,a=r?[]:{},u=0,o=0;o<i;o++){var c=r?o:t[o];a[c]=ye(s[c],n[c]),a[c]===s[c]&&u++}return e===i&&u===e?s:a}return n}function Et(s,n){if(s&&!n||n&&!s)return!1;for(var r in s)if(s[r]!==n[r])return!1;return!0}function Z(s){if(!ce(s))return!1;var n=s.constructor;if(typeof n>"u")return!0;var r=n.prototype;return!(!ce(r)||!r.hasOwnProperty("isPrototypeOf"))}function ce(s){return Object.prototype.toString.call(s)==="[object Object]"}function z(s){return typeof s=="string"||Array.isArray(s)}function ot(s){return new Promise(function(n){setTimeout(n,s)})}function le(s){Promise.resolve().then(s).catch(function(n){return setTimeout(function(){throw n})})}function me(){if(typeof AbortController=="function")return new AbortController}var ct=function(s){G(n,s);function n(){var e;return e=s.call(this)||this,e.setup=function(t){var i;if(!ve&&((i=window)!=null&&i.addEventListener)){var a=function(){return t()};return window.addEventListener("visibilitychange",a,!1),window.addEventListener("focus",a,!1),function(){window.removeEventListener("visibilitychange",a),window.removeEventListener("focus",a)}}},e}var r=n.prototype;return r.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},r.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},r.setEventListener=function(t){var i,a=this;this.setup=t,(i=this.cleanup)==null||i.call(this),this.cleanup=t(function(u){typeof u=="boolean"?a.setFocused(u):a.onFocus()})},r.setFocused=function(t){this.focused=t,t&&this.onFocus()},r.onFocus=function(){this.listeners.forEach(function(t){t()})},r.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},n}(k),K=new ct,lt=function(s){G(n,s);function n(){var e;return e=s.call(this)||this,e.setup=function(t){var i;if(!ve&&((i=window)!=null&&i.addEventListener)){var a=function(){return t()};return window.addEventListener("online",a,!1),window.addEventListener("offline",a,!1),function(){window.removeEventListener("online",a),window.removeEventListener("offline",a)}}},e}var r=n.prototype;return r.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},r.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},r.setEventListener=function(t){var i,a=this;this.setup=t,(i=this.cleanup)==null||i.call(this),this.cleanup=t(function(u){typeof u=="boolean"?a.setOnline(u):a.onOnline()})},r.setOnline=function(t){this.online=t,t&&this.onOnline()},r.onOnline=function(){this.listeners.forEach(function(t){t()})},r.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},n}(k),U=new lt;function ft(s){return Math.min(1e3*Math.pow(2,s),3e4)}function B(s){return typeof(s==null?void 0:s.cancel)=="function"}var ge=function(n){this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent};function Y(s){return s instanceof ge}var be=function(n){var r=this,e=!1,t,i,a,u;this.abort=n.abort,this.cancel=function(v){return t==null?void 0:t(v)},this.cancelRetry=function(){e=!0},this.continueRetry=function(){e=!1},this.continue=function(){return i==null?void 0:i()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(v,l){a=v,u=l});var o=function(l){r.isResolved||(r.isResolved=!0,n.onSuccess==null||n.onSuccess(l),i==null||i(),a(l))},c=function(l){r.isResolved||(r.isResolved=!0,n.onError==null||n.onError(l),i==null||i(),u(l))},f=function(){return new Promise(function(l){i=l,r.isPaused=!0,n.onPause==null||n.onPause()}).then(function(){i=void 0,r.isPaused=!1,n.onContinue==null||n.onContinue()})},d=function v(){if(!r.isResolved){var l;try{l=n.fn()}catch(y){l=Promise.reject(y)}t=function(g){if(!r.isResolved&&(c(new ge(g)),r.abort==null||r.abort(),B(l)))try{l.cancel()}catch{}},r.isTransportCancelable=B(l),Promise.resolve(l).then(o).catch(function(y){var g,x;if(!r.isResolved){var O=(g=n.retry)!=null?g:3,b=(x=n.retryDelay)!=null?x:ft,F=typeof b=="function"?b(r.failureCount,y):b,L=O===!0||typeof O=="number"&&r.failureCount<O||typeof O=="function"&&O(r.failureCount,y);if(e||!L){c(y);return}r.failureCount++,n.onFail==null||n.onFail(r.failureCount,y),ot(F).then(function(){if(!K.isFocused()||!U.isOnline())return f()}).then(function(){e?c(y):v()})}})}};d()},ht=function(){function s(){this.queue=[],this.transactions=0,this.notifyFn=function(r){r()},this.batchNotifyFn=function(r){r()}}var n=s.prototype;return n.batch=function(e){var t;this.transactions++;try{t=e()}finally{this.transactions--,this.transactions||this.flush()}return t},n.schedule=function(e){var t=this;this.transactions?this.queue.push(e):le(function(){t.notifyFn(e)})},n.batchCalls=function(e){var t=this;return function(){for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];t.schedule(function(){e.apply(void 0,a)})}},n.flush=function(){var e=this,t=this.queue;this.queue=[],t.length&&le(function(){e.batchNotifyFn(function(){t.forEach(function(i){e.notifyFn(i)})})})},n.setNotifyFunction=function(e){this.notifyFn=e},n.setBatchNotifyFunction=function(e){this.batchNotifyFn=e},s}(),m=new ht,Ce=console;function Oe(){return Ce}function dt(s){Ce=s}var vt=function(){function s(r){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=r.defaultOptions,this.setOptions(r.options),this.observers=[],this.cache=r.cache,this.queryKey=r.queryKey,this.queryHash=r.queryHash,this.initialState=r.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=r.meta,this.scheduleGc()}var n=s.prototype;return n.setOptions=function(e){var t;this.options=h({},this.defaultOptions,e),this.meta=e==null?void 0:e.meta,this.cacheTime=Math.max(this.cacheTime||0,(t=this.options.cacheTime)!=null?t:5*60*1e3)},n.setDefaultOptions=function(e){this.defaultOptions=e},n.scheduleGc=function(){var e=this;this.clearGcTimeout(),it(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){e.optionalRemove()},this.cacheTime))},n.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},n.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},n.setData=function(e,t){var i,a,u=this.state.data,o=rt(e,u);return(i=(a=this.options).isDataEqual)!=null&&i.call(a,u,o)?o=u:this.options.structuralSharing!==!1&&(o=ye(u,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt}),o},n.setState=function(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})},n.cancel=function(e){var t,i=this.promise;return(t=this.retryer)==null||t.cancel(e),i?i.then(C).catch(C):Promise.resolve()},n.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},n.reset=function(){this.destroy(),this.setState(this.initialState)},n.isActive=function(){return this.observers.some(function(e){return e.options.enabled!==!1})},n.isFetching=function(){return this.state.isFetching},n.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(e){return e.getCurrentResult().isStale})},n.isStaleByTime=function(e){return e===void 0&&(e=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!st(this.state.dataUpdatedAt,e)},n.onFocus=function(){var e,t=this.observers.find(function(i){return i.shouldFetchOnWindowFocus()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},n.onOnline=function(){var e,t=this.observers.find(function(i){return i.shouldFetchOnReconnect()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},n.addObserver=function(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))},n.removeObserver=function(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(function(t){return t!==e}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:e}))},n.getObserversCount=function(){return this.observers.length},n.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},n.fetch=function(e,t){var i=this,a,u,o;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var c;return(c=this.retryer)==null||c.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){var f=this.observers.find(function(b){return b.options.queryFn});f&&this.setOptions(f.options)}var d=N(this.queryKey),v=me(),l={queryKey:d,pageParam:void 0,meta:this.meta};Object.defineProperty(l,"signal",{enumerable:!0,get:function(){if(v)return i.abortSignalConsumed=!0,v.signal}});var y=function(){return i.options.queryFn?(i.abortSignalConsumed=!1,i.options.queryFn(l)):Promise.reject("Missing queryFn")},g={fetchOptions:t,options:this.options,queryKey:d,state:this.state,fetchFn:y,meta:this.meta};if((a=this.options.behavior)!=null&&a.onFetch){var x;(x=this.options.behavior)==null||x.onFetch(g)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=g.fetchOptions)==null?void 0:u.meta)){var O;this.dispatch({type:"fetch",meta:(O=g.fetchOptions)==null?void 0:O.meta})}return this.retryer=new be({fn:g.fetchFn,abort:v==null||(o=v.abort)==null?void 0:o.bind(v),onSuccess:function(F){i.setData(F),i.cache.config.onSuccess==null||i.cache.config.onSuccess(F,i),i.cacheTime===0&&i.optionalRemove()},onError:function(F){Y(F)&&F.silent||i.dispatch({type:"error",error:F}),Y(F)||(i.cache.config.onError==null||i.cache.config.onError(F,i),Oe().error(F)),i.cacheTime===0&&i.optionalRemove()},onFail:function(){i.dispatch({type:"failed"})},onPause:function(){i.dispatch({type:"pause"})},onContinue:function(){i.dispatch({type:"continue"})},retry:g.options.retry,retryDelay:g.options.retryDelay}),this.promise=this.retryer.promise,this.promise},n.dispatch=function(e){var t=this;this.state=this.reducer(this.state,e),m.batch(function(){t.observers.forEach(function(i){i.onQueryUpdate(e)}),t.cache.notify({query:t,type:"queryUpdated",action:e})})},n.getDefaultState=function(e){var t=typeof e.initialData=="function"?e.initialData():e.initialData,i=typeof e.initialData<"u",a=i?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0,u=typeof t<"u";return{data:t,dataUpdateCount:0,dataUpdatedAt:u?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},n.reducer=function(e,t){var i,a;switch(t.type){case"failed":return h({},e,{fetchFailureCount:e.fetchFailureCount+1});case"pause":return h({},e,{isPaused:!0});case"continue":return h({},e,{isPaused:!1});case"fetch":return h({},e,{fetchFailureCount:0,fetchMeta:(i=t.meta)!=null?i:null,isFetching:!0,isPaused:!1},!e.dataUpdatedAt&&{error:null,status:"loading"});case"success":return h({},e,{data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:(a=t.dataUpdatedAt)!=null?a:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=t.error;return Y(u)&&u.revert&&this.revertState?h({},this.revertState):h({},e,{error:u,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return h({},e,{isInvalidated:!0});case"setState":return h({},e,t.state);default:return e}},s}(),pt=function(s){G(n,s);function n(e){var t;return t=s.call(this)||this,t.config=e||{},t.queries=[],t.queriesMap={},t}var r=n.prototype;return r.build=function(t,i,a){var u,o=i.queryKey,c=(u=i.queryHash)!=null?u:te(o,i),f=this.get(c);return f||(f=new vt({cache:this,queryKey:o,queryHash:c,options:t.defaultQueryOptions(i),state:a,defaultOptions:t.getQueryDefaults(o),meta:i.meta}),this.add(f)),f},r.add=function(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"queryAdded",query:t}))},r.remove=function(t){var i=this.queriesMap[t.queryHash];i&&(t.destroy(),this.queries=this.queries.filter(function(a){return a!==t}),i===t&&delete this.queriesMap[t.queryHash],this.notify({type:"queryRemoved",query:t}))},r.clear=function(){var t=this;m.batch(function(){t.queries.forEach(function(i){t.remove(i)})})},r.get=function(t){return this.queriesMap[t]},r.getAll=function(){return this.queries},r.find=function(t,i){var a=S(t,i),u=a[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(o){return ue(u,o)})},r.findAll=function(t,i){var a=S(t,i),u=a[0];return Object.keys(u).length>0?this.queries.filter(function(o){return ue(u,o)}):this.queries},r.notify=function(t){var i=this;m.batch(function(){i.listeners.forEach(function(a){a(t)})})},r.onFocus=function(){var t=this;m.batch(function(){t.queries.forEach(function(i){i.onFocus()})})},r.onOnline=function(){var t=this;m.batch(function(){t.queries.forEach(function(i){i.onOnline()})})},n}(k),yt=function(){function s(r){this.options=h({},r.defaultOptions,r.options),this.mutationId=r.mutationId,this.mutationCache=r.mutationCache,this.observers=[],this.state=r.state||mt(),this.meta=r.meta}var n=s.prototype;return n.setState=function(e){this.dispatch({type:"setState",state:e})},n.addObserver=function(e){this.observers.indexOf(e)===-1&&this.observers.push(e)},n.removeObserver=function(e){this.observers=this.observers.filter(function(t){return t!==e})},n.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(C).catch(C)):Promise.resolve()},n.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},n.execute=function(){var e=this,t,i=this.state.status==="loading",a=Promise.resolve();return i||(this.dispatch({type:"loading",variables:this.options.variables}),a=a.then(function(){e.mutationCache.config.onMutate==null||e.mutationCache.config.onMutate(e.state.variables,e)}).then(function(){return e.options.onMutate==null?void 0:e.options.onMutate(e.state.variables)}).then(function(u){u!==e.state.context&&e.dispatch({type:"loading",context:u,variables:e.state.variables})})),a.then(function(){return e.executeMutation()}).then(function(u){t=u,e.mutationCache.config.onSuccess==null||e.mutationCache.config.onSuccess(t,e.state.variables,e.state.context,e)}).then(function(){return e.options.onSuccess==null?void 0:e.options.onSuccess(t,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(t,null,e.state.variables,e.state.context)}).then(function(){return e.dispatch({type:"success",data:t}),t}).catch(function(u){return e.mutationCache.config.onError==null||e.mutationCache.config.onError(u,e.state.variables,e.state.context,e),Oe().error(u),Promise.resolve().then(function(){return e.options.onError==null?void 0:e.options.onError(u,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(void 0,u,e.state.variables,e.state.context)}).then(function(){throw e.dispatch({type:"error",error:u}),u})})},n.executeMutation=function(){var e=this,t;return this.retryer=new be({fn:function(){return e.options.mutationFn?e.options.mutationFn(e.state.variables):Promise.reject("No mutationFn found")},onFail:function(){e.dispatch({type:"failed"})},onPause:function(){e.dispatch({type:"pause"})},onContinue:function(){e.dispatch({type:"continue"})},retry:(t=this.options.retry)!=null?t:0,retryDelay:this.options.retryDelay}),this.retryer.promise},n.dispatch=function(e){var t=this;this.state=gt(this.state,e),m.batch(function(){t.observers.forEach(function(i){i.onMutationUpdate(e)}),t.mutationCache.notify(t)})},s}();function mt(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function gt(s,n){switch(n.type){case"failed":return h({},s,{failureCount:s.failureCount+1});case"pause":return h({},s,{isPaused:!0});case"continue":return h({},s,{isPaused:!1});case"loading":return h({},s,{context:n.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:n.variables});case"success":return h({},s,{data:n.data,error:null,status:"success",isPaused:!1});case"error":return h({},s,{data:void 0,error:n.error,failureCount:s.failureCount+1,isPaused:!1,status:"error"});case"setState":return h({},s,n.state);default:return s}}var bt=function(s){G(n,s);function n(e){var t;return t=s.call(this)||this,t.config=e||{},t.mutations=[],t.mutationId=0,t}var r=n.prototype;return r.build=function(t,i,a){var u=new yt({mutationCache:this,mutationId:++this.mutationId,options:t.defaultMutationOptions(i),state:a,defaultOptions:i.mutationKey?t.getMutationDefaults(i.mutationKey):void 0,meta:i.meta});return this.add(u),u},r.add=function(t){this.mutations.push(t),this.notify(t)},r.remove=function(t){this.mutations=this.mutations.filter(function(i){return i!==t}),t.cancel(),this.notify(t)},r.clear=function(){var t=this;m.batch(function(){t.mutations.forEach(function(i){t.remove(i)})})},r.getAll=function(){return this.mutations},r.find=function(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(function(i){return oe(t,i)})},r.findAll=function(t){return this.mutations.filter(function(i){return oe(t,i)})},r.notify=function(t){var i=this;m.batch(function(){i.listeners.forEach(function(a){a(t)})})},r.onFocus=function(){this.resumePausedMutations()},r.onOnline=function(){this.resumePausedMutations()},r.resumePausedMutations=function(){var t=this.mutations.filter(function(i){return i.state.isPaused});return m.batch(function(){return t.reduce(function(i,a){return i.then(function(){return a.continue().catch(C)})},Promise.resolve())})},n}(k);function Ct(){return{onFetch:function(n){n.fetchFn=function(){var r,e,t,i,a,u,o=(r=n.fetchOptions)==null||(e=r.meta)==null?void 0:e.refetchPage,c=(t=n.fetchOptions)==null||(i=t.meta)==null?void 0:i.fetchMore,f=c==null?void 0:c.pageParam,d=(c==null?void 0:c.direction)==="forward",v=(c==null?void 0:c.direction)==="backward",l=((a=n.state.data)==null?void 0:a.pages)||[],y=((u=n.state.data)==null?void 0:u.pageParams)||[],g=me(),x=g==null?void 0:g.signal,O=y,b=!1,F=n.options.queryFn||function(){return Promise.reject("Missing queryFn")},L=function(A,R,_,$){return O=$?[R].concat(O):[].concat(O,[R]),$?[_].concat(A):[].concat(A,[_])},T=function(A,R,_,$){if(b)return Promise.reject("Cancelled");if(typeof _>"u"&&!R&&A.length)return Promise.resolve(A);var M={queryKey:n.queryKey,signal:x,pageParam:_,meta:n.meta},w=F(M),j=Promise.resolve(w).then(function(Ae){return L(A,_,Ae,$)});if(B(w)){var J=j;J.cancel=w.cancel}return j},q;if(!l.length)q=T([]);else if(d){var ne=typeof f<"u",_e=ne?f:fe(n.options,l);q=T(l,ne,_e)}else if(v){var re=typeof f<"u",qe=re?f:Ot(n.options,l);q=T(l,re,qe,!0)}else(function(){O=[];var D=typeof n.options.getNextPageParam>"u",A=o&&l[0]?o(l[0],0,l):!0;q=A?T([],D,y[0]):Promise.resolve(L([],y[0],l[0]));for(var R=function(M){q=q.then(function(w){var j=o&&l[M]?o(l[M],M,l):!0;if(j){var J=D?y[M]:fe(n.options,w);return T(w,D,J)}return Promise.resolve(L(w,y[M],l[M]))})},_=1;_<l.length;_++)R(_)})();var ie=q.then(function(D){return{pages:D,pageParams:O}}),xe=ie;return xe.cancel=function(){b=!0,g==null||g.abort(),B(q)&&q.cancel()},ie}}}}function fe(s,n){return s.getNextPageParam==null?void 0:s.getNextPageParam(n[n.length-1],n)}function Ot(s,n){return s.getPreviousPageParam==null?void 0:s.getPreviousPageParam(n[0],n)}var Pt=function(){function s(r){r===void 0&&(r={}),this.queryCache=r.queryCache||new pt,this.mutationCache=r.mutationCache||new bt,this.defaultOptions=r.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var n=s.prototype;return n.mount=function(){var e=this;this.unsubscribeFocus=K.subscribe(function(){K.isFocused()&&U.isOnline()&&(e.mutationCache.onFocus(),e.queryCache.onFocus())}),this.unsubscribeOnline=U.subscribe(function(){K.isFocused()&&U.isOnline()&&(e.mutationCache.onOnline(),e.queryCache.onOnline())})},n.unmount=function(){var e,t;(e=this.unsubscribeFocus)==null||e.call(this),(t=this.unsubscribeOnline)==null||t.call(this)},n.isFetching=function(e,t){var i=S(e,t),a=i[0];return a.fetching=!0,this.queryCache.findAll(a).length},n.isMutating=function(e){return this.mutationCache.findAll(h({},e,{fetching:!0})).length},n.getQueryData=function(e,t){var i;return(i=this.queryCache.find(e,t))==null?void 0:i.state.data},n.getQueriesData=function(e){return this.getQueryCache().findAll(e).map(function(t){var i=t.queryKey,a=t.state,u=a.data;return[i,u]})},n.setQueryData=function(e,t,i){var a=W(e),u=this.defaultQueryOptions(a);return this.queryCache.build(this,u).setData(t,i)},n.setQueriesData=function(e,t,i){var a=this;return m.batch(function(){return a.getQueryCache().findAll(e).map(function(u){var o=u.queryKey;return[o,a.setQueryData(o,t,i)]})})},n.getQueryState=function(e,t){var i;return(i=this.queryCache.find(e,t))==null?void 0:i.state},n.removeQueries=function(e,t){var i=S(e,t),a=i[0],u=this.queryCache;m.batch(function(){u.findAll(a).forEach(function(o){u.remove(o)})})},n.resetQueries=function(e,t,i){var a=this,u=S(e,t,i),o=u[0],c=u[1],f=this.queryCache,d=h({},o,{active:!0});return m.batch(function(){return f.findAll(o).forEach(function(v){v.reset()}),a.refetchQueries(d,c)})},n.cancelQueries=function(e,t,i){var a=this,u=S(e,t,i),o=u[0],c=u[1],f=c===void 0?{}:c;typeof f.revert>"u"&&(f.revert=!0);var d=m.batch(function(){return a.queryCache.findAll(o).map(function(v){return v.cancel(f)})});return Promise.all(d).then(C).catch(C)},n.invalidateQueries=function(e,t,i){var a,u,o,c=this,f=S(e,t,i),d=f[0],v=f[1],l=h({},d,{active:(a=(u=d.refetchActive)!=null?u:d.active)!=null?a:!0,inactive:(o=d.refetchInactive)!=null?o:!1});return m.batch(function(){return c.queryCache.findAll(d).forEach(function(y){y.invalidate()}),c.refetchQueries(l,v)})},n.refetchQueries=function(e,t,i){var a=this,u=S(e,t,i),o=u[0],c=u[1],f=m.batch(function(){return a.queryCache.findAll(o).map(function(v){return v.fetch(void 0,h({},c,{meta:{refetchPage:o==null?void 0:o.refetchPage}}))})}),d=Promise.all(f).then(C);return c!=null&&c.throwOnError||(d=d.catch(C)),d},n.fetchQuery=function(e,t,i){var a=W(e,t,i),u=this.defaultQueryOptions(a);typeof u.retry>"u"&&(u.retry=!1);var o=this.queryCache.build(this,u);return o.isStaleByTime(u.staleTime)?o.fetch(u):Promise.resolve(o.state.data)},n.prefetchQuery=function(e,t,i){return this.fetchQuery(e,t,i).then(C).catch(C)},n.fetchInfiniteQuery=function(e,t,i){var a=W(e,t,i);return a.behavior=Ct(),this.fetchQuery(a)},n.prefetchInfiniteQuery=function(e,t,i){return this.fetchInfiniteQuery(e,t,i).then(C).catch(C)},n.cancelMutations=function(){var e=this,t=m.batch(function(){return e.mutationCache.getAll().map(function(i){return i.cancel()})});return Promise.all(t).then(C).catch(C)},n.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},n.executeMutation=function(e){return this.mutationCache.build(this,e).execute()},n.getQueryCache=function(){return this.queryCache},n.getMutationCache=function(){return this.mutationCache},n.getDefaultOptions=function(){return this.defaultOptions},n.setDefaultOptions=function(e){this.defaultOptions=e},n.setQueryDefaults=function(e,t){var i=this.queryDefaults.find(function(a){return Q(e)===Q(a.queryKey)});i?i.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})},n.getQueryDefaults=function(e){var t;return e?(t=this.queryDefaults.find(function(i){return H(e,i.queryKey)}))==null?void 0:t.defaultOptions:void 0},n.setMutationDefaults=function(e,t){var i=this.mutationDefaults.find(function(a){return Q(e)===Q(a.mutationKey)});i?i.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})},n.getMutationDefaults=function(e){var t;return e?(t=this.mutationDefaults.find(function(i){return H(e,i.mutationKey)}))==null?void 0:t.defaultOptions:void 0},n.defaultQueryOptions=function(e){if(e!=null&&e._defaulted)return e;var t=h({},this.defaultOptions.queries,this.getQueryDefaults(e==null?void 0:e.queryKey),e,{_defaulted:!0});return!t.queryHash&&t.queryKey&&(t.queryHash=te(t.queryKey,t)),t},n.defaultQueryObserverOptions=function(e){return this.defaultQueryOptions(e)},n.defaultMutationOptions=function(e){return e!=null&&e._defaulted?e:h({},this.defaultOptions.mutations,this.getMutationDefaults(e==null?void 0:e.mutationKey),e,{_defaulted:!0})},n.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},s}(),Ft=we.unstable_batchedUpdates;m.setBatchNotifyFunction(Ft);var _t=console;dt(_t);var he=E.createContext(void 0),Pe=E.createContext(!1);function Fe(s){return s&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=he),window.ReactQueryClientContext):he}var Dt=function(){var n=E.useContext(Fe(E.useContext(Pe)));if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},qt=function(n){var r=n.client,e=n.contextSharing,t=e===void 0?!1:e,i=n.children;E.useEffect(function(){return r.mount(),function(){r.unmount()}},[r]);var a=Fe(t);return E.createElement(Pe.Provider,{value:t},E.createElement(a.Provider,{value:r},i))};const xt=new Pt;X.createRoot(document.getElementById("root")).render(p.jsx(E.StrictMode,{children:p.jsx(qt,{client:xt,children:p.jsx(Be,{children:p.jsx(P.Suspense,{fallback:p.jsx(de,{}),children:p.jsx(nt,{children:p.jsx(et,{})})})})})}));export{tt as A,He as C,k as S,V as _,it as a,Y as b,m as c,K as f,Oe as g,ve as i,C as n,W as p,ye as r,Et as s,st as t,Dt as u};