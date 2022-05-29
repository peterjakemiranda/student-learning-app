"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[681],{6681:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var s=a(3673),i=a(2323);const o={class:"q-pa-sm"},l={key:0,class:"text-center"},r={key:1},n={key:0},u=(0,s.Uk)("Status: "),d=(0,s._)("span",{class:"text-green"},"Active",-1),c=(0,s.Uk)(),g=(0,s._)("br",null,null,-1),p={key:1},m=(0,s.Uk)("Status: "),w=(0,s._)("span",{class:"text-red"},"Inactive",-1),k=(0,s.Uk)(),h=(0,s._)("br",null,null,-1),z={key:2},v={key:0,class:"row q-gutter-xs"},y={key:1,class:"row q-gutter-xs"},q={key:0,class:"text-subtitle text-center"},_={key:1,class:"text-subtitle  text-center"};function S(e,t,a,S,f,D){const b=(0,s.up)("header-menu"),x=(0,s.up)("q-spinner-hourglass"),Z=(0,s.up)("q-btn"),C=(0,s.up)("q-avatar"),Q=(0,s.up)("q-item-section"),W=(0,s.up)("q-item-label"),U=(0,s.up)("q-item"),Y=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(b),e.loading?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(x,{color:"primary",size:"2em"})])):((0,s.wg)(),(0,s.iD)("div",r,[e.course&&e.isTeacher?((0,s.wg)(),(0,s.j4)(Z,{key:0,to:`/courses/${e.course.id}/quizzes/create`,color:"primary",icon:"add",label:"Create Quiz",class:"q-mb-md"},null,8,["to"])):(0,s.kq)("",!0),e.quizzes.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(e.quizzes,(t=>((0,s.wg)(),(0,s.j4)(U,{class:"q-pa-sm",key:t.id},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{avatar:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{icon:"assignment",color:"primary","text-color":"white"})])),_:1}),(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{lines:"1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.title),1)])),_:2},1024),(0,s.Wm)(W,{caption:""},{default:(0,s.w5)((()=>[t.started?((0,s.wg)(),(0,s.iD)("span",n,[u,d,c,g,(0,s.Uk)(" Started at: "+(0,i.zw)(t.started_date_formatted),1)])):t.stopped_date?((0,s.wg)(),(0,s.iD)("span",p,[m,w,k,h,(0,s.Uk)(" Stopped at: "+(0,i.zw)(t.stopped_date_formatted),1)])):((0,s.wg)(),(0,s.iD)("span",z,"Status: "+(0,i.zw)("Not Started")))])),_:2},1024),(0,s.Wm)(W,{caption:""},{default:(0,s.w5)((()=>[(0,s._)("span",null,"Score: "+(0,i.zw)((null===t||void 0===t?void 0:t.score.score)||"Ungraded")+" / "+(0,i.zw)(null===t||void 0===t?void 0:t.points),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(Q,{side:""},{default:(0,s.w5)((()=>[e.isTeacher?((0,s.wg)(),(0,s.iD)("div",v,[(0,s.wy)((0,s.Wm)(Z,{to:`/courses/${e.course.id}/quizzes/${null===t||void 0===t?void 0:t.id}`,color:"purple",size:"12px",label:"View"},null,8,["to"]),[[Y]]),t.started?(0,s.wy)(((0,s.wg)(),(0,s.j4)(Z,{key:1,size:"12px",color:"red",label:"Stop",onClick:a=>e.toggleStatus(t,0),loading:e.toggleLoading},null,8,["onClick","loading"])),[[Y]]):(0,s.wy)(((0,s.wg)(),(0,s.j4)(Z,{key:0,size:"12px",color:"primary",label:"Start",onClick:a=>e.toggleStatus(t,1),loading:e.toggleLoading},null,8,["onClick","loading"])),[[Y]])])):t.started?((0,s.wg)(),(0,s.iD)("div",y,[(0,s.wy)((0,s.Wm)(Z,{to:`/courses/${e.course.id}/quizzes/${null===t||void 0===t?void 0:t.id}/take`,color:"primary",size:"12px",label:"Take"},null,8,["to"]),[[Y]])])):(0,s.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128)):((0,s.wg)(),(0,s.iD)(s.HY,{key:2},[e.isStudent?((0,s.wg)(),(0,s.iD)("div",q,"You have no active quizzes.")):e.isTeacher?((0,s.wg)(),(0,s.iD)("div",_,"You haven't added any quizzes yet.")):(0,s.kq)("",!0)],64))]))])}a(71);var f=a(7874),D=a(1173),b=a(2176),x=a(773),Z=a(5561),C=a(5616);const Q=(0,s.aZ)({name:"QuizIndex",data(){return{loading:!1,toggleLoading:!1}},components:{HeaderMenu:Z.Z},computed:{...(0,f.Se)({courses:"allCourses",quizzes:"allQuizzes",course:"currentCourse",isTeacher:"isTeacher",isStudent:"isStudent"})},mounted(){const e=[x.Z.all(this.$route.params.id)];this.course||e.push(b.Z.show(this.$route.params.id)),this.loading=!0,Promise.all(e).then((e=>{this.course||D["default"].dispatch("setCurrentCourse",e[1]),this.loading=!1})).catch((e=>{this.loading=!1}))},methods:{formatDate(e){return C.ZP.formatDate(e,"YYYY-MM-DD")},toggleStatus(e,t){this.toggleLoading=!0,x.Z.toggle(e.id,{started:t}).then((e=>{this.toggleLoading=!1,D["default"].dispatch("updateQuiz",e)})).catch((e=>{this.toggleLoading=!1}))}}});var W=a(3282),U=a(2165),Y=a(3414),L=a(2035),$=a(5096),T=a(2350),I=a(6489),j=a(7518),H=a.n(j);Q.render=S;const M=Q;H()(Q,"components",{QSpinnerHourglass:W.Z,QBtn:U.Z,QItem:Y.Z,QItemSection:L.Z,QAvatar:$.Z,QItemLabel:T.Z}),H()(Q,"directives",{Ripple:I.Z})}}]);