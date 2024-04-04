import{d as h,o as U,a as E,r as s,g as F,c as x,_ as L,b as v,e as m,f as t,t as q,u as g,h as y,w as O,i as z,v as G,j as H,k as J,F as I,l as K,m as Q,n as W}from"./index-cCi8Yy0Y.js";const X={class:"flex justify-center px-6 py-2 text-6xl"},Y={class:"mx-4 my-4 flex justify-center"},Z=["disabled"],ee=["disabled"],te=h({__name:"AlarmInstance",props:{countdownInSecond:{type:Number,required:!1,default:5e3}},emits:["stopAlarm"],setup(_,{emit:l}){var k;const p=_,i=l;U(()=>{T()}),E(()=>{C()});let a=s(void 0),d=s(),o=p.countdownInSecond,e=s(0),u=s(""),n=s(0),c=s(),w=(k=F())==null?void 0:k.vnode.key,M=x(()=>{let r=n.value/1e3,b=Math.floor(r/(60*60)),$=Math.floor(r/60),V=Math.floor(r%60),B=String(b).padStart(2,"0"),P=String($).padStart(2,"0"),R=String(V).padStart(2,"0");return`${B}:${P}:${R}`});const S=x(()=>e.value==0);function T(){if(e.value!=0)return;c.value=new Date,c.value.setTime(c.value.getTime()+o),u.value=c.value.toString(),n.value=o;const r=100;e.value=window.setInterval(()=>{let b=new Date().getTime();n.value=c.value.getTime()-b,n.value<=0&&j()},r),d.value=0}function A(){o=c.value.getTime()-new Date().getTime(),clearInterval(e.value),e.value=0,d.value=1,f()}function C(){clearInterval(e.value),e.value=0,n.value=0,u.value="",d.value=3,f()}function j(){clearInterval(e.value),e.value=0,n.value=0,d.value=2,N()}function D(r){clearInterval(e.value),e.value=0,n.value=0,u.value="",d.value=3,f(),w&&i("stopAlarm",w.toString())}async function N(){if(a.value===void 0){const r=await L(()=>import("./bell_1-GeYJ0uP-.js"),__vite__mapDeps([]));a.value=new Audio(r.default),a.value.loop=!0,a.value.play()}}async function f(){a.value!==void 0&&(a.value.pause(),a.value=void 0)}return(r,b)=>(v(),m("div",null,[t("div",X,q(g(M)),1),t("div",Y,[t("button",{disabled:S.value,class:"mx-2 rounded-lg border-solid border-black bg-orange-200 px-6 py-2 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-15",onClick:A}," Pause ",8,Z),t("button",{disabled:!S.value,class:"mx-2 rounded-lg border-solid border-black bg-green-200 px-6 py-2 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-15",onClick:T}," Resume ",8,ee),g(a)!=null?(v(),m("button",{key:0,class:"mx-2 rounded-lg border-solid border-black bg-orange-200 px-6 py-2 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-15",onClick:f}," Stop Alarm ")):y("",!0),t("button",{class:"mx-2 rounded-lg border-solid border-black bg-red-200 px-6 py-2 hover:bg-red-500",onClick:D}," Remove ")])]))}}),le={class:"mx-4 my-4 flex justify-center"},ae=t("label",{class:"mb-2 flex justify-center text-2xl font-medium text-gray-900 dark:text-white",for:"input_time"}," Input countdown ",-1),oe={class:"flex justify-center text-2xl"},ne={class:"flex flex-wrap justify-center"},re=h({__name:"Countdown",setup(_){let l=s(0),p=()=>Math.floor(Math.random()*1e4),i=s({});x(()=>{let o=[];for(let e in i.value)o.push(e);return o.join(", ")});function a(){(isNaN(l.value)||!l.value)&&(l.value=1);let e=parseInt(l.value.toString())*1e3;i.value&&(i.value[p().toString()]={timerMillis:e})}function d(o){i.value&&delete i.value[o]}return(o,e)=>(v(),m(I,null,[t("div",le,[t("form",{onSubmit:e[1]||(e[1]=O(()=>{},["prevent"]))},[ae,t("span",oe,[z(t("input",{id:"input_time","onUpdate:modelValue":e[0]||(e[0]=u=>H(l)?l.value=u:l=u),class:"text-grey mx-2 border border-gray-300 bg-gray-50",placeholder:"5"},null,512),[[G,g(l),void 0,{number:!0}]]),J(" minutes ")])],32)]),y("",!0),t("div",{class:"mx-4 my-4 flex justify-center"},[t("button",{class:"mx-2 rounded-lg border-solid border-black bg-green-200 px-6 py-2 hover:bg-green-500",onClick:a}," Start ")]),y("",!0),t("div",ne,[(v(!0),m(I,null,K(g(i),(u,n)=>(v(),Q(te,{key:n,"countdown-in-second":u.timerMillis,onStopAlarm:d},null,8,["countdown-in-second"]))),128))])],64))}}),ue=h({__name:"TimerPage",setup(_){return(l,p)=>(v(),m("section",null,[W(re)]))}});export{ue as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
