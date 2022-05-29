"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[409],{2409:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var l=a(3673),s=a(8880);const i={class:"column q-pa-lg"},n={class:"row"},o={class:"text-center"},r=(0,l._)("div",{class:"text-h5 text-center q-mb-md text-weight-bold"}," Student Learning ",-1),d={key:0,class:"text-body2 text-center text-red-3"};function c(e,t,a,c,u,p){const m=(0,l.up)("q-img"),w=(0,l.up)("q-avatar"),g=(0,l.up)("q-icon"),h=(0,l.up)("q-input"),q=(0,l.up)("q-form"),f=(0,l.up)("q-card-section"),x=(0,l.up)("q-btn"),y=(0,l.up)("q-card-actions"),b=(0,l.up)("q-separator"),k=(0,l.up)("q-card"),v=(0,l.up)("q-page"),W=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(W,{view:"lHh Lpr fff"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"\n        window-height window-width\n        row\n        justify-center\n        items-center\n        text-white\n      ",style:{background:"linear-gradient(#19a3d1, #31CCEC)"}},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",n,[(0,l.Wm)(k,{square:"",class:"bg-transparent shadow-0 full-height",style:{width:"320px"}},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.Wm)(w,{size:"72px"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{src:e.logoImage,style:{width:"72px"}},null,8,["src"])])),_:1}),r]),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[e.invalidCredentials?((0,l.wg)(),(0,l.iD)("div",d," Invalid username or password! ")):(0,l.kq)("",!0),(0,l.Wm)(q,{class:"q-px-sm q-pt-xs"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{square:"",clearable:"",dark:"",color:"white",modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),type:"email",label:"Email","lazy-rules":"",rules:[e=>e&&e.length>0||"Email is required"]},{prepend:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"email",color:"white"})])),_:1},8,["modelValue","rules"]),(0,l.Wm)(h,{square:"",dark:"",color:"white",modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t),type:e.isPwd?"password":"text",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Password is required"]},{prepend:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"lock",color:"white"})])),append:(0,l.w5)((()=>[(0,l.Wm)(g,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=t=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])])),_:1})])),_:1}),(0,l.Wm)(y,{class:"q-px-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{loading:e.loading,onClick:(0,s.iM)(e.onSubmit,["prevent"]),unelevated:"",size:"lg",color:"dark",class:"full-width",label:"Sign In"},null,8,["loading","onClick"])])),_:1}),(0,l.Wm)(f,{class:"text-center q-pa-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{flat:"",class:"text-grey-1 text-capitalize q-pa-sm q-mb-sm",label:"Forgot your password?",to:"/forgot-password"}),(0,l.Wm)(b),(0,l.Wm)(x,{to:"/register",flat:"",class:"text-grey-1 text-capitalize text-bold q-mt-sm",label:"No Account yet? Register Now"})])),_:1})])),_:1})])])])),_:1})])),_:1})}var u=a(5424),p=a(3607),m=a(9490),w=a.n(m);const g=(0,l.aZ)({name:"Login",data(){return{logoImage:w(),loading:!1,isPwd:!0,email:"",password:"",invalidCredentials:!1}},methods:{onSubmit(){this.loading=!0,u.Z.login({email:this.email,password:this.password}).then((()=>{this.storePushNotificationToken(),this.loading=!1})).catch((e=>{this.invalidCredentials=!0,this.loading=!1}))},async storePushNotificationToken(){try{const e=await FCM.getToken();p.Z.storeToken({token:e}).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))}catch(e){console.log(e)}}}});var h=a(9214),q=a(4379),f=a(151),x=a(5096),y=a(4027),b=a(5589),k=a(5269),v=a(4689),W=a(4554),_=a(9367),C=a(2165),Z=a(5869),Q=a(7518),P=a.n(Q);g.render=c;const I=g;P()(g,"components",{QLayout:h.Z,QPage:q.Z,QCard:f.Z,QAvatar:x.Z,QImg:y.Z,QCardSection:b.Z,QForm:k.Z,QInput:v.Z,QIcon:W.Z,QCardActions:_.Z,QBtn:C.Z,QSeparator:Z.Z})}}]);