(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[627],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2011:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:0},s={unversionedId:"users/plugins/intro",id:"users/plugins/intro",isDocsHomePage:!1,title:"JMC Plugins",description:"JMC Plugins add features to Jmeter, to integrate JMC also during Jmeter execution and not only to generate JMX file.",source:"@site/docs/users/plugins/intro.md",sourceDirName:"users/plugins",slug:"/users/plugins/intro",permalink:"/docs/users/plugins/intro",editUrl:"https://github.com/anasoid/jmc.anasoid.org/edit/master/website/docs/users/plugins/intro.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"users",previous:{title:"Properties",permalink:"/docs/users/properties"},next:{title:"JSR223 to Java.",permalink:"/docs/users/plugins/JSR223toJava"}},c=[{value:"Installation.",id:"installation",children:[]},{value:"Debug Execution",id:"debug-execution",children:[{value:"Intellij",id:"intellij",children:[]}]}],p={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JMC Plugins add features to Jmeter, to integrate JMC also during Jmeter execution and not only to generate JMX file."),(0,o.kt)("h2",{id:"installation"},"Installation."),(0,o.kt)("p",null,"Download last ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-core"},"jmc-core-","*",".jar")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-plugin"},"jmc-plugin-","*",".jar"),"."),(0,o.kt)("p",null,"Add ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-core"},"jmc-core-","*",".jar")," and  ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-plugin"},"jmc-plugin-","*",".jar")," jar to jmeter as plugin : two choice possible  : "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add jmc-plugin-*.jar to jmeter plugin folder:  lib/ext."),(0,o.kt)("li",{parentName:"ol"},"Add property ",(0,o.kt)("strong",{parentName:"li"},"search_paths")," to Jmeter with path to ",(0,o.kt)("strong",{parentName:"li"},"jmc-core-","*",".jar")," and  ",(0,o.kt)("strong",{parentName:"li"},"jmc-plugin-","*",".jar")," folder : see ",(0,o.kt)("a",{parentName:"li",href:"https://jmeter.apache.org/usermanual/properties_reference.html#classpath"},"Jmeter classpath")," .")),(0,o.kt)("p",null,"Also your projects using plugin should be included to Jmeter as plugin, the same way as jmc-plugin-*.jar is installed"),(0,o.kt)("h2",{id:"debug-execution"},"Debug Execution"),(0,o.kt)("h3",{id:"intellij"},"Intellij"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jmeter-debug-Intellij",src:r(9540).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download Jmeter to any folder on your Machine."),(0,o.kt)("li",{parentName:"ol"},"Install any plugins you need to jmeter and also install ",(0,o.kt)("strong",{parentName:"li"},"jmc-core")," and ",(0,o.kt)("strong",{parentName:"li"},"jmc-plugin")," as plugins."),(0,o.kt)("li",{parentName:"ol"},"Add run/debug configurations as ",(0,o.kt)("strong",{parentName:"li"},"Jar Application"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Path to Jar")," : path to ",(0,o.kt)("strong",{parentName:"li"},"ApacheJMeter.jar")," in Folder bin."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"VM options")," : -XX:MaxMetaspaceSize=256m -Xss256k -Dsun.awt.disablegrab=true -cp org.apache.jmeter.NewDriver "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Program arguments")," : Add path to jar plugins and also your project classes with search_paths properties, Intellij can use Macro to replace variable from your project like $ProjectFileDir$ for root project dir,   ( ex : -Jsearch_paths=$ProjectFileDir$/myproject-plugin/build/classes/java/main;$ProjectFileDir$/myproject-core/build/classes/java/main ), You can also add any Jmeter arguments like run in non-gui mode."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Before launch"),"  : Build your project to refresh the classes, for gradle you can add in agrument (-x check -x javadoc -x assemble) to have  a quick build and skip test, check, generating jar.")))}u.isMDXComponent=!0},9540:function(e,t,r){"use strict";t.Z=r.p+"assets/images/jmeter-debug-Intellij-460e35d6596ff4128812f350ca4696f5.png"}}]);