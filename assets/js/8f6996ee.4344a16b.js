"use strict";(self.webpackChunk_actsis_docs=self.webpackChunk_actsis_docs||[]).push([[493],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),l=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=t,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:a},u),{},{components:n})):r.createElement(f,s({ref:a},u))}));function f(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:t,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8761:function(e,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(7462),t=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"grafana-concepts",title:"Grafana"},c=void 0,l={unversionedId:"artemis/basics/grafana-concepts",id:"artemis/basics/grafana-concepts",title:"Grafana",description:"Grafana es una herramienta de visualizaci\xf3n de c\xf3digo abierto para analizar y monitorear m\xe9tricas, logs y datos de rastreo sin importar de d\xf3nde provengan.",source:"@site/docs/artemis/basics/grafana-concepts.md",sourceDirName:"artemis/basics",slug:"/artemis/basics/grafana-concepts",permalink:"/docs/artemis/basics/grafana-concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"grafana-concepts",title:"Grafana"},sidebar:"docs",previous:{title:"Artemis",permalink:"/docs/artemis/"},next:{title:"Alertas de correo electr\xf3nico",permalink:"/docs/artemis/content/alerts-email"}},u={},d=[{value:"\xbfQu\xe9 es un panel?",id:"qu\xe9-es-un-panel",level:2},{value:"\xbfQu\xe9 es un dashboard?",id:"qu\xe9-es-un-dashboard",level:2},{value:"\xbfC\xf3mo ingresar a Grafana?",id:"c\xf3mo-ingresar-a-grafana",level:2},{value:"Ayudas r\xe1pidas",id:"ayudas-r\xe1pidas",level:2}],p={toc:d},m="wrapper";function f(e){var a=e.components,i=(0,t.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Grafana es una herramienta de visualizaci\xf3n de c\xf3digo abierto para analizar y monitorear m\xe9tricas, logs y datos de rastreo sin importar de d\xf3nde provengan."),(0,o.kt)("h2",{id:"qu\xe9-es-un-panel"},"\xbfQu\xe9 es un panel?"),(0,o.kt)("p",null,"Un panel es un lienzo en blanco, donde se pueden agregar paneles para mostrar m\xe9tricas e informaci\xf3n de forma visual."),(0,o.kt)("p",null,"Por ejemplo, en la siguiente imagen se muestra un panel con informaci\xf3n de la duraci\xf3n de una prueba de rendimiento en segundos."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Panel",src:n(3268).Z,width:"859",height:"343"})),(0,o.kt)("h2",{id:"qu\xe9-es-un-dashboard"},"\xbfQu\xe9 es un dashboard?"),(0,o.kt)("p",null,"Un dashboard es un conjunto de paneles que se pueden agrupar para mostrar informaci\xf3n de forma visual, este concepto de dashboard o tablero es tomado de los tableros de instrumentos de los autom\xf3viles brindando a los conductores informaci\xf3n de forma visual sobre el estado del veh\xedculo. Del mismo modo, los paneles digitales nos ayuda a comprender y gestionar los sistemas."),(0,o.kt)("p",null,"Por ahora, en Artemis tenemos un dashboard por cada prueba de rendimiento y el monitoreo de los servicios, la siguiente imagen ilustra un dashboard con informaci\xf3n de la prueba de rendimiento."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard pruebas de rendimiento",src:n(7154).Z,width:"1915",height:"1991"})),(0,o.kt)("h2",{id:"c\xf3mo-ingresar-a-grafana"},"\xbfC\xf3mo ingresar a Grafana?"),(0,o.kt)("p",null,"Para ingresar a Grafana, debes ingresar a la siguiente URL: ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.actsis.com"},"https://grafana.actsis.com")," y autenticarse con los credenciales enviados por correo electr\xf3nico."),(0,o.kt)("p",null,"En caso de no tener acceso a Grafana \xf3 olvidar la contrase\xf1a, debes solicitarlo a trav\xe9s de un ticket en el ",(0,o.kt)("a",{parentName:"p",href:"https://sgi.actsis.com"},"SGI"),"."),(0,o.kt)("h2",{id:"ayudas-r\xe1pidas"},"Ayudas r\xe1pidas"),(0,o.kt)("p",null,"En los paneles de Grafana, en la parte superior derecha se encuentra el bot\xf3n de ayuda, el cual contiene informaci\xf3n sobre el panel y los datos que se muestran en el mismo."),(0,o.kt)("p",null,"por ejemplo, en el siguiente panel se muestra la ayuda del panel de duraci\xf3n de una prueba de rendimiento."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ayudas R\xe1pidas",src:n(8995).Z,width:"987",height:"384"})))}f.isMDXComponent=!0},7154:function(e,a,n){a.Z=n.p+"assets/images/Dashboard_Pruebas_rendimiento-35da95c7ae12c8a4ba5e7a6400f42c53.webp"},8995:function(e,a,n){a.Z=n.p+"assets/images/ayudas-rapidas-ec9853b223a0a4a7d8e93727d5f8f30b.webp"},3268:function(e,a){a.Z="data:image/webp;base64,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"}}]);