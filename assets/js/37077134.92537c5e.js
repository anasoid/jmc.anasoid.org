(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[438],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4246:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],i={sidebar_position:70},p={unversionedId:"users/include",id:"users/include",isDocsHomePage:!1,title:"JMX Include",description:"Jmx include let you include JMX fragment in your code. This can help for Component who are not yet available in JMC.",source:"@site/docs/users/include.md",sourceDirName:"users",slug:"/users/include",permalink:"/docs/users/include",editUrl:"https://github.com/anasoid/jmc.anasoid.org/edit/master/website/docs/users/include.md",version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"users",previous:{title:"DSL (BETA)",permalink:"/docs/users/dsl"},next:{title:"Properties",permalink:"/docs/users/properties"}},s=[{value:"JMX File",id:"jmx-file",children:[]},{value:"Parameterized file.",id:"parameterized-file",children:[]},{value:"Two way are available to use JMX include.",id:"two-way-are-available-to-use-jmx-include",children:[{value:"Using extends",id:"using-extends",children:[]},{value:"Using Direct Class",id:"using-direct-class",children:[]}]}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jmx include let you include JMX fragment in your code. This can help for Component who are not yet available in JMC."),(0,l.kt)("p",null,"Depend on the node type you want to include use the following Class."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"children types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Thread Group")),(0,l.kt)("td",{parentName:"tr",align:null},"ThreadGroupJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"Controllers/Samplers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Controllers")),(0,l.kt)("td",{parentName:"tr",align:null},"ControllerJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"Controllers/Samplers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Samplers")),(0,l.kt)("td",{parentName:"tr",align:null},"SamplerJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"Samplers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Configuration Elements")),(0,l.kt)("td",{parentName:"tr",align:null},"ConfigElementJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Pre-Processors")),(0,l.kt)("td",{parentName:"tr",align:null},"PreProcessorJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Post-Processors")),(0,l.kt)("td",{parentName:"tr",align:null},"PostProcessorJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Timers")),(0,l.kt)("td",{parentName:"tr",align:null},"TimerJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Assertions")),(0,l.kt)("td",{parentName:"tr",align:null},"AssertionJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Listeners")),(0,l.kt)("td",{parentName:"tr",align:null},"ListenerJmxIncludeWrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"when you extend from a Wrapper class you have to annotated class with ",(0,l.kt)("em",{parentName:"p"},"'@SuperBuilder(setterPrefix = \"with\", toBuilder = true)'")," . Full package is ",(0,l.kt)("em",{parentName:"p"},"lombok.experimental.SuperBuilder"))),(0,l.kt)("p",null,"Important Method to be used with JMX include are :"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"withPath :")," give the resource path of JMX file.\n",(0,l.kt)("strong",{parentName:"p"},"withParams :")," Input Map for parametrized file."),(0,l.kt)("h2",{id:"jmx-file"},"JMX File"),(0,l.kt)("p",null,"To have the JMX file you can save any node in Jmeter using the menu ",(0,l.kt)("strong",{parentName:"p"},'"save as Test Fragment"'),"."),(0,l.kt)("h2",{id:"parameterized-file"},"Parameterized file."),(0,l.kt)("p",null,"You can replace any text in JMX fragment to be replaced dynamically by code.\nJMC parameter have the following format ${jmc.",(0,l.kt)("strong",{parentName:"p"},"paramname"),'}: EX :\nChose parameter name : for example "displayJMeterProperties", in JMX file replace content by ${jmc.displayJMeterProperties}'),(0,l.kt)("p",null,"Ex:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.4.1">\n  <hashTree>\n    <TestFragmentController guiclass="TestFragmentControllerGui" testclass="TestFragmentController" testname="Test Fragment" enabled="false"/>\n    <hashTree>\n      <DebugSampler guiclass="TestBeanGUI" testclass="DebugSampler" testname="Debug Sampler" enabled="true">\n        <boolProp name="displayJMeterProperties">${jmc.displayJMeterProperties}</boolProp>\n        <boolProp name="displayJMeterVariables">true</boolProp>\n        <boolProp name="displaySystemProperties">false</boolProp>\n      </DebugSampler>\n      <hashTree/>\n    </hashTree>\n  </hashTree>\n</jmeterTestPlan>\n')),(0,l.kt)("p",null,"Input parameters can be provided using ",(0,l.kt)("strong",{parentName:"p"},"withParams")," method, or with @JmcParam annotation when using subClass."),(0,l.kt)("h2",{id:"two-way-are-available-to-use-jmx-include"},"Two way are available to use JMX include."),(0,l.kt)("h3",{id:"using-extends"},"Using extends"),(0,l.kt)("p",null,"Extends from the Class of your type and override method ",(0,l.kt)("strong",{parentName:"p"},"getDefaultPath")," to return the resource path of JMX file."),(0,l.kt)("p",null,"Ex :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'@SuperBuilder(setterPrefix = "with", toBuilder = true)\npublic class DebugSamplerJmxIncludeWrapperTesting extends SamplerJmxIncludeWrapper {\n\n  private static final String PARENT_PATH = "org/anasoid/jmc/core/wrapper/jmeter/jmc/generic";\n\n  void DebugSamplerJmxIncludeWrapperTesting(boolean displayJMeterProperties){\n     this.displayJMeterProperties=displayJMeterProperties;\n  }\n\n  @JmcParam("displayJMeterProperties")\n  private static final Boolean displayJMeterProperties = false;\n\n  @Override\n  protected String getDefaultPath() {\n    return "org/myproject/jmx/include/debugsampler.jmx";\n  }\n}\n\n')),(0,l.kt)("h3",{id:"using-direct-class"},"Using Direct Class"),(0,l.kt)("p",null,"To use direct Class you can use the class of your type and give the path of JMX file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'    TestPlanWrapper testPlanWrapper =\n        TestPlanWrapper.builder()\n            .addThread(\n                ThreadGroupWrapper.builder()\n                    .addSampler(\n                        SamplerJmxIncludeWrapper.builder()\n                            .withPath("org/myproject/jmx/include/debugsampler.jmx")\n                            .withParams(Map.of("displayJMeterProperties", "true"))\n                            .build())\n                    .build())\n            .build();\n\n')))}d.isMDXComponent=!0}}]);