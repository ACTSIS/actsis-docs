"use strict";(self.webpackChunk_actsis_docs=self.webpackChunk_actsis_docs||[]).push([[4813],{17448:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(50539),a=n(11865),i=n(74848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},18189:(e,t,n)=>{n.d(t,{A:()=>C});n(96540);var s=n(18215),a=n(83750),i=n(74848);function r(e){let{children:t,className:n}=e;return(0,i.jsx)("article",{className:n,children:t})}var l=n(56289);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,a.e7)(),{permalink:c,title:d}=n,u=r?"h1":"h2";return(0,i.jsx)(u,{className:(0,s.A)(o.title,t),children:r?d:(0,i.jsx)(l.A,{to:c,children:d})})}var d=n(50539),u=n(81430),g=n(98569);const m={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,children:n})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,a.e7)(),{date:r,readingTime:l}=n,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,s.A)(m.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(h,{readingTime:l})]})]});var c}var b=n(95921);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,a.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,i.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>{var n;return(0,i.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,i.jsx)(b.A,{author:Object.assign({},e,{imageURL:null!=(n=r.authorsImageUrls[t])?n:e.imageURL})})},t)}))})}function T(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(j,{}),(0,i.jsx)(A,{})]})}var v=n(30099),N=n(62008);function w(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,a.e7)();return(0,i.jsx)("div",{id:r?v.LU:void 0,className:(0,s.A)("markdown",n),children:(0,i.jsx)(N.A,{children:t})})}var y=n(204),P=n(5783),k=n(56239),O=n(98587);const U=["blogPostTitle"];function _(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t}=e,n=(0,O.A)(e,U);return(0,i.jsx)(l.A,Object.assign({"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n,{children:(0,i.jsx)(_,{})}))}function B(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:n,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=n.length>0;if(!(g||u||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,i.jsx)("div",{className:(0,s.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(k.A,{tags:n})})}),e&&(0,i.jsx)(P.A,{className:(0,s.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,i.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,i.jsx)(k.A,{tags:n})}),u&&(0,i.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,i.jsx)(R,{blogPostTitle:r,to:e.permalink})})]})}function C(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,s.A)(l,n),children:[(0,i.jsx)(T,{}),(0,i.jsx)(w,{children:t}),(0,i.jsx)(B,{})]})}},14005:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(83750),a=n(18189),i=n(74848);function r(e){let{items:t,component:n=a.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},26956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(96540);var s=n(18215),a=n(50539),i=n(68207),r=n(204),l=n(11926),o=n(56289),c=n(60569),d=n(17448),u=n(37220),g=n(14005),m=n(40665),h=n(9303),p=n(74848);function x(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:n,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.A,{items:n}),(0,p.jsx)(d.A,{metadata:i})]})}function b(e){return(0,p.jsxs)(i.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,Object.assign({},e)),(0,p.jsx)(j,Object.assign({},e))]})}},40665:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(18215),a=n(27289),i=n(204),r=n(58813),l=n(74848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(a.Rc,{}),className:(0,s.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(a.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.AE,{}),(0,l.jsx)(o,Object.assign({},e))]})}},11926:(e,t,n)=>{n.d(t,{ZD:()=>r,uz:()=>l});n(96540);var s=n(50539),a=n(81430);n(74848);function i(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=i();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},27289:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(96540);var s=n(50539),a=n(27143),i=n(74848);function r(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},58813:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(15005),a=n(74848);function i(e){return(0,a.jsx)(s.V,Object.assign({},e))}}}]);