import{_ as l,d as a,c as t,n,e as s,g as r,t as d,h as c,o}from"./entry-4a36a4e1.mjs";const h=a({data(){return{show:!0}},computed:{style(){var e;return((e=this.$page.props.jetstream.flash)==null?void 0:e.bannerStyle)||"success"},message(){var e;return((e=this.$page.props.jetstream.flash)==null?void 0:e.banner)||""}}}),u={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},m={class:"flex items-center justify-between flex-wrap"},p={class:"w-0 flex-1 flex items-center min-w-0"},g={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},w=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),f=[w],v={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},_=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),k=[_],y={class:"ml-3 font-medium text-sm text-white truncate"},x={class:"flex-shrink-0 sm:ml-3"},b=s("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),j=[b];function B(e,i,C,$,M,z){return o(),t("div",null,[e.show&&e.message?(o(),t("div",{key:0,class:n({"bg-indigo-500":e.style=="success","bg-red-700":e.style=="danger"})},[s("div",u,[s("div",m,[s("div",p,[s("span",{class:n(["flex p-2 rounded-lg",{"bg-indigo-600":e.style=="success","bg-red-600":e.style=="danger"}])},[e.style=="success"?(o(),t("svg",g,f)):r("",!0),e.style=="danger"?(o(),t("svg",v,k)):r("",!0)],2),s("p",y,d(e.message),1)]),s("div",x,[s("button",{type:"button",class:n(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":e.style=="success","hover:bg-red-600 focus:bg-red-600":e.style=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=c(L=>e.show=!1,["prevent"]))},j,2)])])])],2)):r("",!0)])}var N=l(h,[["render",B]]);export{N as default};
