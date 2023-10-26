import{J as E,K as G,M as X,_ as u,h as C,e as v,N as z,O as I,P as W,r as m,c as M,j as g,d as P,Q as x,f as _,g as A,s as U,u as T,a as J,k as V,S as Q,U as q,F as H,m as S}from"./index-567cb7ad.js";import{e as Y}from"./Box-53665f65.js";import{c as F}from"./createSvgIcon-4cf07dc4.js";const Z=E(),ee=Z,te=["component","direction","spacing","divider","children","className","useFlexGap"],se=G(),oe=ee("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function ae(e){return X({props:e,name:"MuiStack",defaultTheme:se})}function re(e,t){const s=m.Children.toArray(e).filter(Boolean);return s.reduce((o,i,a)=>(o.push(i),a<s.length-1&&o.push(m.cloneElement(t,{key:`separator-${a}`})),o),[])}const ne=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ie=({ownerState:e,theme:t})=>{let s=u({display:"flex",flexDirection:"column"},C({theme:t},v({values:e.direction,breakpoints:t.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=z(t),i=Object.keys(t.breakpoints.values).reduce((r,n)=>((typeof e.spacing=="object"&&e.spacing[n]!=null||typeof e.direction=="object"&&e.direction[n]!=null)&&(r[n]=!0),r),{}),a=v({values:e.direction,base:i}),l=v({values:e.spacing,base:i});typeof a=="object"&&Object.keys(a).forEach((r,n,h)=>{if(!a[r]){const d=n>0?a[h[n-1]]:"column";a[r]=d}}),s=I(s,C({theme:t},l,(r,n)=>e.useFlexGap?{gap:x(o,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ne(n?a[n]:e.direction)}`]:x(o,r)}}))}return s=W(t.breakpoints,s),s};function le(e={}){const{createStyledComponent:t=oe,useThemeProps:s=ae,componentName:o="MuiStack"}=e,i=()=>_({root:["root"]},r=>A(o,r),{}),a=t(ie);return m.forwardRef(function(r,n){const h=s(r),c=Y(h),{component:d="div",direction:y="column",spacing:K=0,divider:k,children:b,className:N,useFlexGap:B=!1}=c,L=M(c,te),D={direction:y,spacing:K,useFlexGap:B},O=i();return g.jsx(a,u({as:d,ownerState:D,ref:n,className:P(O.root,N)},L,{children:k?re(b,k):b}))})}const ce=le({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>T({props:e,name:"MuiStack"})}),be=ce;function de(e){return A("MuiSkeleton",e)}J("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ue=["animation","className","component","height","style","variant","width"];let f=e=>e,R,w,$,j;const pe=e=>{const{classes:t,variant:s,animation:o,hasChildren:i,width:a,height:l}=e;return _({root:["root",s,o,i&&"withChildren",i&&!a&&"fitContent",i&&!l&&"heightAuto"]},de,t)},he=V(R||(R=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),me=V(w||(w=f`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),fe=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.animation!==!1&&t[s.animation],s.hasChildren&&t.withChildren,s.hasChildren&&!s.width&&t.fitContent,s.hasChildren&&!s.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const s=Q(e.shape.borderRadius)||"px",o=q(e.shape.borderRadius);return u({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:H(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${s}/${Math.round(o/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&S($||($=f`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),he),({ownerState:e,theme:t})=>e.animation==="wave"&&S(j||(j=f`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),me,(t.vars||t).palette.action.hover)),ge=m.forwardRef(function(t,s){const o=T({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:a,component:l="span",height:p,style:r,variant:n="text",width:h}=o,c=M(o,ue),d=u({},o,{animation:i,component:l,variant:n,hasChildren:!!c.children}),y=pe(d);return g.jsx(fe,u({as:l,ref:s,className:P(y.root,a),ownerState:d},c,{style:u({width:h,height:p},r)}))}),Ce=ge,xe=F(g.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Se=F(g.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");export{Se as K,Ce as S,xe as a,be as b};
