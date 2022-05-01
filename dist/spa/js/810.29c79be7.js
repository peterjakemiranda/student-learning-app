(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[810],{400:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>Qt});var s=i(3673),n=i(2323);const l={class:"q-pa-sm"},a={class:"text-h5 q-mb-lg q-pt-xl q-pb-xs"},o={key:0,class:"text-center"},r={key:1},u={class:"q-pa-sm q-gutter-sm"},d={key:0,class:"text-subtitle text-center"},c={caption:""},p={key:2,caption:""},m={class:"q-gutter-sm q-pt-lg",style:{"max-width":"400px"}},h={class:"q-gutter-lg q-pa-lg row justify-center"},g={key:4},v={key:0,class:"text-center"},w={key:0,class:"label q-pa-sm q-text-left block"};function y(t,e,i,y,f,b){var q,_,k,x,P,S,Z,W,Q,C;const D=(0,s.up)("q-breadcrumbs-el"),I=(0,s.up)("q-breadcrumbs"),z=(0,s.up)("q-page-sticky"),U=(0,s.up)("q-spinner-hourglass"),j=(0,s.up)("PdfViewer"),V=(0,s.up)("q-icon"),F=(0,s.up)("q-file"),Y=(0,s.up)("q-btn"),A=(0,s.up)("q-form"),T=(0,s.up)("grading");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(z,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,s.w5)((()=>{var e,i;return[(0,s.Wm)(D,{to:`/courses/${null===(e=t.course)||void 0===e?void 0:e.id}/activities`,label:(null===(i=t.course)||void 0===i?void 0:i.title)||"Course"},null,8,["to","label"]),(0,s.Wm)(D,{icon:"description",label:"View Activity"})]})),_:1})])),_:1}),(0,s._)("div",a,(0,n.zw)(null===(q=t.activity)||void 0===q?void 0:q.title),1),t.loading?((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(U,{color:"primary",size:"2em"})])):((0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",u,[null!==(_=t.activity)&&void 0!==_&&_.file?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",d,"Activity PDF not found.")),null!==(k=t.activity)&&void 0!==k&&k.file?((0,s.wg)(),(0,s.j4)(j,{key:1,src:null===(x=t.activity)||void 0===x?void 0:x.file},null,8,["src"])):(0,s.kq)("",!0),(0,s._)("div",c,"Points: "+(0,n.zw)(null===(P=t.activity)||void 0===P?void 0:P.points),1),null!==(S=this.activity)&&void 0!==S&&S.answers&&null!==(Z=this.activity)&&void 0!==Z&&Z.answers.length&&t.isStudent?((0,s.wg)(),(0,s.iD)("div",p,"Score: "+(0,n.zw)((null===(W=this.activity)||void 0===W?void 0:W.answers[0].score)||"Ungraded"),1)):(0,s.kq)("",!0),t.isStudent&&t.allowSubmission?((0,s.wg)(),(0,s.j4)(A,{key:3,onSubmit:t.onSubmit,class:"q-gutter-md",style:{"max-width":"800px"}},{default:(0,s.w5)((()=>{var i;return[(0,s._)("div",m,[(0,s.Wm)(F,{modelValue:t.file,"onUpdate:modelValue":e[0]||(e[0]=e=>t.file=e),label:"Upload your answer",square:"",flat:"",outlined:"","use-chips":"",clearable:"",accept:".pdf,.jpg,.png,.gif","max-files":"1","max-file-size":"5120000"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"attach_file"})])),_:1},8,["modelValue"])]),(0,s._)("div",h,[(0,s.Wm)(Y,{label:"Submit Answer",type:"submit",color:"primary"}),(0,s.Wm)(Y,{to:`/courses/${null===(i=t.course)||void 0===i?void 0:i.id}/activities`,label:"Back",type:"submit",color:"secondary"},null,8,["to"])])]})),_:1},8,["onSubmit"])):((0,s.wg)(),(0,s.iD)("div",g,[t.isStudent?((0,s.wg)(),(0,s.iD)("div",v,[null!==(Q=this.activity)&&void 0!==Q&&Q.answers.length?((0,s.wg)(),(0,s.iD)("span",w,"Answer Submitted At: "+(0,n.zw)(null===(C=this.activity)||void 0===C?void 0:C.answers[0].submitted_date_formatted),1)):(0,s.kq)("",!0)])):(0,s.kq)("",!0),t.isTeacher?((0,s.wg)(),(0,s.j4)(T,{key:1,course:t.course,activity:t.activity},null,8,["course","activity"])):(0,s.kq)("",!0)]))])]))])}i(71);var f=i(7874),b=i(1173),q=i(2176),_=i(5977),k=i(5616),x=i(8880);const P={class:"q-pa-none"},S=(0,s.Uk)("Grading"),Z={class:"text-subtitle1 q-pa-sm"},W=(0,s.Uk)("Student"),Q=(0,s.Uk)(" Score "),C={key:0},D={key:1},I={key:2},z=(0,s.Uk)("Close"),U={class:"text-subtitle"},j=(0,s.Uk)("Activity: "),V={class:"text-subtitle"},F=(0,s.Uk)("Student: "),Y={class:"text-subtitle"},A=(0,s.Uk)("Points: "),T={class:"row items-center justify-center q-gutter-md"};function $(t,e,i,l,a,o){var r;const u=(0,s.up)("q-toolbar-title"),d=(0,s.up)("q-toolbar"),c=(0,s.up)("q-item-label"),p=(0,s.up)("q-item-section"),m=(0,s.up)("q-item"),h=(0,s.up)("q-list"),g=(0,s.up)("q-space"),v=(0,s.up)("q-tooltip"),w=(0,s.up)("q-btn"),y=(0,s.up)("q-bar"),f=(0,s.up)("q-card-section"),b=(0,s.up)("q-img"),q=(0,s.up)("PdfViewer"),_=(0,s.up)("q-input"),k=(0,s.up)("q-form"),$=(0,s.up)("q-card"),B=(0,s.up)("q-dialog"),E=(0,s.Q2)("ripple"),H=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",P,[(0,s.Wm)(d,{class:"bg-primary text-white shadow-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[S])),_:1})])),_:1}),(0,s._)("div",Z,"Points: "+(0,n.zw)(null===(r=t.activity)||void 0===r?void 0:r.points),1),(0,s.Wm)(h,{bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"q-my-xs"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[W])),_:1})])),_:1}),(0,s.Wm)(p,{side:"",top:""},{default:(0,s.w5)((()=>[Q])),_:1})])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.students,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(m,{key:e.id,class:"q-my-sm",clickable:"",onClick:i=>t.gradeActivity(e)},{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.fullname),1)])),_:2},1024),(0,s.Wm)(c,{caption:"",lines:"1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.email),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(p,{side:"",top:""},{default:(0,s.w5)((()=>{var t;return[null!==e&&void 0!==e&&e.answers&&null!==e&&void 0!==e&&null!==(t=e.answers[0])&&void 0!==t&&t.score?((0,s.wg)(),(0,s.iD)("span",C,(0,n.zw)(e.answers[0].score),1)):null!==e&&void 0!==e&&e.answers&&null!==e&&void 0!==e&&e.answers.length?((0,s.wg)(),(0,s.iD)("span",D,"Ungraded")):((0,s.wg)(),(0,s.iD)("span",I,"No Answer"))]})),_:2},1024)])),_:2},1032,["onClick"])),[[E]]))),128))])),_:1})]),(0,s.Wm)(B,{modelValue:t.dialog,"onUpdate:modelValue":e[2]||(e[2]=e=>t.dialog=e),persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{class:"bg-white text-dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{class:"bg-primary"},{default:(0,s.w5)((()=>[(0,s.Wm)(g),(0,s.wy)((0,s.Wm)(w,{class:"text-white",dense:"",flat:"",icon:"close"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{class:"bg-white text-white"},{default:(0,s.w5)((()=>[z])),_:1})])),_:1},512),[[H]])])),_:1}),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>{var e,i,l;return[(0,s._)("div",U,[j,(0,s._)("b",null,(0,n.zw)(null===(e=t.activity)||void 0===e?void 0:e.title),1)]),(0,s._)("div",V,[F,(0,s._)("b",null,(0,n.zw)(null===(i=t.student)||void 0===i?void 0:i.fullname),1)]),(0,s._)("div",Y,[A,(0,s._)("b",null,(0,n.zw)(null===(l=t.activity)||void 0===l?void 0:l.points),1)])]})),_:1}),(0,s.Wm)(f,{class:"q-pt-md"},{default:(0,s.w5)((()=>{var i;return[t.isImage(t.answerFilePath)?((0,s.wg)(),(0,s.j4)(b,{key:0,src:t.answerFilePath,"spinner-color":"red",style:{height:"470px"},fit:"contain"},null,8,["src"])):(0,s.kq)("",!0),(0,s.wy)((0,s.Wm)(q,{src:t.answerFilePath,id:`grading-${null===(i=t.student)||void 0===i?void 0:i.id}`},null,8,["src","id"]),[[x.F8,t.answerFilePath&&!t.isImage(t.answerFilePath)]]),(0,s.Wm)(k,{onSubmit:t.onSubmitScore,class:"q-gutter-md q-pt-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{filled:"",type:"number",modelValue:t.score,"onUpdate:modelValue":e[0]||(e[0]=e=>t.score=e),label:"Score *","lazy-rules":"",rules:[t=>null!==t&&""!==t||"Please enter score"]},null,8,["modelValue","rules"]),(0,s._)("div",T,[(0,s.Wm)(w,{label:"Cancel",type:"button",color:"purple",onClick:e[1]||(e[1]=e=>t.dialog=!1)}),(0,s.Wm)(w,{label:"Submit Score",type:"submit",color:"secondary"})])])),_:1},8,["onSubmit"])]})),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var B=i(4428);const E={key:0,class:"text-center"},H=(0,s.Uk)(" loading file preview... "),L={id:"viewerContainer"},M=["id"],X={class:"row items-center justify-center q-gutter-md"},O={key:0};function G(t,e,i,l,a,o){const r=(0,s.up)("q-spinner-hourglass"),u=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)(s.HY,null,[a.loading?((0,s.wg)(),(0,s.iD)("div",E,[(0,s.Wm)(r,{color:"primary",size:"2em"}),H])):(0,s.kq)("",!0),(0,s.wy)((0,s._)("div",null,[(0,s._)("div",L,[(0,s._)("canvas",{id:i.id||"canvas-pdf",style:{width:"100%"}},null,8,M)]),(0,s._)("div",X,[(0,s._)("span",null,"Page: "+(0,n.zw)(a.currentPageIndex+1)+"/"+(0,n.zw)(a.totalPagesCount),1),a.totalPagesCount>1?((0,s.wg)(),(0,s.iD)("div",O,[(0,s.Wm)(u,{label:"Prev",type:"button",color:"purple",onClick:e[0]||(e[0]=(0,x.iM)((t=>o.prevPage()),["prevent"]))}),(0,s.Wm)(u,{label:"Next",type:"submit",color:"secondary",onClick:e[1]||(e[1]=(0,x.iM)((t=>o.nextPage()),["prevent"]))})])):(0,s.kq)("",!0)])],512),[[x.F8,!a.loading]])],64)}var N=i(4341);N.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.min.js";const R={components:{},props:["src","id"],data(){return{loading:!1,currentPageIndex:0,pdf:void 0,totalPagesCount:0,canvas:null,ctx:null}},mounted(){this.canvas=document.getElementById(this.id||"canvas-pdf"),this.ctx=this.canvas.getContext("2d"),this.fetchPDF()},beforeUnmount(){this.pdf.destroy()},methods:{enablePinchZoom(){let t=0,e=0,i=0,s=1;const n=this.canvas,l=document.getElementById("viewerContainer"),a=()=>{t=e=i=0,s=1};document.addEventListener("touchstart",(s=>{s.touches.length>1?(t=(s.touches[0].pageX+s.touches[1].pageX)/2,e=(s.touches[0].pageY+s.touches[1].pageY)/2,i=Math.hypot(s.touches[1].pageX-s.touches[0].pageX,s.touches[1].pageY-s.touches[0].pageY)):i=0})),document.addEventListener("touchmove",(a=>{if(i<=0||a.touches.length<2)return;1!==a.scale&&a.preventDefault();const o=Math.hypot(a.touches[1].pageX-a.touches[0].pageX,a.touches[1].pageY-a.touches[0].pageY),r=t+l.scrollLeft,u=e+l.scrollTop;s=o/i,n.style.transform=`scale(${s})`,n.style.transformOrigin=`${r}px ${u}px`}),{passive:!1}),document.addEventListener("touchend",(o=>{if(i<=0)return;n.style.transform="none",n.style.transformOrigin="unset",this.pdf.currentScale*=s;const r=l.getBoundingClientRect(),u=t-r.left,d=e-r.top;l.scrollLeft+=u*(s-1),l.scrollTop+=d*(s-1),a()}))},nextPage(){this.currentPageIndex++,this.currentPageIndex>this.totalPagesCount-1&&(this.currentPageIndex=this.totalPagesCount-1),this.render()},prevPage(){this.currentPageIndex--,this.currentPageIndex<0&&(this.currentPageIndex=0),this.render()},fetchPDF(){this.loading=!0,N.getDocument(this.src).promise.then((t=>{this.pdf=t,this.totalPagesCount=t.numPages,this.render()}))},render(){this.pdf.getPage(this.currentPageIndex+1).then((t=>{this.drawPage(t)}))},drawPage(t){let e=t.getViewport({scale:1.5});this.canvas.height=e.height,this.canvas.width=e.width,t.render({canvasContext:this.ctx,viewport:e}),this.enablePinchZoom(),this.loading=!1}}};var K=i(3282),J=i(2165),tt=i(7518),et=i.n(tt);R.render=G;const it=R;et()(R,"components",{QSpinnerHourglass:K.Z,QBtn:J.Z});const st=(0,s.aZ)({name:"Grading",components:{PdfViewer:it},data(){return{dialog:!1,loading:!1,student:null,score:null}},props:{activity:{type:Object,default:()=>{}},course:{type:Object,default:()=>{}}},computed:{...(0,f.Se)({students:"allStudents",isTeacher:"isTeacher"}),answerFilePath(){return this.student.answers[0]["file"]}},mounted(){this.fetchStudents()},methods:{gradeActivity(t){var e;if(this.student=t,null!==t&&void 0!==t&&t.answers.length){var i;if(null!==(e=this.student)&&void 0!==e&&e.answers.length)this.score=null===(i=this.student)||void 0===i?void 0:i.answers[0].score;this.dialog=!0}else this.$q.dialog({message:"This student hasn't submitted an answer yet!"})},onSubmitScore(){var t;this.loading=!0,_.Z.submitScore(null===(t=this.activity)||void 0===t?void 0:t.id,this.student.answers[0].id,{score:this.score}).then((t=>{this.dialog=!1,this.student=null,this.score=null,this.loading=!1,this.fetchStudents()})).catch((t=>{this.loading=!1}))},fetchStudents(){var t;this.loading=!0,B.Z.all({by_course:1,course_id:this.$route.params.id,activity_id:null===(t=this.activity)||void 0===t?void 0:t.id}).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},isImage(t){return null!=t.match(/\.(jpeg|jpg|gif|png)$/)}}});var nt=i(9570),lt=i(3747),at=i(7011),ot=i(3414),rt=i(2035),ut=i(2350),dt=i(6778),ct=i(151),pt=i(846),mt=i(2025),ht=i(8870),gt=i(5589),vt=i(4027),wt=i(5269),yt=i(4689),ft=i(6489),bt=i(677);st.render=$;const qt=st;et()(st,"components",{QToolbar:nt.Z,QToolbarTitle:lt.Z,QList:at.Z,QItem:ot.Z,QItemSection:rt.Z,QItemLabel:ut.Z,QDialog:dt.Z,QCard:ct.Z,QBar:pt.Z,QSpace:mt.Z,QBtn:J.Z,QTooltip:ht.Z,QCardSection:gt.Z,QImg:vt.Z,QForm:wt.Z,QInput:yt.Z}),et()(st,"directives",{Ripple:ft.Z,ClosePopup:bt.Z});const _t=(0,s.aZ)({name:"ActivityView",data(){return{loading:!1,activity:null,file:null,content:null,pdfSrc:null,resubmit:0}},components:{Grading:qt,PdfViewer:it},computed:{...(0,f.Se)({activities:"allActivities",course:"currentCourse",isStudent:"isStudent",isTeacher:"isTeacher"}),allowSubmission(){var t;return!(null!==(t=this.activity)&&void 0!==t&&t.answers.length)||1===this.resubmit}},mounted(){const t=[_.Z.show(this.$route.params.activity_id)];this.course||t.push(q.Z.show(this.$route.params.id)),this.loading=!0,Promise.all(t).then((t=>{this.activity=t[0]||null,this.course||b["default"].dispatch("setCurrentCourse",t[1]),this.loading=!1})).catch((t=>{this.loading=!1}))},methods:{onSubmit(){const t=new FormData;t.append("file",this.file),t.append("content",this.content),t.append("submission_type",this.activity.submission_type),_.Z.submitAnswer(this.$route.params.activity_id,t).then((t=>{this.activity.answers=t.answers||null,this.loading=!1})).catch((t=>{this.loading=!1}))},formatDate(t){return k.ZP.formatDate(t,"YYYY-MM-DD HH:mm:ss")}}});var kt=i(1007),xt=i(1481),Pt=i(5926),St=i(4974),Zt=i(4554),Wt=i(9991);_t.render=y;const Qt=_t;et()(_t,"components",{QPageSticky:kt.Z,QBreadcrumbs:xt.Z,QBreadcrumbsEl:Pt.Z,QSpinnerHourglass:K.Z,QForm:wt.Z,QFile:St.Z,QIcon:Zt.Z,QEditor:Wt.Z,QBtn:J.Z})},4663:()=>{},172:()=>{},2001:()=>{},3779:()=>{},6558:()=>{},2258:()=>{}}]);