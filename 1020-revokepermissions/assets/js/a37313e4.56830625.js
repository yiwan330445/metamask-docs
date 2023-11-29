"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[872],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,c(c({ref:e},l),{},{components:n})):r.createElement(y,c({ref:e},l))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73806:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},c="Contract factory",i={unversionedId:"how-to/interact-with-smart-contracts/unity/contract-factory",id:"how-to/interact-with-smart-contracts/unity/contract-factory",title:"Contract factory",description:"When interacting with smart contracts in Unity, the contract factory is responsible for",source:"@site/wallet/how-to/interact-with-smart-contracts/unity/contract-factory.md",sourceDirName:"how-to/interact-with-smart-contracts/unity",slug:"/how-to/interact-with-smart-contracts/unity/contract-factory",permalink:"/1020-revokepermissions/wallet/how-to/interact-with-smart-contracts/unity/contract-factory",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/interact-with-smart-contracts/unity/contract-factory.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Contract interface",permalink:"/1020-revokepermissions/wallet/how-to/interact-with-smart-contracts/unity/contract-interface"},next:{title:"Contract proxy class",permalink:"/1020-revokepermissions/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class"}},s={},p=[{value:"Contract factory types",id:"contract-factory-types",level:2},{value:"Impromptu contract factory",id:"impromptu-contract-factory",level:3},{value:"Backed type contract factory",id:"backed-type-contract-factory",level:3},{value:"Set the contract factory",id:"set-the-contract-factory",level:2}],l={toc:p},m="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-factory"},"Contract factory"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/1020-revokepermissions/wallet/"},"interacting with smart contracts in Unity"),", the contract factory is responsible for\ncreating the ",(0,a.kt)("a",{parentName:"p",href:"/1020-revokepermissions/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class"},"contract proxy class")," with the given\n",(0,a.kt)("a",{parentName:"p",href:"/1020-revokepermissions/wallet/how-to/interact-with-smart-contracts/unity/contract-interface"},"contract interface")," type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,a.kt)("h2",{id:"contract-factory-types"},"Contract factory types"),(0,a.kt)("h3",{id:"impromptu-contract-factory"},"Impromptu contract factory"),(0,a.kt)("p",null,"The impromptu contract factory uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Impromptu")," library to return a new instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract"),"\nthat behaves likes the given interface type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),".\nSince the contract is a dynamic object, all method invocations to the returned object of type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\nare automatically routed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract")," class."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The impromptu contract factory is only supported on Mono or in a runtime that has the CLR.\nThe IL2CPP runtime does not support this factory.\nUse the backed type contract factory if you need a more concrete type.")),(0,a.kt)("h3",{id:"backed-type-contract-factory"},"Backed type contract factory"),(0,a.kt)("p",null,"The backed type contract factory uses a concrete ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," type that inherits the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract")," class and\nthe given interface type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),".\nTo use this factory, the given interface must declare the class attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"BackedType"),"\nthat specifies which concrete ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," type must be used when creating a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract")," instance.\nThe declared ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," must inherit from the given interface type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[BackedType(typeof(ERC20Backing))]  \npublic interface ERC20 : IContract  \n{\n    [EvmMethodInfo(Name = "decimals", View = true)]  \n    [return: EvmParameterInfo(Type = "uint8")]  \n    Task<BigInteger> Decimals();\n    \n    // TODO Define other interface methods\n}\n')),(0,a.kt)("p",null,"Inside the backed ",(0,a.kt)("inlineCode",{parentName:"p"},"class"),", you must override all interface methods and either invoke custom logic or\nuse the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract")," class to automatically perform the correct logic based on the method data.\nYou can use ",(0,a.kt)("inlineCode",{parentName:"p"},"var method = System.Reflection.MethodBase.GetCurrentMethod();")," to get the current\nmethod being invoked, and then you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"base.InvokeMethod(MethodInfo method, object[] args)")," to\ninvoke the correct logic for the given ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ERC20Backing : Contract, ERC20  \n{\n    public string Address  \n    {  \n       get => base.Address;  \n    }\n    \n    [EvmMethodInfo(Name = "decimals", View = true)]  \n    [return: EvmParameterInfo(Type = "uint8")]  \n    public Task<BigInteger> Decimals()  \n    {  \n       var method = System.Reflection.MethodBase.GetCurrentMethod();  \n       return (Task<BigInteger>) InvokeMethod(method, new object[] {  });  \n    }\n\n    // TODO Define other interface methods\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/1020-revokepermissions/wallet/#generate-contract-code"},"contract code generator")," automatically generates a backing\n",(0,a.kt)("inlineCode",{parentName:"p"},"class")," for each contract interface generated."),(0,a.kt)("p",null,"This contract factory is useful for when you need more concrete definitions of the contract\ninterface type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),".\nThis can be useful in runtimes where ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DynamicObject")," are not available (IL2CPP)."),(0,a.kt)("h2",{id:"set-the-contract-factory"},"Set the contract factory"),(0,a.kt)("p",null,"To set the current contract factory, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract.ContractFactory"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Contract.ContractFactory = new BackedTypeContractFactory();\n")),(0,a.kt)("p",null,"You don't need to do this, unless you create a custom contract factory.\nWe recommend just using the default contract factories for each runtime:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mono runtime - ",(0,a.kt)("a",{parentName:"li",href:"#impromptu-contract-factory"},"Impromptu contract factory")),(0,a.kt)("li",{parentName:"ul"},"IL2CPP runtime - ",(0,a.kt)("a",{parentName:"li",href:"#backed-type-contract-factory"},"Backed typed contract factory"))))}u.isMDXComponent=!0}}]);