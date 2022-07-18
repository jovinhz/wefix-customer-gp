(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3607160e"],{6089:function(e,t,o){"use strict";o("9556")},9556:function(e,t,o){},"9a1e":function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"e",(function(){return n})),o.d(t,"b",(function(){return c})),o.d(t,"f",(function(){return i})),o.d(t,"c",(function(){return l})),o.d(t,"d",(function(){return d}));var s=o("997a");const a=new s["a"]({hasErrorNotif:!1}),r=(e,t)=>a.axiosInstance.post("/customer/sessions/login",{phone_number:e,password:t}),n=e=>a.axiosInstance.post("/customer/sessions/register",e),c=()=>a.axiosInstance.get("/customer/sessions/request_token_verify_email"),i=e=>a.axiosInstance.post("/customer/sessions/verify_email",{token:e}),l=e=>a.axiosInstance.get("/customer/sessions/request_token_forgot_password",{params:{email:e}}),d=e=>a.axiosInstance.post("/customer/sessions/reset_password",e)},a135:function(e,t,o){"use strict";o.r(t);var s=o("7a23");const a=e=>(Object(s["pushScopeId"])("data-v-548a0c28"),e=e(),Object(s["popScopeId"])(),e),r={class:"pt-5"},n=a(()=>Object(s["createElementVNode"])("img",{src:"resources/images/illustrations/present.svg",alt:"",class:"illustration"},null,-1)),c=a(()=>Object(s["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",class:"wave"},[Object(s["createElementVNode"])("path",{fill:"#2AA8FF","fill-opacity":"0.3",d:"M0,288L60,277.3C120,267,240,245,360,240C480,235,600,245,720,256C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})],-1)),i={class:"container p-4"},l=a(()=>Object(s["createElementVNode"])("div",{class:"brand row align-items-center justify-content-center"},[Object(s["createElementVNode"])("img",{id:"logo",src:"resources/logo.png",alt:"wefixcbs"}),Object(s["createElementVNode"])("h2",{class:"name"},"WeFixCBS")],-1)),d={class:"card py-5 px-5"},u=a(()=>Object(s["createElementVNode"])("h4",{class:"text-center mb-5 pt-2"},"Signin",-1)),m={key:0},p={class:"text-center"},b={class:"mb-2"},f=a(()=>Object(s["createElementVNode"])("span",null,"Belum punya akun? ",-1)),j=Object(s["createTextVNode"])(" Daftar disini "),O=Object(s["createTextVNode"])(" Lupas password? "),h=a(()=>Object(s["createElementVNode"])("p",{class:"text-center text-gray-5"},"Copyright © 2022",-1));function g(e,t,o,a,g,w){const v=Object(s["resolveComponent"])("a-alert"),N=Object(s["resolveComponent"])("a-input"),k=Object(s["resolveComponent"])("a-form-item"),_=Object(s["resolveComponent"])("a-input-password"),C=Object(s["resolveComponent"])("a-button"),x=Object(s["resolveComponent"])("a-form"),V=Object(s["resolveComponent"])("router-link");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",r,[n,c,Object(s["createElementVNode"])("div",i,[l,Object(s["createElementVNode"])("div",d,[u,a.error?(Object(s["openBlock"])(),Object(s["createBlock"])(v,{key:0,message:"Gagal",description:a.error,type:"error","show-icon":"",class:"mb-4"},null,8,["description"])):Object(s["createCommentVNode"])("",!0),Object(s["createVNode"])(x,{ref:"formRef",model:a.formState,rules:a.rules,layout:"vertical","hide-required-mark":!0},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(k,{class:"mb-4",ref:"phone_number",label:"No Telp",name:"phone_number"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(N,{value:a.formState.phone_number,"onUpdate:value":t[0]||(t[0]=e=>a.formState.phone_number=e),size:"large",placeholder:"Masukkan no telp"},null,8,["value"])]),_:1},512),Object(s["createVNode"])(k,{ref:"password",label:"Password",name:"password"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(_,{value:a.formState.password,"onUpdate:value":t[1]||(t[1]=e=>a.formState.password=e),size:"large",placeholder:"Masukkan password"},null,8,["value"])]),_:1},512),Object(s["createVNode"])(k,{class:"mt-5"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(C,{type:"primary","html-type":"submit",onClick:w.onSubmit,class:"w-100",size:"large",loading:a.loading},{default:Object(s["withCtx"])(()=>[a.loading?Object(s["createCommentVNode"])("",!0):(Object(s["openBlock"])(),Object(s["createElementBlock"])("span",m,"Sign in"))]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"]),Object(s["createElementVNode"])("div",p,[Object(s["createElementVNode"])("div",b,[f,Object(s["createVNode"])(V,{to:"/auth/signup",class:"text-primary"},{default:Object(s["withCtx"])(()=>[j]),_:1})]),Object(s["createElementVNode"])("div",null,[Object(s["createVNode"])(V,{to:"/auth/forget-password",class:"text-primary"},{default:Object(s["withCtx"])(()=>[O]),_:1})])])]),h])])}var w=o("9a1e"),v={name:"Login",setup(){const e=Object(s["ref"])(),t=Object(s["reactive"])({phone_number:"",password:""}),o=Object(s["ref"])(!1),a=Object(s["ref"])(),r={phone_number:[{required:!0,message:"No telp. tidak boleh kosong.",trigger:"change"}],password:[{required:!0,message:"Password tidak boleh kosong.",trigger:"change"}]};return{formRef:e,formState:t,rules:r,loading:o,error:a}},methods:{onSubmit(){this.formRef.validate().then(()=>this.doLogin()).catch(()=>{})},async doLogin(){this.loading=!0;const e=await Object(w["a"])(this.formState.phone_number,this.formState.password);if(200===e.status){const t=e.data;this.$store.dispatch("User/setUser",{id:t.customer.id,phone_number:t.customer.phone_number,fullName:t.customer.full_name,email:t.customer.email,verified_email:t.customer.verified_email,token:t.token}),this.$notification.success({message:"Sukses",description:"Selamat datang di WeFixCBS",duration:4})}else 401===e.status&&(this.error=e.data.error);this.loading=!1}}},N=(o("6089"),o("6b0d")),k=o.n(N);const _=k()(v,[["render",g],["__scopeId","data-v-548a0c28"]]);t["default"]=_}}]);