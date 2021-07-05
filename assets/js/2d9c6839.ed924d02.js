(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[887],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8037:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:10},s={unversionedId:"users/plugins/JSR223toJava",id:"users/plugins/JSR223toJava",isDocsHomePage:!1,title:"JSR223 to Java.",description:"Why Replacing JSR223 by Java.",source:"@site/docs/users/plugins/JSR223toJava.md",sourceDirName:"users/plugins",slug:"/users/plugins/JSR223toJava",permalink:"/docs/users/plugins/JSR223toJava",editUrl:"https://github.com/anasoid/jmc.anasoid.org/edit/master/website/docs/users/plugins/JSR223toJava.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"users",previous:{title:"JMC Plugins",permalink:"/docs/users/plugins/intro"}},p=[{value:"Why Replacing JSR223 by Java.",id:"why-replacing-jsr223-by-java",children:[]},{value:"Extends",id:"extends",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Map",id:"map",children:[]},{value:"Attributes (Beta)",id:"attributes-beta",children:[]}]}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"why-replacing-jsr223-by-java"},"Why Replacing JSR223 by Java."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Java can be edit easily with IDE and also debugged as simple as any java application."),(0,i.kt)("li",{parentName:"ol"},"Using java we can use inheritance, and external library to reuse code and writing our library to be reused in future projects."),(0,i.kt)("li",{parentName:"ol"},"Java has better performance tha groovy.")),(0,i.kt)("h1",{id:"java-implementation"},"Java Implementation."),(0,i.kt)("p",null,"To Implement Java you can extends from AbstractJava",(0,i.kt)("strong",{parentName:"p"},"xx"),"Wrapper adn implement execute method, depend on type of testElement, execute has teh same input parameter as JSR223, expected the parameters witch is replaced by a map."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"JSR223 equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"AbstractJavaSamplerWrapper")),(0,i.kt)("td",{parentName:"tr",align:null},"Sampler"),(0,i.kt)("td",{parentName:"tr",align:null},"JSR223Sampler")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"AbstractJavaAssertionWrapper")),(0,i.kt)("td",{parentName:"tr",align:null},"Assertion"),(0,i.kt)("td",{parentName:"tr",align:null},"JSR223Assertion")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"AbstractJavaPostProcessorWrapper")),(0,i.kt)("td",{parentName:"tr",align:null},"PostProcessor"),(0,i.kt)("td",{parentName:"tr",align:null},"JSR223PostProcessor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"AbstractJavaPreProcessorWrapper")),(0,i.kt)("td",{parentName:"tr",align:null},"PreProcessor"),(0,i.kt)("td",{parentName:"tr",align:null},"JSR223PreProcessor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"AbstractJavaTimerWrapper")),(0,i.kt)("td",{parentName:"tr",align:null},"Timer"),(0,i.kt)("td",{parentName:"tr",align:null},"JSR223Timer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"AbstractJavaListenerWrapper")),(0,i.kt)("td",{parentName:"tr",align:null},"Listener"),(0,i.kt)("td",{parentName:"tr",align:null},"JSR223Listener")))),(0,i.kt)("h2",{id:"extends"},"Extends"),(0,i.kt)("p",null,"JMC is based on lombok, each wrapper class should be annotated with :"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'@SuperBuilder(setterPrefix = "with", toBuilder = true)')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n\n\n@SuperBuilder(setterPrefix = "with", toBuilder = true)\npublic class TestJavaSampleListenerWrapperWithParametersKey\n    extends AbstractJavaListenerWrapper {\n\n  @Override\n  public void execute(\n      String label,\n      JMeterContext ctx,\n      JMeterVariables vars,\n      Properties props,\n      Map<String, String> parameters,\n      Logger log,\n      Sampler sampler,\n      SampleResult prev,\n      SampleEvent event) {\n\n  .....\n  }\n  /**\n  * @return list of valid parameters, null to not check validity.\n  */\n  @Override\n  public List<String> getParametersKey() {\n\n    return null;\n  }\n}\n\n')),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"map"},"Map"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Map Parameters is preferable than attributes."))),(0,i.kt)("p",null,"All JavaTest implementation can have parameter as Map < String,String > ."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"addParameters(Map< String, String > parameters)")," : add list of key/value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"addParameter(String name, String value)")," : add key/value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"List< String > getParametersKey()")," : implement this method to validate parameters key: null to skip validation and empty list to not accept parameters.")),(0,i.kt)("h3",{id:"attributes-beta"},"Attributes (Beta)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Simple attribute")," (String,integer, boolean) can also be used for configuration."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"complex attribute")," : complex attribute (List, Map , composed object, ..) can't be used to be persisted with JMX, but can be used during execution. All those attribute should be annotated with @JmcOmitField.")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Complex attribute should be skipped by annotation ",(0,i.kt)("strong",{parentName:"p"},"@JmcOmitField"),"."))))}d.isMDXComponent=!0}}]);