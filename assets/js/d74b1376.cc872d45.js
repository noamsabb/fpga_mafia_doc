"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[4881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},m),{},{components:n})):r.createElement(d,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s='<a name="_toc2054752113"></a>**9. Assumption & Assertions**',i={unversionedId:"cache/Assumption_Assertions",id:"cache/Assumption_Assertions",title:'<a name="_toc2054752113"></a>**9. Assumption & Assertions**',description:"9.1 Core Interface Assumption:",source:"@site/docs/cache/Assumption_Assertions.md",sourceDirName:"cache",slug:"/cache/Assumption_Assertions",permalink:"/noamsabb/fpga_mafia_doc/docs/cache/Assumption_Assertions",draft:!1,editUrl:"https://github.com/amichai-bd/fpga_mafia/docs/cache/Assumption_Assertions.md",tags:[],version:"current",frontMatter:{},sidebar:"Cache",previous:{title:'<a name="_toc2123724073"></a>**8. Verification**',permalink:"/noamsabb/fpga_mafia_doc/docs/cache/Verification"},next:{title:'<a name="_toc121115370"></a><a name="_toc93555976"></a>**10. Appendix**',permalink:"/noamsabb/fpga_mafia_doc/docs/cache/Appendix"}},c={},l=[{value:'<a name="_toc1951742785"></a><a name="_toc1030114760"></a><strong>9.1 Core Interface Assumption:</strong>',id:"91-core-interface-assumption",level:2},{value:'<a name="_toc2063968789"></a><a name="_toc826535799"></a><strong>9.2 Far Memory Interface Assumption:</strong>',id:"92-far-memory-interface-assumption",level:2}],m={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"9-assumption--assertions"},(0,a.kt)("a",{name:"_toc2054752113"}),(0,a.kt)("strong",{parentName:"h1"},"9. Assumption & Assertions")),(0,a.kt)("h2",{id:"91-core-interface-assumption"},(0,a.kt)("a",{name:"_toc1951742785"}),(0,a.kt)("a",{name:"_toc1030114760"}),(0,a.kt)("strong",{parentName:"h2"},"9.1 Core Interface Assumption:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core will not send Read/Write requests when Cache asserts the Stall signals"),(0,a.kt)("li",{parentName:"ul"},"All Reads & Writes are Word aligned"),(0,a.kt)("li",{parentName:"ul"},"Writes can be sb sh or sw"),(0,a.kt)("li",{parentName:"ul"},"Reads can be lb, lh or lw"),(0,a.kt)("li",{parentName:"ul"},"Core cannot Reject or Stall Read Responses")),(0,a.kt)("h2",{id:"92-far-memory-interface-assumption"},(0,a.kt)("a",{name:"_toc2063968789"}),(0,a.kt)("a",{name:"_toc826535799"}),(0,a.kt)("strong",{parentName:"h2"},"9.2 Far Memory Interface Assumption:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The FM Read response latency is not deterministic "),(0,a.kt)("li",{parentName:"ul"},'FM Cannot reject/Stall\n1) \u201cDirty Evict\u201d (Write modified Data to FM)\n2) Read miss. (Read Request from Cache to FM)\nThis means there is no need for an "ack.accept" interface between cache <-> FM')))}u.isMDXComponent=!0}}]);