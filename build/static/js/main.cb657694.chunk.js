(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(17),o=t.n(a),u=t(18),i=t(8),s=t(4),d=t(3),b=t.n(d);b.a.defaults.baseURL="/api/persons";var j={getAll:function(){return b.a.get("/").then((function(e){return e.data}))},add:function(e){return b.a.post("/",e).then((function(e){return e.data}))},remove:function(e){return b.a.delete("/".concat(e)).then((function(e){return e.data}))},update:function(e,n){return b.a.put("/".concat(e),n).then((function(e){return e.data}))}},f=(t(41),t(0)),h=function(e){var n=e.notification;return n.message?Object(f.jsx)("div",{className:"notification notification__".concat(n.type),children:n.message}):null},l=function(e){var n=e.searchQuery,t=e.onSearchQueryChange;return Object(f.jsxs)("div",{children:["Search for: ",Object(f.jsx)("input",{value:n,onChange:t})]})},m=function(e){return Object(f.jsxs)("form",{onSubmit:e.onFormSubmit,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:e.newName,onChange:e.newNameInputChange})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:e.newNumber,onChange:e.newNumberInputChange})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.people,t=e.onDeletePerson;return n.map((function(e){return Object(f.jsxs)("div",{children:[e.name," ",e.number," ",Object(f.jsx)("button",{onClick:function(){return t(e)},children:"delete"})]},e.id)}))},O=function(){var e=Object(c.useState)({}),n=Object(s.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),o=Object(s.a)(a,2),d=o[0],b=o[1],O=Object(c.useState)(""),v=Object(s.a)(O,2),g=v[0],x=v[1],w=Object(c.useState)(""),y=Object(s.a)(w,2),C=y[0],S=y[1],N=Object(c.useState)([]),k=Object(s.a)(N,2),I=k[0],A=k[1];Object(c.useEffect)((function(){return j.getAll().then((function(e){return A(e)}))}),[]);var D=function(e){r(e),setTimeout((function(){r({})}),3e3)},Q=function(){x(""),S("")},L=I.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(h,{notification:t}),Object(f.jsx)(l,{searchQuery:d,onSearchQueryChange:function(e){return b(e.target.value)}}),Object(f.jsx)("h3",{children:"Insert new:"}),Object(f.jsx)(m,{onFormSubmit:function(e){e.preventDefault();var n=I.find((function(e){return e.name===g}));if(n)window.confirm("".concat(g," is already added to the phonebook, replace the old phone number with a new one?"))&&j.update(n.id,Object(i.a)(Object(i.a)({},n),{},{number:C})).then((function(e){A(I.map((function(t){return t.id!==n.id?t:e}))),Q(),D({type:"success",message:"Updated ".concat(n.name)})}));else{var t={name:g,number:C};j.add(t).then((function(e){console.log(e),A([].concat(Object(u.a)(I),[e])),Q(),D({type:"success",message:"Added ".concat(e.name)})}))}},newName:g,newNumber:C,newNameInputChange:function(e){return x(e.target.value)},newNumberInputChange:function(e){return S(e.target.value)}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(p,{people:L,onDeletePerson:function(e){window.confirm("Are you sure you want to delete ".concat(e.name,"?"))&&(j.remove(e.id).catch((function(){D({type:"error",message:"".concat(e.name," was already deleted")})})),A(I.filter((function(n){return n.id!==e.id}))),D({type:"error",message:"Deleted ".concat(e.name)}))}})]})};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cb657694.chunk.js.map