(this["webpackJsonpTo-do List"]=this["webpackJsonpTo-do List"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),l=n.n(s),r=n(15),i=(n(27),n(2)),o=n(21),u=n(11),d=n(7),b=n(22),j=n(1);function m(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],s=n[1],l=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(a),r=Object(c.useState)(""),i=Object(d.a)(r,2),o=i[0],u=i[1],b=Object(c.useRef)(null),m=Object(c.useRef)(null),O=Object(c.useState)(!1),f=Object(d.a)(O,2),h=f[0],p=f[1];var x=Object(j.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,o),u(""),s(!1)},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{className:"todo-label",htmlFor:e.id,children:["New name for ",e.name]}),Object(j.jsx)("input",{id:e.id,className:"todo-text",type:"text",value:o,onChange:function(e){u(e.target.value)},ref:b})]}),Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){return s(!1)},children:["Cancel",Object(j.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(j.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(j.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]})]})]}),g=Object(j.jsxs)("div",{className:"stack-small",children:[Object(j.jsxs)("div",{className:h?"c-cb cb-important":"c-cb",children:[Object(j.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(j.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsxs)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},ref:m,children:["Edit ",Object(j.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(j.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(j.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(j.jsxs)("button",{type:"button",className:"btn",onClick:function(){return p(!h)},children:["Important ",Object(j.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(c.useEffect)((function(){!l&&a&&b.current.focus(),l&&!a&&m.current.focus()}),[l,a]),Object(j.jsx)("li",{className:"todo",children:a?x:g})}var O=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a&&(e.addTask(a),s(""))},children:[Object(j.jsx)("h2",{className:"label-wrapper",children:Object(j.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"What needs to be done?"})}),Object(j.jsx)("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:a,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"}),Object(j.jsx)("button",{onClick:function(){localStorage.clear(),e.setTasks([])},className:"btn btn__lg btn__danger",children:"Clear"})]})};var f=function(e){return Object(j.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:[Object(j.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("span",{className:"visually-hidden",children:" tasks"})]})},h={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},p=Object.keys(h);var x=function(e){var t=Object(c.useState)("All"),n=Object(d.a)(t,2),a=n[0],s=n[1];function l(e,t){var n=g.map((function(n){return e===n.id?Object(u.a)(Object(u.a)({},n),{},{name:t}):n}));v(n)}function r(e){var t=g.filter((function(t){return e!==t.id}));v(t)}var i=Object(c.useState)([]),x=Object(d.a)(i,2),g=x[0],v=x[1];function N(e){var t=g.map((function(t){return e===t.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}));v(t)}Object(c.useEffect)((function(){var e=localStorage.getItem("listOfTasks");e&&v(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("listOfTasks",JSON.stringify(g))}),[g]);var k=g.filter(h[a]).map((function(e){return Object(j.jsx)(m,{id:e.id,completed:e.completed,name:e.name,toggleTaskCompleted:N,deleteTask:r,editTask:l},e.id)})),y=p.map((function(e){return Object(j.jsx)(f,{name:e,isPressed:e===a,setFilter:s},e)})),C=1!==k.lenth?"tasks":"task",T="".concat(k.length," ").concat(C," tasks remaining"),S=Object(c.useRef)(null),_=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(g.length);return Object(c.useEffect)((function(){g.length-_===-1&&S.current.focus()}),[g.length,_]),Object(j.jsxs)("div",{className:"todoapp stack-large",children:[Object(j.jsx)("h1",{children:"TodoMatic"}),Object(j.jsx)(O,{addTask:function(e){var t={id:"todo-"+Object(b.a)(),name:e,completed:!1};v([].concat(Object(o.a)(g),[t]))},setTasks:v}),Object(j.jsx)("div",{className:"filters btn-group stack-exception",children:y}),Object(j.jsx)("h2",{id:"list-heading",tabIndex:"-1",ref:S,children:T}),Object(j.jsx)("ul",{className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:k})]})};var g=function(){return Object(j.jsx)("div",{className:"todoapp stack-large",children:Object(j.jsx)("h1",{children:" The About Page "})})};var v=function(){return Object(j.jsxs)("navbar",{children:[Object(j.jsx)("a",{href:"../",children:" Home Page"}),Object(j.jsx)("a",{href:"About",children:" About Page"})]})};var N=function(){return Object(j.jsx)("div",{className:"todoapp stack-large",children:Object(j.jsx)("h1",{children:" Oops! Page not found! "})})};var k=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",component:x,exact:!0}),Object(j.jsx)(i.a,{path:"/about",component:g,exact:!0}),Object(j.jsx)(i.a,{component:N})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),s(e),l(e)}))};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(k,{})})}),document.getElementById("root")),y()}},[[34,1,2]]]);
//# sourceMappingURL=main.8177f18a.chunk.js.map