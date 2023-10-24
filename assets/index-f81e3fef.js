import{g as V}from"./background-36665fce.js";function st(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var U={},at={get exports(){return U},set exports(x){U=x}};(function(x,_){(function(p,e){x.exports=e()})(window,function(){return function(s){var p={};function e(i){if(p[i])return p[i].exports;var n=p[i]={i,l:!1,exports:{}};return s[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=s,e.c=p,e.d=function(i,n,c){e.o(i,n)||Object.defineProperty(i,n,{enumerable:!0,get:c})},e.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},e.t=function(i,n){if(n&1&&(i=e(i)),n&8||n&4&&typeof i=="object"&&i&&i.__esModule)return i;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),n&2&&typeof i!="string")for(var d in i)e.d(c,d,function(a){return i[a]}.bind(null,d));return c},e.n=function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return e.d(n,"a",n),n},e.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},e.p="dist",e(e.s=10)}([function(s,p,e){function i(n,c){var d=Object.prototype.hasOwnProperty,a,u,g,C;for(g=1,C=arguments.length;g<C;g+=1){a=arguments[g];for(u in a)d.call(a,u)&&(n[u]=a[u])}return n}s.exports=i},function(s,p,e){function i(n){return n===void 0}s.exports=i},function(s,p,e){function i(n){return n instanceof Array}s.exports=i},function(s,p,e){var i=e(2),n=e(17),c=e(6);function d(a,u,g){i(a)?n(a,u,g):c(a,u,g)}s.exports=d},function(s,p,e){function i(n){return typeof n=="string"||n instanceof String}s.exports=i},function(s,p,e){function i(n){return n instanceof Function}s.exports=i},function(s,p,e){function i(n,c,d){var a;d=d||null;for(a in n)if(n.hasOwnProperty(a)&&c.call(d,n[a],a,n)===!1)break}s.exports=i},function(s,p,e){var i=e(18),n=e(0);function c(d,a){var u;return a||(a=d,d=null),u=a.init||function(){},d&&i(u,d),a.hasOwnProperty("static")&&(n(u,a.static),delete a.static),n(u.prototype,a),u}s.exports=c},function(s,p,e){var i=e(2);function n(c,d,a){var u,g;if(a=a||0,!i(d))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(d,c,a);for(g=d.length,u=a;a>=0&&u<g;u+=1)if(d[u]===c)return u;return-1}s.exports=n},function(s,p,e){var i=e(29),n=e(30),c=e(5),d={capitalizeFirstLetter:function(a){return a.substring(0,1).toUpperCase()+a.substring(1,a.length)},isContained:function(a,u){return u?a===u?!0:u.contains(a):!1},createElementByTemplate:function(a,u){var g=document.createElement("div"),C=c(a)?a(u):i(a,u);return g.innerHTML=C,g.firstChild},bind:function(a,u){var g=Array.prototype.slice,C;return a.bind?a.bind.apply(a,g.call(arguments,1)):(C=g.call(arguments,2),function(){return a.apply(u,C.length?C.concat(g.call(arguments)):arguments)})},sendHostName:function(){n("pagination","UA-129987462-1")}};s.exports=d},function(s,p,e){e(11),s.exports=e(12)},function(s,p,e){},function(s,p,e){var i=e(13),n=e(7),c=e(0),d=e(1),a=e(20),u=e(9),g={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},C=n({init:function(o,t){this._options=c({},g,t),this._currentPage=0,this._view=new a(o,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(o){this._currentPage=o||this._options.page},_getLastPage:function(){var o=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return o||1},_getPageIndex:function(o){var t,r;return this._options.centerAlign?(t=Math.floor(this._options.visiblePages/2),r=o-t,r=Math.max(r,1),r=Math.min(r,this._getLastPage()-this._options.visiblePages+1),r):Math.ceil(o/this._options.visiblePages)},_getRelativePage:function(o){var t=o==="prev",r=this.getCurrentPage();return t?r-1:r+1},_getMorePageIndex:function(o){var t=this._getPageIndex(this.getCurrentPage()),r=this._options.visiblePages,l=o==="prev",h;return this._options.centerAlign?h=l?t-1:t+r:h=l?(t-1)*r:t*r+1,h},_convertToValidPage:function(o){var t=this._getLastPage();return o=Math.max(o,1),o=Math.min(o,t),o},_paginate:function(o){var t=this._makeViewData(o||this._options.page);this._setCurrentPage(o),this._view.update(t)},_makeViewData:function(o){var t={},r=this._getLastPage(),l=this._getPageIndex(o),h=this._getPageIndex(r),b=this._getEdge(o);return t.leftPageNumber=b.left,t.rightPageNumber=b.right,t.prevMore=l>1,t.nextMore=l<h,t.page=o,t.currentPageIndex=o,t.lastPage=r,t.lastPageListIndex=r,t},_getEdge:function(o){var t,r,l,h=this._getLastPage(),b=this._options.visiblePages,B=this._getPageIndex(o);return this._options.centerAlign?(l=Math.floor(b/2),t=Math.max(o-l,1),r=t+b-1,r>h&&(t=Math.max(h-b+1,1),r=h)):(t=(B-1)*b+1,r=B*b,r=Math.min(r,h)),{left:t,right:r}},_onClickHandler:function(o,t){switch(o){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(o){d(o)&&(o=this._options.totalItems),this._options.totalItems=o,this._paginate(1)},movePageTo:function(o){o=this._convertToValidPage(o),this.invoke("beforeMove",{page:o})&&(this._paginate(o),this.fire("afterMove",{page:o}))},setTotalItems:function(o){this._options.totalItems=o},setItemsPerPage:function(o){this._options.itemsPerPage=o},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(C),s.exports=C},function(s,p,e){var i=e(0),n=e(14),c=e(4),d=e(16),a=e(2),u=e(5),g=e(3),C=/\s+/g;function o(){this.events=null,this.contexts=null}o.mixin=function(t){i(t.prototype,o.prototype)},o.prototype._getHandlerItem=function(t,r){var l={handler:t};return r&&(l.context=r),l},o.prototype._safeEvent=function(t){var r=this.events,l;return r||(r=this.events={}),t&&(l=r[t],l||(l=[],r[t]=l),r=l),r},o.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},o.prototype._indexOfContext=function(t){for(var r=this._safeContext(),l=0;r[l];){if(t===r[l][0])return l;l+=1}return-1},o.prototype._memorizeContext=function(t){var r,l;n(t)&&(r=this._safeContext(),l=this._indexOfContext(t),l>-1?r[l][1]+=1:r.push([t,1]))},o.prototype._forgetContext=function(t){var r,l;n(t)&&(r=this._safeContext(),l=this._indexOfContext(t),l>-1&&(r[l][1]-=1,r[l][1]<=0&&r.splice(l,1)))},o.prototype._bindEvent=function(t,r,l){var h=this._safeEvent(t);this._memorizeContext(l),h.push(this._getHandlerItem(r,l))},o.prototype.on=function(t,r,l){var h=this;c(t)?(t=t.split(C),g(t,function(b){h._bindEvent(b,r,l)})):d(t)&&(l=r,g(t,function(b,B){h.on(B,b,l)}))},o.prototype.once=function(t,r,l){var h=this;if(d(t)){l=r,g(t,function(B,f){h.once(f,B,l)});return}function b(){r.apply(l,arguments),h.off(t,b,l)}this.on(t,b,l)},o.prototype._spliceMatches=function(t,r){var l=0,h;if(a(t))for(h=t.length;l<h;l+=1)r(t[l])===!0&&(t.splice(l,1),h-=1,l-=1)},o.prototype._matchHandler=function(t){var r=this;return function(l){var h=t===l.handler;return h&&r._forgetContext(l.context),h}},o.prototype._matchContext=function(t){var r=this;return function(l){var h=t===l.context;return h&&r._forgetContext(l.context),h}},o.prototype._matchHandlerAndContext=function(t,r){var l=this;return function(h){var b=t===h.handler,B=r===h.context,f=b&&B;return f&&l._forgetContext(h.context),f}},o.prototype._offByEventName=function(t,r){var l=this,h=u(r),b=l._matchHandler(r);t=t.split(C),g(t,function(B){var f=l._safeEvent(B);h?l._spliceMatches(f,b):(g(f,function(v){l._forgetContext(v.context)}),l.events[B]=[])})},o.prototype._offByHandler=function(t){var r=this,l=this._matchHandler(t);g(this._safeEvent(),function(h){r._spliceMatches(h,l)})},o.prototype._offByObject=function(t,r){var l=this,h;this._indexOfContext(t)<0?g(t,function(b,B){l.off(B,b)}):c(r)?(h=this._matchContext(t),l._spliceMatches(this._safeEvent(r),h)):u(r)?(h=this._matchHandlerAndContext(r,t),g(this._safeEvent(),function(b){l._spliceMatches(b,h)})):(h=this._matchContext(t),g(this._safeEvent(),function(b){l._spliceMatches(b,h)}))},o.prototype.off=function(t,r){c(t)?this._offByEventName(t,r):arguments.length?u(t)?this._offByHandler(t):d(t)&&this._offByObject(t,r):(this.events={},this.contexts=[])},o.prototype.fire=function(t){this.invoke.apply(this,arguments)},o.prototype.invoke=function(t){var r,l,h,b;if(!this.hasListener(t))return!0;for(r=this._safeEvent(t),l=Array.prototype.slice.call(arguments,1),h=0;r[h];){if(b=r[h],b.handler.apply(b.context,l)===!1)return!1;h+=1}return!0},o.prototype.hasListener=function(t){return this.getListenerLength(t)>0},o.prototype.getListenerLength=function(t){var r=this._safeEvent(t);return r.length},s.exports=o},function(s,p,e){var i=e(1),n=e(15);function c(d){return!i(d)&&!n(d)}s.exports=c},function(s,p,e){function i(n){return n===null}s.exports=i},function(s,p,e){function i(n){return n===Object(n)}s.exports=i},function(s,p,e){function i(n,c,d){var a=0,u=n.length;for(d=d||null;a<u&&c.call(d,n[a],a,n)!==!1;a+=1);}s.exports=i},function(s,p,e){var i=e(19);function n(c,d){var a=i(d.prototype);a.constructor=c,c.prototype=a}s.exports=n},function(s,p,e){function i(n){function c(){}return c.prototype=n,new c}s.exports=i},function(s,p,e){var i=e(3),n=e(7),c=e(21),d=e(22),a=e(24),u=e(25),g=e(0),C=e(4),o=e(28),t=e(9),r={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},l=["first","prev","next","last"],h=["prev","next"],b="The container element is invalid.",B=n({init:function(f,v,S){this._containerElement=null,this._firstItemClassName=v.firstItemClassName,this._lastItemClassName=v.lastItemClassName,this._template=g({},r,v.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(f),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(S)},_setRootElement:function(f){if(C(f)?f=document.getElementById(f)||document.querySelector(f):f.jquery&&(f=f[0]),!o(f))throw new Error(b);this._containerElement=f},_setMoveButtons:function(){i(l,function(f){this._buttons[f]=t.createElementByTemplate(this._template.moveButton,{type:f})},this)},_setDisabledMoveButtons:function(){i(l,function(f){var v="disabled"+t.capitalizeFirstLetter(f);this._buttons[v]=t.createElementByTemplate(this._template.disabledMoveButton,{type:f})},this)},_setMoreButtons:function(){i(h,function(f){var v=f+"More";this._buttons[v]=t.createElementByTemplate(this._template.moreButton,{type:f})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(f){var v;f.page>1?v=this._buttons.first:v=this._buttons.disabledFirst,this._getContainerElement().appendChild(v)},_appendPrevButton:function(f){var v;f.currentPageIndex>1?v=this._buttons.prev:v=this._buttons.disabledPrev,this._getContainerElement().appendChild(v)},_appendNextButton:function(f){var v;f.currentPageIndex<f.lastPageListIndex?v=this._buttons.next:v=this._buttons.disabledNext,this._getContainerElement().appendChild(v)},_appendLastButton:function(f){var v;f.page<f.lastPage?v=this._buttons.last:v=this._buttons.disabledLast,this._getContainerElement().appendChild(v)},_appendPrevMoreButton:function(f){var v;f.prevMore&&(v=this._buttons.prevMore,u(v,this._firstItemClassName),this._getContainerElement().appendChild(v))},_appendNextMoreButton:function(f){var v;f.nextMore&&(v=this._buttons.nextMore,u(v,this._lastItemClassName),this._getContainerElement().appendChild(v))},_appendPages:function(f){var v=f.leftPageNumber,S=f.rightPageNumber,N,O;for(O=v;O<=S;O+=1)O===f.page?N=t.createElementByTemplate(this._template.currentPage,{page:O}):(N=t.createElementByTemplate(this._template.page,{page:O}),this._enabledPageElements.push(N)),O===v&&!f.prevMore&&u(N,this._firstItemClassName),O===S&&!f.nextMore&&u(N,this._lastItemClassName),this._getContainerElement().appendChild(N)},_attachClickEvent:function(f){var v=this._getContainerElement();d(v,"click",function(S){var N=c(S),O,F;a(S),F=this._getButtonType(N),F||(O=this._getPageNumber(N)),f(F,O)},this)},_getButtonType:function(f){var v,S=this._buttons;return i(S,function(N,O){return t.isContained(f,N)?(v=O,!1):!0},this),v},_getPageNumber:function(f){var v=this._findPageElement(f),S;return v&&(S=parseInt(v.innerText,10)),S},_findPageElement:function(f){for(var v=0,S=this._enabledPageElements.length,N;v<S;v+=1)if(N=this._enabledPageElements[v],t.isContained(f,N))return N;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(f,v){this._buttons[v]=f.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(f){this._empty(),this._appendFirstButton(f),this._appendPrevButton(f),this._appendPrevMoreButton(f),this._appendPages(f),this._appendNextMoreButton(f),this._appendNextButton(f),this._appendLastButton(f)}});s.exports=B},function(s,p,e){function i(n){return n.target||n.srcElement}s.exports=i},function(s,p,e){var i=e(4),n=e(3),c=e(23);function d(g,C,o,t){if(i(C)){n(C.split(/\s+/g),function(r){a(g,r,o,t)});return}n(C,function(r,l){a(g,l,r,o)})}function a(g,C,o,t){function r(l){o.call(t||g,l||window.event)}"addEventListener"in g?g.addEventListener(C,r):"attachEvent"in g&&g.attachEvent("on"+C,r),u(g,C,o,r)}function u(g,C,o,t){var r=c(g,C),l=!1;n(r,function(h){return h.handler===o?(l=!0,!1):!0}),l||r.push({handler:o,wrappedHandler:t})}s.exports=d},function(s,p,e){var i="_feEventKey";function n(c,d){var a=c[i],u;return a||(a=c[i]={}),u=a[d],u||(u=a[d]=[]),u}s.exports=n},function(s,p,e){function i(n){if(n.preventDefault){n.preventDefault();return}n.returnValue=!1}s.exports=i},function(s,p,e){var i=e(3),n=e(8),c=e(26),d=e(27);function a(u){var g=Array.prototype.slice.call(arguments,1),C=u.classList,o=[],t;if(C){i(g,function(r){u.classList.add(r)});return}t=c(u),t&&(g=[].concat(t.split(/\s+/),g)),i(g,function(r){n(r,o)<0&&o.push(r)}),d(u,o)}s.exports=a},function(s,p,e){var i=e(1);function n(c){return!c||!c.className?"":i(c.className.baseVal)?c.className:c.className.baseVal}s.exports=n},function(s,p,e){var i=e(2),n=e(1);function c(d,a){if(a=i(a)?a.join(" "):a,a=a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),n(d.className.baseVal)){d.className=a;return}d.className.baseVal=a}s.exports=c},function(s,p,e){function i(n){return typeof HTMLElement=="object"?n&&(n instanceof HTMLElement||!!n.nodeType):!!(n&&n.nodeType)}s.exports=i},function(s,p,e){var i=e(8),n=e(3),c=e(2),d=e(4),a=e(0),u=/{{\s?|\s?}}/g,g=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,C=/\[\s?|\s?\]/,o=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,t=/\./,r=/^["']\w+["']$/,l=/"|'/g,h=/^-?\d+\.?\d*$/,b=2,B={if:O,each:F,with:tt},f="a".split(/a/).length===3,v=function(){return f?function(m,y){return m.split(y)}:function(m,y){var E=[],P=0,T,M;for(y.global||(y=new RegExp(y,"g")),T=y.exec(m);T!==null;)M=T.index,E.push(m.slice(P,M)),P=M+T[0].length,T=y.exec(m);return E.push(m.slice(P)),E}}();function S(m,y){var E,P=y[m];return m==="true"?P=!0:m==="false"?P=!1:r.test(m)?P=m.replace(l,""):g.test(m)?(E=m.split(C),P=S(E[0],y)[S(E[1],y)]):o.test(m)?(E=m.split(t),P=S(E[0],y)[E[1]]):h.test(m)&&(P=parseFloat(m)),P}function N(m,y){var E=[m],P=[],T=0,M=0;return n(y,function(L,A){L.indexOf("if")===0?T+=1:L==="/if"?T-=1:!T&&(L.indexOf("elseif")===0||L==="else")&&(E.push(L==="else"?["true"]:L.split(" ").slice(1)),P.push(y.slice(M,A)),M=A+1)}),P.push(y.slice(M)),{exps:E,sourcesInsideIf:P}}function O(m,y,E){var P=N(m,y),T=!1,M="";return n(P.exps,function(L,A){return T=j(L,E),T&&(M=$(P.sourcesInsideIf[A],E)),!T}),M}function F(m,y,E){var P=j(m,E),T=c(P)?"@index":"@key",M={},L="";return n(P,function(A,k){M[T]=k,M["@this"]=A,a(E,M),L+=$(y.slice(),E)}),L}function tt(m,y,E){var P=i("as",m),T=m[P+1],M=j(m.slice(0,P),E),L={};return L[T]=M,$(y,a(E,L))||""}function et(m,y,E){var P=m.splice(y+1,E-y);return P.pop(),P}function nt(m,y,E){for(var P=B[m],T=1,M=0,L,A=M+b,k=y[A];T&&d(k);)k.indexOf(m)===0?T+=1:k.indexOf("/"+m)===0&&(T-=1,L=A),A+=b,k=y[A];if(T)throw Error(m+" needs {{/"+m+"}} expression.");return y[M]=P(y[M].split(" ").slice(1),et(y,M,L),E),y}function j(m,y){var E=S(m[0],y);return E instanceof Function?it(E,m.slice(1),y):E}function it(m,y,E){var P=[];return n(y,function(T){P.push(S(T,E))}),m.apply(null,P)}function $(m,y){for(var E=1,P=m[E],T,M,L;d(P);)T=P.split(" "),M=T[0],B[M]?(L=nt(M,m.splice(E,m.length-E),y),m=m.concat(L)):m[E]=j(T,y),E+=b,P=m[E];return m.join("")}function rt(m,y){return $(v(m,u),y)}s.exports=rt},function(s,p,e){var i=e(1),n=e(31),c=7*24*60*60*1e3;function d(u){var g=new Date().getTime();return g-u>c}function a(u,g){var C="https://www.google-analytics.com/collect",o=location.hostname,t="event",r="use",l="TOAST UI "+u+" for "+o+": Statistics",h=window.localStorage.getItem(l);!i(window.tui)&&window.tui.usageStatistics===!1||h&&!d(h)||(window.localStorage.setItem(l,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&n(C,{v:1,t,tid:g,cid:o,dp:o,dh:u,el:u,ec:r})},1e3))}s.exports=a},function(s,p,e){var i=e(6);function n(c,d){var a=document.createElement("img"),u="";return i(d,function(g,C){u+="&"+C+"="+g}),u=u.substring(1),a.src=c+"?"+u,a.style.display="none",document.body.appendChild(a),document.body.removeChild(a),a}s.exports=n}])})})(at);const ot=st(U);const I={exercisesList:document.querySelector(".exercises-list"),exercisesForm:document.querySelector(".exercises-form"),listPhotoCard:document.querySelector(".js-list-cards-photo"),listInfoCard:document.querySelector(".js-list-cards-information"),mainTitle:document.querySelector(".exercises-span-title"),spanTitle:document.querySelector(".exercises-part-title"),divInputButton:document.querySelector(".input-button"),startCardsPhoto:document.querySelector(".js-btn-body-parts")};I.exercisesList.addEventListener("click",lt);let w,D,z=12,G=!0;X(1,"Body parts").then(({results:x,page:_,perPage:s,totalPages:p})=>{w=I.startCardsPhoto,w.classList.add("current"),R(Number(_),Number(s),p,"Body parts"),I.listInfoCard.innerHTML="",I.listPhotoCard.innerHTML=K(x)});function lt(x){x.target.tagName==="BUTTON"&&(G=!0,I.mainTitle.textContent="Exercises",I.spanTitle.textContent="",I.exercisesForm.style.display="none",w!==void 0&&w.classList.remove("current"),w=x.target,x.target.classList.add("current"),X(1,x.target.textContent).then(({results:_,page:s,perPage:p,totalPages:e})=>{R(Number(s),Number(p),e,x.target.textContent),I.listInfoCard.innerHTML="",I.listPhotoCard.innerHTML=K(_)}),I.listPhotoCard.addEventListener("click",q))}let Y=window.innerWidth;document.documentElement.clientWidth;document.body.clientWidth;Y===375&&(z=9);window.addEventListener("resize",ct);function ct(){Y===375&&(z=9)}async function X(x,_){try{return await V({endpoint:"filters",page:x,limit:z,filter:_})}catch{}}function R(x,_,s,p){const e=new ot("pagination",{totalItems:_*s,itemsPerPage:_,visiblePages:3,page:x});e.on("afterMove",function(i){if(!G){J(w.dataset.id,D,e.getCurrentPage()).then(({results:n,page:c,perPage:d,totalPages:a})=>{R(Number(c),Number(d),a,p),I.listInfoCard.innerHTML=W(n)});return}X(i.page,p).then(({results:n,page:c,perPage:d,totalPages:a})=>{R(Number(c),Number(d),a,p),I.listPhotoCard.innerHTML=K(n)})})}I.listPhotoCard.addEventListener("click",q);function q(x){if(x.target.tagName==="UL")return;I.exercisesForm.style.display="block",G=!1,I.mainTitle.textContent=I.mainTitle.textContent.replace(" / ","");const _=w.dataset.id,s=x.target.closest(".js-card-photo-item").dataset.name;D=s,I.mainTitle.textContent+=" / ",I.spanTitle.textContent=`${s}`,J(_,s,1).then(({results:p,page:e,perPage:i,totalPages:n})=>{R(Number(e),Number(i),n,x.target.textContent),I.listPhotoCard.innerHTML="",I.listInfoCard.innerHTML=W(p),Z=document.querySelectorAll(".btn-start"),Z.forEach(c=>c.addEventListener("click",Ct))}),I.listPhotoCard.removeEventListener("click",q)}async function J(x,_,s){try{let p={page:s,limit:12,endpoint:"exercises"};return p[x]=_,await V(p)}catch(p){console.log(p)}}I.exercisesForm.addEventListener("submit",ut);function ut(x){x.preventDefault();const _=x.currentTarget.elements.target.value;ft(_).then(({results:s})=>{s.length,I.listInfoCard.innerHTML=W(s),I.exercisesForm.reset()})}async function ft(x){try{let _={page:1,limit:12,endpoint:"exercises",keyword:`${x}`};return _[w.dataset.id]=D,await V(_)}catch(_){console.log(_)}}function W(x){return x.map(({_id:_,bodyPart:s,name:p,burnedCalories:e,time:i,rating:n,target:c})=>`
      
 <li class="card-info-item-ex" data-id="${_}">
    <div class="div-workout-rating">
      <a class="link-workout">workout</a>
      <p class="js-text-rating">
        ${n}
        <svg class="icon-star" width="18" height="18">
          <use href="./img/icons.svg#icon-star"></use>
        </svg>
      </p>
    </div>
    <button type="button" class="btn-start" >
      Start
      <svg class="icon-arrow" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
      </svg>
    </button>
  <h3 class="exercise-title">
    <svg class="exercise-icon-running" width="24" height="24">
      <use href="./img/icons.svg#icon-running-stick" height="16" y="4"></use>
    </svg>
    <span>${p.charAt(0).toUpperCase()+p.slice(1)}</span>
  </h3>

  <ul class="js-exercise-list">

    <li class="exercise-list-text">
      <p class="exercise-label">
        Burned calories:
        <span class="exercise-text-span">${e} / ${i} min</span>
      </p>
    </li>

    <li class="exercise-list-text">
      <p class="exercise-label label-width-bodypart">
        Body part: <span class="exercise-text-span">${s.charAt(0).toUpperCase()+s.slice(1)}</span>
      </p>
    </li>

    <li class="exercise-list-text">
      <p class="exercise-label label-width-target">
        Target: <span class="exercise-text-span">${c.charAt(0).toUpperCase()+c.slice(1)}</span>
      </p>
    </li>
  </ul>
 </li> `).join("")}function K(x){return x.map(({filter:_,name:s,imgURL:p})=>`<li class="js-card-photo-item"  data-name="${s}"  style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${p});">
             <div class="js-card-text">
                <p class="js-title-card-photo" style=" border: none;
                    background-color: transparent;">${s.charAt(0).toUpperCase()+s.slice(1)}
               </p>
               <p class ="js-text-card-photo">${_}</p>
             </div>
          </li>`).join("")}let Z=[];const dt=document.querySelector("[data-modal-close]"),Q=document.querySelector(".modal-section"),H=document.querySelector(".btn-add-to-favorites"),pt=document.querySelector(".modal-window"),ht=document.querySelector(".name-exercies"),gt=document.querySelector(".rating_value"),vt=document.querySelector(".target"),mt=document.querySelector(".body"),xt=document.querySelector(".equipment"),yt=document.querySelector(".popular"),Et=document.querySelector(".description-of-exercises"),Pt=document.querySelector(".img-modal");dt.addEventListener("click",bt);function bt(){Q.classList.toggle("is-hidden"),H.classList.toggle("on-click-btn"),H.disabled=!1}function Ct(x){x.preventDefault(),Q.classList.toggle("is-hidden");async function _(){try{const p={endpoint:`exercises/${x.currentTarget.closest(".card-info-item-ex").dataset.id}`};return await V(p)}catch(s){console.log(s)}}_().then(({_id:s,bodyPart:p,description:e,equipment:i,gifUrl:n,name:c,popularity:d,rating:a,target:u})=>{_t(s,p,e,i,n,c,d,a,u),localStorage.getItem(`Name-Exercies: ${s}`)!==null&&(H.disabled=!0,H.classList.toggle("on-click-btn"))})}function _t(x,_,s,p,e,i,n,c,d){pt.setAttribute("data-id",x),ht.textContent=i,gt.textContent=Number(c),vt.textContent=d,mt.textContent=_,xt.textContent=p,yt.textContent=n,Et.textContent=s,Pt.src=e}H.addEventListener("click",Mt);function Tt(x){return localStorage.getItem(x)!==null}function Mt(x){const _=x.currentTarget.parentNode.dataset.id,s=`Name-Exercies: ${_}`;localStorage.setItem(s,_),Tt(s)&&H.classList.toggle("on-click-btn"),H.disabled=!0}const It=document.querySelectorAll(".star"),St=document.querySelector(".rating_value"),Lt=Math.round(parseFloat(St.textContent));It.forEach((x,_)=>{_<Lt&&x.classList.add("active-star")});function Bt(){const x=document.getElementById("scrollToTopButton");document.body.scrollTop>20||document.documentElement.scrollTop>20?x.style.display="block":x.style.display="none"}document.getElementById("scrollToTopButton").addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0});window.onscroll=Bt;