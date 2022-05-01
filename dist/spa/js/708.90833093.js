"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[708],{708:(e,s,t)=>{t.r(s),t.d(s,{default:()=>D});var i=t(3673),u=t(2323);const a={class:"q-pa-sm"},n={class:"text-h5 q-mb-sm q-pt-xl q-pb-xs"},l={key:0,class:"text-center"},r={key:1},o={class:"q-pa-sm"},d={class:"row justify-center"},c={class:"label q-pa-lg q-text-left"};function p(e,s,t,p,m,h){var q,w;const z=(0,i.up)("q-breadcrumbs-el"),b=(0,i.up)("q-breadcrumbs"),v=(0,i.up)("q-page-sticky"),g=(0,i.up)("q-spinner-hourglass"),f=(0,i.up)("quiz-viewer");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(v,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,i.w5)((()=>{var s,t;return[(0,i.Wm)(z,{to:`/courses/${null===(s=e.course)||void 0===s?void 0:s.id}/quizzes`,label:(null===(t=e.course)||void 0===t?void 0:t.title)||"Course"},null,8,["to","label"]),(0,i.Wm)(z,{icon:"description",label:"View Quiz"})]})),_:1})])),_:1}),(0,i._)("div",n,(0,u.zw)(null===(q=e.quiz)||void 0===q?void 0:q.title),1),e.loading?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(g,{color:"primary",size:"2em"})])):((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",o,[(0,i.Wm)(f,{quiz:e.quiz,course:e.course},null,8,["quiz","course"])]),(0,i._)("div",d,[(0,i._)("span",c,"Answer Submitted At: "+(0,u.zw)(e.formatDate(null===(w=e.quiz)||void 0===w?void 0:w.updated_at)),1)])]))])}t(71);var m=t(7874),h=t(1173),q=t(2176),w=t(773),z=t(5616),b=t(927);const v=(0,i.aZ)({name:"QuizView",data(){return{loading:!1,quiz:null,file:null,content:null,resubmit:0,tab:"view"}},components:{QuizViewer:b.Z},computed:{...(0,m.Se)({quizzes:"allQuizzes",course:"currentCourse",isStudent:"isStudent",isTeacher:"isTeacher"}),allowSubmission(){var e;return!(null!==(e=this.quiz)&&void 0!==e&&e.answers.length)||1===this.resubmit}},mounted(){const e=[w.Z.show(this.$route.params.quiz_id)];this.course||e.push(q.Z.show(this.$route.params.id)),this.loading=!0,Promise.all(e).then((e=>{this.quiz=e[0]||null,this.course||h["default"].dispatch("setCurrentCourse",e[1]),this.loading=!1})).catch((e=>{this.loading=!1}))},methods:{onSubmit(){const e=new FormData;e.append("file",this.file),e.append("content",this.content),e.append("submission_type",this.quiz.submission_type),w.Z.submitAnswer(this.$route.params.quiz_id,e).then((e=>{this.quiz.answers=e.answers||null,this.loading=!1})).catch((e=>{this.loading=!1}))},formatDate(e){return z.ZP.formatDate(e,"YYYY-MM-DD HH:mm:ss")}}});var g=t(1007),f=t(1481),_=t(5926),y=t(3282),x=t(7518),Z=t.n(x);v.render=p;const D=v;Z()(v,"components",{QPageSticky:g.Z,QBreadcrumbs:f.Z,QBreadcrumbsEl:_.Z,QSpinnerHourglass:y.Z})}}]);