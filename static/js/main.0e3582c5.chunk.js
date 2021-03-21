(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(7),i=n.n(o),r=(n(15),n(9)),s=n(2),l=n(3),b=n(5),u=n(4),h=(n(16),n(19)),d=n(8),m=n(0),j=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(d.a)({},c,a))},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Phonebook_block",children:Object(m.jsxs)("form",{className:"Phonebook_form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("p",{children:"Name"}),Object(m.jsx)("label",{id:Object(h.a)(),children:Object(m.jsx)("input",{value:this.state.name,onChange:this.handleChange,name:"name",id:Object(h.a)(),placeholder:"Name"})}),Object(m.jsx)("p",{children:"Number"}),Object(m.jsx)("label",{id:Object(h.a)(),children:Object(m.jsx)("input",{value:this.state.number,onChange:this.handleChange,name:"number",id:Object(h.a)(),placeholder:"Number"})}),Object(m.jsx)("button",{className:"Phonebook_block_button",type:"submit",children:"Add contacts"})]})})}}]),n}(a.a.Component),f=function(e){var t=e.filter,n=e.changeFilter;return Object(m.jsxs)("div",{className:"Phonebook_block",children:[Object(m.jsx)("p",{children:"Find contacts by name"}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text ",value:t,onChange:n})})]})},O=function(e){var t=e.contacts,n=e.deleteItemPhonebook;return Object(m.jsxs)("div",{className:"Phonebook_block",children:[Object(m.jsx)("p",{children:"ContactList"}),Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsx)("li",{className:"Phonebook_block_item",children:Object(m.jsxs)("p",{children:[e.name," ",e.number,Object(m.jsx)("button",{onClick:function(){return n(e.id)},className:"Phonebook_block_button",children:"delete"})]})},e.id)}))})]})},p=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addItemPhonebook=function(t){if(""!==t.name&&""!==t.number){var n=!1;if(e.state.contacts.forEach((function(e){e.name===t.name&&(n=!0)})),n)alert(t.name+" is alredy in contacts");else{var c={id:Object(h.a)(),name:t.name,number:t.number};e.setState((function(e){return{contacts:[c].concat(Object(r.a)(e.contacts))}}))}}else alert("need name & number")},e.deleteItemPhonebook=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("contacts")&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"componentDidUpdate",value:function(e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"Phonebook",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(j,{onSubmit:this.addItemPhonebook}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(f,{filter:n,changeFilter:this.changeFilter}),Object(m.jsx)(O,{contacts:c,deleteItemPhonebook:this.deleteItemPhonebook})]})})}}]),n}(a.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),k()}},[[18,1,2]]]);
//# sourceMappingURL=main.0e3582c5.chunk.js.map