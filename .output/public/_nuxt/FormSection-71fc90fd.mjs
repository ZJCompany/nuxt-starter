import{_ as m,d as a,f as c,c as i,a as l,w as n,e as t,h as p,n as u,r as e,g as f,o as d}from"./entry-c066cf72.mjs";import h from"./SectionTitle-af34583a.mjs";const _=a({emits:["submitted"],components:{JetSectionTitle:h},computed:{hasActions(){return!!this.$slots.actions}}}),g={class:"md:grid md:grid-cols-3 md:gap-6"},$={class:"mt-5 md:mt-0 md:col-span-2"},v={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};function w(s,o,y,j,C,S){const r=c("jet-section-title");return d(),i("div",g,[l(r,null,{title:n(()=>[e(s.$slots,"title")]),description:n(()=>[e(s.$slots,"description")]),_:3}),t("div",$,[t("form",{onSubmit:o[0]||(o[0]=p(k=>s.$emit("submitted"),["prevent"]))},[t("div",{class:u(["px-4 py-5 bg-white sm:p-6 shadow",s.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",v,[e(s.$slots,"form")])],2),s.hasActions?(d(),i("div",b,[e(s.$slots,"actions")])):f("",!0)],32)])])}var N=m(_,[["render",w]]);export{N as default};
