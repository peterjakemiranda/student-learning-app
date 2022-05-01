"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[401],{2401:(e,t,l)=>{l.r(t),l.d(t,{default:()=>H});var i=l(3673),s=l(2323);const a={class:"q-pa-sm"},o={class:"text-h5 q-mb-lg q-pt-xl q-pb-xs"},d={key:0,class:"text-center"},u={key:1},n={class:"q-gutter-md q-ml-none",style:{"max-width":"400px"}},r=(0,i._)("span",{class:"label q-mt-lg block"},"Due Date:",-1),p={class:"row items-center justify-end"},m={class:"row items-center justify-end"},c={class:"q-pa-sm q-pt-xs"},h=(0,i._)("span",{class:"label q-pt-md q-pb-sm"},"Instructions:",-1),f={class:"q-gutter-lg q-pa-lg"};function y(e,t,l,y,b,_){const g=(0,i.up)("q-breadcrumbs-el"),w=(0,i.up)("q-breadcrumbs"),q=(0,i.up)("q-page-sticky"),v=(0,i.up)("q-spinner-hourglass"),V=(0,i.up)("q-input"),W=(0,i.up)("q-btn"),Z=(0,i.up)("q-date"),x=(0,i.up)("q-popup-proxy"),k=(0,i.up)("q-icon"),Q=(0,i.up)("q-time"),C=(0,i.up)("q-file"),D=(0,i.up)("q-editor"),P=(0,i.up)("q-toggle"),j=(0,i.up)("q-form"),z=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(q,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,i.w5)((()=>{var t;return[e.course?((0,i.wg)(),(0,i.j4)(g,{key:0,to:`/courses/${e.course.id}/activities`,label:(null===(t=e.course)||void 0===t?void 0:t.title)||"Course"},null,8,["to","label"])):(0,i.kq)("",!0),(0,i.Wm)(g,{icon:"description",label:"Create Activity"})]})),_:1})])),_:1}),(0,i._)("div",o,(0,s.zw)(e.id?"Update":"Create")+" Activity",1),e.loading?((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(v,{color:"primary",size:"2em"})])):((0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(j,{onSubmit:e.onSubmit,class:"q-gutter-md",style:{"max-width":"800px"}},{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i.Wm)(V,{filled:"",modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.title=t),label:"Title","lazy-rules":"",rules:[e=>e&&e.length>0||"Please input title"]},null,8,["modelValue","rules"]),(0,i.Wm)(V,{filled:"",modelValue:e.points,"onUpdate:modelValue":t[1]||(t[1]=t=>e.points=t),label:"Points","lazy-rules":"",rules:[e=>e&&e>0||"Please input points"]},null,8,["modelValue","rules"]),r,(0,i.Wm)(V,{filled:"",modelValue:e.due_date,"onUpdate:modelValue":t[4]||(t[4]=t=>e.due_date=t)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(k,{name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{modelValue:e.due_date,"onUpdate:modelValue":t[2]||(t[2]=t=>e.due_date=t),mask:"YYYY-MM-DD HH:mm"},{default:(0,i.w5)((()=>[(0,i._)("div",p,[(0,i.wy)((0,i.Wm)(W,{label:"Close",color:"primary",flat:""},null,512),[[z]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,i.w5)((()=>[(0,i.Wm)(k,{name:"access_time",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{modelValue:e.due_date,"onUpdate:modelValue":t[3]||(t[3]=t=>e.due_date=t),mask:"YYYY-MM-DD HH:mm",format24h:""},{default:(0,i.w5)((()=>[(0,i._)("div",m,[(0,i.wy)((0,i.Wm)(W,{label:"Close",color:"primary",flat:""},null,512),[[z]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(C,{modelValue:e.file,"onUpdate:modelValue":t[5]||(t[5]=t=>e.file=t),label:"Activity PDF",square:"",flat:"",outlined:"","use-chips":"",clearable:"",accept:".pdf,.jpg,.png,.gif","max-files":"1","max-file-size":"5120000",onRejected:e.onRejected,"lazy-rules":"",rules:[t=>t||e.id||"Please provide the activity pdf."]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(k,{name:"attach_file"})])),_:1},8,["modelValue","onRejected","rules"])]),(0,i._)("div",c,[h,(0,i.Wm)(D,{modelValue:e.body,"onUpdate:modelValue":t[6]||(t[6]=t=>e.body=t),filled:"",label:"Body *","lazy-rules":"",rules:[e=>e&&e.length>0||"Content is required"]},null,8,["modelValue","rules"])]),(0,i.Wm)(P,{modelValue:e.draft,"onUpdate:modelValue":t[7]||(t[7]=t=>e.draft=t),label:"Is Draft?"},null,8,["modelValue"]),(0,i._)("div",f,[(0,i.Wm)(W,{label:"Save",type:"submit",color:"primary",loading:e.loading},null,8,["loading"]),e.course?((0,i.wg)(),(0,i.j4)(W,{key:0,label:"Back",type:"submit",to:`/courses/${e.course.id}/activities`},null,8,["to"])):(0,i.kq)("",!0)])])),_:1},8,["onSubmit"])]))])}l(71);var b=l(7874),_=l(2176),g=l(5977),w=l(1173);const q=(0,i.aZ)({name:"ViewActivity",data(){return{loading:!1,id:"",title:"",points:"",due_date:"",submission_type:"file_upload",body:"",file:null,draft:!1}},computed:{...(0,b.Se)({courses:"allCourses",course:"currentCourse"})},mounted(){const e=this.$route.params.activity_id?[g.Z.show(this.$route.params.activity_id)]:[];this.course||e.push(_.Z.show(this.$route.params.id)),this.loading=!0,Promise.all(e).then((e=>{if(this.$route.params.activity_id&&e[0]){const t=e[0];this.id=t.id,this.title=t.title,this.points=t.points,this.due_date=t.due_date,this.submission_type=t.submission_type,this.body=t.body,this.draft=!!t.draft}this.course||w["default"].dispatch("setCurrentCourse",e[1]),this.loading=!1})).catch((e=>{this.loading=!1}))},methods:{onSubmit(){const e=new FormData;e.append("file",this.file),e.append("title",this.title),e.append("points",this.points),e.append("display_date",this.display_date),e.append("due_date",this.due_date),e.append("submission_type",this.submission_type),e.append("body",this.body),e.append("course_id",this.course.id),e.append("draft",this.draft?1:0);const t=this.id?g.Z.update(this.id,e):g.Z.store(e);Promise.all([t]).then((e=>{this.loading=!1,this.$router.push(`/courses/${this.course.id}/activities`)})).catch((e=>{this.loading=!1}))},onRejected(e){if(e.length>0)switch(e[0].failedPropValidation){case"max-file-size":this.$q.notify({position:"top",type:"negative",message:"File exceeds 5MB."});break}}}});var v=l(1007),V=l(1481),W=l(5926),Z=l(3282),x=l(5269),k=l(4689),Q=l(4554),C=l(3944),D=l(5626),P=l(2165),j=l(5990),z=l(4974),U=l(7991),$=l(9991),S=l(8886),Y=l(677),B=l(7518),F=l.n(B);q.render=y;const H=q;F()(q,"components",{QPageSticky:v.Z,QBreadcrumbs:V.Z,QBreadcrumbsEl:W.Z,QSpinnerHourglass:Z.Z,QForm:x.Z,QInput:k.Z,QIcon:Q.Z,QPopupProxy:C.Z,QDate:D.Z,QBtn:P.Z,QTime:j.Z,QFile:z.Z,QRadio:U.Z,QEditor:$.Z,QToggle:S.Z}),F()(q,"directives",{ClosePopup:Y.Z})}}]);