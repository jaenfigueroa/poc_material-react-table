import{r as a,V as Ie,_ as K,c as ee,X as W,d as C,j as F,a as me,k as te,s as ne,u as be,g as Ue,f as _e}from"./index-567cb7ad.js";import{T as ue}from"./TransitionGroupContext-cffd3c76.js";import{u as ce,b as H}from"./useForkRef-4d8a3207.js";import{u as ze}from"./useIsFocusVisible-f44df7a0.js";function Oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Xe(e,r){e=e||{},r=r||{};function s(f){return f in r?r[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function $(e,r,s){return s[r]!=null?s[r]:e.props[r]}function Ke(e,r){return oe(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:$(s,"appear",e),enter:$(s,"enter",e),exit:$(s,"exit",e)})})}function Ye(e,r,s){var l=oe(e.children),n=Xe(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:$(o,"exit",e),enter:$(o,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:$(o,"exit",e),enter:$(o,"enter",e)}))}}),n}var Ae=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},We={component:"div",childFactory:function(r){return r}},ie=function(e){Ie(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ke(n,c):Ye(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=K({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=Ae(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},r}(W.Component);ie.propTypes={};ie.defaultProps=We;const He=ie;function Ge(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=C(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),E={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=C(s.child,f&&s.childLeaving,l&&s.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),F.jsx("span",{className:b,style:E,children:F.jsx("span",{className:h})})}const qe=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=qe,Je=["center","classes","className"];let G=e=>e,pe,de,fe,he;const Z=550,Qe=80,Ze=te(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),et=te(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),tt=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),nt=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ot=ne(Ge,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,tt,({theme:e})=>e.transitions.easing.easeInOut),it=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Je),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{E.current&&clearTimeout(E.current)},[]);const U=a.useCallback(d=>{const{pulsate:M,rippleX:T,rippleY:D,rippleSize:I,cb:z}=d;p(x=>[...x,F.jsx(ot,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:T,rippleY:D,rippleSize:I},f.current)]),f.current+=1,g.current=z},[t]),N=a.useCallback((d={},M={},T=()=>{})=>{const{pulsate:D=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const x=z?null:R.current,P=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,S,w;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)V=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:k,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;V=Math.round(k-P.left),S=Math.round(v-P.top)}if(I)w=Math.sqrt((2*P.width**2+P.height**2)/3),w%2===0&&(w+=1);else{const k=Math.max(Math.abs((x?x.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((x?x.clientHeight:0)-S),S)*2+2;w=Math.sqrt(k**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:D,rippleX:V,rippleY:S,rippleSize:w,cb:T})},E.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Qe)):U({pulsate:D,rippleX:V,rippleY:S,rippleSize:w,cb:T})},[n,U]),_=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((d,M)=>{if(clearTimeout(E.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,E.current=setTimeout(()=>{j(d,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:_,start:N,stop:j}),[_,N,j]),F.jsx(nt,K({className:C(m.root,t.root,o),ref:R},c,{children:F.jsx(He,{component:null,exit:!0,children:u})}))}),rt=it;function st(e){return Ue("MuiButtonBase",e)}const at=me("MuiButtonBase",["root","disabled","focusVisible"]),lt=at,ut=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ct=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=_e({root:["root",r&&"disabled",s&&"focusVisible"]},st,n);return s&&l&&(o.root+=` ${l}`),o},pt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${lt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:_,onFocusVisible:j,onKeyDown:d,onKeyUp:M,onMouseDown:T,onMouseLeave:D,onMouseUp:I,onTouchEnd:z,onTouchMove:x,onTouchStart:P,tabIndex:V=0,TouchRippleProps:S,touchRippleRef:w,type:k}=l,v=ee(l,ut),O=a.useRef(null),y=a.useRef(null),ge=ce(y,w),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:Te}=ze(),[L,Y]=a.useState(!1);p&&L&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,xe]=a.useState(!1);a.useEffect(()=>{xe(!0)},[]);const ye=q&&!f&&!p;a.useEffect(()=>{L&&b&&!f&&q&&y.current.pulsate()},[f,b,L,q]);function B(i,ae,je=g){return H(le=>(ae&&ae(le),!je&&y.current&&y.current[i](le),!0))}const Ce=B("start",T),Ee=B("stop",U),Ve=B("stop",N),ve=B("stop",I),Be=B("stop",i=>{L&&i.preventDefault(),D&&D(i)}),Pe=B("start",P),Se=B("stop",z),we=B("stop",x),De=B("stop",i=>{Me(i),re.current===!1&&Y(!1),h&&h(i)},!1),ke=H(i=>{O.current||(O.current=i.currentTarget),Re(i),re.current===!0&&(Y(!0),j&&j(i)),_&&_(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),Le=H(i=>{b&&!Q.current&&L&&y.current&&i.key===" "&&(Q.current=!0,y.current.stop(i,()=>{y.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),$e=H(i=>{b&&i.key===" "&&y.current&&L&&!i.defaultPrevented&&(Q.current=!1,y.current.stop(i,()=>{y.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let A=u;A==="button"&&(v.href||v.to)&&(A=E);const X={};A==="button"?(X.type=k===void 0?"button":k,X.disabled=p):(!v.href&&!v.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Fe=ce(s,Te,O),se=K({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:L}),Ne=ct(se);return F.jsxs(pt,K({as:A,className:C(Ne.root,c),ownerState:se,onBlur:De,onClick:R,onContextMenu:Ee,onFocus:ke,onKeyDown:Le,onKeyUp:$e,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:we,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:V,type:k},X,v,{children:[o,ye?F.jsx(rt,K({ref:ge,center:t},S)):null]}))}),Rt=dt;export{Rt as B};
