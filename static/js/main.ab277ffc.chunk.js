(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(5),b=c(2),i=(c(13),c(14),c(1)),j=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(i.jsx)("div",{className:"navbar-menu",children:Object(i.jsxs)("div",{className:"navbar-start",children:[Object(i.jsx)(n.b,{className:"navbar-item isActive",to:"/",children:"Home"}),Object(i.jsx)(n.b,{className:"navbar-item isActive",to:"/tabs",children:"Tabs"})]})})}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)(b.b,{})})]})},l=function(){return Object(i.jsx)("div",{className:"HomePage",children:Object(i.jsx)("h1",{className:"title",children:"Home page"})})},r=c(4),d=c(0),o=function(e){var t=e.tabs,c=Object(d.useState)(null),a=Object(r.a)(c,2),s=a[0],j=a[1],l=Object(b.i)().tabId;return Object(d.useEffect)((function(){var e=t.find((function(e){return e.id.split("-")[1]===l}));e&&j(e)}),[l]),Object(i.jsxs)("div",{className:"TabsPage",children:[s?Object(i.jsx)("h1",{className:"title",children:"Tabs page ".concat(s.id.split("-")[1])}):Object(i.jsx)("h1",{className:"title",children:"Select tab"}),Object(i.jsx)("div",{className:"tabs is-boxed",children:Object(i.jsx)("ul",{children:t.map((function(e){var t=e.id.split("-")[1];return Object(i.jsx)("li",{"data-cy":"tab",className:l===t?"is-active":"",children:Object(i.jsx)(n.b,{className:"link",to:"/tabs/".concat(t),children:"Tab ".concat(t)})},t)}))})}),s?Object(i.jsx)("div",{className:"block","data-cy":"tab-content",children:s.content}):Object(i.jsx)("div",{className:"block","data-cy":"tab-content",children:"Please select a tab"})]})},x=function(){return Object(i.jsx)("div",{className:"HomePage",children:Object(i.jsx)("h1",{className:"title",children:"Page Not Found"})})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(b.e,{children:Object(i.jsxs)(b.c,{path:"/",element:Object(i.jsx)(j,{}),children:[Object(i.jsx)(b.c,{index:!0,element:Object(i.jsx)(l,{})}),Object(i.jsxs)(b.c,{path:"tabs",children:[Object(i.jsx)(b.c,{index:!0,element:Object(i.jsx)(o,{tabs:h})}),Object(i.jsx)(b.c,{path:":tabId",element:Object(i.jsx)(o,{tabs:h})})]}),Object(i.jsx)(b.c,{path:"/home",element:Object(i.jsx)(b.a,{to:"/",replace:!0})}),Object(i.jsx)(b.c,{path:"*",element:Object(i.jsx)(x,{})})]})})})};s.a.render(Object(i.jsx)(n.a,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ab277ffc.chunk.js.map