(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{1806:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=c,O=s["".concat(l,".").concat(d)]||s[d]||p[d]||a;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,l=new Array(a);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:c,l[1]=b;for(var i=2;i<a;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1807:function(e,t,n){"use strict";function c(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(r&&(r+=" "),r+=t);return r}},1808:function(e,t,n){"use strict";var c=n(0),r=n(1809);t.a=function(){var e=Object(c.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1809:function(e,t,n){"use strict";var c=n(0),r=Object(c.createContext)(void 0);t.a=r},1810:function(e,t,n){"use strict";var c=n(0),r=n.n(c),a=n(1808),l=n(1807),b=n(53),o=n.n(b),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,b=e.children,s=e.defaultValue,p=e.values,d=e.groupId,O=e.className,j=Object(a.a)(),m=j.tabGroupChoices,f=j.setTabGroupChoices,g=Object(c.useState)(s),y=g[0],h=g[1];if(null!=d){var N=m[d];null!=N&&N!==y&&p.some((function(e){return e.value===N}))&&h(N)}var v=function(e){h(e),null!=d&&f(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},O)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(c.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return Object(c.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},1811:function(e,t,n){"use strict";var c=n(0),r=n.n(c);t.a=function(e){var t=e.children,n=e.hidden,c=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:c},t)}},738:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var c=n(3),r=n(7),a=(n(0),n(1806)),l=n(1810),b=n(1811),o=["components"],i={title:"Icon",sidebar_label:"Icon"},u={unversionedId:"components/base/icon",id:"components/base/icon",isDocsHomePage:!1,title:"Icon",description:"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px",source:"@site/docs/components/base/icon.md",slug:"/components/base/icon",permalink:"/taro/docs/next/components/base/icon",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/base/icon.md",version:"current",sidebar_label:"Icon",sidebar:"components",previous:{title:"matchMedia",permalink:"/taro/docs/next/components/viewContainer/match-media"},next:{title:"Text",permalink:"/taro/docs/next/components/base/text"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"IconProps",id:"iconprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TIconType",id:"ticontype",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(a.b)("wrapper",Object(c.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"},"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<IconProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(a.b)(b.a,{value:"React",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Icon size='60' type='success' />\n        <Icon size='60' type='info' />\n        <Icon size='60' type='warn' color='#ccc' />\n        <Icon size='60' type='warn' />\n        <Icon size='60' type='waiting' />\n        <Icon size='20' type='success_no_circle' />\n        <Icon size='20' type='warn' />\n        <Icon size='20' type='success' />\n        <Icon size='20' type='download' />\n        <Icon size='20' type='clear' color='red' />\n        <Icon size='20' type='search' />\n      </View>\n    )\n  }\n}\n"))),Object(a.b)(b.a,{value:"Vue",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <icon size="60" type="success" />\n    <icon size="60" type="info" />\n    <icon size="60" type="warn" color="#ccc" />\n    <icon size="60" type="warn" />\n    <icon size="60" type="waiting" />\n    <icon size="20" type="success_no_circle" />\n    <icon size="20" type="warn" />\n    <icon size="20" type="success" />\n    <icon size="20" type="download" />\n    <icon size="20" type="clear" color="red" />\n    <icon size="20" type="search" />\n  </view>\n</template>\n')))),Object(a.b)("h2",{id:"iconprops"},"IconProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"type"),Object(a.b)("td",null,Object(a.b)("code",null,'"success" | "success_no_circle" | "info" | "warn" | "waiting" | "cancel" | "download" | "search" | "clear"')),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"icon \u7684\u7c7b\u578b")),Object(a.b)("tr",null,Object(a.b)("td",null,"size"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"23")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"icon \u7684\u5927\u5c0f\uff0c\u5355\u4f4dpx")),Object(a.b)("tr",null,Object(a.b)("td",null,"color"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"icon \u7684\u989c\u8272\uff0c\u540c css \u7684 color")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"IconProps.type"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"IconProps.size"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"IconProps.color"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(a.b)("h3",{id:"ticontype"},"TIconType"),Object(a.b)("p",null,"icon \u7684\u7c7b\u578b"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,"\u6210\u529f\u56fe\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"success_no_circle"),Object(a.b)("td",null,"\u6210\u529f\u56fe\u6807\uff08\u4e0d\u5e26\u5916\u5708\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"info"),Object(a.b)("td",null,"\u4fe1\u606f\u56fe\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"warn"),Object(a.b)("td",null,"\u8b66\u544a\u56fe\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"waiting"),Object(a.b)("td",null,"\u7b49\u5f85\u56fe\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"cancel"),Object(a.b)("td",null,"\u53d6\u6d88\u56fe\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"download"),Object(a.b)("td",null,"\u4e0b\u8f7d\u56fe\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"search"),Object(a.b)("td",null,"\u641c\u7d22\u56fe\u6807")),Object(a.b)("tr",null,Object(a.b)("td",null,"clear"),Object(a.b)("td",null,"\u6e05\u9664\u56fe\u6807")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"Icon"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);