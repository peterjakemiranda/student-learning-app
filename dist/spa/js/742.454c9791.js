"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[742],{1742:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ve});var i=l(3673),s=l(2323);const o={class:"q-pa-sm"},u={class:"text-h5 q-mb-sm q-pt-xl q-pb-xs"},a={key:2,class:"text-center"},n={key:3},d={key:0,class:"row justify-center"},r={class:"label q-pa-lg q-text-left"};function c(e,t,l,c,m,p){var h,q;const w=(0,i.up)("q-breadcrumbs-el"),f=(0,i.up)("q-breadcrumbs"),g=(0,i.up)("q-page-sticky"),b=(0,i.up)("q-btn"),_=(0,i.up)("q-spinner-hourglass"),v=(0,i.up)("q-tab"),z=(0,i.up)("q-tabs"),y=(0,i.up)("q-separator"),Q=(0,i.up)("quiz-viewer"),W=(0,i.up)("q-tab-panel"),Z=(0,i.up)("questions"),k=(0,i.up)("grading"),S=(0,i.up)("q-tab-panels");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(g,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,i.w5)((()=>{var t,l;return[(0,i.Wm)(w,{to:`/courses/${null===(t=e.course)||void 0===t?void 0:t.id}/quizzes`,label:(null===(l=e.course)||void 0===l?void 0:l.title)||"Course"},null,8,["to","label"]),(0,i.Wm)(w,{icon:"description",label:"View Quiz"})]})),_:1})])),_:1}),(0,i._)("div",u,(0,s.zw)(null===(h=e.quiz)||void 0===h?void 0:h.title),1),e.course&&e.isTeacher?((0,i.wg)(),(0,i.j4)(b,{key:0,to:`/courses/${e.course.id}/quizzes/${null===(q=e.quiz)||void 0===q?void 0:q.id}/edit`,color:"primary",icon:"edit",label:"Edit",class:"q-mb-md"},null,8,["to"])):(0,i.kq)("",!0),e.course&&e.isTeacher?((0,i.wg)(),(0,i.j4)(b,{key:1,onClick:t[0]||(t[0]=t=>e.deleteQuiz(e.quiz)),color:"red",icon:"delete",label:"Delete",class:"q-mb-md q-ml-sm"})):(0,i.kq)("",!0),e.loading?((0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(_,{color:"primary",size:"2em"})])):((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(z,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.tab=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{name:"view",label:"View"}),(0,i.Wm)(v,{name:"questions",label:"Questions"}),(0,i.Wm)(v,{name:"grading",label:"Grading"})])),_:1},8,["modelValue"]),(0,i.Wm)(y),(0,i.Wm)(S,{modelValue:e.tab,"onUpdate:modelValue":t[2]||(t[2]=t=>e.tab=t),animated:""},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{name:"view"},{default:(0,i.w5)((()=>{var t;return[(0,i.Wm)(Q,{quiz:e.quiz,course:e.course},null,8,["quiz","course"]),e.isStudent?((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("span",r,"Answer Submitted At: "+(0,s.zw)(e.formatDate(null===(t=e.quiz)||void 0===t?void 0:t.updated_at)),1)])):(0,i.kq)("",!0)]})),_:1}),(0,i.Wm)(W,{name:"questions"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{quiz:e.quiz},null,8,["quiz"])])),_:1}),(0,i.Wm)(W,{name:"grading"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{course:e.course,quiz:e.quiz},null,8,["course","quiz"])])),_:1})])),_:1},8,["modelValue"])]))])}l(71);var m=l(7874),p=l(1173),h=l(2176),q=l(773),w=l(5616);const f={class:"q-pa-none"},g={class:"text-subtitle1 q-pa-xs"},b=(0,i.Uk)("Student"),_=(0,i.Uk)(" Score "),v={key:0},z={key:1},y={key:2},Q=(0,i.Uk)("Close"),W={class:"text-subtitle"},Z=(0,i.Uk)("Quiz: "),k={class:"text-subtitle"},S=(0,i.Uk)("Student: "),V={class:"text-subtitle"},x=(0,i.Uk)("Points: "),C={class:"row items-center justify-center q-gutter-md"};function U(e,t,l,o,u,a){var n;const d=(0,i.up)("q-item-label"),r=(0,i.up)("q-item-section"),c=(0,i.up)("q-item"),m=(0,i.up)("q-separator"),p=(0,i.up)("q-list"),h=(0,i.up)("q-space"),q=(0,i.up)("q-tooltip"),w=(0,i.up)("q-btn"),U=(0,i.up)("q-bar"),D=(0,i.up)("q-card-section"),T=(0,i.up)("quiz-viewer"),j=(0,i.up)("q-input"),$=(0,i.up)("q-form"),P=(0,i.up)("q-card"),I=(0,i.up)("q-dialog"),A=(0,i.Q2)("ripple"),Y=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",f,[(0,i._)("div",g,"Points: "+(0,s.zw)(null===(n=e.quiz)||void 0===n?void 0:n.points),1),(0,i.Wm)(p,{bordered:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{class:"q-ma-none q-py-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[b])),_:1})])),_:1}),(0,i.Wm)(r,{side:""},{default:(0,i.w5)((()=>[_])),_:1})])),_:1}),(0,i.Wm)(m),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.students,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(c,{key:t.id,class:"q-my-sm",clickable:"",onClick:l=>e.gradeQuiz(t)},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.fullname),1)])),_:2},1024),(0,i.Wm)(d,{caption:"",lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.email),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(r,{side:"",top:""},{default:(0,i.w5)((()=>{var e;return[null!==t&&void 0!==t&&t.quiz_answers&&null!==t&&void 0!==t&&null!==(e=t.quiz_score)&&void 0!==e&&e.score?((0,i.wg)(),(0,i.iD)("span",v,(0,s.zw)(null===t||void 0===t?void 0:t.quiz_score.score),1)):null!==t&&void 0!==t&&t.quiz_answers&&null!==t&&void 0!==t&&t.quiz_answers.length?((0,i.wg)(),(0,i.iD)("span",z,"Ungraded")):((0,i.wg)(),(0,i.iD)("span",y,"No Answer"))]})),_:2},1024)])),_:2},1032,["onClick"])),[[A]]))),128))])),_:1})]),(0,i.Wm)(I,{modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialog=t),persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{class:"bg-white text-dark"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{class:"bg-primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(h),(0,i.wy)((0,i.Wm)(w,{class:"text-white",dense:"",flat:"",icon:"close"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{class:"bg-white text-white"},{default:(0,i.w5)((()=>[Q])),_:1})])),_:1},512),[[Y]])])),_:1}),(0,i.Wm)(D,null,{default:(0,i.w5)((()=>{var t,l,o;return[(0,i._)("div",W,[Z,(0,i._)("b",null,(0,s.zw)(null===(t=e.quiz)||void 0===t?void 0:t.title),1)]),(0,i._)("div",k,[S,(0,i._)("b",null,(0,s.zw)(null===(l=e.student)||void 0===l?void 0:l.fullname),1)]),(0,i._)("div",V,[x,(0,i._)("b",null,(0,s.zw)(null===(o=e.activity)||void 0===o?void 0:o.points),1)])]})),_:1}),(0,i.Wm)(D,{class:"q-pt-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{quiz:e.quiz,course:e.course,studentId:this.student.id},null,8,["quiz","course","studentId"]),(0,i.Wm)($,{onSubmit:e.onSubmitScore,class:"q-gutter-md q-pt-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{filled:"",type:"number",modelValue:e.score,"onUpdate:modelValue":t[0]||(t[0]=t=>e.score=t),label:"Score *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please enter score"]},null,8,["modelValue","rules"]),(0,i._)("div",C,[(0,i.Wm)(w,{label:"Cancel",type:"button",color:"purple",onClick:t[1]||(t[1]=t=>e.dialog=!1)}),(0,i.Wm)(w,{label:"Submit Score",type:"submit",color:"secondary"})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var D=l(4428),T=l(927);const j=(0,i.aZ)({name:"Grading",data(){return{dialog:!1,loading:!1,student:null,score:null}},components:{QuizViewer:T.Z},props:{quiz:{type:Object,default:()=>{}},course:{type:Object,default:()=>{}}},computed:{...(0,m.Se)({students:"allStudents",isTeacher:"isTeacher"})},mounted(){this.fetchStudents()},methods:{gradeQuiz(e){var t;if(this.student=e,null!==e&&void 0!==e&&e.quiz_answers.length){var l;if(null!==(t=this.student)&&void 0!==t&&t.quiz_score)this.score=null===(l=this.student)||void 0===l?void 0:l.quiz_score.score;this.dialog=!0}else this.$q.dialog({message:"This student hasn't submitted an answer yet!"})},onSubmitScore(){var e;this.loading=!0,q.Z.submitScore(null===(e=this.quiz)||void 0===e?void 0:e.id,{score:this.score,student_id:this.student.id}).then((e=>{this.dialog=!1,this.student=null,this.score=null,this.loading=!1,this.fetchStudents()})).catch((e=>{this.loading=!1}))},fetchStudents(){var e;this.loading=!0,D.Z.all({by_course:1,course_id:this.$route.params.id,quiz_id:null===(e=this.quiz)||void 0===e?void 0:e.id}).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))},isImage(e){return null!=e.match(/\.(jpeg|jpg|gif|png)$/)}}});var $=l(7011),P=l(3414),I=l(2035),A=l(2350),Y=l(5869),B=l(6778),H=l(151),O=l(846),F=l(2025),L=l(2165),M=l(8870),E=l(5589),G=l(5269),R=l(4689),K=l(6489),N=l(677),J=l(7518),X=l.n(J);j.render=U;const ee=j;X()(j,"components",{QList:$.Z,QItem:P.Z,QItemSection:I.Z,QItemLabel:A.Z,QSeparator:Y.Z,QDialog:B.Z,QCard:H.Z,QBar:O.Z,QSpace:F.Z,QBtn:L.Z,QTooltip:M.Z,QCardSection:E.Z,QForm:G.Z,QInput:R.Z}),X()(j,"directives",{Ripple:K.Z,ClosePopup:N.Z});const te={class:"q-pa-none"},le=(0,i.Uk)("Question"),ie={class:"row q-gutter-sm"},se=(0,i.Uk)("Close"),oe={class:"q-gutter-xs"},ue={class:"row items-center justify-center q-gutter-md"};function ae(e,t,l,o,u,a){const n=(0,i.up)("q-btn"),d=(0,i.up)("q-item-label"),r=(0,i.up)("q-item-section"),c=(0,i.up)("q-item"),m=(0,i.up)("q-list"),p=(0,i.up)("q-space"),h=(0,i.up)("q-tooltip"),q=(0,i.up)("q-bar"),w=(0,i.up)("q-input"),f=(0,i.up)("q-radio"),g=(0,i.up)("q-form"),b=(0,i.up)("q-card-section"),_=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),z=(0,i.Q2)("ripple"),y=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",te,[e.quiz&&e.isTeacher?((0,i.wg)(),(0,i.j4)(n,{key:0,color:"primary",icon:"add",label:"Add Question",class:"q-mb-md",onClick:e.addQuestion},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(m,{bordered:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{class:"q-ma-none q-py-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[le])),_:1})])),_:1}),(0,i.Wm)(r,{side:""})])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.questions,(t=>((0,i.wg)(),(0,i.j4)(c,{key:t.id,class:"q-my-sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"ellipsis-2-lines"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.question),1)])),_:2},1024),(0,i.Wm)(d,{caption:"",lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.type_name),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(r,{side:""},{default:(0,i.w5)((()=>[(0,i._)("div",ie,[(0,i.wy)((0,i.Wm)(n,{size:"12px",dense:"",round:"",icon:"edit",clickable:"",onClick:l=>e.editQuestion(t)},null,8,["onClick"]),[[z]]),(0,i.wy)((0,i.Wm)(n,{size:"12px",dense:"",round:"",icon:"delete",clickable:"",onClick:l=>e.deleteQuestion(t)},null,8,["onClick"]),[[z]])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),(0,i.Wm)(v,{modelValue:e.dialog,"onUpdate:modelValue":t[8]||(t[8]=t=>e.dialog=t),persistent:"","transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{class:"bg-white text-dark"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{class:"bg-primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(p),(0,i.wy)((0,i.Wm)(n,{class:"text-white",dense:"",flat:"",icon:"close"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"bg-white text-white"},{default:(0,i.w5)((()=>[se])),_:1})])),_:1},512),[[y]])])),_:1}),(0,i.Wm)(b,{class:"q-pt-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{onSubmit:e.onSubmitQuestion,class:"q-gutter-md q-pt-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{filled:"",type:"textarea",modelValue:e.form.question,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.question=t),label:"Question","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please enter question"]},null,8,["modelValue","rules"]),(0,i._)("div",oe,[(0,i.Wm)(f,{modelValue:e.form.type,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.type=t),val:"text",label:"Text Input"},null,8,["modelValue"]),(0,i.Wm)(f,{modelValue:e.form.type,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.type=t),val:"multiple_choice",label:"Multiple Choice"},null,8,["modelValue"]),(0,i.Wm)(f,{modelValue:e.form.type,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.type=t),val:"multiple_answers",label:"Multiple Answers"},null,8,["modelValue"]),(0,i.Wm)(f,{modelValue:e.form.type,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.type=t),val:"file_upload",label:"File Upload"},null,8,["modelValue"])]),["multiple_choice","multiple_answers"].includes(e.form.type)?((0,i.wg)(),(0,i.j4)(w,{key:0,filled:"",type:"textarea",modelValue:e.form.options,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.options=t),label:"Choices",hint:"Enter each choices per line","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please enter Options"]},null,8,["modelValue","rules"])):(0,i.kq)("",!0),(0,i.Wm)(w,{filled:"",type:"text",modelValue:e.form.correct_answer,"onUpdate:modelValue":t[6]||(t[6]=t=>e.form.correct_answer=t),label:"Correct Answer"},null,8,["modelValue"]),(0,i._)("div",ue,[(0,i.Wm)(n,{label:"Cancel",type:"button",color:"purple",onClick:t[7]||(t[7]=t=>e.dialog=!1)}),(0,i.Wm)(n,{label:"Submit",type:"submit",color:"secondary"})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var ne=l(2051);const de=(0,i.aZ)({name:"Questions",data(){return{dialog:!1,loading:!1,student:null,form:{id:null,question:"",type:"text",options:null,correct_answer:""}}},props:{quiz:{type:Object,default:()=>{}}},computed:{...(0,m.Se)({questions:"allQuizQuestions",isTeacher:"isTeacher"})},mounted(){this.fetchQuestions()},methods:{addQuestion(){this.dialog=!0},onSubmitQuestion(){this.loading=!0;const e={quiz_id:this.quiz.id,question:this.form.question,type:this.form.type,options:this.form.options,correct_answer:this.form.correct_answer},t=this.form.id?ne.Z.update(this.form.id,e):ne.Z.store(e);Promise.all([t]).then((e=>{this.loading=!1,this.dialog=!1,this.form={id:null,question:"",type:"text",options:null,correct_answer:""},this.fetchQuestions()})).catch((e=>{this.loading=!1}))},fetchQuestions(){var e;this.loading=!0,ne.Z.all(null===(e=this.quiz)||void 0===e?void 0:e.id).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))},editQuestion(e){this.form=Object.assign({},e),this.dialog=!0},deleteQuestion(e){this.$q.dialog({title:"Confirm",message:"Are you sure to delete this question?",cancel:!0,persistent:!0}).onOk((()=>{this.loading=!0,ne.Z.destroy(e.id).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))}))}}});var re=l(7991);de.render=ae;const ce=de;X()(de,"components",{QBtn:L.Z,QList:$.Z,QItem:P.Z,QItemSection:I.Z,QItemLabel:A.Z,QDialog:B.Z,QCard:H.Z,QBar:O.Z,QSpace:F.Z,QTooltip:M.Z,QCardSection:E.Z,QForm:G.Z,QInput:R.Z,QRadio:re.Z}),X()(de,"directives",{Ripple:K.Z,ClosePopup:N.Z});const me=(0,i.aZ)({name:"QuizView",data(){return{loading:!1,quiz:null,file:null,content:null,resubmit:0,tab:"view"}},components:{Grading:ee,Questions:ce,QuizViewer:T.Z},computed:{...(0,m.Se)({quizzes:"allQuizzes",course:"currentCourse",isStudent:"isStudent",isTeacher:"isTeacher"}),allowSubmission(){var e;return!(null!==(e=this.quiz)&&void 0!==e&&e.answers.length)||1===this.resubmit}},mounted(){const e=[q.Z.show(this.$route.params.quiz_id)];this.course||e.push(h.Z.show(this.$route.params.id)),this.loading=!0,Promise.all(e).then((e=>{this.quiz=e[0]||null,this.course||p["default"].dispatch("setCurrentCourse",e[1]),this.loading=!1})).catch((e=>{this.loading=!1}))},methods:{onSubmit(){const e=new FormData;e.append("file",this.file),e.append("content",this.content),e.append("submission_type",this.quiz.submission_type),q.Z.submitAnswer(this.$route.params.quiz_id,e).then((e=>{this.quiz.answers=e.answers||null,this.loading=!1})).catch((e=>{this.loading=!1}))},formatDate(e){return w.ZP.formatDate(e,"YYYY-MM-DD HH:mm:ss")},deleteQuiz(e){const t=this;this.$q.dialog({title:"Confirm",message:"Are you sure to delete this quiz?",cancel:!0,persistent:!0}).onOk((()=>{q.Z.destroy(this.$route.params.quiz_id).then((e=>{var l;t.$router.push(`/courses/${null===(l=this.course)||void 0===l?void 0:l.id}/quizzes`),t.loading=!1})).catch((e=>{t.loading=!1}))}))}}});var pe=l(1007),he=l(1481),qe=l(5926),we=l(3282),fe=l(7547),ge=l(8408),be=l(5906),_e=l(6602);me.render=c;const ve=me;X()(me,"components",{QPageSticky:pe.Z,QBreadcrumbs:he.Z,QBreadcrumbsEl:qe.Z,QBtn:L.Z,QSpinnerHourglass:we.Z,QTabs:fe.Z,QTab:ge.Z,QSeparator:Y.Z,QTabPanels:be.Z,QTabPanel:_e.Z})}}]);