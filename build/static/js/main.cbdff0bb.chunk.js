(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{25:function(e,t,a){e.exports={image:"Error_image__WW9ro",text:"Error_text__2AS4M",heading:"Error_heading__BTYP-",para:"Error_para__2lPlT",buttonerror:"Error_buttonerror__1WZvl"}},63:function(e,t,a){e.exports=a(92)},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),l=a(4),s=a(10),u=a(3),i=a(21),m=a.n(i),p=a(7),d=a.n(p),g=a(34),b=a.n(g),f=a(35),h=a.n(f);a(22).config();var E=function(e){var t="https://polar-garden-59214.herokuapp.com",a=Object(u.g)(),n=m()("btn","btn-social","btn-block",e.button),o=m()("fab",e.fab);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body shadow-decoration"},"Google"===e.text&&r.a.createElement(b.a,{clientId:"991393743477-po8509p39sss4os4otnghgq2ib7i5t6r.apps.googleusercontent.com",render:function(t){return r.a.createElement("a",{className:n,style:{color:"white"},onClick:t.onClick,disabled:t.disabled,role:"button"},r.a.createElement("i",{className:o}),"Sign In with ",e.text)},buttonText:"Login",onSuccess:function(e){console.log(e.profileObj);var n={googleId:e.profileObj.googleId,username:e.profileObj.name};d.a.post("".concat(t,"/googleregister"),n).then((function(t){!0===t.data.success?a.push({pathname:"/user",username:e.profileObj.googleId}):a.push("/error")})).catch((function(e){a.push("/error")}))},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"}),"Facebook"===e.text&&r.a.createElement(h.a,{appId:"241023217791697",fields:"name,email,picture",callback:function(e){console.log(e);var n={facebookId:e.id,username:e.name};n.facebookId&&d.a.post("".concat(t,"/facebookregister"),n).then((function(t){!0===t.data.success?a.push({pathname:"/user",username:e.id}):a.push("/error")})).catch((function(e){a.push("/error")}))},render:function(t){return r.a.createElement("a",{className:n,onClick:t.onClick,style:{color:"white"},disabled:t.disabled,role:"button"},r.a.createElement("i",{className:o}),"Sign In with ",e.text)}})))};a(22).config();var v=function(){var e=Object(u.g)(),t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),p=m[0],g=m[1];return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body shadow-decoration"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={username:o,password:p};d.a.post("".concat("https://polar-garden-59214.herokuapp.com","/locallogin"),a).then((function(t){console.log(t),!0===t.data.success?e.push({pathname:"/user",username:o}):e.push("/error")})).catch((function(t){e.push("/error")}))}},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"username"},"Username"),r.a.createElement("input",{type:"text",class:"form-control",name:"username",placeholder:"Username",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",name:"password",placeholder:"Password",value:p,onChange:function(e){g(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Login")),r.a.createElement(s.b,{to:"/register"},r.a.createElement("a",{className:"not-registered",href:""},"Not registered? Register here"))))),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h1",null,"Or,"),r.a.createElement(E,{button:"btn-google",href:"/auth/google",fab:"fa-google",text:"Google"}),r.a.createElement(E,{button:"btn-facebook",href:"/auth/facebook",fab:"fa-facebook",text:"Facebook"}))))},k=a(57),O=a.n(k);var N=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(O.a,{fontSize:"inherit"}),"Remnotes"))};var j=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Sayak China \u24d2 ",e))},w=a(20),S=a(58),x=a.n(S);a(22).config();var y=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.handleDelete(e.id);var a={username:e.username,noteToBeDeleted:{title:e.title,content:e.content}};d.a.post("".concat("https://polar-garden-59214.herokuapp.com","/delete"),a)}},r.a.createElement(x.a,null)))},C=a(44),I=a(59),_=a.n(I),D=a(110),P=a(111);a(22).config();var F=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)({title:"",content:""}),u=Object(l.a)(s,2),i=u[0],m=u[1];function p(e){var t=e.target,a=t.name,n=t.value;m((function(e){return Object(C.a)(Object(C.a)({},e),{},{[a]:n})}))}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},o&&r.a.createElement("input",{onChange:p,name:"title",placeholder:"Title",value:i.title}),r.a.createElement("textarea",{onClick:function(){c(!0)},onChange:p,name:"content",placeholder:"Take a note...",rows:o?3:1,value:i.content}),r.a.createElement(P.a,{in:o},r.a.createElement(D.a,{onClick:function(t){t.preventDefault();var a={username:e.username,title:i.title,content:i.content};d.a.post("".concat("https://polar-garden-59214.herokuapp.com","/create"),a),e.handleClick(i),m({title:"",content:""})}},r.a.createElement(_.a,null)))))};var T=function(){var e=m()("logout","btn","btn-outline-dark");return r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{type:"submit",className:e,onClick:function(){return localStorage.removeItem("username")}},"Log Out")))},U=a(25),L=a.n(U);var G=function(){return r.a.createElement("div",null,r.a.createElement("aside",null,r.a.createElement("img",{className:L.a.image,src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png",alt:"Error Image"})),r.a.createElement("main",{className:L.a.text},r.a.createElement("h1",{className:L.a.heading},"Sorry!"),r.a.createElement("p",{className:L.a.para},"Either you aren't cool enough to visit this page(Wrong credentials) or it doesn't exist ",r.a.createElement("em",null,". . . like your social life.")),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:L.a.buttonerror},"Click here to login")),r.a.createElement(s.b,{to:"/register"},r.a.createElement("button",{className:L.a.buttonerror},"Click here to register"))))};a(22).config();var R=function(){var e=Object(u.h)(),t=Object(n.useState)(),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)([]),i=Object(l.a)(s,2),m=i[0],p=i[1];function g(e){p((function(t){return t.filter((function(t,a){return a!==e}))}))}return Object(n.useEffect)((function(){null===localStorage.getItem("username")&&e.username?(localStorage.setItem("username",e.username),c(e.username)):c(localStorage.getItem("username"))})),Object(n.useEffect)((function(){console.log(o),d.a.get("".concat("https://polar-garden-59214.herokuapp.com","/notes"),{params:{username:o}}).then((function(e){console.log(e),console.log(e.data[0].notes),p(e.data[0].notes)})).catch((function(e){console.log(e)}))}),[e,o]),r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(F,{username:e.username,handleClick:function(e){p((function(t){return[].concat(Object(w.a)(t),[{title:e.title,content:e.content}])}))}}),m&&m.map((function(t,a){return r.a.createElement(y,{username:e.username,key:a,title:t.title,id:a,content:t.content,handleDelete:g})})))};a(22).config();var W=function(e){var t="https://polar-garden-59214.herokuapp.com",a=Object(u.g)(),n=m()("btn","btn-social","btn-block",e.button),o=m()("fab",e.fab);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body shadow-decoration"},"Google"===e.text&&r.a.createElement(b.a,{clientId:"991393743477-po8509p39sss4os4otnghgq2ib7i5t6r.apps.googleusercontent.com",render:function(t){return r.a.createElement("a",{className:n,style:{color:"white"},onClick:t.onClick,disabled:t.disabled,role:"button"},r.a.createElement("i",{className:o}),"Sign Up with ",e.text)},buttonText:"Login",onSuccess:function(e){console.log(e.profileObj);var n={googleId:e.profileObj.googleId,username:e.profileObj.name};d.a.post("".concat(t,"/googleregister"),n).then((function(t){!0===t.data.success?a.push({pathname:"/user",username:e.profileObj.googleId}):a.push("/error")})).catch((function(e){a.push("/error")}))},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"}),"Facebook"===e.text&&r.a.createElement(h.a,{appId:"241023217791697",fields:"name,email,picture",callback:function(e){console.log(e);var n={facebookId:e.id,username:e.name};n.facebookId&&d.a.post("".concat(t,"/facebookregister"),n).then((function(t){!0===t.data.success?a.push({pathname:"/user",username:e.id}):a.push("/error")})).catch((function(e){a.push("/error")}))},render:function(t){return r.a.createElement("a",{className:n,onClick:t.onClick,style:{color:"white"},disabled:t.disabled,role:"button"},r.a.createElement("i",{className:o}),"Sign Up with ",e.text)}})))};a(22).config();var B=function(){var e=Object(u.g)(),t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),p=m[0],g=m[1];return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null,"Register"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body shadow-decoration"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={username:o,password:p};d.a.post("".concat("https://polar-garden-59214.herokuapp.com","/localregister"),a).then((function(t){!0===t.data.success?e.push({pathname:"/user",username:o}):e.push("/error")})).catch((function(t){e.push("/error")}))}},r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"username"},"Username"),r.a.createElement("input",{type:"type",class:"form-control",name:"username",placeholder:"Username",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",name:"password",placeholder:"Password",value:p,onChange:function(e){g(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Signup")),r.a.createElement(s.b,{to:"/"},r.a.createElement("a",{className:"not-registered",href:""},"Already Registered? Click here to login"))))),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h1",null,"Or,"),r.a.createElement(W,{button:"btn-google",href:"/auth/google",fab:"fa-google",text:"Google"}),r.a.createElement(W,{button:"btn-facebook",href:"/auth/facebook",fab:"fa-facebook",text:"Facebook"}))))};var q=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){null===localStorage.getItem("username")?o(!1):o(!a)}),[a]),r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(s.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},a?r.a.createElement(u.a,{to:"/user"}):r.a.createElement(v,null)),r.a.createElement(u.b,{path:"/user",component:R}),r.a.createElement(u.b,{path:"/register",exact:!0,component:B}),r.a.createElement(u.b,{path:"/error",exact:!0,component:G}))),r.a.createElement(j,null))};c.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.cbdff0bb.chunk.js.map