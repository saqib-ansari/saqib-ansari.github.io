(this.webpackJsonpsbm=this.webpackJsonpsbm||[]).push([[0],[,,,,,,function(e,t,n){e.exports={sideNavBar:"style_sideNavBar__1gc55",sideNav_Header:"style_sideNav_Header__1ymjZ",brandBox:"style_brandBox__8_y8p",brandLogo:"style_brandLogo__DUzPW",brandName:"style_brandName__1AaQH",btnClose:"style_btnClose__3ZZxn",navList:"style_navList__Edyxc",navListNested:"style_navListNested__treNu",btnList:"style_btnList__11MWw",active:"style_active__1ZoSw",btnWithIcon:"style_btnWithIcon__av1ls",btnIcon:"style_btnIcon__XIbpl"}},function(e,t,n){e.exports={stickyReceived:"style_stickyReceived__1-xiL",stickyPaid:"style_stickyPaid__2A0zn",stickyHeader:"style_stickyHeader__2suL8",columnReceived:"style_columnReceived__1B3mh",columnPaid:"style_columnPaid__ObB2i"}},,function(e,t,n){e.exports={managePersonsBox:"style_managePersonsBox__2Oo67",personBox:"style_personBox__3eI6x",title:"style_title__2Oj1Q",editPersonTogglerBtn:"style_editPersonTogglerBtn__ieKif",searchPersonBox:"style_searchPersonBox__2CJhn",divider:"style_divider__kJexP"}},function(e,t,n){e.exports={viewContainer:"style_viewContainer__2Zns-",filterBar:"style_filterBar__3YDIN",filterIconBox:"style_filterIconBox__2_OeN",filterBarToggler:"style_filterBarToggler__Wd5pl",slideUpFilterBar:"style_slideUpFilterBar__1j3Va",viewEntriesBox:"style_viewEntriesBox__tkyX4",ViewEntriesWithFilterBar:"style_ViewEntriesWithFilterBar__1bTvz",entries:"style_entries__aElos",stickyReceived:"style_stickyReceived__1qvqk",stickyPaid:"style_stickyPaid__2spNj",alignRight:"style_alignRight__3cYoO"}},function(e,t,n){e.exports={mainContainer:"style_mainContainer__kRAvz",overlay:"style_overlay__22qP3",sideNavContainer:"style_sideNavContainer__2nk8Y",show_sideNav:"style_show_sideNav__1mlPK",subContainer:"style_subContainer__2vcMS",headerContainer:"style_headerContainer__1Jf_Q",content:"style_content__1TeKQ"}},function(e,t,n){e.exports={inputBox:"input_inputBox__20rgj",errorMessage:"input_errorMessage__YCTKP"}},,function(e,t,n){e.exports={createEntryBox:"style_createEntryBox__fiFcj",leftBox:"style_leftBox__2B3up",rightBox:"style_rightBox__10fhW",productBox:"style_productBox__rjuZk",transactionTypeBox:"style_transactionTypeBox__2GZ0I",divider:"style_divider__Iy5uu"}},function(e,t,n){e.exports={sticky:"style_sticky__3CgMz"}},function(e,t,n){e.exports={header:"style_header__2f4ar",sideBarToggler:"style_sideBarToggler__tqshy",activeScreenTitle:"style_activeScreenTitle__1rjaZ",info:"style_info__18nU8"}},,,function(e,t,n){e.exports={table:"style_table__ej9Vg",thead:"style_thead__2SsX9",tbody:"style_tbody__nTbmP"}},,function(e,t,n){e.exports={manageProductsBox:"style_manageProductsBox__2VDI4",title:"style_title__2PiLv"}},,function(e,t,n){e.exports={button:"style_button__1wOG2"}},function(e,t,n){e.exports={twoColumns:"style_twoColumns__39DA_",grow_1:"style_grow_1__6HGhV"}},function(e,t,n){e.exports={twoColumns:"style_twoColumns__JlV-p",grow_1:"style_grow_1__2q_gF"}},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),s=n.n(c),o=(n(31),n(26)),i=n(3),l=n.n(i),u=n(5),d=n(2),j=n(4),b=(n(33),n(8)),p=[{name:"productName",type:"text",label:"Product Name"},{name:"productBrand",type:"text",label:"Product Brand"},{name:"productUnits",type:"text",label:"Product Units"}],h=[{name:"personId",type:"text",label:"Person Id"},{name:"personName",type:"text",label:"Person Name"},{name:"personSurName",type:"text",label:"Person Sur Name"},{name:"personContact",type:"number",label:"Person Contact"},{name:"personAddress",type:"text",label:"Person Address"}],x=[{name:"transactionDate",type:"date",label:"Transaction Date"},{name:"person",type:"select",label:"Person"},{name:"transactionType",type:"select",label:"Transaction Type"},{name:"description",type:"textarea",label:"Description"}],f=[{name:"product",type:"select",label:"Product"},{name:"quantity",type:"number",label:"Quantity"},{name:"pricePer",type:"number",label:"Price/Per"},{name:"totalAmount",type:"number",label:"Total Amount"}],m={sales:[].concat(f,[{name:"cashReceived",type:"number",label:"CashReceived"},{name:"totalDiscount",type:"number",label:"Total Discount"},{name:"amountLeft",type:"number",label:"Amount Left"}]),purchases:[].concat(f,[{name:"cashPaid",type:"number",label:"CashPaid"},{name:"totalDiscount",type:"number",label:"Total Discount"},{name:"amountLeft",type:"number",label:"Amount Left"}]),payments:[{name:"cashPaid",type:"number",label:"CashPaid"},{name:"totalDiscount",type:"number",label:"Total Discount"}],receipts:[{name:"cashReceived",type:"number",label:"CashReceived"},{name:"totalDiscount",type:"number",label:"Total Discount"}]},O=n(18),y=n(12),v=n.n(y),_=n(0);var g=function(e){var t=e.type,n=void 0===t?"text":t,r=e.label,a=e.error,c=e.value,s=e.name,o=e.options,i=void 0===o?[]:o,l=e.boxStyle,u=e.labelStyle,j=e.inputStyle,b=e.placeholder,p=Object(O.a)(e,["type","label","error","value","name","options","boxStyle","labelStyle","inputStyle","placeholder"]);return Object(_.jsxs)("div",{className:v.a.inputBox,style:l,children:[Object(_.jsx)("label",{className:v.a.label,htmlFor:s,style:u,children:r}),"select"===n&&Object(_.jsxs)("select",Object(d.a)(Object(d.a)({className:v.a.select,style:j,name:s,id:s,value:c},p),{},{children:[Object(_.jsx)("option",{value:"",children:"select"}),i.map((function(e,t){return Object(_.jsxs)("option",{value:e,children:[" ",e," "]},e+t)}))]})),"textarea"===n&&Object(_.jsx)("textarea",Object(d.a)({name:s,style:j,placeholder:b,value:c,id:s},p)),("date"===n||"number"===n||"text"===n)&&Object(_.jsx)("input",Object(d.a)({className:v.a.input,style:j,type:n,name:s,id:s,value:c},p)),a&&Object(_.jsx)("span",{className:v.a.errorMessage,id:"".concat(s,"Error"),children:a})]})},N=function(e,t){return new Promise((function(n,r){var a=indexedDB.open(e,t);a.onsuccess=function(e){return n(e.target.result)},a.onerror=function(e){return r(e.target.result)}}))},k=function(e,t){return new Promise((function(n,r){var a=e.transaction(t,"readonly").objectStore(t).getAllKeys();a.onsuccess=function(e){return n(e.target.result)},a.onerror=function(e){return r(e.target.result)}}))},w=function(e,t,n){return new Promise((function(r,a){var c=e.transaction(t,"readonly").objectStore(t).get(n);c.onsuccess=function(e){return r(e.target.result)},c.onerror=function(e){return a(e.target.result)}}))},B=function(e,t,n,r){return new Promise((function(a,c){var s=e.transaction(t,"readonly").objectStore(t).index(n).getAll(r);s.onsuccess=function(e){return a(e.target.result)},s.onerror=function(e){return c(e.target.result)}}))},P=function(e,t){return new Promise((function(n,r){var a=e.transaction(t,"readonly").objectStore(t).getAll();a.onsuccess=function(e){return n(e.target.result)},a.onerror=function(e){return r(e.target.result)}}))},C=function(e,t,n){return new Promise((function(r,a){var c=e.transaction(t,"readwrite").objectStore(t).add(n);c.onsuccess=function(e){return r(e.target.result)},c.onerror=function(e){return a(e.target.error)}}))},S=indexedDB.open("sbm",1);function T(e,t){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("sbm",1);case 2:return r=e.sent,e.next=5,C(r,n,t);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(l.a.mark((function e(t){var n,r,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.storeName,r=t.indexName,a=t.indexValue,e.next=3,N("sbm",1);case 3:return c=e.sent,e.next=6,B(c,n,r,a);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return R.apply(this,arguments)}function R(){return(R=Object(u.a)(l.a.mark((function e(t){var n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.storeName,r=t.key,e.next=3,N("sbm",1);case 3:return a=e.sent,e.next=6,w(a,n,r);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("sbm",1);case 2:return n=e.sent,e.next=5,P(n,t);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("sbm",1);case 3:return n=e.sent,e.next=6,k(n,t);case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.map((function(e){return t[e.name]=""})),t}S.onupgradeneeded=function(e){var t=S.result;switch(e.oldVersion){case 0:t.createObjectStore("products",{keyPath:"productName"});var n=t.createObjectStore("persons",{keyPath:"personId"});n.createIndex("personName_index","personName"),n.createIndex("personContact_index","personContact");var r=t.createObjectStore("entries",{keyPath:"timeStamp"});r.createIndex("transactionDate_index","transactionDate"),r.createIndex("transactionType_index","transactionType"),r.createIndex("person_index","person"),r.createIndex("product_index","product");break;default:console.log("default case")}},S.onerror=function(){console.log("error connecting/opening database",S.error)},S.onsuccess=function(){};var F=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("persons");case 2:t=e.sent,n={},t.map((function(e){return n[e]=e,null})),F=function(e,t){if(t)return n[t]=t,console.log("Ids",n),t;for(var r=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],a="";a.length!==e||n[a];){a="";for(var c=0;c<e;c++){a+=r[Math.floor(Math.random()*r.length)]}}return console.log("unique key",a),a};case 6:case"end":return e.stop()}}),e)})))(),V=function(e,t,n){var r=function(e,t){var n={};return Object.keys(t).forEach((function(r){Object.keys(t[r]).every((function(a){switch(a){case"required":return!t[r][a]||0!==e[r].length||(n[r]="required field",!1);case"minLength":return!(e[r].length<t[r].minLength)||(n[r]="Too short",!1);case"maxLength":return!(e[r].length>t[r].maxLength)||(n[r]="Too Long",!1);case"fixedLength":return e[r].length===t[r].fixedLength||(n[r]="length must be ".concat(t[r].fixedLength),!1);case"greaterThan":return!(e[r]<=t[r].greaterThan)||(n[r]="value must be greater than ".concat(t[r].greaterThan),!1);default:console.log("no error")}}))})),n}(e,t),a=W(r),c=W(e);return c>1?n(r):1===c&&n(a?function(e){return Object(d.a)(Object(d.a)({},e),r)}:function(t){var n=Object.keys(e)[0];return t[n]&&delete t[n],Object(d.a)({},t)}),r};function W(e){return Object.keys(e).length}var U=n(14),Z=n.n(U),J=n(23),Q=n.n(J);var K=function(e){var t=e.type,n=e.style,r=e.onClick,a=e.children,c=e.className,s=Object(O.a)(e,["type","style","onClick","children","className"]);return Object(_.jsx)("button",Object(d.a)(Object(d.a)({type:t,onClick:r,className:"".concat(Q.a.button," ").concat(c," ").concat(n)},s),{},{children:a}))},Y={personId:{required:!0,fixedLength:7},personName:{required:!0,minLength:3,maxLength:20},personSurName:{required:!0,minLength:3,maxLength:20},personContact:{required:!0,fixedLength:10},personAddress:{required:!0,minLength:5,maxLength:50}},G={transactionDate:{required:!0},person:{required:!0},transactionType:{required:!0},description:{maxLength:50}},X={product:{required:!0},quantity:{required:!0,greaterThan:0},pricePer:{required:!0,greaterThan:0}},$={sales:Object(d.a)(Object(d.a)(Object(d.a)({},G),X),{},{cashReceived:{required:!0,greaterThan:-1},totalDiscount:{greaterThan:-1},amountLeft:{required:!0,greaterThan:-1}}),purchases:Object(d.a)(Object(d.a)(Object(d.a)({},G),X),{},{cashPaid:{required:!0,greaterThan:-1},totalDiscount:{greaterThan:-1},amountLeft:{required:!0,greaterThan:-1}}),payments:Object(d.a)(Object(d.a)({},G),{},{cashPaid:{required:!0,greaterThan:0},totalDiscount:{greaterThan:-1}}),receipts:Object(d.a)(Object(d.a)({},G),{},{cashReceived:{required:!0,greaterThan:0},totalDiscount:{greaterThan:-1}})},ee=z(x),te={transactionDate:!0,person:!0};var ne=function(e){var t=e.persons,n=e.products,a=e.save,c=Object(r.useState)(Object(d.a)({},ee)),s=Object(j.a)(c,2),o=s[0],i=s[1],l=Object(r.useState)({}),u=Object(j.a)(l,2),p=u[0],h=u[1],f=Object(r.useState)(!1),O=Object(j.a)(f,2),y=O[0],v=O[1],N=t.map((function(e){return e.personName})),k=n.map((function(e){return e.productName})),w=["sales","purchases","payments","receipts"];Object(r.useEffect)((function(){B("sales")}),[]),Object(r.useEffect)((function(){h({}),v(!1)}),[o.transactionType]),Object(r.useEffect)((function(){i((function(e){var t,n=e.quantity*e.pricePer;return"sales"===e.transactionType?t=n-e.cashReceived-e.totalDiscount:"purchases"===e.transactionType&&(t=n-e.cashPaid-e.totalDiscount),Object(d.a)(Object(d.a)({},e),{},{totalAmount:n,amountLeft:t})}))}),[o.quantity,o.pricePer,o.cashReceived,o.totalDiscount,o.cashPaid]);var B=function(e,t){var n=e?Object(d.a)(Object(d.a)({},ee),z(m[e])):ee;n.transactionType=e,t&&Object.keys(t).map((function(e){return n.hasOwnProperty(e)&&(n[e]=o[e])})),i((function(){return n}))},P=function(e){return e.map((function(e){var t=e.name,n=e.type,r=e.label,a=[];return"select"===n&&(a="person"===t?N:"product"===t?k:"transactionType"===t&&w),Object(_.jsx)(g,{type:n,label:r,options:"select"===n&&a,name:t,disabled:("totalAmount"===t||"amountLeft"===t)&&!0,error:p[t],value:o[t],onChange:function(e){"transactionType"===t&&B(e.target.value,te),function(e){i((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(b.a)({},e.target.name,e.target.value))}))}(e),y&&V(Object(b.a)({},e.target.name,e.target.value),Object(b.a)({},e.target.name,$[o.transactionType][e.target.name]),h)}},t)}))};return Object(_.jsxs)("div",{className:Z.a.createEntryBox,children:[Object(_.jsx)("div",{className:Z.a.leftBox,children:P(x)}),Object(_.jsx)("hr",{className:Z.a.divider}),Object(_.jsxs)("div",{className:Z.a.rightBox,children:[o.transactionType?P(m[o.transactionType]):"Select Transaction type..",Object(_.jsx)(K,{onClick:function(){if(console.log(o.transactionType,"transactionType",o),W(V(o,$[o.transactionType],h)))v(!0),alert("invalid form values");else{var e=(new Date).getTime();o.timeStamp=e,a(o,{storeName:"entries"}),v(!1),B(o.transactionType,te),alert("entry saved successfully")}},disabled:""===o.transactionType&&!0,children:"Save Entry"})]})]})},re=n(9),ae=n.n(re),ce=n(19),se=n.n(ce);var oe=function(e){var t=e.headerRow,n=e.bodyRows,r=e.caption;return Object(_.jsxs)("table",{className:se.a.table,children:[Object(_.jsx)("caption",{children:r}),Object(_.jsx)("thead",{className:se.a.thead,children:t}),Object(_.jsx)("tbody",{className:se.a.tbody,children:n})]})},ie=z(h);var le=function(e){var t=e.save,n=Object(r.useState)(ie),a=Object(j.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!1),i=Object(j.a)(o,2),p=i[0],x=i[1],f=Object(r.useState)("name"),m=Object(j.a)(f,2),O=m[0],y=m[1],v=Object(r.useState)(""),N=Object(j.a)(v,2),k=N[0],w=N[1],B=Object(r.useState)([]),P=Object(j.a)(B,2),C=P[0],T=P[1],L=Object(r.useState)({}),D=Object(j.a)(L,2),R=D[0],q=D[1],M=Object(r.useState)(!1),H=Object(j.a)(M,2),A=H[0],z=H[1];Object(r.useEffect)((function(){if(p)p&&s(ie);else{var e=F(7);s(Object(d.a)(Object(d.a)({},ie),{},{personId:e}))}q({}),z(!1)}),[p]),Object(r.useEffect)((function(){w("")}),[O]);var U=function(){W(V(c,Y,q))?(z(!0),alert("Invalid Form values")):(!function(e,t){var n=t.storeName,r=S.result.transaction(n,"readwrite").objectStore(n).put(e);r.onerror=function(){console.log("".concat(n," update request error ").concat(r.error))},r.onsuccess=function(){console.log("".concat(n," update request successful ").concat(r.result))}}(c,{storeName:"persons"}),s(Object(d.a)({},ie)),z(!1),alert("Person Updated Successfully"))};function Z(){return(Z=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(7===(n=t.target.value).length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,I({storeName:"persons",key:n});case 5:(r=e.sent)?(s(r),q({})):(alert("There is no person with personId ".concat(n)),s(Object(d.a)({},ie)),q({}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={storeName:"persons",indexName:"name"===O?"personName_index":"personContact_index",indexValue:k},e.next=3,E(t);case 3:n=e.sent,T(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"personId"}),Object(_.jsx)("th",{children:"personName"}),Object(_.jsx)("th",{children:"personSurName"}),Object(_.jsx)("th",{children:"personContact"}),Object(_.jsx)("th",{children:"personAddress"})]}),G=C.map((function(e){var t=e.personId,n=e.personName,r=e.personSurName,a=e.personContact,c=e.personAddress;return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:t}),Object(_.jsx)("td",{children:n}),Object(_.jsx)("td",{children:r}),Object(_.jsx)("td",{children:a}),Object(_.jsx)("td",{children:c})]},t)}));return Object(_.jsxs)("div",{className:ae.a.managePersonsBox,children:[Object(_.jsxs)("div",{className:ae.a.personBox,children:[Object(_.jsx)("h2",{className:ae.a.title,children:"Manage Persons"}),h.map((function(e){var t=e.name,n=e.type,r=e.label;return Object(_.jsx)(g,{type:n,label:r,name:t,disabled:!p&&"personId"===t,onChange:function(e){p&&"personId"===t&&function(e){Z.apply(this,arguments)}(e),function(e){s(Object(d.a)(Object(d.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))}(e),A&&V(Object(b.a)({},e.target.name,e.target.value),Object(b.a)({},e.target.name,Y[e.target.name]),q)},error:R[t],value:c[t]},t)})),Object(_.jsx)(K,{type:"button",onClick:function(){p?U():function(){if(W(V(c,Y,q)))z(!0),alert("Invalid Form values");else{t(c,{storeName:"persons"}),F(null,c.personId);var e=F(7);s(Object(d.a)(Object(d.a)({},ie),{},{personId:e})),z(!1),alert("Person Saved Successfully")}}()},children:p?"Update Person":"Create Person"}),Object(_.jsx)(K,{type:"button",className:ae.a.editPersonTogglerBtn,onClick:function(){return x(!p)},children:p?"Create New Peron":"Edit Person"})]}),p&&Object(_.jsx)("hr",{className:ae.a.divider}),p&&Object(_.jsxs)("div",{className:ae.a.searchPersonBox,children:[Object(_.jsxs)("div",{className:ae.a.searchType,children:[Object(_.jsx)("span",{children:"By:"}),Object(_.jsx)(K,{type:"button",onClick:function(){return y("name")},children:"Name"}),Object(_.jsx)(K,{type:"button",onClick:function(){return y("number")},children:"Number"})]}),Object(_.jsx)(g,{type:"name"===O?"text":"number"===O&&"number",label:"name"===O?"Enter Person Name":"number"===O&&"Enter Person Number",onChange:function(e){return w(e.target.value)},value:k}),Object(_.jsx)(K,{type:"button",onClick:function(){return J.apply(this,arguments)},children:"Search"}),Object(_.jsxs)("div",{className:ae.a.searchResult,children:[Object(_.jsx)("h3",{children:"Search Results"}),Object(_.jsx)(oe,{headerRow:Q,bodyRows:G})]})]})]})},ue=n(21),de=n.n(ue),je=z(p);var be=function(e){var t=e.save,n=Object(r.useState)(je),a=Object(j.a)(n,2),c=a[0],s=a[1],o=function(e){s(Object(d.a)(Object(d.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(_.jsxs)("div",{className:de.a.manageProductsBox,children:[Object(_.jsx)("h2",{className:de.a.title,children:"Manage Products"}),p.map((function(e){var t=e.name,n=e.type,r=e.label;return Object(_.jsx)(g,{type:n,label:r,name:t,value:c[t],onChange:o},t)})),Object(_.jsx)(K,{type:"button",onClick:function(){return t(c,{storeName:"products"}),alert("Product saved successfully"),void s(je)},children:"Save Product"})]})},pe=n(10),he=n.n(pe),xe=n(7),fe=n.n(xe),me=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(j.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)({}),b=Object(j.a)(d,2),p=b[0],h=b[1],x=Object(r.useRef)(null);Object(r.useEffect)((function(){f()}),[o]),Object(r.useEffect)((function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();1===n.toString().length&&(n="0"+n),1===r.toString().length&&(r="0"+r);var a="".concat(t,"-").concat(n,"-").concat(r);i(a)}),[]),Object(r.useEffect)((function(){var e=x.current;return console.log(e.clientWidth,e.width),h({right:e.clientWidth}),window.onresize=function(e){var t=x.current;console.log(t.clientWidth),h({right:t.clientWidth+"px"})},function(){window.onresize=null}}),[]);var f=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({storeName:"entries",indexName:"transactionDate_index",indexValue:o});case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{className:fe.a.stickyHeader,children:"Trn Type"}),Object(_.jsx)("th",{className:fe.a.stickyHeader,children:"Person"}),Object(_.jsx)("th",{className:fe.a.stickyHeader,children:"Product"}),Object(_.jsx)("th",{className:fe.a.stickyHeader,children:"Qty"}),Object(_.jsx)("th",{className:fe.a.stickyHeader,children:"Price"}),Object(_.jsx)("th",{style:p,className:"".concat(fe.a.stickyReceived," ").concat(fe.a.stickyHeader),children:"Received"}),Object(_.jsx)("th",{ref:x,className:"".concat(fe.a.stickyPaid," ").concat(fe.a.stickyHeader),children:"Paid"})]}),O=n.map((function(e,t){var n=e.person,r=e.transactionType,a=e.product,c=e.quantity,s=e.pricePer,o=(e.totalAmount,e.cashReceived),i=e.cashPaid;e.totalDiscount,e.amountLeft;return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:r}),Object(_.jsx)("td",{children:n}),Object(_.jsx)("td",{children:a}),Object(_.jsx)("td",{type:"number",children:c}),Object(_.jsx)("td",{type:"number",children:s}),Object(_.jsx)("td",{type:"number",style:p,className:"".concat(fe.a.stickyReceived," ").concat(fe.a.columnReceived),children:o}),Object(_.jsx)("td",{type:"number",className:"".concat(fe.a.stickyPaid," ").concat(fe.a.columnPaid),children:i})]},t)}));return Object(_.jsx)("div",{children:Object(_.jsx)(oe,{headerRow:m,bodyRows:O})})},Oe=n(15),ye=n.n(Oe),ve=function(e){var t=e.transactionType,n=Object(r.useState)([]),a=Object(j.a)(n,2),c=a[0],s=a[1];Object(r.useEffect)((function(){o()}),[]);var o=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({storeName:"entries",indexName:"transactionType_index",indexValue:t});case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();("purchases"===t||"sales"===t)&&_.Fragment,("sales"===t||"receipts"===t)&&ye.a.sticky,("purchases"===t||"payments"===t)&&ye.a.sticky,c.map((function(e,t){var n=e.person,r=e.transactionType,a=e.product,c=e.quantity,s=e.pricePer,o=(e.totalAmount,e.cashReceived),i=e.cashPaid;e.totalDiscount,e.amountLeft;return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:n}),("purchases"===r||"sales"===r)&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("td",{children:a}),Object(_.jsx)("td",{children:c}),Object(_.jsx)("td",{children:s})]}),("sales"===r||"receipts"===r)&&Object(_.jsx)("td",{className:ye.a.sticky,children:o}),("purchases"===r||"payments"===r)&&Object(_.jsx)("td",{className:ye.a.sticky,children:i})]},t)}));return Object(_.jsx)("h3",{children:"TransactionType Book"})},_e=n(24),ge=n.n(_e),Ne=function(e){var t=e.product,n=Object(r.useState)([]),a=Object(j.a)(n,2),c=a[0],s=a[1];Object(r.useEffect)((function(){o(t)}),[t]);var o=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({storeName:"entries",indexName:"product_index",indexValue:t});case 2:n=e.sent,console.log(n,"product Data"),s(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=[],d=[];return c.map((function(e,t){var n=e.person,r=e.transactionType,a=(e.product,e.quantity),c=e.pricePer,s=(e.totalAmount,e.cashReceived,e.cashPaid,e.totalDiscount,e.amountLeft,Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:n}),Object(_.jsx)("td",{children:c}),Object(_.jsx)("td",{children:a})]},t));return"sales"===r?d.push(s):"purchases"===r&&i.push(s),null})),Object(_.jsx)("div",{className:ge.a.twoColumns,children:Object(_.jsx)("h3",{children:"Product Book"})})},ke=n(25),we=n.n(ke),Be=function(e){var t=e.person,n=Object(r.useState)([]),a=Object(j.a)(n,2),c=a[0],s=a[1];Object(r.useEffect)((function(){o(t)}),[t]);var o=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({storeName:"entries",indexName:"person_index",indexValue:t});case 2:n=e.sent,console.log(n,"person Data"),s(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=[],d=[];return c.map((function(e,t){e.person;var n=e.transactionType,r=e.transactionDate,a=(e.product,e.quantity,e.pricePer,e.totalAmount,e.cashReceived),c=e.cashPaid,s=(e.totalDiscount,e.amountLeft);if("sales"!==n&&"purchases"!==n||!(s<=0)){var o;"sales"===n||"purchases"===n?o=s:"receipts"===n?o=a:"payments"===n&&(o=c);var l=Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:r}),Object(_.jsx)("td",{children:n}),Object(_.jsx)("td",{children:o})]},t);return"sales"===n||"payments"===n?i.push(l):"purchases"!==n&&"receipts"!==n||d.push(l),null}})),Object(_.jsx)("div",{className:we.a.twoColumns,children:Object(_.jsx)("h3",{children:"Person Book"})})},Pe=function(e){var t=e.fill,n=e.width,r=void 0===n?"14":n,a=e.height,c=void 0===a?"14":a;return Object(_.jsx)("svg",{fill:t,width:r,height:c,viewBox:"0 0 512 298.04",children:Object(_.jsx)("path",{d:"M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 \r 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 \r 16.09-58.7-.15L12.08 70.78z"})})},Ce=function(e){var t=e.fill,n=e.width,r=void 0===n?"14":n,a=e.height,c=void 0===a?"14":a;return Object(_.jsx)("svg",{fill:t,width:r,height:c,viewBox:"0 0 512 298.04",children:Object(_.jsx)("path",{d:"M70.94 285.81c-16.17 16.24-42.46 16.32-58.71.15-16.24-16.16-16.32-42.46-.15-58.7L226.57 \r 12.23c16.16-16.24 42.46-16.32 58.7-.15l214.65 215.18c16.17 16.24 16.09 42.54-.15 58.7-16.25 \r 16.17-42.54 16.09-58.71-.15L256 100.29 70.94 285.81z"})})},Se=function(e){var t=e.fill,n=e.width,r=void 0===n?"14":n,a=e.height,c=void 0===a?"14":a,s=e.style;return Object(_.jsx)("svg",{fill:t,width:r,height:c,style:s,viewBox:"0 0 122.879 103.609",children:Object(_.jsx)("g",{children:Object(_.jsx)("path",{d:"M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 \r c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z \r M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,\r 103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,\r 0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,\r 0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"})})})},Te=function(e){var t=e.fill,n=e.width,r=void 0===n?"14":n,a=e.height,c=void 0===a?"14":a,s=e.style;return Object(_.jsx)("svg",{fill:t,width:r,height:c,style:s,viewBox:"0 0 122.879 103.609",children:Object(_.jsx)("g",{children:Object(_.jsx)("path",{d:"M122.774,16.459L122.774,16.459c0,5.393-4.412,9.805-9.805,\r 9.805H92.202 c1.457-2.919,2.278-6.212,2.278-9.697c0-3.571-0.861-6.941-2.387-9.913h20.876C118.362,6.654,\r 122.774,11.066,122.774,16.459 L122.774,16.459z M89.306,101.257c0,9.15-7.418,16.567-16.568,\r 16.567s-16.567-7.417-16.567-16.567 c0-9.149,7.417-16.567,16.567-16.567S89.306,92.107,89.306,\r 101.257L89.306,101.257z M122.869,101.148L122.869,101.148 c0,5.393-4.413,9.805-9.806,\r 9.805H92.202c1.457-2.919,2.278-6.212,2.278-9.696c0-3.571-0.861-6.941-2.387-9.913h20.97 \r C118.457,91.344,122.869,95.756,122.869,101.148L122.869,101.148z M53.272,\r 110.953H9.816c-5.393,0-9.805-4.412-9.805-9.805l0,0 c0-5.393,4.412-9.805,\r 9.805-9.805h43.565c-1.525,2.972-2.387,6.342-2.387,9.913C50.994,104.741,51.815,108.034,53.272,110.953 \r L53.272,110.953z M28.326,58.717c0,9.149,7.418,16.567,16.568,16.567c9.149,0,16.567-7.418,16.567-16.567 \r c0-9.15-7.418-16.568-16.567-16.568C35.744,42.148,28.326,49.566,28.326,58.717L28.326,58.717z M0,58.608L0,\r 58.608 c0,5.393,4.414,9.805,9.805,9.805h15.675c-1.457-2.92-2.278-6.169-2.278-9.696c0-3.528,0.861-6.941,\r 2.387-9.914H9.805 C4.412,48.803,0,53.215,0,58.608L0,58.608z M64.409,68.413h48.666c5.392,0,9.805-4.412,\r 9.805-9.805l0,0 c0-5.394-4.412-9.806-9.805-9.806H64.301c1.525,2.973,2.387,6.386,2.387,9.914C66.688,\r 62.244,65.866,65.493,64.409,68.413 L64.409,68.413z M89.306,16.567c0,9.15-7.418,16.567-16.568,16.567S56.17,\r 25.718,56.17,16.567C56.17,7.417,63.587,0,72.737,0 S89.306,7.417,89.306,16.567L89.306,16.567z M53.272,\r 26.264H9.853c-5.393,0-9.805-4.413-9.805-9.805l0,0 c0-5.393,4.412-9.805,9.805-9.805h43.528c-1.525,\r 2.972-2.387,6.342-2.387,9.913C50.994,20.052,51.815,23.345,53.272,26.264 L53.272,26.264z"})})})};var Le=function(e){var t=e.entryOf,n=Object(r.useState)(""),a=Object(j.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)([]),i=Object(j.a)(o,2),d=i[0],b=i[1],p=Object(r.useState)(!0),h=Object(j.a)(p,2),x=h[0],f=h[1];return Object(r.useEffect)((function(){"personBook"!==t&&"productBook"!==t||function(){var e=Object(u.a)(l.a.mark((function e(){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="personBook"===t?"persons":"productBook"===t&&"products",e.next=3,q(n);case 3:r=e.sent,a=r.map((function(e){return"personBook"===t?e.personName:"productBook"===t&&e.productName})),b(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(r.useEffect)((function(){f("personBook"===t||"productBook"===t)}),[t]),Object(_.jsxs)("div",{className:he.a.viewContainer,children:[Object(_.jsxs)("div",{className:"".concat(he.a.filterBar," ").concat(!x&&he.a.slideUpFilterBar),children:[("personBook"===t||"productBook"===t)&&Object(_.jsx)(g,{type:"select",options:d,value:c,boxStyle:{width:"200px",marginBottom:"0px"},onChange:function(e){return s(e.target.value)}}),Object(_.jsx)("div",{className:he.a.filterIconBox,children:Object(_.jsx)(Te,{width:"24px",height:"24px",fill:"Grey"})})]}),Object(_.jsx)("div",{className:he.a.filterBarToggler,onClick:function(){return f(!x)},children:x?Object(_.jsx)(Ce,{fill:"#004b4b"}):Object(_.jsx)(Pe,{fill:"#004b4b"})}),Object(_.jsx)("div",{className:"".concat(he.a.viewEntriesBox," ").concat(x&&he.a.ViewEntriesWithFilterBar),children:Object(_.jsxs)("div",{className:he.a.entries,children:["dayBook"===t&&Object(_.jsx)(me,{}),("purchases"===t||"sales"===t||"payments"===t||"receipts"===t)&&Object(_.jsx)(ve,{transactionType:t}),"productBook"===t&&Object(_.jsx)(Ne,{product:c}),"personBook"===t&&Object(_.jsx)(Be,{person:c})]})})]})},Ee=n(6),De=n.n(Ee),Ie=function(e){var t=e.setScreen,n=e.setEntryOf,a=e.showSideNav,c=Object(r.useState)(!1),s=Object(j.a)(c,2),o=s[0],i=s[1],l=function(e,r){t(e),r&&n(r),(r||e&&"viewEntries"!==e)&&a(!1)};return Object(_.jsxs)("nav",{className:De.a.sideNavBar,children:[Object(_.jsxs)("div",{className:De.a.sideNav_Header,children:[Object(_.jsxs)("div",{className:De.a.brandBox,children:[Object(_.jsx)("div",{className:De.a.brandLogo,children:"EBM"}),Object(_.jsx)("h5",{className:De.a.brandName,children:"Easy Business Manager"})]}),Object(_.jsx)(K,{style:De.a.btnClose,onClick:function(){return a(!1)},children:"X"})]}),Object(_.jsxs)("ul",{className:De.a.navList,children:[Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("createEntry")},children:"Create Entry"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("managePersons")},children:"Manage Persons"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("manageProducts")},children:"Manage Products"})}),Object(_.jsxs)("li",{children:[Object(_.jsxs)(K,{style:"".concat(De.a.btnList," ").concat(De.a.btnWithIcon),onClick:function(){i(!o)},children:[Object(_.jsx)("span",{className:De.a.btnText,children:"View"}),o?Object(_.jsx)("span",{className:De.a.btnIcon,children:Object(_.jsx)(Ce,{fill:"#c9c9c9cc"})}):Object(_.jsx)("span",{className:De.a.btnIcon,children:Object(_.jsx)(Pe,{fill:"#c9c9c9cc"})})]}),o&&Object(_.jsxs)("ul",{className:De.a.navListNested,children:[Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("viewEntries","dayBook")},children:"Day Book"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("viewEntries","personBook")},children:"Person Book"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("viewEntries","productBook")},children:"Product Book"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("viewEntries","purchases")},children:"Purchases Book"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("viewEntries","sales")},children:"Sales Book"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("viewEntries","payments")},children:"Payments Book"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{style:De.a.btnList,onClick:function(){return l("viewEntries","receipts")},children:"Receipts Book"})})]})]})]})]})},Re=n(11),qe=n.n(Re),Me=n(16),He=n.n(Me),Ae={createEntry:"Create Entry",managePersons:"Manage Persons",manageProducts:"Manage Products",dayBook:"Day Book",personBook:"Person Book",productBook:"Product Book",purchases:"Purchases Book",sales:"Sales Book",payments:"Payments Book",receipts:"Receipts Book"},ze=function(e){var t=e.activeScreen,n=e.viewEntriesOf,r=e.showSideNav;return Object(_.jsxs)("header",{className:He.a.header,children:[Object(_.jsx)(K,{style:He.a.sideBarToggler,onClick:function(){r(!0)},children:Object(_.jsx)(Se,{width:24,height:24,style:{marginBottom:"-5px"}})}),Object(_.jsx)("h2",{className:He.a.activeScreenTitle,children:"viewEntries"!==t?Ae[t]:Ae[n]}),Object(_.jsx)("div",{className:He.a.info,children:"Other Info"})]})};var Fe=function(){var e=Object(r.useState)({products:[],persons:[]}),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("viewEntries"),s=Object(j.a)(c,2),i=s[0],d=s[1],b=Object(r.useState)("dayBook"),p=Object(j.a)(b,2),h=p[0],x=p[1],f=Object(r.useState)(!1),m=Object(j.a)(f,2),O=m[0],y=m[1];Object(r.useEffect)((function(){Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("products");case 2:return t=e.sent,e.next=5,q("persons");case 5:n=e.sent,a({products:t,persons:n});case 7:case"end":return e.stop()}}),e)})))()}),[]);var v=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.storeName,e.next=3,T(t,r);case 3:c=e.sent,"entries"!==r&&c&&a((function(e){return e[r].push(t),e}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:qe.a.mainContainer,children:[O&&Object(_.jsx)("div",{className:qe.a.overlay,onClick:function(){return y(!1)}}),Object(_.jsx)("div",{className:"".concat(qe.a.sideNavContainer," ").concat(O&&qe.a.show_sideNav),children:Object(_.jsx)(Ie,{setScreen:d,setEntryOf:x,showSideNav:y})}),Object(_.jsxs)("div",{className:qe.a.subContainer,children:[Object(_.jsx)("div",{className:qe.a.headerContainer,children:Object(_.jsx)(ze,{activeScreen:i,viewEntriesOf:h,showSideNav:y})}),Object(_.jsxs)("div",{className:qe.a.content,children:["createEntry"===i&&Object(_.jsx)(ne,{persons:n.persons,products:n.products,save:v}),"managePersons"===i&&Object(_.jsx)(le,{save:v,persons:Object(o.a)(n.persons)}),"manageProducts"===i&&Object(_.jsx)(be,{save:v}),"viewEntries"===i&&Object(_.jsx)(Le,{entryOf:h})]})]})]})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(Fe,{})}),document.getElementById("root")),Ve()}],[[35,1,2]]]);
//# sourceMappingURL=main.1db88f43.chunk.js.map