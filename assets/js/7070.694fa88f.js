(self.webpackChunk_actsis_docs=self.webpackChunk_actsis_docs||[]).push([[7070],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4881:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(5999),o=n(5281),c=n(7462),l=n(3366),i=n(6010),s={iconEdit:"iconEdit_Z9Sw"},u=["className"];function m(e){var t=e.className,n=(0,l.Z)(e,u);return r.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s.iconEdit,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},r.createElement(m,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(7294),c=n(6010),l=n(5999),i=n(6668),s=n(9960),u={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"},m=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,a.Z)(e,m),p=(0,i.L)().navbar.hideOnScroll;if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},d,{id:void 0}));var f=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return o.createElement(t,(0,r.Z)({},d,{className:(0,c.Z)("anchor",p?u.anchorWithHideOnScrollNavbar:u.anchorWithStickyNavbar,d.className),id:n}),d.children,o.createElement(s.Z,{className:"hash-link",to:"#"+n,"aria-label":f,title:f},"\u200b"))}},2359:function(e,t,n){"use strict";n.d(t,{Z:function(){return ge}});var r=n(7294),a=n(3905),o=n(7462),c=n(3366),l=n(5742),i=["mdxType","originalType"];var s=n(2389),u=n(6010),m=n(2949),d=n(6668);function p(){var e=(0,d.L)().prism,t=(0,m.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var f=n(5281),g=n(6528),v=n(7594),h=n.n(v),y=(0,g.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),b=(0,g.Z)(/\{([\d,-]+)\}/,{range:1}),E={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=E[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function N(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&b.test(o)){var c=o.match(b).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=a[0].className,i=h()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(E),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),g=0;g<u.length;){var v=u[g].match(s);if(v){var y=v.slice(1).find((function(e){return void 0!==e}));d[y]?m[d[y]].range+=g+",":p[y]?m[p[y]].start=g:f[y]&&(m[f[y]].range+=m[f[y]].start+"-"+(g-1)+","),u.splice(g,1)}else g+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;h()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var Z={codeBlockContainer:"codeBlockContainer_Ckt0"},w=["as"];function C(e){var t=e.as,n=(0,c.Z)(e,w),a=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(p());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,u.Z)(n.className,Z.codeBlockContainer,f.k.common.codeBlock)}))}var B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function j(e){var t=e.children,n=e.className;return r.createElement(C,{as:"pre",tabIndex:0,className:(0,u.Z)(B.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:B.codeBlockLines},t))}var T=n(9688),L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function O(e,t){var n=(0,r.useState)(),a=n[0],o=n[1],c=(0,r.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=L);var a=(0,T.zX)(t),o=(0,T.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(a);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,a,o])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},x={Prism:n(7410).Z,theme:_};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var W=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},A=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var z=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),S(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=P({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=P({},n,{backgroundColor:null}),a}(e.theme,e.language):void 0;return t.themeDict=n})),S(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=P({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?P({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),S(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),S(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=P({},D(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?P({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),S(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=r[c]++)<a[c];){var s=void 0,u=t[c],m=n[c][o];if("string"==typeof m?(u=c>0?u:["plain"],s=m):(u=A(u,m.type),m.alias&&(u=A(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(W),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)I(l),i.push(l=[]),l.push({types:u,content:d[f]})}else c++,t.push(u),n.push(s),r.push(0),a.push(s.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return I(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),V=z,H={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function R(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,c=e.getLineProps,l=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=c({line:t,className:(0,u.Z)(n,a&&H.codeLine)}),s=t.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))}));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:H.codeLineNumber}),r.createElement("span",{className:H.codeLineContent},s)):s,r.createElement("br",null))}var M=n(5999);function q(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function F(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}var G={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $(e){var t=e.code,n=e.className,a=(0,r.useState)(!1),o=a[0],c=a[1],l=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var c=document.getSelection(),l=c.rangeCount>0&&c.getRangeAt(0);r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),l&&(c.removeAllRanges(),c.addRange(l)),o&&o.focus()}(t),c(!0),l.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,M.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,G.copyButton,o&&G.copyButtonCopied),onClick:i},r.createElement("span",{className:G.copyButtonIcons,"aria-hidden":"true"},r.createElement(q,{className:G.copyButtonIcon}),r.createElement(F,{className:G.copyButtonSuccessIcon})))}function U(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}var X={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Y(e){var t=e.className,n=e.onClick,a=e.isEnabled,o=(0,M.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,a&&X.wordWrapButtonEnabled),"aria-label":o,title:o},r.createElement(U,{className:X.wordWrapButtonIcon,"aria-hidden":"true"}))}function Q(e){var t,n,a,c,l,i,s,m,f,g,v,h=e.children,b=e.className,E=void 0===b?"":b,k=e.metastring,Z=e.title,w=e.showLineNumbers,j=e.language,T=(0,d.L)().prism,L=T.defaultLanguage,_=T.magicComments,S=null!=(t=null!=j?j:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:L,P=p(),W=(a=(0,r.useState)(!1),c=a[0],l=a[1],i=(0,r.useState)(!1),s=i[0],m=i[1],f=(0,r.useRef)(null),g=(0,r.useCallback)((function(){var e=f.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),l((function(e){return!e}))}),[f,c]),v=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),O(f,v),(0,r.useEffect)((function(){v()}),[c,v]),(0,r.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:f,isEnabled:c,isCodeScrollable:s,toggle:g}),I=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(y))?void 0:n.groups.title)?t:""}(k)||Z,A=N(h,{metastring:k,language:S,magicComments:_}),D=A.lineClassNames,z=A.code,H=null!=w?w:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(k);return r.createElement(C,{as:"div",className:(0,u.Z)(E,S&&!E.includes("language-"+S)&&"language-"+S)},I&&r.createElement("div",{className:B.codeBlockTitle},I),r.createElement("div",{className:B.codeBlockContent},r.createElement(V,(0,o.Z)({},x,{theme:P,code:z,language:null!=S?S:"text"}),(function(e){var t=e.className,n=e.tokens,a=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:W.codeBlockRef,className:(0,u.Z)(t,B.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,u.Z)(B.codeBlockLines,H&&B.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(R,{key:t,line:e,getLineProps:a,getTokenProps:o,classNames:D[t],showLineNumbers:H})}))))})),r.createElement("div",{className:B.buttonGroup},(W.isEnabled||W.isCodeScrollable)&&r.createElement(Y,{className:B.codeButton,onClick:function(){return W.toggle()},isEnabled:W.isEnabled}),r.createElement($,{className:B.codeButton,code:z}))))}var J=["children"];function K(e){var t=e.children,n=(0,c.Z)(e,J),a=(0,s.Z)(),l=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?Q:j;return r.createElement(i,(0,o.Z)({key:String(a)},n),l)}var ee=n(9960);var te=n(6043),ne={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"},re=["summary","children"];function ae(e){return!!e&&("SUMMARY"===e.tagName||ae(e.parentElement))}function oe(e,t){return!!e&&(e===t||oe(e.parentElement,t))}function ce(e){var t=e.summary,n=e.children,a=(0,c.Z)(e,re),l=(0,s.Z)(),i=(0,r.useRef)(null),m=(0,te.u)({initialState:!a.open}),d=m.collapsed,p=m.setCollapsed,f=(0,r.useState)(a.open),g=f[0],v=f[1],h=r.isValidElement(t)?t:r.createElement("summary",null,null!=t?t:"Details");return r.createElement("details",(0,o.Z)({},a,{ref:i,open:g,"data-collapsed":d,className:(0,u.Z)(ne.details,l&&ne.isBrowser,a.className),onMouseDown:function(e){ae(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ae(t)&&oe(t,i.current)&&(e.preventDefault(),d?(p(!1),v(!0)):p(!0))}}),h,r.createElement(te.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),v(!e)}},r.createElement("div",{className:ne.collapsibleContent},n)))}var le={details:"details_b_Ee"},ie="alert alert--info";function se(e){var t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return r.createElement(ce,(0,o.Z)({},t,{className:(0,u.Z)(ie,le.details,t.className)}))}var ue=n(2503);function me(e){return r.createElement(ue.Z,e)}var de={containsTaskList:"containsTaskList_mC6p"};var pe={img:"img_ev3q"};var fe={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,a=(n.mdxType,n.originalType,(0,c.Z)(n,i));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(l.Z,e,t)},code:function(e){var t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(K,e)},a:function(e){return r.createElement(ee.Z,e)},pre:function(e){var t;return r.createElement(K,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(se,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&de.containsTaskList))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,pe.img))}));var t},h1:function(e){return r.createElement(me,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(me,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(me,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(me,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(me,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(me,(0,o.Z)({as:"h6"},e))},admonition:n(5943).Z,mermaid:function(){return null}};function ge(e){var t=e.children;return r.createElement(a.Zo,{components:fe},t)}},2244:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(6010),o=n(9960);function c(e){var t=e.permalink,n=e.title,c=e.subLabel,l=e.isNext;return r.createElement(o.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&r.createElement("div",{className:"pagination-nav__sublabel"},c),r.createElement("div",{className:"pagination-nav__label"},n))}},3008:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o=n(9960),c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function l(e){var t=e.permalink,n=e.label,l=e.count;return r.createElement(o.Z,{href:t,className:(0,a.Z)(c.tag,l?c.tagWithCount:c.tagRegular)},n,l&&r.createElement("span",null,l))}},1526:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o=n(5999),c=n(3008),l={tags:"tags_jXut",tag:"tag_QGVx"};function i(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(l.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:l.tag},r.createElement(c.Z,{label:t,permalink:n}))}))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);