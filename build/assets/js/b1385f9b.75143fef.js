"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},h),{},{components:r})):n.createElement(m,o({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o='<a name="_toc1529489236"></a>**11. ABD Notes:**',s={unversionedId:"cache/ABD_notes",id:"cache/ABD_notes",title:'<a name="_toc1529489236"></a>**11. ABD Notes:**',description:"I gave some thought in to how to resolve the back2back request and this is what I produced:",source:"@site/docs/cache/ABD_notes.md",sourceDirName:"cache",slug:"/cache/ABD_notes",permalink:"/noamsabb/Docu_Test/docs/cache/ABD_notes",draft:!1,editUrl:"https://github.com/amichai-bd/fpga_mafia/docs/cache/ABD_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"Cache",previous:{title:'<a name="_toc121115370"></a><a name="_toc93555976"></a>**10. Appendix**',permalink:"/noamsabb/Docu_Test/docs/cache/Appendix"}},l={},c=[],h={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11-abd-notes"},(0,a.kt)("a",{name:"_toc1529489236"}),(0,a.kt)("strong",{parentName:"h1"},"11. ABD Notes:")),(0,a.kt)("p",null,"I gave some thought in to how to resolve the back2back request and this is what I produced:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each tq entry can serve multiple writes that are to the same CL by writing the writes in order into the merge buffer."),(0,a.kt)("li",{parentName:"ul"},"In case the CL hits in the pipe, there is no issue \u2013 forwarding units & read modify write will make sure the tag array & the data array will have the correct cohirent data."),(0,a.kt)("li",{parentName:"ul"},"In case the second write was Back2Back, we don\u2019t want to deallocate the TQ entry after the first write, so we can add a counter that count how many writes are merged into the same CL, and the counter decrements with every lu hit response from pipe, as long as the State is in S","_","LU","_","CORE & the counter is not back to 0, the entry will not go back to IDLE.")),(0,a.kt)("p",null,"Once the Entry is set as a Read Request entry, (due to a read lookup hit the same address), We will not merge any new request to the same entry."),(0,a.kt)("p",null,"This is why this would work:"),(0,a.kt)("p",null,"The new Read request enters the cache in Cycle Q1."),(0,a.kt)("p",null,"In Q2 the TQ allocation in visable + we have the tag array results from the lookup."),(0,a.kt)("p",null,'Incase Q2 is a tag miss, the new request in Q1 will be canceled and stored in the \u201cre-issue-buffer" - and will not affect any existing entries.\nOnly once the read miss is resolved with the fill, the \u201cre-issue-buffer" will re-send the new lookup and allocate the tq array / merge into an existing TQ entry.'),(0,a.kt)("p",null,"Need to make sure we correctly handle the case of a read after write back2back with Cacheline miss. - make sure we send a single FM fill request.(TODO)"),(0,a.kt)("p",null,"A read request that has the same CL as existing TQ entry that is also marked as read will NOT merge!!! And will allocate a new TQ entry. (a TQ entry can serve multiple writes, but a single READ!)"),(0,a.kt)("p",null,"Need to think about this: Once an entry is set as \u201cRead",(0,a.kt)("a",{name:"_int_ypnewna7"}),"\u201d, writes cannot merge more writes into it?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the read missed, we will cancel the write, and re-issue it once the read miss is resolved."),(0,a.kt)("li",{parentName:"ul"},"If the read hit, the pipe lookup will return the data, will dealloc the entry.\nIn parallel a different entry will handle the write. (which we expect to hit \u2013 just like the read before it)"),(0,a.kt)("li",{parentName:"ul"},"Not expecting to have 2 entries with the same cl & both are wait fill.. we can have 2 entries with same CL if we know that there was cache hit."),(0,a.kt)("li",{parentName:"ul"},"The order is promised due to the request intering the pipe in order. And if they all hit there is no issue. One there is a miss, no new request is being served in the pipe. So again- order is preserved.")))}p.isMDXComponent=!0}}]);