"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[535],{2618:function(e,l,a){a.d(l,{Z:function(){return m}});var t=a(6252),n=a(3577),o=a(2262),r=a(9963);const s=["type","name","value"],u=(0,t._)("span",{class:"check"},null,-1),d={class:"control-label"};var i={props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,i=(0,t.Fl)({get:()=>a.modelValue,set:e=>{l("update:modelValue",e)}}),c=(0,t.Fl)((()=>"radio"===a.type?"radio":"checkbox"));return(l,a)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,n.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.options,((l,m)=>((0,t.wg)(),(0,t.iD)("label",{key:m,class:(0,n.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>(0,o.dq)(i)?i.value=e:null),type:(0,o.SU)(c),name:e.name,value:m},null,8,s),[[r.YZ,(0,o.SU)(i)]]),u,(0,t._)("span",d,(0,n.zw)(l),1)],2)))),128))],2))}};const c=i;var m=c},5690:function(e,l,a){a.d(l,{Z:function(){return c}});var t=a(6252),n=a(3577),o=a(2262);const r={class:"mb-6 last:mb-0"},s={key:0,class:"block font-bold mb-2"},u={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};var d={props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const l=(0,t.Rr)(),a=(0,t.Fl)((()=>{const e=[],a=l.default().length;return a>1&&e.push("grid grid-cols-1 gap-3"),2===a&&e.push("md:grid-cols-2"),e}));return(l,d)=>((0,t.wg)(),(0,t.iD)("div",r,[e.label?((0,t.wg)(),(0,t.iD)("label",s,(0,n.zw)(e.label),1)):(0,t.kq)("",!0),(0,t._)("div",{class:(0,n.C_)((0,o.SU)(a))},[(0,t.WI)(l.$slots,"default")],2),e.help?((0,t.wg)(),(0,t.iD)("div",u,(0,n.zw)(e.help),1)):(0,t.kq)("",!0)]))}};const i=d;var c=i},9995:function(e,l,a){a.d(l,{Z:function(){return c}});var t=a(6252),n=a(3577),o=a(2262),r=a(3907),s=a(1088),u=a(7315),d={props:{bg:{type:String,required:!0,validator:e=>["login","error"].includes(e)}},setup(e){const l=e,a=(0,r.oR)(),d=(0,t.Fl)((()=>a.state.darkMode)),i=(0,t.Fl)((()=>{switch(l.bg){case"login":return d.value?s.K3:s.jH;case"error":return d.value?s.bW:s.Zi}return""}));return(e,l)=>((0,t.wg)(),(0,t.j4)(u.Z,{class:(0,n.C_)(["flex h-screen items-center justify-center",(0,o.SU)(i)])},{default:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",cardRounded:"rounded-lg"})])),_:3},8,["class"]))}};const i=d;var c=i},6615:function(e,l,a){a.r(l),a.d(l,{default:function(){return v}});var t=a(6252),n=a(3577),o=a(9963),r=a(2262),s=a(2119),u=a(5317),d=a(9995),i=a(9890),c=a(2618),m=a(5690),p=a(2213),b=a(5693),g=a(1388),f=a(6373),w={setup(e){const l=(0,r.qj)({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:["remember"]}),a=(0,s.tv)(),w=()=>{a.push("/dashboard")};return(e,a)=>((0,t.wg)(),(0,t.j4)(d.Z,{bg:"login"},{default:(0,t.w5)((({cardClass:e,cardRounded:s})=>[(0,t.Wm)(i.Z,{class:(0,n.C_)(e),rounded:s,form:"",onSubmit:(0,o.iM)(w,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{label:"Login",help:"Please enter your login"},{default:(0,t.w5)((()=>[(0,t.Wm)(p.Z,{modelValue:(0,r.SU)(l).login,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,r.SU)(l).login=e),icon:(0,r.SU)(u.rI3),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])])),_:1}),(0,t.Wm)(m.Z,{label:"Password",help:"Please enter your password"},{default:(0,t.w5)((()=>[(0,t.Wm)(p.Z,{modelValue:(0,r.SU)(l).pass,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,r.SU)(l).pass=e),icon:(0,r.SU)(u.AD$),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])])),_:1}),(0,t.Wm)(c.Z,{modelValue:(0,r.SU)(l).remember,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,r.SU)(l).remember=e),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),(0,t.Wm)(b.Z),(0,t.Wm)(f.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{type:"submit",color:"info",label:"Login"}),(0,t.Wm)(g.Z,{to:"/dashboard",color:"info",outline:"",label:"Back"})])),_:1})])),_:2},1032,["class","rounded","onSubmit"])])),_:1}))}};const y=w;var v=y}}]);
//# sourceMappingURL=login.689ead1c.js.map