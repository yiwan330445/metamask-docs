"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(87462),o=(n(67294),n(3905));const r={description:"Configure and connect to a Ganache development network.",sidebar_position:2},l="Run a development network",s={unversionedId:"how-to/get-started-building/run-devnet",id:"how-to/get-started-building/run-devnet",title:"Run a development network",description:"Configure and connect to a Ganache development network.",source:"@site/wallet/how-to/get-started-building/run-devnet.md",sourceDirName:"how-to/get-started-building",slug:"/how-to/get-started-building/run-devnet",permalink:"/snaps-better-proposed-name-examples/wallet/how-to/get-started-building/run-devnet",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/get-started-building/run-devnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Configure and connect to a Ganache development network.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Set up your development environment",permalink:"/snaps-better-proposed-name-examples/wallet/how-to/get-started-building/set-up-dev-environment"},next:{title:"Secure your dapp",permalink:"/snaps-better-proposed-name-examples/wallet/how-to/get-started-building/secure-dapp"}},c={},i=[{value:"Connect to Ganache",id:"connect-to-ganache",level:2},{value:"Reset your local nonce calculation",id:"reset-your-local-nonce-calculation",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-a-development-network"},"Run a development network"),(0,o.kt)("p",null,"You can run a personal Ethereum development network using ",(0,o.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/ganache"},"Ganache"),",\nwhich allows you to develop a dapp in a secure test environment."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When using a local development blockchain such as Ganache or\n",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/anvil/#overview-of-anvil"},"anvil"),", your node must calculate gas to make\ntransactions on MetaMask.")),(0,o.kt)("h2",{id:"connect-to-ganache"},"Connect to Ganache"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/ganache/quickstart/"},"Ganache quickstart")," to set\nup a development network."),(0,o.kt)("p",null,"When you create a Ganache workspace, enter your MetaMask seed phrase into\nthe ",(0,o.kt)("strong",{parentName:"p"},"Account & Keys")," setting.\nGanache automatically gives each of your first 10 accounts 100 test ether (you can configure\nthese numbers in ",(0,o.kt)("strong",{parentName:"p"},"Accounts & Keys"),"), which makes it easy to start development."),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Your seed phrase controls all your accounts, so we recommend keeping at least one seed phrase for\ndevelopment, separate from any used to store real value.\nYou can manage multiple seed phrases by using multiple browser profiles, each with its own\nMetaMask installation.")),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Server")," setting of your workspace, find the hostname and port of your Ganache\nnetwork, which comprises the RPC URL of your network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"http://<hostname>:<port>\n")),(0,o.kt)("p",null,"In the MetaMask extension, connect to your Ganache network:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the network you're currently connected to."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add network"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add a network manually"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter the RPC URL of your network."),(0,o.kt)("li",{parentName:"ol"},"Enter MetaMask's default ",(0,o.kt)("a",{parentName:"li",href:"/snaps-better-proposed-name-examples/wallet/how-to/connect/detect-network#chain-ids"},"chain ID")," for Ganache, ",(0,o.kt)("inlineCode",{parentName:"li"},"1337"),".")),(0,o.kt)("h2",{id:"reset-your-local-nonce-calculation"},"Reset your local nonce calculation"),(0,o.kt)("p",null,"If you restart your development network, you can accidentally confuse MetaMask\nbecause it calculates the next ",(0,o.kt)("a",{parentName:"p",href:"/snaps-better-proposed-name-examples/wallet/how-to/send-transactions#nonce"},"nonce")," based on both the\nnetwork state ",(0,o.kt)("em",{parentName:"p"},"and")," the known sent transactions."),(0,o.kt)("p",null,"To clear MetaMask's transaction queue and reset its nonce calculation, go to ",(0,o.kt)("strong",{parentName:"p"},"Settings > Advanced"),"\nand select ",(0,o.kt)("strong",{parentName:"p"},"Reset account"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Once you have your development environment set up and development network running, you can\n",(0,o.kt)("a",{parentName:"p",href:"/wallet/how-to/connect"},"connect to MetaMask")," by setting up MetaMask SDK, detecting MetaMask, detecting a user's\nnetwork, and accessing a user's accounts."),(0,o.kt)("p",null,"For an end-to-end example, you can also follow the\n",(0,o.kt)("a",{parentName:"p",href:"/snaps-better-proposed-name-examples/wallet/tutorials/react-dapp-local-state"},"Create a simple React dapp")," tutorial."))}d.isMDXComponent=!0}}]);