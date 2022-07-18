(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47b3157a"],{"5aeb":function(e,t,r){},6797:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=function(e){return Object(n["J"])("data-v-2f478239"),e=e(),Object(n["H"])(),e},o={class:"pt-5"},s=a((function(){return Object(n["m"])("img",{src:"resources/images/illustrations/present.svg",alt:"",class:"illustration"},null,-1)})),c=a((function(){return Object(n["m"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",class:"wave"},[Object(n["m"])("path",{fill:"#2AA8FF","fill-opacity":"0.3",d:"M0,288L60,277.3C120,267,240,245,360,240C480,235,600,245,720,256C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})],-1)})),i={class:"container p-4"},u=a((function(){return Object(n["m"])("div",{class:"brand row align-items-center justify-content-center"},[Object(n["m"])("img",{id:"logo",src:"resources/logo.png",alt:"wefixcbs"}),Object(n["m"])("h2",{class:"name"},"WeFixCBS")],-1)})),l={class:"card py-5 px-5"},d=a((function(){return Object(n["m"])("h4",{class:"text-center mb-5 pt-2"},"Reset Password",-1)})),m={key:0},f={class:"text-center"},p={class:"mb-2"},b=a((function(){return Object(n["m"])("span",null,"Tidak menerima otp? ",-1)})),O=a((function(){return Object(n["m"])("p",{class:"text-center text-gray-5"},"Copyright © 2022",-1)}));function j(e,t,r,a,j,g){var w=Object(n["O"])("a-alert"),h=Object(n["O"])("a-input"),k=Object(n["O"])("a-form-item"),v=Object(n["O"])("a-input-password"),R=Object(n["O"])("a-button"),P=Object(n["O"])("a-form");return Object(n["G"])(),Object(n["l"])("div",o,[s,c,Object(n["m"])("div",i,[u,Object(n["m"])("div",l,[d,a.error?(Object(n["G"])(),Object(n["j"])(w,{key:0,message:"Gagal",description:a.error,type:"error","show-icon":"",class:"mb-4"},null,8,["description"])):Object(n["k"])("",!0),Object(n["p"])(P,{ref:"formRef",model:a.formState,rules:a.rules,layout:"vertical"},{default:Object(n["Y"])((function(){return[Object(n["p"])(k,{ref:"token",label:"Kode OTP",name:"token"},{default:Object(n["Y"])((function(){return[Object(n["p"])(h,{value:a.formState.token,"onUpdate:value":t[0]||(t[0]=function(e){return a.formState.token=e}),placeholder:"Masukkan kode OTP",maxLength:"6"},null,8,["value"])]})),_:1},512),Object(n["p"])(k,{ref:"password",label:"Password",name:"password"},{default:Object(n["Y"])((function(){return[Object(n["p"])(v,{value:a.formState.password,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.password=e}),size:"large",placeholder:"Masukkan password"},null,8,["value"])]})),_:1},512),Object(n["p"])(k,{ref:"password_confirmation",label:"Konfirmasi Password",name:"password_confirmation"},{default:Object(n["Y"])((function(){return[Object(n["p"])(v,{value:a.formState.password_confirmation,"onUpdate:value":t[2]||(t[2]=function(e){return a.formState.password_confirmation=e}),size:"large",placeholder:"Masukkan konfirmasi password"},null,8,["value"])]})),_:1},512),Object(n["p"])(k,{class:"mt-5"},{default:Object(n["Y"])((function(){return[Object(n["p"])(R,{type:"primary","html-type":"submit",onClick:g.onSubmit,class:"w-100",size:"large",loading:a.loading},{default:Object(n["Y"])((function(){return[a.loading?Object(n["k"])("",!0):(Object(n["G"])(),Object(n["l"])("span",m,"Reset"))]})),_:1},8,["onClick","loading"])]})),_:1})]})),_:1},8,["model","rules"]),Object(n["m"])("div",f,[Object(n["m"])("div",p,[b,Object(n["m"])("a",{class:"text-primary",onClick:t[3]||(t[3]=function(){return g.reRequestOtp&&g.reRequestOtp.apply(g,arguments)})}," Kirim ulang ")])])]),O])])}var g=r("5530"),w=r("1da1"),h=(r("96cf"),r("d3b7"),r("9a1e")),k={setup:function(){var e=Object(n["L"])(),t=Object(n["K"])({token:"",password:"",password_confirmation:""}),r=Object(n["L"])(!1),a=Object(n["L"])(),o=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==n){e.next=4;break}return e.abrupt("return",Promise.reject("Konfirmasi password tidak boleh kosong."));case 4:if(n===t.password){e.next=8;break}return e.abrupt("return",Promise.reject("Password dan Konfirmasi password harus sama."));case 8:return e.abrupt("return",Promise.resolve());case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),s={token:[{required:!0,message:"Kode OTP tidak boleh kosong.",trigger:"change"},{len:6,message:"Kode OTP harus 6 karakter",trigger:"change"}],password:[{required:!0,message:"Password tidak boleh kosong.",trigger:"change"}],password_confirmation:[{required:!0,message:"Konfirmasi Password tidak boleh kosong.",trigger:"change"},{validator:o,trigger:"change"}]};return Object(n["W"])(t,(function(){t.token=t.token.toUpperCase()})),{formRef:e,formState:t,rules:s,loading:r,error:a}},methods:{onSubmit:function(){var e=this;this.formRef.validate().then((function(){return e.doResetPassword()})).catch((function(){}))},doResetPassword:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,a=Object(g["a"])({},Object(n["R"])(e.formState)),a.email=null===(r=e.$route.params)||void 0===r?void 0:r.email,t.next=6,Object(h["d"])(a);case 6:o=t.sent,200===o.status?e.$modal.success({title:function(){return"Reset Password Berhasil"},content:function(){return"Selamat, password Anda berhasil direset"},onOk:function(){e.$router.push("/auth/login")}}):422===o.status&&e.$modal.error({title:function(){return"Reset Password Gagal"},content:function(){return o.data.error}}),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](1);case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},reRequestOtp:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h["c"])(null===(r=e.$route.params)||void 0===r?void 0:r.email);case 3:n=t.sent,200===n.status?e.$modal.success({title:function(){return"Request OTP Berhasil"},content:function(){return"OTP berhasil dikirim ke email Anda"}}):422===n.status?e.$modal.error({title:function(){return"Request OTP Gagal"},content:function(){return n.data.error}}):e.$modal.error({title:function(){return"Request OTP Gagal"},content:function(){return"Terjadi suatu kesalahan, mohon coba beberapa saat lagi"}}),t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},v=(r("c740"),r("6b0d")),R=r.n(v);const P=R()(k,[["render",j],["__scopeId","data-v-2f478239"]]);t["default"]=P},c740:function(e,t,r){"use strict";r("5aeb")}}]);