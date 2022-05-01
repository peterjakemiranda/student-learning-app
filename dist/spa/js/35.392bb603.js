"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[35],{1035:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});var a=s(3673),i=s(2323);const l={class:"q-pa-sm"},r=(0,a._)("div",{class:"text-h5 q-mb-sm q-pt-xl q-pb-xs"},"Add Student",-1),u={class:"q-pt-sm"},c={key:0,class:"text-center"},d={key:2,class:"text-body2 text-center q-pa-lg text-grey-6"},n={key:0},o={key:1};function h(e,t,s,h,p,m){const g=(0,a.up)("q-breadcrumbs-el"),f=(0,a.up)("q-breadcrumbs"),w=(0,a.up)("q-page-sticky"),y=(0,a.up)("q-btn"),q=(0,a.up)("q-icon"),b=(0,a.up)("q-input"),k=(0,a.up)("q-spinner-hourglass"),x=(0,a.up)("q-item-label"),v=(0,a.up)("q-item-section"),Q=(0,a.up)("q-item"),S=(0,a.up)("q-list");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(w,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,a.w5)((()=>{var t;return[e.course?((0,a.wg)(),(0,a.j4)(g,{key:0,to:`/courses/${e.course.id}/students`,label:(null===(t=e.course)||void 0===t?void 0:t.title)||"Course"},null,8,["to","label"])):(0,a.kq)("",!0),(0,a.Wm)(g,{icon:"description",label:"Students"})]})),_:1})])),_:1}),r,(0,a._)("div",null,[e.course?((0,a.wg)(),(0,a.j4)(y,{key:0,to:`/courses/${e.course.id}/students/invite`,color:"primary",icon:"add",label:"Add New",class:"q-mb-md"},null,8,["to"])):(0,a.kq)("",!0),(0,a._)("div",u,[(0,a.Wm)(b,{"bottom-slots":"",filled:"",debounce:"800",modelValue:e.searchText,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchText=t),ref:"searchInput",dense:"",class:"q-pa-sm q-mb-lg"},{append:(0,a.w5)((()=>[""!==e.searchText?((0,a.wg)(),(0,a.j4)(q,{key:0,name:"close",onClick:e.clearSearch,class:"cursor-pointer"},null,8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(q,{name:"search"})])),_:1},8,["modelValue"]),e.loading?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(k,{color:"primary",size:"2em"})])):e.students.items.length?((0,a.wg)(),(0,a.j4)(S,{key:1,class:"q-pa-xs",separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.students.items,(t=>((0,a.wg)(),(0,a.j4)(Q,{key:t.id},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{to:""},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"text-subtitle1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.fullname),1)])),_:2},1024),(0,a.Wm)(x,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.email),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(v,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{outline:"",color:"primary",label:"Add",onClick:s=>e.add(t)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,a.wg)(),(0,a.iD)("div",d,[e.searchText?((0,a.wg)(),(0,a.iD)("span",n,"No Results")):((0,a.wg)(),(0,a.iD)("span",o,"Search by name or email."))]))])])])}s(7098);var p=s(7874),m=s(2176),g=s(4428),f=s(1173);const w=(0,a.aZ)({name:"SearchStudent",data(){return{loading:!1,searchText:"",page:1,limit:10}},computed:{...(0,p.Se)({courses:"allCourses",course:"currentCourse",students:"students",searchQuery:"studentQuery"})},mounted(){this.course||(this.loading=!0,m.Z.show(this.$route.params.id).then((e=>{f["default"].dispatch("setCurrentCourse",e),this.loading=!1})).catch((e=>{this.loading=!1})));const e={page:this.page,limit:this.limit,search:this.searchQuery.search};f["default"].dispatch("setStudentQuery",e),this.$refs.searchInput.focus(),this.searchText||this.$store.dispatch("resetStudents")},methods:{search(){var e;this.loading=!0,g.Z.search({page:this.searchQuery.page,limit:this.searchQuery.limit,sort:this.sort,search:this.searchQuery.search,course_id:null===(e=this.course)||void 0===e?void 0:e.id}).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))},clearSearch(){this.searchText="",this.$refs.searchInput.focus()},add(e){this.$q.dialog({title:"Confirm",message:`Are you sure to add ${e.fullname} to ${this.course.title}? The student will receive an email notification.`,cancel:!0,persistent:!0}).onOk((()=>{var t;g.Z.add({student_id:e.id,course_id:null===(t=this.course)||void 0===t?void 0:t.id}).then((t=>{this.loading=!1,f["default"].dispatch("removeStudent",e.id),this.$q.dialog({title:"Success",message:"Successfully added student to the course."})})).catch((e=>{this.loading=!1}))}))}},watch:{searchText(e){if(!this.searchText)return void this.$store.dispatch("resetStudents");const t={page:this.page,limit:this.limit,search:e};f["default"].dispatch("setStudentQuery",t),this.search()}}});var y=s(1007),q=s(1481),b=s(5926),k=s(2165),x=s(4689),v=s(4554),Q=s(3282),S=s(7011),_=s(3414),Z=s(2035),C=s(2350),W=s(7518),$=s.n(W);w.render=h;const T=w;$()(w,"components",{QPageSticky:y.Z,QBreadcrumbs:q.Z,QBreadcrumbsEl:b.Z,QBtn:k.Z,QInput:x.Z,QIcon:v.Z,QSpinnerHourglass:Q.Z,QList:S.Z,QItem:_.Z,QItemSection:Z.Z,QItemLabel:C.Z})}}]);