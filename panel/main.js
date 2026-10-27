(()=>{var T="openchamber.sdk",x=1;var ft=`
:root {
  /* Quiet at rest like the app's own thumbs; hover gives a clear grab target. */
  --oc-scrollbar-thumb: color-mix(in srgb, var(--oc-muted, currentColor) 18%, transparent);
  --oc-scrollbar-thumb-hover: color-mix(in srgb, var(--oc-muted, currentColor) 36%, transparent);
  scrollbar-gutter: stable;
}
* {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
:hover, [data-oc-scrolling] {
  scrollbar-color: var(--oc-scrollbar-thumb) transparent;
}
/* Chromium's standard scrollbar properties otherwise override its pseudo-elements. */
@supports selector(::-webkit-scrollbar) {
  *, :hover, [data-oc-scrolling] { scrollbar-width: auto; scrollbar-color: auto; }
  ::-webkit-scrollbar { width: 6px; height: 6px; background: transparent; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 999px;
    min-width: 24px;
    min-height: 24px;
  }
  :hover::-webkit-scrollbar-thumb, [data-oc-scrolling]::-webkit-scrollbar-thumb { background: var(--oc-scrollbar-thumb); }
  ::-webkit-scrollbar-thumb:hover { background: var(--oc-scrollbar-thumb-hover); }
  ::-webkit-scrollbar-corner { background: transparent; }
  ::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
}
@media (forced-colors: active) {
  *, :hover, [data-oc-scrolling] { scrollbar-color: auto; }
  ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover { background: CanvasText; }
}
`;function ko(e){let o=e.documentElement;if(o.hasAttribute("data-oc-scrollbar-activity"))return;o.setAttribute("data-oc-scrollbar-activity","");let n=new WeakMap;e.addEventListener("scroll",(s)=>{let i=s.target===e?o:s.target;if(!(i instanceof Element))return;if(!i.hasAttribute("data-oc-scrolling"))i.setAttribute("data-oc-scrolling","");let a=n.get(i);if(a!==void 0)clearTimeout(a);n.set(i,setTimeout(()=>{n.delete(i),i.removeAttribute("data-oc-scrolling")},1000))},{capture:!0,passive:!0})}var zr=`(${ko.toString()})(document);`;var Et=128,ht=65536;var Me=128;var Pe=65536;var Io=/^[a-z][a-z0-9-]{0,39}$/;var wo=(e)=>Object(e)===e&&!Array.isArray(e),_t=(e,o)=>Object.keys(e).every((n)=>o.includes(n)),Oo=(e)=>String(e)===e&&e.length>=1&&e.length<=60,Ro=(e)=>String(e)===e&&e.length>=1&&e.length<=80,Lo=(e)=>{if(!Array.isArray(e)||e.length>4)return!1;let o=new Set;for(let n of e){if(!wo(n)||!Io.test(n.id)||!Oo(n.label))return!1;if(n.disabled!==void 0&&n.disabled!==!0&&n.disabled!==!1)return!1;if(o.has(n.id))return!1;if(o.add(n.id),n.kind==="button"){if(!_t(n,["kind","id","label","disabled"]))return!1;continue}if(n.kind!=="select"||!_t(n,["kind","id","label","value","options","disabled"]))return!1;if(!Ro(n.value)||!Array.isArray(n.options)||n.options.length<1||n.options.length>16)return!1;let s=new Set;for(let i of n.options){if(!wo(i)||!_t(i,["value","label"])||!Ro(i.value)||!Oo(i.label)||s.has(i.value))return!1;s.add(i.value)}if(!s.has(n.value))return!1}return!0};var Ge=20000000,Ne=256;var St=(e)=>("bytes"in e)?e.bytes.byteLength:e.content.length,Uo=(e,o)=>{if(e.path!==o.path||e.readOnly!==o.readOnly)return!1;if(e.encoding==="text"||o.encoding==="text")return e.encoding==="text"&&o.encoding==="text"&&e.content===o.content;if(e.bytes.byteLength!==o.bytes.byteLength)return!1;for(let n=0;n<e.bytes.byteLength;n+=1)if(e.bytes[n]!==o.bytes[n])return!1;return!0};var Co=/^[A-Za-z0-9_-]{1,80}$/;var Mo=["left","right","top","bottom"];var Po=(e,o=0,n={remaining:16000})=>{if(--n.remaining<0||o>=32)return!1;if(e===null)return!0;let s=Array.isArray(e)?e:Object(e)===e?Object.values(e):[];for(let i of s)if(!Po(i,o+1,n))return!1;return!0},gt=(e)=>{if(e===null||e===!0||e===!1)return!0;if(Array.isArray(e))return Object.keys(e).every((o)=>/^(0|[1-9]\d*)$/.test(o)&&Number(o)<e.length)&&e.every(gt);if(Object(e)===e){let o=Object.getPrototypeOf(e);return(o===null||o===Object.prototype)&&Object.values(e).every(gt)}return String(e)===e||Number.isFinite(e)},Tt=(e)=>{try{if(String(e.id)!==e.id||!Co.test(e.id)||!Number.isFinite(e.anchor.x)||Math.abs(e.anchor.x)>1e5||!Number.isFinite(e.anchor.y)||Math.abs(e.anchor.y)>1e5||!Number.isFinite(e.anchor.width)||!Number.isFinite(e.anchor.height)||e.anchor.width<=0||e.anchor.height<=0||e.anchor.width>1e5||e.anchor.height>1e5||!Number.isInteger(e.width)||e.width<160||e.width>640||!Number.isInteger(e.height)||e.height<48||e.height>480||e.side!==void 0&&!Mo.includes(e.side)||e.focus!==void 0&&e.focus!==!0&&e.focus!==!1||!Po(e.data)||!gt(e.data))return!1;return JSON.stringify(e.data).length<=16000}catch{return!1}};var No=["file","directory","other","missing"],bt=(e)=>Boolean(e&&"sessionId"in e),yt=(e)=>Boolean(e&&"sent"in e&&!("sessionId"in e));var Do=/^[0-9a-f]{7,64}$/i,vt=(e)=>Do.test(e),De=500,$e=32000,$o=16000,Ho=128,Fo=200,Xo=2000,Bo=16000,Vo=80,jo=200,zo=16000;var Ko=2000;var At=20000,He=1024,Fe=2000000;var Xe=64000,Be=8000,kt=4000;var wt=90000;var Wo=999,Jo=1e4,xe=500,Yo=["HOST_UNAVAILABLE","HOST_TIMEOUT","HOST_REJECTED","DISCONNECTED","DISABLED","BAD_PATH","NO_INTEGRATION","NO_SERVICE","SERVICE_FAILED","REQUEST_FAILED","RESPONSE_TOO_LARGE","NO_SESSION","SESSION_BUSY","NOT_GRANTED","NO_DIRECTORY","NOT_FOUND","FILE_TOO_LARGE","DENIED","NO_MODEL","MODEL_FAILED","UNSUPPORTED"],Qo=["stopped","starting","ready","failed"],Kr=new Set(Yo),Zo=(e)=>Kr.has(e),qo=(e)=>e&&Zo(e)?e:"HOST_REJECTED",me=(e)=>{if(e===void 0)return!1;if(e===null||e===!0||e===!1)return!0;if(String(e)===e)return!0;if(Number(e)===e)return Number.isFinite(e);if(Array.isArray(e))return e.every(me);if(Object(e)===e)return Object.values(e).every(me);return!1},er=(e)=>me(e)&&JSON.stringify(e).length<=zo,Go=(e)=>e?.trim().slice(0,jo)??"",fe=(e)=>{let o=e.id.trim().slice(0,Ho),n=e.title.trim().slice(0,Fo),s=e.url.trim().slice(0,Xo),i=e.text?.trim().slice(0,Bo),a=e.author?.trim().slice(0,Vo),d=e.kind==="pull"?"pull":"issue",h={providerId:e.providerId.trim(),id:o,title:n||o,url:s,kind:d};if(i)h.text=i;if(a)h.author=a;if(d==="pull"){let E=Go(e.branches?.head),g=Go(e.branches?.base);if(E&&g)h.branches={head:E,base:g}}if(er(e.data))h.data=e.data;return h},Ot=(e)=>{let o=fe(e);if(e.projectId)o.projectId=e.projectId;if(e.navigation)o.navigation=e.navigation;if(e.worktree)o.worktree=e.worktree;return o},Rt=(e)=>{let o={text:e.text.trim().slice(0,$o)};if(e.send)o.send=!0;return o},It=(e)=>{if(e===null||!Number.isFinite(e))return null;return Math.min(Wo,Math.max(0,Math.round(e)))},Lt=(e)=>{if(!Number.isFinite(e))return 0;return Math.min(Jo,Math.max(0,Math.ceil(e)))};var Ee=(e)=>e.length>0&&e.length<=He&&!e.includes("\x00")&&!e.includes("\\");var Ve=(e)=>{if(!e.startsWith("/")||e.includes("\x00")||e.includes("\\")||e.includes("://"))return!1;if(e.length>Ko)return!1;return!e.split("/").some((n)=>n==="."||n==="..")},Wr=new Set(Qo),Ut=(e)=>Boolean(e&&"status"in e&&Wr.has(String(e.status))&&!("body"in e)),je=(e)=>Boolean(e&&"status"in e&&"body"in e&&Number.isInteger(e.status)),Ct=(e)=>Boolean(e&&"content"in e&&String(e.content)===e.content),Mt=(e)=>Boolean(e&&"written"in e&&e.written===!0),Pt=(e)=>Boolean(e&&"entries"in e&&Array.isArray(e.entries)),Jr=new Set(No),Gt=(e)=>Boolean(e&&"kind"in e&&"size"in e&&Jr.has(String(e.kind))&&Number.isFinite(e.size)),Nt=(e)=>Boolean(e&&"text"in e&&String(e.text)===e.text&&!("status"in e)),Yr=new Set(["workspace","shells","ready","directory","session","connection","settings","session-lifecycle","item","resolve","action","status-control-event","popover-closed","file-open","file-snapshot","file-saved"]),Qr=(e)=>Object(e)===e?e:null,xt=(e)=>String(e)===e&&e.length>0,Zr=(e)=>{if(!xt(e.id))return null;if(e.ok===!0){let o={channel:T,v:x,type:"result",id:e.id,ok:!0};if(Object(e.payload)===e.payload)o.payload=e.payload;return o}if(e.ok===!1&&xt(e.error))return{channel:T,v:x,type:"result",id:e.id,ok:!1,error:e.error,code:qo(xt(e.code)?e.code:void 0)};return null},Dt=(e)=>{let o=Qr(e);if(!o||o.channel!==T||o.v!==x)return null;if(o.type==="result")return Zr(o);if(!Yr.has(String(o.type))||Object(o.payload)!==o.payload)return null;return o};var tr=(e)=>("key"in e)&&("metaKey"in e)&&("ctrlKey"in e),qr=(e)=>(e.metaKey||e.ctrlKey)&&!e.altKey&&!e.shiftKey&&e.key.toLowerCase()==="s";class f extends Error{code;constructor(e,o){super(o);this.name="HostRequestError",this.code=e}}var or=()=>Promise.reject(new f("BAD_PATH",'Request path must start with "/" and stay on the declared origin.')),ze=()=>Promise.reject(new f("BAD_PATH",`File path must be 1 to ${He} characters without NUL or backslash.`)),Ke=(e)=>{if(e===void 0)return;if(Object(e)!==e||Array.isArray(e)||e.scope!==void 0&&e.scope!=="instance"&&e.scope!=="device")throw new f("HOST_REJECTED",'Storage scope must be "instance" or "device".');return e.scope==="device"?"device":void 0},_=(e)=>(e.value+=1,`oc-${e.value}`),$t=(e={})=>{let o=e.target??("window"in globalThis?window:null);if(!o)throw new f("HOST_UNAVAILABLE","No window. connectHost runs in a browser frame.");let n=e.acceptSource??((t)=>t===o.parent),s=e.requestTimeoutMs??At,i=new Set,a=new Set,d=new Set,h=new Set,E=new Set,g=new Set,b=new Set,O=new Set,N=new Set,S=null,R=null,D=new Set,Q=new Set,W=null,oe=null,ue=!1,Z=new Map,ae=new Map,L=new Map,k=!1,l={value:0},u=null,H=null,Y=!1,ce=!1,Ie=null,ho=(t)=>{if(!t)return null;return{sessionId:t.id,phase:t.busy?"started":"completed"}},z=(t)=>{o.parent.postMessage(t,"*")},P=(t,r)=>{for(let p of t)try{p(r)}catch(m){console.error(m)}},_o=(t)=>{if(!(t instanceof MessageEvent))return;if(!n(t.source))return;let r=Dt(t.data);if(!r)return;if(r.type==="workspace"){let m=ae.get(r.payload.subscriptionId);if(m)P([m],r.payload.snapshot);return}if(r.type==="shells"){let m=L.get(r.payload.subscriptionId);if(m)P([m],r.payload.snapshot);return}if(r.type==="ready"){if(u=r.payload,H=ho(r.payload.session),P(i,r.payload),P(a,r.payload.directory),P(d,r.payload.session),H)P(h,H);P(E,r.payload.connection),P(g,r.payload.settings),P(b,r.payload.item);return}if(r.type==="directory"){if(u)u={...u,directory:r.payload.directory};P(a,r.payload.directory);return}if(r.type==="session"){if(u)u={...u,session:r.payload.session};if(!r.payload.session)H=null;else if(H?.sessionId!==r.payload.session.id)H=ho(r.payload.session);P(d,r.payload.session);return}if(r.type==="session-lifecycle"){H=r.payload,P(h,r.payload);return}if(r.type==="connection"){if(u)u={...u,connection:r.payload.connection};P(E,r.payload.connection);return}if(r.type==="settings"){if(u)u={...u,settings:r.payload.settings};P(g,r.payload.settings);return}if(r.type==="item"){if(u)u={...u,item:r.payload.item};P(b,r.payload.item);return}if(r.type==="status-control-event"){P(O,r.payload);return}if(r.type==="popover-closed"){P(N,r.payload);return}if(r.type==="action"){let m=(y)=>{if(!k)z({channel:T,v:x,type:"action-result",id:r.id,payload:y})},v=R;if(!v){m({ok:!1,error:"This extension does not handle background actions."});return}Promise.resolve().then(()=>v(r.payload)).then(()=>m({ok:!0}),(y)=>{let M=(y instanceof Error?y.message:String(y)).trim();m({ok:!1,error:(M||"Action failed.").slice(0,xe)})});return}if(r.type==="file-open"){let m=r.payload;if(oe&&Uo(oe,m))return;oe=m,P(D,r.payload);return}if(r.type==="file-saved"){P(Q,r.payload.version);return}if(r.type==="file-snapshot"){let m=(M)=>{if(!k)z({channel:T,v:x,type:"file-snapshot-result",id:r.id,payload:M})},v=(M)=>m({error:(M.trim()||"Could not read the edited file.").slice(0,xe)}),y=W;if(!y){v("This extension does not edit files.");return}Promise.resolve().then(()=>y(r.payload.purpose)).then((M)=>{if(St(M)>Ge){v(`The file is over ${Ge} ${"bytes"in M?"bytes":"characters"}.`);return}if(M.version.length>Ne){v(`The snapshot version is over ${Ne} characters.`);return}m({snapshot:"bytes"in M?{bytes:M.bytes,version:M.version}:{content:M.content,version:M.version}})},(M)=>v(M instanceof Error?M.message:String(M)));return}if(r.type==="resolve"){let m=(y)=>{z({channel:T,v:x,type:"resolve-result",id:r.id,payload:y})},v=S;if(!v){m({error:"This extension does not resolve commands."});return}Promise.resolve().then(()=>v(r.payload)).then((y)=>m({item:y?fe(y):null}),(y)=>{let M=(y instanceof Error?y.message:String(y)).trim();m({error:(M||"Command failed.").slice(0,xe)})});return}let p=Z.get(r.id);if(!p)return;if(clearTimeout(p.timer),Z.delete(r.id),r.ok){p.resolve(r.payload);return}p.reject(new f(r.code,r.error))};o.addEventListener("message",_o),z({channel:T,v:x,type:"hello"});let F=(t,r=s)=>{if(k||o.parent===o)return Promise.reject(new f("HOST_UNAVAILABLE","No host frame. This page is not in an iframe."));return new Promise((p,m)=>{let v=setTimeout(()=>{Z.delete(t.id),m(new f("HOST_TIMEOUT","Host did not answer in time."))},r);Z.set(t.id,{resolve:p,reject:m,timer:v}),z(t)})},U=(t)=>F(t).then(()=>{return}),C={channel:T,v:x},pt=(t)=>{if(!k&&o.parent!==o)z(t)},So=()=>pt({...C,type:"file-save"}),go=(t)=>{if(!tr(t)||!qr(t))return;t.preventDefault(),So()},To=(t)=>{if(!tr(t)||t.key!=="Escape"||u?.surface!=="popover"||!u.popover)return;t.preventDefault(),vo(u.popover.id,"escape").catch(()=>{return})},Le=()=>{let t=u?.surface==="popover"?u.popover:void 0;if(!t)return;let r=Y||ce;if(Ie===r)return;Ie=r,Ao(t.id,r).catch(()=>{return})},Ue=()=>{if(u?.surface!=="popover"||Y)return;Y=!0,Le()},xo=(t)=>{if(u?.surface!=="popover"||t.relatedTarget!==null||!Y)return;Y=!1,Le()},bo=()=>{if(u?.surface!=="popover"||ce)return;ce=!0,Le()},yo=()=>{if(u?.surface!=="popover"||!ce)return;ce=!1,Le()},J=(t,r=1024)=>{if(!t.trim()||t.length>r)throw new f("HOST_REJECTED",`Identity must contain 1 to ${r} characters.`)},ut=async(t)=>{if(t.kind!=="projects")J(t.projectId);let r=await F({...C,type:"workspace-read",id:_(l),payload:t});if(!r||!("kind"in r)||!("state"in r)||r.kind!==t.kind)throw new f("HOST_REJECTED","Host did not return workspace data.");return r},mt=async(t,r)=>{if(t.kind!=="projects")J(t.projectId);let p=_(l);ae.set(p,r);try{await U({...C,type:"workspace-subscribe",id:_(l),payload:{subscriptionId:p,query:t}})}catch(m){if(ae.delete(p),!k)z({...C,type:"workspace-unsubscribe",id:_(l),payload:{subscriptionId:p}});throw m}return()=>{if(!ae.delete(p)||k)return;z({...C,type:"workspace-unsubscribe",id:_(l),payload:{subscriptionId:p}})}},jr=async(t,r)=>{if(t.kind==="session")J(t.sessionId);if(t.kind==="project")J(t.projectId);let p=_(l);L.set(p,r);try{await U({...C,type:"shells-subscribe",id:_(l),payload:{subscriptionId:p,scope:t}})}catch(m){if(L.delete(p),!k)z({...C,type:"shells-unsubscribe",id:_(l),payload:{subscriptionId:p}});throw m}return()=>{if(!L.delete(p)||k)return;z({...C,type:"shells-unsubscribe",id:_(l),payload:{subscriptionId:p}})}},Ce=async(t)=>{if("key"in t&&(t.key.length===0||t.key.length>Et))throw new f("HOST_REJECTED","Storage key must contain 1 to 128 characters.");if(t.op==="set"&&!me(t.value))throw new f("HOST_REJECTED","Storage values must be JSON.");if(t.op==="set"&&new TextEncoder().encode(JSON.stringify(t.value)).length>ht)throw new f("HOST_REJECTED","Storage value exceeds 64 KiB.");if(t.scope==="device"&&u?.features?.deviceStorage!==!0)throw new f("UNSUPPORTED","This host does not support device storage.");let r=await F({...C,type:"storage",id:_(l),payload:t});if(!r||!("storage"in r)||r.op!==t.op)throw new f("HOST_REJECTED","Host did not return storage data.");return r},vo=(t,r)=>u?.features?.popovers!==!0&&!(u?.surface==="popover"&&u.popover?.id===t)?Promise.reject(new f("UNSUPPORTED","This host does not support popovers.")):U({...C,type:"popover-close",id:_(l),payload:r?{id:t,reason:r}:{id:t}}),Ao=(t,r)=>u?.features?.popovers!==!0&&!(u?.surface==="popover"&&u.popover?.id===t)?Promise.reject(new f("UNSUPPORTED","This host does not support popovers.")):U({...C,type:"popover-anchor",id:_(l),payload:{id:t,active:r}});return o.addEventListener("keydown",To,!0),o.addEventListener("pointerover",Ue),o.addEventListener("pointermove",Ue),o.addEventListener("pointerout",xo),o.addEventListener("focus",bo),o.addEventListener("blur",yo),{onAction:(t)=>(R=t,()=>{if(R===t)R=null}),listProjects:async()=>{let t=await ut({kind:"projects"});if(t.kind!=="projects")throw new f("HOST_REJECTED","Expected projects.");return t},listWorktrees:async(t)=>{let r=await ut({kind:"worktrees",projectId:t});if(r.kind!=="worktrees")throw new f("HOST_REJECTED","Expected worktrees.");return r},listSessions:async(t)=>{let r=await ut({kind:"sessions",projectId:t});if(r.kind!=="sessions")throw new f("HOST_REJECTED","Expected sessions.");return r},onProjects:(t)=>mt({kind:"projects"},(r)=>{if(r.kind==="projects")t(r)}),onWorktrees:(t,r)=>mt({kind:"worktrees",projectId:t},(p)=>{if(p.kind==="worktrees")r(p)}),onSessions:(t,r)=>mt({kind:"sessions",projectId:t},(p)=>{if(p.kind==="sessions")r(p)}),onRunningShells:(t,r)=>jr(t,r),readShellOutput:async(t,r)=>{J(t,Me);let p=r?.cursor;if(p!==void 0&&(!Number.isInteger(p)||p<0))throw new f("HOST_REJECTED","Shell output cursor must be a non-negative integer.");let m=r?.tailBytes;if(m!==void 0&&(!Number.isInteger(m)||m<1||m>Pe))throw new f("HOST_REJECTED",`Shell output tailBytes must be an integer between 1 and ${Pe}.`);let y=await F({...C,type:"shell-output",id:_(l),payload:{shellId:t,cursor:p,tailBytes:m}});if(!y||typeof y.output!=="string"||!Number.isFinite(y.cursor))throw new f("HOST_REJECTED","Host did not return shell output.");return y},stopShell:async(t)=>{if(J(t,Me),(await F({...C,type:"shell-stop",id:_(l),payload:{shellId:t}}))?.stopped!==!0)throw new f("HOST_REJECTED","Host did not stop the shell.");return{stopped:!0}},openSession:async(t)=>{J(t),await U({...C,type:"open-session",id:_(l),payload:{sessionId:t}})},storage:{get:async(t,r)=>{let p=Ke(r),m={op:"get",key:t};if(p)m.scope=p;let v=await Ce(m);return v.op==="get"&&v.found?v.value:void 0},set:async(t,r,p)=>{let m=Ke(p),v={op:"set",key:t,value:r};if(m)v.scope=m;await Ce(v)},delete:async(t,r)=>{let p=Ke(r),m={op:"delete",key:t};if(p)m.scope=p;await Ce(m)},keys:async(t)=>{let r=Ke(t),p={op:"keys"};if(r)p.scope=r;let m=await Ce(p);if(m.op!=="keys")throw new f("HOST_REJECTED","Expected storage keys.");return m.keys}},onReady:(t)=>{if(i.add(t),u)t(u);return()=>{i.delete(t)}},onDirectory:(t)=>{if(a.add(t),u)t(u.directory);return()=>{a.delete(t)}},onSession:(t)=>{if(d.add(t),u)t(u.session);return()=>{d.delete(t)}},onSessionLifecycle:(t)=>{if(h.add(t),H)t(H);return()=>{h.delete(t)}},onConnection:(t)=>{if(E.add(t),u)t(u.connection);return()=>{E.delete(t)}},onSettings:(t)=>{if(g.add(t),u)t(u.settings);return()=>{g.delete(t)}},onItem:(t)=>{if(b.add(t),u)t(u.item);return()=>{b.delete(t)}},onStatusControl:(t)=>(O.add(t),()=>{O.delete(t)}),onPopoverClosed:(t)=>(N.add(t),()=>{N.delete(t)}),setStatusControls:(t)=>{if(u?.features?.statusControls!==!0)return Promise.reject(new f("UNSUPPORTED","This host does not support status controls."));if(!Lo(t))return Promise.reject(new f("HOST_REJECTED","Status controls must have unique bounded ids and valid selected options."));return U({...C,type:"status-controls",id:_(l),payload:{controls:t}})},openPopover:(t)=>{if(u?.features?.popovers!==!0)return Promise.reject(new f("UNSUPPORTED","This host does not support popovers."));if(!Tt(t))return Promise.reject(new f("HOST_REJECTED","Popover requests need bounded geometry and JSON data."));return U({...C,type:"popover-open",id:_(l),payload:t})},closePopover:vo,setPopoverAnchorActive:Ao,onResolve:(t)=>(S=t,()=>{if(S===t)S=null}),toast:(t)=>{let r=t.message.trim();if(!r||r.length>De)return Promise.reject(new f("HOST_REJECTED",`Toast message must contain 1 to ${De} characters.`));if(t.copy&&t.copy!==!0&&(!t.copy.text.length||t.copy.text.length>$e))return Promise.reject(new f("HOST_REJECTED",`Toast copy text must contain 1 to ${$e} characters.`));return U({channel:T,v:x,type:"toast",id:_(l),payload:{...t,message:r}})},openUrl:(t)=>U({channel:T,v:x,type:"open-url",id:_(l),payload:{url:t}}),openCommit:(t)=>vt(t)?U({channel:T,v:x,type:"open-commit",id:_(l),payload:{sha:t}}):Promise.reject(new f("HOST_REJECTED","Commit id must be 7 to 64 hex characters.")),openSurface:(t)=>U({channel:T,v:x,type:"open-surface",id:_(l),payload:{surfaceId:t}}),writeClipboard:(t)=>U({channel:T,v:x,type:"clipboard-write",id:_(l),payload:{text:t}}),compose:(t)=>U({channel:T,v:x,type:"compose",id:_(l),payload:t}),attach:(t)=>U({channel:T,v:x,type:"attach",id:_(l),payload:fe(t)}),startSession:async(t)=>{if(t.projectId!==void 0)J(t.projectId);let r=t.worktree;if(r&&r!==!0)if(r.kind==="existing")J(r.directory);else{if(r.name!==void 0)J(r.name,200);if(r.baseBranch!==void 0)J(r.baseBranch,200)}let p=await F({channel:T,v:x,type:"start-session",id:_(l),payload:Ot(t)},e.requestTimeoutMs??180000);if(!bt(p))throw new f("HOST_REJECTED","Host did not return a session.");return p},prompt:(t)=>F({channel:T,v:x,type:"prompt",id:_(l),payload:Rt(t)}).then((r)=>{if(!yt(r))throw new f("HOST_REJECTED","Host did not return a prompt result.");return r}),sessionLink:(t)=>U({channel:T,v:x,type:"session-link",id:_(l),payload:fe(t)}),close:()=>U({channel:T,v:x,type:"close",id:_(l)}),oauthStart:()=>U({channel:T,v:x,type:"oauth-start",id:_(l)}),oauthDisconnect:()=>U({channel:T,v:x,type:"oauth-disconnect",id:_(l)}),request:(t)=>(Ve(t.path)?F({channel:T,v:x,type:"request",id:_(l),payload:t}):or()).then((r)=>{if(!je(r))throw new f("HOST_REJECTED","Host request result was empty.");return r}),serviceRequest:(t)=>(Ve(t.path)?F({channel:T,v:x,type:"service-request",id:_(l),payload:t}):or()).then((r)=>{if(!je(r))throw new f("HOST_REJECTED","Host service request result was empty.");return r}),serviceStatus:()=>F({channel:T,v:x,type:"service-status",id:_(l)}).then((t)=>{if(!Ut(t))throw new f("HOST_REJECTED","Host did not return service status.");return t}),readFile:(t)=>(Ee(t)?F({channel:T,v:x,type:"file-read",id:_(l),payload:{path:t}}):ze()).then((r)=>{if(!Ct(r))throw new f("HOST_REJECTED","Host did not return file content.");return r}),writeFile:(t,r)=>{if(!Ee(t))return ze();if(r.length>Fe)return Promise.reject(new f("FILE_TOO_LARGE",`Content is over ${Fe} characters.`));return F({channel:T,v:x,type:"file-write",id:_(l),payload:{path:t,content:r}}).then((p)=>{if(!Mt(p))throw new f("HOST_REJECTED","Host did not confirm the write.");return p})},listDir:(t)=>(Ee(t)?F({channel:T,v:x,type:"file-list",id:_(l),payload:{path:t}}):ze()).then((r)=>{if(!Pt(r))throw new f("HOST_REJECTED","Host did not return directory entries.");return r}),stat:(t)=>(Ee(t)?F({channel:T,v:x,type:"file-stat",id:_(l),payload:{path:t}}):ze()).then((r)=>{if(!Gt(r))throw new f("HOST_REJECTED","Host did not return file status.");return r}),generate:(t)=>{let r=t.prompt.trim(),p=t.system?.trim();if(r.length===0||r.length>Xe)return Promise.reject(new f("HOST_REJECTED",`Prompt must be 1 to ${Xe} characters.`));if(p!==void 0&&(p.length===0||p.length>Be))return Promise.reject(new f("HOST_REJECTED",`System prompt must be 1 to ${Be} characters.`));let m=t.maxOutputTokens===void 0?void 0:Math.min(kt,Math.max(1,Math.floor(t.maxOutputTokens)));if(m!==void 0&&!Number.isFinite(m))return Promise.reject(new f("HOST_REJECTED","maxOutputTokens must be a number."));let v={prompt:r};if(p!==void 0)v.system=p;if(m!==void 0)v.maxOutputTokens=m;return F({channel:T,v:x,type:"generate",id:_(l),payload:v},e.requestTimeoutMs??wt).then((y)=>{if(!Nt(y))throw new f("HOST_REJECTED","Host did not return generated text.");return y})},setBadge:(t)=>U({channel:T,v:x,type:"badge",id:_(l),payload:{count:It(t)}}),setHeight:(t)=>U({channel:T,v:x,type:"resize",id:_(l),payload:{height:Lt(t)}}),onFileOpen:(t)=>{if(D.add(t),!ue)ue=!0,o.addEventListener("keydown",go,!0);if(oe)t(oe);return()=>{D.delete(t)}},onFileSnapshot:(t)=>(W=t,()=>{if(W===t)W=null}),onFileSaved:(t)=>(Q.add(t),()=>{Q.delete(t)}),reportFileChange:(t)=>pt({...C,type:"file-change",payload:{dirty:t.dirty,edited:t.edited}}),requestFileSave:So,reportFileUnsupported:()=>pt({...C,type:"file-unsupported"}),dispose:()=>{for(let t of ae.keys())z({...C,type:"workspace-unsubscribe",id:_(l),payload:{subscriptionId:t}});ae.clear();for(let t of L.keys())z({...C,type:"shells-unsubscribe",id:_(l),payload:{subscriptionId:t}});if(L.clear(),k=!0,S=null,R=null,W=null,D.clear(),Q.clear(),ue)o.removeEventListener("keydown",go,!0);o.removeEventListener("message",_o),o.removeEventListener("keydown",To,!0),o.removeEventListener("pointerover",Ue),o.removeEventListener("pointermove",Ue),o.removeEventListener("pointerout",xo),o.removeEventListener("focus",bo),o.removeEventListener("blur",yo);for(let t of Z.values())clearTimeout(t.timer),t.reject(new f("HOST_UNAVAILABLE","Host client was disposed."));Z.clear(),i.clear(),a.clear(),d.clear(),h.clear(),E.clear(),g.clear(),b.clear(),O.clear(),N.clear()}}};var rr=["browser.open","browser.snapshot","browser.click","browser.type","browser.scroll","browser.back","browser.forward","browser.inspect","browser.capture","browser.resize"];var Es=new Set(rr);var nr=["none","agent","user"];var _s=new Set(nr);var en=[["--oc-bg","background"],["--oc-elevated","elevated"],["--oc-fg","foreground"],["--oc-muted","muted"],["--oc-subtle","subtle"],["--oc-border","border"],["--oc-hover","hover"],["--oc-selection","selection"],["--oc-focus","focus"],["--oc-primary","primary"],["--oc-muted-surface","mutedSurface"],["--oc-elevated-fg","elevatedForeground"],["--oc-active","active"],["--oc-selection-fg","selectionForeground"],["--oc-primary-fg","primaryForeground"],["--oc-primary-text","primaryText"],["--oc-success-text","successText"],["--oc-warning-text","warningText"],["--oc-error-text","errorText"],["--oc-info-text","infoText"],["--oc-success","success"],["--oc-warning","warning"],["--oc-error","error"],["--oc-info","info"],["--oc-font","font"],["--oc-mono","mono"],["--oc-radius","radius"],["--surface-background","background"],["--surface-elevated","elevated"],["--surface-foreground","foreground"],["--surface-muted-foreground","muted"],["--surface-subtle","subtle"],["--interactive-border","border"],["--interactive-hover","hover"],["--interactive-selection","selection"],["--interactive-focus-ring","focus"],["--primary","primary"],["--surface-muted","mutedSurface"],["--surface-elevated-foreground","elevatedForeground"],["--interactive-active","active"],["--interactive-selection-foreground","selectionForeground"],["--primary-foreground","primaryForeground"],["--primary-text","primaryText"],["--success-text","successText"],["--warning-text","warningText"],["--error-text","errorText"],["--info-text","infoText"],["--status-success","success"],["--status-warning","warning"],["--status-error","error"],["--status-info","info"],["--font-sans","font"],["--font-mono","mono"],["--radius","radius"]],tn=[["--oc-syntax-keyword","--syntax-keyword","syntaxKeyword"],["--oc-syntax-string","--syntax-string","syntaxString"],["--oc-syntax-number","--syntax-number","syntaxNumber"],["--oc-syntax-function","--syntax-function","syntaxFunction"],["--oc-syntax-type","--syntax-type","syntaxType"],["--oc-syntax-comment","--syntax-comment","syntaxComment"],["--oc-syntax-variable","--syntax-variable","syntaxVariable"],["--oc-syntax-operator","--syntax-operator","syntaxOperator"]],sr=(e,o)=>{o.style.colorScheme=e.mode;for(let[n,s]of en)o.style.setProperty(n,e.tokens[s]);for(let[n,s,i]of tn){let a=e.tokens[i]??"";o.style.setProperty(n,a),o.style.setProperty(s,a)}o.style.setProperty("font-family",e.tokens.font),o.style.setProperty("font-size","0.875rem"),o.style.setProperty("line-height","1.45"),o.style.setProperty("color",e.tokens.foreground)},Ht=(e,o)=>{if(sr(e.theme,o),o.dataset)o.dataset.ocSurface=e.surface,o.dataset.ocTheme=e.theme.mode};var on={"surface-background":"bg","surface-elevated":"elevated","surface-elevated-foreground":"elevated-fg","surface-foreground":"fg","surface-muted-foreground":"muted","surface-muted":"muted-surface","surface-subtle":"subtle","interactive-border":"border","interactive-hover":"hover","interactive-active":"active","interactive-selection":"selection","interactive-selection-foreground":"selection-fg","interactive-focus-ring":"focus",primary:"primary","primary-foreground":"primary-fg","primary-text":"primary-text","success-text":"success-text","warning-text":"warning-text","error-text":"error-text","info-text":"info-text","status-success":"success","status-warning":"warning","status-error":"error","status-info":"info","font-sans":"font","font-mono":"mono",radius:"radius"},A=(e,o)=>`var(--${e}, var(--oc-${on[e]}, ${o}))`,de=A("surface-background","transparent"),We=A("surface-elevated","transparent"),be=A("surface-elevated-foreground","inherit"),re=A("surface-foreground","inherit"),I=A("surface-muted-foreground","gray"),rn=A("surface-muted","transparent"),K=A("interactive-border","currentColor"),j=A("interactive-hover","transparent"),le=A("interactive-active","transparent"),Ft=A("interactive-selection","transparent"),Xt=A("interactive-selection-foreground","inherit"),cr=A("interactive-focus-ring","currentColor"),q=A("primary","currentColor"),Bt=A("primary-text","inherit"),Vt=A("error-text","inherit"),nn=A("font-sans","inherit"),jt=A("font-mono","monospace"),dr=A("radius","9px"),zt=`calc(${dr} - 2px)`,ir=`calc(${dr} - 4px)`,G=(e,o,n="transparent")=>`color-mix(in srgb, ${e} ${o}%, ${n})`,ar=`box-shadow: 0 0 0 2px ${cr};`,Je=(e)=>{let o=A(`status-${e}`,"currentColor");return`
.oc-sdk[data-tone="${e}"], .oc-sdk [data-tone="${e}"] { --oc-sdk-tone: ${o}; --oc-sdk-tone-text: ${A(`${e}-text`,"inherit")}; }`},sn=`
.oc-sdk { box-sizing: border-box; font-size: 0.875rem; line-height: 1.45; }
.oc-sdk *, .oc-sdk *::before, .oc-sdk *::after { box-sizing: border-box; }
/* :where() keeps the reset at zero specificity so every primitive class below overrides it. */
:where(.oc-sdk) :where(button, input, textarea), :where(button.oc-sdk, input.oc-sdk, textarea.oc-sdk) { font: inherit; color: inherit; margin: 0; }
:where(.oc-sdk) :where(button), :where(button.oc-sdk) { cursor: pointer; background: none; border: 0; padding: 0; }
.oc-sdk button:disabled, button.oc-sdk:disabled, .oc-sdk[aria-disabled="true"], .oc-sdk [aria-disabled="true"] { opacity: .5; pointer-events: none; }

.oc-sdk-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 32px; padding: 0 12px; border: 1px solid transparent; font-size: 0.875rem; font-weight: 500; line-height: 1; white-space: nowrap; }
.oc-sdk-btn[data-size="sm"] { gap: 6px; height: 28px; padding: 0 10px; font-size: 0.8125rem; }
.oc-sdk-btn[data-size="xs"] { gap: 4px; height: 24px; padding: 0 8px; font-size: 0.75rem; }
.oc-sdk-btn[data-loading="true"] { opacity: .5; pointer-events: none; }
.oc-sdk-btn > .oc-sdk-spinner-ring { width: 14px; height: 14px; }

.oc-sdk-field { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.oc-sdk-field-label { font-size: 0.8125rem; font-weight: 500; }
.oc-sdk-field-note { font-size: 0.75rem; }
.oc-sdk-input { display: block; width: 100%; min-width: 0; height: 32px; padding: 0 10px; border: 0; font-size: 0.875rem; line-height: 1.45; appearance: none; }
textarea.oc-sdk-input { height: auto; padding: 8px 10px; resize: vertical; }

.oc-sdk-search { position: relative; min-width: 0; }
.oc-sdk-search .oc-sdk-input { padding-left: 34px; padding-right: 34px; }
.oc-sdk-search-icon { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); pointer-events: none; }
.oc-sdk-search-clear { position: absolute; right: 6px; top: 50%; transform: translateY(-50%); display: none; align-items: center; justify-content: center; width: 24px; height: 24px; }
.oc-sdk-search[data-active="true"] .oc-sdk-search-clear { display: inline-flex; }

.oc-sdk-select { position: relative; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.oc-sdk-trigger { display: inline-flex; align-items: center; gap: 6px; width: 100%; min-width: 0; height: 28px; padding: 0 10px; border: 1px solid transparent; font-size: 0.8125rem; text-align: left; }
.oc-sdk-trigger-value { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.oc-sdk-trigger-chevron { flex: 0 0 auto; }
.oc-sdk-popup { position: fixed; z-index: 50; display: flex; flex-direction: column; gap: 2px; min-width: 160px; max-width: calc(100vw - 16px); max-height: min(320px, calc(100vh - 16px)); overflow: auto; padding: 4px; border: 1px solid transparent; }
.oc-sdk-popup-search { flex: 0 0 auto; padding: 2px 2px 4px; }
.oc-sdk-popup-search .oc-sdk-input { height: 28px; font-size: 0.8125rem; }
.oc-sdk-option { display: flex; align-items: center; gap: 8px; width: 100%; padding: 6px 8px; font-size: 0.8125rem; text-align: left; }
.oc-sdk-option-label { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.oc-sdk-option-hint { flex: 0 0 auto; font-size: 0.75rem; }
.oc-sdk-option-check { flex: 0 0 auto; display: inline-flex; width: 14px; visibility: hidden; }
.oc-sdk-option[aria-selected="true"] > .oc-sdk-option-check { visibility: visible; }
.oc-sdk-popup-empty { padding: 8px; font-size: 0.8125rem; }

.oc-sdk-check { display: inline-flex; align-items: flex-start; gap: 8px; width: 100%; text-align: left; }
.oc-sdk-check-box { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; margin-top: 3px; border: 1px solid transparent; }
.oc-sdk-check-box > svg { display: none; }
.oc-sdk-check[aria-checked="true"] .oc-sdk-check-box > svg { display: block; }
.oc-sdk-check-thumb { flex: 0 0 auto; position: relative; width: 36px; height: 20px; }
.oc-sdk-check-thumb::after { content: ""; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; }
.oc-sdk-check-text { display: flex; flex-direction: column; min-width: 0; }
.oc-sdk-check-label { font-size: 0.875rem; }
.oc-sdk-check-desc { font-size: 0.75rem; }

.oc-sdk-tabs { display: inline-flex; gap: 2px; padding: 2px; max-width: 100%; overflow: auto; }
.oc-sdk-tab { display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px; border: 1px solid transparent; font-size: 0.8125rem; font-weight: 500; white-space: nowrap; }
.oc-sdk-tab-count { font-size: 0.75rem; font-variant-numeric: tabular-nums; }

.oc-sdk-badge { display: inline-flex; align-items: center; padding: 1px 6px; font-size: 11px; font-weight: 500; line-height: 16px; white-space: nowrap; }

.oc-sdk-list { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.oc-sdk-row { display: flex; align-items: center; gap: 8px; width: 100%; padding: 6px 8px; text-align: left; }
.oc-sdk-row-lead { flex: 0 0 auto; width: 64px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 0.75rem; }
.oc-sdk-row-main { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
.oc-sdk-row-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.oc-sdk-row-sub { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 0.75rem; }
.oc-sdk-row-meta { flex: 0 0 auto; font-size: 0.75rem; font-variant-numeric: tabular-nums; }
.oc-sdk-list-empty { padding: 16px 8px; text-align: center; font-size: 0.8125rem; }

.oc-sdk-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 40px 16px; text-align: center; }
.oc-sdk-empty-title { margin: 0; font-size: 0.8125rem; font-weight: 600; }
.oc-sdk-empty-body { margin: 0; max-width: 32rem; font-size: 0.8125rem; }
.oc-sdk-empty-action { margin-top: 12px; }

@keyframes oc-sdk-spin { to { transform: rotate(360deg); } }
.oc-sdk-spinner { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8125rem; }
.oc-sdk-spinner-ring { width: 16px; height: 16px; border: 2px solid transparent; animation: oc-sdk-spin .8s linear infinite; }
.oc-sdk-spinner[data-size="sm"] .oc-sdk-spinner-ring { width: 12px; height: 12px; }

.oc-sdk-banner { display: flex; align-items: flex-start; gap: 12px; padding: 8px 12px; border: 1px solid transparent; }
.oc-sdk-banner-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.oc-sdk-banner-title { font-size: 0.8125rem; font-weight: 500; }
.oc-sdk-banner-body { font-size: 0.8125rem; }
.oc-sdk-banner-action { flex: 0 0 auto; }

.oc-sdk-separator { display: flex; align-items: center; gap: 8px; width: 100%; margin: 8px 0; font-size: 0.75rem; }
.oc-sdk-separator::before, .oc-sdk-separator::after { content: ""; flex: 1 1 auto; height: 1px; }
.oc-sdk-separator[data-labeled="false"]::after { display: none; }
.oc-sdk-popup > .oc-sdk-separator { margin: 4px 0; }

.oc-sdk-progress { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.oc-sdk-progress-label { display: flex; justify-content: space-between; font-size: 0.75rem; font-variant-numeric: tabular-nums; }
.oc-sdk-progress-track { height: 6px; overflow: hidden; }
.oc-sdk-progress-fill { height: 100%; transform-origin: left; transition: transform 200ms ease-out; }

.oc-sdk-menu { position: relative; display: inline-flex; }

.oc-sdk-text { white-space: pre-wrap; overflow-wrap: anywhere; }
.oc-sdk-text img { display: block; max-width: 100%; margin: 8px 0; }
`,lr=`
.oc-sdk { color: ${re}; font-family: ${nn}; }
.oc-sdk :focus-visible { outline: none; ${ar} }
.oc-sdk-mono { font-family: ${jt}; }
.oc-sdk-muted { color: ${I}; }
${Je("success")}${Je("warning")}${Je("error")}${Je("info")}
.oc-sdk[data-tone="primary"], .oc-sdk [data-tone="primary"] { --oc-sdk-tone: ${q}; --oc-sdk-tone-text: ${Bt}; }

.oc-sdk-btn { border-radius: ${zt}; transition: background 150ms ease-out, color 150ms ease-out; }
.oc-sdk-btn[data-size="xs"] { border-radius: ${ir}; }
.oc-sdk-btn[data-variant="default"] { color: ${Bt}; background: ${G(q,10,de)}; border-color: ${G(q,12)}; }
.oc-sdk-btn[data-variant="default"]:hover { background: ${G(q,16,de)}; }
.oc-sdk-btn[data-variant="default"]:active { background: ${G(q,22,de)}; }
.oc-sdk-btn[data-variant="secondary"] { background: ${rn}; color: var(--oc-fg); }
.oc-sdk-btn[data-variant="secondary"]:hover { background-image: linear-gradient(${j}, ${j}); }
.oc-sdk-btn[data-variant="secondary"]:active { background-image: linear-gradient(${le}, ${le}); }
.oc-sdk-btn[data-variant="outline"] { background: ${We}; color: ${be}; border-color: ${K}; }
.oc-sdk-btn[data-variant="outline"]:hover { background-image: linear-gradient(${j}, ${j}); }
.oc-sdk-btn[data-variant="outline"]:active { background-image: linear-gradient(${le}, ${le}); }
.oc-sdk-btn[data-variant="ghost"] { background: transparent; }
.oc-sdk-btn[data-variant="ghost"]:hover { background: ${j}; }
.oc-sdk-btn[data-variant="ghost"]:active { background: ${le}; }
.oc-sdk-btn[data-variant="destructive"] { --oc-sdk-tone: ${A("status-error","red")}; color: ${Vt}; background: ${G("var(--oc-sdk-tone)",7,de)}; border-color: ${G("var(--oc-sdk-tone)",12)}; }
.oc-sdk-btn[data-variant="destructive"]:hover { background: ${G("var(--oc-sdk-tone)",9,de)}; }
.oc-sdk-btn[data-variant="destructive"]:active { background: ${G("var(--oc-sdk-tone)",11,de)}; }

.oc-sdk-field-note { color: ${I}; }
.oc-sdk-field[data-invalid="true"] .oc-sdk-field-note { color: ${Vt}; }
.oc-sdk-input { border-radius: ${zt}; background: ${We}; color: ${be}; box-shadow: inset 0 0 0 1px ${G(K,60)}; transition: background 150ms ease-out, box-shadow 150ms ease-out; }
.oc-sdk-input::placeholder { color: ${I}; }
.oc-sdk-input:hover:not(:focus) { background-image: linear-gradient(${j}, ${j}); }
.oc-sdk-input:focus, .oc-sdk-input:focus-visible { box-shadow: inset 0 0 0 2px ${cr}; }
.oc-sdk-field[data-invalid="true"] .oc-sdk-input { box-shadow: inset 0 0 0 1px ${A("status-error","red")}; }
.oc-sdk-field[data-invalid="true"] .oc-sdk-input:focus { box-shadow: inset 0 0 0 2px ${A("status-error","red")}; }
.oc-sdk-input[data-mono="true"] { font-family: ${jt}; }

.oc-sdk-search-icon { color: ${I}; }
.oc-sdk-search[data-active="true"] .oc-sdk-search-icon { color: ${q}; }
.oc-sdk-search-clear { border-radius: ${ir}; color: ${I}; }
.oc-sdk-search-clear:hover { background: ${j}; color: ${re}; }

.oc-sdk-trigger { border-color: ${K}; border-radius: ${zt}; background: ${We}; color: ${be}; transition: background 150ms ease-out; }
.oc-sdk-trigger:hover { background-image: linear-gradient(${j}, ${j}); }
.oc-sdk-trigger[aria-expanded="true"] { background-image: linear-gradient(${le}, ${le}); }
.oc-sdk-trigger-value[data-empty="true"] { color: ${I}; }
.oc-sdk-trigger-chevron { color: ${I}; }
.oc-sdk-popup { --surface-foreground: ${be}; border-color: ${G(K,60)}; border-radius: 12px; background: ${We}; color: ${be}; box-shadow: 0 8px 24px ${G(re,12)}; }
.oc-sdk-option { border-radius: 8px; }
.oc-sdk-option[data-active="true"] { background: ${j}; }
/* A selected option shows a check mark in the text colour, like the app's own pickers. Options without the mark come
   from bundles built before it existed and keep the selection fill as their only sign of the choice. */
.oc-sdk-option[aria-selected="true"]:not([data-mark]) { background: ${Ft}; color: ${Xt}; }
.oc-sdk-option-check { color: ${re}; }
.oc-sdk-option[data-destructive="true"] { color: ${Vt}; }
.oc-sdk-option[data-destructive="true"][data-active="true"] { background: ${G(A("status-error","red"),10)}; }
.oc-sdk-option-hint { color: ${I}; }
.oc-sdk-popup-empty { color: ${I}; }

/* Checked stays neutral: the mark carries the state, and the primary colour stays with primary actions. */
.oc-sdk-check-box { border-color: ${K}; border-radius: 4px; color: ${re}; transition: border-color 150ms ease-out; }
.oc-sdk-check[aria-checked="true"] .oc-sdk-check-box { border-color: ${G(re,60,K)}; }
.oc-sdk-check-thumb { border-radius: 9999px; background: ${K}; transition: background 150ms ease-out; }
.oc-sdk-check-thumb::after { border-radius: 9999px; background: ${de}; transition: transform 150ms ease-out; }
.oc-sdk-check[aria-checked="true"] .oc-sdk-check-thumb { background: ${q}; }
.oc-sdk-check[aria-checked="true"] .oc-sdk-check-thumb::after { transform: translateX(16px); }
.oc-sdk-check:focus-visible { box-shadow: none; }
.oc-sdk-check:focus-visible .oc-sdk-check-box, .oc-sdk-check:focus-visible .oc-sdk-check-thumb { ${ar} }
.oc-sdk-check-desc { color: ${I}; }

.oc-sdk-tabs { border-radius: 10px; }
.oc-sdk-tabs[data-track="true"] { background: ${G(re,4)}; }
.oc-sdk-tab { border-radius: 8px; color: ${I}; transition: color 150ms ease-out, background 150ms ease-out; }
.oc-sdk-tab:hover { color: ${re}; }
.oc-sdk-tab[aria-selected="true"] { color: ${Xt}; background: ${Ft}; border-color: ${K}; }
.oc-sdk-tab-count { color: ${I}; }

.oc-sdk-badge { border-radius: 9999px; background: ${j}; color: ${I}; }
.oc-sdk-badge[data-tone] { color: var(--oc-sdk-tone-text, var(--oc-sdk-tone)); background: ${G("var(--oc-sdk-tone)",15)}; }

.oc-sdk-row { border-radius: 6px; transition: background 120ms ease-out; }
.oc-sdk-row:hover, .oc-sdk-row[data-active="true"] { background: ${j}; }
.oc-sdk-row[aria-selected="true"] { background: ${Ft}; color: ${Xt}; }
.oc-sdk-row-lead { font-family: ${jt}; color: ${I}; }
.oc-sdk-row-sub { color: ${I}; }
.oc-sdk-row-meta { color: ${I}; }
.oc-sdk-row[aria-selected="true"] .oc-sdk-row-lead, .oc-sdk-row[aria-selected="true"] .oc-sdk-row-sub, .oc-sdk-row[aria-selected="true"] .oc-sdk-row-meta { color: inherit; opacity: .75; }
.oc-sdk-list-empty { color: ${I}; }

.oc-sdk-empty-body { color: ${I}; }

.oc-sdk-spinner { color: ${I}; }
.oc-sdk-spinner-ring { border-color: ${K}; border-top-color: ${q}; border-radius: 9999px; }

.oc-sdk-banner { border-color: ${G("var(--oc-sdk-tone)",40)}; border-radius: 8px; background: ${G("var(--oc-sdk-tone)",10)}; }
.oc-sdk-banner-title { color: var(--oc-sdk-tone-text, var(--oc-sdk-tone)); }
.oc-sdk-banner-body { color: ${I}; }

.oc-sdk-separator { color: ${I}; }
.oc-sdk-separator::before, .oc-sdk-separator::after { background: ${G(K,40)}; }

.oc-sdk-progress-label { color: ${I}; }
.oc-sdk-progress-track { border-radius: 9999px; background: ${K}; }
.oc-sdk-progress-fill { border-radius: 9999px; background: var(--oc-sdk-tone, ${q}); }

.oc-sdk-text a { color: ${Bt}; text-decoration: underline; text-underline-offset: 2px; }
.oc-sdk-text img { border-radius: 8px; border: 1px solid ${G(K,60)}; }
`,X=`
${ft}
${sn}
${lr}`;var pn=0,ne=(e,o)=>{let n=document.createElementNS("http://www.w3.org/2000/svg",e);for(let[s,i]of Object.entries(o))n.setAttribute(s,String(i));return n},Jt=(e)=>{let o=document.createElement("div");o.className="chart",o.style.height=`${e.height}px`;let n=e.height,s=ne("svg",{viewBox:`0 0 300 ${n}`,preserveAspectRatio:"none","aria-hidden":"true"}),i=`fill-${++pn}`,a=ne("defs",{}),d=ne("linearGradient",{id:i,x1:0,x2:0,y1:0,y2:1});d.append(ne("stop",{offset:"0%","stop-color":e.color,"stop-opacity":0.32}),ne("stop",{offset:"100%","stop-color":e.color,"stop-opacity":0.02})),a.append(d);let h=ne("path",{d:"",class:"chart-grid"}),E=ne("path",{d:"",fill:`url(#${i})`}),g=ne("path",{d:"",fill:"none",stroke:e.color,"stroke-width":1.5,"vector-effect":"non-scaling-stroke","stroke-linejoin":"round"});s.append(a,h,E,g);let b=document.createElement("div");b.className="chart-cursor";let O=document.createElement("div");O.className="chart-dot",O.style.background=e.color;let N=document.createElement("div");N.className="chart-tip",o.append(s,b,O,N);let S=[],R=1,D=null,Q=null,W=(L,k)=>(e.capacity-k+L)/Math.max(1,e.capacity-1)*300,oe=(L)=>n-1-Math.min(L,R)/R*(n-1-2),ue=()=>{let L=D===null?void 0:S[D];if(D===null||L===void 0){o.classList.remove("hovering");return}o.classList.add("hovering");let k=o.getBoundingClientRect(),l=W(D,S.length)/300*k.width,u=oe(L)/n*k.height;b.style.transform=`translateX(${l}px)`,O.style.transform=`translate(${l}px, ${u}px)`;let H=(S.length-1-D)*e.intervalSeconds;N.textContent=`${e.format(L)} · ${H===0?"now":`${H} s ago`}`;let Y=l>k.width/2;N.style.left=Y?"":`${l+8}px`,N.style.right=Y?`${k.width-l+8}px`:""},Z=(L)=>{if(S.length===0)return;let k=o.getBoundingClientRect(),l=(L-k.left)/k.width*(e.capacity-1),u=Math.round(l-(e.capacity-S.length));D=Math.min(S.length-1,Math.max(0,u)),ue()};return o.addEventListener("pointermove",(L)=>{Q=L.clientX,Z(L.clientX)}),o.addEventListener("pointerleave",()=>{Q=null,D=null,ue()}),{element:o,update:(L,k)=>{if(S=L,R=k>0?k:1,h.setAttribute("d",[0.25,0.5,0.75].map((l)=>`M0 ${n*l} H300`).join(" ")),S.length===0)E.setAttribute("d",""),g.setAttribute("d","");else{let l=S.map((ce,Ie)=>`${W(Ie,S.length).toFixed(2)} ${oe(ce).toFixed(2)}`),u=S.length===1,H=u?`M${W(0,1)-2} ${l[0]?.split(" ")[1]} L${l[0]}`:`M${l.join(" L")}`;g.setAttribute("d",H);let Y=u?W(0,1)-2:W(0,S.length);E.setAttribute("d",`${H} L300 ${n} L${Y.toFixed(2)} ${n} Z`)}if(Q!==null)Z(Q)}}};var c=(e,o="",n="",s=[])=>{let i=document.createElement(e);if(o)i.className=o;if(n)i.textContent=n;if(s.length>0)i.append(...s);return i},w=(e,o)=>{if(e.textContent!==o)e.textContent=o},se=(e,o,n,s,i,a=0)=>{let d=new Map;for(let E of o){let g=n(E);for(let O=1;d.has(g);O+=1)g=`${n(E)}\x01${O}`;let b=i.get(g);if(b)b.update(E);d.set(g,b??s(E))}for(let[E,g]of i)if(d.get(E)!==g)g.element.remove();i.clear();let h=a;for(let[E,g]of d){i.set(E,g);let b=e.children[h]??null;if(b!==g.element)e.insertBefore(g.element,b);h+=1}};var et=(e)=>e==="openchamber-resource-monitor-mobile",pr=(e,o)=>{let n=`:${e}`;return o?{kind:"info",label:n}:{kind:"link",label:n,href:`http://localhost:${e}`}};var Qt=2000,ur={"needs-approval":"Allow the local service for Resource Monitor in Settings → Extensions.",paused:"Resource Monitor is paused in Settings → Extensions.","service-failed":"The monitoring service stopped. It restarts on the next refresh.",unreachable:"Could not reach the monitoring service.","bad-answer":"The monitoring service answered with something unexpected."},tt=(e)=>typeof e==="object"&&e!==null,un=(e)=>tt(e)&&typeof e.at==="number"&&tt(e.system)&&tt(e.app)&&Array.isArray(e.app.groups)&&Array.isArray(e.servers)&&Array.isArray(e.outside)&&tt(e.history),mn=(e)=>{if(!(e instanceof f))return"unreachable";if(e.code==="NO_SERVICE"||e.code==="NOT_GRANTED")return"needs-approval";if(e.code==="DISABLED")return"paused";if(e.code==="SERVICE_FAILED")return"service-failed";return"unreachable"},mr=async(e,o)=>{try{return(await e.serviceRequest({method:"POST",path:"/stop",body:JSON.stringify(o)})).status===200}catch{return!1}},fr=(e,o,n=!1)=>{let s=pr(o,n);if(s.kind==="info"){let a=c("span","port port-readonly",s.label);return a.dir="ltr",a}let i=c("button","port",s.label);return i.type="button",i.dir="ltr",i.title=`Open ${s.href}`,i.addEventListener("click",(a)=>{a.stopPropagation(),e.openUrl(s.href).catch(()=>{return})}),i},Yt=(e)=>!document.hidden&&e.getBoundingClientRect().width>0,Er=(e,o,n,s)=>{let i=!1,a=async()=>{if(i||!Yt(o))return;i=!0;try{let E=await e.serviceRequest({method:"GET",path:"/snapshot"}),g;try{g=JSON.parse(E.body)}catch{g=null}if(E.status===200&&un(g))n(g);else s(E.status===200?"bad-answer":"service-failed")}catch(E){s(mn(E))}finally{i=!1}};a(),setInterval(()=>{a()},Qt);let d=Yt(o),h=()=>{let E=Yt(o);if(E&&!d)a();d=E};return document.addEventListener("visibilitychange",h),new ResizeObserver(h).observe(document.documentElement),{refresh:()=>{a()}}};var ye="en";var fn={en:"Connected host",nl:"Verbonden host",de:"Verbundener Host",fr:"Hôte connecté",es:"Host conectado",ja:"接続先のホスト","pt-BR":"Host conectado",uk:"Підключений хост",ko:"연결된 호스트",pl:"Połączony host","zh-CN":"已连接的主机","zh-TW":"已連線的主機",tr:"Bağlı ana makine",ar:"المضيف المتصل",he:"המארח המחובר"},Zt=fn,hr=(e)=>{try{ye=Intl.NumberFormat.supportedLocalesOf(e)[0]??"en"}catch{ye="en"}},qt=()=>{let e=ye.split(/[-_]/,1)[0]?.toLowerCase()??"";return Zt[ye]??Zt[e]??Zt.en??"Connected host"},_r=(e,o)=>new Intl.NumberFormat(ye,{minimumFractionDigits:o,maximumFractionDigits:o}).format(e),te=(e)=>{let o=["B","KB","MB","GB","TB"],n=Math.max(0,e),s=0;while(n>=1024&&s<o.length-1)n/=1024,s+=1;let i=s>=3&&n<100?1:0;return`${_r(n,i)} ${o[s]}`},pe=(e)=>{if(e===null)return"–";if(e>0&&e<0.1)return"<0.1%";return`${_r(e,e<10?1:0)}%`},Sr=(e)=>{let o=Math.floor(e/86400),n=Math.floor(e%86400/3600),s=Math.floor(e%3600/60);if(o>0)return`${o} d ${n} h`;if(n>0)return`${n} h ${s} min`;return`${s} min`},ot=(e,o)=>{let n=o.replace(/^"([^"]+)"/,"$1");if(!e||!/^([A-Za-z]:)?[\\/]/.test(n))return o;let s=-1;while((s=n.indexOf(e,s+1))>=0){if(!/[\\/]/.test(n[s-1]??""))continue;let i=n.slice(s+e.length).replace(/^\.exe/i,"");if(i===""||i.startsWith(" "))return i.trim()}return o},En={renderer:"Renderer","gpu-process":"GPU",utility:"Utility",zygote:"Zygote"},hn=[[/network/i,"Network service"],[/storage/i,"Storage service"],[/audio/i,"Audio service"],[/video_?capture/i,"Video capture"]],rt=(...e)=>e.filter(Boolean).join(" · "),eo=(e,o)=>{let n=e.ports.map((d)=>`:${d}`).join(" ");if(o==="root")return{title:"Main process",detail:rt(n,ot(e.name,e.command))};if(o==="self")return{title:"Resource Monitor",detail:"this extension"};let s=/--type=([\w-]+)/.exec(e.command)?.[1];if(s&&/\bHelper\b/.test(e.name)){let d=s==="utility"?/--utility-sub-type=([\w.]+)/.exec(e.command)?.[1]??"":"";return{title:hn.find(([E])=>E.test(d))?.[1]??En[s]??s,detail:rt(n,ot(e.name,e.command))}}let i=e.label||e.name,a=ot(e.name,e.command);return{title:i,detail:rt(n,a===i||a===e.name?"":a)}},to=(e)=>{let o=ot(e.name,e.command),n=o===e.title||o===e.name||e.command===e.title;return rt(e.ports.map((s)=>`:${s}`).join(" "),e.count>1?`${e.count} processes`:"",n?"":o)},gr=(e)=>{if(e==="darwin")return"macOS";if(e==="win32")return"Windows";if(e==="linux")return"Linux";return e},nt={app:"OpenChamber",opencode:"OpenCode",terminals:"Terminal"},Tr={app:"OpenChamber",opencode:"Agent",terminals:"Terminal"},ie={cpu:"var(--oc-info)",memory:"var(--oc-success)",app:"var(--oc-primary)",opencode:"color-mix(in srgb, var(--oc-primary) 50%, var(--oc-fg))",terminals:"var(--oc-muted)"};var xr=`
  html, body { margin: 0; background: transparent; color: var(--oc-fg); font: 12px/1.4 var(--oc-font); }
  * { box-sizing: border-box; }
  .num { font-variant-numeric: tabular-nums; }
  .muted { color: var(--oc-muted); }
  /* Time-series axes intentionally remain left-to-right in RTL locales. */
  .chart { position: relative; width: 100%; overflow: hidden; direction: ltr; }
  .chart svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  .chart-grid { stroke: var(--oc-border); stroke-width: 1; vector-effect: non-scaling-stroke; opacity: .5; fill: none; }
  .chart-cursor, .chart-dot, .chart-tip { position: absolute; pointer-events: none; opacity: 0; }
  .chart.hovering .chart-cursor, .chart.hovering .chart-dot, .chart.hovering .chart-tip { opacity: 1; }
  .chart-cursor { top: 0; bottom: 0; left: 0; width: 1px; background: var(--oc-border); }
  .chart-dot { top: -3px; left: -3px; width: 6px; height: 6px; border-radius: 50%; box-shadow: 0 0 0 2px color-mix(in srgb, var(--oc-fg) 4%, var(--oc-bg)); }
  /* Floats like the app's dropdowns: lit top edge and hairline rings instead of a border. The chart clips,
     so only the rings and the tightest shadow. */
  .chart-tip { top: 2px; padding: 1px 6px; border-radius: 4px; white-space: nowrap; font-size: 11px;
    background: var(--oc-elevated); color: var(--oc-elevated-fg); font-variant-numeric: tabular-nums;
    box-shadow: inset 0 1px 0 0 rgb(255 255 255 / .8), inset 0 0 0 1px rgb(0 0 0 / .04), 0 0 0 1px rgb(0 0 0 / .1), 0 1px 2px -.5px rgb(0 0 0 / .08); }
  [data-oc-theme="dark"] .chart-tip { box-shadow: inset 0 1px 0 0 rgb(255 255 255 / .06), inset 0 0 0 1px rgb(255 255 255 / .08),
    0 0 0 1px rgb(0 0 0 / .36), 0 1px 1px -.5px rgb(0 0 0 / .22); }
  .port { display: inline-flex; align-items: center; height: 18px; padding: 0 6px; border: 0; border-radius: 4px; font: 11px var(--oc-mono); cursor: pointer;
    background: color-mix(in srgb, var(--oc-primary) 14%, transparent); color: var(--oc-primary-text, var(--oc-primary)); }
  .port:hover, .port:focus-visible { outline: none; background: color-mix(in srgb, var(--oc-primary) 24%, transparent); }
  .port-readonly { cursor: default; }
  .port-readonly:hover, .port-readonly:focus-visible { background: color-mix(in srgb, var(--oc-primary) 14%, transparent); }
`,br=`
  html, body { height: 100%; overflow-y: auto; overflow-x: hidden; }
  #root { display: flex; flex-direction: column; gap: 14px; padding: 12px 12px 20px; }
  .head { display: flex; align-items: flex-start; gap: 8px; }
  .head .titles { min-width: 0; flex: 1; }
  .host-name { display: flex; align-items: baseline; gap: 5px; min-width: 0; font-size: 13px; font-weight: 600; overflow: hidden; white-space: nowrap; }
  .host-scope { flex: none; color: var(--oc-muted); font-size: 11px; font-weight: 500; }
  .host-name-value { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
  .host-meta { color: var(--oc-muted); font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .live { display: inline-flex; align-items: center; gap: 6px; color: var(--oc-muted); font-size: 11px; white-space: nowrap; padding-top: 2px; }
  .live::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--oc-success); }
  .live.stale::before { background: var(--oc-muted); }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
  /* Cards are flat and set apart by tone, like the app's tiles: no border. */
  .card { min-width: 0; display: flex; flex-direction: column; gap: 8px; padding: 12px;
    border-radius: var(--oc-radius); background: color-mix(in srgb, var(--oc-fg) 4%, transparent); }
  .card-top { display: flex; align-items: baseline; gap: 8px; }
  .label { font-size: 11px; font-weight: 600; letter-spacing: .02em; color: var(--oc-muted); text-transform: uppercase; }
  .big { font-size: 22px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
  .card-top .grow { flex: 1; }
  .sub { color: var(--oc-muted); font-size: 11px; }
  /* A track inside a card is the next tone step; segments part by a 1px gap. */
  .stack { display: flex; gap: 1px; height: 8px; border-radius: 4px; overflow: hidden; background: color-mix(in srgb, var(--oc-fg) 8%, transparent); }
  .stack > span { height: 100%; transition: width .4s ease; }
  .legend { display: flex; flex-direction: column; gap: 4px; }
  .legend-row { display: grid; grid-template-columns: 10px minmax(0, 1fr) auto auto; align-items: center; gap: 8px; }
  .legend-row .swatch { width: 8px; height: 8px; border-radius: 2px; }
  .legend-row .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .legend-row .value { text-align: end; min-width: 56px; }
  .section { display: flex; flex-direction: column; gap: 6px; }
  .section-head { display: flex; align-items: baseline; gap: 8px; padding: 0 2px; }
  .section-head .grow { flex: 1; }
  .empty { color: var(--oc-muted); padding: 6px 2px; }
  .origin { font-size: 10px; padding: 0 5px; border-radius: 4px; line-height: 16px; background: color-mix(in srgb, var(--oc-fg) 6%, transparent); color: var(--oc-muted); flex: none; }
  /* Lists sit on the panel itself, grouped by space: lines only under the column header and between groups. */
  .list { display: flex; flex-direction: column; }
  .cols, .row, .group-head { display: grid; grid-template-columns: minmax(0, 1fr) auto 56px 72px; align-items: center; column-gap: 8px; }
  .action { display: flex; align-items: center; justify-content: flex-end; }
  .action:empty { display: block; }
  .cols { padding: 0 2px 4px; color: var(--oc-muted); font-size: 11px; border-bottom: 1px solid var(--oc-border); }
  .cell { text-align: end; white-space: nowrap; }
  .quiet { color: var(--oc-muted); }
  /* Three levels, told apart by size, weight and indent rather than boxes:
     group heading, rows on a rail in the group's colour, unfolded members deeper and quieter. */
  .row { padding: 7px 2px; }
  .group { display: flex; flex-direction: column; padding: 4px 0 10px; border-bottom: 1px solid var(--oc-border); }
  .group-head { padding: 12px 2px 6px; font-size: 13px; }
  .group-head .cell { font-weight: 600; }
  .group > .row, .group > .job-wrap { margin-inline-start: 4px; padding-inline-start: 12px;
    border-inline-start: 2px solid color-mix(in srgb, var(--group-color, var(--oc-border)) 40%, transparent); }
  .group > .row { padding-top: 5px; padding-bottom: 5px; }
  .group > .job-wrap > .row { padding: 5px 2px; }
  .group .row .cell { color: color-mix(in srgb, var(--oc-fg) 80%, transparent); }
  .group .row .cell.quiet { color: var(--oc-muted); }
  .gname { display: flex; align-items: center; gap: 6px; min-width: 0; }
  .gname b { font-weight: 650; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .count { color: var(--oc-muted); font-weight: 400; }
  .dot { flex: none; width: 6px; height: 6px; border-radius: 50%; }
  .who { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
  .title-line { display: flex; align-items: center; gap: 6px; min-width: 0; }
  .pname { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
  .pname.strong { font-weight: 600; flex: none; max-width: 50%; }
  .pdetail { color: var(--oc-muted); font: 11px/1.35 var(--oc-mono); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .job.foldable, .group-head.foldable { cursor: pointer; }
  .group-head.foldable .gname::before { content: ''; flex: none; width: 0; height: 0; margin-inline-end: 1px;
    border-inline-start: 4px solid var(--oc-muted); border-block: 3.5px solid transparent; transition: transform .15s ease; }
  .group-head.foldable.open .gname::before { transform: rotate(var(--resource-monitor-chevron-open-angle, 90deg)); }
  /* Focus draws no ring, like the app: a focused row takes the hover fill. */
  .group-head.foldable:focus-visible, .job.foldable:focus-visible { outline: none; border-radius: 4px; background: var(--oc-hover); }
  .job.foldable .title-line::before { content: ''; flex: none; width: 0; height: 0; margin-block: 0; margin-inline: 1px 2px;
    border-inline-start: 4px solid var(--oc-muted); border-block: 3.5px solid transparent; transition: transform .15s ease; }
  .job.foldable.open .title-line::before { transform: rotate(var(--resource-monitor-chevron-open-angle, 90deg)); }
  .job-wrap.open .pdetail { white-space: normal; overflow-wrap: anywhere; }
  .pdetail { user-select: text; }
  .members { display: flex; flex-direction: column; padding-block: 0 6px; padding-inline: 16px 0; }
  .row.member { padding: 3px 2px; font-size: 11.5px; }
  .row.member .pname { color: var(--oc-muted); }
  .row.member .pdetail { font-size: 10.5px; }
  .group .row.member .cell { color: var(--oc-muted); }
  .more { color: var(--oc-muted); padding: 2px 2px 4px; font-size: 11px; }
  /* Stop is a text button: no fill, it only changes colour, and asks once before acting. */
  .stop { flex: none; padding: 0 2px; border: 0; background: none; font: 11px var(--oc-font); color: var(--oc-muted); cursor: pointer; }
  .stop:hover, .stop:focus-visible { color: var(--oc-error-text, var(--oc-error)); }
  .stop.armed { color: var(--oc-error-text, var(--oc-error)); font-weight: 600; }
  .stop:disabled { cursor: default; opacity: .6; }
  .stop:focus-visible { outline: none; }
  @media (any-pointer: coarse) {
    .stop { min-width: 44px; min-height: 44px; padding: 0 8px; }
    .job.foldable, .group-head.foldable { min-height: 44px; }
  }
  /* The tint says warning or error; no border. */
  .banner { padding: 8px 12px; border-radius: var(--oc-radius);
    background: color-mix(in srgb, var(--oc-warning) 10%, transparent); color: var(--oc-warning-text, var(--oc-fg)); }
  .banner.error { background: color-mix(in srgb, var(--oc-error) 10%, transparent);
    color: var(--oc-error-text, var(--oc-fg)); }
  .footnote { color: var(--oc-muted); font-size: 11px; padding: 0 2px; }
  [hidden] { display: none !important; }
`;var _n=new Set(["ar","he"]),Sn=(e)=>{let o=e.trim().split(/[-_]/,1)[0]?.toLowerCase()??"";return _n.has(o)?"rtl":"ltr"},yr=(e,o)=>{o.lang=e;let n=Sn(e);return o.dir=n,n};var oo=90;var ge=$t(),ke=et(window.name),so=document.querySelector("#root");if(!so)throw Error("Missing #root");var kr=document.createElement("style");kr.textContent=xr+br;document.head.append(kr);var io=Qt/1000,we=c("div","banner");we.hidden=!0;var Re=c("span","host-scope");Re.hidden=!0;Re.dir="auto";var ao=c("span","host-name-value","–");ao.dir="auto";var wr=c("div","host-name","",[Re,ao]),co=c("div","host-meta","Reading…");co.dir="auto";var Te=c("div","live stale","Starting");Te.dir="auto";var Or=c("div","head");Or.append(c("div","titles","",[wr,co]),Te);var Rr=(e,o,n)=>{let s=c("span","big num","–"),i=c("span","sub num");s.dir="auto",i.dir="auto";let a=c("div","card-top","",[c("span","label",e),c("span","grow"),i]),d=Jt({color:o,height:56,capacity:oo,format:n,intervalSeconds:io}),h=c("div","sub num");return h.dir="auto",{card:c("div","card","",[a,s,d.element,h]),value:s,side:i,sub:h,chart:d}},ve=Rr("CPU",ie.cpu,pe),Ae=Rr("Memory",ie.memory,te),gn=c("div","grid","",[ve.card,Ae.card]),lo=c("span","big num","–");lo.dir="auto";var po=c("span","sub num");po.dir="auto";var Ir=Jt({color:ie.app,height:44,capacity:oo,format:te,intervalSeconds:io}),Lr=c("div","stack"),Ur=c("div","legend"),Tn=c("div","card","",[c("div","card-top","",[c("span","label","OpenChamber"),c("span","grow"),po]),lo,c("div","sub","The app, OpenCode, and everything they started"),Ir.element,Lr,Ur]),xn=()=>c("div","cols","",[c("span"),c("span"),c("span","cell","CPU"),c("span","cell","Memory")]),dt=(e)=>c("span","action","",e?[e]:[]),Cr=c("span","count"),ro=c("div","list"),Mr=c("div","empty","No dev servers right now. Servers started by an agent, a project action, or the terminal show up here with their ports."),bn=c("section","section","",[c("div","section-head","",[c("span","label","Dev servers"),Cr]),ro,Mr]),Pr=c("div","list"),yn=c("section","section","",[c("div","section-head","",[c("span","label","Processes")]),xn(),Pr]),Gr=c("div","list"),uo=c("section","section","",[c("div","section-head","",[c("span","label","OpenCode outside OpenChamber")]),Gr]);uo.hidden=!0;var vn=c("div","footnote","Process CPU counts 100% per core, as Activity Monitor does; the CPU card above is the whole machine. Memory is resident memory: pages a process shares with others count in each of them.");so.append(we,Or,gn,Tn,bn,yn,uo,vn);var Nr=(e)=>{Re.hidden=!ke,w(Re,ke?`${qt()} ·`:""),w(ao,e),wr.title=ke?`${qt()}: ${e}`:e},Dr=()=>{return},mo=(e,o,n)=>{let s=c("button","stop",e);s.type="button",s.dir="auto";let i=!1,a,d=()=>{i=!1,s.classList.remove("armed"),s.textContent=e};return s.addEventListener("click",(h)=>{if(h.preventDefault(),h.stopPropagation(),s.disabled)return;if(!i){i=!0,s.classList.add("armed"),s.textContent=o,clearTimeout(a),a=setTimeout(d,4000);return}clearTimeout(a),s.disabled=!0,s.textContent="Stopping…",mr(ge,n).then((E)=>{if(!E)Xn();s.disabled=!1,d(),Dr()})}),s},no=0,An=(e)=>e.pid===no?"root":e.label==="Resource Monitor"&&e.ppid===no?"self":"other",lt=()=>{let e=c("span"),o=c("span","cell num");return e.dir="auto",o.dir="auto",{cpu:e,memory:o,set:(s,i)=>{let a=s!==null&&s>=1?"cell num":"cell num quiet";if(e.className!==a)e.className=a;w(e,pe(s)),w(o,te(i))}}},$r=(e,o)=>{let n=c("span","pname",e);n.dir="auto";let s=c("span","title-line","",[n]),i=c("span","pdetail");i.dir="ltr";let a=(d)=>{w(i,d),i.hidden=d===""};return a(o),{element:c("div","who","",[s,i]),setDetail:a}},fo=(e,o)=>{let{title:n,detail:s}=eo(e,o);return[e.pid,o,n,s,e.name,e.command].join("\x00")},Eo=(e,o,n="row")=>{let{title:s,detail:i}=eo(e,o),a=lt();a.set(e.cpu,e.memory);let d=c("div",n,"",[$r(s,i).element,dt(),a.cpu,a.memory]);return d.title=`${e.name} · pid ${e.pid}${e.command?`
${e.command}`:""}`,{element:d,update:(h)=>a.set(h.cpu,h.memory)}},_e=new Set,Hr=(e)=>e.members.length>0&&e.count>1,kn=(e,o)=>[e.pid,e.name,e.title,e.command,o,Hr(e)].join("\x00"),wn=(e)=>fo(e,"other"),On=(e)=>Eo(e,"other","row member"),Rn=(e,o)=>{let n=Hr(e),s=o?mo("Stop",`Stop ${e.title}?`,{kind:"job",pid:e.pid,name:e.name}):void 0,i=lt(),a=$r(e.title,to(e)),d=c("div",n?"row job foldable":"row job","",[a.element,dt(s),i.cpu,i.memory]);d.title=e.command||e.title;let h=c("div","job-wrap","",[d]),E=c("div","more");E.dir="auto";let g=c("div","members","",[E]),b=new Map,O=e,N=(S)=>{O=S,i.set(S.cpu,S.memory),a.setDetail(to(S));let R=n&&_e.has(S.pid);if(d.classList.toggle("open",R),h.classList.toggle("open",R),n)d.setAttribute("aria-expanded",String(R));if(!R){g.remove();return}se(g,S.members,wn,On,b);let D=S.count-S.members.length;if(E.hidden=D<=0,w(E,D===1?"1 more process, idle":`${D} more processes, idle`),g.parentElement!==h)h.append(g)};if(n){d.tabIndex=0,d.setAttribute("role","button");let S=()=>{if(_e.has(O.pid))_e.delete(O.pid);else _e.add(O.pid);N(O)};d.addEventListener("click",S),d.addEventListener("keydown",(R)=>{if(R.key==="Enter"||R.key===" ")R.preventDefault(),S()})}return N(e),{element:h,update:N}},Fr="collapsed-groups",Se=new Set,st=!1,In=()=>{if(!st)return;ge.storage.set(Fr,[...Se],{scope:"device"}).catch(()=>{return})},Ln=async()=>{if(!st)return;try{let e=await ge.storage.get(Fr,{scope:"device"});if(!Array.isArray(e))return;for(let o of e)if(o==="app"||o==="opencode"||o==="terminals")Se.add(o);if(at)Vr(at)}catch{}},Un=(e)=>{let o=(n)=>e.id==="terminals"||e.id==="opencode"&&n.ports.length>0;return[...e.processes.map((n)=>({kind:"process",row:n,role:An(n)})),...e.jobs.map((n)=>({kind:"job",job:n,stoppable:o(n)}))]},Cn=(e)=>e.kind==="process"?`process\x00${fo(e.row,e.role)}`:`job\x00${kn(e.job,e.stoppable)}`,Mn=(e)=>{if(e.kind==="process"){let n=Eo(e.row,e.role);return{element:n.element,update:(s)=>{if(s.kind==="process")n.update(s.row)}}}let o=Rn(e.job,e.stoppable);return{element:o.element,update:(n)=>{if(n.kind==="job")o.update(n.job)}}},Xr=(e)=>e.id==="terminals"&&e.jobs.length>0,Pn=(e)=>`${e.id}\x00${Xr(e)}`,Gn=(e)=>{let o=c("span","dot");o.style.background=ie[e.id];let n=Xr(e)?mo("Stop all","Stop everything running in the terminal?",{kind:"terminals"}):void 0,s=c("span","count");s.dir="auto";let i=c("b","",nt[e.id]);i.dir="auto";let a=c("span","gname","",[o,i,s]),d=lt(),h=c("div","group-head foldable","",[a,dt(n),d.cpu,d.memory]);h.tabIndex=0,h.setAttribute("role","button");let E=c("div","group","",[h]);E.style.setProperty("--group-color",ie[e.id]);let g=new Map,b=e,O=(S)=>{b=S,w(s,String(S.count)),d.set(S.cpu,S.memory);let R=Se.has(S.id);h.classList.toggle("open",!R),h.setAttribute("aria-expanded",String(!R)),se(E,R?[]:Un(S),Cn,Mn,g,1)},N=()=>{if(Se.has(b.id))Se.delete(b.id);else Se.add(b.id);In(),O(b)};return h.addEventListener("click",N),h.addEventListener("keydown",(S)=>{if(S.key==="Enter"||S.key===" ")S.preventDefault(),N()}),O(e),{element:E,update:O}},Nn=(e)=>[e.pid,e.name,e.group,e.ports.join(","),e.command,e.job?.pid??"",e.job?.name??"",e.job?.title??""].join("\x00"),Dn=(e)=>{let o=e.ports.map((b)=>fr(ge,b,ke)),n=c("span","pname strong",e.name);n.dir="auto";let s=c("span","origin",Tr[e.group]);s.dir="auto";let i=c("div","title-line","",[...o,n,s]),a=e.job?mo("Stop",`Stop ${e.job.title}?`,{kind:"job",pid:e.job.pid,name:e.job.name}):void 0,d=c("div","who","",[i]),h=e.job?.title??"";if(h){let b=c("span","pdetail",h);b.dir="ltr",d.append(b)}let E=lt();E.set(e.cpu,e.memory);let g=c("div","row server","",[d,dt(a),E.cpu,E.memory]);return g.title=`pid ${e.pid}${e.command?`
${e.command}`:""}`,{element:g,update:(b)=>E.set(b.cpu,b.memory)}},$n=(e)=>{let o=c("span");o.style.background=ie[e.id],o.title=nt[e.id];let n=(s)=>{o.style.width=`${Math.min(100,s.value/Math.max(1,s.total)*100)}%`};return n(e),{element:o,update:n}},Hn=(e)=>{let o=c("span","swatch");o.style.background=ie[e.id];let n=c("span","muted");n.dir="auto";let s=c("span","value num muted"),i=c("span","value num");s.dir="auto",i.dir="auto";let a=(d)=>{w(n,` · ${d.count} ${d.count===1?"process":"processes"}`),w(s,pe(d.cpu)),w(i,te(d.memory))};return a(e),{element:c("div","legend-row","",[o,c("span","name",nt[e.id],[n]),s,i]),update:a}},Fn={"processes-unavailable":"The process list could not be read just now. OpenChamber's numbers are from the last reading that worked.","ports-unavailable":"Listening ports could not be read, so dev servers are not detected."},Oe=null,it=!1,vr,Br=[],at=null,ct=()=>{let e=Oe!==null?ur[Oe]:it?"Could not stop it. It may have ended already, or it is not something this panel stops.":Br.join(" ");we.hidden=e==="",we.classList.toggle("error",Oe!==null||it),w(we,e)};function Xn(){it=!0,clearTimeout(vr),vr=setTimeout(()=>{it=!1,ct()},6000),ct()}var Bn=new Map,Vn=new Map,jn=new Map,zn=new Map,Kn=new Map;function Vr(e){at=e;let{system:o,app:n}=e;no=n.rootPid,Nr(o.hostname),w(co,[gr(o.platform),o.arch,o.cpuModel,`up ${Sr(o.uptimeSeconds)}`].filter(Boolean).join(" · ")),w(Te,`Live · every ${io} s`),Te.classList.remove("stale"),w(ve.value,pe(o.cpu)),w(ve.side,`${o.cores} cores`),w(ve.sub,o.load?`Load ${o.load.map((a)=>a.toFixed(2)).join(" · ")}`:"All cores together"),ve.chart.update(e.history.system.cpu,100),w(Ae.value,te(o.memoryUsed)),w(Ae.side,pe(o.memoryUsed/Math.max(1,o.memoryTotal)*100)),w(Ae.sub,`of ${te(o.memoryTotal)} · ${te(Math.max(0,o.memoryTotal-o.memoryUsed))} free`),Ae.chart.update(e.history.system.memory,o.memoryTotal),w(lo,te(n.memory)),w(po,`${pe(n.cpu)} CPU`),Ir.update(e.history.app.memory,Math.max(n.memory,...e.history.app.memory)*1.15);let s=n.groups.filter((a)=>a.memory>0).map((a)=>({id:a.id,value:a.memory,total:n.memory}));se(Lr,s,(a)=>a.id,$n,Bn),se(Ur,n.groups,(a)=>a.id,Hn,Vn),w(Cr,e.servers.length>0?String(e.servers.length):""),se(ro,e.servers,Nn,Dn,jn),ro.hidden=e.servers.length===0,Mr.hidden=e.servers.length>0,se(Pr,n.groups,Pn,Gn,zn);let i=new Set(n.groups.flatMap((a)=>a.jobs.map((d)=>d.pid)));for(let a of _e)if(!i.has(a))_e.delete(a);uo.hidden=e.outside.length===0,se(Gr,e.outside,(a)=>fo(a,"other"),(a)=>Eo(a,"other"),Kn),Br=e.warnings.map((a)=>Fn[a]),ct()}var Wn=(e)=>{Oe=e,ct(),Te.textContent="Paused",Te.classList.add("stale")},Ar=!1;ge.onReady((e)=>{Ht(e,document.documentElement);let o=yr(e.locale,document.documentElement);if(document.documentElement.style.setProperty("--resource-monitor-chevron-open-angle",o==="rtl"?"-90deg":"90deg"),hr(e.locale),ke=et(window.name),Nr(at?.system.hostname??"–"),e.features?.deviceStorage===!0&&!st)st=!0,Ln();if(Ar)return;Ar=!0,{refresh:Dr}=Er(ge,so,(n)=>{Oe=null,Vr(n)},Wn)});})();
