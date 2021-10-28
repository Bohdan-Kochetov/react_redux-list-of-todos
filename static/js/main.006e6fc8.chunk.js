(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(5),o=c.n(s),u=c(3),i=(c(23),c(24),c(9)),a=c.n(i),l=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){if(!e.ok)throw new Error;return e.json()}))};function d(e){var t="todos";return e?(t="users/".concat(e),function(e){return l(t).then((function(t){return e({type:"userFetchDataSuccess",user:t})})).catch((function(){e({type:"userFetchDataSuccess",user:null})}))}):function(e){return l(t).then((function(t){return e({type:"todosFetchDataSuccess",todos:t})}))}}var j=c(1),b=function(){var e=Object(u.c)((function(e){return e.reducerTodos})),t=e.todosToRender,c=e.input,r=e.select,s=Object(u.b)();return Object(n.useEffect)((function(){s(d())}),[]),Object(n.useEffect)((function(){s(d())}),[r,c]),Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("div",{className:"TodoList__list-container",children:[Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){return s(function(e){return{type:"ADD_Input",input:e}}(e.target.value))}}),Object(j.jsxs)("select",{value:r,onChange:function(e){return s(function(e){return{type:"ADD_Select",select:e}}(e.target.value))},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]}),Object(j.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){var t=e.id,c=e.title,n=e.userId,r=e.completed;return Object(j.jsxs)("li",{className:a()("TodoList__item","TodoList__item--".concat(r?"checked":"unchecked")),children:[Object(j.jsxs)("label",{htmlFor:c,children:[Object(j.jsx)("input",{type:"checkbox",id:c,readOnly:!0,checked:r}),Object(j.jsx)("p",{children:c})]}),Object(j.jsx)("button",{className:"TodoList__user-button button",type:"button",onClick:function(){s(d(n)),s(function(e){return{type:"chooseUserId",userId:e}}(n))},children:"User#".concat(n)})]},t)}))})]})]})},h=(c(26),r.a.memo((function(){var e=Object(u.c)((function(e){return e.reducerTodos})).user,t=Object(u.b)();return console.log("current"),Object(j.jsx)(j.Fragment,{children:e?Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(j.jsx)("button",{className:"CurrentUser__clear button",type:"button",onClick:function(){return t({type:"chooseUserId",userId:0})},children:"Hide User"})]}):Object(j.jsx)("h3",{children:"404"})})}))),p=function(){var e=Object(u.c)((function(e){return e.reducerTodos})).userId;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:e?Object(j.jsx)(h,{}):Object(j.jsx)("h3",{children:"choose"})})})]})},O=c(4),f=c(10),m=c(11),x=c(2),_=c(12),v={todos:[],todosToRender:[],input:"",select:"all",user:null,userId:0};function y(e,t,c){var n=Object(_.a)(e);return"active"===c&&(n=n.filter((function(e){return!1===e.completed}))),"completed"===c&&(n=n.filter((function(e){return!0===e.completed}))),t&&(n=n.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),n}var N=Object(O.combineReducers)({reducerTodos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todosFetchDataSuccess":return Object(x.a)(Object(x.a)({},e),{},{todos:t.todos,todosToRender:y(e.todos,e.input,e.select)});case"userFetchDataSuccess":return Object(x.a)(Object(x.a)({},e),{},{user:t.user});case"ADD_Input":return Object(x.a)(Object(x.a)({},e),{},{input:"".concat(t.input)});case"ADD_Select":return Object(x.a)(Object(x.a)({},e),{},{select:"".concat(t.select)});case"chooseUserId":return Object(x.a)(Object(x.a)({},e),{},{userId:t.userId});default:return e}}}),T=Object(O.createStore)(N,Object(f.composeWithDevTools)(Object(O.applyMiddleware)(m.a)));T.subscribe((function(){return console.log(T.getState())}));var D=function(){return Object(j.jsx)(u.a,{store:T,children:Object(j.jsx)(p,{})})};o.a.render(Object(j.jsx)(D,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.006e6fc8.chunk.js.map