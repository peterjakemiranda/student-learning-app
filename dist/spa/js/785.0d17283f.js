"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[785],{8785:(e,a,l)=>{l.r(a),l.d(a,{default:()=>w});var t=l(3673);const s={class:"q-pa-md"},n={class:"q-pa-md",style:{"max-width":"400px"}},o=(0,t._)("h5",{class:"text-h5 text-bold q-my-md q-pb-lg"},"My Account",-1),m={class:"text-center q-px-lg"};function i(e,a,l,i,d,u){const r=(0,t.up)("q-input"),c=(0,t.up)("q-btn"),p=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",n,[o,(0,t.Wm)(p,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{filled:"",modelValue:e.first_name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.first_name=a),label:"First name *","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{filled:"",modelValue:e.last_name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.last_name=a),label:"Last name *","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{filled:"",readonly:"",modelValue:e.email,"onUpdate:modelValue":a[2]||(a[2]=a=>e.email=a),label:"Email *","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{filled:"",modelValue:e.password,"onUpdate:modelValue":a[3]||(a[3]=a=>e.password=a),label:"Password"},null,8,["modelValue"]),(0,t.Wm)(r,{filled:"",modelValue:e.password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=a=>e.password_confirmation=a),label:"Confirm Password","lazy-rules":"",rules:[a=>a===e.password||"Password does not matched"]},null,8,["modelValue","rules"]),(0,t._)("div",m,[(0,t.Wm)(c,{label:"Update Account",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"])])])}var d=l(7874),u=(l(1173),l(3607));const r=(0,t.aZ)({name:"Account",data(){return{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}},computed:{...(0,d.Se)({account:"account"})},mounted(){this.account||u.Z.find().then((()=>{}))},methods:{onSubmit(){u.Z.update({first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,password_confirmation:this.password_confirmation}).then((()=>{this.$q.dialog({title:"Success!",message:"Account has been successfully updated"}),this.loading=!1})).catch((e=>{this.$q.dialog({title:"Error!",message:"Failed to update account! Please try again later."}),this.loading=!1}))}},watch:{account:{immediate:!0,handler(e){e&&(this.first_name=e.first_name,this.last_name=e.last_name,this.email=e.email)}}}});var c=l(5269),p=l(4689),h=l(2165),f=l(7518),_=l.n(f);r.render=i;const w=r;_()(r,"components",{QForm:c.Z,QInput:p.Z,QBtn:h.Z})}}]);