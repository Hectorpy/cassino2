import{b as M,e as E,p,o as e,f as C,w as y,c as t,x as a,a as s,t as D,g as k,i as pe,j as _e,z as ve,h as b,P as Ue,D as K,F as q,d as Ae,I as Z,L as P,O as I,N as R,u as te,s as He,J,ae as Ne,Q as Ge,T as Be,v as de,af as je,ag as ze,a5 as Ee,Z as me,n as Pe,_ as We,ah as Fe}from"./bundle.d3169b93.js";import{a as N,u as Ke,$ as oe,b as X,c as ge,s as W,d as se,o as qe,e as he,i as Je,g as Oe,f as fe,h as Qe,p as Q}from"./index.63484d31.js";import{_ as Ze}from"./BackIcon.0c3788dd.js";import{_ as ye}from"./GameCard.5347132d.js";import{g as Xe,a as Ye,s as es}from"./common.32a54c00.js";import{r as ss,p as ts}from"./pay.46ebe093.js";import"./icons.ee65c48b.js";const os={key:0,class:"cdkey-modal success"},as={class:"num fs40"},ns={key:1,class:"cdkey-modal"},ls=["src"],cs=M({__name:"CdKeyModal",setup(n){const i=Ke(),_=E(()=>i.type==="cdkey"),r=p(""),d=p(!1),h=p(0),f=()=>{!r.value||(_e.loading({forbidClick:!0}),oe.post("/activity/exchange-cdkey",{cdkey:r.value}).then(([c,m])=>{c||(_e.clear(),h.value=+m.data.award_money,d.value=!0)}))};return(c,m)=>{const x=X,l=ve,u=ge;return e(),C(u,{modelValue:k(_),"onUpdate:modelValue":m[3]||(m[3]=w=>pe(_)?_.value=w:null),"destroy-on-close":""},{default:y(()=>[d.value?(e(),t("div",os,[a(x,{src:"https://oss.resourceoss.com/game001/loan/66400ae90cbb5b.png",alt:"",class:"img"}),s("div",as,"R$"+D(h.value),1),s("div",{class:"close2",onClick:m[0]||(m[0]=w=>c.$router.replace(c.$route.path))})])):(e(),t("div",ns,[a(x,{src:"https://oss.resourceoss.com/game001/loan/46400add619151.png",class:"w329 h369",alt:""}),a(l,{type:"text",modelValue:r.value,"onUpdate:modelValue":m[1]||(m[1]=w=>r.value=w),class:"input fs14",placeholder:"Por favor, insira o codigo de resgate"},null,8,["modelValue"]),s("div",{class:"btn",onClick:f}),s("img",{src:c.$imgUrl("close.png"),class:"close",alt:"",onClick:m[2]||(m[2]=w=>c.$router.replace(c.$route.path))},null,8,ls)]))]),_:1},8,["modelValue"])}}}),is=N(cs,[["__scopeId","data-v-71e5e695"]]);const rs=n=>(K("data-v-95efe6ea"),n=n(),q(),n),us={key:0,class:"webapp-wrap"},_s={class:"guide-wrap"},ds=["src"],ms=rs(()=>s("img",{src:"https://oss.resourceoss.com/game001/loan/06353c03805f96.png",alt:"",class:"guideimg"},null,-1)),ps=M({__name:"WebAppModal",setup(n){const i="standalone"in navigator&&!(navigator!=null&&navigator.standalone)&&/iphone|ipod|ipad/gi.test(navigator.platform)&&/Safari/i.test(navigator.appVersion),_=p(!1);return(r,d)=>{const h=Ue;return k(i)?(e(),t("div",us,[s("img",{class:"btn h40",src:"https://oss.resourceoss.com/game001/loan/96353bd546c3a1.gif",alt:"",onClick:d[0]||(d[0]=f=>_.value=!0)}),a(h,{modelValue:_.value,"onUpdate:modelValue":d[2]||(d[2]=f=>_.value=f),title:"",direction:"btt","show-close":!1,"with-header":!1,"custom-class":"webapp-guide-drawer"},{default:y(()=>[s("div",_s,[s("div",{class:"ta mb12",onClick:d[1]||(d[1]=f=>_.value=!1)},[s("img",{src:r.$imgUrl("close.png"),class:"h30 w30 close",alt:""},null,8,ds)]),ms])]),_:1},8,["modelValue"])])):b("",!0)}}}),vs=N(ps,[["__scopeId","data-v-95efe6ea"]]),we=Ae("notification",{state:()=>({id:"",title:"",content:""}),actions:{setState(n){typeof n=="object"&&(this.id=n.id,this.title=n.title,this.content=n.content)}}});const gs={key:0,class:"notification-wrap"},hs={class:"title"},fs={class:"b"},ys=["innerHTML"],ws=M({__name:"SysNotification",setup(n){const i=W(),_=Z();E(()=>_.path==="/"&&!_.query.modal),we();const r=E(()=>(i.popupWindow||[]).find(c=>c.status===1)||{}),d=E(()=>r.value.type==="notice"),h=()=>{i.popupWindow=i.popupWindow.filter(f=>f.type!=="notice")};return(f,c)=>{const m=X,x=ge;return e(),C(x,{modelValue:k(d),"onUpdate:modelValue":c[0]||(c[0]=l=>pe(d)?d.value=l:null),"destroy-on-close":"",onClose:h},{default:y(()=>{var l,u,w,$;return[k(d)?(e(),t("div",gs,[s("div",{class:"icon-close",onClick:h},[a(m,{src:f.$imgUrl("close.png"),alt:""},null,8,["src"])]),a(m,{class:"bg",src:"https://oss.resourceoss.com/game001/loan/7640099b09859f.png",alt:""}),s("div",hs,[s("p",fs,D((u=(l=k(r))==null?void 0:l.notice)==null?void 0:u.title),1),s("div",{class:"content",innerHTML:($=(w=k(r))==null?void 0:w.notice)==null?void 0:$.content},null,8,ys)])])):b("",!0)]}),_:1},8,["modelValue"])}}}),ks=N(ws,[["__scopeId","data-v-7b2fa4c2"]]),bs={key:0},$s=["src"],Cs={style:{"overflow-x":"scroll"}},xs={style:{width:"max-content",display:"flex"}},Ss=["src"],Ls=M({__name:"HomeChannelBanner",setup(n){const i=W();return(_,r)=>{var h;const d=P("router-link");return(h=k(i).channelConfig.list)!=null&&h.length?(e(),t("div",bs,[s("img",{src:k(i).channelConfig.title_icon,class:"h26 mb12",alt:""},null,8,$s),s("div",Cs,[s("div",xs,[(e(!0),t(I,null,R(k(i).channelConfig.list,f=>(e(),C(d,{to:`/channel/detail/${f.name}`,class:"mr10"},{default:y(()=>[s("img",{src:f.icon_h5,class:"w91 h48",alt:""},null,8,Ss)]),_:2},1032,["to"]))),256))])])])):b("",!0)}}}),Ts=n=>oe.get("/home/index",n);const ke=n=>(K("data-v-c7a95978"),n=n(),q(),n),Is={key:0,class:"new-user-recharge-reward mb16"},Rs={class:"count-down"},Ds=ke(()=>s("img",{src:"https://oss.resourceoss.com/game001/loan/663097b62261a2.png",class:"hide"},null,-1)),Vs=["src"],Ms=ke(()=>s("img",{class:"bg",src:"https://oss.resourceoss.com/game001/loan/663097b62261a2.png",alt:""},null,-1)),Us={class:"title"},As=["innerHTML"],Hs=M({__name:"RechargeCountDown",emits:["error"],setup(n,{emit:i}){const _=W();te(),Z();const r=p(!1);p(!1),p("");const d=p(),h=async()=>{var $;const[l,u]=await ts();if(l)return;const{data:w={}}=u;d.value=($=w.method_list[0])==null?void 0:$.channel},f=async()=>{se.loading({duration:0});let l;if(qe.isSafari&&(l=window.open("about:blank","_blank")),await h(),!d.value)return se.clear();const u=_.activity,w={money:u.money,channel:d.value,rechargeTag:u.rechargeTag},[$,G]=await ss(w);if($)return l==null?void 0:l.close();se.clear(),r.value=!1;const{data:{jumpUrl:V}}=G;if(window.nativeApp){location.href=V;return}if(l){l.location.href=V;return}window.open(V,"_blank")||(location.href=V)};let c;const m=He({h:"00",m:"00",s:"00"}),x=()=>{const l=_.activity.leftTime;if(l<0)return;const u=Math.floor(l/3600),w=u>9?u:"0"+u,$=Math.floor((l-u*3600)/60),G=$>9?$:"0"+$,V=l%60,U=V>9?V:"0"+V;m.h=w+"",m.m=G+"",m.s=U+"",console.log("%c [ countDown ]-127","font-size:13px; background:pink; color:#bf2c9f;",m),c=setTimeout(()=>{_.setActivityTime(_.activity.leftTime-1),x()},1e3)};return J(()=>{x()}),Ne(()=>{clearTimeout(c)}),(l,u)=>(e(),t("div",null,[k(_).activity.leftTime>0?(e(),t("div",Is,[s("img",{src:"https://oss.resourceoss.com/game001/loan/963097745ca19e.png",class:"img",alt:"",onClick:u[0]||(u[0]=w=>r.value=!0)}),s("div",Rs,D(m.h)+":"+D(m.m)+":"+D(m.s),1),Ds])):b("",!0),a(Be,{name:"gb-modal-in"},{default:y(()=>[r.value?(e(),t("div",{key:0,class:"modal-mask",onClick:u[3]||(u[3]=w=>r.value=!1)},[s("div",{class:"modal-wrap",onClick:u[2]||(u[2]=Ge(()=>{},["stop"]))},[s("img",{onClick:u[1]||(u[1]=w=>r.value=!1),src:l.$imgUrl("close.png"),class:"icon-close"},null,8,Vs),Ms,s("div",Us,[s("div",{class:"content mt10",innerHTML:k(_).activity.text},null,8,As)]),s("div",{class:"btn w200 h50",onClick:f},"\xA0")])])):b("",!0)]),_:1})]))}}),Ns=N(Hs,[["__scopeId","data-v-c7a95978"]]);const Gs=n=>(K("data-v-0f87ed36"),n=n(),q(),n),Bs={class:"recharge-activity-home-wrap"},js=Gs(()=>s("img",{class:"w80 h92",src:"https://oss.resourceoss.com/game001/loan/6633aa085b34c4.png",alt:""},null,-1)),zs=M({__name:"NewRecharge",setup(n){const i=W();return J(()=>{}),(_,r)=>{const d=P("router-link");return e(),t("div",Bs,[k(i).activity.leftTime>0?(e(),C(Ns,{key:0})):b("",!0),k(i).activityRechargeStatus?(e(),C(d,{key:1,class:"activity-recharge mobile",to:"/activity-rechargeaward"},{default:y(()=>[js]),_:1})):b("",!0)])}}}),Es=N(zs,[["__scopeId","data-v-0f87ed36"]]);const Ps=M({__name:"DownloadApp",setup(n){W();const i=he();te(),Z(),p(!1);const _=p(!1),r=E(()=>i.downloadUrl&&Je&&!_.value),d=async()=>{location.href=i.downloadUrl,await oe.get("/report/download?source="+Oe())};return J(async()=>{(await window._uni).getEnv(f=>{_.value=f.plus||window.nativeApp})}),(h,f)=>{const c=X;return k(r)?(e(),t("div",{key:0,onClick:d,class:"icon-download mobile"},[a(c,{src:h.$cdnUrl("96400988d77bef")},null,8,["src"])])):b("",!0)}}}),Ws=N(Ps,[["__scopeId","data-v-f55589c2"]]);const be=n=>(K("data-v-75474961"),n=n(),q(),n),Fs={key:0,class:"cencent-row mb20 mt15"},Ks={class:"flex-a-b mb2"},qs=be(()=>s("img",{src:"https://oss.resourceoss.com/game001/loan/563ca6d50b007c.png",class:"h26 mb10",alt:""},null,-1)),Js=be(()=>s("img",{src:"https://oss.resourceoss.com/game001/loan/8640097bb61204.png",class:"mr4 mb4 h24",alt:""},null,-1)),Os={class:"game-row"},Qs=M({__name:"RecentRow",setup(n){const i=fe();Z();const _=p(!1),r=p([]),d=async()=>{_.value=!0;const[h,f]=await Xe();_.value=!1,!h&&(r.value=f.data.gameList,console.log("%c [ gameList.value ]-19","font-size:13px; background:pink; color:#bf2c9f;",r.value))};return J(()=>{i.sessionid&&d()}),(h,f)=>{const c=P("router-link"),m=ye;return r.value.length?(e(),t("div",Fs,[s("div",Ks,[qs,a(c,{to:"/recentgames",class:"flex-a-j"},{default:y(()=>[Js]),_:1})]),s("div",Os,[(e(!0),t(I,null,R(r.value,(x,l)=>(e(),t("div",{class:"game-item w46 mr10",key:l},[a(m,{class:"icon",data:x},null,8,["data"])]))),128))])])):b("",!0)}}}),Zs=N(Qs,[["__scopeId","data-v-75474961"]]);const $e=n=>(K("data-v-521b90e4"),n=n(),q(),n),Xs={class:"home-page-wrap pl15 pr15 pb20"},Ys={class:"home-header"},et=["onClick"],st={class:"search-bar"},tt={key:0,class:"search-reault"},ot={class:"reault-container"},at={key:0,class:""},nt={class:"ml20"},lt={key:1,class:"ta mt20",style:{height:"100%"}},ct={class:"category-row flex-a spa h68 mt8 br10"},it=["onClick"],rt={key:0,class:"original-wrap mt16"},ut={key:1,class:""},_t={key:0,class:"flex-a-b mb12"},dt=["src"],mt=["onClick"],pt=$e(()=>s("img",{src:"https://oss.resourceoss.com/game001/loan/8640097bb61204.png",class:"mr4 mb4 h24",alt:""},null,-1)),vt=[pt],gt={key:1,class:"original-wrap mt10"},ht={key:1,class:""},ft={key:0,class:"flex-a mb12"},yt={class:"fs15 ml4 b"},wt={key:1,class:"flex-a mb12"},kt=["src"],bt={class:"fs15 ml4 b"},$t={key:2,class:""},Ct={class:"flex-a-b mb12"},xt={class:"flex-a"},St=["src"],Lt={class:"fs15 ml4 b"},Tt=["onClick"],It=$e(()=>s("img",{src:"https://oss.resourceoss.com/game001/loan/763ca66a372197.png",class:"mr4 mb4 h24",alt:""},null,-1)),Rt=[It],Dt={key:3,class:"ta mt40"},Vt={key:4,class:"ta mt10"},Mt=M({__name:"Home",setup(n){te(),fe(),he(),Qe();const i=W(),_=p(!0),r=p(""),d=p(!1),h=p([]),f=E(()=>{var v;return((v=i.labelList)==null?void 0:v.length)>5?i.labelList.filter(g=>g.id+""!="2"):i.labelList}),c=p(1),m=p(!0),x=p(),l=p([]),u=p([]),w=p(),$=p([]),G=p(1),V=async()=>{var S;_.value=!0;const[v,g]=await es(r.value);_.value=!1,!v&&(h.value=((S=g.data)==null?void 0:S.gameList)||[])};de(r,(v,g,S)=>{if(h.value=[],!v)return;let L=setTimeout(V,500);S(()=>{clearTimeout(L)})}),de(c,async v=>{var O;if(console.log("%c [ activeCategory ]-57","font-size:13px; background:pink; color:#bf2c9f;",v),G.value=1,l.value=[],U.value=null,+v!=3&&(Y.value=null),!v)return;if(v!=1){const ee=((O=document.querySelector(".home-header"))==null?void 0:O.clientHeight)||0;window.scrollTo({top:ee+0,behavior:"smooth"})}m.value=!0;const[g,S]=await Ye(v,Y.value);if(c.value!==v||(m.value=!1,g))return;const L=S.data;x.value=L,w.value=L.showType,$.value=L.groupTab||[],L.showType===1||(u.value=L.gameList||[],l.value=u.value.slice(0,12))});const U=p(),Ce=v=>{U.value=v,u.value=v.gameList||[],l.value=u.value.slice(0,12)},Y=p(),xe=(v,g)=>{Y.value=v,c.value=g},Se=v=>{!v||(location.href=v)},Le=()=>{G.value++,l.value=u.value.slice(0,12*G.value)},Te=p(!1);return J(async()=>{i.labelList[0]&&(c.value=i.labelList[0].id),Ts().then(([,v])=>{var S;Te.value=!1;const g=v.data;(S=g==null?void 0:g.labelList)==null||S.map(L=>{Q(L.img),Q(L.default_img),Q(L.img_pc),Q(L.default_img_pc)}),i.setHomeState(g),we().setState(g.notice),c.value=i.labelList[0].id})}),(v,g)=>{var le,ce,ie,re;const S=X,L=P("van-swipe-item"),O=P("van-swipe"),ee=ve,ae=P("router-link"),B=ye,j=je,z=ze,Ie=Ls,ne=Ze,Re=ks,De=vs,Ve=is,Me=Ee;return e(),t("div",Xs,[s("div",Ys,[a(O,{class:"carousel",autoplay:3e3},{default:y(()=>[(e(!0),t(I,null,R(k(i).banner,(o,T)=>(e(),C(L,{key:T},{default:y(()=>[s("div",{onClick:A=>Se(o.url),target:"_blank",class:"carousel-item"},[a(S,{src:o.img_h5,fit:"cover",class:"carousel-img"},null,8,["src"])],8,et)]),_:2},1024))),128))]),_:1}),s("div",st,[a(ee,{modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=o=>r.value=o),class:"search-input search-input-h5",size:"large",placeholder:"Please Input","prefix-icon":k(Fe),onFocus:g[1]||(g[1]=o=>d.value=!0),onBlur:g[2]||(g[2]=o=>d.value=!1)},null,8,["modelValue","prefix-icon"]),r.value?(e(),t("div",tt,[me((e(),t("div",ot,[(le=h.value)!=null&&le.length?(e(),t("div",at,[(e(!0),t(I,null,R(h.value,(o,T)=>(e(),C(ae,{to:`/game/${o.uri}`,class:"result-item-wrap",key:o.id},{default:y(()=>[a(S,{src:o.img,class:"game-img"},null,8,["src"]),s("div",nt,[s("div",null,D(o.name),1)])]),_:2},1032,["to"]))),128))])):(e(),t("div",lt,"no data"))])),[[Me,_.value]])])):b("",!0)])]),s("div",ct,[(e(!0),t(I,null,R(k(f),(o,T)=>(e(),t("div",{class:Pe(["cate-item",{active:c.value===o.id}]),key:T,onClick:A=>c.value=o.id},[a(S,{class:"icon",src:c.value===o.id?o.img:o.default_img},null,8,["src"])],10,it))),128))]),me(a(Zs,null,null,512),[[We,c.value==1]]),c.value==1?(e(),t("div",rt,[(ce=k(i).labelList)!=null&&ce.length?(e(),t("div",ut,[(e(!0),t(I,null,R(k(i).labelList.slice(1),o=>{var T,A;return e(),t("div",{class:"mb10",key:o.id},[(T=o.gameList)!=null&&T.length?(e(),t("div",_t,[s("img",{src:o.cate_img,class:"h26",alt:""},null,8,dt),s("div",{onClick:H=>c.value=o.id,class:"flex-a-j"},vt,8,mt)])):b("",!0),(A=o.channelList)!=null&&A.length?(e(),C(z,{key:1,gutter:15,class:"list-wrap"},{default:y(()=>[(e(!0),t(I,null,R(o.channelList,(H,F)=>(e(),C(j,{md:8,sm:8,xs:8,class:"list-item-wrap",key:F},{default:y(()=>[a(B,{data:H,"custom-click":"",onClick:ue=>xe(H.channel,o.id)},null,8,["data","onClick"])]),_:2},1024))),128))]),_:2},1024)):(e(),C(z,{key:2,gutter:15,class:"list-wrap"},{default:y(()=>{var H;return[(e(!0),t(I,null,R((H=o.gameList)==null?void 0:H.slice(0,6),(F,ue)=>(e(),C(j,{md:8,sm:8,xs:8,class:"list-item-wrap",key:ue},{default:y(()=>[a(B,{data:F},null,8,["data"])]),_:2},1024))),128))]}),_:2},1024))])}),128)),a(Ie)])):(e(),C(z,{key:0,gutter:10,class:"list-wrap"},{default:y(()=>[(e(),t(I,null,R(6,(o,T)=>a(j,{md:8,sm:8,xs:8,class:"list-item-wrap",key:T},{default:y(()=>[a(B)]),_:2},1024)),64))]),_:1}))])):b("",!0),c.value&&c.value!=1?(e(),t("div",gt,[m.value?(e(),C(z,{key:0,gutter:10,class:"list-wrap"},{default:y(()=>[(e(),t(I,null,R(12,o=>a(j,{md:8,sm:8,xs:8,class:"list-item-wrap",key:o},{default:y(()=>[a(B)]),_:2},1024)),64))]),_:1})):l.value.length?(e(),t("div",ht,[U.value?(e(),t("div",ft,[a(ne,{onClick:g[3]||(g[3]=()=>{U.value=null,l.value=[]})}),s("span",yt,D(U.value.name),1)])):b("",!0),(re=(ie=x.value)==null?void 0:ie.channelInfo)!=null&&re.name?(e(),t("div",wt,[a(ne,{onClick:g[4]||(g[4]=()=>{c.value=1})}),s("img",{src:x.value.channelInfo.icon_h5,class:"h26 ml10",alt:""},null,8,kt),s("span",bt,D(x.value.channelInfo.name),1)])):b("",!0),a(z,{gutter:10,class:"list-wrap"},{default:y(()=>[(e(!0),t(I,null,R(l.value,(o,T)=>(e(),C(j,{md:8,sm:8,xs:8,class:"list-item-wrap",key:T},{default:y(()=>[a(B,{data:o},null,8,["data"])]),_:2},1024))),128))]),_:1})])):w.value===1&&$.value.length?(e(),t("div",$t,[(e(!0),t(I,null,R($.value,(o,T)=>(e(),t("div",{class:"mb10",key:T},[s("div",Ct,[s("div",xt,[s("img",{src:o.icon_h5,class:"h26",alt:""},null,8,St),s("span",Lt,D(o.name),1)]),s("div",{class:"flex-a-j",onClick:A=>Ce(o)},Rt,8,Tt)]),a(z,{gutter:15,class:"list-wrap"},{default:y(()=>{var A;return[(e(!0),t(I,null,R((A=o.gameList)==null?void 0:A.slice(0,3),(H,F)=>(e(),C(j,{md:8,sm:8,xs:8,class:"list-item-wrap",key:F},{default:y(()=>[a(B,{data:H},null,8,["data"])]),_:2},1024))),128))]}),_:2},1024)]))),128))])):(e(),t("div",Dt,"No Data")),!m.value&&l.value.length&&l.value.length<u.value.length?(e(),t("div",Vt,[s("div",null," Displaying "+D(l.value.length)+" of "+D(u.value.length)+" games ",1),s("div",{class:"load-more mt10",onClick:Le},"Ver mais")])):b("",!0)])):b("",!0),a(Ws),a(ae,{to:"/contact",class:"icon-kefu"},{default:y(()=>[a(S,{src:v.$cdnUrl("363ca6e4fe2dad")},null,8,["src"])]),_:1}),a(Es,{data:k(i).activity},null,8,["data"]),a(Re),a(De),a(Ve)])}}}),zt=N(Mt,[["__scopeId","data-v-521b90e4"]]);export{zt as default};