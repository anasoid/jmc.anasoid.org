(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return t?n.createElement(b,i(i({ref:r},u),{},{components:t})):n.createElement(b,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6947:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i={sidebar_position:30},l={unversionedId:"users/variable",id:"users/variable",isDocsHomePage:!1,title:"Variable",description:"org.anasoid.jmc.core.wrapper.jmc.Variable are a simple container to use variable when working with JMC. it need the variable name as input for Constructor.",source:"@site/docs/users/variable.md",sourceDirName:"users",slug:"/users/variable",permalink:"/docs/users/variable",editUrl:"https://github.com/anasoid/jmc.anasoid.org/edit/master/website/docs/users/variable.md",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"users",previous:{title:"Application",permalink:"/docs/users/application"},next:{title:"Template",permalink:"/docs/users/template"}},s=[{value:"Usage",id:"usage",children:[]}],c={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"org.anasoid.jmc.core.wrapper.jmc.",(0,o.kt)("strong",{parentName:"p"},"Variable")," are a simple container to use variable when working with JMC. it need the variable name as input for Constructor."),(0,o.kt)("p",null,"the folwing method are available"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"getName() : return name of variable."),(0,o.kt)("li",{parentName:"ol"},"getValue() : return the value = ",(0,o.kt)("strong",{parentName:"li"},"${")," namevalue ",(0,o.kt)("strong",{parentName:"li"},"}")),(0,o.kt)("li",{parentName:"ol"},"asVariables (...) : return list of variables from string array or list.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Most component using variable in Jmeter accept Variable than string or only variable."),(0,o.kt)("p",null,"Ex : Csv input Component accept list of variables and doesn't accept String with comma separator."))}u.isMDXComponent=!0}}]);