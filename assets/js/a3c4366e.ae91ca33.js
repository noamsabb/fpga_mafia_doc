"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[4672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),h=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=h(r),m=i,u=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(u,o(o({ref:t},f),{},{components:r})):a.createElement(u,o({ref:t},f))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var h=2;h<n;h++)o[h]=r[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var a=r(7462),i=(r(7294),r(3905));const n={},o='<a name="_toc1444127171"></a>**7. Merge Buffer Behavior**',l={unversionedId:"cache/Merge_Buffer_Behavior",id:"cache/Merge_Buffer_Behavior",title:'<a name="_toc1444127171"></a>**7. Merge Buffer Behavior**',description:"In this chapter we will explain the Merge Buffer behavior through different cases",source:"@site/docs/cache/Merge_Buffer_Behavior.md",sourceDirName:"cache",slug:"/cache/Merge_Buffer_Behavior",permalink:"/fpga_mafia_doc/docs/cache/Merge_Buffer_Behavior",draft:!1,editUrl:"https://github.com/noamsabb/fpga_mafia_doc/docs/cache/Merge_Buffer_Behavior.md",tags:[],version:"current",frontMatter:{},sidebar:"Cache",previous:{title:'<a name="_toc1967356741"></a><a name="_toc1779312326"></a>**6. High level Transaction Flows**',permalink:"/fpga_mafia_doc/docs/cache/High_level_Transaction_Flows"},next:{title:'<a name="_toc2123724073"></a>**8. Verification**',permalink:"/fpga_mafia_doc/docs/cache/Verification"}},s={},h=[{value:'<a name="_toc761038880"></a><strong>7.1 Read After Write (same Cache Line, word hit)</strong>',id:"71-read-after-write-same-cache-line-word-hit",level:2},{value:'<a name="_toc1647958394"></a><strong>7.2 Read After Write (same Cache Line, word Miss)</strong>',id:"72-read-after-write-same-cache-line-word-miss",level:2},{value:'<a name="_toc1077647588"></a><strong>7.3 Write After Write (Same Cache Line, same/different word)</strong>',id:"73-write-after-write-same-cache-line-samedifferent-word",level:2},{value:'<a name="_toc854682441"></a><strong>7.4 Write After Read (Same Cache Line, Same/different Word)</strong>',id:"74-write-after-read-same-cache-line-samedifferent-word",level:2},{value:'<a name="_toc2125413379"></a><strong>7.5 Read After Read (Same Cache Line, Same/different Word)</strong>',id:"75-read-after-read-same-cache-line-samedifferent-word",level:2}],f={toc:h},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"7-merge-buffer-behavior"},(0,i.kt)("a",{name:"_toc1444127171"}),(0,i.kt)("strong",{parentName:"h1"},"7. Merge Buffer Behavior")),(0,i.kt)("p",null,"In this chapter we will explain the Merge Buffer behavior through different cases"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{name:"_int_nz7q838o"}),"merge","_","buffer is a buffer in our TQ that will store partial data during the time we are waiting for the Cache Line Data to be filled by the Far Memory.\nEvery entry in the TQ is linked to a Merge Buffer entry then we need to take care that every request to the same Cache-Line will never allocate a new entry if there already is an entry in the TQ for that specific Cache-Line."),(0,i.kt)("h2",{id:"71-read-after-write-same-cache-line-word-hit"},(0,i.kt)("a",{name:"_toc761038880"}),(0,i.kt)("strong",{parentName:"h2"},"7.1 Read After Write (same Cache Line, word hit)")),(0,i.kt)("p",null,"In this case, if the Write request got a Miss, it will update the Far Memory (fill request) that we need a data and update the TQ that he got a Miss.\nThe partial write data (no a full CL) will be stored in the Merge Buffer until we get the fill response from FM.\nDuring this time, if the TQ get a Read Request to the same Cache Line + same word offset:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We know that the lookup will get a Miss from the pipe. "),(0,i.kt)("li",{parentName:"ol"},"TQ merge buffer will response with TQ Hit to this specific word (Word Hit)."),(0,i.kt)("li",{parentName:"ol"},"It will indicate to the pipe that there is no need for a fill from Far Memory. (Cancel the fill)"),(0,i.kt)("li",{parentName:"ol"},"It will read it straight from the Merge Buffer and return it to Core. Make sure the Merge buffer response will be the correct cycle (Q3) of the pipe lookup that we already know will miss.")),(0,i.kt)("p",null,"This will happen only if the TQ is not in S","_","FILL","_","LU state. If it is, the data will be read from the Tag Array and not directly from the Merge Buffer."),(0,i.kt)("h2",{id:"72-read-after-write-same-cache-line-word-miss"},(0,i.kt)("a",{name:"_toc1647958394"}),(0,i.kt)("strong",{parentName:"h2"},"7.2 Read After Write (same Cache Line, word Miss)")),(0,i.kt)("p",null,"Just like in the last case the Write request got a Miss and is waiting for the data from Far Memory and stored the partial write to the Merge Buffer.\nDuring this time, we are getting a Read Request to the same CacheLine but this time to another word. In this case, contrary to the last one, we cannot read the data from the Merge Buffer because we got Word Miss.\n1","."," TQ will send a Stall signal to the core so it will wait for the data to be filled.\n2","."," Once the TQ gets the Far Memory response for the Write request and will fill our Cache Line in the Merge Buffer, this line will be written to the Data Cache Array with an indication \u201crd","_","fill","_","rsp\u201d.\n3","."," The pipe will write the fill + return the data to the TQ as if there was a read hit so it will be sent as a Read response to the Core in Q3."),(0,i.kt)("h2",{id:"73-write-after-write-same-cache-line-samedifferent-word"},(0,i.kt)("a",{name:"_toc1077647588"}),(0,i.kt)("strong",{parentName:"h2"},"7.3 Write After Write (Same Cache Line, same/different word)")),(0,i.kt)("p",null,"For this case, we have already tried to Write to the same Cache Line but now we want to make another Write to a different word in that Cache Line. The first write will miss and send the fill request to FM + allocate a merge","_","buffer entry.\nThe second Write request will enter the pipe, get a Write Miss indication but this time it will not make a Far Memory request because we have an indication from the TQ that we have a \u201cMerge Buffer Hit\u201d which mean we have already a Line in the Merge Buffer for this CacheLine. The partial Write data will be written to that line in the Merge buffer.\nOnce the Far Memory response to the Merge Buffer, the Cache Line will be filled (without overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," word writes)\nThe TQ entry will become a fill candidate, and eventually will win the arbitration to fill the cache though the Pipe."),(0,i.kt)("h2",{id:"74-write-after-read-same-cache-line-samedifferent-word"},(0,i.kt)("a",{name:"_toc854682441"}),(0,i.kt)("strong",{parentName:"h2"},"7.4 Write After Read (Same Cache Line, Same/different Word)")),(0,i.kt)("p",null,"Currently In our architecture, there is no issue with Write after Read due to the fact the incase of a read miss, we stall any new requests from the core until the first miss is resolved. "),(0,i.kt)("h2",{id:"75-read-after-read-same-cache-line-samedifferent-word"},(0,i.kt)("a",{name:"_toc2125413379"}),(0,i.kt)("strong",{parentName:"h2"},"7.5 Read After Read (Same Cache Line, Same/different Word)")),(0,i.kt)("p",null,"Currently In our architecture, there is no issue with Raed after Read due to the fact the incase of a read miss, we stall any new requests from the core. until the first miss is resolved."))}d.isMDXComponent=!0}}]);