(this["webpackJsonpreact-json-server"]=this["webpackJsonpreact-json-server"]||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),s=a.n(l),c=a(22),o=a(1),u=(a(30),a(31),a(8)),i=a(9),m=a(11),d=a(10),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header flexcolcenter"},r.a.createElement("section",null,r.a.createElement("article",null,r.a.createElement("h1",null,"Users Interface"),r.a.createElement("h3",null,"Interface that allows to view a list of users, search a user by username, add a new user, edit an existing user, delete a user."))))}}]),a}(r.a.Component),f=a(21),p=a(24),E=a(6),v=(a(32),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={users:[],searchName:"",userId:""},n.handleChangeState=n.handleChangeState.bind(Object(E.a)(n)),n.handleViewAll=n.handleViewAll.bind(Object(E.a)(n)),n.handleSearchForm=n.handleSearchForm.bind(Object(E.a)(n)),n.handleSubmitRegister=n.handleSubmitRegister.bind(Object(E.a)(n)),n.handleEditUser=n.handleEditUser.bind(Object(E.a)(n)),n.handleSubmitChangeUserForm=n.handleSubmitChangeUserForm.bind(Object(E.a)(n)),n.handleDeleteUser=n.handleDeleteUser.bind(Object(E.a)(n)),n.handleCancelEdit=n.handleCancelEdit.bind(Object(E.a)(n)),n}return Object(i.a)(a,[{key:"handleChangeState",value:function(e,t,a){this.setState({users:Object(p.a)(e),searchName:t,userId:a})}},{key:"handleViewAll",value:function(){var e=this;fetch("https://my-json-server.typicode.com/andreypost/db/posts").then((function(e){return e.json()})).then((function(t){e.handleChangeState(t,"","")}))}},{key:"handleSearchForm",value:function(e){var t=this;fetch("https://my-json-server.typicode.com/andreypost/db/posts").then((function(e){return e.json()})).then((function(e){var a,n=[],r=Object(f.a)(e);try{for(r.s();!(a=r.n()).done;){var l=a.value;l.username.toLowerCase()===t.state.searchName.toLowerCase()&&n.push(l)}}catch(s){r.e(s)}finally{r.f()}t.handleChangeState(n,"","")})),e.preventDefault()}},{key:"handleSubmitRegister",value:function(e){var t=this;fetch("https://my-json-server.typicode.com/andreypost/db/posts/",{method:"POST",body:JSON.stringify({username:e.target.username.value,email:e.target.email.value,address:{city:e.target.address.value,street:" ",suite:" "}}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).then((function(){return t.handleViewAll()})),e.preventDefault()}},{key:"handleEditUser",value:function(e){var t=document.getElementById("editUserForm");t.username.value=e.username,t.email.value=e.email,t.address.value=e.address.city+" "+e.address.street+" "+e.address.suite,this.handleChangeState([],"",e.id)}},{key:"handleSubmitChangeUserForm",value:function(e){var t=this;this.state.userId?(fetch("https://my-json-server.typicode.com/andreypost/db/posts/".concat(this.state.userId),{method:"PUT",body:JSON.stringify({username:e.target.username.value,email:e.target.email.value,address:{city:e.target.address.value,street:" ",suite:" "}}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).then((function(){return t.handleViewAll()})),e.target.username.value=e.target.email.value=e.target.address.value="",e.preventDefault()):e.preventDefault()}},{key:"handleDeleteUser",value:function(e){var t=this;fetch("https://my-json-server.typicode.com/andreypost/db/posts/".concat(e),{method:"DELETE"}).then((function(){return t.handleViewAll()}))}},{key:"handleCancelEdit",value:function(){var e=document.getElementById("editUserForm");e.username.value="",e.email.value="",e.address.value="",this.handleChangeState([],"","")}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"app"},r.a.createElement("div",{className:"colalignstart"},r.a.createElement("button",{onClick:function(){return e.handleViewAll()}},"VIEW ALL USERS"),r.a.createElement("form",{id:"searchByUserName",onSubmit:this.handleSearchForm,className:"flexjustbet wrap"},r.a.createElement("button",{form:"searchByUserName"},"SEARCH USER BY NAME"),r.a.createElement("input",{type:"search",name:"search",onChange:function(t){return e.handleChangeState([],t.target.value)},required:"username",value:this.state.searchName,autoComplete:"off",placeholder:"enter username"})),r.a.createElement("form",{id:"registerUser",onSubmit:function(t){return e.handleSubmitRegister(t)},className:"flexjustcenter wrap"},r.a.createElement("button",{form:"registerUser"},"REGISTER"),r.a.createElement("input",{type:"text",name:"username",required:"username",placeholder:"username",autoComplete:"off"}),r.a.createElement("input",{type:"email",name:"email",required:"email",placeholder:"email",autoComplete:"off"}),r.a.createElement("input",{type:"text",name:"address",placeholder:"address",autoComplete:"off"})),r.a.createElement("form",{id:"editUserForm",onSubmit:function(t){return e.handleSubmitChangeUserForm(t)},className:"flexjustcenter wrap"},r.a.createElement("button",{form:"editUserForm"},"EDIT"),r.a.createElement("input",{type:"text",name:"username",autoComplete:"off"}),r.a.createElement("input",{type:"email",name:"email",autoComplete:"off"}),r.a.createElement("input",{type:"text",name:"address",autoComplete:"off"}),r.a.createElement("button",{id:"cancel",onClick:function(){return e.handleCancelEdit()},className:"app__cancel"},"CANCEL"))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"USERNAME"),r.a.createElement("th",null,"EMAIL"),r.a.createElement("th",null,"ADDRESS: city, street, suite"),r.a.createElement("th",null,"EDIT"),r.a.createElement("th",null,"DELETE"))),r.a.createElement("tbody",null,this.state.users.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.email),r.a.createElement("td",null,t.address.city," ",t.address.street," ",t.address.suite),r.a.createElement("td",{onClick:function(){return e.handleEditUser(t)}},"edit"),r.a.createElement("td",{onClick:function(){return e.handleDeleteUser(t.id)}},"delete"))})))))}}]),a}(r.a.Component)),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null)}}]),a}(r.a.Component),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(v,null)),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(c.a,{basename:"/"},r.a.createElement(o.a,{exact:!0,path:"/",component:y})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c6c19e6b.chunk.js.map