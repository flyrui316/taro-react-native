(window.webpackJsonp=window.webpackJsonp||[]).push([[751],{1806:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,s=f["".concat(c,".").concat(m)]||f[m]||b[m]||a;return r?o.a.createElement(s,i(i({ref:t},l),{},{components:r})):o.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},819:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),a=(r(0),r(1806)),c=["components"],i={slug:"2020-01-02-gmtc",title:"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5",author:"Pines-Cheng",author_url:"https://github.com/Pines-Cheng",author_image_url:"https://avatars2.githubusercontent.com/u/9441951?s=460&u=b43f79c07aea1d3c330dd1fd38ae9e9baab58fee&v=4"},u={permalink:"/taro/blog/2020-01-02-gmtc",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-01-02-gmtc.md",source:"@site/blog/2020-01-02-gmtc.md",description:"\u524d\u8a00\uff1a\u968f\u7740\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u70ed\u5ea6\u4e0a\u5347\uff0c\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\u4e5f\u5c42\u51fa\u4e0d\u7a77\u3002\u4f46\u76ee\u524d\u6bcf\u4e2a\u6846\u67b6\u90fd\u4f1a\u7ed1\u5b9a\u4e00\u4e2a\u4e13\u5c5e DSL\uff0c\u5982\u7c7b React \u6216\u8005\u7c7b Vue\uff0c\u5728\u4e00\u4e2a\u6846\u67b6\u5185\uff0c\u5f00\u53d1\u8005\u65e0\u6cd5\u6839\u636e\u56e2\u961f\u6280\u672f\u6808\u81ea\u7531\u9009\u62e9 DSL\uff0c\u540c\u65f6\u4e5f\u65e0\u6cd5\u5171\u4eab\u6846\u67b6\u672c\u8eab\u7684\u751f\u6001\u4e0e\u5de5\u5177\u3002",date:"2020-01-02T00:00:00.000Z",tags:[],title:"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5",readingTime:5.67,truncated:!0,prevItem:{title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",permalink:"/taro/blog/2020-01-08-taro-2-0"},nextItem:{title:"\u4eac\u559c\u9996\u9875\uff08\u5fae\u4fe1\u8d2d\u7269\u5165\u53e3\uff09\u8de8\u7aef\u5f00\u53d1\u4e0e\u4f18\u5316\u5b9e\u8df5",permalink:"/taro/blog/2019-12-03-jingxi-index"}},l=[],p={rightToc:l};function f(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u524d\u8a00\uff1a\u968f\u7740\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u70ed\u5ea6\u4e0a\u5347\uff0c\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\u4e5f\u5c42\u51fa\u4e0d\u7a77\u3002\u4f46\u76ee\u524d\u6bcf\u4e2a\u6846\u67b6\u90fd\u4f1a\u7ed1\u5b9a\u4e00\u4e2a\u4e13\u5c5e DSL\uff0c\u5982\u7c7b React \u6216\u8005\u7c7b Vue\uff0c\u5728\u4e00\u4e2a\u6846\u67b6\u5185\uff0c\u5f00\u53d1\u8005\u65e0\u6cd5\u6839\u636e\u56e2\u961f\u6280\u672f\u6808\u81ea\u7531\u9009\u62e9 DSL\uff0c\u540c\u65f6\u4e5f\u65e0\u6cd5\u5171\u4eab\u6846\u67b6\u672c\u8eab\u7684\u751f\u6001\u4e0e\u5de5\u5177\u3002")),Object(a.b)("p",null,"\u672c\u6b21\u5206\u4eab\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd Taro \u5982\u4f55\u5c06\u5404\u79cd\u8bed\u6cd5\u7684\u524d\u7aef\u6846\u67b6\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u4e0a\uff0c\u8ba8\u8bba\u4e00\u4e2a\u6846\u67b6\u652f\u6301\u591a DSL \u7684\u5b9e\u73b0\u63a2\u7d22\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u70ed\u95e8\u6846\u67b6/\u8bed\u6cd5/DSL \u6765\u7f16\u5199\u5c0f\u7a0b\u5e8f\u5e94\u7528\uff0c\u540c\u65f6\u590d\u7528\u76f8\u5173\u751f\u6001\u3002"))}f.isMDXComponent=!0}}]);