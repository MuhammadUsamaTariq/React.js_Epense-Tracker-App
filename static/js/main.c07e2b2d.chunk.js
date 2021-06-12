(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(14),n(0));var o=function(){return Object(i.jsx)("h2",{children:"Expense Tracker"})},j=n(3),u=n(8),l=n(4),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{Transactions:e.Transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{Transactions:[t.payload].concat(Object(u.a)(e.Transactions))});default:return e}},b={Transactions:[]},O=Object(c.createContext)(b),x=function(e){var t=e.children,n=Object(c.useReducer)(d,b),r=Object(j.a)(n,2),a=r[0],s=r[1];return Object(i.jsx)(O.Provider,{value:{Transactions:a.Transactions,deleteTransaction:function(e){s({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){s({type:"ADD_TRANSACTION",payload:e})}},children:t})},h=function(){var e=Object(c.useContext)(O).Transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsxs)("h1",{children:["$",e]})]})},m=function(){var e=Object(c.useContext)(O).Transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsxs)("p",{className:"money plus",children:["$",t]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsxs)("p",{className:"money minus",children:["$",Math.abs(n).toFixed(2)]})]})]})},f=function(e){var t=e.transaction,n=Object(c.useContext)(O).deleteTransaction,r=t.amount<0?"-":"+";return Object(i.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text,"  ",Object(i.jsxs)("span",{children:[r,"$",Math.abs(t.amount)]}),Object(i.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:"x"})]})},p=function(){var e=Object(c.useContext)(O).Transactions;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{className:"list",children:e.map((function(e){return Object(i.jsx)(f,{transaction:e},e.id)}))})]})},T=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(j.a)(a,2),o=s[0],u=s[1],l=Object(c.useContext)(O).addTransaction;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e5*Math.random()),text:n,amount:+o};l(t)},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){r(e.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(e){u(e.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var v=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(x,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(T,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.c07e2b2d.chunk.js.map