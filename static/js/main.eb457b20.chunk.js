(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{10:function(e,t,n){e.exports={link:"Navigation_link__3qeuQ",activeLink:"Navigation_activeLink__zhd6m Navigation_link__3qeuQ"}},19:function(e,t,n){e.exports={header:"Appbar_header__YjxUc"}},20:function(e,t,n){e.exports={container:"Container_container__2PsBB"}},21:function(e,t,n){},27:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(16),i=n.n(a),s=n(7),o=(n(27),n(2)),j=n(10),u=n.n(j),l=n(1);function d(){return Object(l.jsxs)("nav",{children:[Object(l.jsx)(s.c,{exact:!0,to:"/",className:u.a.link,activeClassName:u.a.activeLink,children:"Home"}),Object(l.jsx)(s.c,{to:"/movies",className:u.a.link,activeClassName:u.a.activeLink,children:"Movies"})]})}var h=n(19),b=n.n(h);function x(){return Object(l.jsx)("header",{className:b.a.header,children:Object(l.jsx)(d,{})})}var v=n(20),O=n.n(v);function f(e){var t=e.children;return Object(l.jsx)("div",{className:O.a.container,children:t})}var p=n(15),m=n(21),_=n.n(m);function k(e){var t=e.text;return Object(l.jsx)("h1",{className:_.a.title,children:t})}var g=n(14),N=n.n(g),w=n(22),y=function(){var e=Object(w.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("8a933616dedc140a2710dab44d7240df","&page=").concat(t)).then((function(e){return e.ok?e.json():Promise.reject({error:new Error("Your request ".concat(t,"} did not return any results"))})}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(){var e=Object(o.f)().url,t=Object(c.useState)([]),n=Object(p.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(1),j=Object(p.a)(i,2),u=j[0];j[1];return Object(c.useEffect)((function(){y(u).then(a)}),[u]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{text:"Popular movies"}),r&&Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"".concat(e,"/").concat(t.id),children:t.original_title})},t.id)}))})]})}function q(){return Object(l.jsxs)(f,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,children:Object(l.jsx)(L,{})}),Object(l.jsx)(o.a,{path:"/movies",children:Object(l.jsx)(L,{})})]})]})}i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(q,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.eb457b20.chunk.js.map