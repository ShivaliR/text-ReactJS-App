(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),l=a.n(s),r=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:Object(o.jsx)("i",{children:e.title})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["light"===e.mode?"Enable":"Disable"," Dark Mode"]})]})]})]})})}i.defaultProps={title:"Set title here",aboutText:"About"};var d="",b="";function h(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{className:"mb-4",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("div",{className:"container-sm",children:Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Case"}),Object(o.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",className:"dropdown-item",onClick:function(){d=c;var e=c.toUpperCase();s(e)},children:"UPPERCASE"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",className:"dropdown-item",onClick:function(){d=c;var e=c.toLowerCase();s(e)},children:"lowercase"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",className:"dropdown-item",onClick:function(){d=c;var e=c.charAt(0).toUpperCase();s(e+c.slice(1).toLowerCase())},children:"Sentence case"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",className:"dropdown-item",onClick:function(){d=c;var e=c.split(" "),t="";e.forEach((function(e){e=e.charAt(0).toUpperCase()+e.slice(1),t=t+" "+e})),s(t.trim())},children:"Title Case"})})]}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-secondary mx-1 my-1",onClick:function(){b=d,s(d)},children:"Undo"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-secondary mx-1 my-1",onClick:function(){s(b)},children:"Redo"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-secondary mx-1 my-1",onClick:function(){d=c;s("")},children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(o.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-secondary mx-1 my-1",onClick:function(){var e=document.getElementById("myBox");e.select(),e.setSelectionRange(0,9999),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===c.length||-1===c.indexOf("  "),className:"btn btn-secondary mx-1 my-1",onClick:function(){d=c;var e=c.split(/[ ]+/);s(e.join(" "))},children:"Remove Extra Spaces"})]})})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h3",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," ","words and ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(/\s+/).filter((function(e){return 0!==e.length})).length," ","Minutes read"]}),Object(o.jsx)("h4",{children:"Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Nothing to preview!"})]})]})}var j=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.message]})})};var m=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),l=Object(r.a)(s,2),d=l[0],b=l[1],m=function(e,t){b({type:e,message:t}),setTimeout((function(){b(null)}),1e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Textutils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",m("success","Dark mode has been enabled !")):(c("light"),document.body.style.backgroundColor="white",m("success","Dark mode has been disabled !"))}},new Date),Object(o.jsx)(j,{alert:d}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(h,{showAlert:m,heading:"Wordcounter App",mode:a})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.d8b754ab.chunk.js.map