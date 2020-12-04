(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(10),i=a(36),s=a(176);function m(e){var t=e.component;return JSON.parse(localStorage.getItem("userToken"))?r.a.createElement(l.b,{exact:!0,path:e.path,component:t}):(alert("You need to login first"),r.a.createElement(l.a,{to:"/"}))}var u=a(35),d=a(75),p=a(79),E=[],f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RETRIEVE_RESULTS":return Object(p.a)(t.results);default:return e}},g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,h=a(20),b=a.n(h),v=a(34),k=a(24),S=a(177),O=a(19),w=a.n(O),x=function(e){return{type:"RETRIEVE_RESULTS",results:e}};a(117);var y=Object(i.b)()((function(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),c=a[0],o=a[1],l=function(){var t=Object(v.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("".concat("https://cors-anywhere.herokuapp.com/","https://newsapi.org/v2/everything?q=").concat(c,"&apiKey=").concat("9745572f40514072a6d9269270497038")).then((function(t){e.dispatch(x(t.data.articles))})).catch((function(e){throw e}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("form",{className:"root",onSubmit:function(t){t.preventDefault(),l(),e.onSubmit()}},r.a.createElement(S.a,{placeholder:"Search with key words, like 'Bitcoin'",className:"userInput",variant:"outlined",onChange:function(e){o(e.target.value.trim())}}))})),N=a(163),j=a(164),T=Object(N.a)((function(e){return{landing:{height:"93.3vh",padding:"70px 0"},topTxt:{marginTop:"9rem",fontSize:"4rem",marginBottom:"2rem"}}}));var C=function(e){var t=T();return r.a.createElement("div",{className:t.root},r.a.createElement("section",{className:t.landing},r.a.createElement(j.a,{container:!0,align:"center"},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement("h1",{className:t.topTxt},"Search worldwide news"),r.a.createElement(y,{onSubmit:function(){e.history.push("/results")}})))))},I=a(46),R=a(162),_=a(165),A=a(166),L=a(180),J=a(167),B=a(168),F=a(169);function U(e){return r.a.createElement("div",null,r.a.createElement(R.a,{className:"root"},e.data.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{alignItems:"flex-start",key:t.url},r.a.createElement(A.a,null,r.a.createElement(L.a,{className:"avatar",alt:"Remy Sharp",src:"".concat(t.urlToImage)})),r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(J.a,{primary:t.title,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{component:"span",variant:"body2",className:"inline",color:"textPrimary"},t.author)," ",r.a.createElement("br",null),r.a.createElement(I.a,{component:"span",variant:"body1",className:"inline",color:"textPrimary"},t.description)," ",r.a.createElement("br",null),t.content,r.a.createElement("br",null))})),r.a.createElement(B.a,{onClick:Object(v.a)(b.a.mark((function a(){var n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(n=JSON.parse(localStorage.getItem("userToken")))){a.next=11;break}if(1!==e.action){a.next=7;break}return a.next=5,w.a.post("/articles",{user:n.tokenUserId,title:t.title,description:t.description,content:t.content,url:t.url,image:t.image,author:t.author,pubilshedAt:t.pubilshedAt}).then((function(e){alert(e.data)})).catch((function(e){throw e}));case 5:a.next=9;break;case 7:return a.next=9,w.a.delete("/articles",{data:{id:t._id}}).then((function(t){alert(t.data),e.refresh()})).catch((function(e){throw e}));case 9:a.next=12;break;case 11:alert("You need to login first");case 12:case"end":return a.stop()}}),a)})))},1===e.action?"Save":"Delete"),r.a.createElement(B.a,{hidden:!0,value:e.action})),r.a.createElement(F.a,{variant:"inset",component:"li"}))}))))}var P=a(170);a(73);var D=Object(i.b)((function(e){return{results:e.results}}))((function(e){return r.a.createElement("div",{className:"root"},r.a.createElement(j.a,{container:!0},r.a.createElement(j.a,{item:!0,xs:12,className:"searchBox"},r.a.createElement(y,{onSubmit:function(){}}),!e.results[0]&&r.a.createElement(P.a,{className:"progress"})),r.a.createElement(j.a,{item:!0,className:"list"},r.a.createElement(U,{data:e.results,action:1}))))}));function W(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],c=t[1],o=JSON.parse(localStorage.getItem("userToken")),l=function(){w.a.get("/articles",{params:{user:o.tokenUserId}}).then((function(e){c(e.data)}))};return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("div",{className:"root"},r.a.createElement("div",null,r.a.createElement(j.a,{container:!0},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement("h1",{style:{marginLeft:"1.5rem"}}," ","Saved articles"," ")),r.a.createElement(j.a,{item:!0,className:"list"},!a[0]&&r.a.createElement("h3",{style:{marginLeft:"2rem"}},"No item saved"),r.a.createElement(U,{data:a,refresh:function(){l()},action:0})))))}var z=a(16),V=Object(z.a)(),M=a(41),X=a(171),Y=a(172),q=a(179),G=a(175),K=a(174),H=a(173),Q=(a(118),Object(N.a)((function(e){return{root:{marginBottom:"-4rem"},appBar:{background:"#FAFAFA"},logo:{flexGrow:1,fontSize:"1.3rem",color:"#000"},addAnnons:{},rightLinks:{marginRight:e.spacing(1),color:"#000"}}})));function Z(e){var t=Q(),a=Object(n.useState)(!1),c=Object(k.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(""),s=Object(k.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(""),p=Object(k.a)(d,2),E=p[0],f=p[1],g=Object(n.useState)(!1),h=Object(k.a)(g,2),O=h[0],x=h[1],y=Object(n.useState)(""),N=Object(k.a)(y,2),j=N[0],T=N[1],C=function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)},R=function(){var e=JSON.parse(localStorage.getItem("userToken")).accessToken;e&&(w.a.defaults.headers.common.authorization=e)};return r.a.createElement("div",{className:t.root},r.a.createElement(X.a,{className:t.appBar,position:"static",elevation:0},r.a.createElement(Y.a,null,r.a.createElement(I.a,{className:t.logo},r.a.createElement(M.a,{className:t.logo,to:"/"},"SasMiya"))," ",r.a.createElement(I.a,{className:t.addAnnons},r.a.createElement(M.a,{className:t.rightLinks,to:"/dashboard"}," ","Saved news"," "),r.a.createElement(B.a,{className:t.rightLinks,variant:"text",onClick:function(){if(JSON.parse(localStorage.getItem("userToken")))return localStorage.removeItem("userToken"),window.location.href="/";l(!0)}},JSON.parse(localStorage.getItem("userToken"))?"logout":"login"),r.a.createElement(q.a,{open:o,onClose:function(){l(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(H.a,{id:"form-dialog-title"},r.a.createElement(B.a,{onClick:function(){return x(!1)},variant:"text"}," ","Login"," "),r.a.createElement(B.a,{variant:"text",onClick:function(){return x(!0)}}," ","Register"," ")),!O&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement(K.a,null,r.a.createElement(S.a,{autoFocus:!0,margin:"dense",name:"email",label:"Email Address",type:"email",fullWidth:!0,onChange:function(e){u(e.target.value.trim())}}),r.a.createElement(S.a,{margin:"dense",name:"pass",label:"Password",type:"password",style:{marginBottom:"2rem"},fullWidth:!0,onChange:function(e){f(e.target.value.trim())}}),j&&r.a.createElement(I.a,{color:"secondary",variant:"subtitle2"},j),r.a.createElement("br",null),r.a.createElement(I.a,{variant:"subtitle2"},"Don't have an account? Register, please"," ")),r.a.createElement(G.a,null,r.a.createElement(B.a,{onClick:function(){l(!1)},color:"primary"},"Cancel"),r.a.createElement(B.a,{onClick:Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m||!E){e.next=5;break}return e.next=3,w.a.get("/users",{params:{email:m,password:E}}).then((function(e){if(200===e.status){var t=e.data.accessToken,a=C(t),n={accessToken:t,tokenUserId:a.id,tokenUserEmail:a.email};return localStorage.setItem("userToken",JSON.stringify(n)),R(),l(!1)}})).catch((function(e){e&&T("Something went wrong with your credentials.\n                                                                     Please, check again")}));case 3:e.next=6;break;case 5:T("Email and password must be provided");case 6:case"end":return e.stop()}}),e)}))),color:"primary"},"Login"))," "),O&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement(K.a,null,r.a.createElement(S.a,{autoFocus:!0,margin:"dense",name:"email",label:"Email Address",type:"email",fullWidth:!0,onChange:function(e){u(e.target.value.trim())}}),r.a.createElement(S.a,{margin:"dense",name:"pass",label:"Password",type:"password",style:{marginBottom:"2rem"},fullWidth:!0,onChange:function(e){f(e.target.value.trim())}})),r.a.createElement(G.a,null,r.a.createElement(B.a,{onClick:function(){l(!1)},color:"primary"},"Cancel"),r.a.createElement(B.a,{onClick:Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m||!E){e.next=3;break}return e.next=3,w.a.post("/users",{email:m,password:E}).then((function(e){200===e.status&&(alert("Account created"),x(!1))})).catch((function(e){if(e)throw e}));case 3:case"end":return e.stop()}}),e)}))),color:"primary"},"Login"))," "))))),r.a.createElement(Y.a,null))}a(119);var $=Object(u.e)(Object(u.c)({results:f}),g(Object(u.a)(d.a)));function ee(){return r.a.createElement(i.a,{store:$},r.a.createElement(s.a,null),r.a.createElement(l.c,{history:V},r.a.createElement(Z,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,component:C}),r.a.createElement(l.b,{path:"/results",exact:!0,component:D}),r.a.createElement(m,{exact:!0,path:"/dashboard",component:W}))))}o.a.render(r.a.createElement(ee,null),document.getElementById("root"))},73:function(e,t,a){},89:function(e,t,a){e.exports=a(120)}},[[89,1,2]]]);
//# sourceMappingURL=main.eb6902e0.chunk.js.map