(this["webpackJsonpdog-or-cat"]=this["webpackJsonpdog-or-cat"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),i=n(2),o=(n(12),n(0));var l=function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"logo",children:[Object(o.jsx)("span",{role:"img","aria-label":"dog",children:"\ud83d\udc36"}),Object(o.jsx)("span",{children:"or"}),Object(o.jsx)("span",{role:"img","aria-label":"cat",children:"\ud83d\ude3a"}),Object(o.jsx)("span",{children:"o-meter"})]})})},u=n.p+"static/media/pet.9e55f88c.png";var j=function(e){var t=e.executeScroll;return Object(o.jsxs)("section",{className:"main-container",children:[Object(o.jsxs)("div",{className:"main-left",children:[Object(o.jsx)("h1",{children:"Let me sniff your picture..."}),Object(o.jsxs)("p",{children:["Not sure what is that creature in house, always had doubts in your closest pal? ",Object(o.jsx)("br",{})," as a specially trained sniffing AI i am here to help to identify your creature."]}),Object(o.jsx)("button",{onClick:t,children:"Start Now!"})]}),Object(o.jsx)("img",{src:u,alt:"pet"})]})};var d=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){c.result&&t(c.result.toString())},c.onerror=function(e){return n(e)}}))},b=n(4),h=n.n(b),f=n(7);function p(){return(p=Object(f.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.split("base64,")[1],e.prev=1,e.next=4,fetch("https://animal-classifier-api.herokuapp.com/predict",{method:"POST",body:JSON.stringify({image_base64:"".concat(c)}),headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}n(5);var O=function(e){var t=e.elRef,n=Object(c.useState)(),r=Object(i.a)(n,2),s=r[0],a=r[1],l=Object(c.useState)(),u=Object(i.a)(l,2),j=u[0],b=u[1],h=Object(c.useState)(!1),f=Object(i.a)(h,2),O=f[0],x=f[1],m=Object(c.useRef)(null);return Object(o.jsx)("div",{className:"upload-wrapper",children:Object(o.jsxs)("div",{className:"upload-container",children:[Object(o.jsx)("h2",{children:"Sniffing Time"}),Object(o.jsx)("p",{children:"Lets start by uploading an image of a cat or a dog and let me sniff !"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&(x(!0),function(e){return p.apply(this,arguments)}(s).then((function(e){x(!1),b(e)})))},className:"upload-form",children:[Object(o.jsxs)("div",{className:"results",children:[O&&Object(o.jsx)("p",{children:"Loading...."}),j&&Object(o.jsxs)("span",{children:["This pal is ",Object(o.jsx)("strong",{children:null===j||void 0===j?void 0:j.confidence})," a"," ",Object(o.jsx)("strong",{children:null===j||void 0===j?void 0:j.prediction})]})]}),Object(o.jsx)("input",{className:"browse",type:"file",name:"img",placeholder:"yo",ref:m,onChange:function(e){var t=e.currentTarget.files;(null===t||void 0===t?void 0:t.length)&&d(t[0]).then((function(e){return a(e)}))}}),s?Object(o.jsx)("img",{className:"preview",src:s,alt:"preview"}):Object(o.jsx)("div",{className:"place-holder",children:"?"}),Object(o.jsxs)("div",{className:"btns",ref:t,children:[Object(o.jsx)("button",{type:"button",onClick:function(e){var t;null===m||void 0===m||null===(t=m.current)||void 0===t||t.click()},children:"Upload Photo"}),Object(o.jsx)("button",{type:"submit",className:"submit-btn",children:"Sniff Sniff..."})]})]})]})})};var x=function(){return Object(o.jsxs)("footer",{children:["Site was made by ",Object(o.jsx)("strong",{children:"Yuval Karif"})," and API by"," ",Object(o.jsx)("strong",{children:"Guy Baron"})]})};var m=function(){var e=function(e){var t=Object(c.useRef)(null);return[function(){t.current&&t.current.scrollIntoView(e)},t]}({behavior:"smooth",block:"start"}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{executeScroll:n}),Object(o.jsx)(O,{elRef:r}),Object(o.jsx)(x,{})]})};n(15);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))},5:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.97f38cf5.chunk.js.map