(this["webpackJsonpmessenger-clone"]=this["webpackJsonpmessenger-clone"]||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(13),c=t.n(r),o=(t(47),t(28)),m=t(88),l=t(86),i=(t(48),t(87)),u=t(83),p=t(84),d=(t(49),Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return s.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},s.a.createElement(i.a,{className:n?"message__userCard":"message__guestCard"},s.a.createElement(u.a,null,s.a.createElement(p.a,{variant:"h5",component:"h2"},!n&&s.a.createElement("div",{className:"message__Avatar"}),s.a.createElement("div",{className:"message__Username"},!n&&t.username),s.a.createElement("div",{className:"message__Message"},t.message)))))}))),g=t(27),f=t.n(g),E=f.a.initializeApp({apiKey:"AIzaSyC-zLjkpch045gWUMk11DZs-bJwHuLekUg",authDomain:"facebook-messenger-clone-8f446.firebaseapp.com",databaseURL:"https://facebook-messenger-clone-8f446.firebaseio.com",projectId:"facebook-messenger-clone-8f446",storageBucket:"facebook-messenger-clone-8f446.appspot.com",messagingSenderId:"724144878753",appId:"1:724144878753:web:78e8ea8b6d7c3295d52ce0",measurementId:"G-DD5C1EPLP5"}).firestore(),b=t(39),h=t(38),v=t.n(h),_=t(85);var w=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),u=i[0],p=i[1],g=Object(n.useState)(""),h=Object(o.a)(g,2),w=h[0],k=h[1];return Object(n.useEffect)((function(){E.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(n.useEffect)((function(){k(prompt("Please enter your name"))}),[]),s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app__header"},s.a.createElement("div",{className:"app_brand"},s.a.createElement("img",{className:"app__logo",src:"https://www.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100",alt:"logo"}),s.a.createElement("h1",null,"Messenger Clone")),s.a.createElement("h2",null,"Welcome ",s.a.createElement("strong",null,w))),s.a.createElement("form",{className:"app__form"},s.a.createElement(m.a,{className:"app__formContainer"},s.a.createElement(l.a,{className:"message-input",placeholder:"Enter a message...",value:t,onChange:function(e){return r(e.target.value)}}),s.a.createElement(_.a,{disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),E.collection("messages").add({message:t,username:w,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),r("")}},s.a.createElement(v.a,null)))),s.a.createElement(b.a,{className:"app__messages"},u.map((function(e){var a=e.id,t=e.message;return s.a.createElement(d,{key:a,username:w,message:t})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.7e78c6fc.chunk.js.map