(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(7798)}])},7798:function(k,d,b){"use strict";b.r(d),b.d(d,{default:function(){return J}});var l=b(5893),f=b(9008),m=b.n(f),n=b(8947),g=b(5697),a=b.n(g),e=b(7294);function o(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function p(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?o(Object(b),!0).forEach(function(a){r(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):o(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function q(a){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function r(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function s(a){return t(a)||u(a)||v(a)||x()}function t(a){if(Array.isArray(a))return w(a)}function u(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function v(a,c){if(a){if("string"==typeof a)return w(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return w(a,c)}}function w(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function x(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(a){var b;return(b=a,(b-=0)==b)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(b,a){return a?a.toUpperCase():""})).substr(0,1).toLowerCase()+a.substr(1)}var z=["style"];function h(e,a){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var f=(a.children||[]).map(function(a){return h(e,a)}),b=Object.keys(a.attributes||{}).reduce(function(c,b){var e,d=a.attributes[b];switch(b){case"class":c.attrs.className=d,delete a.attributes.class;break;case"style":c.attrs.style=(e=d).split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,b){var d,e=b.indexOf(":"),c=y(b.slice(0,e)),f=b.slice(e+1).trim();return c.startsWith("webkit")?a[(d=c).charAt(0).toUpperCase()+d.slice(1)]=f:a[c]=f,a},{});break;default:0===b.indexOf("aria-")||0===b.indexOf("data-")?c.attrs[b.toLowerCase()]=d:c.attrs[y(b)]=d}return c},{attrs:{}}),d=c.style,g=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,z);return b.attrs.style=p(p({},b.attrs.style),void 0===d?{}:d),e.apply(void 0,[a.tag,p(p({},b.attrs),g)].concat(s(f)))}var i=!1;try{i=!0}catch(A){}function B(a){return a&&"object"===q(a)&&a.prefix&&a.iconName&&a.icon?a:n.Qc.icon?n.Qc.icon(a):null===a?null:a&&"object"===q(a)&&a.prefix&&a.iconName?a:Array.isArray(a)&&2===a.length?{prefix:a[0],iconName:a[1]}:"string"==typeof a?{prefix:"fas",iconName:a}:void 0}function C(b,a){return Array.isArray(a)&&a.length>0|| !Array.isArray(a)&&a?r({},b,a):{}}var c=e.forwardRef(function(b,H){var a,d,j,k,l,m,o,q,t,u,v,w,x,y,z,A,e,g,f,h,E,I=b.icon,J=b.mask,K=b.symbol,L=b.className,M=b.title,N=b.titleId,O=b.maskId,F=B(I),P=C("classes",[].concat(s((j=(a=b).beat,k=a.fade,l=a.beatFade,m=a.bounce,o=a.shake,q=a.flash,t=a.spin,u=a.spinPulse,v=a.spinReverse,w=a.pulse,x=a.fixedWidth,y=a.inverse,z=a.border,A=a.listItem,e=a.flip,g=a.size,f=a.rotation,h=a.pull,E=(d={"fa-beat":j,"fa-fade":k,"fa-beat-fade":l,"fa-bounce":m,"fa-shake":o,"fa-flash":q,"fa-spin":t,"fa-spin-reverse":v,"fa-spin-pulse":u,"fa-pulse":w,"fa-fw":x,"fa-inverse":y,"fa-border":z,"fa-li":A,"fa-flip":!0===e,"fa-flip-horizontal":"horizontal"===e||"both"===e,"fa-flip-vertical":"vertical"===e||"both"===e},r(d,"fa-".concat(g),null!=g),r(d,"fa-rotate-".concat(f),null!=f&&0!==f),r(d,"fa-pull-".concat(h),null!=h),r(d,"fa-swap-opacity",a.swapOpacity),d),Object.keys(E).map(function(a){return E[a]?a:null}).filter(function(a){return a}))),s(L.split(" ")))),Q=C("transform","string"==typeof b.transform?n.Qc.transform(b.transform):b.transform),R=C("mask",B(J)),G=(0,n.qv)(F,p(p(p(p({},P),Q),R),{},{symbol:K,title:M,titleId:N,maskId:O}));if(!G)return!function(){if(!i&&console&&"function"==typeof console.error){var a;(a=console).error.apply(a,arguments)}}("Could not find icon",F),null;var S=G.abstract,T={ref:H};return Object.keys(b).forEach(function(a){c.defaultProps.hasOwnProperty(a)||(T[a]=b[a])}),D(S[0],T)});c.displayName="FontAwesomeIcon",c.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},c.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var D=h.bind(null,e.createElement),E=function(a){var b=a.children;return(0,l.jsx)("div",{className:" bg-gray-600 text-yellow-500 rounded-md border-2 border-yellow-500 border-solid text-sm font-bold inline-block px-2 py-1 m-1 ",children:b})},F=function(){return(0,l.jsx)("section",{className:"bg-yellow-50 text-black",children:(0,l.jsxs)("div",{className:"mx-auto max-w-7xl px-8 py-36",children:[(0,l.jsxs)("div",{className:"pb-6 text-4xl text-center underline decoration-yellow-500",children:["me??",(0,l.jsx)(c,{className:"ml-1",icon:"fa-solid fa-person",size:"sm"})]}),(0,l.jsx)("div",{className:"pt-8",children:(0,l.jsx)("div",{className:"mx-auto max-w-xl flex flex-wrap justify-center",children:[{text:"tech enthusiast"},{text:"engineer"},{text:"JS/TS developer"},{text:"IT nerd"},{text:"data scientist"},{text:"script lover"},{text:"machine learning"},{text:"deep learning"},{text:"C/C++ pointers fan"},{text:"web"},{text:"node.js"},{text:"react.js"},{text:"webpack"},{text:"socket.io"},{text:"python"},{text:"jupyter"},{text:"xslt"},{text:"bootstrap"},{text:"tailwind"},{text:"mongoDB"},{text:"redis"},{text:"postgreSQL"},{text:"firebase"},{text:"docker"},{text:"kubernetes"},{text:"linux"},{text:"bash"},].map(function(b){var a=b.text;return(0,l.jsx)(E,{children:a},a)})})})]})})},j=b(214),G=b.n(j),H=function(){return(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[(0,l.jsx)("section",{className:"max-w-7xl mx-auto px-8 py-32 md:py-72",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row justify-center",children:[(0,l.jsx)("div",{className:"shrink-0 flex justify-center",children:(0,l.jsx)("img",{className:"h-96 w-96 object-cover rounded-lg",src:"/profile.jpg",alt:"photo of me"})}),(0,l.jsxs)("div",{className:"p-8 grid place-content-center",children:[(0,l.jsx)("div",{className:"text-3xl",children:"I'm"}),(0,l.jsx)("div",{className:"font-bold text-5xl",children:"Nikolas Toma\u0161t\xedk"}),(0,l.jsx)("div",{className:"text-4xl mt-1 underline decoration-yellow-400 text-right",children:"software engineer"}),(0,l.jsx)("div",{className:"text-3xl mt-1 text-gray-400 text-right",children:"from Slovakia"})]})]})}),(0,l.jsxs)("div",{className:G().animation,children:[(0,l.jsx)("div",{className:G().subanimation,children:"char *randomCoolVariable = &coolerVariable"}),(0,l.jsx)("div",{className:G().subanimation,children:"trust me I am engineer"}),(0,l.jsx)("div",{className:G().subanimation,children:"tmpFinalFinalFinal.psd"}),(0,l.jsx)("div",{className:G().subanimation,children:"AI is just a bunch of if and else"}),(0,l.jsx)("div",{className:G().subanimation,children:"testing only in production"}),(0,l.jsx)("div",{className:G().subanimation,children:"btw I do not use Arch"})]})]})},I=function(){return(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("section",{className:"max-w-7xl mx-auto md:px-8 py-60",children:[(0,l.jsx)("div",{className:"p-4 md:p-8 pb-16 text-3xl text-center decoration-yellow-500",children:"do not hesitate to contact me :))"}),(0,l.jsxs)("div",{className:"max-w-max text-lg md:text-xl mx-auto",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row content-center items-center p-4",children:[(0,l.jsx)("a",{href:"https://linkedin.com/in/nikolas-tomastik",className:"transition hover:text-yellow-400 w-24 px-4 text-center",children:(0,l.jsx)(c,{size:"3x",icon:"fa-brands fa-linkedin"})}),(0,l.jsx)("a",{href:"https://linkedin.com/in/nikolas-tomastik",className:"transition underline decoration-yellow-600 hover:decoration-yellow-400",children:"linkedin.com/in/nikolas-tomastik"})]}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row content-center items-center p-4",children:[(0,l.jsx)("a",{href:"https://github.com/yimejky",className:"transition hover:text-yellow-400 w-24 px-4 text-center",children:(0,l.jsx)(c,{size:"3x",icon:"fa-brands fa-github"})}),(0,l.jsx)("a",{href:"https://github.com/yimejky",className:"transition underline decoration-yellow-600 hover:decoration-yellow-400",children:"github.com/yimejky"})]}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row content-center items-center p-4",children:[(0,l.jsx)("a",{href:"https://instagram.com/yimejky",className:"transition hover:text-yellow-400 w-24 px-4 text-center",children:(0,l.jsx)(c,{size:"3x",icon:"fa-brands fa-instagram"})}),(0,l.jsx)("a",{href:"https://instagram.com/yimejky",className:"transition underline decoration-yellow-600 hover:decoration-yellow-400",children:"instagram.com/yimejky"})]})]})]})})},J=function(){return(0,l.jsxs)("div",{className:"relative text-white flex h-full flex-col ".concat(G()["animated-background"]),children:[(0,l.jsxs)(m(),{children:[(0,l.jsx)("title",{children:"Nikolas Toma\u0161t\xedk - Software Engineer"}),(0,l.jsx)("meta",{name:"description",content:"my personal website"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("main",{children:[(0,l.jsx)(H,{}),(0,l.jsx)(F,{}),(0,l.jsx)(I,{})]}),(0,l.jsx)("footer",{children:(0,l.jsx)("div",{className:"container mx-auto p-4 text-center text-sm",children:"\xa9 2022 Nikolas Toma\u0161t\xedk. All Rights Reserved."})})]})}},214:function(a){a.exports={"animated-background":"Home_animated-background__nij6j",animation:"Home_animation__K5DP8",subanimation:"Home_subanimation__7LwdE","animated-text":"Home_animated-text__6oIxT","animated-text-anticlockwise":"Home_animated-text-anticlockwise__HVNI9"}},9008:function(a,c,b){a.exports=b(5443)},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])